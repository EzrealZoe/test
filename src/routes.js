import Vue from "vue";
import Router from "vue-router";
import Register from "./pages/Users/register";
import Login from "./pages/Users/login"
import Exit from "./pages/Users/exit"
import RetrievePwd from "./pages/Users/retrievePwd";


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
        },
        {
            name: "exit",
            path: "/exit",
            component: Exit,
            meta:{
                title:'退出登录'
            }
        },


    ]
});
