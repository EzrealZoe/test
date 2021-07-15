<template>
    <vhead>
    </vhead>

</template>
<script>
    import vhead from "./head";

    export default {
        components: {
            vhead,
        },

        created() {
            vhead.methods.session = function () {
                this.$http.get(this.servicePath + "adminLogin", {
                    emulateJSON: true,
                    credentials: true
                }).then(function (response) {
                    if (response.data.status == 1) {
                        this.isLogin = false;
                        this.isAdmin = true;
                    } else {
                        this.$router.push('/login')
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            };
        },

    }
</script>


