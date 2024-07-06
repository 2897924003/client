import {
  d as pe,
  h as at,
  e as tn,
  c as re,
  w as Te,
  F as lt,
  i as nn,
  o as rn,
  a as an,
  b as ln,
  g as st,
  r as sn,
  s as on,
  f as cn,
  T as un,
  j as _n,
} from "./index-DEMVRRIH.js";
/*!
 * shared v9.12.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const ue = typeof window < "u",
  J = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  mn = (e, t, n) => fn({ l: e, k: t, s: n }),
  fn = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  U = (e) => typeof e == "number" && isFinite(e),
  En = (e) => ct(e) === "[object Date]",
  _e = (e) => ct(e) === "[object RegExp]",
  Ee = (e) => b(e) && Object.keys(e).length === 0,
  W = Object.assign;
function Me(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const gn = Object.prototype.hasOwnProperty;
function me(e, t) {
  return gn.call(e, t);
}
const M = Array.isArray,
  S = (e) => typeof e == "function",
  E = (e) => typeof e == "string",
  h = (e) => typeof e == "boolean",
  A = (e) => e !== null && typeof e == "object",
  dn = (e) => A(e) && S(e.then) && S(e.catch),
  ot = Object.prototype.toString,
  ct = (e) => ot.call(e),
  b = (e) => {
    if (!A(e)) return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object;
  },
  Nn = (e) =>
    e == null
      ? ""
      : M(e) || (b(e) && e.toString === ot)
        ? JSON.stringify(e, null, 2)
        : String(e);
function Tn(e, t = "") {
  return e.reduce((n, r, a) => (a === 0 ? n + r : n + t + r), "");
}
function ge(e) {
  let t = e;
  return () => ++t;
}
function On(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ce = (e) => !A(e) || M(e);
function ie(e, t) {
  if (ce(e) || ce(t)) throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: a } = n.pop();
    Object.keys(r).forEach((s) => {
      ce(r[s]) || ce(a[s]) ? (a[s] = r[s]) : n.push({ src: r[s], des: a[s] });
    });
  }
}
/*!
 * message-compiler v9.12.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const bn = /\{([0-9a-zA-Z]+)\}/g;
function In(e, ...t) {
  return (
    t.length === 1 && Ln(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(bn, (n, r) => (t.hasOwnProperty(r) ? t[r] : ""))
  );
}
const Ln = (e) => e !== null && typeof e == "object",
  An = { USE_MODULO_SYNTAX: 1, __EXTEND_POINT__: 2 },
  k = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17,
  },
  Cn = {
    [k.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [k.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [k.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:
      "Unterminated single quote in placeholder",
    [k.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [k.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [k.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [k.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [k.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [k.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [k.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [k.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [k.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [k.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [k.UNEXPECTED_LEXICAL_ANALYSIS]:
      "Unexpected lexical analysis in token: '{0}'",
    [k.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [k.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'",
  };
function it(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n,
    l = In((a || Cn)[e] || "", ...(s || [])),
    _ = new SyntaxError(String(l));
  return (_.code = e), t && (_.location = t), (_.domain = r), _;
}
/*!
 * core-base v9.12.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const Q = [];
Q[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
Q[1] = { w: [1], ".": [2], "[": [4], o: [7] };
Q[2] = { w: [2], i: [3, 0], 0: [3, 0] };
Q[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], ".": [2, 1], "[": [4, 1], o: [7, 1] };
Q[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
Q[5] = { "'": [4, 0], o: 8, l: [5, 0] };
Q[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const Rn = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function pn(e) {
  return Rn.test(e);
}
function Pn(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Dn(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Sn(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : pn(t)
      ? Pn(t)
      : "*" + t;
}
function hn(e) {
  const t = [];
  let n = -1,
    r = 0,
    a = 0,
    s,
    l,
    _,
    c,
    u,
    g,
    f;
  const m = [];
  (m[0] = () => {
    l === void 0 ? (l = _) : (l += _);
  }),
    (m[1] = () => {
      l !== void 0 && (t.push(l), (l = void 0));
    }),
    (m[2] = () => {
      m[0](), a++;
    }),
    (m[3] = () => {
      if (a > 0) a--, (r = 4), m[0]();
      else {
        if (((a = 0), l === void 0 || ((l = Sn(l)), l === !1))) return !1;
        m[1]();
      }
    });
  function d() {
    const O = e[n + 1];
    if ((r === 5 && O === "'") || (r === 6 && O === '"'))
      return n++, (_ = "\\" + O), m[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (s = e[n]), !(s === "\\" && d()))) {
      if (
        ((c = Dn(s)),
        (f = Q[r]),
        (u = f[c] || f.l || 8),
        u === 8 ||
          ((r = u[0]),
          u[1] !== void 0 && ((g = m[u[1]]), g && ((_ = s), g() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const ve = new Map();
function Fn(e, t) {
  return A(e) ? e[t] : null;
}
function yn(e, t) {
  if (!A(e)) return null;
  let n = ve.get(t);
  if ((n || ((n = hn(t)), n && ve.set(t, n)), !n)) return null;
  const r = n.length;
  let a = e,
    s = 0;
  for (; s < r; ) {
    const l = a[n[s]];
    if (l === void 0 || S(a)) return null;
    (a = l), s++;
  }
  return a;
}
const Mn = (e) => e,
  vn = (e) => "",
  Un = "text",
  kn = (e) => (e.length === 0 ? "" : Tn(e)),
  wn = Nn;
function Ue(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function Wn(e) {
  const t = U(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (U(e.named.count) || U(e.named.n))
    ? U(e.named.count)
      ? e.named.count
      : U(e.named.n)
        ? e.named.n
        : t
    : t;
}
function Vn(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function xn(e = {}) {
  const t = e.locale,
    n = Wn(e),
    r = A(e.pluralRules) && E(t) && S(e.pluralRules[t]) ? e.pluralRules[t] : Ue,
    a = A(e.pluralRules) && E(t) && S(e.pluralRules[t]) ? Ue : void 0,
    s = (T) => T[r(n, T.length, a)],
    l = e.list || [],
    _ = (T) => l[T],
    c = e.named || {};
  U(e.pluralIndex) && Vn(n, c);
  const u = (T) => c[T];
  function g(T) {
    const D = S(e.messages)
      ? e.messages(T)
      : A(e.messages)
        ? e.messages[T]
        : !1;
    return D || (e.parent ? e.parent.message(T) : vn);
  }
  const f = (T) => (e.modifiers ? e.modifiers[T] : Mn),
    m = b(e.processor) && S(e.processor.normalize) ? e.processor.normalize : kn,
    d =
      b(e.processor) && S(e.processor.interpolate)
        ? e.processor.interpolate
        : wn,
    O = b(e.processor) && E(e.processor.type) ? e.processor.type : Un,
    P = {
      list: _,
      named: u,
      plural: s,
      linked: (T, ...D) => {
        const [y, I] = D;
        let C = "text",
          p = "";
        D.length === 1
          ? A(y)
            ? ((p = y.modifier || p), (C = y.type || C))
            : E(y) && (p = y || p)
          : D.length === 2 && (E(y) && (p = y || p), E(I) && (C = I || C));
        const j = g(T)(P),
          w = C === "vnode" && M(j) && p ? j[0] : j;
        return p ? f(p)(w, C) : w;
      },
      message: g,
      type: O,
      interpolate: d,
      normalize: m,
      values: W({}, l, c),
    };
  return P;
}
const ut = An.__EXTEND_POINT__,
  q = ge(ut),
  Gn = {
    NOT_FOUND_KEY: ut,
    FALLBACK_TO_TRANSLATE: q(),
    CANNOT_FORMAT_NUMBER: q(),
    FALLBACK_TO_NUMBER_FORMAT: q(),
    CANNOT_FORMAT_DATE: q(),
    FALLBACK_TO_DATE_FORMAT: q(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: q(),
    __EXTEND_POINT__: q(),
  },
  _t = k.__EXTEND_POINT__,
  Z = ge(_t),
  $ = {
    INVALID_ARGUMENT: _t,
    INVALID_DATE_ARGUMENT: Z(),
    INVALID_ISO_DATE_ARGUMENT: Z(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Z(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Z(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Z(),
    NOT_SUPPORT_LOCALE_TYPE: Z(),
    __EXTEND_POINT__: Z(),
  };
function Y(e) {
  return it(e, null, void 0);
}
function Pe(e, t) {
  return t.locale != null ? ke(t.locale) : ke(e.locale);
}
let Ne;
function ke(e) {
  if (E(e)) return e;
  if (S(e)) {
    if (e.resolvedOnce && Ne != null) return Ne;
    if (e.constructor.name === "Function") {
      const t = e();
      if (dn(t)) throw Y($.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (Ne = t);
    } else throw Y($.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw Y($.NOT_SUPPORT_LOCALE_TYPE);
}
function jn(e, t, n) {
  return [
    ...new Set([n, ...(M(t) ? t : A(t) ? Object.keys(t) : E(t) ? [t] : [n])]),
  ];
}
function mt(e, t, n) {
  const r = E(n) ? n : fe,
    a = e;
  a.__localeChainCache || (a.__localeChainCache = new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let l = [n];
    for (; M(l); ) l = we(s, l, t);
    const _ = M(t) || !b(t) ? t : t.default ? t.default : null;
    (l = E(_) ? [_] : _), M(l) && we(s, l, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function we(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && h(r); a++) {
    const s = t[a];
    E(s) && (r = $n(e, t[a], n));
  }
  return r;
}
function $n(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    (r = Hn(e, s, n)), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function Hn(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (M(n) || b(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const Yn = "9.12.1",
  de = -1,
  fe = "en-US",
  We = "",
  Ve = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Xn() {
  return {
    upper: (e, t) =>
      t === "text" && E(e)
        ? e.toUpperCase()
        : t === "vnode" && A(e) && "__v_isVNode" in e
          ? e.children.toUpperCase()
          : e,
    lower: (e, t) =>
      t === "text" && E(e)
        ? e.toLowerCase()
        : t === "vnode" && A(e) && "__v_isVNode" in e
          ? e.children.toLowerCase()
          : e,
    capitalize: (e, t) =>
      t === "text" && E(e)
        ? Ve(e)
        : t === "vnode" && A(e) && "__v_isVNode" in e
          ? Ve(e.children)
          : e,
  };
}
let Bn, ft;
function Kn(e) {
  ft = e;
}
let Et;
function Jn(e) {
  Et = e;
}
let gt = null;
const xe = (e) => {
    gt = e;
  },
  Qn = () => gt;
let Ge = 0;
function zn(e = {}) {
  const t = S(e.onWarn) ? e.onWarn : On,
    n = E(e.version) ? e.version : Yn,
    r = E(e.locale) || S(e.locale) ? e.locale : fe,
    a = S(r) ? fe : r,
    s =
      M(e.fallbackLocale) ||
      b(e.fallbackLocale) ||
      E(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : a,
    l = b(e.messages) ? e.messages : { [a]: {} },
    _ = b(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} },
    c = b(e.numberFormats) ? e.numberFormats : { [a]: {} },
    u = W({}, e.modifiers || {}, Xn()),
    g = e.pluralRules || {},
    f = S(e.missing) ? e.missing : null,
    m = h(e.missingWarn) || _e(e.missingWarn) ? e.missingWarn : !0,
    d = h(e.fallbackWarn) || _e(e.fallbackWarn) ? e.fallbackWarn : !0,
    O = !!e.fallbackFormat,
    L = !!e.unresolving,
    P = S(e.postTranslation) ? e.postTranslation : null,
    T = b(e.processor) ? e.processor : null,
    D = h(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    y = !!e.escapeParameter,
    I = S(e.messageCompiler) ? e.messageCompiler : Bn,
    C = S(e.messageResolver) ? e.messageResolver : ft || Fn,
    p = S(e.localeFallbacker) ? e.localeFallbacker : Et || jn,
    j = A(e.fallbackContext) ? e.fallbackContext : void 0,
    w = e,
    N = A(w.__datetimeFormatters) ? w.__datetimeFormatters : new Map(),
    se = A(w.__numberFormatters) ? w.__numberFormatters : new Map(),
    ee = A(w.__meta) ? w.__meta : {};
  Ge++;
  const B = {
    version: n,
    cid: Ge,
    locale: r,
    fallbackLocale: s,
    messages: l,
    modifiers: u,
    pluralRules: g,
    missing: f,
    missingWarn: m,
    fallbackWarn: d,
    fallbackFormat: O,
    unresolving: L,
    postTranslation: P,
    processor: T,
    warnHtmlMessage: D,
    escapeParameter: y,
    messageCompiler: I,
    messageResolver: C,
    localeFallbacker: p,
    fallbackContext: j,
    onWarn: t,
    __meta: ee,
  };
  return (
    (B.datetimeFormats = _),
    (B.numberFormats = c),
    (B.__datetimeFormatters = N),
    (B.__numberFormatters = se),
    B
  );
}
function De(e, t, n, r, a) {
  const { missing: s, onWarn: l } = e;
  if (s !== null) {
    const _ = s(e, n, t, a);
    return E(_) ? _ : t;
  } else return t;
}
function ae(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
const ne = (e) =>
    A(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e),
  je = () => "",
  X = (e) => S(e);
function $e(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: a,
      messageCompiler: s,
      fallbackLocale: l,
      messages: _,
    } = e,
    [c, u] = Oe(...t),
    g = h(u.missingWarn) ? u.missingWarn : e.missingWarn,
    f = h(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    m = h(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
    d = !!u.resolvedMessage,
    O =
      E(u.default) || h(u.default)
        ? h(u.default)
          ? s
            ? c
            : () => c
          : u.default
        : n
          ? s
            ? c
            : () => c
          : "",
    L = n || O !== "",
    P = Pe(e, u);
  m && qn(u);
  let [T, D, y] = d ? [c, P, _[P] || {}] : dt(e, c, P, l, f, g),
    I = T,
    C = c;
  if (
    (!d && !(E(I) || ne(I) || X(I)) && L && ((I = O), (C = I)),
    !d && (!(E(I) || ne(I) || X(I)) || !E(D)))
  )
    return a ? de : c;
  let p = !1;
  const j = () => {
      p = !0;
    },
    w = X(I) ? I : Nt(e, c, D, I, C, j);
  if (p) return I;
  const N = tr(e, D, y, u),
    se = xn(N),
    ee = Zn(e, w, se);
  return r ? r(ee, c) : ee;
}
function qn(e) {
  M(e.list)
    ? (e.list = e.list.map((t) => (E(t) ? Me(t) : t)))
    : A(e.named) &&
      Object.keys(e.named).forEach((t) => {
        E(e.named[t]) && (e.named[t] = Me(e.named[t]));
      });
}
function dt(e, t, n, r, a, s) {
  const { messages: l, onWarn: _, messageResolver: c, localeFallbacker: u } = e,
    g = u(e, r, n);
  let f = {},
    m,
    d = null;
  const O = "translate";
  for (
    let L = 0;
    L < g.length &&
    ((m = g[L]),
    (f = l[m] || {}),
    (d = c(f, t)) === null && (d = f[t]),
    !(E(d) || ne(d) || X(d)));
    L++
  ) {
    const P = De(e, t, m, s, O);
    P !== t && (d = P);
  }
  return [d, m, f];
}
function Nt(e, t, n, r, a, s) {
  const { messageCompiler: l, warnHtmlMessage: _ } = e;
  if (X(r)) {
    const u = r;
    return (u.locale = u.locale || n), (u.key = u.key || t), u;
  }
  if (l == null) {
    const u = () => r;
    return (u.locale = n), (u.key = t), u;
  }
  const c = l(r, er(e, n, a, r, _, s));
  return (c.locale = n), (c.key = t), (c.source = r), c;
}
function Zn(e, t, n) {
  return t(n);
}
function Oe(...e) {
  const [t, n, r] = e,
    a = {};
  if (!E(t) && !U(t) && !X(t) && !ne(t)) throw Y($.INVALID_ARGUMENT);
  const s = U(t) ? String(t) : (X(t), t);
  return (
    U(n)
      ? (a.plural = n)
      : E(n)
        ? (a.default = n)
        : b(n) && !Ee(n)
          ? (a.named = n)
          : M(n) && (a.list = n),
    U(r) ? (a.plural = r) : E(r) ? (a.default = r) : b(r) && W(a, r),
    [s, a]
  );
}
function er(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (l) => {
      throw (s && s(l), l);
    },
    onCacheKey: (l) => mn(t, n, l),
  };
}
function tr(e, t, n, r) {
  const {
      modifiers: a,
      pluralRules: s,
      messageResolver: l,
      fallbackLocale: _,
      fallbackWarn: c,
      missingWarn: u,
      fallbackContext: g,
    } = e,
    m = {
      locale: t,
      modifiers: a,
      pluralRules: s,
      messages: (d) => {
        let O = l(n, d);
        if (O == null && g) {
          const [, , L] = dt(g, d, t, _, c, u);
          O = l(L, d);
        }
        if (E(O) || ne(O)) {
          let L = !1;
          const T = Nt(e, d, t, O, d, () => {
            L = !0;
          });
          return L ? je : T;
        } else return X(O) ? O : je;
      },
    };
  return (
    e.processor && (m.processor = e.processor),
    r.list && (m.list = r.list),
    r.named && (m.named = r.named),
    U(r.plural) && (m.pluralIndex = r.plural),
    m
  );
}
function He(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: a,
      onWarn: s,
      localeFallbacker: l,
    } = e,
    { __datetimeFormatters: _ } = e,
    [c, u, g, f] = be(...t),
    m = h(g.missingWarn) ? g.missingWarn : e.missingWarn;
  h(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
  const d = !!g.part,
    O = Pe(e, g),
    L = l(e, a, O);
  if (!E(c) || c === "") return new Intl.DateTimeFormat(O, f).format(u);
  let P = {},
    T,
    D = null;
  const y = "datetime format";
  for (
    let p = 0;
    p < L.length && ((T = L[p]), (P = n[T] || {}), (D = P[c]), !b(D));
    p++
  )
    De(e, c, T, m, y);
  if (!b(D) || !E(T)) return r ? de : c;
  let I = `${T}__${c}`;
  Ee(f) || (I = `${I}__${JSON.stringify(f)}`);
  let C = _.get(I);
  return (
    C || ((C = new Intl.DateTimeFormat(T, W({}, D, f))), _.set(I, C)),
    d ? C.formatToParts(u) : C.format(u)
  );
}
const Tt = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function be(...e) {
  const [t, n, r, a] = e,
    s = {};
  let l = {},
    _;
  if (E(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c) throw Y($.INVALID_ISO_DATE_ARGUMENT);
    const u = c[3]
      ? c[3].trim().startsWith("T")
        ? `${c[1].trim()}${c[3].trim()}`
        : `${c[1].trim()}T${c[3].trim()}`
      : c[1].trim();
    _ = new Date(u);
    try {
      _.toISOString();
    } catch {
      throw Y($.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (En(t)) {
    if (isNaN(t.getTime())) throw Y($.INVALID_DATE_ARGUMENT);
    _ = t;
  } else if (U(t)) _ = t;
  else throw Y($.INVALID_ARGUMENT);
  return (
    E(n)
      ? (s.key = n)
      : b(n) &&
        Object.keys(n).forEach((c) => {
          Tt.includes(c) ? (l[c] = n[c]) : (s[c] = n[c]);
        }),
    E(r) ? (s.locale = r) : b(r) && (l = r),
    b(a) && (l = a),
    [s.key || "", _, s, l]
  );
}
function Ye(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Xe(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: a,
      onWarn: s,
      localeFallbacker: l,
    } = e,
    { __numberFormatters: _ } = e,
    [c, u, g, f] = Ie(...t),
    m = h(g.missingWarn) ? g.missingWarn : e.missingWarn;
  h(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
  const d = !!g.part,
    O = Pe(e, g),
    L = l(e, a, O);
  if (!E(c) || c === "") return new Intl.NumberFormat(O, f).format(u);
  let P = {},
    T,
    D = null;
  const y = "number format";
  for (
    let p = 0;
    p < L.length && ((T = L[p]), (P = n[T] || {}), (D = P[c]), !b(D));
    p++
  )
    De(e, c, T, m, y);
  if (!b(D) || !E(T)) return r ? de : c;
  let I = `${T}__${c}`;
  Ee(f) || (I = `${I}__${JSON.stringify(f)}`);
  let C = _.get(I);
  return (
    C || ((C = new Intl.NumberFormat(T, W({}, D, f))), _.set(I, C)),
    d ? C.formatToParts(u) : C.format(u)
  );
}
const Ot = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function Ie(...e) {
  const [t, n, r, a] = e,
    s = {};
  let l = {};
  if (!U(t)) throw Y($.INVALID_ARGUMENT);
  const _ = t;
  return (
    E(n)
      ? (s.key = n)
      : b(n) &&
        Object.keys(n).forEach((c) => {
          Ot.includes(c) ? (l[c] = n[c]) : (s[c] = n[c]);
        }),
    E(r) ? (s.locale = r) : b(r) && (l = r),
    b(a) && (l = a),
    [s.key || "", _, s, l]
  );
}
function Be(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
/*!
 * vue-i18n v9.12.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const nr = "9.12.1",
  bt = Gn.__EXTEND_POINT__,
  H = ge(bt);
H(), H(), H(), H(), H(), H(), H(), H(), H();
const It = $.__EXTEND_POINT__,
  V = ge(It),
  x = {
    UNEXPECTED_RETURN_TYPE: It,
    INVALID_ARGUMENT: V(),
    MUST_BE_CALL_SETUP_TOP: V(),
    NOT_INSTALLED: V(),
    NOT_AVAILABLE_IN_LEGACY_MODE: V(),
    REQUIRED_VALUE: V(),
    INVALID_VALUE: V(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: V(),
    NOT_INSTALLED_WITH_PROVIDE: V(),
    UNEXPECTED_ERROR: V(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: V(),
    BRIDGE_SUPPORT_VUE_2_ONLY: V(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: V(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: V(),
    __EXTEND_POINT__: V(),
  };
function G(e, ...t) {
  return it(e, null, void 0);
}
const Le = J("__translateVNode"),
  Ae = J("__datetimeParts"),
  Ce = J("__numberParts"),
  rr = J("__setPluralRules"),
  ar = J("__injectWithOption"),
  Re = J("__dispose");
function le(e) {
  if (!A(e)) return e;
  for (const t in e)
    if (me(e, t))
      if (!t.includes(".")) A(e[t]) && le(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let a = e,
          s = !1;
        for (let l = 0; l < r; l++) {
          if ((n[l] in a || (a[n[l]] = {}), !A(a[n[l]]))) {
            s = !0;
            break;
          }
          a = a[n[l]];
        }
        s || ((a[n[r]] = e[t]), delete e[t]), A(a[n[r]]) && le(a[n[r]]);
      }
  return e;
}
function Lt(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t,
    l = b(n) ? n : M(r) ? {} : { [e]: {} };
  if (
    (M(r) &&
      r.forEach((_) => {
        if ("locale" in _ && "resource" in _) {
          const { locale: c, resource: u } = _;
          c ? ((l[c] = l[c] || {}), ie(u, l[c])) : ie(u, l);
        } else E(_) && ie(JSON.parse(_), l);
      }),
    a == null && s)
  )
    for (const _ in l) me(l, _) && le(l[_]);
  return l;
}
function lr(e) {
  return e.type;
}
function sr(e, t, n) {
  let r = A(t.messages) ? t.messages : {};
  "__i18nGlobal" in n &&
    (r = Lt(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const a = Object.keys(r);
  a.length &&
    a.forEach((s) => {
      e.mergeLocaleMessage(s, r[s]);
    });
  {
    if (A(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length &&
        s.forEach((l) => {
          e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
        });
    }
    if (A(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length &&
        s.forEach((l) => {
          e.mergeNumberFormat(l, t.numberFormats[l]);
        });
    }
  }
}
function Ke(e) {
  return cn(un, null, e, 0);
}
const Je = () => [],
  or = () => !1;
let Qe = 0;
function ze(e) {
  return (t, n, r, a) => e(n, r, st() || void 0, a);
}
function At(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e,
    a = n === void 0,
    s = e.flatJson,
    l = ue ? sn : on,
    _ = !!e.translateExistCompatible;
  let c = h(e.inheritLocale) ? e.inheritLocale : !0;
  const u = l(n && c ? n.locale.value : E(e.locale) ? e.locale : fe),
    g = l(
      n && c
        ? n.fallbackLocale.value
        : E(e.fallbackLocale) ||
            M(e.fallbackLocale) ||
            b(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : u.value,
    ),
    f = l(Lt(u.value, e)),
    m = l(b(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }),
    d = l(b(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let O = n
      ? n.missingWarn
      : h(e.missingWarn) || _e(e.missingWarn)
        ? e.missingWarn
        : !0,
    L = n
      ? n.fallbackWarn
      : h(e.fallbackWarn) || _e(e.fallbackWarn)
        ? e.fallbackWarn
        : !0,
    P = n ? n.fallbackRoot : h(e.fallbackRoot) ? e.fallbackRoot : !0,
    T = !!e.fallbackFormat,
    D = S(e.missing) ? e.missing : null,
    y = S(e.missing) ? ze(e.missing) : null,
    I = S(e.postTranslation) ? e.postTranslation : null,
    C = n ? n.warnHtmlMessage : h(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    p = !!e.escapeParameter;
  const j = n ? n.modifiers : b(e.modifiers) ? e.modifiers : {};
  let w = e.pluralRules || (n && n.pluralRules),
    N;
  (N = (() => {
    a && xe(null);
    const o = {
      version: nr,
      locale: u.value,
      fallbackLocale: g.value,
      messages: f.value,
      modifiers: j,
      pluralRules: w,
      missing: y === null ? void 0 : y,
      missingWarn: O,
      fallbackWarn: L,
      fallbackFormat: T,
      unresolving: !0,
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: C,
      escapeParameter: p,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    (o.datetimeFormats = m.value),
      (o.numberFormats = d.value),
      (o.__datetimeFormatters = b(N) ? N.__datetimeFormatters : void 0),
      (o.__numberFormatters = b(N) ? N.__numberFormatters : void 0);
    const i = zn(o);
    return a && xe(i), i;
  })()),
    ae(N, u.value, g.value);
  function ee() {
    return [u.value, g.value, f.value, m.value, d.value];
  }
  const B = re({
      get: () => u.value,
      set: (o) => {
        (u.value = o), (N.locale = u.value);
      },
    }),
    pt = re({
      get: () => g.value,
      set: (o) => {
        (g.value = o), (N.fallbackLocale = g.value), ae(N, u.value, o);
      },
    }),
    Pt = re(() => f.value),
    Dt = re(() => m.value),
    St = re(() => d.value);
  function ht() {
    return S(I) ? I : null;
  }
  function Ft(o) {
    (I = o), (N.postTranslation = o);
  }
  function yt() {
    return D;
  }
  function Mt(o) {
    o !== null && (y = ze(o)), (D = o), (N.missing = y);
  }
  const z = (o, i, R, F, K, oe) => {
    ee();
    let te;
    try {
      a || (N.fallbackContext = n ? Qn() : void 0), (te = o(N));
    } finally {
      a || (N.fallbackContext = void 0);
    }
    if (
      (R !== "translate exists" && U(te) && te === de) ||
      (R === "translate exists" && !te)
    ) {
      const [en, hr] = i();
      return n && P ? F(n) : K(en);
    } else {
      if (oe(te)) return te;
      throw G(x.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Fe(...o) {
    return z(
      (i) => Reflect.apply($e, null, [i, ...o]),
      () => Oe(...o),
      "translate",
      (i) => Reflect.apply(i.t, i, [...o]),
      (i) => i,
      (i) => E(i),
    );
  }
  function vt(...o) {
    const [i, R, F] = o;
    if (F && !A(F)) throw G(x.INVALID_ARGUMENT);
    return Fe(i, R, W({ resolvedMessage: !0 }, F || {}));
  }
  function Ut(...o) {
    return z(
      (i) => Reflect.apply(He, null, [i, ...o]),
      () => be(...o),
      "datetime format",
      (i) => Reflect.apply(i.d, i, [...o]),
      () => We,
      (i) => E(i),
    );
  }
  function kt(...o) {
    return z(
      (i) => Reflect.apply(Xe, null, [i, ...o]),
      () => Ie(...o),
      "number format",
      (i) => Reflect.apply(i.n, i, [...o]),
      () => We,
      (i) => E(i),
    );
  }
  function wt(o) {
    return o.map((i) => (E(i) || U(i) || h(i) ? Ke(String(i)) : i));
  }
  const Wt = { normalize: wt, interpolate: (o) => o, type: "vnode" };
  function Vt(...o) {
    return z(
      (i) => {
        let R;
        const F = i;
        try {
          (F.processor = Wt), (R = Reflect.apply($e, null, [F, ...o]));
        } finally {
          F.processor = null;
        }
        return R;
      },
      () => Oe(...o),
      "translate",
      (i) => i[Le](...o),
      (i) => [Ke(i)],
      (i) => M(i),
    );
  }
  function xt(...o) {
    return z(
      (i) => Reflect.apply(Xe, null, [i, ...o]),
      () => Ie(...o),
      "number format",
      (i) => i[Ce](...o),
      Je,
      (i) => E(i) || M(i),
    );
  }
  function Gt(...o) {
    return z(
      (i) => Reflect.apply(He, null, [i, ...o]),
      () => be(...o),
      "datetime format",
      (i) => i[Ae](...o),
      Je,
      (i) => E(i) || M(i),
    );
  }
  function jt(o) {
    (w = o), (N.pluralRules = w);
  }
  function $t(o, i) {
    return z(
      () => {
        if (!o) return !1;
        const R = E(i) ? i : u.value,
          F = ye(R),
          K = N.messageResolver(F, o);
        return _ ? K != null : ne(K) || X(K) || E(K);
      },
      () => [o],
      "translate exists",
      (R) => Reflect.apply(R.te, R, [o, i]),
      or,
      (R) => h(R),
    );
  }
  function Ht(o) {
    let i = null;
    const R = mt(N, g.value, u.value);
    for (let F = 0; F < R.length; F++) {
      const K = f.value[R[F]] || {},
        oe = N.messageResolver(K, o);
      if (oe != null) {
        i = oe;
        break;
      }
    }
    return i;
  }
  function Yt(o) {
    const i = Ht(o);
    return i ?? (n ? n.tm(o) || {} : {});
  }
  function ye(o) {
    return f.value[o] || {};
  }
  function Xt(o, i) {
    if (s) {
      const R = { [o]: i };
      for (const F in R) me(R, F) && le(R[F]);
      i = R[o];
    }
    (f.value[o] = i), (N.messages = f.value);
  }
  function Bt(o, i) {
    f.value[o] = f.value[o] || {};
    const R = { [o]: i };
    if (s) for (const F in R) me(R, F) && le(R[F]);
    (i = R[o]), ie(i, f.value[o]), (N.messages = f.value);
  }
  function Kt(o) {
    return m.value[o] || {};
  }
  function Jt(o, i) {
    (m.value[o] = i), (N.datetimeFormats = m.value), Ye(N, o, i);
  }
  function Qt(o, i) {
    (m.value[o] = W(m.value[o] || {}, i)),
      (N.datetimeFormats = m.value),
      Ye(N, o, i);
  }
  function zt(o) {
    return d.value[o] || {};
  }
  function qt(o, i) {
    (d.value[o] = i), (N.numberFormats = d.value), Be(N, o, i);
  }
  function Zt(o, i) {
    (d.value[o] = W(d.value[o] || {}, i)),
      (N.numberFormats = d.value),
      Be(N, o, i);
  }
  Qe++,
    n &&
      ue &&
      (Te(n.locale, (o) => {
        c && ((u.value = o), (N.locale = o), ae(N, u.value, g.value));
      }),
      Te(n.fallbackLocale, (o) => {
        c && ((g.value = o), (N.fallbackLocale = o), ae(N, u.value, g.value));
      }));
  const v = {
    id: Qe,
    locale: B,
    fallbackLocale: pt,
    get inheritLocale() {
      return c;
    },
    set inheritLocale(o) {
      (c = o),
        o &&
          n &&
          ((u.value = n.locale.value),
          (g.value = n.fallbackLocale.value),
          ae(N, u.value, g.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: Pt,
    get modifiers() {
      return j;
    },
    get pluralRules() {
      return w || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return O;
    },
    set missingWarn(o) {
      (O = o), (N.missingWarn = O);
    },
    get fallbackWarn() {
      return L;
    },
    set fallbackWarn(o) {
      (L = o), (N.fallbackWarn = L);
    },
    get fallbackRoot() {
      return P;
    },
    set fallbackRoot(o) {
      P = o;
    },
    get fallbackFormat() {
      return T;
    },
    set fallbackFormat(o) {
      (T = o), (N.fallbackFormat = T);
    },
    get warnHtmlMessage() {
      return C;
    },
    set warnHtmlMessage(o) {
      (C = o), (N.warnHtmlMessage = o);
    },
    get escapeParameter() {
      return p;
    },
    set escapeParameter(o) {
      (p = o), (N.escapeParameter = o);
    },
    t: Fe,
    getLocaleMessage: ye,
    setLocaleMessage: Xt,
    mergeLocaleMessage: Bt,
    getPostTranslationHandler: ht,
    setPostTranslationHandler: Ft,
    getMissingHandler: yt,
    setMissingHandler: Mt,
    [rr]: jt,
  };
  return (
    (v.datetimeFormats = Dt),
    (v.numberFormats = St),
    (v.rt = vt),
    (v.te = $t),
    (v.tm = Yt),
    (v.d = Ut),
    (v.n = kt),
    (v.getDateTimeFormat = Kt),
    (v.setDateTimeFormat = Jt),
    (v.mergeDateTimeFormat = Qt),
    (v.getNumberFormat = zt),
    (v.setNumberFormat = qt),
    (v.mergeNumberFormat = Zt),
    (v[ar] = r),
    (v[Le] = Vt),
    (v[Ae] = Gt),
    (v[Ce] = xt),
    v
  );
}
const Se = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function cr({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, a) => [...r, ...(a.type === lt ? a.children : [a])],
        [],
      )
    : t.reduce((n, r) => {
        const a = e[r];
        return a && (n[r] = a()), n;
      }, {});
}
function Ct(e) {
  return lt;
}
const ir = pe({
    name: "i18n-t",
    props: W(
      {
        keypath: { type: String, required: !0 },
        plural: { type: [Number, String], validator: (e) => U(e) || !isNaN(e) },
      },
      Se,
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        a = e.i18n || he({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const s = Object.keys(n).filter((f) => f !== "_"),
          l = {};
        e.locale && (l.locale = e.locale),
          e.plural !== void 0 &&
            (l.plural = E(e.plural) ? +e.plural : e.plural);
        const _ = cr(t, s),
          c = a[Le](e.keypath, _, l),
          u = W({}, r),
          g = E(e.tag) || A(e.tag) ? e.tag : Ct();
        return at(g, u, c);
      };
    },
  }),
  qe = ir;
function ur(e) {
  return M(e) && !E(e[0]);
}
function Rt(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const l = { part: !0 };
    let _ = {};
    e.locale && (l.locale = e.locale),
      E(e.format)
        ? (l.key = e.format)
        : A(e.format) &&
          (E(e.format.key) && (l.key = e.format.key),
          (_ = Object.keys(e.format).reduce(
            (m, d) => (n.includes(d) ? W({}, m, { [d]: e.format[d] }) : m),
            {},
          )));
    const c = r(e.value, l, _);
    let u = [l.key];
    M(c)
      ? (u = c.map((m, d) => {
          const O = a[m.type],
            L = O ? O({ [m.type]: m.value, index: d, parts: c }) : [m.value];
          return ur(L) && (L[0].key = `${m.type}-${d}`), L;
        }))
      : E(c) && (u = [c]);
    const g = W({}, s),
      f = E(e.tag) || A(e.tag) ? e.tag : Ct();
    return at(f, g, u);
  };
}
const _r = pe({
    name: "i18n-n",
    props: W(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      Se,
    ),
    setup(e, t) {
      const n = e.i18n || he({ useScope: e.scope, __useComponent: !0 });
      return Rt(e, t, Ot, (...r) => n[Ce](...r));
    },
  }),
  Ze = _r,
  mr = pe({
    name: "i18n-d",
    props: W(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      Se,
    ),
    setup(e, t) {
      const n = e.i18n || he({ useScope: e.scope, __useComponent: !0 });
      return Rt(e, t, Tt, (...r) => n[Ae](...r));
    },
  }),
  et = mr;
function fr(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Er(e) {
  const t = (l) => {
    const { instance: _, modifiers: c, value: u } = l;
    if (!_ || !_.$) throw G(x.UNEXPECTED_ERROR);
    const g = fr(e, _.$),
      f = tt(u);
    return [Reflect.apply(g.t, g, [...nt(f)]), g];
  };
  return {
    created: (l, _) => {
      const [c, u] = t(_);
      ue &&
        e.global === u &&
        (l.__i18nWatcher = Te(u.locale, () => {
          _.instance && _.instance.$forceUpdate();
        })),
        (l.__composer = u),
        (l.textContent = c);
    },
    unmounted: (l) => {
      ue &&
        l.__i18nWatcher &&
        (l.__i18nWatcher(), (l.__i18nWatcher = void 0), delete l.__i18nWatcher),
        l.__composer && ((l.__composer = void 0), delete l.__composer);
    },
    beforeUpdate: (l, { value: _ }) => {
      if (l.__composer) {
        const c = l.__composer,
          u = tt(_);
        l.textContent = Reflect.apply(c.t, c, [...nt(u)]);
      }
    },
    getSSRProps: (l) => {
      const [_] = t(l);
      return { textContent: _ };
    },
  };
}
function tt(e) {
  if (E(e)) return { path: e };
  if (b(e)) {
    if (!("path" in e)) throw G(x.REQUIRED_VALUE, "path");
    return e;
  } else throw G(x.INVALID_VALUE);
}
function nt(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e,
    l = {},
    _ = r || {};
  return (
    E(n) && (l.locale = n),
    U(a) && (l.plural = a),
    U(s) && (l.plural = s),
    [t, _, l]
  );
}
function gr(e, t, ...n) {
  const r = b(n[0]) ? n[0] : {},
    a = !!r.useI18nComponentName;
  (h(r.globalInstall) ? r.globalInstall : !0) &&
    ([a ? "i18n" : qe.name, "I18nT"].forEach((l) => e.component(l, qe)),
    [Ze.name, "I18nN"].forEach((l) => e.component(l, Ze)),
    [et.name, "I18nD"].forEach((l) => e.component(l, et))),
    e.directive("t", Er(t));
}
const dr = J("global-vue-i18n");
function Nr(e = {}, t) {
  const n = h(e.globalInjection) ? e.globalInjection : !0,
    r = !0,
    a = new Map(),
    [s, l] = Tr(e),
    _ = J("");
  function c(f) {
    return a.get(f) || null;
  }
  function u(f, m) {
    a.set(f, m);
  }
  function g(f) {
    a.delete(f);
  }
  {
    const f = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return r;
      },
      async install(m, ...d) {
        if (
          ((m.__VUE_I18N_SYMBOL__ = _),
          m.provide(m.__VUE_I18N_SYMBOL__, f),
          b(d[0]))
        ) {
          const P = d[0];
          (f.__composerExtend = P.__composerExtend),
            (f.__vueI18nExtend = P.__vueI18nExtend);
        }
        let O = null;
        n && (O = pr(m, f.global)), gr(m, f, ...d);
        const L = m.unmount;
        m.unmount = () => {
          O && O(), f.dispose(), L();
        };
      },
      get global() {
        return l;
      },
      dispose() {
        s.stop();
      },
      __instances: a,
      __getInstance: c,
      __setInstance: u,
      __deleteInstance: g,
    };
    return f;
  }
}
function he(e = {}) {
  const t = st();
  if (t == null) throw G(x.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw G(x.NOT_INSTALLED);
  const n = Or(t),
    r = Ir(n),
    a = lr(t),
    s = br(e, a);
  if (s === "global") return sr(r, e, a), r;
  if (s === "parent") {
    let c = Lr(n, t, e.__useComponent);
    return c == null && (c = r), c;
  }
  const l = n;
  let _ = l.__getInstance(t);
  if (_ == null) {
    const c = W({}, e);
    "__i18n" in a && (c.__i18n = a.__i18n),
      r && (c.__root = r),
      (_ = At(c)),
      l.__composerExtend && (_[Re] = l.__composerExtend(_)),
      Cr(l, t, _),
      l.__setInstance(t, _);
  }
  return _;
}
function Tr(e, t, n) {
  const r = tn();
  {
    const a = r.run(() => At(e));
    if (a == null) throw G(x.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function Or(e) {
  {
    const t = nn(e.isCE ? dr : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw G(e.isCE ? x.NOT_INSTALLED_WITH_PROVIDE : x.UNEXPECTED_ERROR);
    return t;
  }
}
function br(e, t) {
  return Ee(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
      ? e.useScope
      : "local";
}
function Ir(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Lr(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = Ar(t, n);
  for (; s != null; ) {
    const l = e;
    if (
      (e.mode === "composition" && (r = l.__getInstance(s)),
      r != null || a === s)
    )
      break;
    s = s.parent;
  }
  return r;
}
function Ar(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function Cr(e, t, n) {
  rn(() => {}, t),
    an(() => {
      const r = n;
      e.__deleteInstance(t);
      const a = r[Re];
      a && (a(), delete r[Re]);
    }, t);
}
const Rr = ["locale", "fallbackLocale", "availableLocales"],
  rt = ["t", "rt", "d", "n", "tm", "te"];
function pr(e, t) {
  const n = Object.create(null);
  return (
    Rr.forEach((a) => {
      const s = Object.getOwnPropertyDescriptor(t, a);
      if (!s) throw G(x.UNEXPECTED_ERROR);
      const l = ln(s.value)
        ? {
            get() {
              return s.value.value;
            },
            set(_) {
              s.value.value = _;
            },
          }
        : {
            get() {
              return s.get && s.get();
            },
          };
      Object.defineProperty(n, a, l);
    }),
    (e.config.globalProperties.$i18n = n),
    rt.forEach((a) => {
      const s = Object.getOwnPropertyDescriptor(t, a);
      if (!s || !s.value) throw G(x.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${a}`, s);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        rt.forEach((a) => {
          delete e.config.globalProperties[`$${a}`];
        });
    }
  );
}
Kn(yn);
Jn(mt);
const Pr = { failed: "Action failed", success: "Action was successful" },
  Dr = { "en-US": Pr },
  yr = _n(({ app: e }) => {
    const t = Nr({ locale: "en-US", globalInjection: !0, messages: Dr });
    e.use(t);
  });
export { yr as default };
