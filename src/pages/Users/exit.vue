<template>
    <div
            class="exit-wrap"
    >  <!--整个页面包装器wrap-->
        <div class="ms-exit">
            <div class="ms-title">
                <span class="exit-title" style="front-size: 20px;">已登录
                </span>
            </div>
            <div class="exit-btn">
                <el-button type="primary" @click="exit">退出登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function () {

            return {
                servicePath: 'http://192.168.3.96/ci/public/index.php/auth/',

            };
        },

        created() {
            //先使用session尝试登录
            this.$http.get(this.servicePath + "login", {
                emulateJSON: true,
                credentials: true
            }).then(function (response) {
                if (response.data.status == 200) {
                    this.$router.push('/exit')
                } else {
                    this.$router.push('/login')
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
                    if (response.data.status == 200) {
                        this.$router.push('/login')
                    } else {
                        this.$message.error("退出登录失败！");
                    }
                }, function () {
                    this.$message.error("服务器连接失败！");
                });
            }

        }
    }
</script>

<style scoped>
    /**局部样式样式表 */
    .exit-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/4.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
        min-width: 1325px;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
    }

    .exit-title {
        height: 56px;
        line-height: 56px;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 40px;
        text-align: center;
    }

    .ms-exit {
        position: absolute;
        left: 50%;
        top: 55%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        position: relative;
        padding: 30px 30px;
    }

    .exit-btn {
        text-align: center;
    }

    .exit-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }


</style>

