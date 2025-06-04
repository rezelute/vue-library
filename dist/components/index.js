import { useId as Dt, mergeProps as f, createElementBlock as g, openBlock as m, createElementVNode as h, renderSlot as A, createTextVNode as q, toDisplayString as D, resolveComponent as W, resolveDirective as Me, withDirectives as fe, createBlock as x, resolveDynamicComponent as J, withCtx as w, createCommentVNode as S, normalizeClass as U, defineComponent as V, createVNode as C, unref as L, ref as E, computed as de, Fragment as Q, renderList as Ke, normalizeStyle as Nt, normalizeProps as Bt, guardReactiveProps as Rt, Teleport as Ut, Transition as Ue, onMounted as ce, vShow as Wt, mergeModels as Ye, useModel as Gt, withModifiers as We, watch as ht, createStaticVNode as qt } from "vue";
import { r as ae, B as M, i as ue, a as gt, b as z, t as oe, g as vt, s as te, c as G, d as yt, f as se, e as Ht, h as Z, j as Zt, k as Je, P as Te, l as Xt, m as Fe, n as Qe, o as et, p as Ae, q as Yt, u as Jt, v as Qt, w as en, x as Oe, y as Ge, z as R, A as $t, C as tn, E as nn, D as on, F as rn, G as sn, H as an } from "../index-DHZ7F1AQ.js";
import { S as qe, t as It, p as ne } from "../supertokens-vendor-CLachTEX.js";
import { u as un } from "../userStore-CZj93k-U.js";
import { t as j } from "../toastContent-Cmim6dQm.js";
import { v as De } from "../validation-D8iWPwER.js";
import { useRoute as ln, useRouter as dn } from "vue-router";
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
        const i = Array.isArray(o) ? [re(...o)] : Object.entries(o).map(([a, l]) => l ? a : void 0);
        t = i.length ? t.concat(i.filter((a) => !!a)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
var Ee = {};
function cn(e = "pui_id_") {
  return Object.hasOwn(Ee, e) || (Ee[e] = 0), Ee[e]++, `${e}${Ee[e]}`;
}
function mn() {
  let e = [];
  const t = (a, l, s = 999) => {
    const u = r(a, l, s), d = u.value + (u.key === a ? 0 : s) + 1;
    return e.push({ key: a, value: d }), d;
  }, n = (a) => {
    e = e.filter((l) => l.value !== a);
  }, o = (a, l) => r(a).value, r = (a, l, s = 0) => [...e].reverse().find((u) => !0) || { key: a, value: s }, i = (a) => a && parseInt(a.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (a, l, s) => {
      l && (l.style.zIndex = String(t(a, !0, s)));
    },
    clear: (a) => {
      a && (n(i(a)), a.style.zIndex = "");
    },
    getCurrent: (a) => o(a)
  };
}
var le = mn(), ie = {
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
function pn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = Dt();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var tt = M.extend({
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
function fn(e) {
  return wt(e) || bn(e) || St(e) || kt();
}
function bn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function me(e, t) {
  return wt(e) || hn(e, t) || St(e, t) || kt();
}
function kt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function St(e, t) {
  if (e) {
    if (typeof e == "string") return nt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nt(e, t) : void 0;
  }
}
function nt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function hn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, a, l = [], s = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (o = i.call(n)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw r;
      }
    }
    return l;
  }
}
function wt(e) {
  if (Array.isArray(e)) return e;
}
function ot(e, t) {
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
    t % 2 ? ot(Object(n), !0).forEach(function(o) {
      pe(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function pe(e, t, n) {
  return (t = gn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gn(e) {
  var t = vn(e, "string");
  return be(t) == "symbol" ? t : t + "";
}
function vn(e, t) {
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
    var t, n, o, r, i, a, l, s, u, d, c, p = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, v = p ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, b = p ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = b || v) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (i = r.onBeforeCreate) === null || i === void 0 || i.call(r);
    var $ = (a = this.$primevueConfig) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a._usept, k = $ ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.originalValue : void 0, O = $ ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (d = O || k) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = pn(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = se(Ht(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = P({
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
      return yt(t) ? t.apply(void 0, o) : f.apply(void 0, o);
    },
    _load: function() {
      ie.isStyleNameLoaded("base") || (M.loadCSS(this.$styleOptions), this._loadGlobalStyles(), ie.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !ie.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (tt.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), ie.setLoadedStyleName(this.$style.name));
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
          var o, r, i = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, a = i.primitive, l = i.semantic, s = i.global, u = i.style;
          M.load(a == null ? void 0 : a.css, P({
            name: "primitive-variables"
          }, this.$styleOptions)), M.load(l == null ? void 0 : l.css, P({
            name: "semantic-variables"
          }, this.$styleOptions)), M.load(s == null ? void 0 : s.css, P({
            name: "global-variables"
          }, this.$styleOptions)), M.loadStyle(P({
            name: "global-style"
          }, this.$styleOptions), u), G.setLoadedStyleName("common");
        }
        if (!G.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, p, v, b = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, $ = b.css, k = b.style;
          (p = this.$style) === null || p === void 0 || p.load($, P({
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
      var n, o, r, i = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, a = i.css, l = (r = this.$style) === null || r === void 0 ? void 0 : r.load(a, P({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = l.el;
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
      return vt(t, n, o);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = /./g.test(o) && !!r[o.split(".")[0]], l = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, s = l.mergeSections, u = s === void 0 ? !0 : s, d = l.mergeProps, c = d === void 0 ? !1 : d, p = i ? a ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, v = a ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, P(P({}, r), {}, {
        global: p || {}
      })), b = this._getPTDatasets(o);
      return u || !u && v ? c ? this._mergeProps(c, p, v, b) : P(P(P({}, p), v), b) : P(P({}, v), b);
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
      return ue(t) || gt(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(l) {
        var s, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(l) : l, c = oe(o), p = oe(n.$name);
        return (s = u ? c !== p ? d == null ? void 0 : d[c] : void 0 : d == null ? void 0 : d[c]) !== null && s !== void 0 ? s : d;
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
        var a, l = t._usept || ((a = this.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, s = l.mergeSections, u = s === void 0 ? !0 : s, d = l.mergeProps, c = d === void 0 ? !1 : d, p = i(t.originalValue), v = i(t.value);
        return p === void 0 && v === void 0 ? void 0 : ue(v) ? v : ue(p) ? p : u || !u && v ? c ? this._mergeProps(c, p, v) : P(P({}, p), v) : v;
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
        var r = this._getOptionValue(this.$style.inlineStyles, t, P(P({}, this.$params), o)), i = this._getOptionValue(tt.inlineStyles, t, P(P({}, this.$params), o));
        return [i, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return ae(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, P({}, n.$params)) || ae(o, P({}, n.$params));
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
        var o = me(n, 2), r = o[0], i = o[1], a = r.split(":"), l = fn(a), s = l.slice(1);
        return s == null || s.reduce(function(u, d, c, p) {
          return !u[d] && (u[d] = c === p.length - 1 ? i : {}), u[d];
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
}, yn = `
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
`, $n = M.extend({
  name: "baseicon",
  css: yn
});
function he(e) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, he(e);
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
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? it(Object(n), !0).forEach(function(o) {
      In(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function In(e, t, n) {
  return (t = kn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function kn(e) {
  var t = Sn(e, "string");
  return he(t) == "symbol" ? t : t + "";
}
function Sn(e, t) {
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
  style: $n,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = Z(this.label);
      return rt(rt({}, !this.isUnstyled && {
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
}, xt = {
  name: "SpinnerIcon",
  extends: _e
};
function wn(e, t, n, o, r, i) {
  return m(), g("svg", f({
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
xt.render = wn;
var xn = ({ dt: e }) => `
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
`, Pn = {
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
}, Cn = M.extend({
  name: "badge",
  style: xn,
  classes: Pn
}), _n = {
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
  style: Cn,
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
  return (t = Ln(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ln(e) {
  var t = Tn(e, "string");
  return ge(t) == "symbol" ? t : t + "";
}
function Tn(e, t) {
  if (ge(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ge(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pt = {
  name: "Badge",
  extends: _n,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return re(st(st({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, En = ["data-p"];
function An(e, t, n, o, r, i) {
  return m(), g("span", f({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [A(e.$slots, "default", {}, function() {
    return [q(D(e.value), 1)];
  })], 16, En);
}
Pt.render = An;
function ve(e) {
  "@babel/helpers - typeof";
  return ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ve(e);
}
function at(e, t) {
  return jn(e) || Kn(e, t) || Mn(e, t) || On();
}
function On() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mn(e, t) {
  if (e) {
    if (typeof e == "string") return ut(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ut(e, t) : void 0;
  }
}
function ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Kn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, a, l = [], s = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(s = (o = i.call(n)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw r;
      }
    }
    return l;
  }
}
function jn(e) {
  if (Array.isArray(e)) return e;
}
function lt(e, t) {
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
    t % 2 ? lt(Object(n), !0).forEach(function(o) {
      Ne(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ne(e, t, n) {
  return (t = zn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zn(e) {
  var t = Vn(e, "string");
  return ve(t) == "symbol" ? t : t + "";
}
function Vn(e, t) {
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
    return [Je(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], ae(Je(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var o, r, i;
    return (o = (t == null || (r = t.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: vt,
  _getPTValue: function() {
    var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = function() {
      var F = I._getOptionValue.apply(I, arguments);
      return ue(F) || gt(F) ? {
        class: F
      } : F;
    }, u = ((t = o.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = u.mergeSections, c = d === void 0 ? !0 : d, p = u.mergeProps, v = p === void 0 ? !1 : p, b = l ? I._useDefaultPT(o, o.defaultPT(), s, i, a) : void 0, $ = I._usePT(o, I._getPT(r, o.$name), s, i, _(_({}, a), {}, {
      global: b || {}
    })), k = I._getPTDatasets(o, i);
    return c || !c && $ ? v ? I._mergeProps(o, v, b, $, k) : _(_(_({}, b), $), k) : _(_({}, $), k);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return _(_({}, n === "root" && Ne({}, "".concat(o, "name"), oe(t.$name))), {}, Ne({}, "".concat(o, "section"), oe(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(a) {
      var l, s = o ? o(a) : a, u = oe(n);
      return (l = s == null ? void 0 : s[u]) !== null && l !== void 0 ? l : s;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: r(t.originalValue),
      value: r(t.value)
    } : r(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, a = function(k) {
      return o(k, r, i);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var l, s = n._usept || ((l = t.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, u = s.mergeSections, d = u === void 0 ? !0 : u, c = s.mergeProps, p = c === void 0 ? !1 : c, v = a(n.originalValue), b = a(n.value);
      return v === void 0 && b === void 0 ? void 0 : ue(b) ? b : ue(v) ? v : d || !d && b ? p ? I._mergeProps(t, p, v, b) : _(_({}, v), b) : b;
    }
    return a(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return I._usePT(t, n, o, r, i);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = I._getConfig(o, r), a = {
      nonce: i == null || (t = i.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    I._loadCoreStyles(n, a), I._loadThemeStyles(n, a), I._loadScopedThemeStyles(n, a), I._removeThemeListeners(n), n.$loadStyles = function() {
      return I._loadThemeStyles(n, a);
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
        var a, l, s = ((a = r.$style) === null || a === void 0 || (l = a.getCommonTheme) === null || l === void 0 ? void 0 : l.call(a)) || {}, u = s.primitive, d = s.semantic, c = s.global, p = s.style;
        M.load(u == null ? void 0 : u.css, _({
          name: "primitive-variables"
        }, i)), M.load(d == null ? void 0 : d.css, _({
          name: "semantic-variables"
        }, i)), M.load(c == null ? void 0 : c.css, _({
          name: "global-variables"
        }, i)), M.loadStyle(_({
          name: "global-style"
        }, i), p), G.setLoadedStyleName("common");
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
      var r, i, a, l = ((r = t.$style) === null || r === void 0 || (i = r.getPresetTheme) === null || i === void 0 ? void 0 : i.call(r, o, "[".concat(t.$attrSelector, "]"))) || {}, s = l.css, u = (a = t.$style) === null || a === void 0 ? void 0 : a.load(s, _({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = u.el;
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
  _hook: function(t, n, o, r, i, a) {
    var l, s, u = "on".concat(Zt(n)), d = I._getConfig(r, i), c = o == null ? void 0 : o.$instance, p = I._usePT(c, I._getPT(r == null || (l = r.value) === null || l === void 0 ? void 0 : l.pt, t), I._getOptionValue, "hooks.".concat(u)), v = I._useDefaultPT(c, d == null || (s = d.pt) === null || s === void 0 || (s = s.directives) === null || s === void 0 ? void 0 : s[t], I._getOptionValue, "hooks.".concat(u)), b = {
      el: o,
      binding: r,
      vnode: i,
      prevVnode: a
    };
    p == null || p(c, b), v == null || v(c, b);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return yt(t) ? t.apply(void 0, o) : f.apply(void 0, o);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(l, s, u, d, c) {
      var p, v, b, $;
      s._$instances = s._$instances || {};
      var k = I._getConfig(u, d), O = s._$instances[t] || {}, F = Z(O) ? _(_({}, n), n == null ? void 0 : n.methods) : {};
      s._$instances[t] = _(_({}, O), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: s,
        $binding: u,
        $modifiers: u == null ? void 0 : u.modifiers,
        $value: u == null ? void 0 : u.value,
        $el: O.$el || s || void 0,
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
        $attrSelector: (p = s.$pd) === null || p === void 0 || (p = p[t]) === null || p === void 0 ? void 0 : p.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return I._getPT(k == null ? void 0 : k.pt, void 0, function(y) {
            var T;
            return y == null || (T = y.directives) === null || T === void 0 ? void 0 : T[t];
          });
        },
        isUnstyled: function() {
          var y, T;
          return ((y = s._$instances[t]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.unstyled) !== void 0 ? (T = s._$instances[t]) === null || T === void 0 || (T = T.$binding) === null || T === void 0 || (T = T.value) === null || T === void 0 ? void 0 : T.unstyled : k == null ? void 0 : k.unstyled;
        },
        theme: function() {
          var y;
          return (y = s._$instances[t]) === null || y === void 0 || (y = y.$primevueConfig) === null || y === void 0 ? void 0 : y.theme;
        },
        preset: function() {
          var y;
          return (y = s._$instances[t]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.dt;
        },
        /* instance's methods */
        ptm: function() {
          var y, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return I._getPTValue(s._$instances[t], (y = s._$instances[t]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.pt, T, _({}, Y));
        },
        ptmo: function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return I._getPTValue(s._$instances[t], y, T, Y, !1);
        },
        cx: function() {
          var y, T, Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (y = s._$instances[t]) !== null && y !== void 0 && y.isUnstyled() ? void 0 : I._getOptionValue((T = s._$instances[t]) === null || T === void 0 || (T = T.$style) === null || T === void 0 ? void 0 : T.classes, Y, _({}, Ve));
        },
        sx: function() {
          var y, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Y ? I._getOptionValue((y = s._$instances[t]) === null || y === void 0 || (y = y.$style) === null || y === void 0 ? void 0 : y.inlineStyles, T, _({}, Ve)) : void 0;
        }
      }, F), s.$instance = s._$instances[t], (v = (b = s.$instance)[l]) === null || v === void 0 || v.call(b, s, u, d, c), s["$".concat(t)] = s.$instance, I._hook(t, l, s, u, d, c), s.$pd || (s.$pd = {}), s.$pd[t] = _(_({}, ($ = s.$pd) === null || $ === void 0 ? void 0 : $[t]), {}, {
        name: t,
        instance: s._$instances[t]
      });
    }, r = function(l) {
      var s, u, d, c = l._$instances[t], p = c == null ? void 0 : c.watch, v = function(k) {
        var O, F = k.newValue, K = k.oldValue;
        return p == null || (O = p.config) === null || O === void 0 ? void 0 : O.call(c, F, K);
      }, b = function(k) {
        var O, F = k.newValue, K = k.oldValue;
        return p == null || (O = p["config.ripple"]) === null || O === void 0 ? void 0 : O.call(c, F, K);
      };
      c.$watchersCallback = {
        config: v,
        "config.ripple": b
      }, p == null || (s = p.config) === null || s === void 0 || s.call(c, c == null ? void 0 : c.$primevueConfig), Te.on("config:change", v), p == null || (u = p["config.ripple"]) === null || u === void 0 || u.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), Te.on("config:ripple:change", b);
    }, i = function(l) {
      var s = l._$instances[t].$watchersCallback;
      s && (Te.off("config:change", s.config), Te.off("config:ripple:change", s["config.ripple"]), l._$instances[t].$watchersCallback = void 0);
    };
    return {
      created: function(l, s, u, d) {
        l.$pd || (l.$pd = {}), l.$pd[t] = {
          name: t,
          attrSelector: cn("pd")
        }, o("created", l, s, u, d);
      },
      beforeMount: function(l, s, u, d) {
        var c;
        I._loadStyles((c = l.$pd[t]) === null || c === void 0 ? void 0 : c.instance, s, u), o("beforeMount", l, s, u, d), r(l);
      },
      mounted: function(l, s, u, d) {
        var c;
        I._loadStyles((c = l.$pd[t]) === null || c === void 0 ? void 0 : c.instance, s, u), o("mounted", l, s, u, d);
      },
      beforeUpdate: function(l, s, u, d) {
        o("beforeUpdate", l, s, u, d);
      },
      updated: function(l, s, u, d) {
        var c;
        I._loadStyles((c = l.$pd[t]) === null || c === void 0 ? void 0 : c.instance, s, u), o("updated", l, s, u, d);
      },
      beforeUnmount: function(l, s, u, d) {
        var c;
        i(l), I._removeThemeListeners((c = l.$pd[t]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", l, s, u, d);
      },
      unmounted: function(l, s, u, d) {
        var c;
        (c = l.$pd[t]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", l, s, u, d);
      }
    };
  },
  extend: function() {
    var t = I._getMeta.apply(I, arguments), n = at(t, 2), o = n[0], r = n[1];
    return _({
      extend: function() {
        var a = I._getMeta.apply(I, arguments), l = at(a, 2), s = l[0], u = l[1];
        return I.extend(s, _(_(_({}, r), r == null ? void 0 : r.methods), u));
      }
    }, I._extend(o, r));
  }
}, Fn = ({ dt: e }) => `
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
`, Dn = {
  root: "p-ink"
}, Nn = M.extend({
  name: "ripple-directive",
  style: Fn,
  classes: Dn
}), Bn = I.extend({
  style: Nn
});
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
function Rn(e) {
  return qn(e) || Gn(e) || Wn(e) || Un();
}
function Un() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wn(e, t) {
  if (e) {
    if (typeof e == "string") return Be(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Be(e, t) : void 0;
  }
}
function Gn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qn(e) {
  if (Array.isArray(e)) return Be(e);
}
function Be(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function dt(e, t, n) {
  return (t = Hn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hn(e) {
  var t = Zn(e, "string");
  return ye(t) == "symbol" ? t : t + "";
}
function Zn(e, t) {
  if (ye(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ye(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var je = Bn.extend("ripple", {
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
      n || (n = en("span", dt(dt({
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
        if (!this.isUnstyled() && Fe(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !Qe(r) && !et(r)) {
          var i = Math.max(Ae(o), Yt(o));
          r.style.height = i + "px", r.style.width = i + "px";
        }
        var a = Jt(o), l = t.pageX - a.left + document.body.scrollTop - et(r) / 2, s = t.pageY - a.top + document.body.scrollLeft - Qe(r) / 2;
        r.style.top = s + "px", r.style.left = l + "px", !this.isUnstyled() && Qt(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && Fe(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Fe(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Rn(t.children).find(function(n) {
        return Xt(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Xn = ({ dt: e }) => `
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
  return (t = Yn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yn(e) {
  var t = Jn(e, "string");
  return $e(t) == "symbol" ? t : t + "";
}
function Jn(e, t) {
  if ($e(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if ($e(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qn = {
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
}, eo = M.extend({
  name: "button",
  style: Xn,
  classes: Qn
}), to = {
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
  style: eo,
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
  return (t = no(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function no(e) {
  var t = oo(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function oo(e, t) {
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
  extends: to,
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
    SpinnerIcon: xt,
    Badge: Pt
  },
  directives: {
    ripple: je
  }
}, io = ["data-p"], ro = ["data-p"];
function so(e, t, n, o, r, i) {
  var a = W("SpinnerIcon"), l = W("Badge"), s = Me("ripple");
  return e.asChild ? A(e.$slots, "default", {
    key: 1,
    class: U(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : fe((m(), x(J(e.as), f({
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
          return [e.loadingIcon ? (m(), g("span", f({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (m(), x(a, f({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : A(e.$slots, "icon", f({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (m(), g("span", f({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, io)) : S("", !0)];
        }), h("span", f({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), D(e.label || " "), 17, ro), e.badge ? (m(), x(l, {
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
  }, 16, ["class", "data-p"])), [[s]]);
}
B.render = so;
var ao = ({ dt: e }) => `
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
`, uo = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, lo = M.extend({
  name: "progressspinner",
  style: ao,
  classes: uo
}), co = {
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
  style: lo,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, ze = {
  name: "ProgressSpinner",
  extends: co,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, mo = ["fill", "stroke-width"];
function po(e, t, n, o, r, i) {
  return m(), g("div", f({
    class: e.cx("root"),
    role: "progressbar"
  }, e.ptmi("root")), [(m(), g("svg", f({
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
  }, e.ptm("circle")), null, 16, mo)], 16))], 16);
}
ze.render = po;
const fo = {
  key: 0,
  class: "border flex flex-grow items-center justify-center w-full"
}, bo = { key: 1 }, ho = /* @__PURE__ */ V({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (m(), g("div", fo, [
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
    ])) : (m(), g("div", bo, [
      A(t.$slots, "default")
    ]));
  }
}), go = /* @__PURE__ */ V({
  __name: "ThemeToggle",
  setup(e) {
    const t = localStorage.getItem("theme") || "light", n = E(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    const o = de(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function r() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, a) => (m(), x(L(B), {
      id: "themeToggle",
      icon: o.value,
      variant: "outlined",
      "aria-label": "Toggle theme",
      onClick: a[0] || (a[0] = (l) => r())
    }, null, 8, ["icon"]));
  }
});
var Ct = {
  name: "BarsIcon",
  extends: _e
};
function vo(e, t, n, o, r, i) {
  return m(), g("svg", f({
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
Ct.render = vo;
var yo = ({ dt: e }) => `
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
`, $o = {
  submenu: function(t) {
    var n = t.instance, o = t.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, Io = {
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
}, ko = M.extend({
  name: "menubar",
  style: yo,
  classes: Io,
  inlineStyles: $o
}), _t = {
  name: "AngleDownIcon",
  extends: _e
};
function So(e, t, n, o, r, i) {
  return m(), g("svg", f({
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
_t.render = So;
var He = {
  name: "AngleRightIcon",
  extends: _e
};
function wo(e, t, n, o, r, i) {
  return m(), g("svg", f({
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
He.render = wo;
var xo = {
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
  style: ko,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, Lt = {
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
      return t && t.item ? ae(t.item[n], o) : void 0;
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
    AngleDownIcon: _t
  },
  directives: {
    ripple: je
  }
}, Po = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Co = ["onClick", "onMouseenter", "onMousemove"], _o = ["href", "target"], Lo = ["id"], To = ["id"];
function Eo(e, t, n, o, r, i) {
  var a = W("MenubarSub", !0), l = Me("ripple");
  return m(), g("ul", f({
    class: n.level === 0 ? e.cx("rootList") : e.cx("submenu")
  }, n.level === 0 ? e.ptm("rootList") : e.ptm("submenu")), [(m(!0), g(Q, null, Ke(n.items, function(s, u) {
    return m(), g(Q, {
      key: i.getItemKey(s)
    }, [i.isItemVisible(s) && !i.getItemProp(s, "separator") ? (m(), g("li", f({
      key: 0,
      id: i.getItemId(s),
      style: i.getItemProp(s, "style"),
      class: [e.cx("item", {
        processedItem: s
      }), i.getItemProp(s, "class")],
      role: "menuitem",
      "aria-label": i.getItemLabel(s),
      "aria-disabled": i.isItemDisabled(s) || void 0,
      "aria-expanded": i.isItemGroup(s) ? i.isItemActive(s) : void 0,
      "aria-haspopup": i.isItemGroup(s) && !i.getItemProp(s, "to") ? "menu" : void 0,
      "aria-level": n.level + 1,
      "aria-setsize": i.getAriaSetSize,
      "aria-posinset": i.getAriaPosInset(u),
      ref_for: !0
    }, i.getPTOptions(s, u, "item"), {
      "data-p-active": i.isItemActive(s),
      "data-p-focused": i.isItemFocused(s),
      "data-p-disabled": i.isItemDisabled(s)
    }), [h("div", f({
      class: e.cx("itemContent"),
      onClick: function(c) {
        return i.onItemClick(c, s);
      },
      onMouseenter: function(c) {
        return i.onItemMouseEnter(c, s);
      },
      onMousemove: function(c) {
        return i.onItemMouseMove(c, s);
      },
      ref_for: !0
    }, i.getPTOptions(s, u, "itemContent")), [n.templates.item ? (m(), x(J(n.templates.item), {
      key: 1,
      item: s.item,
      root: n.root,
      hasSubmenu: i.getItemProp(s, "items"),
      label: i.getItemLabel(s),
      props: i.getMenuItemProps(s, u)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : fe((m(), g("a", f({
      key: 0,
      href: i.getItemProp(s, "url"),
      class: e.cx("itemLink"),
      target: i.getItemProp(s, "target"),
      tabindex: "-1",
      ref_for: !0
    }, i.getPTOptions(s, u, "itemLink")), [n.templates.itemicon ? (m(), x(J(n.templates.itemicon), {
      key: 0,
      item: s.item,
      class: U(e.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(s, "icon") ? (m(), g("span", f({
      key: 1,
      class: [e.cx("itemIcon"), i.getItemProp(s, "icon")],
      ref_for: !0
    }, i.getPTOptions(s, u, "itemIcon")), null, 16)) : S("", !0), h("span", f({
      id: i.getItemLabelId(s),
      class: e.cx("itemLabel"),
      ref_for: !0
    }, i.getPTOptions(s, u, "itemLabel")), D(i.getItemLabel(s)), 17, Lo), i.getItemProp(s, "items") ? (m(), g(Q, {
      key: 2
    }, [n.templates.submenuicon ? (m(), x(J(n.templates.submenuicon), {
      key: 0,
      root: n.root,
      active: i.isItemActive(s),
      class: U(e.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (m(), x(J(n.root ? "AngleDownIcon" : "AngleRightIcon"), f({
      key: 1,
      class: e.cx("submenuIcon"),
      ref_for: !0
    }, i.getPTOptions(s, u, "submenuIcon")), null, 16, ["class"]))], 64)) : S("", !0)], 16, _o)), [[l]])], 16, Co), i.isItemVisible(s) && i.isItemGroup(s) ? (m(), x(a, {
      key: 0,
      id: i.getItemId(s) + "_list",
      menuId: n.menuId,
      role: "menu",
      style: Nt(e.sx("submenu", !0, {
        processedItem: s
      })),
      focusedItemId: n.focusedItemId,
      items: s.items,
      mobileActive: n.mobileActive,
      activeItemPath: n.activeItemPath,
      templates: n.templates,
      level: n.level + 1,
      "aria-labelledby": i.getItemLabelId(s),
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
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : S("", !0)], 16, Po)) : S("", !0), i.isItemVisible(s) && i.getItemProp(s, "separator") ? (m(), g("li", f({
      key: 1,
      id: i.getItemId(s),
      class: [e.cx("separator"), i.getItemProp(s, "class")],
      style: i.getItemProp(s, "style"),
      role: "separator",
      ref_for: !0
    }, e.ptm("separator")), null, 16, To)) : S("", !0)], 64);
  }), 128))], 16);
}
Lt.render = Eo;
var Tt = {
  name: "Menubar",
  extends: xo,
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
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && le.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(t, n) {
      return t ? ae(t[n]) : void 0;
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
      this.mobileActive ? (this.mobileActive = !1, le.clear(this.menubar), this.hide()) : (this.mobileActive = !0, le.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
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
          !n && $t(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t, n) {
      var o = t.processedItem, r = t.isFocus;
      if (!Z(o)) {
        var i = o.index, a = o.key, l = o.level, s = o.parentKey, u = o.items, d = z(u), c = this.activeItemPath.filter(function(p) {
          return p.parentKey !== s && p.parentKey !== a;
        });
        d && c.push(o), this.focusedItemInfo = {
          index: i,
          level: l,
          parentKey: s
        }, d && (this.dirty = !0), r && R(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onItemClick: function(t) {
      var n = t.originalEvent, o = t.processedItem, r = this.isProccessedItemGroup(o), i = Z(o.parent), a = this.isSelected(o);
      if (a) {
        var l = o.index, s = o.key, u = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return s !== p.key && s.startsWith(p.key);
        }), this.focusedItemInfo = {
          index: l,
          level: u,
          parentKey: d
        }, this.dirty = !i, R(this.menubar);
      } else if (r)
        this.onItemChange(t);
      else {
        var c = i ? o : this.activeItemPath.find(function(p) {
          return p.parentKey === "";
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
          var a = this.findLastItemIndex();
          this.changeFocusedItemIndex(t, a);
        }
      } else {
        var l = this.activeItemPath.find(function(u) {
          return u.key === o.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: l ? l.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(t), this.activeItemPath = this.activeItemPath.filter(function(u) {
            return u.parentKey !== n.focusedItemInfo.parentKey;
          });
        else {
          var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(t, s);
        }
      }
      t.preventDefault();
    },
    onArrowLeftKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = o ? this.activeItemPath.find(function(a) {
        return a.key === o.parentKey;
      }) : null;
      if (r)
        this.onItemChange({
          originalEvent: t,
          processedItem: r
        }), this.activeItemPath = this.activeItemPath.filter(function(a) {
          return a.parentKey !== n.focusedItemInfo.parentKey;
        }), t.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onArrowRightKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = n ? this.activeItemPath.find(function(a) {
        return a.key === n.parentKey;
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
        var n = se(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && se(n, 'a[data-pc-section="itemlink"]');
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
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(a) {
        return o.isItemMatched(a);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = t !== -1 ? "".concat(this.$id, "_").concat(t) : this.focusedItemId, o = se(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return t && t.forEach(function(l, s) {
        var u = (i !== "" ? i + "_" : "") + s, d = {
          item: l,
          index: s,
          level: o,
          key: u,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(l.items, o + 1, d, u), a.push(d);
      }), a;
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
    MenubarSub: Lt,
    BarsIcon: Ct
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
function ct(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ct(Object(n), !0).forEach(function(o) {
      Ao(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ao(e, t, n) {
  return (t = Oo(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oo(e) {
  var t = Mo(e, "string");
  return ke(t) == "symbol" ? t : t + "";
}
function Mo(e, t) {
  if (ke(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (ke(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ko = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function jo(e, t, n, o, r, i) {
  var a = W("BarsIcon"), l = W("MenubarSub");
  return m(), g("div", f({
    ref: i.containerRef,
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.start ? (m(), g("div", f({
    key: 0,
    class: e.cx("start")
  }, e.ptm("start")), [A(e.$slots, "start")], 16)) : S("", !0), A(e.$slots, e.$slots.button ? "button" : "menubutton", {
    id: e.$id,
    class: U(e.cx("button")),
    toggleCallback: function(u) {
      return i.menuButtonClick(u);
    }
  }, function() {
    var s;
    return [e.model && e.model.length > 0 ? (m(), g("a", f({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: e.cx("button"),
      "aria-haspopup": !!(e.model.length && e.model.length > 0),
      "aria-expanded": r.mobileActive,
      "aria-controls": e.$id,
      "aria-label": (s = e.$primevue.config.locale.aria) === null || s === void 0 ? void 0 : s.navigation,
      onClick: t[0] || (t[0] = function(u) {
        return i.menuButtonClick(u);
      }),
      onKeydown: t[1] || (t[1] = function(u) {
        return i.menuButtonKeydown(u);
      })
    }, mt(mt({}, e.buttonProps), e.ptm("button"))), [A(e.$slots, e.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [C(a, Bt(Rt(e.ptm("buttonicon"))), null, 16)];
    })], 16, Ko)) : S("", !0)];
  }), C(l, {
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
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (m(), g("div", f({
    key: 1,
    class: e.cx("end")
  }, e.ptm("end")), [A(e.$slots, "end")], 16)) : S("", !0)], 16);
}
Tt.render = jo;
function Se(e) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(e);
}
function zo(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Vo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Do(o.key), o);
  }
}
function Fo(e, t, n) {
  return t && Vo(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Do(e) {
  var t = No(e, "string");
  return Se(t) == "symbol" ? t : t + "";
}
function No(e, t) {
  if (Se(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Se(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Bo = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    zo(this, e), this.element = t, this.listener = n;
  }
  return Fo(e, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = tn(this.element);
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
}(), Ro = nn(), Et = {
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
    this.mounted = on();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Uo(e, t, n, o, r, i) {
  return i.inline ? A(e.$slots, "default", {
    key: 0
  }) : r.mounted ? (m(), x(Ut, {
    key: 1,
    to: n.appendTo
  }, [A(e.$slots, "default")], 8, ["to"])) : S("", !0);
}
Et.render = Uo;
var Wo = ({ dt: e }) => `
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
`, Go = {
  submenu: function(t) {
    var n = t.instance, o = t.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, qo = {
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
}, Ho = M.extend({
  name: "tieredmenu",
  style: Wo,
  classes: qo,
  inlineStyles: Go
}), Zo = {
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
  style: Ho,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, At = {
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
      return t && t.item ? ae(t.item[n], o) : void 0;
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
      an(this.container, this.level);
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
}, Xo = ["tabindex"], Yo = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Jo = ["onClick", "onMouseenter", "onMousemove"], Qo = ["href", "target"], ei = ["id"], ti = ["id"];
function ni(e, t, n, o, r, i) {
  var a = W("AngleRightIcon"), l = W("TieredMenuSub", !0), s = Me("ripple");
  return m(), x(Ue, f({
    name: "p-tieredmenu",
    onEnter: i.onEnter
  }, e.ptm("menu.transition")), {
    default: w(function() {
      return [n.level === 0 || n.visible ? (m(), g("ul", {
        key: 0,
        ref: i.containerRef,
        tabindex: n.tabindex
      }, [(m(!0), g(Q, null, Ke(n.items, function(u, d) {
        return m(), g(Q, {
          key: i.getItemKey(u)
        }, [i.isItemVisible(u) && !i.getItemProp(u, "separator") ? (m(), g("li", f({
          key: 0,
          id: i.getItemId(u),
          style: i.getItemProp(u, "style"),
          class: [e.cx("item", {
            processedItem: u
          }), i.getItemProp(u, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(u),
          "aria-disabled": i.isItemDisabled(u) || void 0,
          "aria-expanded": i.isItemGroup(u) ? i.isItemActive(u) : void 0,
          "aria-haspopup": i.isItemGroup(u) && !i.getItemProp(u, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(d),
          ref_for: !0
        }, i.getPTOptions(u, d, "item"), {
          "data-p-active": i.isItemActive(u),
          "data-p-focused": i.isItemFocused(u),
          "data-p-disabled": i.isItemDisabled(u)
        }), [h("div", f({
          class: e.cx("itemContent"),
          onClick: function(p) {
            return i.onItemClick(p, u);
          },
          onMouseenter: function(p) {
            return i.onItemMouseEnter(p, u);
          },
          onMousemove: function(p) {
            return i.onItemMouseMove(p, u);
          },
          ref_for: !0
        }, i.getPTOptions(u, d, "itemContent")), [n.templates.item ? (m(), x(J(n.templates.item), {
          key: 1,
          item: u.item,
          hasSubmenu: i.getItemProp(u, "items"),
          label: i.getItemLabel(u),
          props: i.getMenuItemProps(u, d)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : fe((m(), g("a", f({
          key: 0,
          href: i.getItemProp(u, "url"),
          class: e.cx("itemLink"),
          target: i.getItemProp(u, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions(u, d, "itemLink")), [n.templates.itemicon ? (m(), x(J(n.templates.itemicon), {
          key: 0,
          item: u.item,
          class: U(e.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(u, "icon") ? (m(), g("span", f({
          key: 1,
          class: [e.cx("itemIcon"), i.getItemProp(u, "icon")],
          ref_for: !0
        }, i.getPTOptions(u, d, "itemIcon")), null, 16)) : S("", !0), h("span", f({
          id: i.getItemLabelId(u),
          class: e.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions(u, d, "itemLabel")), D(i.getItemLabel(u)), 17, ei), i.getItemProp(u, "items") ? (m(), g(Q, {
          key: 2
        }, [n.templates.submenuicon ? (m(), x(J(n.templates.submenuicon), f({
          key: 0,
          class: e.cx("submenuIcon"),
          active: i.isItemActive(u),
          ref_for: !0
        }, i.getPTOptions(u, d, "submenuIcon")), null, 16, ["class", "active"])) : (m(), x(a, f({
          key: 1,
          class: e.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions(u, d, "submenuIcon")), null, 16, ["class"]))], 64)) : S("", !0)], 16, Qo)), [[s]])], 16, Jo), i.isItemVisible(u) && i.isItemGroup(u) ? (m(), x(l, f({
          key: 0,
          id: i.getItemId(u) + "_list",
          class: e.cx("submenu"),
          style: e.sx("submenu", !0, {
            processedItem: u
          }),
          "aria-labelledby": i.getItemLabelId(u),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: u.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: i.isItemActive(u) && i.isItemGroup(u),
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
        }, e.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : S("", !0)], 16, Yo)) : S("", !0), i.isItemVisible(u) && i.getItemProp(u, "separator") ? (m(), g("li", f({
          key: 1,
          id: i.getItemId(u),
          style: i.getItemProp(u, "style"),
          class: [e.cx("separator"), i.getItemProp(u, "class")],
          role: "separator",
          ref_for: !0
        }, e.ptm("separator")), null, 16, ti)) : S("", !0)], 64);
      }), 128))], 8, Xo)) : S("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
At.render = ni;
var Ot = {
  name: "TieredMenu",
  extends: Zo,
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
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && le.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(t, n) {
      return t ? ae(t[n]) : void 0;
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
          !n && $t(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t, n) {
      var o = t.processedItem, r = t.isFocus;
      if (!Z(o)) {
        var i = o.index, a = o.key, l = o.level, s = o.parentKey, u = o.items, d = z(u), c = this.activeItemPath.filter(function(p) {
          return p.parentKey !== s && p.parentKey !== a;
        });
        d && (c.push(o), this.submenuVisible = !0), this.focusedItemInfo = {
          index: i,
          level: l,
          parentKey: s
        }, d && (this.dirty = !0), r && R(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onOverlayClick: function(t) {
      Ro.emit("overlay-click", {
        originalEvent: t,
        target: this.target
      });
    },
    onItemClick: function(t) {
      var n = t.originalEvent, o = t.processedItem, r = this.isProccessedItemGroup(o), i = Z(o.parent), a = this.isSelected(o);
      if (a) {
        var l = o.index, s = o.key, u = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return s !== p.key && s.startsWith(p.key);
        }), this.focusedItemInfo = {
          index: l,
          level: u,
          parentKey: d
        }, this.dirty = !i, R(this.menubar);
      } else if (r)
        this.onItemChange(t);
      else {
        var c = i ? o : this.activeItemPath.find(function(p) {
          return p.parentKey === "";
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
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = this.activeItemPath.find(function(a) {
        return a.key === o.parentKey;
      }), i = Z(o.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: r ? r.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(t)), this.activeItemPath = this.activeItemPath.filter(function(a) {
        return a.parentKey !== n.focusedItemInfo.parentKey;
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
        var n = se(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && se(n, '[data-pc-section="itemlink"]');
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
      this.autoZIndex && le.set("menu", t, this.baseZIndex + this.$primevue.config.zIndex.menu), sn(t, {
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
      this.autoZIndex && le.clear(t);
    },
    alignOverlay: function() {
      rn(this.container, this.target);
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
      this.scrollHandler || (this.scrollHandler = new Bo(this.target, function(n) {
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
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(a) {
        return o.isItemMatched(a);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = t !== -1 ? "".concat(this.$id, "_").concat(t) : this.focusedItemId, o = se(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return t && t.forEach(function(l, s) {
        var u = (i !== "" ? i + "_" : "") + s, d = {
          item: l,
          index: s,
          level: o,
          key: u,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(l.items, o + 1, d, u), a.push(d);
      }), a;
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
    TieredMenuSub: At,
    Portal: Et
  }
}, oi = ["id"];
function ii(e, t, n, o, r, i) {
  var a = W("TieredMenuSub"), l = W("Portal");
  return m(), x(l, {
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
          return [r.visible ? (m(), g("div", f({
            key: 0,
            ref: i.containerRef,
            id: e.$id,
            class: e.cx("root"),
            onClick: t[0] || (t[0] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            })
          }, e.ptmi("root")), [e.$slots.start ? (m(), g("div", f({
            key: 0,
            class: e.cx("start")
          }, e.ptm("start")), [A(e.$slots, "start")], 16)) : S("", !0), C(a, f({
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
          }, e.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (m(), g("div", f({
            key: 1,
            class: e.cx("end")
          }, e.ptm("end")), [A(e.$slots, "end")], 16)) : S("", !0)], 16, oi)) : S("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
Ot.render = ii;
const ri = { class: "bg-surface-0 dark:bg-surface-900" }, si = { class: "container" }, ai = { class: "flex gap-5" }, ui = { class: "hidden lg:flex items-center gap-5" }, li = { class: "lg:hidden" }, di = { class: "ml-2" }, rs = /* @__PURE__ */ V({
  name: "SiteNavigation",
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  emits: ["signoutSuccess", "signoutError"],
  setup(e, { emit: t }) {
    const n = t, o = e, r = un(), i = E(!1), a = E(null), l = E([
      { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), s = de(() => o.userSignedIn ? o.items : [...o.items || [], ...l.value]), u = de(() => [...s.value]), d = (p) => {
      var v;
      (v = a.value) == null || v.toggle(p);
    };
    async function c() {
      try {
        i.value = !0, await qe.signOut(), r.updateAuth(), console.log("emitting signoutSuccess"), n("signoutSuccess");
      } catch (p) {
        n("signoutError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: p
        });
      } finally {
        i.value = !1;
      }
    }
    return (p, v) => {
      const b = W("RouterLink"), $ = W("router-link");
      return m(), g("header", ri, [
        h("div", si, [
          C(L(Tt), { model: [] }, {
            start: w(() => [
              C(L(B), {
                asChild: "",
                variant: "link"
              }, {
                default: w((k) => [
                  C(b, {
                    to: p.userSignedIn ? "/home" : "/",
                    class: U(k.class)
                  }, {
                    default: w(() => [
                      A(p.$slots, "logo")
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]),
                _: 3
              })
            ]),
            end: w(() => [
              h("div", ai, [
                h("div", ui, [
                  (m(!0), g(Q, null, Ke(s.value, (k) => (m(), g("div", {
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
                  p.userSignedIn ? (m(), x(L(B), {
                    key: 0,
                    icon: "pi pi-sign-out",
                    "aria-label": "Sign out",
                    variant: "outlined",
                    loading: i.value,
                    onClick: c
                  }, null, 8, ["loading"])) : S("", !0)
                ]),
                h("div", li, [
                  C(L(B), {
                    icon: "pi pi-bars",
                    "aria-label": "Navigation menu",
                    "aria-haspopup": "true",
                    "aria-controls": "overlay_tmenu",
                    onClick: d
                  }),
                  C(L(Ot), {
                    id: "overlay_tmenu",
                    ref_key: "tieredMenu",
                    ref: a,
                    model: u.value,
                    popup: ""
                  }, {
                    item: w(({ item: k, props: O }) => [
                      k.to ? (m(), x($, f({
                        key: 0,
                        to: k.to
                      }, O.action), {
                        default: w(() => [
                          h("span", {
                            class: U(k.icon)
                          }, null, 2),
                          h("span", di, D(k.label), 1)
                        ]),
                        _: 2
                      }, 1040, ["to"])) : S("", !0),
                      p.userSignedIn ? (m(), x(L(B), {
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
                C(go, { class: "ms-2" })
              ])
            ]),
            _: 3
          })
        ])
      ]);
    };
  }
});
var ci = ({ dt: e }) => `
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
`, mi = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, pi = M.extend({
  name: "card",
  style: ci,
  classes: mi
}), fi = {
  name: "BaseCard",
  extends: H,
  style: pi,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, ee = {
  name: "Card",
  extends: fi,
  inheritAttrs: !1
};
function bi(e, t, n, o, r, i) {
  return m(), g("div", f({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (m(), g("div", f({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [A(e.$slots, "header")], 16)) : S("", !0), h("div", f({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (m(), g("div", f({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (m(), g("div", f({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [A(e.$slots, "title")], 16)) : S("", !0), e.$slots.subtitle ? (m(), g("div", f({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [A(e.$slots, "subtitle")], 16)) : S("", !0)], 16)) : S("", !0), h("div", f({
    class: e.cx("content")
  }, e.ptm("content")), [A(e.$slots, "content")], 16), e.$slots.footer ? (m(), g("div", f({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [A(e.$slots, "footer")], 16)) : S("", !0)], 16)], 16);
}
ee.render = bi;
const ss = /* @__PURE__ */ V({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(e) {
    const t = e;
    return ce(() => {
      console.error("App error: ", t.error);
    }), (n, o) => (m(), x(L(ee), { class: "p-10" }, {
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
}), hi = {
  key: 0,
  class: "bar"
}, gi = /* @__PURE__ */ V({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (m(), g("div", hi, n[0] || (n[0] = [
      h("div", null, null, -1)
    ]))) : S("", !0);
  }
}), Mt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, as = /* @__PURE__ */ Mt(gi, [["__scopeId", "data-v-a36ba306"]]);
var vi = {
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
}, Kt = {
  name: "BaseInput",
  extends: vi,
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
}, yi = ({ dt: e }) => `
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
`, $i = {
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
}, Ii = M.extend({
  name: "inputtext",
  style: yi,
  classes: $i
}), ki = {
  name: "BaseInputText",
  extends: Kt,
  style: Ii,
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
function Si(e, t, n) {
  return (t = wi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wi(e) {
  var t = xi(e, "string");
  return we(t) == "symbol" ? t : t + "";
}
function xi(e, t) {
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
  extends: ki,
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
      return re(Si({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Pi = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Ci(e, t, n, o, r, i) {
  return m(), g("input", f({
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
  }, i.attrs), null, 16, Pi);
}
Ze.render = Ci;
var jt = {
  name: "TimesIcon",
  extends: _e
};
function _i(e, t, n, o, r, i) {
  return m(), g("svg", f({
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
jt.render = _i;
var Li = ({ dt: e }) => `
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
`, Ti = {
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
}, Ei = M.extend({
  name: "message",
  style: Li,
  classes: Ti
}), Ai = {
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
  style: Ei,
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
function pt(e, t, n) {
  return (t = Oi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oi(e) {
  var t = Mi(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function Mi(e, t) {
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
  extends: Ai,
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
      return re(pt(pt({
        outlined: this.variant === "outlined",
        simple: this.variant === "simple"
      }, this.severity, this.severity), this.size, this.size));
    }
  },
  directives: {
    ripple: je
  },
  components: {
    TimesIcon: jt
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
function ft(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ft(Object(n), !0).forEach(function(o) {
      Ki(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ki(e, t, n) {
  return (t = ji(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ji(e) {
  var t = zi(e, "string");
  return Pe(t) == "symbol" ? t : t + "";
}
function zi(e, t) {
  if (Pe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Pe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vi = ["data-p"], Fi = ["data-p"], Di = ["data-p"], Ni = ["aria-label", "data-p"], Bi = ["data-p"];
function Ri(e, t, n, o, r, i) {
  var a = W("TimesIcon"), l = Me("ripple");
  return m(), x(Ue, f({
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
      }) : (m(), g("div", f({
        key: 1,
        class: e.cx("content"),
        "data-p": i.dataP
      }, e.ptm("content")), [A(e.$slots, "icon", {
        class: U(e.cx("icon"))
      }, function() {
        return [(m(), x(J(e.icon ? "span" : null), f({
          class: [e.cx("icon"), e.icon],
          "data-p": i.dataP
        }, e.ptm("icon")), null, 16, ["class", "data-p"]))];
      }), e.$slots.default ? (m(), g("div", f({
        key: 0,
        class: e.cx("text"),
        "data-p": i.dataP
      }, e.ptm("text")), [A(e.$slots, "default")], 16, Di)) : S("", !0), e.closable ? fe((m(), g("button", f({
        key: 1,
        class: e.cx("closeButton"),
        "aria-label": i.closeAriaLabel,
        type: "button",
        onClick: t[0] || (t[0] = function(s) {
          return i.close(s);
        }),
        "data-p": i.dataP
      }, bt(bt({}, e.closeButtonProps), e.ptm("closeButton"))), [A(e.$slots, "closeicon", {}, function() {
        return [e.closeIcon ? (m(), g("i", f({
          key: 0,
          class: [e.cx("closeIcon"), e.closeIcon],
          "data-p": i.dataP
        }, e.ptm("closeIcon")), null, 16, Bi)) : (m(), x(a, f({
          key: 1,
          class: [e.cx("closeIcon"), e.closeIcon],
          "data-p": i.dataP
        }, e.ptm("closeIcon")), null, 16, ["class", "data-p"]))];
      })], 16, Ni)), [[l]]) : S("", !0)], 16, Fi))], 16, Vi), [[Wt, r.visible]])];
    }),
    _: 3
  }, 16);
}
Xe.render = Ri;
const Ui = {
  key: 0,
  for: "email"
}, Wi = "Please enter a valid email address", zt = /* @__PURE__ */ V({
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
    const n = Gt(e, "email"), o = e, r = t;
    ce(() => {
      r("validity-changed", De(n.value));
    });
    const i = de(() => o.isSubmitClicked && !De(n.value));
    function a(l) {
      const s = l ?? "";
      n.value = s, r("validity-changed", De(s));
    }
    return (l, s) => (m(), g("div", null, [
      l.labelText ? (m(), g("label", Ui, D(l.labelText), 1)) : S("", !0),
      C(L(Ze), {
        id: "email",
        modelValue: n.value,
        invalid: i.value,
        placeholder: "Email",
        required: "",
        class: "w-full",
        "onUpdate:modelValue": a
      }, null, 8, ["modelValue", "invalid"]),
      i.value ? (m(), x(L(Xe), {
        key: 1,
        severity: "error",
        size: "small",
        variant: "simple"
      }, {
        default: w(() => [
          q(D(Wi))
        ]),
        _: 1
      })) : S("", !0)
    ]));
  }
}), Gi = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), qi = async (e) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: e })
}), Hi = async (e) => await fetch("https://localhost:443/auth/user/email/verify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ token: e })
}), Zi = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), Xi = async (e) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": e,
    "Content-Type": "application/json"
  }
}), Le = { getEmail: Gi, updateEmail: Hi, requestEmailChange: qi, requestDelete: Zi, deleteAccount: Xi }, Yi = { class: "flex flex-col items-center gap-4 text-center" }, Ji = { class: "flex flex-col gap-2" }, Vt = /* @__PURE__ */ V({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(e) {
    return (t, n) => (m(), g("div", Yi, [
      h("i", {
        class: U([t.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      h("div", Ji, [
        A(t.$slots, "default")
      ])
    ]));
  }
}), Qi = {
  key: 0,
  class: "spacing-elements"
}, er = { class: "text-primary break-all px-2" }, tr = "No changes have been made", nr = "The new email address you provided is the same as the current one. Please enter a different email address.", or = "Email updated successfully", ir = "We have updated your email address successfully.", rr = /* @__PURE__ */ V({
  __name: "ChangeEmailRequest",
  emits: ["changeEmailRequestError", "changeEmailActionSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = E("mytestemail1235667@gmail.com"), r = E(!1), i = E(!1), a = E(!1), l = E(!1);
    async function s() {
      if (l.value = !0, !!a.value)
        try {
          r.value = !0;
          const u = await Le.requestEmailChange(o.value);
          if (console.log("Change email request - response: ", u), !u.ok)
            throw u;
          const d = await u.json();
          u.ok && d.message === "Email updated" ? n("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: or,
            detail: ir
          }) : i.value = !0;
        } catch (u) {
          if (i.value = !1, u instanceof Response) {
            const d = await u.json();
            d.error === "EMAIL_SAME_AS_CURRENT" && n("changeEmailRequestError", {
              type: "email_same_as_current",
              severity: "info",
              summary: tr,
              detail: nr,
              json: d
            });
          } else
            n("changeEmailRequestError", {
              type: "unexpected",
              severity: "error",
              summary: j.error.somethingWentWrong.summary,
              detail: j.error.somethingWentWrong.detail,
              json: u
            });
        } finally {
          r.value = !1;
        }
    }
    return (u, d) => (m(), x(L(ee), null, {
      title: w(() => d[2] || (d[2] = [
        h("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: w(() => [
        i.value ? (m(), x(Vt, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: w(() => [
            h("p", null, [
              d[5] || (d[5] = h("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              h("strong", er, D(o.value), 1),
              d[6] || (d[6] = h("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (m(), g("div", Qi, [
          d[4] || (d[4] = h("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          h("form", {
            class: "spacing-form",
            onSubmit: We(s, ["prevent"])
          }, [
            C(zt, {
              email: o.value,
              "onUpdate:email": d[0] || (d[0] = (c) => o.value = c),
              isSubmitClicked: l.value,
              labelText: "Enter your new email",
              onValidityChanged: d[1] || (d[1] = (c) => {
                a.value = c;
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
}, ar = /* @__PURE__ */ V({
  __name: "DeleteAccountRequest",
  emits: ["deleteAccountRequestError", "deleteAccountRequestSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = E(!1), r = E(!1);
    async function i() {
      try {
        r.value = !0;
        const a = await Le.requestDelete();
        if (a.ok)
          o.value = !0, n("deleteAccountRequestSuccess");
        else
          throw a;
      } catch (a) {
        o.value = !1, n("deleteAccountRequestError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: a
        });
      } finally {
        r.value = !1;
      }
    }
    return (a, l) => (m(), x(L(ee), null, {
      title: w(() => l[0] || (l[0] = [
        h("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: w(() => [
        o.value ? (m(), x(Vt, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: w(() => l[3] || (l[3] = [
            h("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (m(), g("div", sr, [
          l[2] || (l[2] = h("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          C(L(B), {
            type: "button",
            isLoading: r.value,
            onClick: i
          }, {
            default: w(() => l[1] || (l[1] = [
              q("Send deletion email")
            ])),
            _: 1
          }, 8, ["isLoading"])
        ]))
      ]),
      _: 1
    }));
  }
}), ur = { class: "spacing-elements p-12" }, lr = /* @__PURE__ */ V({
  __name: "DeleteAccountAction",
  props: {
    deleteToken: {}
  },
  emits: ["deleteAccountError", "deleteAccountSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = e;
    ce(() => {
      o.deleteToken && r();
    });
    async function r() {
      const i = "We failed to delete your account!", a = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const l = await Le.deleteAccount(o.deleteToken);
        if (!l.ok)
          throw l;
        await qe.signOut(), n("deleteAccountSuccess");
      } catch (l) {
        n("deleteAccountError", {
          type: "unexpected",
          severity: "error",
          summary: i,
          detail: a,
          json: l
        });
      }
    }
    return (i, a) => (m(), x(L(ee), null, {
      content: w(() => [
        h("div", ur, [
          a[0] || (a[0] = h("p", { class: "text-2xl" }, "Deleting your account, please dont close this window.", -1)),
          C(L(ze))
        ])
      ]),
      _: 1
    }));
  }
});
var dr = ({ dt: e }) => `
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
`, cr = {
  root: {
    position: "relative"
  }
}, mr = {
  root: function(t) {
    var n = t.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": n.shape === "circle",
      "p-skeleton-animation-none": n.animation === "none"
    }];
  }
}, pr = M.extend({
  name: "skeleton",
  style: dr,
  classes: mr,
  inlineStyles: cr
}), fr = {
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
  style: pr,
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
function br(e, t, n) {
  return (t = hr(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hr(e) {
  var t = gr(e, "string");
  return Ce(t) == "symbol" ? t : t + "";
}
function gr(e, t) {
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
  extends: fr,
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
      return re(br({}, this.shape, this.shape));
    }
  }
}, vr = ["data-p"];
function yr(e, t, n, o, r, i) {
  return m(), g("div", f({
    class: e.cx("root"),
    style: [e.sx("root"), i.containerStyle],
    "aria-hidden": "true"
  }, e.ptmi("root"), {
    "data-p": i.dataP
  }), null, 16, vr);
}
Re.render = yr;
const $r = {
  key: 0,
  class: "spacing-elements"
}, Ir = {
  key: 0,
  class: "flex flex-row gap-2"
}, kr = { class: "text-primary break-all" }, Sr = {
  key: 1,
  class: "flex flex-row gap-2"
}, wr = { class: "text-primary break-all px-2" }, xr = {
  key: 1,
  class: "spacing-elements"
}, Pr = /* @__PURE__ */ V({
  __name: "UserAccountInfo",
  props: {
    updatedEmailDate: {}
  },
  setup(e) {
    const t = E(""), n = E(""), o = E(!1), r = e;
    ce(async () => {
      await a(), await i();
    }), ht(
      () => r.updatedEmailDate,
      async () => {
        await i();
      }
    );
    async function i() {
      try {
        o.value = !0;
        const l = await Le.getEmail();
        if (!l.ok)
          throw l;
        const s = await l.json();
        n.value = s.email;
      } catch (l) {
        console.error("Error fetching user account email: ", l);
      } finally {
        o.value = !1;
      }
    }
    async function a() {
      try {
        o.value = !0, t.value = await qe.getUserId();
      } catch (l) {
        console.error("Error fetching user account ID: ", l);
      } finally {
        o.value = !1;
      }
    }
    return (l, s) => !o.value && (t.value || n.value) || o.value ? (m(), x(L(ee), { key: 0 }, {
      title: w(() => s[0] || (s[0] = [
        h("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: w(() => [
        o.value ? (m(), g("div", xr, [
          C(L(Re), { height: "2rem" }),
          C(L(Re), { height: "2rem" })
        ])) : (m(), g("div", $r, [
          t.value ? (m(), g("div", Ir, [
            s[1] || (s[1] = h("div", null, "ID:", -1)),
            h("div", null, [
              h("code", kr, D(t.value), 1)
            ])
          ])) : S("", !0),
          n.value ? (m(), g("div", Sr, [
            s[2] || (s[2] = h("div", null, "Email:", -1)),
            h("div", null, [
              h("strong", wr, D(n.value), 1)
            ])
          ])) : S("", !0)
        ]))
      ]),
      _: 1
    })) : S("", !0);
  }
}), Cr = { class: "spacing-elements p-12" }, _r = /* @__PURE__ */ V({
  __name: "ChangeEmailAction",
  props: {
    updateEmailToken: {}
  },
  emits: ["changeEmailActionError", "changeEmailActionSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = e;
    ce(() => {
      o.updateEmailToken && r();
    });
    async function r() {
      const i = "Failed to update your email!", a = "Something went wrong while updating your email. Please try again or contact us to let us know about this issue.", l = "The email verification token is invalid or has expired. Please try again.";
      try {
        const s = await Le.updateEmail(o.updateEmailToken);
        if (!s.ok)
          throw s;
        console.log("Change email response: ", s);
        const u = await s.json();
        if (u.status === "OK")
          n("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: "updateEmailSuccessSummary",
            detail: "updateEmailSuccessDetail"
          });
        else if (u.status === "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR")
          n("changeEmailActionError", {
            type: "email_verification_invalid_token",
            severity: "error",
            summary: i,
            detail: l
          });
        else
          throw s;
      } catch (s) {
        console.error("❌ Error during email verification:", s), n("changeEmailActionError", {
          type: "unexpected",
          severity: "error",
          summary: i,
          detail: a,
          json: s
        });
      }
    }
    return (i, a) => (m(), x(L(ee), null, {
      content: w(() => [
        h("div", Cr, [
          a[0] || (a[0] = h("p", { class: "text-2xl" }, "Updating your email address, please dont close this window.", -1)),
          C(L(ze))
        ])
      ]),
      _: 1
    }));
  }
}), Lr = {
  key: 0,
  class: "mt-10"
}, Tr = {
  key: 1,
  class: "mt-10"
}, Er = {
  key: 2,
  class: "max-w-xl mt-10"
}, Ar = { class: "spacing-page-sections" }, us = /* @__PURE__ */ V({
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
    return (i, a) => (m(), g(Q, null, [
      i.deleteToken ? (m(), g("div", Lr, [
        C(lr, {
          deleteToken: i.deleteToken,
          onDeleteAccountError: a[0] || (a[0] = (...l) => i.$emit("deleteAccountError", ...l)),
          onDeleteAccountSuccess: a[1] || (a[1] = (...l) => i.$emit("deleteAccountSuccess", ...l))
        }, null, 8, ["deleteToken"])
      ])) : S("", !0),
      i.updateEmailToken ? (m(), g("div", Tr, [
        C(_r, {
          updateEmailToken: i.updateEmailToken,
          onChangeEmailActionError: a[2] || (a[2] = (...l) => i.$emit("changeEmailActionError", ...l)),
          onChangeEmailActionSuccess: r
        }, null, 8, ["updateEmailToken"])
      ])) : (m(), g("div", Er, [
        A(i.$slots, "default", { id: "header" }, () => [
          a[6] || (a[6] = h("h1", { class: "h1 text-color" }, "Your account", -1))
        ]),
        h("div", Ar, [
          C(Pr, { updatedEmailDate: o.value }, null, 8, ["updatedEmailDate"]),
          C(rr, {
            onChangeEmailRequestError: a[3] || (a[3] = (...l) => i.$emit("changeEmailRequestError", ...l)),
            onChangeEmailActionSuccess: r
          }),
          C(ar, {
            onDeleteAccountRequestError: a[4] || (a[4] = (...l) => i.$emit("deleteAccountRequestError", ...l)),
            onDeleteAccountRequestSuccess: a[5] || (a[5] = (...l) => i.$emit("deleteAccountRequestSuccess", ...l))
          })
        ])
      ]))
    ], 64));
  }
}), Or = { class: "gsi-material-button-content-wrapper" }, Mr = { class: "gsi-material-button-icon" }, Kr = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, jr = { class: "gsi-material-button-contents" }, zr = { style: { display: "none" } }, Vr = /* @__PURE__ */ V({
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
        const a = await It.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(a);
      } catch (a) {
        n("googleSignInError", {
          type: "unexpected",
          severity: "error",
          summary: r,
          detail: i,
          json: a
        });
      }
    }
    return (r, i) => (m(), g("button", {
      class: "gsi-material-button",
      onClick: o
    }, [
      i[1] || (i[1] = h("div", { class: "gsi-material-button-state" }, null, -1)),
      h("div", Or, [
        h("div", Mr, [
          (m(), g("svg", Kr, i[0] || (i[0] = [
            qt('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-8e123238></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-8e123238></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-8e123238></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-8e123238></path><path fill="none" d="M0 0h48v48H0z" data-v-8e123238></path>', 5)
          ])))
        ]),
        h("span", jr, D(r.authType) + " with Google", 1),
        h("span", zr, D(r.authType) + " with Google", 1)
      ])
    ]));
  }
}), Fr = /* @__PURE__ */ Mt(Vr, [["__scopeId", "data-v-8e123238"]]), Dr = { class: "h1" }, Nr = /* @__PURE__ */ V({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess", "signupStartError", "googleSignInError"],
  setup(e, { emit: t }) {
    const n = t, o = E(!1), r = E("mytestemail1235667@gmail.com"), i = E(!1), a = E(!1);
    async function l() {
      if (a.value = !0, !!i.value)
        try {
          o.value = !0;
          const s = await ne.createCode({
            email: r.value,
            shouldTryLinkingWithSessionUser: !1,
            // If true, SuperTokens will attempt to link the passwordless code to an existing session user
            userContext: {}
            // Optionally include user context
          });
          console.log("Create code response: ", s), s.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("signupStartError", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: s
          }) : n("sendCodeSuccess", !0);
        } catch (s) {
          n("signupStartError", {
            type: "unexpected",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: s
          });
        } finally {
          o.value = !1;
        }
    }
    return (s, u) => (m(), x(L(ee), { class: "max-w-xl p-12 w-full" }, {
      title: w(() => [
        h("h1", Dr, D(s.pageAuthType), 1)
      ]),
      content: w(() => [
        h("section", null, [
          C(Fr, {
            authType: s.pageAuthType,
            onGoogleSignInError: u[0] || (u[0] = (...d) => s.$emit("googleSignInError", ...d))
          }, null, 8, ["authType"]),
          u[5] || (u[5] = h("div", { class: "flex items-center my-10" }, [
            h("hr", { class: "flex-1 border-gray-300" }),
            h("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            h("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          h("form", {
            class: "spacing-form",
            onSubmit: u[3] || (u[3] = We(() => {
            }, ["prevent"]))
          }, [
            u[4] || (u[4] = h("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            C(zt, {
              email: r.value,
              "onUpdate:email": u[1] || (u[1] = (d) => r.value = d),
              isSubmitClicked: a.value,
              onValidityChanged: u[2] || (u[2] = (d) => {
                console.log("val is now", d), i.value = d;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            C(L(B), {
              label: s.pageAuthType,
              submit: "submit",
              loading: o.value,
              onClick: l
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var Br = ({ dt: e }) => `
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
`, Rr = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, Ur = M.extend({
  name: "inputotp",
  style: Br,
  classes: Rr
}), Wr = {
  name: "BaseInputOtp",
  extends: Kt,
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
  style: Ur,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, Ft = {
  name: "InputOtp",
  extends: Wr,
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
function Gr(e, t, n, o, r, i) {
  var a = W("OtpInputText");
  return m(), g("div", f({
    class: e.cx("root")
  }, e.ptmi("root")), [(m(!0), g(Q, null, Ke(e.length, function(l) {
    return A(e.$slots, "default", {
      key: l,
      events: i.getTemplateEvents(l - 1),
      attrs: i.getTemplateAttrs(l - 1),
      index: l
    }, function() {
      return [C(a, {
        value: r.tokens[l - 1],
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
        onInput: function(u) {
          return i.onInput(u, l - 1);
        },
        onFocus: t[0] || (t[0] = function(s) {
          return i.onFocus(s);
        }),
        onBlur: t[1] || (t[1] = function(s) {
          return i.onBlur(s);
        }),
        onPaste: t[2] || (t[2] = function(s) {
          return i.onPaste(s);
        }),
        onKeydown: t[3] || (t[3] = function(s) {
          return i.onKeyDown(s);
        }),
        onClick: t[4] || (t[4] = function(s) {
          return i.onClick(s);
        }),
        pt: e.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
Ft.render = Gr;
const qr = { class: "px-4 py-8 sm:p-8" }, Hr = { class: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-start" }, Zr = { class: "spacing-form" }, Xr = { class: "spacing-form" }, Yr = /* @__PURE__ */ V({
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
    const n = t, o = E(""), r = E(null), i = E(0), a = E(0), l = E(!1), s = E(!1);
    ht(o, () => {
      r.value !== null && (r.value = null);
    });
    const u = de(() => o.value.length < 6 ? "Please enter a valid code length" : a.value > 0 && i.value > 0 && i.value < a.value ? `Invalid code. You have ${a.value - i.value} attempts left.` : "");
    async function d() {
      const v = "Unable to process your OTP code", b = "Please try again later.";
      if (r.value = !0, o.value.length < 6) {
        r.value = !1;
        return;
      }
      try {
        l.value = !0;
        const $ = await ne.consumeCode({ userInputCode: o.value });
        $.status === "OK" ? (await ne.clearLoginAttemptInfo(), $.createdNewRecipeUser && $.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), r.value = !0, n("verificationCodeSuccess", {
          summary: "Code verified",
          detail: "You have successfully signed in."
        })) : (console.error("Submit code: ", $), $.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (i.value = $.failedCodeInputAttemptCount, a.value = $.maximumCodeInputAttempts, r.value = !1) : (await ne.clearLoginAttemptInfo(), n("verificationCodeError", {
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
        l.value = !1;
      }
    }
    async function c() {
      const v = "Resend OTP failed", b = "Please try again later.";
      try {
        s.value = !0;
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
        s.value = !1;
      }
    }
    function p() {
      ne.clearLoginAttemptInfo(), n("restartFlow");
    }
    return (v, b) => (m(), g("div", qr, [
      C(L(ee), { class: "max-w-xl p-0 sm:p-12 w-full mx-auto" }, {
        title: w(() => [
          h("div", Hr, [
            C(L(B), {
              class: "me-4 sm:me-0",
              type: "button",
              variant: "outlined",
              icon: "pi pi-arrow-left",
              "aria-label": "Start over",
              onClick: p
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
            h("div", Zr, [
              b[4] || (b[4] = h("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
              h("div", null, [
                C(L(Ft), {
                  modelValue: o.value,
                  "onUpdate:modelValue": b[0] || (b[0] = ($) => o.value = $),
                  length: 6,
                  class: "w-50",
                  type: "text",
                  placeholder: "Input email code",
                  required: "",
                  invalid: r.value === !1
                }, null, 8, ["modelValue", "invalid"]),
                r.value === !1 ? (m(), x(L(Xe), {
                  key: 0,
                  severity: "error",
                  size: "small",
                  variant: "simple"
                }, {
                  default: w(() => [
                    q(D(u.value), 1)
                  ]),
                  _: 1
                })) : S("", !0)
              ]),
              C(L(B), {
                class: "w-fit",
                type: "submit",
                loading: l.value,
                onClick: d
              }, {
                default: w(() => b[3] || (b[3] = [
                  q(" Submit code ")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            h("div", Xr, [
              b[6] || (b[6] = h("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
              C(L(B), {
                class: "w-fit",
                type: "button",
                loading: s.value,
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
}), ls = /* @__PURE__ */ V({
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
    const n = t, o = ln(), r = dn(), i = E(!0), a = E(!1);
    ce(async () => {
      a.value = !!await s(), r.currentRoute.value.query.thirdPartyId === "google" && await u();
    });
    const l = de(() => o.name === "signup" ? "Sign up" : "Sign in");
    async function s() {
      i.value = !0;
      try {
        const p = await ne.getLoginAttemptInfo();
        return p && console.info("Code already sent: ", p), p !== void 0;
      } catch (p) {
        n("checkMagicLinkSentError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: p
        });
      } finally {
        i.value = !1;
      }
    }
    async function u() {
      const p = "Failed to sign in with Google", v = "Please try again later or try another form of login.";
      try {
        i.value = !0;
        const b = await It.signInAndUp();
        b.status === "OK" ? (console.log("handleGoogleCallback> ", b.user), b.createdNewRecipeUser && b.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), n("googleCallbackSuccess")) : b.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("googleCallbackError", {
          type: "sign_in_up_not_allowed",
          severity: "error",
          summary: p,
          detail: v,
          json: b
        }) : n("googleCallbackError", {
          type: "no_user_email",
          severity: "error",
          summary: p,
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
    function d(p) {
      p.type === "input_code_invalid" && (a.value = !1), n("verificationCodeError", p);
    }
    function c(p) {
      p.type === "restart_flow_error" && (a.value = !1), n("resendCodeError", p);
    }
    return (p, v) => (m(), x(ho, { isLoading: i.value }, {
      default: w(() => [
        a.value ? (m(), x(Yr, {
          key: 1,
          pageAuthType: l.value,
          onVerificationCodeSuccess: v[3] || (v[3] = (...b) => p.$emit("verificationCodeSuccess", ...b)),
          onVerificationCodeError: d,
          onResendCodeSuccess: v[4] || (v[4] = (...b) => p.$emit("resendCodeSuccess", ...b)),
          onResendCodeError: c,
          onRestartFlow: v[5] || (v[5] = () => a.value = !1)
        }, null, 8, ["pageAuthType"])) : (m(), x(Nr, {
          key: 0,
          pageAuthType: l.value,
          onSendCodeSuccess: v[0] || (v[0] = () => a.value = !0),
          onSignupStartError: v[1] || (v[1] = (b) => p.$emit("signupStartError", b)),
          onGoogleSignInError: v[2] || (v[2] = (b) => p.$emit("googleSignInError", b))
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  us as Account,
  ss as AppErrorInfo,
  as as PageInfiniteLoader,
  ho as PageLoader,
  ls as SignInUp,
  rs as SiteNavigation,
  go as ThemeToggle
};
