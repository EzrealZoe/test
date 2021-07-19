<template>

    <el-scrollbar style="height:100%">
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="index">
            <div class="main">

                <div class="index-content">
                    <div class="index-box"
                         v-for="item in posts"
                         :key='item.id'>
                        <a @click="jump(item.id)"
                           class="a-text">
                           {{item.title}}
                        </a>
                        <div style="float: right; margin: 10px 10px">
                            <el-button type="primary"
                                       class="index-button"
                                       @click="del(item.id)">
                                删除
                            </el-button>
                        </div>
                        <div style="float: right; margin: 10px 0px">
                            <el-button type="primary"
                                       class="index-button"
                                       @click="stickUp((item.last_edited_at > (new Date().getFullYear() + 1).toString()),item.id)">
                                {{(item.last_edited_at > (new Date().getFullYear() + 1).toString())?"取消置顶":"置顶"}}
                            </el-button>
                        </div>
                    </div>
                </div>
                <!--清除浮动-->
                <div style="clear:both"></div>
            </div>

        </div>
    </el-scrollbar>
</template>
<script>
    import vhead from "../Commons/adminHead";

    export default {
        components: {
            vhead,
        },
        data() {
            return {
                forum: 1,
                posts: [],
                servicePath: 'http://192.168.3.96/ci/public/index.php/',

            }
        },
        created() {
            if (this.$route.query.f != null) {
                this.forum = this.$route.query.f;
            }
            this.$http.get(this.servicePath + "forum/getTopic?id=" + this.forum).then(function (response) {
                if (response.data.status != 1 || response.data.data.length < 1) {
                    this.$router.push("/");
                    this.$message.error("不存在该版块");

                } else {
                    document.title = response.data.data[0]['topic'] + "版块";
                }
            }, function () {
                this.$message.error("服务器连接错误！");
            });

            this.$http.get(this.servicePath + "post/getPosts?f=" + this.forum).then(function (response) {
                if (response.data.status == 1) {
                    this.posts = response.data.data;
                } else {
                    this.$message.error("数据格式不通过");
                }
            }, function () {
                this.$message.error("服务器连接错误！");
            });
        },
        methods: {
            jump(id) {
                this.$router.push('/d?id=' + id);
            },

            del(id) {
                this.$http.post(this.servicePath + "post/adminDel", {
                    "id": id,
                }, {emulateJSON: true, credentials: true}).then(function (response) {
                    if (response.data.status == 1) {
                        this.$router.go(0);
                        this.$message.success("帖子已删除！");
                    } else {
                        this.$message.error("错误！");
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            },

            stickUp(isStuck, id) {
                this.$http.post(this.servicePath + "post/stick", {
                    "isStuck": isStuck,
                    "id": id,
                }, {emulateJSON: true, credentials: true}).then(function (response) {
                    if (response.data.status == 1) {
                        this.$router.go(0);
                    } else {
                        this.$message.error("错误！");
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            }
        },


    }
</script>

<style scoped>

    .index {
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

    .index-content {
        opacity: 0.85;
        float: left;
        width: 100%;
        overflow: visible;
        min-width: 760px;
        margin: 5px;
        text-align: center;
        border-radius: 4px;
    }

    .index-box {
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
        cursor:pointer;
        margin: 20px;
        float: left;
        font-size: 25px;
        height: 30px;
        overflow: hidden;
        text-decoration: underline;
        width: 600px;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #409EFF
    }

</style>



