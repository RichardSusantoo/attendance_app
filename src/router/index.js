import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/presensi",
    name: "presensi",
    component: () =>
      import(/* webpackChunkName: "presensi" */ "../views/PresensiView.vue"),
  },
  {
    path: "/profil",
    name: "profil",
    component: () =>
      import(/* webpackChunkName: "profil" */ "../views/ProfilView.vue"),
  },
  {
    path: "/export",
    name: "export",
    component: () =>
      import(/* webpackChunkName: "export" */ "../views/ExportView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
