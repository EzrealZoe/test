<template>
    <div>
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="details">
            <div class="main">
                <div class="container">
                    <div class="drag-box">
                        <div class="drag-box-item">
                            <div class="item-title">
                                版块
                            </div>
                            <draggable v-model="forum"
                                       @remove="removeHandle"
                                       :options="dragOptions">
                                <transition-group tag="div"
                                                  id="forum"
                                                  class="item-ul">
                                    <div v-for="item in forum"
                                         class="drag-list"
                                         :key="item.id"
                                         :id="item.id">
                                        {{item.topic}}
                                    </div>
                                </transition-group>
                            </draggable>
                        </div>
                        <div class="drag-box-item">
                            <div class="item-title">拖拽至此以删除</div>
                            <draggable :options="dragOptions">
                                <transition-group tag="div" id="delete" class="item-ul">
                                </transition-group>
                            </draggable>
                        </div>


                    </div>
                    <el-button type="primary"
                               style="margin: 10px"
                               @click="add">
                        添加
                    </el-button>
                    <el-button type="primary"
                               style="margin: 10px"
                               @click="commit">
                        保存
                    </el-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import vhead from "../Commons/adminHead";

    export default {
        components: {
            vhead, draggable
        },
        data() {
            return {
                dragOptions: {
                    animation: 120,
                    scroll: true,
                    group: 'sortlist',
                    ghostClass: 'ghost-style'
                },
                servicePath: 'http://192.168.3.96/ci/public/index.php/',
                forum: [],
            }
        },

        created() {
            this.$http.get(this.servicePath + "forum/getForums").then(function (response) {
                if (response.data.status == 1) {
                    this.forum = response.data.data;
                } else {
                    this.$message.error("数据格式不通过");
                }
            }, function () {
                this.$message.error("服务器连接错误！");
            });
        },

        methods: {
            add() {
                this.$prompt('请输入版块', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^.{2,8}$/,
                    inputErrorMessage: '版块格式不正确'
                }).then(({value}) => {
                    this.$http.post(this.servicePath + "forum/create", {
                        "topic": value,
                    }, {emulateJSON: true, credentials: true}).then(function (response) {
                        if (response.data.status != 1) {
                            this.$message.error("添加版块出现错误！");
                        }
                        this.$router.go(0);
                    }, function () {
                        this.$message.error("服务器连接错误！");
                    });
                }).catch(() => {

                });
            },

            removeHandle(event) {
                this.$http.post(this.servicePath + "forum/del", {
                    "id": event.item.id,
                }, {emulateJSON: true, credentials: true}).then(function (response) {
                    if (response.data.status != 1) {
                        this.$message.error("添加版块出现错误！");
                    }
                    this.$router.go(0);
                }, function () {
                    this.$message.error("服务器连接错误！");
                });
            },

            commit() {
                let data = [];
                for (let i = 0; i < this.forum.length; ++i) {
                    data.push({"id": this.forum[i].id, "order": i + 1})
                }

                this.$http.post(this.servicePath + "forum/changeOrder", {
                    "data": data,
                }, {emulateJSON: true, credentials: true}).then(function (response) {
                    if (response.data.status != 1) {
                        this.$message.error("添加版块出现错误！");
                    } else {
                        this.$message.success("顺序修改成功！");
                    }

                }, function () {
                    this.$message.error("服务器连接错误！");
                });

                console.log(data);
            }

        }
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

    .container {
        opacity: 0.85;
        float: left;
        width: 100%;
        overflow: visible;
        min-width: 760px;
        margin: 5px;
        text-align: center;
        border-radius: 4px;
    }

    .drag-box {
        margin: auto;
        display: flex;
        user-select: none;
    }

    .drag-box-item {
        flex: 1;
        margin: auto;
        max-width: 330px;
        min-width: 300px;
        background-color: #eff1f5;
        border-radius: 6px;
        border: 1px #e1e4e8 solid;
    }

    .item-title {
        padding: 8px 8px 8px 12px;
        font-size: 14px;
        line-height: 1.5;
        color: #24292e;
        font-weight: 600;
    }

    .item-ul {
        padding: 0 8px 8px;
        height: 500px;
        overflow-y: scroll;
    }

    .item-ul::-webkit-scrollbar {
        width: 0;
    }

    .drag-list {
        border: 1px #e1e4e8 solid;
        padding: 10px;
        margin: 5px 0 10px;
        list-style: none;
        background-color: #fff;
        border-radius: 6px;
        cursor: pointer;
        -webkit-transition: border .3s ease-in;
        transition: border .3s ease-in;
    }

    .drag-list:hover {
        border: 1px solid #20a0ff;
    }
</style>
