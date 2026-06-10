type __VLS_Props = {
    label?: string;
    placeholder?: string;
    isSubmitClicked?: boolean;
    isRequired?: boolean;
    showSkeleton?: boolean;
    inputId?: string;
};
type __VLS_ModelProps = {
    "name": string | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:name": (value: string | null) => any;
} & {
    "validity-changed": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onValidity-changed"?: ((value: boolean) => any) | undefined;
    "onUpdate:name"?: ((value: string | null) => any) | undefined;
}>, {
    showSkeleton: boolean;
    isSubmitClicked: boolean;
    isRequired: boolean;
    inputId: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
