import {
  c as _,
  l as ae,
  am as Ie,
  an as $e,
  r as P,
  ap as Qe,
  h as S,
  H as te,
  q as J,
  m as Ce,
  y as Ae,
  K as re,
  aG as Be,
  g as le,
  aH as Te,
  ak as j,
  aI as fe,
  at as Le,
  aJ as ve,
  aK as De,
  ah as ee,
  aL as ne,
  aq as me,
  t as oe,
  ai as Ne,
  aj as ie,
  w as ue,
  ar as Ee,
  aM as Me,
  x as ke,
  aN as ze,
  X as xe,
  Y as qe,
  ac as Pe,
  aO as Fe,
  _ as Oe,
  A as c,
  B as y,
  C as a,
  Q as Re,
  D as Ue,
  f as t,
  aP as Ke,
  aQ as He,
  I as L,
  aR as We,
  G as C,
  U as z,
  aS as Xe,
  aT as Ye,
  aU as Ge,
  R as pe,
  S as F,
  aV as O,
  F as R,
  L as Je,
  a0 as U,
  aE as K,
  aD as q,
  aW as je,
  O as D,
  V as N,
  k as se,
  J as H,
  ae as W,
  P as X,
  M as Ze,
  N as et,
} from "./index-DEMVRRIH.js";
import { g as tt, Q as be, d as Y } from "./QInput-pQ_uuI7K.js";
import { Q as at } from "./QTree-JIoxeCL5.js";
import { Q as _e, b as lt, a as he } from "./QCardActions-B86ceFEj.js";
import { b as nt, Q as ot } from "./QPage-Rtxh1b_-.js";
import { C as ge } from "./ClosePopup-Do__HKpZ.js";
import "./QCheckbox-CbuSlzCd.js";
const it = ["top", "right", "bottom", "left"],
  st = {
    type: { type: String, default: "a" },
    outline: Boolean,
    push: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    color: String,
    textColor: String,
    glossy: Boolean,
    square: Boolean,
    padding: String,
    label: { type: [String, Number], default: "" },
    labelPosition: {
      type: String,
      default: "right",
      validator: (e) => it.includes(e),
    },
    externalLabel: Boolean,
    hideLabel: { type: Boolean },
    labelClass: [Array, String, Object],
    labelStyle: [Array, String, Object],
    disable: Boolean,
    tabindex: [Number, String],
  };
