import {
  a$ as Me,
  r as I,
  o as ae,
  w as P,
  c as p,
  $ as oe,
  i as Se,
  g as W,
  z as Re,
  au as qe,
  ab as ke,
  ax as _e,
  t as Ve,
  x as Y,
  n as Ae,
  p as Fe,
  h as k,
  ag as J,
  X as Be,
  Y as Ee,
  K as de,
  aX as $e,
  q as G,
  ar as Ie,
  l as xe,
  ak as Oe,
  aC as Te,
  av as Pe,
  aw as De,
  aB as fe,
} from "./index-DEMVRRIH.js";
import { a as we, l as ze } from "./QPage-Rtxh1b_-.js";
let re,
  ee = 0;
const $ = new Array(256);
for (let e = 0; e < 256; e++) $[e] = (e + 256).toString(16).substring(1);
const je = (() => {
    const e =
      typeof crypto < "u"
        ? crypto
        : typeof window < "u"
          ? window.crypto || window.msCrypto
          : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (t) => {
          const u = new Uint8Array(t);
          return e.getRandomValues(u), u;
        };
    }
    return (t) => {
      const u = [];
      for (let i = t; i > 0; i--) u.push(Math.floor(Math.random() * 256));
      return u;
    };
  })(),
  ce = 4096;
function ie() {
  (re === void 0 || ee + 16 > ce) && ((ee = 0), (re = je(ce)));
  const e = Array.prototype.slice.call(re, ee, (ee += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    $[e[0]] +
      $[e[1]] +
      $[e[2]] +
      $[e[3]] +
      "-" +
      $[e[4]] +
      $[e[5]] +
      "-" +
      $[e[6]] +
      $[e[7]] +
      "-" +
      $[e[8]] +
      $[e[9]] +
      "-" +
      $[e[10]] +
      $[e[11]] +
      $[e[12]] +
      $[e[13]] +
      $[e[14]] +
      $[e[15]]
  );
}
function Le(e) {
  return e ?? null;
}
function ve(e, t) {
  return e ?? (t === !0 ? `f_${ie()}` : null);
}
function Ne({ getValue: e, required: t = !0 } = {}) {
  if (Me.value === !0) {
    const u = e !== void 0 ? I(Le(e())) : I(null);
    return (
      t === !0 &&
        u.value === null &&
        ae(() => {
          u.value = `f_${ie()}`;
        }),
      e !== void 0 &&
        P(e, (i) => {
          u.value = ve(i, t);
        }),
      u
    );
  }
  return e !== void 0 ? p(() => ve(e(), t)) : I(`f_${ie()}`);
}
function Ke({ validate: e, resetValidation: t, requiresQForm: u }) {
  const i = Se(Re, !1);
  if (i !== !1) {
    const { props: d, proxy: f } = W();
    Object.assign(f, { validate: e, resetValidation: t }),
      P(
        () => d.disable,
        (h) => {
          h === !0
            ? (typeof t == "function" && t(), i.unbindComponent(f))
            : i.bindComponent(f);
        },
      ),
      ae(() => {
        d.disable !== !0 && i.bindComponent(f);
      }),
      oe(() => {
        d.disable !== !0 && i.unbindComponent(f);
      });
  } else u === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const me = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  ge = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  he = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  te =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  le =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  ue = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e,
      ),
    hexColor: (e) => me.test(e),
    hexaColor: (e) => ge.test(e),
    hexOrHexaColor: (e) => he.test(e),
    rgbColor: (e) => te.test(e),
    rgbaColor: (e) => le.test(e),
    rgbOrRgbaColor: (e) => te.test(e) || le.test(e),
    hexOrRgbColor: (e) => me.test(e) || te.test(e),
    hexaOrRgbaColor: (e) => ge.test(e) || le.test(e),
    anyColor: (e) => he.test(e) || te.test(e) || le.test(e),
  },
  Ze = [!0, !1, "ondemand"],
  Ue = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {
      type: [Boolean, String],
      default: !1,
      validator: (e) => Ze.includes(e),
    },
  };
