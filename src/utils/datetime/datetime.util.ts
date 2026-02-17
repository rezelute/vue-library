/**
 * Formats a date/time value as a UK-style string: DD/MM/YYYY HH:mm
 * @param input - A Date object or a value convertible to Date (e.g., string, number). Defaults to now.
 * @returns Formatted date string in UK format.
 */
export function formatDateTimeUK(input: Date | string | number = new Date()): string {
   const date = input instanceof Date ? input : new Date(input)

   if (isNaN(date.getTime())) {
      throw new Error("Invalid date provided to formatDateTimeUK")
   }

   return date
      .toLocaleString("en-GB", {
         day: "2-digit",
         month: "2-digit",
         year: "numeric",
         hour: "2-digit",
         minute: "2-digit",
         hour12: false,
      })
      .replace(",", "")
}

export default {
   formatDateTimeUK,
}
