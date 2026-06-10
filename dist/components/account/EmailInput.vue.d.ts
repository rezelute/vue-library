type __VLS_Props = {
    isSubmitClicked: boolean;
    labelText?: string;
};
type __VLS_ModelProps = {
    "email": string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:email": (value: string) => any;
} & {
    "validity-changed": (value: boolean) => any;
    "enter-pressed": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onValidity-changed"?: ((value: boolean) => any) | undefined;
    "onEnter-pressed"?: (() => any) | undefined;
    "onUpdate:email"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
