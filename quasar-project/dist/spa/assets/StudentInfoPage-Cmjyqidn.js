import {
  _ as J,
  r as m,
  o as K,
  A as S,
  B as I,
  C as i,
  Q as W,
  D as X,
  f as l,
  G as V,
  H as g,
  R as $,
  K as U,
  U as F,
  P as Y,
  J as Z,
  O as ee,
  V as ae,
  k as Q,
} from "./index-DEMVRRIH.js";
import { Q as x } from "./QInput-pQ_uuI7K.js";
import { Q as te } from "./QTable-CsMYil0B.js";
import { Q as le, a as L, b as ne } from "./QCardActions-B86ceFEj.js";
import { b as oe, Q as se } from "./QPage-Rtxh1b_-.js";
import { C as ie } from "./ClosePopup-Do__HKpZ.js";
import "./QSelect-Hc-Dnbtu.js";
import "./QCheckbox-CbuSlzCd.js";
function N(h) {
  setTimeout(() => {
    window.URL.revokeObjectURL(h.href);
  }, 1e4),
    h.remove();
}
function re(h, d, v = {}) {
  const {
      mimeType: y,
      byteOrderMark: b,
      encoding: u,
    } = typeof v == "string" ? { mimeType: v } : v,
    w = u !== void 0 ? new TextEncoder(u).encode([d]) : d,
    _ = b !== void 0 ? [b, w] : [w],
    c = new Blob(_, { type: y || "application/octet-stream" }),
    o = document.createElement("a");
  (o.href = window.URL.createObjectURL(c)),
    o.setAttribute("download", h),
    typeof o.download > "u" && o.setAttribute("target", "_blank"),
    o.classList.add("hidden"),
    (o.style.position = "fixed"),
    document.body.appendChild(o);
  try {
    return o.click(), N(o), !0;
  } catch (s) {
    return N(o), s;
  }
}
const de = { class: "q-pa-md", style: { width: "100%", height: "100%" } },
  ue = { class: "row q-gutter-lg" },
  ce = { class: "full-width row flex-center text-accent q-gutter-sm" },
  pe = { class: "text-h6" },
  fe = {
    __name: "StudentInfoPage",
    setup(h) {
      const d = X(),
        v = [
          {
            name: "userId",
            required: !0,
            label: "ID",
            field: (n) => n.id,
            format: (n) => `${n}`,
            align: "center",
            sortable: !1,
          },
          {
            name: "dormitory",
            required: !0,
            label: "寝室",
            field: "dormitory",
            align: "center",
            sortable: !1,
          },
          {
            name: "name",
            required: !0,
            label: "姓名",
            field: "name",
            align: "center",
            sortable: !1,
          },
          {
            name: "phone",
            required: !1,
            label: "电话",
            field: "phone",
            align: "center",
            sortable: !1,
          },
        ],
        y = m([]),
        b = m([]),
        u = m([]),
        w = m(""),
        _ = m(!1),
        c = m(!1),
        o = m(!1),
        s = m({ id: null, dormitory: null, name: null, phone: null }),
        r = m({
          sortBy: "desc",
          descending: !1,
          page: 1,
          rowsPerPage: 12,
          rowsNumber: 0,
        }),
        B = (n, a, e) => {
          let t = a !== void 0 ? a(n, e) : n;
          return (
            (t = t == null ? "" : String(t)),
            (t = t.split('"').join('""')),
            t.indexOf(",") > -1 ||
            t.indexOf(`
`) > -1 ||
            t.indexOf('"') > -1
              ? `"${t}"`
              : t
          );
        },
        O = () => {
          const n = [v.map((e) => B(e.label))].concat(
            y.value.map((e) =>
              v
                .map((t) =>
                  B(
                    typeof t.field == "function"
                      ? t.field(e)
                      : e[t.field === void 0 ? t.name : t.field],
                    t.format,
                    e,
                  ),
                )
                .join(","),
            ),
          ).join(`\r
`);
          re("学生信息.csv", n, "text/csv") !== !0 &&
            this.$q.notify({
              message: "Browser denied file download...",
              color: "negative",
              icon: "warning",
            });
        },
        j = async () => {
          try {
            const n = await Q.get(
              "https://test.opensun.asia/api/class/student_infos",
              { headers: { Authorization: sessionStorage.getItem("jwt") } },
            );
            return (
              (b.value = n.data.records),
              (r.value.rowsNumber = b.value.length),
              b.value
            );
          } catch (n) {
            return console.error("Error fetching data:", n), [];
          }
        },
        k = async (n) => {
          const {
              page: a,
              rowsPerPage: e,
              sortBy: t,
              descending: C,
            } = n.pagination,
            R = n.filter;
          _.value = !0;
          const H = e === 0 ? r.value.rowsNumber : e,
            D = (a - 1) * e;
          await j();
          let P = b.value.slice();
          if ((R && (P = P.filter((q) => q.id.includes(R))), t)) {
            const q =
              t === "desc"
                ? C
                  ? (p, f) => (p.id > f.id ? -1 : p.id < f.id ? 1 : 0)
                  : (p, f) => (p.id > f.id ? 1 : p.id < f.id ? -1 : 0)
                : C
                  ? (p, f) => parseFloat(f[t]) - parseFloat(p[t])
                  : (p, f) => parseFloat(p[t]) - parseFloat(f[t]);
            P.sort(q);
          }
          (y.value = P.slice(D, D + H)),
            (_.value = !1),
            (r.value.page = a),
            (r.value.rowsPerPage = e),
            (r.value.sortBy = t),
            (r.value.descending = C);
        };
      K(() => {
        k({ pagination: r.value, filter: void 0 });
      });
      const A = () =>
          u.value.length === 0
            ? ""
            : `${u.value.length} record${u.value.length > 1 ? "s" : ""} selected of ${y.value.length}`,
        T = (n, a, e) => {
          (o.value = !0), (s.value = { ...a }), (c.value = !0);
        },
        E = () => {
          (o.value = !1),
            (s.value = { id: null, dormitory: null, name: null, phone: null }),
            (c.value = !0);
        },
        z = async () => {
          try {
            (
              await Q.post(
                "https://test.opensun.asia/api/class/update_student_info",
                s.value,
              )
            ).status === 200
              ? (await k({ pagination: r.value, filter: void 0 }),
                (c.value = !1),
                d.notify({
                  message: "更新信息成功",
                  position: "top",
                  avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
                }))
              : d.notify({
                  message: "更新信息失败",
                  position: "top",
                  avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
                });
          } catch {
            d.notify({
              message: "更新表失败",
              position: "top",
              avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            });
          }
        },
        M = async () => {
          try {
            (
              await Q.post(
                "https://test.opensun.asia/api/class/add_student",
                s.value,
              )
            ).status === 200 &&
              (await k({ pagination: r.value, filter: void 0 }),
              (c.value = !1),
              d.notify({
                message: "添加成功",
                position: "top",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              }));
          } catch {
            d.notify({
              message: "添加失败",
              position: "top",
              avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            });
          }
        },
        G = async () => {
          try {
            (
              await Q.post(
                "https://test.opensun.asia/api/class/delete_student",
                u.value.map((a) => a.id),
              )
            ).status === 200 &&
              ((u.value = []),
              await k({ pagination: r.value, filter: void 0 }),
              (c.value = !1),
              d.notify({
                message: "删除成功",
                position: "top",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              }));
          } catch {
            d.notify({
              message: "删除失败",
              position: "top",
              avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            });
          }
        };
      return (n, a) => (
        S(),
        I(
          W,
          { class: "row justify-center" },
          {
            default: i(() => [
              l(
                se,
                { class: "bg-accent" },
                {
                  default: i(() => [
                    V("div", de, [
                      l(
                        te,
                        {
                          grid: "",
                          "card-class": "bg-amber-5 text-purple",
                          color: "red",
                          title: "班级学生信息",
                          rows: y.value,
                          columns: v,
                          "row-key": "id",
                          selection: "multiple",
                          "selected-rows-label": A,
                          selected: u.value,
                          "onUpdate:selected":
                            a[1] || (a[1] = (e) => (u.value = e)),
                          loading: _.value,
                          filter: w.value,
                          pagination: r.value,
                          "onUpdate:pagination":
                            a[2] || (a[2] = (e) => (r.value = e)),
                          onRequest: k,
                          "no-data-label": "没有指定数据",
                          "no-results-label": "没有匹配数据",
                          onRowClick: T,
                        },
                        {
                          pagination: i((e) => [
                            e.pagesNumber > 2
                              ? (S(),
                                I(
                                  g,
                                  {
                                    key: 0,
                                    icon: "first_page",
                                    color: "grey-8",
                                    round: "",
                                    dense: "",
                                    flat: "",
                                    disable: e.isFirstPage,
                                    onClick: e.firstPage,
                                  },
                                  null,
                                  8,
                                  ["disable", "onClick"],
                                ))
                              : $("", !0),
                            l(
                              g,
                              {
                                icon: "chevron_left",
                                color: "grey-8",
                                round: "",
                                dense: "",
                                flat: "",
                                disable: e.isFirstPage,
                                onClick: e.prevPage,
                              },
                              null,
                              8,
                              ["disable", "onClick"],
                            ),
                            l(
                              g,
                              {
                                icon: "chevron_right",
                                color: "grey-8",
                                round: "",
                                dense: "",
                                flat: "",
                                disable: e.isLastPage,
                                onClick: e.nextPage,
                              },
                              null,
                              8,
                              ["disable", "onClick"],
                            ),
                            e.pagesNumber > 2
                              ? (S(),
                                I(
                                  g,
                                  {
                                    key: 1,
                                    icon: "last_page",
                                    color: "grey-8",
                                    round: "",
                                    dense: "",
                                    flat: "",
                                    disable: e.isLastPage,
                                    onClick: e.lastPage,
                                  },
                                  null,
                                  8,
                                  ["disable", "onClick"],
                                ))
                              : $("", !0),
                          ]),
                          top: i(() => [
                            V("div", ue, [
                              l(g, {
                                color: "primary",
                                label: "新增学生",
                                onClick: E,
                              }),
                              l(g, {
                                color: "primary",
                                label: "删除学生",
                                onClick: G,
                              }),
                              l(g, {
                                color: "primary",
                                "icon-right": "archive",
                                label: "Export to csv",
                                "no-caps": "",
                                onClick: O,
                              }),
                              l(
                                x,
                                {
                                  borderless: "",
                                  dense: "",
                                  debounce: "800",
                                  modelValue: w.value,
                                  "onUpdate:modelValue":
                                    a[0] || (a[0] = (e) => (w.value = e)),
                                  placeholder: "搜索...",
                                },
                                {
                                  append: i(() => [l(U, { name: "search" })]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"],
                              ),
                            ]),
                          ]),
                          "no-data": i(({ icon: e, message: t, filter: C }) => [
                            V("div", ce, [
                              l(U, {
                                size: "2em",
                                name: "sentiment_dissatisfied",
                              }),
                              V(
                                "span",
                                null,
                                " Well this is sad... " + F(t),
                                1,
                              ),
                              l(
                                U,
                                { size: "2em", name: C ? "filter_b_and_w" : e },
                                null,
                                8,
                                ["name"],
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["rows", "selected", "loading", "filter", "pagination"],
                      ),
                    ]),
                    l(
                      oe,
                      {
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          a[8] || (a[8] = (e) => (c.value = e)),
                      },
                      {
                        default: i(() => [
                          l(le, null, {
                            default: i(() => [
                              l(L, null, {
                                default: i(() => [
                                  V(
                                    "div",
                                    pe,
                                    F(o.value ? "修改学生信息" : "添加学生"),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              }),
                              l(Y),
                              l(L, null, {
                                default: i(() => [
                                  l(
                                    x,
                                    {
                                      clearable: "",
                                      readonly: o.value,
                                      modelValue: s.value.id,
                                      "onUpdate:modelValue":
                                        a[3] ||
                                        (a[3] = (e) => (s.value.id = e)),
                                      label: "id",
                                    },
                                    null,
                                    8,
                                    ["readonly", "modelValue"],
                                  ),
                                  l(
                                    x,
                                    {
                                      clearable: "",
                                      modelValue: s.value.dormitory,
                                      "onUpdate:modelValue":
                                        a[4] ||
                                        (a[4] = (e) => (s.value.dormitory = e)),
                                      label: "寝室号",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                  l(
                                    x,
                                    {
                                      clearable: "",
                                      modelValue: s.value.name,
                                      "onUpdate:modelValue":
                                        a[5] ||
                                        (a[5] = (e) => (s.value.name = e)),
                                      label: "姓名",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                  l(
                                    x,
                                    {
                                      clearable: "",
                                      maxlength: "11",
                                      modelValue: s.value.phone,
                                      "onUpdate:modelValue":
                                        a[6] ||
                                        (a[6] = (e) => (s.value.phone = e)),
                                      label: "电话",
                                      mask: "",
                                      rules: [
                                        (e) =>
                                          /^(?:1[3-9])\d{9}$/.test(e) ||
                                          "请输入有效的中国手机号",
                                      ],
                                    },
                                    {
                                      prepend: i(() => [
                                        l(Z, null, {
                                          default: i(() => [
                                            l(ee, {
                                              fit: "cover",
                                              src: "/icons/china1.png",
                                            }),
                                          ]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                ]),
                                _: 1,
                              }),
                              l(
                                ne,
                                { align: "right" },
                                {
                                  default: i(() => [
                                    ae(
                                      l(
                                        g,
                                        {
                                          flat: "",
                                          label: "返回",
                                          color: "primary",
                                        },
                                        null,
                                        512,
                                      ),
                                      [[ie]],
                                    ),
                                    l(g, {
                                      flat: "",
                                      label: "确认",
                                      color: "primary",
                                      onClick:
                                        a[7] ||
                                        (a[7] = (e) => (o.value ? z() : M())),
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
  ke = J(fe, [
    ["__scopeId", "data-v-b61b606f"],
    ["__file", "StudentInfoPage.vue"],
  ]);
export { ke as default };
