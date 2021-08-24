import { App } from "@vue/runtime-core";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes: [
    {
      path: "",
      component: () => import("../components/HelloWorld.vue"),
    },
  ],
  scrollBehavior: () => ({
    top: 0,
  }),
});

export const setupRouter = (app: App<Element>): void => {
  app.use(router);
};

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
