import Router from "vue-router";
import Home from "./views/Home.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vue",
      name: "home",
      component: Home
    },
    {
      path: "/vue/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
