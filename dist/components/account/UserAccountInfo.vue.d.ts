type __VLS_Props = {
    apiDomain: string;
    updatedEmailDate?: Date | null;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    getUserIdError: (...args: any[]) => void;
    getUserEmailError: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onGetUserIdError?: ((...args: any[]) => any) | undefined;
    onGetUserEmailError?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
