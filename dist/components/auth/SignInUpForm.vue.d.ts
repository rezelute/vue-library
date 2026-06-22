type __VLS_Slots = {
    notice?: () => unknown;
    "oauth-providers"?: () => unknown;
    description?: () => unknown;
    "additional-fields"?: (props: {
        isSubmitClicked: boolean;
    }) => unknown;
};
type __VLS_Props = {
    /** Override the card title */
    title?: string;
    /** Override the submit button label */
    submitText?: string;
    loading?: boolean;
};
type __VLS_ModelProps = {
    "email": string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:email": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:email"?: ((value: string) => any) | undefined;
}>, {
    loading: boolean;
    title: string;
    submitText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
