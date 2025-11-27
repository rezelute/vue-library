import { ref as le, readonly as dt, getCurrentInstance as ge, onMounted as mt, nextTick as ft, watch as pt } from "vue";
var ht = Object.defineProperty, ve = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable, be = (e, t, n) => t in e ? ht(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vt = (e, t) => {
  for (var n in t || (t = {})) yt.call(t, n) && be(e, n, t[n]);
  if (ve) for (var n of ve(t)) gt.call(t, n) && be(e, n, t[n]);
  return e;
};
function pe(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function bt(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function y(e) {
  return !pe(e);
}
function T(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Ae(e = {}, t = {}) {
  let n = vt({}, e);
  return Object.keys(t).forEach((r) => {
    let o = r;
    T(t[o]) && o in e && T(e[o]) ? n[o] = Ae(e[o], t[o]) : n[o] = t[o];
  }), n;
}
function St(...e) {
  return e.reduce((t, n, r) => r === 0 ? n : Ae(t, n), {});
}
function fn(e, t) {
  let n = -1;
  if (y(e)) try {
    n = e.findLastIndex(t);
  } catch {
    n = e.lastIndexOf([...e].reverse().find(t));
  }
  return n;
}
function k(e, ...t) {
  return bt(e) ? e(...t) : e;
}
function E(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function Se(e) {
  return E(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function $t(e, t = "", n = {}) {
  let r = Se(t).split("."), o = r.shift();
  if (o) {
    if (T(e)) {
      let l = Object.keys(e).find((a) => Se(a) === o) || "";
      return $t(k(e[l], n), r.join("."), n);
    }
    return;
  }
  return k(e, n);
}
function pn(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function wt(e) {
  return y(e) && !isNaN(e);
}
function hn(e = "") {
  return y(e) && e.length === 1 && !!e.match(/\S| /);
}
function K(e, t) {
  if (t) {
    let n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function yn(...e) {
  return St(...e);
}
function J(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function gn(e) {
  return E(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Re(e) {
  return E(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function Ve() {
  let e = /* @__PURE__ */ new Map();
  return { on(t, n) {
    let r = e.get(t);
    return r ? r.push(n) : r = [n], e.set(t, r), this;
  }, off(t, n) {
    let r = e.get(t);
    return r && r.splice(r.indexOf(n) >>> 0, 1), this;
  }, emit(t, n) {
    let r = e.get(t);
    r && r.forEach((o) => {
      o(n);
    });
  }, clear() {
    e.clear();
  } };
}
function Ot(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function vn(e, t) {
  if (e && t) {
    let n = (r) => {
      Ot(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function bn(e, t) {
  if (e && t) {
    let n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function $e(e) {
  for (let t of document?.styleSheets) try {
    for (let n of t?.cssRules) for (let r of n?.style) if (e.test(r)) return { name: r, value: n.style.getPropertyValue(r).trim() };
  } catch {
  }
  return null;
}
function kt(e) {
  let t = { width: 0, height: 0 };
  if (e) {
    let [n, r] = [e.style.visibility, e.style.display], o = e.getBoundingClientRect();
    e.style.visibility = "hidden", e.style.display = "block", t.width = o.width || e.offsetWidth, t.height = o.height || e.offsetHeight, e.style.display = r, e.style.visibility = n;
  }
  return t;
}
function Me() {
  let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], o = e.innerWidth || n.clientWidth || r.clientWidth, l = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: o, height: l };
}
function me(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function _t() {
  let e = document.documentElement;
  return (window.pageXOffset || me(e)) - (e.clientLeft || 0);
}
function jt() {
  let e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function Ct(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function Sn(e, t, n = !0) {
  var r, o, l, a;
  if (e) {
    let s = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : kt(e), i = s.height, u = s.width, c = t.offsetHeight, f = t.offsetWidth, d = t.getBoundingClientRect(), m = jt(), p = _t(), g = Me(), h, v, b = "top";
    d.top + c + i > g.height ? (h = d.top + m - i, b = "bottom", h < 0 && (h = m)) : h = c + d.top + m, d.left + u > g.width ? v = Math.max(0, d.left + p + f - u) : v = d.left + p, Ct(e) ? e.style.insetInlineEnd = v + "px" : e.style.insetInlineStart = v + "px", e.style.top = h + "px", e.style.transformOrigin = b, n && (e.style.marginTop = b === "bottom" ? `calc(${(o = (r = $e(/-anchor-gutter$/)) == null ? void 0 : r.value) != null ? o : "2px"} * -1)` : (a = (l = $e(/-anchor-gutter$/)) == null ? void 0 : l.value) != null ? a : "");
  }
}
function xt(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function Pt(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function De(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Lt(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && De(e));
}
function se(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
var ue;
function we(e) {
  {
    if (ue != null) return ue;
    let t = document.createElement("div");
    xt(t, { width: "100px", height: "100px", overflow: "scroll", position: "absolute", top: "-9999px" }), document.body.appendChild(t);
    let n = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), ue = n, n;
  }
}
function ae(e, t = {}) {
  if (se(e)) {
    let n = (r, o) => {
      var l, a;
      let s = (l = e?.$attrs) != null && l[r] ? [(a = e?.$attrs) == null ? void 0 : a[r]] : [];
      return [o].flat().reduce((i, u) => {
        if (u != null) {
          let c = typeof u;
          if (c === "string" || c === "number") i.push(u);
          else if (c === "object") {
            let f = Array.isArray(u) ? n(r, u) : Object.entries(u).map(([d, m]) => r === "style" && (m || m === 0) ? `${d.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${m}` : m ? d : void 0);
            i = f.length ? i.concat(f.filter((d) => !!d)) : i;
          }
        }
        return i;
      }, s);
    };
    Object.entries(t).forEach(([r, o]) => {
      if (o != null) {
        let l = r.match(/^on(.+)/);
        l ? e.addEventListener(l[1].toLowerCase(), o) : r === "p-bind" || r === "pBind" ? ae(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function $n(e, t = {}, ...n) {
  {
    let r = document.createElement(e);
    return ae(r, t), r.append(...n), r;
  }
}
function Nt(e, t) {
  return se(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function wn(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function On(e, t) {
  if (se(e)) {
    let n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function kn(e) {
  if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function Tt(e) {
  if (e) {
    let [t, n] = [e.style.visibility, e.style.display];
    e.style.visibility = "hidden", e.style.display = "block";
    let r = e.offsetHeight;
    return e.style.display = n, e.style.visibility = t, r;
  }
  return 0;
}
function Et(e) {
  if (e) {
    let [t, n] = [e.style.visibility, e.style.display];
    e.style.visibility = "hidden", e.style.display = "block";
    let r = e.offsetWidth;
    return e.style.display = n, e.style.visibility = t, r;
  }
  return 0;
}
function At(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return { top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: t.left + (window.pageXOffset || me(document.documentElement) || me(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function Rt(e, t) {
  return e ? e.offsetHeight : 0;
}
function We(e, t = []) {
  let n = De(e);
  return n === null ? t : We(n, t.concat([n]));
}
function _n(e) {
  let t = [];
  if (e) {
    let n = We(e), r = /(auto|scroll)/, o = (l) => {
      try {
        let a = window.getComputedStyle(l, null);
        return r.test(a.getPropertyValue("overflow")) || r.test(a.getPropertyValue("overflowX")) || r.test(a.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (let l of n) {
      let a = l.nodeType === 1 && l.dataset.scrollselectors;
      if (a) {
        let s = a.split(",");
        for (let i of s) {
          let u = Nt(l, i);
          u && o(u) && t.push(u);
        }
      }
      l.nodeType !== 9 && o(l) && t.push(l);
    }
  }
  return t;
}
function jn(e) {
  if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Vt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Cn() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function xn(e, t) {
  var n, r;
  if (e) {
    let o = e.parentElement, l = At(o), a = Me(), s = e.offsetParent ? e.offsetWidth : Et(e), i = e.offsetParent ? e.offsetHeight : Tt(e), u = Pt((n = o?.children) == null ? void 0 : n[0]), c = Rt((r = o?.children) == null ? void 0 : r[0]), f = "", d = "";
    l.left + u + s > a.width - we() ? l.left < s ? t % 2 === 1 ? f = l.left ? "-" + l.left + "px" : "100%" : t % 2 === 0 && (f = a.width - s - we() + "px") : f = "-100%" : f = "100%", e.getBoundingClientRect().top + c + i > a.height ? d = `-${i - c}px` : d = "0px", e.style.top = d, e.style.insetInlineStart = f;
  }
}
function Mt(e, t = "", n) {
  se(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
var Dt = Object.defineProperty, Wt = Object.defineProperties, zt = Object.getOwnPropertyDescriptors, ie = Object.getOwnPropertySymbols, ze = Object.prototype.hasOwnProperty, Ie = Object.prototype.propertyIsEnumerable, Oe = (e, t, n) => t in e ? Dt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, w = (e, t) => {
  for (var n in t || (t = {})) ze.call(t, n) && Oe(e, n, t[n]);
  if (ie) for (var n of ie(t)) Ie.call(t, n) && Oe(e, n, t[n]);
  return e;
}, ce = (e, t) => Wt(e, zt(t)), j = (e, t) => {
  var n = {};
  for (var r in e) ze.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ie) for (var r of ie(e)) t.indexOf(r) < 0 && Ie.call(e, r) && (n[r] = e[r]);
  return n;
}, It = Ve(), H = It, Q = /{([^}]*)}/g, Be = /(\d+\s+[\+\-\*\/]\s+\d+)/g, He = /var\([^)]+\)/g;
function ke(e) {
  return E(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function Bt(e) {
  return T(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Ht(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function fe(e = "", t = "") {
  return Ht(`${E(e, !1) && E(t, !1) ? `${e}-` : e}${t}`);
}
function Ke(e = "", t = "") {
  return `--${fe(e, t)}`;
}
function Kt(e = "") {
  let t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Ue(e, t = "", n = "", r = [], o) {
  if (E(e)) {
    let l = e.trim();
    if (Kt(l)) return;
    if (K(l, Q)) {
      let a = l.replaceAll(Q, (s) => {
        let i = s.replace(/{|}/g, "").split(".").filter((u) => !r.some((c) => K(u, c)));
        return `var(${Ke(n, Re(i.join("-")))}${y(o) ? `, ${o}` : ""})`;
      });
      return K(a.replace(He, "0"), Be) ? `calc(${a})` : a;
    }
    return l;
  } else if (wt(e)) return e;
}
function Ut(e, t, n) {
  E(t, !1) && e.push(`${t}:${n};`);
}
function G(e, t) {
  return e ? `${e}{${t}}` : "";
}
function Fe(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function n(a, s) {
    let i = [], u = 0, c = "", f = null, d = 0;
    for (; u <= a.length; ) {
      let m = a[u];
      if ((m === '"' || m === "'" || m === "`") && a[u - 1] !== "\\" && (f = f === m ? null : m), !f && (m === "(" && d++, m === ")" && d--, (m === "," || u === a.length) && d === 0)) {
        let p = c.trim();
        p.startsWith("dt(") ? i.push(Fe(p, s)) : i.push(r(p)), c = "", u++;
        continue;
      }
      m !== void 0 && (c += m), u++;
    }
    return i;
  }
  function r(a) {
    let s = a[0];
    if ((s === '"' || s === "'" || s === "`") && a[a.length - 1] === s) return a.slice(1, -1);
    let i = Number(a);
    return isNaN(i) ? a : i;
  }
  let o = [], l = [];
  for (let a = 0; a < e.length; a++) if (e[a] === "d" && e.slice(a, a + 3) === "dt(") l.push(a), a += 2;
  else if (e[a] === ")" && l.length > 0) {
    let s = l.pop();
    l.length === 0 && o.push([s, a]);
  }
  if (!o.length) return e;
  for (let a = o.length - 1; a >= 0; a--) {
    let [s, i] = o[a], u = e.slice(s + 3, i), c = n(u, t), f = t(...c);
    e = e.slice(0, s) + f + e.slice(i + 1);
  }
  return e;
}
var U = (...e) => Ft(S.getTheme(), ...e), Ft = (e = {}, t, n, r) => {
  if (t) {
    let { variable: o, options: l } = S.defaults || {}, { prefix: a, transform: s } = e?.options || l || {}, i = K(t, Q) ? t : `{${t}}`;
    return r === "value" || pe(r) && s === "strict" ? S.getTokenValue(t) : Ue(i, void 0, a, [o.excludedKeyRegex], n);
  }
  return "";
};
function re(e, ...t) {
  if (e instanceof Array) {
    let n = e.reduce((r, o, l) => {
      var a;
      return r + o + ((a = k(t[l], { dt: U })) != null ? a : "");
    }, "");
    return Fe(n, U);
  }
  return k(e, { dt: U });
}
function Yt(e, t = {}) {
  let n = S.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: l = n.excludedKeyRegex } = t, a = [], s = [], i = [{ node: e, path: r }];
  for (; i.length; ) {
    let { node: c, path: f } = i.pop();
    for (let d in c) {
      let m = c[d], p = Bt(m), g = K(d, l) ? fe(f) : fe(f, Re(d));
      if (T(p)) i.push({ node: p, path: g });
      else {
        let h = Ke(g), v = Ue(p, g, r, [l]);
        Ut(s, h, v);
        let b = g;
        r && b.startsWith(r + "-") && (b = b.slice(r.length + 1)), a.push(b.replace(/-/g, "."));
      }
    }
  }
  let u = s.join("");
  return { value: s, tokens: a, declarations: u, css: G(o, u) };
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
    return (r = t.map((o) => o.resolve(n)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(n);
  });
} }, _toVariables(e, t) {
  return Yt(e, { prefix: t?.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var l, a, s, i, u, c, f;
  let { preset: d, options: m } = t, p, g, h, v, b, A, R;
  if (y(d) && m.transform !== "strict") {
    let { primitive: F, semantic: V, extend: C } = d, x = V || {}, { colorScheme: P } = x, M = j(x, ["colorScheme"]), L = C || {}, { colorScheme: D } = L, W = j(L, ["colorScheme"]), N = P || {}, { dark: z } = N, Y = j(N, ["dark"]), I = D || {}, { dark: Z } = I, X = j(I, ["dark"]), _ = y(F) ? this._toVariables({ primitive: F }, m) : {}, O = y(M) ? this._toVariables({ semantic: M }, m) : {}, B = y(Y) ? this._toVariables({ light: Y }, m) : {}, ne = y(z) ? this._toVariables({ dark: z }, m) : {}, q = y(W) ? this._toVariables({ semantic: W }, m) : {}, he = y(X) ? this._toVariables({ light: X }, m) : {}, ye = y(Z) ? this._toVariables({ dark: Z }, m) : {}, [Ye, Ze] = [(l = _.declarations) != null ? l : "", _.tokens], [Xe, qe] = [(a = O.declarations) != null ? a : "", O.tokens || []], [Ge, Je] = [(s = B.declarations) != null ? s : "", B.tokens || []], [Qe, et] = [(i = ne.declarations) != null ? i : "", ne.tokens || []], [tt, nt] = [(u = q.declarations) != null ? u : "", q.tokens || []], [rt, ot] = [(c = he.declarations) != null ? c : "", he.tokens || []], [at, it] = [(f = ye.declarations) != null ? f : "", ye.tokens || []];
    p = this.transformCSS(e, Ye, "light", "variable", m, r, o), g = Ze;
    let st = this.transformCSS(e, `${Xe}${Ge}`, "light", "variable", m, r, o), lt = this.transformCSS(e, `${Qe}`, "dark", "variable", m, r, o);
    h = `${st}${lt}`, v = [.../* @__PURE__ */ new Set([...qe, ...Je, ...et])];
    let ut = this.transformCSS(e, `${tt}${rt}color-scheme:light`, "light", "variable", m, r, o), ct = this.transformCSS(e, `${at}color-scheme:dark`, "dark", "variable", m, r, o);
    b = `${ut}${ct}`, A = [.../* @__PURE__ */ new Set([...nt, ...ot, ...it])], R = k(d.css, { dt: U });
  }
  return { primitive: { css: p, tokens: g }, semantic: { css: h, tokens: v }, global: { css: b, tokens: A }, style: R };
}, getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: l, selector: a }) {
  var s, i, u;
  let c, f, d;
  if (y(t) && n.transform !== "strict") {
    let m = e.replace("-directive", ""), p = t, { colorScheme: g, extend: h, css: v } = p, b = j(p, ["colorScheme", "extend", "css"]), A = h || {}, { colorScheme: R } = A, F = j(A, ["colorScheme"]), V = g || {}, { dark: C } = V, x = j(V, ["dark"]), P = R || {}, { dark: M } = P, L = j(P, ["dark"]), D = y(b) ? this._toVariables({ [m]: w(w({}, b), F) }, n) : {}, W = y(x) ? this._toVariables({ [m]: w(w({}, x), L) }, n) : {}, N = y(C) ? this._toVariables({ [m]: w(w({}, C), M) }, n) : {}, [z, Y] = [(s = D.declarations) != null ? s : "", D.tokens || []], [I, Z] = [(i = W.declarations) != null ? i : "", W.tokens || []], [X, _] = [(u = N.declarations) != null ? u : "", N.tokens || []], O = this.transformCSS(m, `${z}${I}`, "light", "variable", n, o, l, a), B = this.transformCSS(m, X, "dark", "variable", n, o, l, a);
    c = `${O}${B}`, f = [.../* @__PURE__ */ new Set([...Y, ...Z, ..._])], d = k(v, { dt: U });
  }
  return { css: c, tokens: f, style: d };
}, getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var l;
  let { preset: a, options: s } = t, i = (l = a?.components) == null ? void 0 : l[e];
  return this.getPreset({ name: e, preset: i, options: s, params: n, set: r, defaults: o });
}, getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var l, a;
  let s = e.replace("-directive", ""), { preset: i, options: u } = t, c = ((l = i?.components) == null ? void 0 : l[s]) || ((a = i?.directives) == null ? void 0 : a[s]);
  return this.getPreset({ name: s, preset: c, options: u, params: n, set: r, defaults: o });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
}, getColorSchemeOption(e, t) {
  var n;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
}, getLayerOrder(e, t = {}, n, r) {
  let { cssLayer: o } = t;
  return o ? `@layer ${k(o.order || o.name || "primeui", n)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: l }) {
  let a = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: l }), s = Object.entries(r).reduce((i, [u, c]) => i.push(`${u}="${c}"`) && i, []).join(" ");
  return Object.entries(a || {}).reduce((i, [u, c]) => {
    if (T(c) && Object.hasOwn(c, "css")) {
      let f = J(c.css), d = `${u}-variables`;
      i.push(`<style type="text/css" data-primevue-style-id="${d}" ${s}>${f}</style>`);
    }
    return i;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: l }) {
  var a;
  let s = { name: e, theme: t, params: n, set: o, defaults: l }, i = (a = e.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : a.css, u = Object.entries(r).reduce((c, [f, d]) => c.push(`${f}="${d}"`) && c, []).join(" ");
  return i ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${J(i)}</style>` : "";
}, createTokens(e = {}, t, n = "", r = "", o = {}) {
  let l = function(s, i = {}, u = []) {
    if (u.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: i, value: void 0 };
    u.push(this.path), i.name = this.path, i.binding || (i.binding = {});
    let c = this.value;
    if (typeof this.value == "string" && Q.test(this.value)) {
      let f = this.value.trim().replace(Q, (d) => {
        var m;
        let p = d.slice(1, -1), g = this.tokens[p];
        if (!g) return console.warn(`Token not found for path: ${p}`), "__UNRESOLVED__";
        let h = g.computed(s, i, u);
        return Array.isArray(h) && h.length === 2 ? `light-dark(${h[0].value},${h[1].value})` : (m = h?.value) != null ? m : "__UNRESOLVED__";
      });
      c = Be.test(f.replace(He, "0")) ? `calc(${f})` : f;
    }
    return pe(i.binding) && delete i.binding, u.pop(), { colorScheme: s, path: this.path, paths: i, value: c.includes("__UNRESOLVED__") ? void 0 : c };
  }, a = (s, i, u) => {
    Object.entries(s).forEach(([c, f]) => {
      let d = K(c, t.variable.excludedKeyRegex) ? i : i ? `${i}.${ke(c)}` : ke(c), m = u ? `${u}.${c}` : c;
      T(f) ? a(f, d, m) : (o[d] || (o[d] = { paths: [], computed: (p, g = {}, h = []) => {
        if (o[d].paths.length === 1) return o[d].paths[0].computed(o[d].paths[0].scheme, g.binding, h);
        if (p && p !== "none") for (let v = 0; v < o[d].paths.length; v++) {
          let b = o[d].paths[v];
          if (b.scheme === p) return b.computed(p, g.binding, h);
        }
        return o[d].paths.map((v) => v.computed(v.scheme, g[v.scheme], h));
      } }), o[d].paths.push({ path: m, value: f, scheme: m.includes("colorScheme.light") ? "light" : m.includes("colorScheme.dark") ? "dark" : "none", computed: l, tokens: o }));
    });
  };
  return a(e, n, r), o;
}, getTokenValue(e, t, n) {
  var r;
  let o = ((s) => s.split(".").filter((i) => !K(i.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), l = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(r = e[o]) == null ? void 0 : r.computed(l)].flat().filter((s) => s);
  return a.length === 1 ? a[0].value : a.reduce((s = {}, i) => {
    let u = i, { colorScheme: c } = u, f = j(u, ["colorScheme"]);
    return s[c] = f, s;
  }, void 0);
}, getSelectorRule(e, t, n, r) {
  return n === "class" || n === "attr" ? G(y(t) ? `${e}${t},${e} ${t}` : e, r) : G(e, G(t ?? ":root,:host", r));
}, transformCSS(e, t, n, r, o = {}, l, a, s) {
  if (y(t)) {
    let { cssLayer: i } = o;
    if (r !== "style") {
      let u = this.getColorSchemeOption(o, a);
      t = n === "dark" ? u.reduce((c, { type: f, selector: d }) => (y(d) && (c += d.includes("[CSS]") ? d.replace("[CSS]", t) : this.getSelectorRule(d, s, f, t)), c), "") : G(s ?? ":root,:host", t);
    }
    if (i) {
      let u = { name: "primeui" };
      T(i) && (u.name = k(i.name, { name: e, type: r })), y(u.name) && (t = G(`@layer ${u.name}`, t), l?.layerNames(u.name));
    }
    return t;
  }
  return "";
} }, S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = ce(w({}, t), { options: w(w({}, this.defaults.options), t.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: e }), H.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = ce(w({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.clearLoadedStyleNames(), H.emit("preset:change", e), H.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = ce(w({}, this.theme), { options: e }), this.clearLoadedStyleNames(), H.emit("options:change", e), H.emit("theme:change", this.theme);
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
  let o = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPreset(o);
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
  this._loadingStyles.size && (this._loadingStyles.delete(t), H.emit(`theme:${t}:load`, e), !this._loadingStyles.size && H.emit("theme:load"));
} }, Zt = `
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
function ee(e) {
  "@babel/helpers - typeof";
  return ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ee(e);
}
function _e(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _e(Object(n), !0).forEach(function(r) {
      Xt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xt(e, t, n) {
  return (t = qt(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qt(e) {
  var t = Gt(e, "string");
  return ee(t) == "symbol" ? t : t + "";
}
function Gt(e, t) {
  if (ee(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ee(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  ge() && ge().components ? mt(e) : t ? e() : ft(e);
}
var Qt = 0;
function en(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = le(!1), r = le(e), o = le(null), l = Vt() ? window.document : void 0, a = t.document, s = a === void 0 ? l : a, i = t.immediate, u = i === void 0 ? !0 : i, c = t.manual, f = c === void 0 ? !1 : c, d = t.name, m = d === void 0 ? "style_".concat(++Qt) : d, p = t.id, g = p === void 0 ? void 0 : p, h = t.media, v = h === void 0 ? void 0 : h, b = t.nonce, A = b === void 0 ? void 0 : b, R = t.first, F = R === void 0 ? !1 : R, V = t.onMounted, C = V === void 0 ? void 0 : V, x = t.onUpdated, P = x === void 0 ? void 0 : x, M = t.onLoad, L = M === void 0 ? void 0 : M, D = t.props, W = D === void 0 ? {} : D, N = function() {
  }, z = function(Z) {
    var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var _ = je(je({}, W), X), O = _.name || m, B = _.id || g, ne = _.nonce || A;
      o.value = s.querySelector('style[data-primevue-style-id="'.concat(O, '"]')) || s.getElementById(B) || s.createElement("style"), o.value.isConnected || (r.value = Z || e, ae(o.value, {
        type: "text/css",
        id: B,
        media: v,
        nonce: ne
      }), F ? s.head.prepend(o.value) : s.head.appendChild(o.value), Mt(o.value, "data-primevue-style-id", O), ae(o.value, _), o.value.onload = function(q) {
        return L?.(q, {
          name: O
        });
      }, C?.(O)), !n.value && (N = pt(r, function(q) {
        o.value.textContent = q, P?.(O);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, Y = function() {
    !s || !n.value || (N(), Lt(o.value) && s.head.removeChild(o.value), n.value = !1, o.value = null);
  };
  return u && !f && Jt(z), {
    id: g,
    name: m,
    el: o,
    css: r,
    unload: Y,
    load: z,
    isLoaded: dt(n)
  };
}
function te(e) {
  "@babel/helpers - typeof";
  return te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, te(e);
}
var Ce, xe, Pe, Le;
function Ne(e, t) {
  return on(e) || rn(e, t) || nn(e, t) || tn();
}
function tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nn(e, t) {
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
function rn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, a, s = [], i = !0, u = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(i = (r = l.call(n)).done) && (s.push(r.value), s.length !== t); i = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!i && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function on(e) {
  if (Array.isArray(e)) return e;
}
function Ee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ee(Object(n), !0).forEach(function(r) {
      an(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function an(e, t, n) {
  return (t = sn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sn(e) {
  var t = ln(e, "string");
  return te(t) == "symbol" ? t : t + "";
}
function ln(e, t) {
  if (te(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (te(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oe(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var un = function(t) {
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
}, cn = {}, dn = {}, Pn = {
  name: "base",
  css: un,
  style: Zt,
  classes: cn,
  inlineStyles: dn,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(l) {
      return l;
    }, o = r(re(Ce || (Ce = oe(["", ""])), t));
    return y(o) ? en(J(o), de({
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
      return S.transformCSS(n.name || t.name, "".concat(o).concat(re(xe || (xe = oe(["", ""])), r)));
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
      var r = k(this.css, {
        dt: U
      }) || "", o = J(re(Pe || (Pe = oe(["", "", ""])), r, t)), l = Object.entries(n).reduce(function(a, s) {
        var i = Ne(s, 2), u = i[0], c = i[1];
        return a.push("".concat(u, '="').concat(c, '"')) && a;
      }, []).join(" ");
      return y(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(l, ">").concat(o, "</style>") : "";
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
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), l = re(Le || (Le = oe(["", ""])), k(this.style, {
        dt: U
      })), a = J(S.transformCSS(o, l)), s = Object.entries(n).reduce(function(i, u) {
        var c = Ne(u, 2), f = c[0], d = c[1];
        return i.push("".concat(f, '="').concat(d, '"')) && i;
      }, []).join(" ");
      y(a) && r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(s, ">").concat(a, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return de(de({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
}, Ln = Ve();
export {
  _n as A,
  Pn as B,
  pn as C,
  Sn as D,
  $t as F,
  yn as H,
  hn as J,
  At as K,
  fn as M,
  H as N,
  Ln as P,
  On as Q,
  jn as R,
  S,
  kn as T,
  $n as U,
  vn as W,
  Cn as Y,
  E as a,
  se as b,
  bt as c,
  bn as d,
  Rt as e,
  Ve as f,
  Se as g,
  xt as h,
  T as i,
  wn as j,
  xn as k,
  pe as l,
  k as m,
  gn as n,
  y as s,
  Vt as t,
  Pt as v,
  Nt as z
};
