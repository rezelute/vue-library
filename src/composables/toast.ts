import { useToast as usePrimeToast } from "primevue/usetoast";
import toastContent from "../content/generic/toastContent";
//import { type ToastMessageOptions } from "primevue/toast";

const TOAST_CONFIG = {
   DEFAULT_LIFE: 4000,
};

export interface AddToast {
   type: unknown; // ex "unexpected", delete_account_fail ...
   severity: "info" | "warn" | "error" | "success";
   summary: string;
   detail?: string;
   life?: number;
   json?: any;
}

export default function useToast() {
   const toast = usePrimeToast();

   function addToast({ severity, summary, detail, life = TOAST_CONFIG.DEFAULT_LIFE, json = null }: AddToast) {
      toast.add({
         severity,
         summary,
         detail,
         life,
      });

      // log to sentry
      if (severity === "error" && json) {
         console.error(json);
      }
   }

   return { addToast, toastContent };
}
