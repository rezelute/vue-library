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
   const millsecSinceInput = new Date(input).getTime() - Date.now()
   const absoluteMs = Math.abs(millsecSinceInput)

   const relativeFormatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

   const formatAs = (divisor: number, unit: Intl.RelativeTimeFormatUnit) =>
      relativeFormatter.format(Math.round(millsecSinceInput / divisor), unit)

   if (absoluteMs < MINUTE) return formatAs(1_000, "second")
   if (absoluteMs < HOUR) return formatAs(MINUTE, "minute")
   if (absoluteMs < DAY) return formatAs(HOUR, "hour")
   if (absoluteMs < WEEK) return formatAs(DAY, "day")
   if (absoluteMs < MONTH) return formatAs(WEEK, "week")
   if (absoluteMs < YEAR) return formatAs(MONTH, "month")
   return formatAs(YEAR, "year")
}

// -----------------------------------------

export default {
   formatDateTime,
   formatDateTimeUK,
   formatRelativeDate,
}
