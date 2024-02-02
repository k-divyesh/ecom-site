import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
    { path: "/", name: "home", component: HomeView },
    {
        path: "/shop",
        name: "shop",
        component: import("../views/ShopView.vue"),
    },
    {
        path: "/faq",
        name: "faq",
        component: () => import("../views/FaqView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/ContactView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
