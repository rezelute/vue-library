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
      component: AccountPage,
      meta: { requiresAuth: true },
   },
   {
      path: "/goodbye",
      name: "goodbye",
      component: GoodbyePage,
   },
   {
      path: "/signup",
      name: "signup",
      component: SignupPage,
      props: { authType: "signup" },
      meta: { guestOnly: true },
   },
   {
      path: "/signin",
      name: "signin",
      component: SigninPage,
      props: { authType: "signin" },
      meta: { guestOnly: true },
   },
   {
      path: "/error",
      name: "error",
      component: ErrorPage,
   },
   {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
   },
];
