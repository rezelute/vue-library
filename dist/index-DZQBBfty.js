import { ref as le, readonly as ut, getCurrentInstance as ye, onMounted as dt, nextTick as ct, watch as mt } from "vue";
var pt = Object.defineProperty, ge = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, ft = Object.prototype.propertyIsEnumerable, ve = (e, t, n) => t in e ? pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yt = (e, t) => {
  for (var n in t || (t = {})) ht.call(t, n) && ve(e, n, t[n]);
  if (ge) for (var n of ge(t)) ft.call(t, n) && ve(e, n, t[n]);
  return e;
};
function pe(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function gt(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function f(e) {
  return !pe(e);
}
function T(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Ae(e = {}, t = {}) {
  let n = yt({}, e);
  return Object.keys(t).forEach((r) => {
    let a = r;
    T(t[a]) && a in e && T(e[a]) ? n[a] = Ae(e[a], t[a]) : n[a] = t[a];
  }), n;
}
function vt(...e) {
  return e.reduce((t, n, r) => r === 0 ? n : Ae(t, n), {});
}
function w(e, ...t) {
  return gt(e) ? e(...t) : e;
}
function E(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function be(e) {
  return E(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function bt(e, t = "", n = {}) {
  let r = be(t).split("."), a = r.shift();
  if (a) {
    if (T(e)) {
      let l = Object.keys(e).find((o) => be(o) === a) || "";
      return bt(w(e[l], n), r.join("."), n);
    }
    return;
  }
  return w(e, n);
}
function tn(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function St(e) {
  return f(e) && !isNaN(e);
}
function F(e, t) {
  if (t) {
    let n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function nn(...e) {
  return vt(...e);
}
function J(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function rn(e) {
  return E(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Re(e) {
  return E(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function De() {
  let e = /* @__PURE__ */ new Map();
  return { on(t, n) {
    let r = e.get(t);
    return r ? r.push(n) : r = [n], e.set(t, r), this;
  }, off(t, n) {
    let r = e.get(t);
    return r && r.splice(r.indexOf(n) >>> 0, 1), this;
  }, emit(t, n) {
    let r = e.get(t);
    r && r.forEach((a) => {
      a(n);
    });
  }, clear() {
    e.clear();
  } };
}
function $t(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function Se(e, t) {
  if (e && t) {
    let n = (r) => {
      $t(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function kt() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function an(e) {
  typeof e == "string" ? Se(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.setProperty(e.variableName, kt() + "px"), Se(document.body, e?.className || "p-overflow-hidden"));
}
function $e(e, t) {
  if (e && t) {
    let n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function on(e) {
  typeof e == "string" ? $e(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.removeProperty(e.variableName), $e(document.body, e?.className || "p-overflow-hidden"));
}
function sn() {
  let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], a = e.innerWidth || n.clientWidth || r.clientWidth, l = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: a, height: l };
}
function ke(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function ln(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function un(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Ot(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function wt(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Ot(e));
}
function X(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function se(e, t = {}) {
  if (X(e)) {
    let n = (r, a) => {
      var l, o;
      let i = (l = e?.$attrs) != null && l[r] ? [(o = e?.$attrs) == null ? void 0 : o[r]] : [];
      return [a].flat().reduce((s, u) => {
        if (u != null) {
          let d = typeof u;
          if (d === "string" || d === "number") s.push(u);
          else if (d === "object") {
            let p = Array.isArray(u) ? n(r, u) : Object.entries(u).map(([m, c]) => r === "style" && (c || c === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${c}` : c ? m : void 0);
            s = p.length ? s.concat(p.filter((m) => !!m)) : s;
          }
        }
        return s;
      }, i);
    };
    Object.entries(t).forEach(([r, a]) => {
      if (a != null) {
        let l = r.match(/^on(.+)/);
        l ? e.addEventListener(l[1].toLowerCase(), a) : r === "p-bind" || r === "pBind" ? se(e, a) : (a = r === "class" ? [...new Set(n("class", a))].join(" ").trim() : r === "style" ? n("style", a).join(";").trim() : a, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = a), e.setAttribute(r, a));
      }
    });
  }
}
function dn(e, t = {}, ...n) {
  {
    let r = document.createElement(e);
    return se(r, t), r.append(...n), r;
  }
}
function _t(e, t) {
  return X(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function cn(e, t) {
  return X(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function mn(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function pn(e, t) {
  if (X(e)) {
    let n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Ie(e, t = "") {
  let n = _t(e, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`), r = [];
  for (let a of n) getComputedStyle(a).display != "none" && getComputedStyle(a).visibility != "hidden" && r.push(a);
  return r;
}
function hn(e, t) {
  let n = Ie(e, t);
  return n.length > 0 ? n[0] : null;
}
function fn(e) {
  if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function yn(e, t) {
  let n = Ie(e, t);
  return n.length > 0 ? n[n.length - 1] : null;
}
function gn(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return { top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: t.left + (window.pageXOffset || ke(document.documentElement) || ke(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function vn(e, t) {
  return e ? e.offsetHeight : 0;
}
function bn(e) {
  if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Sn(e, t = "") {
  return X(e) ? e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`) : !1;
}
function $n() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function xt(e, t = "", n) {
  X(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
var Ct = Object.defineProperty, Nt = Object.defineProperties, Pt = Object.getOwnPropertyDescriptors, ie = Object.getOwnPropertySymbols, Me = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable, Oe = (e, t, n) => t in e ? Ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, k = (e, t) => {
  for (var n in t || (t = {})) Me.call(t, n) && Oe(e, n, t[n]);
  if (ie) for (var n of ie(t)) Ve.call(t, n) && Oe(e, n, t[n]);
  return e;
}, ue = (e, t) => Nt(e, Pt(t)), j = (e, t) => {
  var n = {};
  for (var r in e) Me.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ie) for (var r of ie(e)) t.indexOf(r) < 0 && Ve.call(e, r) && (n[r] = e[r]);
  return n;
}, Lt = De(), B = Lt, ee = /{([^}]*)}/g, ze = /(\d+\s+[\+\-\*\/]\s+\d+)/g, We = /var\([^)]+\)/g;
function we(e) {
  return E(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function Tt(e) {
  return T(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Et(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function ce(e = "", t = "") {
  return Et(`${E(e, !1) && E(t, !1) ? `${e}-` : e}${t}`);
}
function Ke(e = "", t = "") {
  return `--${ce(e, t)}`;
}
function At(e = "") {
  let t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Be(e, t = "", n = "", r = [], a) {
  if (E(e)) {
    let l = e.trim();
    if (At(l)) return;
    if (F(l, ee)) {
      let o = l.replaceAll(ee, (i) => {
        let s = i.replace(/{|}/g, "").split(".").filter((u) => !r.some((d) => F(u, d)));
        return `var(${Ke(n, Re(s.join("-")))}${f(a) ? `, ${a}` : ""})`;
      });
      return F(o.replace(We, "0"), ze) ? `calc(${o})` : o;
    }
    return l;
  } else if (St(e)) return e;
}
function Rt(e, t, n) {
  E(t, !1) && e.push(`${t}:${n};`);
}
function Q(e, t) {
  return e ? `${e}{${t}}` : "";
}
function Fe(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function n(o, i) {
    let s = [], u = 0, d = "", p = null, m = 0;
    for (; u <= o.length; ) {
      let c = o[u];
      if ((c === '"' || c === "'" || c === "`") && o[u - 1] !== "\\" && (p = p === c ? null : c), !p && (c === "(" && m++, c === ")" && m--, (c === "," || u === o.length) && m === 0)) {
        let h = d.trim();
        h.startsWith("dt(") ? s.push(Fe(h, i)) : s.push(r(h)), d = "", u++;
        continue;
      }
      c !== void 0 && (d += c), u++;
    }
    return s;
  }
  function r(o) {
    let i = o[0];
    if ((i === '"' || i === "'" || i === "`") && o[o.length - 1] === i) return o.slice(1, -1);
    let s = Number(o);
    return isNaN(s) ? o : s;
  }
  let a = [], l = [];
  for (let o = 0; o < e.length; o++) if (e[o] === "d" && e.slice(o, o + 3) === "dt(") l.push(o), o += 2;
  else if (e[o] === ")" && l.length > 0) {
    let i = l.pop();
    l.length === 0 && a.push([i, o]);
  }
  if (!a.length) return e;
  for (let o = a.length - 1; o >= 0; o--) {
    let [i, s] = a[o], u = e.slice(i + 3, s), d = n(u, t), p = t(...d);
    e = e.slice(0, i) + p + e.slice(s + 1);
  }
  return e;
}
var kn = (e) => {
  var t;
  let n = S.getTheme(), r = me(n, e, void 0, "variable"), a = (t = r?.match(/--[\w-]+/g)) == null ? void 0 : t[0], l = me(n, e, void 0, "value");
  return { name: a, variable: r, value: l };
}, U = (...e) => me(S.getTheme(), ...e), me = (e = {}, t, n, r) => {
  if (t) {
    let { variable: a, options: l } = S.defaults || {}, { prefix: o, transform: i } = e?.options || l || {}, s = F(t, ee) ? t : `{${t}}`;
    return r === "value" || pe(r) && i === "strict" ? S.getTokenValue(t) : Be(s, void 0, o, [a.excludedKeyRegex], n);
  }
  return "";
};
function ae(e, ...t) {
  if (e instanceof Array) {
    let n = e.reduce((r, a, l) => {
      var o;
      return r + a + ((o = w(t[l], { dt: U })) != null ? o : "");
    }, "");
    return Fe(n, U);
  }
  return w(e, { dt: U });
}
function Dt(e, t = {}) {
  let n = S.defaults.variable, { prefix: r = n.prefix, selector: a = n.selector, excludedKeyRegex: l = n.excludedKeyRegex } = t, o = [], i = [], s = [{ node: e, path: r }];
  for (; s.length; ) {
    let { node: d, path: p } = s.pop();
    for (let m in d) {
      let c = d[m], h = Tt(c), g = F(m, l) ? ce(p) : ce(p, Re(m));
      if (T(h)) s.push({ node: h, path: g });
      else {
        let y = Ke(g), v = Be(h, g, r, [l]);
        Rt(i, y, v);
        let b = g;
        r && b.startsWith(r + "-") && (b = b.slice(r.length + 1)), o.push(b.replace(/-/g, "."));
      }
    }
  }
  let u = i.join("");
  return { value: i, tokens: o, declarations: u, css: Q(a, u) };
}
var $ = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: !0 };
} } }, resolve(e) {
  let t = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
  return [e].flat().map((n) => {
    var r;
    return (r = t.map((a) => a.resolve(n)).find((a) => a.matched)) != null ? r : this.rules.custom.resolve(n);
  });
} }, _toVariables(e, t) {
  return Dt(e, { prefix: t?.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: a }) {
  var l, o, i, s, u, d, p;
  let { preset: m, options: c } = t, h, g, y, v, b, A, R;
  if (f(m) && c.transform !== "strict") {
    let { primitive: H, semantic: D, extend: x } = m, C = D || {}, { colorScheme: N } = C, I = j(C, ["colorScheme"]), P = x || {}, { colorScheme: M } = P, V = j(P, ["colorScheme"]), L = N || {}, { dark: z } = L, Y = j(L, ["dark"]), W = M || {}, { dark: Z } = W, q = j(W, ["dark"]), _ = f(H) ? this._toVariables({ primitive: H }, c) : {}, O = f(I) ? this._toVariables({ semantic: I }, c) : {}, K = f(Y) ? this._toVariables({ light: Y }, c) : {}, re = f(z) ? this._toVariables({ dark: z }, c) : {}, G = f(V) ? this._toVariables({ semantic: V }, c) : {}, he = f(q) ? this._toVariables({ light: q }, c) : {}, fe = f(Z) ? this._toVariables({ dark: Z }, c) : {}, [Ue, He] = [(l = _.declarations) != null ? l : "", _.tokens], [Ye, Ze] = [(o = O.declarations) != null ? o : "", O.tokens || []], [qe, Ge] = [(i = K.declarations) != null ? i : "", K.tokens || []], [Qe, Xe] = [(s = re.declarations) != null ? s : "", re.tokens || []], [Je, et] = [(u = G.declarations) != null ? u : "", G.tokens || []], [tt, nt] = [(d = he.declarations) != null ? d : "", he.tokens || []], [rt, at] = [(p = fe.declarations) != null ? p : "", fe.tokens || []];
    h = this.transformCSS(e, Ue, "light", "variable", c, r, a), g = He;
    let ot = this.transformCSS(e, `${Ye}${qe}`, "light", "variable", c, r, a), st = this.transformCSS(e, `${Qe}`, "dark", "variable", c, r, a);
    y = `${ot}${st}`, v = [.../* @__PURE__ */ new Set([...Ze, ...Ge, ...Xe])];
    let it = this.transformCSS(e, `${Je}${tt}color-scheme:light`, "light", "variable", c, r, a), lt = this.transformCSS(e, `${rt}color-scheme:dark`, "dark", "variable", c, r, a);
    b = `${it}${lt}`, A = [.../* @__PURE__ */ new Set([...et, ...nt, ...at])], R = w(m.css, { dt: U });
  }
  return { primitive: { css: h, tokens: g }, semantic: { css: y, tokens: v }, global: { css: b, tokens: A }, style: R };
}, getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: a, defaults: l, selector: o }) {
  var i, s, u;
  let d, p, m;
  if (f(t) && n.transform !== "strict") {
    let c = e.replace("-directive", ""), h = t, { colorScheme: g, extend: y, css: v } = h, b = j(h, ["colorScheme", "extend", "css"]), A = y || {}, { colorScheme: R } = A, H = j(A, ["colorScheme"]), D = g || {}, { dark: x } = D, C = j(D, ["dark"]), N = R || {}, { dark: I } = N, P = j(N, ["dark"]), M = f(b) ? this._toVariables({ [c]: k(k({}, b), H) }, n) : {}, V = f(C) ? this._toVariables({ [c]: k(k({}, C), P) }, n) : {}, L = f(x) ? this._toVariables({ [c]: k(k({}, x), I) }, n) : {}, [z, Y] = [(i = M.declarations) != null ? i : "", M.tokens || []], [W, Z] = [(s = V.declarations) != null ? s : "", V.tokens || []], [q, _] = [(u = L.declarations) != null ? u : "", L.tokens || []], O = this.transformCSS(c, `${z}${W}`, "light", "variable", n, a, l, o), K = this.transformCSS(c, q, "dark", "variable", n, a, l, o);
    d = `${O}${K}`, p = [.../* @__PURE__ */ new Set([...Y, ...Z, ..._])], m = w(v, { dt: U });
  }
  return { css: d, tokens: p, style: m };
}, getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: a }) {
  var l;
  let { preset: o, options: i } = t, s = (l = o?.components) == null ? void 0 : l[e];
  return this.getPreset({ name: e, preset: s, options: i, params: n, set: r, defaults: a });
}, getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: a }) {
  var l, o;
  let i = e.replace("-directive", ""), { preset: s, options: u } = t, d = ((l = s?.components) == null ? void 0 : l[i]) || ((o = s?.directives) == null ? void 0 : o[i]);
  return this.getPreset({ name: i, preset: d, options: u, params: n, set: r, defaults: a });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
}, getColorSchemeOption(e, t) {
  var n;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
}, getLayerOrder(e, t = {}, n, r) {
  let { cssLayer: a } = t;
  return a ? `@layer ${w(a.order || a.name || "primeui", n)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: a, defaults: l }) {
  let o = this.getCommon({ name: e, theme: t, params: n, set: a, defaults: l }), i = Object.entries(r).reduce((s, [u, d]) => s.push(`${u}="${d}"`) && s, []).join(" ");
  return Object.entries(o || {}).reduce((s, [u, d]) => {
    if (T(d) && Object.hasOwn(d, "css")) {
      let p = J(d.css), m = `${u}-variables`;
      s.push(`<style type="text/css" data-primevue-style-id="${m}" ${i}>${p}</style>`);
    }
    return s;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: a, defaults: l }) {
  var o;
  let i = { name: e, theme: t, params: n, set: a, defaults: l }, s = (o = e.includes("-directive") ? this.getPresetD(i) : this.getPresetC(i)) == null ? void 0 : o.css, u = Object.entries(r).reduce((d, [p, m]) => d.push(`${p}="${m}"`) && d, []).join(" ");
  return s ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${J(s)}</style>` : "";
}, createTokens(e = {}, t, n = "", r = "", a = {}) {
  let l = function(i, s = {}, u = []) {
    if (u.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: i, path: this.path, paths: s, value: void 0 };
    u.push(this.path), s.name = this.path, s.binding || (s.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && ee.test(this.value)) {
      let p = this.value.trim().replace(ee, (m) => {
        var c;
        let h = m.slice(1, -1), g = this.tokens[h];
        if (!g) return console.warn(`Token not found for path: ${h}`), "__UNRESOLVED__";
        let y = g.computed(i, s, u);
        return Array.isArray(y) && y.length === 2 ? `light-dark(${y[0].value},${y[1].value})` : (c = y?.value) != null ? c : "__UNRESOLVED__";
      });
      d = ze.test(p.replace(We, "0")) ? `calc(${p})` : p;
    }
    return pe(s.binding) && delete s.binding, u.pop(), { colorScheme: i, path: this.path, paths: s, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, o = (i, s, u) => {
    Object.entries(i).forEach(([d, p]) => {
      let m = F(d, t.variable.excludedKeyRegex) ? s : s ? `${s}.${we(d)}` : we(d), c = u ? `${u}.${d}` : d;
      T(p) ? o(p, m, c) : (a[m] || (a[m] = { paths: [], computed: (h, g = {}, y = []) => {
        if (a[m].paths.length === 1) return a[m].paths[0].computed(a[m].paths[0].scheme, g.binding, y);
        if (h && h !== "none") for (let v = 0; v < a[m].paths.length; v++) {
          let b = a[m].paths[v];
          if (b.scheme === h) return b.computed(h, g.binding, y);
        }
        return a[m].paths.map((v) => v.computed(v.scheme, g[v.scheme], y));
      } }), a[m].paths.push({ path: c, value: p, scheme: c.includes("colorScheme.light") ? "light" : c.includes("colorScheme.dark") ? "dark" : "none", computed: l, tokens: a }));
    });
  };
  return o(e, n, r), a;
}, getTokenValue(e, t, n) {
  var r;
  let a = ((i) => i.split(".").filter((s) => !F(s.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), l = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, o = [(r = e[a]) == null ? void 0 : r.computed(l)].flat().filter((i) => i);
  return o.length === 1 ? o[0].value : o.reduce((i = {}, s) => {
    let u = s, { colorScheme: d } = u, p = j(u, ["colorScheme"]);
    return i[d] = p, i;
  }, void 0);
}, getSelectorRule(e, t, n, r) {
  return n === "class" || n === "attr" ? Q(f(t) ? `${e}${t},${e} ${t}` : e, r) : Q(e, Q(t ?? ":root,:host", r));
}, transformCSS(e, t, n, r, a = {}, l, o, i) {
  if (f(t)) {
    let { cssLayer: s } = a;
    if (r !== "style") {
      let u = this.getColorSchemeOption(a, o);
      t = n === "dark" ? u.reduce((d, { type: p, selector: m }) => (f(m) && (d += m.includes("[CSS]") ? m.replace("[CSS]", t) : this.getSelectorRule(m, i, p, t)), d), "") : Q(i ?? ":root,:host", t);
    }
    if (s) {
      let u = { name: "primeui" };
      T(s) && (u.name = w(s.name, { name: e, type: r })), f(u.name) && (t = Q(`@layer ${u.name}`, t), l?.layerNames(u.name));
    }
    return t;
  }
  return "";
} }, S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = ue(k({}, t), { options: k(k({}, this.defaults.options), t.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), B.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = ue(k({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.clearLoadedStyleNames(), B.emit("preset:change", e), B.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = ue(k({}, this.theme), { options: e }), this.clearLoadedStyleNames(), B.emit("options:change", e), B.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return $.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t) {
  return $.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t) {
  let n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPresetC(n);
}, getDirective(e = "", t) {
  let n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPresetD(n);
}, getCustomPreset(e = "", t, n, r) {
  let a = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPreset(a);
}, getLayerOrderCSS(e = "") {
  return $.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t, n = "style", r) {
  return $.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t, n = {}) {
  return $.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t, n = {}) {
  return $.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t), B.emit(`theme:${t}:load`, e), !this._loadingStyles.size && B.emit("theme:load"));
} }, It = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;
function te(e) {
  "@babel/helpers - typeof";
  return te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, te(e);
}
function _e(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _e(Object(n), !0).forEach(function(r) {
      Mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mt(e, t, n) {
  return (t = Vt(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vt(e) {
  var t = zt(e, "string");
  return te(t) == "symbol" ? t : t + "";
}
function zt(e, t) {
  if (te(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (te(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  ye() && ye().components ? dt(e) : t ? e() : ct(e);
}
var Kt = 0;
function Bt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = le(!1), r = le(e), a = le(null), l = jt() ? window.document : void 0, o = t.document, i = o === void 0 ? l : o, s = t.immediate, u = s === void 0 ? !0 : s, d = t.manual, p = d === void 0 ? !1 : d, m = t.name, c = m === void 0 ? "style_".concat(++Kt) : m, h = t.id, g = h === void 0 ? void 0 : h, y = t.media, v = y === void 0 ? void 0 : y, b = t.nonce, A = b === void 0 ? void 0 : b, R = t.first, H = R === void 0 ? !1 : R, D = t.onMounted, x = D === void 0 ? void 0 : D, C = t.onUpdated, N = C === void 0 ? void 0 : C, I = t.onLoad, P = I === void 0 ? void 0 : I, M = t.props, V = M === void 0 ? {} : M, L = function() {
  }, z = function(Z) {
    var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (i) {
      var _ = je(je({}, V), q), O = _.name || c, K = _.id || g, re = _.nonce || A;
      a.value = i.querySelector('style[data-primevue-style-id="'.concat(O, '"]')) || i.getElementById(K) || i.createElement("style"), a.value.isConnected || (r.value = Z || e, se(a.value, {
        type: "text/css",
        id: K,
        media: v,
        nonce: re
      }), H ? i.head.prepend(a.value) : i.head.appendChild(a.value), xt(a.value, "data-primevue-style-id", O), se(a.value, _), a.value.onload = function(G) {
        return P?.(G, {
          name: O
        });
      }, x?.(O)), !n.value && (L = mt(r, function(G) {
        a.value.textContent = G, N?.(O);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, Y = function() {
    !i || !n.value || (L(), wt(a.value) && i.head.removeChild(a.value), n.value = !1, a.value = null);
  };
  return u && !p && Wt(z), {
    id: g,
    name: c,
    el: a,
    css: r,
    unload: Y,
    load: z,
    isLoaded: ut(n)
  };
}
function ne(e) {
  "@babel/helpers - typeof";
  return ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ne(e);
}
var xe, Ce, Ne, Pe;
function Le(e, t) {
  return Yt(e) || Ht(e, t) || Ut(e, t) || Ft();
}
function Ft() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ut(e, t) {
  if (e) {
    if (typeof e == "string") return Te(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Te(e, t) : void 0;
  }
}
function Te(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ht(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, l, o, i = [], s = !0, u = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(s = (r = l.call(n)).done) && (i.push(r.value), i.length !== t); s = !0) ;
    } catch (d) {
      u = !0, a = d;
    } finally {
      try {
        if (!s && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return i;
  }
}
function Yt(e) {
  if (Array.isArray(e)) return e;
}
function Ee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ee(Object(n), !0).forEach(function(r) {
      Zt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zt(e, t, n) {
  return (t = qt(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qt(e) {
  var t = Gt(e, "string");
  return ne(t) == "symbol" ? t : t + "";
}
function Gt(e, t) {
  if (ne(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ne(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oe(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Qt = function(t) {
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
}, Xt = {}, Jt = {}, On = {
  name: "base",
  css: Qt,
  style: It,
  classes: Xt,
  inlineStyles: Jt,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(l) {
      return l;
    }, a = r(ae(xe || (xe = oe(["", ""])), t));
    return f(a) ? Bt(J(a), de({
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
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return S.transformCSS(n.name || t.name, "".concat(a).concat(ae(Ce || (Ce = oe(["", ""])), r)));
    });
  },
  getCommonTheme: function(t) {
    return S.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return S.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return S.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return S.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return S.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = w(this.css, {
        dt: U
      }) || "", a = J(ae(Ne || (Ne = oe(["", "", ""])), r, t)), l = Object.entries(n).reduce(function(o, i) {
        var s = Le(i, 2), u = s[0], d = s[1];
        return o.push("".concat(u, '="').concat(d, '"')) && o;
      }, []).join(" ");
      return f(a) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(l, ">").concat(a, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return S.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [S.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var a = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), l = ae(Pe || (Pe = oe(["", ""])), w(this.style, {
        dt: U
      })), o = J(S.transformCSS(a, l)), i = Object.entries(n).reduce(function(s, u) {
        var d = Le(u, 2), p = d[0], m = d[1];
        return s.push("".concat(p, '="').concat(m, '"')) && s;
      }, []).join(" ");
      f(o) && r.push('<style type="text/css" data-primevue-style-id="'.concat(a, '" ').concat(i, ">").concat(o, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return de(de({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
}, wn = De();
export {
  On as B,
  tn as C,
  bt as F,
  nn as H,
  Sn as I,
  gn as K,
  yn as L,
  B as N,
  wn as P,
  pn as Q,
  bn as R,
  S,
  fn as T,
  dn as U,
  Se as W,
  $n as Y,
  xt as _,
  E as a,
  X as b,
  gt as c,
  $e as d,
  vn as e,
  mn as f,
  be as g,
  hn as h,
  T as i,
  on as j,
  an as k,
  pe as l,
  w as m,
  rn as n,
  sn as o,
  ln as p,
  kn as r,
  f as s,
  jt as t,
  un as v,
  cn as z
};
