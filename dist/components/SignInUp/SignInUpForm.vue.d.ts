type __VLS_Props = {
    pageAuthType: "sign-in" | "sign-up";
    isSignupLoading: boolean;
    isSignupInviteOnly?: boolean;
    enableThirdPartyAuth?: {
        useGoogle?: boolean;
    };
};
type __VLS_PublicProps = {
    "email": string;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'additional-fields'?(_: {
            isSubmitClicked: boolean;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    submit: (...args: any[]) => void;
    googleSignIn: (...args: any[]) => void;
    "update:email": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:email"?: ((value: string) => any) | undefined;
    onGoogleSignIn?: ((...args: any[]) => any) | undefined;
}>, {
    pageAuthType: "sign-in" | "sign-up";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
