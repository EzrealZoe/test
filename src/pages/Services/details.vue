<template>

    <el-scrollbar style="height:100%">
        <vhead style="min-width: 1300px;">
        </vhead>

        <div class="details">
            <div class="main">

                <div class="details-content">
                    <div class="details-box"
                         v-for="item in json"
                         :key='item'>
                        <a class="a-text">
                            {{item.content}}
                        </a>
                        <a class="poster">
                            {{item.poster}}
                        </a>
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
                json: [{"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                    "poster": "http://www.baidu.com",
                    "content": "efwdgwgerv"
                }
                    , {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgw;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ooooooooooooooooooooooooooooooooooooooooooooooooooooo;;;;;;;;;;;;;;;;;;;;;gerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}, {
                        "poster": "http://www.baidu.com",
                        "content": "efwdgwgerv"
                    }
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}
                    , {"poster": "http://www.baidu.com", "content": "efwdgwgerv"}],

            }
        },
        created() {

        },
        methods: {},


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


</style>
