import Vue from 'vue'
import VueRouter from 'vue-router'

import SearchMovies from './components/SearchMovies.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/searchMovies'},
        { path: '/searchMovies', component: SearchMovies}


    ]


})