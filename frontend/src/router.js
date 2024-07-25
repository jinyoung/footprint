
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CodeServiceCodeManager from "./components/listers/CodeServiceCodeCards"
import CodeServiceCodeDetail from "./components/listers/CodeServiceCodeDetail"

import MetalOrderServiceMetalOrderManager from "./components/listers/MetalOrderServiceMetalOrderCards"
import MetalOrderServiceMetalOrderDetail from "./components/listers/MetalOrderServiceMetalOrderDetail"

import MoldServiceMoldManager from "./components/listers/MoldServiceMoldCards"
import MoldServiceMoldDetail from "./components/listers/MoldServiceMoldDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/codeServices/codes',
                name: 'CodeServiceCodeManager',
                component: CodeServiceCodeManager
            },
            {
                path: '/codeServices/codes/:id',
                name: 'CodeServiceCodeDetail',
                component: CodeServiceCodeDetail
            },

            {
                path: '/metalOrderServices/metalOrders',
                name: 'MetalOrderServiceMetalOrderManager',
                component: MetalOrderServiceMetalOrderManager
            },
            {
                path: '/metalOrderServices/metalOrders/:id',
                name: 'MetalOrderServiceMetalOrderDetail',
                component: MetalOrderServiceMetalOrderDetail
            },

            {
                path: '/moldServices/molds',
                name: 'MoldServiceMoldManager',
                component: MoldServiceMoldManager
            },
            {
                path: '/moldServices/molds/:id',
                name: 'MoldServiceMoldDetail',
                component: MoldServiceMoldDetail
            },



    ]
})
