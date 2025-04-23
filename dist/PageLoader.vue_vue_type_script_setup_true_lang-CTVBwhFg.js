import { r as an, B as w, n as F, o as Cn, j as W, q as N, s as On, u as A, v as j, w as jn, h as zn, x as Dn, l as tn, y as Un, z as cn, P as Q, A as Mn, C as on, D as pn, F as bn, c as Wn, G as Hn, H as Rn, I as Kn, J as Gn } from "./index-CLtI3W90.js";
import { useId as qn, mergeProps as S, createElementBlock as C, openBlock as x, createCommentVNode as B, createElementVNode as H, renderSlot as I, createTextVNode as ln, toDisplayString as dn, resolveComponent as fn, resolveDirective as Jn, withDirectives as Xn, createBlock as rn, resolveDynamicComponent as Yn, withCtx as In, normalizeClass as gn, inject as Zn, defineComponent as Qn, createVNode as vn, unref as mn } from "vue";
function z(...n) {
  if (n) {
    let t = [];
    for (let e = 0; e < n.length; e++) {
      const o = n[e];
      if (!o)
        continue;
      const r = typeof o;
      if (r === "string" || r === "number")
        t.push(o);
      else if (r === "object") {
        const a = Array.isArray(o) ? [z(...o)] : Object.entries(o).map(([s, l]) => l ? s : void 0);
        t = a.length ? t.concat(a.filter((s) => !!s)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
var nn = {};
function nt(n = "pui_id_") {
  return Object.hasOwn(nn, n) || (nn[n] = 0), nn[n]++, `${n}${nn[n]}`;
}
var E = {
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
function tt() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = qn();
  return "".concat(n).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var hn = w.extend({
  name: "common"
});
function R(n) {
  "@babel/helpers - typeof";
  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, R(n);
}
function et(n) {
  return An(n) || ot(n) || Ln(n) || Vn();
}
function ot(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function U(n, t) {
  return An(n) || rt(n, t) || Ln(n, t) || Vn();
}
function Vn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ln(n, t) {
  if (n) {
    if (typeof n == "string") return $n(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? $n(n, t) : void 0;
  }
}
function $n(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function rt(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, s, l = [], i = !0, d = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        i = !1;
      } else for (; !(i = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); i = !0) ;
    } catch (c) {
      d = !0, r = c;
    } finally {
      try {
        if (!i && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (d) throw r;
      }
    }
    return l;
  }
}
function An(n) {
  if (Array.isArray(n)) return n;
}
function yn(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function v(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yn(Object(e), !0).forEach(function(o) {
      M(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : yn(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function M(n, t, e) {
  return (t = it(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function it(n) {
  var t = at(n, "string");
  return R(t) == "symbol" ? t : t + "";
}
function at(n, t) {
  if (R(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (R(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var D = {
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
        A.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, e) {
        var o = this;
        A.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
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
    var t, e, o, r, a, s, l, i, d, c, u, b = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, f = b ? (e = this.pt) === null || e === void 0 || (e = e.originalValue) === null || e === void 0 ? void 0 : e[this.$.type.name] : void 0, m = b ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = m || f) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (a = r.onBeforeCreate) === null || a === void 0 || a.call(r);
    var k = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, y = k ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.originalValue : void 0, _ = k ? (i = this.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i.value : (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 ? void 0 : d.pt;
    (c = _ || y) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (u = c.onBeforeCreate) === null || u === void 0 || u.call(c), this.$attrSelector = tt(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = zn(Dn(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = v({
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
        var e = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        e == null || e(), o == null || o();
      }
    },
    _mergeProps: function(t) {
      for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
        o[r - 1] = arguments[r];
      return jn(t) ? t.apply(void 0, o) : S.apply(void 0, o);
    },
    _load: function() {
      E.isStyleNameLoaded("base") || (w.loadCSS(this.$styleOptions), this._loadGlobalStyles(), E.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, e;
      !E.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (e = this.$style) !== null && e !== void 0 && e.name && (hn.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), E.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      W(t) && w.load(t, v({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, e;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!j.isStyleNameLoaded("common")) {
          var o, r, a = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, s = a.primitive, l = a.semantic, i = a.global, d = a.style;
          w.load(s == null ? void 0 : s.css, v({
            name: "primitive-variables"
          }, this.$styleOptions)), w.load(l == null ? void 0 : l.css, v({
            name: "semantic-variables"
          }, this.$styleOptions)), w.load(i == null ? void 0 : i.css, v({
            name: "global-variables"
          }, this.$styleOptions)), w.loadStyle(v({
            name: "global-style"
          }, this.$styleOptions), d), j.setLoadedStyleName("common");
        }
        if (!j.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (e = this.$style) !== null && e !== void 0 && e.name) {
          var c, u, b, f, m = ((c = this.$style) === null || c === void 0 || (u = c.getComponentTheme) === null || u === void 0 ? void 0 : u.call(c)) || {}, k = m.css, y = m.style;
          (b = this.$style) === null || b === void 0 || b.load(k, v({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (f = this.$style) === null || f === void 0 || f.loadStyle(v({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), y), j.setLoadedStyleName(this.$style.name);
        }
        if (!j.isStyleNameLoaded("layer-order")) {
          var _, T, P = (_ = this.$style) === null || _ === void 0 || (T = _.getLayerOrderThemeCSS) === null || T === void 0 ? void 0 : T.call(_);
          w.load(P, v({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), j.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var e, o, r, a = ((e = this.$style) === null || e === void 0 || (o = e.getPresetTheme) === null || o === void 0 ? void 0 : o.call(e, t, "[".concat(this.$attrSelector, "]"))) || {}, s = a.css, l = (r = this.$style) === null || r === void 0 ? void 0 : r.load(s, v({
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
      E.clearLoadedStyleNames(), A.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      A.off("theme:change", this._loadCoreStyles), A.off("theme:change", this._load), A.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var e;
      return this[t] || ((e = this._getHostInstance(this)) === null || e === void 0 ? void 0 : e[t]);
    },
    _getOptionValue: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return On(t, e, o);
    },
    _getPTValue: function() {
      var t, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(o) && !!r[o.split(".")[0]], l = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, i = l.mergeSections, d = i === void 0 ? !0 : i, c = l.mergeProps, u = c === void 0 ? !1 : c, b = a ? s ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, f = s ? void 0 : this._getPTSelf(e, this._getPTClassValue, o, v(v({}, r), {}, {
        global: b || {}
      })), m = this._getPTDatasets(o);
      return d || !d && f ? u ? this._mergeProps(u, b, f, m) : v(v(v({}, b), f), m) : v(v({}, f), m);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
        o[r - 1] = arguments[r];
      return S(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", a = o === "root" && W((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return o !== "transition" && v(v({}, o === "root" && v(v(M({}, "".concat(r, "name"), N(a ? (e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"] : this.$.type.name)), a && M({}, "".concat(r, "extend"), N(this.$.type.name))), {}, M({}, "".concat(this.$attrSelector), ""))), {}, M({}, "".concat(r, "section"), N(o)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return F(t) || Cn(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var e = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, a = function(l) {
        var i, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = r ? r(l) : l, u = N(o), b = N(e.$name);
        return (i = d ? u !== b ? c == null ? void 0 : c[u] : void 0 : c == null ? void 0 : c[u]) !== null && i !== void 0 ? i : c;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: a(t.originalValue),
        value: a(t.value)
      } : a(t, !0);
    },
    _usePT: function(t, e, o, r) {
      var a = function(k) {
        return e(k, o, r);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var s, l = t._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, i = l.mergeSections, d = i === void 0 ? !0 : i, c = l.mergeProps, u = c === void 0 ? !1 : c, b = a(t.originalValue), f = a(t.value);
        return b === void 0 && f === void 0 ? void 0 : F(f) ? f : F(b) ? b : d || !d && f ? u ? this._mergeProps(u, b, f) : v(v({}, b), f) : f;
      }
      return a(t);
    },
    _useGlobalPT: function(t, e, o) {
      return this._usePT(this.globalPT, t, e, o);
    },
    _useDefaultPT: function(t, e, o) {
      return this._usePT(this.defaultPT, t, e, o);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, v(v({}, this.$params), e));
    },
    ptmi: function() {
      var t, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = S(this.$_attrsWithoutPT, this.ptm(e, o));
      return r != null && r.hasOwnProperty("id") && ((t = r.id) !== null && t !== void 0 || (r.id = this.$id)), r;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, e, v({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, v(v({}, this.$params), e));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e) {
        var r = this._getOptionValue(this.$style.inlineStyles, t, v(v({}, this.$params), o)), a = this._getOptionValue(hn.inlineStyles, t, v(v({}, this.$params), o));
        return [a, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, e = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return an(o, {
          instance: e
        });
      });
    },
    defaultPT: function() {
      var t, e = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return e._getOptionValue(o, e.$name, v({}, e.$params)) || an(o, v({}, e.$params));
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
      var t, e = Object.keys(((t = this.$.vnode) === null || t === void 0 ? void 0 : t.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var r = U(o, 1), a = r[0];
        return e == null ? void 0 : e.includes(a);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return v(v({
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
        var e = U(t, 1), o = e[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(t, e) {
        var o = U(e, 2), r = o[0], a = o[1], s = r.split(":"), l = et(s), i = l.slice(1);
        return i == null || i.reduce(function(d, c, u, b) {
          return !d[c] && (d[c] = u === b.length - 1 ? a : {}), d[c];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var e = U(t, 1), o = e[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(t, e) {
        var o = U(e, 2), r = o[0], a = o[1];
        return t[r] = a, t;
      }, {});
    }
  }
}, lt = ({ dt: n }) => `
.p-card {
    background: ${n("card.background")};
    color: ${n("card.color")};
    box-shadow: ${n("card.shadow")};
    border-radius: ${n("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${n("card.caption.gap")};
}

.p-card-body {
    padding: ${n("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${n("card.body.gap")};
}

.p-card-title {
    font-size: ${n("card.title.font.size")};
    font-weight: ${n("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${n("card.subtitle.color")};
}
`, ut = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, st = w.extend({
  name: "card",
  style: lt,
  classes: ut
}), dt = {
  name: "BaseCard",
  extends: D,
  style: st,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, ct = {
  name: "Card",
  extends: dt,
  inheritAttrs: !1
};
function pt(n, t, e, o, r, a) {
  return x(), C("div", S({
    class: n.cx("root")
  }, n.ptmi("root")), [n.$slots.header ? (x(), C("div", S({
    key: 0,
    class: n.cx("header")
  }, n.ptm("header")), [I(n.$slots, "header")], 16)) : B("", !0), H("div", S({
    class: n.cx("body")
  }, n.ptm("body")), [n.$slots.title || n.$slots.subtitle ? (x(), C("div", S({
    key: 0,
    class: n.cx("caption")
  }, n.ptm("caption")), [n.$slots.title ? (x(), C("div", S({
    key: 0,
    class: n.cx("title")
  }, n.ptm("title")), [I(n.$slots, "title")], 16)) : B("", !0), n.$slots.subtitle ? (x(), C("div", S({
    key: 1,
    class: n.cx("subtitle")
  }, n.ptm("subtitle")), [I(n.$slots, "subtitle")], 16)) : B("", !0)], 16)) : B("", !0), H("div", S({
    class: n.cx("content")
  }, n.ptm("content")), [I(n.$slots, "content")], 16), n.$slots.footer ? (x(), C("div", S({
    key: 1,
    class: n.cx("footer")
  }, n.ptm("footer")), [I(n.$slots, "footer")], 16)) : B("", !0)], 16)], 16);
}
ct.render = pt;
var bt = {
  name: "BaseEditableHolder",
  extends: D,
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
        var e, o;
        this.formField = ((e = this.$pcForm) === null || e === void 0 || (o = e.register) === null || o === void 0 ? void 0 : o.call(e, t, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(t) {
        var e, o;
        this.formField = ((e = this.$pcForm) === null || e === void 0 || (o = e.register) === null || o === void 0 ? void 0 : o.call(e, this.$formName, t)) || {};
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
        var e;
        (e = this.$pcForm) !== null && e !== void 0 && e.getFieldState(this.$formName) && t !== this.d_value && (this.d_value = t);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(t, e) {
      var o, r;
      this.controlled && (this.d_value = t, this.$emit("update:modelValue", t)), this.$emit("value-change", t), (o = (r = this.formField).onChange) === null || o === void 0 || o.call(r, {
        originalEvent: e,
        value: t
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
        e[o] = arguments[o];
      return e.find(W);
    }
  },
  computed: {
    $filled: function() {
      return W(this.d_value);
    },
    $invalid: function() {
      var t, e;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.invalid, (e = this.$pcForm) === null || e === void 0 || (e = e.getFieldState(this.$formName)) === null || e === void 0 ? void 0 : e.invalid);
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
      var t, e;
      return this.findNonEmpty(this.d_value, (t = this.$pcFormField) === null || t === void 0 ? void 0 : t.initialValue, (e = this.$pcForm) === null || e === void 0 || (e = e.initialValues) === null || e === void 0 ? void 0 : e[this.$formName]);
    },
    $formValue: function() {
      var t, e;
      return this.findNonEmpty((t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.value, (e = this.$pcForm) === null || e === void 0 || (e = e.getFieldState(this.$formName)) === null || e === void 0 ? void 0 : e.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, ft = {
  name: "BaseInput",
  extends: bt,
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
}, gt = ({ dt: n }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${n("inputtext.color")};
    background: ${n("inputtext.background")};
    padding-block: ${n("inputtext.padding.y")};
    padding-inline: ${n("inputtext.padding.x")};
    border: 1px solid ${n("inputtext.border.color")};
    transition: background ${n("inputtext.transition.duration")}, color ${n("inputtext.transition.duration")}, border-color ${n("inputtext.transition.duration")}, outline-color ${n("inputtext.transition.duration")}, box-shadow ${n("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${n("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${n("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${n("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${n("inputtext.focus.border.color")};
    box-shadow: ${n("inputtext.focus.ring.shadow")};
    outline: ${n("inputtext.focus.ring.width")} ${n("inputtext.focus.ring.style")} ${n("inputtext.focus.ring.color")};
    outline-offset: ${n("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${n("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${n("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${n("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${n("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${n("inputtext.disabled.background")};
    color: ${n("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${n("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${n("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${n("inputtext.sm.font.size")};
    padding-block: ${n("inputtext.sm.padding.y")};
    padding-inline: ${n("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${n("inputtext.lg.font.size")};
    padding-block: ${n("inputtext.lg.padding.y")};
    padding-inline: ${n("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`, vt = {
  root: function(t) {
    var e = t.instance, o = t.props;
    return ["p-inputtext p-component", {
      "p-filled": e.$filled,
      "p-inputtext-sm p-inputfield-sm": o.size === "small",
      "p-inputtext-lg p-inputfield-lg": o.size === "large",
      "p-invalid": e.$invalid,
      "p-variant-filled": e.$variant === "filled",
      "p-inputtext-fluid": e.$fluid
    }];
  }
}, mt = w.extend({
  name: "inputtext",
  style: gt,
  classes: vt
}), ht = {
  name: "BaseInputText",
  extends: ft,
  style: mt,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function K(n) {
  "@babel/helpers - typeof";
  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, K(n);
}
function $t(n, t, e) {
  return (t = yt(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function yt(n) {
  var t = St(n, "string");
  return K(t) == "symbol" ? t : t + "";
}
function St(n, t) {
  if (K(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (K(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var kt = {
  name: "InputText",
  extends: ht,
  inheritAttrs: !1,
  methods: {
    onInput: function(t) {
      this.writeValue(t.target.value, t);
    }
  },
  computed: {
    attrs: function() {
      return S(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return z($t({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, _t = ["value", "name", "disabled", "aria-invalid", "data-p"];
function wt(n, t, e, o, r, a) {
  return x(), C("input", S({
    type: "text",
    class: n.cx("root"),
    value: n.d_value,
    name: n.name,
    disabled: n.disabled,
    "aria-invalid": n.$invalid || void 0,
    "data-p": a.dataP,
    onInput: t[0] || (t[0] = function() {
      return a.onInput && a.onInput.apply(a, arguments);
    })
  }, a.attrs), null, 16, _t);
}
kt.render = wt;
var Pt = `
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
`, xt = w.extend({
  name: "baseicon",
  css: Pt
});
function G(n) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, G(n);
}
function Sn(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function kn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sn(Object(e), !0).forEach(function(o) {
      Tt(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Sn(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function Tt(n, t, e) {
  return (t = Ct(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function Ct(n) {
  var t = Ot(n, "string");
  return G(t) == "symbol" ? t : t + "";
}
function Ot(n, t) {
  if (G(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (G(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var jt = {
  name: "BaseIcon",
  extends: D,
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
  style: xt,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = tn(this.label);
      return kn(kn({}, !this.isUnstyled && {
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
}, Nn = {
  name: "SpinnerIcon",
  extends: jt
};
function It(n, t, e, o, r, a) {
  return x(), C("svg", S({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, n.pti()), t[0] || (t[0] = [H("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Nn.render = It;
var Vt = ({ dt: n }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${n("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${n("badge.padding")};
    background: ${n("badge.primary.background")};
    color: ${n("badge.primary.color")};
    font-size: ${n("badge.font.size")};
    font-weight: ${n("badge.font.weight")};
    min-width: ${n("badge.min.width")};
    height: ${n("badge.height")};
}

.p-badge-dot {
    width: ${n("badge.dot.size")};
    min-width: ${n("badge.dot.size")};
    height: ${n("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${n("badge.secondary.background")};
    color: ${n("badge.secondary.color")};
}

.p-badge-success {
    background: ${n("badge.success.background")};
    color: ${n("badge.success.color")};
}

.p-badge-info {
    background: ${n("badge.info.background")};
    color: ${n("badge.info.color")};
}

.p-badge-warn {
    background: ${n("badge.warn.background")};
    color: ${n("badge.warn.color")};
}

.p-badge-danger {
    background: ${n("badge.danger.background")};
    color: ${n("badge.danger.color")};
}

.p-badge-contrast {
    background: ${n("badge.contrast.background")};
    color: ${n("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${n("badge.sm.font.size")};
    min-width: ${n("badge.sm.min.width")};
    height: ${n("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${n("badge.lg.font.size")};
    min-width: ${n("badge.lg.min.width")};
    height: ${n("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${n("badge.xl.font.size")};
    min-width: ${n("badge.xl.min.width")};
    height: ${n("badge.xl.height")};
}
`, Lt = {
  root: function(t) {
    var e = t.props, o = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": W(e.value) && String(e.value).length === 1,
      "p-badge-dot": tn(e.value) && !o.$slots.default,
      "p-badge-sm": e.size === "small",
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge",
      "p-badge-info": e.severity === "info",
      "p-badge-success": e.severity === "success",
      "p-badge-warn": e.severity === "warn",
      "p-badge-danger": e.severity === "danger",
      "p-badge-secondary": e.severity === "secondary",
      "p-badge-contrast": e.severity === "contrast"
    }];
  }
}, At = w.extend({
  name: "badge",
  style: Vt,
  classes: Lt
}), Nt = {
  name: "BaseBadge",
  extends: D,
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
  style: At,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function q(n) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, q(n);
}
function _n(n, t, e) {
  return (t = Et(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function Et(n) {
  var t = Bt(n, "string");
  return q(t) == "symbol" ? t : t + "";
}
function Bt(n, t) {
  if (q(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (q(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var En = {
  name: "Badge",
  extends: Nt,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return z(_n(_n({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Ft = ["data-p"];
function zt(n, t, e, o, r, a) {
  return x(), C("span", S({
    class: n.cx("root"),
    "data-p": a.dataP
  }, n.ptmi("root")), [I(n.$slots, "default", {}, function() {
    return [ln(dn(n.value), 1)];
  })], 16, Ft);
}
En.render = zt;
function J(n) {
  "@babel/helpers - typeof";
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, J(n);
}
function wn(n, t) {
  return Wt(n) || Mt(n, t) || Ut(n, t) || Dt();
}
function Dt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ut(n, t) {
  if (n) {
    if (typeof n == "string") return Pn(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Pn(n, t) : void 0;
  }
}
function Pn(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Mt(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, s, l = [], i = !0, d = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(i = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); i = !0) ;
    } catch (c) {
      d = !0, r = c;
    } finally {
      try {
        if (!i && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (d) throw r;
      }
    }
    return l;
  }
}
function Wt(n) {
  if (Array.isArray(n)) return n;
}
function xn(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function h(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xn(Object(e), !0).forEach(function(o) {
      un(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : xn(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function un(n, t, e) {
  return (t = Ht(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function Ht(n) {
  var t = Rt(n, "string");
  return J(t) == "symbol" ? t : t + "";
}
function Rt(n, t) {
  if (J(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (J(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var g = {
  _getMeta: function() {
    return [cn(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], an(cn(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, e) {
    var o, r, a;
    return (o = (t == null || (r = t.instance) === null || r === void 0 ? void 0 : r.$primevue) || (e == null || (a = e.ctx) === null || a === void 0 || (a = a.appContext) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.globalProperties) === null || a === void 0 ? void 0 : a.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: On,
  _getPTValue: function() {
    var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = function() {
      var T = g._getOptionValue.apply(g, arguments);
      return F(T) || Cn(T) ? {
        class: T
      } : T;
    }, d = ((t = o.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((e = o.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, c = d.mergeSections, u = c === void 0 ? !0 : c, b = d.mergeProps, f = b === void 0 ? !1 : b, m = l ? g._useDefaultPT(o, o.defaultPT(), i, a, s) : void 0, k = g._usePT(o, g._getPT(r, o.$name), i, a, h(h({}, s), {}, {
      global: m || {}
    })), y = g._getPTDatasets(o, a);
    return u || !u && k ? f ? g._mergeProps(o, f, m, k, y) : h(h(h({}, m), k), y) : h(h({}, k), y);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return h(h({}, e === "root" && un({}, "".concat(o, "name"), N(t.$name))), {}, un({}, "".concat(o, "section"), N(e)));
  },
  _getPT: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(s) {
      var l, i = o ? o(s) : s, d = N(e);
      return (l = i == null ? void 0 : i[d]) !== null && l !== void 0 ? l : i;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: r(t.originalValue),
      value: r(t.value)
    } : r(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0, s = function(y) {
      return o(y, r, a);
    };
    if (e && Object.hasOwn(e, "_usept")) {
      var l, i = e._usept || ((l = t.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, d = i.mergeSections, c = d === void 0 ? !0 : d, u = i.mergeProps, b = u === void 0 ? !1 : u, f = s(e.originalValue), m = s(e.value);
      return f === void 0 && m === void 0 ? void 0 : F(m) ? m : F(f) ? f : c || !c && m ? b ? g._mergeProps(t, b, f, m) : h(h({}, f), m) : m;
    }
    return s(e);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0;
    return g._usePT(t, e, o, r, a);
  },
  _loadStyles: function() {
    var t, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, a = g._getConfig(o, r), s = {
      nonce: a == null || (t = a.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    g._loadCoreStyles(e, s), g._loadThemeStyles(e, s), g._loadScopedThemeStyles(e, s), g._removeThemeListeners(e), e.$loadStyles = function() {
      return g._loadThemeStyles(e, s);
    }, g._themeChangeListener(e.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!E.isStyleNameLoaded((t = o.$style) === null || t === void 0 ? void 0 : t.name) && (e = o.$style) !== null && e !== void 0 && e.name) {
      var a;
      w.loadCSS(r), (a = o.$style) === null || a === void 0 || a.loadCSS(r), E.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, e, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled() || (r == null || (t = r.theme) === null || t === void 0 ? void 0 : t.call(r)) === "none")) {
      if (!j.isStyleNameLoaded("common")) {
        var s, l, i = ((s = r.$style) === null || s === void 0 || (l = s.getCommonTheme) === null || l === void 0 ? void 0 : l.call(s)) || {}, d = i.primitive, c = i.semantic, u = i.global, b = i.style;
        w.load(d == null ? void 0 : d.css, h({
          name: "primitive-variables"
        }, a)), w.load(c == null ? void 0 : c.css, h({
          name: "semantic-variables"
        }, a)), w.load(u == null ? void 0 : u.css, h({
          name: "global-variables"
        }, a)), w.loadStyle(h({
          name: "global-style"
        }, a), b), j.setLoadedStyleName("common");
      }
      if (!j.isStyleNameLoaded((e = r.$style) === null || e === void 0 ? void 0 : e.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var f, m, k, y, _ = ((f = r.$style) === null || f === void 0 || (m = f.getDirectiveTheme) === null || m === void 0 ? void 0 : m.call(f)) || {}, T = _.css, P = _.style;
        (k = r.$style) === null || k === void 0 || k.load(T, h({
          name: "".concat(r.$style.name, "-variables")
        }, a)), (y = r.$style) === null || y === void 0 || y.loadStyle(h({
          name: "".concat(r.$style.name, "-style")
        }, a), P), j.setLoadedStyleName(r.$style.name);
      }
      if (!j.isStyleNameLoaded("layer-order")) {
        var p, $, L = (p = r.$style) === null || p === void 0 || ($ = p.getLayerOrderThemeCSS) === null || $ === void 0 ? void 0 : $.call(p);
        w.load(L, h({
          name: "layer-order",
          first: !0
        }, a)), j.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, o = t.preset();
    if (o && t.$attrSelector) {
      var r, a, s, l = ((r = t.$style) === null || r === void 0 || (a = r.getPresetTheme) === null || a === void 0 ? void 0 : a.call(r, o, "[".concat(t.$attrSelector, "]"))) || {}, i = l.css, d = (s = t.$style) === null || s === void 0 ? void 0 : s.load(i, h({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, e));
      t.scopedStyleEl = d.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    E.clearLoadedStyleNames(), A.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    A.off("theme:change", t.$loadStyles), t.$loadStyles = void 0;
  },
  _hook: function(t, e, o, r, a, s) {
    var l, i, d = "on".concat(Un(e)), c = g._getConfig(r, a), u = o == null ? void 0 : o.$instance, b = g._usePT(u, g._getPT(r == null || (l = r.value) === null || l === void 0 ? void 0 : l.pt, t), g._getOptionValue, "hooks.".concat(d)), f = g._useDefaultPT(u, c == null || (i = c.pt) === null || i === void 0 || (i = i.directives) === null || i === void 0 ? void 0 : i[t], g._getOptionValue, "hooks.".concat(d)), m = {
      el: o,
      binding: r,
      vnode: a,
      prevVnode: s
    };
    b == null || b(u, m), f == null || f(u, m);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length, o = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
      o[r - 2] = arguments[r];
    return jn(t) ? t.apply(void 0, o) : S.apply(void 0, o);
  },
  _extend: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(l, i, d, c, u) {
      var b, f, m, k;
      i._$instances = i._$instances || {};
      var y = g._getConfig(d, c), _ = i._$instances[t] || {}, T = tn(_) ? h(h({}, e), e == null ? void 0 : e.methods) : {};
      i._$instances[t] = h(h({}, _), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: i,
        $binding: d,
        $modifiers: d == null ? void 0 : d.modifiers,
        $value: d == null ? void 0 : d.value,
        $el: _.$el || i || void 0,
        $style: h({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, e == null ? void 0 : e.style),
        $primevueConfig: y,
        $attrSelector: (b = i.$pd) === null || b === void 0 || (b = b[t]) === null || b === void 0 ? void 0 : b.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return g._getPT(y == null ? void 0 : y.pt, void 0, function(p) {
            var $;
            return p == null || ($ = p.directives) === null || $ === void 0 ? void 0 : $[t];
          });
        },
        isUnstyled: function() {
          var p, $;
          return ((p = i._$instances[t]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.unstyled) !== void 0 ? ($ = i._$instances[t]) === null || $ === void 0 || ($ = $.$binding) === null || $ === void 0 || ($ = $.value) === null || $ === void 0 ? void 0 : $.unstyled : y == null ? void 0 : y.unstyled;
        },
        theme: function() {
          var p;
          return (p = i._$instances[t]) === null || p === void 0 || (p = p.$primevueConfig) === null || p === void 0 ? void 0 : p.theme;
        },
        preset: function() {
          var p;
          return (p = i._$instances[t]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.dt;
        },
        /* instance's methods */
        ptm: function() {
          var p, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return g._getPTValue(i._$instances[t], (p = i._$instances[t]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.pt, $, h({}, L));
        },
        ptmo: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return g._getPTValue(i._$instances[t], p, $, L, !1);
        },
        cx: function() {
          var p, $, L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", en = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (p = i._$instances[t]) !== null && p !== void 0 && p.isUnstyled() ? void 0 : g._getOptionValue(($ = i._$instances[t]) === null || $ === void 0 || ($ = $.$style) === null || $ === void 0 ? void 0 : $.classes, L, h({}, en));
        },
        sx: function() {
          var p, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, en = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return L ? g._getOptionValue((p = i._$instances[t]) === null || p === void 0 || (p = p.$style) === null || p === void 0 ? void 0 : p.inlineStyles, $, h({}, en)) : void 0;
        }
      }, T), i.$instance = i._$instances[t], (f = (m = i.$instance)[l]) === null || f === void 0 || f.call(m, i, d, c, u), i["$".concat(t)] = i.$instance, g._hook(t, l, i, d, c, u), i.$pd || (i.$pd = {}), i.$pd[t] = h(h({}, (k = i.$pd) === null || k === void 0 ? void 0 : k[t]), {}, {
        name: t,
        instance: i._$instances[t]
      });
    }, r = function(l) {
      var i, d, c, u = l._$instances[t], b = u == null ? void 0 : u.watch, f = function(y) {
        var _, T = y.newValue, P = y.oldValue;
        return b == null || (_ = b.config) === null || _ === void 0 ? void 0 : _.call(u, T, P);
      }, m = function(y) {
        var _, T = y.newValue, P = y.oldValue;
        return b == null || (_ = b["config.ripple"]) === null || _ === void 0 ? void 0 : _.call(u, T, P);
      };
      u.$watchersCallback = {
        config: f,
        "config.ripple": m
      }, b == null || (i = b.config) === null || i === void 0 || i.call(u, u == null ? void 0 : u.$primevueConfig), Q.on("config:change", f), b == null || (d = b["config.ripple"]) === null || d === void 0 || d.call(u, u == null || (c = u.$primevueConfig) === null || c === void 0 ? void 0 : c.ripple), Q.on("config:ripple:change", m);
    }, a = function(l) {
      var i = l._$instances[t].$watchersCallback;
      i && (Q.off("config:change", i.config), Q.off("config:ripple:change", i["config.ripple"]), l._$instances[t].$watchersCallback = void 0);
    };
    return {
      created: function(l, i, d, c) {
        l.$pd || (l.$pd = {}), l.$pd[t] = {
          name: t,
          attrSelector: nt("pd")
        }, o("created", l, i, d, c);
      },
      beforeMount: function(l, i, d, c) {
        var u;
        g._loadStyles((u = l.$pd[t]) === null || u === void 0 ? void 0 : u.instance, i, d), o("beforeMount", l, i, d, c), r(l);
      },
      mounted: function(l, i, d, c) {
        var u;
        g._loadStyles((u = l.$pd[t]) === null || u === void 0 ? void 0 : u.instance, i, d), o("mounted", l, i, d, c);
      },
      beforeUpdate: function(l, i, d, c) {
        o("beforeUpdate", l, i, d, c);
      },
      updated: function(l, i, d, c) {
        var u;
        g._loadStyles((u = l.$pd[t]) === null || u === void 0 ? void 0 : u.instance, i, d), o("updated", l, i, d, c);
      },
      beforeUnmount: function(l, i, d, c) {
        var u;
        a(l), g._removeThemeListeners((u = l.$pd[t]) === null || u === void 0 ? void 0 : u.instance), o("beforeUnmount", l, i, d, c);
      },
      unmounted: function(l, i, d, c) {
        var u;
        (u = l.$pd[t]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), o("unmounted", l, i, d, c);
      }
    };
  },
  extend: function() {
    var t = g._getMeta.apply(g, arguments), e = wn(t, 2), o = e[0], r = e[1];
    return h({
      extend: function() {
        var s = g._getMeta.apply(g, arguments), l = wn(s, 2), i = l[0], d = l[1];
        return g.extend(i, h(h(h({}, r), r == null ? void 0 : r.methods), d));
      }
    }, g._extend(o, r));
  }
}, Kt = ({ dt: n }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${n("ripple.background")};
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
`, Gt = {
  root: "p-ink"
}, qt = w.extend({
  name: "ripple-directive",
  style: Kt,
  classes: Gt
}), Jt = g.extend({
  style: qt
});
function X(n) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, X(n);
}
function Xt(n) {
  return ne(n) || Qt(n) || Zt(n) || Yt();
}
function Yt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zt(n, t) {
  if (n) {
    if (typeof n == "string") return sn(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? sn(n, t) : void 0;
  }
}
function Qt(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ne(n) {
  if (Array.isArray(n)) return sn(n);
}
function sn(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Tn(n, t, e) {
  return (t = te(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function te(n) {
  var t = ee(n, "string");
  return X(t) == "symbol" ? t : t + "";
}
function ee(n, t) {
  if (X(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (X(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var oe = Jt.extend("ripple", {
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
      var e = this.getInk(t);
      e || (e = Gn("span", Tn(Tn({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), t.appendChild(e), this.$el = e);
    },
    remove: function(t) {
      var e = this.getInk(t);
      e && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), e.removeEventListener("animationend", this.onAnimationEnd), e.remove());
    },
    onMouseDown: function(t) {
      var e = this, o = t.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && on(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !pn(r) && !bn(r)) {
          var a = Math.max(Wn(o), Hn(o));
          r.style.height = a + "px", r.style.width = a + "px";
        }
        var s = Rn(o), l = t.pageX - s.left + document.body.scrollTop - bn(r) / 2, i = t.pageY - s.top + document.body.scrollLeft - pn(r) / 2;
        r.style.top = i + "px", r.style.left = l + "px", !this.isUnstyled() && Kn(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!e.isUnstyled() && on(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && on(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Xt(t.children).find(function(e) {
        return Mn(e, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), re = ({ dt: n }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${n("button.primary.color")};
    background: ${n("button.primary.background")};
    border: 1px solid ${n("button.primary.border.color")};
    padding: ${n("button.padding.y")} ${n("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${n("button.transition.duration")}, color ${n("button.transition.duration")}, border-color ${n("button.transition.duration")},
            outline-color ${n("button.transition.duration")}, box-shadow ${n("button.transition.duration")};
    border-radius: ${n("button.border.radius")};
    outline-color: transparent;
    gap: ${n("button.gap")};
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
    width: ${n("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${n("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${n("button.sm.font.size")};
    padding: ${n("button.sm.padding.y")} ${n("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${n("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${n("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${n("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${n("button.lg.font.size")};
    padding: ${n("button.lg.padding.y")} ${n("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${n("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${n("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${n("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${n("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${n("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${n("button.primary.hover.background")};
    border: 1px solid ${n("button.primary.hover.border.color")};
    color: ${n("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${n("button.primary.active.background")};
    border: 1px solid ${n("button.primary.active.border.color")};
    color: ${n("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${n("button.primary.focus.ring.shadow")};
    outline: ${n("button.focus.ring.width")} ${n("button.focus.ring.style")} ${n("button.primary.focus.ring.color")};
    outline-offset: ${n("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${n("button.badge.size")};
    height: ${n("button.badge.size")};
    line-height: ${n("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${n("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${n("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${n("button.secondary.background")};
    border: 1px solid ${n("button.secondary.border.color")};
    color: ${n("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${n("button.secondary.hover.background")};
    border: 1px solid ${n("button.secondary.hover.border.color")};
    color: ${n("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${n("button.secondary.active.background")};
    border: 1px solid ${n("button.secondary.active.border.color")};
    color: ${n("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${n("button.secondary.focus.ring.color")};
    box-shadow: ${n("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${n("button.success.background")};
    border: 1px solid ${n("button.success.border.color")};
    color: ${n("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${n("button.success.hover.background")};
    border: 1px solid ${n("button.success.hover.border.color")};
    color: ${n("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${n("button.success.active.background")};
    border: 1px solid ${n("button.success.active.border.color")};
    color: ${n("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${n("button.success.focus.ring.color")};
    box-shadow: ${n("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${n("button.info.background")};
    border: 1px solid ${n("button.info.border.color")};
    color: ${n("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${n("button.info.hover.background")};
    border: 1px solid ${n("button.info.hover.border.color")};
    color: ${n("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${n("button.info.active.background")};
    border: 1px solid ${n("button.info.active.border.color")};
    color: ${n("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${n("button.info.focus.ring.color")};
    box-shadow: ${n("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${n("button.warn.background")};
    border: 1px solid ${n("button.warn.border.color")};
    color: ${n("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${n("button.warn.hover.background")};
    border: 1px solid ${n("button.warn.hover.border.color")};
    color: ${n("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${n("button.warn.active.background")};
    border: 1px solid ${n("button.warn.active.border.color")};
    color: ${n("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${n("button.warn.focus.ring.color")};
    box-shadow: ${n("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${n("button.help.background")};
    border: 1px solid ${n("button.help.border.color")};
    color: ${n("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${n("button.help.hover.background")};
    border: 1px solid ${n("button.help.hover.border.color")};
    color: ${n("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${n("button.help.active.background")};
    border: 1px solid ${n("button.help.active.border.color")};
    color: ${n("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${n("button.help.focus.ring.color")};
    box-shadow: ${n("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${n("button.danger.background")};
    border: 1px solid ${n("button.danger.border.color")};
    color: ${n("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${n("button.danger.hover.background")};
    border: 1px solid ${n("button.danger.hover.border.color")};
    color: ${n("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${n("button.danger.active.background")};
    border: 1px solid ${n("button.danger.active.border.color")};
    color: ${n("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${n("button.danger.focus.ring.color")};
    box-shadow: ${n("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${n("button.contrast.background")};
    border: 1px solid ${n("button.contrast.border.color")};
    color: ${n("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${n("button.contrast.hover.background")};
    border: 1px solid ${n("button.contrast.hover.border.color")};
    color: ${n("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${n("button.contrast.active.background")};
    border: 1px solid ${n("button.contrast.active.border.color")};
    color: ${n("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${n("button.contrast.focus.ring.color")};
    box-shadow: ${n("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${n("button.outlined.primary.border.color")};
    color: ${n("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${n("button.outlined.primary.hover.background")};
    border-color: ${n("button.outlined.primary.border.color")};
    color: ${n("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${n("button.outlined.primary.active.background")};
    border-color: ${n("button.outlined.primary.border.color")};
    color: ${n("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${n("button.outlined.secondary.border.color")};
    color: ${n("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${n("button.outlined.secondary.hover.background")};
    border-color: ${n("button.outlined.secondary.border.color")};
    color: ${n("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${n("button.outlined.secondary.active.background")};
    border-color: ${n("button.outlined.secondary.border.color")};
    color: ${n("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${n("button.outlined.success.border.color")};
    color: ${n("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${n("button.outlined.success.hover.background")};
    border-color: ${n("button.outlined.success.border.color")};
    color: ${n("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${n("button.outlined.success.active.background")};
    border-color: ${n("button.outlined.success.border.color")};
    color: ${n("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${n("button.outlined.info.border.color")};
    color: ${n("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${n("button.outlined.info.hover.background")};
    border-color: ${n("button.outlined.info.border.color")};
    color: ${n("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${n("button.outlined.info.active.background")};
    border-color: ${n("button.outlined.info.border.color")};
    color: ${n("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${n("button.outlined.warn.border.color")};
    color: ${n("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${n("button.outlined.warn.hover.background")};
    border-color: ${n("button.outlined.warn.border.color")};
    color: ${n("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${n("button.outlined.warn.active.background")};
    border-color: ${n("button.outlined.warn.border.color")};
    color: ${n("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${n("button.outlined.help.border.color")};
    color: ${n("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${n("button.outlined.help.hover.background")};
    border-color: ${n("button.outlined.help.border.color")};
    color: ${n("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${n("button.outlined.help.active.background")};
    border-color: ${n("button.outlined.help.border.color")};
    color: ${n("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${n("button.outlined.danger.border.color")};
    color: ${n("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${n("button.outlined.danger.hover.background")};
    border-color: ${n("button.outlined.danger.border.color")};
    color: ${n("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${n("button.outlined.danger.active.background")};
    border-color: ${n("button.outlined.danger.border.color")};
    color: ${n("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${n("button.outlined.contrast.border.color")};
    color: ${n("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${n("button.outlined.contrast.hover.background")};
    border-color: ${n("button.outlined.contrast.border.color")};
    color: ${n("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${n("button.outlined.contrast.active.background")};
    border-color: ${n("button.outlined.contrast.border.color")};
    color: ${n("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${n("button.outlined.plain.border.color")};
    color: ${n("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${n("button.outlined.plain.hover.background")};
    border-color: ${n("button.outlined.plain.border.color")};
    color: ${n("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${n("button.outlined.plain.active.background")};
    border-color: ${n("button.outlined.plain.border.color")};
    color: ${n("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${n("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${n("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${n("button.text.primary.active.background")};
    border-color: transparent;
    color: ${n("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${n("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${n("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${n("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${n("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${n("button.text.success.hover.background")};
    border-color: transparent;
    color: ${n("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${n("button.text.success.active.background")};
    border-color: transparent;
    color: ${n("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${n("button.text.info.hover.background")};
    border-color: transparent;
    color: ${n("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${n("button.text.info.active.background")};
    border-color: transparent;
    color: ${n("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${n("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${n("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${n("button.text.warn.active.background")};
    border-color: transparent;
    color: ${n("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${n("button.text.help.hover.background")};
    border-color: transparent;
    color: ${n("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${n("button.text.help.active.background")};
    border-color: transparent;
    color: ${n("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${n("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${n("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${n("button.text.danger.active.background")};
    border-color: transparent;
    color: ${n("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${n("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${n("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${n("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${n("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${n("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${n("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${n("button.text.plain.active.background")};
    border-color: transparent;
    color: ${n("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${n("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${n("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${n("button.link.active.color")};
}
`;
function Y(n) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Y(n);
}
function V(n, t, e) {
  return (t = ie(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function ie(n) {
  var t = ae(n, "string");
  return Y(t) == "symbol" ? t : t + "";
}
function ae(n, t) {
  if (Y(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (Y(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var le = {
  root: function(t) {
    var e = t.instance, o = t.props;
    return ["p-button p-component", V(V(V(V(V(V(V(V(V({
      "p-button-icon-only": e.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", e.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var e = t.props;
    return ["p-button-icon", V({}, "p-button-icon-".concat(e.iconPos), e.label)];
  },
  label: "p-button-label"
}, ue = w.extend({
  name: "button",
  style: re,
  classes: le
}), se = {
  name: "BaseButton",
  extends: D,
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
  style: ue,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Z(n) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Z(n);
}
function O(n, t, e) {
  return (t = de(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function de(n) {
  var t = ce(n, "string");
  return Z(t) == "symbol" ? t : t + "";
}
function ce(n, t) {
  if (Z(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t);
    if (Z(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var Bn = {
  name: "Button",
  extends: se,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(t) {
      var e = t === "root" ? this.ptmi : this.ptm;
      return e(t, {
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
      return S(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return tn(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return z(O(O(O(O(O(O(O(O(O(O({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return z(O(O({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return z(O(O({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Nn,
    Badge: En
  },
  directives: {
    ripple: oe
  }
}, pe = ["data-p"], be = ["data-p"];
function fe(n, t, e, o, r, a) {
  var s = fn("SpinnerIcon"), l = fn("Badge"), i = Jn("ripple");
  return n.asChild ? I(n.$slots, "default", {
    key: 1,
    class: gn(n.cx("root")),
    a11yAttrs: a.a11yAttrs
  }) : Xn((x(), rn(Yn(n.as), S({
    key: 0,
    class: n.cx("root"),
    "data-p": a.dataP
  }, a.attrs), {
    default: In(function() {
      return [I(n.$slots, "default", {}, function() {
        return [n.loading ? I(n.$slots, "loadingicon", S({
          key: 0,
          class: [n.cx("loadingIcon"), n.cx("icon")]
        }, n.ptm("loadingIcon")), function() {
          return [n.loadingIcon ? (x(), C("span", S({
            key: 0,
            class: [n.cx("loadingIcon"), n.cx("icon"), n.loadingIcon]
          }, n.ptm("loadingIcon")), null, 16)) : (x(), rn(s, S({
            key: 1,
            class: [n.cx("loadingIcon"), n.cx("icon")],
            spin: ""
          }, n.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : I(n.$slots, "icon", S({
          key: 1,
          class: [n.cx("icon")]
        }, n.ptm("icon")), function() {
          return [n.icon ? (x(), C("span", S({
            key: 0,
            class: [n.cx("icon"), n.icon, n.iconClass],
            "data-p": a.dataIconP
          }, n.ptm("icon")), null, 16, pe)) : B("", !0)];
        }), H("span", S({
          class: n.cx("label")
        }, n.ptm("label"), {
          "data-p": a.dataLabelP
        }), dn(n.label || " "), 17, be), n.badge ? (x(), rn(l, {
          key: 2,
          value: n.badge,
          class: gn(n.badgeClass),
          severity: n.badgeSeverity,
          unstyled: n.unstyled,
          pt: n.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : B("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[i]]);
}
Bn.render = fe;
var ge = Symbol();
function ve() {
  var n = Zn(ge);
  if (!n)
    throw new Error("No PrimeVue Toast provided!");
  return n;
}
const me = {
  error: {
    somethingWentWrong: {
      summary: "Something went wrong",
      detail: "Sorry but something isnt working as expected! Please try again later. We have been notified of the issue."
    }
  }
}, he = {
  DEFAULT_LIFE: 4e3
};
function Oe() {
  const n = ve();
  function t({
    severity: e,
    summary: o,
    detail: r,
    life: a = he.DEFAULT_LIFE,
    error: s
  }) {
    n.add({
      severity: e,
      summary: o,
      detail: r,
      life: a
    }), e === "danger" && s && console.error(s);
  }
  return { addToast: t, toastContent: me };
}
var $e = ({ dt: n }) => `
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
    stroke: ${n("progressspinner.colorOne")};
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
        stroke: ${n("progressspinner.color.one")};
    }
    40% {
        stroke: ${n("progressspinner.color.two")};
    }
    66% {
        stroke: ${n("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${n("progressspinner.color.four")};
    }
}
`, ye = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, Se = w.extend({
  name: "progressspinner",
  style: $e,
  classes: ye
}), ke = {
  name: "BaseProgressSpinner",
  extends: D,
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
  style: Se,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, Fn = {
  name: "ProgressSpinner",
  extends: ke,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, _e = ["fill", "stroke-width"];
function we(n, t, e, o, r, a) {
  return x(), C("div", S({
    class: n.cx("root"),
    role: "progressbar"
  }, n.ptmi("root")), [(x(), C("svg", S({
    class: n.cx("spin"),
    viewBox: "25 25 50 50",
    style: a.svgStyle
  }, n.ptm("spin")), [H("circle", S({
    class: n.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: n.fill,
    "stroke-width": n.strokeWidth,
    strokeMiterlimit: "10"
  }, n.ptm("circle")), null, 16, _e)], 16))], 16);
}
Fn.render = we;
const Pe = {
  key: 0,
  class: "border flex flex-grow items-center justify-center w-full"
}, xe = { key: 1 }, je = /* @__PURE__ */ Qn({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (t, e) => t.isLoading ? (x(), C("div", Pe, [
      ln(" isLoading2 " + dn(t.isLoading) + " ", 1),
      vn(mn(Fn), { "aria-label": "Loading" }),
      vn(mn(Bn), {
        type: "button",
        onClick: e[0] || (e[0] = () => {
          console.log("hello");
        })
      }, {
        default: In(() => e[1] || (e[1] = [
          ln("Send deletion email")
        ])),
        _: 1
      })
    ])) : (x(), C("div", xe, [
      I(t.$slots, "default")
    ]));
  }
});
export {
  oe as R,
  je as _,
  kt as a,
  Bn as b,
  Fn as c,
  ft as d,
  D as e,
  z as f,
  jt as g,
  ct as s,
  Oe as u
};
