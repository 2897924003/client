import {
  _ as r,
  u as l,
  o as u,
  A as h,
  S as _,
  E as d,
  G as a,
} from "./index-DEMVRRIH.js";
const m = {
    class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
  },
  g = a(
    "div",
    null,
    [
      a("div", { style: { "font-size": "30vh" } }, "稍等..."),
      a(
        "div",
        { class: "text-h2", style: { opacity: "0.4" } },
        "正在进行安全检查...",
      ),
    ],
    -1,
  ),
  p = [g],
  f = {
    __name: "Oauth2WaitingPage",
    setup(w) {
      const o = l(),
        s = d(),
        n = async () => {
          const e = new URL(window.location.href),
            t = new URLSearchParams(e.search),
            i = t.get("email");
          setTimeout(async () => {
            if (i === "2897924003@qq.com") {
              o.login(), await s.push("/mainlayout"), t.delete("email");
              const c = `${e.origin}${e.pathname}${t.toString() ? "?" + t.toString() : ""}`;
              window.history.replaceState(null, "", c);
            }
          }, 2e3);
        };
      return (
        u(() => {
          n();
        }),
        (e, t) => (h(), _("div", m, p))
      );
    },
  },
  v = r(f, [["__file", "Oauth2WaitingPage.vue"]]);
export { v as default };
