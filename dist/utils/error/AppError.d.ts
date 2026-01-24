export declare class AppError extends Error {
    type: string;
    messageSummary?: string;
    details?: any;
    cause?: Error;
    constructor({ type, messageSummary, message, details, cause, }: {
        type: string;
        messageSummary?: string;
        message: string;
        details?: any;
        cause?: Error;
    });
}
