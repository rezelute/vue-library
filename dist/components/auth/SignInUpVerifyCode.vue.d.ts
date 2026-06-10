type __VLS_Props = {
    /** Override the card title */
    title?: string;
    /** Length of the OTP code */
    otpLength?: number;
    /** Server-side error message (e.g. invalid or expired code) */
    errorMessage?: string;
    isSubmittingCode: boolean;
    isResendingCode: boolean;
};
declare var __VLS_22: {}, __VLS_47: {};
type __VLS_Slots = {} & {
    description?: (props: typeof __VLS_22) => any;
} & {
    'resend-description'?: (props: typeof __VLS_47) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, any, string, import('vue').PublicProps, any, {
    title: string;
    otpLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