function He(e, t) {
  const { props: u, proxy: i } = W(),
    d = I(!1),
    f = I(null),
    h = I(!1);
  Ke({ validate: z, resetValidation: D });
  let x = 0,
    F;
  const R = p(
      () => u.rules !== void 0 && u.rules !== null && u.rules.length !== 0,
    ),
    w = p(() => u.disable !== !0 && R.value === !0 && t.value === !1),
    b = p(() => u.error === !0 || d.value === !0),
    H = p(() =>
      typeof u.errorMessage == "string" && u.errorMessage.length !== 0
        ? u.errorMessage
        : f.value,
    );
  P(
    () => u.modelValue,
    () => {
      (h.value = !0), w.value === !0 && u.lazyRules === !1 && O();
    },
  );
  function E() {
    u.lazyRules !== "ondemand" && w.value === !0 && h.value === !0 && O();
  }
  P(
    () => u.reactiveRules,
    (L) => {
      L === !0
        ? F === void 0 && (F = P(() => u.rules, E, { immediate: !0, deep: !0 }))
        : F !== void 0 && (F(), (F = void 0));
    },
    { immediate: !0 },
  ),
    P(() => u.lazyRules, E),
    P(e, (L) => {
      L === !0
        ? (h.value = !0)
        : w.value === !0 && u.lazyRules !== "ondemand" && O();
    });
  function D() {
    x++,
      (t.value = !1),
      (h.value = !1),
      (d.value = !1),
      (f.value = null),
      O.cancel();
  }
  function z(L = u.modelValue) {
    if (u.disable === !0 || R.value === !1) return !0;
    const _ = ++x,
      Q =
        t.value !== !0
          ? () => {
              h.value = !0;
            }
          : () => {},
      N = (S, C) => {
        S === !0 && Q(), (d.value = S), (f.value = C || null), (t.value = !1);
      },
      j = [];
    for (let S = 0; S < u.rules.length; S++) {
      const C = u.rules[S];
      let B;
      if (
        (typeof C == "function"
          ? (B = C(L, ue))
          : typeof C == "string" && ue[C] !== void 0 && (B = ue[C](L)),
        B === !1 || typeof B == "string")
      )
        return N(!0, B), !1;
      B !== !0 && B !== void 0 && j.push(B);
    }
    return j.length === 0
      ? (N(!1), !0)
      : ((t.value = !0),
        Promise.all(j).then(
          (S) => {
            if (S === void 0 || Array.isArray(S) === !1 || S.length === 0)
              return _ === x && N(!1), !0;
            const C = S.find((B) => B === !1 || typeof B == "string");
            return _ === x && N(C !== void 0, C), C === void 0;
          },
          (S) => (_ === x && (console.error(S), N(!0)), !1),
        ));
  }
  const O = qe(z, 0);
  return (
    oe(() => {
      F !== void 0 && F(), O.cancel();
    }),
    Object.assign(i, { resetValidation: D, validate: z }),
    ke(i, "hasError", () => b.value),
    {
      isDirtyModel: h,
      hasRules: R,
      hasError: b,
      errorMessage: H,
      validate: z,
      resetValidation: D,
    }
  );
}
const be = /^on[A-Z]/;
function Qe() {
  const { attrs: e, vnode: t } = W(),
    u = { listeners: I({}), attributes: I({}) };
  function i() {
    const d = {},
      f = {};
    for (const h in e)
      h !== "class" && h !== "style" && be.test(h) === !1 && (d[h] = e[h]);
    for (const h in t.props) be.test(h) === !0 && (f[h] = t.props[h]);
    (u.attributes.value = d), (u.listeners.value = f);
  }
  return _e(i), i(), u;
}
function se(e) {
  return e != null && ("" + e).length !== 0;
}
const Ye = {
    ...Be,
    ...Ue,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  },
  Xe = [
    "update:modelValue",
    "clear",
    "focus",
    "blur",
    "popupShow",
    "popupHide",
  ];
