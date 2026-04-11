interface SiteNavigationProps {
    /**
     * Controls how the nav is positioned in the document.
     * - 'fixed'  → pinned to top, requires spacer (handled internally)
     * - 'sticky' → sticks on scroll, no spacer needed (in normal flow)
     * - 'static' → normal document flow, no spacer needed
     */
    position?: "fixed" | "sticky" | "static";
    navHeight?: string;
    /** Show a border beneath the nav */
    border?: boolean;
    /** Add a subtle drop shadow (alternative or complement to border) */
    shadow?: boolean;
    /** Frosted glass effect — applies backdrop-blur + semi-transparent bg */
    frosted?: boolean;
    /** Constrain inner content to a max-width container, or go full-bleed */
    contained?: boolean;
    drawerWidth?: string;
}
type __VLS_Props = SiteNavigationProps;
declare function closeDrawer(): void;
declare const __VLS_defaults: {
    drawerOpen: boolean;
};
type __VLS_PublicProps = {
    "drawerOpen"?: typeof __VLS_defaults['drawerOpen'];
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
        'action-items'?(_: {}): any;
        'drawer-logo'?(_: {}): any;
        'menu-items'?(_: {
            close: typeof closeDrawer;
        }): any;
        'menu-footer'?(_: {
            close: typeof closeDrawer;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:drawerOpen": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:drawerOpen"?: ((value: boolean) => any) | undefined;
}>, {
    position: "fixed" | "sticky" | "static";
    navHeight: string;
    border: boolean;
    shadow: boolean;
    frosted: boolean;
    contained: boolean;
    drawerWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
