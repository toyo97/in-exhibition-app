import Vue from 'vue'
import VueRouter from 'vue-router'

import About from "@/views/About";
import Home from "@/views/Home";
import Exhibition from "@/components/Exhibition";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        },
        {
            path: '/exhibition',
            component: Exhibition,
            name: "exhibition"
        }
    ]
})
