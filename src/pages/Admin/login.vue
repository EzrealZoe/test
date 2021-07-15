<template>
    <login>
    </login>

</template>
<script>
    import login from "../Users/login";

    export default {
        components: {
            login,
        },

        created() {
            login.methods.session = function () {
                //先使用session尝试登录
                this.$http.get(this.servicePath + "adminLogin", {
                    emulateJSON: true,
                    credentials: true
                }).then(function (response) {
                    if (response.data.status == 1) {
                        this.$router.push('/admin')
                    }
                }, function () {
                });
            };
            login.methods.submitForm = function () {
                this.$refs.login.validate(valid_result => {
                    if (valid_result) {// 本地校验通过
                        // 发起post请求 ,password md5加密
                        this.$http.post(this.servicePath + "adminLogin", {
                            "username": this.param.username,
                            "password": this.$md5(this.param.password),
                        }, {emulateJSON: true, credentials: true}).then(function (response) {
                            if (response.data.status == 1) {
                                this.$router.push('/admin')
                            } else {
                                this.$message.error("账号或密码错误！");
                            }
                        }, function () {
                            this.$message.error("服务器连接错误！");
                        });


                    } else {   // 本地校验没有通过
                        this.$message.error("输入信息不正确!");
                        this.param.password = null;
                        this.param.username = null;
                        return false;
                    }
                });

            };

        },

    }
</script>


