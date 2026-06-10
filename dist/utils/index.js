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
var n = (e = /* @__PURE__ */ new Date()) => t(e), r = 864e5;
7 * r, 30 * r, 365 * r;
//#endregion
//#region src/utils/error/AppError.ts
var i = class extends Error {
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
function a(e) {
	if (e instanceof Error) return {
		name: e.name,
		message: e.message,
		stack: e.stack
	};
	if (e instanceof Response) return {
		status: e.status,
		statusText: e.statusText,
		url: e.url,
		headers: o(e.headers)
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
function o(e) {
	let t = {};
	return e.forEach((e, n) => {
		t[n] = e;
	}), t;
}
//#endregion
//#region src/utils/strings/strings.util.ts
function s(e) {
	return e && e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region src/utils/url.ts
function c(e) {
	let { redirect: t, ...n } = e;
	if (!t) return null;
	let r = new URLSearchParams(n).toString();
	return r ? `${t}?${r}` : t;
}
//#endregion
//#region src/utils/index.ts
var l = {
	getRedirectTargetWithQueryParams: c,
	normalizeError: a,
	AppError: i,
	formatDateTimeUK: n,
	capitalizeFirstLetter: s
};
//#endregion
export { i as AppError, s as capitalizeFirstLetter, l as default, n as formatDateTimeUK, c as getRedirectTargetWithQueryParams, a as normalizeError };
