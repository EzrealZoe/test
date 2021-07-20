<template>
    <div>
        <vhead style="min-width: 1300px;">
        </vhead>
        <div class="create">
            <div class="create-wrapper">
                <el-input type="text"
                          placeholder="请输入帖子标题"
                          v-model="text"
                          maxlength="30"
                          show-word-limit>
                </el-input>

                <div style="margin: 20px 0;"></div>

                <el-input :autosize="{ minRows: 10, maxRows: 30}"
                          type="textarea"
                          placeholder="请输入内容"
                          v-model="textarea"
                          maxlength="255"
                          show-word-limit>
                </el-input>

                <div class="item-left">
                    <el-select v-model="forum"
                               placeholder="请选择板块"
                               id="forum">
                        <el-option v-for="item in optionsForum"
                                   :key="item.id"
                                   :label="item.topic"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </div>

                <div class="item-right">
                    <el-button type="primary"
                               @click="commit">
                        {{button}}
                    </el-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import vhead from "../Commons/head";

    export default {
        components: {
            vhead,
        },

        data() {
            return {
                forum: null,
                optionsForum: null,
                text: '',
                textarea: '',
                button: "编辑完毕",
                servicePath: 'http://192.168.3.96/ci/public/index.php/',
            }
        },

        created() {
            if (this.$route.path == "/edit") {
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
            }

        },
        methods: {
            commit() {
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
                        } else if (response.data.status == 3002) {
                            this.$message.error("封禁中！");
                        } else {
                            this.$message.error("更新失败！");
                        }
                    }, function () {
                        this.$message.error("服务器连接错误！");
                    });
                } else {
                    this.$message.error("标题、内容、版块不能为空！");
                }
            },

        }
    }
</script>

<style scoped>
    .item-left {
        float: left;
        line-height: 30px;
        margin-top: 17px;
        padding-left: -10px;
        padding-right: -10px;
    }

    .item-right {
        float: right;
        line-height: 30px;
        margin-top: 17px;
        padding-left: -10px;
        padding-right: -10px;
    }

    .create {
        margin: auto;
        width: 100%;
        min-width: 1300px;
        min-height: 1050px;
        background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;
    }

    .create-wrapper {
        margin: auto;
        padding-top: 30px;
        width: 500px;
    }
</style>
