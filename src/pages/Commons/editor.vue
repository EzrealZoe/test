<template>
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
</template>
<script>
    export default {
        data() {
            return {
                forum: null,
                optionsForum: null,
                text: '',
                textarea: '',
                button:null,
                servicePath: 'http://192.168.3.96/ci/public/index.php/',
            }
        },
        created() {

        },
        methods: {
            commit(){}

        },


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
