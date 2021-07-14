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
                               id="province">
                        <el-option v-for="item in optionsForum"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="item-right">
                    <el-button type="primary"
                               @click="commit">
                        发布帖子
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
                text: null,
                textarea: null
            }
        },
        created() {

        },
        methods: {},


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
        min-width: 980px;
        min-height: 1050px;
        background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;
    }

    .create-wrapper {
        margin: auto;
        padding-top: 30px;

        width: 500px;
    }


</style>
