import { EmitNotify } from '../../types';
export declare function useUpdateEmail(apiDomain: string): {
    updateEmail: (token: string, onSuccess: (payload: EmitNotify) => void, onError: (payload: EmitNotify) => void) => Promise<void>;
};
