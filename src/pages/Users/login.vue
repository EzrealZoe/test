<template>
    <!-- HTML UI:只有一个根节点-->
    <div class="login-wrap">  <!--整个页面包装器wrap-->
        <div class="ms-login"> <!--登录面板的区域-->
            <div class="ms-title"><!--登录的标题-->
                <span class="login-title" style="front-size: 20px;">登录
                </span>
            </div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input type="text" v-model="param.username" id="username" @keyup.enter.native="focusPwd"
                              placeholder="请输入您的用户名" clearable prefix-icon="el-icon-user">

                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" auto-complete="off" v-model="param.password"
                              @keyup.enter.native="submitForm" id="password"
                              placeholder="请输入密码" clearable prefix-icon="el-icon-key">
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm" >登录</el-button>
                </div>
                <div class="link-line">
                    <a class="link-register" @click="register" style="cursor:pointer">
                        注册
                    </a>
                    <a class="link-forget" @click="retrieve" style="cursor:pointer">
                        忘记密码?
                    </a>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    //import axios from "axios";    // import $ from "jquery"
    export default {
        data: function () {

            // 用户名验证
            let validatorUsername = (rule, value, callback) => {
                var reg = /^[A-Za-z][A-Za-z0-9_]{3,19}$/;
                if (reg.test(value)) {
                    callback()
                } else {
                    if(value.length<4){
                        callback(new Error('用户名过短！'))
                    }
                    else if(value.length>20){
                        callback(new Error('用户名过长！'))
                    }
                    else{
                        callback(new Error('请输入合法用户名！'))
                    }
                }
            }

            // 密码验证
            let validatorPwd = (rule, value, callback) => {
                var reg = /^.{6,27}$/;
                if (reg.test(value)) {
                    callback()
                } else {
                    if(value.length<6){
                        callback(new Error('密码过短！'))
                    }
                    else if(value.length>27){
                        callback(new Error('密码过长！'))
                    }
                    else {
                        callback(new Error('请输入合法密码！'))
                    }
                }

            }

            return {
                param: {
                    username: null,
                    password: null,
                },

                rules: {
                    username: [{required: true, message: "请输入用户名！", trigger: "blur"},
                        {validator: validatorUsername, trigger: "blur"}],
                    password: [{required: true, message: "请输入密码！", trigger: "blur"},
                        {validator: validatorPwd, trigger: 'blur'}],
                },
            };
        },

        methods: {
            submitForm() {
                this.$refs.login.validate(valid_result => {
                    if (valid_result) {// 本地校验通过
                        // axios发起post请求 ,password md5加密

                    }
                    else {   // 本地校验没有通过
                        this.$message.error("输入信息不正确!");
                        this.param.password = null;
                        this.param.username = null;
                        return false;
                    }
                });

            },

            register(){
                this.$router.push('/register')
            },

            retrieve(){
                this.$router.push('/retrieve')
            },

            focusPwd(){
                document.getElementById("password").focus();
            },


        }
    }
</script>

<style scoped>
    /**局部样式样式表 */
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(E:/fore/src/assets/images/4.jpg);
        background-size: 100%;
        background-repeat:no-repeat;
        min-width: 1325px;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
    }

    .login-title {
        height: 56px;
        line-height: 56px;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 40px;
        text-align: center;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 55%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        position: relative;
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .link-line{
        float:left;
        width:100%;
        height:30px;
        position: relative;
        margin:auto;
    }

    .link-register{
        width: 40%;
        float: left;
        text-align: left;
        font-size: 11px;
        color: #a4a4a4;
        text-decoration: underline ;
        margin:auto 7px;
    }

    .link-forget{
        width: 40%;
        float: right;
        text-align: right;
        font-size: 11px;
        color: #a4a4a4;
        text-decoration: underline ;
        margin:auto 9px;
    }

</style>
