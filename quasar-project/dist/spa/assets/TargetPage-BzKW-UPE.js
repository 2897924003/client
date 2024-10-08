import { Q as r } from "./QTree-JIoxeCL5.js";
import { _ as n, r as d, A as s, S as c, f as y } from "./index-DEMVRRIH.js";
import "./QCheckbox-CbuSlzCd.js";
const b = [
    {
      label: "Node 1",
      children: [
        { label: "Node 1.1", lazy: !0 },
        { label: "Node 1.2", lazy: !0 },
      ],
    },
    { label: "Node 2", lazy: !0 },
    { label: "Lazy load empty", lazy: !0 },
    {
      label: "Node is not expandable",
      expandable: !1,
      children: [{ label: "Some node" }],
    },
  ],
  i = {
    setup() {
      return {
        lazy: d(b),
        onLazyLoad({ node: o, key: t, done: a, fail: l }) {
          setTimeout(() => {
            if (t.indexOf("Lazy load empty") > -1) {
              a([]);
              return;
            }
            const e = o.label;
            a([
              { label: `${e}.1` },
              { label: `${e}.2`, lazy: !0 },
              {
                label: `${e}.3`,
                children: [
                  { label: `${e}.3.1`, lazy: !0 },
                  { label: `${e}.3.2`, lazy: !0 },
                ],
              },
            ]);
          }, 1e3);
        },
      };
    },
  },
  u = { class: "q-pa-md q-gutter-sm" };
function f(o, t, a, l, e, p) {
  return (
    s(),
    c("div", u, [
      y(
        r,
        {
          nodes: l.lazy,
          "default-expand-all": "",
          "node-key": "label",
          onLazyLoad: l.onLazyLoad,
        },
        null,
        8,
        ["nodes", "onLazyLoad"],
      ),
    ])
  );
}
const L = n(i, [
  ["render", f],
  ["__file", "TargetPage.vue"],
]);
export { L as default };
