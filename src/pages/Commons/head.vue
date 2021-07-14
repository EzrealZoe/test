<template>

    <div class="header">
        <div class="logo">{{title}}</div>

        <div class="item" v-if="isLogin">
            <el-button type="primary"
                       @click="exit">
                退出登录
            </el-button>
        </div>

        <div class="item" v-if="isLogin">
            <el-button type="primary"
                       @click="edit">
                编辑帖子
            </el-button>
        </div>

        <div class="item" v-if="isLogin">
            <el-button type="primary"
                       @click="create">
                发布帖子
            </el-button>
        </div>

        <div class="item" v-if="!isLogin">
            <el-button type="primary"
                       @click="login">
                登录
            </el-button>
        </div>
        <div class="item" v-if="isAdmin">
            <el-button type="primary"
                       @click="login">
                板块管理
            </el-button>
        </div>

        <div class="item" v-if="isAdmin">
            <el-button type="primary"
                       @click="login">
                帖子管理
            </el-button>
        </div>

        <div class="item" v-if="isAdmin">
            <el-button type="primary"
                       @click="login">
                人员管理
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
                title: "板块名",
                servicePath: 'http://192.168.3.96/ci/public/index.php/auth/',
            };
        },

        created() {
            //用session检查登录
            this.$http.get(this.servicePath + "login", {
                emulateJSON: true,
                credentials: true
            }).then(function (response) {
                if (response.data.status == 1) {
                    this.isLogin = true;
                } else if (response.data.status == 2) {
                    this.isLogin = true;
                    this.isAdmin = true;
                } else {
                    this.isLogin = false;
                    this.isAdmin = false;
                }
            }, function () {
            });
        },
        methods: {
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

            edit() {
                this.$router.push('/edit');
            },

            create() {
                this.$router.push('/create');
            },

            login() {
                this.$router.push('/login');
            }

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
