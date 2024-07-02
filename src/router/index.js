import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import GalleryView from "../views/GalleryView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUsView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUsView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
