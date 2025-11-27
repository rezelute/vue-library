import { useUserStore } from '../stores/userStore';
export { useUserStore };
declare const _default: {
    useUserStore: import('../../node_modules/pinia/dist/pinia').StoreDefinition<"userStore", Pick<{
        isFetchingSession: import('vue').Ref<boolean, boolean>;
        isSignedIn: import('vue').Ref<boolean, boolean>;
        updateAuth: () => Promise<void>;
    }, "isFetchingSession" | "isSignedIn">, Pick<{
        isFetchingSession: import('vue').Ref<boolean, boolean>;
        isSignedIn: import('vue').Ref<boolean, boolean>;
        updateAuth: () => Promise<void>;
    }, never>, Pick<{
        isFetchingSession: import('vue').Ref<boolean, boolean>;
        isSignedIn: import('vue').Ref<boolean, boolean>;
        updateAuth: () => Promise<void>;
    }, "updateAuth">>;
};
export default _default;
