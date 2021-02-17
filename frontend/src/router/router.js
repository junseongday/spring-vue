import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFoundComponent from "../views/NotFound.vue";

Vue.use(Router);
export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      // name: "error",
      component: NotFoundComponent
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
