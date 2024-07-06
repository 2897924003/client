import {
  _ as n,
  r as e,
  u as _,
  w as c,
  A as i,
  B as d,
  C as s,
  Q as f,
  D as p,
  E as m,
  aF as w,
  f as o,
  L as y,
} from "./index-DEMVRRIH.js";
const B = {
    __name: "BuildingLayout",
    setup(L) {
      const a = p();
      e(!1), e(!0), m(), _();
      const r = e("day");
      return (
        c(r, (t, u) => {
          t === "day" ? a.dark.set(!1) : a.dark.set(!0);
        }),
        (t, u) => {
          const l = w("router-view");
          return (
            i(),
            d(
              f,
              { view: "lHh Lpr lFf" },
              {
                default: s(() => [
                  o(y, null, { default: s(() => [o(l)]), _: 1 }),
                ]),
                _: 1,
              },
            )
          );
        }
      );
    },
  },
  v = n(B, [["__file", "BuildingLayout.vue"]]);
export { v as default };
