<template>

    <div class="header">

        <div class="item"
             v-if="isLogin||isAdmin">
            <el-button type="primary"
                       @click="exit">
                退出登录
            </el-button>
        </div>

        <div class="item"
             v-if="isLogin&&!disable">
            <el-button type="primary"
                       @click="post">
                编辑帖子
            </el-button>
        </div>

        <div class="item"
             v-if="isLogin&&!disable">
            <el-button type="primary"
                       @click="create">
                发布帖子
            </el-button>
        </div>

        <div class="item"
             v-if="!isLogin&&!isAdmin">
            <el-button type="primary"
                       @click="login">
                登录
            </el-button>
        </div>
        <div class="item"
             v-if="isAdmin">
            <el-button type="primary"
                       @click="forum">
                版块管理
            </el-button>
        </div>

        <div class="item"
             v-if="isAdmin">
            <el-button type="primary"
                       @click="user">
                人员管理
            </el-button>
        </div>

        <div class="item"
             v-if="isAdmin">
            <el-button type="primary"
                       @click="admin">
                帖子管理
            </el-button>
        </div>

        <div class="item">
            <el-button type="primary"
                       @click="index">
                主页
            </el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLogin: false,
                isAdmin: false,
                disable: false,
                servicePath: 'http://192.168.3.96/ci/public/index.php/auth/',
            };
        },

        created() {
            this.session();

        },
        methods: {
            //用session检查登录
            session() {
                this.$http.get(this.servicePath + "login", {
                    emulateJSON: true,
                    credentials: true
                }).then(function (response) {
                    if (response.data.status == 1) {
                        this.isLogin = true;
                        this.disable = (response.data.disable == "1");
                    } else {
                        this.isLogin = false;
                        this.isAdmin = false;
                    }
                    if(this.disable||!this.isLogin){
                        if(this.$route.path=='/edit'||this.$route.path=='/create'){
                            this.$router.push('/');
                        }
                    }
                }, function () {
                });
            },

            exit() {
                this.$http.get(this.servicePath + "exit", {
                    emulateJSON: true,
                    credentials: true
                }).then(function (response) {
                    if (response.data.status == 1) {
                        this.$router.push('/login')
                    } else {
                        this.$message.error("退出登录失败！");
                    }
                }, function () {
                    this.$message.error("服务器连接失败！");
                });
            },

            post() {
                this.$router.push('/post');
            },

            create() {
                this.$router.push('/create');
            },

            login() {
                this.$router.push('/login');
            },

            forum() {
                this.$router.push('/forum');
            },

            user() {
                this.$router.push('/user');
            },

            admin() {
                this.$router.push('/admin');
            },

            index() {
                this.$router.push('/');
            },

            getDisable() {
                console.log(88);
                return this.disable;
            },



        },
    };

</script>
<style scoped>
    .logo {
        float: left;
        width: 250px;
        line-height: 70px;
        padding-left: 50px;
        color: #EBEEF5;
    }

    .item {
        float: right;
        line-height: 30px;
        margin-top: 17px;
        margin-right: 15px;
        padding-left: -10px;
        padding-right: -10px;
    }

    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #030402;
    }


</style>
