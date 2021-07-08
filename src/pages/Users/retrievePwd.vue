<template>
    <div
            class="retrieve-wrap"
    >测试测试
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        data: function () {
            return {
                servicePath: 'http://192.168.3.96/test/',
            }
        },
        created() {
            //先使用cookie尝试登录
            axios.defaults.withCredentials = true;
            axios.get(this.servicePath + "login.php")
                .then(
                    (response) => {
                        if (response.data.status == 200) {
                            this.$router.push('/exit')
                        }
                    })
                .catch(
                    (err) => {
                        console.log(err);
                        this.$message.error("服务器连接失败！");
                    }
                );

        },
        methods: {}
    }
</script>

<style scoped>
    /**局部样式样式表 */
    .retrieve-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/4.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
        min-width: 1325px;
    }

</style>

