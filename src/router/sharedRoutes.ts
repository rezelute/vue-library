import SignupPage from "../pages/AuthPage.vue";
import SigninPage from "../pages/AuthPage.vue";
import GoodbyePage from "../pages/GoodbyePage.vue";
import AccountPage from "../pages/AccountPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

export const sharedRoutes = [
   {
      path: "/account",
      name: "account",
      component: () => import("../pages/AccountPage.vue"),
      // component: AccountPage,
      meta: { requiresAuth: true },
   },
   {
      path: "/goodbye",
      name: "goodbye",
      // component: GoodbyePage,
      component: () => import("../pages/GoodbyePage.vue"),
   },
   {
      path: "/signup",
      name: "signup",
      // component: SignupPage,
      component: () => import("../pages/AuthPage.vue"),
      props: { authType: "signup" },
      meta: { guestOnly: true },
   },
   {
      path: "/signin",
      name: "signin",
      // component: SigninPage,
      component: () => import("../pages/AuthPage.vue"),
      props: { authType: "signin" },
      meta: { guestOnly: true },
   },
   {
      path: "/error",
      name: "error",
      // component: ErrorPage,
      component: () => import("../pages/ErrorPage.vue"),
   },
   {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      // component: NotFoundPage,
      component: () => import("../pages/NotFoundPage.vue"),
   },
];
