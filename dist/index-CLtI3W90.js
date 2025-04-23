import { ref as xt, readonly as Gr, getCurrentInstance as rn, onMounted as Xr, nextTick as zr, watch as Kr } from "vue";
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var J = {}, Dt = {}, Mt = {}, et = {}, _e = {}, on;
function Jr() {
  if (on) return _e;
  on = 1;
  var e = _e && _e.__awaiter || function(g, d, m, h) {
    function i(a) {
      return a instanceof m ? a : new m(function(c) {
        c(a);
      });
    }
    return new (m || (m = Promise))(function(a, c) {
      function s(v) {
        try {
          u(h.next(v));
        } catch (y) {
          c(y);
        }
      }
      function r(v) {
        try {
          u(h.throw(v));
        } catch (y) {
          c(y);
        }
      }
      function u(v) {
        v.done ? a(v.value) : i(v.value).then(s, r);
      }
      u((h = h.apply(g, d || [])).next());
    });
  }, o = _e && _e.__generator || function(g, d) {
    var m = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, h, i, a, c;
    return c = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function s(u) {
      return function(v) {
        return r([u, v]);
      };
    }
    function r(u) {
      if (h) throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (h = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
            return a;
          switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return m.label++, { value: u[1], done: !1 };
            case 5:
              m.label++, i = u[1], u = [0];
              continue;
            case 7:
              u = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (a = m.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                m = 0;
                continue;
              }
              if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                m.label = u[1];
                break;
              }
              if (u[0] === 6 && m.label < a[1]) {
                m.label = a[1], a = u;
                break;
              }
              if (a && m.label < a[2]) {
                m.label = a[2], m.ops.push(u);
                break;
              }
              a[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          u = d.call(g, m);
        } catch (v) {
          u = [6, v], i = 0;
        } finally {
          h = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(_e, "__esModule", { value: !0 }), _e.defaultWindowHandlerImplementation = void 0;
  function n() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var t = {
    key: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, n().localStorage.key(g)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return o(this, function(g) {
          return [2, n().localStorage.clear()];
        });
      });
    },
    getItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, n().localStorage.getItem(g)];
        });
      });
    },
    removeItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, n().localStorage.removeItem(g)];
        });
      });
    },
    setItem: function(g, d) {
      return e(this, void 0, void 0, function() {
        return o(this, function(m) {
          return [2, n().localStorage.setItem(g, d)];
        });
      });
    },
    keySync: function(g) {
      return n().localStorage.key(g);
    },
    clearSync: function() {
      return n().localStorage.clear();
    },
    getItemSync: function(g) {
      return n().localStorage.getItem(g);
    },
    removeItemSync: function(g) {
      return n().localStorage.removeItem(g);
    },
    setItemSync: function(g, d) {
      return n().localStorage.setItem(g, d);
    }
  }, l = {
    key: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, n().sessionStorage.key(g)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return o(this, function(g) {
          return [2, n().sessionStorage.clear()];
        });
      });
    },
    getItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, n().sessionStorage.getItem(g)];
        });
      });
    },
    removeItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, n().sessionStorage.removeItem(g)];
        });
      });
    },
    setItem: function(g, d) {
      return e(this, void 0, void 0, function() {
        return o(this, function(m) {
          return [2, n().sessionStorage.setItem(g, d)];
        });
      });
    },
    keySync: function(g) {
      return n().sessionStorage.key(g);
    },
    clearSync: function() {
      return n().sessionStorage.clear();
    },
    getItemSync: function(g) {
      return n().sessionStorage.getItem(g);
    },
    removeItemSync: function(g) {
      return n().sessionStorage.removeItem(g);
    },
    setItemSync: function(g, d) {
      return n().sessionStorage.setItem(g, d);
    }
  };
  return _e.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(g, d, m) {
        return n().history.replaceState(g, d, m);
      },
      getState: function() {
        return n().history.state;
      }
    },
    location: {
      getHref: function() {
        return n().location.href;
      },
      setHref: function(g) {
        n().location.href = g;
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
      assign: function(g) {
        n().location.assign(g);
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
    localStorage: t,
    sessionStorage: l
  }, _e;
}
var sn;
function je() {
  if (sn) return et;
  sn = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.WindowHandlerReference = void 0;
  var e = Jr(), o = (
    /** @class */
    function() {
      function n(t) {
        var l = function(g) {
          return g;
        };
        t !== void 0 && (l = t), this.windowHandler = l(e.defaultWindowHandlerImplementation);
      }
      return n.init = function(t) {
        n.instance === void 0 && (n.instance = new n(t));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return et.WindowHandlerReference = o, et.default = o, et;
}
var an;
function Yr() {
  return an || (an = 1, function(e) {
    function o(n) {
      for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
    }
    e.__esModule = !0, o(je());
  }(Mt)), Mt;
}
var un;
function Gt() {
  return un || (un = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WindowHandlerReference = void 0;
    var o = Yr();
    Object.defineProperty(e, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return o.WindowHandlerReference;
      }
    });
  }(Dt)), Dt;
}
var $e = {}, cn;
function Zr() {
  return cn || (cn = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.SSR_ERROR = $e.DEFAULT_API_BASE_PATH = void 0, $e.DEFAULT_API_BASE_PATH = "/auth", $e.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), $e;
}
var kt = {}, ln;
function eo() {
  if (ln) return kt;
  ln = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(t) {
        var l = this;
        this.getAsStringDangerous = function() {
          return l.value;
        }, this.value = o(t);
      }
      return n;
    }()
  );
  kt.default = e;
  function o(n, t) {
    t === void 0 && (t = !1);
    function l(d) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        d
      );
    }
    n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var g = new URL(n);
      return t ? g.hostname.startsWith("localhost") || l(g.hostname) ? n = "http://" + g.host : n = "https://" + g.host : n = g.protocol + "//" + g.host, n;
    } catch {
    }
    if (n.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (n.indexOf(".") === 0 && (n = n.substr(1)), (n.indexOf(".") !== -1 || n.startsWith("localhost")) && !n.startsWith("http://") && !n.startsWith("https://")) {
      n = "https://" + n;
      try {
        return new URL(n), o(n, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return kt;
}
var It = {}, dn;
function Tr() {
  if (dn) return It;
  dn = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(l) {
        var g = this;
        this.startsWith = function(d) {
          return g.value.startsWith(d.value);
        }, this.appendPath = function(d) {
          return new t(g.value + d.value);
        }, this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = o(l);
      }
      return t;
    }()
  );
  It.default = e;
  function o(t) {
    t = t.trim();
    try {
      if (!t.startsWith("http://") && !t.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var l = new URL(t);
      return t = l.pathname, t.charAt(t.length - 1) === "/" ? t.substr(0, t.length - 1) : t;
    } catch {
    }
    if ((n(t) || t.startsWith("localhost")) && !t.startsWith("http://") && !t.startsWith("https://"))
      return t = "http://" + t, o(t);
    t.charAt(0) !== "/" && (t = "/" + t);
    try {
      return new URL("http://example.com" + t), o("http://example.com" + t);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function n(t) {
    if (t.indexOf(".") === -1 || t.startsWith("/"))
      return !1;
    try {
      var l = new URL(t);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var l = new URL("http://" + t);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return It;
}
var Lt = {}, ct = {}, ee = {}, tt = {}, fn;
function to() {
  if (fn) return tt;
  fn = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.isAnIpAddress = void 0;
  function e(t) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      t
    );
  }
  tt.isAnIpAddress = e;
  var o = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(l) {
        var g = this;
        this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = n(l);
      }
      return t;
    }()
  );
  tt.default = o;
  function n(t, l) {
    l === void 0 && (l = !1), t = t.trim();
    try {
      if (!t.startsWith("http://") && !t.startsWith("https://"))
        throw new Error("converting to proper URL");
      var g = new URL(t);
      return l ? g.hostname.startsWith("localhost") || e(g.hostname) ? t = "http://" + g.host : t = "https://" + g.host : t = g.protocol + "//" + g.host, t;
    } catch {
    }
    if (t.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (t.indexOf(".") === 0 && (t = t.substr(1)), (t.indexOf(".") !== -1 || t.startsWith("localhost")) && !t.startsWith("http://") && !t.startsWith("https://")) {
      t = "https://" + t;
      try {
        return new URL(t), n(t, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return tt;
}
var _t = {}, hn;
function no() {
  if (hn) return _t;
  hn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(l) {
        var g = this;
        this.startsWith = function(d) {
          return g.value.startsWith(d.value);
        }, this.appendPath = function(d) {
          return new t(g.value + d.value);
        }, this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = o(l);
      }
      return t;
    }()
  );
  _t.default = e;
  function o(t) {
    t = t.trim();
    try {
      if (!t.startsWith("http://") && !t.startsWith("https://"))
        throw new Error("converting to proper URL");
      var l = new URL(t);
      return t = l.pathname, t.charAt(t.length - 1) === "/" ? t.substr(0, t.length - 1) : t;
    } catch {
    }
    if ((n(t) || t.startsWith("localhost")) && !t.startsWith("http://") && !t.startsWith("https://"))
      return t = "http://" + t, o(t);
    t.charAt(0) !== "/" && (t = "/" + t);
    try {
      return new URL("http://example.com" + t), o("http://example.com" + t);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function n(t) {
    if (t.indexOf(".") === -1 || t.startsWith("/"))
      return !1;
    try {
      var l = new URL(t);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var l = new URL("http://" + t);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return _t;
}
var gn;
function Xt() {
  if (gn) return ee;
  gn = 1;
  var e = ee && ee.__assign || function() {
    return e = Object.assign || function(s) {
      for (var r, u = 1, v = arguments.length; u < v; u++) {
        r = arguments[u];
        for (var y in r) Object.prototype.hasOwnProperty.call(r, y) && (s[y] = r[y]);
      }
      return s;
    }, e.apply(this, arguments);
  }, o = ee && ee.__awaiter || function(s, r, u, v) {
    function y(f) {
      return f instanceof u ? f : new u(function(p) {
        p(f);
      });
    }
    return new (u || (u = Promise))(function(f, p) {
      function w(R) {
        try {
          S(v.next(R));
        } catch (I) {
          p(I);
        }
      }
      function b(R) {
        try {
          S(v.throw(R));
        } catch (I) {
          p(I);
        }
      }
      function S(R) {
        R.done ? f(R.value) : y(R.value).then(w, b);
      }
      S((v = v.apply(s, r || [])).next());
    });
  }, n = ee && ee.__generator || function(s, r) {
    var u = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, v, y, f, p;
    return p = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function w(S) {
      return function(R) {
        return b([S, R]);
      };
    }
    function b(S) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (v = 1, y && (f = S[0] & 2 ? y.return : S[0] ? y.throw || ((f = y.return) && f.call(y), 0) : y.next) && !(f = f.call(y, S[1])).done)
            return f;
          switch (y = 0, f && (S = [S[0] & 2, f.value]), S[0]) {
            case 0:
            case 1:
              f = S;
              break;
            case 4:
              return u.label++, { value: S[1], done: !1 };
            case 5:
              u.label++, y = S[1], S = [0];
              continue;
            case 7:
              S = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (f = u.trys, !(f = f.length > 0 && f[f.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                u = 0;
                continue;
              }
              if (S[0] === 3 && (!f || S[1] > f[0] && S[1] < f[3])) {
                u.label = S[1];
                break;
              }
              if (S[0] === 6 && u.label < f[1]) {
                u.label = f[1], f = S;
                break;
              }
              if (f && u.label < f[2]) {
                u.label = f[2], u.ops.push(S);
                break;
              }
              f[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          S = r.call(s, u);
        } catch (R) {
          S = [6, R], y = 0;
        } finally {
          v = f = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ee, "__esModule", { value: !0 }), ee.matchesDomainOrSubdomain = ee.getNormalisedUserContext = ee.validateAndNormaliseInputOrThrowError = ee.normaliseSessionScopeOrThrowError = ee.normaliseURLPathOrThrowError = ee.normaliseURLDomainOrThrowError = void 0;
  var t = to(), l = no(), g = je();
  function d(s) {
    var r = new t.default(s).getAsStringDangerous();
    return r;
  }
  ee.normaliseURLDomainOrThrowError = d;
  function m(s) {
    return new l.default(s).getAsStringDangerous();
  }
  ee.normaliseURLPathOrThrowError = m;
  function h(s) {
    function r(v) {
      v = v.trim().toLowerCase(), v.startsWith(".") && (v = v.substr(1)), !v.startsWith("http://") && !v.startsWith("https://") && (v = "http://" + v);
      try {
        var y = new URL(v);
        return v = y.hostname, v;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var u = r(s);
    return u === "localhost" || (0, t.isAnIpAddress)(u) ? u : s.startsWith(".") ? "." + u : u;
  }
  ee.normaliseSessionScopeOrThrowError = h;
  function i(s) {
    var r = this, u = d(s.apiDomain), v = m("/auth");
    s.apiBasePath !== void 0 && (v = m(s.apiBasePath));
    var y = g.default.getReferenceOrThrow().windowHandler.location.getHostName(), f = h(
      s !== void 0 && s.sessionTokenFrontendDomain !== void 0 ? s.sessionTokenFrontendDomain : y
    ), p = 401;
    s.sessionExpiredStatusCode !== void 0 && (p = s.sessionExpiredStatusCode);
    var w = 403;
    if (s.invalidClaimStatusCode !== void 0 && (w = s.invalidClaimStatusCode), p === w)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var b = !0;
    s.autoAddCredentials !== void 0 && (b = s.autoAddCredentials);
    var S = !1;
    s.isInIframe !== void 0 && (S = s.isInIframe);
    var R = void 0;
    s.sessionTokenBackendDomain !== void 0 && (R = h(s.sessionTokenBackendDomain));
    var I = 10;
    if (s.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (s.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      I = s.maxRetryAttemptsForSessionRefresh;
    }
    var T = function(x) {
      return o(r, void 0, void 0, function() {
        return n(this, function(E) {
          return [2, { url: x.url, requestInit: x.requestInit }];
        });
      });
    };
    s.preAPIHook !== void 0 && (T = s.preAPIHook);
    var _ = function() {
      return o(r, void 0, void 0, function() {
        return n(this, function(x) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    s.postAPIHook !== void 0 && (_ = s.postAPIHook);
    var P = function() {
    };
    s.onHandleEvent !== void 0 && (P = s.onHandleEvent);
    var C = e(
      {
        functions: function(x) {
          return x;
        }
      },
      s.override
    );
    return {
      apiDomain: u,
      apiBasePath: v,
      sessionTokenFrontendDomain: f,
      sessionExpiredStatusCode: p,
      invalidClaimStatusCode: w,
      autoAddCredentials: b,
      isInIframe: S,
      tokenTransferMethod: s.tokenTransferMethod !== void 0 ? s.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: R,
      maxRetryAttemptsForSessionRefresh: I,
      preAPIHook: T,
      postAPIHook: _,
      onHandleEvent: P,
      override: C
    };
  }
  ee.validateAndNormaliseInputOrThrowError = i;
  function a(s) {
    return s === void 0 ? {} : s;
  }
  ee.getNormalisedUserContext = a;
  function c(s, r) {
    for (var u = s.split("."), v = 0; v < u.length; v++) {
      var y = u.slice(v).join(".");
      if (y === r || ".".concat(y) === r)
        return !0;
    }
    return !1;
  }
  return ee.matchesDomainOrSubdomain = c, ee;
}
var Te = {}, Ve = {}, vn;
function zt() {
  return vn || (vn = 1, function(e) {
    var o = Ve && Ve.__awaiter || function(l, g, d, m) {
      function h(i) {
        return i instanceof d ? i : new d(function(a) {
          a(i);
        });
      }
      return new (d || (d = Promise))(function(i, a) {
        function c(u) {
          try {
            r(m.next(u));
          } catch (v) {
            a(v);
          }
        }
        function s(u) {
          try {
            r(m.throw(u));
          } catch (v) {
            a(v);
          }
        }
        function r(u) {
          u.done ? i(u.value) : h(u.value).then(c, s);
        }
        r((m = m.apply(l, g || [])).next());
      });
    }, n = Ve && Ve.__generator || function(l, g) {
      var d = {
        label: 0,
        sent: function() {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      }, m, h, i, a;
      return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this;
      }), a;
      function c(r) {
        return function(u) {
          return s([r, u]);
        };
      }
      function s(r) {
        if (m) throw new TypeError("Generator is already executing.");
        for (; d; )
          try {
            if (m = 1, h && (i = r[0] & 2 ? h.return : r[0] ? h.throw || ((i = h.return) && i.call(h), 0) : h.next) && !(i = i.call(h, r[1])).done)
              return i;
            switch (h = 0, i && (r = [r[0] & 2, i.value]), r[0]) {
              case 0:
              case 1:
                i = r;
                break;
              case 4:
                return d.label++, { value: r[1], done: !1 };
              case 5:
                d.label++, h = r[1], r = [0];
                continue;
              case 7:
                r = d.ops.pop(), d.trys.pop();
                continue;
              default:
                if (i = d.trys, !(i = i.length > 0 && i[i.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                  d = 0;
                  continue;
                }
                if (r[0] === 3 && (!i || r[1] > i[0] && r[1] < i[3])) {
                  d.label = r[1];
                  break;
                }
                if (r[0] === 6 && d.label < i[1]) {
                  d.label = i[1], i = r;
                  break;
                }
                if (i && d.label < i[2]) {
                  d.label = i[2], d.ops.push(r);
                  break;
                }
                i[2] && d.ops.pop(), d.trys.pop();
                continue;
            }
            r = g.call(l, d);
          } catch (u) {
            r = [6, u], h = 0;
          } finally {
            m = i = 0;
          }
        if (r[0] & 5) throw r[1];
        return { value: r[0] ? r[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ProcessState = e.PROCESS_STATE = void 0, function(l) {
      l[l.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", l[l.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(e.PROCESS_STATE || (e.PROCESS_STATE = {}));
    var t = (
      /** @class */
      function() {
        function l() {
          var g = this;
          this.history = [], this.addState = function(d) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && g.history.push(d);
            } catch {
            }
          }, this.getEventByLastEventByName = function(d) {
            for (var m = g.history.length - 1; m >= 0; m--)
              if (g.history[m] == d)
                return g.history[m];
          }, this.reset = function() {
            g.history = [];
          }, this.waitForEvent = function(d, m) {
            return m === void 0 && (m = 7e3), o(g, void 0, void 0, function() {
              var h, i = this;
              return n(this, function(a) {
                return h = Date.now(), [
                  2,
                  new Promise(function(c) {
                    var s = i;
                    function r() {
                      var u = s.getEventByLastEventByName(d);
                      u === void 0 ? Date.now() - h > m ? c(void 0) : setTimeout(r, 1e3) : c(u);
                    }
                    r();
                  })
                ];
              });
            });
          };
        }
        return l.getInstance = function() {
          return l.instance == null && (l.instance = new l()), l.instance;
        }, l;
      }()
    );
    e.ProcessState = t;
  }(Ve)), Ve;
}
var We = {}, mn;
function Kt() {
  return mn || (mn = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.supported_fdi = We.package_version = void 0, We.package_version = "20.1.6", We.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0", "4.1"]), We;
}
var nt = {}, Ce = {}, pn;
function ro() {
  if (pn) return Ce;
  pn = 1;
  var e = Ce && Ce.__awaiter || function(t, l, g, d) {
    function m(h) {
      return h instanceof g ? h : new g(function(i) {
        i(h);
      });
    }
    return new (g || (g = Promise))(function(h, i) {
      function a(r) {
        try {
          s(d.next(r));
        } catch (u) {
          i(u);
        }
      }
      function c(r) {
        try {
          s(d.throw(r));
        } catch (u) {
          i(u);
        }
      }
      function s(r) {
        r.done ? h(r.value) : m(r.value).then(a, c);
      }
      s((d = d.apply(t, l || [])).next());
    });
  }, o = Ce && Ce.__generator || function(t, l) {
    var g = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, d, m, h, i;
    return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function a(s) {
      return function(r) {
        return c([s, r]);
      };
    }
    function c(s) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (d = 1, m && (h = s[0] & 2 ? m.return : s[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, s[1])).done)
            return h;
          switch (m = 0, h && (s = [s[0] & 2, h.value]), s[0]) {
            case 0:
            case 1:
              h = s;
              break;
            case 4:
              return g.label++, { value: s[1], done: !1 };
            case 5:
              g.label++, m = s[1], s = [0];
              continue;
            case 7:
              s = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (h = g.trys, !(h = h.length > 0 && h[h.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                g = 0;
                continue;
              }
              if (s[0] === 3 && (!h || s[1] > h[0] && s[1] < h[3])) {
                g.label = s[1];
                break;
              }
              if (s[0] === 6 && g.label < h[1]) {
                g.label = h[1], h = s;
                break;
              }
              if (h && g.label < h[2]) {
                g.label = h[2], g.ops.push(s);
                break;
              }
              h[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          s = l.call(t, g);
        } catch (r) {
          s = [6, r], m = 0;
        } finally {
          d = h = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.defaultCookieHandlerImplementation = void 0;
  var n = je();
  return Ce.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return e(this, void 0, void 0, function() {
        return o(this, function(t) {
          return [
            2,
            n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(t) {
      return e(this, void 0, void 0, function() {
        return o(this, function(l) {
          return n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = t, [
            2
            /*return*/
          ];
        });
      });
    }
  }, Ce;
}
var yn;
function Cr() {
  if (yn) return nt;
  yn = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.CookieHandlerReference = void 0;
  var e = ro(), o = (
    /** @class */
    function() {
      function n(t) {
        var l = function(g) {
          return g;
        };
        t !== void 0 && (l = t), this.cookieHandler = l(e.defaultCookieHandlerImplementation);
      }
      return n.init = function(t) {
        n.instance === void 0 && (n.instance = new n(t));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return nt.CookieHandlerReference = o, nt.default = o, nt;
}
var rt = {}, Ae = {}, Tt = {}, wn;
function oo() {
  if (wn) return Tt;
  wn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    function() {
      function n() {
        var t = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(l, g) {
          var d = t.locked.get(l);
          d === void 0 ? g === void 0 ? t.locked.set(l, []) : t.locked.set(l, [g]) : g !== void 0 && (d.unshift(g), t.locked.set(l, d));
        }, this.isLocked = function(l) {
          return t.locked.has(l);
        }, this.lock = function(l) {
          return new Promise(function(g, d) {
            t.isLocked(l) ? t.addToLocked(l, g) : (t.addToLocked(l), g());
          });
        }, this.unlock = function(l) {
          var g = t.locked.get(l);
          if (g === void 0 || g.length === 0) {
            t.locked.delete(l);
            return;
          }
          var d = g.pop();
          t.locked.set(l, g), d !== void 0 && setTimeout(d, 0);
        };
      }
      return n.getInstance = function() {
        return n.instance === void 0 && (n.instance = new n()), n.instance;
      }, n;
    }()
  );
  function o() {
    return e.getInstance();
  }
  return Tt.default = o, Tt;
}
var bn;
function so() {
  if (bn) return Ae;
  bn = 1;
  var e = Ae && Ae.__awaiter || function(a, c, s, r) {
    return new (s || (s = Promise))(function(u, v) {
      function y(w) {
        try {
          p(r.next(w));
        } catch (b) {
          v(b);
        }
      }
      function f(w) {
        try {
          p(r.throw(w));
        } catch (b) {
          v(b);
        }
      }
      function p(w) {
        w.done ? u(w.value) : new s(function(b) {
          b(w.value);
        }).then(y, f);
      }
      p((r = r.apply(a, c || [])).next());
    });
  }, o = Ae && Ae.__generator || function(a, c) {
    var s = { label: 0, sent: function() {
      if (v[0] & 1) throw v[1];
      return v[1];
    }, trys: [], ops: [] }, r, u, v, y;
    return y = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function f(w) {
      return function(b) {
        return p([w, b]);
      };
    }
    function p(w) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; s; ) try {
        if (r = 1, u && (v = w[0] & 2 ? u.return : w[0] ? u.throw || ((v = u.return) && v.call(u), 0) : u.next) && !(v = v.call(u, w[1])).done) return v;
        switch (u = 0, v && (w = [w[0] & 2, v.value]), w[0]) {
          case 0:
          case 1:
            v = w;
            break;
          case 4:
            return s.label++, { value: w[1], done: !1 };
          case 5:
            s.label++, u = w[1], w = [0];
            continue;
          case 7:
            w = s.ops.pop(), s.trys.pop();
            continue;
          default:
            if (v = s.trys, !(v = v.length > 0 && v[v.length - 1]) && (w[0] === 6 || w[0] === 2)) {
              s = 0;
              continue;
            }
            if (w[0] === 3 && (!v || w[1] > v[0] && w[1] < v[3])) {
              s.label = w[1];
              break;
            }
            if (w[0] === 6 && s.label < v[1]) {
              s.label = v[1], v = w;
              break;
            }
            if (v && s.label < v[2]) {
              s.label = v[2], s.ops.push(w);
              break;
            }
            v[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        w = c.call(a, s);
      } catch (b) {
        w = [6, b], u = 0;
      } finally {
        r = v = 0;
      }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  }, n = Ae;
  Object.defineProperty(Ae, "__esModule", { value: !0 });
  var t = oo(), l = "browser-tabs-lock-key", g = {
    key: function(a) {
      return e(n, void 0, void 0, function() {
        return o(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(a) {
      return e(n, void 0, void 0, function() {
        return o(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return e(n, void 0, void 0, function() {
        return o(this, function(a) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(a) {
      return e(n, void 0, void 0, function() {
        return o(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(a, c) {
      return e(n, void 0, void 0, function() {
        return o(this, function(s) {
          throw new Error("Unsupported");
        });
      });
    },
    keySync: function(a) {
      return window.localStorage.key(a);
    },
    getItemSync: function(a) {
      return window.localStorage.getItem(a);
    },
    clearSync: function() {
      return window.localStorage.clear();
    },
    removeItemSync: function(a) {
      return window.localStorage.removeItem(a);
    },
    setItemSync: function(a, c) {
      return window.localStorage.setItem(a, c);
    }
  };
  function d(a) {
    return new Promise(function(c) {
      return setTimeout(c, a);
    });
  }
  function m(a) {
    for (var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", s = "", r = 0; r < a; r++) {
      var u = Math.floor(Math.random() * c.length);
      s += c[u];
    }
    return s;
  }
  function h() {
    return Date.now().toString() + m(15);
  }
  var i = (
    /** @class */
    function() {
      function a(c) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = h(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = c, a.waiters === void 0 && (a.waiters = []);
      }
      return a.prototype.acquireLock = function(c, s) {
        return s === void 0 && (s = 5e3), e(this, void 0, void 0, function() {
          var r, u, v, y, f, p, w, b;
          return o(this, function(S) {
            switch (S.label) {
              case 0:
                r = Date.now() + m(4), u = Date.now() + s, v = l + "-" + c, y = this.storageHandler === void 0 ? g : this.storageHandler, S.label = 1;
              case 1:
                return Date.now() < u ? [4, d(30)] : [3, 8];
              case 2:
                return S.sent(), f = y.getItemSync(v), f !== null ? [3, 5] : (p = this.id + "-" + c + "-" + r, [4, d(Math.floor(Math.random() * 25))]);
              case 3:
                return S.sent(), y.setItemSync(v, JSON.stringify({
                  id: this.id,
                  iat: r,
                  timeoutKey: p,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, d(30)];
              case 4:
                return S.sent(), w = y.getItemSync(v), w !== null && (b = JSON.parse(w), b.id === this.id && b.iat === r) ? (this.acquiredIatSet.add(r), this.refreshLockWhileAcquired(v, r), [2, !0]) : [3, 7];
              case 5:
                return a.lockCorrector(this.storageHandler === void 0 ? g : this.storageHandler), [4, this.waitForSomethingToChange(u)];
              case 6:
                S.sent(), S.label = 7;
              case 7:
                return r = Date.now() + m(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, a.prototype.refreshLockWhileAcquired = function(c, s) {
        return e(this, void 0, void 0, function() {
          var r = this;
          return o(this, function(u) {
            return setTimeout(function() {
              return e(r, void 0, void 0, function() {
                var v, y, f;
                return o(this, function(p) {
                  switch (p.label) {
                    case 0:
                      return [4, t.default().lock(s)];
                    case 1:
                      if (p.sent(), !this.acquiredIatSet.has(s))
                        return t.default().unlock(s), [
                          2
                          /*return*/
                        ];
                      if (v = this.storageHandler === void 0 ? g : this.storageHandler, y = v.getItemSync(c), y !== null)
                        f = JSON.parse(y), f.timeRefreshed = Date.now(), v.setItemSync(c, JSON.stringify(f)), t.default().unlock(s);
                      else
                        return t.default().unlock(s), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(c, s), [
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
      }, a.prototype.waitForSomethingToChange = function(c) {
        return e(this, void 0, void 0, function() {
          return o(this, function(s) {
            switch (s.label) {
              case 0:
                return [4, new Promise(function(r) {
                  var u = !1, v = Date.now(), y = 50, f = !1;
                  function p() {
                    if (f || (window.removeEventListener("storage", p), a.removeFromWaiting(p), clearTimeout(w), f = !0), !u) {
                      u = !0;
                      var b = y - (Date.now() - v);
                      b > 0 ? setTimeout(r, b) : r(null);
                    }
                  }
                  window.addEventListener("storage", p), a.addToWaiting(p);
                  var w = setTimeout(p, Math.max(0, c - Date.now()));
                })];
              case 1:
                return s.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a.addToWaiting = function(c) {
        this.removeFromWaiting(c), a.waiters !== void 0 && a.waiters.push(c);
      }, a.removeFromWaiting = function(c) {
        a.waiters !== void 0 && (a.waiters = a.waiters.filter(function(s) {
          return s !== c;
        }));
      }, a.notifyWaiters = function() {
        if (a.waiters !== void 0) {
          var c = a.waiters.slice();
          c.forEach(function(s) {
            return s();
          });
        }
      }, a.prototype.releaseLock = function(c) {
        return e(this, void 0, void 0, function() {
          return o(this, function(s) {
            switch (s.label) {
              case 0:
                return [4, this.releaseLock__private__(c)];
              case 1:
                return [2, s.sent()];
            }
          });
        });
      }, a.prototype.releaseLock__private__ = function(c) {
        return e(this, void 0, void 0, function() {
          var s, r, u, v;
          return o(this, function(y) {
            switch (y.label) {
              case 0:
                return s = this.storageHandler === void 0 ? g : this.storageHandler, r = l + "-" + c, u = s.getItemSync(r), u === null ? [
                  2
                  /*return*/
                ] : (v = JSON.parse(u), v.id !== this.id ? [3, 2] : [4, t.default().lock(v.iat)]);
              case 1:
                y.sent(), this.acquiredIatSet.delete(v.iat), s.removeItemSync(r), t.default().unlock(v.iat), a.notifyWaiters(), y.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a.lockCorrector = function(c) {
        for (var s = Date.now() - 5e3, r = c, u = [], v = 0; ; ) {
          var y = r.keySync(v);
          if (y === null)
            break;
          u.push(y), v++;
        }
        for (var f = !1, p = 0; p < u.length; p++) {
          var w = u[p];
          if (w.includes(l)) {
            var b = r.getItemSync(w);
            if (b !== null) {
              var S = JSON.parse(b);
              (S.timeRefreshed === void 0 && S.timeAcquired < s || S.timeRefreshed !== void 0 && S.timeRefreshed < s) && (r.removeItemSync(w), f = !0);
            }
          }
        }
        f && a.notifyWaiters();
      }, a.waiters = void 0, a;
    }()
  );
  return Ae.default = i, Ae;
}
var Sn;
function Qt() {
  if (Sn) return rt;
  Sn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.LockFactoryReference = void 0;
  var e = so(), o = function(t) {
    return function() {
      return Promise.resolve(new e.default(t));
    };
  }, n = (
    /** @class */
    function() {
      function t(l) {
        this.lockFactory = l;
      }
      return t.init = function(l, g) {
        this.instance === void 0 && (this.instance = new t(
          l ?? o(g)
        ));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return rt.LockFactoryReference = n, rt.default = n, rt;
}
var Oe = {}, Rn;
function wt() {
  if (Rn) return Oe;
  Rn = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.logDebugMessage = Oe.disableLogging = Oe.enableLogging = void 0;
  var e = Kt(), o = "com.supertokens", n = !1;
  function t() {
    n = !0;
  }
  Oe.enableLogging = t;
  function l() {
    n = !1;
  }
  Oe.disableLogging = l;
  function g(d) {
    n && console.log(
      "".concat(o, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(d, '", supertokens-website-ver: "').concat(e.package_version, '"}')
    );
  }
  return Oe.logDebugMessage = g, Oe;
}
var ot = {}, lt = {}, kn;
function io() {
  if (kn) return lt;
  kn = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.DateProvider = void 0;
  var e = je(), o = (
    /** @class */
    function() {
      function n() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return n.init = function() {
        if (n.instance === void 0) {
          n.instance = new n();
          var t = e.default.getReferenceOrThrow().windowHandler.localStorage, l = t.getItemSync(n.CLOCK_SKEW_KEY), g = l !== null ? parseInt(l, 10) : 0;
          n.instance.setClientClockSkewInMillis(g);
        }
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return n.instance;
      }, n.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, n.prototype.setThresholdInSeconds = function(t) {
        this.thresholdInSeconds = t;
      }, n.prototype.setClientClockSkewInMillis = function(t) {
        this.clockSkewInMillis = Math.abs(t) >= this.thresholdInSeconds * 1e3 ? t : 0;
        var l = e.default.getReferenceOrThrow().windowHandler.localStorage;
        l.setItemSync(n.CLOCK_SKEW_KEY, String(t));
      }, n.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, n.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, n.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", n;
    }()
  );
  return lt.DateProvider = o, lt;
}
var In;
function bt() {
  if (In) return ot;
  In = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DateProviderReference = void 0;
  var e = io(), o = (
    /** @class */
    function() {
      function n(t) {
        t !== void 0 ? this.dateProvider = t() : (e.DateProvider.init(), this.dateProvider = e.DateProvider.getReferenceOrThrow());
      }
      return n.init = function(t) {
        n.instance === void 0 && (n.instance = new n(t));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return ot.DateProviderReference = o, ot.default = o, ot;
}
var _n;
function St() {
  return _n || (_n = 1, function(e) {
    var o = Te && Te.__assign || function() {
      return o = Object.assign || function(k) {
        for (var O, A = 1, D = arguments.length; A < D; A++) {
          O = arguments[A];
          for (var M in O) Object.prototype.hasOwnProperty.call(O, M) && (k[M] = O[M]);
        }
        return k;
      }, o.apply(this, arguments);
    }, n = Te && Te.__awaiter || function(k, O, A, D) {
      function M(N) {
        return N instanceof A ? N : new A(function($) {
          $(N);
        });
      }
      return new (A || (A = Promise))(function(N, $) {
        function U(Q) {
          try {
            j(D.next(Q));
          } catch (Z) {
            $(Z);
          }
        }
        function W(Q) {
          try {
            j(D.throw(Q));
          } catch (Z) {
            $(Z);
          }
        }
        function j(Q) {
          Q.done ? N(Q.value) : M(Q.value).then(U, W);
        }
        j((D = D.apply(k, O || [])).next());
      });
    }, t = Te && Te.__generator || function(k, O) {
      var A = {
        label: 0,
        sent: function() {
          if (N[0] & 1) throw N[1];
          return N[1];
        },
        trys: [],
        ops: []
      }, D, M, N, $;
      return $ = { next: U(0), throw: U(1), return: U(2) }, typeof Symbol == "function" && ($[Symbol.iterator] = function() {
        return this;
      }), $;
      function U(j) {
        return function(Q) {
          return W([j, Q]);
        };
      }
      function W(j) {
        if (D) throw new TypeError("Generator is already executing.");
        for (; A; )
          try {
            if (D = 1, M && (N = j[0] & 2 ? M.return : j[0] ? M.throw || ((N = M.return) && N.call(M), 0) : M.next) && !(N = N.call(M, j[1])).done)
              return N;
            switch (M = 0, N && (j = [j[0] & 2, N.value]), j[0]) {
              case 0:
              case 1:
                N = j;
                break;
              case 4:
                return A.label++, { value: j[1], done: !1 };
              case 5:
                A.label++, M = j[1], j = [0];
                continue;
              case 7:
                j = A.ops.pop(), A.trys.pop();
                continue;
              default:
                if (N = A.trys, !(N = N.length > 0 && N[N.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                  A = 0;
                  continue;
                }
                if (j[0] === 3 && (!N || j[1] > N[0] && j[1] < N[3])) {
                  A.label = j[1];
                  break;
                }
                if (j[0] === 6 && A.label < N[1]) {
                  A.label = N[1], N = j;
                  break;
                }
                if (N && A.label < N[2]) {
                  A.label = N[2], A.ops.push(j);
                  break;
                }
                N[2] && A.ops.pop(), A.trys.pop();
                continue;
            }
            j = O.call(k, A);
          } catch (Q) {
            j = [6, Q], M = 0;
          } finally {
            D = N = 0;
          }
        if (j[0] & 5) throw j[1];
        return { value: j[0] ? j[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.updateClockSkewUsingFrontToken = e.fireSessionUpdateEventsIfNecessary = e.setFrontToken = e.getFrontToken = e.setAntiCSRF = e.saveLastAccessTokenUpdate = e.getTokenForHeaderAuth = e.setToken = e.getStorageNameForToken = e.getLocalSessionState = e.onInvalidClaimResponse = e.onTokenUpdate = e.onUnauthorisedResponse = e.FrontToken = e.AntiCsrfToken = void 0;
    var l = zt(), g = Kt(), d = Cr(), m = je(), h = Qt(), i = wt(), a = bt(), c = (
      /** @class */
      function() {
        function k() {
        }
        return k.getToken = function(O) {
          return n(this, void 0, void 0, function() {
            var A;
            return t(this, function(D) {
              switch (D.label) {
                case 0:
                  return (0, i.logDebugMessage)("AntiCsrfToken.getToken: called"), O === void 0 ? (k.tokenInfo = void 0, (0, i.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : k.tokenInfo !== void 0 ? [3, 2] : [4, ne()];
                case 1:
                  return A = D.sent(), A === null ? ((0, i.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (k.tokenInfo = {
                    antiCsrf: A,
                    associatedAccessTokenUpdate: O
                  }, [3, 4]);
                case 2:
                  return k.tokenInfo.associatedAccessTokenUpdate === O ? [3, 4] : (k.tokenInfo = void 0, [4, k.getToken(O)]);
                case 3:
                  return [2, D.sent()];
                case 4:
                  return (0, i.logDebugMessage)("AntiCsrfToken.getToken: returning: " + k.tokenInfo.antiCsrf), [2, k.tokenInfo.antiCsrf];
              }
            });
          });
        }, k.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return t(this, function(O) {
              switch (O.label) {
                case 0:
                  return (0, i.logDebugMessage)("AntiCsrfToken.removeToken: called"), k.tokenInfo = void 0, [4, re(void 0)];
                case 1:
                  return O.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.setItem = function(O, A) {
          return n(this, void 0, void 0, function() {
            return t(this, function(D) {
              switch (D.label) {
                case 0:
                  return O === void 0 ? (k.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, i.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, re(A)]);
                case 1:
                  return D.sent(), k.tokenInfo = {
                    antiCsrf: A,
                    associatedAccessTokenUpdate: O
                  }, [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k;
      }()
    );
    e.AntiCsrfToken = c;
    var s = (
      /** @class */
      function() {
        function k() {
        }
        return k.getTokenInfo = function() {
          return n(this, void 0, void 0, function() {
            var O, A;
            return t(this, function(D) {
              switch (D.label) {
                case 0:
                  return (0, i.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, q()];
                case 1:
                  return O = D.sent(), O !== null ? [3, 5] : [4, R(!1)];
                case 2:
                  return D.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(M) {
                      k.waiters.push(M);
                    })
                  ];
                case 3:
                  return D.sent(), [2, k.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return A = L(O), (0, i.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + A.ate), (0, i.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + A.uid), (0, i.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + A.up), [2, A];
              }
            });
          });
        }, k.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return t(this, function(O) {
              switch (O.label) {
                case 0:
                  return (0, i.logDebugMessage)("FrontToken.removeToken: called"), [4, F(void 0)];
                case 1:
                  return O.sent(), [4, T("access", "")];
                case 2:
                  return O.sent(), [4, T("refresh", "")];
                case 3:
                  return O.sent(), [4, c.removeToken()];
                case 4:
                  return O.sent(), k.waiters.forEach(function(A) {
                    return A(void 0);
                  }), k.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.setItem = function(O) {
          return n(this, void 0, void 0, function() {
            return t(this, function(A) {
              switch (A.label) {
                case 0:
                  return [4, K()];
                case 1:
                  return A.sent(), O === "remove" ? [2, k.removeToken()] : ((0, i.logDebugMessage)("FrontToken.setItem: called"), [4, F(O)]);
                case 2:
                  return A.sent(), k.waiters.forEach(function(D) {
                    return D(void 0);
                  }), k.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.doesTokenExists = function() {
          return n(this, void 0, void 0, function() {
            var O;
            return t(this, function(A) {
              switch (A.label) {
                case 0:
                  return [4, H()];
                case 1:
                  return O = A.sent(), [2, O !== null];
              }
            });
          });
        }, k.waiters = [], k;
      }()
    );
    e.FrontToken = s;
    var r = (
      /** @class */
      function() {
        function k() {
        }
        k.init = function(A, D) {
          (0, i.logDebugMessage)("init: called"), (0, i.logDebugMessage)("init: Input apiBasePath: " + A.apiBasePath), (0, i.logDebugMessage)("init: Input apiDomain: " + A.apiDomain), (0, i.logDebugMessage)("init: Input autoAddCredentials: " + A.autoAddCredentials), (0, i.logDebugMessage)("init: Input sessionTokenBackendDomain: " + A.sessionTokenBackendDomain), (0, i.logDebugMessage)("init: Input isInIframe: " + A.isInIframe), (0, i.logDebugMessage)("init: Input sessionExpiredStatusCode: " + A.sessionExpiredStatusCode), (0, i.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + A.sessionTokenFrontendDomain), (0, i.logDebugMessage)("init: Input tokenTransferMethod: " + A.tokenTransferMethod);
          var M = m.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          k.env = M === void 0 || M.fetch === void 0 ? Qr : M, k.refreshTokenUrl = A.apiDomain + A.apiBasePath + "/session/refresh", k.signOutUrl = A.apiDomain + A.apiBasePath + "/signout", k.rid = "session", k.config = A, k.env.__supertokensOriginalFetch === void 0 && ((0, i.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), k.env.__supertokensOriginalFetch = k.env.fetch.bind(k.env), k.env.__supertokensSessionRecipe = D, k.env.fetch = k.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: k.env.__supertokensOriginalFetch,
            userContext: {}
          }), k.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), k.recipeImpl = k.env.__supertokensSessionRecipe, k.initCalled = !0;
        };
        var O;
        return O = k, k.initCalled = !1, k.doRequest = function(A, D, M) {
          return n(void 0, void 0, void 0, function() {
            var N, $, U, W, j, Q, Z, he, ae, ue, ge, z, le, ut, Ne;
            return t(O, function(oe) {
              switch (oe.label) {
                case 0:
                  if (!k.initCalled)
                    throw Error("init function not called");
                  (0, i.logDebugMessage)("doRequest: start of fetch interception"), N = !1;
                  try {
                    $ = void 0, typeof M == "string" ? $ = M : typeof M == "object" && (typeof M.url == "string" ? $ = M.url : typeof M.href == "string" && ($ = M.href)), N = !k.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      $,
                      k.config.apiDomain,
                      k.config.sessionTokenBackendDomain
                    );
                  } catch (nn) {
                    if (nn.message === "Please provide a valid domain name")
                      (0, i.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), N = !k.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        m.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        k.config.apiDomain,
                        k.config.sessionTokenBackendDomain
                      );
                    else
                      throw nn;
                  }
                  return (0, i.logDebugMessage)("doRequest: Value of doNotDoInterception: " + N), N ? ((0, i.logDebugMessage)("doRequest: Returning without interception"), [4, A(D)]) : [3, 2];
                case 1:
                  return [2, oe.sent()];
                case 2:
                  return U = new Headers(
                    D !== void 0 && D.headers !== void 0 ? D.headers : M.headers
                  ), U.has("Authorization") ? [4, P("access")] : [3, 5];
                case 3:
                  return W = oe.sent(), [4, P("refresh")];
                case 4:
                  j = oe.sent(), W !== void 0 && j !== void 0 && U.get("Authorization") === "Bearer ".concat(W) && ((0, i.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), U.delete("Authorization")), oe.label = 5;
                case 5:
                  (0, i.logDebugMessage)("doRequest: Interception started"), l.ProcessState.getInstance().addState(
                    l.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), Q = 0, Z = void 0, oe.label = 6;
                case 6:
                  return [4, R(!0)];
                case 7:
                  return he = oe.sent(), ae = new Headers(U), ue = o(o({}, D), { headers: ae }), he.status !== "EXISTS" ? [3, 9] : [4, c.getToken(he.lastAccessTokenUpdate)];
                case 8:
                  ge = oe.sent(), ge !== void 0 && ((0, i.logDebugMessage)("doRequest: Adding anti-csrf token to request"), ae.set("anti-csrf", ge)), oe.label = 9;
                case 9:
                  return k.config.autoAddCredentials && ((0, i.logDebugMessage)("doRequest: Adding credentials include"), ue === void 0 ? ue = {
                    credentials: "include"
                  } : ue.credentials === void 0 && (ue = o(o({}, ue), {
                    credentials: "include"
                  }))), ae.has("rid") ? (0, i.logDebugMessage)("doRequest: rid header was already there in request") : ((0, i.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), ae.set("rid", "anti-csrf")), z = k.config.tokenTransferMethod, (0, i.logDebugMessage)("doRequest: Adding st-auth-mode header: " + z), ae.set("st-auth-mode", z), [4, x(ae)];
                case 10:
                  return oe.sent(), (0, i.logDebugMessage)("doRequest: Making user's http call"), [4, A(ue)];
                case 11:
                  return le = oe.sent(), (0, i.logDebugMessage)("doRequest: User's http call ended"), [4, E(le)];
                case 12:
                  if (oe.sent(), V(
                    he.status === "EXISTS",
                    le.status,
                    le.headers.get("front-token")
                  ), le.status !== k.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, i.logDebugMessage)("doRequest: Status code is: " + le.status), Q >= k.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, i.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(Q, ", maxRetryAttemptsForSessionRefresh: ").concat(k.config.maxRetryAttemptsForSessionRefresh)
                    ), ut = "Received a 401 response from ".concat(
                      M,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      k.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(ut), new Error(ut);
                  return [4, w(he)];
                case 13:
                  if (Ne = oe.sent(), Q++, (0, i.logDebugMessage)("doRequest: sessionRefreshAttempts: " + Q), Ne.result !== "RETRY") {
                    if ((0, i.logDebugMessage)("doRequest: Not retrying original request"), Ne.error !== void 0)
                      if (Ne.error instanceof Response)
                        Z = Ne.error;
                      else
                        throw Ne.error;
                    else
                      Z = le;
                    return [3, 18];
                  }
                  return (0, i.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return le.status !== k.config.invalidClaimStatusCode ? [3, 16] : [4, S(le)];
                case 15:
                  oe.sent(), oe.label = 16;
                case 16:
                  return [2, le];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, Z];
              }
            });
          });
        }, k.attemptRefreshingSession = function() {
          return n(void 0, void 0, void 0, function() {
            var A, D;
            return t(O, function(M) {
              switch (M.label) {
                case 0:
                  if (!k.initCalled)
                    throw Error("init function not called");
                  return [4, R(!1)];
                case 1:
                  return A = M.sent(), [4, w(A)];
                case 2:
                  if (D = M.sent(), D.result === "API_ERROR")
                    throw D.error;
                  return [2, D.result === "RETRY"];
              }
            });
          });
        }, k;
      }()
    );
    e.default = r;
    var u = "st-last-access-token-update", v = "st-refresh-token", y = "st-access-token", f = "sAntiCsrf", p = "sFrontToken";
    function w(k) {
      return n(this, void 0, void 0, function() {
        var O, A, D, M, N, $, U, W, j, Q, Z, he, ae, ue, ge;
        return t(this, function(z) {
          switch (z.label) {
            case 0:
              return [4, h.default.getReferenceOrThrow().lockFactory()];
            case 1:
              O = z.sent(), z.label = 2;
            case 2:
              return (0, i.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, O.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!z.sent()) return [3, 21];
              (0, i.logDebugMessage)("onUnauthorisedResponse: lock acquired"), z.label = 4;
            case 4:
              return z.trys.push([4, 17, 19, 21]), [4, R(!1)];
            case 5:
              return A = z.sent(), A.status === "NOT_EXISTS" ? ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), r.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (D = A.status === "EXISTS", M = k.status === "EXISTS", N = A.status !== k.status, $ = "lastAccessTokenUpdate" in A && "lastAccessTokenUpdate" in k && A.lastAccessTokenUpdate !== k.lastAccessTokenUpdate, N && D ? ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : D && M && $ ? ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (U = new Headers(), k.status !== "EXISTS" ? [3, 7] : [4, c.getToken(k.lastAccessTokenUpdate)]));
            case 6:
              W = z.sent(), W !== void 0 && ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), U.set("anti-csrf", W)), z.label = 7;
            case 7:
              return (0, i.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), U.set("rid", r.rid), U.set("fdi-version", g.supported_fdi.join(",")), j = r.config.tokenTransferMethod, (0, i.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + j), U.set("st-auth-mode", j), [4, x(U, !0)];
            case 8:
              return z.sent(), (0, i.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                r.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: U
                  },
                  url: r.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return Q = z.sent(), (0, i.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                r.env.__supertokensOriginalFetch(Q.url, Q.requestInit)
              ];
            case 10:
              return Z = z.sent(), (0, i.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, E(Z)];
            case 11:
              return z.sent(), (0, i.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + Z.status), he = Z.status === r.config.sessionExpiredStatusCode, Z.headers.get("front-token") !== null ? [3, 14] : he ? [4, s.setItem("remove")] : [3, 13];
            case 12:
              return z.sent(), [3, 14];
            case 13:
              if (Z.status === 200)
                throw ae = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(ae), new Error(ae);
              z.label = 14;
            case 14:
              if (V(
                k.status === "EXISTS",
                Z.status,
                he && Z.headers.get("front-token") === null ? "remove" : Z.headers.get("front-token")
              ), Z.status >= 300)
                throw Z;
              return [
                4,
                r.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: Z.clone(),
                  requestInit: Q.requestInit,
                  url: Q.url,
                  userContext: {}
                })
              ];
            case 15:
              return z.sent(), [4, R(!1)];
            case 16:
              return z.sent().status === "NOT_EXISTS" ? ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (r.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, i.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return ue = z.sent(), [4, R(!1)];
            case 18:
              return z.sent().status === "NOT_EXISTS" ? ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: ue }]) : ((0, i.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: ue }]);
            case 19:
              return [4, O.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return z.sent(), (0, i.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, R(!1)];
            case 22:
              return ge = z.sent(), ge.status === "NOT_EXISTS" ? ((0, i.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : ge.status !== k.status || ge.status === "EXISTS" && k.status === "EXISTS" && ge.lastAccessTokenUpdate !== k.lastAccessTokenUpdate ? ((0, i.logDebugMessage)(
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
    e.onUnauthorisedResponse = w;
    function b() {
      (0, i.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), r.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    e.onTokenUpdate = b;
    function S(k) {
      return n(this, void 0, void 0, function() {
        var O;
        return t(this, function(A) {
          switch (A.label) {
            case 0:
              return A.trys.push([0, 2, , 3]), [
                4,
                r.recipeImpl.getInvalidClaimsFromResponse({
                  response: k,
                  userContext: {}
                })
              ];
            case 1:
              return O = A.sent(), O && r.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: O,
                userContext: {}
              }), [3, 3];
            case 2:
              return A.sent(), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onInvalidClaimResponse = S;
    function R(k) {
      return n(this, void 0, void 0, function() {
        var O, A, D, M, N, $, U;
        return t(this, function(W) {
          switch (W.label) {
            case 0:
              return (0, i.logDebugMessage)("getLocalSessionState: called"), [4, C(u)];
            case 1:
              return O = W.sent(), [4, s.doesTokenExists()];
            case 2:
              return A = W.sent(), A && O !== void 0 ? ((0, i.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: O }]) : [3, 3];
            case 3:
              return O ? ((0, i.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return D = {
                status: "MAY_EXIST"
              }, k ? ((0, i.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, w(D)]) : [3, 8];
            case 5:
              return M = W.sent(), M.result !== "RETRY" ? ((0, i.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + M.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, C(u)];
            case 6:
              return N = W.sent(), [4, s.doesTokenExists()];
            case 7:
              if ($ = W.sent(), !$ || N === void 0)
                throw U = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(U), new Error(U);
              return (0, i.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: N }];
            case 8:
              return (0, i.logDebugMessage)("getLocalSessionState: returning: " + D.status), [2, D];
          }
        });
      });
    }
    e.getLocalSessionState = R;
    function I(k) {
      switch (k) {
        case "access":
          return y;
        case "refresh":
          return v;
      }
    }
    e.getStorageNameForToken = I;
    function T(k, O) {
      var A = I(k);
      return O !== "" ? ((0, i.logDebugMessage)("setToken: saved ".concat(k, " token into cookies")), _(A, O, Date.now() + 31536e5)) : ((0, i.logDebugMessage)("setToken: cleared ".concat(k, " token from cookies")), _(A, O, 0));
    }
    e.setToken = T;
    function _(k, O, A) {
      var D = "Fri, 31 Dec 9999 23:59:59 GMT";
      A !== Number.MAX_SAFE_INTEGER && (D = new Date(A).toUTCString());
      var M = r.config.sessionTokenFrontendDomain;
      return M === "localhost" || M === m.default.getReferenceOrThrow().windowHandler.location.getHostName() ? d.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(k, "=").concat(O, ";expires=").concat(D, ";path=/;samesite=").concat(r.config.isInIframe ? "none;secure" : "lax")
      ) : d.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(k, "=").concat(O, ";expires=").concat(D, ";domain=").concat(M, ";path=/;samesite=").concat(r.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function P(k) {
      return n(this, void 0, void 0, function() {
        var O;
        return t(this, function(A) {
          return O = I(k), [2, C(O)];
        });
      });
    }
    e.getTokenForHeaderAuth = P;
    function C(k) {
      return n(this, void 0, void 0, function() {
        var O, A, D, M;
        return t(this, function(N) {
          switch (N.label) {
            case 0:
              return A = "; ", [4, d.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return O = A + N.sent(), D = O.split("; " + k + "="), D.length >= 2 && (M = D.pop(), M !== void 0) ? [2, M.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function x(k, O) {
      return O === void 0 && (O = !1), n(this, void 0, void 0, function() {
        var A, D;
        return t(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, i.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, P("access")];
            case 1:
              return A = M.sent(), [4, P("refresh")];
            case 2:
              return D = M.sent(), (O || A !== void 0) && D !== void 0 ? k.has("Authorization") ? (0, i.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, i.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), k.set(
                "Authorization",
                "Bearer ".concat(O ? D : A)
              )) : (0, i.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: token for header based auth not found"
              ), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function E(k) {
      return n(this, void 0, void 0, function() {
        var O, A, D, M, N;
        return t(this, function($) {
          switch ($.label) {
            case 0:
              return (0, i.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), O = k.headers.get("st-refresh-token"), O === null ? [3, 2] : ((0, i.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, T("refresh", O)]);
            case 1:
              $.sent(), $.label = 2;
            case 2:
              return A = k.headers.get("st-access-token"), A === null ? [3, 4] : ((0, i.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, T("access", A)]);
            case 3:
              $.sent(), $.label = 4;
            case 4:
              return D = k.headers.get("front-token"), D === null ? [3, 6] : ((0, i.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + D), [4, s.setItem(D)]);
            case 5:
              $.sent(), (0, e.updateClockSkewUsingFrontToken)({ frontToken: D, responseHeaders: k.headers }), $.label = 6;
            case 6:
              return M = k.headers.get("anti-csrf"), M === null ? [3, 9] : [4, R(!1)];
            case 7:
              return N = $.sent(), N.status !== "EXISTS" ? [3, 9] : ((0, i.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, c.setItem(N.lastAccessTokenUpdate, M)]);
            case 8:
              $.sent(), $.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var B = void 0;
    function K() {
      return n(this, void 0, void 0, function() {
        var k;
        return t(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, i.logDebugMessage)("saveLastAccessTokenUpdate: called"), k = Date.now().toString(), (0, i.logDebugMessage)("saveLastAccessTokenUpdate: setting " + k), [4, _(u, k, Number.MAX_SAFE_INTEGER)];
            case 1:
              return O.sent(), B !== void 0 ? [3, 3] : [4, C(u)];
            case 2:
              B = O.sent() === k, O.label = 3;
            case 3:
              return B === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, _("sIRTFrontend", "", 0)];
            case 4:
              return O.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.saveLastAccessTokenUpdate = K;
    function ne() {
      return n(this, void 0, void 0, function() {
        function k() {
          return n(this, void 0, void 0, function() {
            var A, D, M, N, $;
            return t(this, function(U) {
              switch (U.label) {
                case 0:
                  return D = "; ", [
                    4,
                    d.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return A = D + U.sent(), M = A.split("; " + f + "="), M.length >= 2 && (N = M.pop(), N !== void 0) ? ($ = N.split(";").shift(), $ === void 0 ? [2, null] : [2, $]) : [2, null];
              }
            });
          });
        }
        var O;
        return t(this, function(A) {
          switch (A.label) {
            case 0:
              return (0, i.logDebugMessage)("getAntiCSRFToken: called"), [4, R(!0)];
            case 1:
              return A.sent().status !== "EXISTS" ? ((0, i.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, k()];
            case 2:
              return O = A.sent(), (0, i.logDebugMessage)("getAntiCSRFToken: returning: " + O), [2, O];
          }
        });
      });
    }
    function re(k) {
      return n(this, void 0, void 0, function() {
        return t(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, i.logDebugMessage)("setAntiCSRF: called: " + k), k === void 0 ? [3, 2] : [4, _(f, k, Number.MAX_SAFE_INTEGER)];
            case 1:
              return O.sent(), [3, 4];
            case 2:
              return [4, _(f, "", 0)];
            case 3:
              O.sent(), O.label = 4;
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
    function H() {
      return n(this, void 0, void 0, function() {
        var k;
        return t(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, i.logDebugMessage)("getFrontTokenFromCookie: called"), [4, C(p)];
            case 1:
              return k = O.sent(), [2, k === void 0 ? null : k];
          }
        });
      });
    }
    function L(k) {
      return JSON.parse(decodeURIComponent(escape(atob(k))));
    }
    function q() {
      return n(this, void 0, void 0, function() {
        var k;
        return t(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, i.logDebugMessage)("getFrontToken: called"), [4, R(!0)];
            case 1:
              return O.sent().status !== "EXISTS" ? ((0, i.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, H()];
            case 2:
              return k = O.sent(), (0, i.logDebugMessage)("getFrontToken: returning: " + k), [2, k];
          }
        });
      });
    }
    e.getFrontToken = q;
    function F(k) {
      return n(this, void 0, void 0, function() {
        var O, A, D;
        return t(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, i.logDebugMessage)("setFrontToken: called"), [4, H()];
            case 1:
              return O = M.sent(), O !== null && k !== void 0 && (A = L(O).up, D = L(k).up, JSON.stringify(A) !== JSON.stringify(D) && b()), k !== void 0 ? [3, 3] : [4, _(p, "", 0)];
            case 2:
              return M.sent(), [3, 5];
            case 3:
              return [4, _(p, k, Number.MAX_SAFE_INTEGER)];
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
    e.setFrontToken = F;
    function V(k, O, A) {
      if (A == null) {
        (0, i.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var D = A !== "remove";
      (0, i.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(k, " frontTokenExistsAfter: ").concat(D, " status: ").concat(O)
      ), k ? D || (O === r.config.sessionExpiredStatusCode ? ((0, i.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), r.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, i.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), r.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : D && ((0, i.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), r.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    e.fireSessionUpdateEventsIfNecessary = V;
    var X = function(k) {
      var O = k.frontToken, A = k.responseHeaders;
      if ((0, i.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + O), O == null || O === "remove") {
        (0, i.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var D = L(O), M = r.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: D.up,
        responseHeaders: A
      });
      a.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(M), (0, i.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    e.updateClockSkewUsingFrontToken = X;
  }(Te)), Te;
}
var st = {}, Tn;
function Ar() {
  if (Tn) return st;
  Tn = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.SessionClaimValidatorStore = void 0;
  var e = (
    /** @class */
    function() {
      function o() {
      }
      return o.claimValidatorsAddedByOtherRecipes = [], o.addClaimValidatorFromOtherRecipe = function(n) {
        o.claimValidatorsAddedByOtherRecipes.push(n);
      }, o.getClaimValidatorsAddedByOtherRecipes = function() {
        return o.claimValidatorsAddedByOtherRecipes;
      }, o;
    }()
  );
  return st.SessionClaimValidatorStore = e, st.default = e, st;
}
var Cn;
function ao() {
  if (Cn) return ct;
  Cn = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.getGlobalClaimValidators = void 0;
  var e = Xt(), o = St(), n = Ar();
  function t(l, g) {
    var d = (0, e.getNormalisedUserContext)(g), m = n.default.getClaimValidatorsAddedByOtherRecipes(), h = o.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: m,
      userContext: d
    }), i = l !== void 0 ? l(h, d) : h;
    return i;
  }
  return ct.getGlobalClaimValidators = t, ct;
}
var An;
function uo() {
  return An || (An = 1, function(e) {
    function o(n) {
      for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
    }
    e.__esModule = !0, o(ao());
  }(Lt)), Lt;
}
var On;
function Ie() {
  if (On) return J;
  On = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.normaliseUser = J.normaliseUserResponse = J.getGlobalClaimValidators = J.getHashFromLocation = J.getNormalisedUserContext = J.checkForSSRErrorAndAppendIfNeeded = J.getAllQueryParams = J.getQueryParams = J.isTest = J.normaliseInputAppInfoOrThrowError = J.appendQueryParamsToURL = void 0;
  var e = Gt(), o = Zr(), n = eo(), t = Tr(), l = uo();
  function g(f, p) {
    if (p === void 0)
      return f;
    try {
      var w = new URL(f);
      return Object.entries(p).forEach(function(R) {
        var I = R[0], T = R[1];
        w.searchParams.set(I, T);
      }), w.href;
    } catch {
      var b = f.startsWith("/") ? "http:localhost" : "http://localhost/", S = new URL("".concat(b).concat(f));
      return Object.entries(p).forEach(function(I) {
        var T = I[0], _ = I[1];
        S.searchParams.set(T, _);
      }), "".concat(S.pathname).concat(S.search);
    }
  }
  J.appendQueryParamsToURL = g;
  function d(f, p) {
    return p !== void 0 ? new t.default(p) : new t.default(f);
  }
  function m(f) {
    if (f === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (f.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (f.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var p = new t.default("");
    return f.apiGatewayPath !== void 0 && (p = new t.default(f.apiGatewayPath)), {
      appName: f.appName,
      apiDomain: new n.default(f.apiDomain),
      apiBasePath: p.appendPath(
        d(o.DEFAULT_API_BASE_PATH, f.apiBasePath)
      )
    };
  }
  J.normaliseInputAppInfoOrThrowError = m;
  function h() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  J.isTest = h;
  function i(f) {
    var p = new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), w = p.get(f);
    if (w !== null)
      return w;
  }
  J.getQueryParams = i;
  function a() {
    return new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  J.getAllQueryParams = a;
  function c(f) {
    return typeof window > "u" && (f = f + o.SSR_ERROR), f;
  }
  J.checkForSSRErrorAndAppendIfNeeded = c;
  function s(f) {
    return f === void 0 ? {} : f;
  }
  J.getNormalisedUserContext = s;
  function r() {
    return e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  J.getHashFromLocation = r;
  function u(f) {
    var p = f.overrideGlobalClaimValidators, w = f.userContext;
    return (0, l.getGlobalClaimValidators)(p, w);
  }
  J.getGlobalClaimValidators = u;
  function v(f, p) {
    return "createdNewRecipeUser" in p ? p : {
      createdNewRecipeUser: p.createdNewUser,
      user: y(f, p.user)
    };
  }
  J.normaliseUserResponse = v;
  function y(f, p) {
    if ("loginMethods" in p)
      return p;
    var w = p.email !== void 0 ? [p.email] : [], b = p.phoneNumber !== void 0 ? [p.phoneNumber] : [], S = p.thirdParty !== void 0 ? [p.thirdParty] : [];
    return {
      id: p.id,
      emails: w,
      phoneNumbers: b,
      thirdParty: S,
      isPrimaryUser: !1,
      tenantIds: p.tenantIds,
      timeJoined: p.timeJoined,
      loginMethods: [
        {
          recipeId: f,
          recipeUserId: p.id,
          timeJoined: p.timeJoined,
          tenantIds: p.tenantIds,
          email: p.email,
          phoneNumber: p.email
        }
      ]
    };
  }
  return J.normaliseUser = y, J;
}
var pe = {}, Be = {}, dt = {}, Pe = {}, Pn;
function co() {
  if (Pn) return Pe;
  Pn = 1;
  var e = Pe && Pe.__awaiter || function(t, l, g, d) {
    function m(h) {
      return h instanceof g ? h : new g(function(i) {
        i(h);
      });
    }
    return new (g || (g = Promise))(function(h, i) {
      function a(r) {
        try {
          s(d.next(r));
        } catch (u) {
          i(u);
        }
      }
      function c(r) {
        try {
          s(d.throw(r));
        } catch (u) {
          i(u);
        }
      }
      function s(r) {
        r.done ? h(r.value) : m(r.value).then(a, c);
      }
      s((d = d.apply(t, l || [])).next());
    });
  }, o = Pe && Pe.__generator || function(t, l) {
    var g = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, d, m, h, i;
    return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function a(s) {
      return function(r) {
        return c([s, r]);
      };
    }
    function c(s) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (d = 1, m && (h = s[0] & 2 ? m.return : s[0] ? m.throw || ((h = m.return) && h.call(m), 0) : m.next) && !(h = h.call(m, s[1])).done)
            return h;
          switch (m = 0, h && (s = [s[0] & 2, h.value]), s[0]) {
            case 0:
            case 1:
              h = s;
              break;
            case 4:
              return g.label++, { value: s[1], done: !1 };
            case 5:
              g.label++, m = s[1], s = [0];
              continue;
            case 7:
              s = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (h = g.trys, !(h = h.length > 0 && h[h.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                g = 0;
                continue;
              }
              if (s[0] === 3 && (!h || s[1] > h[0] && s[1] < h[3])) {
                g.label = s[1];
                break;
              }
              if (s[0] === 6 && g.label < h[1]) {
                g.label = h[1], h = s;
                break;
              }
              if (h && g.label < h[2]) {
                g.label = h[2], g.ops.push(s);
                break;
              }
              h[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          s = l.call(t, g);
        } catch (r) {
          s = [6, r], m = 0;
        } finally {
          d = h = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.normaliseRecipeModuleConfig = void 0;
  function n(t) {
    var l = this, g = t.preAPIHook;
    g === void 0 && (g = function(m) {
      return e(l, void 0, void 0, function() {
        return o(this, function(h) {
          return [2, m];
        });
      });
    });
    var d = t.postAPIHook;
    return d === void 0 && (d = function() {
      return e(l, void 0, void 0, function() {
        return o(this, function(m) {
          return [
            2
            /*return*/
          ];
        });
      });
    }), {
      recipeId: t.recipeId,
      appInfo: t.appInfo,
      clientType: t.clientType,
      preAPIHook: g,
      postAPIHook: d
    };
  }
  return Pe.normaliseRecipeModuleConfig = n, Pe;
}
var En;
function Jt() {
  if (En) return dt;
  En = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.normaliseAuthRecipe = void 0;
  var e = co();
  function o(n) {
    return (0, e.normaliseRecipeModuleConfig)(n);
  }
  return dt.normaliseAuthRecipe = o, dt;
}
var xn;
function lo() {
  if (xn) return Be;
  xn = 1;
  var e = Be && Be.__assign || function() {
    return e = Object.assign || function(t) {
      for (var l, g = 1, d = arguments.length; g < d; g++) {
        l = arguments[g];
        for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (t[m] = l[m]);
      }
      return t;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Be, "__esModule", { value: !0 }), Be.normaliseUserInput = void 0;
  var o = Jt();
  function n(t) {
    var l = e(
      {
        functions: function(g) {
          return g;
        }
      },
      t.override
    );
    return e(e({}, (0, o.normaliseAuthRecipe)(t)), { override: l });
  }
  return Be.normaliseUserInput = n, Be;
}
var it = {}, Ge = {}, Dn;
function fo() {
  if (Dn) return Ge;
  Dn = 1;
  var e = Ge && Ge.__assign || function() {
    return e = Object.assign || function(n) {
      for (var t, l = 1, g = arguments.length; l < g; l++) {
        t = arguments[l];
        for (var d in t) Object.prototype.hasOwnProperty.call(t, d) && (n[d] = t[d]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.getProxyObject = void 0;
  function o(n) {
    for (var t = e(e({}, n), { _call: function(i, a) {
      throw new Error("This function should only be called through the recipe object");
    } }), l = Object.keys(t), g = function(i) {
      i !== "_call" && (t[i] = function() {
        for (var a = [], c = 0; c < arguments.length; c++)
          a[c] = arguments[c];
        return this._call(i, a);
      });
    }, d = 0, m = l; d < m.length; d++) {
      var h = m[d];
      g(h);
    }
    return t;
  }
  return Ge.getProxyObject = o, Ge;
}
var Mn;
function Et() {
  if (Mn) return it;
  Mn = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.OverrideableBuilder = void 0;
  var e = fo(), o = (
    /** @class */
    function() {
      function n(t) {
        this.layers = [t], this.proxies = [];
      }
      return n.prototype.override = function(t) {
        for (var l = (0, e.getProxyObject)(this.layers[0]), g = t(l, this), d = 0, m = Object.keys(this.layers[0]); d < m.length; d++) {
          var h = m[d];
          g[h] === l[h] || h === "_call" ? delete g[h] : g[h] === void 0 && (g[h] = null);
        }
        return this.layers.push(g), this.proxies.push(l), this;
      }, n.prototype.build = function() {
        var t = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var l = 0, g = this.layers; l < g.length; l++)
          for (var d = g[l], m = 0, h = Object.keys(d); m < h.length; m++) {
            var i = h[m], a = d[i];
            a !== void 0 && (a === null ? this.result[i] = void 0 : typeof a == "function" ? this.result[i] = a.bind(this.result) : this.result[i] = a);
          }
        for (var c = function(u) {
          var v = s.proxies[u];
          v._call = function(y, f) {
            for (var p = u; p >= 0; --p) {
              var w = t.layers[p][y];
              if (w != null)
                return w.bind(t.result).apply(void 0, f);
            }
          };
        }, s = this, r = 0; r < this.proxies.length; ++r)
          c(r);
        return this.result;
      }, n;
    }()
  );
  return it.OverrideableBuilder = o, it.default = o, it;
}
var ye = {}, we = {}, Xe = {}, Ln;
function ho() {
  return Ln || (Ln = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.supported_fdi = Xe.package_version = void 0, Xe.package_version = "0.14.0", Xe.supported_fdi = ["3.1", "4.0"]), Xe;
}
var Ct = {}, Ut = {}, ze = {}, Un;
function Or() {
  if (Un) return ze;
  Un = 1;
  var e = ze && ze.__extends || /* @__PURE__ */ function() {
    var n = function(t, l) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, d) {
        g.__proto__ = d;
      } || function(g, d) {
        for (var m in d) Object.prototype.hasOwnProperty.call(d, m) && (g[m] = d[m]);
      }, n(t, l);
    };
    return function(t, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      n(t, l);
      function g() {
        this.constructor = t;
      }
      t.prototype = l === null ? Object.create(l) : (g.prototype = l.prototype, new g());
    };
  }();
  Object.defineProperty(ze, "__esModule", { value: !0 }), ze.STGeneralError = void 0;
  var o = (
    /** @class */
    function(n) {
      e(t, n);
      function t(l) {
        var g = n.call(this, l) || this;
        return g.isSuperTokensGeneralError = !0, g;
      }
      return t.isThisError = function(l) {
        return l.isSuperTokensGeneralError === !0;
      }, t;
    }(Error)
  );
  return ze.STGeneralError = o, ze;
}
var Hn;
function go() {
  return Hn || (Hn = 1, function(e) {
    function o(t) {
      for (var l in t) e.hasOwnProperty(l) || (e[l] = t[l]);
    }
    e.__esModule = !0;
    let n = Or();
    n.default !== void 0 ? o(n) : o({
      default: n,
      ...n
    });
  }(Ut)), Ut;
}
var Nn;
function Pr() {
  if (Nn) return Ct;
  Nn = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  var e = go();
  return Ct.default = e.STGeneralError, Ct;
}
var Fn;
function Yt() {
  if (Fn) return we;
  Fn = 1;
  var e = we && we.__assign || function() {
    return e = Object.assign || function(m) {
      for (var h, i = 1, a = arguments.length; i < a; i++) {
        h = arguments[i];
        for (var c in h) Object.prototype.hasOwnProperty.call(h, c) && (m[c] = h[c]);
      }
      return m;
    }, e.apply(this, arguments);
  }, o = we && we.__awaiter || function(m, h, i, a) {
    function c(s) {
      return s instanceof i ? s : new i(function(r) {
        r(s);
      });
    }
    return new (i || (i = Promise))(function(s, r) {
      function u(f) {
        try {
          y(a.next(f));
        } catch (p) {
          r(p);
        }
      }
      function v(f) {
        try {
          y(a.throw(f));
        } catch (p) {
          r(p);
        }
      }
      function y(f) {
        f.done ? s(f.value) : c(f.value).then(u, v);
      }
      y((a = a.apply(m, h || [])).next());
    });
  }, n = we && we.__generator || function(m, h) {
    var i = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, a, c, s, r;
    return r = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (r[Symbol.iterator] = function() {
      return this;
    }), r;
    function u(y) {
      return function(f) {
        return v([y, f]);
      };
    }
    function v(y) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (a = 1, c && (s = y[0] & 2 ? c.return : y[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, y[1])).done)
            return s;
          switch (c = 0, s && (y = [y[0] & 2, s.value]), y[0]) {
            case 0:
            case 1:
              s = y;
              break;
            case 4:
              return i.label++, { value: y[1], done: !1 };
            case 5:
              i.label++, c = y[1], y = [0];
              continue;
            case 7:
              y = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                i = 0;
                continue;
              }
              if (y[0] === 3 && (!s || y[1] > s[0] && y[1] < s[3])) {
                i.label = y[1];
                break;
              }
              if (y[0] === 6 && i.label < s[1]) {
                i.label = s[1], s = y;
                break;
              }
              if (s && i.label < s[2]) {
                i.label = s[2], i.ops.push(y);
                break;
              }
              s[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          y = h.call(m, i);
        } catch (f) {
          y = [6, f], c = 0;
        } finally {
          a = s = 0;
        }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(we, "__esModule", { value: !0 });
  var t = Tr(), l = ho(), g = Pr(), d = (
    /** @class */
    function() {
      function m(i, a) {
        var c = this;
        this.recipeId = i, this.appInfo = a, this.get = function(s, r, u, v, y, f) {
          return o(c, void 0, void 0, function() {
            var p, w;
            return n(this, function(b) {
              switch (b.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(s, r, v),
                      e({ method: "GET" }, u),
                      y,
                      f
                    )
                  ];
                case 1:
                  return p = b.sent(), [4, this.getResponseJsonOrThrowGeneralError(p)];
                case 2:
                  return w = b.sent(), [
                    2,
                    {
                      jsonBody: w,
                      fetchResponse: p
                    }
                  ];
              }
            });
          });
        }, this.post = function(s, r, u, v, y) {
          return o(c, void 0, void 0, function() {
            var f, p;
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  if (u.body === void 0)
                    throw new Error("Post request must have a body");
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(s, r),
                      e({ method: "POST" }, u),
                      v,
                      y
                    )
                  ];
                case 1:
                  return f = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(f)];
                case 2:
                  return p = w.sent(), [
                    2,
                    {
                      jsonBody: p,
                      fetchResponse: f
                    }
                  ];
              }
            });
          });
        }, this.delete = function(s, r, u, v, y) {
          return o(c, void 0, void 0, function() {
            var f, p;
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(s, r),
                      e({ method: "DELETE" }, u),
                      v,
                      y
                    )
                  ];
                case 1:
                  return f = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(f)];
                case 2:
                  return p = w.sent(), [
                    2,
                    {
                      jsonBody: p,
                      fetchResponse: f
                    }
                  ];
              }
            });
          });
        }, this.put = function(s, r, u, v, y) {
          return o(c, void 0, void 0, function() {
            var f, p;
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(s, r),
                      e({ method: "PUT" }, u),
                      v,
                      y
                    )
                  ];
                case 1:
                  return f = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(f)];
                case 2:
                  return p = w.sent(), [
                    2,
                    {
                      jsonBody: p,
                      fetchResponse: f
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(s, r, u, v) {
          return o(c, void 0, void 0, function() {
            var y, f, p, w, b, S;
            return n(this, function(R) {
              switch (R.label) {
                case 0:
                  return r === void 0 ? y = {} : y = r.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: u,
                      url: s,
                      requestInit: e(e({}, r), {
                        headers: e(e({}, y), {
                          "fdi-version": l.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return f = R.sent(), p = f.requestInit, w = f.url, [4, fetch(w, p)];
                case 2:
                  if (b = R.sent(), b.status >= 300)
                    throw b;
                  return v === void 0 ? [3, 4] : (S = b.clone(), [
                    4,
                    v({
                      requestInit: p,
                      url: s,
                      fetchResponse: S
                    })
                  ]);
                case 3:
                  R.sent(), R.label = 4;
                case 4:
                  return [2, b];
              }
            });
          });
        }, this.callPreAPIHook = function(s) {
          return o(c, void 0, void 0, function() {
            var r;
            return n(this, function(u) {
              switch (u.label) {
                case 0:
                  return s.preAPIHook === void 0 ? [
                    2,
                    {
                      url: s.url,
                      requestInit: s.requestInit
                    }
                  ] : [
                    4,
                    s.preAPIHook({
                      url: s.url,
                      requestInit: s.requestInit
                    })
                  ];
                case 1:
                  return r = u.sent(), [2, r];
              }
            });
          });
        }, this.getFullUrl = function(s, r, u) {
          var v = c.appInfo.apiBasePath.getAsStringDangerous();
          s !== void 0 && s !== "public" && (v = "".concat(v, "/").concat(s));
          var y = new t.default(r), f = "".concat(c.appInfo.apiDomain.getAsStringDangerous()).concat(v).concat(y.getAsStringDangerous());
          return u === void 0 ? f : f + "?" + new URLSearchParams(u);
        }, this.getResponseJsonOrThrowGeneralError = function(s) {
          return o(c, void 0, void 0, function() {
            var r, u;
            return n(this, function(v) {
              switch (v.label) {
                case 0:
                  return [4, s.clone().json()];
                case 1:
                  if (r = v.sent(), r.status === "GENERAL_ERROR")
                    throw u = r.message === void 0 ? "No Error Message Provided" : r.message, new g.default(u);
                  return [2, r];
              }
            });
          });
        };
      }
      var h;
      return h = m, m.preparePreAPIHook = function(i) {
        var a = i.recipePreAPIHook, c = i.action, s = i.options, r = i.userContext;
        return function(u) {
          return o(void 0, void 0, void 0, function() {
            var v;
            return n(h, function(y) {
              switch (y.label) {
                case 0:
                  return [
                    4,
                    a(
                      e(e({}, u), { action: c, userContext: r })
                    )
                  ];
                case 1:
                  return v = y.sent(), s === void 0 || s.preAPIHook === void 0 ? [2, v] : [
                    2,
                    s.preAPIHook({
                      url: v.url,
                      requestInit: v.requestInit,
                      userContext: r
                    })
                  ];
              }
            });
          });
        };
      }, m.preparePostAPIHook = function(i) {
        var a = i.recipePostAPIHook, c = i.action, s = i.userContext;
        return function(r) {
          return o(void 0, void 0, void 0, function() {
            return n(h, function(u) {
              switch (u.label) {
                case 0:
                  return [
                    4,
                    a(
                      e(e({}, r), { userContext: s, action: c })
                    )
                  ];
                case 1:
                  return u.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
      }, m;
    }()
  );
  return we.default = d, we;
}
var qn;
function vo() {
  if (qn) return ye;
  qn = 1;
  var e = ye && ye.__awaiter || function(g, d, m, h) {
    function i(a) {
      return a instanceof m ? a : new m(function(c) {
        c(a);
      });
    }
    return new (m || (m = Promise))(function(a, c) {
      function s(v) {
        try {
          u(h.next(v));
        } catch (y) {
          c(y);
        }
      }
      function r(v) {
        try {
          u(h.throw(v));
        } catch (y) {
          c(y);
        }
      }
      function u(v) {
        v.done ? a(v.value) : i(v.value).then(s, r);
      }
      u((h = h.apply(g, d || [])).next());
    });
  }, o = ye && ye.__generator || function(g, d) {
    var m = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, h, i, a, c;
    return c = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function s(u) {
      return function(v) {
        return r([u, v]);
      };
    }
    function r(u) {
      if (h) throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (h = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
            return a;
          switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return m.label++, { value: u[1], done: !1 };
            case 5:
              m.label++, i = u[1], u = [0];
              continue;
            case 7:
              u = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (a = m.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                m = 0;
                continue;
              }
              if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                m.label = u[1];
                break;
              }
              if (u[0] === 6 && m.label < a[1]) {
                m.label = a[1], a = u;
                break;
              }
              if (a && m.label < a[2]) {
                m.label = a[2], m.ops.push(u);
                break;
              }
              a[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          u = d.call(g, m);
        } catch (v) {
          u = [6, v], i = 0;
        } finally {
          h = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getRecipeImplementation = void 0;
  var n = Yt(), t = Ie();
  function l(g) {
    var d = new n.default(g.recipeId, g.appInfo);
    return {
      getTenantId: function() {
        var m = (0, t.getQueryParams)("tenantId");
        if ((m == null ? void 0 : m.trim()) !== "")
          return m;
      },
      getLoginMethods: function(m) {
        var h = m.tenantId, i = m.options, a = m.userContext;
        return e(this, void 0, void 0, function() {
          var c, s, r, u, v;
          return o(this, function(y) {
            switch (y.label) {
              case 0:
                return c = {}, g.clientType !== void 0 && (c.clientType = g.clientType), [
                  4,
                  d.get(
                    h,
                    "/loginmethods",
                    {},
                    c,
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: g.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: i,
                      userContext: a
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: g.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: a
                    })
                  )
                ];
              case 1:
                return s = y.sent(), r = s.jsonBody, u = s.fetchResponse, r.firstFactors === void 0 ? (v = [], r.emailPassword.enabled && v.push("emailpassword"), r.thirdParty.enabled && v.push("thirdparty"), r.passwordless.enabled && (v.push("otp-email"), v.push("otp-phone"), v.push("link-email"), v.push("link-phone"))) : v = r.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: r.thirdParty.providers
                    },
                    firstFactors: v,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      }
    };
  }
  return ye.default = l, ye.getRecipeImplementation = l, ye;
}
var be = {}, At = {}, jn;
function Er() {
  if (jn) return At;
  jn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function o(n) {
        this.config = n;
      }
      return o;
    }()
  );
  return At.default = e, At;
}
var se = {}, Ht = {}, Ke = {}, Se = {}, ie = {}, Ee = {}, $n;
function mo() {
  if ($n) return Ee;
  $n = 1;
  var e = Ee && Ee.__awaiter || function(l, g, d, m) {
    function h(i) {
      return i instanceof d ? i : new d(function(a) {
        a(i);
      });
    }
    return new (d || (d = Promise))(function(i, a) {
      function c(u) {
        try {
          r(m.next(u));
        } catch (v) {
          a(v);
        }
      }
      function s(u) {
        try {
          r(m.throw(u));
        } catch (v) {
          a(v);
        }
      }
      function r(u) {
        u.done ? i(u.value) : h(u.value).then(c, s);
      }
      r((m = m.apply(l, g || [])).next());
    });
  }, o = Ee && Ee.__generator || function(l, g) {
    var d = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, m, h, i, a;
    return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function c(r) {
      return function(u) {
        return s([r, u]);
      };
    }
    function s(r) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (m = 1, h && (i = r[0] & 2 ? h.return : r[0] ? h.throw || ((i = h.return) && i.call(h), 0) : h.next) && !(i = i.call(h, r[1])).done)
            return i;
          switch (h = 0, i && (r = [r[0] & 2, i.value]), r[0]) {
            case 0:
            case 1:
              i = r;
              break;
            case 4:
              return d.label++, { value: r[1], done: !1 };
            case 5:
              d.label++, h = r[1], r = [0];
              continue;
            case 7:
              r = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (i = d.trys, !(i = i.length > 0 && i[i.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                d = 0;
                continue;
              }
              if (r[0] === 3 && (!i || r[1] > i[0] && r[1] < i[3])) {
                d.label = r[1];
                break;
              }
              if (r[0] === 6 && d.label < i[1]) {
                d.label = i[1], i = r;
                break;
              }
              if (i && d.label < i[2]) {
                d.label = i[2], d.ops.push(r);
                break;
              }
              i[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          r = g.call(l, d);
        } catch (u) {
          r = [6, u], h = 0;
        } finally {
          m = i = 0;
        }
      if (r[0] & 5) throw r[1];
      return { value: r[0] ? r[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.createAxiosErrorFromFetchResp = void 0;
  function n(l, g, d, m, h) {
    return l.config = g, d && (l.code = d), l.request = m, l.response = h, l.isAxiosError = !0, l.toJSON = function() {
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
    }, l;
  }
  function t(l) {
    return e(this, void 0, void 0, function() {
      var g, d, m, h, i;
      return o(this, function(a) {
        switch (a.label) {
          case 0:
            if (g = {
              url: l.url,
              headers: l.headers
            }, d = "status" in l, !d) return [3, 12];
            if (h = l.headers.get("content-type"), i = void 0, h !== null) return [3, 5];
            a.label = 1;
          case 1:
            return a.trys.push([1, 3, , 4]), [4, l.text()];
          case 2:
            return i = a.sent(), [3, 4];
          case 3:
            return a.sent(), i = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return h.includes("application/json") ? [4, l.json()] : [3, 7];
          case 6:
            return i = a.sent(), [3, 11];
          case 7:
            return h.includes("text/") ? [4, l.text()] : [3, 9];
          case 8:
            return i = a.sent(), [3, 11];
          case 9:
            return [4, l.blob()];
          case 10:
            i = a.sent(), a.label = 11;
          case 11:
            m = {
              data: i,
              status: l.status,
              statusText: l.statusText,
              headers: l.headers,
              config: g,
              request: void 0
            }, a.label = 12;
          case 12:
            return [
              2,
              n(
                d ? new Error("Request failed with status code " + l.status) : l,
                g,
                l.code,
                void 0,
                m
              )
            ];
        }
      });
    });
  }
  return Ee.createAxiosErrorFromFetchResp = t, Ee;
}
var Vn;
function po() {
  if (Vn) return ie;
  Vn = 1;
  var e = ie && ie.__assign || function() {
    return e = Object.assign || function(p) {
      for (var w, b = 1, S = arguments.length; b < S; b++) {
        w = arguments[b];
        for (var R in w) Object.prototype.hasOwnProperty.call(w, R) && (p[R] = w[R]);
      }
      return p;
    }, e.apply(this, arguments);
  }, o = ie && ie.__awaiter || function(p, w, b, S) {
    function R(I) {
      return I instanceof b ? I : new b(function(T) {
        T(I);
      });
    }
    return new (b || (b = Promise))(function(I, T) {
      function _(x) {
        try {
          C(S.next(x));
        } catch (E) {
          T(E);
        }
      }
      function P(x) {
        try {
          C(S.throw(x));
        } catch (E) {
          T(E);
        }
      }
      function C(x) {
        x.done ? I(x.value) : R(x.value).then(_, P);
      }
      C((S = S.apply(p, w || [])).next());
    });
  }, n = ie && ie.__generator || function(p, w) {
    var b = {
      label: 0,
      sent: function() {
        if (I[0] & 1) throw I[1];
        return I[1];
      },
      trys: [],
      ops: []
    }, S, R, I, T;
    return T = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
      return this;
    }), T;
    function _(C) {
      return function(x) {
        return P([C, x]);
      };
    }
    function P(C) {
      if (S) throw new TypeError("Generator is already executing.");
      for (; b; )
        try {
          if (S = 1, R && (I = C[0] & 2 ? R.return : C[0] ? R.throw || ((I = R.return) && I.call(R), 0) : R.next) && !(I = I.call(R, C[1])).done)
            return I;
          switch (R = 0, I && (C = [C[0] & 2, I.value]), C[0]) {
            case 0:
            case 1:
              I = C;
              break;
            case 4:
              return b.label++, { value: C[1], done: !1 };
            case 5:
              b.label++, R = C[1], C = [0];
              continue;
            case 7:
              C = b.ops.pop(), b.trys.pop();
              continue;
            default:
              if (I = b.trys, !(I = I.length > 0 && I[I.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                b = 0;
                continue;
              }
              if (C[0] === 3 && (!I || C[1] > I[0] && C[1] < I[3])) {
                b.label = C[1];
                break;
              }
              if (C[0] === 6 && b.label < I[1]) {
                b.label = I[1], I = C;
                break;
              }
              if (I && b.label < I[2]) {
                b.label = I[2], b.ops.push(C);
                break;
              }
              I[2] && b.ops.pop(), b.trys.pop();
              continue;
          }
          C = w.call(p, b);
        } catch (x) {
          C = [6, x], R = 0;
        } finally {
          S = I = 0;
        }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ie, "__esModule", { value: !0 }), ie.responseErrorInterceptor = ie.responseInterceptor = ie.interceptorFunctionRequestFulfilled = void 0;
  var t = mo(), l = St(), g = zt(), d = je(), m = wt();
  function h(p) {
    p.__supertokensSessionRefreshAttempts === void 0 && (p.__supertokensSessionRefreshAttempts = 0), p.__supertokensSessionRefreshAttempts++;
  }
  function i(p) {
    return p.__supertokensSessionRefreshAttempts === void 0 && (p.__supertokensSessionRefreshAttempts = 0), p.__supertokensSessionRefreshAttempts >= l.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function a(p) {
    var w = p.url === void 0 ? "" : p.url, b = p.baseURL;
    return b !== void 0 && (w.charAt(0) === "/" && b.charAt(b.length - 1) === "/" ? w = b + w.substr(1) : w.charAt(0) !== "/" && b.charAt(b.length - 1) !== "/" ? w = b + "/" + w : w = b + w), w;
  }
  function c(p) {
    return o(this, void 0, void 0, function() {
      var w, b, S, R, I, T;
      return n(this, function(_) {
        switch (_.label) {
          case 0:
            (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), w = a(p), b = !1;
            try {
              b = typeof w == "string" && !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                w,
                l.default.config.apiDomain,
                l.default.config.sessionTokenBackendDomain
              );
            } catch (P) {
              if (P.message === "Please provide a valid domain name")
                (0, m.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), b = !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  l.default.config.apiDomain,
                  l.default.config.sessionTokenBackendDomain
                );
              else
                throw P;
            }
            return (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + b), b ? ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, p]) : ((0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), g.ProcessState.getInstance().addState(
              g.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, l.getLocalSessionState)(!0)]);
          case 1:
            return S = _.sent(), R = p, S.status !== "EXISTS" ? [3, 3] : [4, l.AntiCsrfToken.getToken(S.lastAccessTokenUpdate)];
          case 2:
            I = _.sent(), I !== void 0 && ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), R = e(e({}, R), {
              headers: R === void 0 ? {
                "anti-csrf": I
              } : e(e({}, R.headers), { "anti-csrf": I })
            })), _.label = 3;
          case 3:
            return l.default.config.autoAddCredentials && R.withCredentials === void 0 && ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), R = e(e({}, R), { withCredentials: !0 })), (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), R = e(e({}, R), {
              headers: R === void 0 ? {
                rid: "anti-csrf"
              } : e({ rid: "anti-csrf" }, R.headers)
            }), T = l.default.config.tokenTransferMethod, (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + T), R.headers["st-auth-mode"] = T, [4, f(R)];
          case 4:
            return R = _.sent(), [4, v(R)];
          case 5:
            return _.sent(), (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, R];
        }
      });
    });
  }
  ie.interceptorFunctionRequestFulfilled = c;
  function s(p) {
    var w = this;
    return function(b) {
      return o(w, void 0, void 0, function() {
        var S, R, I, T;
        return n(this, function(_) {
          switch (_.label) {
            case 0:
              if (S = !1, !l.default.initCalled)
                throw new Error("init function not called");
              (0, m.logDebugMessage)("responseInterceptor: started"), (0, m.logDebugMessage)("responseInterceptor: already intercepted: " + b.headers["x-supertokens-xhr-intercepted"]), R = a(b.config);
              try {
                S = typeof R == "string" && !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  R,
                  l.default.config.apiDomain,
                  l.default.config.sessionTokenBackendDomain
                ) || !!b.headers["x-supertokens-xhr-intercepted"];
              } catch (P) {
                if (P.message === "Please provide a valid domain name")
                  (0, m.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), S = !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    l.default.config.apiDomain,
                    l.default.config.sessionTokenBackendDomain
                  ) || !!b.headers["x-supertokens-xhr-intercepted"];
                else
                  throw P;
              }
              return (0, m.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + S), S ? ((0, m.logDebugMessage)("responseInterceptor: Returning without interception"), [2, b]) : ((0, m.logDebugMessage)("responseInterceptor: Interception started"), g.ProcessState.getInstance().addState(
                g.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, l.getLocalSessionState)(!1)]);
            case 1:
              return I = _.sent(), [4, y(b)];
            case 2:
              return _.sent(), (0, l.fireSessionUpdateEventsIfNecessary)(I.status === "EXISTS", b.status, b.headers["front-token"]), b.status !== l.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, m.logDebugMessage)("responseInterceptor: Status code is: " + b.status), T = b.config, [
                2,
                u.doRequest(
                  function(P) {
                    return p(P);
                  },
                  T,
                  R,
                  b,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return b.status !== l.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, l.onInvalidClaimResponse)(b)];
            case 4:
              _.sent(), _.label = 5;
            case 5:
              return [2, b];
          }
        });
      });
    };
  }
  ie.responseInterceptor = s;
  function r(p) {
    var w = this;
    return function(b) {
      return o(w, void 0, void 0, function() {
        var S;
        return n(this, function(R) {
          switch (R.label) {
            case 0:
              if ((0, m.logDebugMessage)("responseErrorInterceptor: called"), (0, m.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (b.response && b.response.headers["x-supertokens-xhr-intercepted"])), b.response === void 0 || b.response.headers["x-supertokens-xhr-intercepted"])
                throw b;
              return b.response !== void 0 && b.response.status === l.default.config.sessionExpiredStatusCode ? ((0, m.logDebugMessage)("responseErrorInterceptor: Status code is: " + b.response.status), S = b.config, [
                2,
                u.doRequest(
                  function(I) {
                    return p(I);
                  },
                  S,
                  a(S),
                  void 0,
                  b,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return b.response !== void 0 && b.response.status === l.default.config.invalidClaimStatusCode ? [4, (0, l.onInvalidClaimResponse)(b.response)] : [3, 3];
            case 2:
              R.sent(), R.label = 3;
            case 3:
              throw b;
          }
        });
      });
    };
  }
  ie.responseErrorInterceptor = r;
  var u = (
    /** @class */
    function() {
      function p() {
      }
      var w;
      return w = p, p.doRequest = function(b, S, R, I, T, _) {
        return _ === void 0 && (_ = !1), o(void 0, void 0, void 0, function() {
          var P, C, x, E, B, K, ne, re, q, H, L, q, F, V, X;
          return n(w, function(k) {
            switch (k.label) {
              case 0:
                if (!l.default.initCalled)
                  throw Error("init function not called");
                (0, m.logDebugMessage)("doRequest: called"), P = !1;
                try {
                  P = typeof R == "string" && !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    R,
                    l.default.config.apiDomain,
                    l.default.config.sessionTokenBackendDomain
                  ) && _;
                } catch (O) {
                  if (O.message === "Please provide a valid domain name")
                    (0, m.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), P = !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      l.default.config.apiDomain,
                      l.default.config.sessionTokenBackendDomain
                    ) && _;
                  else
                    throw O;
                }
                if ((0, m.logDebugMessage)("doRequest: Value of doNotDoInterception: " + P), !P) return [3, 2];
                if ((0, m.logDebugMessage)("doRequest: Returning without interception"), T !== void 0)
                  throw T;
                return I !== void 0 ? [2, I] : [4, b(S)];
              case 1:
                return [2, k.sent()];
              case 2:
                return (0, m.logDebugMessage)("doRequest: Interception started"), [4, f(S)];
              case 3:
                S = k.sent(), C = void 0, k.label = 4;
              case 4:
                return [4, (0, l.getLocalSessionState)(!0)];
              case 5:
                return x = k.sent(), E = S, x.status !== "EXISTS" ? [3, 7] : [4, l.AntiCsrfToken.getToken(x.lastAccessTokenUpdate)];
              case 6:
                B = k.sent(), B !== void 0 && ((0, m.logDebugMessage)("doRequest: Adding anti-csrf token to request"), E = e(e({}, E), {
                  headers: E === void 0 ? {
                    "anti-csrf": B
                  } : e(e({}, E.headers), {
                    "anti-csrf": B
                  })
                })), k.label = 7;
              case 7:
                return l.default.config.autoAddCredentials && E.withCredentials === void 0 && ((0, m.logDebugMessage)("doRequest: Adding credentials include"), E = e(e({}, E), { withCredentials: !0 })), (0, m.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), E = e(e({}, E), {
                  headers: E === void 0 ? {
                    rid: "anti-csrf"
                  } : e({ rid: "anti-csrf" }, E.headers)
                }), K = l.default.config.tokenTransferMethod, (0, m.logDebugMessage)("doRequest: Adding st-auth-mode header: " + K), E.headers["st-auth-mode"] = K, [4, v(E)];
              case 8:
                k.sent(), k.label = 9;
              case 9:
                if (k.trys.push([9, 14, , 27]), ne = T, re = I, T = void 0, I = void 0, ne !== void 0)
                  throw (0, m.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), ne;
                return re !== void 0 ? (0, m.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, m.logDebugMessage)("doRequest: Making user's http call"), re !== void 0 ? [3, 11] : [4, b(E)];
              case 10:
                return H = k.sent(), [3, 12];
              case 11:
                H = re, k.label = 12;
              case 12:
                return q = H, (0, m.logDebugMessage)("doRequest: User's http call ended"), [4, y(q)];
              case 13:
                return k.sent(), (0, l.fireSessionUpdateEventsIfNecessary)(x.status === "EXISTS", q.status, q.headers["front-token"]), [2, q];
              case 14:
                return L = k.sent(), q = L.response, q === void 0 ? [3, 25] : [4, y(q)];
              case 15:
                if (k.sent(), (0, l.fireSessionUpdateEventsIfNecessary)(x.status === "EXISTS", q.status, q.headers["front-token"]), q.status !== l.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, m.logDebugMessage)("doRequest: Status code is: " + q.status), i(S))
                  throw (0, m.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      S.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(l.default.config.maxRetryAttemptsForSessionRefresh)
                  ), F = "Received a 401 response from ".concat(
                    R,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    l.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(F), new Error(F);
                return [4, (0, l.onUnauthorisedResponse)(x)];
              case 16:
                return V = k.sent(), h(S), (0, m.logDebugMessage)("doRequest: sessionRefreshAttempts: " + S.__supertokensSessionRefreshAttempts), V.result === "RETRY" ? [3, 20] : ((0, m.logDebugMessage)("doRequest: Not retrying original request"), V.error === void 0 ? [3, 18] : [4, (0, t.createAxiosErrorFromFetchResp)(V.error)]);
              case 17:
                return X = k.sent(), [3, 19];
              case 18:
                X = L, k.label = 19;
              case 19:
                return C = X, [3, 28];
              case 20:
                return (0, m.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return q.status !== l.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, l.onInvalidClaimResponse)(q)];
              case 22:
                k.sent(), k.label = 23;
              case 23:
                throw L;
              case 24:
                return [3, 26];
              case 25:
                throw L;
              case 26:
                return [3, 27];
              case 27:
                return [3, 4];
              case 28:
                throw C;
            }
          });
        });
      }, p;
    }()
  );
  ie.default = u;
  function v(p) {
    return o(this, void 0, void 0, function() {
      var w, b;
      return n(this, function(S) {
        switch (S.label) {
          case 0:
            return p.headers === void 0 && (p.headers = {}), (0, m.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, l.getTokenForHeaderAuth)("access")];
          case 1:
            return w = S.sent(), [4, (0, l.getTokenForHeaderAuth)("refresh")];
          case 2:
            return b = S.sent(), w !== void 0 && b !== void 0 ? p.headers.Authorization !== void 0 || p.headers.authorization !== void 0 ? (0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), p.headers = e(e({}, p.headers), {
              Authorization: "Bearer ".concat(w)
            }), p.__supertokensAddedAuthHeader = !0) : (0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function y(p) {
    return o(this, void 0, void 0, function() {
      var w, b, S, R, I, T;
      return n(this, function(_) {
        switch (_.label) {
          case 0:
            return (0, m.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), w = p.headers["st-refresh-token"], w === void 0 ? [3, 2] : ((0, m.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, l.setToken)("refresh", w)]);
          case 1:
            _.sent(), _.label = 2;
          case 2:
            return b = p.headers["st-access-token"], b === void 0 ? [3, 4] : ((0, m.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, l.setToken)("access", b)]);
          case 3:
            _.sent(), _.label = 4;
          case 4:
            return S = p.headers["front-token"], S === void 0 ? [3, 6] : ((0, m.logDebugMessage)("doRequest: Setting sFrontToken: " + S), [4, l.FrontToken.setItem(S)]);
          case 5:
            _.sent(), R = new Headers(), Object.entries(p.headers).forEach(function(P) {
              var C = P[0], x = P[1];
              Array.isArray(x) ? x.forEach(function(E) {
                return R.append(C, E);
              }) : R.append(C, x);
            }), (0, l.updateClockSkewUsingFrontToken)({ frontToken: S, responseHeaders: R }), _.label = 6;
          case 6:
            return I = p.headers["anti-csrf"], I === void 0 ? [3, 9] : [4, (0, l.getLocalSessionState)(!1)];
          case 7:
            return T = _.sent(), T.status !== "EXISTS" ? [3, 9] : ((0, m.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, l.AntiCsrfToken.setItem(T.lastAccessTokenUpdate, I)]);
          case 8:
            _.sent(), _.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function f(p) {
    return o(this, void 0, void 0, function() {
      var w, b, S, R;
      return n(this, function(I) {
        switch (I.label) {
          case 0:
            return [4, (0, l.getTokenForHeaderAuth)("access")];
          case 1:
            return w = I.sent(), [4, (0, l.getTokenForHeaderAuth)("refresh")];
          case 2:
            return b = I.sent(), S = p.headers.Authorization || p.headers.authorization, w !== void 0 && b !== void 0 && (S === "Bearer ".concat(w) || "__supertokensAddedAuthHeader" in p) ? ((0, m.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), R = e(e({}, p), { headers: e({}, p.headers) }), delete R.headers.authorization, delete R.headers.Authorization, [2, R]) : [2, p];
        }
      });
    });
  }
  return ie;
}
var xe = {}, Wn;
function yo() {
  if (Wn) return xe;
  Wn = 1;
  var e = xe && xe.__awaiter || function(s, r, u, v) {
    function y(f) {
      return f instanceof u ? f : new u(function(p) {
        p(f);
      });
    }
    return new (u || (u = Promise))(function(f, p) {
      function w(R) {
        try {
          S(v.next(R));
        } catch (I) {
          p(I);
        }
      }
      function b(R) {
        try {
          S(v.throw(R));
        } catch (I) {
          p(I);
        }
      }
      function S(R) {
        R.done ? f(R.value) : y(R.value).then(w, b);
      }
      S((v = v.apply(s, r || [])).next());
    });
  }, o = xe && xe.__generator || function(s, r) {
    var u = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, v, y, f, p;
    return p = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function w(S) {
      return function(R) {
        return b([S, R]);
      };
    }
    function b(S) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (v = 1, y && (f = S[0] & 2 ? y.return : S[0] ? y.throw || ((f = y.return) && f.call(y), 0) : y.next) && !(f = f.call(y, S[1])).done)
            return f;
          switch (y = 0, f && (S = [S[0] & 2, f.value]), S[0]) {
            case 0:
            case 1:
              f = S;
              break;
            case 4:
              return u.label++, { value: S[1], done: !1 };
            case 5:
              u.label++, y = S[1], S = [0];
              continue;
            case 7:
              S = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (f = u.trys, !(f = f.length > 0 && f[f.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                u = 0;
                continue;
              }
              if (S[0] === 3 && (!f || S[1] > f[0] && S[1] < f[3])) {
                u.label = S[1];
                break;
              }
              if (S[0] === 6 && u.label < f[1]) {
                u.label = f[1], f = S;
                break;
              }
              if (f && u.label < f[2]) {
                u.label = f[2], u.ops.push(S);
                break;
              }
              f[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          S = r.call(s, u);
        } catch (R) {
          S = [6, R], y = 0;
        } finally {
          v = f = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.addInterceptorsToXMLHttpRequest = void 0;
  var n = St(), t = wt(), l = je(), g = zt(), d = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function m() {
    var s = new Promise(function(u) {
      return setTimeout(u, 0);
    }), r = XMLHttpRequest;
    (0, t.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var u = new r(), v = this, y = [], f = [], p = {}, w, b = /* @__PURE__ */ new Map(), S = s;
      function R(H) {
        S = S.finally(function() {
          var L;
          return (L = H()) === null || L === void 0 ? void 0 : L.catch(function(q) {
            var F = new ProgressEvent("error");
            F.error = q, v.onerror !== void 0 && v.onerror !== null && v.onerror(F), x("error", F);
          });
        });
      }
      var I = "", T = !1, _ = void 0, P, C = 0;
      v.onload = null, v.onreadystatechange = null, v.onloadend = null, v.addEventListener = function(H, L, q) {
        var F = b.get(H);
        F === void 0 && (F = /* @__PURE__ */ new Set(), b.set(H, F)), F.add(L);
      }, v.removeEventListener = function(H, L) {
        var q = b.get(H);
        q === void 0 && (q = /* @__PURE__ */ new Set(), b.set(H, q)), q.delete(L);
      };
      function x(H, L) {
        var q = b.get(H);
        (0, t.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(L.type, " to ").concat(q ? q.size : 0, " listeners")
        ), q && Array.from(q).forEach(function(F) {
          return F.apply(v, [L]);
        });
      }
      function E() {
        return e(this, void 0, void 0, function() {
          var H, L, q;
          return o(this, function(F) {
            switch (F.label) {
              case 0:
                if (_ === void 0)
                  throw new Error("Should never come here..");
                if ((0, t.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + _.status), C >= n.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, t.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(C, ", maxRetryAttemptsForSessionRefresh: ").concat(n.default.config.maxRetryAttemptsForSessionRefresh)
                  ), p.status = 0, p.statusText = "", p.responseType = "", H = "Received a 401 response from ".concat(
                    I,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    n.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(H), new Error(H);
                return [4, (0, n.onUnauthorisedResponse)(_)];
              case 1:
                if (L = F.sent(), C++, (0, t.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + C), L.result !== "RETRY") {
                  if ((0, t.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!L.error
                  ), L.error !== void 0)
                    throw L.error;
                  return [2, !0];
                }
                return (0, t.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), q = new r(), ne(v, q, !0), y.forEach(function(V) {
                  V(q);
                }), re(q, P), [2, !1];
            }
          });
        });
      }
      function B(H) {
        return e(this, void 0, void 0, function() {
          var L, q, F, V, X;
          return o(this, function(k) {
            switch (k.label) {
              case 0:
                if (T)
                  return (0, t.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                k.label = 1;
              case 1:
                return k.trys.push([1, 7, , 11]), (0, t.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), g.ProcessState.getInstance().addState(
                  g.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), L = H.status, q = c(H), [4, a(q)];
              case 2:
                return k.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(_.status === "EXISTS", L, q.get("front-token")), L !== n.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, t.logDebugMessage)("responseInterceptor: Status code is: " + L), [4, E()]);
              case 3:
                return [2, k.sent()];
              case 4:
                return L !== n.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, n.onInvalidClaimResponse)({ data: H.responseText })];
              case 5:
                k.sent(), k.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return F = k.sent(), (0, t.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), F.status === void 0 ? [3, 9] : [4, h(F)];
              case 8:
                if (V = k.sent(), p.status = V.status, p.statusText = V.statusText, p.responseType = V.responseType, w = V.headers, V.responseType === "json")
                  try {
                    p.response = JSON.parse(V.responseText);
                  } catch {
                    p.response = V.responseText;
                  }
                else
                  p.response = V.responseText;
                return p.responseText = V.responseText, [3, 10];
              case 9:
                X = new ProgressEvent("error"), X.error = F, v.onerror !== void 0 && v.onerror !== null && v.onerror(X), x("error", X), k.label = 10;
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
      v.open = function(H, L) {
        (0, t.logDebugMessage)("XHRInterceptor.open called");
        var q = arguments;
        I = L;
        try {
          T = typeof I == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            I,
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          ) || typeof I != "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            I.toString(),
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          );
        } catch (F) {
          if (F.message === "Please provide a valid domain name")
            (0, t.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), T = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              l.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              n.default.config.apiDomain,
              n.default.config.sessionTokenBackendDomain
            );
          else
            throw F;
        }
        R(function() {
          y.push(function(F) {
            F.open.apply(F, q);
          }), u.open.apply(u, q);
        });
      }, v.send = function(H) {
        P = H, re(u, P);
      }, v.setRequestHeader = function(H, L) {
        var q = this;
        if ((0, t.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(H)), T) {
          R(function() {
            return u.setRequestHeader(H, L);
          });
          return;
        }
        H !== "anti-csrf" && R(function() {
          return e(q, void 0, void 0, function() {
            var F, V;
            return o(this, function(X) {
              switch (X.label) {
                case 0:
                  return H.toLowerCase() !== "authorization" ? [3, 3] : ((0, t.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, n.getTokenForHeaderAuth)("access")]);
                case 1:
                  return F = X.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (V = X.sent(), F !== void 0 && V !== void 0 && L === "Bearer ".concat(F))
                    return (0, t.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  X.label = 3;
                case 3:
                  return y.push(function(k) {
                    k.setRequestHeader(H, L);
                  }), f.push({ name: H, value: L }), u.setRequestHeader(H, L), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var K = void 0;
      ne(v, u, !1);
      function ne(H, L, q) {
        var F, V = ["load", "loadend", "readystatechange"];
        (0, t.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var X = function(U) {
          (0, t.logDebugMessage)("XHRInterceptor added listener for event ".concat(U)), L.addEventListener(U, function(W) {
            (0, t.logDebugMessage)("XHRInterceptor got event ".concat(U)), V.includes(U) || x(U, W);
          });
        }, k = 0, O = d; k < O.length; k++) {
          var A = O[k];
          X(A);
        }
        if (L.onload = function(U) {
          F === void 0 && (F = B(L)), F.then(function(W) {
            W && (H.onload && H.onload(U), x("load", U));
          });
        }, L.onreadystatechange = function(U) {
          L.readyState === r.DONE ? (F === void 0 && (F = B(L)), F.then(function(W) {
            W && (H.onreadystatechange && H.onreadystatechange(U), x("readystatechange", U));
          })) : (H.onreadystatechange && H.onreadystatechange(U), x("readystatechange", U));
        }, L.onloadend = function(U) {
          F === void 0 && (F = B(L)), F.then(function(W) {
            W && (H.onloadend && H.onloadend(U), x("loadend", U));
          });
        }, H.getAllResponseHeaders = function() {
          var U;
          return w ? (U = "", w.forEach(function(W, j) {
            return U += "".concat(j, ": ").concat(W, `\r
`);
          })) : U = L.getAllResponseHeaders(), U + `x-supertokens-xhr-intercepted: true\r
`;
        }, H.getResponseHeader = function(U) {
          return U === "x-supertokens-xhr-intercepted" ? "true" : w ? w.get(U) : L.getResponseHeader(U);
        }, K === void 0) {
          K = [];
          for (var D in L)
            D in H || K.push(D);
        }
        for (var M = function(U) {
          typeof L[U] == "function" ? Object.defineProperty(H, U, {
            configurable: !0,
            value: function() {
              var W = arguments;
              return q || y.push(function(j) {
                j[U].apply(j, W);
              }), L[U].apply(L, W);
            }
          }) : Object.defineProperty(H, U, {
            configurable: !0,
            get: function() {
              return p[U] !== void 0 ? p[U] : L[U];
            },
            set: function(W) {
              q || y.push(function(j) {
                j[U] = W;
              }), (0, t.logDebugMessage)("XHRInterceptor.set[".concat(U, "] = ").concat(W)), L[U] = W;
            }
          });
        }, N = 0, $ = K; N < $.length; N++) {
          var D = $[N];
          M(D);
        }
      }
      function re(H, L) {
        var q = this;
        if ((0, t.logDebugMessage)("XHRInterceptor.send: called"), (0, t.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + T), T) {
          (0, t.logDebugMessage)("XHRInterceptor.send: Returning without interception"), R(function() {
            return H.send(L);
          });
          return;
        }
        (0, t.logDebugMessage)("XHRInterceptor.send: Interception started"), g.ProcessState.getInstance().addState(
          g.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), R(function() {
          return e(q, void 0, void 0, function() {
            var F, V;
            return o(this, function(X) {
              switch (X.label) {
                case 0:
                  return [4, (0, n.getLocalSessionState)(!0)];
                case 1:
                  return _ = X.sent(), _.status !== "EXISTS" ? [3, 3] : [
                    4,
                    n.AntiCsrfToken.getToken(_.lastAccessTokenUpdate)
                  ];
                case 2:
                  F = X.sent(), F !== void 0 && ((0, t.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), H.setRequestHeader("anti-csrf", F)), X.label = 3;
                case 3:
                  return n.default.config.autoAddCredentials && ((0, t.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), v.withCredentials = !0), f.some(function(k) {
                    return k.name === "rid";
                  }) ? (0, t.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, t.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), H.setRequestHeader("rid", "anti-csrf")), V = n.default.config.tokenTransferMethod, f.some(function(k) {
                    return k.name === "st-auth-mode";
                  }) ? (0, t.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, t.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + V
                  ), H.setRequestHeader("st-auth-mode", V)), [4, i(H, f)];
                case 4:
                  return X.sent(), (0, t.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, H.send(L)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = r;
  }
  xe.addInterceptorsToXMLHttpRequest = m;
  function h(s) {
    return e(this, void 0, void 0, function() {
      var r, u, v, y, f;
      return o(this, function(p) {
        switch (p.label) {
          case 0:
            if (r = s.headers.get("content-type"), u = "", v = "text", r !== null) return [3, 5];
            p.label = 1;
          case 1:
            return p.trys.push([1, 3, , 4]), [4, s.text()];
          case 2:
            return u = p.sent(), [3, 4];
          case 3:
            return p.sent(), u = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return r.includes("application/json") ? (v = "json", f = (y = JSON).stringify, [4, s.json()]) : [3, 7];
          case 6:
            return u = f.apply(y, [p.sent()]), [3, 9];
          case 7:
            return r.includes("text/") ? [4, s.text()] : [3, 9];
          case 8:
            u = p.sent(), p.label = 9;
          case 9:
            return [
              2,
              {
                status: s.status,
                responseText: u,
                statusText: s.statusText,
                responseType: v,
                headers: s.headers
              }
            ];
        }
      });
    });
  }
  function i(s, r) {
    return e(this, void 0, void 0, function() {
      var u, v;
      return o(this, function(y) {
        switch (y.label) {
          case 0:
            return (0, t.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, n.getTokenForHeaderAuth)("access")];
          case 1:
            return u = y.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
          case 2:
            return v = y.sent(), u !== void 0 && v !== void 0 ? r.some(function(f) {
              var p = f.name;
              return p.toLowerCase() === "authorization";
            }) ? (0, t.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : u !== void 0 && ((0, t.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), s.setRequestHeader("Authorization", "Bearer ".concat(u))) : (0, t.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function a(s) {
    return e(this, void 0, void 0, function() {
      var r, u, v, y, f;
      return o(this, function(p) {
        switch (p.label) {
          case 0:
            return (0, t.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), r = s.get("st-refresh-token"), r === null ? [3, 2] : ((0, t.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, n.setToken)("refresh", r)]);
          case 1:
            p.sent(), p.label = 2;
          case 2:
            return u = s.get("st-access-token"), u === null ? [3, 4] : ((0, t.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, n.setToken)("access", u)]);
          case 3:
            p.sent(), p.label = 4;
          case 4:
            return v = s.get("front-token"), v === null ? [3, 6] : ((0, t.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + v), [4, n.FrontToken.setItem(v)]);
          case 5:
            p.sent(), (0, n.updateClockSkewUsingFrontToken)({ frontToken: v, responseHeaders: s }), p.label = 6;
          case 6:
            return y = s.get("anti-csrf"), y === null ? [3, 9] : [4, (0, n.getLocalSessionState)(!1)];
          case 7:
            return f = p.sent(), f.status !== "EXISTS" ? [3, 9] : ((0, t.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, n.AntiCsrfToken.setItem(f.lastAccessTokenUpdate, y)]);
          case 8:
            p.sent(), p.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function c(s) {
    return new Headers(
      s.getAllResponseHeaders().split(`\r
`).map(function(r) {
        var u = r.indexOf(": ");
        return u === -1 ? ["", ""] : [r.slice(0, u), r.slice(u + 2)];
      }).filter(function(r) {
        return r[0].length !== 0;
      })
    );
  }
  return xe;
}
var Bn;
function wo() {
  if (Bn) return Se;
  Bn = 1;
  var e = Se && Se.__assign || function() {
    return e = Object.assign || function(v) {
      for (var y, f = 1, p = arguments.length; f < p; f++) {
        y = arguments[f];
        for (var w in y) Object.prototype.hasOwnProperty.call(y, w) && (v[w] = y[w]);
      }
      return v;
    }, e.apply(this, arguments);
  }, o = Se && Se.__awaiter || function(v, y, f, p) {
    function w(b) {
      return b instanceof f ? b : new f(function(S) {
        S(b);
      });
    }
    return new (f || (f = Promise))(function(b, S) {
      function R(_) {
        try {
          T(p.next(_));
        } catch (P) {
          S(P);
        }
      }
      function I(_) {
        try {
          T(p.throw(_));
        } catch (P) {
          S(P);
        }
      }
      function T(_) {
        _.done ? b(_.value) : w(_.value).then(R, I);
      }
      T((p = p.apply(v, y || [])).next());
    });
  }, n = Se && Se.__generator || function(v, y) {
    var f = {
      label: 0,
      sent: function() {
        if (b[0] & 1) throw b[1];
        return b[1];
      },
      trys: [],
      ops: []
    }, p, w, b, S;
    return S = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function R(T) {
      return function(_) {
        return I([T, _]);
      };
    }
    function I(T) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (p = 1, w && (b = T[0] & 2 ? w.return : T[0] ? w.throw || ((b = w.return) && b.call(w), 0) : w.next) && !(b = b.call(w, T[1])).done)
            return b;
          switch (w = 0, b && (T = [T[0] & 2, b.value]), T[0]) {
            case 0:
            case 1:
              b = T;
              break;
            case 4:
              return f.label++, { value: T[1], done: !1 };
            case 5:
              f.label++, w = T[1], T = [0];
              continue;
            case 7:
              T = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (b = f.trys, !(b = b.length > 0 && b[b.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                f = 0;
                continue;
              }
              if (T[0] === 3 && (!b || T[1] > b[0] && T[1] < b[3])) {
                f.label = T[1];
                break;
              }
              if (T[0] === 6 && f.label < b[1]) {
                f.label = b[1], b = T;
                break;
              }
              if (b && f.label < b[2]) {
                f.label = b[2], f.ops.push(T);
                break;
              }
              b[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          T = y.call(v, f);
        } catch (_) {
          T = [6, _], w = 0;
        } finally {
          p = b = 0;
        }
      if (T[0] & 5) throw T[1];
      return { value: T[0] ? T[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Se, "__esModule", { value: !0 });
  var t = St(), l = po(), g = Kt(), d = wt(), m = Or(), h = yo(), i = Xt(), a = bt(), c = Qt(), s = 100, r = "CLAIM_REFRESH_LOCK";
  function u(v) {
    return {
      addXMLHttpRequestInterceptor: function(y) {
        (0, d.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, h.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(y) {
        return (0, d.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(f, p) {
          return o(this, void 0, void 0, function() {
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    t.default.doRequest(
                      function(b) {
                        return y.originalFetch(
                          typeof f == "object" && "clone" in f ? f.clone() : f,
                          e({}, b)
                        );
                      },
                      p,
                      f
                    )
                  ];
                case 1:
                  return [2, w.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(y) {
        if ((0, d.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, d.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var f = y.axiosInstance.interceptors.request, p = 0; p < f.handlers.length; p++)
          if (f.handlers[p].fulfilled === l.interceptorFunctionRequestFulfilled) {
            (0, d.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        y.axiosInstance.interceptors.request.use(l.interceptorFunctionRequestFulfilled, function(w) {
          return o(this, void 0, void 0, function() {
            return n(this, function(b) {
              throw w;
            });
          });
        }), y.axiosInstance.interceptors.response.use(
          (0, l.responseInterceptor)(y.axiosInstance),
          (0, l.responseErrorInterceptor)(y.axiosInstance)
        );
      },
      getUserId: function(y) {
        return o(this, void 0, void 0, function() {
          var f;
          return n(this, function(p) {
            switch (p.label) {
              case 0:
                return (0, d.logDebugMessage)("getUserId: called"), [4, t.FrontToken.getTokenInfo()];
              case 1:
                if (f = p.sent(), f === void 0)
                  throw new Error("No session exists");
                return (0, d.logDebugMessage)("getUserId: returning: " + f.uid), [2, f.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(y) {
        return o(this, void 0, void 0, function() {
          var f, p;
          return n(this, function(w) {
            switch (w.label) {
              case 0:
                return (0, d.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, t.FrontToken.getTokenInfo()];
              case 1:
                if (f = w.sent(), f === void 0)
                  throw new Error("No session exists");
                return f.ate < a.default.getReferenceOrThrow().dateProvider.now() ? ((0, d.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, t.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return p = w.sent(), p ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, w.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, d.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(f.up)), [2, f.up];
            }
          });
        });
      },
      doesSessionExist: function(y) {
        return o(this, void 0, void 0, function() {
          var f, p, w;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return (0, d.logDebugMessage)("doesSessionExist: called"), [4, t.FrontToken.getTokenInfo()];
              case 1:
                return f = b.sent(), f === void 0 ? ((0, d.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : f.ate < a.default.getReferenceOrThrow().dateProvider.now() ? ((0, d.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, t.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return p = b.sent(), [4, (0, t.onUnauthorisedResponse)(p)];
              case 3:
                return w = b.sent(), [2, w.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(y) {
        return o(this, void 0, void 0, function() {
          var f, p, w, b;
          return n(this, function(S) {
            switch (S.label) {
              case 0:
                return (0, d.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(y)];
              case 1:
                return S.sent() ? ((0, d.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  v.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": g.supported_fdi.join(","),
                        rid: t.default.rid
                      }
                    },
                    url: t.default.signOutUrl,
                    userContext: y.userContext
                  })
                ]) : ((0, d.logDebugMessage)("signOut: exiting early because session does not exist"), (0, d.logDebugMessage)("signOut: firing SIGN_OUT event"), v.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: y.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return f = S.sent(), (0, d.logDebugMessage)("signOut: Calling API"), [4, fetch(f.url, f.requestInit)];
              case 3:
                if (p = S.sent(), (0, d.logDebugMessage)("signOut: API ended"), (0, d.logDebugMessage)("signOut: API responded with status code: " + p.status), p.status === v.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (p.status >= 300)
                  throw p;
                return [
                  4,
                  v.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: f.requestInit,
                    url: f.url,
                    fetchResponse: p.clone(),
                    userContext: y.userContext
                  })
                ];
              case 4:
                return S.sent(), [4, p.clone().json()];
              case 5:
                if (w = S.sent(), w.status === "GENERAL_ERROR")
                  throw (0, d.logDebugMessage)("doRequest: Throwing general error"), b = w.message === void 0 ? "No Error Message Provided" : w.message, new m.STGeneralError(b);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(y) {
        return o(this, void 0, void 0, function() {
          var f;
          return n(this, function(p) {
            switch (p.label) {
              case 0:
                return "body" in y.response ? [4, y.response.clone().json()] : [3, 2];
              case 1:
                return f = p.sent(), [3, 3];
              case 2:
                typeof y.response.data == "string" ? f = JSON.parse(y.response.data) : f = y.response.data, p.label = 3;
              case 3:
                return [2, f.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(y) {
        return y.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(y) {
        return o(this, void 0, void 0, function() {
          var f, p, w, b, S, R, C, I, T, _, P, C, x;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                p = 0, E.label = 1;
              case 1:
                return ++p < s ? [4, c.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return w = E.sent(), (0, d.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, w.acquireLock(r)];
              case 3:
                if (b = E.sent(), !b) return [3, 18];
                E.label = 4;
              case 4:
                return E.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 5:
                f = E.sent(), (0, d.logDebugMessage)("validateClaims: claim refresh lock acquired"), S = 0, R = y.claimValidators, E.label = 6;
              case 6:
                return S < R.length ? (C = R[S], [4, C.shouldRefresh(f, y.userContext)]) : [3, 14];
              case 7:
                if (!E.sent()) return [3, 13];
                E.label = 8;
              case 8:
                return E.trys.push([8, 10, , 11]), [4, C.refresh(y.userContext)];
              case 9:
                return E.sent(), [3, 11];
              case 10:
                return I = E.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(C.id),
                  I
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 12:
                f = E.sent(), E.label = 13;
              case 13:
                return S++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, d.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, w.releaseLock(r)];
              case 16:
                return E.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, d.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(p, "/").concat(s)), E.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return p !== s ? [3, 22] : ((0, d.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: y.userContext })
                ]);
              case 21:
                f = E.sent(), E.label = 22;
              case 22:
                T = [], _ = 0, P = y.claimValidators, E.label = 23;
              case 23:
                return _ < P.length ? (C = P[_], [4, C.validate(f, y.userContext)]) : [3, 26];
              case 24:
                x = E.sent(), x.isValid || T.push({
                  id: C.id,
                  reason: x.reason
                }), E.label = 25;
              case 25:
                return _++, [3, 23];
              case 26:
                return [2, T];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(y, f, p) {
        if ((0, d.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + y + " apiDomain: " + f + " sessionTokenBackendDomain: " + p
        ), y.includes("superTokensDoNotDoInterception"))
          return !1;
        y = (0, i.normaliseURLDomainOrThrowError)(y);
        var w = new URL(y), b = w.hostname, S = !1;
        if (f !== "") {
          f = (0, i.normaliseURLDomainOrThrowError)(f);
          var R = new URL(f);
          S = b === R.hostname;
        }
        if (p === void 0 || S)
          return S;
        var I = (0, i.normaliseSessionScopeOrThrowError)(p);
        return (0, i.matchesDomainOrSubdomain)(b, I);
      },
      calculateClockSkewInMillis: function(y) {
        var f = y.accessTokenPayload;
        (0, d.logDebugMessage)("calculateClockSkewInMillis: called");
        var p = f == null ? void 0 : f.iat;
        if (p === void 0 || typeof p != "number")
          return (0, d.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var w = p * 1e3, b = w - Date.now();
        return (0, d.logDebugMessage)("calculateClockSkewInMillis: returning " + b), b;
      }
    };
  }
  return Se.default = u, Se;
}
var ft = {}, Gn;
function xr() {
  if (Gn) return ft;
  Gn = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.PrimitiveClaim = void 0;
  var e = bt(), o = (
    /** @class */
    function() {
      function n(t) {
        var l = this;
        this.validators = {
          hasValue: function(g, d, m) {
            d === void 0 && (d = l.defaultMaxAgeInSeconds);
            var h = e.default.getReferenceOrThrow().dateProvider;
            return {
              id: m !== void 0 ? m : l.id,
              refresh: function(i) {
                return l.refresh(i);
              },
              shouldRefresh: function(i, a) {
                if (d !== void 0 && d < h.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      h.getThresholdInSeconds()
                    )
                  );
                return l.getValueFromPayload(i, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                d !== void 0 && i[l.id].t < h.now() - d * 1e3;
              },
              validate: function(i, a) {
                var c = l.getValueFromPayload(i, a);
                if (c === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: g, actualValue: c }
                  };
                var s = (h.now() - l.getLastFetchedTime(i, a)) / 1e3;
                return d !== void 0 && s > d ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: s,
                    maxAgeInSeconds: d
                  }
                } : c !== g ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: g, actualValue: c }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = t.id, this.refresh = t.refresh, this.defaultMaxAgeInSeconds = t.defaultMaxAgeInSeconds;
      }
      return n.prototype.getValueFromPayload = function(t, l) {
        return t[this.id] !== void 0 ? t[this.id].v : void 0;
      }, n.prototype.getLastFetchedTime = function(t, l) {
        return t[this.id] !== void 0 ? t[this.id].t : void 0;
      }, n;
    }()
  );
  return ft.PrimitiveClaim = o, ft;
}
var De = {}, Xn;
function bo() {
  if (Xn) return De;
  Xn = 1;
  var e = De && De.__awaiter || function(l, g, d, m) {
    function h(i) {
      return i instanceof d ? i : new d(function(a) {
        a(i);
      });
    }
    return new (d || (d = Promise))(function(i, a) {
      function c(u) {
        try {
          r(m.next(u));
        } catch (v) {
          a(v);
        }
      }
      function s(u) {
        try {
          r(m.throw(u));
        } catch (v) {
          a(v);
        }
      }
      function r(u) {
        u.done ? i(u.value) : h(u.value).then(c, s);
      }
      r((m = m.apply(l, g || [])).next());
    });
  }, o = De && De.__generator || function(l, g) {
    var d = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, m, h, i, a;
    return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function c(r) {
      return function(u) {
        return s([r, u]);
      };
    }
    function s(r) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (m = 1, h && (i = r[0] & 2 ? h.return : r[0] ? h.throw || ((i = h.return) && i.call(h), 0) : h.next) && !(i = i.call(h, r[1])).done)
            return i;
          switch (h = 0, i && (r = [r[0] & 2, i.value]), r[0]) {
            case 0:
            case 1:
              i = r;
              break;
            case 4:
              return d.label++, { value: r[1], done: !1 };
            case 5:
              d.label++, h = r[1], r = [0];
              continue;
            case 7:
              r = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (i = d.trys, !(i = i.length > 0 && i[i.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                d = 0;
                continue;
              }
              if (r[0] === 3 && (!i || r[1] > i[0] && r[1] < i[3])) {
                d.label = r[1];
                break;
              }
              if (r[0] === 6 && d.label < i[1]) {
                d.label = i[1], i = r;
                break;
              }
              if (i && d.label < i[2]) {
                d.label = i[2], d.ops.push(r);
                break;
              }
              i[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          r = g.call(l, d);
        } catch (u) {
          r = [6, u], h = 0;
        } finally {
          m = i = 0;
        }
      if (r[0] & 5) throw r[1];
      return { value: r[0] ? r[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(De, "__esModule", { value: !0 }), De.PrimitiveArrayClaim = void 0;
  var n = bt(), t = (
    /** @class */
    function() {
      function l(g) {
        var d = this;
        this.validators = {
          includes: function(m, h, i) {
            h === void 0 && (h = d.defaultMaxAgeInSeconds);
            var a = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: i !== void 0 ? i : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, s) {
                if (h !== void 0 && h < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, s) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                h !== void 0 && c[d.id].t < a.now() - h * 1e3;
              },
              validate: function(c, s) {
                return e(d, void 0, void 0, function() {
                  var r, u;
                  return o(this, function(v) {
                    return r = this.getValueFromPayload(c, s), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, s)) / 1e3, h !== void 0 && u > h ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: h
                        }
                      }
                    ] : r.includes(m) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(m, h, i) {
            h === void 0 && (h = d.defaultMaxAgeInSeconds);
            var a = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: i !== void 0 ? i : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, s) {
                if (h !== void 0 && h < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, s) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                h !== void 0 && c[d.id].t < a.now() - h * 1e3;
              },
              validate: function(c, s) {
                return e(d, void 0, void 0, function() {
                  var r, u;
                  return o(this, function(v) {
                    return r = this.getValueFromPayload(c, s), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, s)) / 1e3, h !== void 0 && u > h ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: h
                        }
                      }
                    ] : r.includes(m) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(m, h, i) {
            h === void 0 && (h = d.defaultMaxAgeInSeconds);
            var a = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: i !== void 0 ? i : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, s) {
                if (h !== void 0 && h < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, s) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                h !== void 0 && c[d.id].t < a.now() - h * 1e3;
              },
              validate: function(c, s) {
                return e(d, void 0, void 0, function() {
                  var r, u, v, y;
                  return o(this, function(f) {
                    return r = this.getValueFromPayload(c, s), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, s)) / 1e3, h !== void 0 && u > h ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: h
                        }
                      }
                    ] : (v = new Set(r), y = m.every(function(p) {
                      return v.has(p);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(m, h, i) {
            h === void 0 && (h = d.defaultMaxAgeInSeconds);
            var a = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: i !== void 0 ? i : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, s) {
                if (h !== void 0 && h < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, s) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                h !== void 0 && c[d.id].t < a.now() - h * 1e3;
              },
              validate: function(c, s) {
                return e(d, void 0, void 0, function() {
                  var r, u, v, y;
                  return o(this, function(f) {
                    return r = this.getValueFromPayload(c, s), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, s)) / 1e3, h !== void 0 && u > h ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: h
                        }
                      }
                    ] : (v = new Set(r), y = m.some(function(p) {
                      return v.has(p);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: m,
                          actualValue: r
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(m, h, i) {
            h === void 0 && (h = d.defaultMaxAgeInSeconds);
            var a = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: i !== void 0 ? i : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, s) {
                if (h !== void 0 && h < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, s) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                h !== void 0 && c[d.id].t < a.now() - h * 1e3;
              },
              validate: function(c, s) {
                return e(d, void 0, void 0, function() {
                  var r, u, v, y;
                  return o(this, function(f) {
                    return r = this.getValueFromPayload(c, s), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, s)) / 1e3, h !== void 0 && u > h ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: h
                        }
                      }
                    ] : (v = new Set(r), y = m.every(function(p) {
                      return !v.has(p);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = g.id, this.refresh = g.refresh, this.defaultMaxAgeInSeconds = g.defaultMaxAgeInSeconds;
      }
      return l.prototype.getValueFromPayload = function(g, d) {
        return g[this.id] !== void 0 ? g[this.id].v : void 0;
      }, l.prototype.getLastFetchedTime = function(g, d) {
        return g[this.id] !== void 0 ? g[this.id].t : void 0;
      }, l;
    }()
  );
  return De.PrimitiveArrayClaim = t, De;
}
var Me = {}, zn;
function So() {
  if (zn) return Me;
  zn = 1;
  var e = Me && Me.__extends || /* @__PURE__ */ function() {
    var l = function(g, d) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, h) {
        m.__proto__ = h;
      } || function(m, h) {
        for (var i in h) Object.prototype.hasOwnProperty.call(h, i) && (m[i] = h[i]);
      }, l(g, d);
    };
    return function(g, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      l(g, d);
      function m() {
        this.constructor = g;
      }
      g.prototype = d === null ? Object.create(d) : (m.prototype = d.prototype, new m());
    };
  }(), o = Me && Me.__assign || function() {
    return o = Object.assign || function(l) {
      for (var g, d = 1, m = arguments.length; d < m; d++) {
        g = arguments[d];
        for (var h in g) Object.prototype.hasOwnProperty.call(g, h) && (l[h] = g[h]);
      }
      return l;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(Me, "__esModule", { value: !0 }), Me.BooleanClaim = void 0;
  var n = xr(), t = (
    /** @class */
    function(l) {
      e(g, l);
      function g(d) {
        var m = l.call(this, d) || this;
        return m.validators = o(o({}, m.validators), {
          isTrue: function(h) {
            return m.validators.hasValue(!0, h);
          },
          isFalse: function(h) {
            return m.validators.hasValue(!1, h);
          }
        }), m;
      }
      return g;
    }(n.PrimitiveClaim)
  );
  return Me.BooleanClaim = t, Me;
}
var Kn;
function Ro() {
  return Kn || (Kn = 1, function(e) {
    var o = Ke && Ke.__awaiter || function(f, p, w, b) {
      function S(R) {
        return R instanceof w ? R : new w(function(I) {
          I(R);
        });
      }
      return new (w || (w = Promise))(function(R, I) {
        function T(C) {
          try {
            P(b.next(C));
          } catch (x) {
            I(x);
          }
        }
        function _(C) {
          try {
            P(b.throw(C));
          } catch (x) {
            I(x);
          }
        }
        function P(C) {
          C.done ? R(C.value) : S(C.value).then(T, _);
        }
        P((b = b.apply(f, p || [])).next());
      });
    }, n = Ke && Ke.__generator || function(f, p) {
      var w = {
        label: 0,
        sent: function() {
          if (R[0] & 1) throw R[1];
          return R[1];
        },
        trys: [],
        ops: []
      }, b, S, R, I;
      return I = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
        return this;
      }), I;
      function T(P) {
        return function(C) {
          return _([P, C]);
        };
      }
      function _(P) {
        if (b) throw new TypeError("Generator is already executing.");
        for (; w; )
          try {
            if (b = 1, S && (R = P[0] & 2 ? S.return : P[0] ? S.throw || ((R = S.return) && R.call(S), 0) : S.next) && !(R = R.call(S, P[1])).done)
              return R;
            switch (S = 0, R && (P = [P[0] & 2, R.value]), P[0]) {
              case 0:
              case 1:
                R = P;
                break;
              case 4:
                return w.label++, { value: P[1], done: !1 };
              case 5:
                w.label++, S = P[1], P = [0];
                continue;
              case 7:
                P = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (R = w.trys, !(R = R.length > 0 && R[R.length - 1]) && (P[0] === 6 || P[0] === 2)) {
                  w = 0;
                  continue;
                }
                if (P[0] === 3 && (!R || P[1] > R[0] && P[1] < R[3])) {
                  w.label = P[1];
                  break;
                }
                if (P[0] === 6 && w.label < R[1]) {
                  w.label = R[1], R = P;
                  break;
                }
                if (R && w.label < R[2]) {
                  w.label = R[2], w.ops.push(P);
                  break;
                }
                R[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            P = p.call(f, w);
          } catch (C) {
            P = [6, C], S = 0;
          } finally {
            b = R = 0;
          }
        if (P[0] & 5) throw P[1];
        return { value: P[0] ? P[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = void 0;
    var t = St(), l = wo(), g = Et(), d = Xt(), m = Cr(), h = je(), i = Qt(), a = Ar(), c = wt(), s = bt(), r = (
      /** @class */
      function() {
        function f() {
        }
        f.init = function(w) {
          m.default.init(w.cookieHandler), h.default.init(w.windowHandler), s.default.init(w.dateProvider), i.default.init(
            w.lockFactory,
            h.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var b = (0, d.validateAndNormaliseInputOrThrowError)(w);
          w.enableDebugLogs !== void 0 && w.enableDebugLogs && (0, c.enableLogging)();
          var S = new g.default(
            (0, l.default)({
              onHandleEvent: b.onHandleEvent,
              preAPIHook: b.preAPIHook,
              postAPIHook: b.postAPIHook,
              sessionExpiredStatusCode: b.sessionExpiredStatusCode
            })
          ).override(b.override.functions).build();
          t.default.init(b, S), f.axiosInterceptorQueue.forEach(function(R) {
            R();
          }), f.axiosInterceptorQueue = [];
        }, f.getUserId = function(w) {
          return t.default.recipeImpl.getUserId({
            userContext: (0, d.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, f.getAccessTokenPayloadSecurely = function(w) {
          return o(this, void 0, void 0, function() {
            return n(this, function(b) {
              return [
                2,
                t.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, d.getNormalisedUserContext)(
                    w === void 0 ? void 0 : w.userContext
                  )
                })
              ];
            });
          });
        };
        var p;
        return p = f, f.axiosInterceptorQueue = [], f.attemptRefreshingSession = function() {
          return o(void 0, void 0, void 0, function() {
            return n(p, function(w) {
              return [2, t.default.attemptRefreshingSession()];
            });
          });
        }, f.doesSessionExist = function(w) {
          return t.default.recipeImpl.doesSessionExist({
            userContext: (0, d.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, f.addAxiosInterceptors = function(w, b) {
          t.default.initCalled ? t.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: w,
            userContext: (0, d.getNormalisedUserContext)(b)
          }) : f.axiosInterceptorQueue.push(function() {
            t.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: w,
              userContext: (0, d.getNormalisedUserContext)(b)
            });
          });
        }, f.signOut = function(w) {
          return t.default.recipeImpl.signOut({
            userContext: (0, d.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, f.getInvalidClaimsFromResponse = function(w) {
          return o(this, void 0, void 0, function() {
            return n(this, function(b) {
              return [
                2,
                t.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: w.response,
                  userContext: (0, d.getNormalisedUserContext)(w.userContext)
                })
              ];
            });
          });
        }, f.getClaimValue = function(w) {
          return o(this, void 0, void 0, function() {
            var b, S;
            return n(this, function(R) {
              switch (R.label) {
                case 0:
                  return b = (0, d.getNormalisedUserContext)(
                    w === void 0 ? void 0 : w.userContext
                  ), [
                    4,
                    f.getAccessTokenPayloadSecurely({ userContext: b })
                  ];
                case 1:
                  return S = R.sent(), [2, w.claim.getValueFromPayload(S, b)];
              }
            });
          });
        }, f.validateClaims = function(w, b) {
          var S = (0, d.getNormalisedUserContext)(b), R = a.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), I = t.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: R,
            userContext: S
          }), T = w !== void 0 ? w(I, S) : I;
          return T.length === 0 ? [] : t.default.recipeImpl.validateClaims({
            claimValidators: T,
            userContext: (0, d.getNormalisedUserContext)(b)
          });
        }, f.getAccessToken = function(w) {
          return o(void 0, void 0, void 0, function() {
            return n(p, function(b) {
              switch (b.label) {
                case 0:
                  return [
                    4,
                    t.default.recipeImpl.doesSessionExist({
                      userContext: (0, d.getNormalisedUserContext)(
                        w === void 0 ? void 0 : w.userContext
                      )
                    })
                  ];
                case 1:
                  return b.sent() ? [2, (0, t.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, f;
      }()
    );
    e.default = r, e.init = r.init, e.getUserId = r.getUserId, e.getAccessTokenPayloadSecurely = r.getAccessTokenPayloadSecurely, e.getAccessToken = r.getAccessToken, e.attemptRefreshingSession = r.attemptRefreshingSession, e.doesSessionExist = r.doesSessionExist, e.addAxiosInterceptors = r.addAxiosInterceptors, e.signOut = r.signOut, e.validateClaims = r.validateClaims, e.getClaimValue = r.getClaimValue, e.getInvalidClaimsFromResponse = r.getInvalidClaimsFromResponse;
    var u = xr();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return u.PrimitiveClaim;
      }
    });
    var v = bo();
    Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return v.PrimitiveArrayClaim;
      }
    });
    var y = So();
    Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return y.BooleanClaim;
      }
    });
  }(Ke)), Ke;
}
var Qn;
function Dr() {
  return Qn || (Qn = 1, function(e) {
    function o(n) {
      for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
    }
    e.__esModule = !0, o(Ro());
  }(Ht)), Ht;
}
var ht = {}, Jn;
function ko() {
  return Jn || (Jn = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.EMAILVERIFICATION_CLAIM_ID = void 0, ht.EMAILVERIFICATION_CLAIM_ID = "st-ev"), ht;
}
var Yn;
function Mr() {
  if (Yn) return se;
  Yn = 1;
  var e = se && se.__extends || /* @__PURE__ */ function() {
    var c = function(s, r) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, v) {
        u.__proto__ = v;
      } || function(u, v) {
        for (var y in v) Object.prototype.hasOwnProperty.call(v, y) && (u[y] = v[y]);
      }, c(s, r);
    };
    return function(s, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      c(s, r);
      function u() {
        this.constructor = s;
      }
      s.prototype = r === null ? Object.create(r) : (u.prototype = r.prototype, new u());
    };
  }(), o = se && se.__assign || function() {
    return o = Object.assign || function(c) {
      for (var s, r = 1, u = arguments.length; r < u; r++) {
        s = arguments[r];
        for (var v in s) Object.prototype.hasOwnProperty.call(s, v) && (c[v] = s[v]);
      }
      return c;
    }, o.apply(this, arguments);
  }, n = se && se.__awaiter || function(c, s, r, u) {
    function v(y) {
      return y instanceof r ? y : new r(function(f) {
        f(y);
      });
    }
    return new (r || (r = Promise))(function(y, f) {
      function p(S) {
        try {
          b(u.next(S));
        } catch (R) {
          f(R);
        }
      }
      function w(S) {
        try {
          b(u.throw(S));
        } catch (R) {
          f(R);
        }
      }
      function b(S) {
        S.done ? y(S.value) : v(S.value).then(p, w);
      }
      b((u = u.apply(c, s || [])).next());
    });
  }, t = se && se.__generator || function(c, s) {
    var r = {
      label: 0,
      sent: function() {
        if (y[0] & 1) throw y[1];
        return y[1];
      },
      trys: [],
      ops: []
    }, u, v, y, f;
    return f = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function p(b) {
      return function(S) {
        return w([b, S]);
      };
    }
    function w(b) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (u = 1, v && (y = b[0] & 2 ? v.return : b[0] ? v.throw || ((y = v.return) && y.call(v), 0) : v.next) && !(y = y.call(v, b[1])).done)
            return y;
          switch (v = 0, y && (b = [b[0] & 2, y.value]), b[0]) {
            case 0:
            case 1:
              y = b;
              break;
            case 4:
              return r.label++, { value: b[1], done: !1 };
            case 5:
              r.label++, v = b[1], b = [0];
              continue;
            case 7:
              b = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (y = r.trys, !(y = y.length > 0 && y[y.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                r = 0;
                continue;
              }
              if (b[0] === 3 && (!y || b[1] > y[0] && b[1] < y[3])) {
                r.label = b[1];
                break;
              }
              if (b[0] === 6 && r.label < y[1]) {
                r.label = y[1], y = b;
                break;
              }
              if (y && r.label < y[2]) {
                r.label = y[2], r.ops.push(b);
                break;
              }
              y[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          b = s.call(c, r);
        } catch (S) {
          b = [6, S], v = 0;
        } finally {
          u = y = 0;
        }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  }, l = se && se.__spreadArray || function(c, s, r) {
    if (r || arguments.length === 2)
      for (var u = 0, v = s.length, y; u < v; u++)
        (y || !(u in s)) && (y || (y = Array.prototype.slice.call(s, 0, u)), y[u] = s[u]);
    return c.concat(y || Array.prototype.slice.call(s));
  };
  Object.defineProperty(se, "__esModule", { value: !0 }), se.Recipe = void 0;
  var g = Er(), d = Dr(), m = Ie(), h = ko(), i = [h.EMAILVERIFICATION_CLAIM_ID], a = (
    /** @class */
    function(c) {
      e(s, c);
      function s(r) {
        var u = c.call(this, r) || this;
        return u.getUserId = function(v) {
          return d.default.getUserId({
            userContext: v.userContext
          });
        }, u.getAccessToken = function(v) {
          return n(u, void 0, void 0, function() {
            return t(this, function(y) {
              return [
                2,
                d.default.getAccessToken({
                  userContext: v.userContext
                })
              ];
            });
          });
        }, u.getAccessTokenPayloadSecurely = function(v) {
          return n(u, void 0, void 0, function() {
            return t(this, function(y) {
              return [
                2,
                d.default.getAccessTokenPayloadSecurely({
                  userContext: v.userContext
                })
              ];
            });
          });
        }, u.doesSessionExist = function(v) {
          return d.default.doesSessionExist({
            userContext: v.userContext
          });
        }, u.signOut = function(v) {
          return d.default.signOut({
            userContext: v.userContext
          });
        }, u.attemptRefreshingSession = function() {
          return n(u, void 0, void 0, function() {
            return t(this, function(v) {
              return [2, d.default.attemptRefreshingSession()];
            });
          });
        }, u.validateClaims = function(v) {
          return d.default.validateClaims(v.overrideGlobalClaimValidators, v.userContext);
        }, d.default.init(
          o(o({}, r), {
            override: {
              functions: function(v, y) {
                var f;
                return y.override(function(p) {
                  return o(o({}, p), {
                    getGlobalClaimValidators: function(w) {
                      var b = p.getGlobalClaimValidators(w);
                      return l(
                        l(
                          [],
                          b.filter(function(S) {
                            return i.includes(S.id);
                          }),
                          !0
                        ),
                        b.filter(function(S) {
                          return !i.includes(S.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((f = r.override) === null || f === void 0) && f.functions && y.override(r.override.functions), v;
              }
            },
            preAPIHook: function(v) {
              return n(u, void 0, void 0, function() {
                var y, f;
                return t(this, function(p) {
                  return y = new Headers(v.requestInit.headers), y.set("rid", r.recipeId), f = o(o({}, v), {
                    requestInit: o(o({}, v.requestInit), { headers: y })
                  }), r.preAPIHook === void 0 ? [2, f] : [2, r.preAPIHook(v)];
                });
              });
            },
            apiDomain: r.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: r.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), u;
      }
      return s.init = function(r) {
        return function(u, v, y) {
          return s.instance = new s(
            o(o({}, r), {
              appInfo: u,
              recipeId: s.RECIPE_ID,
              enableDebugLogs: y
            })
          ), s.instance;
        };
      }, s.prototype.getClaimValue = function(r) {
        return d.default.getClaimValue(r);
      }, s.prototype.getInvalidClaimsFromResponse = function(r) {
        return d.default.getInvalidClaimsFromResponse(r);
      }, s.addAxiosInterceptors = function(r, u) {
        return d.default.addAxiosInterceptors(r, u);
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var r = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw r = (0, m.checkForSSRErrorAndAppendIfNeeded)(r), Error(r);
        }
        return s.instance;
      }, s.reset = function() {
        (0, m.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "session", s;
    }(g.default)
  );
  return se.Recipe = a, se.default = a, se;
}
var Zn;
function Zt() {
  if (Zn) return be;
  Zn = 1;
  var e = be && be.__extends || /* @__PURE__ */ function() {
    var d = function(m, h) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
        i.__proto__ = a;
      } || function(i, a) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (i[c] = a[c]);
      }, d(m, h);
    };
    return function(m, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      d(m, h);
      function i() {
        this.constructor = m;
      }
      m.prototype = h === null ? Object.create(h) : (i.prototype = h.prototype, new i());
    };
  }(), o = be && be.__awaiter || function(d, m, h, i) {
    function a(c) {
      return c instanceof h ? c : new h(function(s) {
        s(c);
      });
    }
    return new (h || (h = Promise))(function(c, s) {
      function r(y) {
        try {
          v(i.next(y));
        } catch (f) {
          s(f);
        }
      }
      function u(y) {
        try {
          v(i.throw(y));
        } catch (f) {
          s(f);
        }
      }
      function v(y) {
        y.done ? c(y.value) : a(y.value).then(r, u);
      }
      v((i = i.apply(d, m || [])).next());
    });
  }, n = be && be.__generator || function(d, m) {
    var h = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, i, a, c, s;
    return s = { next: r(0), throw: r(1), return: r(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function r(v) {
      return function(y) {
        return u([v, y]);
      };
    }
    function u(v) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (i = 1, a && (c = v[0] & 2 ? a.return : v[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, v[1])).done)
            return c;
          switch (a = 0, c && (v = [v[0] & 2, c.value]), v[0]) {
            case 0:
            case 1:
              c = v;
              break;
            case 4:
              return h.label++, { value: v[1], done: !1 };
            case 5:
              h.label++, a = v[1], v = [0];
              continue;
            case 7:
              v = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (c = h.trys, !(c = c.length > 0 && c[c.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                h = 0;
                continue;
              }
              if (v[0] === 3 && (!c || v[1] > c[0] && v[1] < c[3])) {
                h.label = v[1];
                break;
              }
              if (v[0] === 6 && h.label < c[1]) {
                h.label = c[1], c = v;
                break;
              }
              if (c && h.label < c[2]) {
                h.label = c[2], h.ops.push(v);
                break;
              }
              c[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          v = m.call(d, h);
        } catch (y) {
          v = [6, y], a = 0;
        } finally {
          i = c = 0;
        }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(be, "__esModule", { value: !0 });
  var t = Er(), l = Mr(), g = (
    /** @class */
    function(d) {
      e(m, d);
      function m(h) {
        var i = d.call(this, h) || this;
        return i.signOut = function(a) {
          return o(i, void 0, void 0, function() {
            return n(this, function(c) {
              switch (c.label) {
                case 0:
                  return [
                    4,
                    l.default.getInstanceOrThrow().signOut({
                      userContext: a.userContext
                    })
                  ];
                case 1:
                  return [2, c.sent()];
              }
            });
          });
        }, i;
      }
      return m;
    }(t.default)
  );
  return be.default = g, be;
}
var er;
function en() {
  if (er) return pe;
  er = 1;
  var e = pe && pe.__extends || /* @__PURE__ */ function() {
    var h = function(i, a) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, s) {
        c.__proto__ = s;
      } || function(c, s) {
        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (c[r] = s[r]);
      }, h(i, a);
    };
    return function(i, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      h(i, a);
      function c() {
        this.constructor = i;
      }
      i.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
    };
  }(), o = pe && pe.__assign || function() {
    return o = Object.assign || function(h) {
      for (var i, a = 1, c = arguments.length; a < c; a++) {
        i = arguments[a];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (h[s] = i[s]);
      }
      return h;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(pe, "__esModule", { value: !0 }), pe.Recipe = void 0;
  var n = lo(), t = Et(), l = vo(), g = Ie(), d = Zt(), m = (
    /** @class */
    function(h) {
      e(i, h);
      function i(a) {
        var c = h.call(this, (0, n.normaliseUserInput)(a)) || this, s = new t.default(
          (0, l.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = s.override(c.config.override.functions).build(), c;
      }
      return i.init = function(a) {
        return function(c, s) {
          return i.instance = new i(
            o(o({}, a), { recipeId: i.RECIPE_ID, appInfo: c, clientType: s })
          ), i.instance;
        };
      }, i.getInstanceOrThrow = function() {
        if (i.instance === void 0) {
          var a = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw a = (0, g.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return i.instance;
      }, i.reset = function() {
        (0, g.isTest)() && (i.instance = void 0);
      }, i.RECIPE_ID = "multitenancy", i;
    }(d.default)
  );
  return pe.Recipe = m, pe.default = m, pe;
}
var Nt = {}, G = {}, Re = {}, Qe = {}, tr;
function Io() {
  if (tr) return Qe;
  tr = 1;
  var e = Qe && Qe.__assign || function() {
    return e = Object.assign || function(t) {
      for (var l, g = 1, d = arguments.length; g < d; g++) {
        l = arguments[g];
        for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (t[m] = l[m]);
      }
      return t;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.normaliseUserInput = void 0;
  var o = Jt();
  function n(t) {
    var l = e(
      {
        functions: function(g) {
          return g;
        }
      },
      t.override
    );
    return e(e({}, (0, o.normaliseAuthRecipe)(t)), { override: l });
  }
  return Qe.normaliseUserInput = n, Qe;
}
var de = {}, gt = {}, nr;
function _o() {
  return nr || (nr = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, gt.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), gt;
}
var rr;
function To() {
  if (rr) return de;
  rr = 1;
  var e = de && de.__assign || function() {
    return e = Object.assign || function(i) {
      for (var a, c = 1, s = arguments.length; c < s; c++) {
        a = arguments[c];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (i[r] = a[r]);
      }
      return i;
    }, e.apply(this, arguments);
  }, o = de && de.__awaiter || function(i, a, c, s) {
    function r(u) {
      return u instanceof c ? u : new c(function(v) {
        v(u);
      });
    }
    return new (c || (c = Promise))(function(u, v) {
      function y(w) {
        try {
          p(s.next(w));
        } catch (b) {
          v(b);
        }
      }
      function f(w) {
        try {
          p(s.throw(w));
        } catch (b) {
          v(b);
        }
      }
      function p(w) {
        w.done ? u(w.value) : r(w.value).then(y, f);
      }
      p((s = s.apply(i, a || [])).next());
    });
  }, n = de && de.__generator || function(i, a) {
    var c = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, s, r, u, v;
    return v = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function y(p) {
      return function(w) {
        return f([p, w]);
      };
    }
    function f(p) {
      if (s) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (s = 1, r && (u = p[0] & 2 ? r.return : p[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, p[1])).done)
            return u;
          switch (r = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
            case 0:
            case 1:
              u = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, r = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (u = c.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < u[1]) {
                c.label = u[1], u = p;
                break;
              }
              if (u && c.label < u[2]) {
                c.label = u[2], c.ops.push(p);
                break;
              }
              u[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = a.call(i, c);
        } catch (w) {
          p = [6, w], r = 0;
        } finally {
          s = u = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.getRecipeImplementation = void 0;
  var t = Gt(), l = Yt(), g = Ie(), d = en(), m = _o();
  function h(i) {
    var a = new l.default(i.recipeId, i.appInfo);
    return {
      createCode: function(c) {
        return o(this, void 0, void 0, function() {
          var s, r, u, v, y, f;
          return n(this, function(p) {
            switch (p.label) {
              case 0:
                return "email" in c && (s = {
                  email: c.email,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in c && (s = {
                  phoneNumber: c.phoneNumber,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }), f = (y = a).post, [
                  4,
                  d.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  f.apply(y, [
                    p.sent(),
                    "/signinup/code",
                    { body: JSON.stringify(s) },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: i.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: i.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return r = p.sent(), u = r.jsonBody, v = r.fetchResponse, [2, e(e({}, u), { fetchResponse: v })];
            }
          });
        });
      },
      resendCode: function(c) {
        return o(this, void 0, void 0, function() {
          var s, r, u, v;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return s = {
                  deviceId: c.deviceId,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  a.post(
                    c.tenantId,
                    "/signinup/code/resend",
                    { body: JSON.stringify(s) },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: i.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: i.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: c.userContext
                    })
                  )
                ];
              case 1:
                return r = y.sent(), u = r.jsonBody, v = r.fetchResponse, [
                  2,
                  {
                    status: u.status,
                    fetchResponse: v
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(c) {
        return o(this, void 0, void 0, function() {
          var s, r, u, v;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return "userInputCode" in c ? s = {
                  userInputCode: c.userInputCode,
                  deviceId: c.deviceId,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                } : s = {
                  linkCode: c.linkCode,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  a.post(
                    c.tenantId,
                    "/signinup/code/consume",
                    { body: JSON.stringify(s) },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: i.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: i.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: c.userContext
                    })
                  )
                ];
              case 1:
                return r = y.sent(), u = r.jsonBody, v = r.fetchResponse, u.status !== "OK" ? [
                  2,
                  e(e({}, u), { fetchResponse: v })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, g.normaliseUserResponse)("passwordless", u)
                    ),
                    { fetchResponse: v }
                  )
                ];
            }
          });
        });
      },
      getTenantIdFromURL: function() {
        return (0, g.getQueryParams)("tenantId");
      },
      getLinkCodeFromURL: function() {
        return (0, g.getHashFromLocation)();
      },
      getPreAuthSessionIdFromURL: function() {
        var c = (0, g.getQueryParams)("preAuthSessionId");
        return c === void 0 ? "" : c;
      },
      doesEmailExist: function(c) {
        return o(this, void 0, void 0, function() {
          var s, r, u, v, y;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return y = (v = a).get, [
                  4,
                  d.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(v, [
                    f.sent(),
                    "/passwordless/email/exists",
                    {},
                    { email: c.email },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: i.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: i.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return s = f.sent(), r = s.jsonBody, u = s.fetchResponse, [
                  2,
                  {
                    status: r.status,
                    doesExist: r.exists,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(c) {
        return o(this, void 0, void 0, function() {
          var s, r, u, v, y;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return y = (v = a).get, [
                  4,
                  d.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(v, [
                    f.sent(),
                    "/passwordless/phonenumber/exists",
                    {},
                    { phoneNumber: c.phoneNumber },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: i.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: i.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return s = f.sent(), r = s.jsonBody, u = s.fetchResponse, [
                  2,
                  {
                    status: r.status,
                    doesExist: r.exists,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return o(this, void 0, void 0, function() {
          var c;
          return n(this, function(s) {
            switch (s.label) {
              case 0:
                return [
                  4,
                  t.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    m.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (c = s.sent(), c === null)
                  return [2, void 0];
                try {
                  return [2, JSON.parse(c)];
                } catch {
                  return [2, void 0];
                }
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      setLoginAttemptInfo: function(c) {
        return o(this, void 0, void 0, function() {
          return n(this, function(s) {
            switch (s.label) {
              case 0:
                return [
                  4,
                  t.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    m.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
                    JSON.stringify(
                      e(
                        {
                          // This can make future changes/migrations a lot cleaner
                          version: 1
                        },
                        c.attemptInfo
                      )
                    )
                  )
                ];
              case 1:
                return s.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      clearLoginAttemptInfo: function() {
        return o(this, void 0, void 0, function() {
          return n(this, function(c) {
            return t.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
              m.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
            ), [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
  return de.default = h, de.getRecipeImplementation = h, de;
}
var or;
function Co() {
  if (or) return Re;
  or = 1;
  var e = Re && Re.__extends || /* @__PURE__ */ function() {
    var h = function(i, a) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, s) {
        c.__proto__ = s;
      } || function(c, s) {
        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (c[r] = s[r]);
      }, h(i, a);
    };
    return function(i, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      h(i, a);
      function c() {
        this.constructor = i;
      }
      i.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
    };
  }(), o = Re && Re.__assign || function() {
    return o = Object.assign || function(h) {
      for (var i, a = 1, c = arguments.length; a < c; a++) {
        i = arguments[a];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (h[s] = i[s]);
      }
      return h;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(Re, "__esModule", { value: !0 }), Re.Recipe = void 0;
  var n = Et(), t = Ie(), l = Zt(), g = Io(), d = To(), m = (
    /** @class */
    function(h) {
      e(i, h);
      function i(a) {
        var c = h.call(this, (0, g.normaliseUserInput)(a)) || this, s = new n.default(
          (0, d.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = s.override(c.config.override.functions).build(), c;
      }
      return i.init = function(a) {
        return function(c, s) {
          return i.instance = new i(
            o(o({}, a), { recipeId: i.RECIPE_ID, appInfo: c, clientType: s })
          ), i.instance;
        };
      }, i.getInstanceOrThrow = function() {
        if (i.instance === void 0) {
          var a = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, t.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return i.instance;
      }, i.reset = function() {
        (0, t.isTest)() && (i.instance = void 0);
      }, i.RECIPE_ID = "passwordless", i;
    }(l.default)
  );
  return Re.Recipe = m, Re.default = m, Re;
}
var sr;
function Ao() {
  if (sr) return G;
  sr = 1;
  var e = G && G.__assign || function() {
    return e = Object.assign || function(b) {
      for (var S, R = 1, I = arguments.length; R < I; R++) {
        S = arguments[R];
        for (var T in S) Object.prototype.hasOwnProperty.call(S, T) && (b[T] = S[T]);
      }
      return b;
    }, e.apply(this, arguments);
  }, o = G && G.__awaiter || function(b, S, R, I) {
    function T(_) {
      return _ instanceof R ? _ : new R(function(P) {
        P(_);
      });
    }
    return new (R || (R = Promise))(function(_, P) {
      function C(B) {
        try {
          E(I.next(B));
        } catch (K) {
          P(K);
        }
      }
      function x(B) {
        try {
          E(I.throw(B));
        } catch (K) {
          P(K);
        }
      }
      function E(B) {
        B.done ? _(B.value) : T(B.value).then(C, x);
      }
      E((I = I.apply(b, S || [])).next());
    });
  }, n = G && G.__generator || function(b, S) {
    var R = {
      label: 0,
      sent: function() {
        if (_[0] & 1) throw _[1];
        return _[1];
      },
      trys: [],
      ops: []
    }, I, T, _, P;
    return P = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (P[Symbol.iterator] = function() {
      return this;
    }), P;
    function C(E) {
      return function(B) {
        return x([E, B]);
      };
    }
    function x(E) {
      if (I) throw new TypeError("Generator is already executing.");
      for (; R; )
        try {
          if (I = 1, T && (_ = E[0] & 2 ? T.return : E[0] ? T.throw || ((_ = T.return) && _.call(T), 0) : T.next) && !(_ = _.call(T, E[1])).done)
            return _;
          switch (T = 0, _ && (E = [E[0] & 2, _.value]), E[0]) {
            case 0:
            case 1:
              _ = E;
              break;
            case 4:
              return R.label++, { value: E[1], done: !1 };
            case 5:
              R.label++, T = E[1], E = [0];
              continue;
            case 7:
              E = R.ops.pop(), R.trys.pop();
              continue;
            default:
              if (_ = R.trys, !(_ = _.length > 0 && _[_.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                R = 0;
                continue;
              }
              if (E[0] === 3 && (!_ || E[1] > _[0] && E[1] < _[3])) {
                R.label = E[1];
                break;
              }
              if (E[0] === 6 && R.label < _[1]) {
                R.label = _[1], _ = E;
                break;
              }
              if (_ && R.label < _[2]) {
                R.label = _[2], R.ops.push(E);
                break;
              }
              _[2] && R.ops.pop(), R.trys.pop();
              continue;
          }
          E = S.call(b, R);
        } catch (B) {
          E = [6, B], T = 0;
        } finally {
          I = _ = 0;
        }
      if (E[0] & 5) throw E[1];
      return { value: E[0] ? E[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(G, "__esModule", { value: !0 }), G.clearLoginAttemptInfo = G.setLoginAttemptInfo = G.getLoginAttemptInfo = G.getTenantIdFromURL = G.getPreAuthSessionIdFromURL = G.getLinkCodeFromURL = G.signOut = G.doesPhoneNumberExist = G.doesEmailExist = G.consumeCode = G.resendCode = G.createCode = G.init = void 0;
  var t = Ie(), l = en(), g = Co(), d = (
    /** @class */
    function() {
      function b() {
      }
      return b.init = function(S) {
        return g.default.init(S);
      }, b.createCode = function(S) {
        var R, I;
        return o(this, void 0, void 0, function() {
          var T, _, P, C, x;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return T = g.default.getInstanceOrThrow(), _ = T.recipeImplementation, P = (0, t.getNormalisedUserContext)(S.userContext), [
                  4,
                  l.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: S.userContext
                  })
                ];
              case 1:
                return C = E.sent(), [
                  4,
                  _.createCode(
                    e(e({}, S), {
                      shouldTryLinkingWithSessionUser: (R = S.shouldTryLinkingWithSessionUser) !== null && R !== void 0 ? R : !1,
                      userContext: P
                    })
                  )
                ];
              case 2:
                return x = E.sent(), x.status !== "OK" ? [3, 4] : [
                  4,
                  _.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: C,
                      deviceId: x.deviceId,
                      preAuthSessionId: x.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (I = S.shouldTryLinkingWithSessionUser) !== null && I !== void 0 ? I : !1,
                      flowType: x.flowType
                    },
                    userContext: P
                  })
                ];
              case 3:
                E.sent(), E.label = 4;
              case 4:
                return [2, x];
            }
          });
        });
      }, b.resendCode = function(S) {
        return o(this, void 0, void 0, function() {
          var R, I, T, _;
          return n(this, function(P) {
            switch (P.label) {
              case 0:
                return R = g.default.getInstanceOrThrow(), I = R.recipeImplementation, T = (0, t.getNormalisedUserContext)(
                  S == null ? void 0 : S.userContext
                ), [
                  4,
                  I.getLoginAttemptInfo({
                    userContext: T
                  })
                ];
              case 1:
                return _ = P.sent(), [
                  2,
                  I.resendCode(
                    e(e({}, S), {
                      tenantId: _ == null ? void 0 : _.tenantId,
                      userContext: T,
                      deviceId: _ === void 0 ? "" : _.deviceId,
                      preAuthSessionId: _ === void 0 ? "" : _.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: _ == null ? void 0 : _.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, b.consumeCode = function(S) {
        var R;
        return o(this, void 0, void 0, function() {
          var I, T, _, P, C, x, x, E, B, K;
          return n(this, function(ne) {
            switch (ne.label) {
              case 0:
                return I = g.default.getInstanceOrThrow(), T = I.recipeImplementation, _ = (0, t.getNormalisedUserContext)(
                  S == null ? void 0 : S.userContext
                ), S !== void 0 && "userInputCode" in S ? [
                  4,
                  T.getLoginAttemptInfo({
                    userContext: _
                  })
                ] : [3, 2];
              case 1:
                return C = ne.sent(), x = (R = C == null ? void 0 : C.shouldTryLinkingWithSessionUser) !== null && R !== void 0 ? R : !1, P = {
                  userInputCode: S.userInputCode,
                  deviceId: C === void 0 ? "" : C.deviceId,
                  preAuthSessionId: C === void 0 ? "" : C.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: x,
                  tenantId: C == null ? void 0 : C.tenantId
                }, [3, 3];
              case 2:
                x = !1, E = T.getLinkCodeFromURL({
                  userContext: _
                }), B = T.getTenantIdFromURL({
                  userContext: _
                }), K = T.getPreAuthSessionIdFromURL({
                  userContext: _
                }), P = {
                  tenantId: B,
                  linkCode: E,
                  preAuthSessionId: K,
                  shouldTryLinkingWithSessionUser: x
                }, ne.label = 3;
              case 3:
                return [
                  2,
                  T.consumeCode(
                    e(
                      {
                        userContext: _,
                        options: S == null ? void 0 : S.options
                      },
                      P
                    )
                  )
                ];
            }
          });
        });
      }, b.getLinkCodeFromURL = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          e(e({}, S), {
            userContext: (0, t.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.getPreAuthSessionIdFromURL = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          e(e({}, S), {
            userContext: (0, t.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.getTenantIdFromURL = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          e(e({}, S), {
            userContext: (0, t.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.doesEmailExist = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          e(e({}, S), { userContext: (0, t.getNormalisedUserContext)(S.userContext) })
        );
      }, b.doesPhoneNumberExist = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          e(e({}, S), { userContext: (0, t.getNormalisedUserContext)(S.userContext) })
        );
      }, b.getLoginAttemptInfo = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          e(e({}, S), {
            userContext: (0, t.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.setLoginAttemptInfo = function(S) {
        return o(this, void 0, void 0, function() {
          var R, I, T;
          return n(this, function(_) {
            switch (_.label) {
              case 0:
                return R = (0, t.getNormalisedUserContext)(S.userContext), I = g.default.getInstanceOrThrow(), [
                  4,
                  l.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: R })
                ];
              case 1:
                return T = _.sent(), [
                  2,
                  I.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: e(
                      {
                        tenantId: T,
                        shouldTryLinkingWithSessionUser: S.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      S.attemptInfo
                    ),
                    userContext: R
                  })
                ];
            }
          });
        });
      }, b.clearLoginAttemptInfo = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          e(e({}, S), {
            userContext: (0, t.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.signOut = function(S) {
        return g.default.getInstanceOrThrow().signOut({
          userContext: (0, t.getNormalisedUserContext)(
            S == null ? void 0 : S.userContext
          )
        });
      }, b;
    }()
  );
  G.default = d;
  var m = d.init;
  G.init = m;
  var h = d.createCode;
  G.createCode = h;
  var i = d.resendCode;
  G.resendCode = i;
  var a = d.consumeCode;
  G.consumeCode = a;
  var c = d.doesEmailExist;
  G.doesEmailExist = c;
  var s = d.doesPhoneNumberExist;
  G.doesPhoneNumberExist = s;
  var r = d.signOut;
  G.signOut = r;
  var u = d.getLinkCodeFromURL;
  G.getLinkCodeFromURL = u;
  var v = d.getPreAuthSessionIdFromURL;
  G.getPreAuthSessionIdFromURL = v;
  var y = d.getTenantIdFromURL;
  G.getTenantIdFromURL = y;
  var f = d.getLoginAttemptInfo;
  G.getLoginAttemptInfo = f;
  var p = d.setLoginAttemptInfo;
  G.setLoginAttemptInfo = p;
  var w = d.clearLoginAttemptInfo;
  return G.clearLoginAttemptInfo = w, G;
}
var ir;
function Oo() {
  return ir || (ir = 1, function(e) {
    function o(n) {
      for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
    }
    e.__esModule = !0, o(Ao());
  }(Nt)), Nt;
}
var Po = Oo();
const Es = /* @__PURE__ */ Bt(Po);
var Ft = {}, te = {}, ke = {}, Je = {}, ar;
function Eo() {
  if (ar) return Je;
  ar = 1;
  var e = Je && Je.__assign || function() {
    return e = Object.assign || function(t) {
      for (var l, g = 1, d = arguments.length; g < d; g++) {
        l = arguments[g];
        for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (t[m] = l[m]);
      }
      return t;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Je, "__esModule", { value: !0 }), Je.normaliseUserInput = void 0;
  var o = Jt();
  function n(t) {
    var l = e(
      {
        functions: function(g) {
          return g;
        }
      },
      t.override
    );
    return e(e({}, (0, o.normaliseAuthRecipe)(t)), { override: l });
  }
  return Je.normaliseUserInput = n, Je;
}
var fe = {}, ur;
function xo() {
  if (ur) return fe;
  ur = 1;
  var e = fe && fe.__assign || function() {
    return e = Object.assign || function(h) {
      for (var i, a = 1, c = arguments.length; a < c; a++) {
        i = arguments[a];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (h[s] = i[s]);
      }
      return h;
    }, e.apply(this, arguments);
  }, o = fe && fe.__awaiter || function(h, i, a, c) {
    function s(r) {
      return r instanceof a ? r : new a(function(u) {
        u(r);
      });
    }
    return new (a || (a = Promise))(function(r, u) {
      function v(p) {
        try {
          f(c.next(p));
        } catch (w) {
          u(w);
        }
      }
      function y(p) {
        try {
          f(c.throw(p));
        } catch (w) {
          u(w);
        }
      }
      function f(p) {
        p.done ? r(p.value) : s(p.value).then(v, y);
      }
      f((c = c.apply(h, i || [])).next());
    });
  }, n = fe && fe.__generator || function(h, i) {
    var a = {
      label: 0,
      sent: function() {
        if (r[0] & 1) throw r[1];
        return r[1];
      },
      trys: [],
      ops: []
    }, c, s, r, u;
    return u = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function v(f) {
      return function(p) {
        return y([f, p]);
      };
    }
    function y(f) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (c = 1, s && (r = f[0] & 2 ? s.return : f[0] ? s.throw || ((r = s.return) && r.call(s), 0) : s.next) && !(r = r.call(s, f[1])).done)
            return r;
          switch (s = 0, r && (f = [f[0] & 2, r.value]), f[0]) {
            case 0:
            case 1:
              r = f;
              break;
            case 4:
              return a.label++, { value: f[1], done: !1 };
            case 5:
              a.label++, s = f[1], f = [0];
              continue;
            case 7:
              f = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (r = a.trys, !(r = r.length > 0 && r[r.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                a = 0;
                continue;
              }
              if (f[0] === 3 && (!r || f[1] > r[0] && f[1] < r[3])) {
                a.label = f[1];
                break;
              }
              if (f[0] === 6 && a.label < r[1]) {
                a.label = r[1], r = f;
                break;
              }
              if (r && a.label < r[2]) {
                a.label = r[2], a.ops.push(f);
                break;
              }
              r[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          f = i.call(h, a);
        } catch (p) {
          f = [6, p], s = 0;
        } finally {
          c = r = 0;
        }
      if (f[0] & 5) throw f[1];
      return { value: f[0] ? f[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getRecipeImplementation = void 0;
  var t = Yt(), l = Ie(), g = Pr(), d = Gt();
  function m(h) {
    var i = new t.default(h.recipeId, h.appInfo);
    return {
      getStateAndOtherInfoFromStorage: function() {
        var a = d.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync(
          "supertokens-oauth-state-2"
        );
        if (a !== null)
          try {
            return JSON.parse(a);
          } catch {
            return;
          }
      },
      setStateAndOtherInfoToStorage: function(a) {
        return o(this, void 0, void 0, function() {
          var c;
          return n(this, function(s) {
            switch (s.label) {
              case 0:
                return c = JSON.stringify(e({}, a.state)), [
                  4,
                  d.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    c
                  )
                ];
              case 1:
                return s.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getAuthorisationURLWithQueryParamsAndSetState: function(a) {
        return o(this, void 0, void 0, function() {
          var c, s, r, u, v;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return [
                  4,
                  this.getAuthorisationURLFromBackend({
                    thirdPartyId: a.thirdPartyId,
                    tenantId: a.tenantId,
                    redirectURIOnProviderDashboard: a.redirectURIOnProviderDashboard || a.frontendRedirectURI,
                    userContext: a.userContext,
                    options: a.options
                  })
                ];
              case 1:
                return c = y.sent(), s = a.redirectURIOnProviderDashboard !== void 0 && a.frontendRedirectURI !== a.redirectURIOnProviderDashboard ? a.frontendRedirectURI : void 0, r = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: s,
                  userContext: a.userContext
                }), u = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: r,
                      thirdPartyId: a.thirdPartyId,
                      tenantId: a.tenantId,
                      expiresAt: u,
                      redirectURIOnProviderDashboard: a.redirectURIOnProviderDashboard || a.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: a.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: c.pkceCodeVerifier
                    },
                    userContext: a.userContext
                  })
                ];
              case 2:
                return y.sent(), v = (0, l.appendQueryParamsToURL)(c.urlWithQueryParams, {
                  state: r
                }), [2, v];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(a) {
        return o(this, void 0, void 0, function() {
          var c, s, r, u;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return c = {
                  thirdPartyId: a.thirdPartyId,
                  redirectURIOnProviderDashboard: a.redirectURIOnProviderDashboard
                }, h.clientType !== void 0 && (c.clientType = h.clientType), [
                  4,
                  i.get(
                    a.tenantId,
                    "/authorisationurl",
                    {},
                    c,
                    t.default.preparePreAPIHook({
                      recipePreAPIHook: h.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: a.options,
                      userContext: a.userContext
                    }),
                    t.default.preparePostAPIHook({
                      recipePostAPIHook: h.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: a.userContext
                    })
                  )
                ];
              case 1:
                return s = v.sent(), r = s.jsonBody, u = s.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: r.urlWithQueryParams,
                    pkceCodeVerifier: r.pkceCodeVerifier,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(a) {
        return o(this, void 0, void 0, function() {
          var c, s, r, u, v, y, f, p, w;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return c = this.getStateAndOtherInfoFromStorage({
                  userContext: a.userContext
                }), s = this.getAuthStateFromURL({
                  userContext: a.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: s,
                    stateObjectFromStorage: c,
                    userContext: a.userContext
                  })
                ];
              case 1:
                if (r = b.sent(), u = this.getAuthErrorFromURL({
                  userContext: a.userContext
                }), u !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(u));
                return v = (0, l.getAllQueryParams)(), y = Object.fromEntries(v), [
                  4,
                  i.post(
                    r.tenantId,
                    "/signinup",
                    {
                      body: JSON.stringify({
                        thirdPartyId: r.thirdPartyId,
                        clientType: h.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: r.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: y,
                          pkceCodeVerifier: r.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: r.shouldTryLinkingWithSessionUser
                      })
                    },
                    t.default.preparePreAPIHook({
                      recipePreAPIHook: h.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: a.options,
                      userContext: a.userContext
                    }),
                    t.default.preparePostAPIHook({
                      recipePostAPIHook: h.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: a.userContext
                    })
                  )
                ];
              case 2:
                if (f = b.sent(), p = f.jsonBody, w = f.fetchResponse, p.status === "FIELD_ERROR")
                  throw new g.default(p.error);
                return p.status !== "OK" ? [
                  2,
                  e(e({}, p), { fetchResponse: w })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, l.normaliseUserResponse)("thirdparty", p)
                    ),
                    { fetchResponse: w }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(a) {
        var c = {
          state: "".concat(1e20).replace(/[018]/g, function(s) {
            return (parseInt(s) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(s) / 4).toString(16);
          })
        };
        return a !== void 0 && a.frontendRedirectURI !== void 0 && (c.frontendRedirectURI = a.frontendRedirectURI), btoa(JSON.stringify(c));
      },
      verifyAndGetStateOrThrowError: function(a) {
        return o(this, void 0, void 0, function() {
          return n(this, function(c) {
            if (a.stateObjectFromStorage === void 0 || a.stateObjectFromStorage.stateForAuthProvider === void 0)
              throw new Error("No valid auth state present in session storage");
            if (a.stateFromAuthProvider === void 0)
              throw new Error("No state recieved from auth provider");
            if (a.stateObjectFromStorage.expiresAt < Date.now())
              throw new Error("Auth state verification failed. The auth provider took too long to respond");
            if (a.stateFromAuthProvider !== a.stateObjectFromStorage.stateForAuthProvider)
              throw new Error(
                "Auth state verification failed. The auth provider responded with an invalid state"
              );
            return [2, a.stateObjectFromStorage];
          });
        });
      },
      getAuthErrorFromURL: function() {
        return (0, l.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var a = (0, l.getQueryParams)("state");
        return a === void 0 ? "" : a;
      }
    };
  }
  return fe.default = m, fe.getRecipeImplementation = m, fe;
}
var cr;
function Do() {
  if (cr) return ke;
  cr = 1;
  var e = ke && ke.__extends || /* @__PURE__ */ function() {
    var h = function(i, a) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, s) {
        c.__proto__ = s;
      } || function(c, s) {
        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (c[r] = s[r]);
      }, h(i, a);
    };
    return function(i, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      h(i, a);
      function c() {
        this.constructor = i;
      }
      i.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
    };
  }(), o = ke && ke.__assign || function() {
    return o = Object.assign || function(h) {
      for (var i, a = 1, c = arguments.length; a < c; a++) {
        i = arguments[a];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (h[s] = i[s]);
      }
      return h;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(ke, "__esModule", { value: !0 }), ke.Recipe = void 0;
  var n = Eo(), t = Et(), l = xo(), g = Ie(), d = Zt(), m = (
    /** @class */
    function(h) {
      e(i, h);
      function i(a) {
        var c = h.call(this, (0, n.normaliseUserInput)(a)) || this, s = new t.default(
          (0, l.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = s.override(c.config.override.functions).build(), c;
      }
      return i.init = function(a) {
        return function(c, s) {
          return i.instance = new i(
            o(o({}, a), { recipeId: i.RECIPE_ID, appInfo: c, clientType: s })
          ), i.instance;
        };
      }, i.getInstanceOrThrow = function() {
        if (i.instance === void 0) {
          var a = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, g.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return i.instance;
      }, i.reset = function() {
        (0, g.isTest)() && (i.instance = void 0);
      }, i.RECIPE_ID = "thirdparty", i;
    }(d.default)
  );
  return ke.Recipe = m, ke.default = m, ke;
}
var lr;
function Mo() {
  if (lr) return te;
  lr = 1;
  var e = te && te.__assign || function() {
    return e = Object.assign || function(s) {
      for (var r, u = 1, v = arguments.length; u < v; u++) {
        r = arguments[u];
        for (var y in r) Object.prototype.hasOwnProperty.call(r, y) && (s[y] = r[y]);
      }
      return s;
    }, e.apply(this, arguments);
  }, o = te && te.__awaiter || function(s, r, u, v) {
    function y(f) {
      return f instanceof u ? f : new u(function(p) {
        p(f);
      });
    }
    return new (u || (u = Promise))(function(f, p) {
      function w(R) {
        try {
          S(v.next(R));
        } catch (I) {
          p(I);
        }
      }
      function b(R) {
        try {
          S(v.throw(R));
        } catch (I) {
          p(I);
        }
      }
      function S(R) {
        R.done ? f(R.value) : y(R.value).then(w, b);
      }
      S((v = v.apply(s, r || [])).next());
    });
  }, n = te && te.__generator || function(s, r) {
    var u = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, v, y, f, p;
    return p = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function w(S) {
      return function(R) {
        return b([S, R]);
      };
    }
    function b(S) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (v = 1, y && (f = S[0] & 2 ? y.return : S[0] ? y.throw || ((f = y.return) && f.call(y), 0) : y.next) && !(f = f.call(y, S[1])).done)
            return f;
          switch (y = 0, f && (S = [S[0] & 2, f.value]), S[0]) {
            case 0:
            case 1:
              f = S;
              break;
            case 4:
              return u.label++, { value: S[1], done: !1 };
            case 5:
              u.label++, y = S[1], S = [0];
              continue;
            case 7:
              S = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (f = u.trys, !(f = f.length > 0 && f[f.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                u = 0;
                continue;
              }
              if (S[0] === 3 && (!f || S[1] > f[0] && S[1] < f[3])) {
                u.label = S[1];
                break;
              }
              if (S[0] === 6 && u.label < f[1]) {
                u.label = f[1], f = S;
                break;
              }
              if (f && u.label < f[2]) {
                u.label = f[2], u.ops.push(S);
                break;
              }
              f[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          S = r.call(s, u);
        } catch (R) {
          S = [6, R], y = 0;
        } finally {
          v = f = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(te, "__esModule", { value: !0 }), te.signOut = te.signInAndUp = te.getAuthorisationURLWithQueryParamsAndSetState = te.getStateAndOtherInfoFromStorage = te.init = void 0;
  var t = Ie(), l = en(), g = Do(), d = (
    /** @class */
    function() {
      function s() {
      }
      return s.init = function(r) {
        return g.default.init(r);
      }, s.signOut = function(r) {
        return g.default.getInstanceOrThrow().signOut({
          userContext: (0, t.getNormalisedUserContext)(
            r == null ? void 0 : r.userContext
          )
        });
      }, s.getStateAndOtherInfoFromStorage = function(r) {
        return g.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          e(e({}, r), {
            userContext: (0, t.getNormalisedUserContext)(
              r == null ? void 0 : r.userContext
            )
          })
        );
      }, s.getAuthorisationURLWithQueryParamsAndSetState = function(r) {
        return o(this, void 0, void 0, function() {
          var u, v, y;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return u = (0, t.getNormalisedUserContext)(r.userContext), v = g.default.getInstanceOrThrow(), [
                  4,
                  l.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: u })
                ];
              case 1:
                return y = f.sent(), [
                  2,
                  v.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    e(e({ tenantId: y }, r), {
                      shouldTryLinkingWithSessionUser: r == null ? void 0 : r.shouldTryLinkingWithSessionUser,
                      userContext: u
                    })
                  )
                ];
            }
          });
        });
      }, s.signInAndUp = function(r) {
        return g.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          e(e({}, r), {
            userContext: (0, t.getNormalisedUserContext)(
              r == null ? void 0 : r.userContext
            )
          })
        );
      }, s;
    }()
  );
  te.default = d;
  var m = d.init;
  te.init = m;
  var h = d.getAuthorisationURLWithQueryParamsAndSetState;
  te.getAuthorisationURLWithQueryParamsAndSetState = h;
  var i = d.getStateAndOtherInfoFromStorage;
  te.getStateAndOtherInfoFromStorage = i;
  var a = d.signInAndUp;
  te.signInAndUp = a;
  var c = d.signOut;
  return te.signOut = c, te;
}
var dr;
function Lo() {
  return dr || (dr = 1, function(e) {
    function o(n) {
      for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
    }
    e.__esModule = !0, o(Mo());
  }(Ft)), Ft;
}
var Uo = Lo();
const xs = /* @__PURE__ */ Bt(Uo);
var qt = {}, Ye = {}, fr;
function Ho() {
  return fr || (fr = 1, function(e) {
    var o = Ye && Ye.__awaiter || function(p, w, b, S) {
      function R(I) {
        return I instanceof b ? I : new b(function(T) {
          T(I);
        });
      }
      return new (b || (b = Promise))(function(I, T) {
        function _(x) {
          try {
            C(S.next(x));
          } catch (E) {
            T(E);
          }
        }
        function P(x) {
          try {
            C(S.throw(x));
          } catch (E) {
            T(E);
          }
        }
        function C(x) {
          x.done ? I(x.value) : R(x.value).then(_, P);
        }
        C((S = S.apply(p, w || [])).next());
      });
    }, n = Ye && Ye.__generator || function(p, w) {
      var b = {
        label: 0,
        sent: function() {
          if (I[0] & 1) throw I[1];
          return I[1];
        },
        trys: [],
        ops: []
      }, S, R, I, T;
      return T = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function _(C) {
        return function(x) {
          return P([C, x]);
        };
      }
      function P(C) {
        if (S) throw new TypeError("Generator is already executing.");
        for (; b; )
          try {
            if (S = 1, R && (I = C[0] & 2 ? R.return : C[0] ? R.throw || ((I = R.return) && I.call(R), 0) : R.next) && !(I = I.call(R, C[1])).done)
              return I;
            switch (R = 0, I && (C = [C[0] & 2, I.value]), C[0]) {
              case 0:
              case 1:
                I = C;
                break;
              case 4:
                return b.label++, { value: C[1], done: !1 };
              case 5:
                b.label++, R = C[1], C = [0];
                continue;
              case 7:
                C = b.ops.pop(), b.trys.pop();
                continue;
              default:
                if (I = b.trys, !(I = I.length > 0 && I[I.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                  b = 0;
                  continue;
                }
                if (C[0] === 3 && (!I || C[1] > I[0] && C[1] < I[3])) {
                  b.label = C[1];
                  break;
                }
                if (C[0] === 6 && b.label < I[1]) {
                  b.label = I[1], I = C;
                  break;
                }
                if (I && b.label < I[2]) {
                  b.label = I[2], b.ops.push(C);
                  break;
                }
                I[2] && b.ops.pop(), b.trys.pop();
                continue;
            }
            C = w.call(p, b);
          } catch (x) {
            C = [6, x], R = 0;
          } finally {
            S = I = 0;
          }
        if (C[0] & 5) throw C[1];
        return { value: C[0] ? C[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = void 0;
    var t = Ie(), l = Mr(), g = (
      /** @class */
      function() {
        function p() {
        }
        return p.init = function(w) {
          return l.default.init(w);
        }, p.getUserId = function(w) {
          return l.default.getInstanceOrThrow().getUserId({
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getAccessToken = function(w) {
          return l.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getAccessTokenPayloadSecurely = function(w) {
          return o(this, void 0, void 0, function() {
            return n(this, function(b) {
              return [
                2,
                l.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, t.getNormalisedUserContext)(
                    w == null ? void 0 : w.userContext
                  )
                })
              ];
            });
          });
        }, p.attemptRefreshingSession = function() {
          return o(this, void 0, void 0, function() {
            return n(this, function(w) {
              return [2, l.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, p.doesSessionExist = function(w) {
          return l.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.addAxiosInterceptors = function(w, b) {
          return l.default.addAxiosInterceptors(w, (0, t.getNormalisedUserContext)(b));
        }, p.signOut = function(w) {
          return l.default.getInstanceOrThrow().signOut({
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getClaimValue = function(w) {
          return l.default.getInstanceOrThrow().getClaimValue({
            claim: w.claim,
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.validateClaims = function(w) {
          return l.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: w == null ? void 0 : w.overrideGlobalClaimValidators,
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getInvalidClaimsFromResponse = function(w) {
          return l.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: w.response,
            userContext: (0, t.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p;
      }()
    );
    e.default = g;
    var d = g.init;
    e.init = d;
    var m = g.getUserId;
    e.getUserId = m;
    var h = g.getAccessTokenPayloadSecurely;
    e.getAccessTokenPayloadSecurely = h;
    var i = g.getAccessToken;
    e.getAccessToken = i;
    var a = g.attemptRefreshingSession;
    e.attemptRefreshingSession = a;
    var c = g.doesSessionExist;
    e.doesSessionExist = c;
    var s = g.addAxiosInterceptors;
    e.addAxiosInterceptors = s;
    var r = g.signOut;
    e.signOut = r;
    var u = g.validateClaims;
    e.validateClaims = u;
    var v = g.getClaimValue;
    e.getClaimValue = v;
    var y = g.getInvalidClaimsFromResponse;
    e.getInvalidClaimsFromResponse = y;
    var f = Dr();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return f.PrimitiveClaim;
      }
    }), Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return f.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return f.BooleanClaim;
      }
    });
  }(Ye)), Ye;
}
var hr;
function No() {
  return hr || (hr = 1, function(e) {
    function o(n) {
      for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
    }
    e.__esModule = !0, o(Ho());
  }(qt)), qt;
}
var Fo = No();
const Ds = /* @__PURE__ */ Bt(Fo);
var qo = Object.defineProperty, gr = Object.getOwnPropertySymbols, jo = Object.prototype.hasOwnProperty, $o = Object.prototype.propertyIsEnumerable, vr = (e, o, n) => o in e ? qo(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[o] = n, Vo = (e, o) => {
  for (var n in o || (o = {}))
    jo.call(o, n) && vr(e, n, o[n]);
  if (gr)
    for (var n of gr(o))
      $o.call(o, n) && vr(e, n, o[n]);
  return e;
};
function tn(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Wo(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function Y(e) {
  return !tn(e);
}
function Fe(e, o = !0) {
  return e instanceof Object && e.constructor === Object && (o || Object.keys(e).length !== 0);
}
function Lr(e = {}, o = {}) {
  const n = Vo({}, e);
  return Object.keys(o).forEach((t) => {
    const l = t;
    Fe(o[l]) && l in e && Fe(e[l]) ? n[l] = Lr(e[l], o[l]) : n[l] = o[l];
  }), n;
}
function Ur(...e) {
  return e.reduce((o, n, t) => t === 0 ? n : Lr(o, n), {});
}
function Ms(e, o) {
  let n = -1;
  if (Y(e))
    try {
      n = e.findLastIndex(o);
    } catch {
      n = e.lastIndexOf([...e].reverse().find(o));
    }
  return n;
}
function Ue(e, ...o) {
  return Wo(e) ? e(...o) : e;
}
function qe(e, o = !0) {
  return typeof e == "string" && (o || e !== "");
}
function mr(e) {
  return qe(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Bo(e, o = "", n = {}) {
  const t = mr(o).split("."), l = t.shift();
  if (l) {
    if (Fe(e)) {
      const g = Object.keys(e).find((d) => mr(d) === l) || "";
      return Bo(Ue(e[g], n), t.join("."), n);
    }
    return;
  }
  return Ue(e, n);
}
function Hr(e, o = !0) {
  return Array.isArray(e) && (o || e.length !== 0);
}
function Go(e) {
  return Y(e) && !isNaN(e);
}
function Ls(e = "") {
  return Y(e) && e.length === 1 && !!e.match(/\S| /);
}
function He(e, o) {
  if (o) {
    const n = o.test(e);
    return o.lastIndex = 0, n;
  }
  return !1;
}
function Us(...e) {
  return Ur(...e);
}
function vt(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Hs(e) {
  return qe(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Nr(e) {
  return qe(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (o, n) => n === 0 ? o : "-" + o.toLowerCase()).toLowerCase() : e;
}
function pr(e) {
  return qe(e) ? e.replace(/[A-Z]/g, (o, n) => n === 0 ? o : "." + o.toLowerCase()).toLowerCase() : e;
}
function Fr() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(o, n) {
      let t = e.get(o);
      return t ? t.push(n) : t = [n], e.set(o, t), this;
    },
    off(o, n) {
      const t = e.get(o);
      return t && t.splice(t.indexOf(n) >>> 0, 1), this;
    },
    emit(o, n) {
      const t = e.get(o);
      t && t.forEach((l) => {
        l(n);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function Xo(e, o) {
  return e ? e.classList ? e.classList.contains(o) : new RegExp("(^| )" + o + "( |$)", "gi").test(e.className) : !1;
}
function Ns(e, o) {
  if (e && o) {
    const n = (t) => {
      Xo(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t);
    };
    [o].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(n));
  }
}
function Fs(e, o) {
  if (e && o) {
    const n = (t) => {
      e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [o].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(n));
  }
}
function yr(e) {
  for (const o of document == null ? void 0 : document.styleSheets)
    try {
      for (const n of o == null ? void 0 : o.cssRules)
        for (const t of n == null ? void 0 : n.style)
          if (e.test(t))
            return { name: t, value: n.style.getPropertyValue(t).trim() };
    } catch {
    }
  return null;
}
function zo(e) {
  const o = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", o.width = e.offsetWidth, o.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), o;
}
function Ko() {
  const e = window, o = document, n = o.documentElement, t = o.getElementsByTagName("body")[0], l = e.innerWidth || n.clientWidth || t.clientWidth, g = e.innerHeight || n.clientHeight || t.clientHeight;
  return { width: l, height: g };
}
function Vt(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Qo() {
  const e = document.documentElement;
  return (window.pageXOffset || Vt(e)) - (e.clientLeft || 0);
}
function Jo() {
  const e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function Yo(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function qs(e, o, n = !0) {
  var t, l, g, d;
  if (e) {
    const m = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : zo(e), h = m.height, i = m.width, a = o.offsetHeight, c = o.offsetWidth, s = o.getBoundingClientRect(), r = Jo(), u = Qo(), v = Ko();
    let y, f, p = "top";
    s.top + a + h > v.height ? (y = s.top + r - h, p = "bottom", y < 0 && (y = r)) : y = a + s.top + r, s.left + i > v.width ? f = Math.max(0, s.left + u + c - i) : f = s.left + u, Yo(e) ? e.style.insetInlineEnd = f + "px" : e.style.insetInlineStart = f + "px", e.style.top = y + "px", e.style.transformOrigin = p, n && (e.style.marginTop = p === "bottom" ? `calc(${(l = (t = yr(/-anchor-gutter$/)) == null ? void 0 : t.value) != null ? l : "2px"} * -1)` : (d = (g = yr(/-anchor-gutter$/)) == null ? void 0 : g.value) != null ? d : "");
  }
}
function js(e, o) {
  e && (typeof o == "string" ? e.style.cssText = o : Object.entries(o || {}).forEach(([n, t]) => e.style[n] = t));
}
function $s(e, o) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function qr(e) {
  if (e) {
    let o = e.parentNode;
    return o && o instanceof ShadowRoot && o.host && (o = o.host), o;
  }
  return null;
}
function Zo(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && qr(e));
}
function Rt(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Ot(e, o = {}) {
  if (Rt(e)) {
    const n = (t, l) => {
      var g, d;
      const m = (g = e == null ? void 0 : e.$attrs) != null && g[t] ? [(d = e == null ? void 0 : e.$attrs) == null ? void 0 : d[t]] : [];
      return [l].flat().reduce((h, i) => {
        if (i != null) {
          const a = typeof i;
          if (a === "string" || a === "number")
            h.push(i);
          else if (a === "object") {
            const c = Array.isArray(i) ? n(t, i) : Object.entries(i).map(([s, r]) => t === "style" && (r || r === 0) ? `${s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${r}` : r ? s : void 0);
            h = c.length ? h.concat(c.filter((s) => !!s)) : h;
          }
        }
        return h;
      }, m);
    };
    Object.entries(o).forEach(([t, l]) => {
      if (l != null) {
        const g = t.match(/^on(.+)/);
        g ? e.addEventListener(g[1].toLowerCase(), l) : t === "p-bind" || t === "pBind" ? Ot(e, l) : (l = t === "class" ? [...new Set(n("class", l))].join(" ").trim() : t === "style" ? n("style", l).join(";").trim() : l, (e.$attrs = e.$attrs || {}) && (e.$attrs[t] = l), e.setAttribute(t, l));
      }
    });
  }
}
function Vs(e, o = {}, ...n) {
  {
    const t = document.createElement(e);
    return Ot(t, o), t.append(...n), t;
  }
}
function Ws(e, o) {
  return Rt(e) ? Array.from(e.querySelectorAll(o)) : [];
}
function es(e, o) {
  return Rt(e) ? e.matches(o) ? e : e.querySelector(o) : null;
}
function Bs(e, o) {
  e && document.activeElement !== e && e.focus(o);
}
function Gs(e, o) {
  if (Rt(e)) {
    const n = e.getAttribute(o);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Xs(e) {
  if (e) {
    let o = e.offsetHeight;
    const n = getComputedStyle(e);
    return o -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), o;
  }
  return 0;
}
function zs(e) {
  if (e) {
    const o = e.getBoundingClientRect();
    return {
      top: o.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: o.left + (window.pageXOffset || Vt(document.documentElement) || Vt(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Ks(e, o) {
  return e ? e.offsetHeight : 0;
}
function jr(e, o = []) {
  const n = qr(e);
  return n === null ? o : jr(n, o.concat([n]));
}
function Qs(e) {
  const o = [];
  if (e) {
    const n = jr(e), t = /(auto|scroll)/, l = (g) => {
      try {
        const d = window.getComputedStyle(g, null);
        return t.test(d.getPropertyValue("overflow")) || t.test(d.getPropertyValue("overflowX")) || t.test(d.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (const g of n) {
      const d = g.nodeType === 1 && g.dataset.scrollselectors;
      if (d) {
        const m = d.split(",");
        for (const h of m) {
          const i = es(g, h);
          i && l(i) && o.push(i);
        }
      }
      g.nodeType !== 9 && l(g) && o.push(g);
    }
  }
  return o;
}
function Js(e) {
  if (e) {
    let o = e.offsetWidth;
    const n = getComputedStyle(e);
    return o -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), o;
  }
  return 0;
}
function ts() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ys() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function ns(e, o = "", n) {
  Rt(e) && n !== null && n !== void 0 && e.setAttribute(o, n);
}
var rs = Object.defineProperty, os = Object.defineProperties, ss = Object.getOwnPropertyDescriptors, Pt = Object.getOwnPropertySymbols, $r = Object.prototype.hasOwnProperty, Vr = Object.prototype.propertyIsEnumerable, wr = (e, o, n) => o in e ? rs(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[o] = n, me = (e, o) => {
  for (var n in o || (o = {}))
    $r.call(o, n) && wr(e, n, o[n]);
  if (Pt)
    for (var n of Pt(o))
      Vr.call(o, n) && wr(e, n, o[n]);
  return e;
}, jt = (e, o) => os(e, ss(o)), Le = (e, o) => {
  var n = {};
  for (var t in e)
    $r.call(e, t) && o.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && Pt)
    for (var t of Pt(e))
      o.indexOf(t) < 0 && Vr.call(e, t) && (n[t] = e[t]);
  return n;
};
function Zs(...e) {
  return Ur(...e);
}
var is = Fr(), Ze = is;
function br(e, o) {
  Hr(e) ? e.push(...o || []) : Fe(e) && Object.assign(e, o);
}
function as(e) {
  return Fe(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function us(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Wt(e = "", o = "") {
  return us(`${qe(e, !1) && qe(o, !1) ? `${e}-` : e}${o}`);
}
function Wr(e = "", o = "") {
  return `--${Wt(e, o)}`;
}
function cs(e = "") {
  const o = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (o + n) % 2 !== 0;
}
function Br(e, o = "", n = "", t = [], l) {
  if (qe(e)) {
    const g = /{([^}]*)}/g, d = e.trim();
    if (cs(d))
      return;
    if (He(d, g)) {
      const m = d.replaceAll(g, (a) => {
        const s = a.replace(/{|}/g, "").split(".").filter((r) => !t.some((u) => He(r, u)));
        return `var(${Wr(n, Nr(s.join("-")))}${Y(l) ? `, ${l}` : ""})`;
      }), h = /(\d+\s+[\+\-\*\/]\s+\d+)/g, i = /var\([^)]+\)/g;
      return He(m.replace(i, "0"), h) ? `calc(${m})` : m;
    }
    return d;
  } else if (Go(e))
    return e;
}
function ls(e, o, n) {
  qe(o, !1) && e.push(`${o}:${n};`);
}
function at(e, o) {
  return e ? `${e}{${o}}` : "";
}
var mt = (...e) => ds(ce.getTheme(), ...e), ds = (e = {}, o, n, t) => {
  if (o) {
    const { variable: l, options: g } = ce.defaults || {}, { prefix: d, transform: m } = (e == null ? void 0 : e.options) || g || {}, i = He(o, /{([^}]*)}/g) ? o : `{${o}}`;
    return t === "value" || tn(t) && m === "strict" ? ce.getTokenValue(o) : Br(i, void 0, d, [l.excludedKeyRegex], n);
  }
  return "";
};
function fs(e, o = {}) {
  const n = ce.defaults.variable, { prefix: t = n.prefix, selector: l = n.selector, excludedKeyRegex: g = n.excludedKeyRegex } = o, d = (i, a = "") => Object.entries(i).reduce(
    (c, [s, r]) => {
      const u = He(s, g) ? Wt(a) : Wt(a, Nr(s)), v = as(r);
      if (Fe(v)) {
        const { variables: y, tokens: f } = d(v, u);
        br(c.tokens, f), br(c.variables, y);
      } else
        c.tokens.push((t ? u.replace(`${t}-`, "") : u).replaceAll("-", ".")), ls(c.variables, Wr(u), Br(v, u, t, [g]));
      return c;
    },
    { variables: [], tokens: [] }
  ), { variables: m, tokens: h } = d(e, t);
  return {
    value: m,
    tokens: h,
    declarations: m.join(""),
    css: at(l, m.join(""))
  };
}
var ve = {
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
      const o = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [e].flat().map((n) => {
        var t;
        return (t = o.map((l) => l.resolve(n)).find((l) => l.matched)) != null ? t : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(e, o) {
    return fs(e, { prefix: o == null ? void 0 : o.prefix });
  },
  getCommon({ name: e = "", theme: o = {}, params: n, set: t, defaults: l }) {
    var g, d, m, h, i, a, c;
    const { preset: s, options: r } = o;
    let u, v, y, f, p, w, b;
    if (Y(s) && r.transform !== "strict") {
      const { primitive: S, semantic: R, extend: I } = s, T = R || {}, { colorScheme: _ } = T, P = Le(T, ["colorScheme"]), C = I || {}, { colorScheme: x } = C, E = Le(C, ["colorScheme"]), B = _ || {}, { dark: K } = B, ne = Le(B, ["dark"]), re = x || {}, { dark: H } = re, L = Le(re, ["dark"]), q = Y(S) ? this._toVariables({ primitive: S }, r) : {}, F = Y(P) ? this._toVariables({ semantic: P }, r) : {}, V = Y(ne) ? this._toVariables({ light: ne }, r) : {}, X = Y(K) ? this._toVariables({ dark: K }, r) : {}, k = Y(E) ? this._toVariables({ semantic: E }, r) : {}, O = Y(L) ? this._toVariables({ light: L }, r) : {}, A = Y(H) ? this._toVariables({ dark: H }, r) : {}, [D, M] = [(g = q.declarations) != null ? g : "", q.tokens], [N, $] = [(d = F.declarations) != null ? d : "", F.tokens || []], [U, W] = [(m = V.declarations) != null ? m : "", V.tokens || []], [j, Q] = [(h = X.declarations) != null ? h : "", X.tokens || []], [Z, he] = [(i = k.declarations) != null ? i : "", k.tokens || []], [ae, ue] = [(a = O.declarations) != null ? a : "", O.tokens || []], [ge, z] = [(c = A.declarations) != null ? c : "", A.tokens || []];
      u = this.transformCSS(e, D, "light", "variable", r, t, l), v = M;
      const le = this.transformCSS(e, `${N}${U}`, "light", "variable", r, t, l), ut = this.transformCSS(e, `${j}`, "dark", "variable", r, t, l);
      y = `${le}${ut}`, f = [.../* @__PURE__ */ new Set([...$, ...W, ...Q])];
      const Ne = this.transformCSS(e, `${Z}${ae}color-scheme:light`, "light", "variable", r, t, l), oe = this.transformCSS(e, `${ge}color-scheme:dark`, "dark", "variable", r, t, l);
      p = `${Ne}${oe}`, w = [.../* @__PURE__ */ new Set([...he, ...ue, ...z])], b = Ue(s.css, { dt: mt });
    }
    return {
      primitive: {
        css: u,
        tokens: v
      },
      semantic: {
        css: y,
        tokens: f
      },
      global: {
        css: p,
        tokens: w
      },
      style: b
    };
  },
  getPreset({ name: e = "", preset: o = {}, options: n, params: t, set: l, defaults: g, selector: d }) {
    var m, h, i;
    let a, c, s;
    if (Y(o) && n.transform !== "strict") {
      const r = e.replace("-directive", ""), u = o, { colorScheme: v, extend: y, css: f } = u, p = Le(u, ["colorScheme", "extend", "css"]), w = y || {}, { colorScheme: b } = w, S = Le(w, ["colorScheme"]), R = v || {}, { dark: I } = R, T = Le(R, ["dark"]), _ = b || {}, { dark: P } = _, C = Le(_, ["dark"]), x = Y(p) ? this._toVariables({ [r]: me(me({}, p), S) }, n) : {}, E = Y(T) ? this._toVariables({ [r]: me(me({}, T), C) }, n) : {}, B = Y(I) ? this._toVariables({ [r]: me(me({}, I), P) }, n) : {}, [K, ne] = [(m = x.declarations) != null ? m : "", x.tokens || []], [re, H] = [(h = E.declarations) != null ? h : "", E.tokens || []], [L, q] = [(i = B.declarations) != null ? i : "", B.tokens || []], F = this.transformCSS(r, `${K}${re}`, "light", "variable", n, l, g, d), V = this.transformCSS(r, L, "dark", "variable", n, l, g, d);
      a = `${F}${V}`, c = [.../* @__PURE__ */ new Set([...ne, ...H, ...q])], s = Ue(f, { dt: mt });
    }
    return {
      css: a,
      tokens: c,
      style: s
    };
  },
  getPresetC({ name: e = "", theme: o = {}, params: n, set: t, defaults: l }) {
    var g;
    const { preset: d, options: m } = o, h = (g = d == null ? void 0 : d.components) == null ? void 0 : g[e];
    return this.getPreset({ name: e, preset: h, options: m, params: n, set: t, defaults: l });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: o = {}, params: n, set: t, defaults: l }) {
    var g, d;
    const m = e.replace("-directive", ""), { preset: h, options: i } = o, a = ((g = h == null ? void 0 : h.components) == null ? void 0 : g[m]) || ((d = h == null ? void 0 : h.directives) == null ? void 0 : d[m]);
    return this.getPreset({ name: m, preset: a, options: i, params: n, set: t, defaults: l });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, o) {
    var n;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? o.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : o.options.darkModeSelector) : [];
  },
  getLayerOrder(e, o = {}, n, t) {
    const { cssLayer: l } = o;
    return l ? `@layer ${Ue(l.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: o = {}, params: n, props: t = {}, set: l, defaults: g }) {
    const d = this.getCommon({ name: e, theme: o, params: n, set: l, defaults: g }), m = Object.entries(t).reduce((h, [i, a]) => h.push(`${i}="${a}"`) && h, []).join(" ");
    return Object.entries(d || {}).reduce((h, [i, a]) => {
      if (a != null && a.css) {
        const c = vt(a == null ? void 0 : a.css), s = `${i}-variables`;
        h.push(`<style type="text/css" data-primevue-style-id="${s}" ${m}>${c}</style>`);
      }
      return h;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: o = {}, params: n, props: t = {}, set: l, defaults: g }) {
    var d;
    const m = { name: e, theme: o, params: n, set: l, defaults: g }, h = (d = e.includes("-directive") ? this.getPresetD(m) : this.getPresetC(m)) == null ? void 0 : d.css, i = Object.entries(t).reduce((a, [c, s]) => a.push(`${c}="${s}"`) && a, []).join(" ");
    return h ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${i}>${vt(h)}</style>` : "";
  },
  createTokens(e = {}, o, n = "", t = "", l = {}) {
    return Object.entries(e).forEach(([g, d]) => {
      const m = He(g, o.variable.excludedKeyRegex) ? n : n ? `${n}.${pr(g)}` : pr(g), h = t ? `${t}.${g}` : g;
      Fe(d) ? this.createTokens(d, o, m, h, l) : (l[m] || (l[m] = {
        paths: [],
        computed(i, a = {}) {
          var c, s;
          return this.paths.length === 1 ? (c = this.paths[0]) == null ? void 0 : c.computed(this.paths[0].scheme, a.binding) : i && i !== "none" ? (s = this.paths.find((r) => r.scheme === i)) == null ? void 0 : s.computed(i, a.binding) : this.paths.map((r) => r.computed(r.scheme, a[r.scheme]));
        }
      }), l[m].paths.push({
        path: h,
        value: d,
        scheme: h.includes("colorScheme.light") ? "light" : h.includes("colorScheme.dark") ? "dark" : "none",
        computed(i, a = {}) {
          const c = /{([^}]*)}/g;
          let s = d;
          if (a.name = this.path, a.binding || (a.binding = {}), He(d, c)) {
            const u = d.trim().replaceAll(c, (f) => {
              var p;
              const w = f.replace(/{|}/g, ""), b = (p = l[w]) == null ? void 0 : p.computed(i, a);
              return Hr(b) && b.length === 2 ? `light-dark(${b[0].value},${b[1].value})` : b == null ? void 0 : b.value;
            }), v = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, y = /var\([^)]+\)/g;
            s = He(u.replace(y, "0"), v) ? `calc(${u})` : u;
          }
          return tn(a.binding) && delete a.binding, {
            colorScheme: i,
            path: this.path,
            paths: a,
            value: s.includes("undefined") ? void 0 : s
          };
        }
      }));
    }), l;
  },
  getTokenValue(e, o, n) {
    var t;
    const g = ((h) => h.split(".").filter((a) => !He(a.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(o), d = o.includes("colorScheme.light") ? "light" : o.includes("colorScheme.dark") ? "dark" : void 0, m = [(t = e[g]) == null ? void 0 : t.computed(d)].flat().filter((h) => h);
    return m.length === 1 ? m[0].value : m.reduce((h = {}, i) => {
      const a = i, { colorScheme: c } = a, s = Le(a, ["colorScheme"]);
      return h[c] = s, h;
    }, void 0);
  },
  getSelectorRule(e, o, n, t) {
    return n === "class" || n === "attr" ? at(Y(o) ? `${e}${o},${e} ${o}` : e, t) : at(e, Y(o) ? at(o, t) : t);
  },
  transformCSS(e, o, n, t, l = {}, g, d, m) {
    if (Y(o)) {
      const { cssLayer: h } = l;
      if (t !== "style") {
        const i = this.getColorSchemeOption(l, d);
        o = n === "dark" ? i.reduce((a, { type: c, selector: s }) => (Y(s) && (a += s.includes("[CSS]") ? s.replace("[CSS]", o) : this.getSelectorRule(s, m, c, o)), a), "") : at(m ?? ":root", o);
      }
      if (h) {
        const i = {
          name: "primeui"
        };
        Fe(h) && (i.name = Ue(h.name, { name: e, type: t })), Y(i.name) && (o = at(`@layer ${i.name}`, o), g == null || g.layerNames(i.name));
      }
      return o;
    }
    return "";
  }
}, ce = {
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
    const { theme: o } = e;
    o && (this._theme = jt(me({}, o), {
      options: me(me({}, this.defaults.options), o.options)
    }), this._tokens = ve.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
    this.update({ theme: e }), Ze.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = jt(me({}, this.theme), { preset: e }), this._tokens = ve.createTokens(e, this.defaults), this.clearLoadedStyleNames(), Ze.emit("preset:change", e), Ze.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = jt(me({}, this.theme), { options: e }), this.clearLoadedStyleNames(), Ze.emit("options:change", e), Ze.emit("theme:change", this.theme);
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
    return ve.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", o) {
    return ve.getCommon({ name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", o) {
    const n = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ve.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", o) {
    const n = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ve.getPresetD(n);
  },
  getCustomPreset(e = "", o, n, t) {
    const l = { name: e, preset: o, options: this.options, selector: n, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ve.getPreset(l);
  },
  getLayerOrderCSS(e = "") {
    return ve.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", o, n = "style", t) {
    return ve.transformCSS(e, o, t, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", o, n = {}) {
    return ve.getCommonStyleSheet({ name: e, theme: this.theme, params: o, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, o, n = {}) {
    return ve.getStyleSheet({ name: e, theme: this.theme, params: o, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: o }) {
    this._loadingStyles.size && (this._loadingStyles.delete(o), Ze.emit(`theme:${o}:load`, e), !this._loadingStyles.size && Ze.emit("theme:load"));
  }
}, hs = ({ dt: e }) => `
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
function pt(e) {
  "@babel/helpers - typeof";
  return pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, pt(e);
}
function Sr(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Rr(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Sr(Object(n), !0).forEach(function(t) {
      gs(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function gs(e, o, n) {
  return (o = vs(o)) in e ? Object.defineProperty(e, o, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = n, e;
}
function vs(e) {
  var o = ms(e, "string");
  return pt(o) == "symbol" ? o : o + "";
}
function ms(e, o) {
  if (pt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var t = n.call(e, o);
    if (pt(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function ps(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  rn() && rn().components ? Xr(e) : o ? e() : zr(e);
}
var ys = 0;
function ws(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = xt(!1), t = xt(e), l = xt(null), g = ts() ? window.document : void 0, d = o.document, m = d === void 0 ? g : d, h = o.immediate, i = h === void 0 ? !0 : h, a = o.manual, c = a === void 0 ? !1 : a, s = o.name, r = s === void 0 ? "style_".concat(++ys) : s, u = o.id, v = u === void 0 ? void 0 : u, y = o.media, f = y === void 0 ? void 0 : y, p = o.nonce, w = p === void 0 ? void 0 : p, b = o.first, S = b === void 0 ? !1 : b, R = o.onMounted, I = R === void 0 ? void 0 : R, T = o.onUpdated, _ = T === void 0 ? void 0 : T, P = o.onLoad, C = P === void 0 ? void 0 : P, x = o.props, E = x === void 0 ? {} : x, B = function() {
  }, K = function(H) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (m) {
      var q = Rr(Rr({}, E), L), F = q.name || r, V = q.id || v, X = q.nonce || w;
      l.value = m.querySelector('style[data-primevue-style-id="'.concat(F, '"]')) || m.getElementById(V) || m.createElement("style"), l.value.isConnected || (t.value = H || e, Ot(l.value, {
        type: "text/css",
        id: V,
        media: f,
        nonce: X
      }), S ? m.head.prepend(l.value) : m.head.appendChild(l.value), ns(l.value, "data-primevue-style-id", F), Ot(l.value, q), l.value.onload = function(k) {
        return C == null ? void 0 : C(k, {
          name: F
        });
      }, I == null || I(F)), !n.value && (B = Kr(t, function(k) {
        l.value.textContent = k, _ == null || _(F);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, ne = function() {
    !m || !n.value || (B(), Zo(l.value) && m.head.removeChild(l.value), n.value = !1, l.value = null);
  };
  return i && !c && ps(K), {
    id: v,
    name: r,
    el: l,
    css: t,
    unload: ne,
    load: K,
    isLoaded: Gr(n)
  };
}
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, yt(e);
}
function kr(e, o) {
  return ks(e) || Rs(e, o) || Ss(e, o) || bs();
}
function bs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ss(e, o) {
  if (e) {
    if (typeof e == "string") return Ir(e, o);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ir(e, o) : void 0;
  }
}
function Ir(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var n = 0, t = Array(o); n < o; n++) t[n] = e[n];
  return t;
}
function Rs(e, o) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var t, l, g, d, m = [], h = !0, i = !1;
    try {
      if (g = (n = n.call(e)).next, o !== 0) for (; !(h = (t = g.call(n)).done) && (m.push(t.value), m.length !== o); h = !0) ;
    } catch (a) {
      i = !0, l = a;
    } finally {
      try {
        if (!h && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (i) throw l;
      }
    }
    return m;
  }
}
function ks(e) {
  if (Array.isArray(e)) return e;
}
function _r(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function $t(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? _r(Object(n), !0).forEach(function(t) {
      Is(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Is(e, o, n) {
  return (o = _s(o)) in e ? Object.defineProperty(e, o, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = n, e;
}
function _s(e) {
  var o = Ts(e, "string");
  return yt(o) == "symbol" ? o : o + "";
}
function Ts(e, o) {
  if (yt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var t = n.call(e, o);
    if (yt(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Cs = function(o) {
  var n = o.dt;
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
}, As = {}, Os = {}, ei = {
  name: "base",
  css: Cs,
  style: hs,
  classes: As,
  inlineStyles: Os,
  load: function(o) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(g) {
      return g;
    }, l = t(Ue(o, {
      dt: mt
    }));
    return Y(l) ? ws(vt(l), $t({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, o);
  },
  loadStyle: function() {
    var o = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return ce.transformCSS(n.name || o.name, "".concat(l).concat(t));
    });
  },
  getCommonTheme: function(o) {
    return ce.getCommon(this.name, o);
  },
  getComponentTheme: function(o) {
    return ce.getComponent(this.name, o);
  },
  getDirectiveTheme: function(o) {
    return ce.getDirective(this.name, o);
  },
  getPresetTheme: function(o, n, t) {
    return ce.getCustomPreset(this.name, o, n, t);
  },
  getLayerOrderThemeCSS: function() {
    return ce.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = Ue(this.css, {
        dt: mt
      }) || "", l = vt("".concat(t).concat(o)), g = Object.entries(n).reduce(function(d, m) {
        var h = kr(m, 2), i = h[0], a = h[1];
        return d.push("".concat(i, '="').concat(a, '"')) && d;
      }, []).join(" ");
      return Y(l) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(g, ">").concat(l, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(o) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ce.getCommonStyleSheet(this.name, o, n);
  },
  getThemeStyleSheet: function(o) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [ce.getStyleSheet(this.name, o, n)];
    if (this.style) {
      var l = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), g = Ue(this.style, {
        dt: mt
      }), d = vt(ce.transformCSS(l, g)), m = Object.entries(n).reduce(function(h, i) {
        var a = kr(i, 2), c = a[0], s = a[1];
        return h.push("".concat(c, '="').concat(s, '"')) && h;
      }, []).join(" ");
      Y(d) && t.push('<style type="text/css" data-primevue-style-id="'.concat(l, '" ').concat(m, ">").concat(d, "</style>"));
    }
    return t.join("");
  },
  extend: function(o) {
    return $t($t({}, this), {}, {
      css: void 0,
      style: void 0
    }, o);
  }
}, ti = Fr();
export {
  Gs as A,
  ei as B,
  Fs as C,
  Xs as D,
  Fr as E,
  Js as F,
  Ks as G,
  zs as H,
  Ns as I,
  Vs as J,
  Cr as K,
  bt as L,
  Ie as M,
  Gt as N,
  en as O,
  ti as P,
  Bt as Q,
  Us as R,
  Ds as S,
  Zs as T,
  Es as U,
  xs as V,
  ts as a,
  qs as b,
  $s as c,
  js as d,
  Ws as e,
  Bs as f,
  Qs as g,
  es as h,
  Ys as i,
  Y as j,
  Ms as k,
  tn as l,
  Ls as m,
  qe as n,
  Hr as o,
  Po as p,
  mr as q,
  Ue as r,
  Bo as s,
  Uo as t,
  Ze as u,
  ce as v,
  Wo as w,
  Rt as x,
  Hs as y,
  Fe as z
};
