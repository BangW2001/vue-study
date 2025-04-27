import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

import SearchPage from "@/views/SearchPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
const router = new VueRouter({
  routes: [
    { path: "/search/:words?", component: SearchPage },
    { path: "/", redirect: "/search/首页" },
    { path: "*", component: NotFoundPage }

  ],
  mode: "history"
})

export default router