function We({ requiredForAttr: e = !0, tagProp: t } = {}) {
  const { props: u, proxy: i } = W(),
    d = Ee(u, i.$q),
    f = Ne({ required: e, getValue: () => u.for });
  return {
    requiredForAttr: e,
    tag: t === !0 ? p(() => u.tag) : { value: "label" },
    isDark: d,
    editable: p(() => u.disable !== !0 && u.readonly !== !0),
    innerLoading: I(!1),
    focused: I(!1),
    hasPopupOpen: !1,
    splitAttrs: Qe(),
    targetUid: f,
    rootRef: I(null),
    targetRef: I(null),
    controlRef: I(null),
  };
}
function Je(e) {
  const { props: t, emit: u, slots: i, attrs: d, proxy: f } = W(),
    { $q: h } = f;
  let x = null;
  e.hasValue === void 0 && (e.hasValue = p(() => se(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (n) => {
        u("update:modelValue", n);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: o, onFocusout: a }),
    Object.assign(e, {
      clearValue: s,
      onControlFocusin: o,
      onControlFocusout: a,
      focus: C,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = p(() => {
        if (t.counter !== !1) {
          const n =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                  ? t.modelValue.length
                  : 0,
            v = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return n + (v !== void 0 ? " / " + v : "");
        }
      }));
  const {
      isDirtyModel: F,
      hasRules: R,
      hasError: w,
      errorMessage: b,
      resetValidation: H,
    } = He(e.focused, e.innerLoading),
    E =
      e.floatingLabel !== void 0
        ? p(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0,
          )
        : p(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0,
          ),
    D = p(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        R.value === !0 ||
        t.counter === !0 ||
        t.error !== null,
    ),
    z = p(() =>
      t.filled === !0
        ? "filled"
        : t.outlined === !0
          ? "outlined"
          : t.borderless === !0
            ? "borderless"
            : t.standout
              ? "standout"
              : "standard",
    ),
    O = p(
      () =>
        `q-field row no-wrap items-start q-field--${z.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (E.value === !0 ? " q-field--float" : "") +
        (_.value === !0 ? " q-field--labeled" : "") +
        (t.dense === !0 ? " q-field--dense" : "") +
        (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") +
        (e.isDark.value === !0 ? " q-field--dark" : "") +
        (e.getControl === void 0 ? " q-field--auto-height" : "") +
        (e.focused.value === !0 ? " q-field--focused" : "") +
        (w.value === !0 ? " q-field--error" : "") +
        (w.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && D.value === !0
          ? " q-field--with-bottom"
          : "") +
        (t.disable === !0
          ? " q-field--disabled"
          : t.readonly === !0
            ? " q-field--readonly"
            : ""),
    ),
    L = p(
      () =>
        "q-field__control relative-position row no-wrap" +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") +
        (w.value === !0
          ? " text-negative"
          : typeof t.standout == "string" &&
              t.standout.length !== 0 &&
              e.focused.value === !0
            ? ` ${t.standout}`
            : t.color !== void 0
              ? ` text-${t.color}`
              : ""),
    ),
    _ = p(() => t.labelSlot === !0 || t.label !== void 0),
    Q = p(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && w.value !== !0
          ? ` text-${t.labelColor}`
          : ""),
    ),
    N = p(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: E.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    j = p(() => {
      const n = {};
      return (
        e.targetUid.value && (n.for = e.targetUid.value),
        t.disable === !0 && (n["aria-disabled"] = "true"),
        n
      );
    });
  function S() {
    const n = document.activeElement;
    let v = e.targetRef !== void 0 && e.targetRef.value;
    v &&
      (n === null || n.id !== e.targetUid.value) &&
      (v.hasAttribute("tabindex") === !0 || (v = v.querySelector("[tabindex]")),
      v && v !== n && v.focus({ preventScroll: !0 }));
  }
  function C() {
    we(S);
  }
  function B() {
    ze(S);
    const n = document.activeElement;
    n !== null && e.rootRef.value.contains(n) && n.blur();
  }
  function o(n) {
    x !== null && (clearTimeout(x), (x = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), u("focus", n));
  }
  function a(n, v) {
    x !== null && clearTimeout(x),
      (x = setTimeout(() => {
        (x = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), u("blur", n)),
            v !== void 0 && v());
      }));
  }
  function s(n) {
    Ve(n),
      h.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      u("update:modelValue", null),
      u("clear", t.modelValue),
      Y(() => {
        const v = F.value;
        H(), (F.value = v);
      });
  }
  function r() {
    const n = [];
    return (
      i.prepend !== void 0 &&
        n.push(
          k(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: J,
            },
            i.prepend(),
          ),
        ),
      n.push(
        k(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          m(),
        ),
      ),
      w.value === !0 &&
        t.noErrorIcon === !1 &&
        n.push(
          M("error", [
            k(de, { name: h.iconSet.field.error, color: "negative" }),
          ]),
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? n.push(
            M(
              "inner-loading-append",
              i.loading !== void 0 ? i.loading() : [k($e, { color: t.color })],
            ),
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          n.push(
            M("inner-clearable-append", [
              k(de, {
                class: "q-field__focusable-action",
                tag: "button",
                name: t.clearIcon || h.iconSet.field.clear,
                tabindex: 0,
                type: "button",
                "aria-hidden": null,
                role: null,
                onClick: s,
              }),
            ]),
          ),
      i.append !== void 0 &&
        n.push(
          k(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: J,
            },
            i.append(),
          ),
        ),
      e.getInnerAppend !== void 0 &&
        n.push(M("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && n.push(e.getControlChild()),
      n
    );
  }
  function m() {
    const n = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        n.push(
          k(
            "div",
            { class: "q-field__prefix no-pointer-events row items-center" },
            t.prefix,
          ),
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        n.push(e.getShadowControl()),
      e.getControl !== void 0
        ? n.push(e.getControl())
        : i.rawControl !== void 0
          ? n.push(i.rawControl())
          : i.control !== void 0 &&
            n.push(
              k(
                "div",
                {
                  ref: e.targetRef,
                  class: "q-field__native row",
                  tabindex: -1,
                  ...e.splitAttrs.attributes.value,
                  "data-autofocus": t.autofocus === !0 || void 0,
                },
                i.control(N.value),
              ),
            ),
      _.value === !0 &&
        n.push(k("div", { class: Q.value }, G(i.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        n.push(
          k(
            "div",
            { class: "q-field__suffix no-pointer-events row items-center" },
            t.suffix,
          ),
        ),
      n.concat(G(i.default))
    );
  }
  function c() {
    let n, v;
    w.value === !0
      ? b.value !== null
        ? ((n = [k("div", { role: "alert" }, b.value)]),
          (v = `q--slot-error-${b.value}`))
        : ((n = G(i.error)), (v = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((n = [k("div", t.hint)]), (v = `q--slot-hint-${t.hint}`))
          : ((n = G(i.hint)), (v = "q--slot-hint")));
    const K = t.counter === !0 || i.counter !== void 0;
    if (t.hideBottomSpace === !0 && K === !1 && n === void 0) return;
    const y = k("div", { key: v, class: "q-field__messages col" }, n);
    return k(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: J,
      },
      [
        t.hideBottomSpace === !0
          ? y
          : k(Ie, { name: "q-transition--field-message" }, () => y),
        K === !0
          ? k(
              "div",
              { class: "q-field__counter" },
              i.counter !== void 0 ? i.counter() : e.computedCounter.value,
            )
          : null,
      ],
    );
  }
  function M(n, v) {
    return v === null
      ? null
      : k(
          "div",
          {
            key: n,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          v,
        );
  }
  let g = !1;
  return (
    Ae(() => {
      g = !0;
    }),
    Fe(() => {
      g === !0 && t.autofocus === !0 && f.focus();
    }),
    t.autofocus === !0 &&
      ae(() => {
        f.focus();
      }),
    oe(() => {
      x !== null && clearTimeout(x);
    }),
    Object.assign(f, { focus: C, blur: B }),
    function () {
      const v =
        e.getControl === void 0 && i.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...j.value,
            }
          : j.value;
      return k(
        e.tag.value,
        { ref: e.rootRef, class: [O.value, d.class], style: d.style, ...v },
        [
          i.before !== void 0
            ? k(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: J,
                },
                i.before(),
              )
            : null,
          k(
            "div",
            { class: "q-field__inner relative-position col self-stretch" },
            [
              k(
                "div",
                {
                  ref: e.controlRef,
                  class: L.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                r(),
              ),
              D.value === !0 ? c() : null,
            ],
          ),
          i.after !== void 0
            ? k(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: J,
                },
                i.after(),
              )
            : null,
        ],
      );
    }
  );
}
const dt = xe({
    name: "QItemLabel",
    props: {
      overline: Boolean,
      caption: Boolean,
      header: Boolean,
      lines: [Number, String],
    },
    setup(e, { slots: t }) {
      const u = p(() => parseInt(e.lines, 10)),
        i = p(
          () =>
            "q-item__label" +
            (e.overline === !0
              ? " q-item__label--overline text-overline"
              : "") +
            (e.caption === !0 ? " q-item__label--caption text-caption" : "") +
            (e.header === !0 ? " q-item__label--header" : "") +
            (u.value === 1 ? " ellipsis" : ""),
        ),
        d = p(() =>
          e.lines !== void 0 && u.value > 1
            ? {
                overflow: "hidden",
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": u.value,
              }
            : null,
        );
      return () => k("div", { style: d.value, class: i.value }, G(t.default));
    },
  }),
  Ge =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  et =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  tt = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  lt = /[a-z0-9_ -]$/i;
function nt(e) {
  return function (u) {
    if (u.type === "compositionend" || u.type === "change") {
      if (u.target.qComposing !== !0) return;
      (u.target.qComposing = !1), e(u);
    } else
      u.type === "compositionupdate" &&
        u.target.qComposing !== !0 &&
        typeof u.data == "string" &&
        (Oe.is.firefox === !0
          ? lt.test(u.data) === !1
          : Ge.test(u.data) === !0 ||
            et.test(u.data) === !0 ||
            tt.test(u.data) === !0) === !0 &&
        (u.target.qComposing = !0);
  };
}
const pe = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  ne = {
    "#": { pattern: "[\\d]", negate: "[^\\d]" },
    S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
    N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
    A: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  Ce = Object.keys(ne);
Ce.forEach((e) => {
  ne[e].regex = new RegExp(ne[e].pattern);
});
const at = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Ce.join("") + "])|(.)",
    "g",
  ),
  ye = /[.*+?^${}()|[\]\\]/g,
  V = "",
  ot = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function rt(e, t, u, i) {
  let d, f, h, x, F, R;
  const w = I(null),
    b = I(E());
  function H() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  P(() => e.type + e.autogrow, z),
    P(
      () => e.mask,
      (o) => {
        if (o !== void 0) O(b.value, !0);
        else {
          const a = C(b.value);
          z(), e.modelValue !== a && t("update:modelValue", a);
        }
      },
    ),
    P(
      () => e.fillMask + e.reverseFillMask,
      () => {
        w.value === !0 && O(b.value, !0);
      },
    ),
    P(
      () => e.unmaskedValue,
      () => {
        w.value === !0 && O(b.value);
      },
    );
  function E() {
    if ((z(), w.value === !0)) {
      const o = j(C(e.modelValue));
      return e.fillMask !== !1 ? B(o) : o;
    }
    return e.modelValue;
  }
  function D(o) {
    if (o < d.length) return d.slice(-o);
    let a = "",
      s = d;
    const r = s.indexOf(V);
    if (r !== -1) {
      for (let m = o - s.length; m > 0; m--) a += V;
      s = s.slice(0, r) + a + s.slice(r);
    }
    return s;
  }
  function z() {
    if (
      ((w.value = e.mask !== void 0 && e.mask.length !== 0 && H()),
      w.value === !1)
    ) {
      (x = void 0), (d = ""), (f = "");
      return;
    }
    const o = pe[e.mask] === void 0 ? e.mask : pe[e.mask],
      a =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      s = a.replace(ye, "\\$&"),
      r = [],
      m = [],
      c = [];
    let M = e.reverseFillMask === !0,
      g = "",
      n = "";
    o.replace(at, (A, l, q, U, Z) => {
      if (U !== void 0) {
        const T = ne[U];
        c.push(T),
          (n = T.negate),
          M === !0 &&
            (m.push(
              "(?:" +
                n +
                "+)?(" +
                T.pattern +
                "+)?(?:" +
                n +
                "+)?(" +
                T.pattern +
                "+)?",
            ),
            (M = !1)),
          m.push("(?:" + n + "+)?(" + T.pattern + ")?");
      } else if (q !== void 0)
        (g = "\\" + (q === "\\" ? "" : q)),
          c.push(q),
          r.push("([^" + g + "]+)?" + g + "?");
      else {
        const T = l !== void 0 ? l : Z;
        (g = T === "\\" ? "\\\\\\\\" : T.replace(ye, "\\\\$&")),
          c.push(T),
          r.push("([^" + g + "]+)?" + g + "?");
      }
    });
    const v = new RegExp(
        "^" +
          r.join("") +
          "(" +
          (g === "" ? "." : "[^" + g + "]") +
          "+)?" +
          (g === "" ? "" : "[" + g + "]*") +
          "$",
      ),
      K = m.length - 1,
      y = m.map((A, l) =>
        l === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + s + "*" + A)
          : l === K
            ? new RegExp(
                "^" +
                  A +
                  "(" +
                  (n === "" ? "." : n) +
                  "+)?" +
                  (e.reverseFillMask === !0 ? "$" : s + "*"),
              )
            : new RegExp("^" + A),
      );
    (h = c),
      (x = (A) => {
        const l = v.exec(
          e.reverseFillMask === !0 ? A : A.slice(0, c.length + 1),
        );
        l !== null && (A = l.slice(1).join(""));
        const q = [],
          U = y.length;
        for (let Z = 0, T = A; Z < U; Z++) {
          const X = y[Z].exec(T);
          if (X === null) break;
          (T = T.slice(X.shift().length)), q.push(...X);
        }
        return q.length !== 0 ? q.join("") : A;
      }),
      (d = c.map((A) => (typeof A == "string" ? A : V)).join("")),
      (f = d.split(V).join(a));
  }
  function O(o, a, s) {
    const r = i.value,
      m = r.selectionEnd,
      c = r.value.length - m,
      M = C(o);
    a === !0 && z();
    const g = j(M),
      n = e.fillMask !== !1 ? B(g) : g,
      v = b.value !== n;
    r.value !== n && (r.value = n),
      v === !0 && (b.value = n),
      document.activeElement === r &&
        Y(() => {
          if (n === f) {
            const y = e.reverseFillMask === !0 ? f.length : 0;
            r.setSelectionRange(y, y, "forward");
            return;
          }
          if (s === "insertFromPaste" && e.reverseFillMask !== !0) {
            const y = r.selectionEnd;
            let A = m - 1;
            for (let l = F; l <= A && l < y; l++) d[l] !== V && A++;
            _.right(r, A);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(s) !== -1
          ) {
            const y =
              e.reverseFillMask === !0
                ? m === 0
                  ? n.length > g.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      n.length - (n === f ? 0 : Math.min(g.length, c) + 1),
                    ) + 1
                : m;
            r.setSelectionRange(y, y, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (v === !0) {
              const y = Math.max(
                0,
                n.length - (n === f ? 0 : Math.min(g.length, c + 1)),
              );
              y === 1 && m === 1
                ? r.setSelectionRange(y, y, "forward")
                : _.rightReverse(r, y);
            } else {
              const y = n.length - c;
              r.setSelectionRange(y, y, "backward");
            }
          else if (v === !0) {
            const y = Math.max(0, d.indexOf(V), Math.min(g.length, m) - 1);
            _.right(r, y);
          } else {
            const y = m - 1;
            _.right(r, y);
          }
        });
    const K = e.unmaskedValue === !0 ? C(n) : n;
    String(e.modelValue) !== K &&
      (e.modelValue !== null || K !== "") &&
      u(K, !0);
  }
  function L(o, a, s) {
    const r = j(C(o.value));
    (a = Math.max(0, d.indexOf(V), Math.min(r.length, a))),
      (F = a),
      o.setSelectionRange(a, s, "forward");
  }
  const _ = {
    left(o, a) {
      const s = d.slice(a - 1).indexOf(V) === -1;
      let r = Math.max(0, a - 1);
      for (; r >= 0; r--)
        if (d[r] === V) {
          (a = r), s === !0 && a++;
          break;
        }
      if (r < 0 && d[a] !== void 0 && d[a] !== V) return _.right(o, 0);
      a >= 0 && o.setSelectionRange(a, a, "backward");
    },
    right(o, a) {
      const s = o.value.length;
      let r = Math.min(s, a + 1);
      for (; r <= s; r++)
        if (d[r] === V) {
          a = r;
          break;
        } else d[r - 1] === V && (a = r);
      if (r > s && d[a - 1] !== void 0 && d[a - 1] !== V) return _.left(o, s);
      o.setSelectionRange(a, a, "forward");
    },
    leftReverse(o, a) {
      const s = D(o.value.length);
      let r = Math.max(0, a - 1);
      for (; r >= 0; r--)
        if (s[r - 1] === V) {
          a = r;
          break;
        } else if (s[r] === V && ((a = r), r === 0)) break;
      if (r < 0 && s[a] !== void 0 && s[a] !== V) return _.rightReverse(o, 0);
      a >= 0 && o.setSelectionRange(a, a, "backward");
    },
    rightReverse(o, a) {
      const s = o.value.length,
        r = D(s),
        m = r.slice(0, a + 1).indexOf(V) === -1;
      let c = Math.min(s, a + 1);
      for (; c <= s; c++)
        if (r[c - 1] === V) {
          (a = c), a > 0 && m === !0 && a--;
          break;
        }
      if (c > s && r[a - 1] !== void 0 && r[a - 1] !== V)
        return _.leftReverse(o, s);
      o.setSelectionRange(a, a, "forward");
    },
  };
  function Q(o) {
    t("click", o), (R = void 0);
  }
  function N(o) {
    if ((t("keydown", o), Te(o) === !0 || o.altKey === !0)) return;
    const a = i.value,
      s = a.selectionStart,
      r = a.selectionEnd;
    if ((o.shiftKey || (R = void 0), o.keyCode === 37 || o.keyCode === 39)) {
      o.shiftKey &&
        R === void 0 &&
        (R = a.selectionDirection === "forward" ? s : r);
      const m =
        _[
          (o.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((o.preventDefault(), m(a, R === s ? r : s), o.shiftKey)) {
        const c = a.selectionStart;
        a.setSelectionRange(Math.min(R, c), Math.max(R, c), "forward");
      }
    } else
      o.keyCode === 8 && e.reverseFillMask !== !0 && s === r
        ? (_.left(a, s), a.setSelectionRange(a.selectionStart, r, "backward"))
        : o.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          s === r &&
          (_.rightReverse(a, r),
          a.setSelectionRange(s, a.selectionEnd, "forward"));
  }
  function j(o) {
    if (o == null || o === "") return "";
    if (e.reverseFillMask === !0) return S(o);
    const a = h;
    let s = 0,
      r = "";
    for (let m = 0; m < a.length; m++) {
      const c = o[s],
        M = a[m];
      if (typeof M == "string") (r += M), c === M && s++;
      else if (c !== void 0 && M.regex.test(c))
        (r += M.transform !== void 0 ? M.transform(c) : c), s++;
      else return r;
    }
    return r;
  }
  function S(o) {
    const a = h,
      s = d.indexOf(V);
    let r = o.length - 1,
      m = "";
    for (let c = a.length - 1; c >= 0 && r !== -1; c--) {
      const M = a[c];
      let g = o[r];
      if (typeof M == "string") (m = M + m), g === M && r--;
      else if (g !== void 0 && M.regex.test(g))
        do
          (m = (M.transform !== void 0 ? M.transform(g) : g) + m),
            r--,
            (g = o[r]);
        while (s === c && g !== void 0 && M.regex.test(g));
      else return m;
    }
    return m;
  }
  function C(o) {
    return typeof o != "string" || x === void 0
      ? typeof o == "number"
        ? x("" + o)
        : o
      : x(o);
  }
  function B(o) {
    return f.length - o.length <= 0
      ? o
      : e.reverseFillMask === !0 && o.length !== 0
        ? f.slice(0, -o.length) + o
        : o + f.slice(o.length);
  }
  return {
    innerValue: b,
    hasMask: w,
    moveCursorForPaste: L,
    updateMaskValue: O,
    onMaskedKeydown: N,
    onMaskedClick: Q,
  };
}
function ut(e, t) {
  function u() {
    const i = e.modelValue;
    try {
      const d =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
            ? new ClipboardEvent("").clipboardData
            : void 0;
      return (
        Object(i) === i &&
          ("length" in i ? Array.from(i) : [i]).forEach((f) => {
            d.items.add(f);
          }),
        { files: d.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return t === !0
    ? p(() => {
        if (e.type === "file") return u();
      })
    : p(u);
}
const ft = xe({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...Ye,
    ...ot,
    ...Pe,
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: "text" },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...Xe, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: u }) {
    const { proxy: i } = W(),
      { $q: d } = i,
      f = {};
    let h = NaN,
      x,
      F,
      R = null,
      w;
    const b = I(null),
      H = De(e),
      {
        innerValue: E,
        hasMask: D,
        moveCursorForPaste: z,
        updateMaskValue: O,
        onMaskedKeydown: L,
        onMaskedClick: _,
      } = rt(e, t, g, b),
      Q = ut(e, !0),
      N = p(() => se(E.value)),
      j = nt(c),
      S = We(),
      C = p(() => e.type === "textarea" || e.autogrow === !0),
      B = p(
        () =>
          C.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type),
      ),
      o = p(() => {
        const l = {
          ...S.splitAttrs.listeners.value,
          onInput: c,
          onPaste: m,
          onChange: v,
          onBlur: K,
          onFocus: fe,
        };
        return (
          (l.onCompositionstart =
            l.onCompositionupdate =
            l.onCompositionend =
              j),
          D.value === !0 && ((l.onKeydown = L), (l.onClick = _)),
          e.autogrow === !0 && (l.onAnimationend = M),
          l
        );
      }),
      a = p(() => {
        const l = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: H.value,
          ...S.splitAttrs.attributes.value,
          id: S.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          C.value === !1 && (l.type = e.type),
          e.autogrow === !0 && (l.rows = 1),
          l
        );
      });
    P(
      () => e.type,
      () => {
        b.value && (b.value.value = e.modelValue);
      },
    ),
      P(
        () => e.modelValue,
        (l) => {
          if (D.value === !0) {
            if (F === !0 && ((F = !1), String(l) === h)) return;
            O(l);
          } else
            E.value !== l &&
              ((E.value = l),
              e.type === "number" &&
                f.hasOwnProperty("value") === !0 &&
                (x === !0 ? (x = !1) : delete f.value));
          e.autogrow === !0 && Y(n);
        },
      ),
      P(
        () => e.autogrow,
        (l) => {
          l === !0
            ? Y(n)
            : b.value !== null && u.rows > 0 && (b.value.style.height = "auto");
        },
      ),
      P(
        () => e.dense,
        () => {
          e.autogrow === !0 && Y(n);
        },
      );
    function s() {
      we(() => {
        const l = document.activeElement;
        b.value !== null &&
          b.value !== l &&
          (l === null || l.id !== S.targetUid.value) &&
          b.value.focus({ preventScroll: !0 });
      });
    }
    function r() {
      b.value !== null && b.value.select();
    }
    function m(l) {
      if (D.value === !0 && e.reverseFillMask !== !0) {
        const q = l.target;
        z(q, q.selectionStart, q.selectionEnd);
      }
      t("paste", l);
    }
    function c(l) {
      if (!l || !l.target) return;
      if (e.type === "file") {
        t("update:modelValue", l.target.files);
        return;
      }
      const q = l.target.value;
      if (l.target.qComposing === !0) {
        f.value = q;
        return;
      }
      if (D.value === !0) O(q, !1, l.inputType);
      else if ((g(q), B.value === !0 && l.target === document.activeElement)) {
        const { selectionStart: U, selectionEnd: Z } = l.target;
        U !== void 0 &&
          Z !== void 0 &&
          Y(() => {
            l.target === document.activeElement &&
              q.indexOf(l.target.value) === 0 &&
              l.target.setSelectionRange(U, Z);
          });
      }
      e.autogrow === !0 && n();
    }
    function M(l) {
      t("animationend", l), n();
    }
    function g(l, q) {
      (w = () => {
        (R = null),
          e.type !== "number" &&
            f.hasOwnProperty("value") === !0 &&
            delete f.value,
          e.modelValue !== l &&
            h !== l &&
            ((h = l),
            q === !0 && (F = !0),
            t("update:modelValue", l),
            Y(() => {
              h === l && (h = NaN);
            })),
          (w = void 0);
      }),
        e.type === "number" && ((x = !0), (f.value = l)),
        e.debounce !== void 0
          ? (R !== null && clearTimeout(R),
            (f.value = l),
            (R = setTimeout(w, e.debounce)))
          : w();
    }
    function n() {
      requestAnimationFrame(() => {
        const l = b.value;
        if (l !== null) {
          const q = l.parentNode.style,
            { scrollTop: U } = l,
            { overflowY: Z, maxHeight: T } =
              d.platform.is.firefox === !0 ? {} : window.getComputedStyle(l),
            X = Z !== void 0 && Z !== "scroll";
          X === !0 && (l.style.overflowY = "hidden"),
            (q.marginBottom = l.scrollHeight - 1 + "px"),
            (l.style.height = "1px"),
            (l.style.height = l.scrollHeight + "px"),
            X === !0 &&
              (l.style.overflowY =
                parseInt(T, 10) < l.scrollHeight ? "auto" : "hidden"),
            (q.marginBottom = ""),
            (l.scrollTop = U);
        }
      });
    }
    function v(l) {
      j(l),
        R !== null && (clearTimeout(R), (R = null)),
        w !== void 0 && w(),
        t("change", l.target.value);
    }
    function K(l) {
      l !== void 0 && fe(l),
        R !== null && (clearTimeout(R), (R = null)),
        w !== void 0 && w(),
        (x = !1),
        (F = !1),
        delete f.value,
        e.type !== "file" &&
          setTimeout(() => {
            b.value !== null &&
              (b.value.value = E.value !== void 0 ? E.value : "");
          });
    }
    function y() {
      return f.hasOwnProperty("value") === !0
        ? f.value
        : E.value !== void 0
          ? E.value
          : "";
    }
    oe(() => {
      K();
    }),
      ae(() => {
        e.autogrow === !0 && n();
      }),
      Object.assign(S, {
        innerValue: E,
        fieldClass: p(
          () =>
            `q-${C.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : ""),
        ),
        hasShadow: p(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length !== 0,
        ),
        inputRef: b,
        emitValue: g,
        hasValue: N,
        floatingLabel: p(
          () =>
            (N.value === !0 &&
              (e.type !== "number" || isNaN(E.value) === !1)) ||
            se(e.displayValue),
        ),
        getControl: () =>
          k(C.value === !0 ? "textarea" : "input", {
            ref: b,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...a.value,
            ...o.value,
            ...(e.type !== "file" ? { value: y() } : Q.value),
          }),
        getShadowControl: () =>
          k(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (C.value === !0 ? "" : " text-no-wrap"),
            },
            [k("span", { class: "invisible" }, y()), k("span", e.shadowText)],
          ),
      });
    const A = Je(S);
    return (
      Object.assign(i, {
        focus: s,
        select: r,
        getNativeElement: () => b.value,
      }),
      ke(i, "nativeEl", () => b.value),
      A
    );
  },
});
export {
  ft as Q,
  Xe as a,
  Je as b,
  We as c,
  dt as d,
  nt as e,
  se as f,
  Ne as g,
  Ye as u,
};
