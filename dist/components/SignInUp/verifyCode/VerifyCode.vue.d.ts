type __VLS_Props = {
    pageAuthType: "Sign in" | "Sign up";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    verificationCodeSuccess: (...args: any[]) => void;
    resendCodeSuccess: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onVerificationCodeSuccess?: ((...args: any[]) => any) | undefined;
    onResendCodeSuccess?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
