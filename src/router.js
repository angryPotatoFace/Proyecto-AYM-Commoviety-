import Vue from 'vue'
import VueRouter from 'vue-router'

import SearchMovies from './components/SearchMovies.vue'
import DetailsMovie from './components/DetailsMovie.vue'
import Registration from './components/Registration.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/searchMovies'},
        { path: '/searchMovies', component: SearchMovies},
        { path: '/detailsMovies', component: DetailsMovie},
        { path: '/registration', component: Registration}
    ]


})