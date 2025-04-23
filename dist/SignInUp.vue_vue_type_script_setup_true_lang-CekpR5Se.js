import { defineComponent as x, createElementBlock as T, openBlock as m, createElementVNode as l, createStaticVNode as B, toDisplayString as b, ref as g, createBlock as I, unref as d, withCtx as v, createVNode as w, withModifiers as A, isRef as N, resolveComponent as M, mergeProps as U, Fragment as $, renderList as L, renderSlot as V, normalizeClass as F, computed as E, createCommentVNode as W, createTextVNode as S, onMounted as G } from "vue";
import { t as P, p as h, B as z, i as K } from "./index-CLtI3W90.js";
import { _ as q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { s as O, a as R, b as k, d as j, u as H, _ as J } from "./PageLoader.vue_vue_type_script_setup_true_lang-CTVBwhFg.js";
import { useRoute as Q, useRouter as Y } from "vue-router";
const X = { class: "gsi-material-button-content-wrapper" }, Z = { class: "gsi-material-button-icon" }, ee = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, te = { class: "gsi-material-button-contents" }, ne = { style: { display: "none" } }, oe = /* @__PURE__ */ x({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  setup(n) {
    async function e() {
      try {
        const t = await P.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(t);
      } catch (t) {
        console.error("Google sign in: ", t.message);
      }
    }
    return (t, o) => (m(), T("button", {
      class: "gsi-material-button",
      onClick: e
    }, [
      o[1] || (o[1] = l("div", { class: "gsi-material-button-state" }, null, -1)),
      l("div", X, [
        l("div", Z, [
          (m(), T("svg", ee, o[0] || (o[0] = [
            B('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-521170bf></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-521170bf></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-521170bf></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-521170bf></path><path fill="none" d="M0 0h48v48H0z" data-v-521170bf></path>', 5)
          ])))
        ]),
        l("span", te, b(t.authType) + " with Google", 1),
        l("span", ne, b(t.authType) + " with Google", 1)
      ])
    ]));
  }
}), se = /* @__PURE__ */ q(oe, [["__scopeId", "data-v-521170bf"]]), re = { class: "h1" }, ie = /* @__PURE__ */ x({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess"],
  setup(n, { emit: e }) {
    const t = e, o = g(!1), r = g("mytestemail1235667@gmail.com");
    async function i() {
      try {
        o.value = !0;
        const c = await h.createCode({
          email: r.value,
          shouldTryLinkingWithSessionUser: !1,
          // If true, SuperTokens will attempt to link the passwordless code to an existing session user
          userContext: {}
          // Optionally include user context
        });
        console.log("Create code response: ", c), c.status === "SIGN_IN_UP_NOT_ALLOWED" || t("sendCodeSuccess", !0);
      } catch {
        t("sendCodeSuccess", !1);
      } finally {
        o.value = !1;
      }
    }
    return (c, a) => (m(), I(d(O), { class: "max-w-xl p-12 w-full" }, {
      title: v(() => [
        l("h1", re, b(c.pageAuthType), 1)
      ]),
      content: v(() => [
        l("section", null, [
          w(se, { authType: c.pageAuthType }, null, 8, ["authType"]),
          a[3] || (a[3] = l("div", { class: "flex items-center my-10" }, [
            l("hr", { class: "flex-1 border-gray-300" }),
            l("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            l("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          l("form", {
            onSubmit: a[1] || (a[1] = A(() => {
            }, ["prevent"])),
            class: "spacing-form"
          }, [
            a[2] || (a[2] = l("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            w(d(R), {
              modelValue: d(r),
              "onUpdate:modelValue": a[0] || (a[0] = (s) => N(r) ? r.value = s : null),
              placeholder: "Email",
              required: ""
            }, null, 8, ["modelValue"]),
            w(d(k), {
              label: c.pageAuthType,
              submit: "submit",
              onClick: i,
              loading: d(o)
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var ae = ({ dt: n }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: ${n("inputotp.gap")};
}

.p-inputotp-input {
    text-align: center;
    width: ${n("inputotp.input.width")};
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${n("inputotp.input.sm.width")};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${n("inputotp.input.lg.width")};
}
`, le = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, ue = z.extend({
  name: "inputotp",
  style: ae,
  classes: le
}), pe = {
  name: "BaseInputOtp",
  extends: j,
  props: {
    readonly: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    length: {
      type: Number,
      default: 4
    },
    mask: {
      type: Boolean,
      default: !1
    },
    integerOnly: {
      type: Boolean,
      default: !1
    }
  },
  style: ue,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, _ = {
  name: "InputOtp",
  extends: pe,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur"],
  data: function() {
    return {
      tokens: []
    };
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler: function(e) {
        this.tokens = e ? e.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function(e) {
      return {
        value: this.tokens[e]
      };
    },
    getTemplateEvents: function(e) {
      var t = this;
      return {
        input: function(r) {
          return t.onInput(r, e);
        },
        keydown: function(r) {
          return t.onKeyDown(r);
        },
        focus: function(r) {
          return t.onFocus(r);
        },
        blur: function(r) {
          return t.onBlur(r);
        },
        paste: function(r) {
          return t.onPaste(r);
        }
      };
    },
    onInput: function(e, t) {
      this.tokens[t] = e.target.value, this.updateModel(e), e.inputType === "deleteContentBackward" ? this.moveToPrev(e) : (e.inputType === "insertText" || e.inputType === "deleteContentForward" || K() && e instanceof CustomEvent) && this.moveToNext(e);
    },
    updateModel: function(e) {
      var t = this.tokens.join("");
      this.writeValue(t, e), this.$emit("change", {
        originalEvent: e,
        value: t
      });
    },
    moveToPrev: function(e) {
      var t = this.findPrevInput(e.target);
      t && (t.focus(), t.select());
    },
    moveToNext: function(e) {
      var t = this.findNextInput(e.target);
      t && (t.focus(), t.select());
    },
    findNextInput: function(e) {
      var t = e.nextElementSibling;
      if (t)
        return t.nodeName === "INPUT" ? t : this.findNextInput(t);
    },
    findPrevInput: function(e) {
      var t = e.previousElementSibling;
      if (t)
        return t.nodeName === "INPUT" ? t : this.findPrevInput(t);
    },
    onFocus: function(e) {
      e.target.select(), this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.$emit("blur", e);
    },
    onClick: function(e) {
      setTimeout(function() {
        return e.target.select();
      }, 1);
    },
    onKeyDown: function(e) {
      if (!(e.ctrlKey || e.metaKey))
        switch (e.code) {
          case "ArrowLeft":
            this.moveToPrev(e), e.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
            e.preventDefault();
            break;
          case "Backspace":
            e.target.value.length === 0 && (this.moveToPrev(e), e.preventDefault());
            break;
          case "ArrowRight":
            this.moveToNext(e), e.preventDefault();
            break;
          case "Enter":
          case "NumpadEnter":
          case "Tab":
            break;
          default:
            (this.integerOnly && !(e.code !== "Space" && Number(e.key) >= 0 && Number(e.key) <= 9) || this.tokens.join("").length >= this.length && e.code !== "Delete") && e.preventDefault();
            break;
        }
    },
    onPaste: function(e) {
      var t = e.clipboardData.getData("text");
      if (t.length) {
        var o = t.substring(0, this.length);
        (!this.integerOnly || !isNaN(o)) && (this.tokens = o.split(""), this.updateModel(e));
      }
      e.preventDefault();
    }
  },
  computed: {
    inputMode: function() {
      return this.integerOnly ? "numeric" : "text";
    },
    inputType: function() {
      return this.mask ? "password" : "text";
    }
  },
  components: {
    OtpInputText: R
  }
};
function de(n, e, t, o, r, i) {
  var c = M("OtpInputText");
  return m(), T("div", U({
    class: n.cx("root")
  }, n.ptmi("root")), [(m(!0), T($, null, L(n.length, function(a) {
    return V(n.$slots, "default", {
      key: a,
      events: i.getTemplateEvents(a - 1),
      attrs: i.getTemplateAttrs(a - 1),
      index: a
    }, function() {
      return [w(c, {
        value: r.tokens[a - 1],
        type: i.inputType,
        class: F(n.cx("pcInputText")),
        name: n.$formName,
        inputmode: i.inputMode,
        variant: n.variant,
        readonly: n.readonly,
        disabled: n.disabled,
        size: n.size,
        invalid: n.invalid,
        tabindex: n.tabindex,
        unstyled: n.unstyled,
        onInput: function(f) {
          return i.onInput(f, a - 1);
        },
        onFocus: e[0] || (e[0] = function(s) {
          return i.onFocus(s);
        }),
        onBlur: e[1] || (e[1] = function(s) {
          return i.onBlur(s);
        }),
        onPaste: e[2] || (e[2] = function(s) {
          return i.onPaste(s);
        }),
        onKeydown: e[3] || (e[3] = function(s) {
          return i.onKeyDown(s);
        }),
        onClick: e[4] || (e[4] = function(s) {
          return i.onClick(s);
        }),
        pt: n.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
_.render = de;
const ce = { class: "spacing-form" }, fe = {
  key: 0,
  class: "validation"
}, me = { class: "spacing-form" }, ge = /* @__PURE__ */ x({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: ["verificationCodeSuccess", "resendCodeSuccess"],
  setup(n, { emit: e }) {
    const t = e, { addToast: o, toastContent: r } = H(), i = g(""), c = g(!1), a = g(0), s = g(0), f = E(() => `Invalid code. You have ${s.value - a.value} attempts left.`);
    async function y() {
      const C = "Error processing your OTP code", u = "Please try again later.";
      c.value = !1;
      try {
        const p = await h.consumeCode({ userInputCode: i.value });
        p.status === "OK" ? (await h.clearLoginAttemptInfo(), p.createdNewRecipeUser && p.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), window.location.href = "/home") : (console.error("Submit code: ", p), p.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (a.value = p.failedCodeInputAttemptCount, s.value = p.maximumCodeInputAttempts, c.value = !0) : (await h.clearLoginAttemptInfo(), o({
          severity: "error",
          summary: C,
          detail: u,
          error: p
        }), t("verificationCodeSuccess", !1)));
      } catch (p) {
        o({
          severity: "error",
          summary: r.error.somethingWentWrong.summary,
          detail: r.error.somethingWentWrong.detail,
          error: p
        }), t("verificationCodeSuccess", !1);
      }
    }
    async function D() {
      const C = "Resend OTP failed", u = "Please try again later.";
      try {
        const p = await h.resendCode();
        console.log("resend code response: ", p), p.status === "RESTART_FLOW_ERROR" ? (await h.clearLoginAttemptInfo(), o({
          severity: "error",
          summary: C,
          detail: u,
          error: p
        }), t("resendCodeSuccess", !1)) : (o({
          severity: "success",
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        }), t("resendCodeSuccess", !0));
      } catch (p) {
        o({
          severity: "error",
          summary: r.error.somethingWentWrong.summary,
          detail: r.error.somethingWentWrong.detail,
          error: p
        }), t("resendCodeSuccess", !1);
      }
    }
    return (C, u) => (m(), I(d(O), { class: "max-w-xl p-12 w-full mx-auto" }, {
      title: v(() => u[2] || (u[2] = [
        l("h1", { class: "h1 mt-0" }, "Input validation code", -1)
      ])),
      content: v(() => [
        l("form", {
          onSubmit: u[1] || (u[1] = A(() => {
          }, ["prevent"])),
          class: "spacing-groups"
        }, [
          l("div", ce, [
            u[4] || (u[4] = l("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
            w(d(_), {
              length: 6,
              class: "w-50",
              modelValue: d(i),
              "onUpdate:modelValue": u[0] || (u[0] = (p) => N(i) ? i.value = p : null),
              type: "text",
              placeholder: "Input email code",
              required: ""
            }, null, 8, ["modelValue"]),
            d(c) ? (m(), T("p", fe, b(d(f)), 1)) : W("", !0),
            w(d(k), {
              class: "w-fit",
              type: "submit",
              onClick: y
            }, {
              default: v(() => u[3] || (u[3] = [
                S("Submit code")
              ])),
              _: 1
            })
          ]),
          l("div", me, [
            u[6] || (u[6] = l("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
            w(d(k), {
              class: "w-fit",
              type: "button",
              onClick: D
            }, {
              default: v(() => u[5] || (u[5] = [
                S("Resend code")
              ])),
              _: 1
            })
          ])
        ], 32)
      ]),
      _: 1
    }));
  }
}), Te = /* @__PURE__ */ x({
  __name: "SignInUp",
  setup(n) {
    const e = Q(), t = Y(), o = g(!0), r = g(!1);
    G(async () => {
      r.value = !!await c(), t.currentRoute.value.query.thirdPartyId === "google" && await a();
    });
    const i = E(() => e.name === "signup" ? "Sign up" : "Sign in");
    async function c() {
      o.value = !0;
      try {
        const s = await h.getLoginAttemptInfo();
        return s && console.info("Code already sent: ", s), s !== void 0;
      } catch {
      } finally {
        o.value = !1;
      }
    }
    async function a() {
      try {
        o.value = !0;
        const s = await P.signInAndUp();
        s.status === "OK" ? (console.log("handleGoogleCallback> ", s.user), s.createdNewRecipeUser && s.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), window.location.assign("/home")) : s.status === "SIGN_IN_UP_NOT_ALLOWED" || window.location.assign("/signin");
      } catch {
      } finally {
        o.value = !1;
      }
    }
    return (s, f) => (m(), I(J, { isLoading: d(o) }, {
      default: v(() => [
        d(r) ? (m(), I(ge, {
          key: 1,
          pageAuthType: d(i),
          onVerificationCodeSuccess: f[1] || (f[1] = (y) => r.value = y),
          onResendCodeSuccess: f[2] || (f[2] = (y) => r.value = y)
        }, null, 8, ["pageAuthType"])) : (m(), I(ie, {
          key: 0,
          pageAuthType: d(i),
          onSendCodeSuccess: f[0] || (f[0] = (y) => r.value = y)
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  Te as _
};
