import {
  _,
  A as i,
  B as u,
  C as l,
  G as a,
  f as e,
  O as d,
  I as g,
  P as x,
  H as t,
  R as y,
} from "./index-DEMVRRIH.js";
import { Q as n, a as s, b as m } from "./QCardActions-B86ceFEj.js";
import { Q as h, b } from "./QPage-Rtxh1b_-.js";
const C = {
    data() {
      return { dialogVisible: !1, currentCategory: "" };
    },
    methods: {
      showSubcategories(f) {
        (this.currentCategory = f), (this.dialogVisible = !0);
      },
    },
  },
  w = a(
    "div",
    { class: "text-h6 text-center" },
    "Typology of Chinese countryside self built house",
    -1,
  ),
  N = { class: "row flex q-gutter-sm justify-center" },
  V = a("strong", null, "Two floors:", -1),
  Q = a("strong", null, "Three floors:", -1),
  S = a("div", { class: "text-h6" }, "Subcategories", -1);
function v(f, o, k, q, r, p) {
  return (
    i(),
    u(
      h,
      { class: "column flex flex-center q-gutter-sm" },
      {
        default: l(() => [
          a("div", null, [
            e(
              n,
              { class: "fit column flex flex-center q-gutter-sm" },
              {
                default: l(() => [
                  e(d, { src: "/icons/eye.png" }),
                  w,
                  a("div", N, [
                    e(
                      n,
                      {
                        class: "col-5 cursor-pointer",
                        onClick:
                          o[0] ||
                          (o[0] = (c) => p.showSubcategories("twoFloors")),
                      },
                      {
                        default: l(() => [
                          e(s, null, {
                            default: l(() => [
                              e(d, { src: "/icons/twofloor.png" }),
                            ]),
                            _: 1,
                          }),
                          e(
                            s,
                            { class: "text" },
                            {
                              default: l(() => [
                                V,
                                g(
                                  " New Chinese style/ European style/ Nordic style /Modern style ",
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    e(
                      n,
                      {
                        class: "col-5 cursor-pointer",
                        onClick:
                          o[1] ||
                          (o[1] = (c) => p.showSubcategories("threeFloors")),
                      },
                      {
                        default: l(() => [
                          e(s, null, {
                            default: l(() => [
                              e(d, { src: "/icons/threefloor.png" }),
                            ]),
                            _: 1,
                          }),
                          e(
                            s,
                            { class: "text" },
                            {
                              default: l(() => [
                                Q,
                                g(
                                  " Chinese style/New Chinese style/European style/Simple style ",
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
                ]),
                _: 1,
              },
            ),
          ]),
          e(
            b,
            {
              modelValue: r.dialogVisible,
              "onUpdate:modelValue":
                o[2] || (o[2] = (c) => (r.dialogVisible = c)),
              "transition-show": "rotate",
              "transition-hide": "rotate",
            },
            {
              default: l(() => [
                e(n, null, {
                  default: l(() => [
                    e(s, null, { default: l(() => [S]), _: 1 }),
                    e(x),
                    r.currentCategory === "twoFloors"
                      ? (i(),
                        u(
                          s,
                          { key: 0 },
                          {
                            default: l(() => [
                              e(
                                m,
                                {
                                  class:
                                    "q-gutter-md justify-around row flex flex-center",
                                },
                                {
                                  default: l(() => [
                                    e(t, {
                                      label: "New Chinese Style",
                                      to: "examplepage",
                                      class: "col-2",
                                    }),
                                    e(t, {
                                      label: "European style",
                                      to: "examplepage",
                                      class: "col-2",
                                    }),
                                    e(t, {
                                      label: "Nordic style",
                                      to: "examplepage",
                                      class: "col-2",
                                    }),
                                    e(t, {
                                      label: "modern style",
                                      to: "examplepage",
                                      class: "col-2",
                                    }),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ))
                      : r.currentCategory === "threeFloors"
                        ? (i(),
                          u(
                            s,
                            { key: 1 },
                            {
                              default: l(() => [
                                e(
                                  m,
                                  {
                                    class:
                                      "q-gutter-md justify-around row flex flex-center",
                                  },
                                  {
                                    default: l(() => [
                                      e(t, {
                                        label: "New Chinese Style",
                                        to: "examplepage",
                                        class: "col-2",
                                      }),
                                      e(t, {
                                        label: "European style",
                                        to: "examplepage",
                                        class: "col-2",
                                      }),
                                      e(t, {
                                        label: "Nordic style",
                                        to: "examplepage",
                                        class: "col-2",
                                      }),
                                      e(t, {
                                        label: "modern style",
                                        to: "examplepage",
                                        class: "col-2",
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : y("", !0),
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
    )
  );
}
const I = _(C, [
  ["render", v],
  ["__file", "IndexPage.vue"],
]);
export { I as default };
