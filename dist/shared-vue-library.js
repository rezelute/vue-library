import { hasInjectionContext as In, inject as En, getCurrentInstance as _n, ref as tt, reactive as Cn, markRaw as je, effectScope as Dn, isRef as Ge, isReactive as ht, toRef as st, toRaw as An, nextTick as bt, computed as gt, getCurrentScope as On, onScopeDispose as Mn, watch as Pn, toRefs as kt, defineComponent as vn, createElementBlock as mn, openBlock as pn, toDisplayString as Nn, unref as xn } from "vue";
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Xe;
const nt = (n) => Xe = n, Hn = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Ce(n) {
  return n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]" && typeof n.toJSON != "function";
}
var We;
(function(n) {
  n.direct = "direct", n.patchObject = "patch object", n.patchFunction = "patch function";
})(We || (We = {}));
const Be = typeof window < "u";
function wn(n, b) {
  for (const s in b) {
    const e = b[s];
    if (!(s in n))
      continue;
    const i = n[s];
    Ce(i) && Ce(e) && !Ge(e) && !ht(e) ? n[s] = wn(i, e) : n[s] = e;
  }
  return n;
}
const yn = () => {
};
function Rt(n, b, s, e = yn) {
  n.push(b);
  const i = () => {
    const h = n.indexOf(b);
    h > -1 && (n.splice(h, 1), e());
  };
  return !s && On() && Mn(i), i;
}
function Ae(n, ...b) {
  n.slice().forEach((s) => {
    s(...b);
  });
}
const Fn = (n) => n(), St = Symbol(), ot = Symbol();
function dt(n, b) {
  n instanceof Map && b instanceof Map ? b.forEach((s, e) => n.set(e, s)) : n instanceof Set && b instanceof Set && b.forEach(n.add, n);
  for (const s in b) {
    if (!b.hasOwnProperty(s))
      continue;
    const e = b[s], i = n[s];
    Ce(i) && Ce(e) && n.hasOwnProperty(s) && !Ge(e) && !ht(e) ? n[s] = dt(i, e) : n[s] = e;
  }
  return n;
}
const Un = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function qn(n) {
  return !Ce(n) || !n.hasOwnProperty(Un);
}
const { assign: re } = Object;
function Tt(n) {
  return !!(Ge(n) && n.effect);
}
function It(n, b, s, e) {
  const { state: i, actions: h, getters: r } = b, m = s.state.value[n];
  let w;
  function o() {
    !m && (process.env.NODE_ENV === "production" || !e) && (s.state.value[n] = i ? i() : {});
    const y = process.env.NODE_ENV !== "production" && e ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      kt(tt(i ? i() : {}).value)
    ) : kt(s.state.value[n]);
    return re(y, h, Object.keys(r || {}).reduce((T, l) => (process.env.NODE_ENV !== "production" && l in y && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${l}" in store "${n}".`), T[l] = je(gt(() => {
      nt(s);
      const t = s._s.get(n);
      return r[l].call(t, t);
    })), T), {}));
  }
  return w = ft(n, o, b, s, e, !0), w;
}
function ft(n, b, s = {}, e, i, h) {
  let r;
  const m = re({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !e._e.active)
    throw new Error("Pinia destroyed");
  const w = { deep: !0 };
  process.env.NODE_ENV !== "production" && (w.onTrigger = (E) => {
    o ? t = E : o == !1 && !S._hotUpdating && (Array.isArray(t) ? t.push(E) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let o, y, T = [], l = [], t;
  const u = e.state.value[n];
  !h && !u && (process.env.NODE_ENV === "production" || !i) && (e.state.value[n] = {});
  const g = tt({});
  let v;
  function d(E) {
    let I;
    o = y = !1, process.env.NODE_ENV !== "production" && (t = []), typeof E == "function" ? (E(e.state.value[n]), I = {
      type: We.patchFunction,
      storeId: n,
      events: t
    }) : (dt(e.state.value[n], E), I = {
      type: We.patchObject,
      payload: E,
      storeId: n,
      events: t
    });
    const O = v = Symbol();
    bt().then(() => {
      v === O && (o = !0);
    }), y = !0, Ae(T, I, e.state.value[n]);
  }
  const f = h ? function() {
    const { state: I } = s, O = I ? I() : {};
    this.$patch((x) => {
      re(x, O);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${n}" is built using the setup syntax and does not implement $reset().`);
    } : yn
  );
  function a() {
    r.stop(), T = [], l = [], e._s.delete(n);
  }
  const c = (E, I = "") => {
    if (St in E)
      return E[ot] = I, E;
    const O = function() {
      nt(e);
      const x = Array.from(arguments), Q = [], ee = [];
      function ie(P) {
        Q.push(P);
      }
      function ne(P) {
        ee.push(P);
      }
      Ae(l, {
        args: x,
        name: O[ot],
        store: S,
        after: ie,
        onError: ne
      });
      let F;
      try {
        F = E.apply(this && this.$id === n ? this : S, x);
      } catch (P) {
        throw Ae(ee, P), P;
      }
      return F instanceof Promise ? F.then((P) => (Ae(Q, P), P)).catch((P) => (Ae(ee, P), Promise.reject(P))) : (Ae(Q, F), F);
    };
    return O[St] = !0, O[ot] = I, O;
  }, p = /* @__PURE__ */ je({
    actions: {},
    getters: {},
    state: [],
    hotState: g
  }), R = {
    _p: e,
    // _s: scope,
    $id: n,
    $onAction: Rt.bind(null, l),
    $patch: d,
    $reset: f,
    $subscribe(E, I = {}) {
      const O = Rt(T, E, I.detached, () => x()), x = r.run(() => Pn(() => e.state.value[n], (Q) => {
        (I.flush === "sync" ? y : o) && E({
          storeId: n,
          type: We.direct,
          events: t
        }, Q);
      }, re({}, w, I)));
      return O;
    },
    $dispose: a
  }, S = Cn(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Be ? re(
    {
      _hmrPayload: p,
      _customProperties: je(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    R
    // must be added later
    // setupStore
  ) : R);
  e._s.set(n, S);
  const A = (e._a && e._a.runWithContext || Fn)(() => e._e.run(() => (r = Dn()).run(() => b({ action: c }))));
  for (const E in A) {
    const I = A[E];
    if (Ge(I) && !Tt(I) || ht(I))
      process.env.NODE_ENV !== "production" && i ? g.value[E] = st(A, E) : h || (u && qn(I) && (Ge(I) ? I.value = u[E] : dt(I, u[E])), e.state.value[n][E] = I), process.env.NODE_ENV !== "production" && p.state.push(E);
    else if (typeof I == "function") {
      const O = process.env.NODE_ENV !== "production" && i ? I : c(I, E);
      A[E] = O, process.env.NODE_ENV !== "production" && (p.actions[E] = I), m.actions[E] = I;
    } else process.env.NODE_ENV !== "production" && Tt(I) && (p.getters[E] = h ? (
      // @ts-expect-error
      s.getters[E]
    ) : I, Be && (A._getters || // @ts-expect-error: same
    (A._getters = je([]))).push(E));
  }
  if (re(S, A), re(An(S), A), Object.defineProperty(S, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? g.value : e.state.value[n],
    set: (E) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      d((I) => {
        re(I, E);
      });
    }
  }), process.env.NODE_ENV !== "production" && (S._hotUpdate = je((E) => {
    S._hotUpdating = !0, E._hmrPayload.state.forEach((I) => {
      if (I in S.$state) {
        const O = E.$state[I], x = S.$state[I];
        typeof O == "object" && Ce(O) && Ce(x) ? wn(O, x) : E.$state[I] = x;
      }
      S[I] = st(E.$state, I);
    }), Object.keys(S.$state).forEach((I) => {
      I in E.$state || delete S[I];
    }), o = !1, y = !1, e.state.value[n] = st(E._hmrPayload, "hotState"), y = !0, bt().then(() => {
      o = !0;
    });
    for (const I in E._hmrPayload.actions) {
      const O = E[I];
      S[I] = //
      c(O, I);
    }
    for (const I in E._hmrPayload.getters) {
      const O = E._hmrPayload.getters[I], x = h ? (
        // special handling of options api
        gt(() => (nt(e), O.call(S, S)))
      ) : O;
      S[I] = //
      x;
    }
    Object.keys(S._hmrPayload.getters).forEach((I) => {
      I in E._hmrPayload.getters || delete S[I];
    }), Object.keys(S._hmrPayload.actions).forEach((I) => {
      I in E._hmrPayload.actions || delete S[I];
    }), S._hmrPayload = E._hmrPayload, S._getters = E._getters, S._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Be) {
    const E = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((I) => {
      Object.defineProperty(S, I, re({ value: S[I] }, E));
    });
  }
  return e._p.forEach((E) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Be) {
      const I = r.run(() => E({
        store: S,
        app: e._a,
        pinia: e,
        options: m
      }));
      Object.keys(I || {}).forEach((O) => S._customProperties.add(O)), re(S, I);
    } else
      re(S, r.run(() => E({
        store: S,
        app: e._a,
        pinia: e,
        options: m
      })));
  }), process.env.NODE_ENV !== "production" && S.$state && typeof S.$state == "object" && typeof S.$state.constructor == "function" && !S.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`), u && h && s.hydrate && s.hydrate(S.$state, u), o = !0, y = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ln(n, b, s) {
  let e;
  const i = typeof b == "function";
  e = i ? s : b;
  function h(r, m) {
    const w = In();
    if (r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Xe && Xe._testing ? null : r) || (w ? En(Hn, null) : null), r && nt(r), process.env.NODE_ENV !== "production" && !Xe)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    r = Xe, r._s.has(n) || (i ? ft(n, b, e, r) : It(n, e, r), process.env.NODE_ENV !== "production" && (h._pinia = r));
    const o = r._s.get(n);
    if (process.env.NODE_ENV !== "production" && m) {
      const y = "__hot:" + n, T = i ? ft(y, b, e, r, !0) : It(y, re({}, e), r, !0);
      m._hotUpdate(T), delete r.state.value[y], r._s.delete(y);
    }
    if (process.env.NODE_ENV !== "production" && Be) {
      const y = _n();
      if (y && y.proxy && // avoid adding stores that are just built for hot module replacement
      !m) {
        const T = y.proxy, l = "_pStores" in T ? T._pStores : T._pStores = {};
        l[n] = o;
      }
    }
    return o;
  }
  return h.$id = n, h;
}
var Vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var it = {}, ke = {}, G = {}, at = {}, ut = {}, Oe = {}, de = {}, Et;
function Xn() {
  if (Et) return de;
  Et = 1;
  var n = de && de.__awaiter || function(h, r, m, w) {
    function o(y) {
      return y instanceof m ? y : new m(function(T) {
        T(y);
      });
    }
    return new (m || (m = Promise))(function(y, T) {
      function l(g) {
        try {
          u(w.next(g));
        } catch (v) {
          T(v);
        }
      }
      function t(g) {
        try {
          u(w.throw(g));
        } catch (v) {
          T(v);
        }
      }
      function u(g) {
        g.done ? y(g.value) : o(g.value).then(l, t);
      }
      u((w = w.apply(h, r || [])).next());
    });
  }, b = de && de.__generator || function(h, r) {
    var m = {
      label: 0,
      sent: function() {
        if (y[0] & 1) throw y[1];
        return y[1];
      },
      trys: [],
      ops: []
    }, w, o, y, T;
    return T = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
      return this;
    }), T;
    function l(u) {
      return function(g) {
        return t([u, g]);
      };
    }
    function t(u) {
      if (w) throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (w = 1, o && (y = u[0] & 2 ? o.return : u[0] ? o.throw || ((y = o.return) && y.call(o), 0) : o.next) && !(y = y.call(o, u[1])).done)
            return y;
          switch (o = 0, y && (u = [u[0] & 2, y.value]), u[0]) {
            case 0:
            case 1:
              y = u;
              break;
            case 4:
              return m.label++, { value: u[1], done: !1 };
            case 5:
              m.label++, o = u[1], u = [0];
              continue;
            case 7:
              u = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (y = m.trys, !(y = y.length > 0 && y[y.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                m = 0;
                continue;
              }
              if (u[0] === 3 && (!y || u[1] > y[0] && u[1] < y[3])) {
                m.label = u[1];
                break;
              }
              if (u[0] === 6 && m.label < y[1]) {
                m.label = y[1], y = u;
                break;
              }
              if (y && m.label < y[2]) {
                m.label = y[2], m.ops.push(u);
                break;
              }
              y[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          u = r.call(h, m);
        } catch (g) {
          u = [6, g], o = 0;
        } finally {
          w = y = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.defaultWindowHandlerImplementation = void 0;
  function s() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var e = {
    key: function(h) {
      return n(this, void 0, void 0, function() {
        return b(this, function(r) {
          return [2, s().localStorage.key(h)];
        });
      });
    },
    clear: function() {
      return n(this, void 0, void 0, function() {
        return b(this, function(h) {
          return [2, s().localStorage.clear()];
        });
      });
    },
    getItem: function(h) {
      return n(this, void 0, void 0, function() {
        return b(this, function(r) {
          return [2, s().localStorage.getItem(h)];
        });
      });
    },
    removeItem: function(h) {
      return n(this, void 0, void 0, function() {
        return b(this, function(r) {
          return [2, s().localStorage.removeItem(h)];
        });
      });
    },
    setItem: function(h, r) {
      return n(this, void 0, void 0, function() {
        return b(this, function(m) {
          return [2, s().localStorage.setItem(h, r)];
        });
      });
    },
    keySync: function(h) {
      return s().localStorage.key(h);
    },
    clearSync: function() {
      return s().localStorage.clear();
    },
    getItemSync: function(h) {
      return s().localStorage.getItem(h);
    },
    removeItemSync: function(h) {
      return s().localStorage.removeItem(h);
    },
    setItemSync: function(h, r) {
      return s().localStorage.setItem(h, r);
    }
  }, i = {
    key: function(h) {
      return n(this, void 0, void 0, function() {
        return b(this, function(r) {
          return [2, s().sessionStorage.key(h)];
        });
      });
    },
    clear: function() {
      return n(this, void 0, void 0, function() {
        return b(this, function(h) {
          return [2, s().sessionStorage.clear()];
        });
      });
    },
    getItem: function(h) {
      return n(this, void 0, void 0, function() {
        return b(this, function(r) {
          return [2, s().sessionStorage.getItem(h)];
        });
      });
    },
    removeItem: function(h) {
      return n(this, void 0, void 0, function() {
        return b(this, function(r) {
          return [2, s().sessionStorage.removeItem(h)];
        });
      });
    },
    setItem: function(h, r) {
      return n(this, void 0, void 0, function() {
        return b(this, function(m) {
          return [2, s().sessionStorage.setItem(h, r)];
        });
      });
    },
    keySync: function(h) {
      return s().sessionStorage.key(h);
    },
    clearSync: function() {
      return s().sessionStorage.clear();
    },
    getItemSync: function(h) {
      return s().sessionStorage.getItem(h);
    },
    removeItemSync: function(h) {
      return s().sessionStorage.removeItem(h);
    },
    setItemSync: function(h, r) {
      return s().sessionStorage.setItem(h, r);
    }
  };
  return de.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(h, r, m) {
        return s().history.replaceState(h, r, m);
      },
      getState: function() {
        return s().history.state;
      }
    },
    location: {
      getHref: function() {
        return s().location.href;
      },
      setHref: function(h) {
        s().location.href = h;
      },
      getSearch: function() {
        return s().location.search;
      },
      getHash: function() {
        return s().location.hash;
      },
      getPathName: function() {
        return s().location.pathname;
      },
      assign: function(h) {
        s().location.assign(h);
      },
      getHostName: function() {
        return s().location.hostname;
      },
      getHost: function() {
        return s().location.host;
      },
      getOrigin: function() {
        return s().location.origin;
      }
    },
    getDocument: function() {
      return s().document;
    },
    getWindowUnsafe: function() {
      return s().window;
    },
    localStorage: e,
    sessionStorage: i
  }, de;
}
var _t;
function be() {
  if (_t) return Oe;
  _t = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.WindowHandlerReference = void 0;
  var n = Xn(), b = (
    /** @class */
    function() {
      function s(e) {
        var i = function(h) {
          return h;
        };
        e !== void 0 && (i = e), this.windowHandler = i(n.defaultWindowHandlerImplementation);
      }
      return s.init = function(e) {
        s.instance === void 0 && (s.instance = new s(e));
      }, s.getReferenceOrThrow = function() {
        if (s.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return s.instance;
      }, s;
    }()
  );
  return Oe.WindowHandlerReference = b, Oe.default = b, Oe;
}
var Ct;
function Bn() {
  return Ct || (Ct = 1, function(n) {
    function b(s) {
      for (var e in s) n.hasOwnProperty(e) || (n[e] = s[e]);
    }
    n.__esModule = !0, b(be());
  }(ut)), ut;
}
var Dt;
function Wn() {
  return Dt || (Dt = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), n.WindowHandlerReference = void 0;
    var b = Bn();
    Object.defineProperty(n, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return b.WindowHandlerReference;
      }
    });
  }(at)), at;
}
var Re = {}, At;
function Gn() {
  return At || (At = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.SSR_ERROR = Re.DEFAULT_API_BASE_PATH = void 0, Re.DEFAULT_API_BASE_PATH = "/auth", Re.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), Re;
}
var Ye = {}, Ot;
function $n() {
  if (Ot) return Ye;
  Ot = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  var n = (
    /** @class */
    /* @__PURE__ */ function() {
      function s(e) {
        var i = this;
        this.getAsStringDangerous = function() {
          return i.value;
        }, this.value = b(e);
      }
      return s;
    }()
  );
  Ye.default = n;
  function b(s, e) {
    e === void 0 && (e = !1);
    function i(r) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        r
      );
    }
    s = s.trim();
    try {
      if (!s.startsWith("http://") && !s.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var h = new URL(s);
      return e ? h.hostname.startsWith("localhost") || i(h.hostname) ? s = "http://" + h.host : s = "https://" + h.host : s = h.protocol + "//" + h.host, s;
    } catch {
    }
    if (s.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (s.indexOf(".") === 0 && (s = s.substr(1)), (s.indexOf(".") !== -1 || s.startsWith("localhost")) && !s.startsWith("http://") && !s.startsWith("https://")) {
      s = "https://" + s;
      try {
        return new URL(s), b(s, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Ye;
}
var Qe = {}, Mt;
function zn() {
  if (Mt) return Qe;
  Mt = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  var n = (
    /** @class */
    /* @__PURE__ */ function() {
      function e(i) {
        var h = this;
        this.startsWith = function(r) {
          return h.value.startsWith(r.value);
        }, this.appendPath = function(r) {
          return new e(h.value + r.value);
        }, this.getAsStringDangerous = function() {
          return h.value;
        }, this.value = b(i);
      }
      return e;
    }()
  );
  Qe.default = n;
  function b(e) {
    e = e.trim();
    try {
      if (!e.startsWith("http://") && !e.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var i = new URL(e);
      return e = i.pathname, e.charAt(e.length - 1) === "/" ? e.substr(0, e.length - 1) : e;
    } catch {
    }
    if ((s(e) || e.startsWith("localhost")) && !e.startsWith("http://") && !e.startsWith("https://"))
      return e = "http://" + e, b(e);
    e.charAt(0) !== "/" && (e = "/" + e);
    try {
      return new URL("http://example.com" + e), b("http://example.com" + e);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function s(e) {
    if (e.indexOf(".") === -1 || e.startsWith("/"))
      return !1;
    try {
      var i = new URL(e);
      return i.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var i = new URL("http://" + e);
      return i.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Qe;
}
var ct = {}, Ue = {}, Y = {}, Me = {}, Pt;
function Jn() {
  if (Pt) return Me;
  Pt = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.isAnIpAddress = void 0;
  function n(e) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      e
    );
  }
  Me.isAnIpAddress = n;
  var b = (
    /** @class */
    /* @__PURE__ */ function() {
      function e(i) {
        var h = this;
        this.getAsStringDangerous = function() {
          return h.value;
        }, this.value = s(i);
      }
      return e;
    }()
  );
  Me.default = b;
  function s(e, i) {
    i === void 0 && (i = !1), e = e.trim();
    try {
      if (!e.startsWith("http://") && !e.startsWith("https://"))
        throw new Error("converting to proper URL");
      var h = new URL(e);
      return i ? h.hostname.startsWith("localhost") || n(h.hostname) ? e = "http://" + h.host : e = "https://" + h.host : e = h.protocol + "//" + h.host, e;
    } catch {
    }
    if (e.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (e.indexOf(".") === 0 && (e = e.substr(1)), (e.indexOf(".") !== -1 || e.startsWith("localhost")) && !e.startsWith("http://") && !e.startsWith("https://")) {
      e = "https://" + e;
      try {
        return new URL(e), s(e, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Me;
}
var Ke = {}, Nt;
function Yn() {
  if (Nt) return Ke;
  Nt = 1, Object.defineProperty(Ke, "__esModule", { value: !0 });
  var n = (
    /** @class */
    /* @__PURE__ */ function() {
      function e(i) {
        var h = this;
        this.startsWith = function(r) {
          return h.value.startsWith(r.value);
        }, this.appendPath = function(r) {
          return new e(h.value + r.value);
        }, this.getAsStringDangerous = function() {
          return h.value;
        }, this.value = b(i);
      }
      return e;
    }()
  );
  Ke.default = n;
  function b(e) {
    e = e.trim();
    try {
      if (!e.startsWith("http://") && !e.startsWith("https://"))
        throw new Error("converting to proper URL");
      var i = new URL(e);
      return e = i.pathname, e.charAt(e.length - 1) === "/" ? e.substr(0, e.length - 1) : e;
    } catch {
    }
    if ((s(e) || e.startsWith("localhost")) && !e.startsWith("http://") && !e.startsWith("https://"))
      return e = "http://" + e, b(e);
    e.charAt(0) !== "/" && (e = "/" + e);
    try {
      return new URL("http://example.com" + e), b("http://example.com" + e);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function s(e) {
    if (e.indexOf(".") === -1 || e.startsWith("/"))
      return !1;
    try {
      var i = new URL(e);
      return i.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var i = new URL("http://" + e);
      return i.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Ke;
}
var xt;
function vt() {
  if (xt) return Y;
  xt = 1;
  var n = Y && Y.__assign || function() {
    return n = Object.assign || function(l) {
      for (var t, u = 1, g = arguments.length; u < g; u++) {
        t = arguments[u];
        for (var v in t) Object.prototype.hasOwnProperty.call(t, v) && (l[v] = t[v]);
      }
      return l;
    }, n.apply(this, arguments);
  }, b = Y && Y.__awaiter || function(l, t, u, g) {
    function v(d) {
      return d instanceof u ? d : new u(function(f) {
        f(d);
      });
    }
    return new (u || (u = Promise))(function(d, f) {
      function a(R) {
        try {
          p(g.next(R));
        } catch (S) {
          f(S);
        }
      }
      function c(R) {
        try {
          p(g.throw(R));
        } catch (S) {
          f(S);
        }
      }
      function p(R) {
        R.done ? d(R.value) : v(R.value).then(a, c);
      }
      p((g = g.apply(l, t || [])).next());
    });
  }, s = Y && Y.__generator || function(l, t) {
    var u = {
      label: 0,
      sent: function() {
        if (d[0] & 1) throw d[1];
        return d[1];
      },
      trys: [],
      ops: []
    }, g, v, d, f;
    return f = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function a(p) {
      return function(R) {
        return c([p, R]);
      };
    }
    function c(p) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (g = 1, v && (d = p[0] & 2 ? v.return : p[0] ? v.throw || ((d = v.return) && d.call(v), 0) : v.next) && !(d = d.call(v, p[1])).done)
            return d;
          switch (v = 0, d && (p = [p[0] & 2, d.value]), p[0]) {
            case 0:
            case 1:
              d = p;
              break;
            case 4:
              return u.label++, { value: p[1], done: !1 };
            case 5:
              u.label++, v = p[1], p = [0];
              continue;
            case 7:
              p = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (d = u.trys, !(d = d.length > 0 && d[d.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                u = 0;
                continue;
              }
              if (p[0] === 3 && (!d || p[1] > d[0] && p[1] < d[3])) {
                u.label = p[1];
                break;
              }
              if (p[0] === 6 && u.label < d[1]) {
                u.label = d[1], d = p;
                break;
              }
              if (d && u.label < d[2]) {
                u.label = d[2], u.ops.push(p);
                break;
              }
              d[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          p = t.call(l, u);
        } catch (R) {
          p = [6, R], v = 0;
        } finally {
          g = d = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Y, "__esModule", { value: !0 }), Y.matchesDomainOrSubdomain = Y.getNormalisedUserContext = Y.validateAndNormaliseInputOrThrowError = Y.normaliseSessionScopeOrThrowError = Y.normaliseURLPathOrThrowError = Y.normaliseURLDomainOrThrowError = void 0;
  var e = Jn(), i = Yn(), h = be();
  function r(l) {
    var t = new e.default(l).getAsStringDangerous();
    return t;
  }
  Y.normaliseURLDomainOrThrowError = r;
  function m(l) {
    return new i.default(l).getAsStringDangerous();
  }
  Y.normaliseURLPathOrThrowError = m;
  function w(l) {
    function t(g) {
      g = g.trim().toLowerCase(), g.startsWith(".") && (g = g.substr(1)), !g.startsWith("http://") && !g.startsWith("https://") && (g = "http://" + g);
      try {
        var v = new URL(g);
        return g = v.hostname, g;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var u = t(l);
    return u === "localhost" || (0, e.isAnIpAddress)(u) ? u : l.startsWith(".") ? "." + u : u;
  }
  Y.normaliseSessionScopeOrThrowError = w;
  function o(l) {
    var t = this, u = r(l.apiDomain), g = m("/auth");
    l.apiBasePath !== void 0 && (g = m(l.apiBasePath));
    var v = h.default.getReferenceOrThrow().windowHandler.location.getHostName(), d = w(
      l !== void 0 && l.sessionTokenFrontendDomain !== void 0 ? l.sessionTokenFrontendDomain : v
    ), f = 401;
    l.sessionExpiredStatusCode !== void 0 && (f = l.sessionExpiredStatusCode);
    var a = 403;
    if (l.invalidClaimStatusCode !== void 0 && (a = l.invalidClaimStatusCode), f === a)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var c = !0;
    l.autoAddCredentials !== void 0 && (c = l.autoAddCredentials);
    var p = !1;
    l.isInIframe !== void 0 && (p = l.isInIframe);
    var R = void 0;
    l.sessionTokenBackendDomain !== void 0 && (R = w(l.sessionTokenBackendDomain));
    var S = 10;
    if (l.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (l.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      S = l.maxRetryAttemptsForSessionRefresh;
    }
    var D = function(O) {
      return b(t, void 0, void 0, function() {
        return s(this, function(x) {
          return [2, { url: O.url, requestInit: O.requestInit }];
        });
      });
    };
    l.preAPIHook !== void 0 && (D = l.preAPIHook);
    var A = function() {
      return b(t, void 0, void 0, function() {
        return s(this, function(O) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    l.postAPIHook !== void 0 && (A = l.postAPIHook);
    var E = function() {
    };
    l.onHandleEvent !== void 0 && (E = l.onHandleEvent);
    var I = n(
      {
        functions: function(O) {
          return O;
        }
      },
      l.override
    );
    return {
      apiDomain: u,
      apiBasePath: g,
      sessionTokenFrontendDomain: d,
      sessionExpiredStatusCode: f,
      invalidClaimStatusCode: a,
      autoAddCredentials: c,
      isInIframe: p,
      tokenTransferMethod: l.tokenTransferMethod !== void 0 ? l.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: R,
      maxRetryAttemptsForSessionRefresh: S,
      preAPIHook: D,
      postAPIHook: A,
      onHandleEvent: E,
      override: I
    };
  }
  Y.validateAndNormaliseInputOrThrowError = o;
  function y(l) {
    return l === void 0 ? {} : l;
  }
  Y.getNormalisedUserContext = y;
  function T(l, t) {
    for (var u = l.split("."), g = 0; g < u.length; g++) {
      var v = u.slice(g).join(".");
      if (v === t || ".".concat(v) === t)
        return !0;
    }
    return !1;
  }
  return Y.matchesDomainOrSubdomain = T, Y;
}
var fe = {}, Se = {}, Ht;
function mt() {
  return Ht || (Ht = 1, function(n) {
    var b = Se && Se.__awaiter || function(i, h, r, m) {
      function w(o) {
        return o instanceof r ? o : new r(function(y) {
          y(o);
        });
      }
      return new (r || (r = Promise))(function(o, y) {
        function T(u) {
          try {
            t(m.next(u));
          } catch (g) {
            y(g);
          }
        }
        function l(u) {
          try {
            t(m.throw(u));
          } catch (g) {
            y(g);
          }
        }
        function t(u) {
          u.done ? o(u.value) : w(u.value).then(T, l);
        }
        t((m = m.apply(i, h || [])).next());
      });
    }, s = Se && Se.__generator || function(i, h) {
      var r = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      }, m, w, o, y;
      return y = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
        return this;
      }), y;
      function T(t) {
        return function(u) {
          return l([t, u]);
        };
      }
      function l(t) {
        if (m) throw new TypeError("Generator is already executing.");
        for (; r; )
          try {
            if (m = 1, w && (o = t[0] & 2 ? w.return : t[0] ? w.throw || ((o = w.return) && o.call(w), 0) : w.next) && !(o = o.call(w, t[1])).done)
              return o;
            switch (w = 0, o && (t = [t[0] & 2, o.value]), t[0]) {
              case 0:
              case 1:
                o = t;
                break;
              case 4:
                return r.label++, { value: t[1], done: !1 };
              case 5:
                r.label++, w = t[1], t = [0];
                continue;
              case 7:
                t = r.ops.pop(), r.trys.pop();
                continue;
              default:
                if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (t[0] === 6 || t[0] === 2)) {
                  r = 0;
                  continue;
                }
                if (t[0] === 3 && (!o || t[1] > o[0] && t[1] < o[3])) {
                  r.label = t[1];
                  break;
                }
                if (t[0] === 6 && r.label < o[1]) {
                  r.label = o[1], o = t;
                  break;
                }
                if (o && r.label < o[2]) {
                  r.label = o[2], r.ops.push(t);
                  break;
                }
                o[2] && r.ops.pop(), r.trys.pop();
                continue;
            }
            t = h.call(i, r);
          } catch (u) {
            t = [6, u], w = 0;
          } finally {
            m = o = 0;
          }
        if (t[0] & 5) throw t[1];
        return { value: t[0] ? t[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.ProcessState = n.PROCESS_STATE = void 0, function(i) {
      i[i.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", i[i.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(n.PROCESS_STATE || (n.PROCESS_STATE = {}));
    var e = (
      /** @class */
      function() {
        function i() {
          var h = this;
          this.history = [], this.addState = function(r) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && h.history.push(r);
            } catch {
            }
          }, this.getEventByLastEventByName = function(r) {
            for (var m = h.history.length - 1; m >= 0; m--)
              if (h.history[m] == r)
                return h.history[m];
          }, this.reset = function() {
            h.history = [];
          }, this.waitForEvent = function(r, m) {
            return m === void 0 && (m = 7e3), b(h, void 0, void 0, function() {
              var w, o = this;
              return s(this, function(y) {
                return w = Date.now(), [
                  2,
                  new Promise(function(T) {
                    var l = o;
                    function t() {
                      var u = l.getEventByLastEventByName(r);
                      u === void 0 ? Date.now() - w > m ? T(void 0) : setTimeout(t, 1e3) : T(u);
                    }
                    t();
                  })
                ];
              });
            });
          };
        }
        return i.getInstance = function() {
          return i.instance == null && (i.instance = new i()), i.instance;
        }, i;
      }()
    );
    n.ProcessState = e;
  }(Se)), Se;
}
var Te = {}, Ft;
function pt() {
  return Ft || (Ft = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.supported_fdi = Te.package_version = void 0, Te.package_version = "20.1.5", Te.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0"]), Te;
}
var Pe = {}, he = {}, Ut;
function Qn() {
  if (Ut) return he;
  Ut = 1;
  var n = he && he.__awaiter || function(e, i, h, r) {
    function m(w) {
      return w instanceof h ? w : new h(function(o) {
        o(w);
      });
    }
    return new (h || (h = Promise))(function(w, o) {
      function y(t) {
        try {
          l(r.next(t));
        } catch (u) {
          o(u);
        }
      }
      function T(t) {
        try {
          l(r.throw(t));
        } catch (u) {
          o(u);
        }
      }
      function l(t) {
        t.done ? w(t.value) : m(t.value).then(y, T);
      }
      l((r = r.apply(e, i || [])).next());
    });
  }, b = he && he.__generator || function(e, i) {
    var h = {
      label: 0,
      sent: function() {
        if (w[0] & 1) throw w[1];
        return w[1];
      },
      trys: [],
      ops: []
    }, r, m, w, o;
    return o = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function y(l) {
      return function(t) {
        return T([l, t]);
      };
    }
    function T(l) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (r = 1, m && (w = l[0] & 2 ? m.return : l[0] ? m.throw || ((w = m.return) && w.call(m), 0) : m.next) && !(w = w.call(m, l[1])).done)
            return w;
          switch (m = 0, w && (l = [l[0] & 2, w.value]), l[0]) {
            case 0:
            case 1:
              w = l;
              break;
            case 4:
              return h.label++, { value: l[1], done: !1 };
            case 5:
              h.label++, m = l[1], l = [0];
              continue;
            case 7:
              l = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (w = h.trys, !(w = w.length > 0 && w[w.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                h = 0;
                continue;
              }
              if (l[0] === 3 && (!w || l[1] > w[0] && l[1] < w[3])) {
                h.label = l[1];
                break;
              }
              if (l[0] === 6 && h.label < w[1]) {
                h.label = w[1], w = l;
                break;
              }
              if (w && h.label < w[2]) {
                h.label = w[2], h.ops.push(l);
                break;
              }
              w[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          l = i.call(e, h);
        } catch (t) {
          l = [6, t], m = 0;
        } finally {
          r = w = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(he, "__esModule", { value: !0 }), he.defaultCookieHandlerImplementation = void 0;
  var s = be();
  return he.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return n(this, void 0, void 0, function() {
        return b(this, function(e) {
          return [
            2,
            s.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(e) {
      return n(this, void 0, void 0, function() {
        return b(this, function(i) {
          return s.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = e, [
            2
            /*return*/
          ];
        });
      });
    }
  }, he;
}
var qt;
function bn() {
  if (qt) return Pe;
  qt = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.CookieHandlerReference = void 0;
  var n = Qn(), b = (
    /** @class */
    function() {
      function s(e) {
        var i = function(h) {
          return h;
        };
        e !== void 0 && (i = e), this.cookieHandler = i(n.defaultCookieHandlerImplementation);
      }
      return s.init = function(e) {
        s.instance === void 0 && (s.instance = new s(e));
      }, s.getReferenceOrThrow = function() {
        if (s.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return s.instance;
      }, s;
    }()
  );
  return Pe.CookieHandlerReference = b, Pe.default = b, Pe;
}
var Ne = {}, ge = {}, Ze = {}, Lt;
function Kn() {
  if (Lt) return Ze;
  Lt = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  var n = (
    /** @class */
    function() {
      function s() {
        var e = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(i, h) {
          var r = e.locked.get(i);
          r === void 0 ? h === void 0 ? e.locked.set(i, []) : e.locked.set(i, [h]) : h !== void 0 && (r.unshift(h), e.locked.set(i, r));
        }, this.isLocked = function(i) {
          return e.locked.has(i);
        }, this.lock = function(i) {
          return new Promise(function(h, r) {
            e.isLocked(i) ? e.addToLocked(i, h) : (e.addToLocked(i), h());
          });
        }, this.unlock = function(i) {
          var h = e.locked.get(i);
          if (h === void 0 || h.length === 0) {
            e.locked.delete(i);
            return;
          }
          var r = h.pop();
          e.locked.set(i, h), r !== void 0 && setTimeout(r, 0);
        };
      }
      return s.getInstance = function() {
        return s.instance === void 0 && (s.instance = new s()), s.instance;
      }, s;
    }()
  );
  function b() {
    return n.getInstance();
  }
  return Ze.default = b, Ze;
}
var Vt;
function Zn() {
  if (Vt) return ge;
  Vt = 1;
  var n = ge && ge.__awaiter || function(y, T, l, t) {
    return new (l || (l = Promise))(function(u, g) {
      function v(a) {
        try {
          f(t.next(a));
        } catch (c) {
          g(c);
        }
      }
      function d(a) {
        try {
          f(t.throw(a));
        } catch (c) {
          g(c);
        }
      }
      function f(a) {
        a.done ? u(a.value) : new l(function(c) {
          c(a.value);
        }).then(v, d);
      }
      f((t = t.apply(y, T || [])).next());
    });
  }, b = ge && ge.__generator || function(y, T) {
    var l = { label: 0, sent: function() {
      if (g[0] & 1) throw g[1];
      return g[1];
    }, trys: [], ops: [] }, t, u, g, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(a) {
      return function(c) {
        return f([a, c]);
      };
    }
    function f(a) {
      if (t) throw new TypeError("Generator is already executing.");
      for (; l; ) try {
        if (t = 1, u && (g = a[0] & 2 ? u.return : a[0] ? u.throw || ((g = u.return) && g.call(u), 0) : u.next) && !(g = g.call(u, a[1])).done) return g;
        switch (u = 0, g && (a = [a[0] & 2, g.value]), a[0]) {
          case 0:
          case 1:
            g = a;
            break;
          case 4:
            return l.label++, { value: a[1], done: !1 };
          case 5:
            l.label++, u = a[1], a = [0];
            continue;
          case 7:
            a = l.ops.pop(), l.trys.pop();
            continue;
          default:
            if (g = l.trys, !(g = g.length > 0 && g[g.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              l = 0;
              continue;
            }
            if (a[0] === 3 && (!g || a[1] > g[0] && a[1] < g[3])) {
              l.label = a[1];
              break;
            }
            if (a[0] === 6 && l.label < g[1]) {
              l.label = g[1], g = a;
              break;
            }
            if (g && l.label < g[2]) {
              l.label = g[2], l.ops.push(a);
              break;
            }
            g[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        a = T.call(y, l);
      } catch (c) {
        a = [6, c], u = 0;
      } finally {
        t = g = 0;
      }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  }, s = ge;
  Object.defineProperty(ge, "__esModule", { value: !0 });
  var e = Kn(), i = "browser-tabs-lock-key", h = {
    key: function(y) {
      return n(s, void 0, void 0, function() {
        return b(this, function(T) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(y) {
      return n(s, void 0, void 0, function() {
        return b(this, function(T) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return n(s, void 0, void 0, function() {
        return b(this, function(y) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(y) {
      return n(s, void 0, void 0, function() {
        return b(this, function(T) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(y, T) {
      return n(s, void 0, void 0, function() {
        return b(this, function(l) {
          throw new Error("Unsupported");
        });
      });
    },
    keySync: function(y) {
      return window.localStorage.key(y);
    },
    getItemSync: function(y) {
      return window.localStorage.getItem(y);
    },
    clearSync: function() {
      return window.localStorage.clear();
    },
    removeItemSync: function(y) {
      return window.localStorage.removeItem(y);
    },
    setItemSync: function(y, T) {
      return window.localStorage.setItem(y, T);
    }
  };
  function r(y) {
    return new Promise(function(T) {
      return setTimeout(T, y);
    });
  }
  function m(y) {
    for (var T = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", l = "", t = 0; t < y; t++) {
      var u = Math.floor(Math.random() * T.length);
      l += T[u];
    }
    return l;
  }
  function w() {
    return Date.now().toString() + m(15);
  }
  var o = (
    /** @class */
    function() {
      function y(T) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = w(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = T, y.waiters === void 0 && (y.waiters = []);
      }
      return y.prototype.acquireLock = function(T, l) {
        return l === void 0 && (l = 5e3), n(this, void 0, void 0, function() {
          var t, u, g, v, d, f, a, c;
          return b(this, function(p) {
            switch (p.label) {
              case 0:
                t = Date.now() + m(4), u = Date.now() + l, g = i + "-" + T, v = this.storageHandler === void 0 ? h : this.storageHandler, p.label = 1;
              case 1:
                return Date.now() < u ? [4, r(30)] : [3, 8];
              case 2:
                return p.sent(), d = v.getItemSync(g), d !== null ? [3, 5] : (f = this.id + "-" + T + "-" + t, [4, r(Math.floor(Math.random() * 25))]);
              case 3:
                return p.sent(), v.setItemSync(g, JSON.stringify({
                  id: this.id,
                  iat: t,
                  timeoutKey: f,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, r(30)];
              case 4:
                return p.sent(), a = v.getItemSync(g), a !== null && (c = JSON.parse(a), c.id === this.id && c.iat === t) ? (this.acquiredIatSet.add(t), this.refreshLockWhileAcquired(g, t), [2, !0]) : [3, 7];
              case 5:
                return y.lockCorrector(this.storageHandler === void 0 ? h : this.storageHandler), [4, this.waitForSomethingToChange(u)];
              case 6:
                p.sent(), p.label = 7;
              case 7:
                return t = Date.now() + m(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, y.prototype.refreshLockWhileAcquired = function(T, l) {
        return n(this, void 0, void 0, function() {
          var t = this;
          return b(this, function(u) {
            return setTimeout(function() {
              return n(t, void 0, void 0, function() {
                var g, v, d;
                return b(this, function(f) {
                  switch (f.label) {
                    case 0:
                      return [4, e.default().lock(l)];
                    case 1:
                      if (f.sent(), !this.acquiredIatSet.has(l))
                        return e.default().unlock(l), [
                          2
                          /*return*/
                        ];
                      if (g = this.storageHandler === void 0 ? h : this.storageHandler, v = g.getItemSync(T), v !== null)
                        d = JSON.parse(v), d.timeRefreshed = Date.now(), g.setItemSync(T, JSON.stringify(d)), e.default().unlock(l);
                      else
                        return e.default().unlock(l), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(T, l), [
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
      }, y.prototype.waitForSomethingToChange = function(T) {
        return n(this, void 0, void 0, function() {
          return b(this, function(l) {
            switch (l.label) {
              case 0:
                return [4, new Promise(function(t) {
                  var u = !1, g = Date.now(), v = 50, d = !1;
                  function f() {
                    if (d || (window.removeEventListener("storage", f), y.removeFromWaiting(f), clearTimeout(a), d = !0), !u) {
                      u = !0;
                      var c = v - (Date.now() - g);
                      c > 0 ? setTimeout(t, c) : t(null);
                    }
                  }
                  window.addEventListener("storage", f), y.addToWaiting(f);
                  var a = setTimeout(f, Math.max(0, T - Date.now()));
                })];
              case 1:
                return l.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, y.addToWaiting = function(T) {
        this.removeFromWaiting(T), y.waiters !== void 0 && y.waiters.push(T);
      }, y.removeFromWaiting = function(T) {
        y.waiters !== void 0 && (y.waiters = y.waiters.filter(function(l) {
          return l !== T;
        }));
      }, y.notifyWaiters = function() {
        if (y.waiters !== void 0) {
          var T = y.waiters.slice();
          T.forEach(function(l) {
            return l();
          });
        }
      }, y.prototype.releaseLock = function(T) {
        return n(this, void 0, void 0, function() {
          return b(this, function(l) {
            switch (l.label) {
              case 0:
                return [4, this.releaseLock__private__(T)];
              case 1:
                return [2, l.sent()];
            }
          });
        });
      }, y.prototype.releaseLock__private__ = function(T) {
        return n(this, void 0, void 0, function() {
          var l, t, u, g;
          return b(this, function(v) {
            switch (v.label) {
              case 0:
                return l = this.storageHandler === void 0 ? h : this.storageHandler, t = i + "-" + T, u = l.getItemSync(t), u === null ? [
                  2
                  /*return*/
                ] : (g = JSON.parse(u), g.id !== this.id ? [3, 2] : [4, e.default().lock(g.iat)]);
              case 1:
                v.sent(), this.acquiredIatSet.delete(g.iat), l.removeItemSync(t), e.default().unlock(g.iat), y.notifyWaiters(), v.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, y.lockCorrector = function(T) {
        for (var l = Date.now() - 5e3, t = T, u = [], g = 0; ; ) {
          var v = t.keySync(g);
          if (v === null)
            break;
          u.push(v), g++;
        }
        for (var d = !1, f = 0; f < u.length; f++) {
          var a = u[f];
          if (a.includes(i)) {
            var c = t.getItemSync(a);
            if (c !== null) {
              var p = JSON.parse(c);
              (p.timeRefreshed === void 0 && p.timeAcquired < l || p.timeRefreshed !== void 0 && p.timeRefreshed < l) && (t.removeItemSync(a), d = !0);
            }
          }
        }
        d && y.notifyWaiters();
      }, y.waiters = void 0, y;
    }()
  );
  return ge.default = o, ge;
}
var jt;
function wt() {
  if (jt) return Ne;
  jt = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.LockFactoryReference = void 0;
  var n = Zn(), b = function(e) {
    return function() {
      return Promise.resolve(new n.default(e));
    };
  }, s = (
    /** @class */
    function() {
      function e(i) {
        this.lockFactory = i;
      }
      return e.init = function(i, h) {
        this.instance === void 0 && (this.instance = new e(
          i ?? b(h)
        ));
      }, e.getReferenceOrThrow = function() {
        if (e.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return e.instance;
      }, e;
    }()
  );
  return Ne.LockFactoryReference = s, Ne.default = s, Ne;
}
var ve = {}, Xt;
function $e() {
  if (Xt) return ve;
  Xt = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.logDebugMessage = ve.disableLogging = ve.enableLogging = void 0;
  var n = pt(), b = "com.supertokens", s = !1;
  function e() {
    s = !0;
  }
  ve.enableLogging = e;
  function i() {
    s = !1;
  }
  ve.disableLogging = i;
  function h(r) {
    s && console.log(
      "".concat(b, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(r, '", supertokens-website-ver: "').concat(n.package_version, '"}')
    );
  }
  return ve.logDebugMessage = h, ve;
}
var xe = {}, qe = {}, Bt;
function er() {
  if (Bt) return qe;
  Bt = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.DateProvider = void 0;
  var n = be(), b = (
    /** @class */
    function() {
      function s() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return s.init = function() {
        if (s.instance === void 0) {
          s.instance = new s();
          var e = n.default.getReferenceOrThrow().windowHandler.localStorage, i = e.getItemSync(s.CLOCK_SKEW_KEY), h = i !== null ? parseInt(i, 10) : 0;
          s.instance.setClientClockSkewInMillis(h);
        }
      }, s.getReferenceOrThrow = function() {
        if (s.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return s.instance;
      }, s.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, s.prototype.setThresholdInSeconds = function(e) {
        this.thresholdInSeconds = e;
      }, s.prototype.setClientClockSkewInMillis = function(e) {
        this.clockSkewInMillis = Math.abs(e) >= this.thresholdInSeconds * 1e3 ? e : 0;
        var i = n.default.getReferenceOrThrow().windowHandler.localStorage;
        i.setItemSync(s.CLOCK_SKEW_KEY, String(e));
      }, s.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, s.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, s.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", s;
    }()
  );
  return qe.DateProvider = b, qe;
}
var Wt;
function ze() {
  if (Wt) return xe;
  Wt = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.DateProviderReference = void 0;
  var n = er(), b = (
    /** @class */
    function() {
      function s(e) {
        e !== void 0 ? this.dateProvider = e() : (n.DateProvider.init(), this.dateProvider = n.DateProvider.getReferenceOrThrow());
      }
      return s.init = function(e) {
        s.instance === void 0 && (s.instance = new s(e));
      }, s.getReferenceOrThrow = function() {
        if (s.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return s.instance;
      }, s;
    }()
  );
  return xe.DateProviderReference = b, xe.default = b, xe;
}
var Gt;
function Je() {
  return Gt || (Gt = 1, function(n) {
    var b = fe && fe.__assign || function() {
      return b = Object.assign || function(k) {
        for (var C, _ = 1, M = arguments.length; _ < M; _++) {
          C = arguments[_];
          for (var N in C) Object.prototype.hasOwnProperty.call(C, N) && (k[N] = C[N]);
        }
        return k;
      }, b.apply(this, arguments);
    }, s = fe && fe.__awaiter || function(k, C, _, M) {
      function N(U) {
        return U instanceof _ ? U : new _(function(j) {
          j(U);
        });
      }
      return new (_ || (_ = Promise))(function(U, j) {
        function H(z) {
          try {
            V(M.next(z));
          } catch (J) {
            j(J);
          }
        }
        function X(z) {
          try {
            V(M.throw(z));
          } catch (J) {
            j(J);
          }
        }
        function V(z) {
          z.done ? U(z.value) : N(z.value).then(H, X);
        }
        V((M = M.apply(k, C || [])).next());
      });
    }, e = fe && fe.__generator || function(k, C) {
      var _ = {
        label: 0,
        sent: function() {
          if (U[0] & 1) throw U[1];
          return U[1];
        },
        trys: [],
        ops: []
      }, M, N, U, j;
      return j = { next: H(0), throw: H(1), return: H(2) }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
        return this;
      }), j;
      function H(V) {
        return function(z) {
          return X([V, z]);
        };
      }
      function X(V) {
        if (M) throw new TypeError("Generator is already executing.");
        for (; _; )
          try {
            if (M = 1, N && (U = V[0] & 2 ? N.return : V[0] ? N.throw || ((U = N.return) && U.call(N), 0) : N.next) && !(U = U.call(N, V[1])).done)
              return U;
            switch (N = 0, U && (V = [V[0] & 2, U.value]), V[0]) {
              case 0:
              case 1:
                U = V;
                break;
              case 4:
                return _.label++, { value: V[1], done: !1 };
              case 5:
                _.label++, N = V[1], V = [0];
                continue;
              case 7:
                V = _.ops.pop(), _.trys.pop();
                continue;
              default:
                if (U = _.trys, !(U = U.length > 0 && U[U.length - 1]) && (V[0] === 6 || V[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (V[0] === 3 && (!U || V[1] > U[0] && V[1] < U[3])) {
                  _.label = V[1];
                  break;
                }
                if (V[0] === 6 && _.label < U[1]) {
                  _.label = U[1], U = V;
                  break;
                }
                if (U && _.label < U[2]) {
                  _.label = U[2], _.ops.push(V);
                  break;
                }
                U[2] && _.ops.pop(), _.trys.pop();
                continue;
            }
            V = C.call(k, _);
          } catch (z) {
            V = [6, z], N = 0;
          } finally {
            M = U = 0;
          }
        if (V[0] & 5) throw V[1];
        return { value: V[0] ? V[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.updateClockSkewUsingFrontToken = n.fireSessionUpdateEventsIfNecessary = n.setFrontToken = n.getFrontToken = n.setAntiCSRF = n.saveLastAccessTokenUpdate = n.getTokenForHeaderAuth = n.setToken = n.getStorageNameForToken = n.getLocalSessionState = n.onInvalidClaimResponse = n.onTokenUpdate = n.onUnauthorisedResponse = n.FrontToken = n.AntiCsrfToken = void 0;
    var i = mt(), h = pt(), r = bn(), m = be(), w = wt(), o = $e(), y = ze(), T = (
      /** @class */
      function() {
        function k() {
        }
        return k.getToken = function(C) {
          return s(this, void 0, void 0, function() {
            var _;
            return e(this, function(M) {
              switch (M.label) {
                case 0:
                  return (0, o.logDebugMessage)("AntiCsrfToken.getToken: called"), C === void 0 ? (k.tokenInfo = void 0, (0, o.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : k.tokenInfo !== void 0 ? [3, 2] : [4, ie()];
                case 1:
                  return _ = M.sent(), _ === null ? ((0, o.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (k.tokenInfo = {
                    antiCsrf: _,
                    associatedAccessTokenUpdate: C
                  }, [3, 4]);
                case 2:
                  return k.tokenInfo.associatedAccessTokenUpdate === C ? [3, 4] : (k.tokenInfo = void 0, [4, k.getToken(C)]);
                case 3:
                  return [2, M.sent()];
                case 4:
                  return (0, o.logDebugMessage)("AntiCsrfToken.getToken: returning: " + k.tokenInfo.antiCsrf), [2, k.tokenInfo.antiCsrf];
              }
            });
          });
        }, k.removeToken = function() {
          return s(this, void 0, void 0, function() {
            return e(this, function(C) {
              switch (C.label) {
                case 0:
                  return (0, o.logDebugMessage)("AntiCsrfToken.removeToken: called"), k.tokenInfo = void 0, [4, ne(void 0)];
                case 1:
                  return C.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.setItem = function(C, _) {
          return s(this, void 0, void 0, function() {
            return e(this, function(M) {
              switch (M.label) {
                case 0:
                  return C === void 0 ? (k.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, o.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, ne(_)]);
                case 1:
                  return M.sent(), k.tokenInfo = {
                    antiCsrf: _,
                    associatedAccessTokenUpdate: C
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
    n.AntiCsrfToken = T;
    var l = (
      /** @class */
      function() {
        function k() {
        }
        return k.getTokenInfo = function() {
          return s(this, void 0, void 0, function() {
            var C, _;
            return e(this, function(M) {
              switch (M.label) {
                case 0:
                  return (0, o.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, q()];
                case 1:
                  return C = M.sent(), C !== null ? [3, 5] : [4, R(!1)];
                case 2:
                  return M.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(N) {
                      k.waiters.push(N);
                    })
                  ];
                case 3:
                  return M.sent(), [2, k.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return _ = P(C), (0, o.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + _.ate), (0, o.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + _.uid), (0, o.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + _.up), [2, _];
              }
            });
          });
        }, k.removeToken = function() {
          return s(this, void 0, void 0, function() {
            return e(this, function(C) {
              switch (C.label) {
                case 0:
                  return (0, o.logDebugMessage)("FrontToken.removeToken: called"), [4, L(void 0)];
                case 1:
                  return C.sent(), [4, D("access", "")];
                case 2:
                  return C.sent(), [4, D("refresh", "")];
                case 3:
                  return C.sent(), [4, T.removeToken()];
                case 4:
                  return C.sent(), k.waiters.forEach(function(_) {
                    return _(void 0);
                  }), k.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.setItem = function(C) {
          return s(this, void 0, void 0, function() {
            return e(this, function(_) {
              switch (_.label) {
                case 0:
                  return [4, ee()];
                case 1:
                  return _.sent(), C === "remove" ? [2, k.removeToken()] : ((0, o.logDebugMessage)("FrontToken.setItem: called"), [4, L(C)]);
                case 2:
                  return _.sent(), k.waiters.forEach(function(M) {
                    return M(void 0);
                  }), k.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.doesTokenExists = function() {
          return s(this, void 0, void 0, function() {
            var C;
            return e(this, function(_) {
              switch (_.label) {
                case 0:
                  return [4, F()];
                case 1:
                  return C = _.sent(), [2, C !== null];
              }
            });
          });
        }, k.waiters = [], k;
      }()
    );
    n.FrontToken = l;
    var t = (
      /** @class */
      function() {
        function k() {
        }
        k.init = function(_, M) {
          (0, o.logDebugMessage)("init: called"), (0, o.logDebugMessage)("init: Input apiBasePath: " + _.apiBasePath), (0, o.logDebugMessage)("init: Input apiDomain: " + _.apiDomain), (0, o.logDebugMessage)("init: Input autoAddCredentials: " + _.autoAddCredentials), (0, o.logDebugMessage)("init: Input sessionTokenBackendDomain: " + _.sessionTokenBackendDomain), (0, o.logDebugMessage)("init: Input isInIframe: " + _.isInIframe), (0, o.logDebugMessage)("init: Input sessionExpiredStatusCode: " + _.sessionExpiredStatusCode), (0, o.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + _.sessionTokenFrontendDomain), (0, o.logDebugMessage)("init: Input tokenTransferMethod: " + _.tokenTransferMethod);
          var N = m.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          k.env = N === void 0 || N.fetch === void 0 ? Vn : N, k.refreshTokenUrl = _.apiDomain + _.apiBasePath + "/session/refresh", k.signOutUrl = _.apiDomain + _.apiBasePath + "/signout", k.rid = "session", k.config = _, k.env.__supertokensOriginalFetch === void 0 && ((0, o.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), k.env.__supertokensOriginalFetch = k.env.fetch.bind(k.env), k.env.__supertokensSessionRecipe = M, k.env.fetch = k.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: k.env.__supertokensOriginalFetch,
            userContext: {}
          }), k.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), k.recipeImpl = k.env.__supertokensSessionRecipe, k.initCalled = !0;
        };
        var C;
        return C = k, k.initCalled = !1, k.doRequest = function(_, M, N) {
          return s(void 0, void 0, void 0, function() {
            var U, j, H, X, V, z, J, ce, se, oe, le, W, ae, rt, De;
            return e(C, function(te) {
              switch (te.label) {
                case 0:
                  if (!k.initCalled)
                    throw Error("init function not called");
                  (0, o.logDebugMessage)("doRequest: start of fetch interception"), U = !1;
                  try {
                    j = void 0, typeof N == "string" ? j = N : typeof N == "object" && (typeof N.url == "string" ? j = N.url : typeof N.href == "string" && (j = N.href)), U = !k.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      j,
                      k.config.apiDomain,
                      k.config.sessionTokenBackendDomain
                    );
                  } catch (yt) {
                    if (yt.message === "Please provide a valid domain name")
                      (0, o.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), U = !k.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        m.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        k.config.apiDomain,
                        k.config.sessionTokenBackendDomain
                      );
                    else
                      throw yt;
                  }
                  return (0, o.logDebugMessage)("doRequest: Value of doNotDoInterception: " + U), U ? ((0, o.logDebugMessage)("doRequest: Returning without interception"), [4, _(M)]) : [3, 2];
                case 1:
                  return [2, te.sent()];
                case 2:
                  return H = new Headers(
                    M !== void 0 && M.headers !== void 0 ? M.headers : N.headers
                  ), H.has("Authorization") ? [4, E("access")] : [3, 5];
                case 3:
                  return X = te.sent(), [4, E("refresh")];
                case 4:
                  V = te.sent(), X !== void 0 && V !== void 0 && H.get("Authorization") === "Bearer ".concat(X) && ((0, o.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), H.delete("Authorization")), te.label = 5;
                case 5:
                  (0, o.logDebugMessage)("doRequest: Interception started"), i.ProcessState.getInstance().addState(
                    i.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), z = 0, J = void 0, te.label = 6;
                case 6:
                  return [4, R(!0)];
                case 7:
                  return ce = te.sent(), se = new Headers(H), oe = b(b({}, M), { headers: se }), ce.status !== "EXISTS" ? [3, 9] : [4, T.getToken(ce.lastAccessTokenUpdate)];
                case 8:
                  le = te.sent(), le !== void 0 && ((0, o.logDebugMessage)("doRequest: Adding anti-csrf token to request"), se.set("anti-csrf", le)), te.label = 9;
                case 9:
                  return k.config.autoAddCredentials && ((0, o.logDebugMessage)("doRequest: Adding credentials include"), oe === void 0 ? oe = {
                    credentials: "include"
                  } : oe.credentials === void 0 && (oe = b(b({}, oe), {
                    credentials: "include"
                  }))), se.has("rid") ? (0, o.logDebugMessage)("doRequest: rid header was already there in request") : ((0, o.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), se.set("rid", "anti-csrf")), W = k.config.tokenTransferMethod, (0, o.logDebugMessage)("doRequest: Adding st-auth-mode header: " + W), se.set("st-auth-mode", W), [4, O(se)];
                case 10:
                  return te.sent(), (0, o.logDebugMessage)("doRequest: Making user's http call"), [4, _(oe)];
                case 11:
                  return ae = te.sent(), (0, o.logDebugMessage)("doRequest: User's http call ended"), [4, x(ae)];
                case 12:
                  if (te.sent(), B(
                    ce.status === "EXISTS",
                    ae.status,
                    ae.headers.get("front-token")
                  ), ae.status !== k.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, o.logDebugMessage)("doRequest: Status code is: " + ae.status), z >= k.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, o.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(z, ", maxRetryAttemptsForSessionRefresh: ").concat(k.config.maxRetryAttemptsForSessionRefresh)
                    ), rt = "Received a 401 response from ".concat(
                      N,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      k.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(rt), new Error(rt);
                  return [4, a(ce)];
                case 13:
                  if (De = te.sent(), z++, (0, o.logDebugMessage)("doRequest: sessionRefreshAttempts: " + z), De.result !== "RETRY") {
                    if ((0, o.logDebugMessage)("doRequest: Not retrying original request"), De.error !== void 0)
                      if (De.error instanceof Response)
                        J = De.error;
                      else
                        throw De.error;
                    else
                      J = ae;
                    return [3, 18];
                  }
                  return (0, o.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return ae.status !== k.config.invalidClaimStatusCode ? [3, 16] : [4, p(ae)];
                case 15:
                  te.sent(), te.label = 16;
                case 16:
                  return [2, ae];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, J];
              }
            });
          });
        }, k.attemptRefreshingSession = function() {
          return s(void 0, void 0, void 0, function() {
            var _, M;
            return e(C, function(N) {
              switch (N.label) {
                case 0:
                  if (!k.initCalled)
                    throw Error("init function not called");
                  return [4, R(!1)];
                case 1:
                  return _ = N.sent(), [4, a(_)];
                case 2:
                  if (M = N.sent(), M.result === "API_ERROR")
                    throw M.error;
                  return [2, M.result === "RETRY"];
              }
            });
          });
        }, k;
      }()
    );
    n.default = t;
    var u = "st-last-access-token-update", g = "st-refresh-token", v = "st-access-token", d = "sAntiCsrf", f = "sFrontToken";
    function a(k) {
      return s(this, void 0, void 0, function() {
        var C, _, M, N, U, j, H, X, V, z, J, ce, se, oe, le;
        return e(this, function(W) {
          switch (W.label) {
            case 0:
              return [4, w.default.getReferenceOrThrow().lockFactory()];
            case 1:
              C = W.sent(), W.label = 2;
            case 2:
              return (0, o.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, C.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!W.sent()) return [3, 21];
              (0, o.logDebugMessage)("onUnauthorisedResponse: lock acquired"), W.label = 4;
            case 4:
              return W.trys.push([4, 17, 19, 21]), [4, R(!1)];
            case 5:
              return _ = W.sent(), _.status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), t.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (M = _.status === "EXISTS", N = k.status === "EXISTS", U = _.status !== k.status, j = "lastAccessTokenUpdate" in _ && "lastAccessTokenUpdate" in k && _.lastAccessTokenUpdate !== k.lastAccessTokenUpdate, U && M ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : M && N && j ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (H = new Headers(), k.status !== "EXISTS" ? [3, 7] : [4, T.getToken(k.lastAccessTokenUpdate)]));
            case 6:
              X = W.sent(), X !== void 0 && ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), H.set("anti-csrf", X)), W.label = 7;
            case 7:
              return (0, o.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), H.set("rid", t.rid), H.set("fdi-version", h.supported_fdi.join(",")), V = t.config.tokenTransferMethod, (0, o.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + V), H.set("st-auth-mode", V), [4, O(H, !0)];
            case 8:
              return W.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                t.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: H
                  },
                  url: t.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return z = W.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                t.env.__supertokensOriginalFetch(z.url, z.requestInit)
              ];
            case 10:
              return J = W.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, x(J)];
            case 11:
              return W.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + J.status), ce = J.status === t.config.sessionExpiredStatusCode, J.headers.get("front-token") !== null ? [3, 14] : ce ? [4, l.setItem("remove")] : [3, 13];
            case 12:
              return W.sent(), [3, 14];
            case 13:
              if (J.status === 200)
                throw se = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(se), new Error(se);
              W.label = 14;
            case 14:
              if (B(
                k.status === "EXISTS",
                J.status,
                ce && J.headers.get("front-token") === null ? "remove" : J.headers.get("front-token")
              ), J.status >= 300)
                throw J;
              return [
                4,
                t.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: J.clone(),
                  requestInit: z.requestInit,
                  url: z.url,
                  userContext: {}
                })
              ];
            case 15:
              return W.sent(), [4, R(!1)];
            case 16:
              return W.sent().status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (t.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, o.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return oe = W.sent(), [4, R(!1)];
            case 18:
              return W.sent().status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: oe }]) : ((0, o.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: oe }]);
            case 19:
              return [4, C.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return W.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, R(!1)];
            case 22:
              return le = W.sent(), le.status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : le.status !== k.status || le.status === "EXISTS" && k.status === "EXISTS" && le.lastAccessTokenUpdate !== k.lastAccessTokenUpdate ? ((0, o.logDebugMessage)(
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
    n.onUnauthorisedResponse = a;
    function c() {
      (0, o.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), t.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    n.onTokenUpdate = c;
    function p(k) {
      return s(this, void 0, void 0, function() {
        var C;
        return e(this, function(_) {
          switch (_.label) {
            case 0:
              return _.trys.push([0, 2, , 3]), [
                4,
                t.recipeImpl.getInvalidClaimsFromResponse({
                  response: k,
                  userContext: {}
                })
              ];
            case 1:
              return C = _.sent(), C && t.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: C,
                userContext: {}
              }), [3, 3];
            case 2:
              return _.sent(), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    n.onInvalidClaimResponse = p;
    function R(k) {
      return s(this, void 0, void 0, function() {
        var C, _, M, N, U, j, H;
        return e(this, function(X) {
          switch (X.label) {
            case 0:
              return (0, o.logDebugMessage)("getLocalSessionState: called"), [4, I(u)];
            case 1:
              return C = X.sent(), [4, l.doesTokenExists()];
            case 2:
              return _ = X.sent(), _ && C !== void 0 ? ((0, o.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: C }]) : [3, 3];
            case 3:
              return C ? ((0, o.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return M = {
                status: "MAY_EXIST"
              }, k ? ((0, o.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, a(M)]) : [3, 8];
            case 5:
              return N = X.sent(), N.result !== "RETRY" ? ((0, o.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + N.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, I(u)];
            case 6:
              return U = X.sent(), [4, l.doesTokenExists()];
            case 7:
              if (j = X.sent(), !j || U === void 0)
                throw H = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(H), new Error(H);
              return (0, o.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: U }];
            case 8:
              return (0, o.logDebugMessage)("getLocalSessionState: returning: " + M.status), [2, M];
          }
        });
      });
    }
    n.getLocalSessionState = R;
    function S(k) {
      switch (k) {
        case "access":
          return v;
        case "refresh":
          return g;
      }
    }
    n.getStorageNameForToken = S;
    function D(k, C) {
      var _ = S(k);
      return C !== "" ? ((0, o.logDebugMessage)("setToken: saved ".concat(k, " token into cookies")), A(_, C, Date.now() + 31536e5)) : ((0, o.logDebugMessage)("setToken: cleared ".concat(k, " token from cookies")), A(_, C, 0));
    }
    n.setToken = D;
    function A(k, C, _) {
      var M = "Fri, 31 Dec 9999 23:59:59 GMT";
      _ !== Number.MAX_SAFE_INTEGER && (M = new Date(_).toUTCString());
      var N = t.config.sessionTokenFrontendDomain;
      return N === "localhost" || N === m.default.getReferenceOrThrow().windowHandler.location.getHostName() ? r.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(k, "=").concat(C, ";expires=").concat(M, ";path=/;samesite=").concat(t.config.isInIframe ? "none;secure" : "lax")
      ) : r.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(k, "=").concat(C, ";expires=").concat(M, ";domain=").concat(N, ";path=/;samesite=").concat(t.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function E(k) {
      return s(this, void 0, void 0, function() {
        var C;
        return e(this, function(_) {
          return C = S(k), [2, I(C)];
        });
      });
    }
    n.getTokenForHeaderAuth = E;
    function I(k) {
      return s(this, void 0, void 0, function() {
        var C, _, M, N;
        return e(this, function(U) {
          switch (U.label) {
            case 0:
              return _ = "; ", [4, r.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return C = _ + U.sent(), M = C.split("; " + k + "="), M.length >= 2 && (N = M.pop(), N !== void 0) ? [2, N.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function O(k, C) {
      return C === void 0 && (C = !1), s(this, void 0, void 0, function() {
        var _, M;
        return e(this, function(N) {
          switch (N.label) {
            case 0:
              return (0, o.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, E("access")];
            case 1:
              return _ = N.sent(), [4, E("refresh")];
            case 2:
              return M = N.sent(), (C || _ !== void 0) && M !== void 0 ? k.has("Authorization") ? (0, o.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, o.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), k.set(
                "Authorization",
                "Bearer ".concat(C ? M : _)
              )) : (0, o.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: token for header based auth not found"
              ), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function x(k) {
      return s(this, void 0, void 0, function() {
        var C, _, M, N, U;
        return e(this, function(j) {
          switch (j.label) {
            case 0:
              return (0, o.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), C = k.headers.get("st-refresh-token"), C === null ? [3, 2] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, D("refresh", C)]);
            case 1:
              j.sent(), j.label = 2;
            case 2:
              return _ = k.headers.get("st-access-token"), _ === null ? [3, 4] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, D("access", _)]);
            case 3:
              j.sent(), j.label = 4;
            case 4:
              return M = k.headers.get("front-token"), M === null ? [3, 6] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + M), [4, l.setItem(M)]);
            case 5:
              j.sent(), (0, n.updateClockSkewUsingFrontToken)({ frontToken: M, responseHeaders: k.headers }), j.label = 6;
            case 6:
              return N = k.headers.get("anti-csrf"), N === null ? [3, 9] : [4, R(!1)];
            case 7:
              return U = j.sent(), U.status !== "EXISTS" ? [3, 9] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, T.setItem(U.lastAccessTokenUpdate, N)]);
            case 8:
              j.sent(), j.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var Q = void 0;
    function ee() {
      return s(this, void 0, void 0, function() {
        var k;
        return e(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, o.logDebugMessage)("saveLastAccessTokenUpdate: called"), k = Date.now().toString(), (0, o.logDebugMessage)("saveLastAccessTokenUpdate: setting " + k), [4, A(u, k, Number.MAX_SAFE_INTEGER)];
            case 1:
              return C.sent(), Q !== void 0 ? [3, 3] : [4, I(u)];
            case 2:
              Q = C.sent() === k, C.label = 3;
            case 3:
              return Q === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, A("sIRTFrontend", "", 0)];
            case 4:
              return C.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    n.saveLastAccessTokenUpdate = ee;
    function ie() {
      return s(this, void 0, void 0, function() {
        function k() {
          return s(this, void 0, void 0, function() {
            var _, M, N, U, j;
            return e(this, function(H) {
              switch (H.label) {
                case 0:
                  return M = "; ", [
                    4,
                    r.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return _ = M + H.sent(), N = _.split("; " + d + "="), N.length >= 2 && (U = N.pop(), U !== void 0) ? (j = U.split(";").shift(), j === void 0 ? [2, null] : [2, j]) : [2, null];
              }
            });
          });
        }
        var C;
        return e(this, function(_) {
          switch (_.label) {
            case 0:
              return (0, o.logDebugMessage)("getAntiCSRFToken: called"), [4, R(!0)];
            case 1:
              return _.sent().status !== "EXISTS" ? ((0, o.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, k()];
            case 2:
              return C = _.sent(), (0, o.logDebugMessage)("getAntiCSRFToken: returning: " + C), [2, C];
          }
        });
      });
    }
    function ne(k) {
      return s(this, void 0, void 0, function() {
        return e(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, o.logDebugMessage)("setAntiCSRF: called: " + k), k === void 0 ? [3, 2] : [4, A(d, k, Number.MAX_SAFE_INTEGER)];
            case 1:
              return C.sent(), [3, 4];
            case 2:
              return [4, A(d, "", 0)];
            case 3:
              C.sent(), C.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    n.setAntiCSRF = ne;
    function F() {
      return s(this, void 0, void 0, function() {
        var k;
        return e(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, o.logDebugMessage)("getFrontTokenFromCookie: called"), [4, I(f)];
            case 1:
              return k = C.sent(), [2, k === void 0 ? null : k];
          }
        });
      });
    }
    function P(k) {
      return JSON.parse(decodeURIComponent(escape(atob(k))));
    }
    function q() {
      return s(this, void 0, void 0, function() {
        var k;
        return e(this, function(C) {
          switch (C.label) {
            case 0:
              return (0, o.logDebugMessage)("getFrontToken: called"), [4, R(!0)];
            case 1:
              return C.sent().status !== "EXISTS" ? ((0, o.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, F()];
            case 2:
              return k = C.sent(), (0, o.logDebugMessage)("getFrontToken: returning: " + k), [2, k];
          }
        });
      });
    }
    n.getFrontToken = q;
    function L(k) {
      return s(this, void 0, void 0, function() {
        var C, _, M;
        return e(this, function(N) {
          switch (N.label) {
            case 0:
              return (0, o.logDebugMessage)("setFrontToken: called"), [4, F()];
            case 1:
              return C = N.sent(), C !== null && k !== void 0 && (_ = P(C).up, M = P(k).up, JSON.stringify(_) !== JSON.stringify(M) && c()), k !== void 0 ? [3, 3] : [4, A(f, "", 0)];
            case 2:
              return N.sent(), [3, 5];
            case 3:
              return [4, A(f, k, Number.MAX_SAFE_INTEGER)];
            case 4:
              N.sent(), N.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    n.setFrontToken = L;
    function B(k, C, _) {
      if (_ == null) {
        (0, o.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var M = _ !== "remove";
      (0, o.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(k, " frontTokenExistsAfter: ").concat(M, " status: ").concat(C)
      ), k ? M || (C === t.config.sessionExpiredStatusCode ? ((0, o.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), t.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, o.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), t.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : M && ((0, o.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), t.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    n.fireSessionUpdateEventsIfNecessary = B;
    var $ = function(k) {
      var C = k.frontToken, _ = k.responseHeaders;
      if ((0, o.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + C), C == null || C === "remove") {
        (0, o.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var M = P(C), N = t.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: M.up,
        responseHeaders: _
      });
      y.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(N), (0, o.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    n.updateClockSkewUsingFrontToken = $;
  }(fe)), fe;
}
var He = {}, $t;
function kn() {
  if ($t) return He;
  $t = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.SessionClaimValidatorStore = void 0;
  var n = (
    /** @class */
    function() {
      function b() {
      }
      return b.claimValidatorsAddedByOtherRecipes = [], b.addClaimValidatorFromOtherRecipe = function(s) {
        b.claimValidatorsAddedByOtherRecipes.push(s);
      }, b.getClaimValidatorsAddedByOtherRecipes = function() {
        return b.claimValidatorsAddedByOtherRecipes;
      }, b;
    }()
  );
  return He.SessionClaimValidatorStore = n, He.default = n, He;
}
var zt;
function tr() {
  if (zt) return Ue;
  zt = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.getGlobalClaimValidators = void 0;
  var n = vt(), b = Je(), s = kn();
  function e(i, h) {
    var r = (0, n.getNormalisedUserContext)(h), m = s.default.getClaimValidatorsAddedByOtherRecipes(), w = b.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: m,
      userContext: r
    }), o = i !== void 0 ? i(w, r) : w;
    return o;
  }
  return Ue.getGlobalClaimValidators = e, Ue;
}
var Jt;
function nr() {
  return Jt || (Jt = 1, function(n) {
    function b(s) {
      for (var e in s) n.hasOwnProperty(e) || (n[e] = s[e]);
    }
    n.__esModule = !0, b(tr());
  }(ct)), ct;
}
var Yt;
function Rn() {
  if (Yt) return G;
  Yt = 1, Object.defineProperty(G, "__esModule", { value: !0 }), G.normaliseUser = G.normaliseUserResponse = G.getGlobalClaimValidators = G.getHashFromLocation = G.getNormalisedUserContext = G.checkForSSRErrorAndAppendIfNeeded = G.getAllQueryParams = G.getQueryParams = G.isTest = G.normaliseInputAppInfoOrThrowError = G.appendQueryParamsToURL = void 0;
  var n = Wn(), b = Gn(), s = $n(), e = zn(), i = nr();
  function h(d, f) {
    if (f === void 0)
      return d;
    try {
      var a = new URL(d);
      return Object.entries(f).forEach(function(R) {
        var S = R[0], D = R[1];
        a.searchParams.set(S, D);
      }), a.href;
    } catch {
      var c = d.startsWith("/") ? "http:localhost" : "http://localhost/", p = new URL("".concat(c).concat(d));
      return Object.entries(f).forEach(function(S) {
        var D = S[0], A = S[1];
        p.searchParams.set(D, A);
      }), "".concat(p.pathname).concat(p.search);
    }
  }
  G.appendQueryParamsToURL = h;
  function r(d, f) {
    return f !== void 0 ? new e.default(f) : new e.default(d);
  }
  function m(d) {
    if (d === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (d.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (d.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var f = new e.default("");
    return d.apiGatewayPath !== void 0 && (f = new e.default(d.apiGatewayPath)), {
      appName: d.appName,
      apiDomain: new s.default(d.apiDomain),
      apiBasePath: f.appendPath(
        r(b.DEFAULT_API_BASE_PATH, d.apiBasePath)
      )
    };
  }
  G.normaliseInputAppInfoOrThrowError = m;
  function w() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  G.isTest = w;
  function o(d) {
    var f = new URLSearchParams(
      n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), a = f.get(d);
    if (a !== null)
      return a;
  }
  G.getQueryParams = o;
  function y() {
    return new URLSearchParams(
      n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  G.getAllQueryParams = y;
  function T(d) {
    return typeof window > "u" && (d = d + b.SSR_ERROR), d;
  }
  G.checkForSSRErrorAndAppendIfNeeded = T;
  function l(d) {
    return d === void 0 ? {} : d;
  }
  G.getNormalisedUserContext = l;
  function t() {
    return n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  G.getHashFromLocation = t;
  function u(d) {
    var f = d.overrideGlobalClaimValidators, a = d.userContext;
    return (0, i.getGlobalClaimValidators)(f, a);
  }
  G.getGlobalClaimValidators = u;
  function g(d, f) {
    return "createdNewRecipeUser" in f ? f : {
      createdNewRecipeUser: f.createdNewUser,
      user: v(d, f.user)
    };
  }
  G.normaliseUserResponse = g;
  function v(d, f) {
    if ("loginMethods" in f)
      return f;
    var a = f.email !== void 0 ? [f.email] : [], c = f.phoneNumber !== void 0 ? [f.phoneNumber] : [], p = f.thirdParty !== void 0 ? [f.thirdParty] : [];
    return {
      id: f.id,
      emails: a,
      phoneNumbers: c,
      thirdParty: p,
      isPrimaryUser: !1,
      tenantIds: f.tenantIds,
      timeJoined: f.timeJoined,
      loginMethods: [
        {
          recipeId: d,
          recipeUserId: f.id,
          timeJoined: f.timeJoined,
          tenantIds: f.tenantIds,
          email: f.email,
          phoneNumber: f.email
        }
      ]
    };
  }
  return G.normaliseUser = v, G;
}
var K = {}, et = {}, Qt;
function rr() {
  if (Qt) return et;
  Qt = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  var n = (
    /** @class */
    /* @__PURE__ */ function() {
      function b(s) {
        this.config = s;
      }
      return b;
    }()
  );
  return et.default = n, et;
}
var lt = {}, Ie = {}, ue = {}, Z = {}, me = {}, Kt;
function sr() {
  if (Kt) return me;
  Kt = 1;
  var n = me && me.__awaiter || function(i, h, r, m) {
    function w(o) {
      return o instanceof r ? o : new r(function(y) {
        y(o);
      });
    }
    return new (r || (r = Promise))(function(o, y) {
      function T(u) {
        try {
          t(m.next(u));
        } catch (g) {
          y(g);
        }
      }
      function l(u) {
        try {
          t(m.throw(u));
        } catch (g) {
          y(g);
        }
      }
      function t(u) {
        u.done ? o(u.value) : w(u.value).then(T, l);
      }
      t((m = m.apply(i, h || [])).next());
    });
  }, b = me && me.__generator || function(i, h) {
    var r = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, m, w, o, y;
    return y = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function T(t) {
      return function(u) {
        return l([t, u]);
      };
    }
    function l(t) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (m = 1, w && (o = t[0] & 2 ? w.return : t[0] ? w.throw || ((o = w.return) && o.call(w), 0) : w.next) && !(o = o.call(w, t[1])).done)
            return o;
          switch (w = 0, o && (t = [t[0] & 2, o.value]), t[0]) {
            case 0:
            case 1:
              o = t;
              break;
            case 4:
              return r.label++, { value: t[1], done: !1 };
            case 5:
              r.label++, w = t[1], t = [0];
              continue;
            case 7:
              t = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (t[0] === 6 || t[0] === 2)) {
                r = 0;
                continue;
              }
              if (t[0] === 3 && (!o || t[1] > o[0] && t[1] < o[3])) {
                r.label = t[1];
                break;
              }
              if (t[0] === 6 && r.label < o[1]) {
                r.label = o[1], o = t;
                break;
              }
              if (o && r.label < o[2]) {
                r.label = o[2], r.ops.push(t);
                break;
              }
              o[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          t = h.call(i, r);
        } catch (u) {
          t = [6, u], w = 0;
        } finally {
          m = o = 0;
        }
      if (t[0] & 5) throw t[1];
      return { value: t[0] ? t[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(me, "__esModule", { value: !0 }), me.createAxiosErrorFromFetchResp = void 0;
  function s(i, h, r, m, w) {
    return i.config = h, r && (i.code = r), i.request = m, i.response = w, i.isAxiosError = !0, i.toJSON = function() {
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
    }, i;
  }
  function e(i) {
    return n(this, void 0, void 0, function() {
      var h, r, m, w, o;
      return b(this, function(y) {
        switch (y.label) {
          case 0:
            if (h = {
              url: i.url,
              headers: i.headers
            }, r = "status" in i, !r) return [3, 12];
            if (w = i.headers.get("content-type"), o = void 0, w !== null) return [3, 5];
            y.label = 1;
          case 1:
            return y.trys.push([1, 3, , 4]), [4, i.text()];
          case 2:
            return o = y.sent(), [3, 4];
          case 3:
            return y.sent(), o = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return w.includes("application/json") ? [4, i.json()] : [3, 7];
          case 6:
            return o = y.sent(), [3, 11];
          case 7:
            return w.includes("text/") ? [4, i.text()] : [3, 9];
          case 8:
            return o = y.sent(), [3, 11];
          case 9:
            return [4, i.blob()];
          case 10:
            o = y.sent(), y.label = 11;
          case 11:
            m = {
              data: o,
              status: i.status,
              statusText: i.statusText,
              headers: i.headers,
              config: h,
              request: void 0
            }, y.label = 12;
          case 12:
            return [
              2,
              s(
                r ? new Error("Request failed with status code " + i.status) : i,
                h,
                i.code,
                void 0,
                m
              )
            ];
        }
      });
    });
  }
  return me.createAxiosErrorFromFetchResp = e, me;
}
var Zt;
function or() {
  if (Zt) return Z;
  Zt = 1;
  var n = Z && Z.__assign || function() {
    return n = Object.assign || function(f) {
      for (var a, c = 1, p = arguments.length; c < p; c++) {
        a = arguments[c];
        for (var R in a) Object.prototype.hasOwnProperty.call(a, R) && (f[R] = a[R]);
      }
      return f;
    }, n.apply(this, arguments);
  }, b = Z && Z.__awaiter || function(f, a, c, p) {
    function R(S) {
      return S instanceof c ? S : new c(function(D) {
        D(S);
      });
    }
    return new (c || (c = Promise))(function(S, D) {
      function A(O) {
        try {
          I(p.next(O));
        } catch (x) {
          D(x);
        }
      }
      function E(O) {
        try {
          I(p.throw(O));
        } catch (x) {
          D(x);
        }
      }
      function I(O) {
        O.done ? S(O.value) : R(O.value).then(A, E);
      }
      I((p = p.apply(f, a || [])).next());
    });
  }, s = Z && Z.__generator || function(f, a) {
    var c = {
      label: 0,
      sent: function() {
        if (S[0] & 1) throw S[1];
        return S[1];
      },
      trys: [],
      ops: []
    }, p, R, S, D;
    return D = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (D[Symbol.iterator] = function() {
      return this;
    }), D;
    function A(I) {
      return function(O) {
        return E([I, O]);
      };
    }
    function E(I) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (p = 1, R && (S = I[0] & 2 ? R.return : I[0] ? R.throw || ((S = R.return) && S.call(R), 0) : R.next) && !(S = S.call(R, I[1])).done)
            return S;
          switch (R = 0, S && (I = [I[0] & 2, S.value]), I[0]) {
            case 0:
            case 1:
              S = I;
              break;
            case 4:
              return c.label++, { value: I[1], done: !1 };
            case 5:
              c.label++, R = I[1], I = [0];
              continue;
            case 7:
              I = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (S = c.trys, !(S = S.length > 0 && S[S.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                c = 0;
                continue;
              }
              if (I[0] === 3 && (!S || I[1] > S[0] && I[1] < S[3])) {
                c.label = I[1];
                break;
              }
              if (I[0] === 6 && c.label < S[1]) {
                c.label = S[1], S = I;
                break;
              }
              if (S && c.label < S[2]) {
                c.label = S[2], c.ops.push(I);
                break;
              }
              S[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          I = a.call(f, c);
        } catch (O) {
          I = [6, O], R = 0;
        } finally {
          p = S = 0;
        }
      if (I[0] & 5) throw I[1];
      return { value: I[0] ? I[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Z, "__esModule", { value: !0 }), Z.responseErrorInterceptor = Z.responseInterceptor = Z.interceptorFunctionRequestFulfilled = void 0;
  var e = sr(), i = Je(), h = mt(), r = be(), m = $e();
  function w(f) {
    f.__supertokensSessionRefreshAttempts === void 0 && (f.__supertokensSessionRefreshAttempts = 0), f.__supertokensSessionRefreshAttempts++;
  }
  function o(f) {
    return f.__supertokensSessionRefreshAttempts === void 0 && (f.__supertokensSessionRefreshAttempts = 0), f.__supertokensSessionRefreshAttempts >= i.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function y(f) {
    var a = f.url === void 0 ? "" : f.url, c = f.baseURL;
    return c !== void 0 && (a.charAt(0) === "/" && c.charAt(c.length - 1) === "/" ? a = c + a.substr(1) : a.charAt(0) !== "/" && c.charAt(c.length - 1) !== "/" ? a = c + "/" + a : a = c + a), a;
  }
  function T(f) {
    return b(this, void 0, void 0, function() {
      var a, c, p, R, S, D;
      return s(this, function(A) {
        switch (A.label) {
          case 0:
            (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), a = y(f), c = !1;
            try {
              c = typeof a == "string" && !i.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                a,
                i.default.config.apiDomain,
                i.default.config.sessionTokenBackendDomain
              );
            } catch (E) {
              if (E.message === "Please provide a valid domain name")
                (0, m.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), c = !i.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  r.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  i.default.config.apiDomain,
                  i.default.config.sessionTokenBackendDomain
                );
              else
                throw E;
            }
            return (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + c), c ? ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, f]) : ((0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), h.ProcessState.getInstance().addState(
              h.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, i.getLocalSessionState)(!0)]);
          case 1:
            return p = A.sent(), R = f, p.status !== "EXISTS" ? [3, 3] : [4, i.AntiCsrfToken.getToken(p.lastAccessTokenUpdate)];
          case 2:
            S = A.sent(), S !== void 0 && ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), R = n(n({}, R), {
              headers: R === void 0 ? {
                "anti-csrf": S
              } : n(n({}, R.headers), { "anti-csrf": S })
            })), A.label = 3;
          case 3:
            return i.default.config.autoAddCredentials && R.withCredentials === void 0 && ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), R = n(n({}, R), { withCredentials: !0 })), (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), R = n(n({}, R), {
              headers: R === void 0 ? {
                rid: "anti-csrf"
              } : n({ rid: "anti-csrf" }, R.headers)
            }), D = i.default.config.tokenTransferMethod, (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + D), R.headers["st-auth-mode"] = D, [4, d(R)];
          case 4:
            return R = A.sent(), [4, g(R)];
          case 5:
            return A.sent(), (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, R];
        }
      });
    });
  }
  Z.interceptorFunctionRequestFulfilled = T;
  function l(f) {
    var a = this;
    return function(c) {
      return b(a, void 0, void 0, function() {
        var p, R, S, D;
        return s(this, function(A) {
          switch (A.label) {
            case 0:
              if (p = !1, !i.default.initCalled)
                throw new Error("init function not called");
              (0, m.logDebugMessage)("responseInterceptor: started"), (0, m.logDebugMessage)("responseInterceptor: already intercepted: " + c.headers["x-supertokens-xhr-intercepted"]), R = y(c.config);
              try {
                p = typeof R == "string" && !i.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  R,
                  i.default.config.apiDomain,
                  i.default.config.sessionTokenBackendDomain
                ) || !!c.headers["x-supertokens-xhr-intercepted"];
              } catch (E) {
                if (E.message === "Please provide a valid domain name")
                  (0, m.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), p = !i.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    r.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    i.default.config.apiDomain,
                    i.default.config.sessionTokenBackendDomain
                  ) || !!c.headers["x-supertokens-xhr-intercepted"];
                else
                  throw E;
              }
              return (0, m.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + p), p ? ((0, m.logDebugMessage)("responseInterceptor: Returning without interception"), [2, c]) : ((0, m.logDebugMessage)("responseInterceptor: Interception started"), h.ProcessState.getInstance().addState(
                h.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, i.getLocalSessionState)(!1)]);
            case 1:
              return S = A.sent(), [4, v(c)];
            case 2:
              return A.sent(), (0, i.fireSessionUpdateEventsIfNecessary)(S.status === "EXISTS", c.status, c.headers["front-token"]), c.status !== i.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, m.logDebugMessage)("responseInterceptor: Status code is: " + c.status), D = c.config, [
                2,
                u.doRequest(
                  function(E) {
                    return f(E);
                  },
                  D,
                  R,
                  c,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return c.status !== i.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, i.onInvalidClaimResponse)(c)];
            case 4:
              A.sent(), A.label = 5;
            case 5:
              return [2, c];
          }
        });
      });
    };
  }
  Z.responseInterceptor = l;
  function t(f) {
    var a = this;
    return function(c) {
      return b(a, void 0, void 0, function() {
        var p;
        return s(this, function(R) {
          switch (R.label) {
            case 0:
              if ((0, m.logDebugMessage)("responseErrorInterceptor: called"), (0, m.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (c.response && c.response.headers["x-supertokens-xhr-intercepted"])), c.response === void 0 || c.response.headers["x-supertokens-xhr-intercepted"])
                throw c;
              return c.response !== void 0 && c.response.status === i.default.config.sessionExpiredStatusCode ? ((0, m.logDebugMessage)("responseErrorInterceptor: Status code is: " + c.response.status), p = c.config, [
                2,
                u.doRequest(
                  function(S) {
                    return f(S);
                  },
                  p,
                  y(p),
                  void 0,
                  c,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return c.response !== void 0 && c.response.status === i.default.config.invalidClaimStatusCode ? [4, (0, i.onInvalidClaimResponse)(c.response)] : [3, 3];
            case 2:
              R.sent(), R.label = 3;
            case 3:
              throw c;
          }
        });
      });
    };
  }
  Z.responseErrorInterceptor = t;
  var u = (
    /** @class */
    function() {
      function f() {
      }
      var a;
      return a = f, f.doRequest = function(c, p, R, S, D, A) {
        return A === void 0 && (A = !1), b(void 0, void 0, void 0, function() {
          var E, I, O, x, Q, ee, ie, ne, q, F, P, q, L, B, $;
          return s(a, function(k) {
            switch (k.label) {
              case 0:
                if (!i.default.initCalled)
                  throw Error("init function not called");
                (0, m.logDebugMessage)("doRequest: called"), E = !1;
                try {
                  E = typeof R == "string" && !i.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    R,
                    i.default.config.apiDomain,
                    i.default.config.sessionTokenBackendDomain
                  ) && A;
                } catch (C) {
                  if (C.message === "Please provide a valid domain name")
                    (0, m.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), E = !i.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      r.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      i.default.config.apiDomain,
                      i.default.config.sessionTokenBackendDomain
                    ) && A;
                  else
                    throw C;
                }
                if ((0, m.logDebugMessage)("doRequest: Value of doNotDoInterception: " + E), !E) return [3, 2];
                if ((0, m.logDebugMessage)("doRequest: Returning without interception"), D !== void 0)
                  throw D;
                return S !== void 0 ? [2, S] : [4, c(p)];
              case 1:
                return [2, k.sent()];
              case 2:
                return (0, m.logDebugMessage)("doRequest: Interception started"), [4, d(p)];
              case 3:
                p = k.sent(), I = void 0, k.label = 4;
              case 4:
                return [4, (0, i.getLocalSessionState)(!0)];
              case 5:
                return O = k.sent(), x = p, O.status !== "EXISTS" ? [3, 7] : [4, i.AntiCsrfToken.getToken(O.lastAccessTokenUpdate)];
              case 6:
                Q = k.sent(), Q !== void 0 && ((0, m.logDebugMessage)("doRequest: Adding anti-csrf token to request"), x = n(n({}, x), {
                  headers: x === void 0 ? {
                    "anti-csrf": Q
                  } : n(n({}, x.headers), {
                    "anti-csrf": Q
                  })
                })), k.label = 7;
              case 7:
                return i.default.config.autoAddCredentials && x.withCredentials === void 0 && ((0, m.logDebugMessage)("doRequest: Adding credentials include"), x = n(n({}, x), { withCredentials: !0 })), (0, m.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), x = n(n({}, x), {
                  headers: x === void 0 ? {
                    rid: "anti-csrf"
                  } : n({ rid: "anti-csrf" }, x.headers)
                }), ee = i.default.config.tokenTransferMethod, (0, m.logDebugMessage)("doRequest: Adding st-auth-mode header: " + ee), x.headers["st-auth-mode"] = ee, [4, g(x)];
              case 8:
                k.sent(), k.label = 9;
              case 9:
                if (k.trys.push([9, 14, , 27]), ie = D, ne = S, D = void 0, S = void 0, ie !== void 0)
                  throw (0, m.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), ie;
                return ne !== void 0 ? (0, m.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, m.logDebugMessage)("doRequest: Making user's http call"), ne !== void 0 ? [3, 11] : [4, c(x)];
              case 10:
                return F = k.sent(), [3, 12];
              case 11:
                F = ne, k.label = 12;
              case 12:
                return q = F, (0, m.logDebugMessage)("doRequest: User's http call ended"), [4, v(q)];
              case 13:
                return k.sent(), (0, i.fireSessionUpdateEventsIfNecessary)(O.status === "EXISTS", q.status, q.headers["front-token"]), [2, q];
              case 14:
                return P = k.sent(), q = P.response, q === void 0 ? [3, 25] : [4, v(q)];
              case 15:
                if (k.sent(), (0, i.fireSessionUpdateEventsIfNecessary)(O.status === "EXISTS", q.status, q.headers["front-token"]), q.status !== i.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, m.logDebugMessage)("doRequest: Status code is: " + q.status), o(p))
                  throw (0, m.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      p.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(i.default.config.maxRetryAttemptsForSessionRefresh)
                  ), L = "Received a 401 response from ".concat(
                    R,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    i.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(L), new Error(L);
                return [4, (0, i.onUnauthorisedResponse)(O)];
              case 16:
                return B = k.sent(), w(p), (0, m.logDebugMessage)("doRequest: sessionRefreshAttempts: " + p.__supertokensSessionRefreshAttempts), B.result === "RETRY" ? [3, 20] : ((0, m.logDebugMessage)("doRequest: Not retrying original request"), B.error === void 0 ? [3, 18] : [4, (0, e.createAxiosErrorFromFetchResp)(B.error)]);
              case 17:
                return $ = k.sent(), [3, 19];
              case 18:
                $ = P, k.label = 19;
              case 19:
                return I = $, [3, 28];
              case 20:
                return (0, m.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return q.status !== i.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, i.onInvalidClaimResponse)(q)];
              case 22:
                k.sent(), k.label = 23;
              case 23:
                throw P;
              case 24:
                return [3, 26];
              case 25:
                throw P;
              case 26:
                return [3, 27];
              case 27:
                return [3, 4];
              case 28:
                throw I;
            }
          });
        });
      }, f;
    }()
  );
  Z.default = u;
  function g(f) {
    return b(this, void 0, void 0, function() {
      var a, c;
      return s(this, function(p) {
        switch (p.label) {
          case 0:
            return f.headers === void 0 && (f.headers = {}), (0, m.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, i.getTokenForHeaderAuth)("access")];
          case 1:
            return a = p.sent(), [4, (0, i.getTokenForHeaderAuth)("refresh")];
          case 2:
            return c = p.sent(), a !== void 0 && c !== void 0 ? f.headers.Authorization !== void 0 || f.headers.authorization !== void 0 ? (0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), f.headers = n(n({}, f.headers), {
              Authorization: "Bearer ".concat(a)
            }), f.__supertokensAddedAuthHeader = !0) : (0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function v(f) {
    return b(this, void 0, void 0, function() {
      var a, c, p, R, S, D;
      return s(this, function(A) {
        switch (A.label) {
          case 0:
            return (0, m.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), a = f.headers["st-refresh-token"], a === void 0 ? [3, 2] : ((0, m.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, i.setToken)("refresh", a)]);
          case 1:
            A.sent(), A.label = 2;
          case 2:
            return c = f.headers["st-access-token"], c === void 0 ? [3, 4] : ((0, m.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, i.setToken)("access", c)]);
          case 3:
            A.sent(), A.label = 4;
          case 4:
            return p = f.headers["front-token"], p === void 0 ? [3, 6] : ((0, m.logDebugMessage)("doRequest: Setting sFrontToken: " + p), [4, i.FrontToken.setItem(p)]);
          case 5:
            A.sent(), R = new Headers(), Object.entries(f.headers).forEach(function(E) {
              var I = E[0], O = E[1];
              Array.isArray(O) ? O.forEach(function(x) {
                return R.append(I, x);
              }) : R.append(I, O);
            }), (0, i.updateClockSkewUsingFrontToken)({ frontToken: p, responseHeaders: R }), A.label = 6;
          case 6:
            return S = f.headers["anti-csrf"], S === void 0 ? [3, 9] : [4, (0, i.getLocalSessionState)(!1)];
          case 7:
            return D = A.sent(), D.status !== "EXISTS" ? [3, 9] : ((0, m.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, i.AntiCsrfToken.setItem(D.lastAccessTokenUpdate, S)]);
          case 8:
            A.sent(), A.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function d(f) {
    return b(this, void 0, void 0, function() {
      var a, c, p, R;
      return s(this, function(S) {
        switch (S.label) {
          case 0:
            return [4, (0, i.getTokenForHeaderAuth)("access")];
          case 1:
            return a = S.sent(), [4, (0, i.getTokenForHeaderAuth)("refresh")];
          case 2:
            return c = S.sent(), p = f.headers.Authorization || f.headers.authorization, a !== void 0 && c !== void 0 && (p === "Bearer ".concat(a) || "__supertokensAddedAuthHeader" in f) ? ((0, m.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), R = n(n({}, f), { headers: n({}, f.headers) }), delete R.headers.authorization, delete R.headers.Authorization, [2, R]) : [2, f];
        }
      });
    });
  }
  return Z;
}
var Ee = {}, en;
function ir() {
  if (en) return Ee;
  en = 1;
  var n = Ee && Ee.__extends || /* @__PURE__ */ function() {
    var s = function(e, i) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, r) {
        h.__proto__ = r;
      } || function(h, r) {
        for (var m in r) Object.prototype.hasOwnProperty.call(r, m) && (h[m] = r[m]);
      }, s(e, i);
    };
    return function(e, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      s(e, i);
      function h() {
        this.constructor = e;
      }
      e.prototype = i === null ? Object.create(i) : (h.prototype = i.prototype, new h());
    };
  }();
  Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.STGeneralError = void 0;
  var b = (
    /** @class */
    function(s) {
      n(e, s);
      function e(i) {
        var h = s.call(this, i) || this;
        return h.isSuperTokensGeneralError = !0, h;
      }
      return e.isThisError = function(i) {
        return i.isSuperTokensGeneralError === !0;
      }, e;
    }(Error)
  );
  return Ee.STGeneralError = b, Ee;
}
var pe = {}, tn;
function ar() {
  if (tn) return pe;
  tn = 1;
  var n = pe && pe.__awaiter || function(l, t, u, g) {
    function v(d) {
      return d instanceof u ? d : new u(function(f) {
        f(d);
      });
    }
    return new (u || (u = Promise))(function(d, f) {
      function a(R) {
        try {
          p(g.next(R));
        } catch (S) {
          f(S);
        }
      }
      function c(R) {
        try {
          p(g.throw(R));
        } catch (S) {
          f(S);
        }
      }
      function p(R) {
        R.done ? d(R.value) : v(R.value).then(a, c);
      }
      p((g = g.apply(l, t || [])).next());
    });
  }, b = pe && pe.__generator || function(l, t) {
    var u = {
      label: 0,
      sent: function() {
        if (d[0] & 1) throw d[1];
        return d[1];
      },
      trys: [],
      ops: []
    }, g, v, d, f;
    return f = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function a(p) {
      return function(R) {
        return c([p, R]);
      };
    }
    function c(p) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (g = 1, v && (d = p[0] & 2 ? v.return : p[0] ? v.throw || ((d = v.return) && d.call(v), 0) : v.next) && !(d = d.call(v, p[1])).done)
            return d;
          switch (v = 0, d && (p = [p[0] & 2, d.value]), p[0]) {
            case 0:
            case 1:
              d = p;
              break;
            case 4:
              return u.label++, { value: p[1], done: !1 };
            case 5:
              u.label++, v = p[1], p = [0];
              continue;
            case 7:
              p = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (d = u.trys, !(d = d.length > 0 && d[d.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                u = 0;
                continue;
              }
              if (p[0] === 3 && (!d || p[1] > d[0] && p[1] < d[3])) {
                u.label = p[1];
                break;
              }
              if (p[0] === 6 && u.label < d[1]) {
                u.label = d[1], d = p;
                break;
              }
              if (d && u.label < d[2]) {
                u.label = d[2], u.ops.push(p);
                break;
              }
              d[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          p = t.call(l, u);
        } catch (R) {
          p = [6, R], v = 0;
        } finally {
          g = d = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(pe, "__esModule", { value: !0 }), pe.addInterceptorsToXMLHttpRequest = void 0;
  var s = Je(), e = $e(), i = be(), h = mt(), r = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function m() {
    var l = new Promise(function(u) {
      return setTimeout(u, 0);
    }), t = XMLHttpRequest;
    (0, e.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var u = new t(), g = this, v = [], d = [], f = {}, a, c = /* @__PURE__ */ new Map(), p = l;
      function R(F) {
        p = p.finally(function() {
          var P;
          return (P = F()) === null || P === void 0 ? void 0 : P.catch(function(q) {
            var L = new ProgressEvent("error");
            L.error = q, g.onerror !== void 0 && g.onerror !== null && g.onerror(L), O("error", L);
          });
        });
      }
      var S = "", D = !1, A = void 0, E, I = 0;
      g.onload = null, g.onreadystatechange = null, g.onloadend = null, g.addEventListener = function(F, P, q) {
        var L = c.get(F);
        L === void 0 && (L = /* @__PURE__ */ new Set(), c.set(F, L)), L.add(P);
      }, g.removeEventListener = function(F, P) {
        var q = c.get(F);
        q === void 0 && (q = /* @__PURE__ */ new Set(), c.set(F, q)), q.delete(P);
      };
      function O(F, P) {
        var q = c.get(F);
        (0, e.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(P.type, " to ").concat(q ? q.size : 0, " listeners")
        ), q && Array.from(q).forEach(function(L) {
          return L.apply(g, [P]);
        });
      }
      function x() {
        return n(this, void 0, void 0, function() {
          var F, P, q;
          return b(this, function(L) {
            switch (L.label) {
              case 0:
                if (A === void 0)
                  throw new Error("Should never come here..");
                if ((0, e.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + A.status), I >= s.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, e.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(I, ", maxRetryAttemptsForSessionRefresh: ").concat(s.default.config.maxRetryAttemptsForSessionRefresh)
                  ), f.status = 0, f.statusText = "", f.responseType = "", F = "Received a 401 response from ".concat(
                    S,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    s.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(F), new Error(F);
                return [4, (0, s.onUnauthorisedResponse)(A)];
              case 1:
                if (P = L.sent(), I++, (0, e.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + I), P.result !== "RETRY") {
                  if ((0, e.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!P.error
                  ), P.error !== void 0)
                    throw P.error;
                  return [2, !0];
                }
                return (0, e.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), q = new t(), ie(g, q, !0), v.forEach(function(B) {
                  B(q);
                }), ne(q, E), [2, !1];
            }
          });
        });
      }
      function Q(F) {
        return n(this, void 0, void 0, function() {
          var P, q, L, B, $;
          return b(this, function(k) {
            switch (k.label) {
              case 0:
                if (D)
                  return (0, e.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                k.label = 1;
              case 1:
                return k.trys.push([1, 7, , 11]), (0, e.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), h.ProcessState.getInstance().addState(
                  h.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), P = F.status, q = T(F), [4, y(q)];
              case 2:
                return k.sent(), (0, s.fireSessionUpdateEventsIfNecessary)(A.status === "EXISTS", P, q.get("front-token")), P !== s.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, e.logDebugMessage)("responseInterceptor: Status code is: " + P), [4, x()]);
              case 3:
                return [2, k.sent()];
              case 4:
                return P !== s.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, s.onInvalidClaimResponse)({ data: F.responseText })];
              case 5:
                k.sent(), k.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return L = k.sent(), (0, e.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), L.status === void 0 ? [3, 9] : [4, w(L)];
              case 8:
                if (B = k.sent(), f.status = B.status, f.statusText = B.statusText, f.responseType = B.responseType, a = B.headers, B.responseType === "json")
                  try {
                    f.response = JSON.parse(B.responseText);
                  } catch {
                    f.response = B.responseText;
                  }
                else
                  f.response = B.responseText;
                return f.responseText = B.responseText, [3, 10];
              case 9:
                $ = new ProgressEvent("error"), $.error = L, g.onerror !== void 0 && g.onerror !== null && g.onerror($), O("error", $), k.label = 10;
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
      g.open = function(F, P) {
        (0, e.logDebugMessage)("XHRInterceptor.open called");
        var q = arguments;
        S = P;
        try {
          D = typeof S == "string" && !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            S,
            s.default.config.apiDomain,
            s.default.config.sessionTokenBackendDomain
          ) || typeof S != "string" && !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            S.toString(),
            s.default.config.apiDomain,
            s.default.config.sessionTokenBackendDomain
          );
        } catch (L) {
          if (L.message === "Please provide a valid domain name")
            (0, e.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), D = !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              s.default.config.apiDomain,
              s.default.config.sessionTokenBackendDomain
            );
          else
            throw L;
        }
        R(function() {
          v.push(function(L) {
            L.open.apply(L, q);
          }), u.open.apply(u, q);
        });
      }, g.send = function(F) {
        E = F, ne(u, E);
      }, g.setRequestHeader = function(F, P) {
        var q = this;
        if ((0, e.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(F)), D) {
          R(function() {
            return u.setRequestHeader(F, P);
          });
          return;
        }
        F !== "anti-csrf" && R(function() {
          return n(q, void 0, void 0, function() {
            var L, B;
            return b(this, function($) {
              switch ($.label) {
                case 0:
                  return F.toLowerCase() !== "authorization" ? [3, 3] : ((0, e.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, s.getTokenForHeaderAuth)("access")]);
                case 1:
                  return L = $.sent(), [4, (0, s.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (B = $.sent(), L !== void 0 && B !== void 0 && P === "Bearer ".concat(L))
                    return (0, e.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  $.label = 3;
                case 3:
                  return v.push(function(k) {
                    k.setRequestHeader(F, P);
                  }), d.push({ name: F, value: P }), u.setRequestHeader(F, P), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var ee = void 0;
      ie(g, u, !1);
      function ie(F, P, q) {
        var L, B = ["load", "loadend", "readystatechange"];
        (0, e.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var $ = function(H) {
          (0, e.logDebugMessage)("XHRInterceptor added listener for event ".concat(H)), P.addEventListener(H, function(X) {
            (0, e.logDebugMessage)("XHRInterceptor got event ".concat(H)), B.includes(H) || O(H, X);
          });
        }, k = 0, C = r; k < C.length; k++) {
          var _ = C[k];
          $(_);
        }
        if (P.onload = function(H) {
          L === void 0 && (L = Q(P)), L.then(function(X) {
            X && (F.onload && F.onload(H), O("load", H));
          });
        }, P.onreadystatechange = function(H) {
          P.readyState === t.DONE ? (L === void 0 && (L = Q(P)), L.then(function(X) {
            X && (F.onreadystatechange && F.onreadystatechange(H), O("readystatechange", H));
          })) : (F.onreadystatechange && F.onreadystatechange(H), O("readystatechange", H));
        }, P.onloadend = function(H) {
          L === void 0 && (L = Q(P)), L.then(function(X) {
            X && (F.onloadend && F.onloadend(H), O("loadend", H));
          });
        }, F.getAllResponseHeaders = function() {
          var H;
          return a ? (H = "", a.forEach(function(X, V) {
            return H += "".concat(V, ": ").concat(X, `\r
`);
          })) : H = P.getAllResponseHeaders(), H + `x-supertokens-xhr-intercepted: true\r
`;
        }, F.getResponseHeader = function(H) {
          return H === "x-supertokens-xhr-intercepted" ? "true" : a ? a.get(H) : P.getResponseHeader(H);
        }, ee === void 0) {
          ee = [];
          for (var M in P)
            M in F || ee.push(M);
        }
        for (var N = function(H) {
          typeof P[H] == "function" ? Object.defineProperty(F, H, {
            configurable: !0,
            value: function() {
              var X = arguments;
              return q || v.push(function(V) {
                V[H].apply(V, X);
              }), P[H].apply(P, X);
            }
          }) : Object.defineProperty(F, H, {
            configurable: !0,
            get: function() {
              return f[H] !== void 0 ? f[H] : P[H];
            },
            set: function(X) {
              q || v.push(function(V) {
                V[H] = X;
              }), (0, e.logDebugMessage)("XHRInterceptor.set[".concat(H, "] = ").concat(X)), P[H] = X;
            }
          });
        }, U = 0, j = ee; U < j.length; U++) {
          var M = j[U];
          N(M);
        }
      }
      function ne(F, P) {
        var q = this;
        if ((0, e.logDebugMessage)("XHRInterceptor.send: called"), (0, e.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + D), D) {
          (0, e.logDebugMessage)("XHRInterceptor.send: Returning without interception"), R(function() {
            return F.send(P);
          });
          return;
        }
        (0, e.logDebugMessage)("XHRInterceptor.send: Interception started"), h.ProcessState.getInstance().addState(
          h.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), R(function() {
          return n(q, void 0, void 0, function() {
            var L, B;
            return b(this, function($) {
              switch ($.label) {
                case 0:
                  return [4, (0, s.getLocalSessionState)(!0)];
                case 1:
                  return A = $.sent(), A.status !== "EXISTS" ? [3, 3] : [
                    4,
                    s.AntiCsrfToken.getToken(A.lastAccessTokenUpdate)
                  ];
                case 2:
                  L = $.sent(), L !== void 0 && ((0, e.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), F.setRequestHeader("anti-csrf", L)), $.label = 3;
                case 3:
                  return s.default.config.autoAddCredentials && ((0, e.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), g.withCredentials = !0), d.some(function(k) {
                    return k.name === "rid";
                  }) ? (0, e.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, e.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), F.setRequestHeader("rid", "anti-csrf")), B = s.default.config.tokenTransferMethod, d.some(function(k) {
                    return k.name === "st-auth-mode";
                  }) ? (0, e.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, e.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + B
                  ), F.setRequestHeader("st-auth-mode", B)), [4, o(F, d)];
                case 4:
                  return $.sent(), (0, e.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, F.send(P)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = t;
  }
  pe.addInterceptorsToXMLHttpRequest = m;
  function w(l) {
    return n(this, void 0, void 0, function() {
      var t, u, g, v, d;
      return b(this, function(f) {
        switch (f.label) {
          case 0:
            if (t = l.headers.get("content-type"), u = "", g = "text", t !== null) return [3, 5];
            f.label = 1;
          case 1:
            return f.trys.push([1, 3, , 4]), [4, l.text()];
          case 2:
            return u = f.sent(), [3, 4];
          case 3:
            return f.sent(), u = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return t.includes("application/json") ? (g = "json", d = (v = JSON).stringify, [4, l.json()]) : [3, 7];
          case 6:
            return u = d.apply(v, [f.sent()]), [3, 9];
          case 7:
            return t.includes("text/") ? [4, l.text()] : [3, 9];
          case 8:
            u = f.sent(), f.label = 9;
          case 9:
            return [
              2,
              {
                status: l.status,
                responseText: u,
                statusText: l.statusText,
                responseType: g,
                headers: l.headers
              }
            ];
        }
      });
    });
  }
  function o(l, t) {
    return n(this, void 0, void 0, function() {
      var u, g;
      return b(this, function(v) {
        switch (v.label) {
          case 0:
            return (0, e.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, s.getTokenForHeaderAuth)("access")];
          case 1:
            return u = v.sent(), [4, (0, s.getTokenForHeaderAuth)("refresh")];
          case 2:
            return g = v.sent(), u !== void 0 && g !== void 0 ? t.some(function(d) {
              var f = d.name;
              return f.toLowerCase() === "authorization";
            }) ? (0, e.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : u !== void 0 && ((0, e.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), l.setRequestHeader("Authorization", "Bearer ".concat(u))) : (0, e.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function y(l) {
    return n(this, void 0, void 0, function() {
      var t, u, g, v, d;
      return b(this, function(f) {
        switch (f.label) {
          case 0:
            return (0, e.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), t = l.get("st-refresh-token"), t === null ? [3, 2] : ((0, e.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, s.setToken)("refresh", t)]);
          case 1:
            f.sent(), f.label = 2;
          case 2:
            return u = l.get("st-access-token"), u === null ? [3, 4] : ((0, e.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, s.setToken)("access", u)]);
          case 3:
            f.sent(), f.label = 4;
          case 4:
            return g = l.get("front-token"), g === null ? [3, 6] : ((0, e.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + g), [4, s.FrontToken.setItem(g)]);
          case 5:
            f.sent(), (0, s.updateClockSkewUsingFrontToken)({ frontToken: g, responseHeaders: l }), f.label = 6;
          case 6:
            return v = l.get("anti-csrf"), v === null ? [3, 9] : [4, (0, s.getLocalSessionState)(!1)];
          case 7:
            return d = f.sent(), d.status !== "EXISTS" ? [3, 9] : ((0, e.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, s.AntiCsrfToken.setItem(d.lastAccessTokenUpdate, v)]);
          case 8:
            f.sent(), f.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function T(l) {
    return new Headers(
      l.getAllResponseHeaders().split(`\r
`).map(function(t) {
        var u = t.indexOf(": ");
        return u === -1 ? ["", ""] : [t.slice(0, u), t.slice(u + 2)];
      }).filter(function(t) {
        return t[0].length !== 0;
      })
    );
  }
  return pe;
}
var nn;
function ur() {
  if (nn) return ue;
  nn = 1;
  var n = ue && ue.__assign || function() {
    return n = Object.assign || function(g) {
      for (var v, d = 1, f = arguments.length; d < f; d++) {
        v = arguments[d];
        for (var a in v) Object.prototype.hasOwnProperty.call(v, a) && (g[a] = v[a]);
      }
      return g;
    }, n.apply(this, arguments);
  }, b = ue && ue.__awaiter || function(g, v, d, f) {
    function a(c) {
      return c instanceof d ? c : new d(function(p) {
        p(c);
      });
    }
    return new (d || (d = Promise))(function(c, p) {
      function R(A) {
        try {
          D(f.next(A));
        } catch (E) {
          p(E);
        }
      }
      function S(A) {
        try {
          D(f.throw(A));
        } catch (E) {
          p(E);
        }
      }
      function D(A) {
        A.done ? c(A.value) : a(A.value).then(R, S);
      }
      D((f = f.apply(g, v || [])).next());
    });
  }, s = ue && ue.__generator || function(g, v) {
    var d = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, f, a, c, p;
    return p = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function R(D) {
      return function(A) {
        return S([D, A]);
      };
    }
    function S(D) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (f = 1, a && (c = D[0] & 2 ? a.return : D[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, D[1])).done)
            return c;
          switch (a = 0, c && (D = [D[0] & 2, c.value]), D[0]) {
            case 0:
            case 1:
              c = D;
              break;
            case 4:
              return d.label++, { value: D[1], done: !1 };
            case 5:
              d.label++, a = D[1], D = [0];
              continue;
            case 7:
              D = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (c = d.trys, !(c = c.length > 0 && c[c.length - 1]) && (D[0] === 6 || D[0] === 2)) {
                d = 0;
                continue;
              }
              if (D[0] === 3 && (!c || D[1] > c[0] && D[1] < c[3])) {
                d.label = D[1];
                break;
              }
              if (D[0] === 6 && d.label < c[1]) {
                d.label = c[1], c = D;
                break;
              }
              if (c && d.label < c[2]) {
                d.label = c[2], d.ops.push(D);
                break;
              }
              c[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          D = v.call(g, d);
        } catch (A) {
          D = [6, A], a = 0;
        } finally {
          f = c = 0;
        }
      if (D[0] & 5) throw D[1];
      return { value: D[0] ? D[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ue, "__esModule", { value: !0 });
  var e = Je(), i = or(), h = pt(), r = $e(), m = ir(), w = ar(), o = vt(), y = ze(), T = wt(), l = 100, t = "CLAIM_REFRESH_LOCK";
  function u(g) {
    return {
      addXMLHttpRequestInterceptor: function(v) {
        (0, r.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, w.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(v) {
        return (0, r.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(d, f) {
          return b(this, void 0, void 0, function() {
            return s(this, function(a) {
              switch (a.label) {
                case 0:
                  return [
                    4,
                    e.default.doRequest(
                      function(c) {
                        return v.originalFetch(
                          typeof d == "object" && "clone" in d ? d.clone() : d,
                          n({}, c)
                        );
                      },
                      f,
                      d
                    )
                  ];
                case 1:
                  return [2, a.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(v) {
        if ((0, r.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, r.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var d = v.axiosInstance.interceptors.request, f = 0; f < d.handlers.length; f++)
          if (d.handlers[f].fulfilled === i.interceptorFunctionRequestFulfilled) {
            (0, r.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        v.axiosInstance.interceptors.request.use(i.interceptorFunctionRequestFulfilled, function(a) {
          return b(this, void 0, void 0, function() {
            return s(this, function(c) {
              throw a;
            });
          });
        }), v.axiosInstance.interceptors.response.use(
          (0, i.responseInterceptor)(v.axiosInstance),
          (0, i.responseErrorInterceptor)(v.axiosInstance)
        );
      },
      getUserId: function(v) {
        return b(this, void 0, void 0, function() {
          var d;
          return s(this, function(f) {
            switch (f.label) {
              case 0:
                return (0, r.logDebugMessage)("getUserId: called"), [4, e.FrontToken.getTokenInfo()];
              case 1:
                if (d = f.sent(), d === void 0)
                  throw new Error("No session exists");
                return (0, r.logDebugMessage)("getUserId: returning: " + d.uid), [2, d.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(v) {
        return b(this, void 0, void 0, function() {
          var d, f;
          return s(this, function(a) {
            switch (a.label) {
              case 0:
                return (0, r.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, e.FrontToken.getTokenInfo()];
              case 1:
                if (d = a.sent(), d === void 0)
                  throw new Error("No session exists");
                return d.ate < y.default.getReferenceOrThrow().dateProvider.now() ? ((0, r.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, e.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return f = a.sent(), f ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: v.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, a.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, r.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(d.up)), [2, d.up];
            }
          });
        });
      },
      doesSessionExist: function(v) {
        return b(this, void 0, void 0, function() {
          var d, f, a;
          return s(this, function(c) {
            switch (c.label) {
              case 0:
                return (0, r.logDebugMessage)("doesSessionExist: called"), [4, e.FrontToken.getTokenInfo()];
              case 1:
                return d = c.sent(), d === void 0 ? ((0, r.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : d.ate < y.default.getReferenceOrThrow().dateProvider.now() ? ((0, r.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, e.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return f = c.sent(), [4, (0, e.onUnauthorisedResponse)(f)];
              case 3:
                return a = c.sent(), [2, a.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(v) {
        return b(this, void 0, void 0, function() {
          var d, f, a, c;
          return s(this, function(p) {
            switch (p.label) {
              case 0:
                return (0, r.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(v)];
              case 1:
                return p.sent() ? ((0, r.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  g.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": h.supported_fdi.join(","),
                        rid: e.default.rid
                      }
                    },
                    url: e.default.signOutUrl,
                    userContext: v.userContext
                  })
                ]) : ((0, r.logDebugMessage)("signOut: exiting early because session does not exist"), (0, r.logDebugMessage)("signOut: firing SIGN_OUT event"), g.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: v.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return d = p.sent(), (0, r.logDebugMessage)("signOut: Calling API"), [4, fetch(d.url, d.requestInit)];
              case 3:
                if (f = p.sent(), (0, r.logDebugMessage)("signOut: API ended"), (0, r.logDebugMessage)("signOut: API responded with status code: " + f.status), f.status === g.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (f.status >= 300)
                  throw f;
                return [
                  4,
                  g.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: d.requestInit,
                    url: d.url,
                    fetchResponse: f.clone(),
                    userContext: v.userContext
                  })
                ];
              case 4:
                return p.sent(), [4, f.clone().json()];
              case 5:
                if (a = p.sent(), a.status === "GENERAL_ERROR")
                  throw (0, r.logDebugMessage)("doRequest: Throwing general error"), c = a.message === void 0 ? "No Error Message Provided" : a.message, new m.STGeneralError(c);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(v) {
        return b(this, void 0, void 0, function() {
          var d;
          return s(this, function(f) {
            switch (f.label) {
              case 0:
                return "body" in v.response ? [4, v.response.clone().json()] : [3, 2];
              case 1:
                return d = f.sent(), [3, 3];
              case 2:
                typeof v.response.data == "string" ? d = JSON.parse(v.response.data) : d = v.response.data, f.label = 3;
              case 3:
                return [2, d.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(v) {
        return v.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(v) {
        return b(this, void 0, void 0, function() {
          var d, f, a, c, p, R, I, S, D, A, E, I, O;
          return s(this, function(x) {
            switch (x.label) {
              case 0:
                f = 0, x.label = 1;
              case 1:
                return ++f < l ? [4, T.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return a = x.sent(), (0, r.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, a.acquireLock(t)];
              case 3:
                if (c = x.sent(), !c) return [3, 18];
                x.label = 4;
              case 4:
                return x.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: v.userContext
                  })
                ];
              case 5:
                d = x.sent(), (0, r.logDebugMessage)("validateClaims: claim refresh lock acquired"), p = 0, R = v.claimValidators, x.label = 6;
              case 6:
                return p < R.length ? (I = R[p], [4, I.shouldRefresh(d, v.userContext)]) : [3, 14];
              case 7:
                if (!x.sent()) return [3, 13];
                x.label = 8;
              case 8:
                return x.trys.push([8, 10, , 11]), [4, I.refresh(v.userContext)];
              case 9:
                return x.sent(), [3, 11];
              case 10:
                return S = x.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(I.id),
                  S
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: v.userContext
                  })
                ];
              case 12:
                d = x.sent(), x.label = 13;
              case 13:
                return p++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, r.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, a.releaseLock(t)];
              case 16:
                return x.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, r.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(f, "/").concat(l)), x.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return f !== l ? [3, 22] : ((0, r.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: v.userContext })
                ]);
              case 21:
                d = x.sent(), x.label = 22;
              case 22:
                D = [], A = 0, E = v.claimValidators, x.label = 23;
              case 23:
                return A < E.length ? (I = E[A], [4, I.validate(d, v.userContext)]) : [3, 26];
              case 24:
                O = x.sent(), O.isValid || D.push({
                  id: I.id,
                  reason: O.reason
                }), x.label = 25;
              case 25:
                return A++, [3, 23];
              case 26:
                return [2, D];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(v, d, f) {
        if ((0, r.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + v + " apiDomain: " + d + " sessionTokenBackendDomain: " + f
        ), v.includes("superTokensDoNotDoInterception"))
          return !1;
        v = (0, o.normaliseURLDomainOrThrowError)(v);
        var a = new URL(v), c = a.hostname, p = !1;
        if (d !== "") {
          d = (0, o.normaliseURLDomainOrThrowError)(d);
          var R = new URL(d);
          p = c === R.hostname;
        }
        if (f === void 0 || p)
          return p;
        var S = (0, o.normaliseSessionScopeOrThrowError)(f);
        return (0, o.matchesDomainOrSubdomain)(c, S);
      },
      calculateClockSkewInMillis: function(v) {
        var d = v.accessTokenPayload;
        (0, r.logDebugMessage)("calculateClockSkewInMillis: called");
        var f = d == null ? void 0 : d.iat;
        if (f === void 0 || typeof f != "number")
          return (0, r.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var a = f * 1e3, c = a - Date.now();
        return (0, r.logDebugMessage)("calculateClockSkewInMillis: returning " + c), c;
      }
    };
  }
  return ue.default = u, ue;
}
var Fe = {}, _e = {}, rn;
function cr() {
  if (rn) return _e;
  rn = 1;
  var n = _e && _e.__assign || function() {
    return n = Object.assign || function(s) {
      for (var e, i = 1, h = arguments.length; i < h; i++) {
        e = arguments[i];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (s[r] = e[r]);
      }
      return s;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(_e, "__esModule", { value: !0 }), _e.getProxyObject = void 0;
  function b(s) {
    for (var e = n(n({}, s), { _call: function(o, y) {
      throw new Error("This function should only be called through the recipe object");
    } }), i = Object.keys(e), h = function(o) {
      o !== "_call" && (e[o] = function() {
        for (var y = [], T = 0; T < arguments.length; T++)
          y[T] = arguments[T];
        return this._call(o, y);
      });
    }, r = 0, m = i; r < m.length; r++) {
      var w = m[r];
      h(w);
    }
    return e;
  }
  return _e.getProxyObject = b, _e;
}
var sn;
function lr() {
  if (sn) return Fe;
  sn = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.OverrideableBuilder = void 0;
  var n = cr(), b = (
    /** @class */
    function() {
      function s(e) {
        this.layers = [e], this.proxies = [];
      }
      return s.prototype.override = function(e) {
        for (var i = (0, n.getProxyObject)(this.layers[0]), h = e(i, this), r = 0, m = Object.keys(this.layers[0]); r < m.length; r++) {
          var w = m[r];
          h[w] === i[w] || w === "_call" ? delete h[w] : h[w] === void 0 && (h[w] = null);
        }
        return this.layers.push(h), this.proxies.push(i), this;
      }, s.prototype.build = function() {
        var e = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var i = 0, h = this.layers; i < h.length; i++)
          for (var r = h[i], m = 0, w = Object.keys(r); m < w.length; m++) {
            var o = w[m], y = r[o];
            y !== void 0 && (y === null ? this.result[o] = void 0 : typeof y == "function" ? this.result[o] = y.bind(this.result) : this.result[o] = y);
          }
        for (var T = function(u) {
          var g = l.proxies[u];
          g._call = function(v, d) {
            for (var f = u; f >= 0; --f) {
              var a = e.layers[f][v];
              if (a != null)
                return a.bind(e.result).apply(void 0, d);
            }
          };
        }, l = this, t = 0; t < this.proxies.length; ++t)
          T(t);
        return this.result;
      }, s;
    }()
  );
  return Fe.OverrideableBuilder = b, Fe.default = b, Fe;
}
var Le = {}, on;
function Sn() {
  if (on) return Le;
  on = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.PrimitiveClaim = void 0;
  var n = ze(), b = (
    /** @class */
    function() {
      function s(e) {
        var i = this;
        this.validators = {
          hasValue: function(h, r, m) {
            r === void 0 && (r = i.defaultMaxAgeInSeconds);
            var w = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: m !== void 0 ? m : i.id,
              refresh: function(o) {
                return i.refresh(o);
              },
              shouldRefresh: function(o, y) {
                if (r !== void 0 && r < w.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      w.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(o, y) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                r !== void 0 && o[i.id].t < w.now() - r * 1e3;
              },
              validate: function(o, y) {
                var T = i.getValueFromPayload(o, y);
                if (T === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: h, actualValue: T }
                  };
                var l = (w.now() - i.getLastFetchedTime(o, y)) / 1e3;
                return r !== void 0 && l > r ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: l,
                    maxAgeInSeconds: r
                  }
                } : T !== h ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: h, actualValue: T }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = e.id, this.refresh = e.refresh, this.defaultMaxAgeInSeconds = e.defaultMaxAgeInSeconds;
      }
      return s.prototype.getValueFromPayload = function(e, i) {
        return e[this.id] !== void 0 ? e[this.id].v : void 0;
      }, s.prototype.getLastFetchedTime = function(e, i) {
        return e[this.id] !== void 0 ? e[this.id].t : void 0;
      }, s;
    }()
  );
  return Le.PrimitiveClaim = b, Le;
}
var we = {}, an;
function dr() {
  if (an) return we;
  an = 1;
  var n = we && we.__awaiter || function(i, h, r, m) {
    function w(o) {
      return o instanceof r ? o : new r(function(y) {
        y(o);
      });
    }
    return new (r || (r = Promise))(function(o, y) {
      function T(u) {
        try {
          t(m.next(u));
        } catch (g) {
          y(g);
        }
      }
      function l(u) {
        try {
          t(m.throw(u));
        } catch (g) {
          y(g);
        }
      }
      function t(u) {
        u.done ? o(u.value) : w(u.value).then(T, l);
      }
      t((m = m.apply(i, h || [])).next());
    });
  }, b = we && we.__generator || function(i, h) {
    var r = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, m, w, o, y;
    return y = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function T(t) {
      return function(u) {
        return l([t, u]);
      };
    }
    function l(t) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (m = 1, w && (o = t[0] & 2 ? w.return : t[0] ? w.throw || ((o = w.return) && o.call(w), 0) : w.next) && !(o = o.call(w, t[1])).done)
            return o;
          switch (w = 0, o && (t = [t[0] & 2, o.value]), t[0]) {
            case 0:
            case 1:
              o = t;
              break;
            case 4:
              return r.label++, { value: t[1], done: !1 };
            case 5:
              r.label++, w = t[1], t = [0];
              continue;
            case 7:
              t = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (t[0] === 6 || t[0] === 2)) {
                r = 0;
                continue;
              }
              if (t[0] === 3 && (!o || t[1] > o[0] && t[1] < o[3])) {
                r.label = t[1];
                break;
              }
              if (t[0] === 6 && r.label < o[1]) {
                r.label = o[1], o = t;
                break;
              }
              if (o && r.label < o[2]) {
                r.label = o[2], r.ops.push(t);
                break;
              }
              o[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          t = h.call(i, r);
        } catch (u) {
          t = [6, u], w = 0;
        } finally {
          m = o = 0;
        }
      if (t[0] & 5) throw t[1];
      return { value: t[0] ? t[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(we, "__esModule", { value: !0 }), we.PrimitiveArrayClaim = void 0;
  var s = ze(), e = (
    /** @class */
    function() {
      function i(h) {
        var r = this;
        this.validators = {
          includes: function(m, w, o) {
            w === void 0 && (w = r.defaultMaxAgeInSeconds);
            var y = s.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : r.id,
              refresh: function(T) {
                return r.refresh(T);
              },
              shouldRefresh: function(T, l) {
                if (w !== void 0 && w < y.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      y.getThresholdInSeconds()
                    )
                  );
                return r.getValueFromPayload(T, l) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                w !== void 0 && T[r.id].t < y.now() - w * 1e3;
              },
              validate: function(T, l) {
                return n(r, void 0, void 0, function() {
                  var t, u;
                  return b(this, function(g) {
                    return t = this.getValueFromPayload(T, l), t === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: t
                        }
                      }
                    ] : (u = (y.now() - this.getLastFetchedTime(T, l)) / 1e3, w !== void 0 && u > w ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: w
                        }
                      }
                    ] : t.includes(m) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: m,
                          actualValue: t
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(m, w, o) {
            w === void 0 && (w = r.defaultMaxAgeInSeconds);
            var y = s.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : r.id,
              refresh: function(T) {
                return r.refresh(T);
              },
              shouldRefresh: function(T, l) {
                if (w !== void 0 && w < y.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      y.getThresholdInSeconds()
                    )
                  );
                return r.getValueFromPayload(T, l) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                w !== void 0 && T[r.id].t < y.now() - w * 1e3;
              },
              validate: function(T, l) {
                return n(r, void 0, void 0, function() {
                  var t, u;
                  return b(this, function(g) {
                    return t = this.getValueFromPayload(T, l), t === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: m,
                          actualValue: t
                        }
                      }
                    ] : (u = (y.now() - this.getLastFetchedTime(T, l)) / 1e3, w !== void 0 && u > w ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: w
                        }
                      }
                    ] : t.includes(m) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: m,
                          actualValue: t
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(m, w, o) {
            w === void 0 && (w = r.defaultMaxAgeInSeconds);
            var y = s.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : r.id,
              refresh: function(T) {
                return r.refresh(T);
              },
              shouldRefresh: function(T, l) {
                if (w !== void 0 && w < y.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      y.getThresholdInSeconds()
                    )
                  );
                return r.getValueFromPayload(T, l) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                w !== void 0 && T[r.id].t < y.now() - w * 1e3;
              },
              validate: function(T, l) {
                return n(r, void 0, void 0, function() {
                  var t, u, g, v;
                  return b(this, function(d) {
                    return t = this.getValueFromPayload(T, l), t === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: t
                        }
                      }
                    ] : (u = (y.now() - this.getLastFetchedTime(T, l)) / 1e3, w !== void 0 && u > w ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: w
                        }
                      }
                    ] : (g = new Set(t), v = m.every(function(f) {
                      return g.has(f);
                    }), [
                      2,
                      v ? { isValid: v } : {
                        isValid: v,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: m,
                          actualValue: t
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(m, w, o) {
            w === void 0 && (w = r.defaultMaxAgeInSeconds);
            var y = s.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : r.id,
              refresh: function(T) {
                return r.refresh(T);
              },
              shouldRefresh: function(T, l) {
                if (w !== void 0 && w < y.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      y.getThresholdInSeconds()
                    )
                  );
                return r.getValueFromPayload(T, l) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                w !== void 0 && T[r.id].t < y.now() - w * 1e3;
              },
              validate: function(T, l) {
                return n(r, void 0, void 0, function() {
                  var t, u, g, v;
                  return b(this, function(d) {
                    return t = this.getValueFromPayload(T, l), t === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: t
                        }
                      }
                    ] : (u = (y.now() - this.getLastFetchedTime(T, l)) / 1e3, w !== void 0 && u > w ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: w
                        }
                      }
                    ] : (g = new Set(t), v = m.some(function(f) {
                      return g.has(f);
                    }), [
                      2,
                      v ? { isValid: v } : {
                        isValid: v,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: m,
                          actualValue: t
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(m, w, o) {
            w === void 0 && (w = r.defaultMaxAgeInSeconds);
            var y = s.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : r.id,
              refresh: function(T) {
                return r.refresh(T);
              },
              shouldRefresh: function(T, l) {
                if (w !== void 0 && w < y.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      y.getThresholdInSeconds()
                    )
                  );
                return r.getValueFromPayload(T, l) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                w !== void 0 && T[r.id].t < y.now() - w * 1e3;
              },
              validate: function(T, l) {
                return n(r, void 0, void 0, function() {
                  var t, u, g, v;
                  return b(this, function(d) {
                    return t = this.getValueFromPayload(T, l), t === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: m,
                          actualValue: t
                        }
                      }
                    ] : (u = (y.now() - this.getLastFetchedTime(T, l)) / 1e3, w !== void 0 && u > w ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: w
                        }
                      }
                    ] : (g = new Set(t), v = m.every(function(f) {
                      return !g.has(f);
                    }), [
                      2,
                      v ? { isValid: v } : {
                        isValid: v,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: m,
                          actualValue: t
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = h.id, this.refresh = h.refresh, this.defaultMaxAgeInSeconds = h.defaultMaxAgeInSeconds;
      }
      return i.prototype.getValueFromPayload = function(h, r) {
        return h[this.id] !== void 0 ? h[this.id].v : void 0;
      }, i.prototype.getLastFetchedTime = function(h, r) {
        return h[this.id] !== void 0 ? h[this.id].t : void 0;
      }, i;
    }()
  );
  return we.PrimitiveArrayClaim = e, we;
}
var ye = {}, un;
function fr() {
  if (un) return ye;
  un = 1;
  var n = ye && ye.__extends || /* @__PURE__ */ function() {
    var i = function(h, r) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, w) {
        m.__proto__ = w;
      } || function(m, w) {
        for (var o in w) Object.prototype.hasOwnProperty.call(w, o) && (m[o] = w[o]);
      }, i(h, r);
    };
    return function(h, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      i(h, r);
      function m() {
        this.constructor = h;
      }
      h.prototype = r === null ? Object.create(r) : (m.prototype = r.prototype, new m());
    };
  }(), b = ye && ye.__assign || function() {
    return b = Object.assign || function(i) {
      for (var h, r = 1, m = arguments.length; r < m; r++) {
        h = arguments[r];
        for (var w in h) Object.prototype.hasOwnProperty.call(h, w) && (i[w] = h[w]);
      }
      return i;
    }, b.apply(this, arguments);
  };
  Object.defineProperty(ye, "__esModule", { value: !0 }), ye.BooleanClaim = void 0;
  var s = Sn(), e = (
    /** @class */
    function(i) {
      n(h, i);
      function h(r) {
        var m = i.call(this, r) || this;
        return m.validators = b(b({}, m.validators), {
          isTrue: function(w) {
            return m.validators.hasValue(!0, w);
          },
          isFalse: function(w) {
            return m.validators.hasValue(!1, w);
          }
        }), m;
      }
      return h;
    }(s.PrimitiveClaim)
  );
  return ye.BooleanClaim = e, ye;
}
var cn;
function hr() {
  return cn || (cn = 1, function(n) {
    var b = Ie && Ie.__awaiter || function(d, f, a, c) {
      function p(R) {
        return R instanceof a ? R : new a(function(S) {
          S(R);
        });
      }
      return new (a || (a = Promise))(function(R, S) {
        function D(I) {
          try {
            E(c.next(I));
          } catch (O) {
            S(O);
          }
        }
        function A(I) {
          try {
            E(c.throw(I));
          } catch (O) {
            S(O);
          }
        }
        function E(I) {
          I.done ? R(I.value) : p(I.value).then(D, A);
        }
        E((c = c.apply(d, f || [])).next());
      });
    }, s = Ie && Ie.__generator || function(d, f) {
      var a = {
        label: 0,
        sent: function() {
          if (R[0] & 1) throw R[1];
          return R[1];
        },
        trys: [],
        ops: []
      }, c, p, R, S;
      return S = { next: D(0), throw: D(1), return: D(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
        return this;
      }), S;
      function D(E) {
        return function(I) {
          return A([E, I]);
        };
      }
      function A(E) {
        if (c) throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (c = 1, p && (R = E[0] & 2 ? p.return : E[0] ? p.throw || ((R = p.return) && R.call(p), 0) : p.next) && !(R = R.call(p, E[1])).done)
              return R;
            switch (p = 0, R && (E = [E[0] & 2, R.value]), E[0]) {
              case 0:
              case 1:
                R = E;
                break;
              case 4:
                return a.label++, { value: E[1], done: !1 };
              case 5:
                a.label++, p = E[1], E = [0];
                continue;
              case 7:
                E = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (R = a.trys, !(R = R.length > 0 && R[R.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                  a = 0;
                  continue;
                }
                if (E[0] === 3 && (!R || E[1] > R[0] && E[1] < R[3])) {
                  a.label = E[1];
                  break;
                }
                if (E[0] === 6 && a.label < R[1]) {
                  a.label = R[1], R = E;
                  break;
                }
                if (R && a.label < R[2]) {
                  a.label = R[2], a.ops.push(E);
                  break;
                }
                R[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            E = f.call(d, a);
          } catch (I) {
            E = [6, I], p = 0;
          } finally {
            c = R = 0;
          }
        if (E[0] & 5) throw E[1];
        return { value: E[0] ? E[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.BooleanClaim = n.PrimitiveArrayClaim = n.PrimitiveClaim = n.getInvalidClaimsFromResponse = n.getClaimValue = n.validateClaims = n.signOut = n.addAxiosInterceptors = n.doesSessionExist = n.attemptRefreshingSession = n.getAccessToken = n.getAccessTokenPayloadSecurely = n.getUserId = n.init = void 0;
    var e = Je(), i = ur(), h = lr(), r = vt(), m = bn(), w = be(), o = wt(), y = kn(), T = $e(), l = ze(), t = (
      /** @class */
      function() {
        function d() {
        }
        d.init = function(a) {
          m.default.init(a.cookieHandler), w.default.init(a.windowHandler), l.default.init(a.dateProvider), o.default.init(
            a.lockFactory,
            w.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var c = (0, r.validateAndNormaliseInputOrThrowError)(a);
          a.enableDebugLogs !== void 0 && a.enableDebugLogs && (0, T.enableLogging)();
          var p = new h.default(
            (0, i.default)({
              onHandleEvent: c.onHandleEvent,
              preAPIHook: c.preAPIHook,
              postAPIHook: c.postAPIHook,
              sessionExpiredStatusCode: c.sessionExpiredStatusCode
            })
          ).override(c.override.functions).build();
          e.default.init(c, p), d.axiosInterceptorQueue.forEach(function(R) {
            R();
          }), d.axiosInterceptorQueue = [];
        }, d.getUserId = function(a) {
          return e.default.recipeImpl.getUserId({
            userContext: (0, r.getNormalisedUserContext)(a === void 0 ? void 0 : a.userContext)
          });
        }, d.getAccessTokenPayloadSecurely = function(a) {
          return b(this, void 0, void 0, function() {
            return s(this, function(c) {
              return [
                2,
                e.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, r.getNormalisedUserContext)(
                    a === void 0 ? void 0 : a.userContext
                  )
                })
              ];
            });
          });
        };
        var f;
        return f = d, d.axiosInterceptorQueue = [], d.attemptRefreshingSession = function() {
          return b(void 0, void 0, void 0, function() {
            return s(f, function(a) {
              return [2, e.default.attemptRefreshingSession()];
            });
          });
        }, d.doesSessionExist = function(a) {
          return e.default.recipeImpl.doesSessionExist({
            userContext: (0, r.getNormalisedUserContext)(a === void 0 ? void 0 : a.userContext)
          });
        }, d.addAxiosInterceptors = function(a, c) {
          e.default.initCalled ? e.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: a,
            userContext: (0, r.getNormalisedUserContext)(c)
          }) : d.axiosInterceptorQueue.push(function() {
            e.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: a,
              userContext: (0, r.getNormalisedUserContext)(c)
            });
          });
        }, d.signOut = function(a) {
          return e.default.recipeImpl.signOut({
            userContext: (0, r.getNormalisedUserContext)(a === void 0 ? void 0 : a.userContext)
          });
        }, d.getInvalidClaimsFromResponse = function(a) {
          return b(this, void 0, void 0, function() {
            return s(this, function(c) {
              return [
                2,
                e.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: a.response,
                  userContext: (0, r.getNormalisedUserContext)(a.userContext)
                })
              ];
            });
          });
        }, d.getClaimValue = function(a) {
          return b(this, void 0, void 0, function() {
            var c, p;
            return s(this, function(R) {
              switch (R.label) {
                case 0:
                  return c = (0, r.getNormalisedUserContext)(
                    a === void 0 ? void 0 : a.userContext
                  ), [
                    4,
                    d.getAccessTokenPayloadSecurely({ userContext: c })
                  ];
                case 1:
                  return p = R.sent(), [2, a.claim.getValueFromPayload(p, c)];
              }
            });
          });
        }, d.validateClaims = function(a, c) {
          var p = (0, r.getNormalisedUserContext)(c), R = y.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), S = e.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: R,
            userContext: p
          }), D = a !== void 0 ? a(S, p) : S;
          return D.length === 0 ? [] : e.default.recipeImpl.validateClaims({
            claimValidators: D,
            userContext: (0, r.getNormalisedUserContext)(c)
          });
        }, d.getAccessToken = function(a) {
          return b(void 0, void 0, void 0, function() {
            return s(f, function(c) {
              switch (c.label) {
                case 0:
                  return [
                    4,
                    e.default.recipeImpl.doesSessionExist({
                      userContext: (0, r.getNormalisedUserContext)(
                        a === void 0 ? void 0 : a.userContext
                      )
                    })
                  ];
                case 1:
                  return c.sent() ? [2, (0, e.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, d;
      }()
    );
    n.default = t, n.init = t.init, n.getUserId = t.getUserId, n.getAccessTokenPayloadSecurely = t.getAccessTokenPayloadSecurely, n.getAccessToken = t.getAccessToken, n.attemptRefreshingSession = t.attemptRefreshingSession, n.doesSessionExist = t.doesSessionExist, n.addAxiosInterceptors = t.addAxiosInterceptors, n.signOut = t.signOut, n.validateClaims = t.validateClaims, n.getClaimValue = t.getClaimValue, n.getInvalidClaimsFromResponse = t.getInvalidClaimsFromResponse;
    var u = Sn();
    Object.defineProperty(n, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return u.PrimitiveClaim;
      }
    });
    var g = dr();
    Object.defineProperty(n, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return g.PrimitiveArrayClaim;
      }
    });
    var v = fr();
    Object.defineProperty(n, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return v.BooleanClaim;
      }
    });
  }(Ie)), Ie;
}
var ln;
function Tn() {
  return ln || (ln = 1, function(n) {
    function b(s) {
      for (var e in s) n.hasOwnProperty(e) || (n[e] = s[e]);
    }
    n.__esModule = !0, b(hr());
  }(lt)), lt;
}
var Ve = {}, dn;
function gr() {
  return dn || (dn = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.EMAILVERIFICATION_CLAIM_ID = void 0, Ve.EMAILVERIFICATION_CLAIM_ID = "st-ev"), Ve;
}
var fn;
function vr() {
  if (fn) return K;
  fn = 1;
  var n = K && K.__extends || /* @__PURE__ */ function() {
    var T = function(l, t) {
      return T = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, g) {
        u.__proto__ = g;
      } || function(u, g) {
        for (var v in g) Object.prototype.hasOwnProperty.call(g, v) && (u[v] = g[v]);
      }, T(l, t);
    };
    return function(l, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      T(l, t);
      function u() {
        this.constructor = l;
      }
      l.prototype = t === null ? Object.create(t) : (u.prototype = t.prototype, new u());
    };
  }(), b = K && K.__assign || function() {
    return b = Object.assign || function(T) {
      for (var l, t = 1, u = arguments.length; t < u; t++) {
        l = arguments[t];
        for (var g in l) Object.prototype.hasOwnProperty.call(l, g) && (T[g] = l[g]);
      }
      return T;
    }, b.apply(this, arguments);
  }, s = K && K.__awaiter || function(T, l, t, u) {
    function g(v) {
      return v instanceof t ? v : new t(function(d) {
        d(v);
      });
    }
    return new (t || (t = Promise))(function(v, d) {
      function f(p) {
        try {
          c(u.next(p));
        } catch (R) {
          d(R);
        }
      }
      function a(p) {
        try {
          c(u.throw(p));
        } catch (R) {
          d(R);
        }
      }
      function c(p) {
        p.done ? v(p.value) : g(p.value).then(f, a);
      }
      c((u = u.apply(T, l || [])).next());
    });
  }, e = K && K.__generator || function(T, l) {
    var t = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, u, g, v, d;
    return d = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function f(c) {
      return function(p) {
        return a([c, p]);
      };
    }
    function a(c) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; t; )
        try {
          if (u = 1, g && (v = c[0] & 2 ? g.return : c[0] ? g.throw || ((v = g.return) && v.call(g), 0) : g.next) && !(v = v.call(g, c[1])).done)
            return v;
          switch (g = 0, v && (c = [c[0] & 2, v.value]), c[0]) {
            case 0:
            case 1:
              v = c;
              break;
            case 4:
              return t.label++, { value: c[1], done: !1 };
            case 5:
              t.label++, g = c[1], c = [0];
              continue;
            case 7:
              c = t.ops.pop(), t.trys.pop();
              continue;
            default:
              if (v = t.trys, !(v = v.length > 0 && v[v.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                t = 0;
                continue;
              }
              if (c[0] === 3 && (!v || c[1] > v[0] && c[1] < v[3])) {
                t.label = c[1];
                break;
              }
              if (c[0] === 6 && t.label < v[1]) {
                t.label = v[1], v = c;
                break;
              }
              if (v && t.label < v[2]) {
                t.label = v[2], t.ops.push(c);
                break;
              }
              v[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          c = l.call(T, t);
        } catch (p) {
          c = [6, p], g = 0;
        } finally {
          u = v = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  }, i = K && K.__spreadArray || function(T, l, t) {
    if (t || arguments.length === 2)
      for (var u = 0, g = l.length, v; u < g; u++)
        (v || !(u in l)) && (v || (v = Array.prototype.slice.call(l, 0, u)), v[u] = l[u]);
    return T.concat(v || Array.prototype.slice.call(l));
  };
  Object.defineProperty(K, "__esModule", { value: !0 }), K.Recipe = void 0;
  var h = rr(), r = Tn(), m = Rn(), w = gr(), o = [w.EMAILVERIFICATION_CLAIM_ID], y = (
    /** @class */
    function(T) {
      n(l, T);
      function l(t) {
        var u = T.call(this, t) || this;
        return u.getUserId = function(g) {
          return r.default.getUserId({
            userContext: g.userContext
          });
        }, u.getAccessToken = function(g) {
          return s(u, void 0, void 0, function() {
            return e(this, function(v) {
              return [
                2,
                r.default.getAccessToken({
                  userContext: g.userContext
                })
              ];
            });
          });
        }, u.getAccessTokenPayloadSecurely = function(g) {
          return s(u, void 0, void 0, function() {
            return e(this, function(v) {
              return [
                2,
                r.default.getAccessTokenPayloadSecurely({
                  userContext: g.userContext
                })
              ];
            });
          });
        }, u.doesSessionExist = function(g) {
          return r.default.doesSessionExist({
            userContext: g.userContext
          });
        }, u.signOut = function(g) {
          return r.default.signOut({
            userContext: g.userContext
          });
        }, u.attemptRefreshingSession = function() {
          return s(u, void 0, void 0, function() {
            return e(this, function(g) {
              return [2, r.default.attemptRefreshingSession()];
            });
          });
        }, u.validateClaims = function(g) {
          return r.default.validateClaims(g.overrideGlobalClaimValidators, g.userContext);
        }, r.default.init(
          b(b({}, t), {
            override: {
              functions: function(g, v) {
                var d;
                return v.override(function(f) {
                  return b(b({}, f), {
                    getGlobalClaimValidators: function(a) {
                      var c = f.getGlobalClaimValidators(a);
                      return i(
                        i(
                          [],
                          c.filter(function(p) {
                            return o.includes(p.id);
                          }),
                          !0
                        ),
                        c.filter(function(p) {
                          return !o.includes(p.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((d = t.override) === null || d === void 0) && d.functions && v.override(t.override.functions), g;
              }
            },
            preAPIHook: function(g) {
              return s(u, void 0, void 0, function() {
                var v, d;
                return e(this, function(f) {
                  return v = new Headers(g.requestInit.headers), v.set("rid", t.recipeId), d = b(b({}, g), {
                    requestInit: b(b({}, g.requestInit), { headers: v })
                  }), t.preAPIHook === void 0 ? [2, d] : [2, t.preAPIHook(g)];
                });
              });
            },
            apiDomain: t.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: t.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), u;
      }
      return l.init = function(t) {
        return function(u, g, v) {
          return l.instance = new l(
            b(b({}, t), {
              appInfo: u,
              recipeId: l.RECIPE_ID,
              enableDebugLogs: v
            })
          ), l.instance;
        };
      }, l.prototype.getClaimValue = function(t) {
        return r.default.getClaimValue(t);
      }, l.prototype.getInvalidClaimsFromResponse = function(t) {
        return r.default.getInvalidClaimsFromResponse(t);
      }, l.addAxiosInterceptors = function(t, u) {
        return r.default.addAxiosInterceptors(t, u);
      }, l.getInstanceOrThrow = function() {
        if (l.instance === void 0) {
          var t = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw t = (0, m.checkForSSRErrorAndAppendIfNeeded)(t), Error(t);
        }
        return l.instance;
      }, l.reset = function() {
        (0, m.isTest)() && (l.instance = void 0);
      }, l.RECIPE_ID = "session", l;
    }(h.default)
  );
  return K.Recipe = y, K.default = y, K;
}
var hn;
function mr() {
  return hn || (hn = 1, function(n) {
    var b = ke && ke.__awaiter || function(f, a, c, p) {
      function R(S) {
        return S instanceof c ? S : new c(function(D) {
          D(S);
        });
      }
      return new (c || (c = Promise))(function(S, D) {
        function A(O) {
          try {
            I(p.next(O));
          } catch (x) {
            D(x);
          }
        }
        function E(O) {
          try {
            I(p.throw(O));
          } catch (x) {
            D(x);
          }
        }
        function I(O) {
          O.done ? S(O.value) : R(O.value).then(A, E);
        }
        I((p = p.apply(f, a || [])).next());
      });
    }, s = ke && ke.__generator || function(f, a) {
      var c = {
        label: 0,
        sent: function() {
          if (S[0] & 1) throw S[1];
          return S[1];
        },
        trys: [],
        ops: []
      }, p, R, S, D;
      return D = { next: A(0), throw: A(1), return: A(2) }, typeof Symbol == "function" && (D[Symbol.iterator] = function() {
        return this;
      }), D;
      function A(I) {
        return function(O) {
          return E([I, O]);
        };
      }
      function E(I) {
        if (p) throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (p = 1, R && (S = I[0] & 2 ? R.return : I[0] ? R.throw || ((S = R.return) && S.call(R), 0) : R.next) && !(S = S.call(R, I[1])).done)
              return S;
            switch (R = 0, S && (I = [I[0] & 2, S.value]), I[0]) {
              case 0:
              case 1:
                S = I;
                break;
              case 4:
                return c.label++, { value: I[1], done: !1 };
              case 5:
                c.label++, R = I[1], I = [0];
                continue;
              case 7:
                I = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (S = c.trys, !(S = S.length > 0 && S[S.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                  c = 0;
                  continue;
                }
                if (I[0] === 3 && (!S || I[1] > S[0] && I[1] < S[3])) {
                  c.label = I[1];
                  break;
                }
                if (I[0] === 6 && c.label < S[1]) {
                  c.label = S[1], S = I;
                  break;
                }
                if (S && c.label < S[2]) {
                  c.label = S[2], c.ops.push(I);
                  break;
                }
                S[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            I = a.call(f, c);
          } catch (O) {
            I = [6, O], R = 0;
          } finally {
            p = S = 0;
          }
        if (I[0] & 5) throw I[1];
        return { value: I[0] ? I[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.getInvalidClaimsFromResponse = n.getClaimValue = n.validateClaims = n.signOut = n.addAxiosInterceptors = n.doesSessionExist = n.attemptRefreshingSession = n.getAccessToken = n.getAccessTokenPayloadSecurely = n.getUserId = n.init = n.BooleanClaim = n.PrimitiveArrayClaim = n.PrimitiveClaim = void 0;
    var e = Rn(), i = vr(), h = (
      /** @class */
      function() {
        function f() {
        }
        return f.init = function(a) {
          return i.default.init(a);
        }, f.getUserId = function(a) {
          return i.default.getInstanceOrThrow().getUserId({
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f.getAccessToken = function(a) {
          return i.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f.getAccessTokenPayloadSecurely = function(a) {
          return b(this, void 0, void 0, function() {
            return s(this, function(c) {
              return [
                2,
                i.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, e.getNormalisedUserContext)(
                    a == null ? void 0 : a.userContext
                  )
                })
              ];
            });
          });
        }, f.attemptRefreshingSession = function() {
          return b(this, void 0, void 0, function() {
            return s(this, function(a) {
              return [2, i.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, f.doesSessionExist = function(a) {
          return i.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f.addAxiosInterceptors = function(a, c) {
          return i.default.addAxiosInterceptors(a, (0, e.getNormalisedUserContext)(c));
        }, f.signOut = function(a) {
          return i.default.getInstanceOrThrow().signOut({
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f.getClaimValue = function(a) {
          return i.default.getInstanceOrThrow().getClaimValue({
            claim: a.claim,
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f.validateClaims = function(a) {
          return i.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: a == null ? void 0 : a.overrideGlobalClaimValidators,
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f.getInvalidClaimsFromResponse = function(a) {
          return i.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: a.response,
            userContext: (0, e.getNormalisedUserContext)(
              a == null ? void 0 : a.userContext
            )
          });
        }, f;
      }()
    );
    n.default = h;
    var r = h.init;
    n.init = r;
    var m = h.getUserId;
    n.getUserId = m;
    var w = h.getAccessTokenPayloadSecurely;
    n.getAccessTokenPayloadSecurely = w;
    var o = h.getAccessToken;
    n.getAccessToken = o;
    var y = h.attemptRefreshingSession;
    n.attemptRefreshingSession = y;
    var T = h.doesSessionExist;
    n.doesSessionExist = T;
    var l = h.addAxiosInterceptors;
    n.addAxiosInterceptors = l;
    var t = h.signOut;
    n.signOut = t;
    var u = h.validateClaims;
    n.validateClaims = u;
    var g = h.getClaimValue;
    n.getClaimValue = g;
    var v = h.getInvalidClaimsFromResponse;
    n.getInvalidClaimsFromResponse = v;
    var d = Tn();
    Object.defineProperty(n, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return d.PrimitiveClaim;
      }
    }), Object.defineProperty(n, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return d.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(n, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return d.BooleanClaim;
      }
    });
  }(ke)), ke;
}
var gn;
function pr() {
  return gn || (gn = 1, function(n) {
    function b(s) {
      for (var e in s) n.hasOwnProperty(e) || (n[e] = s[e]);
    }
    n.__esModule = !0, b(mr());
  }(it)), it;
}
var wr = pr();
const yr = /* @__PURE__ */ jn(wr), br = /* @__PURE__ */ Ln("userStore", () => {
  const n = tt(!1), b = localStorage.getItem("theme") || "light", s = tt(b);
  document.documentElement.classList.toggle("dark", b === "dark");
  function e() {
    const h = s.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", h), s.value = h, document.documentElement.classList.toggle("dark", h === "dark");
  }
  async function i() {
    n.value = await yr.doesSessionExist();
  }
  return {
    isSignedIn: n,
    updateAuth: i,
    theme: s,
    toggleTheme: e
  };
}), kr = /* @__PURE__ */ vn({
  __name: "ThemeToggle",
  setup(n) {
    const b = br();
    return gt(() => b.theme === "light" ? "pi pi-sun" : "pi pi-moon"), (s, e) => (pn(), mn("button", null, Nn(xn(b).isSignedIn), 1));
  }
}), Rr = /* @__PURE__ */ vn({
  __name: "Toaster",
  setup(n) {
    return (b, s) => (pn(), mn("div"));
  }
}), Tr = {
  install: (n) => {
    n.component("ThemeToggle", kr), n.component("Toaster", Rr);
  }
};
export {
  kr as ThemeToggle,
  Rr as Toaster,
  Tr as default
};
