import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminHomeView from "@/views/AdminHomeView.vue";

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
  {
    path: "/admin",
    name: "homeAdmin",
    component: AdminHomeView,
  },
  {
    path: "/admin/login",
    name: "loginAdmin",
    component: () =>
      import(/* webpackChunkName: "export" */ "../views/AdminLoginView.vue"),
  },
  {
    path: "/admin/register",
    name: "registerAdmin",
    component: () =>
      import(/* webpackChunkName: "export" */ "../views/AdminRegisterView.vue"),
  },
  {
    path: "/admin/export",
    name: "exportAdmin",
    component: () =>
      import(/* webpackChunkName: "export" */ "../views/AdminExportView.vue"),
  },
  {
    path: "/admin/profil",
    name: "profilAdmin",
    component: () =>
      import(/* webpackChunkName: "export" */ "../views/AdminProfilView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
