function i(t = /* @__PURE__ */ new Date()) {
  const e = t instanceof Date ? t : new Date(t);
  if (isNaN(e.getTime()))
    throw new Error("Invalid date provided to formatDateTimeUK");
  return e.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).replace(",", "");
}
class o extends Error {
  type;
  // error type identifier
  summary;
  // short summary for logging
  details;
  // additional error details (object or array)
  cause;
  // stack trace of the original error
  constructor({
    type: e,
    summary: r,
    message: a,
    details: s,
    cause: n
  }) {
    super(a), this.name = "AppError", this.type = e, this.details = s, this.cause = n, this.summary = r;
  }
}
function c(t) {
  if (t instanceof Error)
    return {
      name: t.name,
      message: t.message,
      stack: t.stack
    };
  if (t instanceof Response)
    return {
      status: t.status,
      statusText: t.statusText,
      url: t.url,
      headers: u(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function u(t) {
  const e = {};
  return t.forEach((r, a) => {
    e[a] = r;
  }), e;
}
function m(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function f(t) {
  const { redirect: e, ...r } = t;
  if (!e) return null;
  const a = new URLSearchParams(r).toString();
  return a ? `${e}?${a}` : e;
}
const d = {
  getRedirectTargetWithQueryParams: f,
  normalizeError: c,
  AppError: o,
  formatDateTimeUK: i,
  capitalizeFirstLetter: m
};
export {
  o as AppError,
  m as capitalizeFirstLetter,
  d as default,
  i as formatDateTimeUK,
  f as getRedirectTargetWithQueryParams,
  c as normalizeError
};
