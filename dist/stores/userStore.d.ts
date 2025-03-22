declare const useUserStore: import('pinia').StoreDefinition<"userStore", Pick<{
    isSignedIn: globalThis.Ref<boolean, boolean>;
    updateAuth: () => Promise<void>;
    theme: globalThis.Ref<string, string>;
    toggleTheme: () => void;
}, "theme" | "isSignedIn">, Pick<{
    isSignedIn: globalThis.Ref<boolean, boolean>;
    updateAuth: () => Promise<void>;
    theme: globalThis.Ref<string, string>;
    toggleTheme: () => void;
}, never>, Pick<{
    isSignedIn: globalThis.Ref<boolean, boolean>;
    updateAuth: () => Promise<void>;
    theme: globalThis.Ref<string, string>;
    toggleTheme: () => void;
}, "updateAuth" | "toggleTheme">>;
export { useUserStore };
