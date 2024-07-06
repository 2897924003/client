function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/LoginLayout-DXgzPNH4.js",
      "assets/QSelect-Hc-Dnbtu.js",
      "assets/QInput-pQ_uuI7K.js",
      "assets/QPage-Rtxh1b_-.js",
      "assets/QCheckbox-CbuSlzCd.js",
      "assets/LoginLayout-Dmt0kHuS.css",
      "assets/IndexPage-DMFN0IB3.js",
      "assets/QCardActions-B86ceFEj.js",
      "assets/TargetPage-BzKW-UPE.js",
      "assets/QTree-JIoxeCL5.js",
      "assets/UserAuthPage-DIKVJLUe.js",
      "assets/QTable-CsMYil0B.js",
      "assets/StudentInfoPage-Cmjyqidn.js",
      "assets/ClosePopup-Do__HKpZ.js",
      "assets/StudentInfoPage-B_SY1GJM.css",
      "assets/BuildingExample-Ctyl-MEG.js",
      "assets/BuildingExample-D_xgSL2E.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
const ef = (function () {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  tf = function (e) {
    return "/" + e;
  },
  Bs = {},
  Qe = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        l = s?.nonce || s?.getAttribute("nonce");
      o = Promise.all(
        n.map((a) => {
          if (((a = tf(a)), a in Bs)) return;
          Bs[a] = !0;
          const c = a.endsWith(".css"),
            u = c ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let p = i.length - 1; p >= 0; p--) {
              const m = i[p];
              if (m.href === a && (!c || m.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${a}"]${u}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = c ? "stylesheet" : ef),
            c || ((f.as = "script"), (f.crossOrigin = "")),
            (f.href = a),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            c)
          )
            return new Promise((p, m) => {
              f.addEventListener("load", p),
                f.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${a}`)),
                );
            });
        }),
      );
    }
    return o
      .then(() => t())
      .catch((i) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented))
          throw i;
      });
  };
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ui(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const ve = {},
  Sn = [],
  Ge = () => {},
  nf = () => !1,
  ao = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Wi = (e) => e.startsWith("onUpdate:"),
  xe = Object.assign,
  Ki = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  rf = Object.prototype.hasOwnProperty,
  de = (e, t) => rf.call(e, t),
  re = Array.isArray,
  En = (e) => mr(e) === "[object Map]",
  Ta = (e) => mr(e) === "[object Set]",
  of = (e) => mr(e) === "[object RegExp]",
  oe = (e) => typeof e == "function",
  Se = (e) => typeof e == "string",
  $n = (e) => typeof e == "symbol",
  ye = (e) => e !== null && typeof e == "object",
  Ra = (e) => (ye(e) || oe(e)) && oe(e.then) && oe(e.catch),
  Pa = Object.prototype.toString,
  mr = (e) => Pa.call(e),
  sf = (e) => mr(e).slice(8, -1),
  ka = (e) => mr(e) === "[object Object]",
  Qi = (e) =>
    Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Kn = Ui(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  uo = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  lf = /-(\w)/g,
  yt = uo((e) => e.replace(lf, (t, n) => (n ? n.toUpperCase() : ""))),
  af = /\B([A-Z])/g,
  an = uo((e) => e.replace(af, "-$1").toLowerCase()),
  co = uo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ao = uo((e) => (e ? `on${co(e)}` : "")),
  Gt = (e, t) => !Object.is(e, t),
  Qn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Wr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  uf = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  cf = (e) => {
    const t = Se(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ms;
const Oa = () =>
  Ms ||
  (Ms =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Gi(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Se(r) ? pf(r) : Gi(r);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else if (Se(e) || ye(e)) return e;
}
const ff = /;(?![^(]*\))/g,
  df = /:([^]+)/,
  hf = /\/\*[^]*?\*\//g;
function pf(e) {
  const t = {};
  return (
    e
      .replace(hf, "")
      .split(ff)
      .forEach((n) => {
        if (n) {
          const r = n.split(df);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Ji(e) {
  let t = "";
  if (Se(e)) t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ji(e[n]);
      r && (t += r + " ");
    }
  else if (ye(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const mf =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  gf = Ui(mf);
function Aa(e) {
  return !!e || e === "";
}
const yy = (e) =>
    Se(e)
      ? e
      : e == null
        ? ""
        : re(e) || (ye(e) && (e.toString === Pa || !oe(e.toString)))
          ? JSON.stringify(e, La, 2)
          : String(e),
  La = (e, t) =>
    t && t.__v_isRef
      ? La(e, t.value)
      : En(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, o], i) => ((n[Lo(r, i) + " =>"] = o), n),
              {},
            ),
          }
        : Ta(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Lo(n)) }
          : $n(t)
            ? Lo(t)
            : ye(t) && !re(t) && !ka(t)
              ? String(t)
              : t,
  Lo = (e, t = "") => {
    var n;
    return $n(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ve;
class qa {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ve),
      !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ve;
      try {
        return (Ve = this), t();
      } finally {
        Ve = n;
      }
    }
  }
  on() {
    Ve = this;
  }
  off() {
    Ve = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function $a(e) {
  return new qa(e);
}
function vf(e, t = Ve) {
  t && t.active && t.effects.push(e);
}
function Ba() {
  return Ve;
}
function yf(e) {
  Ve && Ve.cleanups.push(e);
}
let on;
class Xi {
  constructor(t, n, r, o) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      vf(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), un();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (bf(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), cn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Ut,
      n = on;
    try {
      return (Ut = !0), (on = this), this._runnings++, Ns(this), this.fn();
    } finally {
      zs(this), this._runnings--, (on = n), (Ut = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (Ns(this),
      zs(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function bf(e) {
  return e.value;
}
function Ns(e) {
  e._trackId++, (e._depsLength = 0);
}
function zs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Ma(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ma(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Ut = !0,
  di = 0;
const Na = [];
function un() {
  Na.push(Ut), (Ut = !1);
}
function cn() {
  const e = Na.pop();
  Ut = e === void 0 ? !0 : e;
}
function Yi() {
  di++;
}
function Zi() {
  for (di--; !di && hi.length; ) hi.shift()();
}
function za(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Ma(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const hi = [];
function ja(e, t, n) {
  Yi();
  for (const r of e.keys()) {
    let o;
    r._dirtyLevel < t &&
      (o ?? (o = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (o ?? (o = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && hi.push(r.scheduler)));
  }
  Zi();
}
const Fa = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Kr = new WeakMap(),
  sn = Symbol(""),
  pi = Symbol("");
function Ie(e, t, n) {
  if (Ut && on) {
    let r = Kr.get(e);
    r || Kr.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Fa(() => r.delete(n)))), za(on, o);
  }
}
function Rt(e, t, n, r, o, i) {
  const s = Kr.get(e);
  if (!s) return;
  let l = [];
  if (t === "clear") l = [...s.values()];
  else if (n === "length" && re(e)) {
    const a = Number(r);
    s.forEach((c, u) => {
      (u === "length" || (!$n(u) && u >= a)) && l.push(c);
    });
  } else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case "add":
        re(e)
          ? Qi(n) && l.push(s.get("length"))
          : (l.push(s.get(sn)), En(e) && l.push(s.get(pi)));
        break;
      case "delete":
        re(e) || (l.push(s.get(sn)), En(e) && l.push(s.get(pi)));
        break;
      case "set":
        En(e) && l.push(s.get(sn));
        break;
    }
  Yi();
  for (const a of l) a && ja(a, 4);
  Zi();
}
function _f(e, t) {
  var n;
  return (n = Kr.get(e)) == null ? void 0 : n.get(t);
}
const wf = Ui("__proto__,__v_isRef,__isVue"),
  Ia = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter($n),
  ),
  js = Sf();
function Sf() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ce(this);
        for (let i = 0, s = this.length; i < s; i++) Ie(r, "get", i + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(ce)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        un(), Yi();
        const r = ce(this)[t].apply(this, n);
        return Zi(), cn(), r;
      };
    }),
    e
  );
}
function Ef(e) {
  const t = ce(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Da {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    const o = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return r === (o ? (i ? Mf : Wa) : i ? Ua : Va).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const s = re(t);
    if (!o) {
      if (s && de(js, n)) return Reflect.get(js, n, r);
      if (n === "hasOwnProperty") return Ef;
    }
    const l = Reflect.get(t, n, r);
    return ($n(n) ? Ia.has(n) : wf(n)) || (o || Ie(t, "get", n), i)
      ? l
      : Te(l)
        ? s && Qi(n)
          ? l
          : l.value
        : ye(l)
          ? o
            ? Qa(l)
            : it(l)
          : l;
  }
}
class Ha extends Da {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Rn(i);
      if (
        (!Qr(r) && !Rn(r) && ((i = ce(i)), (r = ce(r))),
        !re(t) && Te(i) && !Te(r))
      )
        return a ? !1 : ((i.value = r), !0);
    }
    const s = re(t) && Qi(n) ? Number(n) < t.length : de(t, n),
      l = Reflect.set(t, n, r, o);
    return (
      t === ce(o) && (s ? Gt(r, i) && Rt(t, "set", n, r) : Rt(t, "add", n, r)),
      l
    );
  }
  deleteProperty(t, n) {
    const r = de(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Rt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!$n(n) || !Ia.has(n)) && Ie(t, "has", n), r;
  }
  ownKeys(t) {
    return Ie(t, "iterate", re(t) ? "length" : sn), Reflect.ownKeys(t);
  }
}
class xf extends Da {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Cf = new Ha(),
  Tf = new xf(),
  Rf = new Ha(!0),
  es = (e) => e,
  fo = (e) => Reflect.getPrototypeOf(e);
function xr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = ce(e),
    i = ce(t);
  n || (Gt(t, i) && Ie(o, "get", t), Ie(o, "get", i));
  const { has: s } = fo(o),
    l = r ? es : n ? rs : ir;
  if (s.call(o, t)) return l(e.get(t));
  if (s.call(o, i)) return l(e.get(i));
  e !== o && e.get(t);
}
function Cr(e, t = !1) {
  const n = this.__v_raw,
    r = ce(n),
    o = ce(e);
  return (
    t || (Gt(e, o) && Ie(r, "has", e), Ie(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Tr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ie(ce(e), "iterate", sn), Reflect.get(e, "size", e)
  );
}
function Fs(e) {
  e = ce(e);
  const t = ce(this);
  return fo(t).has.call(t, e) || (t.add(e), Rt(t, "add", e, e)), this;
}
function Is(e, t) {
  t = ce(t);
  const n = ce(this),
    { has: r, get: o } = fo(n);
  let i = r.call(n, e);
  i || ((e = ce(e)), (i = r.call(n, e)));
  const s = o.call(n, e);
  return (
    n.set(e, t), i ? Gt(t, s) && Rt(n, "set", e, t) : Rt(n, "add", e, t), this
  );
}
function Ds(e) {
  const t = ce(this),
    { has: n, get: r } = fo(t);
  let o = n.call(t, e);
  o || ((e = ce(e)), (o = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return o && Rt(t, "delete", e, void 0), i;
}
function Hs() {
  const e = ce(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Rt(e, "clear", void 0, void 0), n;
}
function Rr(e, t) {
  return function (r, o) {
    const i = this,
      s = i.__v_raw,
      l = ce(s),
      a = t ? es : e ? rs : ir;
    return (
      !e && Ie(l, "iterate", sn), s.forEach((c, u) => r.call(o, a(c), a(u), i))
    );
  };
}
function Pr(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      i = ce(o),
      s = En(i),
      l = e === "entries" || (e === Symbol.iterator && s),
      a = e === "keys" && s,
      c = o[e](...r),
      u = n ? es : t ? rs : ir;
    return (
      !t && Ie(i, "iterate", a ? pi : sn),
      {
        next() {
          const { value: d, done: f } = c.next();
          return f
            ? { value: d, done: f }
            : { value: l ? [u(d[0]), u(d[1])] : u(d), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Lt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pf() {
  const e = {
      get(i) {
        return xr(this, i);
      },
      get size() {
        return Tr(this);
      },
      has: Cr,
      add: Fs,
      set: Is,
      delete: Ds,
      clear: Hs,
      forEach: Rr(!1, !1),
    },
    t = {
      get(i) {
        return xr(this, i, !1, !0);
      },
      get size() {
        return Tr(this);
      },
      has: Cr,
      add: Fs,
      set: Is,
      delete: Ds,
      clear: Hs,
      forEach: Rr(!1, !0),
    },
    n = {
      get(i) {
        return xr(this, i, !0);
      },
      get size() {
        return Tr(this, !0);
      },
      has(i) {
        return Cr.call(this, i, !0);
      },
      add: Lt("add"),
      set: Lt("set"),
      delete: Lt("delete"),
      clear: Lt("clear"),
      forEach: Rr(!0, !1),
    },
    r = {
      get(i) {
        return xr(this, i, !0, !0);
      },
      get size() {
        return Tr(this, !0);
      },
      has(i) {
        return Cr.call(this, i, !0);
      },
      add: Lt("add"),
      set: Lt("set"),
      delete: Lt("delete"),
      clear: Lt("clear"),
      forEach: Rr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = Pr(i, !1, !1)),
        (n[i] = Pr(i, !0, !1)),
        (t[i] = Pr(i, !1, !0)),
        (r[i] = Pr(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [kf, Of, Af, Lf] = Pf();
function ts(e, t) {
  const n = t ? (e ? Lf : Af) : e ? Of : kf;
  return (r, o, i) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
        ? e
        : o === "__v_raw"
          ? r
          : Reflect.get(de(n, o) && o in r ? n : r, o, i);
}
const qf = { get: ts(!1, !1) },
  $f = { get: ts(!1, !0) },
  Bf = { get: ts(!0, !1) },
  Va = new WeakMap(),
  Ua = new WeakMap(),
  Wa = new WeakMap(),
  Mf = new WeakMap();
function Nf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Nf(sf(e));
}
function it(e) {
  return Rn(e) ? e : ns(e, !1, Cf, qf, Va);
}
function Ka(e) {
  return ns(e, !1, Rf, $f, Ua);
}
function Qa(e) {
  return ns(e, !0, Tf, Bf, Wa);
}
function ns(e, t, n, r, o) {
  if (!ye(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = o.get(e);
  if (i) return i;
  const s = zf(e);
  if (s === 0) return e;
  const l = new Proxy(e, s === 2 ? r : n);
  return o.set(e, l), l;
}
function Wt(e) {
  return Rn(e) ? Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rn(e) {
  return !!(e && e.__v_isReadonly);
}
function Qr(e) {
  return !!(e && e.__v_isShallow);
}
function Ga(e) {
  return Wt(e) || Rn(e);
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function Jt(e) {
  return Object.isExtensible(e) && Wr(e, "__v_skip", !0), e;
}
const ir = (e) => (ye(e) ? it(e) : e),
  rs = (e) => (ye(e) ? Qa(e) : e);
class Ja {
  constructor(t, n, r, o) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Xi(
        () => t(this._value),
        () => Mr(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ce(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Gt(t._value, (t._value = t.effect.run())) &&
        Mr(t, 4),
      Xa(t),
      t.effect._dirtyLevel >= 2 && Mr(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function jf(e, t, n = !1) {
  let r, o;
  const i = oe(e);
  return (
    i ? ((r = e), (o = Ge)) : ((r = e.get), (o = e.set)),
    new Ja(r, o, i || !o, n)
  );
}
function Xa(e) {
  var t;
  Ut &&
    on &&
    ((e = ce(e)),
    za(
      on,
      (t = e.dep) != null
        ? t
        : (e.dep = Fa(() => (e.dep = void 0), e instanceof Ja ? e : void 0)),
    ));
}
function Mr(e, t = 4, n) {
  e = ce(e);
  const r = e.dep;
  r && ja(r, t);
}
function Te(e) {
  return !!(e && e.__v_isRef === !0);
}
function ee(e) {
  return Ya(e, !1);
}
function Ff(e) {
  return Ya(e, !0);
}
function Ya(e, t) {
  return Te(e) ? e : new If(e, t);
}
class If {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : ir(t));
  }
  get value() {
    return Xa(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Qr(t) || Rn(t);
    (t = n ? t : ce(t)),
      Gt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : ir(t)), Mr(this, 4));
  }
}
function ln(e) {
  return Te(e) ? e.value : e;
}
const Df = {
  get: (e, t, n) => ln(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Te(o) && !Te(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Za(e) {
  return Wt(e) ? e : new Proxy(e, Df);
}
function Hf(e) {
  const t = re(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Uf(e, n);
  return t;
}
class Vf {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return _f(ce(this._object), this._key);
  }
}
function Uf(e, t, n) {
  const r = e[t];
  return Te(r) ? r : new Vf(e, t, n);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Kt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    ho(o, t, n);
  }
}
function Je(e, t, n, r) {
  if (oe(e)) {
    const i = Kt(e, t, n, r);
    return (
      i &&
        Ra(i) &&
        i.catch((s) => {
          ho(s, t, n);
        }),
      i
    );
  }
  const o = [];
  for (let i = 0; i < e.length; i++) o.push(Je(e[i], t, n, r));
  return o;
}
function ho(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, s, l) === !1) return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Kt(a, null, 10, [e, s, l]);
      return;
    }
  }
  Wf(e, n, o, r);
}
function Wf(e, t, n, r = !0) {
  console.error(e);
}
let sr = !1,
  mi = !1;
const Me = [];
let gt = 0;
const xn = [];
let jt = null,
  nn = 0;
const eu = Promise.resolve();
let os = null;
function kt(e) {
  const t = os || eu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kf(e) {
  let t = gt + 1,
    n = Me.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      o = Me[r],
      i = lr(o);
    i < e || (i === e && o.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function is(e) {
  (!Me.length || !Me.includes(e, sr && e.allowRecurse ? gt + 1 : gt)) &&
    (e.id == null ? Me.push(e) : Me.splice(Kf(e.id), 0, e), tu());
}
function tu() {
  !sr && !mi && ((mi = !0), (os = eu.then(ru)));
}
function Qf(e) {
  const t = Me.indexOf(e);
  t > gt && Me.splice(t, 1);
}
function Gf(e) {
  re(e)
    ? xn.push(...e)
    : (!jt || !jt.includes(e, e.allowRecurse ? nn + 1 : nn)) && xn.push(e),
    tu();
}
function Vs(e, t, n = sr ? gt + 1 : 0) {
  for (; n < Me.length; n++) {
    const r = Me[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      Me.splice(n, 1), n--, r();
    }
  }
}
function nu(e) {
  if (xn.length) {
    const t = [...new Set(xn)].sort((n, r) => lr(n) - lr(r));
    if (((xn.length = 0), jt)) {
      jt.push(...t);
      return;
    }
    for (jt = t, nn = 0; nn < jt.length; nn++) jt[nn]();
    (jt = null), (nn = 0);
  }
}
const lr = (e) => (e.id == null ? 1 / 0 : e.id),
  Jf = (e, t) => {
    const n = lr(e) - lr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ru(e) {
  (mi = !1), (sr = !0), Me.sort(Jf);
  try {
    for (gt = 0; gt < Me.length; gt++) {
      const t = Me[gt];
      t && t.active !== !1 && Kt(t, null, 14);
    }
  } finally {
    (gt = 0),
      (Me.length = 0),
      nu(),
      (sr = !1),
      (os = null),
      (Me.length || xn.length) && ru();
  }
}
function Xf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ve;
  let o = n;
  const i = t.startsWith("update:"),
    s = i && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`,
      { number: d, trim: f } = r[u] || ve;
    f && (o = n.map((p) => (Se(p) ? p.trim() : p))), d && (o = n.map(uf));
  }
  let l,
    a = r[(l = Ao(t))] || r[(l = Ao(yt(t)))];
  !a && i && (a = r[(l = Ao(an(t)))]), a && Je(a, e, 6, o);
  const c = r[l + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Je(c, e, 6, o);
  }
}
function ou(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let s = {},
    l = !1;
  if (!oe(e)) {
    const a = (c) => {
      const u = ou(c, t, !0);
      u && ((l = !0), xe(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (ye(e) && r.set(e, null), null)
    : (re(i) ? i.forEach((a) => (s[a] = null)) : xe(s, i),
      ye(e) && r.set(e, s),
      s);
}
function po(e, t) {
  return !e || !ao(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      de(e, t[0].toLowerCase() + t.slice(1)) || de(e, an(t)) || de(e, t));
}
let Ne = null,
  mo = null;
function Gr(e) {
  const t = Ne;
  return (Ne = e), (mo = (e && e.type.__scopeId) || null), t;
}
function by(e) {
  mo = e;
}
function _y() {
  mo = null;
}
function ae(e, t = Ne, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && ol(-1);
    const i = Gr(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Gr(i), r._d && ol(1);
    }
    return s;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function qo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: d,
    data: f,
    setupState: p,
    ctx: m,
    inheritAttrs: y,
  } = e;
  let x, b;
  const v = Gr(e);
  try {
    if (n.shapeFlag & 4) {
      const C = o || r,
        O = C;
      (x = mt(u.call(O, C, d, i, p, f, m))), (b = a);
    } else {
      const C = t;
      (x = mt(
        C.length > 1 ? C(i, { attrs: a, slots: l, emit: c }) : C(i, null),
      )),
        (b = t.props ? a : Yf(a));
    }
  } catch (C) {
    (Yn.length = 0), ho(C, e, 1), (x = Z(lt));
  }
  let _ = x;
  if (b && y !== !1) {
    const C = Object.keys(b),
      { shapeFlag: O } = _;
    C.length && O & 7 && (s && C.some(Wi) && (b = Zf(b, s)), (_ = Ot(_, b)));
  }
  return (
    n.dirs && ((_ = Ot(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (x = _),
    Gr(v),
    x
  );
}
const Yf = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ao(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Zf = (e, t) => {
    const n = {};
    for (const r in e) (!Wi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function ed(e, t, n) {
  const { props: r, children: o, component: i } = e,
    { props: s, children: l, patchFlag: a } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Us(r, s, c) : !!s;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (s[f] !== r[f] && !po(c, f)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === s
        ? !1
        : r
          ? s
            ? Us(r, s, c)
            : !0
          : !!s;
  return !1;
}
function Us(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !po(n, i)) return !0;
  }
  return !1;
}
function td({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const iu = "components";
function gi(e, t) {
  return rd(iu, e, !0, t) || e;
}
const nd = Symbol.for("v-ndc");
function rd(e, t, n = !0, r = !1) {
  const o = Ne || Ae;
  if (o) {
    const i = o.type;
    if (e === iu) {
      const l = xi(i, !1);
      if (l && (l === t || l === yt(t) || l === co(yt(t)))) return i;
    }
    const s = Ws(o[e] || i[e], t) || Ws(o.appContext[e], t);
    return !s && r ? i : s;
  }
}
function Ws(e, t) {
  return e && (e[t] || e[yt(t)] || e[co(yt(t))]);
}
const su = (e) => e.__isSuspense;
function od(e, t) {
  t && t.pendingBranch
    ? re(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Gf(e);
}
const id = Symbol.for("v-scx"),
  sd = () => ze(id),
  kr = {};
function ue(e, t, n) {
  return lu(e, t, n);
}
function lu(
  e,
  t,
  { immediate: n, deep: r, flush: o, once: i, onTrack: s, onTrigger: l } = ve,
) {
  if (t && i) {
    const B = t;
    t = (...D) => {
      B(...D), O();
    };
  }
  const a = Ae,
    c = (B) => (r === !0 ? B : rn(B, r === !1 ? 1 : void 0));
  let u,
    d = !1,
    f = !1;
  if (
    (Te(e)
      ? ((u = () => e.value), (d = Qr(e)))
      : Wt(e)
        ? ((u = () => c(e)), (d = !0))
        : re(e)
          ? ((f = !0),
            (d = e.some((B) => Wt(B) || Qr(B))),
            (u = () =>
              e.map((B) => {
                if (Te(B)) return B.value;
                if (Wt(B)) return c(B);
                if (oe(B)) return Kt(B, a, 2);
              })))
          : oe(e)
            ? t
              ? (u = () => Kt(e, a, 2))
              : (u = () => (p && p(), Je(e, a, 3, [m])))
            : (u = Ge),
    t && r)
  ) {
    const B = u;
    u = () => rn(B());
  }
  let p,
    m = (B) => {
      p = _.onStop = () => {
        Kt(B, a, 4), (p = _.onStop = void 0);
      };
    },
    y;
  if (_o)
    if (
      ((m = Ge),
      t ? n && Je(t, a, 3, [u(), f ? [] : void 0, m]) : u(),
      o === "sync")
    ) {
      const B = sd();
      y = B.__watcherHandles || (B.__watcherHandles = []);
    } else return Ge;
  let x = f ? new Array(e.length).fill(kr) : kr;
  const b = () => {
    if (!(!_.active || !_.dirty))
      if (t) {
        const B = _.run();
        (r || d || (f ? B.some((D, q) => Gt(D, x[q])) : Gt(B, x))) &&
          (p && p(),
          Je(t, a, 3, [B, x === kr ? void 0 : f && x[0] === kr ? [] : x, m]),
          (x = B));
      } else _.run();
  };
  b.allowRecurse = !!t;
  let v;
  o === "sync"
    ? (v = b)
    : o === "post"
      ? (v = () => qe(b, a && a.suspense))
      : ((b.pre = !0), a && (b.id = a.uid), (v = () => is(b)));
  const _ = new Xi(u, Ge, v),
    C = Ba(),
    O = () => {
      _.stop(), C && Ki(C.effects, _);
    };
  return (
    t
      ? n
        ? b()
        : (x = _.run())
      : o === "post"
        ? qe(_.run.bind(_), a && a.suspense)
        : _.run(),
    y && y.push(O),
    O
  );
}
function ld(e, t, n) {
  const r = this.proxy,
    o = Se(e) ? (e.includes(".") ? au(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  oe(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = gr(this),
    l = lu(o, i.bind(r), n);
  return s(), l;
}
function au(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function rn(e, t, n = 0, r) {
  if (!ye(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((r = r || new Set()), r.has(e))) return e;
  if ((r.add(e), Te(e))) rn(e.value, t, n, r);
  else if (re(e)) for (let o = 0; o < e.length; o++) rn(e[o], t, n, r);
  else if (Ta(e) || En(e))
    e.forEach((o) => {
      rn(o, t, n, r);
    });
  else if (ka(e)) for (const o in e) rn(e[o], t, n, r);
  return e;
}
function rt(e, t) {
  if (Ne === null) return e;
  const n = wo(Ne) || Ne.proxy,
    r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, s, l, a = ve] = t[o];
    i &&
      (oe(i) && (i = { mounted: i, updated: i }),
      i.deep && rn(s),
      r.push({
        dir: i,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function Xt(e, t, n, r) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[r];
    a && (un(), Je(a, n, 8, [e.el, l, e, t]), cn());
  }
}
const Ft = Symbol("_leaveCb"),
  Or = Symbol("_enterCb");
function uu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    at(() => {
      e.isMounted = !0;
    }),
    De(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ue = [Function, Array],
  cu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ue,
    onEnter: Ue,
    onAfterEnter: Ue,
    onEnterCancelled: Ue,
    onBeforeLeave: Ue,
    onLeave: Ue,
    onAfterLeave: Ue,
    onLeaveCancelled: Ue,
    onBeforeAppear: Ue,
    onAppear: Ue,
    onAfterAppear: Ue,
    onAppearCancelled: Ue,
  },
  ad = {
    name: "BaseTransition",
    props: cu,
    setup(e, { slots: t }) {
      const n = Ee(),
        r = uu();
      return () => {
        const o = t.default && ss(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const f of o)
            if (f.type !== lt) {
              i = f;
              break;
            }
        }
        const s = ce(e),
          { mode: l } = s;
        if (r.isLeaving) return $o(i);
        const a = Ks(i);
        if (!a) return $o(i);
        const c = ar(a, s, r, n);
        Pn(a, c);
        const u = n.subTree,
          d = u && Ks(u);
        if (d && d.type !== lt && !Vt(a, d)) {
          const f = ar(d, s, r, n);
          if ((Pn(d, f), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              $o(i)
            );
          l === "in-out" &&
            a.type !== lt &&
            (f.delayLeave = (p, m, y) => {
              const x = fu(r, d);
              (x[String(d.key)] = d),
                (p[Ft] = () => {
                  m(), (p[Ft] = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = y);
            });
        }
        return i;
      };
    },
  },
  ud = ad;
function fu(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function ar(e, t, n, r) {
  const {
      appear: o,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: p,
      onLeaveCancelled: m,
      onBeforeAppear: y,
      onAppear: x,
      onAfterAppear: b,
      onAppearCancelled: v,
    } = t,
    _ = String(e.key),
    C = fu(n, e),
    O = (q, F) => {
      q && Je(q, r, 9, F);
    },
    B = (q, F) => {
      const K = F[1];
      O(q, F),
        re(q) ? q.every((J) => J.length <= 1) && K() : q.length <= 1 && K();
    },
    D = {
      mode: i,
      persisted: s,
      beforeEnter(q) {
        let F = l;
        if (!n.isMounted)
          if (o) F = y || l;
          else return;
        q[Ft] && q[Ft](!0);
        const K = C[_];
        K && Vt(e, K) && K.el[Ft] && K.el[Ft](), O(F, [q]);
      },
      enter(q) {
        let F = a,
          K = c,
          J = u;
        if (!n.isMounted)
          if (o) (F = x || a), (K = b || c), (J = v || u);
          else return;
        let A = !1;
        const X = (q[Or] = (V) => {
          A ||
            ((A = !0),
            V ? O(J, [q]) : O(K, [q]),
            D.delayedLeave && D.delayedLeave(),
            (q[Or] = void 0));
        });
        F ? B(F, [q, X]) : X();
      },
      leave(q, F) {
        const K = String(e.key);
        if ((q[Or] && q[Or](!0), n.isUnmounting)) return F();
        O(d, [q]);
        let J = !1;
        const A = (q[Ft] = (X) => {
          J ||
            ((J = !0),
            F(),
            X ? O(m, [q]) : O(p, [q]),
            (q[Ft] = void 0),
            C[K] === e && delete C[K]);
        });
        (C[K] = e), f ? B(f, [q, A]) : A();
      },
      clone(q) {
        return ar(q, t, n, r);
      },
    };
  return D;
}
function $o(e) {
  if (go(e)) return (e = Ot(e)), (e.children = null), e;
}
function Ks(e) {
  return go(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Pn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Pn(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function ss(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === ot
      ? (s.patchFlag & 128 && o++, (r = r.concat(ss(s.children, t, l))))
      : (t || s.type !== lt) && r.push(l != null ? Ot(s, { key: l }) : s);
  }
  if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function ls(e, t) {
  return oe(e) ? xe({ name: e.name }, t, { setup: e }) : e;
}
const Gn = (e) => !!e.type.__asyncLoader,
  go = (e) => e.type.__isKeepAlive,
  cd = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ee(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const v = t.default && t.default();
          return v && v.length === 1 ? v[0] : v;
        };
      const o = new Map(),
        i = new Set();
      let s = null;
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: c,
            um: u,
            o: { createElement: d },
          },
        } = r,
        f = d("div");
      (r.activate = (v, _, C, O, B) => {
        const D = v.component;
        c(v, _, C, 0, l),
          a(D.vnode, v, _, C, D, l, O, v.slotScopeIds, B),
          qe(() => {
            (D.isDeactivated = !1), D.a && Qn(D.a);
            const q = v.props && v.props.onVnodeMounted;
            q && Ke(q, D.parent, v);
          }, l);
      }),
        (r.deactivate = (v) => {
          const _ = v.component;
          c(v, f, null, 1, l),
            qe(() => {
              _.da && Qn(_.da);
              const C = v.props && v.props.onVnodeUnmounted;
              C && Ke(C, _.parent, v), (_.isDeactivated = !0);
            }, l);
        });
      function p(v) {
        Bo(v), u(v, n, l, !0);
      }
      function m(v) {
        o.forEach((_, C) => {
          const O = xi(_.type);
          O && (!v || !v(O)) && y(C);
        });
      }
      function y(v) {
        const _ = o.get(v);
        !s || !Vt(_, s) ? p(_) : s && Bo(s), o.delete(v), i.delete(v);
      }
      ue(
        () => [e.include, e.exclude],
        ([v, _]) => {
          v && m((C) => Hn(v, C)), _ && m((C) => !Hn(_, C));
        },
        { flush: "post", deep: !0 },
      );
      let x = null;
      const b = () => {
        x != null && o.set(x, Mo(n.subTree));
      };
      return (
        at(b),
        us(b),
        De(() => {
          o.forEach((v) => {
            const { subTree: _, suspense: C } = n,
              O = Mo(_);
            if (v.type === O.type && v.key === O.key) {
              Bo(O);
              const B = O.component.da;
              B && qe(B, C);
              return;
            }
            p(v);
          });
        }),
        () => {
          if (((x = null), !t.default)) return null;
          const v = t.default(),
            _ = v[0];
          if (v.length > 1) return (s = null), v;
          if (!Xr(_) || (!(_.shapeFlag & 4) && !(_.shapeFlag & 128)))
            return (s = null), _;
          let C = Mo(_);
          const O = C.type,
            B = xi(Gn(C) ? C.type.__asyncResolved || {} : O),
            { include: D, exclude: q, max: F } = e;
          if ((D && (!B || !Hn(D, B))) || (q && B && Hn(q, B)))
            return (s = C), _;
          const K = C.key == null ? O : C.key,
            J = o.get(K);
          return (
            C.el && ((C = Ot(C)), _.shapeFlag & 128 && (_.ssContent = C)),
            (x = K),
            J
              ? ((C.el = J.el),
                (C.component = J.component),
                C.transition && Pn(C, C.transition),
                (C.shapeFlag |= 512),
                i.delete(K),
                i.add(K))
              : (i.add(K),
                F && i.size > parseInt(F, 10) && y(i.values().next().value)),
            (C.shapeFlag |= 256),
            (s = C),
            su(_.type) ? _ : C
          );
        }
      );
    },
  },
  wy = cd;
function Hn(e, t) {
  return re(e)
    ? e.some((n) => Hn(n, t))
    : Se(e)
      ? e.split(",").includes(t)
      : of(e)
        ? e.test(t)
        : !1;
}
function du(e, t) {
  hu(e, "a", t);
}
function as(e, t) {
  hu(e, "da", t);
}
function hu(e, t, n = Ae) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((vo(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      go(o.parent.vnode) && fd(r, t, n, o), (o = o.parent);
  }
}
function fd(e, t, n, r) {
  const o = vo(t, e, r, !0);
  cs(() => {
    Ki(r[t], o);
  }, n);
}
function Bo(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Mo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function vo(e, t, n = Ae, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return;
          un();
          const l = gr(n),
            a = Je(t, n, e, s);
          return l(), cn(), a;
        });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const At =
    (e) =>
    (t, n = Ae) =>
      (!_o || e === "sp") && vo(e, (...r) => t(...r), n),
  dd = At("bm"),
  at = At("m"),
  hd = At("bu"),
  us = At("u"),
  De = At("bum"),
  cs = At("um"),
  pd = At("sp"),
  md = At("rtg"),
  gd = At("rtc");
function vd(e, t = Ae) {
  vo("ec", e, t);
}
function Sy(e, t, n, r) {
  let o;
  const i = n && n[r];
  if (re(e) || Se(e)) {
    o = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      o[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let s = 0; s < e; s++) o[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (ye(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (s, l) => t(s, l, void 0, i && i[l]));
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let l = 0, a = s.length; l < a; l++) {
        const c = s[l];
        o[l] = t(e[c], c, l, i && i[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
const vi = (e) => (e ? (Cu(e) ? wo(e) || e.proxy : vi(e.parent)) : null),
  Jn = xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vi(e.parent),
    $root: (e) => vi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => fs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), is(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = kt.bind(e.proxy)),
    $watch: (e) => ld.bind(e),
  }),
  No = (e, t) => e !== ve && !e.__isScriptSetup && de(e, t),
  yd = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== "$") {
        const p = s[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (No(r, t)) return (s[t] = 1), r[t];
          if (o !== ve && de(o, t)) return (s[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && de(c, t)) return (s[t] = 3), i[t];
          if (n !== ve && de(n, t)) return (s[t] = 4), n[t];
          yi && (s[t] = 0);
        }
      }
      const u = Jn[t];
      let d, f;
      if (u) return t === "$attrs" && Ie(e, "get", t), u(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== ve && de(n, t)) return (s[t] = 4), n[t];
      if (((f = a.config.globalProperties), de(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      return No(o, t)
        ? ((o[t] = n), !0)
        : r !== ve && de(r, t)
          ? ((r[t] = n), !0)
          : de(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: i,
        },
      },
      s,
    ) {
      let l;
      return (
        !!n[s] ||
        (e !== ve && de(e, s)) ||
        No(t, s) ||
        ((l = i[0]) && de(l, s)) ||
        de(r, s) ||
        de(Jn, s) ||
        de(o.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : de(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Qs(e) {
  return re(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let yi = !0;
function bd(e) {
  const t = fs(e),
    n = e.proxy,
    r = e.ctx;
  (yi = !1), t.beforeCreate && Gs(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: m,
    activated: y,
    deactivated: x,
    beforeDestroy: b,
    beforeUnmount: v,
    destroyed: _,
    unmounted: C,
    render: O,
    renderTracked: B,
    renderTriggered: D,
    errorCaptured: q,
    serverPrefetch: F,
    expose: K,
    inheritAttrs: J,
    components: A,
    directives: X,
    filters: V,
  } = t;
  if ((c && _d(c, r, null), s))
    for (const N in s) {
      const W = s[N];
      oe(W) && (r[N] = W.bind(n));
    }
  if (o) {
    const N = o.call(n, n);
    ye(N) && (e.data = it(N));
  }
  if (((yi = !0), i))
    for (const N in i) {
      const W = i[N],
        se = oe(W) ? W.bind(n, n) : oe(W.get) ? W.get.bind(n, n) : Ge,
        Re = !oe(W) && oe(W.set) ? W.set.bind(n) : Ge,
        Le = E({ get: se, set: Re });
      Object.defineProperty(r, N, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Pe) => (Le.value = Pe),
      });
    }
  if (l) for (const N in l) pu(l[N], r, n, N);
  if (a) {
    const N = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(N).forEach((W) => {
      Tn(W, N[W]);
    });
  }
  u && Gs(u, e, "c");
  function te(N, W) {
    re(W) ? W.forEach((se) => N(se.bind(n))) : W && N(W.bind(n));
  }
  if (
    (te(dd, d),
    te(at, f),
    te(hd, p),
    te(us, m),
    te(du, y),
    te(as, x),
    te(vd, q),
    te(gd, B),
    te(md, D),
    te(De, v),
    te(cs, C),
    te(pd, F),
    re(K))
  )
    if (K.length) {
      const N = e.exposed || (e.exposed = {});
      K.forEach((W) => {
        Object.defineProperty(N, W, {
          get: () => n[W],
          set: (se) => (n[W] = se),
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Ge && (e.render = O),
    J != null && (e.inheritAttrs = J),
    A && (e.components = A),
    X && (e.directives = X);
}
function _d(e, t, n = Ge) {
  re(e) && (e = bi(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ye(o)
      ? "default" in o
        ? (i = ze(o.from || r, o.default, !0))
        : (i = ze(o.from || r))
      : (i = ze(o)),
      Te(i)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (s) => (i.value = s),
          })
        : (t[r] = i);
  }
}
function Gs(e, t, n) {
  Je(re(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function pu(e, t, n, r) {
  const o = r.includes(".") ? au(n, r) : () => n[r];
  if (Se(e)) {
    const i = t[e];
    oe(i) && ue(o, i);
  } else if (oe(e)) ue(o, e.bind(n));
  else if (ye(e))
    if (re(e)) e.forEach((i) => pu(i, t, n, r));
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(i) && ue(o, i, e);
    }
}
function fs(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !n && !r
        ? (a = t)
        : ((a = {}),
          o.length && o.forEach((c) => Jr(a, c, s, !0)),
          Jr(a, t, s)),
    ye(t) && i.set(t, a),
    a
  );
}
function Jr(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Jr(e, i, n, !0), o && o.forEach((s) => Jr(e, s, n, !0));
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = wd[s] || (n && n[s]);
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const wd = {
  data: Js,
  props: Xs,
  emits: Xs,
  methods: Vn,
  computed: Vn,
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  components: Vn,
  directives: Vn,
  watch: Ed,
  provide: Js,
  inject: Sd,
};
function Js(e, t) {
  return t
    ? e
      ? function () {
          return xe(
            oe(e) ? e.call(this, this) : e,
            oe(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Sd(e, t) {
  return Vn(bi(e), bi(t));
}
function bi(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vn(e, t) {
  return e ? xe(Object.create(null), e, t) : t;
}
function Xs(e, t) {
  return e
    ? re(e) && re(t)
      ? [...new Set([...e, ...t])]
      : xe(Object.create(null), Qs(e), Qs(t ?? {}))
    : t;
}
function Ed(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xe(Object.create(null), e);
  for (const r in t) n[r] = je(e[r], t[r]);
  return n;
}
function mu() {
  return {
    app: null,
    config: {
      isNativeTag: nf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let xd = 0;
function Cd(e, t) {
  return function (r, o = null) {
    oe(r) || (r = xe({}, r)), o != null && !ye(o) && (o = null);
    const i = mu(),
      s = new WeakSet();
    let l = !1;
    const a = (i.app = {
      _uid: xd++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Xd,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          s.has(c) ||
            (c && oe(c.install)
              ? (s.add(c), c.install(a, ...u))
              : oe(c) && (s.add(c), c(a, ...u))),
          a
        );
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), a;
      },
      component(c, u) {
        return u ? ((i.components[c] = u), a) : i.components[c];
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), a) : i.directives[c];
      },
      mount(c, u, d) {
        if (!l) {
          const f = Z(r, o);
          return (
            (f.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            u && t ? t(f, c) : e(f, c, d),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            wo(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, u) {
        return (i.provides[c] = u), a;
      },
      runWithContext(c) {
        const u = Cn;
        Cn = a;
        try {
          return c();
        } finally {
          Cn = u;
        }
      },
    });
    return a;
  };
}
let Cn = null;
function Tn(e, t) {
  if (Ae) {
    let n = Ae.provides;
    const r = Ae.parent && Ae.parent.provides;
    r === n && (n = Ae.provides = Object.create(r)), (n[e] = t);
  }
}
function ze(e, t, n = !1) {
  const r = Ae || Ne;
  if (r || Cn) {
    const o = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Cn._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && oe(t) ? t.call(r && r.proxy) : t;
  }
}
function Td() {
  return !!(Ae || Ne || Cn);
}
function Rd(e, t, n, r = !1) {
  const o = {},
    i = {};
  Wr(i, bo, 1), (e.propsDefaults = Object.create(null)), gu(e, t, o, i);
  for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
  n ? (e.props = r ? o : Ka(o)) : e.type.props ? (e.props = o) : (e.props = i),
    (e.attrs = i);
}
function Pd(e, t, n, r) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    l = ce(o),
    [a] = e.propsOptions;
  let c = !1;
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (po(e.emitsOptions, f)) continue;
        const p = t[f];
        if (a)
          if (de(i, f)) p !== i[f] && ((i[f] = p), (c = !0));
          else {
            const m = yt(f);
            o[m] = _i(a, l, m, p, e, !1);
          }
        else p !== i[f] && ((i[f] = p), (c = !0));
      }
    }
  } else {
    gu(e, t, o, i) && (c = !0);
    let u;
    for (const d in l)
      (!t || (!de(t, d) && ((u = an(d)) === d || !de(t, u)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (o[d] = _i(a, l, d, void 0, e, !0))
          : delete o[d]);
    if (i !== l)
      for (const d in i) (!t || !de(t, d)) && (delete i[d], (c = !0));
  }
  c && Rt(e, "set", "$attrs");
}
function gu(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let s = !1,
    l;
  if (t)
    for (let a in t) {
      if (Kn(a)) continue;
      const c = t[a];
      let u;
      o && de(o, (u = yt(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : po(e.emitsOptions, a) ||
          ((!(a in r) || c !== r[a]) && ((r[a] = c), (s = !0)));
    }
  if (i) {
    const a = ce(n),
      c = l || ve;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = _i(o, a, d, c[d], e, !de(c, d));
    }
  }
  return s;
}
function _i(e, t, n, r, o, i) {
  const s = e[n];
  if (s != null) {
    const l = de(s, "default");
    if (l && r === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && oe(a)) {
        const { propsDefaults: c } = o;
        if (n in c) r = c[n];
        else {
          const u = gr(o);
          (r = c[n] = a.call(null, t)), u();
        }
      } else r = a;
    }
    s[0] &&
      (i && !l ? (r = !1) : s[1] && (r === "" || r === an(n)) && (r = !0));
  }
  return r;
}
function vu(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const i = e.props,
    s = {},
    l = [];
  let a = !1;
  if (!oe(e)) {
    const u = (d) => {
      a = !0;
      const [f, p] = vu(d, t, !0);
      xe(s, f), p && l.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a) return ye(e) && r.set(e, Sn), Sn;
  if (re(i))
    for (let u = 0; u < i.length; u++) {
      const d = yt(i[u]);
      Ys(d) && (s[d] = ve);
    }
  else if (i)
    for (const u in i) {
      const d = yt(u);
      if (Ys(d)) {
        const f = i[u],
          p = (s[d] = re(f) || oe(f) ? { type: f } : xe({}, f));
        if (p) {
          const m = tl(Boolean, p.type),
            y = tl(String, p.type);
          (p[0] = m > -1),
            (p[1] = y < 0 || m < y),
            (m > -1 || de(p, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return ye(e) && r.set(e, c), c;
}
function Ys(e) {
  return e[0] !== "$" && !Kn(e);
}
function Zs(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function el(e, t) {
  return Zs(e) === Zs(t);
}
function tl(e, t) {
  return re(t) ? t.findIndex((n) => el(n, e)) : oe(t) && el(t, e) ? 0 : -1;
}
const yu = (e) => e[0] === "_" || e === "$stable",
  ds = (e) => (re(e) ? e.map(mt) : [mt(e)]),
  kd = (e, t, n) => {
    if (t._n) return t;
    const r = ae((...o) => ds(t(...o)), n);
    return (r._c = !1), r;
  },
  bu = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (yu(o)) continue;
      const i = e[o];
      if (oe(i)) t[o] = kd(o, i, r);
      else if (i != null) {
        const s = ds(i);
        t[o] = () => s;
      }
    }
  },
  _u = (e, t) => {
    const n = ds(t);
    e.slots.default = () => n;
  },
  Od = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ce(t)), Wr(t, "_", n)) : bu(t, (e.slots = {}));
    } else (e.slots = {}), t && _u(e, t);
    Wr(e.slots, bo, 1);
  },
  Ad = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let i = !0,
      s = ve;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (xe(o, t), !n && l === 1 && delete o._)
        : ((i = !t.$stable), bu(t, o)),
        (s = t);
    } else t && (_u(e, t), (s = { default: 1 }));
    if (i) for (const l in o) !yu(l) && s[l] == null && delete o[l];
  };
function wi(e, t, n, r, o = !1) {
  if (re(e)) {
    e.forEach((f, p) => wi(f, t && (re(t) ? t[p] : t), n, r, o));
    return;
  }
  if (Gn(r) && !o) return;
  const i = r.shapeFlag & 4 ? wo(r.component) || r.component.proxy : r.el,
    s = o ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === ve ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (c != null &&
      c !== a &&
      (Se(c)
        ? ((u[c] = null), de(d, c) && (d[c] = null))
        : Te(c) && (c.value = null)),
    oe(a))
  )
    Kt(a, l, 12, [s, u]);
  else {
    const f = Se(a),
      p = Te(a);
    if (f || p) {
      const m = () => {
        if (e.f) {
          const y = f ? (de(d, a) ? d[a] : u[a]) : a.value;
          o
            ? re(y) && Ki(y, i)
            : re(y)
              ? y.includes(i) || y.push(i)
              : f
                ? ((u[a] = [i]), de(d, a) && (d[a] = u[a]))
                : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          f
            ? ((u[a] = s), de(d, a) && (d[a] = s))
            : p && ((a.value = s), e.k && (u[e.k] = s));
      };
      s ? ((m.id = -1), qe(m, n)) : m();
    }
  }
}
const qe = od;
function Ld(e) {
  return qd(e);
}
function qd(e, t) {
  const n = Oa();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: i,
      createElement: s,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: p = Ge,
      insertStaticContent: m,
    } = e,
    y = (
      h,
      g,
      w,
      k = null,
      T = null,
      z = null,
      H = void 0,
      M = null,
      I = !!g.dynamicChildren,
    ) => {
      if (h === g) return;
      h && !Vt(h, g) && ((k = P(h)), Pe(h, T, z, !0), (h = null)),
        g.patchFlag === -2 && ((I = !1), (g.dynamicChildren = null));
      const { type: $, ref: S, shapeFlag: j } = g;
      switch ($) {
        case yo:
          x(h, g, w, k);
          break;
        case lt:
          b(h, g, w, k);
          break;
        case jo:
          h == null && v(g, w, k, H);
          break;
        case ot:
          A(h, g, w, k, T, z, H, M, I);
          break;
        default:
          j & 1
            ? O(h, g, w, k, T, z, H, M, I)
            : j & 6
              ? X(h, g, w, k, T, z, H, M, I)
              : (j & 64 || j & 128) && $.process(h, g, w, k, T, z, H, M, I, Y);
      }
      S != null && T && wi(S, h && h.ref, z, g || h, !g);
    },
    x = (h, g, w, k) => {
      if (h == null) r((g.el = l(g.children)), w, k);
      else {
        const T = (g.el = h.el);
        g.children !== h.children && c(T, g.children);
      }
    },
    b = (h, g, w, k) => {
      h == null ? r((g.el = a(g.children || "")), w, k) : (g.el = h.el);
    },
    v = (h, g, w, k) => {
      [h.el, h.anchor] = m(h.children, g, w, k, h.el, h.anchor);
    },
    _ = ({ el: h, anchor: g }, w, k) => {
      let T;
      for (; h && h !== g; ) (T = f(h)), r(h, w, k), (h = T);
      r(g, w, k);
    },
    C = ({ el: h, anchor: g }) => {
      let w;
      for (; h && h !== g; ) (w = f(h)), o(h), (h = w);
      o(g);
    },
    O = (h, g, w, k, T, z, H, M, I) => {
      g.type === "svg" ? (H = "svg") : g.type === "math" && (H = "mathml"),
        h == null ? B(g, w, k, T, z, H, M, I) : F(h, g, T, z, H, M, I);
    },
    B = (h, g, w, k, T, z, H, M) => {
      let I, $;
      const { props: S, shapeFlag: j, transition: Q, dirs: ne } = h;
      if (
        ((I = h.el = s(h.type, z, S && S.is, S)),
        j & 8
          ? u(I, h.children)
          : j & 16 && q(h.children, I, null, k, T, zo(h, z), H, M),
        ne && Xt(h, null, k, "created"),
        D(I, h, h.scopeId, H, k),
        S)
      ) {
        for (const ge in S)
          ge !== "value" &&
            !Kn(ge) &&
            i(I, ge, null, S[ge], z, h.children, k, T, ke);
        "value" in S && i(I, "value", null, S.value, z),
          ($ = S.onVnodeBeforeMount) && Ke($, k, h);
      }
      ne && Xt(h, null, k, "beforeMount");
      const le = $d(T, Q);
      le && Q.beforeEnter(I),
        r(I, g, w),
        (($ = S && S.onVnodeMounted) || le || ne) &&
          qe(() => {
            $ && Ke($, k, h), le && Q.enter(I), ne && Xt(h, null, k, "mounted");
          }, T);
    },
    D = (h, g, w, k, T) => {
      if ((w && p(h, w), k)) for (let z = 0; z < k.length; z++) p(h, k[z]);
      if (T) {
        let z = T.subTree;
        if (g === z) {
          const H = T.vnode;
          D(h, H, H.scopeId, H.slotScopeIds, T.parent);
        }
      }
    },
    q = (h, g, w, k, T, z, H, M, I = 0) => {
      for (let $ = I; $ < h.length; $++) {
        const S = (h[$] = M ? It(h[$]) : mt(h[$]));
        y(null, S, g, w, k, T, z, H, M);
      }
    },
    F = (h, g, w, k, T, z, H) => {
      const M = (g.el = h.el);
      let { patchFlag: I, dynamicChildren: $, dirs: S } = g;
      I |= h.patchFlag & 16;
      const j = h.props || ve,
        Q = g.props || ve;
      let ne;
      if (
        (w && Yt(w, !1),
        (ne = Q.onVnodeBeforeUpdate) && Ke(ne, w, g, h),
        S && Xt(g, h, w, "beforeUpdate"),
        w && Yt(w, !0),
        $
          ? K(h.dynamicChildren, $, M, w, k, zo(g, T), z)
          : H || W(h, g, M, null, w, k, zo(g, T), z, !1),
        I > 0)
      ) {
        if (I & 16) J(M, g, j, Q, w, k, T);
        else if (
          (I & 2 && j.class !== Q.class && i(M, "class", null, Q.class, T),
          I & 4 && i(M, "style", j.style, Q.style, T),
          I & 8)
        ) {
          const le = g.dynamicProps;
          for (let ge = 0; ge < le.length; ge++) {
            const _e = le[ge],
              Oe = j[_e],
              et = Q[_e];
            (et !== Oe || _e === "value") &&
              i(M, _e, Oe, et, T, h.children, w, k, ke);
          }
        }
        I & 1 && h.children !== g.children && u(M, g.children);
      } else !H && $ == null && J(M, g, j, Q, w, k, T);
      ((ne = Q.onVnodeUpdated) || S) &&
        qe(() => {
          ne && Ke(ne, w, g, h), S && Xt(g, h, w, "updated");
        }, k);
    },
    K = (h, g, w, k, T, z, H) => {
      for (let M = 0; M < g.length; M++) {
        const I = h[M],
          $ = g[M],
          S =
            I.el && (I.type === ot || !Vt(I, $) || I.shapeFlag & 70)
              ? d(I.el)
              : w;
        y(I, $, S, null, k, T, z, H, !0);
      }
    },
    J = (h, g, w, k, T, z, H) => {
      if (w !== k) {
        if (w !== ve)
          for (const M in w)
            !Kn(M) && !(M in k) && i(h, M, w[M], null, H, g.children, T, z, ke);
        for (const M in k) {
          if (Kn(M)) continue;
          const I = k[M],
            $ = w[M];
          I !== $ && M !== "value" && i(h, M, $, I, H, g.children, T, z, ke);
        }
        "value" in k && i(h, "value", w.value, k.value, H);
      }
    },
    A = (h, g, w, k, T, z, H, M, I) => {
      const $ = (g.el = h ? h.el : l("")),
        S = (g.anchor = h ? h.anchor : l(""));
      let { patchFlag: j, dynamicChildren: Q, slotScopeIds: ne } = g;
      ne && (M = M ? M.concat(ne) : ne),
        h == null
          ? (r($, w, k), r(S, w, k), q(g.children || [], w, S, T, z, H, M, I))
          : j > 0 && j & 64 && Q && h.dynamicChildren
            ? (K(h.dynamicChildren, Q, w, T, z, H, M),
              (g.key != null || (T && g === T.subTree)) && hs(h, g, !0))
            : W(h, g, w, S, T, z, H, M, I);
    },
    X = (h, g, w, k, T, z, H, M, I) => {
      (g.slotScopeIds = M),
        h == null
          ? g.shapeFlag & 512
            ? T.ctx.activate(g, w, k, H, I)
            : V(g, w, k, T, z, H, I)
          : ie(h, g, I);
    },
    V = (h, g, w, k, T, z, H) => {
      const M = (h.component = Ud(h, k, T));
      if ((go(h) && (M.ctx.renderer = Y), Wd(M), M.asyncDep)) {
        if ((T && T.registerDep(M, te), !h.el)) {
          const I = (M.subTree = Z(lt));
          b(null, I, g, w);
        }
      } else te(M, h, g, w, T, z, H);
    },
    ie = (h, g, w) => {
      const k = (g.component = h.component);
      if (ed(h, g, w))
        if (k.asyncDep && !k.asyncResolved) {
          N(k, g, w);
          return;
        } else (k.next = g), Qf(k.update), (k.effect.dirty = !0), k.update();
      else (g.el = h.el), (k.vnode = g);
    },
    te = (h, g, w, k, T, z, H) => {
      const M = () => {
          if (h.isMounted) {
            let { next: S, bu: j, u: Q, parent: ne, vnode: le } = h;
            {
              const dn = wu(h);
              if (dn) {
                S && ((S.el = le.el), N(h, S, H)),
                  dn.asyncDep.then(() => {
                    h.isUnmounted || M();
                  });
                return;
              }
            }
            let ge = S,
              _e;
            Yt(h, !1),
              S ? ((S.el = le.el), N(h, S, H)) : (S = le),
              j && Qn(j),
              (_e = S.props && S.props.onVnodeBeforeUpdate) &&
                Ke(_e, ne, S, le),
              Yt(h, !0);
            const Oe = qo(h),
              et = h.subTree;
            (h.subTree = Oe),
              y(et, Oe, d(et.el), P(et), h, T, z),
              (S.el = Oe.el),
              ge === null && td(h, Oe.el),
              Q && qe(Q, T),
              (_e = S.props && S.props.onVnodeUpdated) &&
                qe(() => Ke(_e, ne, S, le), T);
          } else {
            let S;
            const { el: j, props: Q } = g,
              { bm: ne, m: le, parent: ge } = h,
              _e = Gn(g);
            if (
              (Yt(h, !1),
              ne && Qn(ne),
              !_e && (S = Q && Q.onVnodeBeforeMount) && Ke(S, ge, g),
              Yt(h, !0),
              j && me)
            ) {
              const Oe = () => {
                (h.subTree = qo(h)), me(j, h.subTree, h, T, null);
              };
              _e
                ? g.type.__asyncLoader().then(() => !h.isUnmounted && Oe())
                : Oe();
            } else {
              const Oe = (h.subTree = qo(h));
              y(null, Oe, w, k, h, T, z), (g.el = Oe.el);
            }
            if ((le && qe(le, T), !_e && (S = Q && Q.onVnodeMounted))) {
              const Oe = g;
              qe(() => Ke(S, ge, Oe), T);
            }
            (g.shapeFlag & 256 ||
              (ge && Gn(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
              h.a &&
              qe(h.a, T),
              (h.isMounted = !0),
              (g = w = k = null);
          }
        },
        I = (h.effect = new Xi(M, Ge, () => is($), h.scope)),
        $ = (h.update = () => {
          I.dirty && I.run();
        });
      ($.id = h.uid), Yt(h, !0), $();
    },
    N = (h, g, w) => {
      g.component = h;
      const k = h.vnode.props;
      (h.vnode = g),
        (h.next = null),
        Pd(h, g.props, k, w),
        Ad(h, g.children, w),
        un(),
        Vs(h),
        cn();
    },
    W = (h, g, w, k, T, z, H, M, I = !1) => {
      const $ = h && h.children,
        S = h ? h.shapeFlag : 0,
        j = g.children,
        { patchFlag: Q, shapeFlag: ne } = g;
      if (Q > 0) {
        if (Q & 128) {
          Re($, j, w, k, T, z, H, M, I);
          return;
        } else if (Q & 256) {
          se($, j, w, k, T, z, H, M, I);
          return;
        }
      }
      ne & 8
        ? (S & 16 && ke($, T, z), j !== $ && u(w, j))
        : S & 16
          ? ne & 16
            ? Re($, j, w, k, T, z, H, M, I)
            : ke($, T, z, !0)
          : (S & 8 && u(w, ""), ne & 16 && q(j, w, k, T, z, H, M, I));
    },
    se = (h, g, w, k, T, z, H, M, I) => {
      (h = h || Sn), (g = g || Sn);
      const $ = h.length,
        S = g.length,
        j = Math.min($, S);
      let Q;
      for (Q = 0; Q < j; Q++) {
        const ne = (g[Q] = I ? It(g[Q]) : mt(g[Q]));
        y(h[Q], ne, w, null, T, z, H, M, I);
      }
      $ > S ? ke(h, T, z, !0, !1, j) : q(g, w, k, T, z, H, M, I, j);
    },
    Re = (h, g, w, k, T, z, H, M, I) => {
      let $ = 0;
      const S = g.length;
      let j = h.length - 1,
        Q = S - 1;
      for (; $ <= j && $ <= Q; ) {
        const ne = h[$],
          le = (g[$] = I ? It(g[$]) : mt(g[$]));
        if (Vt(ne, le)) y(ne, le, w, null, T, z, H, M, I);
        else break;
        $++;
      }
      for (; $ <= j && $ <= Q; ) {
        const ne = h[j],
          le = (g[Q] = I ? It(g[Q]) : mt(g[Q]));
        if (Vt(ne, le)) y(ne, le, w, null, T, z, H, M, I);
        else break;
        j--, Q--;
      }
      if ($ > j) {
        if ($ <= Q) {
          const ne = Q + 1,
            le = ne < S ? g[ne].el : k;
          for (; $ <= Q; )
            y(null, (g[$] = I ? It(g[$]) : mt(g[$])), w, le, T, z, H, M, I),
              $++;
        }
      } else if ($ > Q) for (; $ <= j; ) Pe(h[$], T, z, !0), $++;
      else {
        const ne = $,
          le = $,
          ge = new Map();
        for ($ = le; $ <= Q; $++) {
          const He = (g[$] = I ? It(g[$]) : mt(g[$]));
          He.key != null && ge.set(He.key, $);
        }
        let _e,
          Oe = 0;
        const et = Q - le + 1;
        let dn = !1,
          Ls = 0;
        const Mn = new Array(et);
        for ($ = 0; $ < et; $++) Mn[$] = 0;
        for ($ = ne; $ <= j; $++) {
          const He = h[$];
          if (Oe >= et) {
            Pe(He, T, z, !0);
            continue;
          }
          let ht;
          if (He.key != null) ht = ge.get(He.key);
          else
            for (_e = le; _e <= Q; _e++)
              if (Mn[_e - le] === 0 && Vt(He, g[_e])) {
                ht = _e;
                break;
              }
          ht === void 0
            ? Pe(He, T, z, !0)
            : ((Mn[ht - le] = $ + 1),
              ht >= Ls ? (Ls = ht) : (dn = !0),
              y(He, g[ht], w, null, T, z, H, M, I),
              Oe++);
        }
        const qs = dn ? Bd(Mn) : Sn;
        for (_e = qs.length - 1, $ = et - 1; $ >= 0; $--) {
          const He = le + $,
            ht = g[He],
            $s = He + 1 < S ? g[He + 1].el : k;
          Mn[$] === 0
            ? y(null, ht, w, $s, T, z, H, M, I)
            : dn && (_e < 0 || $ !== qs[_e] ? Le(ht, w, $s, 2) : _e--);
        }
      }
    },
    Le = (h, g, w, k, T = null) => {
      const { el: z, type: H, transition: M, children: I, shapeFlag: $ } = h;
      if ($ & 6) {
        Le(h.component.subTree, g, w, k);
        return;
      }
      if ($ & 128) {
        h.suspense.move(g, w, k);
        return;
      }
      if ($ & 64) {
        H.move(h, g, w, Y);
        return;
      }
      if (H === ot) {
        r(z, g, w);
        for (let j = 0; j < I.length; j++) Le(I[j], g, w, k);
        r(h.anchor, g, w);
        return;
      }
      if (H === jo) {
        _(h, g, w);
        return;
      }
      if (k !== 2 && $ & 1 && M)
        if (k === 0) M.beforeEnter(z), r(z, g, w), qe(() => M.enter(z), T);
        else {
          const { leave: j, delayLeave: Q, afterLeave: ne } = M,
            le = () => r(z, g, w),
            ge = () => {
              j(z, () => {
                le(), ne && ne();
              });
            };
          Q ? Q(z, le, ge) : ge();
        }
      else r(z, g, w);
    },
    Pe = (h, g, w, k = !1, T = !1) => {
      const {
        type: z,
        props: H,
        ref: M,
        children: I,
        dynamicChildren: $,
        shapeFlag: S,
        patchFlag: j,
        dirs: Q,
      } = h;
      if ((M != null && wi(M, null, w, h, !0), S & 256)) {
        g.ctx.deactivate(h);
        return;
      }
      const ne = S & 1 && Q,
        le = !Gn(h);
      let ge;
      if ((le && (ge = H && H.onVnodeBeforeUnmount) && Ke(ge, g, h), S & 6))
        fn(h.component, w, k);
      else {
        if (S & 128) {
          h.suspense.unmount(w, k);
          return;
        }
        ne && Xt(h, null, g, "beforeUnmount"),
          S & 64
            ? h.type.remove(h, g, w, T, Y, k)
            : $ && (z !== ot || (j > 0 && j & 64))
              ? ke($, g, w, !1, !0)
              : ((z === ot && j & 384) || (!T && S & 16)) && ke(I, g, w),
          k && Ze(h);
      }
      ((le && (ge = H && H.onVnodeUnmounted)) || ne) &&
        qe(() => {
          ge && Ke(ge, g, h), ne && Xt(h, null, g, "unmounted");
        }, w);
    },
    Ze = (h) => {
      const { type: g, el: w, anchor: k, transition: T } = h;
      if (g === ot) {
        dt(w, k);
        return;
      }
      if (g === jo) {
        C(h);
        return;
      }
      const z = () => {
        o(w), T && !T.persisted && T.afterLeave && T.afterLeave();
      };
      if (h.shapeFlag & 1 && T && !T.persisted) {
        const { leave: H, delayLeave: M } = T,
          I = () => H(w, z);
        M ? M(h.el, z, I) : I();
      } else z();
    },
    dt = (h, g) => {
      let w;
      for (; h !== g; ) (w = f(h)), o(h), (h = w);
      o(g);
    },
    fn = (h, g, w) => {
      const { bum: k, scope: T, update: z, subTree: H, um: M } = h;
      k && Qn(k),
        T.stop(),
        z && ((z.active = !1), Pe(H, h, g, w)),
        M && qe(M, g),
        qe(() => {
          h.isUnmounted = !0;
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve());
    },
    ke = (h, g, w, k = !1, T = !1, z = 0) => {
      for (let H = z; H < h.length; H++) Pe(h[H], g, w, k, T);
    },
    P = (h) =>
      h.shapeFlag & 6
        ? P(h.component.subTree)
        : h.shapeFlag & 128
          ? h.suspense.next()
          : f(h.anchor || h.el);
  let G = !1;
  const U = (h, g, w) => {
      h == null
        ? g._vnode && Pe(g._vnode, null, null, !0)
        : y(g._vnode || null, h, g, null, null, null, w),
        G || ((G = !0), Vs(), nu(), (G = !1)),
        (g._vnode = h);
    },
    Y = { p: y, um: Pe, m: Le, r: Ze, mt: V, mc: q, pc: W, pbc: K, n: P, o: e };
  let he, me;
  return (
    t && ([he, me] = t(Y)), { render: U, hydrate: he, createApp: Cd(U, he) }
  );
}
function zo({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Yt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function $d(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function hs(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (re(r) && re(o))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let l = o[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[i] = It(o[i])), (l.el = s.el)),
        n || hs(s, l)),
        l.type === yo && (l.el = s.el);
    }
}
function Bd(e) {
  const t = e.slice(),
    n = [0];
  let r, o, i, s, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        (l = (i + s) >> 1), e[n[l]] < c ? (i = l + 1) : (s = l);
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
  return n;
}
function wu(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : wu(t);
}
const Md = (e) => e.__isTeleport,
  Xn = (e) => e && (e.disabled || e.disabled === ""),
  nl = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  rl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Si = (e, t) => {
    const n = e && e.to;
    return Se(n) ? (t ? t(n) : null) : n;
  },
  Nd = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, i, s, l, a, c) {
      const {
          mc: u,
          pc: d,
          pbc: f,
          o: { insert: p, querySelector: m, createText: y, createComment: x },
        } = c,
        b = Xn(t.props);
      let { shapeFlag: v, children: _, dynamicChildren: C } = t;
      if (e == null) {
        const O = (t.el = y("")),
          B = (t.anchor = y(""));
        p(O, n, r), p(B, n, r);
        const D = (t.target = Si(t.props, m)),
          q = (t.targetAnchor = y(""));
        D &&
          (p(q, D),
          s === "svg" || nl(D)
            ? (s = "svg")
            : (s === "mathml" || rl(D)) && (s = "mathml"));
        const F = (K, J) => {
          v & 16 && u(_, K, J, o, i, s, l, a);
        };
        b ? F(n, B) : D && F(D, q);
      } else {
        t.el = e.el;
        const O = (t.anchor = e.anchor),
          B = (t.target = e.target),
          D = (t.targetAnchor = e.targetAnchor),
          q = Xn(e.props),
          F = q ? n : B,
          K = q ? O : D;
        if (
          (s === "svg" || nl(B)
            ? (s = "svg")
            : (s === "mathml" || rl(B)) && (s = "mathml"),
          C
            ? (f(e.dynamicChildren, C, F, o, i, s, l), hs(e, t, !0))
            : a || d(e, t, F, K, o, i, s, l, !1),
          b)
        )
          q
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Ar(t, n, O, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const J = (t.target = Si(t.props, m));
          J && Ar(t, J, null, c, 0);
        } else q && Ar(t, B, D, c, 1);
      }
      Su(t);
    },
    remove(e, t, n, r, { um: o, o: { remove: i } }, s) {
      const {
        shapeFlag: l,
        children: a,
        anchor: c,
        targetAnchor: u,
        target: d,
        props: f,
      } = e;
      if ((d && i(u), s && i(c), l & 16)) {
        const p = s || !Xn(f);
        for (let m = 0; m < a.length; m++) {
          const y = a[m];
          o(y, t, n, p, !!y.dynamicChildren);
        }
      }
    },
    move: Ar,
    hydrate: zd,
  };
function Ar(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: a, children: c, props: u } = e,
    d = i === 2;
  if ((d && r(s, t, n), (!d || Xn(u)) && a & 16))
    for (let f = 0; f < c.length; f++) o(c[f], t, n, 2);
  d && r(l, t, n);
}
function zd(
  e,
  t,
  n,
  r,
  o,
  i,
  { o: { nextSibling: s, parentNode: l, querySelector: a } },
  c,
) {
  const u = (t.target = Si(t.props, a));
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Xn(t.props))
        (t.anchor = c(s(e), t, l(e), n, r, o, i)), (t.targetAnchor = d);
      else {
        t.anchor = s(e);
        let f = d;
        for (; f; )
          if (
            ((f = s(f)), f && f.nodeType === 8 && f.data === "teleport anchor")
          ) {
            (t.targetAnchor = f),
              (u._lpa = t.targetAnchor && s(t.targetAnchor));
            break;
          }
        c(d, t, u, n, r, o, i);
      }
    Su(t);
  }
  return t.anchor && s(t.anchor);
}
const Ey = Nd;
function Su(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const ot = Symbol.for("v-fgt"),
  yo = Symbol.for("v-txt"),
  lt = Symbol.for("v-cmt"),
  jo = Symbol.for("v-stc"),
  Yn = [];
let st = null;
function St(e = !1) {
  Yn.push((st = e ? null : []));
}
function jd() {
  Yn.pop(), (st = Yn[Yn.length - 1] || null);
}
let ur = 1;
function ol(e) {
  ur += e;
}
function Eu(e) {
  return (
    (e.dynamicChildren = ur > 0 ? st || Sn : null),
    jd(),
    ur > 0 && st && st.push(e),
    e
  );
}
function xy(e, t, n, r, o, i) {
  return Eu(_n(e, t, n, r, o, i, !0));
}
function Et(e, t, n, r, o) {
  return Eu(Z(e, t, n, r, o, !0));
}
function Xr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bo = "__vInternal",
  xu = ({ key: e }) => e ?? null,
  Nr = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Se(e) || Te(e) || oe(e)
        ? { i: Ne, r: e, k: t, f: !!n }
        : e
      : null
  );
function _n(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  i = e === ot ? 0 : 1,
  s = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xu(t),
    ref: t && Nr(t),
    scopeId: mo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne,
  };
  return (
    l
      ? (ps(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Se(n) ? 8 : 16),
    ur > 0 &&
      !s &&
      st &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      st.push(a),
    a
  );
}
const Z = Fd;
function Fd(e, t = null, n = null, r = 0, o = null, i = !1) {
  if (((!e || e === nd) && (e = lt), Xr(e))) {
    const l = Ot(e, t, !0);
    return (
      n && ps(l, n),
      ur > 0 &&
        !i &&
        st &&
        (l.shapeFlag & 6 ? (st[st.indexOf(e)] = l) : st.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Jd(e) && (e = e.__vccOpts), t)) {
    t = Id(t);
    let { class: l, style: a } = t;
    l && !Se(l) && (t.class = Ji(l)),
      ye(a) && (Ga(a) && !re(a) && (a = xe({}, a)), (t.style = Gi(a)));
  }
  const s = Se(e) ? 1 : su(e) ? 128 : Md(e) ? 64 : ye(e) ? 4 : oe(e) ? 2 : 0;
  return _n(e, t, n, r, o, s, i, !0);
}
function Id(e) {
  return e ? (Ga(e) || bo in e ? xe({}, e) : e) : null;
}
function Ot(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = e,
    l = t ? Dd(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && xu(l),
    ref:
      t && t.ref
        ? n && o
          ? re(o)
            ? o.concat(Nr(t))
            : [o, Nr(t)]
          : Nr(t)
        : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ot ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Mt(e = " ", t = 0) {
  return Z(yo, null, e, t);
}
function Cy(e = "", t = !1) {
  return t ? (St(), Et(lt, null, e)) : Z(lt, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean"
    ? Z(lt)
    : re(e)
      ? Z(ot, null, e.slice())
      : typeof e == "object"
        ? It(e)
        : Z(yo, null, String(e));
}
function It(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ot(e);
}
function ps(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (re(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ps(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(bo in t)
        ? (t._ctx = Ne)
        : o === 3 &&
          Ne &&
          (Ne.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    oe(t)
      ? ((t = { default: t, _ctx: Ne }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Mt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Dd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ji([t.class, r.class]));
      else if (o === "style") t.style = Gi([t.style, r.style]);
      else if (ao(o)) {
        const i = t[o],
          s = r[o];
        s &&
          i !== s &&
          !(re(i) && i.includes(s)) &&
          (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ke(e, t, n, r = null) {
  Je(e, t, 7, [n, r]);
}
const Hd = mu();
let Vd = 0;
function Ud(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Hd,
    i = {
      uid: Vd++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new qa(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vu(r, o),
      emitsOptions: ou(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ve,
      inheritAttrs: r.inheritAttrs,
      ctx: ve,
      data: ve,
      props: ve,
      attrs: ve,
      slots: ve,
      refs: ve,
      setupState: ve,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Xf.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Ae = null;
const Ee = () => Ae || Ne;
let Yr, Ei;
{
  const e = Oa(),
    t = (n, r) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(r),
        (i) => {
          o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
        }
      );
    };
  (Yr = t("__VUE_INSTANCE_SETTERS__", (n) => (Ae = n))),
    (Ei = t("__VUE_SSR_SETTERS__", (n) => (_o = n)));
}
const gr = (e) => {
    const t = Ae;
    return (
      Yr(e),
      e.scope.on(),
      () => {
        e.scope.off(), Yr(t);
      }
    );
  },
  il = () => {
    Ae && Ae.scope.off(), Yr(null);
  };
function Cu(e) {
  return e.vnode.shapeFlag & 4;
}
let _o = !1;
function Wd(e, t = !1) {
  t && Ei(t);
  const { props: n, children: r } = e.vnode,
    o = Cu(e);
  Rd(e, n, o, t), Od(e, r);
  const i = o ? Kd(e, t) : void 0;
  return t && Ei(!1), i;
}
function Kd(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Jt(new Proxy(e.ctx, yd)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Gd(e) : null),
      i = gr(e);
    un();
    const s = Kt(r, e, 0, [e.props, o]);
    if ((cn(), i(), Ra(s))) {
      if ((s.then(il, il), t))
        return s
          .then((l) => {
            sl(e, l, t);
          })
          .catch((l) => {
            ho(l, e, 0);
          });
      e.asyncDep = s;
    } else sl(e, s, t);
  } else Tu(e, t);
}
function sl(e, t, n) {
  oe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ye(t) && (e.setupState = Za(t)),
    Tu(e, n);
}
let ll;
function Tu(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ll && !r.render) {
      const o = r.template || fs(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          c = xe(xe({ isCustomElement: i, delimiters: l }, s), a);
        r.render = ll(o, c);
      }
    }
    e.render = r.render || Ge;
  }
  {
    const o = gr(e);
    un();
    try {
      bd(e);
    } finally {
      cn(), o();
    }
  }
}
function Qd(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Ie(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Gd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Qd(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function wo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Za(Jt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Jn) return Jn[n](e);
        },
        has(t, n) {
          return n in t || n in Jn;
        },
      }))
    );
}
function xi(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Jd(e) {
  return oe(e) && "__vccOpts" in e;
}
const E = (e, t) => jf(e, t, _o);
function L(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ye(t) && !re(t)
      ? Xr(t)
        ? Z(e, null, [t])
        : Z(e, t)
      : Z(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Xr(n) && (n = [n]),
      Z(e, t, n));
}
const Xd = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Yd = "http://www.w3.org/2000/svg",
  Zd = "http://www.w3.org/1998/Math/MathML",
  Dt = typeof document < "u" ? document : null,
  al = Dt && Dt.createElement("template"),
  eh = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o =
        t === "svg"
          ? Dt.createElementNS(Yd, e)
          : t === "mathml"
            ? Dt.createElementNS(Zd, e)
            : Dt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => Dt.createTextNode(e),
    createComment: (e) => Dt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Dt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        al.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e;
        const l = al.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  qt = "transition",
  Nn = "animation",
  kn = Symbol("_vtc"),
  vr = (e, { slots: t }) => L(ud, Pu(e), t);
vr.displayName = "Transition";
const Ru = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  th = (vr.props = xe({}, cu, Ru)),
  Zt = (e, t = []) => {
    re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  ul = (e) => (e ? (re(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Pu(e) {
  const t = {};
  for (const A in e) A in Ru || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: c = s,
      appearToClass: u = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    m = nh(o),
    y = m && m[0],
    x = m && m[1],
    {
      onBeforeEnter: b,
      onEnter: v,
      onEnterCancelled: _,
      onLeave: C,
      onLeaveCancelled: O,
      onBeforeAppear: B = b,
      onAppear: D = v,
      onAppearCancelled: q = _,
    } = t,
    F = (A, X, V) => {
      Nt(A, X ? u : l), Nt(A, X ? c : s), V && V();
    },
    K = (A, X) => {
      (A._isLeaving = !1), Nt(A, d), Nt(A, p), Nt(A, f), X && X();
    },
    J = (A) => (X, V) => {
      const ie = A ? D : v,
        te = () => F(X, A, V);
      Zt(ie, [X, te]),
        cl(() => {
          Nt(X, A ? a : i), wt(X, A ? u : l), ul(ie) || fl(X, r, y, te);
        });
    };
  return xe(t, {
    onBeforeEnter(A) {
      Zt(b, [A]), wt(A, i), wt(A, s);
    },
    onBeforeAppear(A) {
      Zt(B, [A]), wt(A, a), wt(A, c);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(A, X) {
      A._isLeaving = !0;
      const V = () => K(A, X);
      wt(A, d),
        Ou(),
        wt(A, f),
        cl(() => {
          A._isLeaving && (Nt(A, d), wt(A, p), ul(C) || fl(A, r, x, V));
        }),
        Zt(C, [A, V]);
    },
    onEnterCancelled(A) {
      F(A, !1), Zt(_, [A]);
    },
    onAppearCancelled(A) {
      F(A, !0), Zt(q, [A]);
    },
    onLeaveCancelled(A) {
      K(A), Zt(O, [A]);
    },
  });
}
function nh(e) {
  if (e == null) return null;
  if (ye(e)) return [Fo(e.enter), Fo(e.leave)];
  {
    const t = Fo(e);
    return [t, t];
  }
}
function Fo(e) {
  return cf(e);
}
function wt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[kn] || (e[kn] = new Set())).add(t);
}
function Nt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[kn];
  n && (n.delete(t), n.size || (e[kn] = void 0));
}
function cl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let rh = 0;
function fl(e, t, n, r) {
  const o = (e._endId = ++rh),
    i = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(i, n);
  const { type: s, timeout: l, propCount: a } = ku(e, t);
  if (!s) return r();
  const c = s + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), i();
    },
    f = (p) => {
      p.target === e && ++u >= a && d();
    };
  setTimeout(() => {
    u < a && d();
  }, l + 1),
    e.addEventListener(c, f);
}
function ku(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || "").split(", "),
    o = r(`${qt}Delay`),
    i = r(`${qt}Duration`),
    s = dl(o, i),
    l = r(`${Nn}Delay`),
    a = r(`${Nn}Duration`),
    c = dl(l, a);
  let u = null,
    d = 0,
    f = 0;
  t === qt
    ? s > 0 && ((u = qt), (d = s), (f = i.length))
    : t === Nn
      ? c > 0 && ((u = Nn), (d = c), (f = a.length))
      : ((d = Math.max(s, c)),
        (u = d > 0 ? (s > c ? qt : Nn) : null),
        (f = u ? (u === qt ? i.length : a.length) : 0));
  const p =
    u === qt && /\b(transform|all)(,|$)/.test(r(`${qt}Property`).toString());
  return { type: u, timeout: d, propCount: f, hasTransform: p };
}
function dl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => hl(n) + hl(e[r])));
}
function hl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ou() {
  return document.body.offsetHeight;
}
function oh(e, t, n) {
  const r = e[kn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const Zr = Symbol("_vod"),
  Au = Symbol("_vsh"),
  Ty = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Zr] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : zn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), zn(e, !0), r.enter(e))
            : r.leave(e, () => {
                zn(e, !1);
              })
          : zn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      zn(e, t);
    },
  };
function zn(e, t) {
  (e.style.display = t ? e[Zr] : "none"), (e[Au] = !t);
}
const ih = Symbol(""),
  sh = /(^|;)\s*display\s*:/;
function lh(e, t, n) {
  const r = e.style,
    o = Se(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Se(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && zr(r, l, "");
        }
      else for (const s in t) n[s] == null && zr(r, s, "");
    for (const s in n) s === "display" && (i = !0), zr(r, s, n[s]);
  } else if (o) {
    if (t !== n) {
      const s = r[ih];
      s && (n += ";" + s), (r.cssText = n), (i = sh.test(n));
    }
  } else t && e.removeAttribute("style");
  Zr in e && ((e[Zr] = i ? r.display : ""), e[Au] && (r.display = "none"));
}
const pl = /\s*!important$/;
function zr(e, t, n) {
  if (re(n)) n.forEach((r) => zr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = ah(e, t);
    pl.test(n)
      ? e.setProperty(an(r), n.replace(pl, ""), "important")
      : (e[r] = n);
  }
}
const ml = ["Webkit", "Moz", "ms"],
  Io = {};
function ah(e, t) {
  const n = Io[t];
  if (n) return n;
  let r = yt(t);
  if (r !== "filter" && r in e) return (Io[t] = r);
  r = co(r);
  for (let o = 0; o < ml.length; o++) {
    const i = ml[o] + r;
    if (i in e) return (Io[t] = i);
  }
  return t;
}
const gl = "http://www.w3.org/1999/xlink";
function uh(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(gl, t.slice(6, t.length))
      : e.setAttributeNS(gl, t, n);
  else {
    const i = gf(t);
    n == null || (i && !Aa(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function ch(e, t, n, r, o, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, o, i), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const c = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
      u = n ?? "";
    (c !== u || !("_value" in e)) && (e.value = u),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = Aa(n))
      : n == null && c === "string"
        ? ((n = ""), (a = !0))
        : c === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function fh(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function dh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const vl = Symbol("_vei");
function hh(e, t, n, r, o = null) {
  const i = e[vl] || (e[vl] = {}),
    s = i[t];
  if (r && s) s.value = r;
  else {
    const [l, a] = ph(t);
    if (r) {
      const c = (i[t] = vh(r, o));
      fh(e, l, c, a);
    } else s && (dh(e, l, s, a), (i[t] = void 0));
  }
}
const yl = /(?:Once|Passive|Capture)$/;
function ph(e) {
  let t;
  if (yl.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(yl)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : an(e.slice(2)), t];
}
let Do = 0;
const mh = Promise.resolve(),
  gh = () => Do || (mh.then(() => (Do = 0)), (Do = Date.now()));
function vh(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Je(yh(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = gh()), n;
}
function yh(e, t) {
  if (re(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const bl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  bh = (e, t, n, r, o, i, s, l, a) => {
    const c = o === "svg";
    t === "class"
      ? oh(e, r, c)
      : t === "style"
        ? lh(e, n, r)
        : ao(t)
          ? Wi(t) || hh(e, t, n, r, s)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : _h(e, t, r, c)
              )
            ? ch(e, t, r, i, s, l, a)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              uh(e, t, r, c));
  };
function _h(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && bl(t) && oe(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return bl(t) && Se(n) ? !1 : t in e;
}
const Lu = new WeakMap(),
  qu = new WeakMap(),
  eo = Symbol("_moveCb"),
  _l = Symbol("_enterCb"),
  $u = {
    name: "TransitionGroup",
    props: xe({}, th, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ee(),
        r = uu();
      let o, i;
      return (
        us(() => {
          if (!o.length) return;
          const s = e.moveClass || `${e.name || "v"}-move`;
          if (!Th(o[0].el, n.vnode.el, s)) return;
          o.forEach(Eh), o.forEach(xh);
          const l = o.filter(Ch);
          Ou(),
            l.forEach((a) => {
              const c = a.el,
                u = c.style;
              wt(c, s),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const d = (c[eo] = (f) => {
                (f && f.target !== c) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c[eo] = null),
                    Nt(c, s)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const s = ce(e),
            l = Pu(s);
          let a = s.tag || ot;
          (o = i), (i = t.default ? ss(t.default()) : []);
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && Pn(u, ar(u, l, r, n));
          }
          if (o)
            for (let c = 0; c < o.length; c++) {
              const u = o[c];
              Pn(u, ar(u, l, r, n)), Lu.set(u, u.el.getBoundingClientRect());
            }
          return Z(a, null, i);
        }
      );
    },
  },
  wh = (e) => delete e.mode;
$u.props;
const Sh = $u;
function Eh(e) {
  const t = e.el;
  t[eo] && t[eo](), t[_l] && t[_l]();
}
function xh(e) {
  qu.set(e, e.el.getBoundingClientRect());
}
function Ch(e) {
  const t = Lu.get(e),
    n = qu.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${r}px,${o}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function Th(e, t, n) {
  const r = e.cloneNode(),
    o = e[kn];
  o &&
    o.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && r.classList.remove(a));
    }),
    n.split(/\s+/).forEach((l) => l && r.classList.add(l)),
    (r.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: s } = ku(r);
  return i.removeChild(r), s;
}
const Rh = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Ry = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (o) => {
        if (!("key" in o)) return;
        const i = an(o.key);
        if (t.some((s) => s === i || Rh[s] === i)) return e(o);
      })
    );
  },
  Ph = xe({ patchProp: bh }, eh);
let wl;
function kh() {
  return wl || (wl = Ld(Ph));
}
const Bu = (...e) => {
  const t = kh().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Ah(r);
      if (!o) return;
      const i = t._component;
      !oe(i) && !i.render && !i.template && (i.template = o.innerHTML),
        (o.innerHTML = "");
      const s = n(o, !1, Oh(o));
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        s
      );
    }),
    t
  );
};
function Oh(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ah(e) {
  return Se(e) ? document.querySelector(e) : e;
}
function So(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
function Py(e, t) {
  for (const n in t) So(e, n, t[n]);
  return e;
}
const ut = ee(!1);
let Ci;
function Lh(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e,
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[2] || n[4] || "0",
    versionNumber: n[4] || n[2] || "0",
    platform: t[0] || "",
  };
}
function qh(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const Mu = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function $h(e) {
  const t = e.toLowerCase(),
    n = qh(t),
    r = Lh(t, n),
    o = {};
  r.browser &&
    ((o[r.browser] = !0),
    (o.version = r.version),
    (o.versionNumber = parseInt(r.versionNumber, 10))),
    r.platform && (o[r.platform] = !0);
  const i =
    o.android ||
    o.ios ||
    o.bb ||
    o.blackberry ||
    o.ipad ||
    o.iphone ||
    o.ipod ||
    o.kindle ||
    o.playbook ||
    o.silk ||
    o["windows phone"];
  if (
    (i === !0 || t.indexOf("mobile") !== -1
      ? (o.mobile = !0)
      : (o.desktop = !0),
    o["windows phone"] && ((o.winphone = !0), delete o["windows phone"]),
    o.edga || o.edgios || o.edg
      ? ((o.edge = !0), (r.browser = "edge"))
      : o.crios
        ? ((o.chrome = !0), (r.browser = "chrome"))
        : o.fxios
          ? ((o.firefox = !0), (r.browser = "firefox"))
          : (o.ipod || o.ipad || o.iphone) && (o.ios = !0),
    o.vivaldi && ((r.browser = "vivaldi"), (o.vivaldi = !0)),
    (o.chrome ||
      o.opr ||
      o.safari ||
      o.vivaldi ||
      (o.mobile === !0 && o.ios !== !0 && i !== !0)) &&
      (o.webkit = !0),
    o.opr && ((r.browser = "opera"), (o.opera = !0)),
    o.safari &&
      (o.blackberry || o.bb
        ? ((r.browser = "blackberry"), (o.blackberry = !0))
        : o.playbook
          ? ((r.browser = "playbook"), (o.playbook = !0))
          : o.android
            ? ((r.browser = "android"), (o.android = !0))
            : o.kindle
              ? ((r.browser = "kindle"), (o.kindle = !0))
              : o.silk && ((r.browser = "silk"), (o.silk = !0))),
    (o.name = r.browser),
    (o.platform = r.platform),
    t.indexOf("electron") !== -1)
  )
    o.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1) o.bex = !0;
  else {
    if (
      (window.Capacitor !== void 0
        ? ((o.capacitor = !0),
          (o.nativeMobile = !0),
          (o.nativeMobileWrapper = "capacitor"))
        : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
          ((o.cordova = !0),
          (o.nativeMobile = !0),
          (o.nativeMobileWrapper = "cordova")),
      ut.value === !0 && (Ci = { is: { ...o } }),
      Mu === !0 &&
        o.mac === !0 &&
        ((o.desktop === !0 && o.safari === !0) ||
          (o.nativeMobile === !0 &&
            o.android !== !0 &&
            o.ios !== !0 &&
            o.ipad !== !0)))
    ) {
      delete o.mac, delete o.desktop;
      const s =
        Math.min(window.innerHeight, window.innerWidth) > 414
          ? "ipad"
          : "iphone";
      Object.assign(o, { mobile: !0, ios: !0, platform: s, [s]: !0 });
    }
    o.mobile !== !0 &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile &&
      (delete o.desktop, (o.mobile = !0));
  }
  return o;
}
const Sl = navigator.userAgent || navigator.vendor || window.opera,
  Bh = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  we = {
    userAgent: Sl,
    is: $h(Sl),
    has: { touch: Mu },
    within: { iframe: window.self !== window.top },
  },
  to = {
    install(e) {
      const { $q: t } = e;
      ut.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, we), (ut.value = !1);
          }),
          (t.platform = it(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  So(we.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(to, we),
    ut.value === !0 && (Object.assign(to, Ci, Bh), (Ci = null));
}
const yr = (e, t) => {
    const n = it(e);
    for (const r in e)
      So(
        t,
        r,
        () => n[r],
        (o) => {
          n[r] = o;
        },
      );
    return t;
  },
  $e = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign($e, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      });
    },
  });
  window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e);
} catch {}
function Fe() {}
function Mh(e) {
  return e.button === 0;
}
function no(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
        ? (e = e.changedTouches[0])
        : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function Nh(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === "HTML"))
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function Zn(e) {
  e.stopPropagation();
}
function cr(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function xt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function Ho(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0),
            r.addEventListener("dragstart", cr, $e.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented,
            r.removeEventListener("dragstart", cr, $e.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function Un(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((o) => {
      o[0].addEventListener(o[1], e[o[2]], $e[o[3]]);
    });
}
function jr(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], $e[r[3]]);
    }),
    (e[n] = void 0));
}
function Nu(e, t = 250, n) {
  let r = null;
  function o() {
    const i = arguments,
      s = () => {
        (r = null), n !== !0 && e.apply(this, i);
      };
    r !== null ? clearTimeout(r) : n === !0 && e.apply(this, i),
      (r = setTimeout(s, t));
  }
  return (
    (o.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    o
  );
}
const Vo = ["sm", "md", "lg", "xl"],
  { passive: El } = $e,
  zh = yr(
    {
      width: 0,
      height: 0,
      name: "xs",
      sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
      lt: { sm: !0, md: !0, lg: !0, xl: !0 },
      gt: { xs: !1, sm: !1, md: !1, lg: !1 },
      xs: !0,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
    },
    {
      setSizes: Fe,
      setDebounce: Fe,
      install({ $q: e, onSSRHydrated: t }) {
        if (((e.screen = this), this.__installed === !0)) {
          e.config.screen !== void 0 &&
            (e.config.screen.bodyClasses === !1
              ? document.body.classList.remove(`screen--${this.name}`)
              : this.__update(!0));
          return;
        }
        const { visualViewport: n } = window,
          r = n || window,
          o = document.scrollingElement || document.documentElement,
          i =
            n === void 0 || we.is.mobile === !0
              ? () => [
                  Math.max(window.innerWidth, o.clientWidth),
                  Math.max(window.innerHeight, o.clientHeight),
                ]
              : () => [
                  n.width * n.scale + window.innerWidth - o.clientWidth,
                  n.height * n.scale + window.innerHeight - o.clientHeight,
                ],
          s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
        this.__update = (d) => {
          const [f, p] = i();
          if ((p !== this.height && (this.height = p), f !== this.width))
            this.width = f;
          else if (d !== !0) return;
          let m = this.sizes;
          (this.gt.xs = f >= m.sm),
            (this.gt.sm = f >= m.md),
            (this.gt.md = f >= m.lg),
            (this.gt.lg = f >= m.xl),
            (this.lt.sm = f < m.sm),
            (this.lt.md = f < m.md),
            (this.lt.lg = f < m.lg),
            (this.lt.xl = f < m.xl),
            (this.xs = this.lt.sm),
            (this.sm = this.gt.xs === !0 && this.lt.md === !0),
            (this.md = this.gt.sm === !0 && this.lt.lg === !0),
            (this.lg = this.gt.md === !0 && this.lt.xl === !0),
            (this.xl = this.gt.lg),
            (m =
              (this.xs === !0 && "xs") ||
              (this.sm === !0 && "sm") ||
              (this.md === !0 && "md") ||
              (this.lg === !0 && "lg") ||
              "xl"),
            m !== this.name &&
              (s === !0 &&
                (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${m}`)),
              (this.name = m));
        };
        let l,
          a = {},
          c = 16;
        (this.setSizes = (d) => {
          Vo.forEach((f) => {
            d[f] !== void 0 && (a[f] = d[f]);
          });
        }),
          (this.setDebounce = (d) => {
            c = d;
          });
        const u = () => {
          const d = getComputedStyle(document.body);
          d.getPropertyValue("--q-size-sm") &&
            Vo.forEach((f) => {
              this.sizes[f] = parseInt(d.getPropertyValue(`--q-size-${f}`), 10);
            }),
            (this.setSizes = (f) => {
              Vo.forEach((p) => {
                f[p] && (this.sizes[p] = f[p]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (f) => {
              l !== void 0 && r.removeEventListener("resize", l, El),
                (l = f > 0 ? Nu(this.__update, f) : this.__update),
                r.addEventListener("resize", l, El);
            }),
            this.setDebounce(c),
            Object.keys(a).length !== 0
              ? (this.setSizes(a), (a = void 0))
              : this.__update(),
            s === !0 &&
              this.name === "xs" &&
              document.body.classList.add("screen--xs");
        };
        ut.value === !0 ? t.push(u) : u();
      },
    },
  ),
  Be = yr(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Be.mode = e),
          e === "auto"
            ? (Be.__media === void 0 &&
                ((Be.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)",
                )),
                (Be.__updateMedia = () => {
                  Be.set("auto");
                }),
                Be.__media.addListener(Be.__updateMedia)),
              (e = Be.__media.matches))
            : Be.__media !== void 0 &&
              (Be.__media.removeListener(Be.__updateMedia),
              (Be.__media = void 0)),
          (Be.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? "light" : "dark"}`,
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
      },
      toggle() {
        Be.set(Be.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this),
          this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    },
  ),
  zu = () => !0;
function jh(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Fh(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function Ih(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return zu;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(jh).map(Fh)),
    () => t.includes(window.location.hash)
  );
}
const Ti = {
    __history: [],
    add: Fe,
    remove: Fe,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = we.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? "cordova" : "capacitor"];
      if (
        (r !== void 0 && r.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (s) => {
        s.condition === void 0 && (s.condition = zu), this.__history.push(s);
      }),
        (this.remove = (s) => {
          const l = this.__history.indexOf(s);
          l >= 0 && this.__history.splice(l, 1);
        });
      const o = Ih(Object.assign({ backButtonExit: !0 }, r)),
        i = () => {
          if (this.__history.length) {
            const s = this.__history[this.__history.length - 1];
            s.condition() === !0 && (this.__history.pop(), s.handler());
          } else o() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1);
          })
        : window.Capacitor.Plugins.App.addListener("backButton", i);
    },
  },
  xl = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
      clear: "Clear",
      ok: "OK",
      cancel: "Cancel",
      close: "Close",
      set: "Set",
      select: "Select",
      reset: "Reset",
      remove: "Remove",
      update: "Update",
      create: "Create",
      search: "Search",
      filter: "Filter",
      refresh: "Refresh",
      expand: (e) => (e ? `Expand "${e}"` : "Expand"),
      collapse: (e) => (e ? `Collapse "${e}"` : "Collapse"),
    },
    date: {
      days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_",
      ),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_",
        ),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: "days",
    },
    table: {
      noData: "No data available",
      noResults: "No matching records found",
      loading: "Loading...",
      selectedRecords: (e) =>
        e === 1
          ? "1 record selected."
          : (e === 0 ? "No" : e) + " records selected.",
      recordsPerPage: "Records per page:",
      allRows: "All",
      pagination: (e, t, n) => e + "-" + t + " of " + n,
      columns: "Columns",
    },
    editor: {
      url: "URL",
      bold: "Bold",
      italic: "Italic",
      strikethrough: "Strikethrough",
      underline: "Underline",
      unorderedList: "Unordered List",
      orderedList: "Ordered List",
      subscript: "Subscript",
      superscript: "Superscript",
      hyperlink: "Hyperlink",
      toggleFullscreen: "Toggle Fullscreen",
      quote: "Quote",
      left: "Left align",
      center: "Center align",
      right: "Right align",
      justify: "Justify align",
      print: "Print",
      outdent: "Decrease indentation",
      indent: "Increase indentation",
      removeFormat: "Remove formatting",
      formatting: "Formatting",
      fontSize: "Font Size",
      align: "Align",
      hr: "Insert Horizontal Rule",
      undo: "Undo",
      redo: "Redo",
      heading1: "Heading 1",
      heading2: "Heading 2",
      heading3: "Heading 3",
      heading4: "Heading 4",
      heading5: "Heading 5",
      heading6: "Heading 6",
      paragraph: "Paragraph",
      code: "Code",
      size1: "Very small",
      size2: "A bit small",
      size3: "Normal",
      size4: "Medium-large",
      size5: "Big",
      size6: "Very big",
      size7: "Maximum",
      defaultFont: "Default Font",
      viewSource: "View Source",
    },
    tree: {
      noNodes: "No nodes available",
      noResults: "No matching nodes found",
    },
  };
function Cl() {
  const e =
    Array.isArray(navigator.languages) === !0 &&
    navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == "string")
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
            ? t.toUpperCase()
            : t[0].toUpperCase() + t.slice(1).toLowerCase(),
      )
      .join("-");
}
const tt = yr(
  { __langPack: {} },
  {
    getLocale: Cl,
    set(e = xl, t) {
      const n = { ...e, rtl: e.rtl === !0, getLocale: Cl };
      {
        if (
          ((n.set = tt.set),
          tt.__langConfig === void 0 || tt.__langConfig.noHtmlAttrs !== !0)
        ) {
          const r = document.documentElement;
          r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
            r.setAttribute("lang", n.isoName);
        }
        Object.assign(tt.__langPack, n),
          (tt.props = n),
          (tt.isoName = n.isoName),
          (tt.nativeName = n.nativeName);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      (e.lang = tt.__langPack),
        (tt.__langConfig = e.config.lang),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || xl);
    },
  },
);
function Dh(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let ju = !1;
function Hh(e) {
  ju = e.isComposing === !0;
}
function Vh(e) {
  return (
    ju === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function ro(e, t) {
  return Vh(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Fu(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function Uh({ is: e, has: t, within: n }, r) {
  const o = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const i = Fu(e);
    i !== void 0 && o.push("platform-" + i);
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper;
    o.push(i),
      o.push("native-mobile"),
      e.ios === !0 &&
        (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) &&
        o.push("q-ios-padding");
  } else e.electron === !0 ? o.push("electron") : e.bex === !0 && o.push("bex");
  return n.iframe === !0 && o.push("within-iframe"), o;
}
function Wh() {
  const { is: e } = we,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete("mobile"),
        n.delete("platform-ios"),
        n.delete("platform-android"),
        n.add("desktop");
    else if (e.mobile === !0) {
      n.delete("desktop"),
        n.add("mobile"),
        n.delete("platform-ios"),
        n.delete("platform-android");
      const o = Fu(e);
      o !== void 0 && n.add(`platform-${o}`);
    }
  }
  we.has.touch === !0 && (n.delete("no-touch"), n.add("touch")),
    we.within.iframe === !0 && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function Kh(e) {
  for (const t in e) Dh(t, e[t]);
}
const Qh = {
    install(e) {
      if (this.__installed !== !0) {
        if (ut.value === !0) Wh();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && Kh(t.config.brand);
          const n = Uh(we, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        we.is.ios === !0 && document.body.addEventListener("touchstart", Fe),
          window.addEventListener("keydown", Hh, !0);
      }
    },
  },
  Gh = {
    name: "material-icons",
    type: {
      positive: "check_circle",
      negative: "warning",
      info: "info",
      warning: "priority_high",
    },
    arrow: {
      up: "arrow_upward",
      right: "arrow_forward",
      down: "arrow_downward",
      left: "arrow_back",
      dropdown: "arrow_drop_down",
    },
    chevron: { left: "chevron_left", right: "chevron_right" },
    colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" },
    pullToRefresh: { icon: "refresh" },
    carousel: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
      navigationIcon: "lens",
    },
    chip: { remove: "cancel", selected: "check" },
    datetime: {
      arrowLeft: "chevron_left",
      arrowRight: "chevron_right",
      now: "access_time",
      today: "today",
    },
    editor: {
      bold: "format_bold",
      italic: "format_italic",
      strikethrough: "strikethrough_s",
      underline: "format_underlined",
      unorderedList: "format_list_bulleted",
      orderedList: "format_list_numbered",
      subscript: "vertical_align_bottom",
      superscript: "vertical_align_top",
      hyperlink: "link",
      toggleFullscreen: "fullscreen",
      quote: "format_quote",
      left: "format_align_left",
      center: "format_align_center",
      right: "format_align_right",
      justify: "format_align_justify",
      print: "print",
      outdent: "format_indent_decrease",
      indent: "format_indent_increase",
      removeFormat: "format_clear",
      formatting: "text_format",
      fontSize: "format_size",
      align: "format_align_left",
      hr: "remove",
      undo: "undo",
      redo: "redo",
      heading: "format_size",
      code: "code",
      size: "format_size",
      font: "font_download",
      viewSource: "code",
    },
    expansionItem: {
      icon: "keyboard_arrow_down",
      denseIcon: "arrow_drop_down",
    },
    fab: { icon: "add", activeIcon: "close" },
    field: { clear: "cancel", error: "error" },
    pagination: {
      first: "first_page",
      prev: "keyboard_arrow_left",
      next: "keyboard_arrow_right",
      last: "last_page",
    },
    rating: { icon: "grade" },
    stepper: { done: "check", active: "edit", error: "warning" },
    tabs: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
    },
    table: {
      arrowUp: "arrow_upward",
      warning: "warning",
      firstPage: "first_page",
      prevPage: "chevron_left",
      nextPage: "chevron_right",
      lastPage: "last_page",
    },
    tree: { icon: "play_arrow" },
    uploader: {
      done: "done",
      clear: "clear",
      add: "add_box",
      upload: "cloud_upload",
      removeQueue: "clear_all",
      removeUploaded: "done_all",
    },
  },
  oo = yr(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = { ...e, rtl: e.rtl === !0 };
        (n.set = oo.set), Object.assign(oo.__icons, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          So(
            e,
            "iconMapFn",
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            },
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || Gh);
      },
    },
  ),
  Iu = "_q_",
  br = "_q_l_",
  Jh = "_q_pc_",
  ky = "_q_f_",
  Oy = "_q_fo_",
  Xe = () => {},
  io = {};
let Du = !1;
function Xh() {
  Du = !0;
}
function Uo(e, t) {
  if (e === t) return !0;
  if (
    e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object"
  ) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (e.constructor === Array) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (Uo(e[r], t[r]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      let i = e.entries();
      for (r = i.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = i.next();
      }
      for (i = e.entries(), r = i.next(); r.done !== !0; ) {
        if (Uo(r.value[1], t.get(r.value[0])) !== !0) return !1;
        r = i.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      const i = e.entries();
      for (r = i.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = i.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e).filter((i) => e[i] !== void 0);
    if (
      ((n = o.length),
      n !== Object.keys(t).filter((i) => t[i] !== void 0).length)
    )
      return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (Uo(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function On(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function Yh(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Zh(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Ay(e) {
  return typeof e == "number" && isFinite(e);
}
const Tl = [to, Qh, Be, zh, Ti, tt, oo];
function Hu(e, t) {
  const n = Bu(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...o } = t._context;
  return Object.assign(n._context, o), n;
}
function Rl(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function ep(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(Iu, n.$q),
    Rl(n, Tl),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        On(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        On(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Rl(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == "function" && Tl.includes(r) === !1,
        ),
      ),
    ut.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const tp = function (e, t = {}) {
    const n = { version: "2.15.2" };
    Du === !1
      ? (t.config !== void 0 && Object.assign(io, t.config),
        (n.config = { ...io }),
        Xh())
      : (n.config = t.config || {}),
      ep(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  np = { version: "2.15.2", install: tp, lang: tt, iconSet: oo },
  Vu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  rp = Object.assign(
    { name: "App" },
    {
      __name: "App",
      setup(e) {
        return (t, n) => {
          const r = gi("router-view");
          return St(), Et(r);
        };
      },
    },
  ),
  op = Vu(rp, [["__file", "App.vue"]]);
function Ly(e) {
  return e;
}
var ip = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Uu;
const Eo = (e) => (Uu = e),
  Wu = Symbol();
function Ri(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var er;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(er || (er = {}));
function sp() {
  const e = $a(!0),
    t = e.run(() => ee({}));
  let n = [],
    r = [];
  const o = Jt({
    install(i) {
      Eo(o),
        (o._a = i),
        i.provide(Wu, o),
        (i.config.globalProperties.$pinia = o),
        r.forEach((s) => n.push(s)),
        (r = []);
    },
    use(i) {
      return !this._a && !ip ? r.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
const Ku = () => {};
function Pl(e, t, n, r = Ku) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !n && Ba() && yf(o), o;
}
function hn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const lp = (e) => e();
function Pi(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    Ri(o) && Ri(r) && e.hasOwnProperty(n) && !Te(r) && !Wt(r)
      ? (e[n] = Pi(o, r))
      : (e[n] = r);
  }
  return e;
}
const ap = Symbol();
function up(e) {
  return !Ri(e) || !e.hasOwnProperty(ap);
}
const { assign: zt } = Object;
function cp(e) {
  return !!(Te(e) && e.effect);
}
function fp(e, t, n, r) {
  const { state: o, actions: i, getters: s } = t,
    l = n.state.value[e];
  let a;
  function c() {
    l || (n.state.value[e] = o ? o() : {});
    const u = Hf(n.state.value[e]);
    return zt(
      u,
      i,
      Object.keys(s || {}).reduce(
        (d, f) => (
          (d[f] = Jt(
            E(() => {
              Eo(n);
              const p = n._s.get(e);
              return s[f].call(p, p);
            }),
          )),
          d
        ),
        {},
      ),
    );
  }
  return (a = Qu(e, c, t, n, r, !0)), a;
}
function Qu(e, t, n = {}, r, o, i) {
  let s;
  const l = zt({ actions: {} }, n),
    a = { deep: !0 };
  let c,
    u,
    d = [],
    f = [],
    p;
  const m = r.state.value[e];
  !i && !m && (r.state.value[e] = {}), ee({});
  let y;
  function x(q) {
    let F;
    (c = u = !1),
      typeof q == "function"
        ? (q(r.state.value[e]),
          (F = { type: er.patchFunction, storeId: e, events: p }))
        : (Pi(r.state.value[e], q),
          (F = { type: er.patchObject, payload: q, storeId: e, events: p }));
    const K = (y = Symbol());
    kt().then(() => {
      y === K && (c = !0);
    }),
      (u = !0),
      hn(d, F, r.state.value[e]);
  }
  const b = i
    ? function () {
        const { state: F } = n,
          K = F ? F() : {};
        this.$patch((J) => {
          zt(J, K);
        });
      }
    : Ku;
  function v() {
    s.stop(), (d = []), (f = []), r._s.delete(e);
  }
  function _(q, F) {
    return function () {
      Eo(r);
      const K = Array.from(arguments),
        J = [],
        A = [];
      function X(te) {
        J.push(te);
      }
      function V(te) {
        A.push(te);
      }
      hn(f, { args: K, name: q, store: O, after: X, onError: V });
      let ie;
      try {
        ie = F.apply(this && this.$id === e ? this : O, K);
      } catch (te) {
        throw (hn(A, te), te);
      }
      return ie instanceof Promise
        ? ie
            .then((te) => (hn(J, te), te))
            .catch((te) => (hn(A, te), Promise.reject(te)))
        : (hn(J, ie), ie);
    };
  }
  const C = {
      _p: r,
      $id: e,
      $onAction: Pl.bind(null, f),
      $patch: x,
      $reset: b,
      $subscribe(q, F = {}) {
        const K = Pl(d, q, F.detached, () => J()),
          J = s.run(() =>
            ue(
              () => r.state.value[e],
              (A) => {
                (F.flush === "sync" ? u : c) &&
                  q({ storeId: e, type: er.direct, events: p }, A);
              },
              zt({}, a, F),
            ),
          );
        return K;
      },
      $dispose: v,
    },
    O = it(C);
  r._s.set(e, O);
  const D = ((r._a && r._a.runWithContext) || lp)(() =>
    r._e.run(() => (s = $a()).run(t)),
  );
  for (const q in D) {
    const F = D[q];
    if ((Te(F) && !cp(F)) || Wt(F))
      i ||
        (m && up(F) && (Te(F) ? (F.value = m[q]) : Pi(F, m[q])),
        (r.state.value[e][q] = F));
    else if (typeof F == "function") {
      const K = _(q, F);
      (D[q] = K), (l.actions[q] = F);
    }
  }
  return (
    zt(O, D),
    zt(ce(O), D),
    Object.defineProperty(O, "$state", {
      get: () => r.state.value[e],
      set: (q) => {
        x((F) => {
          zt(F, q);
        });
      },
    }),
    r._p.forEach((q) => {
      zt(
        O,
        s.run(() => q({ store: O, app: r._a, pinia: r, options: l })),
      );
    }),
    m && i && n.hydrate && n.hydrate(O.$state, m),
    (c = !0),
    (u = !0),
    O
  );
}
function dp(e, t, n) {
  let r, o;
  const i = typeof t == "function";
  typeof e == "string" ? ((r = e), (o = i ? n : t)) : ((o = e), (r = e.id));
  function s(l, a) {
    const c = Td();
    return (
      (l = l || (c ? ze(Wu, null) : null)),
      l && Eo(l),
      (l = Uu),
      l._s.has(r) || (i ? Qu(r, t, o, l) : fp(r, o, l)),
      l._s.get(r)
    );
  }
  return (s.$id = r), s;
}
const Wo = () => sp();
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const yn = typeof document < "u";
function hp(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const pe = Object.assign;
function Ko(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = ct(o) ? o.map(e) : e(o);
  }
  return n;
}
const tr = () => {},
  ct = Array.isArray,
  Gu = /#/g,
  pp = /&/g,
  mp = /\//g,
  gp = /=/g,
  vp = /\?/g,
  Ju = /\+/g,
  yp = /%5B/g,
  bp = /%5D/g,
  Xu = /%5E/g,
  _p = /%60/g,
  Yu = /%7B/g,
  wp = /%7C/g,
  Zu = /%7D/g,
  Sp = /%20/g;
function ms(e) {
  return encodeURI("" + e)
    .replace(wp, "|")
    .replace(yp, "[")
    .replace(bp, "]");
}
function Ep(e) {
  return ms(e).replace(Yu, "{").replace(Zu, "}").replace(Xu, "^");
}
function ki(e) {
  return ms(e)
    .replace(Ju, "%2B")
    .replace(Sp, "+")
    .replace(Gu, "%23")
    .replace(pp, "%26")
    .replace(_p, "`")
    .replace(Yu, "{")
    .replace(Zu, "}")
    .replace(Xu, "^");
}
function xp(e) {
  return ki(e).replace(gp, "%3D");
}
function Cp(e) {
  return ms(e).replace(Gu, "%23").replace(vp, "%3F");
}
function Tp(e) {
  return e == null ? "" : Cp(e).replace(mp, "%2F");
}
function fr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Rp = /\/$/,
  Pp = (e) => e.replace(Rp, "");
function Qo(e, t, n = "/") {
  let r,
    o = {},
    i = "",
    s = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (o = e(i))),
    l > -1 && ((r = r || t.slice(0, l)), (s = t.slice(l, t.length))),
    (r = Lp(r ?? t, n)),
    { fullPath: r + (i && "?") + i + s, path: r, query: o, hash: fr(s) }
  );
}
function kp(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function kl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Op(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    An(t.matched[r], n.matched[o]) &&
    ec(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function An(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ec(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Ap(e[n], t[n])) return !1;
  return !0;
}
function Ap(e, t) {
  return ct(e) ? Ol(e, t) : ct(t) ? Ol(t, e) : e === t;
}
function Ol(e, t) {
  return ct(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Lp(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let i = n.length - 1,
    s,
    l;
  for (s = 0; s < r.length; s++)
    if (((l = r[s]), l !== "."))
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + r.slice(s).join("/");
}
var dr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(dr || (dr = {}));
var nr;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(nr || (nr = {}));
function qp(e) {
  if (!e)
    if (yn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Pp(e);
}
const $p = /^[^#]+#/;
function Bp(e, t) {
  return e.replace($p, "#") + t;
}
function Mp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const xo = () => ({ left: window.scrollX, top: window.scrollY });
function Np(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Mp(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function Al(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Oi = new Map();
function zp(e, t) {
  Oi.set(e, t);
}
function jp(e) {
  const t = Oi.get(e);
  return Oi.delete(e), t;
}
let Fp = () => location.protocol + "//" + location.host;
function tc(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = o.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = o.slice(l);
    return a[0] !== "/" && (a = "/" + a), kl(a, "");
  }
  return kl(n, e) + r + o;
}
function Ip(e, t, n, r) {
  let o = [],
    i = [],
    s = null;
  const l = ({ state: f }) => {
    const p = tc(e, location),
      m = n.value,
      y = t.value;
    let x = 0;
    if (f) {
      if (((n.value = p), (t.value = f), s && s === m)) {
        s = null;
        return;
      }
      x = y ? f.position - y.position : 0;
    } else r(p);
    o.forEach((b) => {
      b(n.value, m, {
        delta: x,
        type: dr.pop,
        direction: x ? (x > 0 ? nr.forward : nr.back) : nr.unknown,
      });
    });
  };
  function a() {
    s = n.value;
  }
  function c(f) {
    o.push(f);
    const p = () => {
      const m = o.indexOf(f);
      m > -1 && o.splice(m, 1);
    };
    return i.push(p), p;
  }
  function u() {
    const { history: f } = window;
    f.state && f.replaceState(pe({}, f.state, { scroll: xo() }), "");
  }
  function d() {
    for (const f of i) f();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: d }
  );
}
function Ll(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? xo() : null,
  };
}
function Dp(e) {
  const { history: t, location: n } = window,
    r = { value: tc(e, n) },
    o = { value: t.state };
  o.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function i(a, c, u) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a
          : Fp() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (o.value = c);
    } catch (p) {
      console.error(p), n[u ? "replace" : "assign"](f);
    }
  }
  function s(a, c) {
    const u = pe({}, t.state, Ll(o.value.back, a, o.value.forward, !0), c, {
      position: o.value.position,
    });
    i(a, u, !0), (r.value = a);
  }
  function l(a, c) {
    const u = pe({}, o.value, t.state, { forward: a, scroll: xo() });
    i(u.current, u, !0);
    const d = pe({}, Ll(r.value, a, null), { position: u.position + 1 }, c);
    i(a, d, !1), (r.value = a);
  }
  return { location: r, state: o, push: l, replace: s };
}
function Hp(e) {
  e = qp(e);
  const t = Dp(e),
    n = Ip(e, t.state, t.location, t.replace);
  function r(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const o = pe(
    { location: "", base: e, go: r, createHref: Bp.bind(null, e) },
    t,
    n,
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Vp(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Hp(e)
  );
}
function Up(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function nc(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const $t = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  rc = Symbol("");
var ql;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(ql || (ql = {}));
function Ln(e, t) {
  return pe(new Error(), { type: e, [rc]: !0 }, t);
}
function _t(e, t) {
  return e instanceof Error && rc in e && (t == null || !!(e.type & t));
}
const $l = "[^/]+?",
  Wp = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Kp = /[.+*?^${}()[\]/\\]/g;
function Qp(e, t) {
  const n = pe({}, Wp, t),
    r = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (o += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (o += "/"), (o += f.value.replace(Kp, "\\$&")), (p += 40);
      else if (f.type === 1) {
        const { value: m, repeatable: y, optional: x, regexp: b } = f;
        i.push({ name: m, repeatable: y, optional: x });
        const v = b || $l;
        if (v !== $l) {
          p += 10;
          try {
            new RegExp(`(${v})`);
          } catch (C) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${v}): ` + C.message,
            );
          }
        }
        let _ = y ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        d || (_ = x && c.length < 2 ? `(?:/${_})` : "/" + _),
          x && (_ += "?"),
          (o += _),
          (p += 20),
          x && (p += -8),
          y && (p += -20),
          v === ".*" && (p += -50);
      }
      u.push(p);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const s = new RegExp(o, n.sensitive ? "" : "i");
  function l(c) {
    const u = c.match(s),
      d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const p = u[f] || "",
        m = i[f - 1];
      d[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function a(c) {
    let u = "",
      d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const p of f)
        if (p.type === 0) u += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: y, optional: x } = p,
            b = m in c ? c[m] : "";
          if (ct(b) && !y)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const v = ct(b) ? b.join("/") : b;
          if (!v)
            if (x)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${m}"`);
          u += v;
        }
    }
    return u || "/";
  }
  return { re: s, score: r, keys: i, parse: l, stringify: a };
}
function Gp(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function Jp(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const i = Gp(r[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Bl(r)) return 1;
    if (Bl(o)) return -1;
  }
  return o.length - r.length;
}
function Bl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Xp = { type: 0, value: "" },
  Yp = /[a-zA-Z0-9_]/;
function Zp(e) {
  if (!e) return [[]];
  if (e === "/") return [[Xp]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${c}": ${p}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let i;
  function s() {
    i && o.push(i), (i = []);
  }
  let l = 0,
    a,
    c = "",
    u = "";
  function d() {
    c &&
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (a === "*" || a === "+") &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            i.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: a === "*" || a === "+",
              optional: a === "*" || a === "?",
            }))
          : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function f() {
    c += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && d(), s()) : a === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = r);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : Yp.test(a)
            ? f()
            : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a);
        break;
      case 3:
        d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), s(), o;
}
function em(e, t, n) {
  const r = Qp(Zp(e.path), n),
    o = pe(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function tm(e, t) {
  const n = [],
    r = new Map();
  t = zl({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return r.get(u);
  }
  function i(u, d, f) {
    const p = !f,
      m = nm(u);
    m.aliasOf = f && f.record;
    const y = zl(t, u),
      x = [m];
    if ("alias" in u) {
      const _ = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const C of _)
        x.push(
          pe({}, m, {
            components: f ? f.record.components : m.components,
            path: C,
            aliasOf: f ? f.record : m,
          }),
        );
    }
    let b, v;
    for (const _ of x) {
      const { path: C } = _;
      if (d && C[0] !== "/") {
        const O = d.record.path,
          B = O[O.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (C && B + C);
      }
      if (
        ((b = em(_, d, y)),
        f
          ? f.alias.push(b)
          : ((v = v || b),
            v !== b && v.alias.push(b),
            p && u.name && !Nl(b) && s(u.name)),
        m.children)
      ) {
        const O = m.children;
        for (let B = 0; B < O.length; B++) i(O[B], b, f && f.children[B]);
      }
      (f = f || b),
        ((b.record.components && Object.keys(b.record.components).length) ||
          b.record.name ||
          b.record.redirect) &&
          a(b);
    }
    return v
      ? () => {
          s(v);
        }
      : tr;
  }
  function s(u) {
    if (nc(u)) {
      const d = r.get(u);
      d &&
        (r.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(s),
        d.alias.forEach(s));
    } else {
      const d = n.indexOf(u);
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(s),
        u.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function a(u) {
    let d = 0;
    for (
      ;
      d < n.length &&
      Jp(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !oc(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !Nl(u) && r.set(u.record.name, u);
  }
  function c(u, d) {
    let f,
      p = {},
      m,
      y;
    if ("name" in u && u.name) {
      if (((f = r.get(u.name)), !f)) throw Ln(1, { location: u });
      (y = f.record.name),
        (p = pe(
          Ml(
            d.params,
            f.keys
              .filter((v) => !v.optional)
              .concat(f.parent ? f.parent.keys.filter((v) => v.optional) : [])
              .map((v) => v.name),
          ),
          u.params &&
            Ml(
              u.params,
              f.keys.map((v) => v.name),
            ),
        )),
        (m = f.stringify(p));
    } else if (u.path != null)
      (m = u.path),
        (f = n.find((v) => v.re.test(m))),
        f && ((p = f.parse(m)), (y = f.record.name));
    else {
      if (((f = d.name ? r.get(d.name) : n.find((v) => v.re.test(d.path))), !f))
        throw Ln(1, { location: u, currentLocation: d });
      (y = f.record.name),
        (p = pe({}, d.params, u.params)),
        (m = f.stringify(p));
    }
    const x = [];
    let b = f;
    for (; b; ) x.unshift(b.record), (b = b.parent);
    return { name: y, path: m, params: p, matched: x, meta: om(x) };
  }
  return (
    e.forEach((u) => i(u)),
    {
      addRoute: i,
      resolve: c,
      removeRoute: s,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function Ml(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function nm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: rm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function rm(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Nl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function om(e) {
  return e.reduce((t, n) => pe(t, n.meta), {});
}
function zl(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function oc(e, t) {
  return t.children.some((n) => n === e || oc(e, n));
}
function im(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const i = r[o].replace(Ju, " "),
      s = i.indexOf("="),
      l = fr(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : fr(i.slice(s + 1));
    if (l in t) {
      let c = t[l];
      ct(c) || (c = t[l] = [c]), c.push(a);
    } else t[l] = a;
  }
  return t;
}
function jl(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = xp(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ct(r) ? r.map((i) => i && ki(i)) : [r && ki(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function sm(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = ct(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
          ? r
          : "" + r);
  }
  return t;
}
const lm = Symbol(""),
  Fl = Symbol(""),
  Co = Symbol(""),
  ic = Symbol(""),
  Ai = Symbol("");
function jn() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Ht(e, t, n, r, o, i = (s) => s()) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((l, a) => {
      const c = (f) => {
          f === !1
            ? a(Ln(4, { from: n, to: t }))
            : f instanceof Error
              ? a(f)
              : Up(f)
                ? a(Ln(2, { from: t, to: f }))
                : (s &&
                    r.enterCallbacks[o] === s &&
                    typeof f == "function" &&
                    s.push(f),
                  l());
        },
        u = i(() => e.call(r && r.instances[o], t, n, c));
      let d = Promise.resolve(u);
      e.length < 3 && (d = d.then(c)), d.catch((f) => a(f));
    });
}
function Go(e, t, n, r, o = (i) => i()) {
  const i = [];
  for (const s of e)
    for (const l in s.components) {
      let a = s.components[l];
      if (!(t !== "beforeRouteEnter" && !s.instances[l]))
        if (am(a)) {
          const u = (a.__vccOpts || a)[t];
          u && i.push(Ht(u, n, r, s, l, o));
        } else {
          let c = a();
          i.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${l}" at "${s.path}"`),
                );
              const d = hp(u) ? u.default : u;
              s.components[l] = d;
              const p = (d.__vccOpts || d)[t];
              return p && Ht(p, n, r, s, l, o)();
            }),
          );
        }
    }
  return i;
}
function am(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Il(e) {
  const t = ze(Co),
    n = ze(ic),
    r = E(() => t.resolve(ln(e.to))),
    o = E(() => {
      const { matched: a } = r.value,
        { length: c } = a,
        u = a[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const f = d.findIndex(An.bind(null, u));
      if (f > -1) return f;
      const p = Dl(a[c - 2]);
      return c > 1 && Dl(u) === p && d[d.length - 1].path !== p
        ? d.findIndex(An.bind(null, a[c - 2]))
        : f;
    }),
    i = E(() => o.value > -1 && dm(n.params, r.value.params)),
    s = E(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        ec(n.params, r.value.params),
    );
  function l(a = {}) {
    return fm(a)
      ? t[ln(e.replace) ? "replace" : "push"](ln(e.to)).catch(tr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: E(() => r.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l,
  };
}
const um = ls({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Il,
    setup(e, { slots: t }) {
      const n = it(Il(e)),
        { options: r } = ze(Co),
        o = E(() => ({
          [Hl(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Hl(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : L(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              i,
            );
      };
    },
  }),
  cm = um;
function fm(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function dm(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!ct(o) || o.length !== r.length || r.some((i, s) => i !== o[s]))
      return !1;
  }
  return !0;
}
function Dl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Hl = (e, t, n) => e ?? t ?? n,
  hm = ls({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ze(Ai),
        o = E(() => e.route || r.value),
        i = ze(Fl, 0),
        s = E(() => {
          let c = ln(i);
          const { matched: u } = o.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        l = E(() => o.value.matched[s.value]);
      Tn(
        Fl,
        E(() => s.value + 1),
      ),
        Tn(lm, l),
        Tn(Ai, o);
      const a = ee();
      return (
        ue(
          () => [a.value, l.value, e.name],
          ([c, u, d], [f, p, m]) => {
            u &&
              ((u.instances[d] = c),
              p &&
                p !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c &&
                u &&
                (!p || !An(u, p) || !f) &&
                (u.enterCallbacks[d] || []).forEach((y) => y(c));
          },
          { flush: "post" },
        ),
        () => {
          const c = o.value,
            u = e.name,
            d = l.value,
            f = d && d.components[u];
          if (!f) return Vl(n.default, { Component: f, route: c });
          const p = d.props[u],
            m = p
              ? p === !0
                ? c.params
                : typeof p == "function"
                  ? p(c)
                  : p
              : null,
            x = L(
              f,
              pe({}, m, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (d.instances[u] = null);
                },
                ref: a,
              }),
            );
          return Vl(n.default, { Component: x, route: c }) || x;
        }
      );
    },
  });
function Vl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const pm = hm;
function mm(e) {
  const t = tm(e.routes, e),
    n = e.parseQuery || im,
    r = e.stringifyQuery || jl,
    o = e.history,
    i = jn(),
    s = jn(),
    l = jn(),
    a = Ff($t);
  let c = $t;
  yn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Ko.bind(null, (P) => "" + P),
    d = Ko.bind(null, Tp),
    f = Ko.bind(null, fr);
  function p(P, G) {
    let U, Y;
    return (
      nc(P) ? ((U = t.getRecordMatcher(P)), (Y = G)) : (Y = P), t.addRoute(Y, U)
    );
  }
  function m(P) {
    const G = t.getRecordMatcher(P);
    G && t.removeRoute(G);
  }
  function y() {
    return t.getRoutes().map((P) => P.record);
  }
  function x(P) {
    return !!t.getRecordMatcher(P);
  }
  function b(P, G) {
    if (((G = pe({}, G || a.value)), typeof P == "string")) {
      const g = Qo(n, P, G.path),
        w = t.resolve({ path: g.path }, G),
        k = o.createHref(g.fullPath);
      return pe(g, w, {
        params: f(w.params),
        hash: fr(g.hash),
        redirectedFrom: void 0,
        href: k,
      });
    }
    let U;
    if (P.path != null) U = pe({}, P, { path: Qo(n, P.path, G.path).path });
    else {
      const g = pe({}, P.params);
      for (const w in g) g[w] == null && delete g[w];
      (U = pe({}, P, { params: d(g) })), (G.params = d(G.params));
    }
    const Y = t.resolve(U, G),
      he = P.hash || "";
    Y.params = u(f(Y.params));
    const me = kp(r, pe({}, P, { hash: Ep(he), path: Y.path })),
      h = o.createHref(me);
    return pe(
      { fullPath: me, hash: he, query: r === jl ? sm(P.query) : P.query || {} },
      Y,
      { redirectedFrom: void 0, href: h },
    );
  }
  function v(P) {
    return typeof P == "string" ? Qo(n, P, a.value.path) : pe({}, P);
  }
  function _(P, G) {
    if (c !== P) return Ln(8, { from: G, to: P });
  }
  function C(P) {
    return D(P);
  }
  function O(P) {
    return C(pe(v(P), { replace: !0 }));
  }
  function B(P) {
    const G = P.matched[P.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: U } = G;
      let Y = typeof U == "function" ? U(P) : U;
      return (
        typeof Y == "string" &&
          ((Y = Y.includes("?") || Y.includes("#") ? (Y = v(Y)) : { path: Y }),
          (Y.params = {})),
        pe(
          {
            query: P.query,
            hash: P.hash,
            params: Y.path != null ? {} : P.params,
          },
          Y,
        )
      );
    }
  }
  function D(P, G) {
    const U = (c = b(P)),
      Y = a.value,
      he = P.state,
      me = P.force,
      h = P.replace === !0,
      g = B(U);
    if (g)
      return D(
        pe(v(g), {
          state: typeof g == "object" ? pe({}, he, g.state) : he,
          force: me,
          replace: h,
        }),
        G || U,
      );
    const w = U;
    w.redirectedFrom = G;
    let k;
    return (
      !me &&
        Op(r, Y, U) &&
        ((k = Ln(16, { to: w, from: Y })), Le(Y, Y, !0, !1)),
      (k ? Promise.resolve(k) : K(w, Y))
        .catch((T) => (_t(T) ? (_t(T, 2) ? T : Re(T)) : W(T, w, Y)))
        .then((T) => {
          if (T) {
            if (_t(T, 2))
              return D(
                pe({ replace: h }, v(T.to), {
                  state: typeof T.to == "object" ? pe({}, he, T.to.state) : he,
                  force: me,
                }),
                G || w,
              );
          } else T = A(w, Y, !0, h, he);
          return J(w, Y, T), T;
        })
    );
  }
  function q(P, G) {
    const U = _(P, G);
    return U ? Promise.reject(U) : Promise.resolve();
  }
  function F(P) {
    const G = dt.values().next().value;
    return G && typeof G.runWithContext == "function"
      ? G.runWithContext(P)
      : P();
  }
  function K(P, G) {
    let U;
    const [Y, he, me] = gm(P, G);
    U = Go(Y.reverse(), "beforeRouteLeave", P, G);
    for (const g of Y)
      g.leaveGuards.forEach((w) => {
        U.push(Ht(w, P, G));
      });
    const h = q.bind(null, P, G);
    return (
      U.push(h),
      ke(U)
        .then(() => {
          U = [];
          for (const g of i.list()) U.push(Ht(g, P, G));
          return U.push(h), ke(U);
        })
        .then(() => {
          U = Go(he, "beforeRouteUpdate", P, G);
          for (const g of he)
            g.updateGuards.forEach((w) => {
              U.push(Ht(w, P, G));
            });
          return U.push(h), ke(U);
        })
        .then(() => {
          U = [];
          for (const g of me)
            if (g.beforeEnter)
              if (ct(g.beforeEnter))
                for (const w of g.beforeEnter) U.push(Ht(w, P, G));
              else U.push(Ht(g.beforeEnter, P, G));
          return U.push(h), ke(U);
        })
        .then(
          () => (
            P.matched.forEach((g) => (g.enterCallbacks = {})),
            (U = Go(me, "beforeRouteEnter", P, G, F)),
            U.push(h),
            ke(U)
          ),
        )
        .then(() => {
          U = [];
          for (const g of s.list()) U.push(Ht(g, P, G));
          return U.push(h), ke(U);
        })
        .catch((g) => (_t(g, 8) ? g : Promise.reject(g)))
    );
  }
  function J(P, G, U) {
    l.list().forEach((Y) => F(() => Y(P, G, U)));
  }
  function A(P, G, U, Y, he) {
    const me = _(P, G);
    if (me) return me;
    const h = G === $t,
      g = yn ? history.state : {};
    U &&
      (Y || h
        ? o.replace(P.fullPath, pe({ scroll: h && g && g.scroll }, he))
        : o.push(P.fullPath, he)),
      (a.value = P),
      Le(P, G, U, h),
      Re();
  }
  let X;
  function V() {
    X ||
      (X = o.listen((P, G, U) => {
        if (!fn.listening) return;
        const Y = b(P),
          he = B(Y);
        if (he) {
          D(pe(he, { replace: !0 }), Y).catch(tr);
          return;
        }
        c = Y;
        const me = a.value;
        yn && zp(Al(me.fullPath, U.delta), xo()),
          K(Y, me)
            .catch((h) =>
              _t(h, 12)
                ? h
                : _t(h, 2)
                  ? (D(h.to, Y)
                      .then((g) => {
                        _t(g, 20) &&
                          !U.delta &&
                          U.type === dr.pop &&
                          o.go(-1, !1);
                      })
                      .catch(tr),
                    Promise.reject())
                  : (U.delta && o.go(-U.delta, !1), W(h, Y, me)),
            )
            .then((h) => {
              (h = h || A(Y, me, !1)),
                h &&
                  (U.delta && !_t(h, 8)
                    ? o.go(-U.delta, !1)
                    : U.type === dr.pop && _t(h, 20) && o.go(-1, !1)),
                J(Y, me, h);
            })
            .catch(tr);
      }));
  }
  let ie = jn(),
    te = jn(),
    N;
  function W(P, G, U) {
    Re(P);
    const Y = te.list();
    return (
      Y.length ? Y.forEach((he) => he(P, G, U)) : console.error(P),
      Promise.reject(P)
    );
  }
  function se() {
    return N && a.value !== $t
      ? Promise.resolve()
      : new Promise((P, G) => {
          ie.add([P, G]);
        });
  }
  function Re(P) {
    return (
      N ||
        ((N = !P),
        V(),
        ie.list().forEach(([G, U]) => (P ? U(P) : G())),
        ie.reset()),
      P
    );
  }
  function Le(P, G, U, Y) {
    const { scrollBehavior: he } = e;
    if (!yn || !he) return Promise.resolve();
    const me =
      (!U && jp(Al(P.fullPath, 0))) ||
      ((Y || !U) && history.state && history.state.scroll) ||
      null;
    return kt()
      .then(() => he(P, G, me))
      .then((h) => h && Np(h))
      .catch((h) => W(h, P, G));
  }
  const Pe = (P) => o.go(P);
  let Ze;
  const dt = new Set(),
    fn = {
      currentRoute: a,
      listening: !0,
      addRoute: p,
      removeRoute: m,
      hasRoute: x,
      getRoutes: y,
      resolve: b,
      options: e,
      push: C,
      replace: O,
      go: Pe,
      back: () => Pe(-1),
      forward: () => Pe(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: te.add,
      isReady: se,
      install(P) {
        const G = this;
        P.component("RouterLink", cm),
          P.component("RouterView", pm),
          (P.config.globalProperties.$router = G),
          Object.defineProperty(P.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ln(a),
          }),
          yn &&
            !Ze &&
            a.value === $t &&
            ((Ze = !0), C(o.location).catch((he) => {}));
        const U = {};
        for (const he in $t)
          Object.defineProperty(U, he, {
            get: () => a.value[he],
            enumerable: !0,
          });
        P.provide(Co, G), P.provide(ic, Ka(U)), P.provide(Ai, a);
        const Y = P.unmount;
        dt.add(P),
          (P.unmount = function () {
            dt.delete(P),
              dt.size < 1 &&
                ((c = $t),
                X && X(),
                (X = null),
                (a.value = $t),
                (Ze = !1),
                (N = !1)),
              Y();
          });
      },
    };
  function ke(P) {
    return P.reduce((G, U) => G.then(() => F(U)), Promise.resolve());
  }
  return fn;
}
function gm(e, t) {
  const n = [],
    r = [],
    o = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((c) => An(c, l)) ? r.push(l) : n.push(l));
    const a = e.matched[s];
    a && (t.matched.find((c) => An(c, a)) || o.push(a));
  }
  return [n, r, o];
}
function vm() {
  return ze(Co);
}
const be = (e) => Jt(ls(e)),
  sc = (e) => Jt(e);
function ft(e, t) {
  return (e !== void 0 && e()) || t;
}
function lc(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Ct(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function ym(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Ul(e, t, n, r, o, i) {
  t.key = r + o;
  const s = L(e, t, n);
  return o === !0 ? rt(s, i()) : s;
}
const bm = be({
    name: "QToolbarTitle",
    props: { shrink: Boolean },
    setup(e, { slots: t }) {
      const n = E(
        () =>
          "q-toolbar__title ellipsis" + (e.shrink === !0 ? " col-shrink" : ""),
      );
      return () => L("div", { class: n.value }, ft(t.default));
    },
  }),
  Li = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  gs = { size: String };
function vs(e, t = Li) {
  return E(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null,
  );
}
const Wl = "0 0 24 24",
  Kl = (e) => e,
  Jo = (e) => `ionicons ${e}`,
  ac = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": Kl,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": Jo,
    "ion-ios": Jo,
    "ion-logo": Jo,
    "iconfont ": Kl,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
  },
  uc = { o_: "-outlined", r_: "-round", s_: "-sharp" },
  cc = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" },
  _m = new RegExp("^(" + Object.keys(ac).join("|") + ")"),
  wm = new RegExp("^(" + Object.keys(uc).join("|") + ")"),
  Ql = new RegExp("^(" + Object.keys(cc).join("|") + ")"),
  Sm = /^[Mm]\s?[-+]?\.?\d/,
  Em = /^img:/,
  xm = /^svguse:/,
  Cm = /^ion-/,
  Tm = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,
  Qt = be({
    name: "QIcon",
    props: {
      ...gs,
      tag: { type: String, default: "i" },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ee(),
        r = vs(e),
        o = E(
          () =>
            "q-icon" +
            (e.left === !0 ? " on-left" : "") +
            (e.right === !0 ? " on-right" : "") +
            (e.color !== void 0 ? ` text-${e.color}` : ""),
        ),
        i = E(() => {
          let s,
            l = e.name;
          if (l === "none" || !l) return { none: !0 };
          if (n.iconMapFn !== null) {
            const u = n.iconMapFn(l);
            if (u !== void 0)
              if (u.icon !== void 0) {
                if (((l = u.icon), l === "none" || !l)) return { none: !0 };
              } else
                return {
                  cls: u.cls,
                  content: u.content !== void 0 ? u.content : " ",
                };
          }
          if (Sm.test(l) === !0) {
            const [u, d = Wl] = l.split("|");
            return {
              svg: !0,
              viewBox: d,
              nodes: u.split("&&").map((f) => {
                const [p, m, y] = f.split("@@");
                return L("path", { style: m, d: p, transform: y });
              }),
            };
          }
          if (Em.test(l) === !0) return { img: !0, src: l.substring(4) };
          if (xm.test(l) === !0) {
            const [u, d = Wl] = l.split("|");
            return { svguse: !0, src: u.substring(7), viewBox: d };
          }
          let a = " ";
          const c = l.match(_m);
          if (c !== null) s = ac[c[1]](l);
          else if (Tm.test(l) === !0) s = l;
          else if (Cm.test(l) === !0)
            s = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${l.substring(3)}`;
          else if (Ql.test(l) === !0) {
            s = "notranslate material-symbols";
            const u = l.match(Ql);
            u !== null && ((l = l.substring(6)), (s += cc[u[1]])), (a = l);
          } else {
            s = "notranslate material-icons";
            const u = l.match(wm);
            u !== null && ((l = l.substring(2)), (s += uc[u[1]])), (a = l);
          }
          return { cls: s, content: a };
        });
      return () => {
        const s = {
          class: o.value,
          style: r.value,
          "aria-hidden": "true",
          role: "presentation",
        };
        return i.value.none === !0
          ? L(e.tag, s, ft(t.default))
          : i.value.img === !0
            ? L(e.tag, s, Ct(t.default, [L("img", { src: i.value.src })]))
            : i.value.svg === !0
              ? L(
                  e.tag,
                  s,
                  Ct(t.default, [
                    L(
                      "svg",
                      { viewBox: i.value.viewBox || "0 0 24 24" },
                      i.value.nodes,
                    ),
                  ]),
                )
              : i.value.svguse === !0
                ? L(
                    e.tag,
                    s,
                    Ct(t.default, [
                      L("svg", { viewBox: i.value.viewBox }, [
                        L("use", { "xlink:href": i.value.src }),
                      ]),
                    ]),
                  )
                : (i.value.cls !== void 0 && (s.class += " " + i.value.cls),
                  L(e.tag, s, Ct(t.default, [i.value.content])));
      };
    },
  }),
  Rm = { size: { type: [Number, String], default: "1em" }, color: String };
function Pm(e) {
  return {
    cSize: E(() => (e.size in Li ? `${Li[e.size]}px` : e.size)),
    classes: E(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const ys = be({
  name: "QSpinner",
  props: { ...Rm, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: n } = Pm(e);
    return () =>
      L(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          L("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10",
          }),
        ],
      );
  },
});
function qi(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function km(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = ln(e);
  if (t) return t.$el || t;
}
function qy(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
function Om(e, t = 250) {
  let n = !1,
    r;
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1;
        }, t),
        (r = e.apply(this, arguments))),
      r
    );
  };
}
function Gl(e, t, n, r) {
  n.modifiers.stop === !0 && Zn(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || r === !0;
  const s = document.createElement("span"),
    l = document.createElement("span"),
    a = no(e),
    { left: c, top: u, width: d, height: f } = t.getBoundingClientRect(),
    p = Math.sqrt(d * d + f * f),
    m = p / 2,
    y = `${(d - p) / 2}px`,
    x = i ? y : `${a.left - c - m}px`,
    b = `${(f - p) / 2}px`,
    v = i ? b : `${a.top - u - m}px`;
  (l.className = "q-ripple__inner"),
    qi(l, {
      height: `${p}px`,
      width: `${p}px`,
      transform: `translate3d(${x},${v},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (s.className = `q-ripple${o ? " text-" + o : ""}`),
    s.setAttribute("dir", "ltr"),
    s.appendChild(l),
    t.appendChild(s);
  const _ = () => {
    s.remove(), clearTimeout(C);
  };
  n.abort.push(_);
  let C = setTimeout(() => {
    l.classList.add("q-ripple__inner--enter"),
      (l.style.transform = `translate3d(${y},${b},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (C = setTimeout(() => {
        l.classList.remove("q-ripple__inner--enter"),
          l.classList.add("q-ripple__inner--leave"),
          (l.style.opacity = 0),
          (C = setTimeout(() => {
            s.remove(), n.abort.splice(n.abort.indexOf(_), 1);
          }, 275));
      }, 250));
  }, 50);
}
function Jl(e, { modifiers: t, value: n, arg: r }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || r,
    keyCodes: [].concat(o.keyCodes || 13),
  };
}
const tn = sc({
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1) return;
      const r = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(o) {
          r.enabled === !0 &&
            o.qSkipRipple !== !0 &&
            o.type === (r.modifiers.early === !0 ? "pointerdown" : "click") &&
            Gl(o, e, r, o.qKeyEvent === !0);
        },
        keystart: Om((o) => {
          r.enabled === !0 &&
            o.qSkipRipple !== !0 &&
            ro(o, r.modifiers.keyCodes) === !0 &&
            o.type === `key${r.modifiers.early === !0 ? "down" : "up"}` &&
            Gl(o, e, r, !0);
        }, 300),
      };
      Jl(r, t),
        (e.__qripple = r),
        Un(r, "main", [
          [e, "pointerdown", "start", "passive"],
          [e, "click", "start", "passive"],
          [e, "keydown", "keystart", "passive"],
          [e, "keyup", "keystart", "passive"],
        ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 &&
          ((n.enabled = t.value !== !1),
          n.enabled === !0 && Object(t.value) === t.value && Jl(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 &&
        (t.abort.forEach((n) => {
          n();
        }),
        jr(t, "main"),
        delete e._qripple);
    },
  }),
  fc = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  Am = Object.keys(fc),
  dc = { align: { type: String, validator: (e) => Am.includes(e) } };
function hc(e) {
  return E(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${fc[t]}`;
  });
}
function $y(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function pc(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        pc(e, n);
      })
    : e.add(t);
}
function Lm(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      pc(t, n);
    }),
    Array.from(t)
  );
}
function mc(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Fr(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function Xl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function Yl(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function qm(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (
      Array.isArray(o) === !1 ||
      o.length !== r.length ||
      r.some((i, s) => i !== o[s])
    )
      return !1;
  }
  return !0;
}
function Zl(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function $m(e, t) {
  return Array.isArray(e) === !0
    ? Zl(e, t)
    : Array.isArray(t) === !0
      ? Zl(t, e)
      : e === t;
}
function Bm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if ($m(e[n], t[n]) === !1) return !1;
  return !0;
}
const bs = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: "q-router-link--active" },
  exactActiveClass: { type: String, default: "q-router-link--exact-active" },
  href: String,
  target: String,
  disable: Boolean,
};
function _s({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Ee(),
    { props: r, proxy: o, emit: i } = n,
    s = mc(n),
    l = E(() => r.disable !== !0 && r.href !== void 0),
    a = E(
      t === !0
        ? () =>
            s === !0 &&
            r.disable !== !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
        : () =>
            s === !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== "",
    ),
    c = E(() => (a.value === !0 ? v(r.to) : null)),
    u = E(() => c.value !== null),
    d = E(() => l.value === !0 || u.value === !0),
    f = E(() => (r.type === "a" || d.value === !0 ? "a" : r.tag || e || "div")),
    p = E(() =>
      l.value === !0
        ? { href: r.href, target: r.target }
        : u.value === !0
          ? { href: c.value.href, target: r.target }
          : {},
    ),
    m = E(() => {
      if (u.value === !1) return -1;
      const { matched: O } = c.value,
        { length: B } = O,
        D = O[B - 1];
      if (D === void 0) return -1;
      const q = o.$route.matched;
      if (q.length === 0) return -1;
      const F = q.findIndex(Yl.bind(null, D));
      if (F !== -1) return F;
      const K = Xl(O[B - 2]);
      return B > 1 && Xl(D) === K && q[q.length - 1].path !== K
        ? q.findIndex(Yl.bind(null, O[B - 2]))
        : F;
    }),
    y = E(
      () =>
        u.value === !0 && m.value !== -1 && qm(o.$route.params, c.value.params),
    ),
    x = E(
      () =>
        y.value === !0 &&
        m.value === o.$route.matched.length - 1 &&
        Bm(o.$route.params, c.value.params),
    ),
    b = E(() =>
      u.value === !0
        ? x.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
            ? ""
            : y.value === !0
              ? ` ${r.activeClass}`
              : ""
        : "",
    );
  function v(O) {
    try {
      return o.$router.resolve(O);
    } catch {}
    return null;
  }
  function _(
    O,
    { returnRouterError: B, to: D = r.to, replace: q = r.replace } = {},
  ) {
    if (r.disable === !0) return O.preventDefault(), Promise.resolve(!1);
    if (
      O.metaKey ||
      O.altKey ||
      O.ctrlKey ||
      O.shiftKey ||
      (O.button !== void 0 && O.button !== 0) ||
      r.target === "_blank"
    )
      return Promise.resolve(!1);
    O.preventDefault();
    const F = o.$router[q === !0 ? "replace" : "push"](D);
    return B === !0 ? F : F.then(() => {}).catch(() => {});
  }
  function C(O) {
    if (u.value === !0) {
      const B = (D) => _(O, D);
      i("click", O, B), O.defaultPrevented !== !0 && B();
    } else i("click", O);
  }
  return {
    hasRouterLink: u,
    hasHrefLink: l,
    hasLink: d,
    linkTag: f,
    resolvedLink: c,
    linkIsActive: y,
    linkIsExactActive: x,
    linkClass: b,
    linkAttrs: p,
    getLink: v,
    navigateToRouterLink: _,
    navigateOnClick: C,
  };
}
const ea = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  Mm = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Nm = ["button", "submit", "reset"],
  zm = /[^\s]\/[^\s]/,
  jm = ["flat", "outline", "push", "unelevated"],
  gc = (e, t) =>
    e.flat === !0
      ? "flat"
      : e.outline === !0
        ? "outline"
        : e.push === !0
          ? "push"
          : e.unelevated === !0
            ? "unelevated"
            : t,
  Fm = (e) => {
    const t = gc(e);
    return t !== void 0 ? { [t]: !0 } : {};
  },
  Im = {
    ...gs,
    ...bs,
    type: { type: String, default: "button" },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...jm.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...dc.align, default: "center" },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function Dm(e) {
  const t = vs(e, Mm),
    n = hc(e),
    {
      hasRouterLink: r,
      hasLink: o,
      linkTag: i,
      linkAttrs: s,
      navigateOnClick: l,
    } = _s({ fallbackTag: "button" }),
    a = E(() => {
      const x = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, x, {
            padding: e.padding
              .split(/\s+/)
              .map((b) => (b in ea ? ea[b] + "px" : b))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : x;
    }),
    c = E(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    u = E(() => e.disable !== !0 && e.loading !== !0),
    d = E(() => (u.value === !0 ? e.tabindex || 0 : -1)),
    f = E(() => gc(e, "standard")),
    p = E(() => {
      const x = { tabindex: d.value };
      return (
        o.value === !0
          ? Object.assign(x, s.value)
          : Nm.includes(e.type) === !0 && (x.type = e.type),
        i.value === "a"
          ? (e.disable === !0
              ? (x["aria-disabled"] = "true")
              : x.href === void 0 && (x.role = "button"),
            r.value !== !0 && zm.test(e.type) === !0 && (x.type = e.type))
          : e.disable === !0 &&
            ((x.disabled = ""), (x["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(x, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        x
      );
    }),
    m = E(() => {
      let x;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (x = `text-${e.textColor || e.color}`)
          : (x = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (x = `text-${e.textColor}`);
      const b =
        e.round === !0
          ? "round"
          : `rectangle${c.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
      return (
        `q-btn--${f.value} q-btn--${b}` +
        (x !== void 0 ? " " + x : "") +
        (u.value === !0
          ? " q-btn--actionable q-focusable q-hoverable"
          : e.disable === !0
            ? " disabled"
            : "") +
        (e.fab === !0
          ? " q-btn--fab"
          : e.fabMini === !0
            ? " q-btn--fab-mini"
            : "") +
        (e.noCaps === !0 ? " q-btn--no-uppercase" : "") +
        (e.dense === !0 ? " q-btn--dense" : "") +
        (e.stretch === !0 ? " no-border-radius self-stretch" : "") +
        (e.glossy === !0 ? " glossy" : "") +
        (e.square ? " q-btn--square" : "")
      );
    }),
    y = E(
      () =>
        n.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : ""),
    );
  return {
    classes: m,
    style: a,
    innerClasses: y,
    attributes: p,
    hasLink: o,
    linkTag: i,
    navigateOnClick: l,
    isActionable: u,
  };
}
const { passiveCapture: We } = $e;
let pn = null,
  mn = null,
  gn = null;
const wn = be({
    name: "QBtn",
    props: {
      ...Im,
      percentage: Number,
      darkPercentage: Boolean,
      onTouchstart: [Function, Array],
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, { slots: t, emit: n }) {
      const { proxy: r } = Ee(),
        {
          classes: o,
          style: i,
          innerClasses: s,
          attributes: l,
          hasLink: a,
          linkTag: c,
          navigateOnClick: u,
          isActionable: d,
        } = Dm(e),
        f = ee(null),
        p = ee(null);
      let m = null,
        y,
        x = null;
      const b = E(
          () => e.label !== void 0 && e.label !== null && e.label !== "",
        ),
        v = E(() =>
          e.disable === !0 || e.ripple === !1
            ? !1
            : {
                keyCodes: a.value === !0 ? [13, 32] : [13],
                ...(e.ripple === !0 ? {} : e.ripple),
              },
        ),
        _ = E(() => ({ center: e.round })),
        C = E(() => {
          const V = Math.max(0, Math.min(100, e.percentage));
          return V > 0
            ? {
                transition: "transform 0.6s",
                transform: `translateX(${V - 100}%)`,
              }
            : {};
        }),
        O = E(() => {
          if (e.loading === !0)
            return {
              onMousedown: X,
              onTouchstart: X,
              onClick: X,
              onKeydown: X,
              onKeyup: X,
            };
          if (d.value === !0) {
            const V = { onClick: D, onKeydown: q, onMousedown: K };
            if (r.$q.platform.has.touch === !0) {
              const ie = e.onTouchstart !== void 0 ? "" : "Passive";
              V[`onTouchstart${ie}`] = F;
            }
            return V;
          }
          return { onClick: xt };
        }),
        B = E(() => ({
          ref: f,
          class: "q-btn q-btn-item non-selectable no-outline " + o.value,
          style: i.value,
          ...l.value,
          ...O.value,
        }));
      function D(V) {
        if (f.value !== null) {
          if (V !== void 0) {
            if (V.defaultPrevented === !0) return;
            const ie = document.activeElement;
            if (
              e.type === "submit" &&
              ie !== document.body &&
              f.value.contains(ie) === !1 &&
              ie.contains(f.value) === !1
            ) {
              f.value.focus();
              const te = () => {
                document.removeEventListener("keydown", xt, !0),
                  document.removeEventListener("keyup", te, We),
                  f.value !== null &&
                    f.value.removeEventListener("blur", te, We);
              };
              document.addEventListener("keydown", xt, !0),
                document.addEventListener("keyup", te, We),
                f.value.addEventListener("blur", te, We);
            }
          }
          u(V);
        }
      }
      function q(V) {
        f.value !== null &&
          (n("keydown", V),
          ro(V, [13, 32]) === !0 &&
            mn !== f.value &&
            (mn !== null && A(),
            V.defaultPrevented !== !0 &&
              (f.value.focus(),
              (mn = f.value),
              f.value.classList.add("q-btn--active"),
              document.addEventListener("keyup", J, !0),
              f.value.addEventListener("blur", J, We)),
            xt(V)));
      }
      function F(V) {
        f.value !== null &&
          (n("touchstart", V),
          V.defaultPrevented !== !0 &&
            (pn !== f.value &&
              (pn !== null && A(),
              (pn = f.value),
              (m = V.target),
              m.addEventListener("touchcancel", J, We),
              m.addEventListener("touchend", J, We)),
            (y = !0),
            x !== null && clearTimeout(x),
            (x = setTimeout(() => {
              (x = null), (y = !1);
            }, 200))));
      }
      function K(V) {
        f.value !== null &&
          ((V.qSkipRipple = y === !0),
          n("mousedown", V),
          V.defaultPrevented !== !0 &&
            gn !== f.value &&
            (gn !== null && A(),
            (gn = f.value),
            f.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", J, We)));
      }
      function J(V) {
        if (
          f.value !== null &&
          !(
            V !== void 0 &&
            V.type === "blur" &&
            document.activeElement === f.value
          )
        ) {
          if (V !== void 0 && V.type === "keyup") {
            if (mn === f.value && ro(V, [13, 32]) === !0) {
              const ie = new MouseEvent("click", V);
              (ie.qKeyEvent = !0),
                V.defaultPrevented === !0 && cr(ie),
                V.cancelBubble === !0 && Zn(ie),
                f.value.dispatchEvent(ie),
                xt(V),
                (V.qKeyEvent = !0);
            }
            n("keyup", V);
          }
          A();
        }
      }
      function A(V) {
        const ie = p.value;
        V !== !0 &&
          (pn === f.value || gn === f.value) &&
          ie !== null &&
          ie !== document.activeElement &&
          (ie.setAttribute("tabindex", -1), ie.focus()),
          pn === f.value &&
            (m !== null &&
              (m.removeEventListener("touchcancel", J, We),
              m.removeEventListener("touchend", J, We)),
            (pn = m = null)),
          gn === f.value &&
            (document.removeEventListener("mouseup", J, We), (gn = null)),
          mn === f.value &&
            (document.removeEventListener("keyup", J, !0),
            f.value !== null && f.value.removeEventListener("blur", J, We),
            (mn = null)),
          f.value !== null && f.value.classList.remove("q-btn--active");
      }
      function X(V) {
        xt(V), (V.qSkipRipple = !0);
      }
      return (
        De(() => {
          A(!0);
        }),
        Object.assign(r, { click: D }),
        () => {
          let V = [];
          e.icon !== void 0 &&
            V.push(
              L(Qt, {
                name: e.icon,
                left: e.stack !== !0 && b.value === !0,
                role: "img",
                "aria-hidden": "true",
              }),
            ),
            b.value === !0 && V.push(L("span", { class: "block" }, [e.label])),
            (V = Ct(t.default, V)),
            e.iconRight !== void 0 &&
              e.round === !1 &&
              V.push(
                L(Qt, {
                  name: e.iconRight,
                  right: e.stack !== !0 && b.value === !0,
                  role: "img",
                  "aria-hidden": "true",
                }),
              );
          const ie = [L("span", { class: "q-focus-helper", ref: p })];
          return (
            e.loading === !0 &&
              e.percentage !== void 0 &&
              ie.push(
                L(
                  "span",
                  {
                    class:
                      "q-btn__progress absolute-full overflow-hidden" +
                      (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                  },
                  [
                    L("span", {
                      class: "q-btn__progress-indicator fit block",
                      style: C.value,
                    }),
                  ],
                ),
              ),
            ie.push(
              L(
                "span",
                {
                  class:
                    "q-btn__content text-center col items-center q-anchor--skip " +
                    s.value,
                },
                V,
              ),
            ),
            e.loading !== null &&
              ie.push(
                L(vr, { name: "q-transition--fade" }, () =>
                  e.loading === !0
                    ? [
                        L(
                          "span",
                          {
                            key: "loading",
                            class: "absolute-full flex flex-center",
                          },
                          t.loading !== void 0 ? t.loading() : [L(ys)],
                        ),
                      ]
                    : null,
                ),
              ),
            rt(L(c.value, B.value, ie), [[tn, v.value, void 0, _.value]])
          );
        }
      );
    },
  }),
  Hm = { ratio: [String, Number] };
function Vm(e, t) {
  return E(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== !0 && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
function $i() {
  let e = null;
  const t = Ee();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    as(n),
    De(n),
    {
      removeTimeout: n,
      registerTimeout(r, o) {
        n(),
          Fr(t) === !1 &&
            (e = setTimeout(() => {
              (e = null), r();
            }, o));
      },
    }
  );
}
const Um = 1.7778,
  Xo = be({
    name: "QImg",
    props: {
      ...Hm,
      src: String,
      srcset: String,
      sizes: String,
      alt: String,
      crossorigin: String,
      decoding: String,
      referrerpolicy: String,
      draggable: Boolean,
      loading: { type: String, default: "lazy" },
      loadingShowDelay: { type: [Number, String], default: 0 },
      fetchpriority: { type: String, default: "auto" },
      width: String,
      height: String,
      initialRatio: { type: [Number, String], default: Um },
      placeholderSrc: String,
      errorSrc: String,
      fit: { type: String, default: "cover" },
      position: { type: String, default: "50% 50%" },
      imgClass: String,
      imgStyle: Object,
      noSpinner: Boolean,
      noNativeMenu: Boolean,
      noTransition: Boolean,
      spinnerColor: String,
      spinnerSize: String,
    },
    emits: ["load", "error"],
    setup(e, { slots: t, emit: n }) {
      const r = ee(e.initialRatio),
        o = Vm(e, r),
        i = Ee(),
        { registerTimeout: s, removeTimeout: l } = $i(),
        { registerTimeout: a, removeTimeout: c } = $i(),
        u = E(() =>
          e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null,
        ),
        d = E(() =>
          e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: !0 } : null,
        ),
        f = [ee(null), ee(u.value)],
        p = ee(0),
        m = ee(!1),
        y = ee(!1),
        x = E(() => `q-img q-img--${e.noNativeMenu === !0 ? "no-" : ""}menu`),
        b = E(() => ({ width: e.width, height: e.height })),
        v = E(
          () =>
            `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === !0 ? "out" : ""}-transition q-img__image--`,
        ),
        _ = E(() => ({
          ...e.imgStyle,
          objectFit: e.fit,
          objectPosition: e.position,
        }));
      function C() {
        if ((c(), e.loadingShowDelay === 0)) {
          m.value = !0;
          return;
        }
        a(() => {
          m.value = !0;
        }, e.loadingShowDelay);
      }
      function O() {
        c(), (m.value = !1);
      }
      function B({ target: A }) {
        Fr(i) === !1 &&
          (l(),
          (r.value =
            A.naturalHeight === 0 ? 0.5 : A.naturalWidth / A.naturalHeight),
          D(A, 1));
      }
      function D(A, X) {
        X === 1e3 ||
          Fr(i) === !0 ||
          (A.complete === !0
            ? q(A)
            : s(() => {
                D(A, X + 1);
              }, 50));
      }
      function q(A) {
        Fr(i) !== !0 &&
          ((p.value = p.value ^ 1),
          (f[p.value].value = null),
          O(),
          A.getAttribute("__qerror") !== "true" && (y.value = !1),
          n("load", A.currentSrc || A.src));
      }
      function F(A) {
        l(),
          O(),
          (y.value = !0),
          (f[p.value].value = d.value),
          (f[p.value ^ 1].value = u.value),
          n("error", A);
      }
      function K(A) {
        const X = f[A].value,
          V = {
            key: "img_" + A,
            class: v.value,
            style: _.value,
            alt: e.alt,
            crossorigin: e.crossorigin,
            decoding: e.decoding,
            referrerpolicy: e.referrerpolicy,
            height: e.height,
            width: e.width,
            loading: e.loading,
            fetchpriority: e.fetchpriority,
            "aria-hidden": "true",
            draggable: e.draggable,
            ...X,
          };
        return (
          p.value === A
            ? Object.assign(V, {
                class: V.class + "current",
                onLoad: B,
                onError: F,
              })
            : (V.class += "loaded"),
          L(
            "div",
            { class: "q-img__container absolute-full", key: "img" + A },
            L("img", V),
          )
        );
      }
      function J() {
        return m.value === !1
          ? L(
              "div",
              {
                key: "content",
                class: "q-img__content absolute-full q-anchor--skip",
              },
              ft(t[y.value === !0 ? "error" : "default"]),
            )
          : L(
              "div",
              {
                key: "loading",
                class: "q-img__loading absolute-full flex flex-center",
              },
              t.loading !== void 0
                ? t.loading()
                : e.noSpinner === !0
                  ? void 0
                  : [L(ys, { color: e.spinnerColor, size: e.spinnerSize })],
            );
      }
      {
        let A = function () {
          ue(
            () =>
              e.src || e.srcset || e.sizes
                ? { src: e.src, srcset: e.srcset, sizes: e.sizes }
                : null,
            (X) => {
              l(),
                (y.value = !1),
                X === null ? (O(), (f[p.value ^ 1].value = u.value)) : C(),
                (f[p.value].value = X);
            },
            { immediate: !0 },
          );
        };
        ut.value === !0 ? at(A) : A();
      }
      return () => {
        const A = [];
        return (
          o.value !== null &&
            A.push(L("div", { key: "filler", style: o.value })),
          f[0].value !== null && A.push(K(0)),
          f[1].value !== null && A.push(K(1)),
          A.push(L(vr, { name: "q-transition--fade" }, J)),
          L(
            "div",
            {
              key: "main",
              class: x.value,
              style: b.value,
              role: "img",
              "aria-label": e.alt,
            },
            A,
          )
        );
      };
    },
  }),
  Bi = be({
    name: "QAvatar",
    props: {
      ...gs,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = vs(e),
        r = E(
          () =>
            "q-avatar" +
            (e.color ? ` bg-${e.color}` : "") +
            (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") +
            (e.square === !0
              ? " q-avatar--square"
              : e.rounded === !0
                ? " rounded-borders"
                : ""),
        ),
        o = E(() => (e.fontSize ? { fontSize: e.fontSize } : null));
      return () => {
        const i = e.icon !== void 0 ? [L(Qt, { name: e.icon })] : void 0;
        return L("div", { class: r.value, style: n.value }, [
          L(
            "div",
            {
              class: "q-avatar__content row flex-center overflow-hidden",
              style: o.value,
            },
            ym(t.default, i),
          ),
        ]);
      };
    },
  }),
  Lr = be({
    name: "QBreadcrumbsEl",
    props: {
      ...bs,
      label: String,
      icon: String,
      tag: { type: String, default: "span" },
    },
    emits: ["click"],
    setup(e, { slots: t }) {
      const {
          linkTag: n,
          linkAttrs: r,
          linkClass: o,
          navigateOnClick: i,
        } = _s(),
        s = E(() => ({
          class:
            "q-breadcrumbs__el q-link flex inline items-center relative-position " +
            (e.disable !== !0
              ? "q-link--focusable" + o.value
              : "q-breadcrumbs__el--disable"),
          ...r.value,
          onClick: i,
        })),
        l = E(
          () =>
            "q-breadcrumbs__el-icon" +
            (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""),
        );
      return () => {
        const a = [];
        return (
          e.icon !== void 0 && a.push(L(Qt, { class: l.value, name: e.icon })),
          e.label !== void 0 && a.push(e.label),
          L(n.value, { ...s.value }, Ct(t.default, a))
        );
      };
    },
  }),
  Wm = ["", !0],
  Km = be({
    name: "QBreadcrumbs",
    props: {
      ...dc,
      separator: { type: String, default: "/" },
      separatorColor: String,
      activeColor: { type: String, default: "primary" },
      gutter: {
        type: String,
        validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e),
        default: "sm",
      },
    },
    setup(e, { slots: t }) {
      const n = hc(e),
        r = E(
          () =>
            `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`,
        ),
        o = E(() => (e.separatorColor ? ` text-${e.separatorColor}` : "")),
        i = E(() => ` text-${e.activeColor}`);
      return () => {
        const s = Lm(ft(t.default));
        if (s.length === 0) return;
        let l = 1;
        const a = [],
          c = s.filter(
            (d) => d.type !== void 0 && d.type.name === "QBreadcrumbsEl",
          ).length,
          u = t.separator !== void 0 ? t.separator : () => e.separator;
        return (
          s.forEach((d) => {
            if (d.type !== void 0 && d.type.name === "QBreadcrumbsEl") {
              const f = l < c,
                p = d.props !== null && Wm.includes(d.props.disable),
                m =
                  (f === !0 ? "" : " q-breadcrumbs--last") +
                  (p !== !0 && f === !0 ? i.value : "");
              l++,
                a.push(L("div", { class: `flex items-center${m}` }, [d])),
                f === !0 &&
                  a.push(
                    L(
                      "div",
                      { class: "q-breadcrumbs__separator" + o.value },
                      u(),
                    ),
                  );
            } else a.push(d);
          }),
          L("div", { class: "q-breadcrumbs" }, [
            L("div", { class: r.value }, a),
          ])
        );
      };
    },
  }),
  Qm = be({
    name: "QBtnGroup",
    props: {
      unelevated: Boolean,
      outline: Boolean,
      flat: Boolean,
      rounded: Boolean,
      square: Boolean,
      push: Boolean,
      stretch: Boolean,
      glossy: Boolean,
      spread: Boolean,
    },
    setup(e, { slots: t }) {
      const n = E(() => {
        const r = [
          "unelevated",
          "outline",
          "flat",
          "rounded",
          "square",
          "push",
          "stretch",
          "glossy",
        ]
          .filter((o) => e[o] === !0)
          .map((o) => `q-btn-group--${o}`)
          .join(" ");
        return (
          `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` +
          (e.spread === !0 ? " q-btn-group--spread" : " inline")
        );
      });
      return () => L("div", { class: n.value }, ft(t.default));
    },
  }),
  Gm = { name: String };
function Jm(e = {}) {
  return (t, n, r) => {
    t[n](L("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function By(e) {
  return E(() => e.name || e.for);
}
const Xm = be({
    name: "QBtnToggle",
    props: {
      ...Gm,
      modelValue: { required: !0 },
      options: {
        type: Array,
        required: !0,
        validator: (e) =>
          e.every(
            (t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t,
          ),
      },
      color: String,
      textColor: String,
      toggleColor: { type: String, default: "primary" },
      toggleTextColor: String,
      outline: Boolean,
      flat: Boolean,
      unelevated: Boolean,
      rounded: Boolean,
      push: Boolean,
      glossy: Boolean,
      size: String,
      padding: String,
      noCaps: Boolean,
      noWrap: Boolean,
      dense: Boolean,
      readonly: Boolean,
      disable: Boolean,
      stack: Boolean,
      stretch: Boolean,
      spread: Boolean,
      clearable: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
    },
    emits: ["update:modelValue", "clear", "click"],
    setup(e, { slots: t, emit: n }) {
      const r = E(
          () => e.options.find((f) => f.value === e.modelValue) !== void 0,
        ),
        o = E(() => ({ type: "hidden", name: e.name, value: e.modelValue })),
        i = Jm(o),
        s = E(() => Fm(e)),
        l = E(() => ({ rounded: e.rounded, dense: e.dense, ...s.value })),
        a = E(() =>
          e.options.map((f, p) => {
            const { attrs: m, value: y, slot: x, ...b } = f;
            return {
              slot: x,
              props: {
                key: p,
                "aria-pressed": y === e.modelValue ? "true" : "false",
                ...m,
                ...b,
                ...l.value,
                disable: e.disable === !0 || b.disable === !0,
                color: y === e.modelValue ? u(b, "toggleColor") : u(b, "color"),
                textColor:
                  y === e.modelValue
                    ? u(b, "toggleTextColor")
                    : u(b, "textColor"),
                noCaps: u(b, "noCaps") === !0,
                noWrap: u(b, "noWrap") === !0,
                size: u(b, "size"),
                padding: u(b, "padding"),
                ripple: u(b, "ripple"),
                stack: u(b, "stack") === !0,
                stretch: u(b, "stretch") === !0,
                onClick(v) {
                  c(y, f, v);
                },
              },
            };
          }),
        );
      function c(f, p, m) {
        e.readonly !== !0 &&
          (e.modelValue === f
            ? e.clearable === !0 &&
              (n("update:modelValue", null, null), n("clear"))
            : n("update:modelValue", f, p),
          n("click", m));
      }
      function u(f, p) {
        return f[p] === void 0 ? e[p] : f[p];
      }
      function d() {
        const f = a.value.map((p) =>
          L(wn, p.props, p.slot !== void 0 ? t[p.slot] : void 0),
        );
        return (
          e.name !== void 0 &&
            e.disable !== !0 &&
            r.value === !0 &&
            i(f, "push"),
          Ct(t.default, f)
        );
      }
      return () =>
        L(
          Qm,
          {
            class: "q-btn-toggle",
            ...s.value,
            rounded: e.rounded,
            stretch: e.stretch,
            glossy: e.glossy,
            spread: e.spread,
          },
          d,
        );
    },
  }),
  Ym = be({
    name: "QToolbar",
    props: { inset: Boolean },
    setup(e, { slots: t }) {
      const n = E(
        () =>
          "q-toolbar row no-wrap items-center" +
          (e.inset === !0 ? " q-toolbar--inset" : ""),
      );
      return () => L("div", { class: n.value, role: "toolbar" }, ft(t.default));
    },
  });
function Zm() {
  const e = ee(!ut.value);
  return (
    e.value === !1 &&
      at(() => {
        e.value = !0;
      }),
    { isHydrated: e }
  );
}
const vc = typeof ResizeObserver < "u",
  ta =
    vc === !0
      ? {}
      : {
          style:
            "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
          url: "about:blank",
        },
  hr = be({
    name: "QResizeObserver",
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ["resize"],
    setup(e, { emit: t }) {
      let n = null,
        r,
        o = { width: -1, height: -1 };
      function i(a) {
        a === !0 || e.debounce === 0 || e.debounce === "0"
          ? s()
          : n === null && (n = setTimeout(s, e.debounce));
      }
      function s() {
        if ((n !== null && (clearTimeout(n), (n = null)), r)) {
          const { offsetWidth: a, offsetHeight: c } = r;
          (a !== o.width || c !== o.height) &&
            ((o = { width: a, height: c }), t("resize", o));
        }
      }
      const { proxy: l } = Ee();
      if (((l.trigger = i), vc === !0)) {
        let a;
        const c = (u) => {
          (r = l.$el.parentNode),
            r
              ? ((a = new ResizeObserver(i)), a.observe(r), s())
              : u !== !0 &&
                kt(() => {
                  c(!0);
                });
        };
        return (
          at(() => {
            c();
          }),
          De(() => {
            n !== null && clearTimeout(n),
              a !== void 0 &&
                (a.disconnect !== void 0
                  ? a.disconnect()
                  : r && a.unobserve(r));
          }),
          Fe
        );
      } else {
        let a = function () {
            n !== null && (clearTimeout(n), (n = null)),
              d !== void 0 &&
                (d.removeEventListener !== void 0 &&
                  d.removeEventListener("resize", i, $e.passive),
                (d = void 0));
          },
          c = function () {
            a(),
              r &&
                r.contentDocument &&
                ((d = r.contentDocument.defaultView),
                d.addEventListener("resize", i, $e.passive),
                s());
          };
        const { isHydrated: u } = Zm();
        let d;
        return (
          at(() => {
            kt(() => {
              (r = l.$el), r && c();
            });
          }),
          De(a),
          () => {
            if (u.value === !0)
              return L("object", {
                class: "q--avoid-card-border",
                style: ta.style,
                tabindex: -1,
                type: "text/html",
                data: ta.url,
                "aria-hidden": "true",
                onLoad: c,
              });
          }
        );
      }
    },
  }),
  eg = be({
    name: "QHeader",
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: ["reveal", "focusin"],
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = ze(br, Xe);
      if (o === Xe)
        return console.error("QHeader needs to be child of QLayout"), Xe;
      const i = ee(parseInt(e.heightHint, 10)),
        s = ee(!0),
        l = E(
          () =>
            e.reveal === !0 ||
            o.view.value.indexOf("H") !== -1 ||
            (r.platform.is.ios && o.isContainer.value === !0),
        ),
        a = E(() => {
          if (e.modelValue !== !0) return 0;
          if (l.value === !0) return s.value === !0 ? i.value : 0;
          const v = i.value - o.scroll.value.position;
          return v > 0 ? v : 0;
        }),
        c = E(() => e.modelValue !== !0 || (l.value === !0 && s.value !== !0)),
        u = E(() => e.modelValue === !0 && c.value === !0 && e.reveal === !0),
        d = E(
          () =>
            "q-header q-layout__section--marginal " +
            (l.value === !0 ? "fixed" : "absolute") +
            "-top" +
            (e.bordered === !0 ? " q-header--bordered" : "") +
            (c.value === !0 ? " q-header--hidden" : "") +
            (e.modelValue !== !0 ? " q-layout--prevent-focus" : ""),
        ),
        f = E(() => {
          const v = o.rows.value.top,
            _ = {};
          return (
            v[0] === "l" &&
              o.left.space === !0 &&
              (_[r.lang.rtl === !0 ? "right" : "left"] = `${o.left.size}px`),
            v[2] === "r" &&
              o.right.space === !0 &&
              (_[r.lang.rtl === !0 ? "left" : "right"] = `${o.right.size}px`),
            _
          );
        });
      function p(v, _) {
        o.update("header", v, _);
      }
      function m(v, _) {
        v.value !== _ && (v.value = _);
      }
      function y({ height: v }) {
        m(i, v), p("size", v);
      }
      function x(v) {
        u.value === !0 && m(s, !0), n("focusin", v);
      }
      ue(
        () => e.modelValue,
        (v) => {
          p("space", v), m(s, !0), o.animate();
        },
      ),
        ue(a, (v) => {
          p("offset", v);
        }),
        ue(
          () => e.reveal,
          (v) => {
            v === !1 && m(s, e.modelValue);
          },
        ),
        ue(s, (v) => {
          o.animate(), n("reveal", v);
        }),
        ue(o.scroll, (v) => {
          e.reveal === !0 &&
            m(
              s,
              v.direction === "up" ||
                v.position <= e.revealOffset ||
                v.position - v.inflectionPoint < 100,
            );
        });
      const b = {};
      return (
        (o.instances.header = b),
        e.modelValue === !0 && p("size", i.value),
        p("space", e.modelValue),
        p("offset", a.value),
        De(() => {
          o.instances.header === b &&
            ((o.instances.header = void 0),
            p("size", 0),
            p("offset", 0),
            p("space", !1));
        }),
        () => {
          const v = lc(t.default, []);
          return (
            e.elevated === !0 &&
              v.push(
                L("div", {
                  class:
                    "q-layout__shadow absolute-full overflow-hidden no-pointer-events",
                }),
              ),
            v.push(L(hr, { debounce: 0, onResize: y })),
            L("header", { class: d.value, style: f.value, onFocusin: x }, v)
          );
        }
      );
    },
  }),
  pt = be({
    name: "QItemSection",
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean,
    },
    setup(e, { slots: t }) {
      const n = E(
        () =>
          `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` +
          (e.top === !0
            ? " q-item__section--top justify-start"
            : " justify-center") +
          (e.avatar === !0 ? " q-item__section--avatar" : "") +
          (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") +
          (e.noWrap === !0 ? " q-item__section--nowrap" : ""),
      );
      return () => L("div", { class: n.value }, ft(t.default));
    },
  }),
  _r = { dark: { type: Boolean, default: null } };
function wr(e, t) {
  return E(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const vn = be({
    name: "QItem",
    props: {
      ..._r,
      ...bs,
      tag: { type: String, default: "div" },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: ["click", "keyup"],
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = wr(e, r),
        {
          hasLink: i,
          linkAttrs: s,
          linkClass: l,
          linkTag: a,
          navigateOnClick: c,
        } = _s(),
        u = ee(null),
        d = ee(null),
        f = E(() => e.clickable === !0 || i.value === !0 || e.tag === "label"),
        p = E(() => e.disable !== !0 && f.value === !0),
        m = E(
          () =>
            "q-item q-item-type row no-wrap" +
            (e.dense === !0 ? " q-item--dense" : "") +
            (o.value === !0 ? " q-item--dark" : "") +
            (i.value === !0 && e.active === null
              ? l.value
              : e.active === !0
                ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}`
                : "") +
            (e.disable === !0 ? " disabled" : "") +
            (p.value === !0
              ? " q-item--clickable q-link cursor-pointer " +
                (e.manualFocus === !0
                  ? "q-manual-focusable"
                  : "q-focusable q-hoverable") +
                (e.focused === !0 ? " q-manual-focusable--focused" : "")
              : ""),
        ),
        y = E(() =>
          e.insetLevel === void 0
            ? null
            : {
                ["padding" + (r.lang.rtl === !0 ? "Right" : "Left")]:
                  16 + e.insetLevel * 56 + "px",
              },
        );
      function x(_) {
        p.value === !0 &&
          (d.value !== null &&
            (_.qKeyEvent !== !0 && document.activeElement === u.value
              ? d.value.focus()
              : document.activeElement === d.value && u.value.focus()),
          c(_));
      }
      function b(_) {
        if (p.value === !0 && ro(_, [13, 32]) === !0) {
          xt(_), (_.qKeyEvent = !0);
          const C = new MouseEvent("click", _);
          (C.qKeyEvent = !0), u.value.dispatchEvent(C);
        }
        n("keyup", _);
      }
      function v() {
        const _ = lc(t.default, []);
        return (
          p.value === !0 &&
            _.unshift(
              L("div", { class: "q-focus-helper", tabindex: -1, ref: d }),
            ),
          _
        );
      }
      return () => {
        const _ = {
          ref: u,
          class: m.value,
          style: y.value,
          role: "listitem",
          onClick: x,
          onKeyup: b,
        };
        return (
          p.value === !0
            ? ((_.tabindex = e.tabindex || "0"), Object.assign(_, s.value))
            : f.value === !0 && (_["aria-disabled"] = "true"),
          L(a.value, _, v())
        );
      };
    },
  }),
  tg = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  Yo = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 },
  Zo = be({
    name: "QSeparator",
    props: {
      ..._r,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      const t = Ee(),
        n = wr(e, t.proxy.$q),
        r = E(() => (e.vertical === !0 ? "vertical" : "horizontal")),
        o = E(() => ` q-separator--${r.value}`),
        i = E(() => (e.inset !== !1 ? `${o.value}-${tg[e.inset]}` : "")),
        s = E(
          () =>
            `q-separator${o.value}${i.value}` +
            (e.color !== void 0 ? ` bg-${e.color}` : "") +
            (n.value === !0 ? " q-separator--dark" : ""),
        ),
        l = E(() => {
          const a = {};
          if (
            (e.size !== void 0 &&
              (a[e.vertical === !0 ? "width" : "height"] = e.size),
            e.spaced !== !1)
          ) {
            const c =
                e.spaced === !0
                  ? `${Yo.md}px`
                  : e.spaced in Yo
                    ? `${Yo[e.spaced]}px`
                    : e.spaced,
              u = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
            a[`margin${u[0]}`] = a[`margin${u[1]}`] = c;
          }
          return a;
        });
      return () =>
        L("hr", {
          class: s.value,
          style: l.value,
          "aria-orientation": r.value,
        });
    },
  }),
  ng = be({
    name: "QList",
    props: {
      ..._r,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: "div" },
    },
    setup(e, { slots: t }) {
      const n = Ee(),
        r = wr(e, n.proxy.$q),
        o = E(
          () =>
            "q-list" +
            (e.bordered === !0 ? " q-list--bordered" : "") +
            (e.dense === !0 ? " q-list--dense" : "") +
            (e.separator === !0 ? " q-list--separator" : "") +
            (r.value === !0 ? " q-list--dark" : "") +
            (e.padding === !0 ? " q-list--padding" : ""),
        );
      return () => L(e.tag, { class: o.value }, ft(t.default));
    },
  }),
  rg = [
    null,
    document,
    document.body,
    document.scrollingElement,
    document.documentElement,
  ];
function yc(e, t) {
  let n = km(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return rg.includes(n) ? window : n;
}
function ws(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Ss(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function bc(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    o = ws(e);
  if (n <= 0) {
    o !== t && Mi(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const s = i - r,
      l = o + ((t - o) / Math.max(s, n)) * s;
    Mi(e, l), l !== t && bc(e, t, n - s, i);
  });
}
function _c(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    o = Ss(e);
  if (n <= 0) {
    o !== t && Ni(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const s = i - r,
      l = o + ((t - o) / Math.max(s, n)) * s;
    Ni(e, l), l !== t && _c(e, t, n - s, i);
  });
}
function Mi(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t,
    );
    return;
  }
  e.scrollTop = t;
}
function Ni(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0,
    );
    return;
  }
  e.scrollLeft = t;
}
function zi(e, t, n) {
  if (n) {
    bc(e, t, n);
    return;
  }
  Mi(e, t);
}
function ei(e, t, n) {
  if (n) {
    _c(e, t, n);
    return;
  }
  Ni(e, t);
}
let qr;
function ti() {
  if (qr !== void 0) return qr;
  const e = document.createElement("p"),
    t = document.createElement("div");
  qi(e, { width: "100%", height: "200px" }),
    qi(t, {
      position: "absolute",
      top: "0px",
      left: "0px",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden",
    }),
    t.appendChild(e),
    document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), (qr = n - r), qr;
}
function og(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
      ? e.scrollHeight > e.clientHeight &&
        (e.classList.contains("scroll") ||
          e.classList.contains("overflow-auto") ||
          ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"]))
      : e.scrollWidth > e.clientWidth &&
        (e.classList.contains("scroll") ||
          e.classList.contains("overflow-auto") ||
          ["auto", "scroll"].includes(
            window.getComputedStyle(e)["overflow-x"],
          ));
}
const { passive: na } = $e,
  ig = ["both", "horizontal", "vertical"],
  wc = be({
    name: "QScrollObserver",
    props: {
      axis: {
        type: String,
        validator: (e) => ig.includes(e),
        default: "vertical",
      },
      debounce: [String, Number],
      scrollTarget: { default: void 0 },
    },
    emits: ["scroll"],
    setup(e, { emit: t }) {
      const n = {
        position: { top: 0, left: 0 },
        direction: "down",
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let r = null,
        o,
        i;
      ue(
        () => e.scrollTarget,
        () => {
          a(), l();
        },
      );
      function s() {
        r !== null && r();
        const d = Math.max(0, ws(o)),
          f = Ss(o),
          p = { top: d - n.position.top, left: f - n.position.left };
        if (
          (e.axis === "vertical" && p.top === 0) ||
          (e.axis === "horizontal" && p.left === 0)
        )
          return;
        const m =
          Math.abs(p.top) >= Math.abs(p.left)
            ? p.top < 0
              ? "up"
              : "down"
            : p.left < 0
              ? "left"
              : "right";
        (n.position = { top: d, left: f }),
          (n.directionChanged = n.direction !== m),
          (n.delta = p),
          n.directionChanged === !0 &&
            ((n.direction = m), (n.inflectionPoint = n.position)),
          t("scroll", { ...n });
      }
      function l() {
        (o = yc(i, e.scrollTarget)), o.addEventListener("scroll", c, na), c(!0);
      }
      function a() {
        o !== void 0 && (o.removeEventListener("scroll", c, na), (o = void 0));
      }
      function c(d) {
        if (d === !0 || e.debounce === 0 || e.debounce === "0") s();
        else if (r === null) {
          const [f, p] = e.debounce
            ? [setTimeout(s, e.debounce), clearTimeout]
            : [requestAnimationFrame(s), cancelAnimationFrame];
          r = () => {
            p(f), (r = null);
          };
        }
      }
      const { proxy: u } = Ee();
      return (
        ue(() => u.$q.lang.rtl, s),
        at(() => {
          (i = u.$el.parentNode), l();
        }),
        De(() => {
          r !== null && r(), a();
        }),
        Object.assign(u, { trigger: c, getPosition: () => n }),
        Fe
      );
    },
  }),
  Es = { left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0 },
  sg = Object.keys(Es);
Es.all = !0;
function ra(e) {
  const t = {};
  for (const n of sg) e[n] === !0 && (t[n] = !0);
  return Object.keys(t).length === 0
    ? Es
    : (t.horizontal === !0
        ? (t.left = t.right = !0)
        : t.left === !0 && t.right === !0 && (t.horizontal = !0),
      t.vertical === !0
        ? (t.up = t.down = !0)
        : t.up === !0 && t.down === !0 && (t.vertical = !0),
      t.horizontal === !0 && t.vertical === !0 && (t.all = !0),
      t);
}
const lg = ["INPUT", "TEXTAREA"];
function oa(e, t) {
  return (
    t.event === void 0 &&
    e.target !== void 0 &&
    e.target.draggable !== !0 &&
    typeof t.handler == "function" &&
    lg.includes(e.target.nodeName.toUpperCase()) === !1 &&
    (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1)
  );
}
function ag() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(),
        to.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
function ni(e, t, n) {
  const r = no(e);
  let o,
    i = r.left - t.event.x,
    s = r.top - t.event.y,
    l = Math.abs(i),
    a = Math.abs(s);
  const c = t.direction;
  c.horizontal === !0 && c.vertical !== !0
    ? (o = i < 0 ? "left" : "right")
    : c.horizontal !== !0 && c.vertical === !0
      ? (o = s < 0 ? "up" : "down")
      : c.up === !0 && s < 0
        ? ((o = "up"),
          l > a &&
            (c.left === !0 && i < 0
              ? (o = "left")
              : c.right === !0 && i > 0 && (o = "right")))
        : c.down === !0 && s > 0
          ? ((o = "down"),
            l > a &&
              (c.left === !0 && i < 0
                ? (o = "left")
                : c.right === !0 && i > 0 && (o = "right")))
          : c.left === !0 && i < 0
            ? ((o = "left"),
              l < a &&
                (c.up === !0 && s < 0
                  ? (o = "up")
                  : c.down === !0 && s > 0 && (o = "down")))
            : c.right === !0 &&
              i > 0 &&
              ((o = "right"),
              l < a &&
                (c.up === !0 && s < 0
                  ? (o = "up")
                  : c.down === !0 && s > 0 && (o = "down")));
  let u = !1;
  if (o === void 0 && n === !1) {
    if (t.event.isFirst === !0 || t.event.lastDir === void 0) return {};
    (o = t.event.lastDir),
      (u = !0),
      o === "left" || o === "right"
        ? ((r.left -= i), (l = 0), (i = 0))
        : ((r.top -= s), (a = 0), (s = 0));
  }
  return {
    synthetic: u,
    payload: {
      evt: e,
      touch: t.event.mouse !== !0,
      mouse: t.event.mouse === !0,
      position: r,
      direction: o,
      isFirst: t.event.isFirst,
      isFinal: n === !0,
      duration: Date.now() - t.event.time,
      distance: { x: l, y: a },
      offset: { x: i, y: s },
      delta: { x: r.left - t.event.lastX, y: r.top - t.event.lastY },
    },
  };
}
let ug = 0;
const rr = sc({
  name: "touch-pan",
  beforeMount(e, { value: t, modifiers: n }) {
    if (n.mouse !== !0 && we.has.touch !== !0) return;
    function r(i, s) {
      n.mouse === !0 && s === !0
        ? xt(i)
        : (n.stop === !0 && Zn(i), n.prevent === !0 && cr(i));
    }
    const o = {
      uid: "qvtp_" + ug++,
      handler: t,
      modifiers: n,
      direction: ra(n),
      noop: Fe,
      mouseStart(i) {
        oa(i, o) &&
          Mh(i) &&
          (Un(o, "temp", [
            [document, "mousemove", "move", "notPassiveCapture"],
            [document, "mouseup", "end", "passiveCapture"],
          ]),
          o.start(i, !0));
      },
      touchStart(i) {
        if (oa(i, o)) {
          const s = i.target;
          Un(o, "temp", [
            [s, "touchmove", "move", "notPassiveCapture"],
            [s, "touchcancel", "end", "passiveCapture"],
            [s, "touchend", "end", "passiveCapture"],
          ]),
            o.start(i);
        }
      },
      start(i, s) {
        if (
          (we.is.firefox === !0 && Ho(e, !0),
          (o.lastEvt = i),
          s === !0 || n.stop === !0)
        ) {
          if (
            o.direction.all !== !0 &&
            (s !== !0 ||
              (o.modifiers.mouseAllDir !== !0 &&
                o.modifiers.mousealldir !== !0))
          ) {
            const c =
              i.type.indexOf("mouse") !== -1
                ? new MouseEvent(i.type, i)
                : new TouchEvent(i.type, i);
            i.defaultPrevented === !0 && cr(c),
              i.cancelBubble === !0 && Zn(c),
              Object.assign(c, {
                qKeyEvent: i.qKeyEvent,
                qClickOutside: i.qClickOutside,
                qAnchorHandled: i.qAnchorHandled,
                qClonedBy:
                  i.qClonedBy === void 0 ? [o.uid] : i.qClonedBy.concat(o.uid),
              }),
              (o.initialEvent = { target: i.target, event: c });
          }
          Zn(i);
        }
        const { left: l, top: a } = no(i);
        o.event = {
          x: l,
          y: a,
          time: Date.now(),
          mouse: s === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: l,
          lastY: a,
        };
      },
      move(i) {
        if (o.event === void 0) return;
        const s = no(i),
          l = s.left - o.event.x,
          a = s.top - o.event.y;
        if (l === 0 && a === 0) return;
        o.lastEvt = i;
        const c = o.event.mouse === !0,
          u = () => {
            r(i, c);
            let p;
            n.preserveCursor !== !0 &&
              n.preservecursor !== !0 &&
              ((p = document.documentElement.style.cursor || ""),
              (document.documentElement.style.cursor = "grabbing")),
              c === !0 &&
                document.body.classList.add("no-pointer-events--children"),
              document.body.classList.add("non-selectable"),
              ag(),
              (o.styleCleanup = (m) => {
                if (
                  ((o.styleCleanup = void 0),
                  p !== void 0 && (document.documentElement.style.cursor = p),
                  document.body.classList.remove("non-selectable"),
                  c === !0)
                ) {
                  const y = () => {
                    document.body.classList.remove(
                      "no-pointer-events--children",
                    );
                  };
                  m !== void 0
                    ? setTimeout(() => {
                        y(), m();
                      }, 50)
                    : y();
                } else m !== void 0 && m();
              });
          };
        if (o.event.detected === !0) {
          o.event.isFirst !== !0 && r(i, o.event.mouse);
          const { payload: p, synthetic: m } = ni(i, o, !1);
          p !== void 0 &&
            (o.handler(p) === !1
              ? o.end(i)
              : (o.styleCleanup === void 0 && o.event.isFirst === !0 && u(),
                (o.event.lastX = p.position.left),
                (o.event.lastY = p.position.top),
                (o.event.lastDir = m === !0 ? void 0 : p.direction),
                (o.event.isFirst = !1)));
          return;
        }
        if (
          o.direction.all === !0 ||
          (c === !0 &&
            (o.modifiers.mouseAllDir === !0 || o.modifiers.mousealldir === !0))
        ) {
          u(), (o.event.detected = !0), o.move(i);
          return;
        }
        const d = Math.abs(l),
          f = Math.abs(a);
        d !== f &&
          ((o.direction.horizontal === !0 && d > f) ||
          (o.direction.vertical === !0 && d < f) ||
          (o.direction.up === !0 && d < f && a < 0) ||
          (o.direction.down === !0 && d < f && a > 0) ||
          (o.direction.left === !0 && d > f && l < 0) ||
          (o.direction.right === !0 && d > f && l > 0)
            ? ((o.event.detected = !0), o.move(i))
            : o.end(i, !0));
      },
      end(i, s) {
        if (o.event !== void 0) {
          if ((jr(o, "temp"), we.is.firefox === !0 && Ho(e, !1), s === !0))
            o.styleCleanup !== void 0 && o.styleCleanup(),
              o.event.detected !== !0 &&
                o.initialEvent !== void 0 &&
                o.initialEvent.target.dispatchEvent(o.initialEvent.event);
          else if (o.event.detected === !0) {
            o.event.isFirst === !0 &&
              o.handler(ni(i === void 0 ? o.lastEvt : i, o).payload);
            const { payload: l } = ni(i === void 0 ? o.lastEvt : i, o, !0),
              a = () => {
                o.handler(l);
              };
            o.styleCleanup !== void 0 ? o.styleCleanup(a) : a();
          }
          (o.event = void 0), (o.initialEvent = void 0), (o.lastEvt = void 0);
        }
      },
    };
    if (((e.__qtouchpan = o), n.mouse === !0)) {
      const i = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
      Un(o, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
    }
    we.has.touch === !0 &&
      Un(o, "main", [
        [
          e,
          "touchstart",
          "touchStart",
          `passive${n.capture === !0 ? "Capture" : ""}`,
        ],
        [e, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(e, t) {
    const n = e.__qtouchpan;
    n !== void 0 &&
      (t.oldValue !== t.value &&
        (typeof value != "function" && n.end(), (n.handler = t.value)),
      (n.direction = ra(t.modifiers)));
  },
  beforeUnmount(e) {
    const t = e.__qtouchpan;
    t !== void 0 &&
      (t.event !== void 0 && t.end(),
      jr(t, "main"),
      jr(t, "temp"),
      we.is.firefox === !0 && Ho(e, !1),
      t.styleCleanup !== void 0 && t.styleCleanup(),
      delete e.__qtouchpan);
  },
});
function Tt(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function My(e, t, n) {
  if (n <= t) return t;
  const r = n - t + 1;
  let o = t + ((e - t) % r);
  return o < t && (o = r + o), o === 0 ? 0 : o;
}
const ia = ["vertical", "horizontal"],
  ri = {
    vertical: {
      offset: "offsetY",
      scroll: "scrollTop",
      dir: "down",
      dist: "y",
    },
    horizontal: {
      offset: "offsetX",
      scroll: "scrollLeft",
      dir: "right",
      dist: "x",
    },
  },
  sa = { prevent: !0, mouse: !0, mouseAllDir: !0 },
  la = (e) => (e >= 250 ? 50 : Math.ceil(e / 5)),
  cg = be({
    name: "QScrollArea",
    props: {
      ..._r,
      thumbStyle: Object,
      verticalThumbStyle: Object,
      horizontalThumbStyle: Object,
      barStyle: [Array, String, Object],
      verticalBarStyle: [Array, String, Object],
      horizontalBarStyle: [Array, String, Object],
      contentStyle: [Array, String, Object],
      contentActiveStyle: [Array, String, Object],
      delay: { type: [String, Number], default: 1e3 },
      visible: { type: Boolean, default: null },
      tabindex: [String, Number],
      onScroll: Function,
    },
    setup(e, { slots: t, emit: n }) {
      const r = ee(!1),
        o = ee(!1),
        i = ee(!1),
        s = { vertical: ee(0), horizontal: ee(0) },
        l = {
          vertical: { ref: ee(null), position: ee(0), size: ee(0) },
          horizontal: { ref: ee(null), position: ee(0), size: ee(0) },
        },
        { proxy: a } = Ee(),
        c = wr(e, a.$q);
      let u = null,
        d;
      const f = ee(null),
        p = E(
          () => "q-scrollarea" + (c.value === !0 ? " q-scrollarea--dark" : ""),
        );
      (l.vertical.percentage = E(() => {
        const N = l.vertical.size.value - s.vertical.value;
        if (N <= 0) return 0;
        const W = Tt(l.vertical.position.value / N, 0, 1);
        return Math.round(W * 1e4) / 1e4;
      })),
        (l.vertical.thumbHidden = E(
          () =>
            ((e.visible === null ? i.value : e.visible) !== !0 &&
              r.value === !1 &&
              o.value === !1) ||
            l.vertical.size.value <= s.vertical.value + 1,
        )),
        (l.vertical.thumbStart = E(
          () =>
            l.vertical.percentage.value *
            (s.vertical.value - l.vertical.thumbSize.value),
        )),
        (l.vertical.thumbSize = E(() =>
          Math.round(
            Tt(
              (s.vertical.value * s.vertical.value) / l.vertical.size.value,
              la(s.vertical.value),
              s.vertical.value,
            ),
          ),
        )),
        (l.vertical.style = E(() => ({
          ...e.thumbStyle,
          ...e.verticalThumbStyle,
          top: `${l.vertical.thumbStart.value}px`,
          height: `${l.vertical.thumbSize.value}px`,
        }))),
        (l.vertical.thumbClass = E(
          () =>
            "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" +
            (l.vertical.thumbHidden.value === !0
              ? " q-scrollarea__thumb--invisible"
              : ""),
        )),
        (l.vertical.barClass = E(
          () =>
            "q-scrollarea__bar q-scrollarea__bar--v absolute-right" +
            (l.vertical.thumbHidden.value === !0
              ? " q-scrollarea__bar--invisible"
              : ""),
        )),
        (l.horizontal.percentage = E(() => {
          const N = l.horizontal.size.value - s.horizontal.value;
          if (N <= 0) return 0;
          const W = Tt(Math.abs(l.horizontal.position.value) / N, 0, 1);
          return Math.round(W * 1e4) / 1e4;
        })),
        (l.horizontal.thumbHidden = E(
          () =>
            ((e.visible === null ? i.value : e.visible) !== !0 &&
              r.value === !1 &&
              o.value === !1) ||
            l.horizontal.size.value <= s.horizontal.value + 1,
        )),
        (l.horizontal.thumbStart = E(
          () =>
            l.horizontal.percentage.value *
            (s.horizontal.value - l.horizontal.thumbSize.value),
        )),
        (l.horizontal.thumbSize = E(() =>
          Math.round(
            Tt(
              (s.horizontal.value * s.horizontal.value) /
                l.horizontal.size.value,
              la(s.horizontal.value),
              s.horizontal.value,
            ),
          ),
        )),
        (l.horizontal.style = E(() => ({
          ...e.thumbStyle,
          ...e.horizontalThumbStyle,
          [a.$q.lang.rtl === !0 ? "right" : "left"]:
            `${l.horizontal.thumbStart.value}px`,
          width: `${l.horizontal.thumbSize.value}px`,
        }))),
        (l.horizontal.thumbClass = E(
          () =>
            "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" +
            (l.horizontal.thumbHidden.value === !0
              ? " q-scrollarea__thumb--invisible"
              : ""),
        )),
        (l.horizontal.barClass = E(
          () =>
            "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" +
            (l.horizontal.thumbHidden.value === !0
              ? " q-scrollarea__bar--invisible"
              : ""),
        ));
      const m = E(() =>
          l.vertical.thumbHidden.value === !0 &&
          l.horizontal.thumbHidden.value === !0
            ? e.contentStyle
            : e.contentActiveStyle,
        ),
        y = [
          [
            rr,
            (N) => {
              D(N, "vertical");
            },
            void 0,
            { vertical: !0, ...sa },
          ],
        ],
        x = [
          [
            rr,
            (N) => {
              D(N, "horizontal");
            },
            void 0,
            { horizontal: !0, ...sa },
          ],
        ];
      function b() {
        const N = {};
        return (
          ia.forEach((W) => {
            const se = l[W];
            (N[W + "Position"] = se.position.value),
              (N[W + "Percentage"] = se.percentage.value),
              (N[W + "Size"] = se.size.value),
              (N[W + "ContainerSize"] = s[W].value);
          }),
          N
        );
      }
      const v = Nu(() => {
        const N = b();
        (N.ref = a), n("scroll", N);
      }, 0);
      function _(N, W, se) {
        if (ia.includes(N) === !1) {
          console.error(
            "[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)",
          );
          return;
        }
        (N === "vertical" ? zi : ei)(f.value, W, se);
      }
      function C({ height: N, width: W }) {
        let se = !1;
        s.vertical.value !== N && ((s.vertical.value = N), (se = !0)),
          s.horizontal.value !== W && ((s.horizontal.value = W), (se = !0)),
          se === !0 && J();
      }
      function O({ position: N }) {
        let W = !1;
        l.vertical.position.value !== N.top &&
          ((l.vertical.position.value = N.top), (W = !0)),
          l.horizontal.position.value !== N.left &&
            ((l.horizontal.position.value = N.left), (W = !0)),
          W === !0 && J();
      }
      function B({ height: N, width: W }) {
        l.horizontal.size.value !== W && ((l.horizontal.size.value = W), J()),
          l.vertical.size.value !== N && ((l.vertical.size.value = N), J());
      }
      function D(N, W) {
        const se = l[W];
        if (N.isFirst === !0) {
          if (se.thumbHidden.value === !0) return;
          (d = se.position.value), (o.value = !0);
        } else if (o.value !== !0) return;
        N.isFinal === !0 && (o.value = !1);
        const Re = ri[W],
          Le = s[W].value,
          Pe = (se.size.value - Le) / (Le - se.thumbSize.value),
          Ze = N.distance[Re.dist],
          dt = d + (N.direction === Re.dir ? 1 : -1) * Ze * Pe;
        A(dt, W);
      }
      function q(N, W) {
        const se = l[W];
        if (se.thumbHidden.value !== !0) {
          const Re = N[ri[W].offset];
          if (
            Re < se.thumbStart.value ||
            Re > se.thumbStart.value + se.thumbSize.value
          ) {
            const Le = Re - se.thumbSize.value / 2;
            A((Le / s[W].value) * se.size.value, W);
          }
          se.ref.value !== null &&
            se.ref.value.dispatchEvent(new MouseEvent(N.type, N));
        }
      }
      function F(N) {
        q(N, "vertical");
      }
      function K(N) {
        q(N, "horizontal");
      }
      function J() {
        (r.value = !0),
          u !== null && clearTimeout(u),
          (u = setTimeout(() => {
            (u = null), (r.value = !1);
          }, e.delay)),
          e.onScroll !== void 0 && v();
      }
      function A(N, W) {
        f.value[ri[W].scroll] = N;
      }
      let X = null;
      function V() {
        X !== null && clearTimeout(X),
          (X = setTimeout(
            () => {
              (X = null), (i.value = !0);
            },
            a.$q.platform.is.ios ? 50 : 0,
          ));
      }
      function ie() {
        X !== null && (clearTimeout(X), (X = null)), (i.value = !1);
      }
      let te = null;
      return (
        ue(
          () => a.$q.lang.rtl,
          (N) => {
            f.value !== null &&
              ei(
                f.value,
                Math.abs(l.horizontal.position.value) * (N === !0 ? -1 : 1),
              );
          },
        ),
        as(() => {
          te = {
            top: l.vertical.position.value,
            left: l.horizontal.position.value,
          };
        }),
        du(() => {
          if (te === null) return;
          const N = f.value;
          N !== null && (ei(N, te.left), zi(N, te.top));
        }),
        De(v.cancel),
        Object.assign(a, {
          getScrollTarget: () => f.value,
          getScroll: b,
          getScrollPosition: () => ({
            top: l.vertical.position.value,
            left: l.horizontal.position.value,
          }),
          getScrollPercentage: () => ({
            top: l.vertical.percentage.value,
            left: l.horizontal.percentage.value,
          }),
          setScrollPosition: _,
          setScrollPercentage(N, W, se) {
            _(
              N,
              W *
                (l[N].size.value - s[N].value) *
                (N === "horizontal" && a.$q.lang.rtl === !0 ? -1 : 1),
              se,
            );
          },
        }),
        () =>
          L("div", { class: p.value, onMouseenter: V, onMouseleave: ie }, [
            L(
              "div",
              {
                ref: f,
                class:
                  "q-scrollarea__container scroll relative-position fit hide-scrollbar",
                tabindex: e.tabindex !== void 0 ? e.tabindex : void 0,
              },
              [
                L(
                  "div",
                  { class: "q-scrollarea__content absolute", style: m.value },
                  Ct(t.default, [L(hr, { debounce: 0, onResize: B })]),
                ),
                L(wc, { axis: "both", onScroll: O }),
              ],
            ),
            L(hr, { debounce: 0, onResize: C }),
            L("div", {
              class: l.vertical.barClass.value,
              style: [e.barStyle, e.verticalBarStyle],
              "aria-hidden": "true",
              onMousedown: F,
            }),
            L("div", {
              class: l.horizontal.barClass.value,
              style: [e.barStyle, e.horizontalBarStyle],
              "aria-hidden": "true",
              onMousedown: K,
            }),
            rt(
              L("div", {
                ref: l.vertical.ref,
                class: l.vertical.thumbClass.value,
                style: l.vertical.style.value,
                "aria-hidden": "true",
              }),
              y,
            ),
            rt(
              L("div", {
                ref: l.horizontal.ref,
                class: l.horizontal.thumbClass.value,
                style: l.horizontal.style.value,
                "aria-hidden": "true",
              }),
              x,
            ),
          ])
      );
    },
  });
function fg(e, t, n) {
  let r;
  function o() {
    r !== void 0 && (Ti.remove(r), (r = void 0));
  }
  return (
    De(() => {
      e.value === !0 && o();
    }),
    {
      removeFromHistory: o,
      addToHistory() {
        (r = { condition: () => n.value === !0, handler: t }), Ti.add(r);
      },
    }
  );
}
const dg = {
    modelValue: { type: Boolean, default: null },
    "onUpdate:modelValue": [Function, Array],
  },
  hg = ["beforeShow", "show", "beforeHide", "hide"];
function pg({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: o,
  processOnMount: i,
}) {
  const s = Ee(),
    { props: l, emit: a, proxy: c } = s;
  let u;
  function d(v) {
    e.value === !0 ? m(v) : f(v);
  }
  function f(v) {
    if (
      l.disable === !0 ||
      (v !== void 0 && v.qAnchorHandled === !0) ||
      (t !== void 0 && t(v) !== !0)
    )
      return;
    const _ = l["onUpdate:modelValue"] !== void 0;
    _ === !0 &&
      (a("update:modelValue", !0),
      (u = v),
      kt(() => {
        u === v && (u = void 0);
      })),
      (l.modelValue === null || _ === !1) && p(v);
  }
  function p(v) {
    e.value !== !0 &&
      ((e.value = !0), a("beforeShow", v), r !== void 0 ? r(v) : a("show", v));
  }
  function m(v) {
    if (l.disable === !0) return;
    const _ = l["onUpdate:modelValue"] !== void 0;
    _ === !0 &&
      (a("update:modelValue", !1),
      (u = v),
      kt(() => {
        u === v && (u = void 0);
      })),
      (l.modelValue === null || _ === !1) && y(v);
  }
  function y(v) {
    e.value !== !1 &&
      ((e.value = !1), a("beforeHide", v), o !== void 0 ? o(v) : a("hide", v));
  }
  function x(v) {
    l.disable === !0 && v === !0
      ? l["onUpdate:modelValue"] !== void 0 && a("update:modelValue", !1)
      : (v === !0) !== e.value && (v === !0 ? p : y)(u);
  }
  ue(() => l.modelValue, x),
    n !== void 0 &&
      mc(s) === !0 &&
      ue(
        () => c.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && m();
        },
      ),
    i === !0 &&
      at(() => {
        x(l.modelValue);
      });
  const b = { show: f, hide: m, toggle: d };
  return Object.assign(c, b), b;
}
let Fn = 0,
  oi,
  ii,
  Wn,
  si = !1,
  aa,
  ua,
  ca,
  en = null;
function mg(e) {
  gg(e) && xt(e);
}
function gg(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = Nh(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    o = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (og(s, r))
      return r
        ? o < 0 && s.scrollTop === 0
          ? !0
          : o > 0 && s.scrollTop + s.clientHeight === s.scrollHeight
        : o < 0 && s.scrollLeft === 0
          ? !0
          : o > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth;
  }
  return !0;
}
function fa(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function $r(e) {
  si !== !0 &&
    ((si = !0),
    requestAnimationFrame(() => {
      si = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      (Wn === void 0 || t !== window.innerHeight) &&
        ((Wn = n - t), (document.scrollingElement.scrollTop = r)),
        r > Wn &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - Wn) / 8));
    }));
}
function da(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: o } = window.getComputedStyle(t);
    (oi = Ss(window)),
      (ii = ws(window)),
      (aa = t.style.left),
      (ua = t.style.top),
      (ca = window.location.href),
      (t.style.left = `-${oi}px`),
      (t.style.top = `-${ii}px`),
      o !== "hidden" &&
        (o === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      r !== "hidden" &&
        (r === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      we.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              $r,
              $e.passiveCapture,
            ),
            window.visualViewport.addEventListener(
              "scroll",
              $r,
              $e.passiveCapture,
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", fa, $e.passiveCapture));
  }
  we.is.desktop === !0 &&
    we.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", mg, $e.notPassive),
    e === "remove" &&
      (we.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              $r,
              $e.passiveCapture,
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              $r,
              $e.passiveCapture,
            ))
          : window.removeEventListener("scroll", fa, $e.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = aa),
      (t.style.top = ua),
      window.location.href === ca && window.scrollTo(oi, ii),
      (Wn = void 0));
}
function vg(e) {
  let t = "add";
  if (e === !0) {
    if ((Fn++, en !== null)) {
      clearTimeout(en), (en = null);
      return;
    }
    if (Fn > 1) return;
  } else {
    if (Fn === 0 || (Fn--, Fn > 0)) return;
    if (((t = "remove"), we.is.ios === !0 && we.is.nativeMobile === !0)) {
      en !== null && clearTimeout(en),
        (en = setTimeout(() => {
          da(t), (en = null);
        }, 100));
      return;
    }
  }
  da(t);
}
function yg() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), vg(t));
    },
  };
}
const ha = 150,
  bg = be({
    name: "QDrawer",
    inheritAttrs: !1,
    props: {
      ...dg,
      ..._r,
      side: {
        type: String,
        default: "left",
        validator: (e) => ["left", "right"].includes(e),
      },
      width: { type: Number, default: 300 },
      mini: Boolean,
      miniToOverlay: Boolean,
      miniWidth: { type: Number, default: 57 },
      noMiniAnimation: Boolean,
      breakpoint: { type: Number, default: 1023 },
      showIfAbove: Boolean,
      behavior: {
        type: String,
        validator: (e) => ["default", "desktop", "mobile"].includes(e),
        default: "default",
      },
      bordered: Boolean,
      elevated: Boolean,
      overlay: Boolean,
      persistent: Boolean,
      noSwipeOpen: Boolean,
      noSwipeClose: Boolean,
      noSwipeBackdrop: Boolean,
    },
    emits: [...hg, "onLayout", "miniState"],
    setup(e, { slots: t, emit: n, attrs: r }) {
      const o = Ee(),
        {
          proxy: { $q: i },
        } = o,
        s = wr(e, i),
        { preventBodyScroll: l } = yg(),
        { registerTimeout: a, removeTimeout: c } = $i(),
        u = ze(br, Xe);
      if (u === Xe)
        return console.error("QDrawer needs to be child of QLayout"), Xe;
      let d,
        f = null,
        p;
      const m = ee(
          e.behavior === "mobile" ||
            (e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint),
        ),
        y = E(() => e.mini === !0 && m.value !== !0),
        x = E(() => (y.value === !0 ? e.miniWidth : e.width)),
        b = ee(
          e.showIfAbove === !0 && m.value === !1 ? !0 : e.modelValue === !0,
        ),
        v = E(() => e.persistent !== !0 && (m.value === !0 || Re.value === !0));
      function _(S, j) {
        if ((D(), S !== !1 && u.animate(), h(0), m.value === !0)) {
          const Q = u.instances[te.value];
          Q !== void 0 && Q.belowBreakpoint === !0 && Q.hide(!1),
            g(1),
            u.isContainer.value !== !0 && l(!0);
        } else g(0), S !== !1 && w(!1);
        a(() => {
          S !== !1 && w(!0), j !== !0 && n("show", S);
        }, ha);
      }
      function C(S, j) {
        q(),
          S !== !1 && u.animate(),
          g(0),
          h(J.value * x.value),
          H(),
          j !== !0
            ? a(() => {
                n("hide", S);
              }, ha)
            : c();
      }
      const { show: O, hide: B } = pg({
          showing: b,
          hideOnRouteChange: v,
          handleShow: _,
          handleHide: C,
        }),
        { addToHistory: D, removeFromHistory: q } = fg(b, B, v),
        F = { belowBreakpoint: m, hide: B },
        K = E(() => e.side === "right"),
        J = E(() => (i.lang.rtl === !0 ? -1 : 1) * (K.value === !0 ? 1 : -1)),
        A = ee(0),
        X = ee(!1),
        V = ee(!1),
        ie = ee(x.value * J.value),
        te = E(() => (K.value === !0 ? "left" : "right")),
        N = E(() =>
          b.value === !0 && m.value === !1 && e.overlay === !1
            ? e.miniToOverlay === !0
              ? e.miniWidth
              : x.value
            : 0,
        ),
        W = E(
          () =>
            e.overlay === !0 ||
            e.miniToOverlay === !0 ||
            u.view.value.indexOf(K.value ? "R" : "L") !== -1 ||
            (i.platform.is.ios === !0 && u.isContainer.value === !0),
        ),
        se = E(() => e.overlay === !1 && b.value === !0 && m.value === !1),
        Re = E(() => e.overlay === !0 && b.value === !0 && m.value === !1),
        Le = E(
          () =>
            "fullscreen q-drawer__backdrop" +
            (b.value === !1 && X.value === !1 ? " hidden" : ""),
        ),
        Pe = E(() => ({ backgroundColor: `rgba(0,0,0,${A.value * 0.4})` })),
        Ze = E(() =>
          K.value === !0
            ? u.rows.value.top[2] === "r"
            : u.rows.value.top[0] === "l",
        ),
        dt = E(() =>
          K.value === !0
            ? u.rows.value.bottom[2] === "r"
            : u.rows.value.bottom[0] === "l",
        ),
        fn = E(() => {
          const S = {};
          return (
            u.header.space === !0 &&
              Ze.value === !1 &&
              (W.value === !0
                ? (S.top = `${u.header.offset}px`)
                : u.header.space === !0 && (S.top = `${u.header.size}px`)),
            u.footer.space === !0 &&
              dt.value === !1 &&
              (W.value === !0
                ? (S.bottom = `${u.footer.offset}px`)
                : u.footer.space === !0 && (S.bottom = `${u.footer.size}px`)),
            S
          );
        }),
        ke = E(() => {
          const S = {
            width: `${x.value}px`,
            transform: `translateX(${ie.value}px)`,
          };
          return m.value === !0 ? S : Object.assign(S, fn.value);
        }),
        P = E(
          () =>
            "q-drawer__content fit " +
            (u.isContainer.value !== !0 ? "scroll" : "overflow-auto"),
        ),
        G = E(
          () =>
            `q-drawer q-drawer--${e.side}` +
            (V.value === !0 ? " q-drawer--mini-animate" : "") +
            (e.bordered === !0 ? " q-drawer--bordered" : "") +
            (s.value === !0 ? " q-drawer--dark q-dark" : "") +
            (X.value === !0
              ? " no-transition"
              : b.value === !0
                ? ""
                : " q-layout--prevent-focus") +
            (m.value === !0
              ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding"
              : ` q-drawer--${y.value === !0 ? "mini" : "standard"}` +
                (W.value === !0 || se.value !== !0 ? " fixed" : "") +
                (e.overlay === !0 || e.miniToOverlay === !0
                  ? " q-drawer--on-top"
                  : "") +
                (Ze.value === !0 ? " q-drawer--top-padding" : "")),
        ),
        U = E(() => {
          const S = i.lang.rtl === !0 ? e.side : te.value;
          return [[rr, T, void 0, { [S]: !0, mouse: !0 }]];
        }),
        Y = E(() => {
          const S = i.lang.rtl === !0 ? te.value : e.side;
          return [[rr, z, void 0, { [S]: !0, mouse: !0 }]];
        }),
        he = E(() => {
          const S = i.lang.rtl === !0 ? te.value : e.side;
          return [[rr, z, void 0, { [S]: !0, mouse: !0, mouseAllDir: !0 }]];
        });
      function me() {
        I(
          m,
          e.behavior === "mobile" ||
            (e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint),
        );
      }
      ue(m, (S) => {
        S === !0
          ? ((d = b.value), b.value === !0 && B(!1))
          : e.overlay === !1 &&
            e.behavior !== "mobile" &&
            d !== !1 &&
            (b.value === !0 ? (h(0), g(0), H()) : O(!1));
      }),
        ue(
          () => e.side,
          (S, j) => {
            u.instances[j] === F &&
              ((u.instances[j] = void 0), (u[j].space = !1), (u[j].offset = 0)),
              (u.instances[S] = F),
              (u[S].size = x.value),
              (u[S].space = se.value),
              (u[S].offset = N.value);
          },
        ),
        ue(u.totalWidth, () => {
          (u.isContainer.value === !0 || document.qScrollPrevented !== !0) &&
            me();
        }),
        ue(() => e.behavior + e.breakpoint, me),
        ue(u.isContainer, (S) => {
          b.value === !0 && l(S !== !0), S === !0 && me();
        }),
        ue(u.scrollbarWidth, () => {
          h(b.value === !0 ? 0 : void 0);
        }),
        ue(N, (S) => {
          M("offset", S);
        }),
        ue(se, (S) => {
          n("onLayout", S), M("space", S);
        }),
        ue(K, () => {
          h();
        }),
        ue(x, (S) => {
          h(), $(e.miniToOverlay, S);
        }),
        ue(
          () => e.miniToOverlay,
          (S) => {
            $(S, x.value);
          },
        ),
        ue(
          () => i.lang.rtl,
          () => {
            h();
          },
        ),
        ue(
          () => e.mini,
          () => {
            e.noMiniAnimation || (e.modelValue === !0 && (k(), u.animate()));
          },
        ),
        ue(y, (S) => {
          n("miniState", S);
        });
      function h(S) {
        S === void 0
          ? kt(() => {
              (S = b.value === !0 ? 0 : x.value), h(J.value * S);
            })
          : (u.isContainer.value === !0 &&
              K.value === !0 &&
              (m.value === !0 || Math.abs(S) === x.value) &&
              (S += J.value * u.scrollbarWidth.value),
            (ie.value = S));
      }
      function g(S) {
        A.value = S;
      }
      function w(S) {
        const j = S === !0 ? "remove" : u.isContainer.value !== !0 ? "add" : "";
        j !== "" && document.body.classList[j]("q-body--drawer-toggle");
      }
      function k() {
        f !== null && clearTimeout(f),
          o.proxy &&
            o.proxy.$el &&
            o.proxy.$el.classList.add("q-drawer--mini-animate"),
          (V.value = !0),
          (f = setTimeout(() => {
            (f = null),
              (V.value = !1),
              o &&
                o.proxy &&
                o.proxy.$el &&
                o.proxy.$el.classList.remove("q-drawer--mini-animate");
          }, 150));
      }
      function T(S) {
        if (b.value !== !1) return;
        const j = x.value,
          Q = Tt(S.distance.x, 0, j);
        if (S.isFinal === !0) {
          Q >= Math.min(75, j) === !0
            ? O()
            : (u.animate(), g(0), h(J.value * j)),
            (X.value = !1);
          return;
        }
        h(
          (i.lang.rtl === !0 ? K.value !== !0 : K.value)
            ? Math.max(j - Q, 0)
            : Math.min(0, Q - j),
        ),
          g(Tt(Q / j, 0, 1)),
          S.isFirst === !0 && (X.value = !0);
      }
      function z(S) {
        if (b.value !== !0) return;
        const j = x.value,
          Q = S.direction === e.side,
          ne = (i.lang.rtl === !0 ? Q !== !0 : Q) ? Tt(S.distance.x, 0, j) : 0;
        if (S.isFinal === !0) {
          Math.abs(ne) < Math.min(75, j) === !0
            ? (u.animate(), g(1), h(0))
            : B(),
            (X.value = !1);
          return;
        }
        h(J.value * ne),
          g(Tt(1 - ne / j, 0, 1)),
          S.isFirst === !0 && (X.value = !0);
      }
      function H() {
        l(!1), w(!0);
      }
      function M(S, j) {
        u.update(e.side, S, j);
      }
      function I(S, j) {
        S.value !== j && (S.value = j);
      }
      function $(S, j) {
        M("size", S === !0 ? e.miniWidth : j);
      }
      return (
        (u.instances[e.side] = F),
        $(e.miniToOverlay, x.value),
        M("space", se.value),
        M("offset", N.value),
        e.showIfAbove === !0 &&
          e.modelValue !== !0 &&
          b.value === !0 &&
          e["onUpdate:modelValue"] !== void 0 &&
          n("update:modelValue", !0),
        at(() => {
          n("onLayout", se.value),
            n("miniState", y.value),
            (d = e.showIfAbove === !0);
          const S = () => {
            (b.value === !0 ? _ : C)(!1, !0);
          };
          if (u.totalWidth.value !== 0) {
            kt(S);
            return;
          }
          p = ue(u.totalWidth, () => {
            p(),
              (p = void 0),
              b.value === !1 && e.showIfAbove === !0 && m.value === !1
                ? O(!1)
                : S();
          });
        }),
        De(() => {
          p !== void 0 && p(),
            f !== null && (clearTimeout(f), (f = null)),
            b.value === !0 && H(),
            u.instances[e.side] === F &&
              ((u.instances[e.side] = void 0),
              M("size", 0),
              M("offset", 0),
              M("space", !1));
        }),
        () => {
          const S = [];
          m.value === !0 &&
            (e.noSwipeOpen === !1 &&
              S.push(
                rt(
                  L("div", {
                    key: "open",
                    class: `q-drawer__opener fixed-${e.side}`,
                    "aria-hidden": "true",
                  }),
                  U.value,
                ),
              ),
            S.push(
              Ul(
                "div",
                {
                  ref: "backdrop",
                  class: Le.value,
                  style: Pe.value,
                  "aria-hidden": "true",
                  onClick: B,
                },
                void 0,
                "backdrop",
                e.noSwipeBackdrop !== !0 && b.value === !0,
                () => he.value,
              ),
            ));
          const j = y.value === !0 && t.mini !== void 0,
            Q = [
              L(
                "div",
                { ...r, key: "" + j, class: [P.value, r.class] },
                j === !0 ? t.mini() : ft(t.default),
              ),
            ];
          return (
            e.elevated === !0 &&
              b.value === !0 &&
              Q.push(
                L("div", {
                  class:
                    "q-layout__shadow absolute-full overflow-hidden no-pointer-events",
                }),
              ),
            S.push(
              Ul(
                "aside",
                { ref: "content", class: G.value, style: ke.value },
                Q,
                "contentclose",
                e.noSwipeClose !== !0 && m.value === !0,
                () => Y.value,
              ),
            ),
            L("div", { class: "q-drawer-container" }, S)
          );
        }
      );
    },
  }),
  _g = {
    position: {
      type: String,
      default: "bottom-right",
      validator: (e) =>
        [
          "top-right",
          "top-left",
          "bottom-right",
          "bottom-left",
          "top",
          "right",
          "bottom",
          "left",
        ].includes(e),
    },
    offset: { type: Array, validator: (e) => e.length === 2 },
    expand: Boolean,
  };
function wg() {
  const {
      props: e,
      proxy: { $q: t },
    } = Ee(),
    n = ze(br, Xe);
  if (n === Xe)
    return console.error("QPageSticky needs to be child of QLayout"), Xe;
  const r = E(() => {
      const d = e.position;
      return {
        top: d.indexOf("top") !== -1,
        right: d.indexOf("right") !== -1,
        bottom: d.indexOf("bottom") !== -1,
        left: d.indexOf("left") !== -1,
        vertical: d === "top" || d === "bottom",
        horizontal: d === "left" || d === "right",
      };
    }),
    o = E(() => n.header.offset),
    i = E(() => n.right.offset),
    s = E(() => n.footer.offset),
    l = E(() => n.left.offset),
    a = E(() => {
      let d = 0,
        f = 0;
      const p = r.value,
        m = t.lang.rtl === !0 ? -1 : 1;
      p.top === !0 && o.value !== 0
        ? (f = `${o.value}px`)
        : p.bottom === !0 && s.value !== 0 && (f = `${-s.value}px`),
        p.left === !0 && l.value !== 0
          ? (d = `${m * l.value}px`)
          : p.right === !0 && i.value !== 0 && (d = `${-m * i.value}px`);
      const y = { transform: `translate(${d}, ${f})` };
      return (
        e.offset && (y.margin = `${e.offset[1]}px ${e.offset[0]}px`),
        p.vertical === !0
          ? (l.value !== 0 &&
              (y[t.lang.rtl === !0 ? "right" : "left"] = `${l.value}px`),
            i.value !== 0 &&
              (y[t.lang.rtl === !0 ? "left" : "right"] = `${i.value}px`))
          : p.horizontal === !0 &&
            (o.value !== 0 && (y.top = `${o.value}px`),
            s.value !== 0 && (y.bottom = `${s.value}px`)),
        y
      );
    }),
    c = E(
      () =>
        `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === !0 ? "expand" : "shrink"}`,
    );
  function u(d) {
    const f = ft(d.default);
    return L(
      "div",
      { class: c.value, style: a.value },
      e.expand === !0 ? f : [L("div", f)],
    );
  }
  return { $layout: n, getStickyContent: u };
}
const Sg = be({
    name: "QPageScroller",
    props: {
      ..._g,
      scrollOffset: { type: Number, default: 1e3 },
      reverse: Boolean,
      duration: { type: Number, default: 300 },
      offset: { default: () => [18, 18] },
    },
    emits: ["click"],
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        { $layout: o, getStickyContent: i } = wg(),
        s = ee(null);
      let l;
      const a = E(
        () =>
          o.height.value -
          (o.isContainer.value === !0
            ? o.containerHeight.value
            : r.screen.height),
      );
      function c() {
        return e.reverse === !0
          ? a.value - o.scroll.value.position > e.scrollOffset
          : o.scroll.value.position > e.scrollOffset;
      }
      const u = ee(c());
      function d() {
        const x = c();
        u.value !== x && (u.value = x);
      }
      function f() {
        e.reverse === !0 ? l === void 0 && (l = ue(a, d)) : p();
      }
      ue(o.scroll, d), ue(() => e.reverse, f);
      function p() {
        l !== void 0 && (l(), (l = void 0));
      }
      function m(x) {
        const b = yc(o.isContainer.value === !0 ? s.value : o.rootRef.value);
        zi(b, e.reverse === !0 ? o.height.value : 0, e.duration), n("click", x);
      }
      function y() {
        return u.value === !0
          ? L("div", { ref: s, class: "q-page-scroller", onClick: m }, i(t))
          : null;
      }
      return f(), De(p), () => L(vr, { name: "q-transition--fade" }, y);
    },
  }),
  Eg = be({
    name: "QPageContainer",
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ee(),
        r = ze(br, Xe);
      if (r === Xe)
        return console.error("QPageContainer needs to be child of QLayout"), Xe;
      Tn(Jh, !0);
      const o = E(() => {
        const i = {};
        return (
          r.header.space === !0 && (i.paddingTop = `${r.header.size}px`),
          r.right.space === !0 &&
            (i[`padding${n.lang.rtl === !0 ? "Left" : "Right"}`] =
              `${r.right.size}px`),
          r.footer.space === !0 && (i.paddingBottom = `${r.footer.size}px`),
          r.left.space === !0 &&
            (i[`padding${n.lang.rtl === !0 ? "Right" : "Left"}`] =
              `${r.left.size}px`),
          i
        );
      });
      return () =>
        L("div", { class: "q-page-container", style: o.value }, ft(t.default));
    },
  }),
  xg = be({
    name: "QLayout",
    props: {
      container: Boolean,
      view: {
        type: String,
        default: "hhh lpr fff",
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = ee(null),
        i = ee(r.screen.height),
        s = ee(e.container === !0 ? 0 : r.screen.width),
        l = ee({ position: 0, direction: "down", inflectionPoint: 0 }),
        a = ee(0),
        c = ee(ut.value === !0 ? 0 : ti()),
        u = E(
          () =>
            "q-layout q-layout--" +
            (e.container === !0 ? "containerized" : "standard"),
        ),
        d = E(() =>
          e.container === !1 ? { minHeight: r.screen.height + "px" } : null,
        ),
        f = E(() =>
          c.value !== 0
            ? { [r.lang.rtl === !0 ? "left" : "right"]: `${c.value}px` }
            : null,
        ),
        p = E(() =>
          c.value !== 0
            ? {
                [r.lang.rtl === !0 ? "right" : "left"]: 0,
                [r.lang.rtl === !0 ? "left" : "right"]: `-${c.value}px`,
                width: `calc(100% + ${c.value}px)`,
              }
            : null,
        );
      function m(C) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const O = {
            position: C.position.top,
            direction: C.direction,
            directionChanged: C.directionChanged,
            inflectionPoint: C.inflectionPoint.top,
            delta: C.delta.top,
          };
          (l.value = O), e.onScroll !== void 0 && n("scroll", O);
        }
      }
      function y(C) {
        const { height: O, width: B } = C;
        let D = !1;
        i.value !== O &&
          ((D = !0),
          (i.value = O),
          e.onScrollHeight !== void 0 && n("scrollHeight", O),
          b()),
          s.value !== B && ((D = !0), (s.value = B)),
          D === !0 && e.onResize !== void 0 && n("resize", C);
      }
      function x({ height: C }) {
        a.value !== C && ((a.value = C), b());
      }
      function b() {
        if (e.container === !0) {
          const C = i.value > a.value ? ti() : 0;
          c.value !== C && (c.value = C);
        }
      }
      let v = null;
      const _ = {
        instances: {},
        view: E(() => e.view),
        isContainer: E(() => e.container),
        rootRef: o,
        height: i,
        containerHeight: a,
        scrollbarWidth: c,
        totalWidth: E(() => s.value + c.value),
        rows: E(() => {
          const C = e.view.toLowerCase().split(" ");
          return {
            top: C[0].split(""),
            middle: C[1].split(""),
            bottom: C[2].split(""),
          };
        }),
        header: it({ size: 0, offset: 0, space: !1 }),
        right: it({ size: 300, offset: 0, space: !1 }),
        footer: it({ size: 0, offset: 0, space: !1 }),
        left: it({ size: 300, offset: 0, space: !1 }),
        scroll: l,
        animate() {
          v !== null
            ? clearTimeout(v)
            : document.body.classList.add("q-body--layout-animate"),
            (v = setTimeout(() => {
              (v = null),
                document.body.classList.remove("q-body--layout-animate");
            }, 155));
        },
        update(C, O, B) {
          _[C][O] = B;
        },
      };
      if ((Tn(br, _), ti() > 0)) {
        let C = function () {
            (D = null), q.classList.remove("hide-scrollbar");
          },
          O = function () {
            if (D === null) {
              if (q.scrollHeight > r.screen.height) return;
              q.classList.add("hide-scrollbar");
            } else clearTimeout(D);
            D = setTimeout(C, 300);
          },
          B = function (F) {
            D !== null && F === "remove" && (clearTimeout(D), C()),
              window[`${F}EventListener`]("resize", O);
          },
          D = null;
        const q = document.body;
        ue(() => (e.container !== !0 ? "add" : "remove"), B),
          e.container !== !0 && B("add"),
          cs(() => {
            B("remove");
          });
      }
      return () => {
        const C = Ct(t.default, [
            L(wc, { onScroll: m }),
            L(hr, { onResize: y }),
          ]),
          O = L(
            "div",
            {
              class: u.value,
              style: d.value,
              ref: e.container === !0 ? void 0 : o,
              tabindex: -1,
            },
            C,
          );
        return e.container === !0
          ? L("div", { class: "q-layout-container overflow-hidden", ref: o }, [
              L(hr, { onResize: x }),
              L("div", { class: "absolute-full", style: f.value }, [
                L("div", { class: "scroll", style: p.value }, [O]),
              ]),
            ])
          : O;
      };
    },
  });
function Cg() {
  return ze(Iu);
}
const Tg = dp("auth", {
  state: () => ({ isLoggedIn: !1, user: null }),
  actions: {
    login() {
      this.isLoggedIn = !0;
    },
    logout() {
      (this.isLoggedIn = !1), (this.user = null);
    },
  },
});
function Sc(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Rg } = Object.prototype,
  { getPrototypeOf: xs } = Object,
  To = ((e) => (t) => {
    const n = Rg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  bt = (e) => ((e = e.toLowerCase()), (t) => To(t) === e),
  Ro = (e) => (t) => typeof t === e,
  { isArray: Bn } = Array,
  pr = Ro("undefined");
function Pg(e) {
  return (
    e !== null &&
    !pr(e) &&
    e.constructor !== null &&
    !pr(e.constructor) &&
    Ye(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ec = bt("ArrayBuffer");
function kg(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ec(e.buffer)),
    t
  );
}
const Og = Ro("string"),
  Ye = Ro("function"),
  xc = Ro("number"),
  Po = (e) => e !== null && typeof e == "object",
  Ag = (e) => e === !0 || e === !1,
  Ir = (e) => {
    if (To(e) !== "object") return !1;
    const t = xs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Lg = bt("Date"),
  qg = bt("File"),
  $g = bt("Blob"),
  Bg = bt("FileList"),
  Mg = (e) => Po(e) && Ye(e.pipe),
  Ng = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ye(e.append) &&
          ((t = To(e)) === "formdata" ||
            (t === "object" &&
              Ye(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  zg = bt("URLSearchParams"),
  jg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Sr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Bn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function Cc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Tc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Rc = (e) => !pr(e) && e !== Tc;
function ji() {
  const { caseless: e } = (Rc(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Cc(t, o)) || o;
      Ir(t[i]) && Ir(r)
        ? (t[i] = ji(t[i], r))
        : Ir(r)
          ? (t[i] = ji({}, r))
          : Bn(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Sr(arguments[r], n);
  return t;
}
const Fg = (e, t, n, { allOwnKeys: r } = {}) => (
    Sr(
      t,
      (o, i) => {
        n && Ye(o) ? (e[i] = Sc(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Ig = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Dg = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Hg = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && xs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Vg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ug = (e) => {
    if (!e) return null;
    if (Bn(e)) return e;
    let t = e.length;
    if (!xc(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Wg = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && xs(Uint8Array)),
  Kg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Qg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Gg = bt("HTMLFormElement"),
  Jg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  pa = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Xg = bt("RegExp"),
  Pc = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Sr(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  Yg = (e) => {
    Pc(e, (t, n) => {
      if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ye(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Zg = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Bn(e) ? r(e) : r(String(e).split(t)), n;
  },
  ev = () => {},
  tv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  li = "abcdefghijklmnopqrstuvwxyz",
  ma = "0123456789",
  kc = { DIGIT: ma, ALPHA: li, ALPHA_DIGIT: li + li.toUpperCase() + ma },
  nv = (e = 16, t = kc.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function rv(e) {
  return !!(
    e &&
    Ye(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const ov = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Po(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Bn(r) ? [] : {};
            return (
              Sr(r, (s, l) => {
                const a = n(s, o + 1);
                !pr(a) && (i[l] = a);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  iv = bt("AsyncFunction"),
  sv = (e) => e && (Po(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
  R = {
    isArray: Bn,
    isArrayBuffer: Ec,
    isBuffer: Pg,
    isFormData: Ng,
    isArrayBufferView: kg,
    isString: Og,
    isNumber: xc,
    isBoolean: Ag,
    isObject: Po,
    isPlainObject: Ir,
    isUndefined: pr,
    isDate: Lg,
    isFile: qg,
    isBlob: $g,
    isRegExp: Xg,
    isFunction: Ye,
    isStream: Mg,
    isURLSearchParams: zg,
    isTypedArray: Wg,
    isFileList: Bg,
    forEach: Sr,
    merge: ji,
    extend: Fg,
    trim: jg,
    stripBOM: Ig,
    inherits: Dg,
    toFlatObject: Hg,
    kindOf: To,
    kindOfTest: bt,
    endsWith: Vg,
    toArray: Ug,
    forEachEntry: Kg,
    matchAll: Qg,
    isHTMLForm: Gg,
    hasOwnProperty: pa,
    hasOwnProp: pa,
    reduceDescriptors: Pc,
    freezeMethods: Yg,
    toObjectSet: Zg,
    toCamelCase: Jg,
    noop: ev,
    toFiniteNumber: tv,
    findKey: Cc,
    global: Tc,
    isContextDefined: Rc,
    ALPHABET: kc,
    generateString: nv,
    isSpecCompliantForm: rv,
    toJSONObject: ov,
    isAsyncFn: iv,
    isThenable: sv,
  };
function fe(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
R.inherits(fe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Oc = fe.prototype,
  Ac = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ac[e] = { value: e };
});
Object.defineProperties(fe, Ac);
Object.defineProperty(Oc, "isAxiosError", { value: !0 });
fe.from = (e, t, n, r, o, i) => {
  const s = Object.create(Oc);
  return (
    R.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError",
    ),
    fe.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const lv = null;
function Fi(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function Lc(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ga(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Lc(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function av(e) {
  return R.isArray(e) && !e.some(Fi);
}
const uv = R.toFlatObject(R, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ko(e, t, n) {
  if (!R.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = R.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, x) {
        return !R.isUndefined(x[y]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || u,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(t);
  if (!R.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (R.isDate(m)) return m.toISOString();
    if (!a && R.isBlob(m))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(m) || R.isTypedArray(m)
      ? a && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, y, x) {
    let b = m;
    if (m && !x && typeof m == "object") {
      if (R.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (R.isArray(m) && av(m)) ||
        ((R.isFileList(m) || R.endsWith(y, "[]")) && (b = R.toArray(m)))
      )
        return (
          (y = Lc(y)),
          b.forEach(function (_, C) {
            !(R.isUndefined(_) || _ === null) &&
              t.append(
                s === !0 ? ga([y], C, i) : s === null ? y : y + "[]",
                c(_),
              );
          }),
          !1
        );
    }
    return Fi(m) ? !0 : (t.append(ga(x, y, i), c(m)), !1);
  }
  const d = [],
    f = Object.assign(uv, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Fi,
    });
  function p(m, y) {
    if (!R.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(m),
        R.forEach(m, function (b, v) {
          (!(R.isUndefined(b) || b === null) &&
            o.call(t, b, R.isString(v) ? v.trim() : v, y, f)) === !0 &&
            p(b, y ? y.concat(v) : [v]);
        }),
        d.pop();
    }
  }
  if (!R.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function va(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Cs(e, t) {
  (this._pairs = []), e && ko(e, this, t);
}
const qc = Cs.prototype;
qc.append = function (t, n) {
  this._pairs.push([t, n]);
};
qc.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, va);
      }
    : va;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function cv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function $c(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || cv,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = R.isURLSearchParams(t) ? t.toString() : new Cs(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ya {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    R.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Bc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  fv = typeof URLSearchParams < "u" ? URLSearchParams : Cs,
  dv = typeof FormData < "u" ? FormData : null,
  hv = typeof Blob < "u" ? Blob : null,
  pv = {
    isBrowser: !0,
    classes: { URLSearchParams: fv, FormData: dv, Blob: hv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Mc = typeof window < "u" && typeof document < "u",
  mv = ((e) => Mc && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  gv =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  vv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Mc,
        hasStandardBrowserEnv: mv,
        hasStandardBrowserWebWorkerEnv: gv,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  vt = { ...vv, ...pv };
function yv(e, t) {
  return ko(
    e,
    new vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return vt.isNode && R.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function bv(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function _v(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Nc(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      a = i >= n.length;
    return (
      (s = !s && R.isArray(o) ? o.length : s),
      a
        ? (R.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !R.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && R.isArray(o[s]) && (o[s] = _v(o[s])),
          !l)
    );
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const n = {};
    return (
      R.forEachEntry(e, (r, o) => {
        t(bv(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function wv(e, t, n) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ts = {
  transitional: Bc,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = R.isObject(t);
      if ((i && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t)))
        return o ? JSON.stringify(Nc(t)) : t;
      if (
        R.isArrayBuffer(t) ||
        R.isBuffer(t) ||
        R.isStream(t) ||
        R.isFile(t) ||
        R.isBlob(t)
      )
        return t;
      if (R.isArrayBufferView(t)) return t.buffer;
      if (R.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return yv(t, this.formSerializer).toString();
        if ((l = R.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return ko(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), wv(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ts.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && R.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? fe.from(l, fe.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ts.headers[e] = {};
});
const Rs = Ts,
  Sv = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ev = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && Sv[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ba = Symbol("internals");
function In(e) {
  return e && String(e).trim().toLowerCase();
}
function Dr(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(Dr) : String(e);
}
function xv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Cv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ai(e, t, n, r, o) {
  if (R.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!R.isString(t))) {
    if (R.isString(r)) return t.indexOf(r) !== -1;
    if (R.isRegExp(r)) return r.test(t);
  }
}
function Tv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Rv(e, t) {
  const n = R.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Oo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, a, c) {
      const u = In(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = R.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || (c === void 0 && o[d] !== !1)) &&
        (o[d || a] = Dr(l));
    }
    const s = (l, a) => R.forEach(l, (c, u) => i(c, u, a));
    return (
      R.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : R.isString(t) && (t = t.trim()) && !Cv(t)
          ? s(Ev(t), n)
          : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = In(t)), t)) {
      const r = R.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return xv(o);
        if (R.isFunction(n)) return n.call(this, o, r);
        if (R.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = In(t)), t)) {
      const r = R.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ai(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = In(s)), s)) {
        const l = R.findKey(r, s);
        l && (!n || ai(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return R.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || ai(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      R.forEach(this, (o, i) => {
        const s = R.findKey(r, i);
        if (s) {
          (n[s] = Dr(o)), delete n[i];
          return;
        }
        const l = t ? Tv(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Dr(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      R.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && R.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[ba] = this[ba] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const l = In(s);
      r[l] || (Rv(o, s), (r[l] = !0));
    }
    return R.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Oo.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
R.reduceDescriptors(Oo.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
R.freezeMethods(Oo);
const Pt = Oo;
function ui(e, t) {
  const n = this || Rs,
    r = t || n,
    o = Pt.from(r.headers);
  let i = r.data;
  return (
    R.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function zc(e) {
  return !!(e && e.__CANCEL__);
}
function Er(e, t, n) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
R.inherits(Er, fe, { __CANCEL__: !0 });
function Pv(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new fe(
          "Request failed with status code " + n.status,
          [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const kv = vt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + "=" + encodeURIComponent(t)];
        R.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
          R.isString(r) && s.push("path=" + r),
          R.isString(o) && s.push("domain=" + o),
          i === !0 && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Ov(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Av(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jc(e, t) {
  return e && !Ov(t) ? Av(e, t) : t;
}
const Lv = vt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const l = R.isString(s) ? o(s) : s;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function qv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function $v(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const c = Date.now(),
        u = r[i];
      s || (s = c), (n[o] = a), (r[o] = c);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), c - s < t)) return;
      const p = u && c - u;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function _a(e, t) {
  let n = 0;
  const r = $v(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      l = i - n,
      a = r(l),
      c = i <= s;
    n = i;
    const u = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && s && c ? (s - i) / a : void 0,
      event: o,
    };
    (u[t ? "download" : "upload"] = !0), e(u);
  };
}
const Bv = typeof XMLHttpRequest < "u",
  Mv =
    Bv &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Pt.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: l } = e,
          a;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        let u;
        if (R.isFormData(o)) {
          if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((u = i.getContentType()) !== !1) {
            const [y, ...x] = u
              ? u
                  .split(";")
                  .map((b) => b.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([y || "multipart/form-data", ...x].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(y + ":" + x));
        }
        const f = jc(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), $c(f, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function p() {
          if (!d) return;
          const y = Pt.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders(),
            ),
            b = {
              data:
                !s || s === "text" || s === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: y,
              config: e,
              request: d,
            };
          Pv(
            function (_) {
              n(_), c();
            },
            function (_) {
              r(_), c();
            },
            b,
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = p)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (d.onabort = function () {
            d &&
              (r(new fe("Request aborted", fe.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new fe("Network Error", fe.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let x = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const b = e.transitional || Bc;
            e.timeoutErrorMessage && (x = e.timeoutErrorMessage),
              r(
                new fe(
                  x,
                  b.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
                  e,
                  d,
                ),
              ),
              (d = null);
          }),
          vt.hasStandardBrowserEnv &&
            (l && R.isFunction(l) && (l = l(e)), l || (l !== !1 && Lv(f))))
        ) {
          const y =
            e.xsrfHeaderName && e.xsrfCookieName && kv.read(e.xsrfCookieName);
          y && i.set(e.xsrfHeaderName, y);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            R.forEach(i.toJSON(), function (x, b) {
              d.setRequestHeader(b, x);
            }),
          R.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          s && s !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", _a(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", _a(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (y) => {
              d &&
                (r(!y || y.type ? new Er(null, e, d) : y),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const m = qv(f);
        if (m && vt.protocols.indexOf(m) === -1) {
          r(new fe("Unsupported protocol " + m + ":", fe.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  Ii = { http: lv, xhr: Mv };
R.forEach(Ii, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wa = (e) => `- ${e}`,
  Nv = (e) => R.isFunction(e) || e === null || e === !1,
  Fc = {
    getAdapter: (e) => {
      e = R.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !Nv(n) && ((r = Ii[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new fe(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(wa).join(`
`)
            : " " + wa(i[0])
          : "as no adapter specified";
        throw new fe(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Ii,
  };
function ci(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Er(null, e);
}
function Sa(e) {
  return (
    ci(e),
    (e.headers = Pt.from(e.headers)),
    (e.data = ui.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Fc.getAdapter(e.adapter || Rs.adapter)(e).then(
      function (r) {
        return (
          ci(e),
          (r.data = ui.call(e, e.transformResponse, r)),
          (r.headers = Pt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          zc(r) ||
            (ci(e),
            r &&
              r.response &&
              ((r.response.data = ui.call(e, e.transformResponse, r.response)),
              (r.response.headers = Pt.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Ea = (e) => (e instanceof Pt ? { ...e } : e);
function qn(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return R.isPlainObject(c) && R.isPlainObject(u)
      ? R.merge.call({ caseless: d }, c, u)
      : R.isPlainObject(u)
        ? R.merge({}, u)
        : R.isArray(u)
          ? u.slice()
          : u;
  }
  function o(c, u, d) {
    if (R.isUndefined(u)) {
      if (!R.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function i(c, u) {
    if (!R.isUndefined(u)) return r(void 0, u);
  }
  function s(c, u) {
    if (R.isUndefined(u)) {
      if (!R.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, d) {
    if (d in t) return r(c, u);
    if (d in e) return r(void 0, c);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, u) => o(Ea(c), Ea(u), !0),
  };
  return (
    R.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = a[u] || o,
        f = d(e[u], t[u], u);
      (R.isUndefined(f) && d !== l) || (n[u] = f);
    }),
    n
  );
}
const Ic = "1.6.8",
  Ps = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ps[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const xa = {};
Ps.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      Ic +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, l) => {
    if (t === !1)
      throw new fe(
        o(s, " has been removed" + (n ? " in " + n : "")),
        fe.ERR_DEPRECATED,
      );
    return (
      n &&
        !xa[s] &&
        ((xa[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, l) : !0
    );
  };
};
function zv(e, t, n) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        a = l === void 0 || s(l, i, e);
      if (a !== !0)
        throw new fe("option " + i + " must be " + a, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new fe("Unknown option " + i, fe.ERR_BAD_OPTION);
  }
}
const Di = { assertOptions: zv, validators: Ps },
  Bt = Di.validators;
class so {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ya(), response: new ya() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = qn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Di.assertOptions(
        r,
        {
          silentJSONParsing: Bt.transitional(Bt.boolean),
          forcedJSONParsing: Bt.transitional(Bt.boolean),
          clarifyTimeoutError: Bt.transitional(Bt.boolean),
        },
        !1,
      ),
      o != null &&
        (R.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Di.assertOptions(
              o,
              { encode: Bt.function, serialize: Bt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && R.merge(i.common, i[n.method]);
    i &&
      R.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        },
      ),
      (n.headers = Pt.concat(s, i));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((a = a && y.synchronous), l.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u,
      d = 0,
      f;
    if (!a) {
      const m = [Sa.bind(this), void 0];
      for (
        m.unshift.apply(m, l),
          m.push.apply(m, c),
          f = m.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = l.length;
    let p = n;
    for (d = 0; d < f; ) {
      const m = l[d++],
        y = l[d++];
      try {
        p = m(p);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      u = Sa.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = qn(this.defaults, t);
    const n = jc(t.baseURL, t.url);
    return $c(n, t.params, t.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function (t) {
  so.prototype[t] = function (n, r) {
    return this.request(
      qn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
R.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        qn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  (so.prototype[t] = n()), (so.prototype[t + "Form"] = n(!0));
});
const Hr = so;
class ks {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new Er(i, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ks(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const jv = ks;
function Fv(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Iv(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const Hi = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Hi).forEach(([e, t]) => {
  Hi[t] = e;
});
const Dv = Hi;
function Dc(e) {
  const t = new Hr(e),
    n = Sc(Hr.prototype.request, t);
  return (
    R.extend(n, Hr.prototype, t, { allOwnKeys: !0 }),
    R.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Dc(qn(e, o));
    }),
    n
  );
}
const Ce = Dc(Rs);
Ce.Axios = Hr;
Ce.CanceledError = Er;
Ce.CancelToken = jv;
Ce.isCancel = zc;
Ce.VERSION = Ic;
Ce.toFormData = ko;
Ce.AxiosError = fe;
Ce.Cancel = Ce.CanceledError;
Ce.all = function (t) {
  return Promise.all(t);
};
Ce.spread = Fv;
Ce.isAxiosError = Iv;
Ce.mergeConfig = qn;
Ce.AxiosHeaders = Pt;
Ce.formToJSON = (e) => Nc(R.isHTMLForm(e) ? new FormData(e) : e);
Ce.getAdapter = Fc.getAdapter;
Ce.HttpStatusCode = Dv;
Ce.default = Ce;
const Hv = { class: "flex" },
  Vv = { class: "flex" },
  Uv = { class: "q-pa-md q-gutter-sm" },
  Wv = { class: "q-pa-md q-gutter-md" },
  Kv = {
    __name: "MainLayout",
    setup(e) {
      const t = Cg(),
        n = ee(!1),
        r = ee(!0),
        o = vm(),
        i = Tg(),
        s = ee("day");
      ue(s, (a, c) => {
        a === "day" ? t.dark.set(!1) : t.dark.set(!0);
      });
      const l = () => {
        Ce.get("https://smooth-werewolf-rich.ngrok-free.app/api/logout"),
          i.logout(),
          t.notify({
            message: "退出登录成功",
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
          }),
          o.push("/");
      };
      return (a, c) => {
        const u = gi("router-link"),
          d = gi("router-view");
        return (
          St(),
          Et(
            xg,
            { view: "lHh Lpr lFf" },
            {
              default: ae(() => [
                Z(
                  eg,
                  { class: "bg-black" },
                  {
                    default: ae(() => [
                      Z(
                        Ym,
                        { class: "row justify-between" },
                        {
                          default: ae(() => [
                            _n("div", Hv, [
                              Z(bm, null, {
                                default: ae(() => [Mt("OpenSun")]),
                                _: 1,
                              }),
                              Z(wn, {
                                flat: "",
                                onClick:
                                  c[0] || (c[0] = (f) => (n.value = !n.value)),
                                round: "",
                                dense: "",
                                icon: "menu",
                              }),
                            ]),
                            _n("div", Vv, [
                              Z(
                                wn,
                                {
                                  flat: "",
                                  round: "",
                                  dense: "",
                                  class: "q-mr-xs",
                                },
                                {
                                  default: ae(() => [
                                    Z(Bi, null, {
                                      default: ae(() => [
                                        Z(Xo, { src: "/icons/search1.png" }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                },
                              ),
                              Z(
                                wn,
                                {
                                  flat: "",
                                  round: "",
                                  dense: "",
                                  class: "q-mr-xs",
                                  onClick: l,
                                },
                                {
                                  default: ae(() => [
                                    Z(Bi, null, {
                                      default: ae(() => [
                                        Z(Xo, { src: "/icons/logout.png" }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _n("div", Uv, [
                              Z(Km, null, {
                                default: ae(() => [
                                  Z(Lr, { icon: "home", to: "/" }),
                                  Z(Lr, {
                                    label: "Docs",
                                    icon: "widgets",
                                    to: "/start/pick-quasar-flavour",
                                  }),
                                  Z(Lr, {
                                    label: "Breadcrumbs",
                                    icon: "navigation",
                                    to: "/vue-components/breadcrumbs",
                                  }),
                                  Z(Lr, { label: "Build", icon: "build" }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _n("div", Wv, [
                              Z(
                                Xm,
                                {
                                  modelValue: s.value,
                                  "onUpdate:modelValue":
                                    c[1] || (c[1] = (f) => (s.value = f)),
                                  push: "",
                                  glossy: "",
                                  "toggle-color": "primary",
                                  options: [
                                    { value: "day", icon: "light_mode" },
                                    { value: "night", icon: "dark_mode" },
                                  ],
                                },
                                null,
                                8,
                                ["modelValue"],
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                Z(
                  bg,
                  {
                    modelValue: n.value,
                    "onUpdate:modelValue":
                      c[2] || (c[2] = (f) => (n.value = f)),
                    "show-if-above": "",
                    mini: r.value,
                    onMouseover: c[3] || (c[3] = (f) => (r.value = !1)),
                    onMouseout: c[4] || (c[4] = (f) => (r.value = !0)),
                    width: 200,
                    breakpoint: 500,
                    bordered: "",
                  },
                  {
                    default: ae(() => [
                      Z(
                        cg,
                        {
                          class: "fit",
                          "horizontal-thumb-style": { opacity: 0 },
                        },
                        {
                          default: ae(() => [
                            Z(
                              ng,
                              { padding: "" },
                              {
                                default: ae(() => [
                                  Z(
                                    u,
                                    { to: "/mainlayout" },
                                    {
                                      default: ae(() => [
                                        rt(
                                          (St(),
                                          Et(
                                            vn,
                                            { clickable: "" },
                                            {
                                              default: ae(() => [
                                                Z(
                                                  pt,
                                                  { avatar: "" },
                                                  {
                                                    default: ae(() => [
                                                      Z(Xo, {
                                                        src: "/icons/img.png",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                Z(pt, null, {
                                                  default: ae(() => [
                                                    Mt(" 首页 "),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          )),
                                          [[tn]],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  Z(Zo),
                                  Z(
                                    u,
                                    { to: "indexpage" },
                                    {
                                      default: ae(() => [
                                        rt(
                                          (St(),
                                          Et(
                                            vn,
                                            { clickable: "" },
                                            {
                                              default: ae(() => [
                                                Z(
                                                  pt,
                                                  { avatar: "" },
                                                  {
                                                    default: ae(() => [
                                                      Z(Qt, { name: "star" }),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                Z(pt, null, {
                                                  default: ae(() => [
                                                    Mt(" 跳转到indexpage "),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          )),
                                          [[tn]],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  Z(Zo),
                                  Z(
                                    u,
                                    { to: "targetpage" },
                                    {
                                      default: ae(() => [
                                        rt(
                                          (St(),
                                          Et(
                                            vn,
                                            { clickable: "" },
                                            {
                                              default: ae(() => [
                                                Z(
                                                  pt,
                                                  { avatar: "" },
                                                  {
                                                    default: ae(() => [
                                                      Z(Qt, { name: "send" }),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                Z(pt, null, {
                                                  default: ae(() => [
                                                    Mt(" 动漫 "),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          )),
                                          [[tn]],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  Z(Zo),
                                  Z(
                                    u,
                                    { to: "userauthpage" },
                                    {
                                      default: ae(() => [
                                        rt(
                                          (St(),
                                          Et(
                                            vn,
                                            { clickable: "" },
                                            {
                                              default: ae(() => [
                                                Z(
                                                  pt,
                                                  {
                                                    class: "bg-amber",
                                                    avatar: "",
                                                  },
                                                  {
                                                    default: ae(() => [
                                                      Z(Qt, { name: "drafts" }),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                Z(
                                                  pt,
                                                  {
                                                    class:
                                                      "text-red-10 bg-yellow",
                                                  },
                                                  {
                                                    default: ae(() => [
                                                      Mt(" 用户管理 "),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              _: 1,
                                            },
                                          )),
                                          [[tn]],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  Z(
                                    u,
                                    { to: "studentinfopage" },
                                    {
                                      default: ae(() => [
                                        rt(
                                          (St(),
                                          Et(
                                            vn,
                                            { clickable: "" },
                                            {
                                              default: ae(() => [
                                                Z(pt, null, {
                                                  default: ae(() => [
                                                    Mt(" 班级管理 "),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          )),
                                          [[tn]],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  Z(
                                    u,
                                    { to: "examplepage" },
                                    {
                                      default: ae(() => [
                                        rt(
                                          (St(),
                                          Et(
                                            vn,
                                            { clickable: "" },
                                            {
                                              default: ae(() => [
                                                Z(pt, null, {
                                                  default: ae(() => [
                                                    Mt(" 建筑图纸 "),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          )),
                                          [[tn]],
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
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "mini"],
                ),
                Z(Eg, null, {
                  default: ae(() => [
                    Z(d),
                    Z(
                      Sg,
                      {
                        position: "bottom-right",
                        "scroll-offset": 150,
                        offset: [18, 18],
                      },
                      {
                        default: ae(() => [
                          Z(wn, {
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
              ]),
              _: 1,
            },
          )
        );
      };
    },
  },
  Qv = Vu(Kv, [["__file", "MainLayout.vue"]]),
  Gv = [
    {
      path: "/",
      component: () =>
        Qe(
          () => import("./LoginLayout-DXgzPNH4.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        ),
      name: "login",
      meta: { requireAuthenticated: !1 },
    },
    {
      path: "/mainlayout",
      name: "mainlayout",
      component: Qv,
      children: [
        {
          path: "/indexpage",
          component: () =>
            Qe(
              () => import("./IndexPage-DMFN0IB3.js"),
              __vite__mapDeps([6, 7, 3]),
            ),
        },
        {
          path: "/targetpage",
          component: () =>
            Qe(
              () => import("./TargetPage-BzKW-UPE.js"),
              __vite__mapDeps([8, 9, 4]),
            ),
        },
        {
          path: "/userauthpage",
          meta: { requireAuthenticated: !0 },
          component: () =>
            Qe(
              () => import("./UserAuthPage-DIKVJLUe.js"),
              __vite__mapDeps([10, 2, 3, 11, 1, 4]),
            ),
        },
        {
          path: "/studentinfopage",
          meta: { requireAuthenticated: !1 },
          component: () =>
            Qe(
              () => import("./StudentInfoPage-Cmjyqidn.js"),
              __vite__mapDeps([12, 2, 3, 11, 1, 4, 7, 13, 14]),
            ),
        },
      ],
    },
    {
      path: "/building",
      name: "building",
      component: () => Qe(() => import("./BuildingLayout-rQ_t3vvp.js"), []),
      children: [
        {
          path: "/examplepage",
          component: () =>
            Qe(
              () => import("./BuildingExample-Ctyl-MEG.js"),
              __vite__mapDeps([15, 2, 3, 9, 4, 7, 13, 16]),
            ),
        },
      ],
    },
    {
      path: "/Oauth2WaitingPage",
      component: () => Qe(() => import("./Oauth2WaitingPage-uKSVPhyQ.js"), []),
    },
    {
      path: "/:catchAll(.*)*",
      component: () => Qe(() => import("./ErrorNotFound-CLJiFVLJ.js"), []),
    },
    { path: "/login", redirect: "/" },
  ],
  fi = function () {
    return mm({
      scrollBehavior: () => ({ left: 0, top: 0 }),
      routes: Gv,
      history: Vp("/"),
    });
  };
async function Jv(e, t) {
  const n = e(op);
  n.use(np, t);
  const r = typeof Wo == "function" ? await Wo({}) : Wo;
  n.use(r);
  const o = Jt(typeof fi == "function" ? await fi({ store: r }) : fi);
  return (
    r.use(({ store: i }) => {
      i.router = o;
    }),
    { app: n, store: r, router: o }
  );
}
let Xv = 1,
  Yv = document.body;
function Hc(e, t) {
  const n = document.createElement("div");
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${Xv++}` : e),
    io.globalNodes !== void 0)
  ) {
    const r = io.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return Yv.appendChild(n), n;
}
function Ny(e) {
  e.remove();
}
let Zv = 0;
const Vr = {},
  Ur = {},
  nt = {},
  Vc = {},
  ey = /^\s*$/,
  Uc = [],
  ty = [void 0, null, !0, !1, ""],
  Os = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "top",
    "bottom",
    "left",
    "right",
    "center",
  ],
  ny = ["top-left", "top-right", "bottom-left", "bottom-right"],
  bn = {
    positive: { icon: (e) => e.iconSet.type.positive, color: "positive" },
    negative: { icon: (e) => e.iconSet.type.negative, color: "negative" },
    warning: {
      icon: (e) => e.iconSet.type.warning,
      color: "warning",
      textColor: "dark",
    },
    info: { icon: (e) => e.iconSet.type.info, color: "info" },
    ongoing: { group: !1, timeout: 0, spinner: !0, color: "grey-8" },
  };
function Wc(e, t, n) {
  if (!e) return Dn("parameter required");
  let r;
  const o = { textColor: "white" };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(o, Vr),
    On(e) === !1 &&
      (o.type && Object.assign(o, bn[o.type]), (e = { message: e })),
    Object.assign(o, bn[e.type || o.type], e),
    typeof o.icon == "function" && (o.icon = o.icon(t)),
    o.spinner
      ? (o.spinner === !0 && (o.spinner = ys), (o.spinner = Jt(o.spinner)))
      : (o.spinner = !1),
    (o.meta = {
      hasMedia: !!(o.spinner !== !1 || o.icon || o.avatar),
      hasText: Ca(o.message) || Ca(o.caption),
    }),
    o.position)
  ) {
    if (Os.includes(o.position) === !1) return Dn("wrong position", e);
  } else o.position = "bottom";
  if (ty.includes(o.timeout) === !0) o.timeout = 5e3;
  else {
    const a = Number(o.timeout);
    if (isNaN(a) || a < 0) return Dn("wrong timeout", e);
    o.timeout = Number.isFinite(a) ? a : 0;
  }
  o.timeout === 0
    ? (o.progress = !1)
    : o.progress === !0 &&
      ((o.meta.progressClass =
        "q-notification__progress" +
        (o.progressClass ? ` ${o.progressClass}` : "")),
      (o.meta.progressStyle = { animationDuration: `${o.timeout + 1e3}ms` }));
  const i = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(Vr.actions) === !0
          ? Vr.actions
          : [],
      )
      .concat(
        bn[e.type] !== void 0 && Array.isArray(bn[e.type].actions) === !0
          ? bn[e.type].actions
          : [],
      ),
    { closeBtn: s } = o;
  if (
    (s && i.push({ label: typeof s == "string" ? s : t.lang.label.close }),
    (o.actions = i.map(({ handler: a, noDismiss: c, ...u }) => ({
      flat: !0,
      ...u,
      onClick:
        typeof a == "function"
          ? () => {
              a(), c !== !0 && l();
            }
          : () => {
              l();
            },
    }))),
    o.multiLine === void 0 && (o.multiLine = o.actions.length > 1),
    Object.assign(o.meta, {
      class:
        `q-notification row items-stretch q-notification--${o.multiLine === !0 ? "multi-line" : "standard"}` +
        (o.color !== void 0 ? ` bg-${o.color}` : "") +
        (o.textColor !== void 0 ? ` text-${o.textColor}` : "") +
        (o.classes !== void 0 ? ` ${o.classes}` : ""),
      wrapperClass:
        "q-notification__wrapper col relative-position border-radius-inherit " +
        (o.multiLine === !0
          ? "column no-wrap justify-center"
          : "row items-center"),
      contentClass:
        "q-notification__content row items-center" +
        (o.multiLine === !0 ? "" : " col"),
      leftClass: o.meta.hasText === !0 ? "additional" : "single",
      attrs: { role: "alert", ...o.attrs },
    }),
    o.group === !1
      ? ((o.group = void 0), (o.meta.group = void 0))
      : ((o.group === void 0 || o.group === !0) &&
          (o.group = [o.message, o.caption, o.multiline]
            .concat(o.actions.map((a) => `${a.label}*${a.icon}`))
            .join("|")),
        (o.meta.group = o.group + "|" + o.position)),
    o.actions.length === 0
      ? (o.actions = void 0)
      : (o.meta.actionsClass =
          "q-notification__actions row items-center " +
          (o.multiLine === !0 ? "justify-end" : "col-auto") +
          (o.meta.hasMedia === !0
            ? " q-notification__actions--with-media"
            : "")),
    n !== void 0)
  ) {
    n.notif.meta.timer &&
      (clearTimeout(n.notif.meta.timer), (n.notif.meta.timer = void 0)),
      (o.meta.uid = n.notif.meta.uid);
    const a = nt[o.position].value.indexOf(n.notif);
    nt[o.position].value[a] = o;
  } else {
    const a = Ur[o.meta.group];
    if (a === void 0) {
      if (
        ((o.meta.uid = Zv++),
        (o.meta.badge = 1),
        ["left", "right", "center"].indexOf(o.position) !== -1)
      )
        nt[o.position].value.splice(
          Math.floor(nt[o.position].value.length / 2),
          0,
          o,
        );
      else {
        const c = o.position.indexOf("top") !== -1 ? "unshift" : "push";
        nt[o.position].value[c](o);
      }
      o.group !== void 0 && (Ur[o.meta.group] = o);
    } else {
      if (
        (a.meta.timer && (clearTimeout(a.meta.timer), (a.meta.timer = void 0)),
        o.badgePosition !== void 0)
      ) {
        if (ny.includes(o.badgePosition) === !1)
          return Dn("wrong badgePosition", e);
      } else
        o.badgePosition = `top-${o.position.indexOf("left") !== -1 ? "right" : "left"}`;
      (o.meta.uid = a.meta.uid),
        (o.meta.badge = a.meta.badge + 1),
        (o.meta.badgeClass =
          `q-notification__badge q-notification__badge--${o.badgePosition}` +
          (o.badgeColor !== void 0 ? ` bg-${o.badgeColor}` : "") +
          (o.badgeTextColor !== void 0 ? ` text-${o.badgeTextColor}` : "") +
          (o.badgeClass ? ` ${o.badgeClass}` : ""));
      const c = nt[o.position].value.indexOf(a);
      nt[o.position].value[c] = Ur[o.meta.group] = o;
    }
  }
  const l = () => {
    ry(o), (r = void 0);
  };
  if (
    (o.timeout > 0 &&
      (o.meta.timer = setTimeout(() => {
        (o.meta.timer = void 0), l();
      }, o.timeout + 1e3)),
    o.group !== void 0)
  )
    return (a) => {
      a !== void 0
        ? Dn("trying to update a grouped one which is forbidden", e)
        : l();
    };
  if (((r = { dismiss: l, config: e, notif: o }), n !== void 0)) {
    Object.assign(n, r);
    return;
  }
  return (a) => {
    if (r !== void 0)
      if (a === void 0) r.dismiss();
      else {
        const c = Object.assign({}, r.config, a, {
          group: !1,
          position: o.position,
        });
        Wc(c, t, r);
      }
  };
}
function ry(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), (e.meta.timer = void 0));
  const t = nt[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Ur[e.meta.group];
    const n = Uc["" + e.meta.uid];
    if (n) {
      const { width: r, height: o } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = o);
    }
    nt[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function Ca(e) {
  return e != null && ey.test(e) !== !0;
}
function Dn(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function oy() {
  return be({
    name: "QNotifications",
    devtools: { hide: !0 },
    setup() {
      return () =>
        L(
          "div",
          { class: "q-notifications" },
          Os.map((e) =>
            L(
              Sh,
              {
                key: e,
                class: Vc[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                nt[e].value.map((t) => {
                  const n = t.meta,
                    r = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? r.push(
                            L(t.spinner, {
                              class:
                                "q-notification__spinner q-notification__spinner--" +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            }),
                          )
                        : t.icon
                          ? r.push(
                              L(Qt, {
                                class:
                                  "q-notification__icon q-notification__icon--" +
                                  n.leftClass,
                                name: t.icon,
                                color: t.iconColor,
                                size: t.iconSize,
                                role: "img",
                              }),
                            )
                          : t.avatar &&
                            r.push(
                              L(
                                Bi,
                                {
                                  class:
                                    "q-notification__avatar q-notification__avatar--" +
                                    n.leftClass,
                                },
                                () =>
                                  L("img", {
                                    src: t.avatar,
                                    "aria-hidden": "true",
                                  }),
                              ),
                            )),
                    n.hasText === !0)
                  ) {
                    let i;
                    const s = { class: "q-notification__message col" };
                    if (t.html === !0)
                      s.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    else {
                      const l = [t.message];
                      i = t.caption
                        ? [
                            L("div", l),
                            L("div", { class: "q-notification__caption" }, [
                              t.caption,
                            ]),
                          ]
                        : l;
                    }
                    r.push(L("div", s, i));
                  }
                  const o = [L("div", { class: n.contentClass }, r)];
                  return (
                    t.progress === !0 &&
                      o.push(
                        L("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        }),
                      ),
                    t.actions !== void 0 &&
                      o.push(
                        L(
                          "div",
                          { class: n.actionsClass },
                          t.actions.map((i) => L(wn, i)),
                        ),
                      ),
                    n.badge > 1 &&
                      o.push(
                        L(
                          "div",
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge],
                        ),
                      ),
                    L(
                      "div",
                      {
                        ref: (i) => {
                          Uc["" + n.uid] = i;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [L("div", { class: n.wrapperClass }, o)],
                    )
                  );
                }),
            ),
          ),
        );
    },
  });
}
const iy = {
    setDefaults(e) {
      On(e) === !0 && Object.assign(Vr, e);
    },
    registerType(e, t) {
      On(t) === !0 && (bn[e] = t);
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => Wc(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        Os.forEach((r) => {
          nt[r] = ee([]);
          const o =
              ["left", "center", "right"].includes(r) === !0
                ? "center"
                : r.indexOf("top") !== -1
                  ? "top"
                  : "bottom",
            i =
              r.indexOf("left") !== -1
                ? "start"
                : r.indexOf("right") !== -1
                  ? "end"
                  : "center",
            s = ["left", "right"].includes(r)
              ? `items-${r === "left" ? "start" : "end"} justify-center`
              : r === "center"
                ? "flex-center"
                : `items-${i}`;
          Vc[r] =
            `q-notifications__list q-notifications__list--${o} fixed column no-wrap ${s}`;
        });
        const n = Hc("q-notify");
        Hu(oy(), t).mount(n);
      }
    },
  },
  As = XMLHttpRequest,
  Kc = As.prototype.open,
  sy = ["top", "right", "bottom", "left"];
let lo = [],
  or = 0;
function ly({ p: e, pos: t, active: n, horiz: r, reverse: o, dir: i }) {
  let s = 1,
    l = 1;
  return r === !0
    ? (o === !0 && (s = -1),
      t === "bottom" && (l = -1),
      { transform: `translate3d(${s * (e - 100)}%,${n ? 0 : l * -200}%,0)` })
    : (o === !0 && (l = -1),
      t === "right" && (s = -1),
      {
        transform: `translate3d(${n ? 0 : i * s * -200}%,${l * (e - 100)}%,0)`,
      });
}
function ay(e, t) {
  return (
    typeof t != "number" &&
      (e < 25
        ? (t = Math.random() * 3 + 3)
        : e < 65
          ? (t = Math.random() * 3)
          : e < 85
            ? (t = Math.random() * 2)
            : e < 99
              ? (t = 0.6)
              : (t = 0)),
    Tt(e + t, 0, 100)
  );
}
function uy(e) {
  or++,
    lo.push(e),
    !(or > 1) &&
      (As.prototype.open = function (t, n) {
        const r = [],
          o = () => {
            lo.forEach((s) => {
              (s.hijackFilter.value === null ||
                s.hijackFilter.value(n) === !0) &&
                (s.start(), r.push(s.stop));
            });
          },
          i = () => {
            r.forEach((s) => {
              s();
            });
          };
        this.addEventListener("loadstart", o, { once: !0 }),
          this.addEventListener("loadend", i, { once: !0 }),
          Kc.apply(this, arguments);
      });
}
function cy(e) {
  (lo = lo.filter((t) => t.start !== e)),
    (or = Math.max(0, or - 1)),
    or === 0 && (As.prototype.open = Kc);
}
const fy = be({
    name: "QAjaxBar",
    props: {
      position: {
        type: String,
        default: "top",
        validator: (e) => sy.includes(e),
      },
      size: { type: String, default: "2px" },
      color: String,
      skipHijack: Boolean,
      reverse: Boolean,
      hijackFilter: Function,
    },
    emits: ["start", "stop"],
    setup(e, { emit: t }) {
      const { proxy: n } = Ee(),
        r = ee(0),
        o = ee(!1),
        i = ee(!0);
      let s = 0,
        l = null,
        a;
      const c = E(
          () =>
            `q-loading-bar q-loading-bar--${e.position}` +
            (e.color !== void 0 ? ` bg-${e.color}` : "") +
            (i.value === !0 ? "" : " no-transition"),
        ),
        u = E(() => e.position === "top" || e.position === "bottom"),
        d = E(() => (u.value === !0 ? "height" : "width")),
        f = E(() => {
          const _ = o.value,
            C = ly({
              p: r.value,
              pos: e.position,
              active: _,
              horiz: u.value,
              reverse:
                n.$q.lang.rtl === !0 && ["top", "bottom"].includes(e.position)
                  ? e.reverse === !1
                  : e.reverse,
              dir: n.$q.lang.rtl === !0 ? -1 : 1,
            });
          return (C[d.value] = e.size), (C.opacity = _ ? 1 : 0), C;
        }),
        p = E(() =>
          o.value === !0
            ? {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": r.value,
              }
            : { "aria-hidden": "true" },
        );
      function m(_ = 300) {
        const C = a;
        return (
          (a = Math.max(0, _) || 0),
          s++,
          s > 1
            ? (C === 0 && _ > 0
                ? b()
                : l !== null &&
                  C > 0 &&
                  _ <= 0 &&
                  (clearTimeout(l), (l = null)),
              s)
            : (l !== null && clearTimeout(l),
              t("start"),
              (r.value = 0),
              (l = setTimeout(
                () => {
                  (l = null), (i.value = !0), _ > 0 && b();
                },
                o._value === !0 ? 500 : 1,
              )),
              o._value !== !0 && ((o.value = !0), (i.value = !1)),
              s)
        );
      }
      function y(_) {
        return s > 0 && (r.value = ay(r.value, _)), s;
      }
      function x() {
        if (((s = Math.max(0, s - 1)), s > 0)) return s;
        l !== null && (clearTimeout(l), (l = null)), t("stop");
        const _ = () => {
          (i.value = !0),
            (r.value = 100),
            (l = setTimeout(() => {
              (l = null), (o.value = !1);
            }, 1e3));
        };
        return r.value === 0 ? (l = setTimeout(_, 1)) : _(), s;
      }
      function b() {
        r.value < 100 &&
          (l = setTimeout(() => {
            (l = null), y(), b();
          }, a));
      }
      let v;
      return (
        at(() => {
          e.skipHijack !== !0 &&
            ((v = !0),
            uy({
              start: m,
              stop: x,
              hijackFilter: E(() => e.hijackFilter || null),
            }));
        }),
        De(() => {
          l !== null && clearTimeout(l), v === !0 && cy(m);
        }),
        Object.assign(n, { start: m, stop: x, increment: y }),
        () => L("div", { class: c.value, style: f.value, ...p.value })
      );
    },
  }),
  Br = ee(null),
  Vi = yr(
    { isActive: !1 },
    {
      start: Fe,
      stop: Fe,
      increment: Fe,
      setDefaults: Fe,
      install({ $q: e, parentApp: t }) {
        if (((e.loadingBar = this), this.__installed === !0)) {
          e.config.loadingBar !== void 0 &&
            this.setDefaults(e.config.loadingBar);
          return;
        }
        const n = ee(
          e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {},
        );
        function r() {
          Vi.isActive = !0;
        }
        function o() {
          Vi.isActive = !1;
        }
        const i = Hc("q-loading-bar");
        Hu(
          {
            name: "LoadingBar",
            devtools: { hide: !0 },
            setup: () => () =>
              L(fy, { ...n.value, onStart: r, onStop: o, ref: Br }),
          },
          t,
        ).mount(i),
          Object.assign(this, {
            start(s) {
              Br.value.start(s);
            },
            stop() {
              Br.value.stop();
            },
            increment() {
              Br.value.increment.apply(null, arguments);
            },
            setDefaults(s) {
              On(s) === !0 && Object.assign(n.value, s);
            },
          });
      },
    },
  );
function dy(e) {
  return Yh(e) === !0
    ? "__q_date|" + e.toUTCString()
    : Zh(e) === !0
      ? "__q_expr|" + e.source
      : typeof e == "number"
        ? "__q_numb|" + e
        : typeof e == "boolean"
          ? "__q_bool|" + (e ? "1" : "0")
          : typeof e == "string"
            ? "__q_strn|" + e
            : typeof e == "function"
              ? "__q_strn|" + e.toString()
              : e === Object(e)
                ? "__q_objt|" + JSON.stringify(e)
                : e;
}
function hy(e) {
  if (e.length < 9) return e;
  const n = e.substring(0, 8),
    r = e.substring(9);
  switch (n) {
    case "__q_date":
      return new Date(r);
    case "__q_expr":
      return new RegExp(r);
    case "__q_numb":
      return Number(r);
    case "__q_bool":
      return r === "1";
    case "__q_strn":
      return "" + r;
    case "__q_objt":
      return JSON.parse(r);
    default:
      return e;
  }
}
function Qc() {
  const e = () => null;
  return {
    has: () => !1,
    getLength: () => 0,
    getItem: e,
    getIndex: e,
    getKey: e,
    getAll: () => {},
    getAllKeys: () => [],
    set: Fe,
    remove: Fe,
    clear: Fe,
    isEmpty: () => !0,
  };
}
function Gc(e) {
  const t = window[e + "Storage"],
    n = (r) => {
      const o = t.getItem(r);
      return o ? hy(o) : null;
    };
  return {
    has: (r) => t.getItem(r) !== null,
    getLength: () => t.length,
    getItem: n,
    getIndex: (r) => (r < t.length ? n(t.key(r)) : null),
    getKey: (r) => (r < t.length ? t.key(r) : null),
    getAll: () => {
      let r;
      const o = {},
        i = t.length;
      for (let s = 0; s < i; s++) (r = t.key(s)), (o[r] = n(r));
      return o;
    },
    getAllKeys: () => {
      const r = [],
        o = t.length;
      for (let i = 0; i < o; i++) r.push(t.key(i));
      return r;
    },
    set: (r, o) => {
      t.setItem(r, dy(o));
    },
    remove: (r) => {
      t.removeItem(r);
    },
    clear: () => {
      t.clear();
    },
    isEmpty: () => t.length === 0,
  };
}
const Jc = we.has.webStorage === !1 ? Qc() : Gc("local"),
  Xc = {
    install({ $q: e }) {
      e.localStorage = Jc;
    },
  };
Object.assign(Xc, Jc);
const Yc = we.has.webStorage === !1 ? Qc() : Gc("session"),
  Zc = {
    install({ $q: e }) {
      e.sessionStorage = Yc;
    },
  };
Object.assign(Zc, Yc);
new Set(
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map(
    (e) => "[object " + e + "]",
  ),
);
const py = {
    install(e) {
      this.__installed !== !0 &&
        ut.value === !0 &&
        document.getElementById("qmeta-init").remove();
    },
  },
  my = {
    config: { notify: {}, loadingBar: {} },
    plugins: {
      Notify: iy,
      LoadingBar: Vi,
      LocalStorage: Xc,
      SessionStorage: Zc,
      Meta: py,
    },
  },
  gy = "/";
async function vy({ app: e, router: t, store: n }, r) {
  let o = !1;
  const i = (a) => {
      try {
        return t.resolve(a).href;
      } catch {}
      return Object(a) === a ? null : a;
    },
    s = (a) => {
      if (((o = !0), typeof a == "string" && /^https?:\/\//.test(a))) {
        window.location.href = a;
        return;
      }
      const c = i(a);
      c !== null && ((window.location.href = c), window.location.reload());
    },
    l = window.location.href.replace(window.location.origin, "");
  for (let a = 0; o === !1 && a < r.length; a++)
    try {
      await r[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: s,
        urlPath: l,
        publicPath: gy,
      });
    } catch (c) {
      if (c && c.url) {
        s(c.url);
        return;
      }
      console.error("[Quasar] boot error:", c);
      return;
    }
  o !== !0 && (e.use(t), e.mount("#q-app"));
}
Jv(Bu, my).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          "allSettled",
          (r) =>
            r.map((o) => {
              if (o.status === "rejected") {
                console.error("[Quasar] boot error:", o.reason);
                return;
              }
              return o.value.default;
            }),
        ]
      : ["all", (r) => r.map((o) => o.default)];
  return Promise[t]([
    Qe(() => import("./i18n-1fckKkoe.js"), []),
    Qe(() => import("./axios-BrdqwGd6.js"), []),
    Qe(() => import("./my_auth-7-Tb40KY.js"), []),
  ]).then((r) => {
    const o = n(r).filter((i) => typeof i == "function");
    vy(e, o);
  });
});
export {
  De as $,
  St as A,
  Et as B,
  ae as C,
  Cg as D,
  vm as E,
  ot as F,
  _n as G,
  wn as H,
  Mt as I,
  Bi as J,
  Qt as K,
  Eg as L,
  by as M,
  _y as N,
  Xo as O,
  Zo as P,
  xg as Q,
  Cy as R,
  xy as S,
  yo as T,
  yy as U,
  rt as V,
  lc as W,
  _r as X,
  wr as Y,
  dd as Z,
  Vu as _,
  cs as a,
  ut as a$,
  ng as a0,
  yc as a1,
  $e as a2,
  gs as a3,
  vs as a4,
  mc as a5,
  Ti as a6,
  Ay as a7,
  Yh as a8,
  On as a9,
  My as aA,
  Zn as aB,
  Vh as aC,
  pt as aD,
  vn as aE,
  gi as aF,
  ky as aG,
  sc as aH,
  ra as aI,
  oa as aJ,
  Mh as aK,
  Ho as aL,
  Lm as aM,
  wy as aN,
  rr as aO,
  Ym as aP,
  bm as aQ,
  Ry as aR,
  Ji as aS,
  bg as aT,
  ln as aU,
  Sy as aV,
  Sg as aW,
  ys as aX,
  Ty as aY,
  dc as aZ,
  hc as a_,
  Py as aa,
  So as ab,
  Ul as ac,
  ym as ad,
  tn as ae,
  ro as af,
  cr as ag,
  Un as ah,
  ag as ai,
  jr as aj,
  we as ak,
  ti as al,
  dg as am,
  hg as an,
  $i as ao,
  pg as ap,
  no as aq,
  vr as ar,
  qy as as,
  Fe as at,
  Nu as au,
  Gm as av,
  By as aw,
  hd as ax,
  us as ay,
  Uo as az,
  Te as b,
  $y as b0,
  Ey as b1,
  Hc as b2,
  Ny as b3,
  fg as b4,
  yg as b5,
  Xe as b6,
  br as b7,
  Jh as b8,
  Jm as b9,
  ce as ba,
  E as c,
  ls as d,
  $a as e,
  Z as f,
  Ee as g,
  L as h,
  ze as i,
  Ly as j,
  Ce as k,
  be as l,
  Ct as m,
  as as n,
  at as o,
  du as p,
  ft as q,
  ee as r,
  Ff as s,
  xt as t,
  Tg as u,
  Fr as v,
  ue as w,
  kt as x,
  Tn as y,
  Oy as z,
};
