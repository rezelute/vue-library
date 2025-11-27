type __VLS_Props = {
    deleteToken?: string | undefined;
    updateEmailToken?: string | undefined;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            id: string;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    changeEmailRequestError: (...args: any[]) => void;
    changeEmailActionSuccess: (...args: any[]) => void;
    deleteAccountRequestError: (...args: any[]) => void;
    deleteAccountRequestSuccess: (...args: any[]) => void;
    changeEmailRequestSuccess: (...args: any[]) => void;
    changeEmailActionError: (...args: any[]) => void;
    deleteAccountError: (...args: any[]) => void;
    deleteAccountSuccess: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChangeEmailRequestError?: ((...args: any[]) => any) | undefined;
    onChangeEmailActionSuccess?: ((...args: any[]) => any) | undefined;
    onDeleteAccountRequestError?: ((...args: any[]) => any) | undefined;
    onDeleteAccountRequestSuccess?: ((...args: any[]) => any) | undefined;
    onChangeEmailRequestSuccess?: ((...args: any[]) => any) | undefined;
    onChangeEmailActionError?: ((...args: any[]) => any) | undefined;
    onDeleteAccountError?: ((...args: any[]) => any) | undefined;
    onDeleteAccountSuccess?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
