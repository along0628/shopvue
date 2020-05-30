import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test'
import AddressList from '../views/AddressList'
import AddressNew from '../views/AddressNew'
import AddressEdit from '../views/AddressEdit'
import Detail from '../views/Detail'
import Success from '../views/Success'
import Info from '../views/Info'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/test',
    name:'测试',
    component:Test
  },
  {
    path:'/addressList',
    name:'地址列表',
    component:AddressList
  },
  {
     path:'/addressNew',
     name:'新增地址',
     component:AddressNew
  },
  {
     path:'/addressEdit',
     name:'新增地址',
     component:AddressEdit
  },
    {
      path:'/detail',
      name:'商品详情页面',
      component:Detail
    },
    {
      path:'/success',
      name:'订单支付成功',
      component:Success
    },
    {
      path:'/info',
      name:'完成Info页面',
      component:Info
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