function rt(e, o) {
  return {
    formClass: _(() => `q-fab--form-${e.square === !0 ? "square" : "rounded"}`),
    stacked: _(
      () =>
        e.externalLabel === !1 && ["top", "bottom"].includes(e.labelPosition),
    ),
    labelProps: _(() => {
      if (e.externalLabel === !0) {
        const u = e.hideLabel === null ? o.value === !1 : e.hideLabel;
        return {
          action: "push",
          data: {
            class: [
              e.labelClass,
              `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` +
                (u === !0 ? " q-fab__label--external-hidden" : ""),
            ],
            style: e.labelStyle,
          },
        };
      }
      return {
        action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push",
        data: {
          class: [
            e.labelClass,
            `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` +
              (e.hideLabel === !0 ? " q-fab__label--internal-hidden" : ""),
          ],
          style: e.labelStyle,
        },
      };
    }),
  };
}
const ut = ["up", "right", "down", "left"],
  dt = ["left", "center", "right"],
  ct = ae({
    name: "QFab",
    props: {
      ...st,
      ...Ie,
      icon: String,
      activeIcon: String,
      hideIcon: Boolean,
      hideLabel: { default: null },
      direction: {
        type: String,
        default: "right",
        validator: (e) => ut.includes(e),
      },
      persistent: Boolean,
      verticalActionsAlign: {
        type: String,
        default: "center",
        validator: (e) => dt.includes(e),
      },
    },
    emits: $e,
    setup(e, { slots: o }) {
      const u = P(null),
        f = P(e.modelValue === !0),
        v = tt(),
        {
          proxy: { $q: n },
        } = le(),
        { formClass: i, labelProps: p } = rt(e, f),
        V = _(() => e.persistent !== !0),
        { hide: I, toggle: m } = Qe({ showing: f, hideOnRouteChange: V }),
        Q = _(() => ({ opened: f.value })),
        d = _(
          () =>
            `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${i.value}` +
            (f.value === !0 ? " q-fab--opened" : " q-fab--closed"),
        ),
        $ = _(
          () =>
            `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${f.value === !0 ? "opened" : "closed"}`,
        ),
        h = _(() => {
          const k = { id: v.value, role: "menu" };
          return f.value !== !0 && (k["aria-hidden"] = "true"), k;
        }),
        A = _(
          () =>
            `q-fab__icon-holder  q-fab__icon-holder--${f.value === !0 ? "opened" : "closed"}`,
        );
      function B(k, b) {
        const s = o[k],
          l = `q-fab__${k} absolute-full`;
        return s === void 0
          ? S(re, { class: l, name: e[b] || n.iconSet.fab[b] })
          : S("div", { class: l }, s(Q.value));
      }
      function T() {
        const k = [];
        return (
          e.hideIcon !== !0 &&
            k.push(
              S("div", { class: A.value }, [
                B("icon", "icon"),
                B("active-icon", "activeIcon"),
              ]),
            ),
          (e.label !== "" || o.label !== void 0) &&
            k[p.value.action](
              S(
                "div",
                p.value.data,
                o.label !== void 0 ? o.label(Q.value) : [e.label],
              ),
            ),
          Ce(o.tooltip, k)
        );
      }
      return (
        Ae(Be, {
          showing: f,
          onChildClick(k) {
            I(k), u.value !== null && u.value.$el.focus();
          },
        }),
        () =>
          S("div", { class: d.value }, [
            S(
              te,
              {
                ref: u,
                class: i.value,
                ...e,
                noWrap: !0,
                stack: e.stacked,
                align: void 0,
                icon: void 0,
                label: void 0,
                noCaps: !0,
                fab: !0,
                "aria-expanded": f.value === !0 ? "true" : "false",
                "aria-haspopup": "true",
                "aria-controls": v.value,
                onClick: m,
              },
              T,
            ),
            S("div", { class: $.value, ...h.value }, J(o.default)),
          ])
      );
    },
  });
