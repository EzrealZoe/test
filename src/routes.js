import Vue from "vue";
import Router from "vue-router";
import Register from "./pages/Users/register";
import Login from "./pages/Users/login"
import Exit from "./pages/Users/exit"
import RetrievePwd from "./pages/Users/retrievePwd";
import Edit from "./pages/Services/edit"
import Create from "./pages/Services/create"
import Index from "./pages/Services/index"

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "index",
            path: "/",
            component: Index,
            meta:{
                title:'主页'
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
            path: "/edit",
            component: Edit,
            meta:{
                title:'编辑帖子'
            }
        },
        {
            path: "/create",
            component: Create,
            meta:{
                title:'创建帖子'
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
