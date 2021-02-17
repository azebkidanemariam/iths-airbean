import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import OrderStaus from "../views/OrderStatus.vue";
import Meny from "../views/Meny.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/orderstatus",
    name: "OrderStatus",
    component: OrderStaus,
  },
  {
    path: "/meny",
    name: "Meny",
    component: Meny,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
