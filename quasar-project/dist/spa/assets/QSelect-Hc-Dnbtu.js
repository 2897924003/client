import {
  u as et,
  a as Et,
  b as Mt,
  c as zt,
  f as ht,
  d as Jt,
  e as el,
} from "./QInput-pQ_uuI7K.js";
import {
  l as $e,
  X as Tt,
  a3 as tl,
  Y as Ht,
  a4 as ll,
  c as x,
  ac as nl,
  h as A,
  K as _e,
  ad as ul,
  ae as ol,
  t as ae,
  g as He,
  r as O,
  af as Bt,
  ag as Te,
  x as ue,
  ah as gt,
  ai as il,
  w as Y,
  o as al,
  $ as Be,
  aj as rl,
  a2 as Ge,
  ak as sl,
  al as cl,
  am as dl,
  an as fl,
  ao as vl,
  ap as ml,
  aq as hl,
  a1 as gl,
  q as Sl,
  ar as yl,
  as as bl,
  at as wl,
  au as xl,
  Z as Cl,
  n as Vl,
  p as kl,
  av as pl,
  aw as ql,
  ax as Al,
  ay as El,
  az as Me,
  aA as St,
  aB as Ve,
  aC as Ml,
  aD as zl,
  aE as Tl,
  m as Hl,
} from "./index-DEMVRRIH.js";
import {
  p as yt,
  u as Bl,
  c as Fl,
  d as Il,
  e as Ol,
  f as Ll,
  r as Rl,
  g as bt,
  a as _l,
  h as Pl,
  i as Dl,
  b as Wl,
} from "./QPage-Rtxh1b_-.js";
const $l = $e({
    name: "QField",
    inheritAttrs: !1,
    props: { ...et, tag: { type: String, default: "label" } },
    emits: Et,
    setup() {
      return Mt(zt({ requiredForAttr: !1, tagProp: !0 }));
    },
  }),
  Kl = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Nl = $e({
    name: "QChip",
    props: {
      ...Tt,
      ...tl,
      dense: Boolean,
      icon: String,
      iconRight: String,
      iconRemove: String,
      iconSelected: String,
      label: [String, Number],
      color: String,
      textColor: String,
      modelValue: { type: Boolean, default: !0 },
      selected: { type: Boolean, default: null },
      square: Boolean,
      outline: Boolean,
      clickable: Boolean,
      removable: Boolean,
      removeAriaLabel: String,
      tabindex: [String, Number],
      disable: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
    },
    emits: ["update:modelValue", "update:selected", "remove", "click"],
    setup(e, { slots: n, emit: u }) {
      const {
          proxy: { $q: o },
        } = He(),
        v = Ht(e, o),
        i = ll(e, Kl),
        m = x(() => e.selected === !0 || e.icon !== void 0),
        h = x(() =>
          e.selected === !0
            ? e.iconSelected || o.iconSet.chip.selected
            : e.icon,
        ),
        g = x(() => e.iconRemove || o.iconSet.chip.remove),
        y = x(
          () => e.disable === !1 && (e.clickable === !0 || e.selected !== null),
        ),
        c = x(() => {
          const b = (e.outline === !0 && e.color) || e.textColor;
          return (
            "q-chip row inline no-wrap items-center" +
            (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") +
            (b ? ` text-${b} q-chip--colored` : "") +
            (e.disable === !0 ? " disabled" : "") +
            (e.dense === !0 ? " q-chip--dense" : "") +
            (e.outline === !0 ? " q-chip--outline" : "") +
            (e.selected === !0 ? " q-chip--selected" : "") +
            (y.value === !0
              ? " q-chip--clickable cursor-pointer non-selectable q-hoverable"
              : "") +
            (e.square === !0 ? " q-chip--square" : "") +
            (v.value === !0 ? " q-chip--dark q-dark" : "")
          );
        }),
        w = x(() => {
          const b =
              e.disable === !0
                ? { tabindex: -1, "aria-disabled": "true" }
                : { tabindex: e.tabindex || 0 },
            D = {
              ...b,
              role: "button",
              "aria-hidden": "false",
              "aria-label": e.removeAriaLabel || o.lang.label.remove,
            };
          return { chip: b, remove: D };
        });
      function V(b) {
        b.keyCode === 13 && a(b);
      }
      function a(b) {
        e.disable || (u("update:selected", !e.selected), u("click", b));
      }
      function S(b) {
        (b.keyCode === void 0 || b.keyCode === 13) &&
          (ae(b),
          e.disable === !1 && (u("update:modelValue", !1), u("remove")));
      }
      function P() {
        const b = [];
        y.value === !0 && b.push(A("div", { class: "q-focus-helper" })),
          m.value === !0 &&
            b.push(
              A(_e, {
                class: "q-chip__icon q-chip__icon--left",
                name: h.value,
              }),
            );
        const D =
          e.label !== void 0
            ? [A("div", { class: "ellipsis" }, [e.label])]
            : void 0;
        return (
          b.push(
            A(
              "div",
              {
                class:
                  "q-chip__content col row no-wrap items-center q-anchor--skip",
              },
              ul(n.default, D),
            ),
          ),
          e.iconRight &&
            b.push(
              A(_e, {
                class: "q-chip__icon q-chip__icon--right",
                name: e.iconRight,
              }),
            ),
          e.removable === !0 &&
            b.push(
              A(_e, {
                class: "q-chip__icon q-chip__icon--remove cursor-pointer",
                name: g.value,
                ...w.value.remove,
                onClick: S,
                onKeyup: S,
              }),
            ),
          b
        );
      }
      return () => {
        if (e.modelValue === !1) return;
        const b = { class: c.value, style: i.value };
        return (
          y.value === !0 &&
            Object.assign(b, w.value.chip, { onClick: a, onKeyup: V }),
          nl(
            "div",
            b,
            P(),
            "ripple",
            e.ripple !== !1 && e.disable !== !0,
            () => [[ol, e.ripple]],
          )
        );
      };
    },
  }),
  jl = {
    target: { default: !0 },
    noParentEvent: Boolean,
    contextMenu: Boolean,
  };
function Ql({ showing: e, avoidEmit: n, configureAnchorEl: u }) {
  const { props: o, proxy: v, emit: i } = He(),
    m = O(null);
  let h = null;
  function g(a) {
    return m.value === null
      ? !1
      : a === void 0 || a.touches === void 0 || a.touches.length <= 1;
  }
  const y = {};
  u === void 0 &&
    (Object.assign(y, {
      hide(a) {
        v.hide(a);
      },
      toggle(a) {
        v.toggle(a), (a.qAnchorHandled = !0);
      },
      toggleKey(a) {
        Bt(a, 13) === !0 && y.toggle(a);
      },
      contextClick(a) {
        v.hide(a),
          Te(a),
          ue(() => {
            v.show(a), (a.qAnchorHandled = !0);
          });
      },
      prevent: Te,
      mobileTouch(a) {
        if ((y.mobileCleanup(a), g(a) !== !0)) return;
        v.hide(a), m.value.classList.add("non-selectable");
        const S = a.target;
        gt(y, "anchor", [
          [S, "touchmove", "mobileCleanup", "passive"],
          [S, "touchend", "mobileCleanup", "passive"],
          [S, "touchcancel", "mobileCleanup", "passive"],
          [m.value, "contextmenu", "prevent", "notPassive"],
        ]),
          (h = setTimeout(() => {
            (h = null), v.show(a), (a.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(a) {
        m.value.classList.remove("non-selectable"),
          h !== null && (clearTimeout(h), (h = null)),
          e.value === !0 && a !== void 0 && il();
      },
    }),
    (u = function (a = o.contextMenu) {
      if (o.noParentEvent === !0 || m.value === null) return;
      let S;
      a === !0
        ? v.$q.platform.is.mobile === !0
          ? (S = [[m.value, "touchstart", "mobileTouch", "passive"]])
          : (S = [
              [m.value, "mousedown", "hide", "passive"],
              [m.value, "contextmenu", "contextClick", "notPassive"],
            ])
        : (S = [
            [m.value, "click", "toggle", "passive"],
            [m.value, "keyup", "toggleKey", "passive"],
          ]),
        gt(y, "anchor", S);
    }));
  function c() {
    rl(y, "anchor");
  }
  function w(a) {
    for (m.value = a; m.value.classList.contains("q-anchor--skip"); )
      m.value = m.value.parentNode;
    u();
  }
  function V() {
    if (o.target === !1 || o.target === "" || v.$el.parentNode === null)
      m.value = null;
    else if (o.target === !0) w(v.$el.parentNode);
    else {
      let a = o.target;
      if (typeof o.target == "string")
        try {
          a = document.querySelector(o.target);
        } catch {
          a = void 0;
        }
      a != null
        ? ((m.value = a.$el || a), u())
        : ((m.value = null),
          console.error(`Anchor: target "${o.target}" not found`));
    }
  }
  return (
    Y(
      () => o.contextMenu,
      (a) => {
        m.value !== null && (c(), u(a));
      },
    ),
    Y(
      () => o.target,
      () => {
        m.value !== null && c(), V();
      },
    ),
    Y(
      () => o.noParentEvent,
      (a) => {
        m.value !== null && (a === !0 ? c() : u());
      },
    ),
    al(() => {
      V(),
        n !== !0 &&
          o.modelValue === !0 &&
          m.value === null &&
          i("update:modelValue", !1);
    }),
    Be(() => {
      h !== null && clearTimeout(h), c();
    }),
    { anchorEl: m, canShow: g, anchorEvents: y }
  );
}
function Ul(e, n) {
  const u = O(null);
  let o;
  function v(h, g) {
    const y = `${g !== void 0 ? "add" : "remove"}EventListener`,
      c = g !== void 0 ? g : o;
    h !== window && h[y]("scroll", c, Ge.passive),
      window[y]("scroll", c, Ge.passive),
      (o = g);
  }
  function i() {
    u.value !== null && (v(u.value), (u.value = null));
  }
  const m = Y(
    () => e.noParentEvent,
    () => {
      u.value !== null && (i(), n());
    },
  );
  return (
    Be(m),
    { localScrollTarget: u, unconfigureScrollTarget: i, changeScrollEvent: v }
  );
}
const { notPassiveCapture: Pe } = Ge,
  he = [];
function De(e) {
  const n = e.target;
  if (
    n === void 0 ||
    n.nodeType === 8 ||
    n.classList.contains("no-pointer-events") === !0
  )
    return;
  let u = yt.length - 1;
  for (; u >= 0; ) {
    const o = yt[u].$;
    if (o.type.name === "QTooltip") {
      u--;
      continue;
    }
    if (o.type.name !== "QDialog") break;
    if (o.props.seamless !== !0) return;
    u--;
  }
  for (let o = he.length - 1; o >= 0; o--) {
    const v = he[o];
    if (
      (v.anchorEl.value === null || v.anchorEl.value.contains(n) === !1) &&
      (n === document.body ||
        (v.innerRef.value !== null && v.innerRef.value.contains(n) === !1))
    )
      (e.qClickOutside = !0), v.onClickOutside(e);
    else return;
  }
}
function Xl(e) {
  he.push(e),
    he.length === 1 &&
      (document.addEventListener("mousedown", De, Pe),
      document.addEventListener("touchstart", De, Pe));
}
function wt(e) {
  const n = he.findIndex((u) => u === e);
  n !== -1 &&
    (he.splice(n, 1),
    he.length === 0 &&
      (document.removeEventListener("mousedown", De, Pe),
      document.removeEventListener("touchstart", De, Pe)));
}
let xt, Ct;
function Vt(e) {
  const n = e.split(" ");
  return n.length !== 2
    ? !1
    : ["top", "center", "bottom"].includes(n[0]) !== !0
      ? (console.error(
          "Anchor/Self position must start with one of top/center/bottom",
        ),
        !1)
      : ["left", "middle", "right", "start", "end"].includes(n[1]) !== !0
        ? (console.error(
            "Anchor/Self position must end with one of left/middle/right/start/end",
          ),
          !1)
        : !0;
}
function Yl(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number")
    : !0;
}
const Je = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left",
};
["left", "middle", "right"].forEach((e) => {
  (Je[`${e}#ltr`] = e), (Je[`${e}#rtl`] = e);
});
function kt(e, n) {
  const u = e.split(" ");
  return {
    vertical: u[0],
    horizontal: Je[`${u[1]}#${n === !0 ? "rtl" : "ltr"}`],
  };
}
function Zl(e, n) {
  let {
    top: u,
    left: o,
    right: v,
    bottom: i,
    width: m,
    height: h,
  } = e.getBoundingClientRect();
  return (
    n !== void 0 &&
      ((u -= n[1]),
      (o -= n[0]),
      (i += n[1]),
      (v += n[0]),
      (m += n[0]),
      (h += n[1])),
    {
      top: u,
      bottom: i,
      height: h,
      left: o,
      right: v,
      width: m,
      middle: o + (v - o) / 2,
      center: u + (i - u) / 2,
    }
  );
}
function Gl(e, n, u) {
  let { top: o, left: v } = e.getBoundingClientRect();
  return (
    (o += n.top),
    (v += n.left),
    u !== void 0 && ((o += u[1]), (v += u[0])),
    {
      top: o,
      bottom: o + 1,
      height: 1,
      left: v,
      right: v + 1,
      width: 1,
      middle: v,
      center: o,
    }
  );
}
function Jl(e, n) {
  return { top: 0, center: n / 2, bottom: n, left: 0, middle: e / 2, right: e };
}
function pt(e, n, u, o) {
  return {
    top: e[u.vertical] - n[o.vertical],
    left: e[u.horizontal] - n[o.horizontal],
  };
}
function Ft(e, n = 0) {
  if (e.targetEl === null || e.anchorEl === null || n > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Ft(e, n + 1);
    }, 10);
    return;
  }
  const {
    targetEl: u,
    offset: o,
    anchorEl: v,
    anchorOrigin: i,
    selfOrigin: m,
    absoluteOffset: h,
    fit: g,
    cover: y,
    maxHeight: c,
    maxWidth: w,
  } = e;
  if (sl.is.ios === !0 && window.visualViewport !== void 0) {
    const z = document.body.style,
      { offsetLeft: _, offsetTop: W } = window.visualViewport;
    _ !== xt && (z.setProperty("--q-pe-left", _ + "px"), (xt = _)),
      W !== Ct && (z.setProperty("--q-pe-top", W + "px"), (Ct = W));
  }
  const { scrollLeft: V, scrollTop: a } = u,
    S = h === void 0 ? Zl(v, y === !0 ? [0, 0] : o) : Gl(v, h, o);
  Object.assign(u.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: w || "100vw",
    maxHeight: c || "100vh",
    visibility: "visible",
  });
  const { offsetWidth: P, offsetHeight: b } = u,
    { elWidth: D, elHeight: U } =
      g === !0 || y === !0
        ? {
            elWidth: Math.max(S.width, P),
            elHeight: y === !0 ? Math.max(S.height, b) : b,
          }
        : { elWidth: P, elHeight: b };
  let E = { maxWidth: w, maxHeight: c };
  (g === !0 || y === !0) &&
    ((E.minWidth = S.width + "px"),
    y === !0 && (E.minHeight = S.height + "px")),
    Object.assign(u.style, E);
  const M = Jl(D, U);
  let F = pt(S, M, i, m);
  if (h === void 0 || o === void 0) Ye(F, S, M, i, m);
  else {
    const { top: z, left: _ } = F;
    Ye(F, S, M, i, m);
    let W = !1;
    if (F.top !== z) {
      W = !0;
      const j = 2 * o[1];
      (S.center = S.top -= j), (S.bottom -= j + 2);
    }
    if (F.left !== _) {
      W = !0;
      const j = 2 * o[0];
      (S.middle = S.left -= j), (S.right -= j + 2);
    }
    W === !0 && ((F = pt(S, M, i, m)), Ye(F, S, M, i, m));
  }
  (E = { top: F.top + "px", left: F.left + "px" }),
    F.maxHeight !== void 0 &&
      ((E.maxHeight = F.maxHeight + "px"),
      S.height > F.maxHeight && (E.minHeight = E.maxHeight)),
    F.maxWidth !== void 0 &&
      ((E.maxWidth = F.maxWidth + "px"),
      S.width > F.maxWidth && (E.minWidth = E.maxWidth)),
    Object.assign(u.style, E),
    u.scrollTop !== a && (u.scrollTop = a),
    u.scrollLeft !== V && (u.scrollLeft = V);
}
function Ye(e, n, u, o, v) {
  const i = u.bottom,
    m = u.right,
    h = cl(),
    g = window.innerHeight - h,
    y = document.body.clientWidth;
  if (e.top < 0 || e.top + i > g)
    if (v.vertical === "center")
      (e.top = n[o.vertical] > g / 2 ? Math.max(0, g - i) : 0),
        (e.maxHeight = Math.min(i, g));
    else if (n[o.vertical] > g / 2) {
      const c = Math.min(
        g,
        o.vertical === "center"
          ? n.center
          : o.vertical === v.vertical
            ? n.bottom
            : n.top,
      );
      (e.maxHeight = Math.min(i, c)), (e.top = Math.max(0, c - i));
    } else
      (e.top = Math.max(
        0,
        o.vertical === "center"
          ? n.center
          : o.vertical === v.vertical
            ? n.top
            : n.bottom,
      )),
        (e.maxHeight = Math.min(i, g - e.top));
  if (e.left < 0 || e.left + m > y)
    if (((e.maxWidth = Math.min(m, y)), v.horizontal === "middle"))
      e.left = n[o.horizontal] > y / 2 ? Math.max(0, y - m) : 0;
    else if (n[o.horizontal] > y / 2) {
      const c = Math.min(
        y,
        o.horizontal === "middle"
          ? n.middle
          : o.horizontal === v.horizontal
            ? n.right
            : n.left,
      );
      (e.maxWidth = Math.min(m, c)), (e.left = Math.max(0, c - e.maxWidth));
    } else
      (e.left = Math.max(
        0,
        o.horizontal === "middle"
          ? n.middle
          : o.horizontal === v.horizontal
            ? n.left
            : n.right,
      )),
        (e.maxWidth = Math.min(m, y - e.left));
}
const en = $e({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...jl,
    ...dl,
    ...Tt,
    ...Bl,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: { type: String, validator: Vt },
    self: { type: String, validator: Vt },
    offset: { type: Array, validator: Yl },
    scrollTarget: { default: void 0 },
    touchPosition: Boolean,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
  },
  emits: [...fl, "click", "escapeKey"],
  setup(e, { slots: n, emit: u, attrs: o }) {
    let v = null,
      i,
      m,
      h;
    const g = He(),
      { proxy: y } = g,
      { $q: c } = y,
      w = O(null),
      V = O(!1),
      a = x(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
      S = Ht(e, c),
      { registerTick: P, removeTick: b } = Fl(),
      { registerTimeout: D } = vl(),
      { transitionProps: U, transitionStyle: E } = Il(e),
      {
        localScrollTarget: M,
        changeScrollEvent: F,
        unconfigureScrollTarget: z,
      } = Ul(e, p),
      { anchorEl: _, canShow: W } = Ql({ showing: V }),
      { hide: j } = ml({
        showing: V,
        canShow: W,
        handleShow: ce,
        handleHide: l,
        hideOnRouteChange: a,
        processOnMount: !0,
      }),
      { showPortal: G, hidePortal: re, renderPortal: N } = Ol(g, w, L, "menu"),
      ne = {
        anchorEl: _,
        innerRef: w,
        onClickOutside(r) {
          if (e.persistent !== !0 && V.value === !0)
            return (
              j(r),
              (r.type === "touchstart" ||
                r.target.classList.contains("q-dialog__backdrop")) &&
                ae(r),
              !0
            );
        },
      },
      se = x(() =>
        kt(
          e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
          c.lang.rtl,
        ),
      ),
      oe = x(() =>
        e.cover === !0 ? se.value : kt(e.self || "top start", c.lang.rtl),
      ),
      X = x(
        () =>
          (e.square === !0 ? " q-menu--square" : "") +
          (S.value === !0 ? " q-menu--dark q-dark" : ""),
      ),
      pe = x(() => (e.autoClose === !0 ? { onClick: T } : {})),
      ie = x(() => V.value === !0 && e.persistent !== !0);
    Y(ie, (r) => {
      r === !0 ? (Pl(q), Xl(ne)) : (bt(q), wt(ne));
    });
    function J() {
      _l(() => {
        let r = w.value;
        r &&
          r.contains(document.activeElement) !== !0 &&
          ((r =
            r.querySelector(
              "[autofocus][tabindex], [data-autofocus][tabindex]",
            ) ||
            r.querySelector(
              "[autofocus] [tabindex], [data-autofocus] [tabindex]",
            ) ||
            r.querySelector("[autofocus], [data-autofocus]") ||
            r),
          r.focus({ preventScroll: !0 }));
      });
    }
    function ce(r) {
      if (
        ((v = e.noRefocus === !1 ? document.activeElement : null),
        Ll(I),
        G(),
        p(),
        (i = void 0),
        r !== void 0 && (e.touchPosition || e.contextMenu))
      ) {
        const $ = hl(r);
        if ($.left !== void 0) {
          const { top: ee, left: ge } = _.value.getBoundingClientRect();
          i = { left: $.left - ge, top: $.top - ee };
        }
      }
      m === void 0 &&
        (m = Y(
          () =>
            c.screen.width +
            "|" +
            c.screen.height +
            "|" +
            e.self +
            "|" +
            e.anchor +
            "|" +
            c.lang.rtl,
          k,
        )),
        e.noFocus !== !0 && document.activeElement.blur(),
        P(() => {
          k(), e.noFocus !== !0 && J();
        }),
        D(() => {
          c.platform.is.ios === !0 && ((h = e.autoClose), w.value.click()),
            k(),
            G(!0),
            u("show", r);
        }, e.transitionDuration);
    }
    function l(r) {
      b(),
        re(),
        d(!0),
        v !== null &&
          (r === void 0 || r.qClickOutside !== !0) &&
          ((
            (r && r.type.indexOf("key") === 0
              ? v.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || v
          ).focus(),
          (v = null)),
        D(() => {
          re(!0), u("hide", r);
        }, e.transitionDuration);
    }
    function d(r) {
      (i = void 0),
        m !== void 0 && (m(), (m = void 0)),
        (r === !0 || V.value === !0) && (Rl(I), z(), wt(ne), bt(q)),
        r !== !0 && (v = null);
    }
    function p() {
      (_.value !== null || e.scrollTarget !== void 0) &&
        ((M.value = gl(_.value, e.scrollTarget)), F(M.value, k));
    }
    function T(r) {
      h !== !0 ? (Dl(y, r), u("click", r)) : (h = !1);
    }
    function I(r) {
      ie.value === !0 &&
        e.noFocus !== !0 &&
        bl(w.value, r.target) !== !0 &&
        J();
    }
    function q(r) {
      u("escapeKey"), j(r);
    }
    function k() {
      Ft({
        targetEl: w.value,
        offset: e.offset,
        anchorEl: _.value,
        anchorOrigin: se.value,
        selfOrigin: oe.value,
        absoluteOffset: i,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth,
      });
    }
    function L() {
      return A(yl, U.value, () =>
        V.value === !0
          ? A(
              "div",
              {
                role: "menu",
                ...o,
                ref: w,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + X.value, o.class],
                style: [o.style, E.value],
                ...pe.value,
              },
              Sl(n.default),
            )
          : null,
      );
    }
    return Be(d), Object.assign(y, { focus: J, updatePosition: k }), N;
  },
});
let We = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"),
    Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const n = document.createElement("div");
  Object.assign(n.style, { width: "1000px", height: "1px" }),
    document.body.appendChild(e),
    e.appendChild(n),
    (e.scrollLeft = -1e3),
    (We = e.scrollLeft >= 0),
    e.remove();
}
const Z = 1e3,
  tn = ["start", "center", "end", "start-force", "center-force", "end-force"],
  It = Array.prototype.filter,
  ln =
    window.getComputedStyle(document.body).overflowAnchor === void 0
      ? wl
      : function (e, n) {
          e !== null &&
            (e._qOverflowAnimationFrame !== void 0 &&
              cancelAnimationFrame(e._qOverflowAnimationFrame),
            (e._qOverflowAnimationFrame = requestAnimationFrame(() => {
              if (e === null) return;
              e._qOverflowAnimationFrame = void 0;
              const u = e.children || [];
              It.call(
                u,
                (v) => v.dataset && v.dataset.qVsAnchor !== void 0,
              ).forEach((v) => {
                delete v.dataset.qVsAnchor;
              });
              const o = u[n];
              o && o.dataset && (o.dataset.qVsAnchor = "");
            })));
        };
function ke(e, n) {
  return e + n;
}
function Ze(e, n, u, o, v, i, m, h) {
  const g =
      e === window ? document.scrollingElement || document.documentElement : e,
    y = v === !0 ? "offsetWidth" : "offsetHeight",
    c = {
      scrollStart: 0,
      scrollViewSize: -m - h,
      scrollMaxSize: 0,
      offsetStart: -m,
      offsetEnd: -h,
    };
  if (
    (v === !0
      ? (e === window
          ? ((c.scrollStart =
              window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0),
            (c.scrollViewSize += document.documentElement.clientWidth))
          : ((c.scrollStart = g.scrollLeft),
            (c.scrollViewSize += g.clientWidth)),
        (c.scrollMaxSize = g.scrollWidth),
        i === !0 &&
          (c.scrollStart =
            (We === !0 ? c.scrollMaxSize - c.scrollViewSize : 0) -
            c.scrollStart))
      : (e === window
          ? ((c.scrollStart =
              window.pageYOffset ||
              window.scrollY ||
              document.body.scrollTop ||
              0),
            (c.scrollViewSize += document.documentElement.clientHeight))
          : ((c.scrollStart = g.scrollTop),
            (c.scrollViewSize += g.clientHeight)),
        (c.scrollMaxSize = g.scrollHeight)),
    u !== null)
  )
    for (
      let w = u.previousElementSibling;
      w !== null;
      w = w.previousElementSibling
    )
      w.classList.contains("q-virtual-scroll--skip") === !1 &&
        (c.offsetStart += w[y]);
  if (o !== null)
    for (let w = o.nextElementSibling; w !== null; w = w.nextElementSibling)
      w.classList.contains("q-virtual-scroll--skip") === !1 &&
        (c.offsetEnd += w[y]);
  if (n !== e) {
    const w = g.getBoundingClientRect(),
      V = n.getBoundingClientRect();
    v === !0
      ? ((c.offsetStart += V.left - w.left), (c.offsetEnd -= V.width))
      : ((c.offsetStart += V.top - w.top), (c.offsetEnd -= V.height)),
      e !== window && (c.offsetStart += c.scrollStart),
      (c.offsetEnd += c.scrollMaxSize - c.offsetStart);
  }
  return c;
}
function qt(e, n, u, o) {
  n === "end" &&
    (n = (e === window ? document.body : e)[
      u === !0 ? "scrollWidth" : "scrollHeight"
    ]),
    e === window
      ? u === !0
        ? (o === !0 &&
            (n =
              (We === !0
                ? document.body.scrollWidth -
                  document.documentElement.clientWidth
                : 0) - n),
          window.scrollTo(
            n,
            window.pageYOffset ||
              window.scrollY ||
              document.body.scrollTop ||
              0,
          ))
        : window.scrollTo(
            window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0,
            n,
          )
      : u === !0
        ? (o === !0 &&
            (n = (We === !0 ? e.scrollWidth - e.offsetWidth : 0) - n),
          (e.scrollLeft = n))
        : (e.scrollTop = n);
}
function ze(e, n, u, o) {
  if (u >= o) return 0;
  const v = n.length,
    i = Math.floor(u / Z),
    m = Math.floor((o - 1) / Z) + 1;
  let h = e.slice(i, m).reduce(ke, 0);
  return (
    u % Z !== 0 && (h -= n.slice(i * Z, u).reduce(ke, 0)),
    o % Z !== 0 && o !== v && (h -= n.slice(o, m * Z).reduce(ke, 0)),
    h
  );
}
const Ot = {
    virtualScrollSliceSize: { type: [Number, String], default: null },
    virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 },
    virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 },
    virtualScrollItemSize: { type: [Number, String], default: 24 },
    virtualScrollStickySizeStart: { type: [Number, String], default: 0 },
    virtualScrollStickySizeEnd: { type: [Number, String], default: 0 },
    tableColspan: [Number, String],
  },
  dn = Object.keys(Ot),
  nn = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Ot };
