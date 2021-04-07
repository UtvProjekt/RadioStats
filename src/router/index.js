import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";





  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/trafikstatistik",
      name: "Trafikstatistik",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "trafikstatistik" */ "../views/trafikstatistik.vue"),
    },
    {
      path: "/trafikhandelser",
      name: "Trafikshandelser", 
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "trafikhändelser" */ "../views/trafikhandelser.vue"),
    },
    {
      path: "/program",
      name: "Program", 
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "program " */ "../views/program.vue"),
    },
    {
      path: "/omoss",
      name: "Om oss", 
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Om oss " */ "../views/About.vue"),
    },
    
  ];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
