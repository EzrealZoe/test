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
        created() {
            editor.created = function () {
                this.button = "编辑完毕";
                this.$http.get(this.servicePath + "/forum/getForums").then(function (response) {
                    if (response.data.status == 1) {
                        this.optionsForum = response.data.data;
                    } else {
                        this.$message.error("数据格式不通过");
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });

                this.$http.get(this.servicePath + "post/getPost?id=" + this.$route.query.id, {
                    emulateJSON: true,
                    credentials: true
                }).then(function (response) {
                    if (response.data.status == 1) {
                        if (response.data.data.length < 1) {
                            this.$router.push('/');
                            this.$message.error("无权修改该帖子或该帖子不存在！");
                        } else {
                            this.forum = response.data.data[0]['forum_id'];
                            this.text = response.data.data[0]['title'];
                            this.textarea = response.data.data[0]['content'];
                        }
                    } else {
                        this.$router.push('/');
                        this.$message.error("无权修改该帖子或该帖子不存在！");
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            };

            editor.methods.commit = function () {
                if (this.text.length > 0 && this.textarea.length > 0 && this.forum != null) {
                    this.$http.post(this.servicePath + "post/edit", {
                        "id": this.$route.query.id,
                        "title": this.text,
                        "forum_id": this.forum,
                        "content": this.textarea,
                    }, {emulateJSON: true, credentials: true}).then(function (response) {
                        if (response.data.status == 1) {
                            this.$router.push('/post');
                            this.$message.success("帖子已更新！");
                        } else {
                            this.$message.error("更新失败！");
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
