type __VLS_Props = {
    pageAuthType: "Sign in" | "Sign up";
    apiDomain: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    googleSignInError: (...args: any[]) => void;
    sendCodeSuccess: (...args: any[]) => void;
    signupStartError: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onGoogleSignInError?: ((...args: any[]) => any) | undefined;
    onSendCodeSuccess?: ((...args: any[]) => any) | undefined;
    onSignupStartError?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
