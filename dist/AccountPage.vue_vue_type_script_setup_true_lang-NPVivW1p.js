import { defineComponent as h, createElementBlock as f, openBlock as i, createElementVNode as e, normalizeClass as S, renderSlot as D, ref as y, createBlock as g, unref as a, withCtx as u, withModifiers as W, createVNode as m, isRef as A, createTextVNode as $, toDisplayString as w, onMounted as E, createCommentVNode as x } from "vue";
import { u as k, s as _, a as P, b as C, _ as V, c as q } from "./PageLoader.vue_vue_type_script_setup_true_lang-CTVBwhFg.js";
import { S as T } from "./index-CLtI3W90.js";
import { useRoute as N } from "vue-router";
const j = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), Y = async (d) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: d })
}), I = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), L = async (d) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": d,
    "Content-Type": "application/json"
  }
}), v = { getEmail: j, changeEmail: Y, requestDelete: I, deleteAccount: L }, O = { class: "flex flex-col items-center gap-4 text-center" }, B = { class: "flex flex-col gap-2" }, b = /* @__PURE__ */ h({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(d) {
    return (r, c) => (i(), f("div", O, [
      e("i", {
        class: S([r.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      e("div", B, [
        D(r.$slots, "default")
      ])
    ]));
  }
}), M = {
  key: 0,
  class: "spacing-elements"
}, U = { class: "text-primary break-all px-2" }, z = /* @__PURE__ */ h({
  __name: "ChangeEmail",
  setup(d) {
    const { addToast: r, toastContent: c } = k(), l = y(""), o = y(!1);
    async function s() {
      try {
        const n = await v.changeEmail(l.value);
        if (!n.ok)
          throw o.value = !1, new Error(`Error changing email: ${n.status} - ${n.statusText}`);
        o.value = !0;
      } catch (n) {
        o.value = !1, r({
          severity: "error",
          summary: c.error.somethingWentWrong.summary,
          detail: c.error.somethingWentWrong.detail,
          error: n
        });
      }
    }
    return (n, t) => (i(), g(a(_), null, {
      title: u(() => t[1] || (t[1] = [
        e("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: u(() => [
        a(o) ? (i(), g(b, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: u(() => [
            e("p", null, [
              t[5] || (t[5] = e("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              e("strong", U, w(a(l)), 1),
              t[6] || (t[6] = e("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (i(), f("div", M, [
          t[4] || (t[4] = e("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          e("form", {
            onSubmit: W(s, ["prevent"]),
            class: "spacing-form"
          }, [
            t[3] || (t[3] = e("label", {
              for: "email",
              class: "label"
            }, "Enter your new email", -1)),
            m(a(P), {
              modelValue: a(l),
              "onUpdate:modelValue": t[0] || (t[0] = (p) => A(l) ? l.value = p : null),
              type: "email",
              id: "email",
              name: "email",
              required: ""
            }, null, 8, ["modelValue"]),
            m(a(C), { type: "submit" }, {
              default: u(() => t[2] || (t[2] = [
                $("Change email")
              ])),
              _: 1
            })
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), R = {
  key: 0,
  class: "spacing-elements"
}, F = /* @__PURE__ */ h({
  __name: "DeleteAccount",
  setup(d) {
    const { addToast: r, toastContent: c } = k(), l = y(!1);
    async function o() {
      try {
        const s = await v.requestDelete();
        if (s.ok)
          l.value = !0;
        else
          throw new Error(`Error requesting account deletion: ${s.status} - ${s.statusText}`);
      } catch (s) {
        l.value = !1, r({
          severity: "error",
          summary: c.error.somethingWentWrong.summary,
          detail: c.error.somethingWentWrong.detail,
          error: s
        });
      }
    }
    return (s, n) => (i(), g(a(_), null, {
      title: u(() => n[0] || (n[0] = [
        e("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: u(() => [
        a(l) ? (i(), g(b, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: u(() => n[3] || (n[3] = [
            e("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (i(), f("div", R, [
          n[2] || (n[2] = e("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          m(a(C), {
            type: "button",
            onClick: o
          }, {
            default: u(() => n[1] || (n[1] = [
              $("Send deletion email")
            ])),
            _: 1
          })
        ]))
      ]),
      _: 1
    }));
  }
}), G = { class: "spacing-elements" }, J = {
  key: 0,
  class: "flex flex-row gap-2"
}, X = { class: "text-primary break-all" }, H = {
  key: 1,
  class: "flex flex-row gap-2"
}, K = { class: "text-primary break-all px-2" }, Q = /* @__PURE__ */ h({
  __name: "YourAccount",
  setup(d) {
    const r = y(""), c = y("");
    E(() => {
      l();
    });
    async function l() {
      try {
        r.value = await T.getUserId();
        const o = await v.getEmail();
        if (!o.ok)
          throw new Error(`Error getting user email: ${o.status} - ${o.statusText}`);
        const s = await o.json();
        c.value = s.email;
      } catch (o) {
        console.error("Error fetching user email: ", o);
      }
    }
    return (o, s) => (i(), g(a(_), null, {
      title: u(() => s[0] || (s[0] = [
        e("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: u(() => [
        e("div", G, [
          a(r) ? (i(), f("div", J, [
            s[1] || (s[1] = e("div", null, "ID:", -1)),
            e("div", null, [
              e("code", X, w(a(r)), 1)
            ])
          ])) : x("", !0),
          a(c) ? (i(), f("div", H, [
            s[2] || (s[2] = e("div", null, "Email:", -1)),
            e("div", null, [
              e("strong", K, w(a(c)), 1)
            ])
          ])) : x("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Z = { class: "container flex items-center justify-center w-full" }, ee = {
  key: 0,
  class: "max-w-xl"
}, te = { class: "spacing-page-sections" }, oe = { key: 1 }, se = { class: "spacing-elements p-12" }, ie = /* @__PURE__ */ h({
  __name: "AccountPage",
  setup(d) {
    const { addToast: r } = k(), c = N(), l = y(!1), o = y(c.query.del_token);
    E(() => {
      o.value && s();
    });
    async function s() {
      const n = "We failed to delete your account!", t = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const p = await v.deleteAccount(o.value);
        if (!p.ok)
          throw new Error(`Error deleting account: ${p.status} - ${p.statusText}`);
        await T.signOut(), window.location.href = "/goodbye";
      } catch (p) {
        r({
          severity: "error",
          summary: n,
          detail: t,
          life: 0,
          error: { msg: "Failed to delete user account", error: p }
        }), o.value = void 0;
      }
    }
    return (n, t) => (i(), g(V, { isLoading: a(l) }, {
      default: u(() => [
        e("div", Z, [
          a(o) ? (i(), f("div", oe, [
            m(a(_), null, {
              content: u(() => [
                e("div", se, [
                  t[1] || (t[1] = e("p", { class: "text-2xl" }, "Deleting your account...", -1)),
                  m(a(q))
                ])
              ]),
              _: 1
            })
          ])) : (i(), f("div", ee, [
            t[0] || (t[0] = e("h1", { class: "h1 text-color" }, "Your account", -1)),
            e("div", te, [
              m(Q),
              m(z),
              m(F)
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  ie as _
};
