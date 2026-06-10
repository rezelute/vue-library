import { formatDateTime, formatDateTimeUK, formatRelativeDate } from "./datetime/datetime.util"
import { AppError } from "./error/AppError"
import normalizeError from "./error/normalizeError.util"
import { capitalizeFirstLetter } from "./strings/strings.util"
import { getRedirectTargetWithQueryParams } from "./url"

// named import - import { normalizeError, AppError } from "@/utils"
export {
   getRedirectTargetWithQueryParams,
   normalizeError,
   AppError,
   formatDateTimeUK,
   capitalizeFirstLetter,
   formatRelativeDate,
   formatDateTime,
}

// default import - import Utils from "@/utils"
export default {
   getRedirectTargetWithQueryParams,
   normalizeError,
   AppError,
   formatRelativeDate,
   formatDateTime,
   capitalizeFirstLetter,
}
