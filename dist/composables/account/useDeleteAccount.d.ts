import { EmitNotify } from '../../types';
export declare function useDeleteAccount(apiDomain: string): {
    deleteAccount: (token: string, onSuccess: () => void, onError: (payload: EmitNotify) => void) => Promise<void>;
};
