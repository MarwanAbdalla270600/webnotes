import { createRouter, createWebHistory } from "vue-router";

import DashboardPage from "../dashboard/dashboard-page.vue";
import RegisterPage from "../authentification/pages/register-page.vue";
import LoginPage from "../authentification/pages/login-page.vue";

const routes = [
  { path: "/", component: DashboardPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
