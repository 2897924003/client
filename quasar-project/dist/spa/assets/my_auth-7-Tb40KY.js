import { j as a, u } from "./index-DEMVRRIH.js";
const n = a(({ router: t, store: c, redirect: i }) => {
  t.beforeEach((e, r, o) => {
    const s = u();
    console.log("to", e),
      console.log("from", r),
      e.meta.requireAuthenticated && !s.isLoggedIn ? o({ name: "login" }) : o();
  });
});
export { n as default };
