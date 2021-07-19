<template>
    <el-scrollbar style="height:100%;width: 100%">
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="details">
            <div class="main">

                <div class="details-content">
                    <div class="details-box"
                         v-for="item in post"
                         :key='item'>
                        <a class="a-text">
                            {{item.content}}
                        </a>
                        <a class="poster">
                            楼主id:{{item.user_id}}
                        </a>
                    </div>
                    <div class="details-box"
                         v-for="item in comments"
                         :key='item'>
                        <a class="a-text">
                            {{item.content}}
                        </a>
                        <a class="poster">
                            用户id:{{item.user_id}}
                        </a>
                    </div>
                </div>


                <el-input :autosize="{ minRows: 10, maxRows: 30}"
                          type="textarea"
                          placeholder="请输入内容"
                          v-model="text"
                          maxlength="255"
                          show-word-limit
                          style="margin-left: 10px">
                </el-input>

                <el-button type="primary"
                           class="item-right"
                           @click="commit"
                >
                    发布评论
                </el-button>
                <el-input :autosize="{ minRows: 1, maxRows: 30}"
                          type="textarea"
                          placeholder="请输入内容"
                          v-model="text"
                          maxlength="255"
                          show-word-limit
                          style="margin-left: 10px;visibility: hidden">
                </el-input>


            </div>


        </div>
    </el-scrollbar>
</template>
<script>
    import vhead from "../Commons/head";

    export default {
        components: {
            vhead,
        },

        data() {
            return {
                text: '',
                post: [],
                comments: [],
                servicePath: 'http://192.168.3.96/ci/public/index.php/',

            }
        },

        created() {
            this.$http.get(this.servicePath + "post/viewPost?id=" + this.$route.query.id).then(function (response) {
                if (response.data.status != 1 ||response.data.data.length<1)  {
                    this.$router.push('/');
                    this.$message.error("找不到该帖子！");
                }
                else{
                    document.title = response.data.data[0]['title'];
                    this.post = response.data.data;
                }
            }, function () {
                this.$message.error("服务器连接错误！");
            });

            this.$http.get(this.servicePath + "comment/getComments?id=" + this.$route.query.id).then(function (response) {
                if (response.data.status != 1)  {
                    this.$router.push('/');
                    this.$message.error("数据格式不通过!");
                }
                else{
                    this.comments = response.data.data;
                }
            }, function () {
                this.$message.error("服务器连接错误！");
            });
        },

        methods: {
            commit(){
                if (this.text.length > 0) {
                    this.$http.post(this.servicePath + "comment/create", {
                        "post_id": this.$route.query.id,
                        "content": this.text,
                    }, {emulateJSON: true, credentials: true}).then(function (response) {
                        if (response.data.status == 1) {
                            this.$router.go(0);
                            this.$message.success("评论已发布！");
                        } else {
                            this.$message.error("格式错误！");
                        }
                    }, function () {
                        this.$message.error("服务器连接错误！");
                    });
                } else {
                    this.$message.error("评论不能为空！");
                }
            }
        },


    }
</script>

<style scoped>
    .details {
        margin: auto;
        width: 100%;
        min-width: 1300px;
        min-height: 1050px;
        background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;
    }

    .main {
        margin: auto;
        width: 60%;
        min-width: 800px;
    }

    .details-content {
        opacity: 0.85;
        float: left;
        width: 100%;
        overflow: visible;
        min-width: 760px;
        margin: 5px;
        text-align: center;
        border-radius: 4px;
    }

    .details-box {
        width: 100%;
        position: relative;
        height: 70px;
        margin: 5px 5px 15px 5px;
        border-top: solid 1px rgba(121, 146, 185, 0.54);
        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        border-radius: 10px;
        background-color: #f6f6f6;
    }

    .a-text {
        text-align: left;
        margin: 5px 20px;
        float: left;
        word-wrap: break-word;
        font-size: 15px;
        height: 50px;
        width: 600px;
        text-overflow: ellipsis;
        color: black
    }

    .poster {
        float: right;
        margin: 10px 10px;
        text-align: right;
        width: 120px;
        font-size: 10px;
        color: grey
    }

    .item-right {
        float: right;
        margin-top: 10px;
        margin-right: -10px;
    }


</style>
