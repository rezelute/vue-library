// errors/AppError.ts
export class AppError extends Error {
   type: string // error type identifier
   messageSummary?: string // short summary for logging
   details?: any // additional error details (object or array)
   cause?: Error // stack trace of the original error

   constructor({
      type,
      messageSummary,
      message,
      details,
      cause,
   }: {
      type: string
      messageSummary?: string // short summary for logging
      message: string // human-readable error message
      details?: any
      cause?: Error
   }) {
      super(message)
      this.name = "AppError"
      this.type = type
      this.details = details
      this.cause = cause
      this.messageSummary = messageSummary
   }
}
