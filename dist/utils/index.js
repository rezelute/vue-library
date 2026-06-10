//#region src/utils/datetime/datetime.util.ts
var e = {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	hour: "2-digit",
	minute: "2-digit",
	hour12: !1
};
function t(t = /* @__PURE__ */ new Date(), n = "en-GB", r = e) {
	let i = t instanceof Date ? t : new Date(t);
	if (isNaN(i.getTime())) throw Error("Invalid date provided to formatDateTime");
	return i.toLocaleString(n, r);
}
var n = (e = /* @__PURE__ */ new Date()) => t(e), r = 6e4, i = 36e5, a = 864e5, o = 7 * a, s = 30 * a, c = 365 * a;
function l(e, t = "en-GB") {
	let n = new Date(e).getTime() - Date.now(), l = Math.abs(n), u = new Intl.RelativeTimeFormat(t, { numeric: "auto" }), d = (e, t) => u.format(Math.round(n / e), t);
	return l < r ? d(1e3, "second") : l < i ? d(r, "minute") : l < a ? d(i, "hour") : l < o ? d(a, "day") : l < s ? d(o, "week") : l < c ? d(s, "month") : d(c, "year");
}
//#endregion
//#region src/utils/error/AppError.ts
var u = class extends Error {
	type;
	summary;
	details;
	cause;
	constructor({ type: e, summary: t, message: n, details: r, cause: i }) {
		super(n), this.name = "AppError", this.type = e, this.details = r, this.cause = i, this.summary = t;
	}
};
//#endregion
//#region src/utils/error/normalizeError.util.ts
function d(e) {
	if (e instanceof Error) return {
		name: e.name,
		message: e.message,
		stack: e.stack
	};
	if (e instanceof Response) return {
		status: e.status,
		statusText: e.statusText,
		url: e.url,
		headers: f(e.headers)
	};
	if (typeof e == "object" && e) try {
		return JSON.parse(JSON.stringify(e));
	} catch {
		return {
			message: "Non-serializable object error",
			original: String(e)
		};
	}
	return { message: String(e) };
}
function f(e) {
	let t = {};
	return e.forEach((e, n) => {
		t[n] = e;
	}), t;
}
//#endregion
//#region src/utils/strings/strings.util.ts
function p(e) {
	return e && e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region src/utils/url.ts
function m(e) {
	let { redirect: t, ...n } = e;
	if (!t) return null;
	let r = new URLSearchParams(n).toString();
	return r ? `${t}?${r}` : t;
}
//#endregion
//#region src/utils/index.ts
var h = {
	getRedirectTargetWithQueryParams: m,
	normalizeError: d,
	AppError: u,
	formatDateTimeUK: n,
	formatRelativeDate: l,
	formatDateTime: t,
	capitalizeFirstLetter: p
};
//#endregion
export { u as AppError, p as capitalizeFirstLetter, h as default, n as formatDateTimeUK, m as getRedirectTargetWithQueryParams, d as normalizeError };
