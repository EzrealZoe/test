import Vue from "vue";
import Router from "vue-router";
import Register from "./components/Users/Register";
import Login from "./components/Users/Login"
import RetrievePwd from "./components/Users/RetrievePwd";


Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "login",
            path: "/",
            component: Login,
            meta:{
                title:'登录'
            }
        },
        {
            path: "/login",
            component: Login,
            meta:{
                title:'登录'
            }
        },
        {
            path: "/register",
            component: Register,
            meta:{
                title:'注册'
            }
        },
        {
            path: "/retrieve",
            component: RetrievePwd,
            meta:{
                title:'找回密码'
            }
        }


    ]
});
