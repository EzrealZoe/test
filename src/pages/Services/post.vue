<template>

    <el-scrollbar style="height:100%">
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="edit">
            <div class="main">
                <div class="aside">
                    <el-aside width="20%" class="side">
                        <el-menu :default-openeds="['1', '1']" style="height:100%;">
                            <el-menu-item index="1">
                                <i class="el-icon-message"></i>
                                <span slot="title">已发布的贴子</span>
                            </el-menu-item>
                        </el-menu>
                    </el-aside>
                </div>

                <div class="edit-content">
                    <div class="edit-box"
                         v-for="item in posts"
                         :key='item.id'>
                        <a @click="jump(item.id)"
                           style="cursor:pointer"
                           class="a-text">
                            {{item.title}}
                        </a>
                        <div style="float: right; margin: 10px 10px">
                            <el-button type="primary" class="post-button" @click="del(item.id)">
                                删除
                            </el-button>
                        </div>
                        <div style="float: right; margin: 10px 0px">
                            <el-button type="primary" class="post-button" @click="edit(item.id)">
                                编辑
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
    import vhead from "../Commons/head";

    export default {
        components: {
            vhead,
        },
        data() {
            return {
                posts: [],
                servicePath: 'http://192.168.3.96/ci/public/index.php/',

            }
        },

        created() {
            this.$http.get(this.servicePath + "post/getPosted", {
                emulateJSON: true,
                credentials: true
            }).then(function (response) {
                if (response.data.status == 1) {
                    this.posts = response.data.data;
                } else {
                    this.$router.push('/');
                    this.$message.error("数据格式不通过");
                }
            }, function () {
                this.$message.error("服务器连接错误！");
            });


        },

        methods: {
            edit(id) {
                this.$router.push('/edit?id=' + id);
            },

            del(id) {
                this.$http.post(this.servicePath + "post/del", {
                    "id": id,
                }, {emulateJSON: true, credentials: true}).then(function (response) {
                    if (response.data.status == 1) {
                        this.$message.success("帖子已删除！");
                        this.$router.go(0);

                    } else {
                        this.$message.error("删除失败！");
                    }
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            },

            jump(id) {
                this.$router.push('/d?id=' + id);
            }
        },


    }
</script>

<style scoped>

    .edit {
        margin: auto;
        width: 100%;
        min-width: 1300px;
        min-height: 1050px;
        background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;
    }

    .main {
        margin: auto;
        width: 70%;
        min-width: 1100px;
    }

    .aside {
        float: left;
        height: 100%;
        min-height: 700px;
        margin: 10px 0;
    }

    .side {
        min-width: 200px;
        height: 60px;
        background-color: rgb(238, 241, 246);
        opacity: 0.5;
        border-radius: 10px;
    }

    .edit-content {
        opacity: 0.85;
        float: left;
        width: 80%;
        overflow: visible;
        min-width: 760px;
        margin: 5px;
        text-align: center;
        border-radius: 4px;
    }

    .edit-box {
        width: 100%;
        position: relative;
        height: 70px;
        margin: 5px 5px 15px 5px;
        border-top: solid 1px rgba(121, 146, 185, 0.54);
        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        border-radius: 10px;
        background-color: #f6f6f6;
    }

    .post-button {
        float: right;
        text-align: left;
        margin: 3px 0;
        float: left;
        vertical-align: middle;
        font-size: 18px
    }

    .a-text {
        text-align: left;

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
