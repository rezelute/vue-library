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
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        description?(_: {}): any;
        'resend-description'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    codeSubmit: (...args: any[]) => void;
    codeResendSubmit: (...args: any[]) => void;
    restartFlow: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCodeSubmit?: ((...args: any[]) => any) | undefined;
    onCodeResendSubmit?: ((...args: any[]) => any) | undefined;
    onRestartFlow?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    otpLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
