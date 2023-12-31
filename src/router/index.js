import { createRouter, createWebHashHistory } from "vue-router";
import RestarauntView from "../views/RestarauntView.vue";

const routes = [
  {
    path: "/restaraunt/:restaraunt",
    name: "restaraunt",
    component: RestarauntView,
    props: true,
  },
  {
    path: "/",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
