type __VLS_Props = {
    pageAuthType: "Sign in" | "Sign up";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    verificationCodeSuccess: (...args: any[]) => void;
    verificationCodeError: (...args: any[]) => void;
    resendCodeSuccess: (...args: any[]) => void;
    resendCodeError: (...args: any[]) => void;
    restartFlow: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onVerificationCodeSuccess?: ((...args: any[]) => any) | undefined;
    onVerificationCodeError?: ((...args: any[]) => any) | undefined;
    onResendCodeSuccess?: ((...args: any[]) => any) | undefined;
    onResendCodeError?: ((...args: any[]) => any) | undefined;
    onRestartFlow?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
