import { aH as s, af as d } from "./index-DEMVRRIH.js";
import { j as a, k as c } from "./QPage-Rtxh1b_-.js";
function n(e) {
  if (e === !1) return 0;
  if (e === !0 || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
const h = s({
  name: "close-popup",
  beforeMount(e, { value: t }) {
    const o = {
      depth: n(t),
      handler(r) {
        o.depth !== 0 &&
          setTimeout(() => {
            const p = a(e);
            p !== void 0 && c(p, r, o.depth);
          });
      },
      handlerKey(r) {
        d(r, 13) === !0 && o.handler(r);
      },
    };
    (e.__qclosepopup = o),
      e.addEventListener("click", o.handler),
      e.addEventListener("keyup", o.handlerKey);
  },
  updated(e, { value: t, oldValue: o }) {
    t !== o && (e.__qclosepopup.depth = n(t));
  },
  beforeUnmount(e) {
    const t = e.__qclosepopup;
    e.removeEventListener("click", t.handler),
      e.removeEventListener("keyup", t.handlerKey),
      delete e.__qclosepopup;
  },
});
export { h as C };
