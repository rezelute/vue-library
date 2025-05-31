import { useId as Nt, mergeProps as f, createElementBlock as g, openBlock as p, createElementVNode as h, renderSlot as A, createTextVNode as q, toDisplayString as D, resolveComponent as W, resolveDirective as Me, withDirectives as fe, createBlock as x, resolveDynamicComponent as J, withCtx as w, createCommentVNode as S, normalizeClass as U, defineComponent as V, createVNode as C, unref as L, ref as E, computed as ce, Fragment as Q, renderList as Ke, normalizeStyle as Bt, normalizeProps as Rt, guardReactiveProps as Ut, Teleport as Wt, Transition as Ue, onMounted as ue, vShow as Gt, mergeModels as Ye, useModel as qt, withModifiers as We, watch as gt, createStaticVNode as Ht, getCurrentInstance as Je } from "vue";
import { r as se, B as M, i as le, a as vt, b as z, t as oe, g as yt, s as te, c as G, d as $t, f as ae, e as Zt, h as Z, j as Xt, k as Qe, P as Te, l as Yt, m as Fe, n as et, o as tt, p as Ae, q as Jt, u as Qt, v as en, w as tn, x as Oe, y as Ge, z as R, A as It, C as nn, E as on, D as rn, F as an, G as sn, H as un } from "../index-DHZ7F1AQ.js";
import { S as qe, t as kt, p as ne } from "../supertokens-vendor-CLachTEX.js";
import { u as ln } from "../userStore-CZj93k-U.js";
import { t as j } from "../toastContent-Cmim6dQm.js";
import { v as De } from "../validation-D8iWPwER.js";
import { useRoute as dn, useRouter as cn } from "vue-router";
function re(...e) {
  if (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (!o)
        continue;
      const r = typeof o;
      if (r === "string" || r === "number")
        t.push(o);
      else if (r === "object") {
        const i = Array.isArray(o) ? [re(...o)] : Object.entries(o).map(([s, u]) => u ? s : void 0);
        t = i.length ? t.concat(i.filter((s) => !!s)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
var Ee = {};
function mn(e = "pui_id_") {
  return Object.hasOwn(Ee, e) || (Ee[e] = 0), Ee[e]++, `${e}${Ee[e]}`;
}
function pn() {
  let e = [];
  const t = (s, u, a = 999) => {
    const l = r(s, u, a), d = l.value + (l.key === s ? 0 : a) + 1;
    return e.push({ key: s, value: d }), d;
  }, n = (s) => {
    e = e.filter((u) => u.value !== s);
  }, o = (s, u) => r(s).value, r = (s, u, a = 0) => [...e].reverse().find((l) => !0) || { key: s, value: a }, i = (s) => s && parseInt(s.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (s, u, a) => {
      u && (u.style.zIndex = String(t(s, !0, a)));
    },
    clear: (s) => {
      s && (n(i(s)), s.style.zIndex = "");
    },
    getCurrent: (s) => o(s)
  };
}
var de = pn(), ie = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function fn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = Nt();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var nt = M.extend({
  name: "common"
});
function be(e) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, be(e);
}
function bn(e) {
  return xt(e) || hn(e) || wt(e) || St();
}
function hn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function me(e, t) {
  return xt(e) || gn(e, t) || wt(e, t) || St();
}
function St() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wt(e, t) {
  if (e) {
    if (typeof e == "string") return ot(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ot(e, t) : void 0;
  }
}
function ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function gn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, s, u = [], a = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        a = !1;
      } else for (; !(a = (o = i.call(n)).done) && (u.push(o.value), u.length !== t); a = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!a && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw r;
      }
    }
    return u;
  }
}
function xt(e) {
  if (Array.isArray(e)) return e;
}
function it(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? it(Object(n), !0).forEach(function(o) {
      pe(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function pe(e, t, n) {
  return (t = vn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vn(e) {
  var t = yn(e, "string");
  return be(t) == "symbol" ? t : t + "";
}
function yn(e, t) {
  if (be(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (be(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var H = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        te.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, n) {
        var o = this;
        te.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
          return o._loadScopedThemeStyles(t);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, n, o, r, i, s, u, a, l, d, c, m = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, v = m ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, b = m ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = b || v) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (i = r.onBeforeCreate) === null || i === void 0 || i.call(r);
    var $ = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, k = $ ? (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.pt) === null || u === void 0 ? void 0 : u.originalValue : void 0, O = $ ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 ? void 0 : l.pt;
    (d = O || k) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = fn(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = ae(Zt(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = P({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        n == null || n(), o == null || o();
      }
    },
    _mergeProps: function(t) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return $t(t) ? t.apply(void 0, o) : f.apply(void 0, o);
    },
    _load: function() {
      ie.isStyleNameLoaded("base") || (M.loadCSS(this.$styleOptions), this._loadGlobalStyles(), ie.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !ie.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (nt.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), ie.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      z(t) && M.load(t, P({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!G.isStyleNameLoaded("common")) {
          var o, r, i = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, s = i.primitive, u = i.semantic, a = i.global, l = i.style;
          M.load(s == null ? void 0 : s.css, P({
            name: "primitive-variables"
          }, this.$styleOptions)), M.load(u == null ? void 0 : u.css, P({
            name: "semantic-variables"
          }, this.$styleOptions)), M.load(a == null ? void 0 : a.css, P({
            name: "global-variables"
          }, this.$styleOptions)), M.loadStyle(P({
            name: "global-style"
          }, this.$styleOptions), l), G.setLoadedStyleName("common");
        }
        if (!G.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, m, v, b = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, $ = b.css, k = b.style;
          (m = this.$style) === null || m === void 0 || m.load($, P({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (v = this.$style) === null || v === void 0 || v.loadStyle(P({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), k), G.setLoadedStyleName(this.$style.name);
        }
        if (!G.isStyleNameLoaded("layer-order")) {
          var O, F, K = (O = this.$style) === null || O === void 0 || (F = O.getLayerOrderThemeCSS) === null || F === void 0 ? void 0 : F.call(O);
          M.load(K, P({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), G.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var n, o, r, i = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, s = i.css, u = (r = this.$style) === null || r === void 0 ? void 0 : r.load(s, P({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = u.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      ie.clearLoadedStyleNames(), te.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      te.off("theme:change", this._loadCoreStyles), te.off("theme:change", this._load), te.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var n;
      return this[t] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[t]);
    },
    _getOptionValue: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return yt(t, n, o);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(o) && !!r[o.split(".")[0]], u = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, a = u.mergeSections, l = a === void 0 ? !0 : a, d = u.mergeProps, c = d === void 0 ? !1 : d, m = i ? s ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, v = s ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, P(P({}, r), {}, {
        global: m || {}
      })), b = this._getPTDatasets(o);
      return l || !l && v ? c ? this._mergeProps(c, m, v, b) : P(P(P({}, m), v), b) : P(P({}, v), b);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return f(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", i = o === "root" && z((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return o !== "transition" && P(P({}, o === "root" && P(P(pe({}, "".concat(r, "name"), oe(i ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), i && pe({}, "".concat(r, "extend"), oe(this.$.type.name))), {}, pe({}, "".concat(this.$attrSelector), ""))), {}, pe({}, "".concat(r, "section"), oe(o)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return le(t) || vt(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(u) {
        var a, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(u) : u, c = oe(o), m = oe(n.$name);
        return (a = l ? c !== m ? d == null ? void 0 : d[c] : void 0 : d == null ? void 0 : d[c]) !== null && a !== void 0 ? a : d;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: i(t.originalValue),
        value: i(t.value)
      } : i(t, !0);
    },
    _usePT: function(t, n, o, r) {
      var i = function($) {
        return n($, o, r);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var s, u = t._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, a = u.mergeSections, l = a === void 0 ? !0 : a, d = u.mergeProps, c = d === void 0 ? !1 : d, m = i(t.originalValue), v = i(t.value);
        return m === void 0 && v === void 0 ? void 0 : le(v) ? v : le(m) ? m : l || !l && v ? c ? this._mergeProps(c, m, v) : P(P({}, m), v) : v;
      }
      return i(t);
    },
    _useGlobalPT: function(t, n, o) {
      return this._usePT(this.globalPT, t, n, o);
    },
    _useDefaultPT: function(t, n, o) {
      return this._usePT(this.defaultPT, t, n, o);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, P(P({}, this.$params), n));
    },
    ptmi: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = f(this.$_attrsWithoutPT, this.ptm(n, o));
      return r != null && r.hasOwnProperty("id") && ((t = r.id) !== null && t !== void 0 || (r.id = this.$id)), r;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, P({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, P(P({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var r = this._getOptionValue(this.$style.inlineStyles, t, P(P({}, this.$params), o)), i = this._getOptionValue(nt.inlineStyles, t, P(P({}, this.$params), o));
        return [i, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return se(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, P({}, n.$params)) || se(o, P({}, n.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var t, n = Object.keys(((t = this.$.vnode) === null || t === void 0 ? void 0 : t.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var r = me(o, 1), i = r[0];
        return n == null ? void 0 : n.includes(i);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return P(P({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = me(t, 1), o = n[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(t, n) {
        var o = me(n, 2), r = o[0], i = o[1], s = r.split(":"), u = bn(s), a = u.slice(1);
        return a == null || a.reduce(function(l, d, c, m) {
          return !l[d] && (l[d] = c === m.length - 1 ? i : {}), l[d];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = me(t, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(t, n) {
        var o = me(n, 2), r = o[0], i = o[1];
        return t[r] = i, t;
      }, {});
    }
  }
}, $n = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, In = M.extend({
  name: "baseicon",
  css: $n
});
function he(e) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, he(e);
}
function rt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rt(Object(n), !0).forEach(function(o) {
      kn(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function kn(e, t, n) {
  return (t = Sn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Sn(e) {
  var t = wn(e, "string");
  return he(t) == "symbol" ? t : t + "";
}
function wn(e, t) {
  if (he(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (he(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _e = {
  name: "BaseIcon",
  extends: H,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: In,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = Z(this.label);
      return at(at({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, Pt = {
  name: "SpinnerIcon",
  extends: _e
};
function xn(e, t, n, o, r, i) {
  return p(), g("svg", f({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [h("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Pt.render = xn;
var Pn = ({ dt: e }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
}
`, Cn = {
  root: function(t) {
    var n = t.props, o = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": z(n.value) && String(n.value).length === 1,
      "p-badge-dot": Z(n.value) && !o.$slots.default,
      "p-badge-sm": n.size === "small",
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warn": n.severity === "warn",
      "p-badge-danger": n.severity === "danger",
      "p-badge-secondary": n.severity === "secondary",
      "p-badge-contrast": n.severity === "contrast"
    }];
  }
}, _n = M.extend({
  name: "badge",
  style: Pn,
  classes: Cn
}), Ln = {
  name: "BaseBadge",
  extends: H,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: _n,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function ge(e) {
  "@babel/helpers - typeof";
  return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ge(e);
}
function st(e, t, n) {
  return (t = Tn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Tn(e) {
  var t = En(e, "string");
  return ge(t) == "symbol" ? t : t + "";
}
function En(e, t) {
  if (ge(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ge(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ct = {
  name: "Badge",
  extends: Ln,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return re(st(st({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, An = ["data-p"];
function On(e, t, n, o, r, i) {
  return p(), g("span", f({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [A(e.$slots, "default", {}, function() {
    return [q(D(e.value), 1)];
  })], 16, An);
}
Ct.render = On;
function ve(e) {
  "@babel/helpers - typeof";
  return ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ve(e);
}
function ut(e, t) {
  return zn(e) || jn(e, t) || Kn(e, t) || Mn();
}
function Mn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kn(e, t) {
  if (e) {
    if (typeof e == "string") return lt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lt(e, t) : void 0;
  }
}
function lt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function jn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, s, u = [], a = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(a = (o = i.call(n)).done) && (u.push(o.value), u.length !== t); a = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!a && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw r;
      }
    }
    return u;
  }
}
function zn(e) {
  if (Array.isArray(e)) return e;
}
function dt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dt(Object(n), !0).forEach(function(o) {
      Ne(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ne(e, t, n) {
  return (t = Vn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vn(e) {
  var t = Fn(e, "string");
  return ve(t) == "symbol" ? t : t + "";
}
function Fn(e, t) {
  if (ve(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ve(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var I = {
  _getMeta: function() {
    return [Qe(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], se(Qe(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var o, r, i;
    return (o = (t == null || (r = t.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: yt,
  _getPTValue: function() {
    var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var F = I._getOptionValue.apply(I, arguments);
      return le(F) || vt(F) ? {
        class: F
      } : F;
    }, l = ((t = o.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = l.mergeSections, c = d === void 0 ? !0 : d, m = l.mergeProps, v = m === void 0 ? !1 : m, b = u ? I._useDefaultPT(o, o.defaultPT(), a, i, s) : void 0, $ = I._usePT(o, I._getPT(r, o.$name), a, i, _(_({}, s), {}, {
      global: b || {}
    })), k = I._getPTDatasets(o, i);
    return c || !c && $ ? v ? I._mergeProps(o, v, b, $, k) : _(_(_({}, b), $), k) : _(_({}, $), k);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return _(_({}, n === "root" && Ne({}, "".concat(o, "name"), oe(t.$name))), {}, Ne({}, "".concat(o, "section"), oe(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(s) {
      var u, a = o ? o(s) : s, l = oe(n);
      return (u = a == null ? void 0 : a[l]) !== null && u !== void 0 ? u : a;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: r(t.originalValue),
      value: r(t.value)
    } : r(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, s = function(k) {
      return o(k, r, i);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var u, a = n._usept || ((u = t.$primevueConfig) === null || u === void 0 ? void 0 : u.ptOptions) || {}, l = a.mergeSections, d = l === void 0 ? !0 : l, c = a.mergeProps, m = c === void 0 ? !1 : c, v = s(n.originalValue), b = s(n.value);
      return v === void 0 && b === void 0 ? void 0 : le(b) ? b : le(v) ? v : d || !d && b ? m ? I._mergeProps(t, m, v, b) : _(_({}, v), b) : b;
    }
    return s(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return I._usePT(t, n, o, r, i);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = I._getConfig(o, r), s = {
      nonce: i == null || (t = i.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    I._loadCoreStyles(n, s), I._loadThemeStyles(n, s), I._loadScopedThemeStyles(n, s), I._removeThemeListeners(n), n.$loadStyles = function() {
      return I._loadThemeStyles(n, s);
    }, I._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!ie.isStyleNameLoaded((t = o.$style) === null || t === void 0 ? void 0 : t.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var i;
      M.loadCSS(r), (i = o.$style) === null || i === void 0 || i.loadCSS(r), ie.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, n, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled() || (r == null || (t = r.theme) === null || t === void 0 ? void 0 : t.call(r)) === "none")) {
      if (!G.isStyleNameLoaded("common")) {
        var s, u, a = ((s = r.$style) === null || s === void 0 || (u = s.getCommonTheme) === null || u === void 0 ? void 0 : u.call(s)) || {}, l = a.primitive, d = a.semantic, c = a.global, m = a.style;
        M.load(l == null ? void 0 : l.css, _({
          name: "primitive-variables"
        }, i)), M.load(d == null ? void 0 : d.css, _({
          name: "semantic-variables"
        }, i)), M.load(c == null ? void 0 : c.css, _({
          name: "global-variables"
        }, i)), M.loadStyle(_({
          name: "global-style"
        }, i), m), G.setLoadedStyleName("common");
      }
      if (!G.isStyleNameLoaded((n = r.$style) === null || n === void 0 ? void 0 : n.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var v, b, $, k, O = ((v = r.$style) === null || v === void 0 || (b = v.getDirectiveTheme) === null || b === void 0 ? void 0 : b.call(v)) || {}, F = O.css, K = O.style;
        ($ = r.$style) === null || $ === void 0 || $.load(F, _({
          name: "".concat(r.$style.name, "-variables")
        }, i)), (k = r.$style) === null || k === void 0 || k.loadStyle(_({
          name: "".concat(r.$style.name, "-style")
        }, i), K), G.setLoadedStyleName(r.$style.name);
      }
      if (!G.isStyleNameLoaded("layer-order")) {
        var y, T, Y = (y = r.$style) === null || y === void 0 || (T = y.getLayerOrderThemeCSS) === null || T === void 0 ? void 0 : T.call(y);
        M.load(Y, _({
          name: "layer-order",
          first: !0
        }, i)), G.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = t.preset();
    if (o && t.$attrSelector) {
      var r, i, s, u = ((r = t.$style) === null || r === void 0 || (i = r.getPresetTheme) === null || i === void 0 ? void 0 : i.call(r, o, "[".concat(t.$attrSelector, "]"))) || {}, a = u.css, l = (s = t.$style) === null || s === void 0 ? void 0 : s.load(a, _({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = l.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    ie.clearLoadedStyleNames(), te.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    te.off("theme:change", t.$loadStyles), t.$loadStyles = void 0;
  },
  _hook: function(t, n, o, r, i, s) {
    var u, a, l = "on".concat(Xt(n)), d = I._getConfig(r, i), c = o == null ? void 0 : o.$instance, m = I._usePT(c, I._getPT(r == null || (u = r.value) === null || u === void 0 ? void 0 : u.pt, t), I._getOptionValue, "hooks.".concat(l)), v = I._useDefaultPT(c, d == null || (a = d.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[t], I._getOptionValue, "hooks.".concat(l)), b = {
      el: o,
      binding: r,
      vnode: i,
      prevVnode: s
    };
    m == null || m(c, b), v == null || v(c, b);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return $t(t) ? t.apply(void 0, o) : f.apply(void 0, o);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(u, a, l, d, c) {
      var m, v, b, $;
      a._$instances = a._$instances || {};
      var k = I._getConfig(l, d), O = a._$instances[t] || {}, F = Z(O) ? _(_({}, n), n == null ? void 0 : n.methods) : {};
      a._$instances[t] = _(_({}, O), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: a,
        $binding: l,
        $modifiers: l == null ? void 0 : l.modifiers,
        $value: l == null ? void 0 : l.value,
        $el: O.$el || a || void 0,
        $style: _({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: k,
        $attrSelector: (m = a.$pd) === null || m === void 0 || (m = m[t]) === null || m === void 0 ? void 0 : m.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return I._getPT(k == null ? void 0 : k.pt, void 0, function(y) {
            var T;
            return y == null || (T = y.directives) === null || T === void 0 ? void 0 : T[t];
          });
        },
        isUnstyled: function() {
          var y, T;
          return ((y = a._$instances[t]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.unstyled) !== void 0 ? (T = a._$instances[t]) === null || T === void 0 || (T = T.$binding) === null || T === void 0 || (T = T.value) === null || T === void 0 ? void 0 : T.unstyled : k == null ? void 0 : k.unstyled;
        },
        theme: function() {
          var y;
          return (y = a._$instances[t]) === null || y === void 0 || (y = y.$primevueConfig) === null || y === void 0 ? void 0 : y.theme;
        },
        preset: function() {
          var y;
          return (y = a._$instances[t]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.dt;
        },
        /* instance's methods */
        ptm: function() {
          var y, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return I._getPTValue(a._$instances[t], (y = a._$instances[t]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.pt, T, _({}, Y));
        },
        ptmo: function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return I._getPTValue(a._$instances[t], y, T, Y, !1);
        },
        cx: function() {
          var y, T, Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (y = a._$instances[t]) !== null && y !== void 0 && y.isUnstyled() ? void 0 : I._getOptionValue((T = a._$instances[t]) === null || T === void 0 || (T = T.$style) === null || T === void 0 ? void 0 : T.classes, Y, _({}, Ve));
        },
        sx: function() {
          var y, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Y ? I._getOptionValue((y = a._$instances[t]) === null || y === void 0 || (y = y.$style) === null || y === void 0 ? void 0 : y.inlineStyles, T, _({}, Ve)) : void 0;
        }
      }, F), a.$instance = a._$instances[t], (v = (b = a.$instance)[u]) === null || v === void 0 || v.call(b, a, l, d, c), a["$".concat(t)] = a.$instance, I._hook(t, u, a, l, d, c), a.$pd || (a.$pd = {}), a.$pd[t] = _(_({}, ($ = a.$pd) === null || $ === void 0 ? void 0 : $[t]), {}, {
        name: t,
        instance: a._$instances[t]
      });
    }, r = function(u) {
      var a, l, d, c = u._$instances[t], m = c == null ? void 0 : c.watch, v = function(k) {
        var O, F = k.newValue, K = k.oldValue;
        return m == null || (O = m.config) === null || O === void 0 ? void 0 : O.call(c, F, K);
      }, b = function(k) {
        var O, F = k.newValue, K = k.oldValue;
        return m == null || (O = m["config.ripple"]) === null || O === void 0 ? void 0 : O.call(c, F, K);
      };
      c.$watchersCallback = {
        config: v,
        "config.ripple": b
      }, m == null || (a = m.config) === null || a === void 0 || a.call(c, c == null ? void 0 : c.$primevueConfig), Te.on("config:change", v), m == null || (l = m["config.ripple"]) === null || l === void 0 || l.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), Te.on("config:ripple:change", b);
    }, i = function(u) {
      var a = u._$instances[t].$watchersCallback;
      a && (Te.off("config:change", a.config), Te.off("config:ripple:change", a["config.ripple"]), u._$instances[t].$watchersCallback = void 0);
    };
    return {
      created: function(u, a, l, d) {
        u.$pd || (u.$pd = {}), u.$pd[t] = {
          name: t,
          attrSelector: mn("pd")
        }, o("created", u, a, l, d);
      },
      beforeMount: function(u, a, l, d) {
        var c;
        I._loadStyles((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance, a, l), o("beforeMount", u, a, l, d), r(u);
      },
      mounted: function(u, a, l, d) {
        var c;
        I._loadStyles((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance, a, l), o("mounted", u, a, l, d);
      },
      beforeUpdate: function(u, a, l, d) {
        o("beforeUpdate", u, a, l, d);
      },
      updated: function(u, a, l, d) {
        var c;
        I._loadStyles((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance, a, l), o("updated", u, a, l, d);
      },
      beforeUnmount: function(u, a, l, d) {
        var c;
        i(u), I._removeThemeListeners((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", u, a, l, d);
      },
      unmounted: function(u, a, l, d) {
        var c;
        (c = u.$pd[t]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", u, a, l, d);
      }
    };
  },
  extend: function() {
    var t = I._getMeta.apply(I, arguments), n = ut(t, 2), o = n[0], r = n[1];
    return _({
      extend: function() {
        var s = I._getMeta.apply(I, arguments), u = ut(s, 2), a = u[0], l = u[1];
        return I.extend(a, _(_(_({}, r), r == null ? void 0 : r.methods), l));
      }
    }, I._extend(o, r));
  }
}, Dn = ({ dt: e }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`, Nn = {
  root: "p-ink"
}, Bn = M.extend({
  name: "ripple-directive",
  style: Dn,
  classes: Nn
}), Rn = I.extend({
  style: Bn
});
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
function Un(e) {
  return Hn(e) || qn(e) || Gn(e) || Wn();
}
function Wn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gn(e, t) {
  if (e) {
    if (typeof e == "string") return Be(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Be(e, t) : void 0;
  }
}
function qn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Hn(e) {
  if (Array.isArray(e)) return Be(e);
}
function Be(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function ct(e, t, n) {
  return (t = Zn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Zn(e) {
  var t = Xn(e, "string");
  return ye(t) == "symbol" ? t : t + "";
}
function Xn(e, t) {
  if (ye(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ye(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var je = Rn.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var n = this.getInk(t);
      n || (n = tn("span", ct(ct({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), t.appendChild(n), this.$el = n);
    },
    remove: function(t) {
      var n = this.getInk(t);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(t) {
      var n = this, o = t.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && Fe(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !et(r) && !tt(r)) {
          var i = Math.max(Ae(o), Jt(o));
          r.style.height = i + "px", r.style.width = i + "px";
        }
        var s = Qt(o), u = t.pageX - s.left + document.body.scrollTop - tt(r) / 2, a = t.pageY - s.top + document.body.scrollLeft - et(r) / 2;
        r.style.top = a + "px", r.style.left = u + "px", !this.isUnstyled() && en(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && Fe(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Fe(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Un(t.children).find(function(n) {
        return Yt(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Yn = ({ dt: e }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding: ${e("button.padding.y")} ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding: ${e("button.sm.padding.y")} ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding: ${e("button.lg.padding.y")} ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}
`;
function $e(e) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $e(e);
}
function X(e, t, n) {
  return (t = Jn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Jn(e) {
  var t = Qn(e, "string");
  return $e(t) == "symbol" ? t : t + "";
}
function Qn(e, t) {
  if ($e(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if ($e(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eo = {
  root: function(t) {
    var n = t.instance, o = t.props;
    return ["p-button p-component", X(X(X(X(X(X(X(X(X({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", X({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, to = M.extend({
  name: "button",
  style: Yn,
  classes: eo
}), no = {
  name: "BaseButton",
  extends: H,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: [String, Object],
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: [String, Object],
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: to,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Ie(e) {
  "@babel/helpers - typeof";
  return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ie(e);
}
function N(e, t, n) {
  return (t = oo(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function oo(e) {
  var t = io(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function io(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ie(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B = {
  name: "Button",
  extends: no,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(t) {
      var n = t === "root" ? this.ptmi : this.ptm;
      return n(t, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return f(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return Z(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return re(N(N(N(N(N(N(N(N(N(N({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return re(N(N({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return re(N(N({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Pt,
    Badge: Ct
  },
  directives: {
    ripple: je
  }
}, ro = ["data-p"], ao = ["data-p"];
function so(e, t, n, o, r, i) {
  var s = W("SpinnerIcon"), u = W("Badge"), a = Me("ripple");
  return e.asChild ? A(e.$slots, "default", {
    key: 1,
    class: U(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : fe((p(), x(J(e.as), f({
    key: 0,
    class: e.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: w(function() {
      return [A(e.$slots, "default", {}, function() {
        return [e.loading ? A(e.$slots, "loadingicon", f({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (p(), g("span", f({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (p(), x(s, f({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : A(e.$slots, "icon", f({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (p(), g("span", f({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, ro)) : S("", !0)];
        }), h("span", f({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), D(e.label || " "), 17, ao), e.badge ? (p(), x(u, {
          key: 2,
          value: e.badge,
          class: U(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : S("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
B.render = so;
var uo = ({ dt: e }) => `
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.one")};
    }
    40% {
        stroke: ${e("progressspinner.color.two")};
    }
    66% {
        stroke: ${e("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.four")};
    }
}
`, lo = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, co = M.extend({
  name: "progressspinner",
  style: uo,
  classes: lo
}), mo = {
  name: "BaseProgressSpinner",
  extends: H,
  props: {
    strokeWidth: {
      type: String,
      default: "2"
    },
    fill: {
      type: String,
      default: "none"
    },
    animationDuration: {
      type: String,
      default: "2s"
    }
  },
  style: co,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, ze = {
  name: "ProgressSpinner",
  extends: mo,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, po = ["fill", "stroke-width"];
function fo(e, t, n, o, r, i) {
  return p(), g("div", f({
    class: e.cx("root"),
    role: "progressbar"
  }, e.ptmi("root")), [(p(), g("svg", f({
    class: e.cx("spin"),
    viewBox: "25 25 50 50",
    style: i.svgStyle
  }, e.ptm("spin")), [h("circle", f({
    class: e.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: e.fill,
    "stroke-width": e.strokeWidth,
    strokeMiterlimit: "10"
  }, e.ptm("circle")), null, 16, po)], 16))], 16);
}
ze.render = fo;
const bo = {
  key: 0,
  class: "border flex flex-grow items-center justify-center w-full"
}, ho = { key: 1 }, go = /* @__PURE__ */ V({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (p(), g("div", bo, [
      q(" isLoading2 " + D(t.isLoading) + " ", 1),
      C(L(ze), { "aria-label": "Loading" }),
      C(L(B), {
        type: "button",
        onClick: n[0] || (n[0] = () => {
          console.log("hello");
        })
      }, {
        default: w(() => n[1] || (n[1] = [
          q("Send deletion email")
        ])),
        _: 1
      })
    ])) : (p(), g("div", ho, [
      A(t.$slots, "default")
    ]));
  }
}), vo = /* @__PURE__ */ V({
  __name: "ThemeToggle",
  setup(e) {
    const t = localStorage.getItem("theme") || "light", n = E(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    const o = ce(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function r() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, s) => (p(), x(L(B), {
      id: "themeToggle",
      icon: o.value,
      variant: "outlined",
      "aria-label": "Toggle theme",
      onClick: s[0] || (s[0] = (u) => r())
    }, null, 8, ["icon"]));
  }
});
var _t = {
  name: "BarsIcon",
  extends: _e
};
function yo(e, t, n, o, r, i) {
  return p(), g("svg", f({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [h("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
_t.render = yo;
var $o = ({ dt: e }) => `
.p-menubar {
    display: flex;
    align-items: center;
    background: ${e("menubar.background")};
    border: 1px solid ${e("menubar.border.color")};
    border-radius: ${e("menubar.border.radius")};
    color: ${e("menubar.color")};
    padding: ${e("menubar.padding")};
    gap: ${e("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${e("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")};
    border-radius: ${e("menubar.item.border.radius")};
    color: ${e("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("menubar.item.padding")};
    gap: ${e("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${e("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("menubar.submenu.icon.size")};
    width: ${e("menubar.submenu.icon.size")};
    height: ${e("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${e("menubar.item.active.color")};
    background: ${e("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    border-radius: ${e("menubar.submenu.border.radius")};
    box-shadow: ${e("menubar.submenu.shadow")};
    color: ${e("menubar.submenu.color")};
    flex-direction: column;
    padding: ${e("menubar.submenu.padding")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("menubar.mobile.button.size")};
    height: ${e("menubar.mobile.button.size")};
    position: relative;
    color: ${e("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("menubar.mobile.button.border.radius")};
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")}, outline-color ${e("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${e("menubar.mobile.button.hover.color")};
    background: ${e("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${e("menubar.mobile.button.focus.ring.shadow")};
    outline: ${e("menubar.mobile.button.focus.ring.width")} ${e("menubar.mobile.button.focus.ring.style")} ${e("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${e("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: ${e("menubar.submenu.padding")};
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    box-shadow: ${e("menubar.submenu.shadow")};
    border-radius: ${e("menubar.submenu.border.radius")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("menubar.submenu.mobile.indent")};
    padding-inline-end: 0;
}
`, Io = {
  submenu: function(t) {
    var n = t.instance, o = t.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, ko = {
  root: function(t) {
    var n = t.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": n.queryMatches,
      "p-menubar-mobile-active": n.mobileActive
    }];
  },
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: function(t) {
    var n = t.instance, o = t.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": n.isItemActive(o),
      "p-focus": n.isItemFocused(o),
      "p-disabled": n.isItemDisabled(o)
    }];
  },
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
}, So = M.extend({
  name: "menubar",
  style: $o,
  classes: ko,
  inlineStyles: Io
}), Lt = {
  name: "AngleDownIcon",
  extends: _e
};
function wo(e, t, n, o, r, i) {
  return p(), g("svg", f({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [h("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Lt.render = wo;
var He = {
  name: "AngleRightIcon",
  extends: _e
};
function xo(e, t, n, o, r, i) {
  return p(), g("svg", f({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [h("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
He.render = xo;
var Po = {
  name: "BaseMenubar",
  extends: H,
  props: {
    model: {
      type: Array,
      default: null
    },
    buttonProps: {
      type: null,
      default: null
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: So,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, Tt = {
  name: "MenubarSub",
  hostName: "Menubar",
  extends: H,
  emits: ["item-mouseenter", "item-click", "item-mousemove"],
  props: {
    items: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: !1
    },
    popup: {
      type: Boolean,
      default: !1
    },
    mobileActive: {
      type: Boolean,
      default: !1
    },
    templates: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    }
  },
  list: null,
  methods: {
    getItemId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key);
    },
    getItemKey: function(t) {
      return this.getItemId(t);
    },
    getItemProp: function(t, n, o) {
      return t && t.item ? se(t.item[n], o) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    getItemLabelId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key, "_label");
    },
    getPTOptions: function(t, n, o) {
      return this.ptm(o, {
        context: {
          item: t.item,
          index: n,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t),
          level: this.level
        }
      });
    },
    isItemActive: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemFocused: function(t) {
      return this.focusedItemId === this.getItemId(t);
    },
    isItemGroup: function(t) {
      return z(t.items);
    },
    onItemClick: function(t, n) {
      this.getItemProp(n, "command", {
        originalEvent: t,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: t,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(t, n) {
      this.$emit("item-mouseenter", {
        originalEvent: t,
        processedItem: n
      });
    },
    onItemMouseMove: function(t, n) {
      this.$emit("item-mousemove", {
        originalEvent: t,
        processedItem: n
      });
    },
    getAriaPosInset: function(t) {
      return t - this.calculateAriaSetSize.slice(0, t).length + 1;
    },
    getMenuItemProps: function(t, n) {
      return {
        action: f({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(t, n, "itemLink")),
        icon: f({
          class: [this.cx("itemIcon"), this.getItemProp(t, "icon")]
        }, this.getPTOptions(t, n, "itemIcon")),
        label: f({
          class: this.cx("itemLabel")
        }, this.getPTOptions(t, n, "itemLabel")),
        submenuicon: f({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(t, n, "submenuIcon"))
      };
    }
  },
  computed: {
    calculateAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(n) {
        return t.isItemVisible(n) && t.getItemProp(n, "separator");
      });
    },
    getAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(n) {
        return t.isItemVisible(n) && !t.getItemProp(n, "separator");
      }).length;
    }
  },
  components: {
    AngleRightIcon: He,
    AngleDownIcon: Lt
  },
  directives: {
    ripple: je
  }
}, Co = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], _o = ["onClick", "onMouseenter", "onMousemove"], Lo = ["href", "target"], To = ["id"], Eo = ["id"];
function Ao(e, t, n, o, r, i) {
  var s = W("MenubarSub", !0), u = Me("ripple");
  return p(), g("ul", f({
    class: n.level === 0 ? e.cx("rootList") : e.cx("submenu")
  }, n.level === 0 ? e.ptm("rootList") : e.ptm("submenu")), [(p(!0), g(Q, null, Ke(n.items, function(a, l) {
    return p(), g(Q, {
      key: i.getItemKey(a)
    }, [i.isItemVisible(a) && !i.getItemProp(a, "separator") ? (p(), g("li", f({
      key: 0,
      id: i.getItemId(a),
      style: i.getItemProp(a, "style"),
      class: [e.cx("item", {
        processedItem: a
      }), i.getItemProp(a, "class")],
      role: "menuitem",
      "aria-label": i.getItemLabel(a),
      "aria-disabled": i.isItemDisabled(a) || void 0,
      "aria-expanded": i.isItemGroup(a) ? i.isItemActive(a) : void 0,
      "aria-haspopup": i.isItemGroup(a) && !i.getItemProp(a, "to") ? "menu" : void 0,
      "aria-level": n.level + 1,
      "aria-setsize": i.getAriaSetSize,
      "aria-posinset": i.getAriaPosInset(l),
      ref_for: !0
    }, i.getPTOptions(a, l, "item"), {
      "data-p-active": i.isItemActive(a),
      "data-p-focused": i.isItemFocused(a),
      "data-p-disabled": i.isItemDisabled(a)
    }), [h("div", f({
      class: e.cx("itemContent"),
      onClick: function(c) {
        return i.onItemClick(c, a);
      },
      onMouseenter: function(c) {
        return i.onItemMouseEnter(c, a);
      },
      onMousemove: function(c) {
        return i.onItemMouseMove(c, a);
      },
      ref_for: !0
    }, i.getPTOptions(a, l, "itemContent")), [n.templates.item ? (p(), x(J(n.templates.item), {
      key: 1,
      item: a.item,
      root: n.root,
      hasSubmenu: i.getItemProp(a, "items"),
      label: i.getItemLabel(a),
      props: i.getMenuItemProps(a, l)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : fe((p(), g("a", f({
      key: 0,
      href: i.getItemProp(a, "url"),
      class: e.cx("itemLink"),
      target: i.getItemProp(a, "target"),
      tabindex: "-1",
      ref_for: !0
    }, i.getPTOptions(a, l, "itemLink")), [n.templates.itemicon ? (p(), x(J(n.templates.itemicon), {
      key: 0,
      item: a.item,
      class: U(e.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(a, "icon") ? (p(), g("span", f({
      key: 1,
      class: [e.cx("itemIcon"), i.getItemProp(a, "icon")],
      ref_for: !0
    }, i.getPTOptions(a, l, "itemIcon")), null, 16)) : S("", !0), h("span", f({
      id: i.getItemLabelId(a),
      class: e.cx("itemLabel"),
      ref_for: !0
    }, i.getPTOptions(a, l, "itemLabel")), D(i.getItemLabel(a)), 17, To), i.getItemProp(a, "items") ? (p(), g(Q, {
      key: 2
    }, [n.templates.submenuicon ? (p(), x(J(n.templates.submenuicon), {
      key: 0,
      root: n.root,
      active: i.isItemActive(a),
      class: U(e.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (p(), x(J(n.root ? "AngleDownIcon" : "AngleRightIcon"), f({
      key: 1,
      class: e.cx("submenuIcon"),
      ref_for: !0
    }, i.getPTOptions(a, l, "submenuIcon")), null, 16, ["class"]))], 64)) : S("", !0)], 16, Lo)), [[u]])], 16, _o), i.isItemVisible(a) && i.isItemGroup(a) ? (p(), x(s, {
      key: 0,
      id: i.getItemId(a) + "_list",
      menuId: n.menuId,
      role: "menu",
      style: Bt(e.sx("submenu", !0, {
        processedItem: a
      })),
      focusedItemId: n.focusedItemId,
      items: a.items,
      mobileActive: n.mobileActive,
      activeItemPath: n.activeItemPath,
      templates: n.templates,
      level: n.level + 1,
      "aria-labelledby": i.getItemLabelId(a),
      pt: e.pt,
      unstyled: e.unstyled,
      onItemClick: t[0] || (t[0] = function(d) {
        return e.$emit("item-click", d);
      }),
      onItemMouseenter: t[1] || (t[1] = function(d) {
        return e.$emit("item-mouseenter", d);
      }),
      onItemMousemove: t[2] || (t[2] = function(d) {
        return e.$emit("item-mousemove", d);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : S("", !0)], 16, Co)) : S("", !0), i.isItemVisible(a) && i.getItemProp(a, "separator") ? (p(), g("li", f({
      key: 1,
      id: i.getItemId(a),
      class: [e.cx("separator"), i.getItemProp(a, "class")],
      style: i.getItemProp(a, "style"),
      role: "separator",
      ref_for: !0
    }, e.ptm("separator")), null, 16, Eo)) : S("", !0)], 64);
  }), 128))], 16);
}
Tt.render = Ao;
var Et = {
  name: "Menubar",
  extends: Po,
  inheritAttrs: !1,
  emits: ["focus", "blur"],
  matchMediaListener: null,
  data: function() {
    return {
      mobileActive: !1,
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItemPath: function(t) {
      z(t) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && de.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(t, n) {
      return t ? se(t[n]) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemGroup: function(t) {
      return z(this.getItemProp(t, "items"));
    },
    isItemSeparator: function(t) {
      return this.getItemProp(t, "separator");
    },
    getProccessedItemLabel: function(t) {
      return t ? this.getItemLabel(t.item) : void 0;
    },
    isProccessedItemGroup: function(t) {
      return t && z(t.items);
    },
    toggle: function(t) {
      var n = this;
      this.mobileActive ? (this.mobileActive = !1, de.clear(this.menubar), this.hide()) : (this.mobileActive = !0, de.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
        n.show();
      }, 1)), this.bindOutsideClickListener(), t.preventDefault();
    },
    show: function() {
      R(this.menubar);
    },
    hide: function(t, n) {
      var o = this;
      this.mobileActive && (this.mobileActive = !1, setTimeout(function() {
        R(o.$refs.menubutton);
      }, 0)), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && R(this.menubar), this.dirty = !1;
    },
    onFocus: function(t) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }, this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", t);
    },
    onKeyDown: function(t) {
      var n = t.metaKey || t.ctrlKey;
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onArrowRightKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Space":
          this.onSpaceKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(t);
          break;
        case "Escape":
          this.onEscapeKey(t);
          break;
        case "Tab":
          this.onTabKey(t);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && It(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t, n) {
      var o = t.processedItem, r = t.isFocus;
      if (!Z(o)) {
        var i = o.index, s = o.key, u = o.level, a = o.parentKey, l = o.items, d = z(l), c = this.activeItemPath.filter(function(m) {
          return m.parentKey !== a && m.parentKey !== s;
        });
        d && c.push(o), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: a
        }, d && (this.dirty = !0), r && R(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onItemClick: function(t) {
      var n = t.originalEvent, o = t.processedItem, r = this.isProccessedItemGroup(o), i = Z(o.parent), s = this.isSelected(o);
      if (s) {
        var u = o.index, a = o.key, l = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(m) {
          return a !== m.key && a.startsWith(m.key);
        }), this.focusedItemInfo = {
          index: u,
          level: l,
          parentKey: d
        }, this.dirty = !i, R(this.menubar);
      } else if (r)
        this.onItemChange(t);
      else {
        var c = i ? o : this.activeItemPath.find(function(m) {
          return m.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, c ? c.index : -1), this.mobileActive = !1, R(this.menubar);
      }
    },
    onItemMouseEnter: function(t) {
      this.dirty && this.onItemChange(t, "hover");
    },
    onItemMouseMove: function(t) {
      this.focused && this.changeFocusedItemIndex(t, t.processedItem.index);
    },
    menuButtonClick: function(t) {
      this.toggle(t);
    },
    menuButtonKeydown: function(t) {
      (t.code === "Enter" || t.code === "NumpadEnter" || t.code === "Space") && this.menuButtonClick(t);
    },
    onArrowDownKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = n ? Z(n.parent) : null;
      if (o) {
        var r = this.isProccessedItemGroup(n);
        r && (this.onItemChange({
          originalEvent: t,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowRightKey(t));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(t, i);
      }
      t.preventDefault();
    },
    onArrowUpKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = Z(o.parent);
      if (r) {
        var i = this.isProccessedItemGroup(o);
        if (i) {
          this.onItemChange({
            originalEvent: t,
            processedItem: o
          }), this.focusedItemInfo = {
            index: -1,
            parentKey: o.key
          };
          var s = this.findLastItemIndex();
          this.changeFocusedItemIndex(t, s);
        }
      } else {
        var u = this.activeItemPath.find(function(l) {
          return l.key === o.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: u ? u.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(t), this.activeItemPath = this.activeItemPath.filter(function(l) {
            return l.parentKey !== n.focusedItemInfo.parentKey;
          });
        else {
          var a = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(t, a);
        }
      }
      t.preventDefault();
    },
    onArrowLeftKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = o ? this.activeItemPath.find(function(s) {
        return s.key === o.parentKey;
      }) : null;
      if (r)
        this.onItemChange({
          originalEvent: t,
          processedItem: r
        }), this.activeItemPath = this.activeItemPath.filter(function(s) {
          return s.parentKey !== n.focusedItemInfo.parentKey;
        }), t.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onArrowRightKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = n ? this.activeItemPath.find(function(s) {
        return s.key === n.parentKey;
      }) : null;
      if (o) {
        var r = this.isProccessedItemGroup(n);
        r && (this.onItemChange({
          originalEvent: t,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowDownKey(t));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onHomeKey: function(t) {
      this.changeFocusedItemIndex(t, this.findFirstItemIndex()), t.preventDefault();
    },
    onEndKey: function(t) {
      this.changeFocusedItemIndex(t, this.findLastItemIndex()), t.preventDefault();
    },
    onEnterKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = ae(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && ae(n, 'a[data-pc-section="itemlink"]');
        o ? o.click() : n && n.click();
        var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      t.preventDefault();
    },
    onSpaceKey: function(t) {
      this.onEnterKey(t);
    },
    onEscapeKey: function(t) {
      if (this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(t, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      t.preventDefault();
    },
    onTabKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
        !o && this.onItemChange({
          originalEvent: t,
          processedItem: n
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var o = t.container && !t.container.contains(n.target), r = !(t.target && (t.target === n.target || t.target.contains(n.target)));
        o && r && t.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function(n) {
        Ge() || t.hide(n, !0), t.mobileActive = !1;
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var t = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          t.queryMatches = n.matches, t.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(t) {
      var n;
      return this.isValidItem(t) && ((n = this.getProccessedItemLabel(t)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(t) {
      return !!t && !this.isItemDisabled(t.item) && !this.isItemSeparator(t.item) && this.isItemVisible(t.item);
    },
    isValidSelectedItem: function(t) {
      return this.isValidItem(t) && this.isSelected(t);
    },
    isSelected: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    findFirstItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var t = this;
      return Oe(this.visibleItems, function(n) {
        return t.isValidItem(n);
      });
    },
    findNextItemIndex: function(t) {
      var n = this, o = t < this.visibleItems.length - 1 ? this.visibleItems.slice(t + 1).findIndex(function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o + t + 1 : t;
    },
    findPrevItemIndex: function(t) {
      var n = this, o = t > 0 ? Oe(this.visibleItems.slice(0, t), function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o : t;
    },
    findSelectedItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findFirstItemIndex() : t;
    },
    findLastFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findLastItemIndex() : t;
    },
    searchItems: function(t, n) {
      var o = this;
      this.searchValue = (this.searchValue || "") + n;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(s) {
        return o.isItemMatched(s);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(s) {
        return o.isItemMatched(s);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(s) {
        return o.isItemMatched(s);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = t !== -1 ? "".concat(this.$id, "_").concat(t) : this.focusedItemId, o = ae(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = [];
      return t && t.forEach(function(u, a) {
        var l = (i !== "" ? i + "_" : "") + a, d = {
          item: u,
          index: a,
          level: o,
          key: l,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(u.items, o + 1, d, l), s.push(d);
      }), s;
    },
    containerRef: function(t) {
      this.container = t;
    },
    menubarRef: function(t) {
      this.menubar = t ? t.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var t = this, n = this.activeItemPath.find(function(o) {
        return o.key === t.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(z(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: Tt,
    BarsIcon: _t
  }
};
function ke(e) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ke(e);
}
function mt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mt(Object(n), !0).forEach(function(o) {
      Oo(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Oo(e, t, n) {
  return (t = Mo(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mo(e) {
  var t = Ko(e, "string");
  return ke(t) == "symbol" ? t : t + "";
}
function Ko(e, t) {
  if (ke(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ke(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jo = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function zo(e, t, n, o, r, i) {
  var s = W("BarsIcon"), u = W("MenubarSub");
  return p(), g("div", f({
    ref: i.containerRef,
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.start ? (p(), g("div", f({
    key: 0,
    class: e.cx("start")
  }, e.ptm("start")), [A(e.$slots, "start")], 16)) : S("", !0), A(e.$slots, e.$slots.button ? "button" : "menubutton", {
    id: e.$id,
    class: U(e.cx("button")),
    toggleCallback: function(l) {
      return i.menuButtonClick(l);
    }
  }, function() {
    var a;
    return [e.model && e.model.length > 0 ? (p(), g("a", f({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: e.cx("button"),
      "aria-haspopup": !!(e.model.length && e.model.length > 0),
      "aria-expanded": r.mobileActive,
      "aria-controls": e.$id,
      "aria-label": (a = e.$primevue.config.locale.aria) === null || a === void 0 ? void 0 : a.navigation,
      onClick: t[0] || (t[0] = function(l) {
        return i.menuButtonClick(l);
      }),
      onKeydown: t[1] || (t[1] = function(l) {
        return i.menuButtonKeydown(l);
      })
    }, pt(pt({}, e.buttonProps), e.ptm("button"))), [A(e.$slots, e.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [C(s, Rt(Ut(e.ptm("buttonicon"))), null, 16)];
    })], 16, jo)) : S("", !0)];
  }), C(u, {
    ref: i.menubarRef,
    id: e.$id + "_list",
    role: "menubar",
    items: i.processedItems,
    templates: e.$slots,
    root: !0,
    mobileActive: r.mobileActive,
    tabindex: "0",
    "aria-activedescendant": r.focused ? i.focusedItemId : void 0,
    menuId: e.$id,
    focusedItemId: r.focused ? i.focusedItemId : void 0,
    activeItemPath: r.activeItemPath,
    level: 0,
    "aria-labelledby": e.ariaLabelledby,
    "aria-label": e.ariaLabel,
    pt: e.pt,
    unstyled: e.unstyled,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemClick: i.onItemClick,
    onItemMouseenter: i.onItemMouseEnter,
    onItemMousemove: i.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (p(), g("div", f({
    key: 1,
    class: e.cx("end")
  }, e.ptm("end")), [A(e.$slots, "end")], 16)) : S("", !0)], 16);
}
Et.render = zo;
function Se(e) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(e);
}
function Vo(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, No(o.key), o);
  }
}
function Do(e, t, n) {
  return t && Fo(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function No(e) {
  var t = Bo(e, "string");
  return Se(t) == "symbol" ? t : t + "";
}
function Bo(e, t) {
  if (Se(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Se(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ro = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Vo(this, e), this.element = t, this.listener = n;
  }
  return Do(e, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = nn(this.element);
      for (var n = 0; n < this.scrollableParents.length; n++)
        this.scrollableParents[n].addEventListener("scroll", this.listener);
    }
  }, {
    key: "unbindScrollListener",
    value: function() {
      if (this.scrollableParents)
        for (var n = 0; n < this.scrollableParents.length; n++)
          this.scrollableParents[n].removeEventListener("scroll", this.listener);
    }
  }, {
    key: "destroy",
    value: function() {
      this.unbindScrollListener(), this.element = null, this.listener = null, this.scrollableParents = null;
    }
  }]);
}(), Uo = on(), At = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = rn();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Wo(e, t, n, o, r, i) {
  return i.inline ? A(e.$slots, "default", {
    key: 0
  }) : r.mounted ? (p(), x(Wt, {
    key: 1,
    to: n.appendTo
  }, [A(e.$slots, "default")], 8, ["to"])) : S("", !0);
}
At.render = Wo;
var Go = ({ dt: e }) => `
.p-tieredmenu {
    background: ${e("tieredmenu.background")};
    color: ${e("tieredmenu.color")};
    border: 1px solid ${e("tieredmenu.border.color")};
    border-radius: ${e("tieredmenu.border.radius")};
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: ${e("tieredmenu.list.padding")};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${e("tieredmenu.list.gap")};
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: ${e("tieredmenu.background")};
    color: ${e("tieredmenu.color")};
    border: 1px solid ${e("tieredmenu.border.color")};
    border-radius: ${e("tieredmenu.border.radius")};
    box-shadow: ${e("tieredmenu.shadow")};
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background ${e("tieredmenu.transition.duration")}, color ${e("tieredmenu.transition.duration")};
    border-radius: ${e("tieredmenu.item.border.radius")};
    color: ${e("tieredmenu.item.color")};
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("tieredmenu.item.padding")};
    gap: ${e("tieredmenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.color")};
}

.p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("tieredmenu.submenu.icon.size")};
    width: ${e("tieredmenu.submenu.icon.size")};
    height: ${e("tieredmenu.submenu.icon.size")};
}

.p-tieredmenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: ${e("tieredmenu.item.focus.color")};
    background: ${e("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: ${e("tieredmenu.item.focus.color")};
    background: ${e("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: ${e("tieredmenu.item.active.color")};
    background: ${e("tieredmenu.item.active.background")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.active.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.active.color")};
}

.p-tieredmenu-separator {
    border-block-start: 1px solid ${e("tieredmenu.separator.border.color")};
}

.p-tieredmenu-overlay {
    box-shadow: ${e("tieredmenu.shadow")};
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}

.p-tieredmenu-mobile .p-tieredmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("tieredmenu.submenu.mobile.indent")};
    padding-inline-end: 0;
}

.p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
    padding-inline-start: 0;
    padding-inline-end: ${e("tieredmenu.submenu.mobile.indent")};
}

.p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    transform: rotate(-90deg);
}
`, qo = {
  submenu: function(t) {
    var n = t.instance, o = t.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, Ho = {
  root: function(t) {
    var n = t.props, o = t.instance;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": n.popup,
      "p-tieredmenu-mobile": o.queryMatches
    }];
  },
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: function(t) {
    var n = t.instance, o = t.processedItem;
    return ["p-tieredmenu-item", {
      "p-tieredmenu-item-active": n.isItemActive(o),
      "p-focus": n.isItemFocused(o),
      "p-disabled": n.isItemDisabled(o)
    }];
  },
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
}, Zo = M.extend({
  name: "tieredmenu",
  style: Go,
  classes: Ho,
  inlineStyles: qo
}), Xo = {
  name: "BaseTieredMenu",
  extends: H,
  props: {
    popup: {
      type: Boolean,
      default: !1
    },
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Zo,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, Ot = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  extends: H,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  container: null,
  props: {
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    visible: {
      type: Boolean,
      default: !1
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getItemId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key);
    },
    getItemKey: function(t) {
      return this.getItemId(t);
    },
    getItemProp: function(t, n, o) {
      return t && t.item ? se(t.item[n], o) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    getItemLabelId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key, "_label");
    },
    getPTOptions: function(t, n, o) {
      return this.ptm(o, {
        context: {
          item: t.item,
          index: n,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t)
        }
      });
    },
    isItemActive: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemFocused: function(t) {
      return this.focusedItemId === this.getItemId(t);
    },
    isItemGroup: function(t) {
      return z(t.items);
    },
    onEnter: function() {
      un(this.container, this.level);
    },
    onItemClick: function(t, n) {
      this.getItemProp(n, "command", {
        originalEvent: t,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: t,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(t, n) {
      this.$emit("item-mouseenter", {
        originalEvent: t,
        processedItem: n
      });
    },
    onItemMouseMove: function(t, n) {
      this.$emit("item-mousemove", {
        originalEvent: t,
        processedItem: n
      });
    },
    getAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(n) {
        return t.isItemVisible(n) && !t.getItemProp(n, "separator");
      }).length;
    },
    getAriaPosInset: function(t) {
      var n = this;
      return t - this.items.slice(0, t).filter(function(o) {
        return n.isItemVisible(o) && n.getItemProp(o, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(t, n) {
      return {
        action: f({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(t, n, "itemLink")),
        icon: f({
          class: [this.cx("itemIcon"), this.getItemProp(t, "icon")]
        }, this.getPTOptions(t, n, "itemIcon")),
        label: f({
          class: this.cx("itemLabel")
        }, this.getPTOptions(t, n, "itemLabel")),
        submenuicon: f({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(t, n, "submenuIcon"))
      };
    },
    containerRef: function(t) {
      this.container = t;
    }
  },
  components: {
    AngleRightIcon: He
  },
  directives: {
    ripple: je
  }
}, Yo = ["tabindex"], Jo = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Qo = ["onClick", "onMouseenter", "onMousemove"], ei = ["href", "target"], ti = ["id"], ni = ["id"];
function oi(e, t, n, o, r, i) {
  var s = W("AngleRightIcon"), u = W("TieredMenuSub", !0), a = Me("ripple");
  return p(), x(Ue, f({
    name: "p-tieredmenu",
    onEnter: i.onEnter
  }, e.ptm("menu.transition")), {
    default: w(function() {
      return [n.level === 0 || n.visible ? (p(), g("ul", {
        key: 0,
        ref: i.containerRef,
        tabindex: n.tabindex
      }, [(p(!0), g(Q, null, Ke(n.items, function(l, d) {
        return p(), g(Q, {
          key: i.getItemKey(l)
        }, [i.isItemVisible(l) && !i.getItemProp(l, "separator") ? (p(), g("li", f({
          key: 0,
          id: i.getItemId(l),
          style: i.getItemProp(l, "style"),
          class: [e.cx("item", {
            processedItem: l
          }), i.getItemProp(l, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(l),
          "aria-disabled": i.isItemDisabled(l) || void 0,
          "aria-expanded": i.isItemGroup(l) ? i.isItemActive(l) : void 0,
          "aria-haspopup": i.isItemGroup(l) && !i.getItemProp(l, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(d),
          ref_for: !0
        }, i.getPTOptions(l, d, "item"), {
          "data-p-active": i.isItemActive(l),
          "data-p-focused": i.isItemFocused(l),
          "data-p-disabled": i.isItemDisabled(l)
        }), [h("div", f({
          class: e.cx("itemContent"),
          onClick: function(m) {
            return i.onItemClick(m, l);
          },
          onMouseenter: function(m) {
            return i.onItemMouseEnter(m, l);
          },
          onMousemove: function(m) {
            return i.onItemMouseMove(m, l);
          },
          ref_for: !0
        }, i.getPTOptions(l, d, "itemContent")), [n.templates.item ? (p(), x(J(n.templates.item), {
          key: 1,
          item: l.item,
          hasSubmenu: i.getItemProp(l, "items"),
          label: i.getItemLabel(l),
          props: i.getMenuItemProps(l, d)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : fe((p(), g("a", f({
          key: 0,
          href: i.getItemProp(l, "url"),
          class: e.cx("itemLink"),
          target: i.getItemProp(l, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions(l, d, "itemLink")), [n.templates.itemicon ? (p(), x(J(n.templates.itemicon), {
          key: 0,
          item: l.item,
          class: U(e.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(l, "icon") ? (p(), g("span", f({
          key: 1,
          class: [e.cx("itemIcon"), i.getItemProp(l, "icon")],
          ref_for: !0
        }, i.getPTOptions(l, d, "itemIcon")), null, 16)) : S("", !0), h("span", f({
          id: i.getItemLabelId(l),
          class: e.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions(l, d, "itemLabel")), D(i.getItemLabel(l)), 17, ti), i.getItemProp(l, "items") ? (p(), g(Q, {
          key: 2
        }, [n.templates.submenuicon ? (p(), x(J(n.templates.submenuicon), f({
          key: 0,
          class: e.cx("submenuIcon"),
          active: i.isItemActive(l),
          ref_for: !0
        }, i.getPTOptions(l, d, "submenuIcon")), null, 16, ["class", "active"])) : (p(), x(s, f({
          key: 1,
          class: e.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions(l, d, "submenuIcon")), null, 16, ["class"]))], 64)) : S("", !0)], 16, ei)), [[a]])], 16, Qo), i.isItemVisible(l) && i.isItemGroup(l) ? (p(), x(u, f({
          key: 0,
          id: i.getItemId(l) + "_list",
          class: e.cx("submenu"),
          style: e.sx("submenu", !0, {
            processedItem: l
          }),
          "aria-labelledby": i.getItemLabelId(l),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: l.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: i.isItemActive(l) && i.isItemGroup(l),
          pt: e.pt,
          unstyled: e.unstyled,
          onItemClick: t[0] || (t[0] = function(c) {
            return e.$emit("item-click", c);
          }),
          onItemMouseenter: t[1] || (t[1] = function(c) {
            return e.$emit("item-mouseenter", c);
          }),
          onItemMousemove: t[2] || (t[2] = function(c) {
            return e.$emit("item-mousemove", c);
          }),
          ref_for: !0
        }, e.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : S("", !0)], 16, Jo)) : S("", !0), i.isItemVisible(l) && i.getItemProp(l, "separator") ? (p(), g("li", f({
          key: 1,
          id: i.getItemId(l),
          style: i.getItemProp(l, "style"),
          class: [e.cx("separator"), i.getItemProp(l, "class")],
          role: "separator",
          ref_for: !0
        }, e.ptm("separator")), null, 16, ni)) : S("", !0)], 64);
      }), 128))], 8, Yo)) : S("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
Ot.render = oi;
var Mt = {
  name: "TieredMenu",
  extends: Xo,
  inheritAttrs: !1,
  emits: ["focus", "blur", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  matchMediaListener: null,
  scrollHandler: null,
  resizeListener: null,
  target: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
  data: function() {
    return {
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      visible: !this.popup,
      submenuVisible: !1,
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItemPath: function(t) {
      this.popup || (z(t) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener()));
    }
  },
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && de.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(t, n) {
      return t ? se(t[n]) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemGroup: function(t) {
      return z(this.getItemProp(t, "items"));
    },
    isItemSeparator: function(t) {
      return this.getItemProp(t, "separator");
    },
    getProccessedItemLabel: function(t) {
      return t ? this.getItemLabel(t.item) : void 0;
    },
    isProccessedItemGroup: function(t) {
      return t && z(t.items);
    },
    toggle: function(t) {
      this.visible ? this.hide(t, !0) : this.show(t);
    },
    show: function(t, n) {
      this.popup && (this.$emit("before-show"), this.visible = !0, this.target = this.target || t.currentTarget, this.relatedTarget = t.relatedTarget || null), n && R(this.menubar);
    },
    hide: function(t, n) {
      this.popup && (this.$emit("before-hide"), this.visible = !1), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && R(this.relatedTarget || this.target || this.menubar), this.dirty = !1;
    },
    onFocus: function(t) {
      this.focused = !0, this.popup || (this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }), this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", t);
    },
    onKeyDown: function(t) {
      if (this.disabled) {
        t.preventDefault();
        return;
      }
      var n = t.metaKey || t.ctrlKey;
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onArrowRightKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Space":
          this.onSpaceKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(t);
          break;
        case "Escape":
          this.onEscapeKey(t);
          break;
        case "Tab":
          this.onTabKey(t);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && It(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t, n) {
      var o = t.processedItem, r = t.isFocus;
      if (!Z(o)) {
        var i = o.index, s = o.key, u = o.level, a = o.parentKey, l = o.items, d = z(l), c = this.activeItemPath.filter(function(m) {
          return m.parentKey !== a && m.parentKey !== s;
        });
        d && (c.push(o), this.submenuVisible = !0), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: a
        }, d && (this.dirty = !0), r && R(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onOverlayClick: function(t) {
      Uo.emit("overlay-click", {
        originalEvent: t,
        target: this.target
      });
    },
    onItemClick: function(t) {
      var n = t.originalEvent, o = t.processedItem, r = this.isProccessedItemGroup(o), i = Z(o.parent), s = this.isSelected(o);
      if (s) {
        var u = o.index, a = o.key, l = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(m) {
          return a !== m.key && a.startsWith(m.key);
        }), this.focusedItemInfo = {
          index: u,
          level: l,
          parentKey: d
        }, this.dirty = !i, R(this.menubar);
      } else if (r)
        this.onItemChange(t);
      else {
        var c = i ? o : this.activeItemPath.find(function(m) {
          return m.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, c ? c.index : -1), R(this.menubar);
      }
    },
    onItemMouseEnter: function(t) {
      this.dirty && this.onItemChange(t, "hover");
    },
    onItemMouseMove: function(t) {
      this.focused && this.changeFocusedItemIndex(t, t.processedItem.index);
    },
    onArrowDownKey: function(t) {
      var n = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(t, n), t.preventDefault();
    },
    onArrowUpKey: function(t) {
      if (t.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
          !o && this.onItemChange({
            originalEvent: t,
            processedItem: n
          });
        }
        this.popup && this.hide(t, !0), t.preventDefault();
      } else {
        var r = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, r), t.preventDefault();
      }
    },
    onArrowLeftKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = this.activeItemPath.find(function(s) {
        return s.key === o.parentKey;
      }), i = Z(o.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: r ? r.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(t)), this.activeItemPath = this.activeItemPath.filter(function(s) {
        return s.parentKey !== n.focusedItemInfo.parentKey;
      }), t.preventDefault();
    },
    onArrowRightKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
      o && (this.onItemChange({
        originalEvent: t,
        processedItem: n
      }), this.focusedItemInfo = {
        index: -1,
        parentKey: n.key
      }, this.searchValue = "", this.onArrowDownKey(t)), t.preventDefault();
    },
    onHomeKey: function(t) {
      this.changeFocusedItemIndex(t, this.findFirstItemIndex()), t.preventDefault();
    },
    onEndKey: function(t) {
      this.changeFocusedItemIndex(t, this.findLastItemIndex()), t.preventDefault();
    },
    onEnterKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = ae(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && ae(n, '[data-pc-section="itemlink"]');
        if (o ? o.click() : n && n.click(), !this.popup) {
          var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
          !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
        }
      }
      t.preventDefault();
    },
    onSpaceKey: function(t) {
      this.onEnterKey(t);
    },
    onEscapeKey: function(t) {
      if (this.popup || this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(t, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        }, this.popup && R(this.target);
      }
      t.preventDefault();
    },
    onTabKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
        !o && this.onItemChange({
          originalEvent: t,
          processedItem: n
        });
      }
      this.hide();
    },
    onEnter: function(t) {
      this.autoZIndex && de.set("menu", t, this.baseZIndex + this.$primevue.config.zIndex.menu), sn(t, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), R(this.menubar), this.scrollInView();
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.container = null, this.dirty = !1;
    },
    onAfterLeave: function(t) {
      this.autoZIndex && de.clear(t);
    },
    alignOverlay: function() {
      an(this.container, this.target);
      var t = Ae(this.target);
      t > Ae(this.container) && (this.container.style.minWidth = Ae(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var o = t.container && !t.container.contains(n.target), r = t.popup ? !(t.target && (t.target === n.target || t.target.contains(n.target))) : !0;
        o && r && t.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var t = this;
      this.scrollHandler || (this.scrollHandler = new Ro(this.target, function(n) {
        t.hide(n, !0);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function(n) {
        Ge() || t.hide(n, !0);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var t = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          t.queryMatches = n.matches;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(t) {
      var n;
      return this.isValidItem(t) && ((n = this.getProccessedItemLabel(t)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(t) {
      return !!t && !this.isItemDisabled(t.item) && !this.isItemSeparator(t.item) && this.isItemVisible(t.item);
    },
    isValidSelectedItem: function(t) {
      return this.isValidItem(t) && this.isSelected(t);
    },
    isSelected: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    findFirstItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var t = this;
      return Oe(this.visibleItems, function(n) {
        return t.isValidItem(n);
      });
    },
    findNextItemIndex: function(t) {
      var n = this, o = t < this.visibleItems.length - 1 ? this.visibleItems.slice(t + 1).findIndex(function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o + t + 1 : t;
    },
    findPrevItemIndex: function(t) {
      var n = this, o = t > 0 ? Oe(this.visibleItems.slice(0, t), function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o : t;
    },
    findSelectedItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findFirstItemIndex() : t;
    },
    findLastFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findLastItemIndex() : t;
    },
    searchItems: function(t, n) {
      var o = this;
      this.searchValue = (this.searchValue || "") + n;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(s) {
        return o.isItemMatched(s);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(s) {
        return o.isItemMatched(s);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(s) {
        return o.isItemMatched(s);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = t !== -1 ? "".concat(this.$id, "_").concat(t) : this.focusedItemId, o = ae(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = [];
      return t && t.forEach(function(u, a) {
        var l = (i !== "" ? i + "_" : "") + a, d = {
          item: u,
          index: a,
          level: o,
          key: l,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(u.items, o + 1, d, l), s.push(d);
      }), s;
    },
    containerRef: function(t) {
      this.container = t;
    },
    menubarRef: function(t) {
      this.menubar = t ? t.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var t = this, n = this.activeItemPath.find(function(o) {
        return o.key === t.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(z(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    TieredMenuSub: Ot,
    Portal: At
  }
}, ii = ["id"];
function ri(e, t, n, o, r, i) {
  var s = W("TieredMenuSub"), u = W("Portal");
  return p(), x(u, {
    appendTo: e.appendTo,
    disabled: !e.popup
  }, {
    default: w(function() {
      return [C(Ue, f({
        name: "p-connected-overlay",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, e.ptm("transition")), {
        default: w(function() {
          return [r.visible ? (p(), g("div", f({
            key: 0,
            ref: i.containerRef,
            id: e.$id,
            class: e.cx("root"),
            onClick: t[0] || (t[0] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            })
          }, e.ptmi("root")), [e.$slots.start ? (p(), g("div", f({
            key: 0,
            class: e.cx("start")
          }, e.ptm("start")), [A(e.$slots, "start")], 16)) : S("", !0), C(s, f({
            ref: i.menubarRef,
            id: e.$id + "_list",
            class: e.cx("rootList"),
            tabindex: e.disabled ? -1 : e.tabindex,
            role: "menubar",
            "aria-label": e.ariaLabel,
            "aria-labelledby": e.ariaLabelledby,
            "aria-disabled": e.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": r.focused ? i.focusedItemId : void 0,
            menuId: e.$id,
            focusedItemId: r.focused ? i.focusedItemId : void 0,
            items: i.processedItems,
            templates: e.$slots,
            activeItemPath: r.activeItemPath,
            level: 0,
            visible: r.submenuVisible,
            pt: e.pt,
            unstyled: e.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, e.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (p(), g("div", f({
            key: 1,
            class: e.cx("end")
          }, e.ptm("end")), [A(e.$slots, "end")], 16)) : S("", !0)], 16, ii)) : S("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
Mt.render = ri;
const ai = { class: "bg-surface-0 dark:bg-surface-900" }, si = { class: "container" }, ui = { class: "flex gap-5" }, li = { class: "hidden lg:flex items-center gap-5" }, di = { class: "lg:hidden" }, ci = { class: "ml-2" }, aa = /* @__PURE__ */ V({
  name: "SiteNavigation",
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  emits: ["signoutSuccess", "signoutError"],
  setup(e, { emit: t }) {
    const n = t, o = e, r = ln(), i = E(!1), s = E(null), u = E([
      { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), a = ce(() => o.userSignedIn ? o.items : [...o.items || [], ...u.value]), l = ce(() => [...a.value]), d = (m) => {
      var v;
      (v = s.value) == null || v.toggle(m);
    };
    async function c() {
      try {
        i.value = !0, await qe.signOut(), r.updateAuth(), n("signoutSuccess");
      } catch (m) {
        n("signoutError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: m
        });
      } finally {
        i.value = !1;
      }
    }
    return (m, v) => {
      const b = W("RouterLink"), $ = W("router-link");
      return p(), g("header", ai, [
        h("div", si, [
          C(L(Et), { model: [] }, {
            start: w(() => [
              C(L(B), {
                asChild: "",
                variant: "link"
              }, {
                default: w((k) => [
                  C(b, {
                    to: m.userSignedIn ? "/home" : "/",
                    class: U(k.class)
                  }, {
                    default: w(() => [
                      A(m.$slots, "logo")
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]),
                _: 3
              })
            ]),
            end: w(() => [
              h("div", ui, [
                h("div", li, [
                  (p(!0), g(Q, null, Ke(a.value, (k) => (p(), g("div", {
                    key: k.label
                  }, [
                    C(L(B), {
                      asChild: "",
                      variant: "outlined"
                    }, {
                      default: w((O) => [
                        C(b, {
                          to: k.to,
                          class: U(O.class)
                        }, {
                          default: w(() => [
                            h("i", {
                              class: U(k.icon)
                            }, null, 2),
                            h("span", null, D(k.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128)),
                  m.userSignedIn ? (p(), x(L(B), {
                    key: 0,
                    icon: "pi pi-sign-out",
                    "aria-label": "Sign out",
                    variant: "outlined",
                    loading: i.value,
                    onClick: c
                  }, null, 8, ["loading"])) : S("", !0)
                ]),
                h("div", di, [
                  C(L(B), {
                    icon: "pi pi-bars",
                    "aria-label": "Navigation menu",
                    "aria-haspopup": "true",
                    "aria-controls": "overlay_tmenu",
                    onClick: d
                  }),
                  C(L(Mt), {
                    id: "overlay_tmenu",
                    ref_key: "tieredMenu",
                    ref: s,
                    model: l.value,
                    popup: ""
                  }, {
                    item: w(({ item: k, props: O }) => [
                      k.to ? (p(), x($, f({
                        key: 0,
                        to: k.to
                      }, O.action), {
                        default: w(() => [
                          h("span", {
                            class: U(k.icon)
                          }, null, 2),
                          h("span", ci, D(k.label), 1)
                        ]),
                        _: 2
                      }, 1040, ["to"])) : S("", !0),
                      m.userSignedIn ? (p(), x(L(B), {
                        key: 1,
                        icon: "pi pi-sign-out",
                        "aria-label": "Sign out",
                        variant: "outlined",
                        loading: i.value,
                        onClick: c
                      }, null, 8, ["loading"])) : S("", !0)
                    ]),
                    _: 1
                  }, 8, ["model"])
                ]),
                C(vo, { class: "ms-2" })
              ])
            ]),
            _: 3
          })
        ])
      ]);
    };
  }
});
var mi = ({ dt: e }) => `
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`, pi = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, fi = M.extend({
  name: "card",
  style: mi,
  classes: pi
}), bi = {
  name: "BaseCard",
  extends: H,
  style: fi,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, ee = {
  name: "Card",
  extends: bi,
  inheritAttrs: !1
};
function hi(e, t, n, o, r, i) {
  return p(), g("div", f({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (p(), g("div", f({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [A(e.$slots, "header")], 16)) : S("", !0), h("div", f({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (p(), g("div", f({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (p(), g("div", f({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [A(e.$slots, "title")], 16)) : S("", !0), e.$slots.subtitle ? (p(), g("div", f({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [A(e.$slots, "subtitle")], 16)) : S("", !0)], 16)) : S("", !0), h("div", f({
    class: e.cx("content")
  }, e.ptm("content")), [A(e.$slots, "content")], 16), e.$slots.footer ? (p(), g("div", f({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [A(e.$slots, "footer")], 16)) : S("", !0)], 16)], 16);
}
ee.render = hi;
const sa = /* @__PURE__ */ V({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(e) {
    const t = e;
    return ue(() => {
      console.error("App error: ", t.error);
    }), (n, o) => (p(), x(L(ee), { class: "p-10" }, {
      title: w(() => o[0] || (o[0] = [
        h("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          q(" Oops "),
          h("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])),
      content: w(() => o[1] || (o[1] = [
        h("p", { class: "mt-10 text-xl" }, [
          q(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          h("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          q(" or try again later. ")
        ], -1)
      ])),
      _: 1
    }));
  }
}), gi = {
  key: 0,
  class: "bar"
}, vi = /* @__PURE__ */ V({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (p(), g("div", gi, n[0] || (n[0] = [
      h("div", null, null, -1)
    ]))) : S("", !0);
  }
}), Kt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ua = /* @__PURE__ */ Kt(vi, [["__scopeId", "data-v-a36ba306"]]);
var yi = {
  name: "BaseEditableHolder",
  extends: H,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      default: void 0
    },
    defaultValue: {
      type: null,
      default: void 0
    },
    name: {
      type: String,
      default: void 0
    },
    invalid: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formControl: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcForm: {
      default: void 0
    },
    $pcFormField: {
      default: void 0
    }
  },
  data: function() {
    return {
      d_value: this.defaultValue || this.modelValue
    };
  },
  watch: {
    modelValue: function(t) {
      this.d_value = t;
    },
    defaultValue: function(t) {
      this.d_value = t;
    },
    $formName: {
      immediate: !0,
      handler: function(t) {
        var n, o;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (o = n.register) === null || o === void 0 ? void 0 : o.call(n, t, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(t) {
        var n, o;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (o = n.register) === null || o === void 0 ? void 0 : o.call(n, this.$formName, t)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(t) {
        this.d_value !== t && (this.d_value = t);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(t) {
        var n;
        (n = this.$pcForm) !== null && n !== void 0 && n.getFieldState(this.$formName) && t !== this.d_value && (this.d_value = t);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(t, n) {
      var o, r;
      this.controlled && (this.d_value = t, this.$emit("update:modelValue", t)), this.$emit("value-change", t), (o = (r = this.formField).onChange) === null || o === void 0 || o.call(r, {
        originalEvent: n,
        value: t
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return n.find(z);
    }
  },
  computed: {
    $filled: function() {
      return z(this.d_value);
    },
    $invalid: function() {
      var t, n;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.invalid, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.invalid);
    },
    $formName: function() {
      var t;
      return this.$formNovalidate ? void 0 : this.name || ((t = this.$formControl) === null || t === void 0 ? void 0 : t.name);
    },
    $formControl: function() {
      var t;
      return this.formControl || ((t = this.$pcFormField) === null || t === void 0 ? void 0 : t.formControl);
    },
    $formNovalidate: function() {
      var t;
      return (t = this.$formControl) === null || t === void 0 ? void 0 : t.novalidate;
    },
    $formDefaultValue: function() {
      var t, n;
      return this.findNonEmpty(this.d_value, (t = this.$pcFormField) === null || t === void 0 ? void 0 : t.initialValue, (n = this.$pcForm) === null || n === void 0 || (n = n.initialValues) === null || n === void 0 ? void 0 : n[this.$formName]);
    },
    $formValue: function() {
      var t, n;
      return this.findNonEmpty((t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.value, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, jt = {
  name: "BaseInput",
  extends: yi,
  props: {
    size: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcFluid: {
      default: void 0
    }
  },
  computed: {
    $variant: function() {
      var t;
      return (t = this.variant) !== null && t !== void 0 ? t : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var t;
      return (t = this.fluid) !== null && t !== void 0 ? t : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, $i = ({ dt: e }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`, Ii = {
  root: function(t) {
    var n = t.instance, o = t.props;
    return ["p-inputtext p-component", {
      "p-filled": n.$filled,
      "p-inputtext-sm p-inputfield-sm": o.size === "small",
      "p-inputtext-lg p-inputfield-lg": o.size === "large",
      "p-invalid": n.$invalid,
      "p-variant-filled": n.$variant === "filled",
      "p-inputtext-fluid": n.$fluid
    }];
  }
}, ki = M.extend({
  name: "inputtext",
  style: $i,
  classes: Ii
}), Si = {
  name: "BaseInputText",
  extends: jt,
  style: ki,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function we(e) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, we(e);
}
function wi(e, t, n) {
  return (t = xi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xi(e) {
  var t = Pi(e, "string");
  return we(t) == "symbol" ? t : t + "";
}
function Pi(e, t) {
  if (we(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (we(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ze = {
  name: "InputText",
  extends: Si,
  inheritAttrs: !1,
  methods: {
    onInput: function(t) {
      this.writeValue(t.target.value, t);
    }
  },
  computed: {
    attrs: function() {
      return f(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return re(wi({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Ci = ["value", "name", "disabled", "aria-invalid", "data-p"];
function _i(e, t, n, o, r, i) {
  return p(), g("input", f({
    type: "text",
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.$invalid || void 0,
    "data-p": i.dataP,
    onInput: t[0] || (t[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, Ci);
}
Ze.render = _i;
var zt = {
  name: "TimesIcon",
  extends: _e
};
function Li(e, t, n, o, r, i) {
  return p(), g("svg", f({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [h("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
zt.render = Li;
var Ti = ({ dt: e }) => `
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`, Ei = {
  root: function(t) {
    var n = t.props;
    return ["p-message p-component p-message-" + n.severity, {
      "p-message-outlined": n.variant === "outlined",
      "p-message-simple": n.variant === "simple",
      "p-message-sm": n.size === "small",
      "p-message-lg": n.size === "large"
    }];
  },
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
}, Ai = M.extend({
  name: "message",
  style: Ti,
  classes: Ei
}), Oi = {
  name: "BaseMessage",
  extends: H,
  props: {
    severity: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    life: {
      type: Number,
      default: null
    },
    icon: {
      type: String,
      default: void 0
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: null,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  style: Ai,
  provide: function() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
function xe(e) {
  "@babel/helpers - typeof";
  return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xe(e);
}
function ft(e, t, n) {
  return (t = Mi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mi(e) {
  var t = Ki(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function Ki(e, t) {
  if (xe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (xe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xe = {
  name: "Message",
  extends: Oi,
  inheritAttrs: !1,
  emits: ["close", "life-end"],
  timeout: null,
  data: function() {
    return {
      visible: !0
    };
  },
  mounted: function() {
    var t = this;
    this.life && setTimeout(function() {
      t.visible = !1, t.$emit("life-end");
    }, this.life);
  },
  methods: {
    close: function(t) {
      this.visible = !1, this.$emit("close", t);
    }
  },
  computed: {
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return re(ft(ft({
        outlined: this.variant === "outlined",
        simple: this.variant === "simple"
      }, this.severity, this.severity), this.size, this.size));
    }
  },
  directives: {
    ripple: je
  },
  components: {
    TimesIcon: zt
  }
};
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pe(e);
}
function bt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bt(Object(n), !0).forEach(function(o) {
      ji(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function ji(e, t, n) {
  return (t = zi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zi(e) {
  var t = Vi(e, "string");
  return Pe(t) == "symbol" ? t : t + "";
}
function Vi(e, t) {
  if (Pe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Pe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Fi = ["data-p"], Di = ["data-p"], Ni = ["data-p"], Bi = ["aria-label", "data-p"], Ri = ["data-p"];
function Ui(e, t, n, o, r, i) {
  var s = W("TimesIcon"), u = Me("ripple");
  return p(), x(Ue, f({
    name: "p-message",
    appear: ""
  }, e.ptmi("transition")), {
    default: w(function() {
      return [fe(h("div", f({
        class: e.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        "data-p": i.dataP
      }, e.ptm("root")), [e.$slots.container ? A(e.$slots, "container", {
        key: 0,
        closeCallback: i.close
      }) : (p(), g("div", f({
        key: 1,
        class: e.cx("content"),
        "data-p": i.dataP
      }, e.ptm("content")), [A(e.$slots, "icon", {
        class: U(e.cx("icon"))
      }, function() {
        return [(p(), x(J(e.icon ? "span" : null), f({
          class: [e.cx("icon"), e.icon],
          "data-p": i.dataP
        }, e.ptm("icon")), null, 16, ["class", "data-p"]))];
      }), e.$slots.default ? (p(), g("div", f({
        key: 0,
        class: e.cx("text"),
        "data-p": i.dataP
      }, e.ptm("text")), [A(e.$slots, "default")], 16, Ni)) : S("", !0), e.closable ? fe((p(), g("button", f({
        key: 1,
        class: e.cx("closeButton"),
        "aria-label": i.closeAriaLabel,
        type: "button",
        onClick: t[0] || (t[0] = function(a) {
          return i.close(a);
        }),
        "data-p": i.dataP
      }, ht(ht({}, e.closeButtonProps), e.ptm("closeButton"))), [A(e.$slots, "closeicon", {}, function() {
        return [e.closeIcon ? (p(), g("i", f({
          key: 0,
          class: [e.cx("closeIcon"), e.closeIcon],
          "data-p": i.dataP
        }, e.ptm("closeIcon")), null, 16, Ri)) : (p(), x(s, f({
          key: 1,
          class: [e.cx("closeIcon"), e.closeIcon],
          "data-p": i.dataP
        }, e.ptm("closeIcon")), null, 16, ["class", "data-p"]))];
      })], 16, Bi)), [[u]]) : S("", !0)], 16, Di))], 16, Fi), [[Gt, r.visible]])];
    }),
    _: 3
  }, 16);
}
Xe.render = Ui;
const Wi = {
  key: 0,
  for: "email"
}, Gi = "Please enter a valid email address", Vt = /* @__PURE__ */ V({
  __name: "EmailInput",
  props: /* @__PURE__ */ Ye({
    isSubmitClicked: { type: Boolean },
    labelText: {}
  }, {
    email: { required: !0 },
    emailModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["validity-changed"], ["update:email"]),
  setup(e, { emit: t }) {
    const n = qt(e, "email"), o = e, r = t;
    ue(() => {
      r("validity-changed", De(n.value));
    });
    const i = ce(() => o.isSubmitClicked && !De(n.value));
    function s(u) {
      const a = u ?? "";
      n.value = a, r("validity-changed", De(a));
    }
    return (u, a) => (p(), g("div", null, [
      u.labelText ? (p(), g("label", Wi, D(u.labelText), 1)) : S("", !0),
      C(L(Ze), {
        id: "email",
        modelValue: n.value,
        invalid: i.value,
        placeholder: "Email",
        required: "",
        class: "w-full",
        "onUpdate:modelValue": s
      }, null, 8, ["modelValue", "invalid"]),
      i.value ? (p(), x(L(Xe), {
        key: 1,
        severity: "error",
        size: "small",
        variant: "simple"
      }, {
        default: w(() => [
          q(D(Gi))
        ]),
        _: 1
      })) : S("", !0)
    ]));
  }
}), qi = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), Hi = async (e) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: e })
}), Zi = async (e) => await fetch("https://localhost:443/auth/user/email/verify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ token: e })
}), Xi = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), Yi = async (e) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": e,
    "Content-Type": "application/json"
  }
}), Le = { getEmail: qi, updateEmail: Zi, requestEmailChange: Hi, requestDelete: Xi, deleteAccount: Yi }, Ji = { class: "flex flex-col items-center gap-4 text-center" }, Qi = { class: "flex flex-col gap-2" }, Ft = /* @__PURE__ */ V({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(e) {
    return (t, n) => (p(), g("div", Ji, [
      h("i", {
        class: U([t.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      h("div", Qi, [
        A(t.$slots, "default")
      ])
    ]));
  }
}), er = {
  key: 0,
  class: "spacing-elements"
}, tr = { class: "text-primary break-all px-2" }, nr = "No changes have been made", or = "The new email address you provided is the same as the current one. Please enter a different email address.", ir = "Email updated successfully", rr = "We have updated your email address successfully.", ar = /* @__PURE__ */ V({
  __name: "ChangeEmailRequest",
  emits: ["changeEmailRequestError", "changeEmailActionSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = E("mytestemail1235667@gmail.com"), r = E(!1), i = E(!1), s = E(!1), u = E(!1);
    async function a() {
      if (u.value = !0, !!s.value)
        try {
          r.value = !0;
          const l = await Le.requestEmailChange(o.value);
          if (console.log("Change email request - response: ", l), !l.ok)
            throw l;
          const d = await l.json();
          l.ok && d.message === "Email updated" ? n("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: ir,
            detail: rr
          }) : i.value = !0;
        } catch (l) {
          if (i.value = !1, l instanceof Response) {
            const d = await l.json();
            d.error === "EMAIL_SAME_AS_CURRENT" && n("changeEmailRequestError", {
              type: "email_same_as_current",
              severity: "info",
              summary: nr,
              detail: or,
              json: d
            });
          } else
            n("changeEmailRequestError", {
              type: "unexpected",
              severity: "error",
              summary: j.error.somethingWentWrong.summary,
              detail: j.error.somethingWentWrong.detail,
              json: l
            });
        } finally {
          r.value = !1;
        }
    }
    return (l, d) => (p(), x(L(ee), null, {
      title: w(() => d[2] || (d[2] = [
        h("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: w(() => [
        i.value ? (p(), x(Ft, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: w(() => [
            h("p", null, [
              d[5] || (d[5] = h("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              h("strong", tr, D(o.value), 1),
              d[6] || (d[6] = h("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (p(), g("div", er, [
          d[4] || (d[4] = h("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          h("form", {
            class: "spacing-form",
            onSubmit: We(a, ["prevent"])
          }, [
            C(Vt, {
              email: o.value,
              "onUpdate:email": d[0] || (d[0] = (c) => o.value = c),
              isSubmitClicked: u.value,
              labelText: "Enter your new email",
              onValidityChanged: d[1] || (d[1] = (c) => {
                s.value = c;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            C(L(B), {
              type: "submit",
              loading: r.value
            }, {
              default: w(() => d[3] || (d[3] = [
                q("Change email")
              ])),
              _: 1
            }, 8, ["loading"])
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), sr = {
  key: 0,
  class: "spacing-elements"
}, ur = /* @__PURE__ */ V({
  __name: "DeleteAccountRequest",
  emits: ["deleteAccountRequestError", "deleteAccountRequestSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = E(!1), r = E(!1);
    async function i() {
      try {
        r.value = !0;
        const s = await Le.requestDelete();
        if (s.ok)
          o.value = !0, n("deleteAccountRequestSuccess");
        else
          throw s;
      } catch (s) {
        o.value = !1, n("deleteAccountRequestError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: s
        });
      } finally {
        r.value = !1;
      }
    }
    return (s, u) => (p(), x(L(ee), null, {
      title: w(() => u[0] || (u[0] = [
        h("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: w(() => [
        o.value ? (p(), x(Ft, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: w(() => u[3] || (u[3] = [
            h("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (p(), g("div", sr, [
          u[2] || (u[2] = h("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          C(L(B), {
            type: "button",
            isLoading: r.value,
            onClick: i
          }, {
            default: w(() => u[1] || (u[1] = [
              q("Send deletion email")
            ])),
            _: 1
          }, 8, ["isLoading"])
        ]))
      ]),
      _: 1
    }));
  }
}), lr = { class: "spacing-elements p-12" }, dr = /* @__PURE__ */ V({
  __name: "DeleteAccountAction",
  props: {
    deleteToken: {}
  },
  emits: ["deleteAccountError", "deleteAccountSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = e;
    ue(() => {
      o.deleteToken && r();
    });
    async function r() {
      const i = "We failed to delete your account!", s = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const u = await Le.deleteAccount(o.deleteToken);
        if (!u.ok)
          throw u;
        await qe.signOut(), n("deleteAccountSuccess");
      } catch (u) {
        n("deleteAccountError", {
          type: "unexpected",
          severity: "error",
          summary: i,
          detail: s,
          json: u
        });
      }
    }
    return (i, s) => (p(), x(L(ee), null, {
      content: w(() => [
        h("div", lr, [
          s[0] || (s[0] = h("p", { class: "text-2xl" }, "Deleting your account, please dont close this window.", -1)),
          C(L(ze))
        ])
      ]),
      _: 1
    }));
  }
});
var cr = ({ dt: e }) => `
.p-skeleton {
    overflow: hidden;
    background: ${e("skeleton.background")};
    border-radius: ${e("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${e("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`, mr = {
  root: {
    position: "relative"
  }
}, pr = {
  root: function(t) {
    var n = t.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": n.shape === "circle",
      "p-skeleton-animation-none": n.animation === "none"
    }];
  }
}, fr = M.extend({
  name: "skeleton",
  style: cr,
  classes: pr,
  inlineStyles: mr
}), br = {
  name: "BaseSkeleton",
  extends: H,
  props: {
    shape: {
      type: String,
      default: "rectangle"
    },
    size: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "1rem"
    },
    borderRadius: {
      type: String,
      default: null
    },
    animation: {
      type: String,
      default: "wave"
    }
  },
  style: fr,
  provide: function() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function Ce(e) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(e);
}
function hr(e, t, n) {
  return (t = gr(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gr(e) {
  var t = vr(e, "string");
  return Ce(t) == "symbol" ? t : t + "";
}
function vr(e, t) {
  if (Ce(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ce(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Re = {
  name: "Skeleton",
  extends: br,
  inheritAttrs: !1,
  computed: {
    containerStyle: function() {
      return this.size ? {
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius
      } : {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      };
    },
    dataP: function() {
      return re(hr({}, this.shape, this.shape));
    }
  }
}, yr = ["data-p"];
function $r(e, t, n, o, r, i) {
  return p(), g("div", f({
    class: e.cx("root"),
    style: [e.sx("root"), i.containerStyle],
    "aria-hidden": "true"
  }, e.ptmi("root"), {
    "data-p": i.dataP
  }), null, 16, yr);
}
Re.render = $r;
const Ir = {
  key: 0,
  class: "spacing-elements"
}, kr = {
  key: 0,
  class: "flex flex-row gap-2"
}, Sr = { class: "text-primary break-all" }, wr = {
  key: 1,
  class: "flex flex-row gap-2"
}, xr = { class: "text-primary break-all px-2" }, Pr = {
  key: 1,
  class: "spacing-elements"
}, Cr = /* @__PURE__ */ V({
  __name: "UserAccountInfo",
  props: {
    updatedEmailDate: {}
  },
  setup(e) {
    const t = E(""), n = E(""), o = E(!1), r = e;
    ue(async () => {
      await s(), await i();
    }), gt(
      () => r.updatedEmailDate,
      async () => {
        await i();
      }
    );
    async function i() {
      try {
        o.value = !0;
        const u = await Le.getEmail();
        if (!u.ok)
          throw u;
        const a = await u.json();
        n.value = a.email;
      } catch (u) {
        console.error("Error fetching user account email: ", u);
      } finally {
        o.value = !1;
      }
    }
    async function s() {
      try {
        o.value = !0, t.value = await qe.getUserId();
      } catch (u) {
        console.error("Error fetching user account ID: ", u);
      } finally {
        o.value = !1;
      }
    }
    return (u, a) => !o.value && (t.value || n.value) || o.value ? (p(), x(L(ee), { key: 0 }, {
      title: w(() => a[0] || (a[0] = [
        h("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: w(() => [
        o.value ? (p(), g("div", Pr, [
          C(L(Re), { height: "2rem" }),
          C(L(Re), { height: "2rem" })
        ])) : (p(), g("div", Ir, [
          t.value ? (p(), g("div", kr, [
            a[1] || (a[1] = h("div", null, "ID:", -1)),
            h("div", null, [
              h("code", Sr, D(t.value), 1)
            ])
          ])) : S("", !0),
          n.value ? (p(), g("div", wr, [
            a[2] || (a[2] = h("div", null, "Email:", -1)),
            h("div", null, [
              h("strong", xr, D(n.value), 1)
            ])
          ])) : S("", !0)
        ]))
      ]),
      _: 1
    })) : S("", !0);
  }
}), _r = { class: "spacing-elements p-12" }, Lr = /* @__PURE__ */ V({
  __name: "ChangeEmailAction",
  props: {
    updateEmailToken: {}
  },
  emits: ["changeEmailActionError", "changeEmailActionSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = e;
    ue(() => {
      o.updateEmailToken && r();
    });
    async function r() {
      const i = "Failed to update your email!", s = "Something went wrong while updating your email. Please try again or contact us to let us know about this issue.", u = "The email verification token is invalid or has expired. Please try again.";
      try {
        const a = await Le.updateEmail(o.updateEmailToken);
        if (!a.ok)
          throw a;
        console.log("Change email response: ", a);
        const l = await a.json();
        if (l.status === "OK")
          n("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: "updateEmailSuccessSummary",
            detail: "updateEmailSuccessDetail"
          });
        else if (l.status === "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR")
          n("changeEmailActionError", {
            type: "email_verification_invalid_token",
            severity: "error",
            summary: i,
            detail: u
          });
        else
          throw a;
      } catch (a) {
        console.error("❌ Error during email verification:", a), n("changeEmailActionError", {
          type: "unexpected",
          severity: "error",
          summary: i,
          detail: s,
          json: a
        });
      }
    }
    return (i, s) => (p(), x(L(ee), null, {
      content: w(() => [
        h("div", _r, [
          s[0] || (s[0] = h("p", { class: "text-2xl" }, "Updating your email address, please dont close this window.", -1)),
          C(L(ze))
        ])
      ]),
      _: 1
    }));
  }
}), Tr = {
  key: 0,
  class: "mt-10"
}, Er = {
  key: 1,
  class: "mt-10"
}, Ar = {
  key: 2,
  class: "max-w-xl mt-10"
}, Or = { class: "spacing-page-sections" }, la = /* @__PURE__ */ V({
  __name: "Account",
  props: {
    deleteToken: {},
    updateEmailToken: {}
  },
  emits: [
    "deleteAccountRequestError",
    "deleteAccountRequestSuccess",
    "changeEmailRequestError",
    "changeEmailRequestSuccess",
    "changeEmailActionError",
    "changeEmailActionSuccess",
    "deleteAccountError",
    "deleteAccountSuccess"
  ],
  setup(e, { emit: t }) {
    const n = t, o = E(null);
    function r(i) {
      o.value = /* @__PURE__ */ new Date(), n("changeEmailActionSuccess", i);
    }
    return (i, s) => (p(), g(Q, null, [
      i.deleteToken ? (p(), g("div", Tr, [
        C(dr, {
          deleteToken: i.deleteToken,
          onDeleteAccountError: s[0] || (s[0] = (...u) => i.$emit("deleteAccountError", ...u)),
          onDeleteAccountSuccess: s[1] || (s[1] = (...u) => i.$emit("deleteAccountSuccess", ...u))
        }, null, 8, ["deleteToken"])
      ])) : S("", !0),
      i.updateEmailToken ? (p(), g("div", Er, [
        C(Lr, {
          updateEmailToken: i.updateEmailToken,
          onChangeEmailActionError: s[2] || (s[2] = (...u) => i.$emit("changeEmailActionError", ...u)),
          onChangeEmailActionSuccess: r
        }, null, 8, ["updateEmailToken"])
      ])) : (p(), g("div", Ar, [
        A(i.$slots, "default", { id: "header" }, () => [
          s[6] || (s[6] = h("h1", { class: "h1 text-color" }, "Your account", -1))
        ]),
        h("div", Or, [
          C(Cr, { updatedEmailDate: o.value }, null, 8, ["updatedEmailDate"]),
          C(ar, {
            onChangeEmailRequestError: s[3] || (s[3] = (...u) => i.$emit("changeEmailRequestError", ...u)),
            onChangeEmailActionSuccess: r
          }),
          C(ur, {
            onDeleteAccountRequestError: s[4] || (s[4] = (...u) => i.$emit("deleteAccountRequestError", ...u)),
            onDeleteAccountRequestSuccess: s[5] || (s[5] = (...u) => i.$emit("deleteAccountRequestSuccess", ...u))
          })
        ])
      ]))
    ], 64));
  }
}), Mr = { class: "gsi-material-button-content-wrapper" }, Kr = { class: "gsi-material-button-icon" }, jr = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, zr = { class: "gsi-material-button-contents" }, Vr = { style: { display: "none" } }, Fr = /* @__PURE__ */ V({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  emits: ["googleSignInError", "googleSignInSuccess"],
  setup(e, { emit: t }) {
    const n = t;
    async function o() {
      const r = "Failed to sign in with Google", i = "Please try again later.";
      try {
        const s = await kt.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(s);
      } catch (s) {
        n("googleSignInError", {
          type: "unexpected",
          severity: "error",
          summary: r,
          detail: i,
          json: s
        });
      }
    }
    return (r, i) => (p(), g("button", {
      class: "gsi-material-button",
      onClick: o
    }, [
      i[1] || (i[1] = h("div", { class: "gsi-material-button-state" }, null, -1)),
      h("div", Mr, [
        h("div", Kr, [
          (p(), g("svg", jr, i[0] || (i[0] = [
            Ht('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-8e123238></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-8e123238></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-8e123238></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-8e123238></path><path fill="none" d="M0 0h48v48H0z" data-v-8e123238></path>', 5)
          ])))
        ]),
        h("span", zr, D(r.authType) + " with Google", 1),
        h("span", Vr, D(r.authType) + " with Google", 1)
      ])
    ]));
  }
}), Dr = /* @__PURE__ */ Kt(Fr, [["__scopeId", "data-v-8e123238"]]), Nr = { class: "h1" }, Br = /* @__PURE__ */ V({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess", "signupStartError", "googleSignInError"],
  setup(e, { emit: t }) {
    var a, l;
    console.log("Theme on start:", (l = (a = Je()) == null ? void 0 : a.appContext.config.globalProperties.$primevue) == null ? void 0 : l.config), ue(() => {
      var d, c;
      console.log("Theme on mount:", (c = (d = Je()) == null ? void 0 : d.appContext.config.globalProperties.$primevue) == null ? void 0 : c.config);
    });
    const n = t, o = E(!1), r = E("mytestemail1235667@gmail.com"), i = E(!1), s = E(!1);
    async function u() {
      if (s.value = !0, !!i.value)
        try {
          o.value = !0;
          const d = await ne.createCode({
            email: r.value,
            shouldTryLinkingWithSessionUser: !1,
            // If true, SuperTokens will attempt to link the passwordless code to an existing session user
            userContext: {}
            // Optionally include user context
          });
          console.log("Create code response: ", d), d.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("signupStartError", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: d
          }) : n("sendCodeSuccess", !0);
        } catch (d) {
          n("signupStartError", {
            type: "unexpected",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: d
          });
        } finally {
          o.value = !1;
        }
    }
    return (d, c) => (p(), x(L(ee), { class: "max-w-xl p-12 w-full" }, {
      title: w(() => [
        h("h1", Nr, D(d.pageAuthType), 1)
      ]),
      content: w(() => [
        h("section", null, [
          C(Dr, {
            authType: d.pageAuthType,
            onGoogleSignInError: c[0] || (c[0] = (...m) => d.$emit("googleSignInError", ...m))
          }, null, 8, ["authType"]),
          c[5] || (c[5] = h("div", { class: "flex items-center my-10" }, [
            h("hr", { class: "flex-1 border-gray-300" }),
            h("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            h("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          h("form", {
            class: "spacing-form",
            onSubmit: c[3] || (c[3] = We(() => {
            }, ["prevent"]))
          }, [
            c[4] || (c[4] = h("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            C(Vt, {
              email: r.value,
              "onUpdate:email": c[1] || (c[1] = (m) => r.value = m),
              isSubmitClicked: s.value,
              onValidityChanged: c[2] || (c[2] = (m) => {
                console.log("val is now", m), i.value = m;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            C(L(B), {
              label: d.pageAuthType,
              submit: "submit",
              loading: o.value,
              onClick: u
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var Rr = ({ dt: e }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: ${e("inputotp.gap")};
}

.p-inputotp-input {
    text-align: center;
    width: ${e("inputotp.input.width")};
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${e("inputotp.input.sm.width")};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${e("inputotp.input.lg.width")};
}
`, Ur = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, Wr = M.extend({
  name: "inputotp",
  style: Rr,
  classes: Ur
}), Gr = {
  name: "BaseInputOtp",
  extends: jt,
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
  style: Wr,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, Dt = {
  name: "InputOtp",
  extends: Gr,
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
      handler: function(t) {
        this.tokens = t ? t.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function(t) {
      return {
        value: this.tokens[t]
      };
    },
    getTemplateEvents: function(t) {
      var n = this;
      return {
        input: function(r) {
          return n.onInput(r, t);
        },
        keydown: function(r) {
          return n.onKeyDown(r);
        },
        focus: function(r) {
          return n.onFocus(r);
        },
        blur: function(r) {
          return n.onBlur(r);
        },
        paste: function(r) {
          return n.onPaste(r);
        }
      };
    },
    onInput: function(t, n) {
      this.tokens[n] = t.target.value, this.updateModel(t), t.inputType === "deleteContentBackward" ? this.moveToPrev(t) : (t.inputType === "insertText" || t.inputType === "deleteContentForward" || Ge() && t instanceof CustomEvent) && this.moveToNext(t);
    },
    updateModel: function(t) {
      var n = this.tokens.join("");
      this.writeValue(n, t), this.$emit("change", {
        originalEvent: t,
        value: n
      });
    },
    moveToPrev: function(t) {
      var n = this.findPrevInput(t.target);
      n && (n.focus(), n.select());
    },
    moveToNext: function(t) {
      var n = this.findNextInput(t.target);
      n && (n.focus(), n.select());
    },
    findNextInput: function(t) {
      var n = t.nextElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findNextInput(n);
    },
    findPrevInput: function(t) {
      var n = t.previousElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findPrevInput(n);
    },
    onFocus: function(t) {
      t.target.select(), this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.$emit("blur", t);
    },
    onClick: function(t) {
      setTimeout(function() {
        return t.target.select();
      }, 1);
    },
    onKeyDown: function(t) {
      if (!(t.ctrlKey || t.metaKey))
        switch (t.code) {
          case "ArrowLeft":
            this.moveToPrev(t), t.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
            t.preventDefault();
            break;
          case "Backspace":
            t.target.value.length === 0 && (this.moveToPrev(t), t.preventDefault());
            break;
          case "ArrowRight":
            this.moveToNext(t), t.preventDefault();
            break;
          case "Enter":
          case "NumpadEnter":
          case "Tab":
            break;
          default:
            (this.integerOnly && !(t.code !== "Space" && Number(t.key) >= 0 && Number(t.key) <= 9) || this.tokens.join("").length >= this.length && t.code !== "Delete") && t.preventDefault();
            break;
        }
    },
    onPaste: function(t) {
      var n = t.clipboardData.getData("text");
      if (n.length) {
        var o = n.substring(0, this.length);
        (!this.integerOnly || !isNaN(o)) && (this.tokens = o.split(""), this.updateModel(t));
      }
      t.preventDefault();
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
    OtpInputText: Ze
  }
};
function qr(e, t, n, o, r, i) {
  var s = W("OtpInputText");
  return p(), g("div", f({
    class: e.cx("root")
  }, e.ptmi("root")), [(p(!0), g(Q, null, Ke(e.length, function(u) {
    return A(e.$slots, "default", {
      key: u,
      events: i.getTemplateEvents(u - 1),
      attrs: i.getTemplateAttrs(u - 1),
      index: u
    }, function() {
      return [C(s, {
        value: r.tokens[u - 1],
        type: i.inputType,
        class: U(e.cx("pcInputText")),
        name: e.$formName,
        inputmode: i.inputMode,
        variant: e.variant,
        readonly: e.readonly,
        disabled: e.disabled,
        size: e.size,
        invalid: e.invalid,
        tabindex: e.tabindex,
        unstyled: e.unstyled,
        onInput: function(l) {
          return i.onInput(l, u - 1);
        },
        onFocus: t[0] || (t[0] = function(a) {
          return i.onFocus(a);
        }),
        onBlur: t[1] || (t[1] = function(a) {
          return i.onBlur(a);
        }),
        onPaste: t[2] || (t[2] = function(a) {
          return i.onPaste(a);
        }),
        onKeydown: t[3] || (t[3] = function(a) {
          return i.onKeyDown(a);
        }),
        onClick: t[4] || (t[4] = function(a) {
          return i.onClick(a);
        }),
        pt: e.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
Dt.render = qr;
const Hr = { class: "px-4 py-8 sm:p-8" }, Zr = { class: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-start" }, Xr = { class: "spacing-form" }, Yr = { class: "spacing-form" }, Jr = /* @__PURE__ */ V({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: [
    "verificationCodeSuccess",
    "verificationCodeError",
    "resendCodeSuccess",
    "resendCodeError",
    "restartFlow"
  ],
  setup(e, { emit: t }) {
    const n = t, o = E(""), r = E(null), i = E(0), s = E(0), u = E(!1), a = E(!1);
    gt(o, () => {
      r.value !== null && (r.value = null);
    });
    const l = ce(() => o.value.length < 6 ? "Please enter a valid code length" : s.value > 0 && i.value > 0 && i.value < s.value ? `Invalid code. You have ${s.value - i.value} attempts left.` : "");
    async function d() {
      const v = "Unable to process your OTP code", b = "Please try again later.";
      if (r.value = !0, o.value.length < 6) {
        r.value = !1;
        return;
      }
      try {
        u.value = !0;
        const $ = await ne.consumeCode({ userInputCode: o.value });
        $.status === "OK" ? (await ne.clearLoginAttemptInfo(), $.createdNewRecipeUser && $.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), r.value = !0, n("verificationCodeSuccess", {
          summary: "Code verified",
          detail: "You have successfully signed in."
        })) : (console.error("Submit code: ", $), $.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (i.value = $.failedCodeInputAttemptCount, s.value = $.maximumCodeInputAttempts, r.value = !1) : (await ne.clearLoginAttemptInfo(), n("verificationCodeError", {
          type: "input_code_invalid",
          severity: "error",
          summary: v,
          detail: b,
          json: $
        })));
      } catch ($) {
        n("verificationCodeError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: $
        });
      } finally {
        u.value = !1;
      }
    }
    async function c() {
      const v = "Resend OTP failed", b = "Please try again later.";
      try {
        a.value = !0;
        const $ = await ne.resendCode();
        console.log("resend code response: ", $), $.status === "RESTART_FLOW_ERROR" ? (await ne.clearLoginAttemptInfo(), n("resendCodeError", {
          type: "restart_flow_error",
          severity: "error",
          summary: v,
          detail: b,
          json: $
        })) : n("resendCodeSuccess", {
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        });
      } catch ($) {
        n("resendCodeError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: $
        });
      } finally {
        a.value = !1;
      }
    }
    function m() {
      ne.clearLoginAttemptInfo(), n("restartFlow");
    }
    return (v, b) => (p(), g("div", Hr, [
      C(L(ee), { class: "max-w-xl p-0 sm:p-12 w-full mx-auto" }, {
        title: w(() => [
          h("div", Zr, [
            C(L(B), {
              class: "me-4 sm:me-0",
              type: "button",
              variant: "outlined",
              icon: "pi pi-arrow-left",
              "aria-label": "Start over",
              onClick: m
            }),
            b[2] || (b[2] = h("h1", { class: "h1 mt-0 sm:mt-0" }, "Input validation code", -1))
          ])
        ]),
        content: w(() => [
          h("form", {
            class: "spacing-groups",
            onSubmit: b[1] || (b[1] = We(() => {
            }, ["prevent"]))
          }, [
            h("div", Xr, [
              b[4] || (b[4] = h("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
              h("div", null, [
                C(L(Dt), {
                  modelValue: o.value,
                  "onUpdate:modelValue": b[0] || (b[0] = ($) => o.value = $),
                  length: 6,
                  class: "w-50",
                  type: "text",
                  placeholder: "Input email code",
                  required: "",
                  invalid: r.value === !1
                }, null, 8, ["modelValue", "invalid"]),
                r.value === !1 ? (p(), x(L(Xe), {
                  key: 0,
                  severity: "error",
                  size: "small",
                  variant: "simple"
                }, {
                  default: w(() => [
                    q(D(l.value), 1)
                  ]),
                  _: 1
                })) : S("", !0)
              ]),
              C(L(B), {
                class: "w-fit",
                type: "submit",
                loading: u.value,
                onClick: d
              }, {
                default: w(() => b[3] || (b[3] = [
                  q(" Submit code ")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            h("div", Yr, [
              b[6] || (b[6] = h("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
              C(L(B), {
                class: "w-fit",
                type: "button",
                loading: a.value,
                onClick: c
              }, {
                default: w(() => b[5] || (b[5] = [
                  q(" Resend code ")
                ])),
                _: 1
              }, 8, ["loading"])
            ])
          ], 32)
        ]),
        _: 1
      })
    ]));
  }
}), da = /* @__PURE__ */ V({
  __name: "SignInUp",
  emits: [
    "signupStartError",
    "checkMagicLinkSentError",
    "resendCodeSuccess",
    "resendCodeError",
    "verificationCodeSuccess",
    "verificationCodeError",
    "googleCallbackSuccess",
    "googleCallbackError",
    "googleSignInError"
  ],
  setup(e, { emit: t }) {
    const n = t, o = dn(), r = cn(), i = E(!0), s = E(!1);
    ue(async () => {
      s.value = !!await a(), r.currentRoute.value.query.thirdPartyId === "google" && await l();
    });
    const u = ce(() => o.name === "signup" ? "Sign up" : "Sign in");
    async function a() {
      i.value = !0;
      try {
        const m = await ne.getLoginAttemptInfo();
        return m && console.info("Code already sent: ", m), m !== void 0;
      } catch (m) {
        n("checkMagicLinkSentError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: m
        });
      } finally {
        i.value = !1;
      }
    }
    async function l() {
      const m = "Failed to sign in with Google", v = "Please try again later or try another form of login.";
      try {
        i.value = !0;
        const b = await kt.signInAndUp();
        b.status === "OK" ? (console.log("handleGoogleCallback> ", b.user), b.createdNewRecipeUser && b.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), n("googleCallbackSuccess")) : b.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("googleCallbackError", {
          type: "sign_in_up_not_allowed",
          severity: "error",
          summary: m,
          detail: v,
          json: b
        }) : n("googleCallbackError", {
          type: "no_user_email",
          severity: "error",
          summary: m,
          detail: v,
          json: b
        });
      } catch (b) {
        n("googleCallbackError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: b
        });
      } finally {
        i.value = !1;
      }
    }
    function d(m) {
      m.type === "input_code_invalid" && (s.value = !1), n("verificationCodeError", m);
    }
    function c(m) {
      m.type === "restart_flow_error" && (s.value = !1), n("resendCodeError", m);
    }
    return (m, v) => (p(), x(go, { isLoading: i.value }, {
      default: w(() => [
        s.value ? (p(), x(Jr, {
          key: 1,
          pageAuthType: u.value,
          onVerificationCodeSuccess: v[3] || (v[3] = (...b) => m.$emit("verificationCodeSuccess", ...b)),
          onVerificationCodeError: d,
          onResendCodeSuccess: v[4] || (v[4] = (...b) => m.$emit("resendCodeSuccess", ...b)),
          onResendCodeError: c,
          onRestartFlow: v[5] || (v[5] = () => s.value = !1)
        }, null, 8, ["pageAuthType"])) : (p(), x(Br, {
          key: 0,
          pageAuthType: u.value,
          onSendCodeSuccess: v[0] || (v[0] = () => s.value = !0),
          onSignupStartError: v[1] || (v[1] = (b) => m.$emit("signupStartError", b)),
          onGoogleSignInError: v[2] || (v[2] = (b) => m.$emit("googleSignInError", b))
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  la as Account,
  sa as AppErrorInfo,
  ua as PageInfiniteLoader,
  go as PageLoader,
  da as SignInUp,
  aa as SiteNavigation,
  vo as ThemeToggle
};
