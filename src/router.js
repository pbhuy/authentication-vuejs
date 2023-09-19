import { createWebHistory, createRouter } from "vue-router";
import DashBoard from "@/components/DashBoard.vue";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import About from "@/components/About.vue";
// import SignUp from "@/components/SignUp.vue";

const routes = [
  { path: "/", component: DashBoard },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/about", component: About },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
