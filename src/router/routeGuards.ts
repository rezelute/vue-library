import { type Router } from "vue-router";
import { useUserStore } from "@/stores/userStore";

export function setupAuthGuard(router: Router) {
   router.beforeEach(async (to, from, next) => {
      const userStore = useUserStore();
      await userStore.updateAuth();

      if (to.meta.requiresAuth && !userStore.isSignedIn) {
         next("/signin");
      } else if (to.meta.guestOnly && userStore.isSignedIn) {
         next("/home");
      } else {
         next();
      }
   });
}
