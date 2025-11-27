import "vue-router";
import { u as n } from "../userStore-DKVnZxFM.js";
function u(r) {
  r.beforeEach(async (a, i, e) => {
    const t = n();
    await t.updateAuth(), a.meta.requiresAuth && !t.isSignedIn ? e("/signin") : a.meta.guestOnly && t.isSignedIn ? e("/home") : e();
  });
}
const s = [
  {
    path: "/goodbye",
    name: "goodbye"
    // component: GoodbyePage,
  },
  {
    path: "/signup",
    name: "signup",
    props: { authType: "signup" },
    meta: { guestOnly: !0 }
    // component: SignupPage,
  },
  {
    path: "/signin",
    name: "signin",
    props: { authType: "signin" },
    meta: { guestOnly: !0 }
    // component: SigninPage,
  },
  {
    path: "/account",
    name: "account",
    // component: AccountPage,
    meta: { requiresAuth: !0 }
  },
  {
    path: "/profile-check",
    name: "profile-check",
    meta: { requiresAuth: !0 }
  },
  {
    path: "/profile",
    name: "profile",
    meta: { requiresAuth: !0 }
  },
  {
    path: "/error",
    name: "error"
    // component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found"
    // component: NotFoundPage,
  }
], h = {
  sharedRoutes: s,
  setupAuthGuard: u
};
export {
  h as default,
  u as setupAuthGuard,
  s as sharedRoutes
};
