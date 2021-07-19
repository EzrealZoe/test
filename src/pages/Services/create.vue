<template>
    <div>
        <vhead style="min-width: 1300px;">
        </vhead>
        <editor>
        </editor>

    </div>
</template>
<script>
    import vhead from "../Commons/head";
    import editor from "../Commons/editor";

    export default {
        components: {
            vhead, editor,
        },
        data: function () {
            return {};
        },

        created() {
            editor.created = function () {
                this.button = "发布帖子";
                this.$http.get("http://192.168.3.96/ci/public/index.php/forum/getForums").then(function (response) {
                    if (response.data.status == 1) {
                        this.optionsForum = response.data.data;
                    } else {
                        this.$message.error("数据格式不通过");
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            };

            editor.methods.commit = function () {
                if (this.text.length > 0 && this.textarea.length > 0 && this.forum != null) {
                    this.$http.post(this.servicePath + "post/create", {
                        "title": this.text,
                        "forum_id": this.forum,
                        "content": this.textarea,
                    }, {emulateJSON: true, credentials: true}).then(function (response) {
                        if (response.data.status == 1) {
                            this.$router.push('/');
                            this.$message.success("帖子已发布！");
                        } else {
                            this.$message.error("格式错误！");
                        }
                    }, function () {
                        this.$message.error("服务器连接错误！");
                    });
                } else {
                    this.$message.error("标题、内容、版块不能为空！");
                }
            }
        },
        methods: {},


    }
</script>

<style scoped>
</style>