function un({
  virtualScrollLength: e,
  getVirtualScrollTarget: n,
  getVirtualScrollEl: u,
  virtualScrollItemSizeComputed: o,
}) {
  const v = He(),
    { props: i, emit: m, proxy: h } = v,
    { $q: g } = h;
  let y,
    c,
    w,
    V = [],
    a;
  const S = O(0),
    P = O(0),
    b = O({}),
    D = O(null),
    U = O(null),
    E = O(null),
    M = O({ from: 0, to: 0 }),
    F = x(() => (i.tableColspan !== void 0 ? i.tableColspan : 100));
  o === void 0 && (o = x(() => i.virtualScrollItemSize));
  const z = x(() => o.value + ";" + i.virtualScrollHorizontal),
    _ = x(
      () =>
        z.value +
        ";" +
        i.virtualScrollSliceRatioBefore +
        ";" +
        i.virtualScrollSliceRatioAfter,
    );
  Y(_, () => {
    X();
  }),
    Y(z, W);
  function W() {
    oe(c, !0);
  }
  function j(l) {
    oe(l === void 0 ? c : l);
  }
  function G(l, d) {
    const p = n();
    if (p == null || p.nodeType === 8) return;
    const T = Ze(
      p,
      u(),
      D.value,
      U.value,
      i.virtualScrollHorizontal,
      g.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd,
    );
    w !== T.scrollViewSize && X(T.scrollViewSize),
      N(
        p,
        T,
        Math.min(e.value - 1, Math.max(0, parseInt(l, 10) || 0)),
        0,
        tn.indexOf(d) !== -1 ? d : c !== -1 && l > c ? "end" : "start",
      );
  }
  function re() {
    const l = n();
    if (l == null || l.nodeType === 8) return;
    const d = Ze(
        l,
        u(),
        D.value,
        U.value,
        i.virtualScrollHorizontal,
        g.lang.rtl,
        i.virtualScrollStickySizeStart,
        i.virtualScrollStickySizeEnd,
      ),
      p = e.value - 1,
      T = d.scrollMaxSize - d.offsetStart - d.offsetEnd - P.value;
    if (y === d.scrollStart) return;
    if (d.scrollMaxSize <= 0) {
      N(l, d, 0, 0);
      return;
    }
    w !== d.scrollViewSize && X(d.scrollViewSize), ne(M.value.from);
    const I = Math.floor(
      d.scrollMaxSize -
        Math.max(d.scrollViewSize, d.offsetEnd) -
        Math.min(a[p], d.scrollViewSize / 2),
    );
    if (I > 0 && Math.ceil(d.scrollStart) >= I) {
      N(l, d, p, d.scrollMaxSize - d.offsetEnd - V.reduce(ke, 0));
      return;
    }
    let q = 0,
      k = d.scrollStart - d.offsetStart,
      L = k;
    if (k <= T && k + d.scrollViewSize >= S.value)
      (k -= S.value), (q = M.value.from), (L = k);
    else for (let r = 0; k >= V[r] && q < p; r++) (k -= V[r]), (q += Z);
    for (; k > 0 && q < p; )
      (k -= a[q]), k > -d.scrollViewSize ? (q++, (L = k)) : (L = a[q] + k);
    N(l, d, q, L);
  }
  function N(l, d, p, T, I) {
    const q = typeof I == "string" && I.indexOf("-force") !== -1,
      k = q === !0 ? I.replace("-force", "") : I,
      L = k !== void 0 ? k : "start";
    let r = Math.max(0, p - b.value[L]),
      $ = r + b.value.total;
    $ > e.value && (($ = e.value), (r = Math.max(0, $ - b.value.total))),
      (y = d.scrollStart);
    const ee = r !== M.value.from || $ !== M.value.to;
    if (ee === !1 && k === void 0) {
      ie(p);
      return;
    }
    const { activeElement: ge } = document,
      te = E.value;
    ee === !0 &&
      te !== null &&
      te !== ge &&
      te.contains(ge) === !0 &&
      (te.addEventListener("focusout", se),
      setTimeout(() => {
        te !== null && te.removeEventListener("focusout", se);
      })),
      ln(te, p - r);
    const Fe = k !== void 0 ? a.slice(r, p).reduce(ke, 0) : 0;
    if (ee === !0) {
      const de = $ >= M.value.from && r <= M.value.to ? M.value.to : $;
      (M.value = { from: r, to: de }),
        (S.value = ze(V, a, 0, r)),
        (P.value = ze(V, a, $, e.value)),
        requestAnimationFrame(() => {
          M.value.to !== $ &&
            y === d.scrollStart &&
            ((M.value = { from: M.value.from, to: $ }),
            (P.value = ze(V, a, $, e.value)));
        });
    }
    requestAnimationFrame(() => {
      if (y !== d.scrollStart) return;
      ee === !0 && ne(r);
      const de = a.slice(r, p).reduce(ke, 0),
        fe = de + d.offsetStart + S.value,
        Ie = fe + a[p];
      let qe = fe + T;
      if (k !== void 0) {
        const Ke = de - Fe,
          Ae = d.scrollStart + Ke;
        qe =
          q !== !0 && Ae < fe && Ie < Ae + d.scrollViewSize
            ? Ae
            : k === "end"
              ? Ie - d.scrollViewSize
              : fe -
                (k === "start" ? 0 : Math.round((d.scrollViewSize - a[p]) / 2));
      }
      (y = qe), qt(l, qe, i.virtualScrollHorizontal, g.lang.rtl), ie(p);
    });
  }
  function ne(l) {
    const d = E.value;
    if (d) {
      const p = It.call(
          d.children,
          (r) =>
            r.classList &&
            r.classList.contains("q-virtual-scroll--skip") === !1,
        ),
        T = p.length,
        I =
          i.virtualScrollHorizontal === !0
            ? (r) => r.getBoundingClientRect().width
            : (r) => r.offsetHeight;
      let q = l,
        k,
        L;
      for (let r = 0; r < T; ) {
        for (
          k = I(p[r]), r++;
          r < T &&
          p[r].classList.contains("q-virtual-scroll--with-prev") === !0;

        )
          (k += I(p[r])), r++;
        (L = k - a[q]),
          L !== 0 && ((a[q] += L), (V[Math.floor(q / Z)] += L)),
          q++;
      }
    }
  }
  function se() {
    E.value !== null && E.value !== void 0 && E.value.focus();
  }
  function oe(l, d) {
    const p = 1 * o.value;
    (d === !0 || Array.isArray(a) === !1) && (a = []);
    const T = a.length;
    a.length = e.value;
    for (let q = e.value - 1; q >= T; q--) a[q] = p;
    const I = Math.floor((e.value - 1) / Z);
    V = [];
    for (let q = 0; q <= I; q++) {
      let k = 0;
      const L = Math.min((q + 1) * Z, e.value);
      for (let r = q * Z; r < L; r++) k += a[r];
      V.push(k);
    }
    (c = -1),
      (y = void 0),
      (S.value = ze(V, a, 0, M.value.from)),
      (P.value = ze(V, a, M.value.to, e.value)),
      l >= 0
        ? (ne(M.value.from),
          ue(() => {
            G(l);
          }))
        : J();
  }
  function X(l) {
    if (l === void 0 && typeof window < "u") {
      const k = n();
      k != null &&
        k.nodeType !== 8 &&
        (l = Ze(
          k,
          u(),
          D.value,
          U.value,
          i.virtualScrollHorizontal,
          g.lang.rtl,
          i.virtualScrollStickySizeStart,
          i.virtualScrollStickySizeEnd,
        ).scrollViewSize);
    }
    w = l;
    const d = parseFloat(i.virtualScrollSliceRatioBefore) || 0,
      p = parseFloat(i.virtualScrollSliceRatioAfter) || 0,
      T = 1 + d + p,
      I = l === void 0 || l <= 0 ? 1 : Math.ceil(l / o.value),
      q = Math.max(
        1,
        I,
        Math.ceil(
          (i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / T,
        ),
      );
    b.value = {
      total: Math.ceil(q * T),
      start: Math.ceil(q * d),
      center: Math.ceil(q * (0.5 + d)),
      end: Math.ceil(q * (1 + d)),
      view: I,
    };
  }
  function pe(l, d) {
    const p = i.virtualScrollHorizontal === !0 ? "width" : "height",
      T = { ["--q-virtual-scroll-item-" + p]: o.value + "px" };
    return [
      l === "tbody"
        ? A(l, { class: "q-virtual-scroll__padding", key: "before", ref: D }, [
            A("tr", [
              A("td", {
                style: { [p]: `${S.value}px`, ...T },
                colspan: F.value,
              }),
            ]),
          ])
        : A(l, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: D,
            style: { [p]: `${S.value}px`, ...T },
          }),
      A(
        l,
        {
          class: "q-virtual-scroll__content",
          key: "content",
          ref: E,
          tabindex: -1,
        },
        d.flat(),
      ),
      l === "tbody"
        ? A(l, { class: "q-virtual-scroll__padding", key: "after", ref: U }, [
            A("tr", [
              A("td", {
                style: { [p]: `${P.value}px`, ...T },
                colspan: F.value,
              }),
            ]),
          ])
        : A(l, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: U,
            style: { [p]: `${P.value}px`, ...T },
          }),
    ];
  }
  function ie(l) {
    c !== l &&
      (i.onVirtualScroll !== void 0 &&
        m("virtualScroll", {
          index: l,
          from: M.value.from,
          to: M.value.to - 1,
          direction: l < c ? "decrease" : "increase",
          ref: h,
        }),
      (c = l));
  }
  X();
  const J = xl(re, g.platform.is.ios === !0 ? 120 : 35);
  Cl(() => {
    X();
  });
  let ce = !1;
  return (
    Vl(() => {
      ce = !0;
    }),
    kl(() => {
      if (ce !== !0) return;
      const l = n();
      y !== void 0 && l !== void 0 && l !== null && l.nodeType !== 8
        ? qt(l, y, i.virtualScrollHorizontal, g.lang.rtl)
        : G(c);
    }),
    Be(() => {
      J.cancel();
    }),
    Object.assign(h, { scrollTo: G, reset: W, refresh: j }),
    {
      virtualScrollSliceRange: M,
      virtualScrollSliceSizeComputed: b,
      setVirtualScrollSize: X,
      onVirtualScrollEvt: J,
      localResetVirtualScroll: oe,
      padVirtualScroll: pe,
      scrollTo: G,
      reset: W,
      refresh: j,
    }
  );
}
const At = (e) => ["add", "add-unique", "toggle"].includes(e),
  on = ".*+?^${}()|[]\\",
  an = Object.keys(et),
  fn = $e({
    name: "QSelect",
    inheritAttrs: !1,
    props: {
      ...nn,
      ...pl,
      ...et,
      modelValue: { required: !0 },
      multiple: Boolean,
      displayValue: [String, Number],
      displayValueHtml: Boolean,
      dropdownIcon: String,
      options: { type: Array, default: () => [] },
      optionValue: [Function, String],
      optionLabel: [Function, String],
      optionDisable: [Function, String],
      hideSelected: Boolean,
      hideDropdownIcon: Boolean,
      fillInput: Boolean,
      maxValues: [Number, String],
      optionsDense: Boolean,
      optionsDark: { type: Boolean, default: null },
      optionsSelectedClass: String,
      optionsHtml: Boolean,
      optionsCover: Boolean,
      menuShrink: Boolean,
      menuAnchor: String,
      menuSelf: String,
      menuOffset: Array,
      popupContentClass: String,
      popupContentStyle: [String, Array, Object],
      popupNoRouteDismiss: Boolean,
      useInput: Boolean,
      useChips: Boolean,
      newValueMode: { type: String, validator: At },
      mapOptions: Boolean,
      emitValue: Boolean,
      inputDebounce: { type: [Number, String], default: 500 },
      inputClass: [Array, String, Object],
      inputStyle: [Array, String, Object],
      tabindex: { type: [String, Number], default: 0 },
      autocomplete: String,
      transitionShow: String,
      transitionHide: String,
      transitionDuration: [String, Number],
      behavior: {
        type: String,
        validator: (e) => ["default", "menu", "dialog"].includes(e),
        default: "default",
      },
      virtualScrollItemSize: { type: [Number, String], default: void 0 },
      onNewValue: Function,
      onFilter: Function,
    },
    emits: [
      ...Et,
      "add",
      "remove",
      "inputValue",
      "newValue",
      "keyup",
      "keypress",
      "keydown",
      "filterAbort",
    ],
    setup(e, { slots: n, emit: u }) {
      const { proxy: o } = He(),
        { $q: v } = o,
        i = O(!1),
        m = O(!1),
        h = O(-1),
        g = O(""),
        y = O(!1),
        c = O(!1);
      let w = null,
        V = null,
        a,
        S,
        P,
        b = null,
        D,
        U,
        E,
        M;
      const F = O(null),
        z = O(null),
        _ = O(null),
        W = O(null),
        j = O(null),
        G = ql(e),
        re = el(ct),
        N = x(() => (Array.isArray(e.options) ? e.options.length : 0)),
        ne = x(() =>
          e.virtualScrollItemSize === void 0
            ? e.optionsDense === !0
              ? 24
              : 48
            : e.virtualScrollItemSize,
        ),
        {
          virtualScrollSliceRange: se,
          virtualScrollSliceSizeComputed: oe,
          localResetVirtualScroll: X,
          padVirtualScroll: pe,
          onVirtualScrollEvt: ie,
          scrollTo: J,
          setVirtualScrollSize: ce,
        } = un({
          virtualScrollLength: N,
          getVirtualScrollTarget: Pt,
          getVirtualScrollEl: rt,
          virtualScrollItemSizeComputed: ne,
        }),
        l = zt(),
        d = x(() => {
          const t = e.mapOptions === !0 && e.multiple !== !0,
            f =
              e.modelValue !== void 0 && (e.modelValue !== null || t === !0)
                ? e.multiple === !0 && Array.isArray(e.modelValue)
                  ? e.modelValue
                  : [e.modelValue]
                : [];
          if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
            const s = e.mapOptions === !0 && a !== void 0 ? a : [],
              C = f.map((B) => _t(B, s));
            return e.modelValue === null && t === !0
              ? C.filter((B) => B !== null)
              : C;
          }
          return f;
        }),
        p = x(() => {
          const t = {};
          return (
            an.forEach((f) => {
              const s = e[f];
              s !== void 0 && (t[f] = s);
            }),
            t
          );
        }),
        T = x(() => (e.optionsDark === null ? l.isDark.value : e.optionsDark)),
        I = x(() => ht(d.value)),
        q = x(() => {
          let t = "q-field__input q-placeholder col";
          return e.hideSelected === !0 || d.value.length === 0
            ? [t, e.inputClass]
            : ((t += " q-field__input--padding"),
              e.inputClass === void 0 ? t : [t, e.inputClass]);
        }),
        k = x(
          () =>
            (e.virtualScrollHorizontal === !0
              ? "q-virtual-scroll--horizontal"
              : "") + (e.popupContentClass ? " " + e.popupContentClass : ""),
        ),
        L = x(() => N.value === 0),
        r = x(() => d.value.map((t) => Q.value(t)).join(", ")),
        $ = x(() => (e.displayValue !== void 0 ? e.displayValue : r.value)),
        ee = x(() =>
          e.optionsHtml === !0 ? () => !0 : (t) => t != null && t.html === !0,
        ),
        ge = x(
          () =>
            e.displayValueHtml === !0 ||
            (e.displayValue === void 0 &&
              (e.optionsHtml === !0 || d.value.some(ee.value))),
        ),
        te = x(() => (l.focused.value === !0 ? e.tabindex : -1)),
        Fe = x(() => {
          const t = {
            tabindex: e.tabindex,
            role: "combobox",
            "aria-label": e.label,
            "aria-readonly": e.readonly === !0 ? "true" : "false",
            "aria-autocomplete": e.useInput === !0 ? "list" : "none",
            "aria-expanded": i.value === !0 ? "true" : "false",
            "aria-controls": `${l.targetUid.value}_lb`,
          };
          return (
            h.value >= 0 &&
              (t["aria-activedescendant"] = `${l.targetUid.value}_${h.value}`),
            t
          );
        }),
        de = x(() => ({
          id: `${l.targetUid.value}_lb`,
          role: "listbox",
          "aria-multiselectable": e.multiple === !0 ? "true" : "false",
        })),
        fe = x(() =>
          d.value.map((t, f) => ({
            index: f,
            opt: t,
            html: ee.value(t),
            selected: !0,
            removeAtIndex: Rt,
            toggleOption: ve,
            tabindex: te.value,
          })),
        ),
        Ie = x(() => {
          if (N.value === 0) return [];
          const { from: t, to: f } = se.value;
          return e.options.slice(t, f).map((s, C) => {
            const B = Se.value(s) === !0,
              H = Qe(s) === !0,
              K = t + C,
              R = {
                clickable: !0,
                active: H,
                activeClass: Ae.value,
                manualFocus: !0,
                focused: !1,
                disable: B,
                tabindex: -1,
                dense: e.optionsDense,
                dark: T.value,
                role: "option",
                "aria-selected": H === !0 ? "true" : "false",
                id: `${l.targetUid.value}_${K}`,
                onClick: () => {
                  ve(s);
                },
              };
            return (
              B !== !0 &&
                (h.value === K && (R.focused = !0),
                v.platform.is.desktop === !0 &&
                  (R.onMousemove = () => {
                    i.value === !0 && ye(K);
                  })),
              {
                index: K,
                opt: s,
                html: ee.value(s),
                label: Q.value(s),
                selected: R.active,
                focused: R.focused,
                toggleOption: ve,
                setOptionIndex: ye,
                itemProps: R,
              }
            );
          });
        }),
        qe = x(() =>
          e.dropdownIcon !== void 0 ? e.dropdownIcon : v.iconSet.arrow.dropdown,
        ),
        Ke = x(
          () =>
            e.optionsCover === !1 &&
            e.outlined !== !0 &&
            e.standout !== !0 &&
            e.borderless !== !0 &&
            e.rounded !== !0,
        ),
        Ae = x(() =>
          e.optionsSelectedClass !== void 0
            ? e.optionsSelectedClass
            : e.color !== void 0
              ? `text-${e.color}`
              : "",
        ),
        le = x(() => je(e.optionValue, "value")),
        Q = x(() => je(e.optionLabel, "label")),
        Se = x(() => je(e.optionDisable, "disable")),
        Oe = x(() => d.value.map((t) => le.value(t))),
        Lt = x(() => {
          const t = {
            onInput: ct,
            onChange: re,
            onKeydown: at,
            onKeyup: ot,
            onKeypress: it,
            onFocus: nt,
            onClick(f) {
              S === !0 && Ve(f);
            },
          };
          return (
            (t.onCompositionstart =
              t.onCompositionupdate =
              t.onCompositionend =
                re),
            t
          );
        });
      Y(
        d,
        (t) => {
          (a = t),
            e.useInput === !0 &&
              e.fillInput === !0 &&
              e.multiple !== !0 &&
              l.innerLoading.value !== !0 &&
              ((m.value !== !0 && i.value !== !0) || I.value !== !0) &&
              (P !== !0 && Ce(), (m.value === !0 || i.value === !0) && be(""));
        },
        { immediate: !0 },
      ),
        Y(() => e.fillInput, Ce),
        Y(i, Ue),
        Y(N, Gt);
      function tt(t) {
        return e.emitValue === !0 ? le.value(t) : t;
      }
      function Ne(t) {
        if (t !== -1 && t < d.value.length)
          if (e.multiple === !0) {
            const f = e.modelValue.slice();
            u("remove", { index: t, value: f.splice(t, 1)[0] }),
              u("update:modelValue", f);
          } else u("update:modelValue", null);
      }
      function Rt(t) {
        Ne(t), l.focus();
      }
      function lt(t, f) {
        const s = tt(t);
        if (e.multiple !== !0) {
          e.fillInput === !0 && Ee(Q.value(t), !0, !0),
            u("update:modelValue", s);
          return;
        }
        if (d.value.length === 0) {
          u("add", { index: 0, value: s }),
            u("update:modelValue", e.multiple === !0 ? [s] : s);
          return;
        }
        if (
          (f === !0 && Qe(t) === !0) ||
          (e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        )
          return;
        const C = e.modelValue.slice();
        u("add", { index: C.length, value: s }),
          C.push(s),
          u("update:modelValue", C);
      }
      function ve(t, f) {
        if (l.editable.value !== !0 || t === void 0 || Se.value(t) === !0)
          return;
        const s = le.value(t);
        if (e.multiple !== !0) {
          f !== !0 && (Ee(e.fillInput === !0 ? Q.value(t) : "", !0, !0), me()),
            z.value !== null && z.value.focus(),
            (d.value.length === 0 || Me(le.value(d.value[0]), s) !== !0) &&
              u("update:modelValue", e.emitValue === !0 ? s : t);
          return;
        }
        if (
          ((S !== !0 || y.value === !0) && l.focus(),
          nt(),
          d.value.length === 0)
        ) {
          const H = e.emitValue === !0 ? s : t;
          u("add", { index: 0, value: H }),
            u("update:modelValue", e.multiple === !0 ? [H] : H);
          return;
        }
        const C = e.modelValue.slice(),
          B = Oe.value.findIndex((H) => Me(H, s));
        if (B !== -1) u("remove", { index: B, value: C.splice(B, 1)[0] });
        else {
          if (e.maxValues !== void 0 && C.length >= e.maxValues) return;
          const H = e.emitValue === !0 ? s : t;
          u("add", { index: C.length, value: H }), C.push(H);
        }
        u("update:modelValue", C);
      }
      function ye(t) {
        if (v.platform.is.desktop !== !0) return;
        const f = t !== -1 && t < N.value ? t : -1;
        h.value !== f && (h.value = f);
      }
      function Le(t = 1, f) {
        if (i.value === !0) {
          let s = h.value;
          do s = St(s + t, -1, N.value - 1);
          while (s !== -1 && s !== h.value && Se.value(e.options[s]) === !0);
          h.value !== s &&
            (ye(s),
            J(s),
            f !== !0 &&
              e.useInput === !0 &&
              e.fillInput === !0 &&
              Re(s >= 0 ? Q.value(e.options[s]) : D, !0));
        }
      }
      function _t(t, f) {
        const s = (C) => Me(le.value(C), t);
        return e.options.find(s) || f.find(s) || t;
      }
      function je(t, f) {
        const s = t !== void 0 ? t : f;
        return typeof s == "function"
          ? s
          : (C) => (C !== null && typeof C == "object" && s in C ? C[s] : C);
      }
      function Qe(t) {
        const f = le.value(t);
        return Oe.value.find((s) => Me(s, f)) !== void 0;
      }
      function nt(t) {
        e.useInput === !0 &&
          z.value !== null &&
          (t === void 0 ||
            (z.value === t.target && t.target.value === r.value)) &&
          z.value.select();
      }
      function ut(t) {
        Bt(t, 27) === !0 && i.value === !0 && (Ve(t), me(), Ce()),
          u("keyup", t);
      }
      function ot(t) {
        const { value: f } = t.target;
        if (t.keyCode !== void 0) {
          ut(t);
          return;
        }
        if (
          ((t.target.value = ""),
          w !== null && (clearTimeout(w), (w = null)),
          V !== null && (clearTimeout(V), (V = null)),
          Ce(),
          typeof f == "string" && f.length !== 0)
        ) {
          const s = f.toLocaleLowerCase(),
            C = (H) => {
              const K = e.options.find(
                (R) => H.value(R).toLocaleLowerCase() === s,
              );
              return K === void 0
                ? !1
                : (d.value.indexOf(K) === -1 ? ve(K) : me(), !0);
            },
            B = (H) => {
              C(le) !== !0 &&
                (C(Q) === !0 || H === !0 || be(f, !0, () => B(!0)));
            };
          B();
        } else l.clearValue(t);
      }
      function it(t) {
        u("keypress", t);
      }
      function at(t) {
        if ((u("keydown", t), Ml(t) === !0)) return;
        const f =
            g.value.length !== 0 &&
            (e.newValueMode !== void 0 || e.onNewValue !== void 0),
          s =
            t.shiftKey !== !0 &&
            e.multiple !== !0 &&
            (h.value !== -1 || f === !0);
        if (t.keyCode === 27) {
          Te(t);
          return;
        }
        if (t.keyCode === 9 && s === !1) {
          we();
          return;
        }
        if (
          t.target === void 0 ||
          t.target.id !== l.targetUid.value ||
          l.editable.value !== !0
        )
          return;
        if (t.keyCode === 40 && l.innerLoading.value !== !0 && i.value === !1) {
          ae(t), xe();
          return;
        }
        if (
          t.keyCode === 8 &&
          (e.useChips === !0 || e.clearable === !0) &&
          e.hideSelected !== !0 &&
          g.value.length === 0
        ) {
          e.multiple === !0 && Array.isArray(e.modelValue) === !0
            ? Ne(e.modelValue.length - 1)
            : e.multiple !== !0 &&
              e.modelValue !== null &&
              u("update:modelValue", null);
          return;
        }
        (t.keyCode === 35 || t.keyCode === 36) &&
          (typeof g.value != "string" || g.value.length === 0) &&
          (ae(t), (h.value = -1), Le(t.keyCode === 36 ? 1 : -1, e.multiple)),
          (t.keyCode === 33 || t.keyCode === 34) &&
            oe.value !== void 0 &&
            (ae(t),
            (h.value = Math.max(
              -1,
              Math.min(
                N.value,
                h.value + (t.keyCode === 33 ? -1 : 1) * oe.value.view,
              ),
            )),
            Le(t.keyCode === 33 ? 1 : -1, e.multiple)),
          (t.keyCode === 38 || t.keyCode === 40) &&
            (ae(t), Le(t.keyCode === 38 ? -1 : 1, e.multiple));
        const C = N.value;
        if (
          ((E === void 0 || M < Date.now()) && (E = ""),
          C > 0 &&
            e.useInput !== !0 &&
            t.key !== void 0 &&
            t.key.length === 1 &&
            t.altKey === !1 &&
            t.ctrlKey === !1 &&
            t.metaKey === !1 &&
            (t.keyCode !== 32 || E.length !== 0))
        ) {
          i.value !== !0 && xe(t);
          const B = t.key.toLocaleLowerCase(),
            H = E.length === 1 && E[0] === B;
          (M = Date.now() + 1500), H === !1 && (ae(t), (E += B));
          const K = new RegExp(
            "^" +
              E.split("")
                .map((Xe) => (on.indexOf(Xe) !== -1 ? "\\" + Xe : Xe))
                .join(".*"),
            "i",
          );
          let R = h.value;
          if (H === !0 || R < 0 || K.test(Q.value(e.options[R])) !== !0)
            do R = St(R + 1, -1, C - 1);
            while (
              R !== h.value &&
              (Se.value(e.options[R]) === !0 ||
                K.test(Q.value(e.options[R])) !== !0)
            );
          h.value !== R &&
            ue(() => {
              ye(R),
                J(R),
                R >= 0 &&
                  e.useInput === !0 &&
                  e.fillInput === !0 &&
                  Re(Q.value(e.options[R]), !0);
            });
          return;
        }
        if (
          !(
            t.keyCode !== 13 &&
            (t.keyCode !== 32 || e.useInput === !0 || E !== "") &&
            (t.keyCode !== 9 || s === !1)
          )
        ) {
          if ((t.keyCode !== 9 && ae(t), h.value !== -1 && h.value < C)) {
            ve(e.options[h.value]);
            return;
          }
          if (f === !0) {
            const B = (H, K) => {
              if (K) {
                if (At(K) !== !0) return;
              } else K = e.newValueMode;
              if ((Ee("", e.multiple !== !0, !0), H == null)) return;
              (K === "toggle" ? ve : lt)(H, K === "add-unique"),
                e.multiple !== !0 &&
                  (z.value !== null && z.value.focus(), me());
            };
            if (
              (e.onNewValue !== void 0 ? u("newValue", g.value, B) : B(g.value),
              e.multiple !== !0)
            )
              return;
          }
          i.value === !0 ? we() : l.innerLoading.value !== !0 && xe();
        }
      }
      function rt() {
        return S === !0
          ? j.value
          : _.value !== null && _.value.contentEl !== null
            ? _.value.contentEl
            : void 0;
      }
      function Pt() {
        return rt();
      }
      function Dt() {
        return e.hideSelected === !0
          ? []
          : n["selected-item"] !== void 0
            ? fe.value.map((t) => n["selected-item"](t)).slice()
            : n.selected !== void 0
              ? [].concat(n.selected())
              : e.useChips === !0
                ? fe.value.map((t, f) =>
                    A(
                      Nl,
                      {
                        key: "option-" + f,
                        removable:
                          l.editable.value === !0 && Se.value(t.opt) !== !0,
                        dense: !0,
                        textColor: e.color,
                        tabindex: te.value,
                        onRemove() {
                          t.removeAtIndex(f);
                        },
                      },
                      () =>
                        A("span", {
                          class: "ellipsis",
                          [t.html === !0 ? "innerHTML" : "textContent"]:
                            Q.value(t.opt),
                        }),
                    ),
                  )
                : [
                    A("span", {
                      [ge.value === !0 ? "innerHTML" : "textContent"]: $.value,
                    }),
                  ];
      }
      function st() {
        if (L.value === !0)
          return n["no-option"] !== void 0
            ? n["no-option"]({ inputValue: g.value })
            : void 0;
        const t =
          n.option !== void 0
            ? n.option
            : (s) =>
                A(Tl, { key: s.index, ...s.itemProps }, () =>
                  A(zl, () =>
                    A(Jt, () =>
                      A("span", {
                        [s.html === !0 ? "innerHTML" : "textContent"]: s.label,
                      }),
                    ),
                  ),
                );
        let f = pe("div", Ie.value.map(t));
        return (
          n["before-options"] !== void 0 &&
            (f = n["before-options"]().concat(f)),
          Hl(n["after-options"], f)
        );
      }
      function Wt(t, f) {
        const s =
            f === !0
              ? { ...Fe.value, ...l.splitAttrs.attributes.value }
              : void 0,
          C = {
            ref: f === !0 ? z : void 0,
            key: "i_t",
            class: q.value,
            style: e.inputStyle,
            value: g.value !== void 0 ? g.value : "",
            type: "search",
            ...s,
            id: f === !0 ? l.targetUid.value : void 0,
            maxlength: e.maxlength,
            autocomplete: e.autocomplete,
            "data-autofocus": t === !0 || e.autofocus === !0 || void 0,
            disabled: e.disable === !0,
            readonly: e.readonly === !0,
            ...Lt.value,
          };
        return (
          t !== !0 &&
            S === !0 &&
            (Array.isArray(C.class) === !0
              ? (C.class = [...C.class, "no-pointer-events"])
              : (C.class += " no-pointer-events")),
          A("input", C)
        );
      }
      function ct(t) {
        w !== null && (clearTimeout(w), (w = null)),
          V !== null && (clearTimeout(V), (V = null)),
          !(t && t.target && t.target.qComposing === !0) &&
            (Re(t.target.value || ""),
            (P = !0),
            (D = g.value),
            l.focused.value !== !0 && (S !== !0 || y.value === !0) && l.focus(),
            e.onFilter !== void 0 &&
              (w = setTimeout(() => {
                (w = null), be(g.value);
              }, e.inputDebounce)));
      }
      function Re(t, f) {
        g.value !== t &&
          ((g.value = t),
          f === !0 || e.inputDebounce === 0 || e.inputDebounce === "0"
            ? u("inputValue", t)
            : (V = setTimeout(() => {
                (V = null), u("inputValue", t);
              }, e.inputDebounce)));
      }
      function Ee(t, f, s) {
        (P = s !== !0),
          e.useInput === !0 &&
            (Re(t, !0), (f === !0 || s !== !0) && (D = t), f !== !0 && be(t));
      }
      function be(t, f, s) {
        if (e.onFilter === void 0 || (f !== !0 && l.focused.value !== !0))
          return;
        l.innerLoading.value === !0
          ? u("filterAbort")
          : ((l.innerLoading.value = !0), (c.value = !0)),
          t !== "" &&
            e.multiple !== !0 &&
            d.value.length !== 0 &&
            P !== !0 &&
            t === Q.value(d.value[0]) &&
            (t = "");
        const C = setTimeout(() => {
          i.value === !0 && (i.value = !1);
        }, 10);
        b !== null && clearTimeout(b),
          (b = C),
          u(
            "filter",
            t,
            (B, H) => {
              (f === !0 || l.focused.value === !0) &&
                b === C &&
                (clearTimeout(b),
                typeof B == "function" && B(),
                (c.value = !1),
                ue(() => {
                  (l.innerLoading.value = !1),
                    l.editable.value === !0 &&
                      (f === !0
                        ? i.value === !0 && me()
                        : i.value === !0
                          ? Ue(!0)
                          : (i.value = !0)),
                    typeof H == "function" &&
                      ue(() => {
                        H(o);
                      }),
                    typeof s == "function" &&
                      ue(() => {
                        s(o);
                      });
                }));
            },
            () => {
              l.focused.value === !0 &&
                b === C &&
                (clearTimeout(b), (l.innerLoading.value = !1), (c.value = !1)),
                i.value === !0 && (i.value = !1);
            },
          );
      }
      function $t() {
        return A(
          en,
          {
            ref: _,
            class: k.value,
            style: e.popupContentStyle,
            modelValue: i.value,
            fit: e.menuShrink !== !0,
            cover: e.optionsCover === !0 && L.value !== !0 && e.useInput !== !0,
            anchor: e.menuAnchor,
            self: e.menuSelf,
            offset: e.menuOffset,
            dark: T.value,
            noParentEvent: !0,
            noRefocus: !0,
            noFocus: !0,
            noRouteDismiss: e.popupNoRouteDismiss,
            square: Ke.value,
            transitionShow: e.transitionShow,
            transitionHide: e.transitionHide,
            transitionDuration: e.transitionDuration,
            separateClosePopup: !0,
            ...de.value,
            onScrollPassive: ie,
            onBeforeShow: ft,
            onBeforeHide: Kt,
            onShow: Nt,
          },
          st,
        );
      }
      function Kt(t) {
        vt(t), we();
      }
      function Nt() {
        ce();
      }
      function jt(t) {
        Ve(t),
          z.value !== null && z.value.focus(),
          (y.value = !0),
          window.scrollTo(
            window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0,
            0,
          );
      }
      function Qt(t) {
        Ve(t),
          ue(() => {
            y.value = !1;
          });
      }
      function Ut() {
        const t = [
          A(
            $l,
            {
              class: `col-auto ${l.fieldClass.value}`,
              ...p.value,
              for: l.targetUid.value,
              dark: T.value,
              square: !0,
              loading: c.value,
              itemAligned: !1,
              filled: !0,
              stackLabel: g.value.length !== 0,
              ...l.splitAttrs.listeners.value,
              onFocus: jt,
              onBlur: Qt,
            },
            {
              ...n,
              rawControl: () => l.getControl(!0),
              before: void 0,
              after: void 0,
            },
          ),
        ];
        return (
          i.value === !0 &&
            t.push(
              A(
                "div",
                {
                  ref: j,
                  class: k.value + " scroll",
                  style: e.popupContentStyle,
                  ...de.value,
                  onClick: Te,
                  onScrollPassive: ie,
                },
                st(),
              ),
            ),
          A(
            Wl,
            {
              ref: W,
              modelValue: m.value,
              position: e.useInput === !0 ? "top" : void 0,
              transitionShow: U,
              transitionHide: e.transitionHide,
              transitionDuration: e.transitionDuration,
              noRouteDismiss: e.popupNoRouteDismiss,
              onBeforeShow: ft,
              onBeforeHide: Xt,
              onHide: Yt,
              onShow: Zt,
            },
            () =>
              A(
                "div",
                {
                  class:
                    "q-select__dialog" +
                    (T.value === !0 ? " q-select__dialog--dark q-dark" : "") +
                    (y.value === !0 ? " q-select__dialog--focused" : ""),
                },
                t,
              ),
          )
        );
      }
      function Xt(t) {
        vt(t),
          W.value !== null &&
            W.value.__updateRefocusTarget(
              l.rootRef.value.querySelector(
                ".q-field__native > [tabindex]:last-child",
              ),
            ),
          (l.focused.value = !1);
      }
      function Yt(t) {
        me(), l.focused.value === !1 && u("blur", t), Ce();
      }
      function Zt() {
        const t = document.activeElement;
        (t === null || t.id !== l.targetUid.value) &&
          z.value !== null &&
          z.value !== t &&
          z.value.focus(),
          ce();
      }
      function we() {
        m.value !== !0 &&
          ((h.value = -1),
          i.value === !0 && (i.value = !1),
          l.focused.value === !1 &&
            (b !== null && (clearTimeout(b), (b = null)),
            l.innerLoading.value === !0 &&
              (u("filterAbort"), (l.innerLoading.value = !1), (c.value = !1))));
      }
      function xe(t) {
        l.editable.value === !0 &&
          (S === !0
            ? (l.onControlFocusin(t),
              (m.value = !0),
              ue(() => {
                l.focus();
              }))
            : l.focus(),
          e.onFilter !== void 0
            ? be(g.value)
            : (L.value !== !0 || n["no-option"] !== void 0) && (i.value = !0));
      }
      function me() {
        (m.value = !1), we();
      }
      function Ce() {
        e.useInput === !0 &&
          Ee(
            (e.multiple !== !0 &&
              e.fillInput === !0 &&
              d.value.length !== 0 &&
              Q.value(d.value[0])) ||
              "",
            !0,
            !0,
          );
      }
      function Ue(t) {
        let f = -1;
        if (t === !0) {
          if (d.value.length !== 0) {
            const s = le.value(d.value[0]);
            f = e.options.findIndex((C) => Me(le.value(C), s));
          }
          X(f);
        }
        ye(f);
      }
      function Gt(t, f) {
        i.value === !0 &&
          l.innerLoading.value === !1 &&
          (X(-1, !0),
          ue(() => {
            i.value === !0 &&
              l.innerLoading.value === !1 &&
              (t > f ? X() : Ue(!0));
          }));
      }
      function dt() {
        m.value === !1 && _.value !== null && _.value.updatePosition();
      }
      function ft(t) {
        t !== void 0 && Ve(t),
          u("popupShow", t),
          (l.hasPopupOpen = !0),
          l.onControlFocusin(t);
      }
      function vt(t) {
        t !== void 0 && Ve(t),
          u("popupHide", t),
          (l.hasPopupOpen = !1),
          l.onControlFocusout(t);
      }
      function mt() {
        (S =
          v.platform.is.mobile !== !0 && e.behavior !== "dialog"
            ? !1
            : e.behavior !== "menu" &&
              (e.useInput === !0
                ? n["no-option"] !== void 0 ||
                  e.onFilter !== void 0 ||
                  L.value === !1
                : !0)),
          (U =
            v.platform.is.ios === !0 && S === !0 && e.useInput === !0
              ? "fade"
              : e.transitionShow);
      }
      return (
        Al(mt),
        El(dt),
        mt(),
        Be(() => {
          w !== null && clearTimeout(w), V !== null && clearTimeout(V);
        }),
        Object.assign(o, {
          showPopup: xe,
          hidePopup: me,
          removeAtIndex: Ne,
          add: lt,
          toggleOption: ve,
          getOptionIndex: () => h.value,
          setOptionIndex: ye,
          moveOptionSelection: Le,
          filter: be,
          updateMenuPosition: dt,
          updateInputValue: Ee,
          isOptionSelected: Qe,
          getEmittingOptionValue: tt,
          isOptionDisabled: (...t) => Se.value.apply(null, t) === !0,
          getOptionValue: (...t) => le.value.apply(null, t),
          getOptionLabel: (...t) => Q.value.apply(null, t),
        }),
        Object.assign(l, {
          innerValue: d,
          fieldClass: x(
            () =>
              `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`,
          ),
          inputRef: F,
          targetRef: z,
          hasValue: I,
          showPopup: xe,
          floatingLabel: x(
            () =>
              (e.hideSelected !== !0 && I.value === !0) ||
              typeof g.value == "number" ||
              g.value.length !== 0 ||
              ht(e.displayValue),
          ),
          getControlChild: () => {
            if (
              l.editable.value !== !1 &&
              (m.value === !0 || L.value !== !0 || n["no-option"] !== void 0)
            )
              return S === !0 ? Ut() : $t();
            l.hasPopupOpen === !0 && (l.hasPopupOpen = !1);
          },
          controlEvents: {
            onFocusin(t) {
              l.onControlFocusin(t);
            },
            onFocusout(t) {
              l.onControlFocusout(t, () => {
                Ce(), we();
              });
            },
            onClick(t) {
              if ((Te(t), S !== !0 && i.value === !0)) {
                we(), z.value !== null && z.value.focus();
                return;
              }
              xe(t);
            },
          },
          getControl: (t) => {
            const f = Dt(),
              s = t === !0 || m.value !== !0 || S !== !0;
            if (e.useInput === !0) f.push(Wt(t, s));
            else if (l.editable.value === !0) {
              const B = s === !0 ? Fe.value : void 0;
              f.push(
                A("input", {
                  ref: s === !0 ? z : void 0,
                  key: "d_t",
                  class: "q-select__focus-target",
                  id: s === !0 ? l.targetUid.value : void 0,
                  value: $.value,
                  readonly: !0,
                  "data-autofocus": t === !0 || e.autofocus === !0 || void 0,
                  ...B,
                  onKeydown: at,
                  onKeyup: ut,
                  onKeypress: it,
                }),
              ),
                s === !0 &&
                  typeof e.autocomplete == "string" &&
                  e.autocomplete.length !== 0 &&
                  f.push(
                    A("input", {
                      class: "q-select__autocomplete-input",
                      autocomplete: e.autocomplete,
                      tabindex: -1,
                      onKeyup: ot,
                    }),
                  );
            }
            if (
              G.value !== void 0 &&
              e.disable !== !0 &&
              Oe.value.length !== 0
            ) {
              const B = Oe.value.map((H) =>
                A("option", { value: H, selected: !0 }),
              );
              f.push(
                A(
                  "select",
                  { class: "hidden", name: G.value, multiple: e.multiple },
                  B,
                ),
              );
            }
            const C =
              e.useInput === !0 || s !== !0
                ? void 0
                : l.splitAttrs.attributes.value;
            return A(
              "div",
              {
                class: "q-field__native row items-center",
                ...C,
                ...l.splitAttrs.listeners.value,
              },
              f,
            );
          },
          getInnerAppend: () =>
            e.loading !== !0 && c.value !== !0 && e.hideDropdownIcon !== !0
              ? [
                  A(_e, {
                    class:
                      "q-select__dropdown-icon" +
                      (i.value === !0 ? " rotate-180" : ""),
                    name: qe.value,
                  }),
                ]
              : null,
        }),
        Mt(l)
      );
    },
  });
export { fn as Q, un as a, dn as c, nn as u };
