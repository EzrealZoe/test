<template>

    <el-scrollbar style="height:100%">
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="index">
            <div class="main">

                <div class="index-content">
                    <div class="index-box"
                         v-for="item in json"
                         :key='item'>
                        <a class="a-text">
                            {{item.title}}
                        </a>
                        <div style="float: right; margin: 12px 10px">
                            <el-button type="primary" class="index-button" @click="disable(item.id)">
                                封禁
                            </el-button>
                        </div>
                        <div style="float: right; margin: 12px 10px">
                            <p>发帖数：500</p>
                            <p>发帖数：500</p>
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
                json: [{"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                    "link": "http://www.baidu.com",
                    "title": "efwdgwgerv"
                }
                    , {
                        "link": "http://www.baidu.com",
                        "title": "efwdgw;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ooooooooooooooooooooooooooooooooooooooooooooooooooooo;;;;;;;;;;;;;;;;;;;;;gerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}, {
                        "link": "http://www.baidu.com",
                        "title": "efwdgwgerv"
                    }
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}
                    , {"link": "http://www.baidu.com", "title": "efwdgwgerv"}],

            }
        },
        created() {

        },
        methods: {
            disable(id) {
                console.log(id);
            }
        },


    }
</script>

<style scoped>

    .index {
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

    .index-button {
        float: right;
        text-align: left;
        margin: 3px 0;
        float: left;
        vertical-align: middle;
        font-size: 18px
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
        margin: 20px;
        float: left;
        font-size: 25px;
        height: 30px;
        overflow: hidden;
        width: 300px;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: black
    }

</style>
