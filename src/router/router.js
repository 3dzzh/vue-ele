import Vue from'vue'
import VueRouter from'vue-router'
import Order from'../components/Order.vue'
import Evaluate from'../components/Evaluate.vue'
import Seller from'../components/Seller.vue'
Vue.use(VueRouter)
const routes =[
    { path: '/', component:Order},
    { path: '/evaluate', component:Evaluate},
    { path: '/seller', component:Seller}
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router