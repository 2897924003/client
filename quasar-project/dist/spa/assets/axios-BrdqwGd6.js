import { j as a, k as s } from "./index-DEMVRRIH.js";
const t = s.create({ baseURL: "https://test.opensun.asia:8100" }),
  e = a(({ app: o }) => {
    (o.config.globalProperties.$axios = s),
      (o.config.globalProperties.$api = t);
  });
export { t as api, s as axios, e as default };
