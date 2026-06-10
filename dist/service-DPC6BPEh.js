import { getCurrentInstance as e, nextTick as t, onMounted as n, readonly as r, ref as i, watch as a } from "vue";
//#region node_modules/@primeuix/utils/dist/object/index.mjs
var o = Object.defineProperty, s = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable, u = (e, t, n) => t in e ? o(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, d = (e, t) => {
	for (var n in t ||= {}) c.call(t, n) && u(e, n, t[n]);
	if (s) for (var n of s(t)) l.call(t, n) && u(e, n, t[n]);
	return e;
};
function f(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function p(e) {
	return typeof e == "function" && "call" in e && "apply" in e;
}
function m(e) {
	return !f(e);
}
function h(e, t = !0) {
	return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function g(e = {}, t = {}) {
	let n = d({}, e);
	return Object.keys(t).forEach((r) => {
		let i = r;
		h(t[i]) && i in e && h(e[i]) ? n[i] = g(e[i], t[i]) : n[i] = t[i];
	}), n;
}
function _(...e) {
	return e.reduce((e, t, n) => n === 0 ? t : g(e, t), {});
}
function v(e, ...t) {
	return p(e) ? e(...t) : e;
}
function y(e, t = !0) {
	return typeof e == "string" && (t || e !== "");
}
function b(e) {
	return y(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function x(e, t = "", n = {}) {
	let r = b(t).split("."), i = r.shift();
	return i ? h(e) ? x(v(e[Object.keys(e).find((e) => b(e) === i) || ""], n), r.join("."), n) : void 0 : v(e, n);
}
function S(e, t = !0) {
	return Array.isArray(e) && (t || e.length !== 0);
}
function C(e) {
	return m(e) && !isNaN(e);
}
function w(e, t) {
	if (t) {
		let n = t.test(e);
		return t.lastIndex = 0, n;
	}
	return !1;
}
function T(...e) {
	return _(...e);
}
function E(e) {
	return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function D(e) {
	return y(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function O(e) {
	return y(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
//#endregion
//#region node_modules/@primeuix/utils/dist/eventbus/index.mjs
function k() {
	let e = /* @__PURE__ */ new Map();
	return {
		on(t, n) {
			let r = e.get(t);
			return r ? r.push(n) : r = [n], e.set(t, r), this;
		},
		off(t, n) {
			let r = e.get(t);
			return r && r.splice(r.indexOf(n) >>> 0, 1), this;
		},
		emit(t, n) {
			let r = e.get(t);
			r && r.forEach((e) => {
				e(n);
			});
		},
		clear() {
			e.clear();
		}
	};
}
//#endregion
//#region node_modules/@primeuix/utils/dist/dom/index.mjs
function A(e, t) {
	return e ? e.classList ? e.classList.contains(t) : RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function j(e, t) {
	if (e && t) {
		let n = (t) => {
			A(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t);
		};
		[t].flat().filter(Boolean).forEach((e) => e.split(" ").forEach(n));
	}
}
function M() {
	return window.innerWidth - document.documentElement.offsetWidth;
}
function N(e) {
	typeof e == "string" ? j(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.setProperty(e.variableName, M() + "px"), j(document.body, e?.className || "p-overflow-hidden"));
}
function P(e, t) {
	if (e && t) {
		let n = (t) => {
			e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		};
		[t].flat().filter(Boolean).forEach((e) => e.split(" ").forEach(n));
	}
}
function F(e) {
	typeof e == "string" ? P(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.removeProperty(e.variableName), P(document.body, e?.className || "p-overflow-hidden"));
}
function ee() {
	let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0];
	return {
		width: e.innerWidth || n.clientWidth || r.clientWidth,
		height: e.innerHeight || n.clientHeight || r.clientHeight
	};
}
function I(e) {
	return e ? Math.abs(e.scrollLeft) : 0;
}
function te(e, t) {
	e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([t, n]) => e.style[t] = n));
}
function ne(e, t) {
	if (e instanceof HTMLElement) {
		let n = e.offsetWidth;
		if (t) {
			let t = getComputedStyle(e);
			n += parseFloat(t.marginLeft) + parseFloat(t.marginRight);
		}
		return n;
	}
	return 0;
}
function re(e) {
	if (e) {
		let t = e.parentNode;
		return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
	}
	return null;
}
function ie(e) {
	return !!(e != null && e.nodeName && re(e));
}
function L(e) {
	return typeof Element < "u" ? e instanceof Element : typeof e == "object" && !!e && e.nodeType === 1 && typeof e.nodeName == "string";
}
function R(e, t = {}) {
	if (L(e)) {
		let n = (t, r) => {
			var i;
			let a = (i = e?.$attrs) != null && i[t] ? [e?.$attrs?.[t]] : [];
			return [r].flat().reduce((e, r) => {
				if (r != null) {
					let i = typeof r;
					if (i === "string" || i === "number") e.push(r);
					else if (i === "object") {
						let i = Array.isArray(r) ? n(t, r) : Object.entries(r).map(([e, n]) => t === "style" && (n || n === 0) ? `${e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${n}` : n ? e : void 0);
						e = i.length ? e.concat(i.filter((e) => !!e)) : e;
					}
				}
				return e;
			}, a);
		};
		Object.entries(t).forEach(([t, r]) => {
			if (r != null) {
				let i = t.match(/^on(.+)/);
				i ? e.addEventListener(i[1].toLowerCase(), r) : t === "p-bind" || t === "pBind" ? R(e, r) : (r = t === "class" ? [...new Set(n("class", r))].join(" ").trim() : t === "style" ? n("style", r).join(";").trim() : r, (e.$attrs = e.$attrs || {}) && (e.$attrs[t] = r), e.setAttribute(t, r));
			}
		});
	}
}
function ae(e, t = {}, ...n) {
	if (e) {
		let r = document.createElement(e);
		return R(r, t), r.append(...n), r;
	}
}
function oe(e, t) {
	return L(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function se(e, t) {
	return L(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function ce(e, t) {
	e && document.activeElement !== e && e.focus(t);
}
function le(e, t) {
	if (L(e)) {
		let n = e.getAttribute(t);
		return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
	}
}
function z(e, t = "") {
	let n = oe(e, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`), r = [];
	for (let e of n) getComputedStyle(e).display != "none" && getComputedStyle(e).visibility != "hidden" && r.push(e);
	return r;
}
function ue(e, t) {
	let n = z(e, t);
	return n.length > 0 ? n[0] : null;
}
function de(e) {
	if (e) {
		let t = e.offsetHeight, n = getComputedStyle(e);
		return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
	}
	return 0;
}
function fe(e, t) {
	let n = z(e, t);
	return n.length > 0 ? n[n.length - 1] : null;
}
function pe(e) {
	if (e) {
		let t = e.getBoundingClientRect();
		return {
			top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
			left: t.left + (window.pageXOffset || I(document.documentElement) || I(document.body) || 0)
		};
	}
	return {
		top: "auto",
		left: "auto"
	};
}
function me(e, t) {
	if (e) {
		let n = e.offsetHeight;
		if (t) {
			let t = getComputedStyle(e);
			n += parseFloat(t.marginTop) + parseFloat(t.marginBottom);
		}
		return n;
	}
	return 0;
}
function he(e) {
	if (e) {
		let t = e.offsetWidth, n = getComputedStyle(e);
		return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
	}
	return 0;
}
function ge() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _e(e, t = "") {
	return L(e) ? e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`) : !1;
}
function ve() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function ye(e, t = "", n) {
	L(e) && n != null && e.setAttribute(t, n);
}
//#endregion
//#region node_modules/@primeuix/styled/dist/index.mjs
var be = Object.defineProperty, xe = Object.defineProperties, Se = Object.getOwnPropertyDescriptors, B = Object.getOwnPropertySymbols, Ce = Object.prototype.hasOwnProperty, we = Object.prototype.propertyIsEnumerable, Te = (e, t, n) => t in e ? be(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, V = (e, t) => {
	for (var n in t ||= {}) Ce.call(t, n) && Te(e, n, t[n]);
	if (B) for (var n of B(t)) we.call(t, n) && Te(e, n, t[n]);
	return e;
}, H = (e, t) => xe(e, Se(t)), U = (e, t) => {
	var n = {};
	for (var r in e) Ce.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && B) for (var r of B(e)) t.indexOf(r) < 0 && we.call(e, r) && (n[r] = e[r]);
	return n;
}, W = k(), G = /{([^}]*)}/g, Ee = /(\d+\s+[\+\-\*\/]\s+\d+)/g, De = /var\([^)]+\)/g;
function Oe(e) {
	return y(e) ? e.replace(/[A-Z]/g, (e, t) => t === 0 ? e : "." + e.toLowerCase()).toLowerCase() : e;
}
function ke(e) {
	return h(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Ae(e) {
	return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function je(e = "", t = "") {
	return Ae(`${y(e, !1) && y(t, !1) ? `${e}-` : e}${t}`);
}
function Me(e = "", t = "") {
	return `--${je(e, t)}`;
}
function Ne(e = "") {
	return ((e.match(/{/g) || []).length + (e.match(/}/g) || []).length) % 2 != 0;
}
function Pe(e, t = "", n = "", r = [], i) {
	if (y(e)) {
		let t = e.trim();
		if (Ne(t)) return;
		if (w(t, G)) {
			let e = t.replaceAll(G, (e) => `var(${Me(n, O(e.replace(/{|}/g, "").split(".").filter((e) => !r.some((t) => w(e, t))).join("-")))}${m(i) ? `, ${i}` : ""})`);
			return w(e.replace(De, "0"), Ee) ? `calc(${e})` : e;
		}
		return t;
	} else if (C(e)) return e;
}
function Fe(e, t, n) {
	y(t, !1) && e.push(`${t}:${n};`);
}
function K(e, t) {
	return e ? `${e}{${t}}` : "";
}
function Ie(e, t) {
	if (e.indexOf("dt(") === -1) return e;
	function n(e, t) {
		let n = [], i = 0, a = "", o = null, s = 0;
		for (; i <= e.length;) {
			let c = e[i];
			if ((c === "\"" || c === "'" || c === "`") && e[i - 1] !== "\\" && (o = o === c ? null : c), !o && (c === "(" && s++, c === ")" && s--, (c === "," || i === e.length) && s === 0)) {
				let e = a.trim();
				e.startsWith("dt(") ? n.push(Ie(e, t)) : n.push(r(e)), a = "", i++;
				continue;
			}
			c !== void 0 && (a += c), i++;
		}
		return n;
	}
	function r(e) {
		let t = e[0];
		if ((t === "\"" || t === "'" || t === "`") && e[e.length - 1] === t) return e.slice(1, -1);
		let n = Number(e);
		return isNaN(n) ? e : n;
	}
	let i = [], a = [];
	for (let t = 0; t < e.length; t++) if (e[t] === "d" && e.slice(t, t + 3) === "dt(") a.push(t), t += 2;
	else if (e[t] === ")" && a.length > 0) {
		let e = a.pop();
		a.length === 0 && i.push([e, t]);
	}
	if (!i.length) return e;
	for (let r = i.length - 1; r >= 0; r--) {
		let [a, o] = i[r], s = t(...n(e.slice(a + 3, o), t));
		e = e.slice(0, a) + s + e.slice(o + 1);
	}
	return e;
}
var Le = (e) => {
	let t = X.getTheme(), n = Re(t, e, void 0, "variable");
	return {
		name: n?.match(/--[\w-]+/g)?.[0],
		variable: n,
		value: Re(t, e, void 0, "value")
	};
}, q = (...e) => Re(X.getTheme(), ...e), Re = (e = {}, t, n, r) => {
	if (t) {
		let { variable: i, options: a } = X.defaults || {}, { prefix: o, transform: s } = e?.options || a || {}, c = w(t, G) ? t : `{${t}}`;
		return r === "value" || f(r) && s === "strict" ? X.getTokenValue(t) : Pe(c, void 0, o, [i.excludedKeyRegex], n);
	}
	return "";
};
function J(e, ...t) {
	return e instanceof Array ? Ie(e.reduce((e, n, r) => e + n + (v(t[r], { dt: q }) ?? ""), ""), q) : v(e, { dt: q });
}
function ze(e, t = {}) {
	let n = X.defaults.variable, { prefix: r = n.prefix, selector: i = n.selector, excludedKeyRegex: a = n.excludedKeyRegex } = t, o = [], s = [], c = [{
		node: e,
		path: r
	}];
	for (; c.length;) {
		let { node: e, path: t } = c.pop();
		for (let n in e) {
			let i = e[n], l = ke(i), u = w(n, a) ? je(t) : je(t, O(n));
			if (h(l)) c.push({
				node: l,
				path: u
			});
			else {
				Fe(s, Me(u), Pe(l, u, r, [a]));
				let e = u;
				r && e.startsWith(r + "-") && (e = e.slice(r.length + 1)), o.push(e.replace(/-/g, "."));
			}
		}
	}
	let l = s.join("");
	return {
		value: s,
		tokens: o,
		declarations: l,
		css: K(i, l)
	};
}
var Y = {
	regex: {
		rules: {
			class: {
				pattern: /^\.([a-zA-Z][\w-]*)$/,
				resolve(e) {
					return {
						type: "class",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			attr: {
				pattern: /^\[(.*)\]$/,
				resolve(e) {
					return {
						type: "attr",
						selector: `:root${e},:host${e}`,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			media: {
				pattern: /^@media (.*)$/,
				resolve(e) {
					return {
						type: "media",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			system: {
				pattern: /^system$/,
				resolve(e) {
					return {
						type: "system",
						selector: "@media (prefers-color-scheme: dark)",
						matched: this.pattern.test(e.trim())
					};
				}
			},
			custom: { resolve(e) {
				return {
					type: "custom",
					selector: e,
					matched: !0
				};
			} }
		},
		resolve(e) {
			let t = Object.keys(this.rules).filter((e) => e !== "custom").map((e) => this.rules[e]);
			return [e].flat().map((e) => t.map((t) => t.resolve(e)).find((e) => e.matched) ?? this.rules.custom.resolve(e));
		}
	},
	_toVariables(e, t) {
		return ze(e, { prefix: t?.prefix });
	},
	getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: i }) {
		let { preset: a, options: o } = t, s, c, l, u, d, f, p;
		if (m(a) && o.transform !== "strict") {
			let { primitive: t, semantic: n, extend: h } = a, g = n || {}, { colorScheme: _ } = g, y = U(g, ["colorScheme"]), b = h || {}, { colorScheme: x } = b, S = U(b, ["colorScheme"]), C = _ || {}, { dark: w } = C, T = U(C, ["dark"]), E = x || {}, { dark: D } = E, O = U(E, ["dark"]), k = m(t) ? this._toVariables({ primitive: t }, o) : {}, A = m(y) ? this._toVariables({ semantic: y }, o) : {}, j = m(T) ? this._toVariables({ light: T }, o) : {}, M = m(w) ? this._toVariables({ dark: w }, o) : {}, N = m(S) ? this._toVariables({ semantic: S }, o) : {}, P = m(O) ? this._toVariables({ light: O }, o) : {}, F = m(D) ? this._toVariables({ dark: D }, o) : {}, [ee, I] = [k.declarations ?? "", k.tokens], [te, ne] = [A.declarations ?? "", A.tokens || []], [re, ie] = [j.declarations ?? "", j.tokens || []], [L, R] = [M.declarations ?? "", M.tokens || []], [ae, oe] = [N.declarations ?? "", N.tokens || []], [se, ce] = [P.declarations ?? "", P.tokens || []], [le, z] = [F.declarations ?? "", F.tokens || []];
			s = this.transformCSS(e, ee, "light", "variable", o, r, i), c = I, l = `${this.transformCSS(e, `${te}${re}`, "light", "variable", o, r, i)}${this.transformCSS(e, `${L}`, "dark", "variable", o, r, i)}`, u = [...new Set([
				...ne,
				...ie,
				...R
			])], d = `${this.transformCSS(e, `${ae}${se}color-scheme:light`, "light", "variable", o, r, i)}${this.transformCSS(e, `${le}color-scheme:dark`, "dark", "variable", o, r, i)}`, f = [...new Set([
				...oe,
				...ce,
				...z
			])], p = v(a.css, { dt: q });
		}
		return {
			primitive: {
				css: s,
				tokens: c
			},
			semantic: {
				css: l,
				tokens: u
			},
			global: {
				css: d,
				tokens: f
			},
			style: p
		};
	},
	getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: i, defaults: a, selector: o }) {
		let s, c, l;
		if (m(t) && n.transform !== "strict") {
			let r = e.replace("-directive", ""), u = t, { colorScheme: d, extend: f, css: p } = u, h = U(u, [
				"colorScheme",
				"extend",
				"css"
			]), g = f || {}, { colorScheme: _ } = g, y = U(g, ["colorScheme"]), b = d || {}, { dark: x } = b, S = U(b, ["dark"]), C = _ || {}, { dark: w } = C, T = U(C, ["dark"]), E = m(h) ? this._toVariables({ [r]: V(V({}, h), y) }, n) : {}, D = m(S) ? this._toVariables({ [r]: V(V({}, S), T) }, n) : {}, O = m(x) ? this._toVariables({ [r]: V(V({}, x), w) }, n) : {}, [k, A] = [E.declarations ?? "", E.tokens || []], [j, M] = [D.declarations ?? "", D.tokens || []], [N, P] = [O.declarations ?? "", O.tokens || []];
			s = `${this.transformCSS(r, `${k}${j}`, "light", "variable", n, i, a, o)}${this.transformCSS(r, N, "dark", "variable", n, i, a, o)}`, c = [...new Set([
				...A,
				...M,
				...P
			])], l = v(p, { dt: q });
		}
		return {
			css: s,
			tokens: c,
			style: l
		};
	},
	getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: i }) {
		let { preset: a, options: o } = t, s = a?.components?.[e];
		return this.getPreset({
			name: e,
			preset: s,
			options: o,
			params: n,
			set: r,
			defaults: i
		});
	},
	getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: i }) {
		let a = e.replace("-directive", ""), { preset: o, options: s } = t, c = o?.components?.[a] || o?.directives?.[a];
		return this.getPreset({
			name: a,
			preset: c,
			options: s,
			params: n,
			set: r,
			defaults: i
		});
	},
	applyDarkColorScheme(e) {
		return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
	},
	getColorSchemeOption(e, t) {
		return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : e.darkModeSelector ?? t.options.darkModeSelector) : [];
	},
	getLayerOrder(e, t = {}, n, r) {
		let { cssLayer: i } = t;
		return i ? `@layer ${v(i.order || i.name || "primeui", n)}` : "";
	},
	getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: i, defaults: a }) {
		let o = this.getCommon({
			name: e,
			theme: t,
			params: n,
			set: i,
			defaults: a
		}), s = Object.entries(r).reduce((e, [t, n]) => e.push(`${t}="${n}"`) && e, []).join(" ");
		return Object.entries(o || {}).reduce((e, [t, n]) => {
			if (h(n) && Object.hasOwn(n, "css")) {
				let r = E(n.css), i = `${t}-variables`;
				e.push(`<style type="text/css" data-primevue-style-id="${i}" ${s}>${r}</style>`);
			}
			return e;
		}, []).join("");
	},
	getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: i, defaults: a }) {
		let o = {
			name: e,
			theme: t,
			params: n,
			set: i,
			defaults: a
		}, s = (e.includes("-directive") ? this.getPresetD(o) : this.getPresetC(o))?.css, c = Object.entries(r).reduce((e, [t, n]) => e.push(`${t}="${n}"`) && e, []).join(" ");
		return s ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${E(s)}</style>` : "";
	},
	createTokens(e = {}, t, n = "", r = "", i = {}) {
		let a = function(e, t = {}, n = []) {
			if (n.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), {
				colorScheme: e,
				path: this.path,
				paths: t,
				value: void 0
			};
			n.push(this.path), t.name = this.path, t.binding ||= {};
			let r = this.value;
			if (typeof this.value == "string" && G.test(this.value)) {
				let i = this.value.trim().replace(G, (r) => {
					let i = r.slice(1, -1), a = this.tokens[i];
					if (!a) return console.warn(`Token not found for path: ${i}`), "__UNRESOLVED__";
					let o = a.computed(e, t, n);
					return Array.isArray(o) && o.length === 2 ? `light-dark(${o[0].value},${o[1].value})` : o?.value ?? "__UNRESOLVED__";
				});
				r = Ee.test(i.replace(De, "0")) ? `calc(${i})` : i;
			}
			return f(t.binding) && delete t.binding, n.pop(), {
				colorScheme: e,
				path: this.path,
				paths: t,
				value: r.includes("__UNRESOLVED__") ? void 0 : r
			};
		}, o = (e, n, r) => {
			Object.entries(e).forEach(([e, s]) => {
				let c = w(e, t.variable.excludedKeyRegex) ? n : n ? `${n}.${Oe(e)}` : Oe(e), l = r ? `${r}.${e}` : e;
				h(s) ? o(s, c, l) : (i[c] || (i[c] = {
					paths: [],
					computed: (e, t = {}, n = []) => {
						if (i[c].paths.length === 1) return i[c].paths[0].computed(i[c].paths[0].scheme, t.binding, n);
						if (e && e !== "none") for (let r = 0; r < i[c].paths.length; r++) {
							let a = i[c].paths[r];
							if (a.scheme === e) return a.computed(e, t.binding, n);
						}
						return i[c].paths.map((e) => e.computed(e.scheme, t[e.scheme], n));
					}
				}), i[c].paths.push({
					path: l,
					value: s,
					scheme: l.includes("colorScheme.light") ? "light" : l.includes("colorScheme.dark") ? "dark" : "none",
					computed: a,
					tokens: i
				}));
			});
		};
		return o(e, n, r), i;
	},
	getTokenValue(e, t, n) {
		let r = ((e) => e.split(".").filter((e) => !w(e.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), i = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [e[r]?.computed(i)].flat().filter((e) => e);
		return a.length === 1 ? a[0].value : a.reduce((e = {}, t) => {
			let n = t, { colorScheme: r } = n;
			return e[r] = U(n, ["colorScheme"]), e;
		}, void 0);
	},
	getSelectorRule(e, t, n, r) {
		return n === "class" || n === "attr" ? K(m(t) ? `${e}${t},${e} ${t}` : e, r) : K(e, K(t ?? ":root,:host", r));
	},
	transformCSS(e, t, n, r, i = {}, a, o, s) {
		if (m(t)) {
			let { cssLayer: c } = i;
			if (r !== "style") {
				let e = this.getColorSchemeOption(i, o);
				t = n === "dark" ? e.reduce((e, { type: n, selector: r }) => (m(r) && (e += r.includes("[CSS]") ? r.replace("[CSS]", t) : this.getSelectorRule(r, s, n, t)), e), "") : K(s ?? ":root,:host", t);
			}
			if (c) {
				let n = {
					name: "primeui",
					order: "primeui"
				};
				h(c) && (n.name = v(c.name, {
					name: e,
					type: r
				})), m(n.name) && (t = K(`@layer ${n.name}`, t), a?.layerNames(n.name));
			}
			return t;
		}
		return "";
	}
}, X = {
	defaults: {
		variable: {
			prefix: "p",
			selector: ":root,:host",
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
		let { theme: t } = e;
		t && (this._theme = H(V({}, t), { options: V(V({}, this.defaults.options), t.options) }), this._tokens = Y.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
	},
	get theme() {
		return this._theme;
	},
	get preset() {
		return this.theme?.preset || {};
	},
	get options() {
		return this.theme?.options || {};
	},
	get tokens() {
		return this._tokens;
	},
	getTheme() {
		return this.theme;
	},
	setTheme(e) {
		this.update({ theme: e }), W.emit("theme:change", e);
	},
	getPreset() {
		return this.preset;
	},
	setPreset(e) {
		this._theme = H(V({}, this.theme), { preset: e }), this._tokens = Y.createTokens(e, this.defaults), this.clearLoadedStyleNames(), W.emit("preset:change", e), W.emit("theme:change", this.theme);
	},
	getOptions() {
		return this.options;
	},
	setOptions(e) {
		this._theme = H(V({}, this.theme), { options: e }), this.clearLoadedStyleNames(), W.emit("options:change", e), W.emit("theme:change", this.theme);
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
		return Y.getTokenValue(this.tokens, e, this.defaults);
	},
	getCommon(e = "", t) {
		return Y.getCommon({
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getComponent(e = "", t) {
		let n = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return Y.getPresetC(n);
	},
	getDirective(e = "", t) {
		let n = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return Y.getPresetD(n);
	},
	getCustomPreset(e = "", t, n, r) {
		let i = {
			name: e,
			preset: t,
			options: this.options,
			selector: n,
			params: r,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return Y.getPreset(i);
	},
	getLayerOrderCSS(e = "") {
		return Y.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
	},
	transformCSS(e = "", t, n = "style", r) {
		return Y.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
	},
	getCommonStyleSheet(e = "", t, n = {}) {
		return Y.getCommonStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: n,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getStyleSheet(e, t, n = {}) {
		return Y.getStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: n,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	onStyleMounted(e) {
		this._loadingStyles.add(e);
	},
	onStyleUpdated(e) {
		this._loadingStyles.add(e);
	},
	onStyleLoaded(e, { name: t }) {
		this._loadingStyles.size && (this._loadingStyles.delete(t), W.emit(`theme:${t}:load`, e), !this._loadingStyles.size && W.emit("theme:load"));
	}
}, Be = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";
//#endregion
//#region node_modules/@primevue/core/usestyle/index.mjs
function Z(e) {
	"@babel/helpers - typeof";
	return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Z(e);
}
function Ve(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function He(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ve(Object(n), !0).forEach(function(t) {
			Ue(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ue(e, t, n) {
	return (t = We(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function We(e) {
	var t = Ge(e, "string");
	return Z(t) == "symbol" ? t : t + "";
}
function Ge(e, t) {
	if (Z(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (Z(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ke(r) {
	var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	e() && e().components ? n(r) : i ? r() : t(r);
}
var qe = 0;
function Je(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = i(!1), o = i(e), s = i(null), c = ge() ? window.document : void 0, l = t.document, u = l === void 0 ? c : l, d = t.immediate, f = d === void 0 ? !0 : d, p = t.manual, m = p === void 0 ? !1 : p, h = t.name, g = h === void 0 ? `style_${++qe}` : h, _ = t.id, v = _ === void 0 ? void 0 : _, y = t.media, b = y === void 0 ? void 0 : y, x = t.nonce, S = x === void 0 ? void 0 : x, C = t.first, w = C === void 0 ? !1 : C, T = t.onMounted, E = T === void 0 ? void 0 : T, D = t.onUpdated, O = D === void 0 ? void 0 : D, k = t.onLoad, A = k === void 0 ? void 0 : k, j = t.props, M = j === void 0 ? {} : j, N = function() {}, P = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (u) {
			var i = He(He({}, M), r), c = i.name || g, l = i.id || v, d = i.nonce || S;
			s.value = u.querySelector(`style[data-primevue-style-id="${c}"]`) || u.getElementById(l) || u.createElement("style"), s.value.isConnected || (o.value = t || e, R(s.value, {
				type: "text/css",
				id: l,
				media: b,
				nonce: d
			}), w ? u.head.prepend(s.value) : u.head.appendChild(s.value), ye(s.value, "data-primevue-style-id", c), R(s.value, i), s.value.onload = function(e) {
				return A?.(e, { name: c });
			}, E?.(c)), !n.value && (N = a(o, function(e) {
				s.value.textContent = e, O?.(c);
			}, { immediate: !0 }), n.value = !0);
		}
	};
	return f && !m && Ke(P), {
		id: v,
		name: g,
		el: s,
		css: o,
		unload: function() {
			!u || !n.value || (N(), ie(s.value) && u.head.removeChild(s.value), n.value = !1, s.value = null);
		},
		load: P,
		isLoaded: r(n)
	};
}
//#endregion
//#region node_modules/@primevue/core/base/style/index.mjs
function Q(e) {
	"@babel/helpers - typeof";
	return Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Q(e);
}
var Ye, Xe, Ze, Qe;
function $e(e, t) {
	return it(e) || rt(e, t) || tt(e, t) || et();
}
function et() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function tt(e, t) {
	if (e) {
		if (typeof e == "string") return nt(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nt(e, t) : void 0;
	}
}
function nt(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function rt(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function it(e) {
	if (Array.isArray(e)) return e;
}
function at(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ot(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? at(Object(n), !0).forEach(function(t) {
			st(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function st(e, t, n) {
	return (t = ct(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ct(e) {
	var t = lt(e, "string");
	return Q(t) == "symbol" ? t : t + "";
}
function lt(e, t) {
	if (Q(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (Q(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function $(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var ut = {
	name: "base",
	css: function(e) {
		var t = e.dt;
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
    padding-right: ${t("scrollbar.width")};
}
`;
	},
	style: Be,
	classes: {},
	inlineStyles: {},
	load: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(e) {
			return e;
		})(J(Ye ||= $(["", ""]), e));
		return m(n) ? Je(E(n), ot({ name: this.name }, t)) : {};
	},
	loadCSS: function() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return this.load(this.css, e);
	},
	loadStyle: function() {
		var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		return this.load(this.style, t, function() {
			var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
			return X.transformCSS(t.name || e.name, `${r}${J(Xe ||= $(["", ""]), n)}`);
		});
	},
	getCommonTheme: function(e) {
		return X.getCommon(this.name, e);
	},
	getComponentTheme: function(e) {
		return X.getComponent(this.name, e);
	},
	getDirectiveTheme: function(e) {
		return X.getDirective(this.name, e);
	},
	getPresetTheme: function(e, t, n) {
		return X.getCustomPreset(this.name, e, t, n);
	},
	getLayerOrderThemeCSS: function() {
		return X.getLayerOrderCSS(this.name);
	},
	getStyleSheet: function() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (this.css) {
			var n = v(this.css, { dt: q }) || "", r = E(J(Ze ||= $([
				"",
				"",
				""
			]), n, e)), i = Object.entries(t).reduce(function(e, t) {
				var n = $e(t, 2), r = n[0], i = n[1];
				return e.push(`${r}="${i}"`) && e;
			}, []).join(" ");
			return m(r) ? `<style type="text/css" data-primevue-style-id="${this.name}" ${i}>${r}</style>` : "";
		}
		return "";
	},
	getCommonThemeStyleSheet: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return X.getCommonStyleSheet(this.name, e, t);
	},
	getThemeStyleSheet: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [X.getStyleSheet(this.name, e, t)];
		if (this.style) {
			var r = this.name === "base" ? "global-style" : `${this.name}-style`, i = J(Qe ||= $(["", ""]), v(this.style, { dt: q })), a = E(X.transformCSS(r, i)), o = Object.entries(t).reduce(function(e, t) {
				var n = $e(t, 2), r = n[0], i = n[1];
				return e.push(`${r}="${i}"`) && e;
			}, []).join(" ");
			m(a) && n.push(`<style type="text/css" data-primevue-style-id="${r}" ${o}>${a}</style>`);
		}
		return n.join("");
	},
	extend: function(e) {
		return ot(ot({}, this), {}, {
			css: void 0,
			style: void 0
		}, e);
	}
}, dt = k();
//#endregion
export { x as A, N as C, se as D, ue as E, h as F, f as I, v as L, y as M, p as N, k as O, b as P, D as R, ee as S, ne as T, ve as _, Le as a, L as b, pe as c, le as d, he as f, j as g, ae as h, X as i, T as j, S as k, fe as l, de as m, ut as n, me as o, te as p, W as r, _e as s, dt as t, P as u, ye as v, ge as w, F as x, ce as y, m as z };
