import {
  _ as t,
  A as o,
  S as s,
  G as e,
  f as r,
  H as c,
} from "./index-DEMVRRIH.js";
const n = {
    class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
  },
  a = e("div", { style: { "font-size": "30vh" } }, "404", -1),
  l = e(
    "div",
    { class: "text-h2", style: { opacity: "0.4" } },
    "Oops. Nothing here...",
    -1,
  ),
  _ = Object.assign(
    { name: "ErrorNotFound" },
    {
      __name: "ErrorNotFound",
      setup(d) {
        return (i, u) => (
          o(),
          s("div", n, [
            e("div", null, [
              a,
              l,
              r(c, {
                class: "q-mt-xl",
                color: "white",
                "text-color": "blue",
                unelevated: "",
                to: "/",
                label: "Go Home",
                "no-caps": "",
              }),
            ]),
          ])
        );
      },
    },
  ),
  f = t(_, [["__file", "ErrorNotFound.vue"]]);
export { f as default };
