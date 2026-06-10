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
declare var __VLS_16: {}, __VLS_18: {}, __VLS_20: {}, __VLS_30: {
    isSubmitClicked: any;
};
type __VLS_Slots = {} & {
    notice?: (props: typeof __VLS_16) => any;
} & {
    'oauth-providers'?: (props: typeof __VLS_18) => any;
} & {
    description?: (props: typeof __VLS_20) => any;
} & {
    'additional-fields'?: (props: typeof __VLS_30) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{}>, {
    title: string;
    loading: boolean;
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
