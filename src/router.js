import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import loginRegister from "./components/loginRegister.vue";
import UserQuery from "./components/UserQuery.vue";
import Index from "./components/Index.vue";
import WangEditTest from './components/WangEditTest.vue'

// 创建路由实例对象
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: loginRegister, name: "login" },
    {
      path: "/Home",
      component: Home,
      name: "Home",
      redirect: "/Home/Index",
      children: [
        { path: "Index", component: import("./components/Index.vue") },
        { path: "HelloWorld", component: HelloWorld },
        { path: "UserQuery", component: UserQuery },
        { path: "WangEditTest", component: WangEditTest },
        { path: "VueStudy/Reactive", component: import("./components/VueStudy/Reactive.vue")  },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenStr = localStorage.getItem("token");
  if (!tokenStr) {
    next("/login");
  } else {
    next();
  }
});

export default router;
