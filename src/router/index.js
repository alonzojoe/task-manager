import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "app",
    component: () => import("../layout/AppLayout.vue"),
    children: [
      {
        path: "",
        name: "all-tasks",
        component: () => import("../views/TaskList.vue"),
      },
      {
        path: "completed",
        name: "completed",
        component: () => import("../views/CompletedTask.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
