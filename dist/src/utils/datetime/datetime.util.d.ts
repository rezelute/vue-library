export declare function formatDateTime(input?: Date | string | number, locale?: string, options?: Intl.DateTimeFormatOptions): string;
/** @deprecated use formatDateTime */
export declare const formatDateTimeUK: (input?: Date | string | number) => string;
export declare function formatRelativeDate(input: Date | string | number, locale?: string): string;
declare const _default: {
    formatDateTime: typeof formatDateTime;
    formatDateTimeUK: (input?: Date | string | number) => string;
    formatRelativeDate: typeof formatRelativeDate;
};
export default _default;
