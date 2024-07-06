import { Q as E } from "./QSelect-Hc-Dnbtu.js";
import { Q as B } from "./QInput-pQ_uuI7K.js";
import {
  l as I,
  c as A,
  h as F,
  m as R,
  r as b,
  n as $,
  p as j,
  o as P,
  q as z,
  g as M,
  v as N,
  t as k,
  x as T,
  y as U,
  z as D,
  _ as K,
  u as O,
  A as H,
  B as J,
  C as v,
  Q as X,
  D as G,
  E as Y,
  f as n,
  G as q,
  H as _,
  I as W,
  J as Z,
  K as ee,
  L as te,
  k as L,
  M as ae,
  N as oe,
} from "./index-DEMVRRIH.js";
import { Q as ne } from "./QCheckbox-CbuSlzCd.js";
import { a as le, Q as se } from "./QPage-Rtxh1b_-.js";
const re = ["top", "middle", "bottom"],
  ue = I({
    name: "QBadge",
    props: {
      color: String,
      textColor: String,
      floating: Boolean,
      transparent: Boolean,
      multiLine: Boolean,
      outline: Boolean,
      rounded: Boolean,
      label: [Number, String],
      align: { type: String, validator: (t) => re.includes(t) },
    },
    setup(t, { slots: l }) {
      const i = A(() =>
          t.align !== void 0 ? { verticalAlign: t.align } : null,
        ),
        g = A(() => {
          const s = (t.outline === !0 && t.color) || t.textColor;
          return (
            `q-badge flex inline items-center no-wrap q-badge--${t.multiLine === !0 ? "multi" : "single"}-line` +
            (t.outline === !0
              ? " q-badge--outline"
              : t.color !== void 0
                ? ` bg-${t.color}`
                : "") +
            (s !== void 0 ? ` text-${s}` : "") +
            (t.floating === !0 ? " q-badge--floating" : "") +
            (t.rounded === !0 ? " q-badge--rounded" : "") +
            (t.transparent === !0 ? " q-badge--transparent" : "")
          );
        });
      return () =>
        F(
          "div",
          {
            class: g.value,
            style: i.value,
            role: "status",
            "aria-label": t.label,
          },
          R(l.default, t.label !== void 0 ? [t.label] : []),
        );
    },
  }),
  ie = I({
    name: "QForm",
    props: {
      autofocus: Boolean,
      noErrorFocus: Boolean,
      noResetFocus: Boolean,
      greedy: Boolean,
      onSubmit: Function,
    },
    emits: ["reset", "validationSuccess", "validationError"],
    setup(t, { slots: l, emit: i }) {
      const g = M(),
        s = b(null);
      let d = 0;
      const r = [];
      function f(e) {
        const a = typeof e == "boolean" ? e : t.noErrorFocus !== !0,
          S = ++d,
          C = (o, u) => {
            i("validation" + (o === !0 ? "Success" : "Error"), u);
          },
          Q = (o) => {
            const u = o.validate();
            return typeof u.then == "function"
              ? u.then(
                  (m) => ({ valid: m, comp: o }),
                  (m) => ({ valid: !1, comp: o, err: m }),
                )
              : Promise.resolve({ valid: u, comp: o });
          };
        return (
          t.greedy === !0
            ? Promise.all(r.map(Q)).then((o) => o.filter((u) => u.valid !== !0))
            : r
                .reduce(
                  (o, u) =>
                    o.then(() =>
                      Q(u).then((m) => {
                        if (m.valid === !1) return Promise.reject(m);
                      }),
                    ),
                  Promise.resolve(),
                )
                .catch((o) => [o])
        ).then((o) => {
          if (o === void 0 || o.length === 0) return S === d && C(!0), !0;
          if (S === d) {
            const { comp: u, err: m } = o[0];
            if ((m !== void 0 && console.error(m), C(!1, u), a === !0)) {
              const V = o.find(
                ({ comp: w }) => typeof w.focus == "function" && N(w.$) === !1,
              );
              V !== void 0 && V.comp.focus();
            }
          }
          return !1;
        });
      }
      function y() {
        d++,
          r.forEach((e) => {
            typeof e.resetValidation == "function" && e.resetValidation();
          });
      }
      function h(e) {
        e !== void 0 && k(e);
        const a = d + 1;
        f().then((S) => {
          a === d &&
            S === !0 &&
            (t.onSubmit !== void 0
              ? i("submit", e)
              : e !== void 0 &&
                e.target !== void 0 &&
                typeof e.target.submit == "function" &&
                e.target.submit());
        });
      }
      function x(e) {
        e !== void 0 && k(e),
          i("reset"),
          T(() => {
            y(), t.autofocus === !0 && t.noResetFocus !== !0 && p();
          });
      }
      function p() {
        le(() => {
          if (s.value === null) return;
          const e =
            s.value.querySelector(
              "[autofocus][tabindex], [data-autofocus][tabindex]",
            ) ||
            s.value.querySelector(
              "[autofocus] [tabindex], [data-autofocus] [tabindex]",
            ) ||
            s.value.querySelector("[autofocus], [data-autofocus]") ||
            Array.prototype.find.call(
              s.value.querySelectorAll("[tabindex]"),
              (a) => a.tabIndex !== -1,
            );
          e?.focus({ preventScroll: !0 });
        });
      }
      U(D, {
        bindComponent(e) {
          r.push(e);
        },
        unbindComponent(e) {
          const a = r.indexOf(e);
          a !== -1 && r.splice(a, 1);
        },
      });
      let c = !1;
      return (
        $(() => {
          c = !0;
        }),
        j(() => {
          c === !0 && t.autofocus === !0 && p();
        }),
        P(() => {
          t.autofocus === !0 && p();
        }),
        Object.assign(g.proxy, {
          validate: f,
          resetValidation: y,
          submit: h,
          reset: x,
          focus: p,
          getValidationComponents: () => r,
        }),
        () =>
          F(
            "form",
            { class: "q-form", ref: s, onSubmit: h, onReset: x },
            z(l.default),
          )
      );
    },
  }),
  ce = (t) => (ae("data-v-16acab2d"), (t = t()), oe(), t),
  de = { class: "q-pa-md", style: { "max-width": "400px" } },
  fe = ce(() =>
    q(
      "div",
      {
        class: "g-recaptcha",
        "data-sitekey": "6Ld8j_spAAAAAJpQxXF2uy3cM3YOLPgCzfM2vgXK",
        "data-callback": "login",
      },
      null,
      -1,
    ),
  ),
  me = { class: "row justify-around" },
  ge = {
    __name: "LoginLayout",
    setup(t) {
      const l = G(),
        i = b(null),
        g = b(null),
        s = Y(),
        d = O(),
        r = b(!1),
        f = b({ label: null, value: null }),
        y = b([
          { label: "学生管理系统", value: "systemA" },
          { label: "项目管理系统", value: "systemB" },
          { label: "测试系统", value: "authentication" },
        ]),
        h = async () => {
          await s.push("mainlayout");
        },
        x = async () => {
          if (
            (l.loadingBar.start(),
            l.loadingBar.stop(),
            grecaptcha.getResponse().length === 0)
          ) {
            l.notify({ message: "请进行人机身份验证", position: "top" });
            return;
          }
          if (!f.value) {
            l.notify({
              message: "请选择一个系统",
              position: "top",
              color: "red",
              avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            });
            return;
          }
          const e = await L.post(
            `/api/${f.value.value}/client-login`,
            {
              username: i.value,
              password: g.value,
              "remember-me": r.value ? "on" : "off",
            },
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            },
          );
          e.data.code === 1
            ? (sessionStorage.setItem("jwt", e.headers.getAuthorization()),
              l.notify({
                message: "欢迎!",
                position: "top",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              }),
              d.login(),
              await s.push("/mainlayout"))
            : l.notify({
                message: e.data.message,
                position: "top",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              });
        },
        p = async () => {
          if (!f.value.value) {
            l.notify({
              message: "请选择一个系统",
              position: "top",
              color: "red",
              avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            });
            return;
          }
          (
            await L.post(
              `/api/${f.value.value}/client-register`,
              { username: i.value, password: g.value },
              { headers: { "Content-Type": "application/json" } },
            )
          ).data.code === 1
            ? (l.notify({
                message: "注册成功!",
                position: "top",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              }),
              d.login(),
              await s.push("/mainlayout"))
            : l.notify({
                message: "账号已存在",
                position: "top",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              });
        };
      return (
        P(async () => {
          const c = document.createElement("script");
          (c.src = "https://recaptcha.net/recaptcha/api.js"),
            (c.async = !0),
            (c.defer = !0),
            document.body.appendChild(c);
        }),
        (c, e) => (
          H(),
          J(
            X,
            { view: "lHh Lpr lFf" },
            {
              default: v(() => [
                n(te, null, {
                  default: v(() => [
                    n(
                      se,
                      {
                        class: "login-page-background flex flex-center",
                        style: { "max-width": "100%", "max-height": "100%" },
                      },
                      {
                        default: v(() => [
                          q("div", de, [
                            n(
                              ie,
                              { onSubmit: x, class: "q-gutter-md" },
                              {
                                default: v(() => [
                                  n(
                                    E,
                                    {
                                      modelValue: f.value,
                                      "onUpdate:modelValue":
                                        e[0] || (e[0] = (a) => (f.value = a)),
                                      options: y.value,
                                      label: "选择系统",
                                      outlined: "",
                                      dense: "",
                                      clearable: "",
                                      color: "black",
                                      "bg-color": "teal",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "options"],
                                  ),
                                  n(
                                    B,
                                    {
                                      clearable: "",
                                      "bg-color": "teal",
                                      rounded: "",
                                      outlined: "",
                                      modelValue: i.value,
                                      "onUpdate:modelValue":
                                        e[1] || (e[1] = (a) => (i.value = a)),
                                      label: "账号",
                                      "lazy-rules": "",
                                      rules: [
                                        (a) =>
                                          (a && a.length > 0) || "不能为空",
                                      ],
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                  n(
                                    B,
                                    {
                                      clearable: "",
                                      "bg-color": "teal",
                                      rounded: "",
                                      outlined: "",
                                      modelValue: g.value,
                                      "onUpdate:modelValue":
                                        e[2] || (e[2] = (a) => (g.value = a)),
                                      label: "密码",
                                      "lazy-rules": "",
                                      rules: [
                                        (a) =>
                                          (a !== null && a !== "") ||
                                          "不能为空",
                                        (a) =>
                                          (a.length > 0 && a.length < 20) ||
                                          "密码过长",
                                      ],
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                  fe,
                                  q("div", me, [
                                    n(
                                      _,
                                      {
                                        push: "",
                                        label: "登录",
                                        type: "login",
                                        color: "teal",
                                        "text-color": "black",
                                      },
                                      {
                                        default: v(() => [
                                          n(
                                            ue,
                                            { color: "orange", floating: "" },
                                            {
                                              default: v(() => [W("999")]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                    n(_, {
                                      push: "",
                                      label: "注册",
                                      onClick: p,
                                      color: "teal",
                                    }),
                                    n(_, {
                                      push: "",
                                      label: "匿名访问",
                                      onClick: h,
                                      color: "teal",
                                    }),
                                    n(
                                      _,
                                      {
                                        push: "",
                                        href: "https://test.opensun.asia/oauth2/authorization/github",
                                        color: "teal",
                                      },
                                      {
                                        default: v(() => [
                                          n(Z, null, {
                                            default: v(() => [
                                              n(ee, {
                                                name: "fa-brands fa-github",
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                    n(
                                      ne,
                                      {
                                        label: "记住密码",
                                        "checked-icon": "star",
                                        "unchecked-icon": "star_border",
                                        modelValue: r.value,
                                        "onUpdate:modelValue":
                                          e[3] || (e[3] = (a) => (r.value = a)),
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
        )
      );
    },
  },
  Se = K(ge, [
    ["__scopeId", "data-v-16acab2d"],
    ["__file", "LoginLayout.vue"],
  ]);
export { Se as default };
