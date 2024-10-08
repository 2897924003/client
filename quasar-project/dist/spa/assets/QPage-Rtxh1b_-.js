import {
  b0 as E,
  l as M,
  r as P,
  a as we,
  ab as pe,
  h as m,
  b1 as qe,
  b2 as Pe,
  b3 as xe,
  c as d,
  n as Fe,
  $ as Z,
  x as Ce,
  v as $e,
  g as z,
  af as Ee,
  ak as ee,
  am as Se,
  an as Te,
  ao as _e,
  ap as Be,
  b4 as De,
  w as W,
  ar as N,
  q as te,
  b5 as Qe,
  as as He,
  b6 as k,
  i as V,
  b7 as Me,
  b8 as ze,
} from "./index-DEMVRRIH.js";
let v = [],
  x = [];
function ne(e) {
  x = x.filter((n) => n !== e);
}
function Le(e) {
  ne(e), x.push(e);
}
function U(e) {
  ne(e), x.length === 0 && v.length !== 0 && (v[v.length - 1](), (v = []));
}
function Oe(e) {
  x.length === 0 ? e() : v.push(e);
}
function et(e) {
  v = v.filter((n) => n !== e);
}
const S = [];
function tt(e) {
  return S.find((n) => n.contentEl !== null && n.contentEl.contains(e));
}
function Ke(e, n) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(n), e.$props.separateClosePopup === !0)) return E(e);
    } else if (e.__qPortal === !0) {
      const o = E(e);
      return o !== void 0 && o.$options.name === "QPopupProxy"
        ? (e.hide(n), o)
        : e;
    }
    e = E(e);
  } while (e != null);
}
function nt(e, n, o) {
  for (; o !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((o--, e.$options.name === "QMenu")) {
        e = Ke(e, n);
        continue;
      }
      e.hide(n);
    }
    e = E(e);
  }
}
const Re = M({
  name: "QPortal",
  setup(e, { slots: n }) {
    return () => n.default();
  },
});
function Ae(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function je(e, n, o, i) {
  const u = P(!1),
    r = P(!1);
  let l = null;
  const s = {},
    c = i === "dialog" && Ae(e);
  function f(h) {
    if (h === !0) {
      U(s), (r.value = !0);
      return;
    }
    (r.value = !1),
      u.value === !1 &&
        (c === !1 && l === null && (l = Pe(!1, i)),
        (u.value = !0),
        S.push(e.proxy),
        Le(s));
  }
  function g(h) {
    if (((r.value = !1), h !== !0)) return;
    U(s), (u.value = !1);
    const p = S.indexOf(e.proxy);
    p !== -1 && S.splice(p, 1), l !== null && (xe(l), (l = null));
  }
  return (
    we(() => {
      g(!0);
    }),
    (e.proxy.__qPortal = !0),
    pe(e.proxy, "contentEl", () => n.value),
    {
      showPortal: f,
      hidePortal: g,
      portalIsActive: u,
      portalIsAccessible: r,
      renderPortal: () =>
        c === !0 ? o() : u.value === !0 ? [m(qe, { to: l }, m(Re, o))] : void 0,
    }
  );
}
const Ie = {
  transitionShow: { type: String, default: "fade" },
  transitionHide: { type: String, default: "fade" },
  transitionDuration: { type: [String, Number], default: 300 },
};
function Ge(e, n = () => {}, o = () => {}) {
  return {
    transitionProps: d(() => {
      const i = `q-transition--${e.transitionShow || n()}`,
        u = `q-transition--${e.transitionHide || o()}`;
      return {
        appear: !0,
        enterFromClass: `${i}-enter-from`,
        enterActiveClass: `${i}-enter-active`,
        enterToClass: `${i}-enter-to`,
        leaveFromClass: `${u}-leave-from`,
        leaveActiveClass: `${u}-leave-active`,
        leaveToClass: `${u}-leave-to`,
      };
    }),
    transitionStyle: d(
      () => `--q-transition-duration: ${e.transitionDuration}ms`,
    ),
  };
}
function We() {
  let e;
  const n = z();
  function o() {
    e = void 0;
  }
  return (
    Fe(o),
    Z(o),
    {
      removeTick: o,
      registerTick(i) {
        (e = i),
          Ce(() => {
            e === i && ($e(n) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const b = [];
let w;
function Ne(e) {
  w = e.keyCode === 27;
}
function Ve() {
  w === !0 && (w = !1);
}
function Ue(e) {
  w === !0 && ((w = !1), Ee(e, 27) === !0 && b[b.length - 1](e));
}
function oe(e) {
  window[e]("keydown", Ne),
    window[e]("blur", Ve),
    window[e]("keyup", Ue),
    (w = !1);
}
function Je(e) {
  ee.is.desktop === !0 && (b.push(e), b.length === 1 && oe("addEventListener"));
}
function J(e) {
  const n = b.indexOf(e);
  n !== -1 && (b.splice(n, 1), b.length === 0 && oe("removeEventListener"));
}
const y = [];
function ie(e) {
  y[y.length - 1](e);
}
function Xe(e) {
  ee.is.desktop === !0 &&
    (y.push(e),
    y.length === 1 && document.body.addEventListener("focusin", ie));
}
function X(e) {
  const n = y.indexOf(e);
  n !== -1 &&
    (y.splice(n, 1),
    y.length === 0 && document.body.removeEventListener("focusin", ie));
}
let $ = 0;
const Ye = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  Y = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  },
  ot = M({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
      ...Se,
      ...Ie,
      transitionShow: String,
      transitionHide: String,
      persistent: Boolean,
      autoClose: Boolean,
      allowFocusOutside: Boolean,
      noEscDismiss: Boolean,
      noBackdropDismiss: Boolean,
      noRouteDismiss: Boolean,
      noRefocus: Boolean,
      noFocus: Boolean,
      noShake: Boolean,
      seamless: Boolean,
      maximized: Boolean,
      fullWidth: Boolean,
      fullHeight: Boolean,
      square: Boolean,
      backdropFilter: String,
      position: {
        type: String,
        default: "standard",
        validator: (e) =>
          e === "standard" || ["top", "bottom", "left", "right"].includes(e),
      },
    },
    emits: [...Te, "shake", "click", "escapeKey"],
    setup(e, { slots: n, emit: o, attrs: i }) {
      const u = z(),
        r = P(null),
        l = P(!1),
        s = P(!1);
      let c = null,
        f = null,
        g,
        h;
      const p = d(
          () =>
            e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0,
        ),
        { preventBodyScroll: L } = Qe(),
        { registerTimeout: O } = _e(),
        { registerTick: ae, removeTick: K } = We(),
        { transitionProps: le, transitionStyle: R } = Ge(
          e,
          () => Y[e.position][0],
          () => Y[e.position][1],
        ),
        se = d(
          () =>
            R.value +
            (e.backdropFilter !== void 0
              ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`
              : ""),
        ),
        {
          showPortal: A,
          hidePortal: j,
          portalIsAccessible: ue,
          renderPortal: re,
        } = je(u, r, ke, "dialog"),
        { hide: F } = Be({
          showing: l,
          hideOnRouteChange: p,
          handleShow: he,
          handleHide: ve,
          processOnMount: !0,
        }),
        { addToHistory: ce, removeFromHistory: de } = De(l, F, p),
        fe = d(
          () =>
            `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Ye[e.position]}` +
            (s.value === !0 ? " q-dialog__inner--animating" : "") +
            (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
            (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
            (e.square === !0 ? " q-dialog__inner--square" : ""),
        ),
        C = d(() => l.value === !0 && e.seamless !== !0),
        me = d(() => (e.autoClose === !0 ? { onClick: be } : {})),
        ge = d(() => [
          `q-dialog fullscreen no-pointer-events q-dialog--${C.value === !0 ? "modal" : "seamless"}`,
          i.class,
        ]);
      W(
        () => e.maximized,
        (t) => {
          l.value === !0 && B(t);
        },
      ),
        W(C, (t) => {
          L(t), t === !0 ? (Xe(D), Je(_)) : (X(D), J(_));
        });
      function he(t) {
        ce(),
          (f =
            e.noRefocus === !1 && document.activeElement !== null
              ? document.activeElement
              : null),
          B(e.maximized),
          A(),
          (s.value = !0),
          e.noFocus !== !0
            ? (document.activeElement !== null && document.activeElement.blur(),
              ae(q))
            : K(),
          O(() => {
            if (u.proxy.$q.platform.is.ios === !0) {
              if (e.seamless !== !0 && document.activeElement) {
                const { top: a, bottom: Q } =
                    document.activeElement.getBoundingClientRect(),
                  { innerHeight: G } = window,
                  H =
                    window.visualViewport !== void 0
                      ? window.visualViewport.height
                      : G;
                a > 0 &&
                  Q > H / 2 &&
                  (document.scrollingElement.scrollTop = Math.min(
                    document.scrollingElement.scrollHeight - H,
                    Q >= G
                      ? 1 / 0
                      : Math.ceil(
                          document.scrollingElement.scrollTop + Q - H / 2,
                        ),
                  )),
                  document.activeElement.scrollIntoView();
              }
              (h = !0), r.value.click(), (h = !1);
            }
            A(!0), (s.value = !1), o("show", t);
          }, e.transitionDuration);
      }
      function ve(t) {
        K(),
          de(),
          I(!0),
          (s.value = !0),
          j(),
          f !== null &&
            ((
              (t && t.type.indexOf("key") === 0
                ? f.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || f
            ).focus(),
            (f = null)),
          O(() => {
            j(!0), (s.value = !1), o("hide", t);
          }, e.transitionDuration);
      }
      function q(t) {
        Oe(() => {
          let a = r.value;
          a === null ||
            a.contains(document.activeElement) === !0 ||
            ((a =
              (t !== "" ? a.querySelector(t) : null) ||
              a.querySelector(
                "[autofocus][tabindex], [data-autofocus][tabindex]",
              ) ||
              a.querySelector(
                "[autofocus] [tabindex], [data-autofocus] [tabindex]",
              ) ||
              a.querySelector("[autofocus], [data-autofocus]") ||
              a),
            a.focus({ preventScroll: !0 }));
        });
      }
      function T(t) {
        t && typeof t.focus == "function"
          ? t.focus({ preventScroll: !0 })
          : q(),
          o("shake");
        const a = r.value;
        a !== null &&
          (a.classList.remove("q-animate--scale"),
          a.classList.add("q-animate--scale"),
          c !== null && clearTimeout(c),
          (c = setTimeout(() => {
            (c = null),
              r.value !== null && (a.classList.remove("q-animate--scale"), q());
          }, 170)));
      }
      function _() {
        e.seamless !== !0 &&
          (e.persistent === !0 || e.noEscDismiss === !0
            ? e.maximized !== !0 && e.noShake !== !0 && T()
            : (o("escapeKey"), F()));
      }
      function I(t) {
        c !== null && (clearTimeout(c), (c = null)),
          (t === !0 || l.value === !0) &&
            (B(!1), e.seamless !== !0 && (L(!1), X(D), J(_))),
          t !== !0 && (f = null);
      }
      function B(t) {
        t === !0
          ? g !== !0 &&
            ($ < 1 && document.body.classList.add("q-body--dialog"),
            $++,
            (g = !0))
          : g === !0 &&
            ($ < 2 && document.body.classList.remove("q-body--dialog"),
            $--,
            (g = !1));
      }
      function be(t) {
        h !== !0 && (F(t), o("click", t));
      }
      function ye(t) {
        e.persistent !== !0 && e.noBackdropDismiss !== !0
          ? F(t)
          : e.noShake !== !0 && T();
      }
      function D(t) {
        e.allowFocusOutside !== !0 &&
          ue.value === !0 &&
          He(r.value, t.target) !== !0 &&
          q('[tabindex]:not([tabindex="-1"])');
      }
      Object.assign(u.proxy, {
        focus: q,
        shake: T,
        __updateRefocusTarget(t) {
          f = t || null;
        },
      }),
        Z(I);
      function ke() {
        return m(
          "div",
          {
            role: "dialog",
            "aria-modal": C.value === !0 ? "true" : "false",
            ...i,
            class: ge.value,
          },
          [
            m(N, { name: "q-transition--fade", appear: !0 }, () =>
              C.value === !0
                ? m("div", {
                    class: "q-dialog__backdrop fixed-full",
                    style: se.value,
                    "aria-hidden": "true",
                    tabindex: -1,
                    onClick: ye,
                  })
                : null,
            ),
            m(N, le.value, () =>
              l.value === !0
                ? m(
                    "div",
                    {
                      ref: r,
                      class: fe.value,
                      style: R.value,
                      tabindex: -1,
                      ...me.value,
                    },
                    te(n.default),
                  )
                : null,
            ),
          ],
        );
      }
      return re;
    },
  }),
  it = M({
    name: "QPage",
    props: { padding: Boolean, styleFn: Function },
    setup(e, { slots: n }) {
      const {
          proxy: { $q: o },
        } = z(),
        i = V(Me, k);
      if (i === k)
        return console.error("QPage needs to be a deep child of QLayout"), k;
      if (V(ze, k) === k)
        return console.error("QPage needs to be child of QPageContainer"), k;
      const r = d(() => {
          const s =
            (i.header.space === !0 ? i.header.size : 0) +
            (i.footer.space === !0 ? i.footer.size : 0);
          if (typeof e.styleFn == "function") {
            const c =
              i.isContainer.value === !0
                ? i.containerHeight.value
                : o.screen.height;
            return e.styleFn(s, c);
          }
          return {
            minHeight:
              i.isContainer.value === !0
                ? i.containerHeight.value - s + "px"
                : o.screen.height === 0
                  ? s !== 0
                    ? `calc(100vh - ${s}px)`
                    : "100vh"
                  : o.screen.height - s + "px",
          };
        }),
        l = d(() => `q-page${e.padding === !0 ? " q-layout-padding" : ""}`);
      return () => m("main", { class: l.value, style: r.value }, te(n.default));
    },
  });
export {
  it as Q,
  Oe as a,
  ot as b,
  We as c,
  Ge as d,
  je as e,
  Xe as f,
  J as g,
  Je as h,
  Ke as i,
  tt as j,
  nt as k,
  et as l,
  S as p,
  X as r,
  Ie as u,
};
