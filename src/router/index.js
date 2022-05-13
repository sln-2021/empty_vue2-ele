import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import Game from "../view/game/List.vue";
import Detail from "../view/game/compoents/Detail.vue";
import New from "../view/game/compoents/New.vue";
import Login from "../view/login/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/main",
      redirect: "/game",
      name: "main",
      component: Layout,
      children: [
        {
          name: "game",
          path: "/game",
          component: Game
        },
        {
          name: "new",
          path: "/new",
          component: New
        },
        {
          name: "detail",
          path: "/detail",
          component: Detail
        }
      ]
    }
  ]
});
