(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [561],
  {
    4581: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addBasePath = function (e, t) {
          return o.normalizePathTrailingSlash(n.addPathPrefix(e, ""));
        });
      var n = r(4182),
        o = r(884);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1654: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addLocale = void 0),
        r(884),
        (t.addLocale = (e, ...t) => e),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2882: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7760: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasBasePath = function (e) {
          return n.pathHasPrefix(e, "");
        });
      var n = r(8954);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3297: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(2648).Z,
        o = r(7273).Z,
        a = n(r(7294)),
        l = r(5161),
        u = r(6341),
        i = r(1365),
        s = r(7919),
        c = r(1654),
        f = r(6129),
        d = r(3191),
        p = r(3700),
        h = r(2882),
        y = r(4581);
      let g = new Set();
      function m(e, t, r, n, o) {
        if ("undefined" != typeof window && (o || u.isLocalURL(t))) {
          if (!n.bypassPrefetchedCheck) {
            let o =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              a = t + "%" + r + "%" + o;
            if (g.has(a)) return;
            g.add(a);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch((e) => {});
        }
      }
      function v(e) {
        return "string" == typeof e ? e : i.formatUrl(e);
      }
      let b = a.default.forwardRef(function (e, t) {
        let r, n;
        let {
            href: i,
            as: g,
            children: b,
            prefetch: _,
            passHref: P,
            replace: j,
            shallow: x,
            scroll: C,
            locale: O,
            onClick: R,
            onMouseEnter: M,
            onTouchStart: E,
            legacyBehavior: $ = !1,
          } = e,
          S = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = b),
          $ &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = a.default.createElement("a", null, r));
        let I = !1 !== _,
          T = a.default.useContext(f.RouterContext),
          L = a.default.useContext(d.AppRouterContext),
          w = null != T ? T : L,
          A = !T,
          { href: k, as: U } = a.default.useMemo(() => {
            if (!T) {
              let e = v(i);
              return { href: e, as: g ? v(g) : e };
            }
            let [e, t] = l.resolveHref(T, i, !0);
            return { href: e, as: g ? l.resolveHref(T, g) : t || e };
          }, [T, i, g]),
          N = a.default.useRef(k),
          D = a.default.useRef(U);
        $ && (n = a.default.Children.only(r));
        let W = $ ? n && "object" == typeof n && n.ref : t,
          [z, Z, q] = p.useIntersection({ rootMargin: "200px" }),
          B = a.default.useCallback(
            (e) => {
              (D.current !== U || N.current !== k) &&
                (q(), (D.current = U), (N.current = k)),
                z(e),
                W &&
                  ("function" == typeof W
                    ? W(e)
                    : "object" == typeof W && (W.current = e));
            },
            [U, W, k, q, z]
          );
        a.default.useEffect(() => {
          w && Z && I && m(w, k, U, { locale: O }, A);
        }, [U, k, Z, O, I, null == T ? void 0 : T.locale, w, A]);
        let F = {
          ref: B,
          onClick(e) {
            $ || "function" != typeof R || R(e),
              $ &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              w &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, l, i, s, c, f) {
                  let { nodeName: d } = e.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let t = e.currentTarget,
                        r = t.getAttribute("target");
                      return (
                        (r && "_self" !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !u.isLocalURL(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: l,
                          locale: s,
                          scroll: i,
                        })
                      : t[o ? "replace" : "push"](n || r, {
                          forceOptimisticNavigation: !f,
                        });
                  };
                  c ? a.default.startTransition(h) : h();
                })(e, w, k, U, j, x, C, O, A, I);
          },
          onMouseEnter(e) {
            $ || "function" != typeof M || M(e),
              $ &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              w &&
                (I || !A) &&
                m(
                  w,
                  k,
                  U,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  A
                );
          },
          onTouchStart(e) {
            $ || "function" != typeof E || E(e),
              $ &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              w &&
                (I || !A) &&
                m(
                  w,
                  k,
                  U,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  A
                );
          },
        };
        if (s.isAbsoluteUrl(U)) F.href = U;
        else if (!$ || P || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== O ? O : null == T ? void 0 : T.locale,
            t =
              (null == T ? void 0 : T.isLocaleDomain) &&
              h.getDomainLocale(
                U,
                e,
                null == T ? void 0 : T.locales,
                null == T ? void 0 : T.domainLocales
              );
          F.href =
            t ||
            y.addBasePath(
              c.addLocale(U, e, null == T ? void 0 : T.defaultLocale)
            );
        }
        return $
          ? a.default.cloneElement(n, F)
          : a.default.createElement("a", Object.assign({}, S, F), r);
      });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    884: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizePathTrailingSlash = void 0);
      var n = r(7042),
        o = r(9518);
      let a = (e) => {
        if (!e.startsWith("/")) return e;
        let { pathname: t, query: r, hash: a } = o.parsePath(e);
        return `${n.removeTrailingSlash(t)}${r}${a}`;
      };
      (t.normalizePathTrailingSlash = a),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4030: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cancelIdleCallback = t.requestIdleCallback = void 0);
      let r =
        ("undefined" != typeof self &&
          self.requestIdleCallback &&
          self.requestIdleCallback.bind(window)) ||
        function (e) {
          let t = Date.now();
          return self.setTimeout(function () {
            e({
              didTimeout: !1,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - t));
              },
            });
          }, 1);
        };
      t.requestIdleCallback = r;
      let n =
        ("undefined" != typeof self &&
          self.cancelIdleCallback &&
          self.cancelIdleCallback.bind(window)) ||
        function (e) {
          return clearTimeout(e);
        };
      (t.cancelIdleCallback = n),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3700: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function ({
          rootRef: e,
          rootMargin: t,
          disabled: r,
        }) {
          let i = r || !a,
            [s, c] = n.useState(!1),
            f = n.useRef(null),
            d = n.useCallback((e) => {
              f.current = e;
            }, []);
          n.useEffect(() => {
            if (a) {
              if (i || s) return;
              let r = f.current;
              if (r && r.tagName) {
                let n = (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = u.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = l.get(n))) return t;
                    let o = new Map(),
                      a = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e);
                    return (
                      (t = { id: r, observer: a, elements: o }),
                      u.push(r),
                      l.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), l.delete(n);
                        let e = u.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(r, (e) => e && c(e), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: t,
                });
                return n;
              }
            } else if (!s) {
              let e = o.requestIdleCallback(() => c(!0));
              return () => o.cancelIdleCallback(e);
            }
          }, [i, t, e, s, f.current]);
          let p = n.useCallback(() => {
            c(!1);
          }, []);
          return [d, s, p];
        });
      var n = r(7294),
        o = r(4030);
      let a = "function" == typeof IntersectionObserver,
        l = new Map(),
        u = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3191: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
          t.CacheStates =
            void 0);
      var n,
        o,
        a = (0, r(2648).Z)(r(7294));
      (t.CacheStates = n),
        ((o = n || (t.CacheStates = n = {})).LAZY_INITIALIZED =
          "LAZYINITIALIZED"),
        (o.DATA_FETCH = "DATAFETCH"),
        (o.READY = "READY");
      let l = a.default.createContext(null);
      t.AppRouterContext = l;
      let u = a.default.createContext(null);
      t.LayoutRouterContext = u;
      let i = a.default.createContext(null);
      t.GlobalLayoutRouterContext = i;
      let s = a.default.createContext(null);
      t.TemplateContext = s;
    },
    2811: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.escapeStringRegexp = function (e) {
          return r.test(e) ? e.replace(n, "\\$&") : e;
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
    },
    6129: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RouterContext = void 0);
      var n = (0, r(2648).Z)(r(7294));
      let o = n.default.createContext(null);
      t.RouterContext = o;
    },
    4182: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addPathPrefix = function (e, t) {
          if (!e.startsWith("/") || !t) return e;
          let { pathname: r, query: o, hash: a } = n.parsePath(e);
          return `${t}${r}${o}${a}`;
        });
      var n = r(9518);
    },
    1365: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatUrl = a),
        (t.formatWithValidation = function (e) {
          return a(e);
        }),
        (t.urlObjectKeys = void 0);
      var n = (0, r(1598).Z)(r(1987));
      let o = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: r } = e,
          a = e.protocol || "",
          l = e.pathname || "",
          u = e.hash || "",
          i = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : r &&
              ((s = t + (~r.indexOf(":") ? `[${r}]` : r)),
              e.port && (s += ":" + e.port)),
          i &&
            "object" == typeof i &&
            (i = String(n.urlQueryToSearchParams(i)));
        let c = e.search || (i && `?${i}`) || "";
        return (
          a && !a.endsWith(":") && (a += ":"),
          e.slashes || ((!a || o.test(a)) && !1 !== s)
            ? ((s = "//" + (s || "")), l && "/" !== l[0] && (l = "/" + l))
            : s || (s = ""),
          u && "#" !== u[0] && (u = "#" + u),
          c && "?" !== c[0] && (c = "?" + c),
          `${a}${s}${(l = l.replace(/[?#]/g, encodeURIComponent))}${(c =
            c.replace("#", "%23"))}${u}`
        );
      }
      t.urlObjectKeys = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
    },
    6517: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.interpolateAs = function (e, t, r) {
          let a = "",
            l = o.getRouteRegex(e),
            u = l.groups,
            i = (t !== e ? n.getRouteMatcher(l)(t) : "") || r;
          a = e;
          let s = Object.keys(u);
          return (
            s.every((e) => {
              let t = i[e] || "",
                { repeat: r, optional: n } = u[e],
                o = `[${r ? "..." : ""}${e}]`;
              return (
                n && (o = `${t ? "" : "/"}[${o}]`),
                r && !Array.isArray(t) && (t = [t]),
                (n || e in i) &&
                  (a =
                    a.replace(
                      o,
                      r
                        ? t.map((e) => encodeURIComponent(e)).join("/")
                        : encodeURIComponent(t)
                    ) || "/")
              );
            }) || (a = ""),
            { params: s, result: a }
          );
        });
      var n = r(3774),
        o = r(9221);
    },
    9981: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDynamicRoute = function (e) {
          return r.test(e);
        });
      let r = /\/\[[^/]+?\](?=\/|$)/;
    },
    6341: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isLocalURL = function (e) {
          if (!n.isAbsoluteUrl(e)) return !0;
          try {
            let t = n.getLocationOrigin(),
              r = new URL(e, t);
            return r.origin === t && o.hasBasePath(r.pathname);
          } catch (e) {
            return !1;
          }
        });
      var n = r(7919),
        o = r(7760);
    },
    5927: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.omit = function (e, t) {
          let r = {};
          return (
            Object.keys(e).forEach((n) => {
              t.includes(n) || (r[n] = e[n]);
            }),
            r
          );
        });
    },
    9518: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parsePath = function (e) {
          let t = e.indexOf("#"),
            r = e.indexOf("?"),
            n = r > -1 && (t < 0 || r < t);
          return n || t > -1
            ? {
                pathname: e.substring(0, n ? r : t),
                query: n ? e.substring(r, t > -1 ? t : void 0) : "",
                hash: t > -1 ? e.slice(t) : "",
              }
            : { pathname: e, query: "", hash: "" };
        });
    },
    8954: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pathHasPrefix = function (e, t) {
          if ("string" != typeof e) return !1;
          let { pathname: r } = n.parsePath(e);
          return r === t || r.startsWith(t + "/");
        });
      var n = r(9518);
    },
    1987: function (e, t) {
      "use strict";
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.searchParamsToUrlQuery = function (e) {
          let t = {};
          return (
            e.forEach((e, r) => {
              void 0 === t[r]
                ? (t[r] = e)
                : Array.isArray(t[r])
                ? t[r].push(e)
                : (t[r] = [t[r], e]);
            }),
            t
          );
        }),
        (t.urlQueryToSearchParams = function (e) {
          let t = new URLSearchParams();
          return (
            Object.entries(e).forEach(([e, n]) => {
              Array.isArray(n)
                ? n.forEach((n) => t.append(e, r(n)))
                : t.set(e, r(n));
            }),
            t
          );
        }),
        (t.assign = function (e, ...t) {
          return (
            t.forEach((t) => {
              Array.from(t.keys()).forEach((t) => e.delete(t)),
                t.forEach((t, r) => e.append(r, t));
            }),
            e
          );
        });
    },
    7042: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.removeTrailingSlash = function (e) {
          return e.replace(/\/$/, "") || "/";
        });
    },
    5161: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHref = function (e, t, r) {
          let f;
          let d = "string" == typeof t ? t : o.formatWithValidation(t),
            p = d.match(/^[a-zA-Z]{1,}:\/\//),
            h = p ? d.slice(p[0].length) : d,
            y = h.split("?");
          if ((y[0] || "").match(/(\/\/|\\)/)) {
            console.error(
              `Invalid href '${d}' passed to next/router in page: '${e.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`
            );
            let t = l.normalizeRepeatedSlashes(h);
            d = (p ? p[0] : "") + t;
          }
          if (!i.isLocalURL(d)) return r ? [d] : d;
          try {
            f = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n");
          } catch (e) {
            f = new URL("/", "http://n");
          }
          try {
            let e = new URL(d, f);
            e.pathname = u.normalizePathTrailingSlash(e.pathname);
            let t = "";
            if (s.isDynamicRoute(e.pathname) && e.searchParams && r) {
              let r = n.searchParamsToUrlQuery(e.searchParams),
                { result: l, params: u } = c.interpolateAs(
                  e.pathname,
                  e.pathname,
                  r
                );
              l &&
                (t = o.formatWithValidation({
                  pathname: l,
                  hash: e.hash,
                  query: a.omit(r, u),
                }));
            }
            let l =
              e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
            return r ? [l, t || l] : l;
          } catch (e) {
            return r ? [d] : d;
          }
        });
      var n = r(1987),
        o = r(1365),
        a = r(5927),
        l = r(7919),
        u = r(884),
        i = r(6341),
        s = r(9981),
        c = r(6517);
    },
    3774: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRouteMatcher = function ({ re: e, groups: t }) {
          return (r) => {
            let o = e.exec(r);
            if (!o) return !1;
            let a = (e) => {
                try {
                  return decodeURIComponent(e);
                } catch (e) {
                  throw new n.DecodeError("failed to decode param");
                }
              },
              l = {};
            return (
              Object.keys(t).forEach((e) => {
                let r = t[e],
                  n = o[r.pos];
                void 0 !== n &&
                  (l[e] = ~n.indexOf("/")
                    ? n.split("/").map((e) => a(e))
                    : r.repeat
                    ? [a(n)]
                    : a(n));
              }),
              l
            );
          };
        });
      var n = r(7919);
    },
    9221: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRouteRegex = i),
        (t.getNamedRouteRegex = function (e) {
          let t = s(e);
          return n({}, i(e), {
            namedRegex: `^${t.namedParameterizedRoute}(?:/)?$`,
            routeKeys: t.routeKeys,
          });
        }),
        (t.getNamedMiddlewareRegex = function (e, t) {
          let { parameterizedRoute: r } = u(e),
            { catchAll: n = !0 } = t;
          if ("/" === r) return { namedRegex: `^/${n ? ".*" : ""}$` };
          let { namedParameterizedRoute: o } = s(e);
          return { namedRegex: `^${o}${n ? "(?:(/.*)?)" : ""}$` };
        });
      var n = r(6495).Z,
        o = r(2811),
        a = r(7042);
      function l(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function u(e) {
        let t = a.removeTrailingSlash(e).slice(1).split("/"),
          r = {},
          n = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              if (!(e.startsWith("[") && e.endsWith("]")))
                return `/${o.escapeStringRegexp(e)}`;
              {
                let { key: t, optional: o, repeat: a } = l(e.slice(1, -1));
                return (
                  (r[t] = { pos: n++, repeat: a, optional: o }),
                  a ? (o ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function i(e) {
        let { parameterizedRoute: t, groups: r } = u(e);
        return { re: RegExp(`^${t}(?:/)?$`), groups: r };
      }
      function s(e) {
        let t, r;
        let n = a.removeTrailingSlash(e).slice(1).split("/"),
          u =
            ((t = 97),
            (r = 1),
            () => {
              let e = "";
              for (let n = 0; n < r; n++)
                (e += String.fromCharCode(t)), ++t > 122 && (r++, (t = 97));
              return e;
            }),
          i = {};
        return {
          namedParameterizedRoute: n
            .map((e) => {
              if (!(e.startsWith("[") && e.endsWith("]")))
                return `/${o.escapeStringRegexp(e)}`;
              {
                let { key: t, optional: r, repeat: n } = l(e.slice(1, -1)),
                  o = t.replace(/\W/g, ""),
                  a = !1;
                return (
                  (0 === o.length || o.length > 30) && (a = !0),
                  isNaN(parseInt(o.slice(0, 1))) || (a = !0),
                  a && (o = u()),
                  (i[o] = t),
                  n
                    ? r
                      ? `(?:/(?<${o}>.+?))?`
                      : `/(?<${o}>.+?)`
                    : `/(?<${o}>[^/]+?)`
                );
              }
            })
            .join(""),
          routeKeys: i,
        };
      }
    },
    7919: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.execOnce = function (e) {
          let t,
            r = !1;
          return (...n) => (r || ((r = !0), (t = e(...n))), t);
        }),
        (t.getLocationOrigin = l),
        (t.getURL = function () {
          let { href: e } = window.location,
            t = l();
          return e.substring(t.length);
        }),
        (t.getDisplayName = u),
        (t.isResSent = i),
        (t.normalizeRepeatedSlashes = function (e) {
          let t = e.split("?"),
            r = t[0];
          return (
            r.replace(/\\/g, "/").replace(/\/\/+/g, "/") +
            (t[1] ? `?${t.slice(1).join("?")}` : "")
          );
        }),
        (t.loadGetInitialProps = s),
        (t.ST = t.SP = t.isAbsoluteUrl = t.WEB_VITALS = void 0);
      var n = r(932).Z;
      t.WEB_VITALS = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return `${e}//${t}${r ? ":" + r : ""}`;
      }
      function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function i(e) {
        return e.finished || e.headersSent;
      }
      function s(e, t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = n(function* (e, t) {
          let r = t.res || (t.ctx && t.ctx.res);
          if (!e.getInitialProps)
            return t.ctx && t.Component
              ? { pageProps: yield s(t.Component, t.ctx) }
              : {};
          let n = yield e.getInitialProps(t);
          if (r && i(r)) return n;
          if (!n) {
            let t = `"${u(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`;
            throw Error(t);
          }
          return n;
        })).apply(this, arguments);
      }
      t.isAbsoluteUrl = a;
      let f = "undefined" != typeof performance;
      t.SP = f;
      let d =
        f &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
      (t.ST = d),
        (t.DecodeError = class extends Error {}),
        (t.NormalizeError = class extends Error {}),
        (t.PageNotFoundError = class extends Error {
          constructor(e) {
            super(),
              (this.code = "ENOENT"),
              (this.message = `Cannot find module for page: ${e}`);
          }
        }),
        (t.MissingStaticPage = class extends Error {
          constructor(e, t) {
            super(),
              (this.message = `Failed to load static file for page: ${e} ${t}`);
          }
        }),
        (t.MiddlewareNotFoundError = class extends Error {
          constructor() {
            super(),
              (this.code = "ENOENT"),
              (this.message = "Cannot find the middleware module");
          }
        });
    },
    4561: function (e, t, r) {
      e.exports = r(3297);
    },
  },
]);
