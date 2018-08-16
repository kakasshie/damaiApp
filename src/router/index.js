import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Login from "@/pages/Login"
import Admin from '@/pages/Admin'
import OrderMenu from '@/components/Order/OrderMenu'
import MyMsg from "@/components/Order/MyMsg"
import Address from "@/components/Order/Address"
import Setting from "@/components/Order/Setting"
import Personal from "@/components/Order/Personal"
import Commonly from "@/components/Order/Commonly"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },{
      path: '/admin',
      name: "Admin",
      component: Admin,
      children:[{
        path:"",
        name:"OrderMenu",
        component:OrderMenu
      },{
        path: 'ordermenu',
        name: 'OrderMenu',
        component: OrderMenu
      },{
        path:"mymsg",
        name: 'MyMsg',
        component: MyMsg
      },{
        path: 'address',
        name: 'Address',
        component: Address
      },{
        path: 'setting',
        name: 'Setting',
        component: Setting
      },{
        path: 'personal',
        name: 'Personal',
        component: Personal
      },{
        path: 'commonly',
        name: 'Commonly',
        component: Commonly
      }]
    }
  ]
})