function ft(e) {
  const o = [0.06, 6, 50];
  return (
    typeof e == "string" &&
      e.length &&
      e.split(":").forEach((u, f) => {
        const v = parseFloat(u);
        v && (o[f] = v);
      }),
    o
  );
}
const vt = Te({
  name: "touch-swipe",
  beforeMount(e, { value: o, arg: u, modifiers: f }) {
    if (f.mouse !== !0 && j.has.touch !== !0) return;
    const v = f.mouseCapture === !0 ? "Capture" : "",
      n = {
        handler: o,
        sensitivity: ft(u),
        direction: fe(f),
        noop: Le,
        mouseStart(i) {
          ve(i, n) &&
            De(i) &&
            (ee(n, "temp", [
              [document, "mousemove", "move", `notPassive${v}`],
              [document, "mouseup", "end", "notPassiveCapture"],
            ]),
            n.start(i, !0));
        },
        touchStart(i) {
          if (ve(i, n)) {
            const p = i.target;
            ee(n, "temp", [
              [p, "touchmove", "move", "notPassiveCapture"],
              [p, "touchcancel", "end", "notPassiveCapture"],
              [p, "touchend", "end", "notPassiveCapture"],
            ]),
              n.start(i);
          }
        },
        start(i, p) {
          j.is.firefox === !0 && ne(e, !0);
          const V = me(i);
          n.event = {
            x: V.left,
            y: V.top,
            time: Date.now(),
            mouse: p === !0,
            dir: !1,
          };
        },
        move(i) {
          if (n.event === void 0) return;
          if (n.event.dir !== !1) {
            oe(i);
            return;
          }
          const p = Date.now() - n.event.time;
          if (p === 0) return;
          const V = me(i),
            I = V.left - n.event.x,
            m = Math.abs(I),
            Q = V.top - n.event.y,
            d = Math.abs(Q);
          if (n.event.mouse !== !0) {
            if (m < n.sensitivity[1] && d < n.sensitivity[1]) {
              n.end(i);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            n.end(i);
            return;
          } else if (m < n.sensitivity[2] && d < n.sensitivity[2]) return;
          const $ = m / p,
            h = d / p;
          n.direction.vertical === !0 &&
            m < d &&
            m < 100 &&
            h > n.sensitivity[0] &&
            (n.event.dir = Q < 0 ? "up" : "down"),
            n.direction.horizontal === !0 &&
              m > d &&
              d < 100 &&
              $ > n.sensitivity[0] &&
              (n.event.dir = I < 0 ? "left" : "right"),
            n.direction.up === !0 &&
              m < d &&
              Q < 0 &&
              m < 100 &&
              h > n.sensitivity[0] &&
              (n.event.dir = "up"),
            n.direction.down === !0 &&
              m < d &&
              Q > 0 &&
              m < 100 &&
              h > n.sensitivity[0] &&
              (n.event.dir = "down"),
            n.direction.left === !0 &&
              m > d &&
              I < 0 &&
              d < 100 &&
              $ > n.sensitivity[0] &&
              (n.event.dir = "left"),
            n.direction.right === !0 &&
              m > d &&
              I > 0 &&
              d < 100 &&
              $ > n.sensitivity[0] &&
              (n.event.dir = "right"),
            n.event.dir !== !1
              ? (oe(i),
                n.event.mouse === !0 &&
                  (document.body.classList.add("no-pointer-events--children"),
                  document.body.classList.add("non-selectable"),
                  Ne(),
                  (n.styleCleanup = (A) => {
                    (n.styleCleanup = void 0),
                      document.body.classList.remove("non-selectable");
                    const B = () => {
                      document.body.classList.remove(
                        "no-pointer-events--children",
                      );
                    };
                    A === !0 ? setTimeout(B, 50) : B();
                  })),
                n.handler({
                  evt: i,
                  touch: n.event.mouse !== !0,
                  mouse: n.event.mouse,
                  direction: n.event.dir,
                  duration: p,
                  distance: { x: m, y: d },
                }))
              : n.end(i);
        },
        end(i) {
          n.event !== void 0 &&
            (ie(n, "temp"),
            j.is.firefox === !0 && ne(e, !1),
            n.styleCleanup !== void 0 && n.styleCleanup(!0),
            i !== void 0 && n.event.dir !== !1 && oe(i),
            (n.event = void 0));
        },
      };
    if (((e.__qtouchswipe = n), f.mouse === !0)) {
      const i = f.mouseCapture === !0 || f.mousecapture === !0 ? "Capture" : "";
      ee(n, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
    }
    j.has.touch === !0 &&
      ee(n, "main", [
        [
          e,
          "touchstart",
          "touchStart",
          `passive${f.capture === !0 ? "Capture" : ""}`,
        ],
        [e, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(e, o) {
    const u = e.__qtouchswipe;
    u !== void 0 &&
      (o.oldValue !== o.value &&
        (typeof o.value != "function" && u.end(), (u.handler = o.value)),
      (u.direction = fe(o.modifiers)));
  },
  beforeUnmount(e) {
    const o = e.__qtouchswipe;
    o !== void 0 &&
      (ie(o, "main"),
      ie(o, "temp"),
      j.is.firefox === !0 && ne(e, !1),
      o.styleCleanup !== void 0 && o.styleCleanup(),
      delete e.__qtouchswipe);
  },
});
function mt() {
  let e = Object.create(null);
  return {
    getCache: (o, u) =>
      e[o] === void 0 ? (e[o] = typeof u == "function" ? u() : u) : e[o],
    setCache(o, u) {
      e[o] = u;
    },
    hasCache(o) {
      return e.hasOwnProperty(o);
    },
    clearCache(o) {
      o !== void 0 ? delete e[o] : (e = {});
    },
  };
}
const pt = { name: { required: !0 }, disable: Boolean },
  ye = {
    setup(e, { slots: o }) {
      return () =>
        S("div", { class: "q-panel scroll", role: "tabpanel" }, J(o.default));
    },
  },
  bt = {
    modelValue: { required: !0 },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: { type: [String, Number], default: 300 },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number,
  },
  _t = ["update:modelValue", "beforeTransition", "transition"];
function ht() {
  const { props: e, emit: o, proxy: u } = le(),
    { getCache: f } = mt();
  let v, n;
  const i = P(null),
    p = P(null);
  function V(r) {
    const g = e.vertical === !0 ? "up" : "left";
    E((u.$q.lang.rtl === !0 ? -1 : 1) * (r.direction === g ? 1 : -1));
  }
  const I = _(() => [
      [
        vt,
        V,
        void 0,
        { horizontal: e.vertical !== !0, vertical: e.vertical, mouse: !0 },
      ],
    ]),
    m = _(
      () => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`,
    ),
    Q = _(
      () => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`,
    ),
    d = _(() => `--q-transition-duration: ${e.transitionDuration}ms`),
    $ = _(() =>
      typeof e.modelValue == "string" || typeof e.modelValue == "number"
        ? e.modelValue
        : String(e.modelValue),
    ),
    h = _(() => ({
      include: e.keepAliveInclude,
      exclude: e.keepAliveExclude,
      max: e.keepAliveMax,
    })),
    A = _(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ue(
    () => e.modelValue,
    (r, g) => {
      const M = b(r) === !0 ? s(r) : -1;
      n !== !0 && x(M === -1 ? 0 : M < s(g) ? -1 : 1),
        i.value !== M &&
          ((i.value = M),
          o("beforeTransition", r, g),
          ke(() => {
            o("transition", r, g);
          }));
    },
  );
  function B() {
    E(1);
  }
  function T() {
    E(-1);
  }
  function k(r) {
    o("update:modelValue", r);
  }
  function b(r) {
    return r != null && r !== "";
  }
  function s(r) {
    return v.findIndex(
      (g) =>
        g.props.name === r && g.props.disable !== "" && g.props.disable !== !0,
    );
  }
  function l() {
    return v.filter((r) => r.props.disable !== "" && r.props.disable !== !0);
  }
  function x(r) {
    const g =
      r !== 0 && e.animated === !0 && i.value !== -1
        ? "q-transition--" + (r === -1 ? m.value : Q.value)
        : null;
    p.value !== g && (p.value = g);
  }
  function E(r, g = i.value) {
    let M = g + r;
    for (; M !== -1 && M < v.length; ) {
      const Z = v[M];
      if (Z !== void 0 && Z.props.disable !== "" && Z.props.disable !== !0) {
        x(r),
          (n = !0),
          o("update:modelValue", Z.props.name),
          setTimeout(() => {
            n = !1;
          });
        return;
      }
      M += r;
    }
    e.infinite === !0 &&
      v.length !== 0 &&
      g !== -1 &&
      g !== v.length &&
      E(r, r === -1 ? v.length : -1);
  }
  function de() {
    const r = s(e.modelValue);
    return i.value !== r && (i.value = r), !0;
  }
  function ce() {
    const r = b(e.modelValue) === !0 && de() && v[i.value];
    return e.keepAlive === !0
      ? [
          S(ze, h.value, [
            S(
              A.value === !0
                ? f($.value, () => ({ ...ye, name: $.value }))
                : ye,
              { key: $.value, style: d.value },
              () => r,
            ),
          ]),
        ]
      : [
          S(
            "div",
            {
              class: "q-panel scroll",
              style: d.value,
              key: $.value,
              role: "tabpanel",
            },
            [r],
          ),
        ];
  }
  function Se() {
    if (v.length !== 0)
      return e.animated === !0 ? [S(Ee, { name: p.value }, ce)] : ce();
  }
  function we(r) {
    return (
      (v = Me(J(r.default, [])).filter(
        (g) =>
          g.props !== null && g.props.slot === void 0 && b(g.props.name) === !0,
      )),
      v.length
    );
  }
  function Ve() {
    return v;
  }
  return (
    Object.assign(u, { next: B, previous: T, goTo: k }),
    {
      panelIndex: i,
      panelDirectives: I,
      updatePanelsList: we,
      updatePanelIndex: de,
      getPanelContent: Se,
      getEnabledPanels: l,
      getPanels: Ve,
      isValidPanelName: b,
      keepAliveProps: h,
      needsUniqueKeepAliveWrapper: A,
      goToPanelByOffset: E,
      goToPanel: k,
      nextPanel: B,
      previousPanel: T,
    }
  );
}
const G = ae({
    name: "QTabPanel",
    props: pt,
    setup(e, { slots: o }) {
      return () =>
        S("div", { class: "q-tab-panel", role: "tabpanel" }, J(o.default));
    },
  }),
  gt = ae({
    name: "QTabPanels",
    props: { ...bt, ...xe },
    emits: _t,
    setup(e, { slots: o }) {
      const u = le(),
        f = qe(e, u.proxy.$q),
        { updatePanelsList: v, getPanelContent: n, panelDirectives: i } = ht(),
        p = _(
          () =>
            "q-tab-panels q-panel-parent" +
            (f.value === !0 ? " q-tab-panels--dark q-dark" : ""),
        );
      return () => (
        v(o),
        Pe("div", { class: p.value }, n(), "pan", e.swipeable, () => i.value)
      );
    },
  }),
  yt = ae({
    name: "QSplitter",
    props: {
      ...xe,
      modelValue: { type: Number, required: !0 },
      reverse: Boolean,
      unit: {
        type: String,
        default: "%",
        validator: (e) => ["%", "px"].includes(e),
      },
      limits: {
        type: Array,
        validator: (e) =>
          e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number"
            ? !1
            : e[0] >= 0 && e[0] <= e[1],
      },
      emitImmediately: Boolean,
      horizontal: Boolean,
      disable: Boolean,
      beforeClass: [Array, String, Object],
      afterClass: [Array, String, Object],
      separatorClass: [Array, String, Object],
      separatorStyle: [Array, String, Object],
    },
    emits: ["update:modelValue"],
    setup(e, { slots: o, emit: u }) {
      const {
          proxy: { $q: f },
        } = le(),
        v = qe(e, f),
        n = P(null),
        i = { before: P(null), after: P(null) },
        p = _(
          () =>
            `q-splitter no-wrap ${e.horizontal === !0 ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === !0 ? "disabled" : "workable"}` +
            (v.value === !0 ? " q-splitter--dark" : ""),
        ),
        V = _(() => (e.horizontal === !0 ? "height" : "width")),
        I = _(() => (e.reverse !== !0 ? "before" : "after")),
        m = _(() =>
          e.limits !== void 0
            ? e.limits
            : e.unit === "%"
              ? [10, 90]
              : [50, 1 / 0],
        );
      function Q(l) {
        return (e.unit === "%" ? l : Math.round(l)) + e.unit;
      }
      const d = _(() => ({ [I.value]: { [V.value]: Q(e.modelValue) } }));
      let $, h, A, B, T;
      function k(l) {
        if (l.isFirst === !0) {
          const E = n.value.getBoundingClientRect()[V.value];
          ($ = e.horizontal === !0 ? "up" : "left"),
            (h = e.unit === "%" ? 100 : E),
            (A = Math.min(h, m.value[1], Math.max(m.value[0], e.modelValue))),
            (B =
              (e.reverse !== !0 ? 1 : -1) *
              (e.horizontal === !0 ? 1 : f.lang.rtl === !0 ? -1 : 1) *
              (e.unit === "%" ? (E === 0 ? 0 : 100 / E) : 1)),
            n.value.classList.add("q-splitter--active");
          return;
        }
        if (l.isFinal === !0) {
          T !== e.modelValue && u("update:modelValue", T),
            n.value.classList.remove("q-splitter--active");
          return;
        }
        const x =
          A +
          B *
            (l.direction === $ ? -1 : 1) *
            l.distance[e.horizontal === !0 ? "y" : "x"];
        (T = Math.min(h, m.value[1], Math.max(m.value[0], x))),
          (i[I.value].value.style[V.value] = Q(T)),
          e.emitImmediately === !0 &&
            e.modelValue !== T &&
            u("update:modelValue", T);
      }
      const b = _(() => [
        [
          Fe,
          k,
          void 0,
          {
            [e.horizontal === !0 ? "vertical" : "horizontal"]: !0,
            prevent: !0,
            stop: !0,
            mouse: !0,
            mouseAllDir: !0,
          },
        ],
      ]);
      function s(l, x) {
        l < x[0]
          ? u("update:modelValue", x[0])
          : l > x[1] && u("update:modelValue", x[1]);
      }
      return (
        ue(
          () => e.modelValue,
          (l) => {
            s(l, m.value);
          },
        ),
        ue(
          () => e.limits,
          () => {
            ke(() => {
              s(e.modelValue, m.value);
            });
          },
        ),
        () => {
          const l = [
            S(
              "div",
              {
                ref: i.before,
                class: [
                  "q-splitter__panel q-splitter__before" +
                    (e.reverse === !0 ? " col" : ""),
                  e.beforeClass,
                ],
                style: d.value.before,
              },
              J(o.before),
            ),
            S(
              "div",
              {
                class: ["q-splitter__separator", e.separatorClass],
                style: e.separatorStyle,
                "aria-disabled": e.disable === !0 ? "true" : void 0,
              },
              [
                Pe(
                  "div",
                  { class: "q-splitter__separator-area absolute-full" },
                  J(o.separator),
                  "sep",
                  e.disable !== !0,
                  () => b.value,
                ),
              ],
            ),
            S(
              "div",
              {
                ref: i.after,
                class: [
                  "q-splitter__panel q-splitter__after" +
                    (e.reverse === !0 ? "" : " col"),
                  e.afterClass,
                ],
                style: d.value.after,
              },
              J(o.after),
            ),
          ];
          return S("div", { class: p.value, ref: n }, Ce(o.default, l));
        }
      );
    },
  }),
  w = (e) => (Ze("data-v-475d2add"), (e = e()), et(), e),
  Ct = w(() => C("div", { class: "text-h4 q-mb-md" }, "二层", -1)),
  kt = w(() => C("p", null, "新中式在此", -1)),
  xt = w(() => C("div", { class: "text-h4 q-mb-md" }, "二层", -1)),
  qt = w(() => C("p", null, "欧式", -1)),
  Pt = w(() => C("div", { class: "text-h4 q-mb-md" }, "二层", -1)),
  St = w(() => C("p", null, "现代风", -1)),
  wt = w(() => C("div", { class: "text-h4 q-mb-md" }, "二层", -1)),
  Vt = w(() => C("p", null, "北欧风", -1)),
  It = w(() => C("div", { class: "text-h4 q-mb-md" }, "三层", -1)),
  $t = w(() => C("p", null, "新中式在此", -1)),
  Qt = w(() => C("div", { class: "text-h4 q-mb-md" }, "三层", -1)),
  At = w(() => C("p", null, "欧式", -1)),
  Bt = w(() => C("div", { class: "text-h4 q-mb-md" }, "三层", -1)),
  Tt = w(() => C("p", null, "现代风", -1)),
  Lt = w(() => C("div", { class: "text-h4 q-mb-md" }, "三层", -1)),
  Dt = w(() => C("p", null, "北欧风", -1)),
  Nt = { class: "fit" },
  Et = w(() => C("div", { class: "text-accent" }, "没有匹配的数据。", -1)),
  Mt = {
    __name: "BuildingExample",
    setup(e) {
      P(!1);
      const o = P(!1),
        u = Ue(),
        f = [
          {
            categoryId: "Number of facades",
            label: "二层",
            children: [
              { categoryId: "1", label: "New Chinese style" },
              { categoryId: "2", label: "European style" },
              { categoryId: "3", label: "modern style" },
              { categoryId: "4", label: "Nordic style" },
            ],
          },
          {
            categoryId: "Storeys / plantas",
            label: "三层",
            avatar: "",
            children: [
              { categoryId: "5", label: "New Chinese style" },
              { categoryId: "6", label: "European style" },
              { categoryId: "7", label: "modern style" },
              { categoryId: "8", label: "Nordic style" },
            ],
          },
        ],
        v = P(""),
        n = P(""),
        i = P(!1),
        p = P(""),
        V = P(40),
        I = P(""),
        m = () => {},
        Q = () => {},
        d = P(),
        $ = async (b) => {
          if (b !== null)
            try {
              const s = await se.get(`/api/file/projects/${b}`);
              d.value = s.data;
            } catch (s) {
              console.error(s);
            }
        },
        h = async (b) => {
          if (b !== null)
            try {
              const s = await se.get(
                `/api/file/ids?project=${b}&category=${n.value}`,
              );
              A.value = s.data.map((l) => ({
                entity: l,
                path: `https://test.opensun.asia/api/file/image/${l.id}`,
              }));
            } catch (s) {
              console.error(s);
            }
        },
        A = P([]),
        B = async () => {
          if (n.value !== null)
            try {
              const b = await se.get(`/api/file/ids?category=${n.value}`);
              A.value = b.data.map((s) => ({
                entity: s,
                path: `https://test.opensun.asia/api/file/image/${s.id}`,
              }));
            } catch (b) {
              console.error("获取图片路径失败:", b);
            }
        },
        T = (b) => {
          const s = document.createElement("a");
          (s.href = b), (s.download = "image.jpg"), s.click();
        },
        k = (b) => {
          (p.value = b.path), (i.value = !0);
        };
      return (b, s) => (
        c(),
        y(
          Re,
          { view: "lHh LpR lFf" },
          {
            default: a(() => [
              t(
                ot,
                { class: "q-pa-md" },
                {
                  default: a(() => [
                    t(Ke, null, {
                      default: a(() => [
                        t(He, null, {
                          default: a(() => [L(" 建筑图纸分类 ")]),
                          _: 1,
                        }),
                        t(
                          be,
                          {
                            modelValue: v.value,
                            "onUpdate:modelValue":
                              s[0] || (s[0] = (l) => (v.value = l)),
                            placeholder: "暂未实现...",
                            outlined: "",
                            onKeyup: We(m, ["enter"]),
                          },
                          {
                            append: a(() => [
                              t(re, { name: "search", onClick: m }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"],
                        ),
                      ]),
                      _: 1,
                    }),
                    t(
                      ct,
                      {
                        color: "amber",
                        "text-color": "black",
                        icon: "keyboard_arrow_left",
                        direction: "right",
                        onClick: s[1] || (s[1] = (l) => (o.value = !o.value)),
                      },
                      {
                        label: a(({ opened: l }) => [
                          C(
                            "div",
                            {
                              class: Xe({
                                "example-fab-animate--hover": l !== !0,
                              }),
                            },
                            z(l !== !0 ? "Category" : "Close"),
                            3,
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    t(
                      Ye,
                      {
                        modelValue: o.value,
                        "onUpdate:modelValue":
                          s[6] || (s[6] = (l) => (o.value = l)),
                        side: "right",
                        width: Ge(u).screen.width > 600 ? 1500 : 300,
                        class: "flex row",
                        "show-if-above": "",
                      },
                      {
                        default: a(() => [
                          t(
                            yt,
                            {
                              modelValue: V.value,
                              "onUpdate:modelValue":
                                s[5] || (s[5] = (l) => (V.value = l)),
                              class: "window-height window-width",
                              "separator-class": "bg-black",
                              "separator-style": "width: 2px",
                            },
                            {
                              before: a(() => [
                                t(
                                  at,
                                  {
                                    selected: n.value,
                                    "onUpdate:selected": [
                                      s[2] || (s[2] = (l) => (n.value = l)),
                                      B,
                                    ],
                                    nodes: f,
                                    "no-transition": "",
                                    "default-expand-all": "",
                                    "node-key": "categoryId",
                                  },
                                  null,
                                  8,
                                  ["selected"],
                                ),
                              ]),
                              after: a(() => [
                                t(
                                  be,
                                  {
                                    ref: "filterRef",
                                    filled: "",
                                    modelValue: I.value,
                                    "onUpdate:modelValue":
                                      s[3] || (s[3] = (l) => (I.value = l)),
                                    label: "搜索项目--暂未实现",
                                    clearable: "",
                                  },
                                  {
                                    append: a(() => [
                                      I.value !== ""
                                        ? (c(),
                                          y(re, {
                                            key: 0,
                                            name: "search",
                                            class: "cursor-pointer",
                                            onClick: Q,
                                          }))
                                        : pe("", !0),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"],
                                ),
                                t(
                                  gt,
                                  {
                                    modelValue: n.value,
                                    "onUpdate:modelValue":
                                      s[4] || (s[4] = (l) => (n.value = l)),
                                    animated: "",
                                    onBeforeTransition: $,
                                    "transition-prev": "jump-up",
                                    "transition-next": "jump-up",
                                  },
                                  {
                                    default: a(() => [
                                      t(
                                        G,
                                        { name: "1" },
                                        {
                                          default: a(() => [
                                            Ct,
                                            kt,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "2" },
                                        {
                                          default: a(() => [
                                            xt,
                                            qt,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "3" },
                                        {
                                          default: a(() => [
                                            Pt,
                                            St,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "4" },
                                        {
                                          default: a(() => [
                                            wt,
                                            Vt,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "5" },
                                        {
                                          default: a(() => [
                                            It,
                                            $t,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "6" },
                                        {
                                          default: a(() => [
                                            Qt,
                                            At,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "7" },
                                        {
                                          default: a(() => [
                                            Bt,
                                            Tt,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      t(
                                        G,
                                        { name: "8" },
                                        {
                                          default: a(() => [
                                            Lt,
                                            Dt,
                                            (c(!0),
                                            F(
                                              R,
                                              null,
                                              O(
                                                d.value,
                                                (l) => (
                                                  c(),
                                                  y(
                                                    U,
                                                    { key: l },
                                                    {
                                                      default: a(() => [
                                                        N(
                                                          (c(),
                                                          y(
                                                            K,
                                                            {
                                                              clickable: "",
                                                              onClick: (x) =>
                                                                h(l),
                                                            },
                                                            {
                                                              default: a(() => [
                                                                t(
                                                                  q,
                                                                  {
                                                                    avatar: "",
                                                                  },
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          H,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  t(
                                                                                    D,
                                                                                    {
                                                                                      src: "/icons/china.png",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 1,
                                                                          },
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                ),
                                                                t(
                                                                  q,
                                                                  null,
                                                                  {
                                                                    default: a(
                                                                      () => [
                                                                        t(
                                                                          Y,
                                                                          null,
                                                                          {
                                                                            default:
                                                                              a(
                                                                                () => [
                                                                                  L(
                                                                                    z(
                                                                                      l,
                                                                                    ) +
                                                                                      "号项目",
                                                                                    1,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          )),
                                                          [[W]],
                                                        ),
                                                        t(X, { spaced: "" }),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue", "width"],
                    ),
                    t(Je, null, {
                      default: a(() => [
                        C("div", Nt, [
                          t(U, null, {
                            default: a(() => [
                              (c(!0),
                              F(
                                R,
                                null,
                                O(
                                  A.value,
                                  (l) => (
                                    c(),
                                    y(
                                      _e,
                                      { key: l.entity },
                                      {
                                        default: a(() => [
                                          t(
                                            he,
                                            null,
                                            {
                                              default: a(() => [
                                                t(
                                                  D,
                                                  {
                                                    src: l.path,
                                                    alt: "Drawing Image",
                                                    class: "cursor-pointer",
                                                    onClick: (x) => k(l),
                                                  },
                                                  null,
                                                  8,
                                                  ["src", "onClick"],
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024,
                                          ),
                                          t(he, null, {
                                            default: a(() => [
                                              L(" 暂时没有描述 "),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    )
                                  ),
                                ),
                                128,
                              )),
                              A.value.length === 0
                                ? (c(),
                                  y(
                                    K,
                                    { key: 0 },
                                    {
                                      default: a(() => [
                                        t(q, null, {
                                          default: a(() => [Et]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                  ))
                                : pe("", !0),
                            ]),
                            _: 1,
                          }),
                        ]),
                        t(
                          je,
                          {
                            position: "bottom-right",
                            "scroll-offset": 150,
                            offset: [18, 18],
                          },
                          {
                            default: a(() => [
                              t(te, {
                                fab: "",
                                icon: "keyboard_arrow_up",
                                color: "accent",
                              }),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    }),
                    t(
                      nt,
                      {
                        modelValue: i.value,
                        "onUpdate:modelValue":
                          s[8] || (s[8] = (l) => (i.value = l)),
                      },
                      {
                        default: a(() => [
                          t(
                            _e,
                            { class: "window-width" },
                            {
                              default: a(() => [
                                t(
                                  D,
                                  {
                                    src: p.value,
                                    draggable: "",
                                    decoding: "auto",
                                  },
                                  null,
                                  8,
                                  ["src"],
                                ),
                                t(
                                  lt,
                                  { align: "center" },
                                  {
                                    default: a(() => [
                                      N(
                                        t(
                                          te,
                                          {
                                            flat: "",
                                            label: "返回",
                                            color: "primary",
                                          },
                                          null,
                                          512,
                                        ),
                                        [[ge]],
                                      ),
                                      N(
                                        t(
                                          te,
                                          {
                                            flat: "",
                                            label: "下载",
                                            color: "primary",
                                            onClick:
                                              s[7] ||
                                              (s[7] = (l) => T(p.value)),
                                          },
                                          null,
                                          512,
                                        ),
                                        [[ge]],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"],
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  },
  Wt = Oe(Mt, [
    ["__scopeId", "data-v-475d2add"],
    ["__file", "BuildingExample.vue"],
  ]);
export { Wt as default };
