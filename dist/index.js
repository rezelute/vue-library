import { r as ie, a as de, b as ce, c as J, d as se, e as le, f as Ho, g as ue, h as jo, i as Mo, _ as Vr, s as fe, j as or, B as Z, k as ge, u as uo, l as fo, m as ho, n as pe, o as Gr, S as qo, p as me, q as Yr, t as he, v as Qr, P as wo, w as Ao, x as be } from "./PageLoader.vue_vue_type_script_setup_true_lang-UqGLXt_O.js";
import { defineComponent as z, createElementBlock as N, openBlock as P, createElementVNode as C, createStaticVNode as ve, toDisplayString as eo, mergeProps as Vo, ref as F, createBlock as M, unref as B, withCtx as O, createVNode as L, withModifiers as Go, isRef as Yo, resolveComponent as ke, Fragment as ye, renderList as we, renderSlot as Xr, normalizeClass as Kr, computed as oo, createCommentVNode as zo, createTextVNode as bo, inject as vo, reactive as Jr, h as Ce, getCurrentInstance as xe, watchEffect as $e, onMounted as Io, watch as Co } from "vue";
var Oo = {}, so = {}, xo = {}, Eo = {}, Lo = {}, rr;
function Re() {
  return rr || (rr = 1, function(o) {
    function r(n) {
      for (var l in n) o.hasOwnProperty(l) || (o[l] = n[l]);
    }
    o.__esModule = !0, r(ie());
  }(Lo)), Lo;
}
var er;
function Be() {
  return er || (er = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.CookieHandlerReference = void 0;
    var r = Re();
    Object.defineProperty(o, "CookieHandlerReference", {
      enumerable: !0,
      get: function() {
        return r.CookieHandlerReference;
      }
    });
  }(Eo)), Eo;
}
var go = {}, tr;
function Ie() {
  if (tr) return go;
  tr = 1, Object.defineProperty(go, "__esModule", { value: !0 }), go.PostSuperTokensInitCallbacks = void 0;
  var o = (
    /** @class */
    function() {
      function r() {
      }
      return r.addPostInitCallback = function(n) {
        r.postInitCallbacks.push(n);
      }, r.runPostInitCallbacks = function() {
        for (var n = 0, l = r.postInitCallbacks; n < l.length; n++) {
          var p = l[n];
          p();
        }
      }, r.postInitCallbacks = [], r;
    }()
  );
  return go.PostSuperTokensInitCallbacks = o, go;
}
var q = {}, to = {}, po = {}, K = {}, nr;
function _e() {
  if (nr) return K;
  nr = 1;
  var o = K && K.__awaiter || function(l, p, u, b) {
    function f(c) {
      return c instanceof u ? c : new u(function(d) {
        d(c);
      });
    }
    return new (u || (u = Promise))(function(c, d) {
      function t(i) {
        try {
          a(b.next(i));
        } catch (s) {
          d(s);
        }
      }
      function e(i) {
        try {
          a(b.throw(i));
        } catch (s) {
          d(s);
        }
      }
      function a(i) {
        i.done ? c(i.value) : f(i.value).then(t, e);
      }
      a((b = b.apply(l, p || [])).next());
    });
  }, r = K && K.__generator || function(l, p) {
    var u = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, b, f, c, d;
    return d = { next: t(0), throw: t(1), return: t(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function t(a) {
      return function(i) {
        return e([a, i]);
      };
    }
    function e(a) {
      if (b) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (b = 1, f && (c = a[0] & 2 ? f.return : a[0] ? f.throw || ((c = f.return) && c.call(f), 0) : f.next) && !(c = c.call(f, a[1])).done)
            return c;
          switch (f = 0, c && (a = [a[0] & 2, c.value]), a[0]) {
            case 0:
            case 1:
              c = a;
              break;
            case 4:
              return u.label++, { value: a[1], done: !1 };
            case 5:
              u.label++, f = a[1], a = [0];
              continue;
            case 7:
              a = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (c = u.trys, !(c = c.length > 0 && c[c.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                u = 0;
                continue;
              }
              if (a[0] === 3 && (!c || a[1] > c[0] && a[1] < c[3])) {
                u.label = a[1];
                break;
              }
              if (a[0] === 6 && u.label < c[1]) {
                u.label = c[1], c = a;
                break;
              }
              if (c && u.label < c[2]) {
                u.label = c[2], u.ops.push(a);
                break;
              }
              c[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          a = p.call(l, u);
        } catch (i) {
          a = [6, i], f = 0;
        } finally {
          b = c = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(K, "__esModule", { value: !0 }), K.normaliseRecipeModuleConfig = void 0;
  function n(l) {
    var p = this, u = l.preAPIHook;
    u === void 0 && (u = function(f) {
      return o(p, void 0, void 0, function() {
        return r(this, function(c) {
          return [2, f];
        });
      });
    });
    var b = l.postAPIHook;
    return b === void 0 && (b = function() {
      return o(p, void 0, void 0, function() {
        return r(this, function(f) {
          return [
            2
            /*return*/
          ];
        });
      });
    }), {
      recipeId: l.recipeId,
      appInfo: l.appInfo,
      clientType: l.clientType,
      preAPIHook: u,
      postAPIHook: b
    };
  }
  return K.normaliseRecipeModuleConfig = n, K;
}
var ar;
function Qo() {
  if (ar) return po;
  ar = 1, Object.defineProperty(po, "__esModule", { value: !0 }), po.normaliseAuthRecipe = void 0;
  var o = _e();
  function r(n) {
    return (0, o.normaliseRecipeModuleConfig)(n);
  }
  return po.normaliseAuthRecipe = r, po;
}
var ir;
function Se() {
  if (ir) return to;
  ir = 1;
  var o = to && to.__assign || function() {
    return o = Object.assign || function(l) {
      for (var p, u = 1, b = arguments.length; u < b; u++) {
        p = arguments[u];
        for (var f in p) Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(to, "__esModule", { value: !0 }), to.normaliseUserInput = void 0;
  var r = Qo();
  function n(l) {
    var p = o(
      {
        functions: function(u) {
          return u;
        }
      },
      l.override
    );
    return o(o({}, (0, r.normaliseAuthRecipe)(l)), { override: p });
  }
  return to.normaliseUserInput = n, to;
}
var V = {}, G = {}, no = {}, dr;
function Pe() {
  return dr || (dr = 1, Object.defineProperty(no, "__esModule", { value: !0 }), no.supported_fdi = no.package_version = void 0, no.package_version = "0.14.0", no.supported_fdi = ["3.1", "4.0"]), no;
}
var $o = {}, No = {}, cr;
function Te() {
  return cr || (cr = 1, function(o) {
    function r(l) {
      for (var p in l) o.hasOwnProperty(p) || (o[p] = l[p]);
    }
    o.__esModule = !0;
    let n = de();
    n.default !== void 0 ? r(n) : r({
      default: n,
      ...n
    });
  }(No)), No;
}
var sr;
function Zr() {
  if (sr) return $o;
  sr = 1, Object.defineProperty($o, "__esModule", { value: !0 });
  var o = Te();
  return $o.default = o.STGeneralError, $o;
}
var lr;
function Xo() {
  if (lr) return G;
  lr = 1;
  var o = G && G.__assign || function() {
    return o = Object.assign || function(f) {
      for (var c, d = 1, t = arguments.length; d < t; d++) {
        c = arguments[d];
        for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (f[e] = c[e]);
      }
      return f;
    }, o.apply(this, arguments);
  }, r = G && G.__awaiter || function(f, c, d, t) {
    function e(a) {
      return a instanceof d ? a : new d(function(i) {
        i(a);
      });
    }
    return new (d || (d = Promise))(function(a, i) {
      function s(m) {
        try {
          h(t.next(m));
        } catch (k) {
          i(k);
        }
      }
      function g(m) {
        try {
          h(t.throw(m));
        } catch (k) {
          i(k);
        }
      }
      function h(m) {
        m.done ? a(m.value) : e(m.value).then(s, g);
      }
      h((t = t.apply(f, c || [])).next());
    });
  }, n = G && G.__generator || function(f, c) {
    var d = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, t, e, a, i;
    return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function s(h) {
      return function(m) {
        return g([h, m]);
      };
    }
    function g(h) {
      if (t) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (t = 1, e && (a = h[0] & 2 ? e.return : h[0] ? e.throw || ((a = e.return) && a.call(e), 0) : e.next) && !(a = a.call(e, h[1])).done)
            return a;
          switch (e = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
            case 0:
            case 1:
              a = h;
              break;
            case 4:
              return d.label++, { value: h[1], done: !1 };
            case 5:
              d.label++, e = h[1], h = [0];
              continue;
            case 7:
              h = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                d = 0;
                continue;
              }
              if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
                d.label = h[1];
                break;
              }
              if (h[0] === 6 && d.label < a[1]) {
                d.label = a[1], a = h;
                break;
              }
              if (a && d.label < a[2]) {
                d.label = a[2], d.ops.push(h);
                break;
              }
              a[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          h = c.call(f, d);
        } catch (m) {
          h = [6, m], e = 0;
        } finally {
          t = a = 0;
        }
      if (h[0] & 5) throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(G, "__esModule", { value: !0 });
  var l = ce(), p = Pe(), u = Zr(), b = (
    /** @class */
    function() {
      function f(d, t) {
        var e = this;
        this.recipeId = d, this.appInfo = t, this.get = function(a, i, s, g, h, m) {
          return r(e, void 0, void 0, function() {
            var k, x;
            return n(this, function($) {
              switch ($.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i, g),
                      o({ method: "GET" }, s),
                      h,
                      m
                    )
                  ];
                case 1:
                  return k = $.sent(), [4, this.getResponseJsonOrThrowGeneralError(k)];
                case 2:
                  return x = $.sent(), [
                    2,
                    {
                      jsonBody: x,
                      fetchResponse: k
                    }
                  ];
              }
            });
          });
        }, this.post = function(a, i, s, g, h) {
          return r(e, void 0, void 0, function() {
            var m, k;
            return n(this, function(x) {
              switch (x.label) {
                case 0:
                  if (s.body === void 0)
                    throw new Error("Post request must have a body");
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      o({ method: "POST" }, s),
                      g,
                      h
                    )
                  ];
                case 1:
                  return m = x.sent(), [4, this.getResponseJsonOrThrowGeneralError(m)];
                case 2:
                  return k = x.sent(), [
                    2,
                    {
                      jsonBody: k,
                      fetchResponse: m
                    }
                  ];
              }
            });
          });
        }, this.delete = function(a, i, s, g, h) {
          return r(e, void 0, void 0, function() {
            var m, k;
            return n(this, function(x) {
              switch (x.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      o({ method: "DELETE" }, s),
                      g,
                      h
                    )
                  ];
                case 1:
                  return m = x.sent(), [4, this.getResponseJsonOrThrowGeneralError(m)];
                case 2:
                  return k = x.sent(), [
                    2,
                    {
                      jsonBody: k,
                      fetchResponse: m
                    }
                  ];
              }
            });
          });
        }, this.put = function(a, i, s, g, h) {
          return r(e, void 0, void 0, function() {
            var m, k;
            return n(this, function(x) {
              switch (x.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      o({ method: "PUT" }, s),
                      g,
                      h
                    )
                  ];
                case 1:
                  return m = x.sent(), [4, this.getResponseJsonOrThrowGeneralError(m)];
                case 2:
                  return k = x.sent(), [
                    2,
                    {
                      jsonBody: k,
                      fetchResponse: m
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(a, i, s, g) {
          return r(e, void 0, void 0, function() {
            var h, m, k, x, $, v;
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  return i === void 0 ? h = {} : h = i.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: s,
                      url: a,
                      requestInit: o(o({}, i), {
                        headers: o(o({}, h), {
                          "fdi-version": p.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return m = w.sent(), k = m.requestInit, x = m.url, [4, fetch(x, k)];
                case 2:
                  if ($ = w.sent(), $.status >= 300)
                    throw $;
                  return g === void 0 ? [3, 4] : (v = $.clone(), [
                    4,
                    g({
                      requestInit: k,
                      url: a,
                      fetchResponse: v
                    })
                  ]);
                case 3:
                  w.sent(), w.label = 4;
                case 4:
                  return [2, $];
              }
            });
          });
        }, this.callPreAPIHook = function(a) {
          return r(e, void 0, void 0, function() {
            var i;
            return n(this, function(s) {
              switch (s.label) {
                case 0:
                  return a.preAPIHook === void 0 ? [
                    2,
                    {
                      url: a.url,
                      requestInit: a.requestInit
                    }
                  ] : [
                    4,
                    a.preAPIHook({
                      url: a.url,
                      requestInit: a.requestInit
                    })
                  ];
                case 1:
                  return i = s.sent(), [2, i];
              }
            });
          });
        }, this.getFullUrl = function(a, i, s) {
          var g = e.appInfo.apiBasePath.getAsStringDangerous();
          a !== void 0 && a !== "public" && (g = "".concat(g, "/").concat(a));
          var h = new l.default(i), m = "".concat(e.appInfo.apiDomain.getAsStringDangerous()).concat(g).concat(h.getAsStringDangerous());
          return s === void 0 ? m : m + "?" + new URLSearchParams(s);
        }, this.getResponseJsonOrThrowGeneralError = function(a) {
          return r(e, void 0, void 0, function() {
            var i, s;
            return n(this, function(g) {
              switch (g.label) {
                case 0:
                  return [4, a.clone().json()];
                case 1:
                  if (i = g.sent(), i.status === "GENERAL_ERROR")
                    throw s = i.message === void 0 ? "No Error Message Provided" : i.message, new u.default(s);
                  return [2, i];
              }
            });
          });
        };
      }
      var c;
      return c = f, f.preparePreAPIHook = function(d) {
        var t = d.recipePreAPIHook, e = d.action, a = d.options, i = d.userContext;
        return function(s) {
          return r(void 0, void 0, void 0, function() {
            var g;
            return n(c, function(h) {
              switch (h.label) {
                case 0:
                  return [
                    4,
                    t(
                      o(o({}, s), { action: e, userContext: i })
                    )
                  ];
                case 1:
                  return g = h.sent(), a === void 0 || a.preAPIHook === void 0 ? [2, g] : [
                    2,
                    a.preAPIHook({
                      url: g.url,
                      requestInit: g.requestInit,
                      userContext: i
                    })
                  ];
              }
            });
          });
        };
      }, f.preparePostAPIHook = function(d) {
        var t = d.recipePostAPIHook, e = d.action, a = d.userContext;
        return function(i) {
          return r(void 0, void 0, void 0, function() {
            return n(c, function(s) {
              switch (s.label) {
                case 0:
                  return [
                    4,
                    t(
                      o(o({}, i), { userContext: a, action: e })
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
        };
      }, f;
    }()
  );
  return G.default = b, G;
}
var ur;
function Ae() {
  if (ur) return V;
  ur = 1;
  var o = V && V.__awaiter || function(u, b, f, c) {
    function d(t) {
      return t instanceof f ? t : new f(function(e) {
        e(t);
      });
    }
    return new (f || (f = Promise))(function(t, e) {
      function a(g) {
        try {
          s(c.next(g));
        } catch (h) {
          e(h);
        }
      }
      function i(g) {
        try {
          s(c.throw(g));
        } catch (h) {
          e(h);
        }
      }
      function s(g) {
        g.done ? t(g.value) : d(g.value).then(a, i);
      }
      s((c = c.apply(u, b || [])).next());
    });
  }, r = V && V.__generator || function(u, b) {
    var f = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, c, d, t, e;
    return e = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (e[Symbol.iterator] = function() {
      return this;
    }), e;
    function a(s) {
      return function(g) {
        return i([s, g]);
      };
    }
    function i(s) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (c = 1, d && (t = s[0] & 2 ? d.return : s[0] ? d.throw || ((t = d.return) && t.call(d), 0) : d.next) && !(t = t.call(d, s[1])).done)
            return t;
          switch (d = 0, t && (s = [s[0] & 2, t.value]), s[0]) {
            case 0:
            case 1:
              t = s;
              break;
            case 4:
              return f.label++, { value: s[1], done: !1 };
            case 5:
              f.label++, d = s[1], s = [0];
              continue;
            case 7:
              s = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (t = f.trys, !(t = t.length > 0 && t[t.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                f = 0;
                continue;
              }
              if (s[0] === 3 && (!t || s[1] > t[0] && s[1] < t[3])) {
                f.label = s[1];
                break;
              }
              if (s[0] === 6 && f.label < t[1]) {
                f.label = t[1], t = s;
                break;
              }
              if (t && f.label < t[2]) {
                f.label = t[2], f.ops.push(s);
                break;
              }
              t[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          s = b.call(u, f);
        } catch (g) {
          s = [6, g], d = 0;
        } finally {
          c = t = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(V, "__esModule", { value: !0 }), V.getRecipeImplementation = void 0;
  var n = Xo(), l = J();
  function p(u) {
    var b = new n.default(u.recipeId, u.appInfo);
    return {
      getTenantId: function() {
        var f = (0, l.getQueryParams)("tenantId");
        if ((f == null ? void 0 : f.trim()) !== "")
          return f;
      },
      getLoginMethods: function(f) {
        var c = f.tenantId, d = f.options, t = f.userContext;
        return o(this, void 0, void 0, function() {
          var e, a, i, s, g;
          return r(this, function(h) {
            switch (h.label) {
              case 0:
                return e = {}, u.clientType !== void 0 && (e.clientType = u.clientType), [
                  4,
                  b.get(
                    c,
                    "/loginmethods",
                    {},
                    e,
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: u.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: d,
                      userContext: t
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: u.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: t
                    })
                  )
                ];
              case 1:
                return a = h.sent(), i = a.jsonBody, s = a.fetchResponse, i.firstFactors === void 0 ? (g = [], i.emailPassword.enabled && g.push("emailpassword"), i.thirdParty.enabled && g.push("thirdparty"), i.passwordless.enabled && (g.push("otp-email"), g.push("otp-phone"), g.push("link-email"), g.push("link-phone"))) : g = i.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: i.thirdParty.providers
                    },
                    firstFactors: g,
                    fetchResponse: s
                  }
                ];
            }
          });
        });
      }
    };
  }
  return V.default = p, V.getRecipeImplementation = p, V;
}
var Y = {}, fr;
function Ko() {
  if (fr) return Y;
  fr = 1;
  var o = Y && Y.__extends || /* @__PURE__ */ function() {
    var b = function(f, c) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, t) {
        d.__proto__ = t;
      } || function(d, t) {
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (d[e] = t[e]);
      }, b(f, c);
    };
    return function(f, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      b(f, c);
      function d() {
        this.constructor = f;
      }
      f.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype, new d());
    };
  }(), r = Y && Y.__awaiter || function(b, f, c, d) {
    function t(e) {
      return e instanceof c ? e : new c(function(a) {
        a(e);
      });
    }
    return new (c || (c = Promise))(function(e, a) {
      function i(h) {
        try {
          g(d.next(h));
        } catch (m) {
          a(m);
        }
      }
      function s(h) {
        try {
          g(d.throw(h));
        } catch (m) {
          a(m);
        }
      }
      function g(h) {
        h.done ? e(h.value) : t(h.value).then(i, s);
      }
      g((d = d.apply(b, f || [])).next());
    });
  }, n = Y && Y.__generator || function(b, f) {
    var c = {
      label: 0,
      sent: function() {
        if (e[0] & 1) throw e[1];
        return e[1];
      },
      trys: [],
      ops: []
    }, d, t, e, a;
    return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function i(g) {
      return function(h) {
        return s([g, h]);
      };
    }
    function s(g) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (d = 1, t && (e = g[0] & 2 ? t.return : g[0] ? t.throw || ((e = t.return) && e.call(t), 0) : t.next) && !(e = e.call(t, g[1])).done)
            return e;
          switch (t = 0, e && (g = [g[0] & 2, e.value]), g[0]) {
            case 0:
            case 1:
              e = g;
              break;
            case 4:
              return c.label++, { value: g[1], done: !1 };
            case 5:
              c.label++, t = g[1], g = [0];
              continue;
            case 7:
              g = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (e = c.trys, !(e = e.length > 0 && e[e.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                c = 0;
                continue;
              }
              if (g[0] === 3 && (!e || g[1] > e[0] && g[1] < e[3])) {
                c.label = g[1];
                break;
              }
              if (g[0] === 6 && c.label < e[1]) {
                c.label = e[1], e = g;
                break;
              }
              if (e && c.label < e[2]) {
                c.label = e[2], c.ops.push(g);
                break;
              }
              e[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          g = f.call(b, c);
        } catch (h) {
          g = [6, h], t = 0;
        } finally {
          d = e = 0;
        }
      if (g[0] & 5) throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Y, "__esModule", { value: !0 });
  var l = se(), p = le(), u = (
    /** @class */
    function(b) {
      o(f, b);
      function f(c) {
        var d = b.call(this, c) || this;
        return d.signOut = function(t) {
          return r(d, void 0, void 0, function() {
            return n(this, function(e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    p.default.getInstanceOrThrow().signOut({
                      userContext: t.userContext
                    })
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        }, d;
      }
      return f;
    }(l.default)
  );
  return Y.default = u, Y;
}
var gr;
function _o() {
  if (gr) return q;
  gr = 1;
  var o = q && q.__extends || /* @__PURE__ */ function() {
    var c = function(d, t) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, a) {
        e.__proto__ = a;
      } || function(e, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
      }, c(d, t);
    };
    return function(d, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      c(d, t);
      function e() {
        this.constructor = d;
      }
      d.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
    };
  }(), r = q && q.__assign || function() {
    return r = Object.assign || function(c) {
      for (var d, t = 1, e = arguments.length; t < e; t++) {
        d = arguments[t];
        for (var a in d) Object.prototype.hasOwnProperty.call(d, a) && (c[a] = d[a]);
      }
      return c;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(q, "__esModule", { value: !0 }), q.Recipe = void 0;
  var n = Se(), l = Ho(), p = Ae(), u = J(), b = Ko(), f = (
    /** @class */
    function(c) {
      o(d, c);
      function d(t) {
        var e = c.call(this, (0, n.normaliseUserInput)(t)) || this, a = new l.default(
          (0, p.default)({
            recipeId: e.config.recipeId,
            appInfo: e.config.appInfo,
            clientType: e.config.clientType,
            preAPIHook: e.config.preAPIHook,
            postAPIHook: e.config.postAPIHook
          })
        );
        return e.recipeImplementation = a.override(e.config.override.functions).build(), e;
      }
      return d.init = function(t) {
        return function(e, a) {
          return d.instance = new d(
            r(r({}, t), { recipeId: d.RECIPE_ID, appInfo: e, clientType: a })
          ), d.instance;
        };
      }, d.getInstanceOrThrow = function() {
        if (d.instance === void 0) {
          var t = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw t = (0, u.checkForSSRErrorAndAppendIfNeeded)(t), Error(t);
        }
        return d.instance;
      }, d.reset = function() {
        (0, u.isTest)() && (d.instance = void 0);
      }, d.RECIPE_ID = "multitenancy", d;
    }(b.default)
  );
  return q.Recipe = f, q.default = f, q;
}
var Wo = {}, Do = {}, pr;
function Oe() {
  return pr || (pr = 1, function(o) {
    function r(n) {
      for (var l in n) o.hasOwnProperty(l) || (o[l] = n[l]);
    }
    o.__esModule = !0, r(ue());
  }(Do)), Do;
}
var mr;
function Ee() {
  return mr || (mr = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.DateProviderReference = void 0;
    var r = Oe();
    Object.defineProperty(o, "DateProviderReference", {
      enumerable: !0,
      get: function() {
        return r.DateProviderReference;
      }
    });
  }(Wo)), Wo;
}
var hr;
function Le() {
  if (hr) return xo;
  hr = 1, Object.defineProperty(xo, "__esModule", { value: !0 });
  var o = J(), r = Be(), n = jo(), l = Ie(), p = _o(), u = Ee(), b = (
    /** @class */
    function() {
      function f(c) {
        var d = this;
        if (this.recipeList = [], this.appInfo = (0, o.normaliseInputAppInfoOrThrowError)(c.appInfo), c.recipeList === void 0 || c.recipeList.length === 0)
          throw new Error(
            "Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
          );
        var t = !1;
        c.enableDebugLogs !== void 0 && (t = c.enableDebugLogs);
        var e = !1;
        this.recipeList = c.recipeList.map(function(a) {
          var i = a(d.appInfo, c.clientType, t);
          return i.config.recipeId === p.Recipe.RECIPE_ID && (e = !0), i;
        }), e || this.recipeList.push(p.Recipe.init()(this.appInfo, c.clientType, t));
      }
      return f.init = function(c) {
        if (r.CookieHandlerReference.init(c.cookieHandler), n.WindowHandlerReference.init(c.windowHandler), u.DateProviderReference.init(c.dateProvider), f.instance !== void 0) {
          console.warn("SuperTokens was already initialized");
          return;
        }
        f.instance = new f(c), l.PostSuperTokensInitCallbacks.runPostInitCallbacks();
      }, f.getInstanceOrThrow = function() {
        if (f.instance === void 0) {
          var c = "SuperTokens must be initialized before calling this method.";
          throw c = (0, o.checkForSSRErrorAndAppendIfNeeded)(c), new Error(c);
        }
        return f.instance;
      }, f.reset = function() {
        if (!(0, o.isTest)()) {
          console.warn("Calling reset() is only supported during testing");
          return;
        }
        p.Recipe.reset(), f.instance = void 0;
      }, f;
    }()
  );
  return xo.default = b, xo;
}
var br;
function Ne() {
  if (br) return so;
  br = 1, Object.defineProperty(so, "__esModule", { value: !0 }), so.init = void 0;
  var o = Le(), r = (
    /** @class */
    function() {
      function n() {
      }
      return n.init = function(l) {
        o.default.init(l);
      }, n;
    }()
  );
  return so.default = r, so.init = r.init, so;
}
var vr;
function We() {
  return vr || (vr = 1, function(o) {
    function r(n) {
      for (var l in n) o.hasOwnProperty(l) || (o[l] = n[l]);
    }
    o.__esModule = !0, r(Ne());
  }(Oo)), Oo;
}
var De = We();
const Fe = /* @__PURE__ */ Mo(De);
var Fo = {}, I = {}, Q = {}, ao = {}, kr;
function Ue() {
  if (kr) return ao;
  kr = 1;
  var o = ao && ao.__assign || function() {
    return o = Object.assign || function(l) {
      for (var p, u = 1, b = arguments.length; u < b; u++) {
        p = arguments[u];
        for (var f in p) Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(ao, "__esModule", { value: !0 }), ao.normaliseUserInput = void 0;
  var r = Qo();
  function n(l) {
    var p = o(
      {
        functions: function(u) {
          return u;
        }
      },
      l.override
    );
    return o(o({}, (0, r.normaliseAuthRecipe)(l)), { override: p });
  }
  return ao.normaliseUserInput = n, ao;
}
var H = {}, mo = {}, yr;
function ze() {
  return yr || (yr = 1, Object.defineProperty(mo, "__esModule", { value: !0 }), mo.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, mo.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), mo;
}
var wr;
function He() {
  if (wr) return H;
  wr = 1;
  var o = H && H.__assign || function() {
    return o = Object.assign || function(d) {
      for (var t, e = 1, a = arguments.length; e < a; e++) {
        t = arguments[e];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
      }
      return d;
    }, o.apply(this, arguments);
  }, r = H && H.__awaiter || function(d, t, e, a) {
    function i(s) {
      return s instanceof e ? s : new e(function(g) {
        g(s);
      });
    }
    return new (e || (e = Promise))(function(s, g) {
      function h(x) {
        try {
          k(a.next(x));
        } catch ($) {
          g($);
        }
      }
      function m(x) {
        try {
          k(a.throw(x));
        } catch ($) {
          g($);
        }
      }
      function k(x) {
        x.done ? s(x.value) : i(x.value).then(h, m);
      }
      k((a = a.apply(d, t || [])).next());
    });
  }, n = H && H.__generator || function(d, t) {
    var e = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, a, i, s, g;
    return g = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function h(k) {
      return function(x) {
        return m([k, x]);
      };
    }
    function m(k) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; e; )
        try {
          if (a = 1, i && (s = k[0] & 2 ? i.return : k[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, k[1])).done)
            return s;
          switch (i = 0, s && (k = [k[0] & 2, s.value]), k[0]) {
            case 0:
            case 1:
              s = k;
              break;
            case 4:
              return e.label++, { value: k[1], done: !1 };
            case 5:
              e.label++, i = k[1], k = [0];
              continue;
            case 7:
              k = e.ops.pop(), e.trys.pop();
              continue;
            default:
              if (s = e.trys, !(s = s.length > 0 && s[s.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                e = 0;
                continue;
              }
              if (k[0] === 3 && (!s || k[1] > s[0] && k[1] < s[3])) {
                e.label = k[1];
                break;
              }
              if (k[0] === 6 && e.label < s[1]) {
                e.label = s[1], s = k;
                break;
              }
              if (s && e.label < s[2]) {
                e.label = s[2], e.ops.push(k);
                break;
              }
              s[2] && e.ops.pop(), e.trys.pop();
              continue;
          }
          k = t.call(d, e);
        } catch (x) {
          k = [6, x], i = 0;
        } finally {
          a = s = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(H, "__esModule", { value: !0 }), H.getRecipeImplementation = void 0;
  var l = jo(), p = Xo(), u = J(), b = _o(), f = ze();
  function c(d) {
    var t = new p.default(d.recipeId, d.appInfo);
    return {
      createCode: function(e) {
        return r(this, void 0, void 0, function() {
          var a, i, s, g, h, m;
          return n(this, function(k) {
            switch (k.label) {
              case 0:
                return "email" in e && (a = {
                  email: e.email,
                  shouldTryLinkingWithSessionUser: e.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in e && (a = {
                  phoneNumber: e.phoneNumber,
                  shouldTryLinkingWithSessionUser: e.shouldTryLinkingWithSessionUser
                }), m = (h = t).post, [
                  4,
                  b.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: e.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  m.apply(h, [
                    k.sent(),
                    "/signinup/code",
                    { body: JSON.stringify(a) },
                    p.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: e.userContext,
                      options: e.options
                    }),
                    p.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: e.userContext
                    })
                  ])
                ];
              case 2:
                return i = k.sent(), s = i.jsonBody, g = i.fetchResponse, [2, o(o({}, s), { fetchResponse: g })];
            }
          });
        });
      },
      resendCode: function(e) {
        return r(this, void 0, void 0, function() {
          var a, i, s, g;
          return n(this, function(h) {
            switch (h.label) {
              case 0:
                return a = {
                  deviceId: e.deviceId,
                  preAuthSessionId: e.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: e.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  t.post(
                    e.tenantId,
                    "/signinup/code/resend",
                    { body: JSON.stringify(a) },
                    p.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: e.userContext,
                      options: e.options
                    }),
                    p.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: e.userContext
                    })
                  )
                ];
              case 1:
                return i = h.sent(), s = i.jsonBody, g = i.fetchResponse, [
                  2,
                  {
                    status: s.status,
                    fetchResponse: g
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(e) {
        return r(this, void 0, void 0, function() {
          var a, i, s, g;
          return n(this, function(h) {
            switch (h.label) {
              case 0:
                return "userInputCode" in e ? a = {
                  userInputCode: e.userInputCode,
                  deviceId: e.deviceId,
                  preAuthSessionId: e.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: e.shouldTryLinkingWithSessionUser
                } : a = {
                  linkCode: e.linkCode,
                  preAuthSessionId: e.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: e.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  t.post(
                    e.tenantId,
                    "/signinup/code/consume",
                    { body: JSON.stringify(a) },
                    p.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: e.userContext,
                      options: e.options
                    }),
                    p.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: e.userContext
                    })
                  )
                ];
              case 1:
                return i = h.sent(), s = i.jsonBody, g = i.fetchResponse, s.status !== "OK" ? [
                  2,
                  o(o({}, s), { fetchResponse: g })
                ] : [
                  2,
                  o(
                    o(
                      { status: "OK" },
                      (0, u.normaliseUserResponse)("passwordless", s)
                    ),
                    { fetchResponse: g }
                  )
                ];
            }
          });
        });
      },
      getTenantIdFromURL: function() {
        return (0, u.getQueryParams)("tenantId");
      },
      getLinkCodeFromURL: function() {
        return (0, u.getHashFromLocation)();
      },
      getPreAuthSessionIdFromURL: function() {
        var e = (0, u.getQueryParams)("preAuthSessionId");
        return e === void 0 ? "" : e;
      },
      doesEmailExist: function(e) {
        return r(this, void 0, void 0, function() {
          var a, i, s, g, h;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return h = (g = t).get, [
                  4,
                  b.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: e.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  h.apply(g, [
                    m.sent(),
                    "/passwordless/email/exists",
                    {},
                    { email: e.email },
                    p.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: e.userContext,
                      options: e.options
                    }),
                    p.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: e.userContext
                    })
                  ])
                ];
              case 2:
                return a = m.sent(), i = a.jsonBody, s = a.fetchResponse, [
                  2,
                  {
                    status: i.status,
                    doesExist: i.exists,
                    fetchResponse: s
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(e) {
        return r(this, void 0, void 0, function() {
          var a, i, s, g, h;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return h = (g = t).get, [
                  4,
                  b.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: e.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  h.apply(g, [
                    m.sent(),
                    "/passwordless/phonenumber/exists",
                    {},
                    { phoneNumber: e.phoneNumber },
                    p.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: e.userContext,
                      options: e.options
                    }),
                    p.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: e.userContext
                    })
                  ])
                ];
              case 2:
                return a = m.sent(), i = a.jsonBody, s = a.fetchResponse, [
                  2,
                  {
                    status: i.status,
                    doesExist: i.exists,
                    fetchResponse: s
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return r(this, void 0, void 0, function() {
          var e;
          return n(this, function(a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  l.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    f.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (e = a.sent(), e === null)
                  return [2, void 0];
                try {
                  return [2, JSON.parse(e)];
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
      setLoginAttemptInfo: function(e) {
        return r(this, void 0, void 0, function() {
          return n(this, function(a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  l.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    f.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
                    JSON.stringify(
                      o(
                        {
                          // This can make future changes/migrations a lot cleaner
                          version: 1
                        },
                        e.attemptInfo
                      )
                    )
                  )
                ];
              case 1:
                return a.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      clearLoginAttemptInfo: function() {
        return r(this, void 0, void 0, function() {
          return n(this, function(e) {
            return l.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
              f.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
            ), [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
  return H.default = c, H.getRecipeImplementation = c, H;
}
var Cr;
function je() {
  if (Cr) return Q;
  Cr = 1;
  var o = Q && Q.__extends || /* @__PURE__ */ function() {
    var c = function(d, t) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, a) {
        e.__proto__ = a;
      } || function(e, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
      }, c(d, t);
    };
    return function(d, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      c(d, t);
      function e() {
        this.constructor = d;
      }
      d.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
    };
  }(), r = Q && Q.__assign || function() {
    return r = Object.assign || function(c) {
      for (var d, t = 1, e = arguments.length; t < e; t++) {
        d = arguments[t];
        for (var a in d) Object.prototype.hasOwnProperty.call(d, a) && (c[a] = d[a]);
      }
      return c;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(Q, "__esModule", { value: !0 }), Q.Recipe = void 0;
  var n = Ho(), l = J(), p = Ko(), u = Ue(), b = He(), f = (
    /** @class */
    function(c) {
      o(d, c);
      function d(t) {
        var e = c.call(this, (0, u.normaliseUserInput)(t)) || this, a = new n.default(
          (0, b.default)({
            recipeId: e.config.recipeId,
            appInfo: e.config.appInfo,
            clientType: e.config.clientType,
            preAPIHook: e.config.preAPIHook,
            postAPIHook: e.config.postAPIHook
          })
        );
        return e.recipeImplementation = a.override(e.config.override.functions).build(), e;
      }
      return d.init = function(t) {
        return function(e, a) {
          return d.instance = new d(
            r(r({}, t), { recipeId: d.RECIPE_ID, appInfo: e, clientType: a })
          ), d.instance;
        };
      }, d.getInstanceOrThrow = function() {
        if (d.instance === void 0) {
          var t = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw t = (0, l.checkForSSRErrorAndAppendIfNeeded)(t), Error(t);
        }
        return d.instance;
      }, d.reset = function() {
        (0, l.isTest)() && (d.instance = void 0);
      }, d.RECIPE_ID = "passwordless", d;
    }(p.default)
  );
  return Q.Recipe = f, Q.default = f, Q;
}
var xr;
function Me() {
  if (xr) return I;
  xr = 1;
  var o = I && I.__assign || function() {
    return o = Object.assign || function($) {
      for (var v, w = 1, S = arguments.length; w < S; w++) {
        v = arguments[w];
        for (var _ in v) Object.prototype.hasOwnProperty.call(v, _) && ($[_] = v[_]);
      }
      return $;
    }, o.apply(this, arguments);
  }, r = I && I.__awaiter || function($, v, w, S) {
    function _(y) {
      return y instanceof w ? y : new w(function(E) {
        E(y);
      });
    }
    return new (w || (w = Promise))(function(y, E) {
      function T(U) {
        try {
          R(S.next(U));
        } catch (co) {
          E(co);
        }
      }
      function W(U) {
        try {
          R(S.throw(U));
        } catch (co) {
          E(co);
        }
      }
      function R(U) {
        U.done ? y(U.value) : _(U.value).then(T, W);
      }
      R((S = S.apply($, v || [])).next());
    });
  }, n = I && I.__generator || function($, v) {
    var w = {
      label: 0,
      sent: function() {
        if (y[0] & 1) throw y[1];
        return y[1];
      },
      trys: [],
      ops: []
    }, S, _, y, E;
    return E = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
      return this;
    }), E;
    function T(R) {
      return function(U) {
        return W([R, U]);
      };
    }
    function W(R) {
      if (S) throw new TypeError("Generator is already executing.");
      for (; w; )
        try {
          if (S = 1, _ && (y = R[0] & 2 ? _.return : R[0] ? _.throw || ((y = _.return) && y.call(_), 0) : _.next) && !(y = y.call(_, R[1])).done)
            return y;
          switch (_ = 0, y && (R = [R[0] & 2, y.value]), R[0]) {
            case 0:
            case 1:
              y = R;
              break;
            case 4:
              return w.label++, { value: R[1], done: !1 };
            case 5:
              w.label++, _ = R[1], R = [0];
              continue;
            case 7:
              R = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (y = w.trys, !(y = y.length > 0 && y[y.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                w = 0;
                continue;
              }
              if (R[0] === 3 && (!y || R[1] > y[0] && R[1] < y[3])) {
                w.label = R[1];
                break;
              }
              if (R[0] === 6 && w.label < y[1]) {
                w.label = y[1], y = R;
                break;
              }
              if (y && w.label < y[2]) {
                w.label = y[2], w.ops.push(R);
                break;
              }
              y[2] && w.ops.pop(), w.trys.pop();
              continue;
          }
          R = v.call($, w);
        } catch (U) {
          R = [6, U], _ = 0;
        } finally {
          S = y = 0;
        }
      if (R[0] & 5) throw R[1];
      return { value: R[0] ? R[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(I, "__esModule", { value: !0 }), I.clearLoginAttemptInfo = I.setLoginAttemptInfo = I.getLoginAttemptInfo = I.getTenantIdFromURL = I.getPreAuthSessionIdFromURL = I.getLinkCodeFromURL = I.signOut = I.doesPhoneNumberExist = I.doesEmailExist = I.consumeCode = I.resendCode = I.createCode = I.init = void 0;
  var l = J(), p = _o(), u = je(), b = (
    /** @class */
    function() {
      function $() {
      }
      return $.init = function(v) {
        return u.default.init(v);
      }, $.createCode = function(v) {
        var w, S;
        return r(this, void 0, void 0, function() {
          var _, y, E, T, W;
          return n(this, function(R) {
            switch (R.label) {
              case 0:
                return _ = u.default.getInstanceOrThrow(), y = _.recipeImplementation, E = (0, l.getNormalisedUserContext)(v.userContext), [
                  4,
                  p.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: v.userContext
                  })
                ];
              case 1:
                return T = R.sent(), [
                  4,
                  y.createCode(
                    o(o({}, v), {
                      shouldTryLinkingWithSessionUser: (w = v.shouldTryLinkingWithSessionUser) !== null && w !== void 0 ? w : !1,
                      userContext: E
                    })
                  )
                ];
              case 2:
                return W = R.sent(), W.status !== "OK" ? [3, 4] : [
                  4,
                  y.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: T,
                      deviceId: W.deviceId,
                      preAuthSessionId: W.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (S = v.shouldTryLinkingWithSessionUser) !== null && S !== void 0 ? S : !1,
                      flowType: W.flowType
                    },
                    userContext: E
                  })
                ];
              case 3:
                R.sent(), R.label = 4;
              case 4:
                return [2, W];
            }
          });
        });
      }, $.resendCode = function(v) {
        return r(this, void 0, void 0, function() {
          var w, S, _, y;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return w = u.default.getInstanceOrThrow(), S = w.recipeImplementation, _ = (0, l.getNormalisedUserContext)(
                  v == null ? void 0 : v.userContext
                ), [
                  4,
                  S.getLoginAttemptInfo({
                    userContext: _
                  })
                ];
              case 1:
                return y = E.sent(), [
                  2,
                  S.resendCode(
                    o(o({}, v), {
                      tenantId: y == null ? void 0 : y.tenantId,
                      userContext: _,
                      deviceId: y === void 0 ? "" : y.deviceId,
                      preAuthSessionId: y === void 0 ? "" : y.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: y == null ? void 0 : y.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, $.consumeCode = function(v) {
        var w;
        return r(this, void 0, void 0, function() {
          var S, _, y, E, T, W, W, R, U, co;
          return n(this, function(To) {
            switch (To.label) {
              case 0:
                return S = u.default.getInstanceOrThrow(), _ = S.recipeImplementation, y = (0, l.getNormalisedUserContext)(
                  v == null ? void 0 : v.userContext
                ), v !== void 0 && "userInputCode" in v ? [
                  4,
                  _.getLoginAttemptInfo({
                    userContext: y
                  })
                ] : [3, 2];
              case 1:
                return T = To.sent(), W = (w = T == null ? void 0 : T.shouldTryLinkingWithSessionUser) !== null && w !== void 0 ? w : !1, E = {
                  userInputCode: v.userInputCode,
                  deviceId: T === void 0 ? "" : T.deviceId,
                  preAuthSessionId: T === void 0 ? "" : T.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: W,
                  tenantId: T == null ? void 0 : T.tenantId
                }, [3, 3];
              case 2:
                W = !1, R = _.getLinkCodeFromURL({
                  userContext: y
                }), U = _.getTenantIdFromURL({
                  userContext: y
                }), co = _.getPreAuthSessionIdFromURL({
                  userContext: y
                }), E = {
                  tenantId: U,
                  linkCode: R,
                  preAuthSessionId: co,
                  shouldTryLinkingWithSessionUser: W
                }, To.label = 3;
              case 3:
                return [
                  2,
                  _.consumeCode(
                    o(
                      {
                        userContext: y,
                        options: v == null ? void 0 : v.options
                      },
                      E
                    )
                  )
                ];
            }
          });
        });
      }, $.getLinkCodeFromURL = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          o(o({}, v), {
            userContext: (0, l.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          })
        );
      }, $.getPreAuthSessionIdFromURL = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          o(o({}, v), {
            userContext: (0, l.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          })
        );
      }, $.getTenantIdFromURL = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          o(o({}, v), {
            userContext: (0, l.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          })
        );
      }, $.doesEmailExist = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          o(o({}, v), { userContext: (0, l.getNormalisedUserContext)(v.userContext) })
        );
      }, $.doesPhoneNumberExist = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          o(o({}, v), { userContext: (0, l.getNormalisedUserContext)(v.userContext) })
        );
      }, $.getLoginAttemptInfo = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          o(o({}, v), {
            userContext: (0, l.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          })
        );
      }, $.setLoginAttemptInfo = function(v) {
        return r(this, void 0, void 0, function() {
          var w, S, _;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return w = (0, l.getNormalisedUserContext)(v.userContext), S = u.default.getInstanceOrThrow(), [
                  4,
                  p.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: w })
                ];
              case 1:
                return _ = y.sent(), [
                  2,
                  S.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: o(
                      {
                        tenantId: _,
                        shouldTryLinkingWithSessionUser: v.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      v.attemptInfo
                    ),
                    userContext: w
                  })
                ];
            }
          });
        });
      }, $.clearLoginAttemptInfo = function(v) {
        return u.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          o(o({}, v), {
            userContext: (0, l.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          })
        );
      }, $.signOut = function(v) {
        return u.default.getInstanceOrThrow().signOut({
          userContext: (0, l.getNormalisedUserContext)(
            v == null ? void 0 : v.userContext
          )
        });
      }, $;
    }()
  );
  I.default = b;
  var f = b.init;
  I.init = f;
  var c = b.createCode;
  I.createCode = c;
  var d = b.resendCode;
  I.resendCode = d;
  var t = b.consumeCode;
  I.consumeCode = t;
  var e = b.doesEmailExist;
  I.doesEmailExist = e;
  var a = b.doesPhoneNumberExist;
  I.doesPhoneNumberExist = a;
  var i = b.signOut;
  I.signOut = i;
  var s = b.getLinkCodeFromURL;
  I.getLinkCodeFromURL = s;
  var g = b.getPreAuthSessionIdFromURL;
  I.getPreAuthSessionIdFromURL = g;
  var h = b.getTenantIdFromURL;
  I.getTenantIdFromURL = h;
  var m = b.getLoginAttemptInfo;
  I.getLoginAttemptInfo = m;
  var k = b.setLoginAttemptInfo;
  I.setLoginAttemptInfo = k;
  var x = b.clearLoginAttemptInfo;
  return I.clearLoginAttemptInfo = x, I;
}
var $r;
function qe() {
  return $r || ($r = 1, function(o) {
    function r(n) {
      for (var l in n) o.hasOwnProperty(l) || (o[l] = n[l]);
    }
    o.__esModule = !0, r(Me());
  }(Fo)), Fo;
}
var ro = qe();
const Ve = /* @__PURE__ */ Mo(ro);
var Uo = {}, A = {}, X = {}, io = {}, Rr;
function Ge() {
  if (Rr) return io;
  Rr = 1;
  var o = io && io.__assign || function() {
    return o = Object.assign || function(l) {
      for (var p, u = 1, b = arguments.length; u < b; u++) {
        p = arguments[u];
        for (var f in p) Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(io, "__esModule", { value: !0 }), io.normaliseUserInput = void 0;
  var r = Qo();
  function n(l) {
    var p = o(
      {
        functions: function(u) {
          return u;
        }
      },
      l.override
    );
    return o(o({}, (0, r.normaliseAuthRecipe)(l)), { override: p });
  }
  return io.normaliseUserInput = n, io;
}
var j = {}, Br;
function Ye() {
  if (Br) return j;
  Br = 1;
  var o = j && j.__assign || function() {
    return o = Object.assign || function(c) {
      for (var d, t = 1, e = arguments.length; t < e; t++) {
        d = arguments[t];
        for (var a in d) Object.prototype.hasOwnProperty.call(d, a) && (c[a] = d[a]);
      }
      return c;
    }, o.apply(this, arguments);
  }, r = j && j.__awaiter || function(c, d, t, e) {
    function a(i) {
      return i instanceof t ? i : new t(function(s) {
        s(i);
      });
    }
    return new (t || (t = Promise))(function(i, s) {
      function g(k) {
        try {
          m(e.next(k));
        } catch (x) {
          s(x);
        }
      }
      function h(k) {
        try {
          m(e.throw(k));
        } catch (x) {
          s(x);
        }
      }
      function m(k) {
        k.done ? i(k.value) : a(k.value).then(g, h);
      }
      m((e = e.apply(c, d || [])).next());
    });
  }, n = j && j.__generator || function(c, d) {
    var t = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, e, a, i, s;
    return s = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function g(m) {
      return function(k) {
        return h([m, k]);
      };
    }
    function h(m) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; t; )
        try {
          if (e = 1, a && (i = m[0] & 2 ? a.return : m[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, m[1])).done)
            return i;
          switch (a = 0, i && (m = [m[0] & 2, i.value]), m[0]) {
            case 0:
            case 1:
              i = m;
              break;
            case 4:
              return t.label++, { value: m[1], done: !1 };
            case 5:
              t.label++, a = m[1], m = [0];
              continue;
            case 7:
              m = t.ops.pop(), t.trys.pop();
              continue;
            default:
              if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                t = 0;
                continue;
              }
              if (m[0] === 3 && (!i || m[1] > i[0] && m[1] < i[3])) {
                t.label = m[1];
                break;
              }
              if (m[0] === 6 && t.label < i[1]) {
                t.label = i[1], i = m;
                break;
              }
              if (i && t.label < i[2]) {
                t.label = i[2], t.ops.push(m);
                break;
              }
              i[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          m = d.call(c, t);
        } catch (k) {
          m = [6, k], a = 0;
        } finally {
          e = i = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(j, "__esModule", { value: !0 }), j.getRecipeImplementation = void 0;
  var l = Xo(), p = J(), u = Zr(), b = jo();
  function f(c) {
    var d = new l.default(c.recipeId, c.appInfo);
    return {
      getStateAndOtherInfoFromStorage: function() {
        var t = b.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync(
          "supertokens-oauth-state-2"
        );
        if (t !== null)
          try {
            return JSON.parse(t);
          } catch {
            return;
          }
      },
      setStateAndOtherInfoToStorage: function(t) {
        return r(this, void 0, void 0, function() {
          var e;
          return n(this, function(a) {
            switch (a.label) {
              case 0:
                return e = JSON.stringify(o({}, t.state)), [
                  4,
                  b.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    e
                  )
                ];
              case 1:
                return a.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getAuthorisationURLWithQueryParamsAndSetState: function(t) {
        return r(this, void 0, void 0, function() {
          var e, a, i, s, g;
          return n(this, function(h) {
            switch (h.label) {
              case 0:
                return [
                  4,
                  this.getAuthorisationURLFromBackend({
                    thirdPartyId: t.thirdPartyId,
                    tenantId: t.tenantId,
                    redirectURIOnProviderDashboard: t.redirectURIOnProviderDashboard || t.frontendRedirectURI,
                    userContext: t.userContext,
                    options: t.options
                  })
                ];
              case 1:
                return e = h.sent(), a = t.redirectURIOnProviderDashboard !== void 0 && t.frontendRedirectURI !== t.redirectURIOnProviderDashboard ? t.frontendRedirectURI : void 0, i = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: a,
                  userContext: t.userContext
                }), s = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: i,
                      thirdPartyId: t.thirdPartyId,
                      tenantId: t.tenantId,
                      expiresAt: s,
                      redirectURIOnProviderDashboard: t.redirectURIOnProviderDashboard || t.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: t.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: e.pkceCodeVerifier
                    },
                    userContext: t.userContext
                  })
                ];
              case 2:
                return h.sent(), g = (0, p.appendQueryParamsToURL)(e.urlWithQueryParams, {
                  state: i
                }), [2, g];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(t) {
        return r(this, void 0, void 0, function() {
          var e, a, i, s;
          return n(this, function(g) {
            switch (g.label) {
              case 0:
                return e = {
                  thirdPartyId: t.thirdPartyId,
                  redirectURIOnProviderDashboard: t.redirectURIOnProviderDashboard
                }, c.clientType !== void 0 && (e.clientType = c.clientType), [
                  4,
                  d.get(
                    t.tenantId,
                    "/authorisationurl",
                    {},
                    e,
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: c.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: t.options,
                      userContext: t.userContext
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: c.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: t.userContext
                    })
                  )
                ];
              case 1:
                return a = g.sent(), i = a.jsonBody, s = a.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: i.urlWithQueryParams,
                    pkceCodeVerifier: i.pkceCodeVerifier,
                    fetchResponse: s
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(t) {
        return r(this, void 0, void 0, function() {
          var e, a, i, s, g, h, m, k, x;
          return n(this, function($) {
            switch ($.label) {
              case 0:
                return e = this.getStateAndOtherInfoFromStorage({
                  userContext: t.userContext
                }), a = this.getAuthStateFromURL({
                  userContext: t.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: a,
                    stateObjectFromStorage: e,
                    userContext: t.userContext
                  })
                ];
              case 1:
                if (i = $.sent(), s = this.getAuthErrorFromURL({
                  userContext: t.userContext
                }), s !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(s));
                return g = (0, p.getAllQueryParams)(), h = Object.fromEntries(g), [
                  4,
                  d.post(
                    i.tenantId,
                    "/signinup",
                    {
                      body: JSON.stringify({
                        thirdPartyId: i.thirdPartyId,
                        clientType: c.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: i.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: h,
                          pkceCodeVerifier: i.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                      })
                    },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: c.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: t.options,
                      userContext: t.userContext
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: c.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: t.userContext
                    })
                  )
                ];
              case 2:
                if (m = $.sent(), k = m.jsonBody, x = m.fetchResponse, k.status === "FIELD_ERROR")
                  throw new u.default(k.error);
                return k.status !== "OK" ? [
                  2,
                  o(o({}, k), { fetchResponse: x })
                ] : [
                  2,
                  o(
                    o(
                      { status: "OK" },
                      (0, p.normaliseUserResponse)("thirdparty", k)
                    ),
                    { fetchResponse: x }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(t) {
        var e = {
          state: "".concat(1e20).replace(/[018]/g, function(a) {
            return (parseInt(a) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(a) / 4).toString(16);
          })
        };
        return t !== void 0 && t.frontendRedirectURI !== void 0 && (e.frontendRedirectURI = t.frontendRedirectURI), btoa(JSON.stringify(e));
      },
      verifyAndGetStateOrThrowError: function(t) {
        return r(this, void 0, void 0, function() {
          return n(this, function(e) {
            if (t.stateObjectFromStorage === void 0 || t.stateObjectFromStorage.stateForAuthProvider === void 0)
              throw new Error("No valid auth state present in session storage");
            if (t.stateFromAuthProvider === void 0)
              throw new Error("No state recieved from auth provider");
            if (t.stateObjectFromStorage.expiresAt < Date.now())
              throw new Error("Auth state verification failed. The auth provider took too long to respond");
            if (t.stateFromAuthProvider !== t.stateObjectFromStorage.stateForAuthProvider)
              throw new Error(
                "Auth state verification failed. The auth provider responded with an invalid state"
              );
            return [2, t.stateObjectFromStorage];
          });
        });
      },
      getAuthErrorFromURL: function() {
        return (0, p.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var t = (0, p.getQueryParams)("state");
        return t === void 0 ? "" : t;
      }
    };
  }
  return j.default = f, j.getRecipeImplementation = f, j;
}
var Ir;
function Qe() {
  if (Ir) return X;
  Ir = 1;
  var o = X && X.__extends || /* @__PURE__ */ function() {
    var c = function(d, t) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, a) {
        e.__proto__ = a;
      } || function(e, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
      }, c(d, t);
    };
    return function(d, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      c(d, t);
      function e() {
        this.constructor = d;
      }
      d.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
    };
  }(), r = X && X.__assign || function() {
    return r = Object.assign || function(c) {
      for (var d, t = 1, e = arguments.length; t < e; t++) {
        d = arguments[t];
        for (var a in d) Object.prototype.hasOwnProperty.call(d, a) && (c[a] = d[a]);
      }
      return c;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(X, "__esModule", { value: !0 }), X.Recipe = void 0;
  var n = Ge(), l = Ho(), p = Ye(), u = J(), b = Ko(), f = (
    /** @class */
    function(c) {
      o(d, c);
      function d(t) {
        var e = c.call(this, (0, n.normaliseUserInput)(t)) || this, a = new l.default(
          (0, p.default)({
            recipeId: e.config.recipeId,
            appInfo: e.config.appInfo,
            clientType: e.config.clientType,
            preAPIHook: e.config.preAPIHook,
            postAPIHook: e.config.postAPIHook
          })
        );
        return e.recipeImplementation = a.override(e.config.override.functions).build(), e;
      }
      return d.init = function(t) {
        return function(e, a) {
          return d.instance = new d(
            r(r({}, t), { recipeId: d.RECIPE_ID, appInfo: e, clientType: a })
          ), d.instance;
        };
      }, d.getInstanceOrThrow = function() {
        if (d.instance === void 0) {
          var t = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw t = (0, u.checkForSSRErrorAndAppendIfNeeded)(t), Error(t);
        }
        return d.instance;
      }, d.reset = function() {
        (0, u.isTest)() && (d.instance = void 0);
      }, d.RECIPE_ID = "thirdparty", d;
    }(b.default)
  );
  return X.Recipe = f, X.default = f, X;
}
var _r;
function Xe() {
  if (_r) return A;
  _r = 1;
  var o = A && A.__assign || function() {
    return o = Object.assign || function(a) {
      for (var i, s = 1, g = arguments.length; s < g; s++) {
        i = arguments[s];
        for (var h in i) Object.prototype.hasOwnProperty.call(i, h) && (a[h] = i[h]);
      }
      return a;
    }, o.apply(this, arguments);
  }, r = A && A.__awaiter || function(a, i, s, g) {
    function h(m) {
      return m instanceof s ? m : new s(function(k) {
        k(m);
      });
    }
    return new (s || (s = Promise))(function(m, k) {
      function x(w) {
        try {
          v(g.next(w));
        } catch (S) {
          k(S);
        }
      }
      function $(w) {
        try {
          v(g.throw(w));
        } catch (S) {
          k(S);
        }
      }
      function v(w) {
        w.done ? m(w.value) : h(w.value).then(x, $);
      }
      v((g = g.apply(a, i || [])).next());
    });
  }, n = A && A.__generator || function(a, i) {
    var s = {
      label: 0,
      sent: function() {
        if (m[0] & 1) throw m[1];
        return m[1];
      },
      trys: [],
      ops: []
    }, g, h, m, k;
    return k = { next: x(0), throw: x(1), return: x(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function x(v) {
      return function(w) {
        return $([v, w]);
      };
    }
    function $(v) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (g = 1, h && (m = v[0] & 2 ? h.return : v[0] ? h.throw || ((m = h.return) && m.call(h), 0) : h.next) && !(m = m.call(h, v[1])).done)
            return m;
          switch (h = 0, m && (v = [v[0] & 2, m.value]), v[0]) {
            case 0:
            case 1:
              m = v;
              break;
            case 4:
              return s.label++, { value: v[1], done: !1 };
            case 5:
              s.label++, h = v[1], v = [0];
              continue;
            case 7:
              v = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (m = s.trys, !(m = m.length > 0 && m[m.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                s = 0;
                continue;
              }
              if (v[0] === 3 && (!m || v[1] > m[0] && v[1] < m[3])) {
                s.label = v[1];
                break;
              }
              if (v[0] === 6 && s.label < m[1]) {
                s.label = m[1], m = v;
                break;
              }
              if (m && s.label < m[2]) {
                s.label = m[2], s.ops.push(v);
                break;
              }
              m[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          v = i.call(a, s);
        } catch (w) {
          v = [6, w], h = 0;
        } finally {
          g = m = 0;
        }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(A, "__esModule", { value: !0 }), A.signOut = A.signInAndUp = A.getAuthorisationURLWithQueryParamsAndSetState = A.getStateAndOtherInfoFromStorage = A.init = void 0;
  var l = J(), p = _o(), u = Qe(), b = (
    /** @class */
    function() {
      function a() {
      }
      return a.init = function(i) {
        return u.default.init(i);
      }, a.signOut = function(i) {
        return u.default.getInstanceOrThrow().signOut({
          userContext: (0, l.getNormalisedUserContext)(
            i == null ? void 0 : i.userContext
          )
        });
      }, a.getStateAndOtherInfoFromStorage = function(i) {
        return u.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          o(o({}, i), {
            userContext: (0, l.getNormalisedUserContext)(
              i == null ? void 0 : i.userContext
            )
          })
        );
      }, a.getAuthorisationURLWithQueryParamsAndSetState = function(i) {
        return r(this, void 0, void 0, function() {
          var s, g, h;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return s = (0, l.getNormalisedUserContext)(i.userContext), g = u.default.getInstanceOrThrow(), [
                  4,
                  p.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: s })
                ];
              case 1:
                return h = m.sent(), [
                  2,
                  g.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    o(o({ tenantId: h }, i), {
                      shouldTryLinkingWithSessionUser: i == null ? void 0 : i.shouldTryLinkingWithSessionUser,
                      userContext: s
                    })
                  )
                ];
            }
          });
        });
      }, a.signInAndUp = function(i) {
        return u.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          o(o({}, i), {
            userContext: (0, l.getNormalisedUserContext)(
              i == null ? void 0 : i.userContext
            )
          })
        );
      }, a;
    }()
  );
  A.default = b;
  var f = b.init;
  A.init = f;
  var c = b.getAuthorisationURLWithQueryParamsAndSetState;
  A.getAuthorisationURLWithQueryParamsAndSetState = c;
  var d = b.getStateAndOtherInfoFromStorage;
  A.getStateAndOtherInfoFromStorage = d;
  var t = b.signInAndUp;
  A.signInAndUp = t;
  var e = b.signOut;
  return A.signOut = e, A;
}
var Sr;
function Ke() {
  return Sr || (Sr = 1, function(o) {
    function r(n) {
      for (var l in n) o.hasOwnProperty(l) || (o[l] = n[l]);
    }
    o.__esModule = !0, r(Xe());
  }(Uo)), Uo;
}
var Jo = Ke();
const Je = /* @__PURE__ */ Mo(Jo), Ze = { class: "gsi-material-button-content-wrapper" }, ot = { class: "gsi-material-button-icon" }, rt = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, et = { class: "gsi-material-button-contents" }, tt = { style: { display: "none" } }, nt = /* @__PURE__ */ z({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  setup(o) {
    async function r() {
      try {
        const n = await Jo.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(n);
      } catch (n) {
        console.error("Google sign in: ", n.message);
      }
    }
    return (n, l) => (P(), N("button", {
      class: "gsi-material-button",
      onClick: r
    }, [
      l[1] || (l[1] = C("div", { class: "gsi-material-button-state" }, null, -1)),
      C("div", Ze, [
        C("div", ot, [
          (P(), N("svg", rt, l[0] || (l[0] = [
            ve('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-521170bf></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-521170bf></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-521170bf></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-521170bf></path><path fill="none" d="M0 0h48v48H0z" data-v-521170bf></path>', 5)
          ])))
        ]),
        C("span", et, eo(n.authType) + " with Google", 1),
        C("span", tt, eo(n.authType) + " with Google", 1)
      ])
    ]));
  }
}), at = /* @__PURE__ */ Vr(nt, [["__scopeId", "data-v-521170bf"]]);
var it = {
  name: "BaseEditableHolder",
  extends: fe,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      default: void 0
    },
    defaultValue: {
      type: null,
      default: void 0
    },
    name: {
      type: String,
      default: void 0
    },
    invalid: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formControl: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcForm: {
      default: void 0
    },
    $pcFormField: {
      default: void 0
    }
  },
  data: function() {
    return {
      d_value: this.defaultValue || this.modelValue
    };
  },
  watch: {
    modelValue: function(r) {
      this.d_value = r;
    },
    defaultValue: function(r) {
      this.d_value = r;
    },
    $formName: {
      immediate: !0,
      handler: function(r) {
        var n, l;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (l = n.register) === null || l === void 0 ? void 0 : l.call(n, r, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(r) {
        var n, l;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (l = n.register) === null || l === void 0 ? void 0 : l.call(n, this.$formName, r)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(r) {
        this.d_value !== r && (this.d_value = r);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(r) {
        var n;
        (n = this.$pcForm) !== null && n !== void 0 && n.getFieldState(this.$formName) && r !== this.d_value && (this.d_value = r);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(r, n) {
      var l, p;
      this.controlled && (this.d_value = r, this.$emit("update:modelValue", r)), this.$emit("value-change", r), (l = (p = this.formField).onChange) === null || l === void 0 || l.call(p, {
        originalEvent: n,
        value: r
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var r = arguments.length, n = new Array(r), l = 0; l < r; l++)
        n[l] = arguments[l];
      return n.find(or);
    }
  },
  computed: {
    $filled: function() {
      return or(this.d_value);
    },
    $invalid: function() {
      var r, n;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (r = this.$pcFormField) === null || r === void 0 || (r = r.$field) === null || r === void 0 ? void 0 : r.invalid, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.invalid);
    },
    $formName: function() {
      var r;
      return this.$formNovalidate ? void 0 : this.name || ((r = this.$formControl) === null || r === void 0 ? void 0 : r.name);
    },
    $formControl: function() {
      var r;
      return this.formControl || ((r = this.$pcFormField) === null || r === void 0 ? void 0 : r.formControl);
    },
    $formNovalidate: function() {
      var r;
      return (r = this.$formControl) === null || r === void 0 ? void 0 : r.novalidate;
    },
    $formDefaultValue: function() {
      var r, n;
      return this.findNonEmpty(this.d_value, (r = this.$pcFormField) === null || r === void 0 ? void 0 : r.initialValue, (n = this.$pcForm) === null || n === void 0 || (n = n.initialValues) === null || n === void 0 ? void 0 : n[this.$formName]);
    },
    $formValue: function() {
      var r, n;
      return this.findNonEmpty((r = this.$pcFormField) === null || r === void 0 || (r = r.$field) === null || r === void 0 ? void 0 : r.value, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, oe = {
  name: "BaseInput",
  extends: it,
  props: {
    size: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcFluid: {
      default: void 0
    }
  },
  computed: {
    $variant: function() {
      var r;
      return (r = this.variant) !== null && r !== void 0 ? r : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var r;
      return (r = this.fluid) !== null && r !== void 0 ? r : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, dt = ({ dt: o }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${o("inputtext.color")};
    background: ${o("inputtext.background")};
    padding-block: ${o("inputtext.padding.y")};
    padding-inline: ${o("inputtext.padding.x")};
    border: 1px solid ${o("inputtext.border.color")};
    transition: background ${o("inputtext.transition.duration")}, color ${o("inputtext.transition.duration")}, border-color ${o("inputtext.transition.duration")}, outline-color ${o("inputtext.transition.duration")}, box-shadow ${o("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${o("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${o("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${o("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${o("inputtext.focus.border.color")};
    box-shadow: ${o("inputtext.focus.ring.shadow")};
    outline: ${o("inputtext.focus.ring.width")} ${o("inputtext.focus.ring.style")} ${o("inputtext.focus.ring.color")};
    outline-offset: ${o("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${o("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${o("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${o("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${o("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${o("inputtext.disabled.background")};
    color: ${o("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${o("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${o("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${o("inputtext.sm.font.size")};
    padding-block: ${o("inputtext.sm.padding.y")};
    padding-inline: ${o("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${o("inputtext.lg.font.size")};
    padding-block: ${o("inputtext.lg.padding.y")};
    padding-inline: ${o("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`, ct = {
  root: function(r) {
    var n = r.instance, l = r.props;
    return ["p-inputtext p-component", {
      "p-filled": n.$filled,
      "p-inputtext-sm p-inputfield-sm": l.size === "small",
      "p-inputtext-lg p-inputfield-lg": l.size === "large",
      "p-invalid": n.$invalid,
      "p-variant-filled": n.$variant === "filled",
      "p-inputtext-fluid": n.$fluid
    }];
  }
}, st = Z.extend({
  name: "inputtext",
  style: dt,
  classes: ct
}), lt = {
  name: "BaseInputText",
  extends: oe,
  style: st,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function ko(o) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ko(o);
}
function ut(o, r, n) {
  return (r = ft(r)) in o ? Object.defineProperty(o, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = n, o;
}
function ft(o) {
  var r = gt(o, "string");
  return ko(r) == "symbol" ? r : r + "";
}
function gt(o, r) {
  if (ko(o) != "object" || !o) return o;
  var n = o[Symbol.toPrimitive];
  if (n !== void 0) {
    var l = n.call(o, r);
    if (ko(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var So = {
  name: "InputText",
  extends: lt,
  inheritAttrs: !1,
  methods: {
    onInput: function(r) {
      this.writeValue(r.target.value, r);
    }
  },
  computed: {
    attrs: function() {
      return Vo(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return ge(ut({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, pt = ["value", "name", "disabled", "aria-invalid", "data-p"];
function mt(o, r, n, l, p, u) {
  return P(), N("input", Vo({
    type: "text",
    class: o.cx("root"),
    value: o.d_value,
    name: o.name,
    disabled: o.disabled,
    "aria-invalid": o.$invalid || void 0,
    "data-p": u.dataP,
    onInput: r[0] || (r[0] = function() {
      return u.onInput && u.onInput.apply(u, arguments);
    })
  }, u.attrs), null, 16, pt);
}
So.render = mt;
const ht = { class: "h1" }, bt = /* @__PURE__ */ z({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess"],
  setup(o, { emit: r }) {
    const n = r, { addToast: l, toastContent: p } = uo(), u = F(!1), b = F("mytestemail1235667@gmail.com");
    async function f() {
      try {
        u.value = !0;
        const c = await ro.createCode({
          email: b.value,
          shouldTryLinkingWithSessionUser: !1,
          // If true, SuperTokens will attempt to link the passwordless code to an existing session user
          userContext: {}
          // Optionally include user context
        });
        console.log("Create code response: ", c), c.status === "SIGN_IN_UP_NOT_ALLOWED" ? l({
          severity: "error",
          summary: p.error.somethingWentWrong.summary,
          detail: p.error.somethingWentWrong.detail,
          error: c
        }) : n("sendCodeSuccess", !0);
      } catch (c) {
        n("sendCodeSuccess", !1), l({
          severity: "error",
          summary: p.error.somethingWentWrong.summary,
          detail: p.error.somethingWentWrong.detail,
          error: c
        });
      } finally {
        u.value = !1;
      }
    }
    return (c, d) => (P(), M(B(fo), { class: "max-w-xl p-12 w-full" }, {
      title: O(() => [
        C("h1", ht, eo(c.pageAuthType), 1)
      ]),
      content: O(() => [
        C("section", null, [
          L(at, { authType: c.pageAuthType }, null, 8, ["authType"]),
          d[3] || (d[3] = C("div", { class: "flex items-center my-10" }, [
            C("hr", { class: "flex-1 border-gray-300" }),
            C("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            C("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          C("form", {
            onSubmit: d[1] || (d[1] = Go(() => {
            }, ["prevent"])),
            class: "spacing-form"
          }, [
            d[2] || (d[2] = C("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            L(B(So), {
              modelValue: B(b),
              "onUpdate:modelValue": d[0] || (d[0] = (t) => Yo(b) ? b.value = t : null),
              placeholder: "Email",
              required: ""
            }, null, 8, ["modelValue"]),
            L(B(ho), {
              label: c.pageAuthType,
              submit: "submit",
              onClick: f,
              loading: B(u)
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var vt = ({ dt: o }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: ${o("inputotp.gap")};
}

.p-inputotp-input {
    text-align: center;
    width: ${o("inputotp.input.width")};
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${o("inputotp.input.sm.width")};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${o("inputotp.input.lg.width")};
}
`, kt = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, yt = Z.extend({
  name: "inputotp",
  style: vt,
  classes: kt
}), wt = {
  name: "BaseInputOtp",
  extends: oe,
  props: {
    readonly: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    length: {
      type: Number,
      default: 4
    },
    mask: {
      type: Boolean,
      default: !1
    },
    integerOnly: {
      type: Boolean,
      default: !1
    }
  },
  style: yt,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, re = {
  name: "InputOtp",
  extends: wt,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur"],
  data: function() {
    return {
      tokens: []
    };
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler: function(r) {
        this.tokens = r ? r.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function(r) {
      return {
        value: this.tokens[r]
      };
    },
    getTemplateEvents: function(r) {
      var n = this;
      return {
        input: function(p) {
          return n.onInput(p, r);
        },
        keydown: function(p) {
          return n.onKeyDown(p);
        },
        focus: function(p) {
          return n.onFocus(p);
        },
        blur: function(p) {
          return n.onBlur(p);
        },
        paste: function(p) {
          return n.onPaste(p);
        }
      };
    },
    onInput: function(r, n) {
      this.tokens[n] = r.target.value, this.updateModel(r), r.inputType === "deleteContentBackward" ? this.moveToPrev(r) : (r.inputType === "insertText" || r.inputType === "deleteContentForward" || pe() && r instanceof CustomEvent) && this.moveToNext(r);
    },
    updateModel: function(r) {
      var n = this.tokens.join("");
      this.writeValue(n, r), this.$emit("change", {
        originalEvent: r,
        value: n
      });
    },
    moveToPrev: function(r) {
      var n = this.findPrevInput(r.target);
      n && (n.focus(), n.select());
    },
    moveToNext: function(r) {
      var n = this.findNextInput(r.target);
      n && (n.focus(), n.select());
    },
    findNextInput: function(r) {
      var n = r.nextElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findNextInput(n);
    },
    findPrevInput: function(r) {
      var n = r.previousElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findPrevInput(n);
    },
    onFocus: function(r) {
      r.target.select(), this.$emit("focus", r);
    },
    onBlur: function(r) {
      this.$emit("blur", r);
    },
    onClick: function(r) {
      setTimeout(function() {
        return r.target.select();
      }, 1);
    },
    onKeyDown: function(r) {
      if (!(r.ctrlKey || r.metaKey))
        switch (r.code) {
          case "ArrowLeft":
            this.moveToPrev(r), r.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
            r.preventDefault();
            break;
          case "Backspace":
            r.target.value.length === 0 && (this.moveToPrev(r), r.preventDefault());
            break;
          case "ArrowRight":
            this.moveToNext(r), r.preventDefault();
            break;
          case "Enter":
          case "NumpadEnter":
          case "Tab":
            break;
          default:
            (this.integerOnly && !(r.code !== "Space" && Number(r.key) >= 0 && Number(r.key) <= 9) || this.tokens.join("").length >= this.length && r.code !== "Delete") && r.preventDefault();
            break;
        }
    },
    onPaste: function(r) {
      var n = r.clipboardData.getData("text");
      if (n.length) {
        var l = n.substring(0, this.length);
        (!this.integerOnly || !isNaN(l)) && (this.tokens = l.split(""), this.updateModel(r));
      }
      r.preventDefault();
    }
  },
  computed: {
    inputMode: function() {
      return this.integerOnly ? "numeric" : "text";
    },
    inputType: function() {
      return this.mask ? "password" : "text";
    }
  },
  components: {
    OtpInputText: So
  }
};
function Ct(o, r, n, l, p, u) {
  var b = ke("OtpInputText");
  return P(), N("div", Vo({
    class: o.cx("root")
  }, o.ptmi("root")), [(P(!0), N(ye, null, we(o.length, function(f) {
    return Xr(o.$slots, "default", {
      key: f,
      events: u.getTemplateEvents(f - 1),
      attrs: u.getTemplateAttrs(f - 1),
      index: f
    }, function() {
      return [L(b, {
        value: p.tokens[f - 1],
        type: u.inputType,
        class: Kr(o.cx("pcInputText")),
        name: o.$formName,
        inputmode: u.inputMode,
        variant: o.variant,
        readonly: o.readonly,
        disabled: o.disabled,
        size: o.size,
        invalid: o.invalid,
        tabindex: o.tabindex,
        unstyled: o.unstyled,
        onInput: function(d) {
          return u.onInput(d, f - 1);
        },
        onFocus: r[0] || (r[0] = function(c) {
          return u.onFocus(c);
        }),
        onBlur: r[1] || (r[1] = function(c) {
          return u.onBlur(c);
        }),
        onPaste: r[2] || (r[2] = function(c) {
          return u.onPaste(c);
        }),
        onKeydown: r[3] || (r[3] = function(c) {
          return u.onKeyDown(c);
        }),
        onClick: r[4] || (r[4] = function(c) {
          return u.onClick(c);
        }),
        pt: o.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
re.render = Ct;
const xt = { class: "spacing-form" }, $t = {
  key: 0,
  class: "validation"
}, Rt = { class: "spacing-form" }, Bt = /* @__PURE__ */ z({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: ["verificationCodeSuccess", "resendCodeSuccess"],
  setup(o, { emit: r }) {
    const n = r, { addToast: l, toastContent: p } = uo(), u = F(""), b = F(!1), f = F(0), c = F(0), d = oo(() => `Invalid code. You have ${c.value - f.value} attempts left.`);
    async function t() {
      const a = "Error processing your OTP code", i = "Please try again later.";
      b.value = !1;
      try {
        const s = await ro.consumeCode({ userInputCode: u.value });
        s.status === "OK" ? (await ro.clearLoginAttemptInfo(), s.createdNewRecipeUser && s.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), window.location.href = "/home") : (console.error("Submit code: ", s), s.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (f.value = s.failedCodeInputAttemptCount, c.value = s.maximumCodeInputAttempts, b.value = !0) : (await ro.clearLoginAttemptInfo(), l({
          severity: "error",
          summary: a,
          detail: i,
          error: s
        }), n("verificationCodeSuccess", !1)));
      } catch (s) {
        l({
          severity: "error",
          summary: p.error.somethingWentWrong.summary,
          detail: p.error.somethingWentWrong.detail,
          error: s
        }), n("verificationCodeSuccess", !1);
      }
    }
    async function e() {
      const a = "Resend OTP failed", i = "Please try again later.";
      try {
        const s = await ro.resendCode();
        console.log("resend code response: ", s), s.status === "RESTART_FLOW_ERROR" ? (await ro.clearLoginAttemptInfo(), l({
          severity: "error",
          summary: a,
          detail: i,
          error: s
        }), n("resendCodeSuccess", !1)) : (l({
          severity: "success",
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        }), n("resendCodeSuccess", !0));
      } catch (s) {
        l({
          severity: "error",
          summary: p.error.somethingWentWrong.summary,
          detail: p.error.somethingWentWrong.detail,
          error: s
        }), n("resendCodeSuccess", !1);
      }
    }
    return (a, i) => (P(), M(B(fo), { class: "max-w-xl p-12 w-full mx-auto" }, {
      title: O(() => i[2] || (i[2] = [
        C("h1", { class: "h1 mt-0" }, "Input validation code", -1)
      ])),
      content: O(() => [
        C("form", {
          onSubmit: i[1] || (i[1] = Go(() => {
          }, ["prevent"])),
          class: "spacing-groups"
        }, [
          C("div", xt, [
            i[4] || (i[4] = C("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
            L(B(re), {
              length: 6,
              class: "w-50",
              modelValue: B(u),
              "onUpdate:modelValue": i[0] || (i[0] = (s) => Yo(u) ? u.value = s : null),
              type: "text",
              placeholder: "Input email code",
              required: ""
            }, null, 8, ["modelValue"]),
            B(b) ? (P(), N("p", $t, eo(B(d)), 1)) : zo("", !0),
            L(B(ho), {
              class: "w-fit",
              type: "submit",
              onClick: t
            }, {
              default: O(() => i[3] || (i[3] = [
                bo("Submit code")
              ])),
              _: 1
            })
          ]),
          C("div", Rt, [
            i[6] || (i[6] = C("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
            L(B(ho), {
              class: "w-fit",
              type: "button",
              onClick: e
            }, {
              default: O(() => i[5] || (i[5] = [
                bo("Resend code")
              ])),
              _: 1
            })
          ])
        ], 32)
      ]),
      _: 1
    }));
  }
});
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const It = typeof document < "u", _t = () => {
}, Bo = Array.isArray;
function Pr(o) {
  const r = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + o].concat(r));
}
function Tr(o, r) {
  return (o.aliasOf || o) === (r.aliasOf || r);
}
function St(o, r) {
  if (Object.keys(o).length !== Object.keys(r).length)
    return !1;
  for (const n in o)
    if (!Pt(o[n], r[n]))
      return !1;
  return !0;
}
function Pt(o, r) {
  return Bo(o) ? Ar(o, r) : Bo(r) ? Ar(r, o) : o === r;
}
function Ar(o, r) {
  return Bo(r) ? o.length === r.length && o.every((n, l) => n === r[l]) : o.length === 1 && o[0] === r;
}
var Or;
(function(o) {
  o.pop = "pop", o.push = "push";
})(Or || (Or = {}));
var Er;
(function(o) {
  o.back = "back", o.forward = "forward", o.unknown = "";
})(Er || (Er = {}));
function Lr(o) {
  return typeof o == "string" || o && typeof o == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Nr;
(function(o) {
  o[o.aborted = 4] = "aborted", o[o.cancelled = 8] = "cancelled", o[o.duplicated = 16] = "duplicated";
})(Nr || (Nr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Zo = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ee = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Wr(o) {
  const r = vo(Zo), n = vo(ee);
  let l = !1, p = null;
  const u = oo(() => {
    const t = B(o.to);
    return process.env.NODE_ENV !== "production" && (!l || t !== p) && (Lr(t) || (l ? Pr(`Invalid value for prop "to" in useLink()
- to:`, t, `
- previous to:`, p, `
- props:`, o) : Pr(`Invalid value for prop "to" in useLink()
- to:`, t, `
- props:`, o)), p = t, l = !0), r.resolve(t);
  }), b = oo(() => {
    const { matched: t } = u.value, { length: e } = t, a = t[e - 1], i = n.matched;
    if (!a || !i.length)
      return -1;
    const s = i.findIndex(Tr.bind(null, a));
    if (s > -1)
      return s;
    const g = Dr(t[e - 2]);
    return (
      // we are dealing with nested routes
      e > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Dr(a) === g && // avoid comparing the child with its parent
      i[i.length - 1].path !== g ? i.findIndex(Tr.bind(null, t[e - 2])) : s
    );
  }), f = oo(() => b.value > -1 && Lt(n.params, u.value.params)), c = oo(() => b.value > -1 && b.value === n.matched.length - 1 && St(n.params, u.value.params));
  function d(t = {}) {
    if (Et(t)) {
      const e = r[B(o.replace) ? "replace" : "push"](
        B(o.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(_t);
      return o.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => e), e;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && It) {
    const t = xe();
    if (t) {
      const e = {
        route: u.value,
        isActive: f.value,
        isExactActive: c.value,
        error: null
      };
      t.__vrl_devtools = t.__vrl_devtools || [], t.__vrl_devtools.push(e), $e(() => {
        e.route = u.value, e.isActive = f.value, e.isExactActive = c.value, e.error = Lr(B(o.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: u,
    href: oo(() => u.value.href),
    isActive: f,
    isExactActive: c,
    navigate: d
  };
}
function Tt(o) {
  return o.length === 1 ? o[0] : o;
}
const At = /* @__PURE__ */ z({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Wr,
  setup(o, { slots: r }) {
    const n = Jr(Wr(o)), { options: l } = vo(Zo), p = oo(() => ({
      [Fr(o.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Fr(o.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const u = r.default && Tt(r.default(n));
      return o.custom ? u : Ce("a", {
        "aria-current": n.isExactActive ? o.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: p.value
      }, u);
    };
  }
}), Ot = At;
function Et(o) {
  if (!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey) && !o.defaultPrevented && !(o.button !== void 0 && o.button !== 0)) {
    if (o.currentTarget && o.currentTarget.getAttribute) {
      const r = o.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r))
        return;
    }
    return o.preventDefault && o.preventDefault(), !0;
  }
}
function Lt(o, r) {
  for (const n in r) {
    const l = r[n], p = o[n];
    if (typeof l == "string") {
      if (l !== p)
        return !1;
    } else if (!Bo(p) || p.length !== l.length || l.some((u, b) => u !== p[b]))
      return !1;
  }
  return !0;
}
function Dr(o) {
  return o ? o.aliasOf ? o.aliasOf.path : o.path : "";
}
const Fr = (o, r, n) => o ?? r ?? n;
function te() {
  return vo(Zo);
}
function ne(o) {
  return vo(ee);
}
const Nt = /* @__PURE__ */ z({
  __name: "SignInUp",
  setup(o) {
    const { addToast: r, toastContent: n } = uo(), l = ne(), p = te(), u = F(!0), b = F(!1);
    Io(async () => {
      b.value = !!await c(), p.currentRoute.value.query.thirdPartyId === "google" && await d();
    });
    const f = oo(() => l.name === "signup" ? "Sign up" : "Sign in");
    async function c() {
      u.value = !0;
      try {
        const t = await ro.getLoginAttemptInfo();
        return t && console.info("Code already sent: ", t), t !== void 0;
      } catch (t) {
        r({
          severity: "error",
          summary: n.error.somethingWentWrong.summary,
          detail: n.error.somethingWentWrong.detail,
          error: t
        });
      } finally {
        u.value = !1;
      }
    }
    async function d() {
      const t = "Failed to sign in with Google", e = "Please try again later or try another form of login.";
      try {
        u.value = !0;
        const a = await Jo.signInAndUp();
        a.status === "OK" ? (console.log("handleGoogleCallback> ", a.user), a.createdNewRecipeUser && a.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), window.location.assign("/home")) : a.status === "SIGN_IN_UP_NOT_ALLOWED" ? r({
          severity: "error",
          summary: t,
          detail: e,
          error: a
        }) : (r({
          severity: "error",
          summary: t,
          detail: e,
          error: a
        }), window.location.assign("/signin"));
      } catch (a) {
        r({
          severity: "error",
          summary: n.error.somethingWentWrong.summary,
          detail: n.error.somethingWentWrong.detail,
          error: a
        });
      } finally {
        u.value = !1;
      }
    }
    return (t, e) => (P(), M(Gr, { isLoading: B(u) }, {
      default: O(() => [
        B(b) ? (P(), M(Bt, {
          key: 1,
          pageAuthType: B(f),
          onVerificationCodeSuccess: e[1] || (e[1] = (a) => b.value = a),
          onResendCodeSuccess: e[2] || (e[2] = (a) => b.value = a)
        }, null, 8, ["pageAuthType"])) : (P(), M(bt, {
          key: 0,
          pageAuthType: B(f),
          onSendCodeSuccess: e[0] || (e[0] = (a) => b.value = a)
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
}), Wt = { class: "flex flex-grow items-center justify-center w-full" }, Ur = /* @__PURE__ */ z({
  __name: "AuthPage",
  setup(o) {
    return (r, n) => (P(), N("div", Wt, [
      L(Nt)
    ]));
  }
}), zr = 5e3, Dt = /* @__PURE__ */ z({
  __name: "GoodbyePage",
  setup(o) {
    const r = te();
    return Io(() => {
      setTimeout(() => {
        r.push("/");
      }, zr);
    }), (n, l) => (P(), N("div", null, [
      l[0] || (l[0] = C("h1", null, "Goodbye", -1)),
      l[1] || (l[1] = C("p", null, "Your account has been deleted, thank you for visiting!", -1)),
      C("p", null, "You will be redirected to the landing page in " + eo(zr) + " seconds automatically.")
    ]));
  }
}), Ft = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), Ut = async (o) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: o })
}), zt = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), Ht = async (o) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": o,
    "Content-Type": "application/json"
  }
}), Po = { getEmail: Ft, changeEmail: Ut, requestDelete: zt, deleteAccount: Ht }, jt = { class: "flex flex-col items-center gap-4 text-center" }, Mt = { class: "flex flex-col gap-2" }, ae = /* @__PURE__ */ z({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(o) {
    return (r, n) => (P(), N("div", jt, [
      C("i", {
        class: Kr([r.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      C("div", Mt, [
        Xr(r.$slots, "default")
      ])
    ]));
  }
}), qt = {
  key: 0,
  class: "spacing-elements"
}, Vt = { class: "text-primary break-all px-2" }, Gt = /* @__PURE__ */ z({
  __name: "ChangeEmail",
  setup(o) {
    const { addToast: r, toastContent: n } = uo(), l = F(""), p = F(!1);
    async function u() {
      try {
        const b = await Po.changeEmail(l.value);
        if (!b.ok)
          throw p.value = !1, new Error(`Error changing email: ${b.status} - ${b.statusText}`);
        p.value = !0;
      } catch (b) {
        p.value = !1, r({
          severity: "error",
          summary: n.error.somethingWentWrong.summary,
          detail: n.error.somethingWentWrong.detail,
          error: b
        });
      }
    }
    return (b, f) => (P(), M(B(fo), null, {
      title: O(() => f[1] || (f[1] = [
        C("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: O(() => [
        B(p) ? (P(), M(ae, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: O(() => [
            C("p", null, [
              f[5] || (f[5] = C("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              C("strong", Vt, eo(B(l)), 1),
              f[6] || (f[6] = C("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (P(), N("div", qt, [
          f[4] || (f[4] = C("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          C("form", {
            onSubmit: Go(u, ["prevent"]),
            class: "spacing-form"
          }, [
            f[3] || (f[3] = C("label", {
              for: "email",
              class: "label"
            }, "Enter your new email", -1)),
            L(B(So), {
              modelValue: B(l),
              "onUpdate:modelValue": f[0] || (f[0] = (c) => Yo(l) ? l.value = c : null),
              type: "email",
              id: "email",
              name: "email",
              required: ""
            }, null, 8, ["modelValue"]),
            L(B(ho), { type: "submit" }, {
              default: O(() => f[2] || (f[2] = [
                bo("Change email")
              ])),
              _: 1
            })
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), Yt = {
  key: 0,
  class: "spacing-elements"
}, Qt = /* @__PURE__ */ z({
  __name: "DeleteAccount",
  setup(o) {
    const { addToast: r, toastContent: n } = uo(), l = F(!1);
    async function p() {
      try {
        const u = await Po.requestDelete();
        if (u.ok)
          l.value = !0;
        else
          throw new Error(`Error requesting account deletion: ${u.status} - ${u.statusText}`);
      } catch (u) {
        l.value = !1, r({
          severity: "error",
          summary: n.error.somethingWentWrong.summary,
          detail: n.error.somethingWentWrong.detail,
          error: u
        });
      }
    }
    return (u, b) => (P(), M(B(fo), null, {
      title: O(() => b[0] || (b[0] = [
        C("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: O(() => [
        B(l) ? (P(), M(ae, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: O(() => b[3] || (b[3] = [
            C("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (P(), N("div", Yt, [
          b[2] || (b[2] = C("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          L(B(ho), {
            type: "button",
            onClick: p
          }, {
            default: O(() => b[1] || (b[1] = [
              bo("Send deletion email")
            ])),
            _: 1
          })
        ]))
      ]),
      _: 1
    }));
  }
}), Xt = { class: "spacing-elements" }, Kt = {
  key: 0,
  class: "flex flex-row gap-2"
}, Jt = { class: "text-primary break-all" }, Zt = {
  key: 1,
  class: "flex flex-row gap-2"
}, on = { class: "text-primary break-all px-2" }, rn = /* @__PURE__ */ z({
  __name: "YourAccount",
  setup(o) {
    const r = F(""), n = F("");
    Io(() => {
      l();
    });
    async function l() {
      try {
        r.value = await qo.getUserId();
        const p = await Po.getEmail();
        if (!p.ok)
          throw new Error(`Error getting user email: ${p.status} - ${p.statusText}`);
        const u = await p.json();
        n.value = u.email;
      } catch (p) {
        console.error("Error fetching user email: ", p);
      }
    }
    return (p, u) => (P(), M(B(fo), null, {
      title: O(() => u[0] || (u[0] = [
        C("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: O(() => [
        C("div", Xt, [
          B(r) ? (P(), N("div", Kt, [
            u[1] || (u[1] = C("div", null, "ID:", -1)),
            C("div", null, [
              C("code", Jt, eo(B(r)), 1)
            ])
          ])) : zo("", !0),
          B(n) ? (P(), N("div", Zt, [
            u[2] || (u[2] = C("div", null, "Email:", -1)),
            C("div", null, [
              C("strong", on, eo(B(n)), 1)
            ])
          ])) : zo("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), en = { class: "container flex items-center justify-center w-full" }, tn = {
  key: 0,
  class: "max-w-xl"
}, nn = { class: "spacing-page-sections" }, an = { key: 1 }, dn = { class: "spacing-elements p-12" }, cn = /* @__PURE__ */ z({
  __name: "AccountPage",
  setup(o) {
    const { addToast: r } = uo(), n = ne(), l = F(!1), p = F(n.query.del_token);
    Io(() => {
      p.value && u();
    });
    async function u() {
      const b = "We failed to delete your account!", f = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const c = await Po.deleteAccount(p.value);
        if (!c.ok)
          throw new Error(`Error deleting account: ${c.status} - ${c.statusText}`);
        await qo.signOut(), window.location.href = "/goodbye";
      } catch (c) {
        r({
          severity: "error",
          summary: b,
          detail: f,
          life: 0,
          error: { msg: "Failed to delete user account", error: c }
        }), p.value = void 0;
      }
    }
    return (b, f) => (P(), M(Gr, { isLoading: B(l) }, {
      default: O(() => [
        C("div", en, [
          B(p) ? (P(), N("div", an, [
            L(B(fo), null, {
              content: O(() => [
                C("div", dn, [
                  f[1] || (f[1] = C("p", { class: "text-2xl" }, "Deleting your account...", -1)),
                  L(B(me))
                ])
              ]),
              _: 1
            })
          ])) : (P(), N("div", tn, [
            f[0] || (f[0] = C("h1", { class: "h1 text-color" }, "Your account", -1)),
            C("div", nn, [
              L(rn),
              L(Gt),
              L(Qt)
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
}), sn = { class: "not-found-page" }, ln = /* @__PURE__ */ z({
  __name: "NotFoundPage",
  setup(o) {
    return (r, n) => (P(), N("div", sn, [
      n[1] || (n[1] = C("h1", null, "Page Not Found", -1)),
      n[2] || (n[2] = C("p", null, "Sorry, the page you are looking for does not exist.", -1)),
      L(B(Ot), { to: "/" }, {
        default: O(() => n[0] || (n[0] = [
          bo("Go back to Home")
        ])),
        _: 1
      })
    ]));
  }
}), un = /* @__PURE__ */ Vr(ln, [["__scopeId", "data-v-86d9ef49"]]), fn = {
  class: "container max-w-xl rounded-2xl mt-10 p-8",
  style: { background: "white" }
}, gn = /* @__PURE__ */ z({
  __name: "ErrorPage",
  setup(o) {
    return (r, n) => (P(), N("div", fn));
  }
}), pn = [
  {
    path: "/account",
    name: "account",
    component: cn,
    meta: { requiresAuth: !0 }
  },
  {
    path: "/goodbye",
    name: "goodbye",
    component: Dt
  },
  {
    path: "/signup",
    name: "signup",
    component: Ur,
    props: { authType: "signup" },
    meta: { guestOnly: !0 }
  },
  {
    path: "/signin",
    name: "signin",
    component: Ur,
    props: { authType: "signin" },
    meta: { guestOnly: !0 }
  },
  {
    path: "/error",
    name: "error",
    component: gn
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: un
  }
];
function mn(o) {
  o.beforeEach(async (r, n, l) => {
    const p = Yr();
    await p.updateAuth(), r.meta.requiresAuth && !p.isSignedIn ? l("/signin") : r.meta.guestOnly && p.isSignedIn ? l("/home") : l();
  });
}
var D = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function yo(o) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yo(o);
}
function Hr(o, r) {
  var n = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(o);
    r && (l = l.filter(function(p) {
      return Object.getOwnPropertyDescriptor(o, p).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function Ro(o) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Hr(Object(n), !0).forEach(function(l) {
      hn(o, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach(function(l) {
      Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return o;
}
function hn(o, r, n) {
  return (r = bn(r)) in o ? Object.defineProperty(o, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = n, o;
}
function bn(o) {
  var r = vn(o, "string");
  return yo(r) == "symbol" ? r : r + "";
}
function vn(o, r) {
  if (yo(o) != "object" || !o) return o;
  var n = o[Symbol.toPrimitive];
  if (n !== void 0) {
    var l = n.call(o, r);
    if (yo(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var kn = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [D.STARTS_WITH, D.CONTAINS, D.NOT_CONTAINS, D.ENDS_WITH, D.EQUALS, D.NOT_EQUALS],
    numeric: [D.EQUALS, D.NOT_EQUALS, D.LESS_THAN, D.LESS_THAN_OR_EQUAL_TO, D.GREATER_THAN, D.GREATER_THAN_OR_EQUAL_TO],
    date: [D.DATE_IS, D.DATE_IS_NOT, D.DATE_BEFORE, D.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, yn = Symbol();
function wn(o, r) {
  var n = {
    config: Jr(r)
  };
  return o.config.globalProperties.$primevue = n, o.provide(yn, n), Cn(), xn(o, n), n;
}
var lo = [];
function Cn() {
  Qr.clear(), lo.forEach(function(o) {
    return o == null ? void 0 : o();
  }), lo = [];
}
function xn(o, r) {
  var n = F(!1), l = function() {
    var d;
    if (((d = r.config) === null || d === void 0 ? void 0 : d.theme) !== "none" && !Ao.isStyleNameLoaded("common")) {
      var t, e, a = ((t = Z.getCommonTheme) === null || t === void 0 ? void 0 : t.call(Z)) || {}, i = a.primitive, s = a.semantic, g = a.global, h = a.style, m = {
        nonce: (e = r.config) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
      Z.load(i == null ? void 0 : i.css, Ro({
        name: "primitive-variables"
      }, m)), Z.load(s == null ? void 0 : s.css, Ro({
        name: "semantic-variables"
      }, m)), Z.load(g == null ? void 0 : g.css, Ro({
        name: "global-variables"
      }, m)), Z.loadStyle(Ro({
        name: "global-style"
      }, m), h), Ao.setLoadedStyleName("common");
    }
  };
  Qr.on("theme:change", function(c) {
    n.value || (o.config.globalProperties.$primevue.config.theme = c, n.value = !0);
  });
  var p = Co(r.config, function(c, d) {
    wo.emit("config:change", {
      newValue: c,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), u = Co(function() {
    return r.config.ripple;
  }, function(c, d) {
    wo.emit("config:ripple:change", {
      newValue: c,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), b = Co(function() {
    return r.config.theme;
  }, function(c, d) {
    n.value || Ao.setTheme(c), r.config.unstyled || l(), n.value = !1, wo.emit("config:theme:change", {
      newValue: c,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !1
  }), f = Co(function() {
    return r.config.unstyled;
  }, function(c, d) {
    !c && r.config.theme && l(), wo.emit("config:unstyled:change", {
      newValue: c,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  });
  lo.push(p), lo.push(u), lo.push(b), lo.push(f);
}
var $n = {
  install: function(r, n) {
    var l = he(kn, n);
    wn(r, l);
  }
}, Rn = (...o) => be(...o), Bn = { transitionDuration: "{transition.duration}" }, In = { borderWidth: "0", borderColor: "{content.border.color}" }, _n = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Sn = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" }, Pn = { light: { header: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.50}", activeHoverBackground: "{surface.100}" } }, dark: { header: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.800}", activeHoverBackground: "{surface.700}" } } }, Tn = { root: Bn, panel: In, header: _n, content: Sn, colorScheme: Pn }, An = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, On = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, En = { padding: "{list.padding}", gap: "{list.gap}" }, Ln = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Nn = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Wn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Dn = { borderRadius: "{border.radius.sm}" }, Fn = { padding: "{list.option.padding}" }, Un = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, zn = { root: An, overlay: On, list: En, option: Ln, optionGroup: Nn, dropdown: Wn, chip: Dn, emptyMessage: Fn, colorScheme: Un }, Hn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, jn = { size: "1rem" }, Mn = { borderColor: "{content.background}", offset: "-0.75rem" }, qn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Vn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Gn = { root: Hn, icon: jn, group: Mn, lg: qn, xl: Vn }, Yn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Qn = { size: "0.5rem" }, Xn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Kn = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Jn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Zn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, oa = { root: Yn, dot: Qn, sm: Xn, lg: Kn, xl: Jn, colorScheme: Zn }, ra = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, ea = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "transparent", offset: "0" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.625rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.5rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 1rem 0 1rem" }, option: { padding: "0.625rem 1rem", borderRadius: "0" }, optionGroup: { padding: "0.625rem 1rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 1rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.625rem 1rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "1rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.5rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }, navigation: { shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, focusRing: { shadow: "0 0 0 0.2rem {primary.200}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.0}", borderColor: "{surface.300}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.500}", shadow: "none" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, focusRing: { shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.950}", borderColor: "{surface.600}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, ta = { primitive: ra, semantic: ea }, na = { borderRadius: "{content.border.radius}" }, aa = { root: na }, ia = { padding: "1.25rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, da = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ca = { color: "{navigation.item.icon.color}" }, sa = { root: ia, item: da, separator: ca }, la = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.75rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.25rem" }, label: { fontWeight: "600" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", offset: "{form.field.focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, ua = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {primary.200}" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.200}" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {sky.200}" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {green.200}" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {orange.200}" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {purple.200}" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {red.200}" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.400}" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, fa = { root: la, colorScheme: ua }, ga = { background: "{content.background}", borderRadius: "{border.radius.lg}", color: "{content.color}", shadow: "0 .125rem .25rem rgba(0,0,0,.075)" }, pa = { padding: "1.5rem", gap: "0.75rem" }, ma = { gap: "0.5rem" }, ha = { fontSize: "1.25rem", fontWeight: "700" }, ba = { color: "{text.muted.color}" }, va = { root: ga, body: pa, caption: ma, title: ha, subtitle: ba }, ka = { transitionDuration: "{transition.duration}" }, ya = { gap: "0.25rem" }, wa = { padding: "1rem", gap: "0.5rem" }, Ca = { width: "1rem", height: "1rem", borderRadius: "50", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, xa = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, $a = { root: ka, content: ya, indicatorList: wa, indicator: Ca, colorScheme: xa }, Ra = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ba = { width: "2.5rem", color: "{form.field.icon.color}" }, Ia = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, _a = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1.25rem" }, Sa = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Pa = { color: "{form.field.icon.color}" }, Ta = { root: Ra, dropdown: Ba, overlay: Ia, list: _a, option: Sa, clearIcon: Pa }, Aa = { borderRadius: "{border.radius.sm}", width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, Oa = { size: "1rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, Ea = { root: Aa, icon: Oa }, La = { borderRadius: "16px", paddingX: "0.875rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Na = { width: "2rem", height: "2rem" }, Wa = { size: "1rem" }, Da = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fa = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Ua = { root: La, image: Na, icon: Wa, removeIcon: Da, colorScheme: Fa }, za = { transitionDuration: "{transition.duration}" }, Ha = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, ja = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Ma = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, qa = { root: za, preview: Ha, panel: ja, colorScheme: Ma }, Va = { size: "2rem", color: "{overlay.modal.color}" }, Ga = { gap: "1rem" }, Ya = { icon: Va, content: Ga }, Qa = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Xa = { padding: "{overlay.popover.padding}", gap: "1rem" }, Ka = { size: "1.5rem", color: "{overlay.popover.color}" }, Ja = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Za = { root: Qa, content: Xa, icon: Ka, footer: Ja }, oi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ri = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ei = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ti = { mobileIndent: "1.25rem" }, ni = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, ai = { borderColor: "{content.border.color}" }, ii = { root: oi, list: ri, item: ei, submenu: ti, submenuIcon: ni, separator: ai }, di = { transitionDuration: "{transition.duration}" }, ci = { borderColor: "{datatable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, si = { selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, li = { fontWeight: "700" }, ui = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, fi = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, gi = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, pi = { fontWeight: "700" }, mi = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, hi = { color: "{primary.color}" }, bi = { width: "0.5rem" }, vi = { width: "1px", color: "{primary.color}" }, ki = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, yi = { size: "2rem" }, wi = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ci = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, xi = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, $i = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Ri = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Bi = { root: di, header: ci, headerCell: si, columnTitle: li, row: ui, bodyCell: fi, footerCell: gi, columnFooter: pi, footer: mi, dropPoint: hi, columnResizer: bi, resizeIndicator: vi, sortIcon: ki, loadingIcon: yi, rowToggleButton: wi, filter: Ci, paginatorTop: xi, paginatorBottom: $i, colorScheme: Ri }, Ii = { borderColor: "{content.border.color}", borderWidth: "1px", borderRadius: "4px", padding: "0" }, _i = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.875rem 1.125rem", borderRadius: "5px 5px 0 0" }, Si = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "5px" }, Pi = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.875rem 1.125rem", borderRadius: "0 0 5px 5px" }, Ti = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Ai = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Oi = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, Ei = { root: Ii, header: _i, content: Si, footer: Pi, paginatorTop: Ti, paginatorBottom: Ai, colorScheme: Oi }, Li = { transitionDuration: "{transition.duration}" }, Ni = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Wi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.75rem 0" }, Di = { gap: "0.5rem", fontWeight: "700" }, Fi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Ui = { color: "{form.field.icon.color}" }, zi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, Hi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, ji = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Mi = { margin: "0.75rem 0 0 0" }, qi = { padding: "0.375rem", fontWeight: "700", color: "{content.color}" }, Vi = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.375rem", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Gi = { margin: "0.75rem 0 0 0" }, Yi = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, Qi = { margin: "0.75rem 0 0 0" }, Xi = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, Ki = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}" }, Ji = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Zi = { light: { dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, od = { root: Li, panel: Ni, header: Wi, title: Di, dropdown: Fi, inputIcon: Ui, selectMonth: zi, selectYear: Hi, group: ji, dayView: Mi, weekDay: qi, date: Vi, monthView: Gi, month: Yi, yearView: Qi, year: Xi, buttonbar: Ki, timePicker: Ji, colorScheme: Zi }, rd = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, ed = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, td = { fontSize: "1.25rem", fontWeight: "600" }, nd = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, ad = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, id = { root: rd, header: ed, title: td, content: nd, footer: ad }, dd = { borderColor: "{content.border.color}" }, cd = { background: "{content.background}", color: "{text.color}" }, sd = { margin: "1.125rem 0", padding: "0 1.125rem", content: { padding: "0 0.625rem" } }, ld = { margin: "0 1.125rem", padding: "1.125rem 0", content: { padding: "0.625rem 0" } }, ud = { root: dd, content: cd, horizontal: sd, vertical: ld }, fd = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.lg}" }, gd = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pd = { root: fd, item: gd }, md = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, hd = { padding: "{overlay.modal.padding}" }, bd = { fontSize: "1.5rem", fontWeight: "600" }, vd = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, kd = { padding: "{overlay.modal.padding}" }, yd = { root: md, header: hd, title: bd, content: vd, footer: kd }, wd = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Cd = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, xd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, $d = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Rd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Bd = { light: { toolbar: { background: "{surface.50}" } }, dark: { toolbar: { background: "{surface.800}" } } }, Id = { toolbar: wd, toolbarItem: Cd, overlay: xd, overlayOption: $d, content: Rd, colorScheme: Bd }, _d = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Sd = { borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pd = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, Td = { padding: "0" }, Ad = { light: { legend: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}", hoverColor: "{text.hover.color}" } }, dark: { legend: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" } } }, Od = { root: _d, legend: Sd, toggleIcon: Pd, content: Td, colorScheme: Ad }, Ed = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Ld = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0", gap: "0.5rem" }, Nd = { highlightBorderColor: "{primary.color}", padding: "1.125rem", gap: "1rem" }, Wd = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Dd = { gap: "0.5rem" }, Fd = { height: "0.25rem" }, Ud = { gap: "0.5rem" }, zd = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, Hd = { root: Ed, header: Ld, content: Nd, file: Wd, fileList: Dd, progressbar: Fd, basic: Ud, colorScheme: zd }, jd = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Md = { active: { top: "-1.375rem" } }, qd = { input: { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Vd = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Gd = { root: jd, over: Md, in: qd, on: Vd }, Yd = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Qd = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0", prev: { borderRadius: "0 12px 12px 0" }, next: { borderRadius: "12px 0 0 12px" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xd = { size: "1.5rem" }, Kd = { padding: "1rem 0.25rem" }, Jd = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zd = { size: "1rem" }, oc = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, rc = { gap: "0.5rem", padding: "1rem" }, ec = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tc = { background: "rgba(0, 0, 0, 0.5)" }, nc = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, ac = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ic = { size: "1.5rem" }, dc = { light: { thumbnailsContent: { background: "{surface.50}" }, thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailsContent: { background: "{surface.800}" }, thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, cc = { root: Yd, navButton: Qd, navIcon: Xd, thumbnailsContent: Kd, thumbnailNavButton: Jd, thumbnailNavButtonIcon: Zd, caption: oc, indicatorList: rc, indicatorButton: ec, insetIndicatorList: tc, insetIndicatorButton: nc, closeButton: ac, closeButtonIcon: ic, colorScheme: dc }, sc = { color: "{form.field.icon.color}" }, lc = { icon: sc }, uc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, fc = { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, gc = { root: uc, input: fc }, pc = { transitionDuration: "{transition.duration}" }, mc = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, hc = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" }, bc = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vc = { root: pc, preview: mc, toolbar: hc, action: bc }, kc = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, yc = { handle: kc }, wc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Cc = { fontWeight: "500" }, xc = { size: "1.125rem" }, $c = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)", color: "{blue.600}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "color-mix(in srgb, {green.50}, transparent 5%)", color: "{green.600}", shadow: "none" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)", color: "{yellow.600}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "color-mix(in srgb, {red.50}, transparent 5%)", color: "{red.600}", shadow: "none" }, secondary: { background: "{surface.100}", borderColor: "{surface.100}", color: "{surface.600}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "none" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)", color: "{blue.500}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.500}", shadow: "none" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)", color: "{yellow.500}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.500}", shadow: "none" }, secondary: { background: "{surface.800}", borderColor: "{surface.800}", color: "{surface.300}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } }, Rc = { root: wc, text: Cc, icon: xc, colorScheme: $c }, Bc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Ic = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, _c = { root: Bc, display: Ic }, Sc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Pc = { borderRadius: "{border.radius.sm}" }, Tc = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Ac = { root: Sc, chip: Pc, colorScheme: Tc }, Oc = { borderRadius: "{form.field.border.radius}", padding: "0.625rem 0.5rem", minWidth: "2.75rem" }, Ec = { light: { addon: { background: "{surface.50}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } }, dark: { addon: { background: "{surface.800}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } } }, Lc = { addon: Oc, colorScheme: Ec }, Nc = { transitionDuration: "{transition.duration}" }, Wc = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Dc = { light: { button: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { button: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.500}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Fc = { root: Nc, button: Wc, colorScheme: Dc }, Uc = { gap: "0.5rem" }, zc = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Hc = { root: Uc, input: zc }, jc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Mc = { root: jc }, qc = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Vc = { background: "{primary.color}" }, Gc = { background: "{content.border.color}" }, Yc = { color: "{text.muted.color}" }, Qc = { root: qc, value: Vc, range: Gc, text: Yc }, Xc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Kc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Jc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Zc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, os = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, rs = { padding: "{list.option.padding}" }, es = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, ts = { root: Xc, list: Kc, option: Jc, optionGroup: Zc, checkmark: os, emptyMessage: rs, colorScheme: es }, ns = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.75rem 1rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, as = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, is = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ds = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, cs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ss = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, ls = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, us = { borderColor: "{content.border.color}" }, fs = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, gs = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, ps = { root: ns, baseItem: as, item: is, overlay: ds, submenu: cs, submenuLabel: ss, submenuIcon: ls, separator: us, mobileButton: fs, colorScheme: gs }, ms = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, hs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, bs = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, vs = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, ks = { borderColor: "{content.border.color}" }, ys = { root: ms, list: hs, item: bs, submenuLabel: vs, separator: ks }, ws = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem 1rem", transitionDuration: "{transition.duration}" }, Cs = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, xs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, $s = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1.25rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Rs = { borderColor: "{content.border.color}" }, Bs = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Is = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, _s = { root: ws, baseItem: Cs, item: xs, submenu: $s, separator: Rs, mobileButton: Bs, colorScheme: Is }, Ss = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Ps = { padding: "0.75rem 1rem", gap: "0.5rem", sm: { padding: "0.5rem 0.625rem" }, lg: { padding: "0.75rem 0.875rem" } }, Ts = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, As = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } }, Os = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Es = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Ls = { root: { borderWidth: "1px" } }, Ns = { content: { padding: "0" } }, Ws = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "transparent", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "transparent", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "transparent", color: "{yellow.600}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "transparent", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "transparent", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "transparent", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "transparent", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "transparent", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "transparent", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "transparent", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "transparent", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "transparent", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Ds = { root: Ss, content: Ps, text: Ts, icon: As, closeButton: Os, closeIcon: Es, outlined: Ls, simple: Ns, colorScheme: Ws }, Fs = { borderRadius: "{content.border.radius}", gap: "1rem" }, Us = { background: "{content.border.color}", size: "0.625rem" }, zs = { gap: "0.5rem" }, Hs = { size: "0.5rem" }, js = { size: "1rem" }, Ms = { verticalGap: "0.5rem", horizontalGap: "1rem" }, qs = { root: Fs, meters: Us, label: zs, labelMarker: Hs, labelIcon: js, labelList: Ms }, Vs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Gs = { width: "2.5rem", color: "{form.field.icon.color}" }, Ys = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Qs = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Xs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Ks = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Js = { color: "{form.field.icon.color}" }, Zs = { borderRadius: "{border.radius.sm}" }, ol = { padding: "{list.option.padding}" }, rl = { root: Vs, dropdown: Gs, overlay: Ys, list: Qs, option: Xs, optionGroup: Ks, chip: Zs, clearIcon: Js, emptyMessage: ol }, el = { gap: "1.125rem" }, tl = { gap: "0.5rem" }, nl = { root: el, controls: tl }, al = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, il = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" }, dl = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, cl = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, sl = { root: al, node: il, nodeToggleButton: dl, connector: cl }, ll = { outline: { width: "2px", color: "{content.background}" } }, ul = { root: ll }, fl = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, gl = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pl = { color: "{text.muted.color}" }, ml = { maxWidth: "2.5rem" }, hl = { root: fl, navButton: gl, currentPageReport: pl, jumpToPageInput: ml }, bl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}" }, vl = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0" }, kl = { padding: "0.25rem 1.125rem" }, yl = { fontWeight: "700" }, wl = { padding: "1.125rem" }, Cl = { padding: "1.125rem" }, xl = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, $l = { root: bl, header: vl, toggleableHeader: kl, title: yl, content: wl, footer: Cl, colorScheme: xl }, Rl = { gap: "0", transitionDuration: "{transition.duration}" }, Bl = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } }, Il = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, _l = { indent: "1rem" }, Sl = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Pl = { root: Rl, panel: Bl, item: Il, submenu: _l, submenuIcon: Sl }, Tl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, Al = { color: "{form.field.icon.color}" }, Ol = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, El = { gap: "0.75rem" }, Ll = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Nl = { meter: Tl, icon: Al, overlay: Ol, content: El, colorScheme: Ll }, Wl = { gap: "1.125rem" }, Dl = { gap: "0.5rem" }, Fl = { root: Wl, controls: Dl }, Ul = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, zl = { padding: "{overlay.popover.padding}" }, Hl = { root: Ul, content: zl }, jl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.5rem" }, Ml = { background: "{primary.color}" }, ql = { color: "{primary.contrast.color}", fontSize: "0.875rem", fontWeight: "600" }, Vl = { root: jl, value: Ml, label: ql }, Gl = { light: { root: { colorOne: "{pink.500}", colorTwo: "{sky.500}", colorThree: "{emerald.500}", colorFour: "{amber.500}" } }, dark: { root: { colorOne: "{pink.400}", colorTwo: "{sky.400}", colorThree: "{emerald.400}", colorFour: "{amber.400}" } } }, Yl = { colorScheme: Gl }, Ql = { width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, Xl = { size: "1rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, Kl = { root: Ql, icon: Xl }, Jl = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zl = { size: "1.25rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, ou = { root: Jl, icon: Zl }, ru = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, eu = { colorScheme: ru }, tu = { transitionDuration: "{transition.duration}" }, nu = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, au = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } }, iu = { root: tu, bar: nu, colorScheme: au }, du = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, cu = { width: "2.5rem", color: "{form.field.icon.color}" }, su = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, lu = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, uu = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, fu = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, gu = { color: "{form.field.icon.color}" }, pu = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, mu = { padding: "{list.option.padding}" }, hu = { root: du, dropdown: cu, overlay: su, list: lu, option: uu, optionGroup: fu, clearIcon: gu, checkmark: pu, emptyMessage: mu }, bu = { borderRadius: "{form.field.border.radius}" }, vu = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, ku = { root: bu, colorScheme: vu }, yu = { borderRadius: "{content.border.radius}" }, wu = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Cu = { root: yu, colorScheme: wu }, xu = { transitionDuration: "{transition.duration}" }, $u = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Ru = { background: "{primary.color}" }, Bu = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Iu = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, _u = { root: xu, track: $u, range: Ru, handle: Bu, colorScheme: Iu }, Su = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Pu = { root: Su }, Tu = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Au = { root: Tu }, Ou = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Eu = { background: "{content.border.color}" }, Lu = { size: "24px", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Nu = { light: { handle: { background: "{surface.400}" } }, dark: { handle: { background: "{surface.600}" } } }, Wu = { root: Ou, gutter: Eu, handle: Lu, colorScheme: Nu }, Du = { transitionDuration: "{transition.duration}" }, Fu = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Uu = { padding: "0.5rem", gap: "1rem" }, zu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Hu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, ju = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Mu = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, qu = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Vu = { root: Du, separator: Fu, step: Uu, stepHeader: zu, stepTitle: Hu, stepNumber: ju, steppanels: Mu, steppanel: qu }, Gu = { transitionDuration: "{transition.duration}" }, Yu = { background: "{content.border.color}" }, Qu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Xu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Ku = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Ju = { root: Gu, separator: Yu, itemLink: Qu, itemLabel: Xu, itemNumber: Ku }, Zu = { transitionDuration: "{transition.duration}" }, of = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, rf = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ef = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, tf = { height: "0", bottom: "0", background: "transparent" }, nf = { light: { item: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { item: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, af = { root: Zu, tablist: of, item: rf, itemIcon: ef, activeBar: tf, colorScheme: nf }, df = { transitionDuration: "{transition.duration}" }, cf = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, sf = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, lf = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, uf = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, ff = { height: "0", bottom: "0", background: "transparent" }, gf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" }, tab: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" }, tab: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, pf = { root: df, tablist: cf, tab: sf, tabpanel: lf, navButton: uf, activeBar: ff, colorScheme: gf }, mf = { transitionDuration: "{transition.duration}" }, hf = { background: "{content.background}", borderColor: "{content.border.color}" }, bf = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, vf = { background: "{content.background}", color: "{content.color}" }, kf = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, yf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, wf = { root: mf, tabList: hf, tab: bf, tabPanel: vf, navButton: kf, colorScheme: yf }, Cf = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, xf = { size: "0.75rem" }, $f = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Rf = { root: Cf, icon: xf, colorScheme: $f }, Bf = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, If = { gap: "0.25rem" }, _f = { margin: "2px 0" }, Sf = { root: Bf, prompt: If, commandResponse: _f }, Pf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Tf = { root: Pf }, Af = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Of = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ef = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Lf = { mobileIndent: "1.25rem" }, Nf = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Wf = { borderColor: "{content.border.color}" }, Df = { root: Af, list: Of, item: Ef, submenu: Lf, submenuIcon: Nf, separator: Wf }, Ff = { minHeight: "5rem" }, Uf = { eventContent: { padding: "1rem 0" } }, zf = { eventContent: { padding: "0 1rem" } }, Hf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } }, jf = { color: "{content.border.color}", size: "2px" }, Mf = { event: Ff, horizontal: Uf, vertical: zf, eventMarker: Hf, eventConnector: jf }, qf = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}" }, Vf = { size: "1.25rem" }, Gf = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Yf = { gap: "0.5rem" }, Qf = { fontWeight: "500", fontSize: "1rem" }, Xf = { fontWeight: "500", fontSize: "0.875rem" }, Kf = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Jf = { size: "1rem" }, Zf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.500}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.500}", color: "{green.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.500}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.500}", color: "{red.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.500}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } } }, contrast: { background: "{surface.900}", borderColor: "{primary.color}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } } } } }, o0 = { root: qf, icon: Vf, content: Gf, text: Yf, summary: Qf, detail: Xf, closeButton: Kf, closeIcon: Jf, colorScheme: Zf }, r0 = { padding: "0.625rem 1rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.25rem" } }, e0 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" }, t0 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } }, n0 = { light: { root: { hoverBackground: "{surface.100}" } }, dark: { root: { hoverBackground: "{surface.800}" } } }, a0 = { root: r0, icon: e0, content: t0, colorScheme: n0 }, i0 = { width: "3rem", height: "1.75rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, d0 = { borderRadius: "50%", size: "1.25rem" }, c0 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, s0 = { root: i0, handle: d0, colorScheme: c0 }, l0 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, u0 = { light: { root: { background: "{surface.50}", color: "{content.color}" } }, dark: { root: { background: "{surface.800}", color: "{content.color}" } } }, f0 = { root: l0, colorScheme: u0 }, g0 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.625rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, p0 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, m0 = { root: g0, colorScheme: p0 }, h0 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, b0 = { padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, gap: "0.25rem" }, v0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, k0 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, y0 = { size: "2rem" }, w0 = { margin: "0 0 0.5rem 0" }, C0 = { root: h0, node: b0, nodeIcon: v0, nodeToggleButton: k0, loadingIcon: y0, filter: w0 }, x0 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, $0 = { width: "2.5rem", color: "{form.field.icon.color}" }, R0 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, B0 = { padding: "{list.padding}" }, I0 = { padding: "{list.option.padding}" }, _0 = { borderRadius: "{border.radius.sm}" }, S0 = { color: "{form.field.icon.color}" }, P0 = { root: x0, dropdown: $0, overlay: R0, tree: B0, emptyMessage: I0, chip: _0, clearIcon: S0 }, T0 = { transitionDuration: "{transition.duration}" }, A0 = { borderColor: "{treetable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" }, O0 = { selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, E0 = { fontWeight: "700" }, L0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{sr.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, N0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, W0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem" }, D0 = { fontWeight: "700" }, F0 = { borderColor: "{treetable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, U0 = { width: "0.5rem" }, z0 = { width: "1px", color: "{primary.color}" }, H0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, j0 = { size: "2rem" }, M0 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, q0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, V0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, G0 = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Y0 = { root: T0, header: A0, headerCell: O0, columnTitle: E0, row: L0, bodyCell: N0, footerCell: W0, columnFooter: D0, footer: F0, columnResizer: U0, resizeIndicator: z0, sortIcon: H0, loadingIcon: j0, nodeToggleButton: M0, paginatorTop: q0, paginatorBottom: V0, colorScheme: G0 }, Q0 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, X0 = { loader: Q0 }, K0 = Object.defineProperty, J0 = Object.defineProperties, Z0 = Object.getOwnPropertyDescriptors, jr = Object.getOwnPropertySymbols, og = Object.prototype.hasOwnProperty, rg = Object.prototype.propertyIsEnumerable, Mr = (o, r, n) => r in o ? K0(o, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[r] = n, qr, eg = (qr = ((o, r) => {
  for (var n in r || (r = {})) og.call(r, n) && Mr(o, n, r[n]);
  if (jr) for (var n of jr(r)) rg.call(r, n) && Mr(o, n, r[n]);
  return o;
})({}, ta), J0(qr, Z0({ components: { accordion: Tn, autocomplete: zn, avatar: Gn, badge: oa, blockui: aa, breadcrumb: sa, button: fa, datepicker: od, card: va, carousel: $a, cascadeselect: Ta, checkbox: Ea, chip: Ua, colorpicker: qa, confirmdialog: Ya, confirmpopup: Za, contextmenu: ii, dataview: Ei, datatable: Bi, dialog: id, divider: ud, dock: pd, drawer: yd, editor: Id, fieldset: Od, fileupload: Hd, iftalabel: gc, floatlabel: Gd, galleria: cc, iconfield: lc, image: vc, imagecompare: yc, inlinemessage: Rc, inplace: _c, inputchips: Ac, inputgroup: Lc, inputnumber: Fc, inputotp: Hc, inputtext: Mc, knob: Qc, listbox: ts, megamenu: ps, menu: ys, menubar: _s, message: Ds, metergroup: qs, multiselect: rl, orderlist: nl, organizationchart: sl, overlaybadge: ul, popover: Hl, paginator: hl, password: Nl, panel: $l, panelmenu: Pl, picklist: Fl, progressbar: Vl, progressspinner: Yl, radiobutton: Kl, rating: ou, ripple: eu, scrollpanel: iu, select: hu, selectbutton: ku, skeleton: Cu, slider: _u, speeddial: Pu, splitter: Wu, splitbutton: Au, stepper: Vu, steps: Ju, tabmenu: af, tabs: pf, tabview: wf, textarea: Tf, tieredmenu: Df, tag: Rf, terminal: Sf, timeline: Mf, togglebutton: a0, toggleswitch: s0, tree: C0, treeselect: P0, treetable: Y0, toast: o0, toolbar: f0, tooltip: m0, virtualscroller: X0 } })));
const tg = Rn(eg, {
  semantic: {
    primary: {
      50: "{green.50}",
      100: "{green.100}",
      200: "{green.200}",
      300: "{green.300}",
      400: "{green.400}",
      500: "{green.500}",
      600: "{green.600}",
      700: "{green.700}",
      800: "{green.800}",
      900: "{green.900}",
      950: "{green.950}"
    },
    colorScheme: {
      light: {
        surface: {
          0: "#fff",
          50: "{amber.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}"
        }
      },
      dark: {
        surface: {
          0: "{amber.50}",
          50: "{slate.50}",
          100: "{slate.50}",
          200: "{slate.100}",
          300: "{slate.200}",
          400: "{slate.300}",
          500: "{slate.400}",
          600: "{slate.500}",
          700: "{slate.600}",
          800: "{slate.700}",
          900: "{slate.800}",
          950: "{slate.950}"
        }
      }
    }
  },
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: "#fff"
          }
        },
        dark: {
          root: {
            background: "{surface.900}"
          }
        }
      }
    }
  }
});
function ig(o) {
  o.use($n, {
    theme: {
      preset: tg,
      options: {
        darkModeSelector: ".dark"
      }
    }
  });
}
const dg = (o) => {
  Fe.init({
    appInfo: {
      appName: o.appInfo.appName,
      apiDomain: o.appInfo.apiDomain,
      apiBasePath: o.appInfo.apiBasePath || "/auth"
    },
    recipeList: [qo.init(), Ve.init({}), Je.init()]
  });
}, cg = {
  useUserStore: Yr
}, sg = {
  routes: pn,
  setupAuthGuard: mn
};
export {
  sg as baseRouting,
  dg as initializeSuperTokens,
  ig as setupPrimeVue,
  cg as stores
};
