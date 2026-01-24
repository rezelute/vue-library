class o extends Error {
  response;
  data;
  constructor(s, e, a) {
    super(s), this.name = "ApiResponseError", this.response = {
      status: e.status,
      statusText: e.statusText,
      url: e.url
    }, this.data = a;
  }
}
class i extends Error {
  type;
  // error type identifier
  messageSummary;
  // short summary for logging
  details;
  // additional error details (object or array)
  cause;
  // stack trace of the original error
  constructor({
    type: s,
    messageSummary: e,
    message: a,
    details: r,
    cause: n
  }) {
    super(a), this.name = "AppError", this.type = s, this.details = r, this.cause = n, this.messageSummary = e;
  }
}
function u(t) {
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
      headers: c(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function c(t) {
  const s = {};
  return t.forEach((e, a) => {
    s[a] = e;
  }), s;
}
function m(t) {
  const { redirect: s, ...e } = t;
  if (!s) return null;
  const a = new URLSearchParams(e).toString();
  return a ? `${s}?${a}` : s;
}
const l = { getRedirectTargetWithQueryParams: m, normalizeError: u, ApiResponseError: o, AppError: i };
export {
  o as ApiResponseError,
  i as AppError,
  l as default,
  m as getRedirectTargetWithQueryParams,
  u as normalizeError
};
