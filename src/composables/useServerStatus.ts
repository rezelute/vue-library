import { ref, type Ref } from "vue";

export default function useServerStatus() {
   const connectionReady = ref(false);

   async function checkServer(isLoading: Ref<boolean>) {
      try {
         isLoading.value = true;

         const response = await fetch(import.meta.env.VITE_API_DOMAIN, { method: "HEAD" });
         if (!response.ok) throw new Error("Server is down");

         connectionReady.value = true;
      } catch (error) {
         console.error(error);
         connectionReady.value = false;
      } finally {
         isLoading.value = false;
      }
   }

   return { checkServer, connectionReady };
}
