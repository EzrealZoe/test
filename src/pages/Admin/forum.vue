<template>
    <div>
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="details">
            <div class="main">
                <div class="container">
                    <div class="drag-box">
                        <div class="drag-box-item">
                            <div class="item-title">版块</div>
                            <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">
                                <transition-group tag="div" id="forum" class="item-ul">
                                    <div v-for="item in doing" class="drag-list" :key="item.id">
                                        {{item.content}}
                                    </div>
                                </transition-group>
                            </draggable>
                        </div>
                        <div class="drag-box-item">
                            <div class="item-title">拖拽至此以删除</div>
                            <draggable v-model="doing" :options="dragOptions">
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
    import vhead from "../Commons/head";

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
                forum: [
                    {
                        id: 1,
                        content: '开发图表组件'
                    },
                    {
                        id: 2,
                        content: '开发拖拽组件'
                    },
                    {
                        id: 3,
                        content: '开发权限测试组件'
                    },
                    {
                        id: 4,
                        content: '开发权限测试组件'
                    },
                    {
                        id: 5,
                        content: '开发权限测试组件'
                    },
                    {
                        id: 6,
                        content: '开发权限测试组件'
                    },
                    {
                        id: 7,
                        content: '27727827'
                    },
                    {
                        id: 8,
                        content: '27727827'
                    },
                    {
                        id: 9,
                        content: '27727827'
                    },
                    {
                        id: 10,
                        content: '27727827'
                    },
                    {
                        id: 11,
                        content: '27727827'
                    }
                ],
                doing: [
                    {
                        id: 1,
                        content: '开发登录注册页面'
                    },
                    {
                        id: 2,
                        content: '开发头部组件'
                    },
                    {
                        id: 3,
                        content: '开发表格相关组件'
                    },
                    {
                        id: 4,
                        content: '开发表单相关组件'
                    }
                ],
                done: [
                    {
                        id: 1,
                        content: '初始化项目，生成工程目录，完成相关配置'
                    },
                    {
                        id: 2,
                        content: '开发项目整体框架'
                    }
                ]
            }
        },
        methods: {
            add() {
                this.$prompt('请输入版块', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^.{2,8}$/,
                    inputErrorMessage: '版块格式不正确'
                }).then(({value}) => {
                    this.$message({
                        type: 'success',
                        message: '添加了版块: ' + value
                    });
                }).catch(() => {

                });
            },
            removeHandle(event) {
                console.log(event);
                this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
            }
        }
    }

</script>

<style scoped>
    .details {
        margin: auto;
        width: 100%;
        min-width: 980px;
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
