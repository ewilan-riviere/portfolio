import Vue from 'vue'
import Router from 'vue-router'

// import Home from '~/pages/index'
// import Request from '~/pages/your-request/index'
// import Etapes from '~/pages/details/etapes'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            // {
            //     path: '/',
            //     name: 'home',
            //     component: Home
            // },
            // {
            //     path: '/demande',
            //     name: 'demande',
            //     component: Request
            // },
            // {
            //     path: '/demande/etapes',
            //     name: 'etapes',
            //     component: Etapes,
            // },
            // {
            //     path: '/demande/etapes/:slug',
            //     name: 'etapes-slug',
            //     component: Etapes
            // },
        ]
    })
}
