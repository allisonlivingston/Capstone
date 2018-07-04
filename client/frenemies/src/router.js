import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import AfterSignUp from "@/components/AfterSignUp"
import Friends from "@/components/Friends"
import Stats from "@/components/Stats"
import Create from "@/components/Create"
import Login from "@/components/Login"
import DemoUser from "@/components/DemoUser"
import MyStats from "@/components/MyStats"
import AddActivities from "@/components/AddActivities"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/aftersignup",
      name: "AfterSignUp",
      component: AfterSignUp
    },
    {
      path: "/friends",
      name: "Friends",
      component: Friends
    },
    {
      path: "/friends/:id",
      name: "Stats",
      component: Stats
    },
    {
      path: "/addfriend",
      name: "Create",
      component: Create
    },
    {
      path: "/demouser",
      name: "DemoUser",
      component: DemoUser
    },
    {
      path: "/mystats",
      name: "MyStats",
      component: MyStats
    },
    {
      path: "/addactivities",
      name: "AddActivities",
      component: AddActivities
    }
  ],
  mode: 'history'
})
