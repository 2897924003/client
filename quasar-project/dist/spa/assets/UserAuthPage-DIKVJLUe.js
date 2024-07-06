import {
  _ as w,
  r,
  o as k,
  k as P,
  A as o,
  B as d,
  C as n,
  G as u,
  f as a,
  H as s,
  R as b,
  K as c,
  U as C,
} from "./index-DEMVRRIH.js";
import { Q as U } from "./QInput-pQ_uuI7K.js";
import { Q as q } from "./QTable-CsMYil0B.js";
import { Q as x } from "./QPage-Rtxh1b_-.js";
import "./QSelect-Hc-Dnbtu.js";
import "./QCheckbox-CbuSlzCd.js";
const I = {
    class: "q-pa-md justify-center",
    style: { width: "100%", height: "100%" },
  },
  Q = { class: "full-width row flex-center text-accent q-gutter-sm" },
  B = {
    __name: "UserAuthPage",
    setup(N) {
      const p = [
          {
            name: "userId",
            required: !0,
            label: "ID",
            field: "userId",
            align: "center",
            sortable: !1,
          },
          {
            name: "username",
            required: !0,
            label: "用户名",
            field: "username",
            align: "center",
            sortable: !1,
          },
          {
            name: "createUser",
            required: !0,
            label: "创建人",
            field: "createUser",
            align: "center",
            sortable: !1,
          },
          {
            name: "updateUser",
            required: !0,
            label: "修改人",
            field: "updateUser",
            align: "center",
            sortable: !1,
          },
          {
            name: "createTime",
            required: !0,
            label: "创建时间",
            field: "createTime",
            align: "center",
            sortable: !0,
          },
          {
            name: "updateTime",
            required: !0,
            label: "修改时间",
            field: "updateTime",
            align: "center",
            sortable: !0,
          },
          {
            name: "authLevel",
            required: !0,
            label: "权限级别",
            field: "authLevel",
            align: "center",
            sortable: !0,
          },
          {
            name: "enabled",
            required: !0,
            label: "账号状态",
            field: "enabled",
            align: "center",
            sortable: !0,
          },
        ],
        i = r([]);
      k(async () => {
        const f = await P.post(
          "https://test.opensun.asia/api/authentication/user_infos",
          {},
          { headers: { Authorization: sessionStorage.getItem("jwt") } },
        );
        i.value = f.data.records;
      });
      const l = r([]),
        g = r(""),
        h = r(!1),
        m = r({
          sortBy: "desc",
          descending: !1,
          page: 2,
          rowsPerPage: 10,
          rowsNumber: 1,
        }),
        _ = () =>
          l.value.length === 0
            ? ""
            : `${l.value.length} record${l.value.length > 1 ? "s" : ""} selected of ${i.value.length}`;
      return (f, t) => (
        o(),
        d(
          x,
          { class: "row justify-center" },
          {
            default: n(() => [
              u("div", I, [
                a(
                  q,
                  {
                    "card-class": "bg-green",
                    color: "red",
                    title: "用户管理",
                    rows: i.value,
                    columns: p,
                    "row-key": "userId",
                    selection: "multiple",
                    "selected-rows-label": _,
                    selected: l.value,
                    "onUpdate:selected": t[1] || (t[1] = (e) => (l.value = e)),
                    loading: h.value,
                    pagination: m.value,
                    "onUpdate:pagination":
                      t[2] || (t[2] = (e) => (m.value = e)),
                    "no-data-label": "I didn't find anything for you",
                    "no-results-label": "The filter didn't uncover any results",
                  },
                  {
                    pagination: n((e) => [
                      e.pagesNumber > 2
                        ? (o(),
                          d(
                            s,
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
                        : b("", !0),
                      a(
                        s,
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
                      a(
                        s,
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
                        ? (o(),
                          d(
                            s,
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
                        : b("", !0),
                    ]),
                    "top-right": n(() => [
                      a(
                        U,
                        {
                          borderless: "",
                          dense: "",
                          debounce: "500",
                          modelValue: g.value,
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (e) => (g.value = e)),
                          hint: "Debouncing 500ms",
                          placeholder: "Search",
                        },
                        { append: n(() => [a(c, { name: "search" })]), _: 1 },
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "no-data": n(({ icon: e, message: v, filter: y }) => [
                      u("div", Q, [
                        a(c, { size: "2em", name: "sentiment_dissatisfied" }),
                        u("span", null, " Well this is sad... " + C(v), 1),
                        a(
                          c,
                          { size: "2em", name: y ? "filter_b_and_w" : e },
                          null,
                          8,
                          ["name"],
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["rows", "selected", "loading", "pagination"],
                ),
              ]),
            ]),
            _: 1,
          },
        )
      );
    },
  },
  z = w(B, [["__file", "UserAuthPage.vue"]]);
export { z as default };
