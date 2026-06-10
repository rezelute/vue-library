const defaultOptions: Intl.DateTimeFormatOptions = {
   day: "2-digit",
   month: "2-digit",
   year: "numeric",
   hour: "2-digit",
   minute: "2-digit",
   hour12: false,
}

export function formatDateTime(
   input: Date | string | number = new Date(),
   locale: string = "en-GB",
   options: Intl.DateTimeFormatOptions = defaultOptions
): string {
   const date = input instanceof Date ? input : new Date(input)

   if (isNaN(date.getTime())) {
      throw new Error("Invalid date provided to formatDateTime")
   }

   return date.toLocaleString(locale, options)
}

/** @deprecated use formatDateTime */
export const formatDateTimeUK = (input: Date | string | number = new Date()) =>
   formatDateTime(input)

// -----------------------------------------

const MINUTE = 60_000 // 60 * 1000 = 60_000
const HOUR = 3_600_000 // 60 * 60 * 1000 = 3_600_000
const DAY = 86_400_000 // 24 * 60 * 60 * 1000 = 86_400_000
const WEEK = 7 * DAY // 7 * 24 * 60 * 60 * 1000 = 604_800_000
const MONTH = 30 * DAY // 30 * 24 * 60 * 60 * 1000 = 2_592_000_000
const YEAR = 365 * DAY // 365 * 24 * 60 * 60 * 1000 = 31_536_000_000

export function formatRelativeDate(
   input: Date | string | number,
   locale: string = "en-GB"
): string {
   // negative = past ("3 days ago"), positive = future ("in 3 days")
   const diff = new Date(input).getTime() - Date.now() // milliseconds
   // strip sign so thresholds work the same for past and future
   const abs = Math.abs(diff)
   // numeric: "auto" gives "yesterday"/"tomorrow" instead of "-1 days"/"1 day"
   const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

   // < 60s → "5 seconds ago"
   if (abs < MINUTE) return rtf.format(Math.round(diff / 1000), "second")
   // < 60m → "12 minutes ago"
   if (abs < HOUR) return rtf.format(Math.round(diff / MINUTE), "minute")
   // < 24h → "3 hours ago"
   if (abs < DAY) return rtf.format(Math.round(diff / HOUR), "hour")
   // < 7d → "yesterday", "3 days ago"
   if (abs < WEEK) return rtf.format(Math.round(diff / DAY), "day")
   // < 30d → "last week", "3 weeks ago"
   if (abs < MONTH) return rtf.format(Math.round(diff / WEEK), "week")
   // < 365d → "last month", "3 months ago"
   if (abs < YEAR) return rtf.format(Math.round(diff / MONTH), "month")
   // → "last year", "3 years ago"
   return rtf.format(Math.round(diff / YEAR), "year")
}

// -----------------------------------------

export default {
   formatDateTime,
   formatDateTimeUK,
   formatRelativeDate,
}
