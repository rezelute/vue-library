import { ref as Ke, readonly as lo, getCurrentInstance as jr, onMounted as co, nextTick as an, watch as Fr, useId as fo, mergeProps as fe, createElementBlock as Bt, openBlock as He, createElementVNode as Vr, renderSlot as ht, createTextVNode as ho, toDisplayString as qr, resolveComponent as _n, resolveDirective as go, withDirectives as vo, createBlock as qt, resolveDynamicComponent as po, withCtx as mo, createCommentVNode as Tn, normalizeClass as Rn, hasInjectionContext as bo, inject as yo, reactive as So, markRaw as gt, effectScope as ko, isRef as wt, isReactive as hn, toRef as Kt, toRaw as wo, computed as gn, getCurrentScope as _o, onScopeDispose as To, toRefs as $n, defineComponent as Ro, unref as Yt } from "vue";
function bt(...e) {
  if (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (!r)
        continue;
      const o = typeof r;
      if (o === "string" || o === "number")
        t.push(r);
      else if (o === "object") {
        const u = Array.isArray(r) ? [bt(...r)] : Object.entries(r).map(([i, c]) => c ? i : void 0);
        t = u.length ? t.concat(u.filter((i) => !!i)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
function $o(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function Io(e, t) {
  if (e && t) {
    const n = (r) => {
      $o(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Jt(e, t) {
  if (e && t) {
    const n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function In(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Co(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Oo(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Po(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Oo(e));
}
function At(e) {
  return typeof HTMLElement < "u" ? e instanceof HTMLElement : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Wt(e, t = {}) {
  if (At(e)) {
    const n = (r, o) => {
      var u, i;
      const c = (u = e == null ? void 0 : e.$attrs) != null && u[r] ? [(i = e == null ? void 0 : e.$attrs) == null ? void 0 : i[r]] : [];
      return [o].flat().reduce((l, s) => {
        if (s != null) {
          const h = typeof s;
          if (h === "string" || h === "number")
            l.push(s);
          else if (h === "object") {
            const b = Array.isArray(s) ? n(r, s) : Object.entries(s).map(([d, a]) => r === "style" && (a || a === 0) ? `${d.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${a}` : a ? d : void 0);
            l = b.length ? l.concat(b.filter((d) => !!d)) : l;
          }
        }
        return l;
      }, c);
    };
    Object.entries(t).forEach(([r, o]) => {
      if (o != null) {
        const u = r.match(/^on(.+)/);
        u ? e.addEventListener(u[1].toLowerCase(), o) : r === "p-bind" || r === "pBind" ? Wt(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function Eo(e, t = {}, ...n) {
  {
    const r = document.createElement(e);
    return Wt(r, t), r.append(...n), r;
  }
}
function Ao(e, t) {
  return At(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function Do(e, t) {
  if (At(e)) {
    const n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Cn(e) {
  if (e) {
    let t = e.offsetHeight;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function xo(e) {
  if (e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || In(document.documentElement) || In(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Mo(e, t) {
  return e ? e.offsetHeight : 0;
}
function On(e) {
  if (e) {
    let t = e.offsetWidth;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function No() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lo(e, t = "", n) {
  At(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
function Br() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, n) {
      let r = e.get(t);
      return r ? r.push(n) : r = [n], e.set(t, r), this;
    },
    off(t, n) {
      const r = e.get(t);
      return r && r.splice(r.indexOf(n) >>> 0, 1), this;
    },
    emit(t, n) {
      const r = e.get(t);
      r && r.forEach((o) => {
        o(n);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function Je(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function vn(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function Z(e) {
  return !Je(e);
}
function je(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function be(e, ...t) {
  return vn(e) ? e(...t) : e;
}
function he(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function Re(e) {
  return he(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function pn(e, t = "", n = {}) {
  const r = Re(t).split("."), o = r.shift();
  if (o) {
    if (je(e)) {
      const u = Object.keys(e).find((i) => Re(i) === o) || "";
      return pn(be(e[u], n), r.join("."), n);
    }
    return;
  }
  return be(e, n);
}
function Gt(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function Ho(e) {
  return Z(e) && !isNaN(e);
}
function Ne(e, t) {
  if (t) {
    const n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function yt(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Uo(e) {
  return he(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Wr(e) {
  return he(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, n) => n === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function Pn(e) {
  return he(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
var Nt = {};
function jo(e = "pui_id_") {
  return Object.hasOwn(Nt, e) || (Nt[e] = 0), Nt[e]++, `${e}${Nt[e]}`;
}
var Fo = Object.defineProperty, Vo = Object.defineProperties, qo = Object.getOwnPropertyDescriptors, Xt = Object.getOwnPropertySymbols, Xr = Object.prototype.hasOwnProperty, zr = Object.prototype.propertyIsEnumerable, En = (e, t, n) => t in e ? Fo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, we = (e, t) => {
  for (var n in t || (t = {}))
    Xr.call(t, n) && En(e, n, t[n]);
  if (Xt)
    for (var n of Xt(t))
      zr.call(t, n) && En(e, n, t[n]);
  return e;
}, Qt = (e, t) => Vo(e, qo(t)), $e = (e, t) => {
  var n = {};
  for (var r in e)
    Xr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Xt)
    for (var r of Xt(e))
      t.indexOf(r) < 0 && zr.call(e, r) && (n[r] = e[r]);
  return n;
}, Bo = Br(), ce = Bo;
function An(e, t) {
  Gt(e) ? e.push(...t || []) : je(e) && Object.assign(e, t);
}
function Wo(e) {
  return je(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Xo(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function un(e = "", t = "") {
  return Xo(`${he(e, !1) && he(t, !1) ? `${e}-` : e}${t}`);
}
function Gr(e = "", t = "") {
  return `--${un(e, t)}`;
}
function zo(e = "") {
  const t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Kr(e, t = "", n = "", r = [], o) {
  if (he(e)) {
    const u = /{([^}]*)}/g, i = e.trim();
    if (zo(i))
      return;
    if (Ne(i, u)) {
      const c = i.replaceAll(u, (h) => {
        const d = h.replace(/{|}/g, "").split(".").filter((a) => !r.some((g) => Ne(a, g)));
        return `var(${Gr(n, Wr(d.join("-")))}${Z(o) ? `, ${o}` : ""})`;
      }), l = /(\d+\s+[\+\-\*\/]\s+\d+)/g, s = /var\([^)]+\)/g;
      return Ne(c.replace(s, "0"), l) ? `calc(${c})` : c;
    }
    return i;
  } else if (Ho(e))
    return e;
}
function Go(e, t, n) {
  he(t, !1) && e.push(`${t}:${n};`);
}
function st(e, t) {
  return e ? `${e}{${t}}` : "";
}
var St = (...e) => Ko(ee.getTheme(), ...e), Ko = (e = {}, t, n, r) => {
  if (t) {
    const { variable: o, options: u } = ee.defaults || {}, { prefix: i, transform: c } = (e == null ? void 0 : e.options) || u || {}, s = Ne(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return r === "value" || Je(r) && c === "strict" ? ee.getTokenValue(t) : Kr(s, void 0, i, [o.excludedKeyRegex], n);
  }
  return "";
};
function Yo(e, t = {}) {
  const n = ee.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: u = n.excludedKeyRegex } = t, i = (s, h = "") => Object.entries(s).reduce(
    (b, [d, a]) => {
      const g = Ne(d, u) ? un(h) : un(h, Wr(d)), y = Wo(a);
      if (je(y)) {
        const { variables: S, tokens: p } = i(y, g);
        An(b.tokens, p), An(b.variables, S);
      } else
        b.tokens.push((r ? g.replace(`${r}-`, "") : g).replaceAll("-", ".")), Go(b.variables, Gr(g), Kr(y, g, r, [u]));
      return b;
    },
    { variables: [], tokens: [] }
  ), { variables: c, tokens: l } = i(e, r);
  return {
    value: c,
    tokens: l,
    declarations: c.join(""),
    css: st(o, c.join(""))
  };
}
var ke = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const t = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [e].flat().map((n) => {
        var r;
        return (r = t.map((o) => o.resolve(n)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(e, t) {
    return Yo(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var u, i, c, l, s, h, b;
    const { preset: d, options: a } = t;
    let g, y, S, p, m, v, f;
    if (Z(d) && a.transform !== "strict") {
      const { primitive: k, semantic: w, extend: _ } = d, O = w || {}, { colorScheme: P } = O, $ = $e(O, ["colorScheme"]), R = _ || {}, { colorScheme: E } = R, x = $e(R, ["colorScheme"]), K = P || {}, { dark: te } = K, se = $e(K, ["dark"]), re = E || {}, { dark: N } = re, D = $e(re, ["dark"]), j = Z(k) ? this._toVariables({ primitive: k }, a) : {}, U = Z($) ? this._toVariables({ semantic: $ }, a) : {}, B = Z(se) ? this._toVariables({ light: se }, a) : {}, G = Z(te) ? this._toVariables({ dark: te }, a) : {}, T = Z(x) ? this._toVariables({ semantic: x }, a) : {}, C = Z(D) ? this._toVariables({ light: D }, a) : {}, I = Z(N) ? this._toVariables({ dark: N }, a) : {}, [A, M] = [(u = j.declarations) != null ? u : "", j.tokens], [H, V] = [(i = U.declarations) != null ? i : "", U.tokens || []], [L, W] = [(c = B.declarations) != null ? c : "", B.tokens || []], [F, J] = [(l = G.declarations) != null ? l : "", G.tokens || []], [ne, ye] = [(s = T.declarations) != null ? s : "", T.tokens || []], [ge, ve] = [(h = C.declarations) != null ? h : "", C.tokens || []], [Se, Y] = [(b = I.declarations) != null ? b : "", I.tokens || []];
      g = this.transformCSS(e, A, "light", "variable", a, r, o), y = M;
      const pe = this.transformCSS(e, `${H}${L}`, "light", "variable", a, r, o), at = this.transformCSS(e, `${F}`, "dark", "variable", a, r, o);
      S = `${pe}${at}`, p = [.../* @__PURE__ */ new Set([...V, ...W, ...J])];
      const Le = this.transformCSS(e, `${ne}${ge}color-scheme:light`, "light", "variable", a, r, o), ae = this.transformCSS(e, `${Se}color-scheme:dark`, "dark", "variable", a, r, o);
      m = `${Le}${ae}`, v = [.../* @__PURE__ */ new Set([...ye, ...ve, ...Y])], f = be(d.css, { dt: St });
    }
    return {
      primitive: {
        css: g,
        tokens: y
      },
      semantic: {
        css: S,
        tokens: p
      },
      global: {
        css: m,
        tokens: v
      },
      style: f
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: u, selector: i }) {
    var c, l, s;
    let h, b, d;
    if (Z(t) && n.transform !== "strict") {
      const a = e.replace("-directive", ""), g = t, { colorScheme: y, extend: S, css: p } = g, m = $e(g, ["colorScheme", "extend", "css"]), v = S || {}, { colorScheme: f } = v, k = $e(v, ["colorScheme"]), w = y || {}, { dark: _ } = w, O = $e(w, ["dark"]), P = f || {}, { dark: $ } = P, R = $e(P, ["dark"]), E = Z(m) ? this._toVariables({ [a]: we(we({}, m), k) }, n) : {}, x = Z(O) ? this._toVariables({ [a]: we(we({}, O), R) }, n) : {}, K = Z(_) ? this._toVariables({ [a]: we(we({}, _), $) }, n) : {}, [te, se] = [(c = E.declarations) != null ? c : "", E.tokens || []], [re, N] = [(l = x.declarations) != null ? l : "", x.tokens || []], [D, j] = [(s = K.declarations) != null ? s : "", K.tokens || []], U = this.transformCSS(a, `${te}${re}`, "light", "variable", n, o, u, i), B = this.transformCSS(a, D, "dark", "variable", n, o, u, i);
      h = `${U}${B}`, b = [.../* @__PURE__ */ new Set([...se, ...N, ...j])], d = be(p, { dt: St });
    }
    return {
      css: h,
      tokens: b,
      style: d
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var u;
    const { preset: i, options: c } = t, l = (u = i == null ? void 0 : i.components) == null ? void 0 : u[e];
    return this.getPreset({ name: e, preset: l, options: c, params: n, set: r, defaults: o });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var u, i;
    const c = e.replace("-directive", ""), { preset: l, options: s } = t, h = ((u = l == null ? void 0 : l.components) == null ? void 0 : u[c]) || ((i = l == null ? void 0 : l.directives) == null ? void 0 : i[c]);
    return this.getPreset({ name: c, preset: h, options: s, params: n, set: r, defaults: o });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, t) {
    var n;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
  },
  getLayerOrder(e, t = {}, n, r) {
    const { cssLayer: o } = t;
    return o ? `@layer ${be(o.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: u }) {
    const i = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: u }), c = Object.entries(r).reduce((l, [s, h]) => l.push(`${s}="${h}"`) && l, []).join(" ");
    return Object.entries(i || {}).reduce((l, [s, h]) => {
      if (h != null && h.css) {
        const b = yt(h == null ? void 0 : h.css), d = `${s}-variables`;
        l.push(`<style type="text/css" data-primevue-style-id="${d}" ${c}>${b}</style>`);
      }
      return l;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: u }) {
    var i;
    const c = { name: e, theme: t, params: n, set: o, defaults: u }, l = (i = e.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : i.css, s = Object.entries(r).reduce((h, [b, d]) => h.push(`${b}="${d}"`) && h, []).join(" ");
    return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${s}>${yt(l)}</style>` : "";
  },
  createTokens(e = {}, t, n = "", r = "", o = {}) {
    return Object.entries(e).forEach(([u, i]) => {
      const c = Ne(u, t.variable.excludedKeyRegex) ? n : n ? `${n}.${Pn(u)}` : Pn(u), l = r ? `${r}.${u}` : u;
      je(i) ? this.createTokens(i, t, c, l, o) : (o[c] || (o[c] = {
        paths: [],
        computed(s, h = {}) {
          var b, d;
          return this.paths.length === 1 ? (b = this.paths[0]) == null ? void 0 : b.computed(this.paths[0].scheme, h.binding) : s && s !== "none" ? (d = this.paths.find((a) => a.scheme === s)) == null ? void 0 : d.computed(s, h.binding) : this.paths.map((a) => a.computed(a.scheme, h[a.scheme]));
        }
      }), o[c].paths.push({
        path: l,
        value: i,
        scheme: l.includes("colorScheme.light") ? "light" : l.includes("colorScheme.dark") ? "dark" : "none",
        computed(s, h = {}) {
          const b = /{([^}]*)}/g;
          let d = i;
          if (h.name = this.path, h.binding || (h.binding = {}), Ne(i, b)) {
            const g = i.trim().replaceAll(b, (p) => {
              var m;
              const v = p.replace(/{|}/g, ""), f = (m = o[v]) == null ? void 0 : m.computed(s, h);
              return Gt(f) && f.length === 2 ? `light-dark(${f[0].value},${f[1].value})` : f == null ? void 0 : f.value;
            }), y = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, S = /var\([^)]+\)/g;
            d = Ne(g.replace(S, "0"), y) ? `calc(${g})` : g;
          }
          return Je(h.binding) && delete h.binding, {
            colorScheme: s,
            path: this.path,
            paths: h,
            value: d.includes("undefined") ? void 0 : d
          };
        }
      }));
    }), o;
  },
  getTokenValue(e, t, n) {
    var r;
    const u = ((l) => l.split(".").filter((h) => !Ne(h.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), i = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, c = [(r = e[u]) == null ? void 0 : r.computed(i)].flat().filter((l) => l);
    return c.length === 1 ? c[0].value : c.reduce((l = {}, s) => {
      const h = s, { colorScheme: b } = h, d = $e(h, ["colorScheme"]);
      return l[b] = d, l;
    }, void 0);
  },
  getSelectorRule(e, t, n, r) {
    return n === "class" || n === "attr" ? st(Z(t) ? `${e}${t},${e} ${t}` : e, r) : st(e, Z(t) ? st(t, r) : r);
  },
  transformCSS(e, t, n, r, o = {}, u, i, c) {
    if (Z(t)) {
      const { cssLayer: l } = o;
      if (r !== "style") {
        const s = this.getColorSchemeOption(o, i);
        t = n === "dark" ? s.reduce((h, { type: b, selector: d }) => (Z(d) && (h += d.includes("[CSS]") ? d.replace("[CSS]", t) : this.getSelectorRule(d, c, b, t)), h), "") : st(c ?? ":root", t);
      }
      if (l) {
        const s = {
          name: "primeui"
        };
        je(l) && (s.name = be(l.name, { name: e, type: r })), Z(s.name) && (t = st(`@layer ${s.name}`, t), u == null || u.layerNames(s.name));
      }
      return t;
    }
    return "";
  }
}, ee = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: t } = e;
    t && (this._theme = Qt(we({}, t), {
      options: we(we({}, this.defaults.options), t.options)
    }), this._tokens = ke.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), ce.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = Qt(we({}, this.theme), { preset: e }), this._tokens = ke.createTokens(e, this.defaults), this.clearLoadedStyleNames(), ce.emit("preset:change", e), ce.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = Qt(we({}, this.theme), { options: e }), this.clearLoadedStyleNames(), ce.emit("options:change", e), ce.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return ke.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return ke.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ke.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ke.getPresetD(n);
  },
  getCustomPreset(e = "", t, n, r) {
    const o = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ke.getPreset(o);
  },
  getLayerOrderCSS(e = "") {
    return ke.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, n = "style", r) {
    return ke.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, n = {}) {
    return ke.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, n = {}) {
    return ke.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), ce.emit(`theme:${t}:load`, e), !this._loadingStyles.size && ce.emit("theme:load"));
  }
}, Ue = {
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
}, Jo = ({ dt: e }) => `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}
`;
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function Dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dn(Object(n), !0).forEach(function(r) {
      Qo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qo(e, t, n) {
  return (t = Zo(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Zo(e) {
  var t = ei(e, "string");
  return _t(t) == "symbol" ? t : t + "";
}
function ei(e, t) {
  if (_t(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (_t(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ti(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  jr() ? co(e) : t ? e() : an(e);
}
var ni = 0;
function ri(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ke(!1), r = Ke(e), o = Ke(null), u = No() ? window.document : void 0, i = t.document, c = i === void 0 ? u : i, l = t.immediate, s = l === void 0 ? !0 : l, h = t.manual, b = h === void 0 ? !1 : h, d = t.name, a = d === void 0 ? "style_".concat(++ni) : d, g = t.id, y = g === void 0 ? void 0 : g, S = t.media, p = S === void 0 ? void 0 : S, m = t.nonce, v = m === void 0 ? void 0 : m, f = t.first, k = f === void 0 ? !1 : f, w = t.onMounted, _ = w === void 0 ? void 0 : w, O = t.onUpdated, P = O === void 0 ? void 0 : O, $ = t.onLoad, R = $ === void 0 ? void 0 : $, E = t.props, x = E === void 0 ? {} : E, K = function() {
  }, te = function(N) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var j = xn(xn({}, x), D), U = j.name || a, B = j.id || y, G = j.nonce || v;
      o.value = c.querySelector('style[data-primevue-style-id="'.concat(U, '"]')) || c.getElementById(B) || c.createElement("style"), o.value.isConnected || (r.value = N || e, Wt(o.value, {
        type: "text/css",
        id: B,
        media: p,
        nonce: G
      }), k ? c.head.prepend(o.value) : c.head.appendChild(o.value), Lo(o.value, "data-primevue-style-id", U), Wt(o.value, j), o.value.onload = function(T) {
        return R == null ? void 0 : R(T, {
          name: U
        });
      }, _ == null || _(U)), !n.value && (K = Fr(r, function(T) {
        o.value.textContent = T, P == null || P(U);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, se = function() {
    !c || !n.value || (K(), Po(o.value) && c.head.removeChild(o.value), n.value = !1);
  };
  return s && !b && ti(te), {
    id: y,
    name: a,
    el: o,
    css: r,
    unload: se,
    load: te,
    isLoaded: lo(n)
  };
}
function Tt(e) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function Mn(e, t) {
  return ai(e) || si(e, t) || ii(e, t) || oi();
}
function oi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ii(e, t) {
  if (e) {
    if (typeof e == "string") return Nn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nn(e, t) : void 0;
  }
}
function Nn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function si(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, u, i, c = [], l = !0, s = !1;
    try {
      if (u = (n = n.call(e)).next, t !== 0) for (; !(l = (r = u.call(n)).done) && (c.push(r.value), c.length !== t); l = !0) ;
    } catch (h) {
      s = !0, o = h;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function ai(e) {
  if (Array.isArray(e)) return e;
}
function Ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ln(Object(n), !0).forEach(function(r) {
      ui(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ln(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ui(e, t, n) {
  return (t = li(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function li(e) {
  var t = ci(e, "string");
  return Tt(t) == "symbol" ? t : t + "";
}
function ci(e, t) {
  if (Tt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Tt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var di = function(t) {
  var n = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, fi = {}, hi = {}, ie = {
  name: "base",
  css: di,
  style: Jo,
  classes: fi,
  inlineStyles: hi,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
      return u;
    }, o = r(be(t, {
      dt: St
    }));
    return Z(o) ? ri(yt(o), Zt({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadStyle: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return ee.transformCSS(n.name || t.name, "".concat(o).concat(r));
    });
  },
  getCommonTheme: function(t) {
    return ee.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return ee.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return ee.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return ee.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return ee.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = be(this.css, {
        dt: St
      }) || "", o = yt("".concat(r).concat(t)), u = Object.entries(n).reduce(function(i, c) {
        var l = Mn(c, 2), s = l[0], h = l[1];
        return i.push("".concat(s, '="').concat(h, '"')) && i;
      }, []).join(" ");
      return Z(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(u, ">").concat(o, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ee.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [ee.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), u = be(this.style, {
        dt: St
      }), i = yt(ee.transformCSS(o, u)), c = Object.entries(n).reduce(function(l, s) {
        var h = Mn(s, 2), b = h[0], d = h[1];
        return l.push("".concat(b, '="').concat(d, '"')) && l;
      }, []).join(" ");
      Z(i) && r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(c, ">").concat(i, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return Zt(Zt({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
};
function gi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = fo();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var Hn = ie.extend({
  name: "common"
});
function Rt(e) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rt(e);
}
function vi(e) {
  return Qr(e) || pi(e) || Jr(e) || Yr();
}
function pi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ut(e, t) {
  return Qr(e) || mi(e, t) || Jr(e, t) || Yr();
}
function Yr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jr(e, t) {
  if (e) {
    if (typeof e == "string") return Un(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Un(e, t) : void 0;
  }
}
function Un(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function mi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, u, i, c = [], l = !0, s = !1;
    try {
      if (u = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = u.call(n)).done) && (c.push(r.value), c.length !== t); l = !0) ;
    } catch (h) {
      s = !0, o = h;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function Qr(e) {
  if (Array.isArray(e)) return e;
}
function jn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jn(Object(n), !0).forEach(function(r) {
      vt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vt(e, t, n) {
  return (t = bi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bi(e) {
  var t = yi(e, "string");
  return Rt(t) == "symbol" ? t : t + "";
}
function yi(e, t) {
  if (Rt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Rt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mn = {
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
        ce.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, n) {
        var r = this;
        ce.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
          return r._loadScopedThemeStyles(t);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, n, r, o, u, i, c, l, s, h, b, d = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, a = d ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, g = d ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (o = g || a) === null || o === void 0 || (o = o.hooks) === null || o === void 0 || (u = o.onBeforeCreate) === null || u === void 0 || u.call(o);
    var y = (i = this.$primevueConfig) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i._usept, S = y ? (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 || (c = c.pt) === null || c === void 0 ? void 0 : c.originalValue : void 0, p = y ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 ? void 0 : s.pt;
    (h = p || S) === null || h === void 0 || (h = h[this.$.type.name]) === null || h === void 0 || (h = h.hooks) === null || h === void 0 || (b = h.onBeforeCreate) === null || b === void 0 || b.call(h), this.$attrSelector = gi(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = Ao(At(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = X({
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
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), r = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        n == null || n(), r == null || r();
      }
    },
    _mergeProps: function(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o];
      return vn(t) ? t.apply(void 0, r) : fe.apply(void 0, r);
    },
    _load: function() {
      Ue.isStyleNameLoaded("base") || (ie.loadCSS(this.$styleOptions), this._loadGlobalStyles(), Ue.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !Ue.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (Hn.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), Ue.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      Z(t) && ie.load(t, X({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!ee.isStyleNameLoaded("common")) {
          var r, o, u = ((r = this.$style) === null || r === void 0 || (o = r.getCommonTheme) === null || o === void 0 ? void 0 : o.call(r)) || {}, i = u.primitive, c = u.semantic, l = u.global, s = u.style;
          ie.load(i == null ? void 0 : i.css, X({
            name: "primitive-variables"
          }, this.$styleOptions)), ie.load(c == null ? void 0 : c.css, X({
            name: "semantic-variables"
          }, this.$styleOptions)), ie.load(l == null ? void 0 : l.css, X({
            name: "global-variables"
          }, this.$styleOptions)), ie.loadStyle(X({
            name: "global-style"
          }, this.$styleOptions), s), ee.setLoadedStyleName("common");
        }
        if (!ee.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var h, b, d, a, g = ((h = this.$style) === null || h === void 0 || (b = h.getComponentTheme) === null || b === void 0 ? void 0 : b.call(h)) || {}, y = g.css, S = g.style;
          (d = this.$style) === null || d === void 0 || d.load(y, X({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (a = this.$style) === null || a === void 0 || a.loadStyle(X({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), S), ee.setLoadedStyleName(this.$style.name);
        }
        if (!ee.isStyleNameLoaded("layer-order")) {
          var p, m, v = (p = this.$style) === null || p === void 0 || (m = p.getLayerOrderThemeCSS) === null || m === void 0 ? void 0 : m.call(p);
          ie.load(v, X({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), ee.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var n, r, o, u = ((n = this.$style) === null || n === void 0 || (r = n.getPresetTheme) === null || r === void 0 ? void 0 : r.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, i = u.css, c = (o = this.$style) === null || o === void 0 ? void 0 : o.load(i, X({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = c.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Ue.clearLoadedStyleNames(), ce.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      ce.off("theme:change", this._loadCoreStyles), ce.off("theme:change", this._load), ce.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var n;
      return this[t] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[t]);
    },
    _getOptionValue: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return pn(t, n, r);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = /./g.test(r) && !!o[r.split(".")[0]], c = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, l = c.mergeSections, s = l === void 0 ? !0 : l, h = c.mergeProps, b = h === void 0 ? !1 : h, d = u ? i ? this._useGlobalPT(this._getPTClassValue, r, o) : this._useDefaultPT(this._getPTClassValue, r, o) : void 0, a = i ? void 0 : this._getPTSelf(n, this._getPTClassValue, r, X(X({}, o), {}, {
        global: d || {}
      })), g = this._getPTDatasets(r);
      return s || !s && a ? b ? this._mergeProps(b, d, a, g) : X(X(X({}, d), a), g) : X(X({}, a), g);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o];
      return fe(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = "data-pc-", u = r === "root" && Z((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return r !== "transition" && X(X({}, r === "root" && X(X(vt({}, "".concat(o, "name"), Re(u ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), u && vt({}, "".concat(o, "extend"), Re(this.$.type.name))), {}, vt({}, "".concat(this.$attrSelector), ""))), {}, vt({}, "".concat(o, "section"), Re(r)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return he(t) || Gt(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, u = function(c) {
        var l, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = o ? o(c) : c, b = Re(r), d = Re(n.$name);
        return (l = s ? b !== d ? h == null ? void 0 : h[b] : void 0 : h == null ? void 0 : h[b]) !== null && l !== void 0 ? l : h;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: u(t.originalValue),
        value: u(t.value)
      } : u(t, !0);
    },
    _usePT: function(t, n, r, o) {
      var u = function(y) {
        return n(y, r, o);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var i, c = t._usept || ((i = this.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, l = c.mergeSections, s = l === void 0 ? !0 : l, h = c.mergeProps, b = h === void 0 ? !1 : h, d = u(t.originalValue), a = u(t.value);
        return d === void 0 && a === void 0 ? void 0 : he(a) ? a : he(d) ? d : s || !s && a ? b ? this._mergeProps(b, d, a) : X(X({}, d), a) : a;
      }
      return u(t);
    },
    _useGlobalPT: function(t, n, r) {
      return this._usePT(this.globalPT, t, n, r);
    },
    _useDefaultPT: function(t, n, r) {
      return this._usePT(this.defaultPT, t, n, r);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, X(X({}, this.$params), n));
    },
    ptmi: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = fe(this.$_attrsWithoutPT, this.ptm(n, r));
      return o != null && o.hasOwnProperty("id") && ((t = o.id) !== null && t !== void 0 || (o.id = this.$id)), o;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, X({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, X(X({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var o = this._getOptionValue(this.$style.inlineStyles, t, X(X({}, this.$params), r)), u = this._getOptionValue(Hn.inlineStyles, t, X(X({}, this.$params), r));
        return [u, o];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return be(r, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return n._getOptionValue(r, n.$name, X({}, n.$params)) || be(r, X({}, n.$params));
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
      return Object.fromEntries(Object.entries(this.$props).filter(function(r) {
        var o = ut(r, 1), u = o[0];
        return n == null ? void 0 : n.includes(u);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return X(X({
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
        var n = ut(t, 1), r = n[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(t, n) {
        var r = ut(n, 2), o = r[0], u = r[1], i = o.split(":"), c = vi(i), l = c.slice(1);
        return l == null || l.reduce(function(s, h, b, d) {
          return !s[h] && (s[h] = b === d.length - 1 ? u : {}), s[h];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = ut(t, 1), r = n[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(t, n) {
        var r = ut(n, 2), o = r[0], u = r[1];
        return t[o] = u, t;
      }, {});
    }
  }
}, Si = `
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
`, ki = ie.extend({
  name: "baseicon",
  css: Si
});
function $t(e) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
}
function Fn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fn(Object(n), !0).forEach(function(r) {
      wi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wi(e, t, n) {
  return (t = _i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _i(e) {
  var t = Ti(e, "string");
  return $t(t) == "symbol" ? t : t + "";
}
function Ti(e, t) {
  if ($t(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($t(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ri = {
  name: "BaseIcon",
  extends: mn,
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
  style: ki,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = Je(this.label);
      return Vn(Vn({}, !this.isUnstyled && {
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
}, Zr = {
  name: "SpinnerIcon",
  extends: Ri
};
function $i(e, t, n, r, o, u) {
  return He(), Bt("svg", fe({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [Vr("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Zr.render = $i;
var Ii = ({ dt: e }) => `
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
`, Ci = {
  root: function(t) {
    var n = t.props, r = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": Z(n.value) && String(n.value).length === 1,
      "p-badge-dot": Je(n.value) && !r.$slots.default,
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
}, Oi = ie.extend({
  name: "badge",
  style: Ii,
  classes: Ci
}), Pi = {
  name: "BaseBadge",
  extends: mn,
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
  style: Oi,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function qn(e, t, n) {
  return (t = Ei(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ei(e) {
  var t = Ai(e, "string");
  return It(t) == "symbol" ? t : t + "";
}
function Ai(e, t) {
  if (It(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (It(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eo = {
  name: "Badge",
  extends: Pi,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return bt(qn(qn({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Di = ["data-p"];
function xi(e, t, n, r, o, u) {
  return He(), Bt("span", fe({
    class: e.cx("root"),
    "data-p": u.dataP
  }, e.ptmi("root")), [ht(e.$slots, "default", {}, function() {
    return [ho(qr(e.value), 1)];
  })], 16, Di);
}
eo.render = xi;
var Lt = Br();
function Ct(e) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ct(e);
}
function Bn(e, t) {
  return Hi(e) || Li(e, t) || Ni(e, t) || Mi();
}
function Mi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ni(e, t) {
  if (e) {
    if (typeof e == "string") return Wn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wn(e, t) : void 0;
  }
}
function Wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Li(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, u, i, c = [], l = !0, s = !1;
    try {
      if (u = (n = n.call(e)).next, t !== 0) for (; !(l = (r = u.call(n)).done) && (c.push(r.value), c.length !== t); l = !0) ;
    } catch (h) {
      s = !0, o = h;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function Hi(e) {
  if (Array.isArray(e)) return e;
}
function Xn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xn(Object(n), !0).forEach(function(r) {
      ln(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ln(e, t, n) {
  return (t = Ui(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ui(e) {
  var t = ji(e, "string");
  return Ct(t) == "symbol" ? t : t + "";
}
function ji(e, t) {
  if (Ct(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ct(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var q = {
  _getMeta: function() {
    return [je(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], be(je(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var r, o, u;
    return (r = (t == null || (o = t.instance) === null || o === void 0 ? void 0 : o.$primevue) || (n == null || (u = n.ctx) === null || u === void 0 || (u = u.appContext) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.globalProperties) === null || u === void 0 ? void 0 : u.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: pn,
  _getPTValue: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var m = q._getOptionValue.apply(q, arguments);
      return he(m) || Gt(m) ? {
        class: m
      } : m;
    }, s = ((t = r.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, h = s.mergeSections, b = h === void 0 ? !0 : h, d = s.mergeProps, a = d === void 0 ? !1 : d, g = c ? q._useDefaultPT(r, r.defaultPT(), l, u, i) : void 0, y = q._usePT(r, q._getPT(o, r.$name), l, u, z(z({}, i), {}, {
      global: g || {}
    })), S = q._getPTDatasets(r, u);
    return b || !b && y ? a ? q._mergeProps(r, a, g, y, S) : z(z(z({}, g), y), S) : z(z({}, y), S);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return z(z({}, n === "root" && ln({}, "".concat(r, "name"), Re(t.$name))), {}, ln({}, "".concat(r, "section"), Re(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, o = function(i) {
      var c, l = r ? r(i) : i, s = Re(n);
      return (c = l == null ? void 0 : l[s]) !== null && c !== void 0 ? c : l;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: o(t.originalValue),
      value: o(t.value)
    } : o(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0, i = function(S) {
      return r(S, o, u);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var c, l = n._usept || ((c = t.$primevueConfig) === null || c === void 0 ? void 0 : c.ptOptions) || {}, s = l.mergeSections, h = s === void 0 ? !0 : s, b = l.mergeProps, d = b === void 0 ? !1 : b, a = i(n.originalValue), g = i(n.value);
      return a === void 0 && g === void 0 ? void 0 : he(g) ? g : he(a) ? a : h || !h && g ? d ? q._mergeProps(t, d, a, g) : z(z({}, a), g) : g;
    }
    return i(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0;
    return q._usePT(t, n, r, o, u);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, u = q._getConfig(r, o), i = {
      nonce: u == null || (t = u.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    q._loadCoreStyles(n, i), q._loadThemeStyles(n, i), q._loadScopedThemeStyles(n, i), q._removeThemeListeners(n), n.$loadStyles = function() {
      return q._loadThemeStyles(n, i);
    }, q._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (!Ue.isStyleNameLoaded((t = r.$style) === null || t === void 0 ? void 0 : t.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
      var u;
      ie.loadCSS(o), (u = r.$style) === null || u === void 0 || u.loadCSS(o), Ue.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, n, r, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled() || (o == null || (t = o.theme) === null || t === void 0 ? void 0 : t.call(o)) === "none")) {
      if (!ee.isStyleNameLoaded("common")) {
        var i, c, l = ((i = o.$style) === null || i === void 0 || (c = i.getCommonTheme) === null || c === void 0 ? void 0 : c.call(i)) || {}, s = l.primitive, h = l.semantic, b = l.global, d = l.style;
        ie.load(s == null ? void 0 : s.css, z({
          name: "primitive-variables"
        }, u)), ie.load(h == null ? void 0 : h.css, z({
          name: "semantic-variables"
        }, u)), ie.load(b == null ? void 0 : b.css, z({
          name: "global-variables"
        }, u)), ie.loadStyle(z({
          name: "global-style"
        }, u), d), ee.setLoadedStyleName("common");
      }
      if (!ee.isStyleNameLoaded((n = o.$style) === null || n === void 0 ? void 0 : n.name) && (r = o.$style) !== null && r !== void 0 && r.name) {
        var a, g, y, S, p = ((a = o.$style) === null || a === void 0 || (g = a.getDirectiveTheme) === null || g === void 0 ? void 0 : g.call(a)) || {}, m = p.css, v = p.style;
        (y = o.$style) === null || y === void 0 || y.load(m, z({
          name: "".concat(o.$style.name, "-variables")
        }, u)), (S = o.$style) === null || S === void 0 || S.loadStyle(z({
          name: "".concat(o.$style.name, "-style")
        }, u), v), ee.setLoadedStyleName(o.$style.name);
      }
      if (!ee.isStyleNameLoaded("layer-order")) {
        var f, k, w = (f = o.$style) === null || f === void 0 || (k = f.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(f);
        ie.load(w, z({
          name: "layer-order",
          first: !0
        }, u)), ee.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = t.preset();
    if (r && t.$attrSelector) {
      var o, u, i, c = ((o = t.$style) === null || o === void 0 || (u = o.getPresetTheme) === null || u === void 0 ? void 0 : u.call(o, r, "[".concat(t.$attrSelector, "]"))) || {}, l = c.css, s = (i = t.$style) === null || i === void 0 ? void 0 : i.load(l, z({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = s.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Ue.clearLoadedStyleNames(), ce.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ce.off("theme:change", t.$loadStyles);
  },
  _hook: function(t, n, r, o, u, i) {
    var c, l, s = "on".concat(Uo(n)), h = q._getConfig(o, u), b = r == null ? void 0 : r.$instance, d = q._usePT(b, q._getPT(o == null || (c = o.value) === null || c === void 0 ? void 0 : c.pt, t), q._getOptionValue, "hooks.".concat(s)), a = q._useDefaultPT(b, h == null || (l = h.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], q._getOptionValue, "hooks.".concat(s)), g = {
      el: r,
      binding: o,
      vnode: u,
      prevVnode: i
    };
    d == null || d(b, g), a == null || a(b, g);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o];
    return vn(t) ? t.apply(void 0, r) : fe.apply(void 0, r);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(c, l, s, h, b) {
      var d, a, g, y;
      l._$instances = l._$instances || {};
      var S = q._getConfig(s, h), p = l._$instances[t] || {}, m = Je(p) ? z(z({}, n), n == null ? void 0 : n.methods) : {};
      l._$instances[t] = z(z({}, p), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: l,
        $binding: s,
        $modifiers: s == null ? void 0 : s.modifiers,
        $value: s == null ? void 0 : s.value,
        $el: p.$el || l || void 0,
        $style: z({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: S,
        $attrSelector: (d = l.$pd) === null || d === void 0 || (d = d[t]) === null || d === void 0 ? void 0 : d.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return q._getPT(S == null ? void 0 : S.pt, void 0, function(f) {
            var k;
            return f == null || (k = f.directives) === null || k === void 0 ? void 0 : k[t];
          });
        },
        isUnstyled: function() {
          var f, k;
          return ((f = l._$instances[t]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.unstyled) !== void 0 ? (k = l._$instances[t]) === null || k === void 0 || (k = k.$binding) === null || k === void 0 || (k = k.value) === null || k === void 0 ? void 0 : k.unstyled : S == null ? void 0 : S.unstyled;
        },
        theme: function() {
          var f;
          return (f = l._$instances[t]) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.theme;
        },
        preset: function() {
          var f;
          return (f = l._$instances[t]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.dt;
        },
        /* instance's methods */
        ptm: function() {
          var f, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return q._getPTValue(l._$instances[t], (f = l._$instances[t]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.pt, k, z({}, w));
        },
        ptmo: function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return q._getPTValue(l._$instances[t], f, k, w, !1);
        },
        cx: function() {
          var f, k, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (f = l._$instances[t]) !== null && f !== void 0 && f.isUnstyled() ? void 0 : q._getOptionValue((k = l._$instances[t]) === null || k === void 0 || (k = k.$style) === null || k === void 0 ? void 0 : k.classes, w, z({}, _));
        },
        sx: function() {
          var f, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return w ? q._getOptionValue((f = l._$instances[t]) === null || f === void 0 || (f = f.$style) === null || f === void 0 ? void 0 : f.inlineStyles, k, z({}, _)) : void 0;
        }
      }, m), l.$instance = l._$instances[t], (a = (g = l.$instance)[c]) === null || a === void 0 || a.call(g, l, s, h, b), l["$".concat(t)] = l.$instance, q._hook(t, c, l, s, h, b), l.$pd || (l.$pd = {}), l.$pd[t] = z(z({}, (y = l.$pd) === null || y === void 0 ? void 0 : y[t]), {}, {
        name: t,
        instance: l._$instances[t]
      });
    }, o = function(c) {
      var l, s, h, b = c._$instances[t], d = b == null ? void 0 : b.watch, a = function(S) {
        var p, m = S.newValue, v = S.oldValue;
        return d == null || (p = d.config) === null || p === void 0 ? void 0 : p.call(b, m, v);
      }, g = function(S) {
        var p, m = S.newValue, v = S.oldValue;
        return d == null || (p = d["config.ripple"]) === null || p === void 0 ? void 0 : p.call(b, m, v);
      };
      b.$watchersCallback = {
        config: a,
        "config.ripple": g
      }, d == null || (l = d.config) === null || l === void 0 || l.call(b, b == null ? void 0 : b.$primevueConfig), Lt.on("config:change", a), d == null || (s = d["config.ripple"]) === null || s === void 0 || s.call(b, b == null || (h = b.$primevueConfig) === null || h === void 0 ? void 0 : h.ripple), Lt.on("config:ripple:change", g);
    }, u = function(c) {
      var l = c._$instances[t].$watchersCallback;
      l && (Lt.off("config:change", l.config), Lt.off("config:ripple:change", l["config.ripple"]));
    };
    return {
      created: function(c, l, s, h) {
        c.$pd || (c.$pd = {}), c.$pd[t] = {
          name: t,
          attrSelector: jo("pd")
        }, r("created", c, l, s, h);
      },
      beforeMount: function(c, l, s, h) {
        var b;
        q._loadStyles((b = c.$pd[t]) === null || b === void 0 ? void 0 : b.instance, l, s), r("beforeMount", c, l, s, h), o(c);
      },
      mounted: function(c, l, s, h) {
        var b;
        q._loadStyles((b = c.$pd[t]) === null || b === void 0 ? void 0 : b.instance, l, s), r("mounted", c, l, s, h);
      },
      beforeUpdate: function(c, l, s, h) {
        r("beforeUpdate", c, l, s, h);
      },
      updated: function(c, l, s, h) {
        var b;
        q._loadStyles((b = c.$pd[t]) === null || b === void 0 ? void 0 : b.instance, l, s), r("updated", c, l, s, h);
      },
      beforeUnmount: function(c, l, s, h) {
        var b;
        u(c), q._removeThemeListeners((b = c.$pd[t]) === null || b === void 0 ? void 0 : b.instance), r("beforeUnmount", c, l, s, h);
      },
      unmounted: function(c, l, s, h) {
        var b;
        (b = c.$pd[t]) === null || b === void 0 || (b = b.instance) === null || b === void 0 || (b = b.scopedStyleEl) === null || b === void 0 || (b = b.value) === null || b === void 0 || b.remove(), r("unmounted", c, l, s, h);
      }
    };
  },
  extend: function() {
    var t = q._getMeta.apply(q, arguments), n = Bn(t, 2), r = n[0], o = n[1];
    return z({
      extend: function() {
        var i = q._getMeta.apply(q, arguments), c = Bn(i, 2), l = c[0], s = c[1];
        return q.extend(l, z(z(z({}, o), o == null ? void 0 : o.methods), s));
      }
    }, q._extend(r, o));
  }
}, Fi = ({ dt: e }) => `
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
`, Vi = {
  root: "p-ink"
}, qi = ie.extend({
  name: "ripple-directive",
  style: Fi,
  classes: Vi
}), Bi = q.extend({
  style: qi
});
function Ot(e) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function Wi(e) {
  return Ki(e) || Gi(e) || zi(e) || Xi();
}
function Xi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(e, t) {
  if (e) {
    if (typeof e == "string") return cn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cn(e, t) : void 0;
  }
}
function Gi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ki(e) {
  if (Array.isArray(e)) return cn(e);
}
function cn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zn(e, t, n) {
  return (t = Yi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yi(e) {
  var t = Ji(e, "string");
  return Ot(t) == "symbol" ? t : t + "";
}
function Ji(e, t) {
  if (Ot(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ot(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qi = Bi.extend("ripple", {
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
      n || (n = Eo("span", zn(zn({
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
      var n = this, r = t.currentTarget, o = this.getInk(r);
      if (!(!o || getComputedStyle(o, null).display === "none")) {
        if (!this.isUnstyled() && Jt(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"), !Cn(o) && !On(o)) {
          var u = Math.max(Co(r), Mo(r));
          o.style.height = u + "px", o.style.width = u + "px";
        }
        var i = xo(r), c = t.pageX - i.left + document.body.scrollTop - On(o) / 2, l = t.pageY - i.top + document.body.scrollLeft - Cn(o) / 2;
        o.style.top = l + "px", o.style.left = c + "px", !this.isUnstyled() && Io(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          o && (!n.isUnstyled() && Jt(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Jt(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Wi(t.children).find(function(n) {
        return Do(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Zi = ({ dt: e }) => `
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
function Pt(e) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(e);
}
function _e(e, t, n) {
  return (t = es(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function es(e) {
  var t = ts(e, "string");
  return Pt(t) == "symbol" ? t : t + "";
}
function ts(e, t) {
  if (Pt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ns = {
  root: function(t) {
    var n = t.instance, r = t.props;
    return ["p-button p-component", _e(_e(_e(_e(_e(_e(_e(_e(_e({
      "p-button-icon-only": n.hasIcon && !r.label && !r.badge,
      "p-button-vertical": (r.iconPos === "top" || r.iconPos === "bottom") && r.label,
      "p-button-loading": r.loading,
      "p-button-link": r.link || r.variant === "link"
    }, "p-button-".concat(r.severity), r.severity), "p-button-raised", r.raised), "p-button-rounded", r.rounded), "p-button-text", r.text || r.variant === "text"), "p-button-outlined", r.outlined || r.variant === "outlined"), "p-button-sm", r.size === "small"), "p-button-lg", r.size === "large"), "p-button-plain", r.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", _e({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, rs = ie.extend({
  name: "button",
  style: Zi,
  classes: ns
}), os = {
  name: "BaseButton",
  extends: mn,
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
  style: rs,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Et(e) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Et(e);
}
function de(e, t, n) {
  return (t = is(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function is(e) {
  var t = ss(e, "string");
  return Et(t) == "symbol" ? t : t + "";
}
function ss(e, t) {
  if (Et(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Et(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var to = {
  name: "Button",
  extends: os,
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
      return fe(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return Je(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return bt(de(de(de(de(de(de(de(de(de(de({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return bt(de(de({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return bt(de(de({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Zr,
    Badge: eo
  },
  directives: {
    ripple: Qi
  }
}, as = ["data-p"], us = ["data-p"];
function ls(e, t, n, r, o, u) {
  var i = _n("SpinnerIcon"), c = _n("Badge"), l = go("ripple");
  return e.asChild ? ht(e.$slots, "default", {
    key: 1,
    class: Rn(e.cx("root")),
    a11yAttrs: u.a11yAttrs
  }) : vo((He(), qt(po(e.as), fe({
    key: 0,
    class: e.cx("root"),
    "data-p": u.dataP
  }, u.attrs), {
    default: mo(function() {
      return [ht(e.$slots, "default", {}, function() {
        return [e.loading ? ht(e.$slots, "loadingicon", fe({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (He(), Bt("span", fe({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (He(), qt(i, fe({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : ht(e.$slots, "icon", fe({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (He(), Bt("span", fe({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": u.dataIconP
          }, e.ptm("icon")), null, 16, as)) : Tn("", !0)];
        }), Vr("span", fe({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": u.dataLabelP
        }), qr(e.label || " "), 17, us), e.badge ? (He(), qt(c, {
          key: 2,
          value: e.badge,
          class: Rn(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : Tn("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[l]]);
}
to.render = ls;
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let pt;
const zt = (e) => pt = e, cs = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Ye(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var kt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(kt || (kt = {}));
const mt = typeof window < "u";
function no(e, t) {
  for (const n in t) {
    const r = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Ye(o) && Ye(r) && !wt(r) && !hn(r) ? e[n] = no(o, r) : e[n] = r;
  }
  return e;
}
const ro = () => {
};
function Gn(e, t, n, r = ro) {
  e.push(t);
  const o = () => {
    const u = e.indexOf(t);
    u > -1 && (e.splice(u, 1), r());
  };
  return !n && _o() && To(o), o;
}
function Qe(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ds = (e) => e(), Kn = Symbol(), en = Symbol();
function dn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Ye(o) && Ye(r) && e.hasOwnProperty(n) && !wt(r) && !hn(r) ? e[n] = dn(o, r) : e[n] = r;
  }
  return e;
}
const fs = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function hs(e) {
  return !Ye(e) || !e.hasOwnProperty(fs);
}
const { assign: me } = Object;
function Yn(e) {
  return !!(wt(e) && e.effect);
}
function Jn(e, t, n, r) {
  const { state: o, actions: u, getters: i } = t, c = n.state.value[e];
  let l;
  function s() {
    !c && (process.env.NODE_ENV === "production" || !r) && (n.state.value[e] = o ? o() : {});
    const h = process.env.NODE_ENV !== "production" && r ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      $n(Ke(o ? o() : {}).value)
    ) : $n(n.state.value[e]);
    return me(h, u, Object.keys(i || {}).reduce((b, d) => (process.env.NODE_ENV !== "production" && d in h && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), b[d] = gt(gn(() => {
      zt(n);
      const a = n._s.get(e);
      return i[d].call(a, a);
    })), b), {}));
  }
  return l = fn(e, s, t, n, r, !0), l;
}
function fn(e, t, n = {}, r, o, u) {
  let i;
  const c = me({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  process.env.NODE_ENV !== "production" && (l.onTrigger = ($) => {
    s ? a = $ : s == !1 && !_._hotUpdating && (Array.isArray(a) ? a.push($) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let s, h, b = [], d = [], a;
  const g = r.state.value[e];
  !u && !g && (process.env.NODE_ENV === "production" || !o) && (r.state.value[e] = {});
  const y = Ke({});
  let S;
  function p($) {
    let R;
    s = h = !1, process.env.NODE_ENV !== "production" && (a = []), typeof $ == "function" ? ($(r.state.value[e]), R = {
      type: kt.patchFunction,
      storeId: e,
      events: a
    }) : (dn(r.state.value[e], $), R = {
      type: kt.patchObject,
      payload: $,
      storeId: e,
      events: a
    });
    const E = S = Symbol();
    an().then(() => {
      S === E && (s = !0);
    }), h = !0, Qe(b, R, r.state.value[e]);
  }
  const m = u ? function() {
    const { state: R } = n, E = R ? R() : {};
    this.$patch((x) => {
      me(x, E);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : ro
  );
  function v() {
    i.stop(), b = [], d = [], r._s.delete(e);
  }
  const f = ($, R = "") => {
    if (Kn in $)
      return $[en] = R, $;
    const E = function() {
      zt(r);
      const x = Array.from(arguments), K = [], te = [];
      function se(D) {
        K.push(D);
      }
      function re(D) {
        te.push(D);
      }
      Qe(d, {
        args: x,
        name: E[en],
        store: _,
        after: se,
        onError: re
      });
      let N;
      try {
        N = $.apply(this && this.$id === e ? this : _, x);
      } catch (D) {
        throw Qe(te, D), D;
      }
      return N instanceof Promise ? N.then((D) => (Qe(K, D), D)).catch((D) => (Qe(te, D), Promise.reject(D))) : (Qe(K, N), N);
    };
    return E[Kn] = !0, E[en] = R, E;
  }, k = /* @__PURE__ */ gt({
    actions: {},
    getters: {},
    state: [],
    hotState: y
  }), w = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Gn.bind(null, d),
    $patch: p,
    $reset: m,
    $subscribe($, R = {}) {
      const E = Gn(b, $, R.detached, () => x()), x = i.run(() => Fr(() => r.state.value[e], (K) => {
        (R.flush === "sync" ? h : s) && $({
          storeId: e,
          type: kt.direct,
          events: a
        }, K);
      }, me({}, l, R)));
      return E;
    },
    $dispose: v
  }, _ = So(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && mt ? me(
    {
      _hmrPayload: k,
      _customProperties: gt(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    w
    // must be added later
    // setupStore
  ) : w);
  r._s.set(e, _);
  const P = (r._a && r._a.runWithContext || ds)(() => r._e.run(() => (i = ko()).run(() => t({ action: f }))));
  for (const $ in P) {
    const R = P[$];
    if (wt(R) && !Yn(R) || hn(R))
      process.env.NODE_ENV !== "production" && o ? y.value[$] = Kt(P, $) : u || (g && hs(R) && (wt(R) ? R.value = g[$] : dn(R, g[$])), r.state.value[e][$] = R), process.env.NODE_ENV !== "production" && k.state.push($);
    else if (typeof R == "function") {
      const E = process.env.NODE_ENV !== "production" && o ? R : f(R, $);
      P[$] = E, process.env.NODE_ENV !== "production" && (k.actions[$] = R), c.actions[$] = R;
    } else process.env.NODE_ENV !== "production" && Yn(R) && (k.getters[$] = u ? (
      // @ts-expect-error
      n.getters[$]
    ) : R, mt && (P._getters || // @ts-expect-error: same
    (P._getters = gt([]))).push($));
  }
  if (me(_, P), me(wo(_), P), Object.defineProperty(_, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? y.value : r.state.value[e],
    set: ($) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      p((R) => {
        me(R, $);
      });
    }
  }), process.env.NODE_ENV !== "production" && (_._hotUpdate = gt(($) => {
    _._hotUpdating = !0, $._hmrPayload.state.forEach((R) => {
      if (R in _.$state) {
        const E = $.$state[R], x = _.$state[R];
        typeof E == "object" && Ye(E) && Ye(x) ? no(E, x) : $.$state[R] = x;
      }
      _[R] = Kt($.$state, R);
    }), Object.keys(_.$state).forEach((R) => {
      R in $.$state || delete _[R];
    }), s = !1, h = !1, r.state.value[e] = Kt($._hmrPayload, "hotState"), h = !0, an().then(() => {
      s = !0;
    });
    for (const R in $._hmrPayload.actions) {
      const E = $[R];
      _[R] = //
      f(E, R);
    }
    for (const R in $._hmrPayload.getters) {
      const E = $._hmrPayload.getters[R], x = u ? (
        // special handling of options api
        gn(() => (zt(r), E.call(_, _)))
      ) : E;
      _[R] = //
      x;
    }
    Object.keys(_._hmrPayload.getters).forEach((R) => {
      R in $._hmrPayload.getters || delete _[R];
    }), Object.keys(_._hmrPayload.actions).forEach((R) => {
      R in $._hmrPayload.actions || delete _[R];
    }), _._hmrPayload = $._hmrPayload, _._getters = $._getters, _._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && mt) {
    const $ = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(_, R, me({ value: _[R] }, $));
    });
  }
  return r._p.forEach(($) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && mt) {
      const R = i.run(() => $({
        store: _,
        app: r._a,
        pinia: r,
        options: c
      }));
      Object.keys(R || {}).forEach((E) => _._customProperties.add(E)), me(_, R);
    } else
      me(_, i.run(() => $({
        store: _,
        app: r._a,
        pinia: r,
        options: c
      })));
  }), process.env.NODE_ENV !== "production" && _.$state && typeof _.$state == "object" && typeof _.$state.constructor == "function" && !_.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${_.$id}".`), g && u && n.hydrate && n.hydrate(_.$state, g), s = !0, h = !0, _;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gs(e, t, n) {
  let r;
  const o = typeof t == "function";
  r = o ? n : t;
  function u(i, c) {
    const l = bo();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && pt && pt._testing ? null : i) || (l ? yo(cs, null) : null), i && zt(i), process.env.NODE_ENV !== "production" && !pt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = pt, i._s.has(e) || (o ? fn(e, t, r, i) : Jn(e, r, i), process.env.NODE_ENV !== "production" && (u._pinia = i));
    const s = i._s.get(e);
    if (process.env.NODE_ENV !== "production" && c) {
      const h = "__hot:" + e, b = o ? fn(h, t, r, i, !0) : Jn(h, me({}, r), i, !0);
      c._hotUpdate(b), delete i.state.value[h], i._s.delete(h);
    }
    if (process.env.NODE_ENV !== "production" && mt) {
      const h = jr();
      if (h && h.proxy && // avoid adding stores that are just built for hot module replacement
      !c) {
        const b = h.proxy, d = "_pStores" in b ? b._pStores : b._pStores = {};
        d[e] = s;
      }
    }
    return s;
  }
  return u.$id = e, u;
}
var vs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ps(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tn = {}, Ve = {}, Q = {}, nn = {}, rn = {}, Ze = {}, Ie = {}, Qn;
function ms() {
  if (Qn) return Ie;
  Qn = 1;
  var e = Ie && Ie.__awaiter || function(u, i, c, l) {
    function s(h) {
      return h instanceof c ? h : new c(function(b) {
        b(h);
      });
    }
    return new (c || (c = Promise))(function(h, b) {
      function d(y) {
        try {
          g(l.next(y));
        } catch (S) {
          b(S);
        }
      }
      function a(y) {
        try {
          g(l.throw(y));
        } catch (S) {
          b(S);
        }
      }
      function g(y) {
        y.done ? h(y.value) : s(y.value).then(d, a);
      }
      g((l = l.apply(u, i || [])).next());
    });
  }, t = Ie && Ie.__generator || function(u, i) {
    var c = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, l, s, h, b;
    return b = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function d(g) {
      return function(y) {
        return a([g, y]);
      };
    }
    function a(g) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (l = 1, s && (h = g[0] & 2 ? s.return : g[0] ? s.throw || ((h = s.return) && h.call(s), 0) : s.next) && !(h = h.call(s, g[1])).done)
            return h;
          switch (s = 0, h && (g = [g[0] & 2, h.value]), g[0]) {
            case 0:
            case 1:
              h = g;
              break;
            case 4:
              return c.label++, { value: g[1], done: !1 };
            case 5:
              c.label++, s = g[1], g = [0];
              continue;
            case 7:
              g = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (h = c.trys, !(h = h.length > 0 && h[h.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                c = 0;
                continue;
              }
              if (g[0] === 3 && (!h || g[1] > h[0] && g[1] < h[3])) {
                c.label = g[1];
                break;
              }
              if (g[0] === 6 && c.label < h[1]) {
                c.label = h[1], h = g;
                break;
              }
              if (h && c.label < h[2]) {
                c.label = h[2], c.ops.push(g);
                break;
              }
              h[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          g = i.call(u, c);
        } catch (y) {
          g = [6, y], s = 0;
        } finally {
          l = h = 0;
        }
      if (g[0] & 5) throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.defaultWindowHandlerImplementation = void 0;
  function n() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var r = {
    key: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().localStorage.key(u)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(u) {
          return [2, n().localStorage.clear()];
        });
      });
    },
    getItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().localStorage.getItem(u)];
        });
      });
    },
    removeItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().localStorage.removeItem(u)];
        });
      });
    },
    setItem: function(u, i) {
      return e(this, void 0, void 0, function() {
        return t(this, function(c) {
          return [2, n().localStorage.setItem(u, i)];
        });
      });
    },
    keySync: function(u) {
      return n().localStorage.key(u);
    },
    clearSync: function() {
      return n().localStorage.clear();
    },
    getItemSync: function(u) {
      return n().localStorage.getItem(u);
    },
    removeItemSync: function(u) {
      return n().localStorage.removeItem(u);
    },
    setItemSync: function(u, i) {
      return n().localStorage.setItem(u, i);
    }
  }, o = {
    key: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().sessionStorage.key(u)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(u) {
          return [2, n().sessionStorage.clear()];
        });
      });
    },
    getItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().sessionStorage.getItem(u)];
        });
      });
    },
    removeItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().sessionStorage.removeItem(u)];
        });
      });
    },
    setItem: function(u, i) {
      return e(this, void 0, void 0, function() {
        return t(this, function(c) {
          return [2, n().sessionStorage.setItem(u, i)];
        });
      });
    },
    keySync: function(u) {
      return n().sessionStorage.key(u);
    },
    clearSync: function() {
      return n().sessionStorage.clear();
    },
    getItemSync: function(u) {
      return n().sessionStorage.getItem(u);
    },
    removeItemSync: function(u) {
      return n().sessionStorage.removeItem(u);
    },
    setItemSync: function(u, i) {
      return n().sessionStorage.setItem(u, i);
    }
  };
  return Ie.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(u, i, c) {
        return n().history.replaceState(u, i, c);
      },
      getState: function() {
        return n().history.state;
      }
    },
    location: {
      getHref: function() {
        return n().location.href;
      },
      setHref: function(u) {
        n().location.href = u;
      },
      getSearch: function() {
        return n().location.search;
      },
      getHash: function() {
        return n().location.hash;
      },
      getPathName: function() {
        return n().location.pathname;
      },
      assign: function(u) {
        n().location.assign(u);
      },
      getHostName: function() {
        return n().location.hostname;
      },
      getHost: function() {
        return n().location.host;
      },
      getOrigin: function() {
        return n().location.origin;
      }
    },
    getDocument: function() {
      return n().document;
    },
    getWindowUnsafe: function() {
      return n().window;
    },
    localStorage: r,
    sessionStorage: o
  }, Ie;
}
var Zn;
function Fe() {
  if (Zn) return Ze;
  Zn = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.WindowHandlerReference = void 0;
  var e = ms(), t = (
    /** @class */
    function() {
      function n(r) {
        var o = function(u) {
          return u;
        };
        r !== void 0 && (o = r), this.windowHandler = o(e.defaultWindowHandlerImplementation);
      }
      return n.init = function(r) {
        n.instance === void 0 && (n.instance = new n(r));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return Ze.WindowHandlerReference = t, Ze.default = t, Ze;
}
var er;
function bs() {
  return er || (er = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Fe());
  }(rn)), rn;
}
var tr;
function ys() {
  return tr || (tr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WindowHandlerReference = void 0;
    var t = bs();
    Object.defineProperty(e, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return t.WindowHandlerReference;
      }
    });
  }(nn)), nn;
}
var qe = {}, nr;
function Ss() {
  return nr || (nr = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.SSR_ERROR = qe.DEFAULT_API_BASE_PATH = void 0, qe.DEFAULT_API_BASE_PATH = "/auth", qe.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), qe;
}
var Ht = {}, rr;
function ks() {
  if (rr) return Ht;
  rr = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(r) {
        var o = this;
        this.getAsStringDangerous = function() {
          return o.value;
        }, this.value = t(r);
      }
      return n;
    }()
  );
  Ht.default = e;
  function t(n, r) {
    r === void 0 && (r = !1);
    function o(i) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        i
      );
    }
    n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var u = new URL(n);
      return r ? u.hostname.startsWith("localhost") || o(u.hostname) ? n = "http://" + u.host : n = "https://" + u.host : n = u.protocol + "//" + u.host, n;
    } catch {
    }
    if (n.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (n.indexOf(".") === 0 && (n = n.substr(1)), (n.indexOf(".") !== -1 || n.startsWith("localhost")) && !n.startsWith("http://") && !n.startsWith("https://")) {
      n = "https://" + n;
      try {
        return new URL(n), t(n, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Ht;
}
var Ut = {}, or;
function ws() {
  if (or) return Ut;
  or = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(o) {
        var u = this;
        this.startsWith = function(i) {
          return u.value.startsWith(i.value);
        }, this.appendPath = function(i) {
          return new r(u.value + i.value);
        }, this.getAsStringDangerous = function() {
          return u.value;
        }, this.value = t(o);
      }
      return r;
    }()
  );
  Ut.default = e;
  function t(r) {
    r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var o = new URL(r);
      return r = o.pathname, r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r;
    } catch {
    }
    if ((n(r) || r.startsWith("localhost")) && !r.startsWith("http://") && !r.startsWith("https://"))
      return r = "http://" + r, t(r);
    r.charAt(0) !== "/" && (r = "/" + r);
    try {
      return new URL("http://example.com" + r), t("http://example.com" + r);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function n(r) {
    if (r.indexOf(".") === -1 || r.startsWith("/"))
      return !1;
    try {
      var o = new URL(r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var o = new URL("http://" + r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Ut;
}
var on = {}, lt = {}, oe = {}, et = {}, ir;
function _s() {
  if (ir) return et;
  ir = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.isAnIpAddress = void 0;
  function e(r) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      r
    );
  }
  et.isAnIpAddress = e;
  var t = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(o) {
        var u = this;
        this.getAsStringDangerous = function() {
          return u.value;
        }, this.value = n(o);
      }
      return r;
    }()
  );
  et.default = t;
  function n(r, o) {
    o === void 0 && (o = !1), r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("converting to proper URL");
      var u = new URL(r);
      return o ? u.hostname.startsWith("localhost") || e(u.hostname) ? r = "http://" + u.host : r = "https://" + u.host : r = u.protocol + "//" + u.host, r;
    } catch {
    }
    if (r.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (r.indexOf(".") === 0 && (r = r.substr(1)), (r.indexOf(".") !== -1 || r.startsWith("localhost")) && !r.startsWith("http://") && !r.startsWith("https://")) {
      r = "https://" + r;
      try {
        return new URL(r), n(r, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return et;
}
var jt = {}, sr;
function Ts() {
  if (sr) return jt;
  sr = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(o) {
        var u = this;
        this.startsWith = function(i) {
          return u.value.startsWith(i.value);
        }, this.appendPath = function(i) {
          return new r(u.value + i.value);
        }, this.getAsStringDangerous = function() {
          return u.value;
        }, this.value = t(o);
      }
      return r;
    }()
  );
  jt.default = e;
  function t(r) {
    r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("converting to proper URL");
      var o = new URL(r);
      return r = o.pathname, r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r;
    } catch {
    }
    if ((n(r) || r.startsWith("localhost")) && !r.startsWith("http://") && !r.startsWith("https://"))
      return r = "http://" + r, t(r);
    r.charAt(0) !== "/" && (r = "/" + r);
    try {
      return new URL("http://example.com" + r), t("http://example.com" + r);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function n(r) {
    if (r.indexOf(".") === -1 || r.startsWith("/"))
      return !1;
    try {
      var o = new URL(r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var o = new URL("http://" + r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return jt;
}
var ar;
function bn() {
  if (ar) return oe;
  ar = 1;
  var e = oe && oe.__assign || function() {
    return e = Object.assign || function(d) {
      for (var a, g = 1, y = arguments.length; g < y; g++) {
        a = arguments[g];
        for (var S in a) Object.prototype.hasOwnProperty.call(a, S) && (d[S] = a[S]);
      }
      return d;
    }, e.apply(this, arguments);
  }, t = oe && oe.__awaiter || function(d, a, g, y) {
    function S(p) {
      return p instanceof g ? p : new g(function(m) {
        m(p);
      });
    }
    return new (g || (g = Promise))(function(p, m) {
      function v(w) {
        try {
          k(y.next(w));
        } catch (_) {
          m(_);
        }
      }
      function f(w) {
        try {
          k(y.throw(w));
        } catch (_) {
          m(_);
        }
      }
      function k(w) {
        w.done ? p(w.value) : S(w.value).then(v, f);
      }
      k((y = y.apply(d, a || [])).next());
    });
  }, n = oe && oe.__generator || function(d, a) {
    var g = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, y, S, p, m;
    return m = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function v(k) {
      return function(w) {
        return f([k, w]);
      };
    }
    function f(k) {
      if (y) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (y = 1, S && (p = k[0] & 2 ? S.return : k[0] ? S.throw || ((p = S.return) && p.call(S), 0) : S.next) && !(p = p.call(S, k[1])).done)
            return p;
          switch (S = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return g.label++, { value: k[1], done: !1 };
            case 5:
              g.label++, S = k[1], k = [0];
              continue;
            case 7:
              k = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (p = g.trys, !(p = p.length > 0 && p[p.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                g = 0;
                continue;
              }
              if (k[0] === 3 && (!p || k[1] > p[0] && k[1] < p[3])) {
                g.label = k[1];
                break;
              }
              if (k[0] === 6 && g.label < p[1]) {
                g.label = p[1], p = k;
                break;
              }
              if (p && g.label < p[2]) {
                g.label = p[2], g.ops.push(k);
                break;
              }
              p[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          k = a.call(d, g);
        } catch (w) {
          k = [6, w], S = 0;
        } finally {
          y = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(oe, "__esModule", { value: !0 }), oe.matchesDomainOrSubdomain = oe.getNormalisedUserContext = oe.validateAndNormaliseInputOrThrowError = oe.normaliseSessionScopeOrThrowError = oe.normaliseURLPathOrThrowError = oe.normaliseURLDomainOrThrowError = void 0;
  var r = _s(), o = Ts(), u = Fe();
  function i(d) {
    var a = new r.default(d).getAsStringDangerous();
    return a;
  }
  oe.normaliseURLDomainOrThrowError = i;
  function c(d) {
    return new o.default(d).getAsStringDangerous();
  }
  oe.normaliseURLPathOrThrowError = c;
  function l(d) {
    function a(y) {
      y = y.trim().toLowerCase(), y.startsWith(".") && (y = y.substr(1)), !y.startsWith("http://") && !y.startsWith("https://") && (y = "http://" + y);
      try {
        var S = new URL(y);
        return y = S.hostname, y;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var g = a(d);
    return g === "localhost" || (0, r.isAnIpAddress)(g) ? g : d.startsWith(".") ? "." + g : g;
  }
  oe.normaliseSessionScopeOrThrowError = l;
  function s(d) {
    var a = this, g = i(d.apiDomain), y = c("/auth");
    d.apiBasePath !== void 0 && (y = c(d.apiBasePath));
    var S = u.default.getReferenceOrThrow().windowHandler.location.getHostName(), p = l(
      d !== void 0 && d.sessionTokenFrontendDomain !== void 0 ? d.sessionTokenFrontendDomain : S
    ), m = 401;
    d.sessionExpiredStatusCode !== void 0 && (m = d.sessionExpiredStatusCode);
    var v = 403;
    if (d.invalidClaimStatusCode !== void 0 && (v = d.invalidClaimStatusCode), m === v)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var f = !0;
    d.autoAddCredentials !== void 0 && (f = d.autoAddCredentials);
    var k = !1;
    d.isInIframe !== void 0 && (k = d.isInIframe);
    var w = void 0;
    d.sessionTokenBackendDomain !== void 0 && (w = l(d.sessionTokenBackendDomain));
    var _ = 10;
    if (d.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (d.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      _ = d.maxRetryAttemptsForSessionRefresh;
    }
    var O = function(E) {
      return t(a, void 0, void 0, function() {
        return n(this, function(x) {
          return [2, { url: E.url, requestInit: E.requestInit }];
        });
      });
    };
    d.preAPIHook !== void 0 && (O = d.preAPIHook);
    var P = function() {
      return t(a, void 0, void 0, function() {
        return n(this, function(E) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    d.postAPIHook !== void 0 && (P = d.postAPIHook);
    var $ = function() {
    };
    d.onHandleEvent !== void 0 && ($ = d.onHandleEvent);
    var R = e(
      {
        functions: function(E) {
          return E;
        }
      },
      d.override
    );
    return {
      apiDomain: g,
      apiBasePath: y,
      sessionTokenFrontendDomain: p,
      sessionExpiredStatusCode: m,
      invalidClaimStatusCode: v,
      autoAddCredentials: f,
      isInIframe: k,
      tokenTransferMethod: d.tokenTransferMethod !== void 0 ? d.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: w,
      maxRetryAttemptsForSessionRefresh: _,
      preAPIHook: O,
      postAPIHook: P,
      onHandleEvent: $,
      override: R
    };
  }
  oe.validateAndNormaliseInputOrThrowError = s;
  function h(d) {
    return d === void 0 ? {} : d;
  }
  oe.getNormalisedUserContext = h;
  function b(d, a) {
    for (var g = d.split("."), y = 0; y < g.length; y++) {
      var S = g.slice(y).join(".");
      if (S === a || ".".concat(S) === a)
        return !0;
    }
    return !1;
  }
  return oe.matchesDomainOrSubdomain = b, oe;
}
var Ce = {}, Be = {}, ur;
function yn() {
  return ur || (ur = 1, function(e) {
    var t = Be && Be.__awaiter || function(o, u, i, c) {
      function l(s) {
        return s instanceof i ? s : new i(function(h) {
          h(s);
        });
      }
      return new (i || (i = Promise))(function(s, h) {
        function b(g) {
          try {
            a(c.next(g));
          } catch (y) {
            h(y);
          }
        }
        function d(g) {
          try {
            a(c.throw(g));
          } catch (y) {
            h(y);
          }
        }
        function a(g) {
          g.done ? s(g.value) : l(g.value).then(b, d);
        }
        a((c = c.apply(o, u || [])).next());
      });
    }, n = Be && Be.__generator || function(o, u) {
      var i = {
        label: 0,
        sent: function() {
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      }, c, l, s, h;
      return h = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
        return this;
      }), h;
      function b(a) {
        return function(g) {
          return d([a, g]);
        };
      }
      function d(a) {
        if (c) throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (c = 1, l && (s = a[0] & 2 ? l.return : a[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, a[1])).done)
              return s;
            switch (l = 0, s && (a = [a[0] & 2, s.value]), a[0]) {
              case 0:
              case 1:
                s = a;
                break;
              case 4:
                return i.label++, { value: a[1], done: !1 };
              case 5:
                i.label++, l = a[1], a = [0];
                continue;
              case 7:
                a = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                  i.label = a[1];
                  break;
                }
                if (a[0] === 6 && i.label < s[1]) {
                  i.label = s[1], s = a;
                  break;
                }
                if (s && i.label < s[2]) {
                  i.label = s[2], i.ops.push(a);
                  break;
                }
                s[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            a = u.call(o, i);
          } catch (g) {
            a = [6, g], l = 0;
          } finally {
            c = s = 0;
          }
        if (a[0] & 5) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ProcessState = e.PROCESS_STATE = void 0, function(o) {
      o[o.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", o[o.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(e.PROCESS_STATE || (e.PROCESS_STATE = {}));
    var r = (
      /** @class */
      function() {
        function o() {
          var u = this;
          this.history = [], this.addState = function(i) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && u.history.push(i);
            } catch {
            }
          }, this.getEventByLastEventByName = function(i) {
            for (var c = u.history.length - 1; c >= 0; c--)
              if (u.history[c] == i)
                return u.history[c];
          }, this.reset = function() {
            u.history = [];
          }, this.waitForEvent = function(i, c) {
            return c === void 0 && (c = 7e3), t(u, void 0, void 0, function() {
              var l, s = this;
              return n(this, function(h) {
                return l = Date.now(), [
                  2,
                  new Promise(function(b) {
                    var d = s;
                    function a() {
                      var g = d.getEventByLastEventByName(i);
                      g === void 0 ? Date.now() - l > c ? b(void 0) : setTimeout(a, 1e3) : b(g);
                    }
                    a();
                  })
                ];
              });
            });
          };
        }
        return o.getInstance = function() {
          return o.instance == null && (o.instance = new o()), o.instance;
        }, o;
      }()
    );
    e.ProcessState = r;
  }(Be)), Be;
}
var We = {}, lr;
function Sn() {
  return lr || (lr = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.supported_fdi = We.package_version = void 0, We.package_version = "20.1.5", We.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0"]), We;
}
var tt = {}, Oe = {}, cr;
function Rs() {
  if (cr) return Oe;
  cr = 1;
  var e = Oe && Oe.__awaiter || function(r, o, u, i) {
    function c(l) {
      return l instanceof u ? l : new u(function(s) {
        s(l);
      });
    }
    return new (u || (u = Promise))(function(l, s) {
      function h(a) {
        try {
          d(i.next(a));
        } catch (g) {
          s(g);
        }
      }
      function b(a) {
        try {
          d(i.throw(a));
        } catch (g) {
          s(g);
        }
      }
      function d(a) {
        a.done ? l(a.value) : c(a.value).then(h, b);
      }
      d((i = i.apply(r, o || [])).next());
    });
  }, t = Oe && Oe.__generator || function(r, o) {
    var u = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, i, c, l, s;
    return s = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function h(d) {
      return function(a) {
        return b([d, a]);
      };
    }
    function b(d) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (i = 1, c && (l = d[0] & 2 ? c.return : d[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, d[1])).done)
            return l;
          switch (c = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, c = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = o.call(r, u);
        } catch (a) {
          d = [6, a], c = 0;
        } finally {
          i = l = 0;
        }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.defaultCookieHandlerImplementation = void 0;
  var n = Fe();
  return Oe.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(r) {
          return [
            2,
            n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(r) {
      return e(this, void 0, void 0, function() {
        return t(this, function(o) {
          return n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = r, [
            2
            /*return*/
          ];
        });
      });
    }
  }, Oe;
}
var dr;
function oo() {
  if (dr) return tt;
  dr = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.CookieHandlerReference = void 0;
  var e = Rs(), t = (
    /** @class */
    function() {
      function n(r) {
        var o = function(u) {
          return u;
        };
        r !== void 0 && (o = r), this.cookieHandler = o(e.defaultCookieHandlerImplementation);
      }
      return n.init = function(r) {
        n.instance === void 0 && (n.instance = new n(r));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return tt.CookieHandlerReference = t, tt.default = t, tt;
}
var nt = {}, Pe = {}, Ft = {}, fr;
function $s() {
  if (fr) return Ft;
  fr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  var e = (
    /** @class */
    function() {
      function n() {
        var r = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(o, u) {
          var i = r.locked.get(o);
          i === void 0 ? u === void 0 ? r.locked.set(o, []) : r.locked.set(o, [u]) : u !== void 0 && (i.unshift(u), r.locked.set(o, i));
        }, this.isLocked = function(o) {
          return r.locked.has(o);
        }, this.lock = function(o) {
          return new Promise(function(u, i) {
            r.isLocked(o) ? r.addToLocked(o, u) : (r.addToLocked(o), u());
          });
        }, this.unlock = function(o) {
          var u = r.locked.get(o);
          if (u === void 0 || u.length === 0) {
            r.locked.delete(o);
            return;
          }
          var i = u.pop();
          r.locked.set(o, u), i !== void 0 && setTimeout(i, 0);
        };
      }
      return n.getInstance = function() {
        return n.instance === void 0 && (n.instance = new n()), n.instance;
      }, n;
    }()
  );
  function t() {
    return e.getInstance();
  }
  return Ft.default = t, Ft;
}
var hr;
function Is() {
  if (hr) return Pe;
  hr = 1;
  var e = Pe && Pe.__awaiter || function(h, b, d, a) {
    return new (d || (d = Promise))(function(g, y) {
      function S(v) {
        try {
          m(a.next(v));
        } catch (f) {
          y(f);
        }
      }
      function p(v) {
        try {
          m(a.throw(v));
        } catch (f) {
          y(f);
        }
      }
      function m(v) {
        v.done ? g(v.value) : new d(function(f) {
          f(v.value);
        }).then(S, p);
      }
      m((a = a.apply(h, b || [])).next());
    });
  }, t = Pe && Pe.__generator || function(h, b) {
    var d = { label: 0, sent: function() {
      if (y[0] & 1) throw y[1];
      return y[1];
    }, trys: [], ops: [] }, a, g, y, S;
    return S = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function p(v) {
      return function(f) {
        return m([v, f]);
      };
    }
    function m(v) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; d; ) try {
        if (a = 1, g && (y = v[0] & 2 ? g.return : v[0] ? g.throw || ((y = g.return) && y.call(g), 0) : g.next) && !(y = y.call(g, v[1])).done) return y;
        switch (g = 0, y && (v = [v[0] & 2, y.value]), v[0]) {
          case 0:
          case 1:
            y = v;
            break;
          case 4:
            return d.label++, { value: v[1], done: !1 };
          case 5:
            d.label++, g = v[1], v = [0];
            continue;
          case 7:
            v = d.ops.pop(), d.trys.pop();
            continue;
          default:
            if (y = d.trys, !(y = y.length > 0 && y[y.length - 1]) && (v[0] === 6 || v[0] === 2)) {
              d = 0;
              continue;
            }
            if (v[0] === 3 && (!y || v[1] > y[0] && v[1] < y[3])) {
              d.label = v[1];
              break;
            }
            if (v[0] === 6 && d.label < y[1]) {
              d.label = y[1], y = v;
              break;
            }
            if (y && d.label < y[2]) {
              d.label = y[2], d.ops.push(v);
              break;
            }
            y[2] && d.ops.pop(), d.trys.pop();
            continue;
        }
        v = b.call(h, d);
      } catch (f) {
        v = [6, f], g = 0;
      } finally {
        a = y = 0;
      }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, n = Pe;
  Object.defineProperty(Pe, "__esModule", { value: !0 });
  var r = $s(), o = "browser-tabs-lock-key", u = {
    key: function(h) {
      return e(n, void 0, void 0, function() {
        return t(this, function(b) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(h) {
      return e(n, void 0, void 0, function() {
        return t(this, function(b) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return e(n, void 0, void 0, function() {
        return t(this, function(h) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(h) {
      return e(n, void 0, void 0, function() {
        return t(this, function(b) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(h, b) {
      return e(n, void 0, void 0, function() {
        return t(this, function(d) {
          throw new Error("Unsupported");
        });
      });
    },
    keySync: function(h) {
      return window.localStorage.key(h);
    },
    getItemSync: function(h) {
      return window.localStorage.getItem(h);
    },
    clearSync: function() {
      return window.localStorage.clear();
    },
    removeItemSync: function(h) {
      return window.localStorage.removeItem(h);
    },
    setItemSync: function(h, b) {
      return window.localStorage.setItem(h, b);
    }
  };
  function i(h) {
    return new Promise(function(b) {
      return setTimeout(b, h);
    });
  }
  function c(h) {
    for (var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", d = "", a = 0; a < h; a++) {
      var g = Math.floor(Math.random() * b.length);
      d += b[g];
    }
    return d;
  }
  function l() {
    return Date.now().toString() + c(15);
  }
  var s = (
    /** @class */
    function() {
      function h(b) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = l(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = b, h.waiters === void 0 && (h.waiters = []);
      }
      return h.prototype.acquireLock = function(b, d) {
        return d === void 0 && (d = 5e3), e(this, void 0, void 0, function() {
          var a, g, y, S, p, m, v, f;
          return t(this, function(k) {
            switch (k.label) {
              case 0:
                a = Date.now() + c(4), g = Date.now() + d, y = o + "-" + b, S = this.storageHandler === void 0 ? u : this.storageHandler, k.label = 1;
              case 1:
                return Date.now() < g ? [4, i(30)] : [3, 8];
              case 2:
                return k.sent(), p = S.getItemSync(y), p !== null ? [3, 5] : (m = this.id + "-" + b + "-" + a, [4, i(Math.floor(Math.random() * 25))]);
              case 3:
                return k.sent(), S.setItemSync(y, JSON.stringify({
                  id: this.id,
                  iat: a,
                  timeoutKey: m,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, i(30)];
              case 4:
                return k.sent(), v = S.getItemSync(y), v !== null && (f = JSON.parse(v), f.id === this.id && f.iat === a) ? (this.acquiredIatSet.add(a), this.refreshLockWhileAcquired(y, a), [2, !0]) : [3, 7];
              case 5:
                return h.lockCorrector(this.storageHandler === void 0 ? u : this.storageHandler), [4, this.waitForSomethingToChange(g)];
              case 6:
                k.sent(), k.label = 7;
              case 7:
                return a = Date.now() + c(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, h.prototype.refreshLockWhileAcquired = function(b, d) {
        return e(this, void 0, void 0, function() {
          var a = this;
          return t(this, function(g) {
            return setTimeout(function() {
              return e(a, void 0, void 0, function() {
                var y, S, p;
                return t(this, function(m) {
                  switch (m.label) {
                    case 0:
                      return [4, r.default().lock(d)];
                    case 1:
                      if (m.sent(), !this.acquiredIatSet.has(d))
                        return r.default().unlock(d), [
                          2
                          /*return*/
                        ];
                      if (y = this.storageHandler === void 0 ? u : this.storageHandler, S = y.getItemSync(b), S !== null)
                        p = JSON.parse(S), p.timeRefreshed = Date.now(), y.setItemSync(b, JSON.stringify(p)), r.default().unlock(d);
                      else
                        return r.default().unlock(d), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(b, d), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, 1e3), [
              2
              /*return*/
            ];
          });
        });
      }, h.prototype.waitForSomethingToChange = function(b) {
        return e(this, void 0, void 0, function() {
          return t(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, new Promise(function(a) {
                  var g = !1, y = Date.now(), S = 50, p = !1;
                  function m() {
                    if (p || (window.removeEventListener("storage", m), h.removeFromWaiting(m), clearTimeout(v), p = !0), !g) {
                      g = !0;
                      var f = S - (Date.now() - y);
                      f > 0 ? setTimeout(a, f) : a(null);
                    }
                  }
                  window.addEventListener("storage", m), h.addToWaiting(m);
                  var v = setTimeout(m, Math.max(0, b - Date.now()));
                })];
              case 1:
                return d.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, h.addToWaiting = function(b) {
        this.removeFromWaiting(b), h.waiters !== void 0 && h.waiters.push(b);
      }, h.removeFromWaiting = function(b) {
        h.waiters !== void 0 && (h.waiters = h.waiters.filter(function(d) {
          return d !== b;
        }));
      }, h.notifyWaiters = function() {
        if (h.waiters !== void 0) {
          var b = h.waiters.slice();
          b.forEach(function(d) {
            return d();
          });
        }
      }, h.prototype.releaseLock = function(b) {
        return e(this, void 0, void 0, function() {
          return t(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, this.releaseLock__private__(b)];
              case 1:
                return [2, d.sent()];
            }
          });
        });
      }, h.prototype.releaseLock__private__ = function(b) {
        return e(this, void 0, void 0, function() {
          var d, a, g, y;
          return t(this, function(S) {
            switch (S.label) {
              case 0:
                return d = this.storageHandler === void 0 ? u : this.storageHandler, a = o + "-" + b, g = d.getItemSync(a), g === null ? [
                  2
                  /*return*/
                ] : (y = JSON.parse(g), y.id !== this.id ? [3, 2] : [4, r.default().lock(y.iat)]);
              case 1:
                S.sent(), this.acquiredIatSet.delete(y.iat), d.removeItemSync(a), r.default().unlock(y.iat), h.notifyWaiters(), S.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, h.lockCorrector = function(b) {
        for (var d = Date.now() - 5e3, a = b, g = [], y = 0; ; ) {
          var S = a.keySync(y);
          if (S === null)
            break;
          g.push(S), y++;
        }
        for (var p = !1, m = 0; m < g.length; m++) {
          var v = g[m];
          if (v.includes(o)) {
            var f = a.getItemSync(v);
            if (f !== null) {
              var k = JSON.parse(f);
              (k.timeRefreshed === void 0 && k.timeAcquired < d || k.timeRefreshed !== void 0 && k.timeRefreshed < d) && (a.removeItemSync(v), p = !0);
            }
          }
        }
        p && h.notifyWaiters();
      }, h.waiters = void 0, h;
    }()
  );
  return Pe.default = s, Pe;
}
var gr;
function kn() {
  if (gr) return nt;
  gr = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.LockFactoryReference = void 0;
  var e = Is(), t = function(r) {
    return function() {
      return Promise.resolve(new e.default(r));
    };
  }, n = (
    /** @class */
    function() {
      function r(o) {
        this.lockFactory = o;
      }
      return r.init = function(o, u) {
        this.instance === void 0 && (this.instance = new r(
          o ?? t(u)
        ));
      }, r.getReferenceOrThrow = function() {
        if (r.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return r.instance;
      }, r;
    }()
  );
  return nt.LockFactoryReference = n, nt.default = n, nt;
}
var Ee = {}, vr;
function Dt() {
  if (vr) return Ee;
  vr = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.logDebugMessage = Ee.disableLogging = Ee.enableLogging = void 0;
  var e = Sn(), t = "com.supertokens", n = !1;
  function r() {
    n = !0;
  }
  Ee.enableLogging = r;
  function o() {
    n = !1;
  }
  Ee.disableLogging = o;
  function u(i) {
    n && console.log(
      "".concat(t, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(i, '", supertokens-website-ver: "').concat(e.package_version, '"}')
    );
  }
  return Ee.logDebugMessage = u, Ee;
}
var rt = {}, ct = {}, pr;
function Cs() {
  if (pr) return ct;
  pr = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.DateProvider = void 0;
  var e = Fe(), t = (
    /** @class */
    function() {
      function n() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return n.init = function() {
        if (n.instance === void 0) {
          n.instance = new n();
          var r = e.default.getReferenceOrThrow().windowHandler.localStorage, o = r.getItemSync(n.CLOCK_SKEW_KEY), u = o !== null ? parseInt(o, 10) : 0;
          n.instance.setClientClockSkewInMillis(u);
        }
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return n.instance;
      }, n.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, n.prototype.setThresholdInSeconds = function(r) {
        this.thresholdInSeconds = r;
      }, n.prototype.setClientClockSkewInMillis = function(r) {
        this.clockSkewInMillis = Math.abs(r) >= this.thresholdInSeconds * 1e3 ? r : 0;
        var o = e.default.getReferenceOrThrow().windowHandler.localStorage;
        o.setItemSync(n.CLOCK_SKEW_KEY, String(r));
      }, n.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, n.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, n.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", n;
    }()
  );
  return ct.DateProvider = t, ct;
}
var mr;
function xt() {
  if (mr) return rt;
  mr = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.DateProviderReference = void 0;
  var e = Cs(), t = (
    /** @class */
    function() {
      function n(r) {
        r !== void 0 ? this.dateProvider = r() : (e.DateProvider.init(), this.dateProvider = e.DateProvider.getReferenceOrThrow());
      }
      return n.init = function(r) {
        n.instance === void 0 && (n.instance = new n(r));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return rt.DateProviderReference = t, rt.default = t, rt;
}
var br;
function Mt() {
  return br || (br = 1, function(e) {
    var t = Ce && Ce.__assign || function() {
      return t = Object.assign || function(T) {
        for (var C, I = 1, A = arguments.length; I < A; I++) {
          C = arguments[I];
          for (var M in C) Object.prototype.hasOwnProperty.call(C, M) && (T[M] = C[M]);
        }
        return T;
      }, t.apply(this, arguments);
    }, n = Ce && Ce.__awaiter || function(T, C, I, A) {
      function M(H) {
        return H instanceof I ? H : new I(function(V) {
          V(H);
        });
      }
      return new (I || (I = Promise))(function(H, V) {
        function L(J) {
          try {
            F(A.next(J));
          } catch (ne) {
            V(ne);
          }
        }
        function W(J) {
          try {
            F(A.throw(J));
          } catch (ne) {
            V(ne);
          }
        }
        function F(J) {
          J.done ? H(J.value) : M(J.value).then(L, W);
        }
        F((A = A.apply(T, C || [])).next());
      });
    }, r = Ce && Ce.__generator || function(T, C) {
      var I = {
        label: 0,
        sent: function() {
          if (H[0] & 1) throw H[1];
          return H[1];
        },
        trys: [],
        ops: []
      }, A, M, H, V;
      return V = { next: L(0), throw: L(1), return: L(2) }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
        return this;
      }), V;
      function L(F) {
        return function(J) {
          return W([F, J]);
        };
      }
      function W(F) {
        if (A) throw new TypeError("Generator is already executing.");
        for (; I; )
          try {
            if (A = 1, M && (H = F[0] & 2 ? M.return : F[0] ? M.throw || ((H = M.return) && H.call(M), 0) : M.next) && !(H = H.call(M, F[1])).done)
              return H;
            switch (M = 0, H && (F = [F[0] & 2, H.value]), F[0]) {
              case 0:
              case 1:
                H = F;
                break;
              case 4:
                return I.label++, { value: F[1], done: !1 };
              case 5:
                I.label++, M = F[1], F = [0];
                continue;
              case 7:
                F = I.ops.pop(), I.trys.pop();
                continue;
              default:
                if (H = I.trys, !(H = H.length > 0 && H[H.length - 1]) && (F[0] === 6 || F[0] === 2)) {
                  I = 0;
                  continue;
                }
                if (F[0] === 3 && (!H || F[1] > H[0] && F[1] < H[3])) {
                  I.label = F[1];
                  break;
                }
                if (F[0] === 6 && I.label < H[1]) {
                  I.label = H[1], H = F;
                  break;
                }
                if (H && I.label < H[2]) {
                  I.label = H[2], I.ops.push(F);
                  break;
                }
                H[2] && I.ops.pop(), I.trys.pop();
                continue;
            }
            F = C.call(T, I);
          } catch (J) {
            F = [6, J], M = 0;
          } finally {
            A = H = 0;
          }
        if (F[0] & 5) throw F[1];
        return { value: F[0] ? F[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.updateClockSkewUsingFrontToken = e.fireSessionUpdateEventsIfNecessary = e.setFrontToken = e.getFrontToken = e.setAntiCSRF = e.saveLastAccessTokenUpdate = e.getTokenForHeaderAuth = e.setToken = e.getStorageNameForToken = e.getLocalSessionState = e.onInvalidClaimResponse = e.onTokenUpdate = e.onUnauthorisedResponse = e.FrontToken = e.AntiCsrfToken = void 0;
    var o = yn(), u = Sn(), i = oo(), c = Fe(), l = kn(), s = Dt(), h = xt(), b = (
      /** @class */
      function() {
        function T() {
        }
        return T.getToken = function(C) {
          return n(this, void 0, void 0, function() {
            var I;
            return r(this, function(A) {
              switch (A.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: called"), C === void 0 ? (T.tokenInfo = void 0, (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : T.tokenInfo !== void 0 ? [3, 2] : [4, se()];
                case 1:
                  return I = A.sent(), I === null ? ((0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (T.tokenInfo = {
                    antiCsrf: I,
                    associatedAccessTokenUpdate: C
                  }, [3, 4]);
                case 2:
                  return T.tokenInfo.associatedAccessTokenUpdate === C ? [3, 4] : (T.tokenInfo = void 0, [4, T.getToken(C)]);
                case 3:
                  return [2, A.sent()];
                case 4:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning: " + T.tokenInfo.antiCsrf), [2, T.tokenInfo.antiCsrf];
              }
            });
          });
        }, T.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return r(this, function(C) {
              switch (C.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.removeToken: called"), T.tokenInfo = void 0, [4, re(void 0)];
                case 1:
                  return C.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, T.setItem = function(C, I) {
          return n(this, void 0, void 0, function() {
            return r(this, function(A) {
              switch (A.label) {
                case 0:
                  return C === void 0 ? (T.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, s.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, re(I)]);
                case 1:
                  return A.sent(), T.tokenInfo = {
                    antiCsrf: I,
                    associatedAccessTokenUpdate: C
                  }, [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, T;
      }()
    );
    e.AntiCsrfToken = b;
    var d = (
      /** @class */
      function() {
        function T() {
        }
        return T.getTokenInfo = function() {
          return n(this, void 0, void 0, function() {
            var C, I;
            return r(this, function(A) {
              switch (A.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, j()];
                case 1:
                  return C = A.sent(), C !== null ? [3, 5] : [4, w(!1)];
                case 2:
                  return A.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(M) {
                      T.waiters.push(M);
                    })
                  ];
                case 3:
                  return A.sent(), [2, T.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return I = D(C), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + I.ate), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + I.uid), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + I.up), [2, I];
              }
            });
          });
        }, T.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return r(this, function(C) {
              switch (C.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.removeToken: called"), [4, U(void 0)];
                case 1:
                  return C.sent(), [4, O("access", "")];
                case 2:
                  return C.sent(), [4, O("refresh", "")];
                case 3:
                  return C.sent(), [4, b.removeToken()];
                case 4:
                  return C.sent(), T.waiters.forEach(function(I) {
                    return I(void 0);
                  }), T.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, T.setItem = function(C) {
          return n(this, void 0, void 0, function() {
            return r(this, function(I) {
              switch (I.label) {
                case 0:
                  return [4, te()];
                case 1:
                  return I.sent(), C === "remove" ? [2, T.removeToken()] : ((0, s.logDebugMessage)("FrontToken.setItem: called"), [4, U(C)]);
                case 2:
                  return I.sent(), T.waiters.forEach(function(A) {
                    return A(void 0);
                  }), T.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, T.doesTokenExists = function() {
          return n(this, void 0, void 0, function() {
            var C;
            return r(this, function(I) {
              switch (I.label) {
                case 0:
                  return [4, N()];
                case 1:
                  return C = I.sent(), [2, C !== null];
              }
            });
          });
        }, T.waiters = [], T;
      }()
    );
    e.FrontToken = d;
    var a = (
      /** @class */
      function() {
        function T() {
        }
        T.init = function(I, A) {
          (0, s.logDebugMessage)("init: called"), (0, s.logDebugMessage)("init: Input apiBasePath: " + I.apiBasePath), (0, s.logDebugMessage)("init: Input apiDomain: " + I.apiDomain), (0, s.logDebugMessage)("init: Input autoAddCredentials: " + I.autoAddCredentials), (0, s.logDebugMessage)("init: Input sessionTokenBackendDomain: " + I.sessionTokenBackendDomain), (0, s.logDebugMessage)("init: Input isInIframe: " + I.isInIframe), (0, s.logDebugMessage)("init: Input sessionExpiredStatusCode: " + I.sessionExpiredStatusCode), (0, s.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + I.sessionTokenFrontendDomain), (0, s.logDebugMessage)("init: Input tokenTransferMethod: " + I.tokenTransferMethod);
          var M = c.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          T.env = M === void 0 || M.fetch === void 0 ? vs : M, T.refreshTokenUrl = I.apiDomain + I.apiBasePath + "/session/refresh", T.signOutUrl = I.apiDomain + I.apiBasePath + "/signout", T.rid = "session", T.config = I, T.env.__supertokensOriginalFetch === void 0 && ((0, s.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), T.env.__supertokensOriginalFetch = T.env.fetch.bind(T.env), T.env.__supertokensSessionRecipe = A, T.env.fetch = T.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: T.env.__supertokensOriginalFetch,
            userContext: {}
          }), T.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), T.recipeImpl = T.env.__supertokensSessionRecipe, T.initCalled = !0;
        };
        var C;
        return C = T, T.initCalled = !1, T.doRequest = function(I, A, M) {
          return n(void 0, void 0, void 0, function() {
            var H, V, L, W, F, J, ne, ye, ge, ve, Se, Y, pe, at, Le;
            return r(C, function(ae) {
              switch (ae.label) {
                case 0:
                  if (!T.initCalled)
                    throw Error("init function not called");
                  (0, s.logDebugMessage)("doRequest: start of fetch interception"), H = !1;
                  try {
                    V = void 0, typeof M == "string" ? V = M : typeof M == "object" && (typeof M.url == "string" ? V = M.url : typeof M.href == "string" && (V = M.href)), H = !T.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      V,
                      T.config.apiDomain,
                      T.config.sessionTokenBackendDomain
                    );
                  } catch (wn) {
                    if (wn.message === "Please provide a valid domain name")
                      (0, s.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), H = !T.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        c.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        T.config.apiDomain,
                        T.config.sessionTokenBackendDomain
                      );
                    else
                      throw wn;
                  }
                  return (0, s.logDebugMessage)("doRequest: Value of doNotDoInterception: " + H), H ? ((0, s.logDebugMessage)("doRequest: Returning without interception"), [4, I(A)]) : [3, 2];
                case 1:
                  return [2, ae.sent()];
                case 2:
                  return L = new Headers(
                    A !== void 0 && A.headers !== void 0 ? A.headers : M.headers
                  ), L.has("Authorization") ? [4, $("access")] : [3, 5];
                case 3:
                  return W = ae.sent(), [4, $("refresh")];
                case 4:
                  F = ae.sent(), W !== void 0 && F !== void 0 && L.get("Authorization") === "Bearer ".concat(W) && ((0, s.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), L.delete("Authorization")), ae.label = 5;
                case 5:
                  (0, s.logDebugMessage)("doRequest: Interception started"), o.ProcessState.getInstance().addState(
                    o.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), J = 0, ne = void 0, ae.label = 6;
                case 6:
                  return [4, w(!0)];
                case 7:
                  return ye = ae.sent(), ge = new Headers(L), ve = t(t({}, A), { headers: ge }), ye.status !== "EXISTS" ? [3, 9] : [4, b.getToken(ye.lastAccessTokenUpdate)];
                case 8:
                  Se = ae.sent(), Se !== void 0 && ((0, s.logDebugMessage)("doRequest: Adding anti-csrf token to request"), ge.set("anti-csrf", Se)), ae.label = 9;
                case 9:
                  return T.config.autoAddCredentials && ((0, s.logDebugMessage)("doRequest: Adding credentials include"), ve === void 0 ? ve = {
                    credentials: "include"
                  } : ve.credentials === void 0 && (ve = t(t({}, ve), {
                    credentials: "include"
                  }))), ge.has("rid") ? (0, s.logDebugMessage)("doRequest: rid header was already there in request") : ((0, s.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), ge.set("rid", "anti-csrf")), Y = T.config.tokenTransferMethod, (0, s.logDebugMessage)("doRequest: Adding st-auth-mode header: " + Y), ge.set("st-auth-mode", Y), [4, E(ge)];
                case 10:
                  return ae.sent(), (0, s.logDebugMessage)("doRequest: Making user's http call"), [4, I(ve)];
                case 11:
                  return pe = ae.sent(), (0, s.logDebugMessage)("doRequest: User's http call ended"), [4, x(pe)];
                case 12:
                  if (ae.sent(), B(
                    ye.status === "EXISTS",
                    pe.status,
                    pe.headers.get("front-token")
                  ), pe.status !== T.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, s.logDebugMessage)("doRequest: Status code is: " + pe.status), J >= T.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, s.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(J, ", maxRetryAttemptsForSessionRefresh: ").concat(T.config.maxRetryAttemptsForSessionRefresh)
                    ), at = "Received a 401 response from ".concat(
                      M,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      T.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(at), new Error(at);
                  return [4, v(ye)];
                case 13:
                  if (Le = ae.sent(), J++, (0, s.logDebugMessage)("doRequest: sessionRefreshAttempts: " + J), Le.result !== "RETRY") {
                    if ((0, s.logDebugMessage)("doRequest: Not retrying original request"), Le.error !== void 0)
                      if (Le.error instanceof Response)
                        ne = Le.error;
                      else
                        throw Le.error;
                    else
                      ne = pe;
                    return [3, 18];
                  }
                  return (0, s.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return pe.status !== T.config.invalidClaimStatusCode ? [3, 16] : [4, k(pe)];
                case 15:
                  ae.sent(), ae.label = 16;
                case 16:
                  return [2, pe];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, ne];
              }
            });
          });
        }, T.attemptRefreshingSession = function() {
          return n(void 0, void 0, void 0, function() {
            var I, A;
            return r(C, function(M) {
              switch (M.label) {
                case 0:
                  if (!T.initCalled)
                    throw Error("init function not called");
                  return [4, w(!1)];
                case 1:
                  return I = M.sent(), [4, v(I)];
                case 2:
                  if (A = M.sent(), A.result === "API_ERROR")
                    throw A.error;
                  return [2, A.result === "RETRY"];
              }
            });
          });
        }, T;
      }()
    );
    e.default = a;
    var g = "st-last-access-token-update", y = "st-refresh-token", S = "st-access-token", p = "sAntiCsrf", m = "sFrontToken";
    function v(T) {
      return n(this, void 0, void 0, function() {
        var C, I, A, M, H, V, L, W, F, J, ne, ye, ge, ve, Se;
        return r(this, function(Y) {
          switch (Y.label) {
            case 0:
              return [4, l.default.getReferenceOrThrow().lockFactory()];
            case 1:
              C = Y.sent(), Y.label = 2;
            case 2:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, C.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!Y.sent()) return [3, 21];
              (0, s.logDebugMessage)("onUnauthorisedResponse: lock acquired"), Y.label = 4;
            case 4:
              return Y.trys.push([4, 17, 19, 21]), [4, w(!1)];
            case 5:
              return I = Y.sent(), I.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), a.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (A = I.status === "EXISTS", M = T.status === "EXISTS", H = I.status !== T.status, V = "lastAccessTokenUpdate" in I && "lastAccessTokenUpdate" in T && I.lastAccessTokenUpdate !== T.lastAccessTokenUpdate, H && A ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : A && M && V ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (L = new Headers(), T.status !== "EXISTS" ? [3, 7] : [4, b.getToken(T.lastAccessTokenUpdate)]));
            case 6:
              W = Y.sent(), W !== void 0 && ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), L.set("anti-csrf", W)), Y.label = 7;
            case 7:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), L.set("rid", a.rid), L.set("fdi-version", u.supported_fdi.join(",")), F = a.config.tokenTransferMethod, (0, s.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + F), L.set("st-auth-mode", F), [4, E(L, !0)];
            case 8:
              return Y.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                a.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: L
                  },
                  url: a.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return J = Y.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                a.env.__supertokensOriginalFetch(J.url, J.requestInit)
              ];
            case 10:
              return ne = Y.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, x(ne)];
            case 11:
              return Y.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + ne.status), ye = ne.status === a.config.sessionExpiredStatusCode, ne.headers.get("front-token") !== null ? [3, 14] : ye ? [4, d.setItem("remove")] : [3, 13];
            case 12:
              return Y.sent(), [3, 14];
            case 13:
              if (ne.status === 200)
                throw ge = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(ge), new Error(ge);
              Y.label = 14;
            case 14:
              if (B(
                T.status === "EXISTS",
                ne.status,
                ye && ne.headers.get("front-token") === null ? "remove" : ne.headers.get("front-token")
              ), ne.status >= 300)
                throw ne;
              return [
                4,
                a.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: ne.clone(),
                  requestInit: J.requestInit,
                  url: J.url,
                  userContext: {}
                })
              ];
            case 15:
              return Y.sent(), [4, w(!1)];
            case 16:
              return Y.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (a.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, s.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return ve = Y.sent(), [4, w(!1)];
            case 18:
              return Y.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: ve }]) : ((0, s.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: ve }]);
            case 19:
              return [4, C.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return Y.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, w(!1)];
            case 22:
              return Se = Y.sent(), Se.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : Se.status !== T.status || Se.status === "EXISTS" && T.status === "EXISTS" && Se.lastAccessTokenUpdate !== T.lastAccessTokenUpdate ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : [3, 2];
            case 23:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onUnauthorisedResponse = v;
    function f() {
      (0, s.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), a.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    e.onTokenUpdate = f;
    function k(T) {
      return n(this, void 0, void 0, function() {
        var C;
        return r(this, function(I) {
          switch (I.label) {
            case 0:
              return I.trys.push([0, 2, , 3]), [
                4,
                a.recipeImpl.getInvalidClaimsFromResponse({
                  response: T,
                  userContext: {}
                })
              ];
            case 1:
              return C = I.sent(), C && a.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: C,
                userContext: {}
              }), [3, 3];
            case 2:
              return I.sent(), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onInvalidClaimResponse = k;
    function w(T) {
      return n(this, void 0, void 0, function() {
        var C, I, A, M, H, V, L;
        return r(this, function(W) {
          switch (W.label) {
            case 0:
              return (0, s.logDebugMessage)("getLocalSessionState: called"), [4, R(g)];
            case 1:
              return C = W.sent(), [4, d.doesTokenExists()];
            case 2:
              return I = W.sent(), I && C !== void 0 ? ((0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: C }]) : [3, 3];
            case 3:
              return C ? ((0, s.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return A = {
                status: "MAY_EXIST"
              }, T ? ((0, s.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, v(A)]) : [3, 8];
            case 5:
              return M = W.sent(), M.result !== "RETRY" ? ((0, s.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + M.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, R(g)];
            case 6:
              return H = W.sent(), [4, d.doesTokenExists()];
            case 7:
              if (V = W.sent(), !V || H === void 0)
                throw L = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(L), new Error(L);
              return (0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: H }];
            case 8:
              return (0, s.logDebugMessage)("getLocalSessionState: returning: " + A.status), [2, A];
          }
        });
      });
    }
    e.getLocalSessionState = w;
    function _(T) {
      switch (T) {
        case "access":
          return S;
        case "refresh":
          return y;
      }
    }
    e.getStorageNameForToken = _;
    function O(T, C) {
      var I = _(T);
      return C !== "" ? ((0, s.logDebugMessage)("setToken: saved ".concat(T, " token into cookies")), P(I, C, Date.now() + 31536e5)) : ((0, s.logDebugMessage)("setToken: cleared ".concat(T, " token from cookies")), P(I, C, 0));
    }
    e.setToken = O;
    function P(T, C, I) {
      var A = "Fri, 31 Dec 9999 23:59:59 GMT";
      I !== Number.MAX_SAFE_INTEGER && (A = new Date(I).toUTCString());
      var M = a.config.sessionTokenFrontendDomain;
      return M === "localhost" || M === c.default.getReferenceOrThrow().windowHandler.location.getHostName() ? i.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(T, "=").concat(C, ";expires=").concat(A, ";path=/;samesite=").concat(a.config.isInIframe ? "none;secure" : "lax")
      ) : i.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(T, "=").concat(C, ";expires=").concat(A, ";domain=").concat(M, ";path=/;samesite=").concat(a.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function $(T) {
      return n(this, void 0, void 0, function() {
        var C;
        return r(this, function(I) {
          return C = _(T), [2, R(C)];
        });
      });
    }
    e.getTokenForHeaderAuth = $;
    function R(T) {
      return n(this, void 0, void 0, function() {
        var C, I, A, M;
        return r(this, function(H) {
          switch (H.label) {
            case 0:
              return I = "; ", [4, i.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return C = I + H.sent(), A = C.split("; " + T + "="), A.length >= 2 && (M = A.pop(), M !== void 0) ? [2, M.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function E(T, C) {
      return C === void 0 && (C = !1), n(this, void 0, void 0, function() {
        var I, A;
        return r(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, s.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, $("access")];
            case 1:
              return I = M.sent(), [4, $("refresh")];
            case 2:
              return A = M.sent(), (C || I !== void 0) && A !== void 0 ? T.has("Authorization") ? (0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), T.set(
                "Authorization",
                "Bearer ".concat(C ? A : I)
              )) : (0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: token for header based auth not found"
              ), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function x(T) {
      return n(this, void 0, void 0, function() {
        var C, I, A, M, H;
        return r(this, function(V) {
          switch (V.label) {
            case 0:
              return (0, s.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), C = T.headers.get("st-refresh-token"), C === null ? [3, 2] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, O("refresh", C)]);
            case 1:
              V.sent(), V.label = 2;
            case 2:
              return I = T.headers.get("st-access-token"), I === null ? [3, 4] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, O("access", I)]);
            case 3:
              V.sent(), V.label = 4;
            case 4:
              return A = T.headers.get("front-token"), A === null ? [3, 6] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + A), [4, d.setItem(A)]);
            case 5:
              V.sent(), (0, e.updateClockSkewUsingFrontToken)({ frontToken: A, responseHeaders: T.headers }), V.label = 6;
            case 6:
              return M = T.headers.get("anti-csrf"), M === null ? [3, 9] : [4, w(!1)];
            case 7:
              return H = V.sent(), H.status !== "EXISTS" ? [3, 9] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, b.setItem(H.lastAccessTokenUpdate, M)]);
            case 8:
              V.sent(), V.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var K = void 0;
    function te() {
      return n(this, void 0, void 0, function() {
        var T;
        return r(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, s.logDebugMessage)("saveLastAccessTokenUpdate: called"), T = Date.now().toString(), (0, s.logDebugMessage)("saveLastAccessTokenUpdate: setting " + T), [4, P(g, T, Number.MAX_SAFE_INTEGER)];
            case 1:
              return C.sent(), K !== void 0 ? [3, 3] : [4, R(g)];
            case 2:
              K = C.sent() === T, C.label = 3;
            case 3:
              return K === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, P("sIRTFrontend", "", 0)];
            case 4:
              return C.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.saveLastAccessTokenUpdate = te;
    function se() {
      return n(this, void 0, void 0, function() {
        function T() {
          return n(this, void 0, void 0, function() {
            var I, A, M, H, V;
            return r(this, function(L) {
              switch (L.label) {
                case 0:
                  return A = "; ", [
                    4,
                    i.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return I = A + L.sent(), M = I.split("; " + p + "="), M.length >= 2 && (H = M.pop(), H !== void 0) ? (V = H.split(";").shift(), V === void 0 ? [2, null] : [2, V]) : [2, null];
              }
            });
          });
        }
        var C;
        return r(this, function(I) {
          switch (I.label) {
            case 0:
              return (0, s.logDebugMessage)("getAntiCSRFToken: called"), [4, w(!0)];
            case 1:
              return I.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, T()];
            case 2:
              return C = I.sent(), (0, s.logDebugMessage)("getAntiCSRFToken: returning: " + C), [2, C];
          }
        });
      });
    }
    function re(T) {
      return n(this, void 0, void 0, function() {
        return r(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, s.logDebugMessage)("setAntiCSRF: called: " + T), T === void 0 ? [3, 2] : [4, P(p, T, Number.MAX_SAFE_INTEGER)];
            case 1:
              return C.sent(), [3, 4];
            case 2:
              return [4, P(p, "", 0)];
            case 3:
              C.sent(), C.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setAntiCSRF = re;
    function N() {
      return n(this, void 0, void 0, function() {
        var T;
        return r(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontTokenFromCookie: called"), [4, R(m)];
            case 1:
              return T = C.sent(), [2, T === void 0 ? null : T];
          }
        });
      });
    }
    function D(T) {
      return JSON.parse(decodeURIComponent(escape(atob(T))));
    }
    function j() {
      return n(this, void 0, void 0, function() {
        var T;
        return r(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontToken: called"), [4, w(!0)];
            case 1:
              return C.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, N()];
            case 2:
              return T = C.sent(), (0, s.logDebugMessage)("getFrontToken: returning: " + T), [2, T];
          }
        });
      });
    }
    e.getFrontToken = j;
    function U(T) {
      return n(this, void 0, void 0, function() {
        var C, I, A;
        return r(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, s.logDebugMessage)("setFrontToken: called"), [4, N()];
            case 1:
              return C = M.sent(), C !== null && T !== void 0 && (I = D(C).up, A = D(T).up, JSON.stringify(I) !== JSON.stringify(A) && f()), T !== void 0 ? [3, 3] : [4, P(m, "", 0)];
            case 2:
              return M.sent(), [3, 5];
            case 3:
              return [4, P(m, T, Number.MAX_SAFE_INTEGER)];
            case 4:
              M.sent(), M.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setFrontToken = U;
    function B(T, C, I) {
      if (I == null) {
        (0, s.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var A = I !== "remove";
      (0, s.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(T, " frontTokenExistsAfter: ").concat(A, " status: ").concat(C)
      ), T ? A || (C === a.config.sessionExpiredStatusCode ? ((0, s.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), a.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), a.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : A && ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), a.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    e.fireSessionUpdateEventsIfNecessary = B;
    var G = function(T) {
      var C = T.frontToken, I = T.responseHeaders;
      if ((0, s.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + C), C == null || C === "remove") {
        (0, s.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var A = D(C), M = a.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: A.up,
        responseHeaders: I
      });
      h.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(M), (0, s.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    e.updateClockSkewUsingFrontToken = G;
  }(Ce)), Ce;
}
var ot = {}, yr;
function io() {
  if (yr) return ot;
  yr = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.SessionClaimValidatorStore = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.claimValidatorsAddedByOtherRecipes = [], t.addClaimValidatorFromOtherRecipe = function(n) {
        t.claimValidatorsAddedByOtherRecipes.push(n);
      }, t.getClaimValidatorsAddedByOtherRecipes = function() {
        return t.claimValidatorsAddedByOtherRecipes;
      }, t;
    }()
  );
  return ot.SessionClaimValidatorStore = e, ot.default = e, ot;
}
var Sr;
function Os() {
  if (Sr) return lt;
  Sr = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.getGlobalClaimValidators = void 0;
  var e = bn(), t = Mt(), n = io();
  function r(o, u) {
    var i = (0, e.getNormalisedUserContext)(u), c = n.default.getClaimValidatorsAddedByOtherRecipes(), l = t.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: c,
      userContext: i
    }), s = o !== void 0 ? o(l, i) : l;
    return s;
  }
  return lt.getGlobalClaimValidators = r, lt;
}
var kr;
function Ps() {
  return kr || (kr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Os());
  }(on)), on;
}
var wr;
function so() {
  if (wr) return Q;
  wr = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.normaliseUser = Q.normaliseUserResponse = Q.getGlobalClaimValidators = Q.getHashFromLocation = Q.getNormalisedUserContext = Q.checkForSSRErrorAndAppendIfNeeded = Q.getAllQueryParams = Q.getQueryParams = Q.isTest = Q.normaliseInputAppInfoOrThrowError = Q.appendQueryParamsToURL = void 0;
  var e = ys(), t = Ss(), n = ks(), r = ws(), o = Ps();
  function u(p, m) {
    if (m === void 0)
      return p;
    try {
      var v = new URL(p);
      return Object.entries(m).forEach(function(w) {
        var _ = w[0], O = w[1];
        v.searchParams.set(_, O);
      }), v.href;
    } catch {
      var f = p.startsWith("/") ? "http:localhost" : "http://localhost/", k = new URL("".concat(f).concat(p));
      return Object.entries(m).forEach(function(_) {
        var O = _[0], P = _[1];
        k.searchParams.set(O, P);
      }), "".concat(k.pathname).concat(k.search);
    }
  }
  Q.appendQueryParamsToURL = u;
  function i(p, m) {
    return m !== void 0 ? new r.default(m) : new r.default(p);
  }
  function c(p) {
    if (p === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (p.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (p.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var m = new r.default("");
    return p.apiGatewayPath !== void 0 && (m = new r.default(p.apiGatewayPath)), {
      appName: p.appName,
      apiDomain: new n.default(p.apiDomain),
      apiBasePath: m.appendPath(
        i(t.DEFAULT_API_BASE_PATH, p.apiBasePath)
      )
    };
  }
  Q.normaliseInputAppInfoOrThrowError = c;
  function l() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  Q.isTest = l;
  function s(p) {
    var m = new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), v = m.get(p);
    if (v !== null)
      return v;
  }
  Q.getQueryParams = s;
  function h() {
    return new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  Q.getAllQueryParams = h;
  function b(p) {
    return typeof window > "u" && (p = p + t.SSR_ERROR), p;
  }
  Q.checkForSSRErrorAndAppendIfNeeded = b;
  function d(p) {
    return p === void 0 ? {} : p;
  }
  Q.getNormalisedUserContext = d;
  function a() {
    return e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  Q.getHashFromLocation = a;
  function g(p) {
    var m = p.overrideGlobalClaimValidators, v = p.userContext;
    return (0, o.getGlobalClaimValidators)(m, v);
  }
  Q.getGlobalClaimValidators = g;
  function y(p, m) {
    return "createdNewRecipeUser" in m ? m : {
      createdNewRecipeUser: m.createdNewUser,
      user: S(p, m.user)
    };
  }
  Q.normaliseUserResponse = y;
  function S(p, m) {
    if ("loginMethods" in m)
      return m;
    var v = m.email !== void 0 ? [m.email] : [], f = m.phoneNumber !== void 0 ? [m.phoneNumber] : [], k = m.thirdParty !== void 0 ? [m.thirdParty] : [];
    return {
      id: m.id,
      emails: v,
      phoneNumbers: f,
      thirdParty: k,
      isPrimaryUser: !1,
      tenantIds: m.tenantIds,
      timeJoined: m.timeJoined,
      loginMethods: [
        {
          recipeId: p,
          recipeUserId: m.id,
          timeJoined: m.timeJoined,
          tenantIds: m.tenantIds,
          email: m.email,
          phoneNumber: m.email
        }
      ]
    };
  }
  return Q.normaliseUser = S, Q;
}
var ue = {}, Vt = {}, _r;
function Es() {
  if (_r) return Vt;
  _r = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(n) {
        this.config = n;
      }
      return t;
    }()
  );
  return Vt.default = e, Vt;
}
var sn = {}, Xe = {}, Te = {}, le = {}, Ae = {}, Tr;
function As() {
  if (Tr) return Ae;
  Tr = 1;
  var e = Ae && Ae.__awaiter || function(o, u, i, c) {
    function l(s) {
      return s instanceof i ? s : new i(function(h) {
        h(s);
      });
    }
    return new (i || (i = Promise))(function(s, h) {
      function b(g) {
        try {
          a(c.next(g));
        } catch (y) {
          h(y);
        }
      }
      function d(g) {
        try {
          a(c.throw(g));
        } catch (y) {
          h(y);
        }
      }
      function a(g) {
        g.done ? s(g.value) : l(g.value).then(b, d);
      }
      a((c = c.apply(o, u || [])).next());
    });
  }, t = Ae && Ae.__generator || function(o, u) {
    var i = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, c, l, s, h;
    return h = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function b(a) {
      return function(g) {
        return d([a, g]);
      };
    }
    function d(a) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (s = a[0] & 2 ? l.return : a[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, a[1])).done)
            return s;
          switch (l = 0, s && (a = [a[0] & 2, s.value]), a[0]) {
            case 0:
            case 1:
              s = a;
              break;
            case 4:
              return i.label++, { value: a[1], done: !1 };
            case 5:
              i.label++, l = a[1], a = [0];
              continue;
            case 7:
              a = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                i = 0;
                continue;
              }
              if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                i.label = a[1];
                break;
              }
              if (a[0] === 6 && i.label < s[1]) {
                i.label = s[1], s = a;
                break;
              }
              if (s && i.label < s[2]) {
                i.label = s[2], i.ops.push(a);
                break;
              }
              s[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          a = u.call(o, i);
        } catch (g) {
          a = [6, g], l = 0;
        } finally {
          c = s = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.createAxiosErrorFromFetchResp = void 0;
  function n(o, u, i, c, l) {
    return o.config = u, i && (o.code = i), o.request = c, o.response = l, o.isAxiosError = !0, o.toJSON = function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    }, o;
  }
  function r(o) {
    return e(this, void 0, void 0, function() {
      var u, i, c, l, s;
      return t(this, function(h) {
        switch (h.label) {
          case 0:
            if (u = {
              url: o.url,
              headers: o.headers
            }, i = "status" in o, !i) return [3, 12];
            if (l = o.headers.get("content-type"), s = void 0, l !== null) return [3, 5];
            h.label = 1;
          case 1:
            return h.trys.push([1, 3, , 4]), [4, o.text()];
          case 2:
            return s = h.sent(), [3, 4];
          case 3:
            return h.sent(), s = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return l.includes("application/json") ? [4, o.json()] : [3, 7];
          case 6:
            return s = h.sent(), [3, 11];
          case 7:
            return l.includes("text/") ? [4, o.text()] : [3, 9];
          case 8:
            return s = h.sent(), [3, 11];
          case 9:
            return [4, o.blob()];
          case 10:
            s = h.sent(), h.label = 11;
          case 11:
            c = {
              data: s,
              status: o.status,
              statusText: o.statusText,
              headers: o.headers,
              config: u,
              request: void 0
            }, h.label = 12;
          case 12:
            return [
              2,
              n(
                i ? new Error("Request failed with status code " + o.status) : o,
                u,
                o.code,
                void 0,
                c
              )
            ];
        }
      });
    });
  }
  return Ae.createAxiosErrorFromFetchResp = r, Ae;
}
var Rr;
function Ds() {
  if (Rr) return le;
  Rr = 1;
  var e = le && le.__assign || function() {
    return e = Object.assign || function(m) {
      for (var v, f = 1, k = arguments.length; f < k; f++) {
        v = arguments[f];
        for (var w in v) Object.prototype.hasOwnProperty.call(v, w) && (m[w] = v[w]);
      }
      return m;
    }, e.apply(this, arguments);
  }, t = le && le.__awaiter || function(m, v, f, k) {
    function w(_) {
      return _ instanceof f ? _ : new f(function(O) {
        O(_);
      });
    }
    return new (f || (f = Promise))(function(_, O) {
      function P(E) {
        try {
          R(k.next(E));
        } catch (x) {
          O(x);
        }
      }
      function $(E) {
        try {
          R(k.throw(E));
        } catch (x) {
          O(x);
        }
      }
      function R(E) {
        E.done ? _(E.value) : w(E.value).then(P, $);
      }
      R((k = k.apply(m, v || [])).next());
    });
  }, n = le && le.__generator || function(m, v) {
    var f = {
      label: 0,
      sent: function() {
        if (_[0] & 1) throw _[1];
        return _[1];
      },
      trys: [],
      ops: []
    }, k, w, _, O;
    return O = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
      return this;
    }), O;
    function P(R) {
      return function(E) {
        return $([R, E]);
      };
    }
    function $(R) {
      if (k) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (k = 1, w && (_ = R[0] & 2 ? w.return : R[0] ? w.throw || ((_ = w.return) && _.call(w), 0) : w.next) && !(_ = _.call(w, R[1])).done)
            return _;
          switch (w = 0, _ && (R = [R[0] & 2, _.value]), R[0]) {
            case 0:
            case 1:
              _ = R;
              break;
            case 4:
              return f.label++, { value: R[1], done: !1 };
            case 5:
              f.label++, w = R[1], R = [0];
              continue;
            case 7:
              R = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (_ = f.trys, !(_ = _.length > 0 && _[_.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                f = 0;
                continue;
              }
              if (R[0] === 3 && (!_ || R[1] > _[0] && R[1] < _[3])) {
                f.label = R[1];
                break;
              }
              if (R[0] === 6 && f.label < _[1]) {
                f.label = _[1], _ = R;
                break;
              }
              if (_ && f.label < _[2]) {
                f.label = _[2], f.ops.push(R);
                break;
              }
              _[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          R = v.call(m, f);
        } catch (E) {
          R = [6, E], w = 0;
        } finally {
          k = _ = 0;
        }
      if (R[0] & 5) throw R[1];
      return { value: R[0] ? R[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(le, "__esModule", { value: !0 }), le.responseErrorInterceptor = le.responseInterceptor = le.interceptorFunctionRequestFulfilled = void 0;
  var r = As(), o = Mt(), u = yn(), i = Fe(), c = Dt();
  function l(m) {
    m.__supertokensSessionRefreshAttempts === void 0 && (m.__supertokensSessionRefreshAttempts = 0), m.__supertokensSessionRefreshAttempts++;
  }
  function s(m) {
    return m.__supertokensSessionRefreshAttempts === void 0 && (m.__supertokensSessionRefreshAttempts = 0), m.__supertokensSessionRefreshAttempts >= o.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function h(m) {
    var v = m.url === void 0 ? "" : m.url, f = m.baseURL;
    return f !== void 0 && (v.charAt(0) === "/" && f.charAt(f.length - 1) === "/" ? v = f + v.substr(1) : v.charAt(0) !== "/" && f.charAt(f.length - 1) !== "/" ? v = f + "/" + v : v = f + v), v;
  }
  function b(m) {
    return t(this, void 0, void 0, function() {
      var v, f, k, w, _, O;
      return n(this, function(P) {
        switch (P.label) {
          case 0:
            (0, c.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), v = h(m), f = !1;
            try {
              f = typeof v == "string" && !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                v,
                o.default.config.apiDomain,
                o.default.config.sessionTokenBackendDomain
              );
            } catch ($) {
              if ($.message === "Please provide a valid domain name")
                (0, c.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), f = !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  o.default.config.apiDomain,
                  o.default.config.sessionTokenBackendDomain
                );
              else
                throw $;
            }
            return (0, c.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + f), f ? ((0, c.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, m]) : ((0, c.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), u.ProcessState.getInstance().addState(
              u.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, o.getLocalSessionState)(!0)]);
          case 1:
            return k = P.sent(), w = m, k.status !== "EXISTS" ? [3, 3] : [4, o.AntiCsrfToken.getToken(k.lastAccessTokenUpdate)];
          case 2:
            _ = P.sent(), _ !== void 0 && ((0, c.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), w = e(e({}, w), {
              headers: w === void 0 ? {
                "anti-csrf": _
              } : e(e({}, w.headers), { "anti-csrf": _ })
            })), P.label = 3;
          case 3:
            return o.default.config.autoAddCredentials && w.withCredentials === void 0 && ((0, c.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), w = e(e({}, w), { withCredentials: !0 })), (0, c.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), w = e(e({}, w), {
              headers: w === void 0 ? {
                rid: "anti-csrf"
              } : e({ rid: "anti-csrf" }, w.headers)
            }), O = o.default.config.tokenTransferMethod, (0, c.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + O), w.headers["st-auth-mode"] = O, [4, p(w)];
          case 4:
            return w = P.sent(), [4, y(w)];
          case 5:
            return P.sent(), (0, c.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, w];
        }
      });
    });
  }
  le.interceptorFunctionRequestFulfilled = b;
  function d(m) {
    var v = this;
    return function(f) {
      return t(v, void 0, void 0, function() {
        var k, w, _, O;
        return n(this, function(P) {
          switch (P.label) {
            case 0:
              if (k = !1, !o.default.initCalled)
                throw new Error("init function not called");
              (0, c.logDebugMessage)("responseInterceptor: started"), (0, c.logDebugMessage)("responseInterceptor: already intercepted: " + f.headers["x-supertokens-xhr-intercepted"]), w = h(f.config);
              try {
                k = typeof w == "string" && !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  w,
                  o.default.config.apiDomain,
                  o.default.config.sessionTokenBackendDomain
                ) || !!f.headers["x-supertokens-xhr-intercepted"];
              } catch ($) {
                if ($.message === "Please provide a valid domain name")
                  (0, c.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), k = !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    o.default.config.apiDomain,
                    o.default.config.sessionTokenBackendDomain
                  ) || !!f.headers["x-supertokens-xhr-intercepted"];
                else
                  throw $;
              }
              return (0, c.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + k), k ? ((0, c.logDebugMessage)("responseInterceptor: Returning without interception"), [2, f]) : ((0, c.logDebugMessage)("responseInterceptor: Interception started"), u.ProcessState.getInstance().addState(
                u.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, o.getLocalSessionState)(!1)]);
            case 1:
              return _ = P.sent(), [4, S(f)];
            case 2:
              return P.sent(), (0, o.fireSessionUpdateEventsIfNecessary)(_.status === "EXISTS", f.status, f.headers["front-token"]), f.status !== o.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, c.logDebugMessage)("responseInterceptor: Status code is: " + f.status), O = f.config, [
                2,
                g.doRequest(
                  function($) {
                    return m($);
                  },
                  O,
                  w,
                  f,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return f.status !== o.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, o.onInvalidClaimResponse)(f)];
            case 4:
              P.sent(), P.label = 5;
            case 5:
              return [2, f];
          }
        });
      });
    };
  }
  le.responseInterceptor = d;
  function a(m) {
    var v = this;
    return function(f) {
      return t(v, void 0, void 0, function() {
        var k;
        return n(this, function(w) {
          switch (w.label) {
            case 0:
              if ((0, c.logDebugMessage)("responseErrorInterceptor: called"), (0, c.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (f.response && f.response.headers["x-supertokens-xhr-intercepted"])), f.response === void 0 || f.response.headers["x-supertokens-xhr-intercepted"])
                throw f;
              return f.response !== void 0 && f.response.status === o.default.config.sessionExpiredStatusCode ? ((0, c.logDebugMessage)("responseErrorInterceptor: Status code is: " + f.response.status), k = f.config, [
                2,
                g.doRequest(
                  function(_) {
                    return m(_);
                  },
                  k,
                  h(k),
                  void 0,
                  f,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return f.response !== void 0 && f.response.status === o.default.config.invalidClaimStatusCode ? [4, (0, o.onInvalidClaimResponse)(f.response)] : [3, 3];
            case 2:
              w.sent(), w.label = 3;
            case 3:
              throw f;
          }
        });
      });
    };
  }
  le.responseErrorInterceptor = a;
  var g = (
    /** @class */
    function() {
      function m() {
      }
      var v;
      return v = m, m.doRequest = function(f, k, w, _, O, P) {
        return P === void 0 && (P = !1), t(void 0, void 0, void 0, function() {
          var $, R, E, x, K, te, se, re, j, N, D, j, U, B, G;
          return n(v, function(T) {
            switch (T.label) {
              case 0:
                if (!o.default.initCalled)
                  throw Error("init function not called");
                (0, c.logDebugMessage)("doRequest: called"), $ = !1;
                try {
                  $ = typeof w == "string" && !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    w,
                    o.default.config.apiDomain,
                    o.default.config.sessionTokenBackendDomain
                  ) && P;
                } catch (C) {
                  if (C.message === "Please provide a valid domain name")
                    (0, c.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), $ = !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      o.default.config.apiDomain,
                      o.default.config.sessionTokenBackendDomain
                    ) && P;
                  else
                    throw C;
                }
                if ((0, c.logDebugMessage)("doRequest: Value of doNotDoInterception: " + $), !$) return [3, 2];
                if ((0, c.logDebugMessage)("doRequest: Returning without interception"), O !== void 0)
                  throw O;
                return _ !== void 0 ? [2, _] : [4, f(k)];
              case 1:
                return [2, T.sent()];
              case 2:
                return (0, c.logDebugMessage)("doRequest: Interception started"), [4, p(k)];
              case 3:
                k = T.sent(), R = void 0, T.label = 4;
              case 4:
                return [4, (0, o.getLocalSessionState)(!0)];
              case 5:
                return E = T.sent(), x = k, E.status !== "EXISTS" ? [3, 7] : [4, o.AntiCsrfToken.getToken(E.lastAccessTokenUpdate)];
              case 6:
                K = T.sent(), K !== void 0 && ((0, c.logDebugMessage)("doRequest: Adding anti-csrf token to request"), x = e(e({}, x), {
                  headers: x === void 0 ? {
                    "anti-csrf": K
                  } : e(e({}, x.headers), {
                    "anti-csrf": K
                  })
                })), T.label = 7;
              case 7:
                return o.default.config.autoAddCredentials && x.withCredentials === void 0 && ((0, c.logDebugMessage)("doRequest: Adding credentials include"), x = e(e({}, x), { withCredentials: !0 })), (0, c.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), x = e(e({}, x), {
                  headers: x === void 0 ? {
                    rid: "anti-csrf"
                  } : e({ rid: "anti-csrf" }, x.headers)
                }), te = o.default.config.tokenTransferMethod, (0, c.logDebugMessage)("doRequest: Adding st-auth-mode header: " + te), x.headers["st-auth-mode"] = te, [4, y(x)];
              case 8:
                T.sent(), T.label = 9;
              case 9:
                if (T.trys.push([9, 14, , 27]), se = O, re = _, O = void 0, _ = void 0, se !== void 0)
                  throw (0, c.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), se;
                return re !== void 0 ? (0, c.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, c.logDebugMessage)("doRequest: Making user's http call"), re !== void 0 ? [3, 11] : [4, f(x)];
              case 10:
                return N = T.sent(), [3, 12];
              case 11:
                N = re, T.label = 12;
              case 12:
                return j = N, (0, c.logDebugMessage)("doRequest: User's http call ended"), [4, S(j)];
              case 13:
                return T.sent(), (0, o.fireSessionUpdateEventsIfNecessary)(E.status === "EXISTS", j.status, j.headers["front-token"]), [2, j];
              case 14:
                return D = T.sent(), j = D.response, j === void 0 ? [3, 25] : [4, S(j)];
              case 15:
                if (T.sent(), (0, o.fireSessionUpdateEventsIfNecessary)(E.status === "EXISTS", j.status, j.headers["front-token"]), j.status !== o.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, c.logDebugMessage)("doRequest: Status code is: " + j.status), s(k))
                  throw (0, c.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      k.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(o.default.config.maxRetryAttemptsForSessionRefresh)
                  ), U = "Received a 401 response from ".concat(
                    w,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    o.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(U), new Error(U);
                return [4, (0, o.onUnauthorisedResponse)(E)];
              case 16:
                return B = T.sent(), l(k), (0, c.logDebugMessage)("doRequest: sessionRefreshAttempts: " + k.__supertokensSessionRefreshAttempts), B.result === "RETRY" ? [3, 20] : ((0, c.logDebugMessage)("doRequest: Not retrying original request"), B.error === void 0 ? [3, 18] : [4, (0, r.createAxiosErrorFromFetchResp)(B.error)]);
              case 17:
                return G = T.sent(), [3, 19];
              case 18:
                G = D, T.label = 19;
              case 19:
                return R = G, [3, 28];
              case 20:
                return (0, c.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return j.status !== o.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, o.onInvalidClaimResponse)(j)];
              case 22:
                T.sent(), T.label = 23;
              case 23:
                throw D;
              case 24:
                return [3, 26];
              case 25:
                throw D;
              case 26:
                return [3, 27];
              case 27:
                return [3, 4];
              case 28:
                throw R;
            }
          });
        });
      }, m;
    }()
  );
  le.default = g;
  function y(m) {
    return t(this, void 0, void 0, function() {
      var v, f;
      return n(this, function(k) {
        switch (k.label) {
          case 0:
            return m.headers === void 0 && (m.headers = {}), (0, c.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, o.getTokenForHeaderAuth)("access")];
          case 1:
            return v = k.sent(), [4, (0, o.getTokenForHeaderAuth)("refresh")];
          case 2:
            return f = k.sent(), v !== void 0 && f !== void 0 ? m.headers.Authorization !== void 0 || m.headers.authorization !== void 0 ? (0, c.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, c.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), m.headers = e(e({}, m.headers), {
              Authorization: "Bearer ".concat(v)
            }), m.__supertokensAddedAuthHeader = !0) : (0, c.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function S(m) {
    return t(this, void 0, void 0, function() {
      var v, f, k, w, _, O;
      return n(this, function(P) {
        switch (P.label) {
          case 0:
            return (0, c.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), v = m.headers["st-refresh-token"], v === void 0 ? [3, 2] : ((0, c.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, o.setToken)("refresh", v)]);
          case 1:
            P.sent(), P.label = 2;
          case 2:
            return f = m.headers["st-access-token"], f === void 0 ? [3, 4] : ((0, c.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, o.setToken)("access", f)]);
          case 3:
            P.sent(), P.label = 4;
          case 4:
            return k = m.headers["front-token"], k === void 0 ? [3, 6] : ((0, c.logDebugMessage)("doRequest: Setting sFrontToken: " + k), [4, o.FrontToken.setItem(k)]);
          case 5:
            P.sent(), w = new Headers(), Object.entries(m.headers).forEach(function($) {
              var R = $[0], E = $[1];
              Array.isArray(E) ? E.forEach(function(x) {
                return w.append(R, x);
              }) : w.append(R, E);
            }), (0, o.updateClockSkewUsingFrontToken)({ frontToken: k, responseHeaders: w }), P.label = 6;
          case 6:
            return _ = m.headers["anti-csrf"], _ === void 0 ? [3, 9] : [4, (0, o.getLocalSessionState)(!1)];
          case 7:
            return O = P.sent(), O.status !== "EXISTS" ? [3, 9] : ((0, c.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, o.AntiCsrfToken.setItem(O.lastAccessTokenUpdate, _)]);
          case 8:
            P.sent(), P.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function p(m) {
    return t(this, void 0, void 0, function() {
      var v, f, k, w;
      return n(this, function(_) {
        switch (_.label) {
          case 0:
            return [4, (0, o.getTokenForHeaderAuth)("access")];
          case 1:
            return v = _.sent(), [4, (0, o.getTokenForHeaderAuth)("refresh")];
          case 2:
            return f = _.sent(), k = m.headers.Authorization || m.headers.authorization, v !== void 0 && f !== void 0 && (k === "Bearer ".concat(v) || "__supertokensAddedAuthHeader" in m) ? ((0, c.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), w = e(e({}, m), { headers: e({}, m.headers) }), delete w.headers.authorization, delete w.headers.Authorization, [2, w]) : [2, m];
        }
      });
    });
  }
  return le;
}
var ze = {}, $r;
function xs() {
  if ($r) return ze;
  $r = 1;
  var e = ze && ze.__extends || /* @__PURE__ */ function() {
    var n = function(r, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, i) {
        u.__proto__ = i;
      } || function(u, i) {
        for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (u[c] = i[c]);
      }, n(r, o);
    };
    return function(r, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(r, o);
      function u() {
        this.constructor = r;
      }
      r.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype, new u());
    };
  }();
  Object.defineProperty(ze, "__esModule", { value: !0 }), ze.STGeneralError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(o) {
        var u = n.call(this, o) || this;
        return u.isSuperTokensGeneralError = !0, u;
      }
      return r.isThisError = function(o) {
        return o.isSuperTokensGeneralError === !0;
      }, r;
    }(Error)
  );
  return ze.STGeneralError = t, ze;
}
var De = {}, Ir;
function Ms() {
  if (Ir) return De;
  Ir = 1;
  var e = De && De.__awaiter || function(d, a, g, y) {
    function S(p) {
      return p instanceof g ? p : new g(function(m) {
        m(p);
      });
    }
    return new (g || (g = Promise))(function(p, m) {
      function v(w) {
        try {
          k(y.next(w));
        } catch (_) {
          m(_);
        }
      }
      function f(w) {
        try {
          k(y.throw(w));
        } catch (_) {
          m(_);
        }
      }
      function k(w) {
        w.done ? p(w.value) : S(w.value).then(v, f);
      }
      k((y = y.apply(d, a || [])).next());
    });
  }, t = De && De.__generator || function(d, a) {
    var g = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, y, S, p, m;
    return m = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function v(k) {
      return function(w) {
        return f([k, w]);
      };
    }
    function f(k) {
      if (y) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (y = 1, S && (p = k[0] & 2 ? S.return : k[0] ? S.throw || ((p = S.return) && p.call(S), 0) : S.next) && !(p = p.call(S, k[1])).done)
            return p;
          switch (S = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return g.label++, { value: k[1], done: !1 };
            case 5:
              g.label++, S = k[1], k = [0];
              continue;
            case 7:
              k = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (p = g.trys, !(p = p.length > 0 && p[p.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                g = 0;
                continue;
              }
              if (k[0] === 3 && (!p || k[1] > p[0] && k[1] < p[3])) {
                g.label = k[1];
                break;
              }
              if (k[0] === 6 && g.label < p[1]) {
                g.label = p[1], p = k;
                break;
              }
              if (p && g.label < p[2]) {
                g.label = p[2], g.ops.push(k);
                break;
              }
              p[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          k = a.call(d, g);
        } catch (w) {
          k = [6, w], S = 0;
        } finally {
          y = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(De, "__esModule", { value: !0 }), De.addInterceptorsToXMLHttpRequest = void 0;
  var n = Mt(), r = Dt(), o = Fe(), u = yn(), i = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function c() {
    var d = new Promise(function(g) {
      return setTimeout(g, 0);
    }), a = XMLHttpRequest;
    (0, r.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var g = new a(), y = this, S = [], p = [], m = {}, v, f = /* @__PURE__ */ new Map(), k = d;
      function w(N) {
        k = k.finally(function() {
          var D;
          return (D = N()) === null || D === void 0 ? void 0 : D.catch(function(j) {
            var U = new ProgressEvent("error");
            U.error = j, y.onerror !== void 0 && y.onerror !== null && y.onerror(U), E("error", U);
          });
        });
      }
      var _ = "", O = !1, P = void 0, $, R = 0;
      y.onload = null, y.onreadystatechange = null, y.onloadend = null, y.addEventListener = function(N, D, j) {
        var U = f.get(N);
        U === void 0 && (U = /* @__PURE__ */ new Set(), f.set(N, U)), U.add(D);
      }, y.removeEventListener = function(N, D) {
        var j = f.get(N);
        j === void 0 && (j = /* @__PURE__ */ new Set(), f.set(N, j)), j.delete(D);
      };
      function E(N, D) {
        var j = f.get(N);
        (0, r.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(D.type, " to ").concat(j ? j.size : 0, " listeners")
        ), j && Array.from(j).forEach(function(U) {
          return U.apply(y, [D]);
        });
      }
      function x() {
        return e(this, void 0, void 0, function() {
          var N, D, j;
          return t(this, function(U) {
            switch (U.label) {
              case 0:
                if (P === void 0)
                  throw new Error("Should never come here..");
                if ((0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + P.status), R >= n.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, r.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(R, ", maxRetryAttemptsForSessionRefresh: ").concat(n.default.config.maxRetryAttemptsForSessionRefresh)
                  ), m.status = 0, m.statusText = "", m.responseType = "", N = "Received a 401 response from ".concat(
                    _,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    n.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(N), new Error(N);
                return [4, (0, n.onUnauthorisedResponse)(P)];
              case 1:
                if (D = U.sent(), R++, (0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + R), D.result !== "RETRY") {
                  if ((0, r.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!D.error
                  ), D.error !== void 0)
                    throw D.error;
                  return [2, !0];
                }
                return (0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), j = new a(), se(y, j, !0), S.forEach(function(B) {
                  B(j);
                }), re(j, $), [2, !1];
            }
          });
        });
      }
      function K(N) {
        return e(this, void 0, void 0, function() {
          var D, j, U, B, G;
          return t(this, function(T) {
            switch (T.label) {
              case 0:
                if (O)
                  return (0, r.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                T.label = 1;
              case 1:
                return T.trys.push([1, 7, , 11]), (0, r.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), u.ProcessState.getInstance().addState(
                  u.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), D = N.status, j = b(N), [4, h(j)];
              case 2:
                return T.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(P.status === "EXISTS", D, j.get("front-token")), D !== n.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, r.logDebugMessage)("responseInterceptor: Status code is: " + D), [4, x()]);
              case 3:
                return [2, T.sent()];
              case 4:
                return D !== n.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, n.onInvalidClaimResponse)({ data: N.responseText })];
              case 5:
                T.sent(), T.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return U = T.sent(), (0, r.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), U.status === void 0 ? [3, 9] : [4, l(U)];
              case 8:
                if (B = T.sent(), m.status = B.status, m.statusText = B.statusText, m.responseType = B.responseType, v = B.headers, B.responseType === "json")
                  try {
                    m.response = JSON.parse(B.responseText);
                  } catch {
                    m.response = B.responseText;
                  }
                else
                  m.response = B.responseText;
                return m.responseText = B.responseText, [3, 10];
              case 9:
                G = new ProgressEvent("error"), G.error = U, y.onerror !== void 0 && y.onerror !== null && y.onerror(G), E("error", G), T.label = 10;
              case 10:
                return [2, !0];
              case 11:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      y.open = function(N, D) {
        (0, r.logDebugMessage)("XHRInterceptor.open called");
        var j = arguments;
        _ = D;
        try {
          O = typeof _ == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            _,
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          ) || typeof _ != "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            _.toString(),
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          );
        } catch (U) {
          if (U.message === "Please provide a valid domain name")
            (0, r.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), O = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              o.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              n.default.config.apiDomain,
              n.default.config.sessionTokenBackendDomain
            );
          else
            throw U;
        }
        w(function() {
          S.push(function(U) {
            U.open.apply(U, j);
          }), g.open.apply(g, j);
        });
      }, y.send = function(N) {
        $ = N, re(g, $);
      }, y.setRequestHeader = function(N, D) {
        var j = this;
        if ((0, r.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(N)), O) {
          w(function() {
            return g.setRequestHeader(N, D);
          });
          return;
        }
        N !== "anti-csrf" && w(function() {
          return e(j, void 0, void 0, function() {
            var U, B;
            return t(this, function(G) {
              switch (G.label) {
                case 0:
                  return N.toLowerCase() !== "authorization" ? [3, 3] : ((0, r.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, n.getTokenForHeaderAuth)("access")]);
                case 1:
                  return U = G.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (B = G.sent(), U !== void 0 && B !== void 0 && D === "Bearer ".concat(U))
                    return (0, r.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  G.label = 3;
                case 3:
                  return S.push(function(T) {
                    T.setRequestHeader(N, D);
                  }), p.push({ name: N, value: D }), g.setRequestHeader(N, D), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var te = void 0;
      se(y, g, !1);
      function se(N, D, j) {
        var U, B = ["load", "loadend", "readystatechange"];
        (0, r.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var G = function(L) {
          (0, r.logDebugMessage)("XHRInterceptor added listener for event ".concat(L)), D.addEventListener(L, function(W) {
            (0, r.logDebugMessage)("XHRInterceptor got event ".concat(L)), B.includes(L) || E(L, W);
          });
        }, T = 0, C = i; T < C.length; T++) {
          var I = C[T];
          G(I);
        }
        if (D.onload = function(L) {
          U === void 0 && (U = K(D)), U.then(function(W) {
            W && (N.onload && N.onload(L), E("load", L));
          });
        }, D.onreadystatechange = function(L) {
          D.readyState === a.DONE ? (U === void 0 && (U = K(D)), U.then(function(W) {
            W && (N.onreadystatechange && N.onreadystatechange(L), E("readystatechange", L));
          })) : (N.onreadystatechange && N.onreadystatechange(L), E("readystatechange", L));
        }, D.onloadend = function(L) {
          U === void 0 && (U = K(D)), U.then(function(W) {
            W && (N.onloadend && N.onloadend(L), E("loadend", L));
          });
        }, N.getAllResponseHeaders = function() {
          var L;
          return v ? (L = "", v.forEach(function(W, F) {
            return L += "".concat(F, ": ").concat(W, `\r
`);
          })) : L = D.getAllResponseHeaders(), L + `x-supertokens-xhr-intercepted: true\r
`;
        }, N.getResponseHeader = function(L) {
          return L === "x-supertokens-xhr-intercepted" ? "true" : v ? v.get(L) : D.getResponseHeader(L);
        }, te === void 0) {
          te = [];
          for (var A in D)
            A in N || te.push(A);
        }
        for (var M = function(L) {
          typeof D[L] == "function" ? Object.defineProperty(N, L, {
            configurable: !0,
            value: function() {
              var W = arguments;
              return j || S.push(function(F) {
                F[L].apply(F, W);
              }), D[L].apply(D, W);
            }
          }) : Object.defineProperty(N, L, {
            configurable: !0,
            get: function() {
              return m[L] !== void 0 ? m[L] : D[L];
            },
            set: function(W) {
              j || S.push(function(F) {
                F[L] = W;
              }), (0, r.logDebugMessage)("XHRInterceptor.set[".concat(L, "] = ").concat(W)), D[L] = W;
            }
          });
        }, H = 0, V = te; H < V.length; H++) {
          var A = V[H];
          M(A);
        }
      }
      function re(N, D) {
        var j = this;
        if ((0, r.logDebugMessage)("XHRInterceptor.send: called"), (0, r.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + O), O) {
          (0, r.logDebugMessage)("XHRInterceptor.send: Returning without interception"), w(function() {
            return N.send(D);
          });
          return;
        }
        (0, r.logDebugMessage)("XHRInterceptor.send: Interception started"), u.ProcessState.getInstance().addState(
          u.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), w(function() {
          return e(j, void 0, void 0, function() {
            var U, B;
            return t(this, function(G) {
              switch (G.label) {
                case 0:
                  return [4, (0, n.getLocalSessionState)(!0)];
                case 1:
                  return P = G.sent(), P.status !== "EXISTS" ? [3, 3] : [
                    4,
                    n.AntiCsrfToken.getToken(P.lastAccessTokenUpdate)
                  ];
                case 2:
                  U = G.sent(), U !== void 0 && ((0, r.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), N.setRequestHeader("anti-csrf", U)), G.label = 3;
                case 3:
                  return n.default.config.autoAddCredentials && ((0, r.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), y.withCredentials = !0), p.some(function(T) {
                    return T.name === "rid";
                  }) ? (0, r.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, r.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), N.setRequestHeader("rid", "anti-csrf")), B = n.default.config.tokenTransferMethod, p.some(function(T) {
                    return T.name === "st-auth-mode";
                  }) ? (0, r.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, r.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + B
                  ), N.setRequestHeader("st-auth-mode", B)), [4, s(N, p)];
                case 4:
                  return G.sent(), (0, r.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, N.send(D)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = a;
  }
  De.addInterceptorsToXMLHttpRequest = c;
  function l(d) {
    return e(this, void 0, void 0, function() {
      var a, g, y, S, p;
      return t(this, function(m) {
        switch (m.label) {
          case 0:
            if (a = d.headers.get("content-type"), g = "", y = "text", a !== null) return [3, 5];
            m.label = 1;
          case 1:
            return m.trys.push([1, 3, , 4]), [4, d.text()];
          case 2:
            return g = m.sent(), [3, 4];
          case 3:
            return m.sent(), g = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return a.includes("application/json") ? (y = "json", p = (S = JSON).stringify, [4, d.json()]) : [3, 7];
          case 6:
            return g = p.apply(S, [m.sent()]), [3, 9];
          case 7:
            return a.includes("text/") ? [4, d.text()] : [3, 9];
          case 8:
            g = m.sent(), m.label = 9;
          case 9:
            return [
              2,
              {
                status: d.status,
                responseText: g,
                statusText: d.statusText,
                responseType: y,
                headers: d.headers
              }
            ];
        }
      });
    });
  }
  function s(d, a) {
    return e(this, void 0, void 0, function() {
      var g, y;
      return t(this, function(S) {
        switch (S.label) {
          case 0:
            return (0, r.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, n.getTokenForHeaderAuth)("access")];
          case 1:
            return g = S.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
          case 2:
            return y = S.sent(), g !== void 0 && y !== void 0 ? a.some(function(p) {
              var m = p.name;
              return m.toLowerCase() === "authorization";
            }) ? (0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : g !== void 0 && ((0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), d.setRequestHeader("Authorization", "Bearer ".concat(g))) : (0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function h(d) {
    return e(this, void 0, void 0, function() {
      var a, g, y, S, p;
      return t(this, function(m) {
        switch (m.label) {
          case 0:
            return (0, r.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), a = d.get("st-refresh-token"), a === null ? [3, 2] : ((0, r.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, n.setToken)("refresh", a)]);
          case 1:
            m.sent(), m.label = 2;
          case 2:
            return g = d.get("st-access-token"), g === null ? [3, 4] : ((0, r.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, n.setToken)("access", g)]);
          case 3:
            m.sent(), m.label = 4;
          case 4:
            return y = d.get("front-token"), y === null ? [3, 6] : ((0, r.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + y), [4, n.FrontToken.setItem(y)]);
          case 5:
            m.sent(), (0, n.updateClockSkewUsingFrontToken)({ frontToken: y, responseHeaders: d }), m.label = 6;
          case 6:
            return S = d.get("anti-csrf"), S === null ? [3, 9] : [4, (0, n.getLocalSessionState)(!1)];
          case 7:
            return p = m.sent(), p.status !== "EXISTS" ? [3, 9] : ((0, r.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, n.AntiCsrfToken.setItem(p.lastAccessTokenUpdate, S)]);
          case 8:
            m.sent(), m.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function b(d) {
    return new Headers(
      d.getAllResponseHeaders().split(`\r
`).map(function(a) {
        var g = a.indexOf(": ");
        return g === -1 ? ["", ""] : [a.slice(0, g), a.slice(g + 2)];
      }).filter(function(a) {
        return a[0].length !== 0;
      })
    );
  }
  return De;
}
var Cr;
function Ns() {
  if (Cr) return Te;
  Cr = 1;
  var e = Te && Te.__assign || function() {
    return e = Object.assign || function(y) {
      for (var S, p = 1, m = arguments.length; p < m; p++) {
        S = arguments[p];
        for (var v in S) Object.prototype.hasOwnProperty.call(S, v) && (y[v] = S[v]);
      }
      return y;
    }, e.apply(this, arguments);
  }, t = Te && Te.__awaiter || function(y, S, p, m) {
    function v(f) {
      return f instanceof p ? f : new p(function(k) {
        k(f);
      });
    }
    return new (p || (p = Promise))(function(f, k) {
      function w(P) {
        try {
          O(m.next(P));
        } catch ($) {
          k($);
        }
      }
      function _(P) {
        try {
          O(m.throw(P));
        } catch ($) {
          k($);
        }
      }
      function O(P) {
        P.done ? f(P.value) : v(P.value).then(w, _);
      }
      O((m = m.apply(y, S || [])).next());
    });
  }, n = Te && Te.__generator || function(y, S) {
    var p = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, m, v, f, k;
    return k = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function w(O) {
      return function(P) {
        return _([O, P]);
      };
    }
    function _(O) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (m = 1, v && (f = O[0] & 2 ? v.return : O[0] ? v.throw || ((f = v.return) && f.call(v), 0) : v.next) && !(f = f.call(v, O[1])).done)
            return f;
          switch (v = 0, f && (O = [O[0] & 2, f.value]), O[0]) {
            case 0:
            case 1:
              f = O;
              break;
            case 4:
              return p.label++, { value: O[1], done: !1 };
            case 5:
              p.label++, v = O[1], O = [0];
              continue;
            case 7:
              O = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (f = p.trys, !(f = f.length > 0 && f[f.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                p = 0;
                continue;
              }
              if (O[0] === 3 && (!f || O[1] > f[0] && O[1] < f[3])) {
                p.label = O[1];
                break;
              }
              if (O[0] === 6 && p.label < f[1]) {
                p.label = f[1], f = O;
                break;
              }
              if (f && p.label < f[2]) {
                p.label = f[2], p.ops.push(O);
                break;
              }
              f[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          O = S.call(y, p);
        } catch (P) {
          O = [6, P], v = 0;
        } finally {
          m = f = 0;
        }
      if (O[0] & 5) throw O[1];
      return { value: O[0] ? O[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Te, "__esModule", { value: !0 });
  var r = Mt(), o = Ds(), u = Sn(), i = Dt(), c = xs(), l = Ms(), s = bn(), h = xt(), b = kn(), d = 100, a = "CLAIM_REFRESH_LOCK";
  function g(y) {
    return {
      addXMLHttpRequestInterceptor: function(S) {
        (0, i.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, l.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(S) {
        return (0, i.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(p, m) {
          return t(this, void 0, void 0, function() {
            return n(this, function(v) {
              switch (v.label) {
                case 0:
                  return [
                    4,
                    r.default.doRequest(
                      function(f) {
                        return S.originalFetch(
                          typeof p == "object" && "clone" in p ? p.clone() : p,
                          e({}, f)
                        );
                      },
                      m,
                      p
                    )
                  ];
                case 1:
                  return [2, v.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(S) {
        if ((0, i.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, i.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var p = S.axiosInstance.interceptors.request, m = 0; m < p.handlers.length; m++)
          if (p.handlers[m].fulfilled === o.interceptorFunctionRequestFulfilled) {
            (0, i.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        S.axiosInstance.interceptors.request.use(o.interceptorFunctionRequestFulfilled, function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              throw v;
            });
          });
        }), S.axiosInstance.interceptors.response.use(
          (0, o.responseInterceptor)(S.axiosInstance),
          (0, o.responseErrorInterceptor)(S.axiosInstance)
        );
      },
      getUserId: function(S) {
        return t(this, void 0, void 0, function() {
          var p;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return (0, i.logDebugMessage)("getUserId: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                if (p = m.sent(), p === void 0)
                  throw new Error("No session exists");
                return (0, i.logDebugMessage)("getUserId: returning: " + p.uid), [2, p.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return (0, i.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                if (p = v.sent(), p === void 0)
                  throw new Error("No session exists");
                return p.ate < h.default.getReferenceOrThrow().dateProvider.now() ? ((0, i.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, r.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return m = v.sent(), m ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: S.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, v.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, i.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(p.up)), [2, p.up];
            }
          });
        });
      },
      doesSessionExist: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m, v;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return (0, i.logDebugMessage)("doesSessionExist: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                return p = f.sent(), p === void 0 ? ((0, i.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : p.ate < h.default.getReferenceOrThrow().dateProvider.now() ? ((0, i.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, r.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return m = f.sent(), [4, (0, r.onUnauthorisedResponse)(m)];
              case 3:
                return v = f.sent(), [2, v.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m, v, f;
          return n(this, function(k) {
            switch (k.label) {
              case 0:
                return (0, i.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(S)];
              case 1:
                return k.sent() ? ((0, i.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  y.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": u.supported_fdi.join(","),
                        rid: r.default.rid
                      }
                    },
                    url: r.default.signOutUrl,
                    userContext: S.userContext
                  })
                ]) : ((0, i.logDebugMessage)("signOut: exiting early because session does not exist"), (0, i.logDebugMessage)("signOut: firing SIGN_OUT event"), y.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: S.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return p = k.sent(), (0, i.logDebugMessage)("signOut: Calling API"), [4, fetch(p.url, p.requestInit)];
              case 3:
                if (m = k.sent(), (0, i.logDebugMessage)("signOut: API ended"), (0, i.logDebugMessage)("signOut: API responded with status code: " + m.status), m.status === y.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (m.status >= 300)
                  throw m;
                return [
                  4,
                  y.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: p.requestInit,
                    url: p.url,
                    fetchResponse: m.clone(),
                    userContext: S.userContext
                  })
                ];
              case 4:
                return k.sent(), [4, m.clone().json()];
              case 5:
                if (v = k.sent(), v.status === "GENERAL_ERROR")
                  throw (0, i.logDebugMessage)("doRequest: Throwing general error"), f = v.message === void 0 ? "No Error Message Provided" : v.message, new c.STGeneralError(f);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(S) {
        return t(this, void 0, void 0, function() {
          var p;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return "body" in S.response ? [4, S.response.clone().json()] : [3, 2];
              case 1:
                return p = m.sent(), [3, 3];
              case 2:
                typeof S.response.data == "string" ? p = JSON.parse(S.response.data) : p = S.response.data, m.label = 3;
              case 3:
                return [2, p.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(S) {
        return S.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m, v, f, k, w, R, _, O, P, $, R, E;
          return n(this, function(x) {
            switch (x.label) {
              case 0:
                m = 0, x.label = 1;
              case 1:
                return ++m < d ? [4, b.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return v = x.sent(), (0, i.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, v.acquireLock(a)];
              case 3:
                if (f = x.sent(), !f) return [3, 18];
                x.label = 4;
              case 4:
                return x.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: S.userContext
                  })
                ];
              case 5:
                p = x.sent(), (0, i.logDebugMessage)("validateClaims: claim refresh lock acquired"), k = 0, w = S.claimValidators, x.label = 6;
              case 6:
                return k < w.length ? (R = w[k], [4, R.shouldRefresh(p, S.userContext)]) : [3, 14];
              case 7:
                if (!x.sent()) return [3, 13];
                x.label = 8;
              case 8:
                return x.trys.push([8, 10, , 11]), [4, R.refresh(S.userContext)];
              case 9:
                return x.sent(), [3, 11];
              case 10:
                return _ = x.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(R.id),
                  _
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: S.userContext
                  })
                ];
              case 12:
                p = x.sent(), x.label = 13;
              case 13:
                return k++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, i.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, v.releaseLock(a)];
              case 16:
                return x.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, i.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(m, "/").concat(d)), x.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return m !== d ? [3, 22] : ((0, i.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: S.userContext })
                ]);
              case 21:
                p = x.sent(), x.label = 22;
              case 22:
                O = [], P = 0, $ = S.claimValidators, x.label = 23;
              case 23:
                return P < $.length ? (R = $[P], [4, R.validate(p, S.userContext)]) : [3, 26];
              case 24:
                E = x.sent(), E.isValid || O.push({
                  id: R.id,
                  reason: E.reason
                }), x.label = 25;
              case 25:
                return P++, [3, 23];
              case 26:
                return [2, O];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(S, p, m) {
        if ((0, i.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + S + " apiDomain: " + p + " sessionTokenBackendDomain: " + m
        ), S.includes("superTokensDoNotDoInterception"))
          return !1;
        S = (0, s.normaliseURLDomainOrThrowError)(S);
        var v = new URL(S), f = v.hostname, k = !1;
        if (p !== "") {
          p = (0, s.normaliseURLDomainOrThrowError)(p);
          var w = new URL(p);
          k = f === w.hostname;
        }
        if (m === void 0 || k)
          return k;
        var _ = (0, s.normaliseSessionScopeOrThrowError)(m);
        return (0, s.matchesDomainOrSubdomain)(f, _);
      },
      calculateClockSkewInMillis: function(S) {
        var p = S.accessTokenPayload;
        (0, i.logDebugMessage)("calculateClockSkewInMillis: called");
        var m = p == null ? void 0 : p.iat;
        if (m === void 0 || typeof m != "number")
          return (0, i.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var v = m * 1e3, f = v - Date.now();
        return (0, i.logDebugMessage)("calculateClockSkewInMillis: returning " + f), f;
      }
    };
  }
  return Te.default = g, Te;
}
var it = {}, Ge = {}, Or;
function Ls() {
  if (Or) return Ge;
  Or = 1;
  var e = Ge && Ge.__assign || function() {
    return e = Object.assign || function(n) {
      for (var r, o = 1, u = arguments.length; o < u; o++) {
        r = arguments[o];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.getProxyObject = void 0;
  function t(n) {
    for (var r = e(e({}, n), { _call: function(s, h) {
      throw new Error("This function should only be called through the recipe object");
    } }), o = Object.keys(r), u = function(s) {
      s !== "_call" && (r[s] = function() {
        for (var h = [], b = 0; b < arguments.length; b++)
          h[b] = arguments[b];
        return this._call(s, h);
      });
    }, i = 0, c = o; i < c.length; i++) {
      var l = c[i];
      u(l);
    }
    return r;
  }
  return Ge.getProxyObject = t, Ge;
}
var Pr;
function Hs() {
  if (Pr) return it;
  Pr = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.OverrideableBuilder = void 0;
  var e = Ls(), t = (
    /** @class */
    function() {
      function n(r) {
        this.layers = [r], this.proxies = [];
      }
      return n.prototype.override = function(r) {
        for (var o = (0, e.getProxyObject)(this.layers[0]), u = r(o, this), i = 0, c = Object.keys(this.layers[0]); i < c.length; i++) {
          var l = c[i];
          u[l] === o[l] || l === "_call" ? delete u[l] : u[l] === void 0 && (u[l] = null);
        }
        return this.layers.push(u), this.proxies.push(o), this;
      }, n.prototype.build = function() {
        var r = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var o = 0, u = this.layers; o < u.length; o++)
          for (var i = u[o], c = 0, l = Object.keys(i); c < l.length; c++) {
            var s = l[c], h = i[s];
            h !== void 0 && (h === null ? this.result[s] = void 0 : typeof h == "function" ? this.result[s] = h.bind(this.result) : this.result[s] = h);
          }
        for (var b = function(g) {
          var y = d.proxies[g];
          y._call = function(S, p) {
            for (var m = g; m >= 0; --m) {
              var v = r.layers[m][S];
              if (v != null)
                return v.bind(r.result).apply(void 0, p);
            }
          };
        }, d = this, a = 0; a < this.proxies.length; ++a)
          b(a);
        return this.result;
      }, n;
    }()
  );
  return it.OverrideableBuilder = t, it.default = t, it;
}
var dt = {}, Er;
function ao() {
  if (Er) return dt;
  Er = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.PrimitiveClaim = void 0;
  var e = xt(), t = (
    /** @class */
    function() {
      function n(r) {
        var o = this;
        this.validators = {
          hasValue: function(u, i, c) {
            i === void 0 && (i = o.defaultMaxAgeInSeconds);
            var l = e.default.getReferenceOrThrow().dateProvider;
            return {
              id: c !== void 0 ? c : o.id,
              refresh: function(s) {
                return o.refresh(s);
              },
              shouldRefresh: function(s, h) {
                if (i !== void 0 && i < l.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      l.getThresholdInSeconds()
                    )
                  );
                return o.getValueFromPayload(s, h) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                i !== void 0 && s[o.id].t < l.now() - i * 1e3;
              },
              validate: function(s, h) {
                var b = o.getValueFromPayload(s, h);
                if (b === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: u, actualValue: b }
                  };
                var d = (l.now() - o.getLastFetchedTime(s, h)) / 1e3;
                return i !== void 0 && d > i ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: d,
                    maxAgeInSeconds: i
                  }
                } : b !== u ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: u, actualValue: b }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = r.id, this.refresh = r.refresh, this.defaultMaxAgeInSeconds = r.defaultMaxAgeInSeconds;
      }
      return n.prototype.getValueFromPayload = function(r, o) {
        return r[this.id] !== void 0 ? r[this.id].v : void 0;
      }, n.prototype.getLastFetchedTime = function(r, o) {
        return r[this.id] !== void 0 ? r[this.id].t : void 0;
      }, n;
    }()
  );
  return dt.PrimitiveClaim = t, dt;
}
var xe = {}, Ar;
function Us() {
  if (Ar) return xe;
  Ar = 1;
  var e = xe && xe.__awaiter || function(o, u, i, c) {
    function l(s) {
      return s instanceof i ? s : new i(function(h) {
        h(s);
      });
    }
    return new (i || (i = Promise))(function(s, h) {
      function b(g) {
        try {
          a(c.next(g));
        } catch (y) {
          h(y);
        }
      }
      function d(g) {
        try {
          a(c.throw(g));
        } catch (y) {
          h(y);
        }
      }
      function a(g) {
        g.done ? s(g.value) : l(g.value).then(b, d);
      }
      a((c = c.apply(o, u || [])).next());
    });
  }, t = xe && xe.__generator || function(o, u) {
    var i = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, c, l, s, h;
    return h = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function b(a) {
      return function(g) {
        return d([a, g]);
      };
    }
    function d(a) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (s = a[0] & 2 ? l.return : a[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, a[1])).done)
            return s;
          switch (l = 0, s && (a = [a[0] & 2, s.value]), a[0]) {
            case 0:
            case 1:
              s = a;
              break;
            case 4:
              return i.label++, { value: a[1], done: !1 };
            case 5:
              i.label++, l = a[1], a = [0];
              continue;
            case 7:
              a = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                i = 0;
                continue;
              }
              if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                i.label = a[1];
                break;
              }
              if (a[0] === 6 && i.label < s[1]) {
                i.label = s[1], s = a;
                break;
              }
              if (s && i.label < s[2]) {
                i.label = s[2], i.ops.push(a);
                break;
              }
              s[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          a = u.call(o, i);
        } catch (g) {
          a = [6, g], l = 0;
        } finally {
          c = s = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.PrimitiveArrayClaim = void 0;
  var n = xt(), r = (
    /** @class */
    function() {
      function o(u) {
        var i = this;
        this.validators = {
          includes: function(c, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var h = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, d) {
                if (l !== void 0 && l < h.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      h.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, d) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < h.now() - l * 1e3;
              },
              validate: function(b, d) {
                return e(i, void 0, void 0, function() {
                  var a, g;
                  return t(this, function(y) {
                    return a = this.getValueFromPayload(b, d), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: c,
                          actualValue: a
                        }
                      }
                    ] : (g = (h.now() - this.getLastFetchedTime(b, d)) / 1e3, l !== void 0 && g > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: g,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : a.includes(c) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: c,
                          actualValue: a
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(c, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var h = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, d) {
                if (l !== void 0 && l < h.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      h.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, d) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < h.now() - l * 1e3;
              },
              validate: function(b, d) {
                return e(i, void 0, void 0, function() {
                  var a, g;
                  return t(this, function(y) {
                    return a = this.getValueFromPayload(b, d), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: c,
                          actualValue: a
                        }
                      }
                    ] : (g = (h.now() - this.getLastFetchedTime(b, d)) / 1e3, l !== void 0 && g > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: g,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : a.includes(c) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: c,
                          actualValue: a
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(c, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var h = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, d) {
                if (l !== void 0 && l < h.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      h.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, d) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < h.now() - l * 1e3;
              },
              validate: function(b, d) {
                return e(i, void 0, void 0, function() {
                  var a, g, y, S;
                  return t(this, function(p) {
                    return a = this.getValueFromPayload(b, d), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: c,
                          actualValue: a
                        }
                      }
                    ] : (g = (h.now() - this.getLastFetchedTime(b, d)) / 1e3, l !== void 0 && g > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: g,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (y = new Set(a), S = c.every(function(m) {
                      return y.has(m);
                    }), [
                      2,
                      S ? { isValid: S } : {
                        isValid: S,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: c,
                          actualValue: a
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(c, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var h = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, d) {
                if (l !== void 0 && l < h.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      h.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, d) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < h.now() - l * 1e3;
              },
              validate: function(b, d) {
                return e(i, void 0, void 0, function() {
                  var a, g, y, S;
                  return t(this, function(p) {
                    return a = this.getValueFromPayload(b, d), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: c,
                          actualValue: a
                        }
                      }
                    ] : (g = (h.now() - this.getLastFetchedTime(b, d)) / 1e3, l !== void 0 && g > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: g,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (y = new Set(a), S = c.some(function(m) {
                      return y.has(m);
                    }), [
                      2,
                      S ? { isValid: S } : {
                        isValid: S,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: c,
                          actualValue: a
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(c, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var h = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, d) {
                if (l !== void 0 && l < h.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      h.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, d) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < h.now() - l * 1e3;
              },
              validate: function(b, d) {
                return e(i, void 0, void 0, function() {
                  var a, g, y, S;
                  return t(this, function(p) {
                    return a = this.getValueFromPayload(b, d), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: c,
                          actualValue: a
                        }
                      }
                    ] : (g = (h.now() - this.getLastFetchedTime(b, d)) / 1e3, l !== void 0 && g > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: g,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (y = new Set(a), S = c.every(function(m) {
                      return !y.has(m);
                    }), [
                      2,
                      S ? { isValid: S } : {
                        isValid: S,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: c,
                          actualValue: a
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = u.id, this.refresh = u.refresh, this.defaultMaxAgeInSeconds = u.defaultMaxAgeInSeconds;
      }
      return o.prototype.getValueFromPayload = function(u, i) {
        return u[this.id] !== void 0 ? u[this.id].v : void 0;
      }, o.prototype.getLastFetchedTime = function(u, i) {
        return u[this.id] !== void 0 ? u[this.id].t : void 0;
      }, o;
    }()
  );
  return xe.PrimitiveArrayClaim = r, xe;
}
var Me = {}, Dr;
function js() {
  if (Dr) return Me;
  Dr = 1;
  var e = Me && Me.__extends || /* @__PURE__ */ function() {
    var o = function(u, i) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, l) {
        c.__proto__ = l;
      } || function(c, l) {
        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (c[s] = l[s]);
      }, o(u, i);
    };
    return function(u, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      o(u, i);
      function c() {
        this.constructor = u;
      }
      u.prototype = i === null ? Object.create(i) : (c.prototype = i.prototype, new c());
    };
  }(), t = Me && Me.__assign || function() {
    return t = Object.assign || function(o) {
      for (var u, i = 1, c = arguments.length; i < c; i++) {
        u = arguments[i];
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (o[l] = u[l]);
      }
      return o;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(Me, "__esModule", { value: !0 }), Me.BooleanClaim = void 0;
  var n = ao(), r = (
    /** @class */
    function(o) {
      e(u, o);
      function u(i) {
        var c = o.call(this, i) || this;
        return c.validators = t(t({}, c.validators), {
          isTrue: function(l) {
            return c.validators.hasValue(!0, l);
          },
          isFalse: function(l) {
            return c.validators.hasValue(!1, l);
          }
        }), c;
      }
      return u;
    }(n.PrimitiveClaim)
  );
  return Me.BooleanClaim = r, Me;
}
var xr;
function Fs() {
  return xr || (xr = 1, function(e) {
    var t = Xe && Xe.__awaiter || function(p, m, v, f) {
      function k(w) {
        return w instanceof v ? w : new v(function(_) {
          _(w);
        });
      }
      return new (v || (v = Promise))(function(w, _) {
        function O(R) {
          try {
            $(f.next(R));
          } catch (E) {
            _(E);
          }
        }
        function P(R) {
          try {
            $(f.throw(R));
          } catch (E) {
            _(E);
          }
        }
        function $(R) {
          R.done ? w(R.value) : k(R.value).then(O, P);
        }
        $((f = f.apply(p, m || [])).next());
      });
    }, n = Xe && Xe.__generator || function(p, m) {
      var v = {
        label: 0,
        sent: function() {
          if (w[0] & 1) throw w[1];
          return w[1];
        },
        trys: [],
        ops: []
      }, f, k, w, _;
      return _ = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
        return this;
      }), _;
      function O($) {
        return function(R) {
          return P([$, R]);
        };
      }
      function P($) {
        if (f) throw new TypeError("Generator is already executing.");
        for (; v; )
          try {
            if (f = 1, k && (w = $[0] & 2 ? k.return : $[0] ? k.throw || ((w = k.return) && w.call(k), 0) : k.next) && !(w = w.call(k, $[1])).done)
              return w;
            switch (k = 0, w && ($ = [$[0] & 2, w.value]), $[0]) {
              case 0:
              case 1:
                w = $;
                break;
              case 4:
                return v.label++, { value: $[1], done: !1 };
              case 5:
                v.label++, k = $[1], $ = [0];
                continue;
              case 7:
                $ = v.ops.pop(), v.trys.pop();
                continue;
              default:
                if (w = v.trys, !(w = w.length > 0 && w[w.length - 1]) && ($[0] === 6 || $[0] === 2)) {
                  v = 0;
                  continue;
                }
                if ($[0] === 3 && (!w || $[1] > w[0] && $[1] < w[3])) {
                  v.label = $[1];
                  break;
                }
                if ($[0] === 6 && v.label < w[1]) {
                  v.label = w[1], w = $;
                  break;
                }
                if (w && v.label < w[2]) {
                  v.label = w[2], v.ops.push($);
                  break;
                }
                w[2] && v.ops.pop(), v.trys.pop();
                continue;
            }
            $ = m.call(p, v);
          } catch (R) {
            $ = [6, R], k = 0;
          } finally {
            f = w = 0;
          }
        if ($[0] & 5) throw $[1];
        return { value: $[0] ? $[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = void 0;
    var r = Mt(), o = Ns(), u = Hs(), i = bn(), c = oo(), l = Fe(), s = kn(), h = io(), b = Dt(), d = xt(), a = (
      /** @class */
      function() {
        function p() {
        }
        p.init = function(v) {
          c.default.init(v.cookieHandler), l.default.init(v.windowHandler), d.default.init(v.dateProvider), s.default.init(
            v.lockFactory,
            l.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var f = (0, i.validateAndNormaliseInputOrThrowError)(v);
          v.enableDebugLogs !== void 0 && v.enableDebugLogs && (0, b.enableLogging)();
          var k = new u.default(
            (0, o.default)({
              onHandleEvent: f.onHandleEvent,
              preAPIHook: f.preAPIHook,
              postAPIHook: f.postAPIHook,
              sessionExpiredStatusCode: f.sessionExpiredStatusCode
            })
          ).override(f.override.functions).build();
          r.default.init(f, k), p.axiosInterceptorQueue.forEach(function(w) {
            w();
          }), p.axiosInterceptorQueue = [];
        }, p.getUserId = function(v) {
          return r.default.recipeImpl.getUserId({
            userContext: (0, i.getNormalisedUserContext)(v === void 0 ? void 0 : v.userContext)
          });
        }, p.getAccessTokenPayloadSecurely = function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              return [
                2,
                r.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, i.getNormalisedUserContext)(
                    v === void 0 ? void 0 : v.userContext
                  )
                })
              ];
            });
          });
        };
        var m;
        return m = p, p.axiosInterceptorQueue = [], p.attemptRefreshingSession = function() {
          return t(void 0, void 0, void 0, function() {
            return n(m, function(v) {
              return [2, r.default.attemptRefreshingSession()];
            });
          });
        }, p.doesSessionExist = function(v) {
          return r.default.recipeImpl.doesSessionExist({
            userContext: (0, i.getNormalisedUserContext)(v === void 0 ? void 0 : v.userContext)
          });
        }, p.addAxiosInterceptors = function(v, f) {
          r.default.initCalled ? r.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: v,
            userContext: (0, i.getNormalisedUserContext)(f)
          }) : p.axiosInterceptorQueue.push(function() {
            r.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: v,
              userContext: (0, i.getNormalisedUserContext)(f)
            });
          });
        }, p.signOut = function(v) {
          return r.default.recipeImpl.signOut({
            userContext: (0, i.getNormalisedUserContext)(v === void 0 ? void 0 : v.userContext)
          });
        }, p.getInvalidClaimsFromResponse = function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              return [
                2,
                r.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: v.response,
                  userContext: (0, i.getNormalisedUserContext)(v.userContext)
                })
              ];
            });
          });
        }, p.getClaimValue = function(v) {
          return t(this, void 0, void 0, function() {
            var f, k;
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  return f = (0, i.getNormalisedUserContext)(
                    v === void 0 ? void 0 : v.userContext
                  ), [
                    4,
                    p.getAccessTokenPayloadSecurely({ userContext: f })
                  ];
                case 1:
                  return k = w.sent(), [2, v.claim.getValueFromPayload(k, f)];
              }
            });
          });
        }, p.validateClaims = function(v, f) {
          var k = (0, i.getNormalisedUserContext)(f), w = h.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), _ = r.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: w,
            userContext: k
          }), O = v !== void 0 ? v(_, k) : _;
          return O.length === 0 ? [] : r.default.recipeImpl.validateClaims({
            claimValidators: O,
            userContext: (0, i.getNormalisedUserContext)(f)
          });
        }, p.getAccessToken = function(v) {
          return t(void 0, void 0, void 0, function() {
            return n(m, function(f) {
              switch (f.label) {
                case 0:
                  return [
                    4,
                    r.default.recipeImpl.doesSessionExist({
                      userContext: (0, i.getNormalisedUserContext)(
                        v === void 0 ? void 0 : v.userContext
                      )
                    })
                  ];
                case 1:
                  return f.sent() ? [2, (0, r.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, p;
      }()
    );
    e.default = a, e.init = a.init, e.getUserId = a.getUserId, e.getAccessTokenPayloadSecurely = a.getAccessTokenPayloadSecurely, e.getAccessToken = a.getAccessToken, e.attemptRefreshingSession = a.attemptRefreshingSession, e.doesSessionExist = a.doesSessionExist, e.addAxiosInterceptors = a.addAxiosInterceptors, e.signOut = a.signOut, e.validateClaims = a.validateClaims, e.getClaimValue = a.getClaimValue, e.getInvalidClaimsFromResponse = a.getInvalidClaimsFromResponse;
    var g = ao();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return g.PrimitiveClaim;
      }
    });
    var y = Us();
    Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return y.PrimitiveArrayClaim;
      }
    });
    var S = js();
    Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return S.BooleanClaim;
      }
    });
  }(Xe)), Xe;
}
var Mr;
function uo() {
  return Mr || (Mr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Fs());
  }(sn)), sn;
}
var ft = {}, Nr;
function Vs() {
  return Nr || (Nr = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.EMAILVERIFICATION_CLAIM_ID = void 0, ft.EMAILVERIFICATION_CLAIM_ID = "st-ev"), ft;
}
var Lr;
function qs() {
  if (Lr) return ue;
  Lr = 1;
  var e = ue && ue.__extends || /* @__PURE__ */ function() {
    var b = function(d, a) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, y) {
        g.__proto__ = y;
      } || function(g, y) {
        for (var S in y) Object.prototype.hasOwnProperty.call(y, S) && (g[S] = y[S]);
      }, b(d, a);
    };
    return function(d, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      b(d, a);
      function g() {
        this.constructor = d;
      }
      d.prototype = a === null ? Object.create(a) : (g.prototype = a.prototype, new g());
    };
  }(), t = ue && ue.__assign || function() {
    return t = Object.assign || function(b) {
      for (var d, a = 1, g = arguments.length; a < g; a++) {
        d = arguments[a];
        for (var y in d) Object.prototype.hasOwnProperty.call(d, y) && (b[y] = d[y]);
      }
      return b;
    }, t.apply(this, arguments);
  }, n = ue && ue.__awaiter || function(b, d, a, g) {
    function y(S) {
      return S instanceof a ? S : new a(function(p) {
        p(S);
      });
    }
    return new (a || (a = Promise))(function(S, p) {
      function m(k) {
        try {
          f(g.next(k));
        } catch (w) {
          p(w);
        }
      }
      function v(k) {
        try {
          f(g.throw(k));
        } catch (w) {
          p(w);
        }
      }
      function f(k) {
        k.done ? S(k.value) : y(k.value).then(m, v);
      }
      f((g = g.apply(b, d || [])).next());
    });
  }, r = ue && ue.__generator || function(b, d) {
    var a = {
      label: 0,
      sent: function() {
        if (S[0] & 1) throw S[1];
        return S[1];
      },
      trys: [],
      ops: []
    }, g, y, S, p;
    return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function m(f) {
      return function(k) {
        return v([f, k]);
      };
    }
    function v(f) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (g = 1, y && (S = f[0] & 2 ? y.return : f[0] ? y.throw || ((S = y.return) && S.call(y), 0) : y.next) && !(S = S.call(y, f[1])).done)
            return S;
          switch (y = 0, S && (f = [f[0] & 2, S.value]), f[0]) {
            case 0:
            case 1:
              S = f;
              break;
            case 4:
              return a.label++, { value: f[1], done: !1 };
            case 5:
              a.label++, y = f[1], f = [0];
              continue;
            case 7:
              f = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (S = a.trys, !(S = S.length > 0 && S[S.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                a = 0;
                continue;
              }
              if (f[0] === 3 && (!S || f[1] > S[0] && f[1] < S[3])) {
                a.label = f[1];
                break;
              }
              if (f[0] === 6 && a.label < S[1]) {
                a.label = S[1], S = f;
                break;
              }
              if (S && a.label < S[2]) {
                a.label = S[2], a.ops.push(f);
                break;
              }
              S[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          f = d.call(b, a);
        } catch (k) {
          f = [6, k], y = 0;
        } finally {
          g = S = 0;
        }
      if (f[0] & 5) throw f[1];
      return { value: f[0] ? f[1] : void 0, done: !0 };
    }
  }, o = ue && ue.__spreadArray || function(b, d, a) {
    if (a || arguments.length === 2)
      for (var g = 0, y = d.length, S; g < y; g++)
        (S || !(g in d)) && (S || (S = Array.prototype.slice.call(d, 0, g)), S[g] = d[g]);
    return b.concat(S || Array.prototype.slice.call(d));
  };
  Object.defineProperty(ue, "__esModule", { value: !0 }), ue.Recipe = void 0;
  var u = Es(), i = uo(), c = so(), l = Vs(), s = [l.EMAILVERIFICATION_CLAIM_ID], h = (
    /** @class */
    function(b) {
      e(d, b);
      function d(a) {
        var g = b.call(this, a) || this;
        return g.getUserId = function(y) {
          return i.default.getUserId({
            userContext: y.userContext
          });
        }, g.getAccessToken = function(y) {
          return n(g, void 0, void 0, function() {
            return r(this, function(S) {
              return [
                2,
                i.default.getAccessToken({
                  userContext: y.userContext
                })
              ];
            });
          });
        }, g.getAccessTokenPayloadSecurely = function(y) {
          return n(g, void 0, void 0, function() {
            return r(this, function(S) {
              return [
                2,
                i.default.getAccessTokenPayloadSecurely({
                  userContext: y.userContext
                })
              ];
            });
          });
        }, g.doesSessionExist = function(y) {
          return i.default.doesSessionExist({
            userContext: y.userContext
          });
        }, g.signOut = function(y) {
          return i.default.signOut({
            userContext: y.userContext
          });
        }, g.attemptRefreshingSession = function() {
          return n(g, void 0, void 0, function() {
            return r(this, function(y) {
              return [2, i.default.attemptRefreshingSession()];
            });
          });
        }, g.validateClaims = function(y) {
          return i.default.validateClaims(y.overrideGlobalClaimValidators, y.userContext);
        }, i.default.init(
          t(t({}, a), {
            override: {
              functions: function(y, S) {
                var p;
                return S.override(function(m) {
                  return t(t({}, m), {
                    getGlobalClaimValidators: function(v) {
                      var f = m.getGlobalClaimValidators(v);
                      return o(
                        o(
                          [],
                          f.filter(function(k) {
                            return s.includes(k.id);
                          }),
                          !0
                        ),
                        f.filter(function(k) {
                          return !s.includes(k.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((p = a.override) === null || p === void 0) && p.functions && S.override(a.override.functions), y;
              }
            },
            preAPIHook: function(y) {
              return n(g, void 0, void 0, function() {
                var S, p;
                return r(this, function(m) {
                  return S = new Headers(y.requestInit.headers), S.set("rid", a.recipeId), p = t(t({}, y), {
                    requestInit: t(t({}, y.requestInit), { headers: S })
                  }), a.preAPIHook === void 0 ? [2, p] : [2, a.preAPIHook(y)];
                });
              });
            },
            apiDomain: a.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: a.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), g;
      }
      return d.init = function(a) {
        return function(g, y, S) {
          return d.instance = new d(
            t(t({}, a), {
              appInfo: g,
              recipeId: d.RECIPE_ID,
              enableDebugLogs: S
            })
          ), d.instance;
        };
      }, d.prototype.getClaimValue = function(a) {
        return i.default.getClaimValue(a);
      }, d.prototype.getInvalidClaimsFromResponse = function(a) {
        return i.default.getInvalidClaimsFromResponse(a);
      }, d.addAxiosInterceptors = function(a, g) {
        return i.default.addAxiosInterceptors(a, g);
      }, d.getInstanceOrThrow = function() {
        if (d.instance === void 0) {
          var a = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, c.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return d.instance;
      }, d.reset = function() {
        (0, c.isTest)() && (d.instance = void 0);
      }, d.RECIPE_ID = "session", d;
    }(u.default)
  );
  return ue.Recipe = h, ue.default = h, ue;
}
var Hr;
function Bs() {
  return Hr || (Hr = 1, function(e) {
    var t = Ve && Ve.__awaiter || function(m, v, f, k) {
      function w(_) {
        return _ instanceof f ? _ : new f(function(O) {
          O(_);
        });
      }
      return new (f || (f = Promise))(function(_, O) {
        function P(E) {
          try {
            R(k.next(E));
          } catch (x) {
            O(x);
          }
        }
        function $(E) {
          try {
            R(k.throw(E));
          } catch (x) {
            O(x);
          }
        }
        function R(E) {
          E.done ? _(E.value) : w(E.value).then(P, $);
        }
        R((k = k.apply(m, v || [])).next());
      });
    }, n = Ve && Ve.__generator || function(m, v) {
      var f = {
        label: 0,
        sent: function() {
          if (_[0] & 1) throw _[1];
          return _[1];
        },
        trys: [],
        ops: []
      }, k, w, _, O;
      return O = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
        return this;
      }), O;
      function P(R) {
        return function(E) {
          return $([R, E]);
        };
      }
      function $(R) {
        if (k) throw new TypeError("Generator is already executing.");
        for (; f; )
          try {
            if (k = 1, w && (_ = R[0] & 2 ? w.return : R[0] ? w.throw || ((_ = w.return) && _.call(w), 0) : w.next) && !(_ = _.call(w, R[1])).done)
              return _;
            switch (w = 0, _ && (R = [R[0] & 2, _.value]), R[0]) {
              case 0:
              case 1:
                _ = R;
                break;
              case 4:
                return f.label++, { value: R[1], done: !1 };
              case 5:
                f.label++, w = R[1], R = [0];
                continue;
              case 7:
                R = f.ops.pop(), f.trys.pop();
                continue;
              default:
                if (_ = f.trys, !(_ = _.length > 0 && _[_.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                  f = 0;
                  continue;
                }
                if (R[0] === 3 && (!_ || R[1] > _[0] && R[1] < _[3])) {
                  f.label = R[1];
                  break;
                }
                if (R[0] === 6 && f.label < _[1]) {
                  f.label = _[1], _ = R;
                  break;
                }
                if (_ && f.label < _[2]) {
                  f.label = _[2], f.ops.push(R);
                  break;
                }
                _[2] && f.ops.pop(), f.trys.pop();
                continue;
            }
            R = v.call(m, f);
          } catch (E) {
            R = [6, E], w = 0;
          } finally {
            k = _ = 0;
          }
        if (R[0] & 5) throw R[1];
        return { value: R[0] ? R[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = void 0;
    var r = so(), o = qs(), u = (
      /** @class */
      function() {
        function m() {
        }
        return m.init = function(v) {
          return o.default.init(v);
        }, m.getUserId = function(v) {
          return o.default.getInstanceOrThrow().getUserId({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getAccessToken = function(v) {
          return o.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getAccessTokenPayloadSecurely = function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              return [
                2,
                o.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, r.getNormalisedUserContext)(
                    v == null ? void 0 : v.userContext
                  )
                })
              ];
            });
          });
        }, m.attemptRefreshingSession = function() {
          return t(this, void 0, void 0, function() {
            return n(this, function(v) {
              return [2, o.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, m.doesSessionExist = function(v) {
          return o.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.addAxiosInterceptors = function(v, f) {
          return o.default.addAxiosInterceptors(v, (0, r.getNormalisedUserContext)(f));
        }, m.signOut = function(v) {
          return o.default.getInstanceOrThrow().signOut({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getClaimValue = function(v) {
          return o.default.getInstanceOrThrow().getClaimValue({
            claim: v.claim,
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.validateClaims = function(v) {
          return o.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: v == null ? void 0 : v.overrideGlobalClaimValidators,
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getInvalidClaimsFromResponse = function(v) {
          return o.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: v.response,
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m;
      }()
    );
    e.default = u;
    var i = u.init;
    e.init = i;
    var c = u.getUserId;
    e.getUserId = c;
    var l = u.getAccessTokenPayloadSecurely;
    e.getAccessTokenPayloadSecurely = l;
    var s = u.getAccessToken;
    e.getAccessToken = s;
    var h = u.attemptRefreshingSession;
    e.attemptRefreshingSession = h;
    var b = u.doesSessionExist;
    e.doesSessionExist = b;
    var d = u.addAxiosInterceptors;
    e.addAxiosInterceptors = d;
    var a = u.signOut;
    e.signOut = a;
    var g = u.validateClaims;
    e.validateClaims = g;
    var y = u.getClaimValue;
    e.getClaimValue = y;
    var S = u.getInvalidClaimsFromResponse;
    e.getInvalidClaimsFromResponse = S;
    var p = uo();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return p.PrimitiveClaim;
      }
    }), Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return p.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return p.BooleanClaim;
      }
    });
  }(Ve)), Ve;
}
var Ur;
function Ws() {
  return Ur || (Ur = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Bs());
  }(tn)), tn;
}
var Xs = Ws();
const zs = /* @__PURE__ */ ps(Xs), Gs = /* @__PURE__ */ gs("userStore", () => {
  const e = Ke(!1), t = localStorage.getItem("theme") || "light", n = Ke(t);
  document.documentElement.classList.toggle("dark", t === "dark");
  function r() {
    const u = n.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", u), n.value = u, document.documentElement.classList.toggle("dark", u === "dark");
  }
  async function o() {
    e.value = await zs.doesSessionExist();
  }
  return {
    isSignedIn: e,
    updateAuth: o,
    theme: n,
    toggleTheme: r
  };
}), Ys = /* @__PURE__ */ Ro({
  __name: "ThemeToggle",
  setup(e) {
    const t = Gs(), n = gn(() => t.theme === "light" ? "pi pi-sun" : "pi pi-moon");
    return (r, o) => (He(), qt(Yt(to), {
      icon: Yt(n),
      id: "themeToggle",
      onClick: o[0] || (o[0] = (u) => Yt(t).toggleTheme()),
      variant: "outlined",
      "aria-label": "Toggle theme"
    }, null, 8, ["icon"]));
  }
});
export {
  Ys as ThemeToggle
};
