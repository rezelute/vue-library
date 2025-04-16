// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import { sharedRoutes } from "./sharedRoutes";
import { setupAuthGuard } from "./routeGuards";
import LandingPage from "../pages/LandingPage.vue";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "landing",
         component: LandingPage,
      },
      {
         path: "/home",
         name: "home",
         component: HomePage,
         meta: { requiresAuth: true },
      },
      ...sharedRoutes,
   ],
});

setupAuthGuard(router);
export default router;
