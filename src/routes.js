import Vue from "vue";
import Router from "vue-router";
import Register from "./pages/Users/register";
import Login from "./pages/Users/login"
import Exit from "./pages/Users/exit"
import RetrievePwd from "./pages/Users/retrievePwd";
import Post from "./pages/Services/post"
import Edit from "./pages/Services/edit"
import Create from "./pages/Services/create"
import Index from "./pages/Services/index"
import Details from "./pages/Services/details"
import Admin from "./pages/Admin/index"
import adminLogin from "./pages/Admin/login"
import Forum from "./pages/Admin/forum"
import User from "./pages/Admin/user"

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "index",
            path: "/",
            component: Index,
            meta: {
                title: '主页'
            }
        },

        {
            path: "/login",
            component: Login,
            meta: {
                title: '登录'
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                title: '注册'
            }
        },
        {
            path: "/retrieve",
            component: RetrievePwd,
            meta: {
                title: '找回密码'
            }
        },

        {
            path: "/post",
            component: Post,
            meta: {
                title: '查看已发布的帖子'
            }
        },
        {
            path: "/edit",
            component: Edit,
            meta: {
                title: '编辑'
            }
        },
        {
            path: "/create",
            component: Create,
            meta: {
                title: '创建帖子'
            }
        },
        {
            path: "/d",
            component: Details,
            meta: {
                title: '详情'
            }
        },

        {
            path: "/admin",
            component: Admin,
            meta: {
                title: '主页'
            }
        },
        {
            path: "/96e79218965eb72c92a549dd5a330112",
            component: adminLogin,
            meta: {
                title: '登录'
            }
        },
        {
            path: "/forum",
            component: Forum,
            meta: {
                title: '板块'
            }
        },
        {
            path: "/user",
            component: User,
            meta: {
                title: '用户管理'
            }
        },


        {
            name: "exit",
            path: "/exit",
            component: Exit,
            meta: {
                title: '退出登录'
            }
        },


    ]
});
