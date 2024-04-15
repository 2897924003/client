import MainLayout from "layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    name: "login",
    meta: { requireAuthenticated: false },
  },

  {
    path: "/mainlayout",
    name: "mainlayout",
    meta: { requireAuthenticated: true },
    component: MainLayout,
    children: [
      {
        path: "/indexpage",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/targetpage",
        component: () => import("pages/TargetPage.vue"),
      },

      {
        path: "/userauthpage",
        component: () => import("pages/UserAuthPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/login",
    redirect: "/",
  },
];

export default routes;
