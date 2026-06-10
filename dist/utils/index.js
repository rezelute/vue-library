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
var n = {
	short: {
		day: "numeric",
		month: "short"
	},
	medium: {
		day: "numeric",
		month: "short",
		year: "numeric"
	},
	long: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
};
function r(e, t = "medium", r = "en-GB") {
	let i = e instanceof Date ? e : new Date(e);
	if (isNaN(i.getTime())) throw Error("Invalid date provided to formatDate");
	return i.toLocaleDateString(r, n[t]);
}
var i = 6e4, a = 36e5, o = 864e5, s = 7 * o, c = 30 * o, l = 365 * o;
function u(e, t = "en-GB") {
	let n = new Date(e).getTime() - Date.now(), r = Math.abs(n), u = new Intl.RelativeTimeFormat(t, { numeric: "auto" }), d = (e, t) => u.format(Math.round(n / e), t);
	return r < i ? d(1e3, "second") : r < a ? d(i, "minute") : r < o ? d(a, "hour") : r < s ? d(o, "day") : r < c ? d(s, "week") : r < l ? d(c, "month") : d(l, "year");
}
//#endregion
//#region src/utils/error/AppError.ts
var d = class extends Error {
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
function f(e) {
	if (e instanceof Error) return {
		name: e.name,
		message: e.message,
		stack: e.stack
	};
	if (e instanceof Response) return {
		status: e.status,
		statusText: e.statusText,
		url: e.url,
		headers: p(e.headers)
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
function p(e) {
	let t = {};
	return e.forEach((e, n) => {
		t[n] = e;
	}), t;
}
//#endregion
//#region src/utils/strings/strings.util.ts
function m(e) {
	return e && e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region src/utils/url.ts
function h(e) {
	let { redirect: t, ...n } = e;
	if (!t) return null;
	let r = new URLSearchParams(n).toString();
	return r ? `${t}?${r}` : t;
}
//#endregion
//#region src/utils/index.ts
var g = {
	getRedirectTargetWithQueryParams: h,
	normalizeError: f,
	AppError: d,
	formatRelativeDate: u,
	formatDateTime: t,
	formatDate: r,
	capitalizeFirstLetter: m
};
//#endregion
export { d as AppError, m as capitalizeFirstLetter, g as default, r as formatDate, t as formatDateTime, u as formatRelativeDate, h as getRedirectTargetWithQueryParams, f as normalizeError };
