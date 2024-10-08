import {
  l as s,
  c as o,
  h as n,
  q as c,
  X as l,
  Y as u,
  g as i,
  aZ as q,
  a_ as v,
} from "./index-DEMVRRIH.js";
const f = s({
    name: "QCardSection",
    props: { tag: { type: String, default: "div" }, horizontal: Boolean },
    setup(a, { slots: e }) {
      const r = o(
        () =>
          `q-card__section q-card__section--${a.horizontal === !0 ? "horiz row no-wrap" : "vert"}`,
      );
      return () => n(a.tag, { class: r.value }, c(e.default));
    },
  }),
  C = s({
    name: "QCard",
    props: {
      ...l,
      tag: { type: String, default: "div" },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(a, { slots: e }) {
      const {
          proxy: { $q: r },
        } = i(),
        t = u(a, r),
        d = o(
          () =>
            "q-card" +
            (t.value === !0 ? " q-card--dark q-dark" : "") +
            (a.bordered === !0 ? " q-card--bordered" : "") +
            (a.square === !0 ? " q-card--square no-border-radius" : "") +
            (a.flat === !0 ? " q-card--flat no-shadow" : ""),
        );
      return () => n(a.tag, { class: d.value }, c(e.default));
    },
  }),
  _ = s({
    name: "QCardActions",
    props: { ...q, vertical: Boolean },
    setup(a, { slots: e }) {
      const r = v(a),
        t = o(
          () =>
            `q-card__actions ${r.value} q-card__actions--${a.vertical === !0 ? "vert column" : "horiz row"}`,
        );
      return () => n("div", { class: t.value }, c(e.default));
    },
  });
export { C as Q, f as a, _ as b };
