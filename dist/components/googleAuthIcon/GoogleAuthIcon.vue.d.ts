type __VLS_Props = {
    authType?: "Sign up" | "Sign in";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    googleSignInError: (...args: any[]) => void;
    googleSignInSuccess: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onGoogleSignInError?: ((...args: any[]) => any) | undefined;
    onGoogleSignInSuccess?: ((...args: any[]) => any) | undefined;
}>, {
    authType: "Sign up" | "Sign in";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
