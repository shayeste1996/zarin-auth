import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import MainLogin from "@/components/login";
import Login from "@/components/login/Login";
import Request from "@/components/login/Request";
import NotFound from "@/components/notFound";
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/auth/login",
      component: MainLogin,
      children: [
        {
          path: "",
          name: "login",
          component: Login
        },
        {
          path: "request",
          name: "request",
          component: Request
        }
      ]
    },
    {
      path: "*",
      component: NotFound
    }
  ],
  mode: "history"
});
