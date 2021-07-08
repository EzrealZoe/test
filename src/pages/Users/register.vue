<template>
    <!-- HTML UI:只有一个根节点-->
    <div class="register-wrap">  <!--整个页面包装器wrap-->
        <div class="ms-register"> <!--注册面板的区域-->
            <div class="ms-title"><!--注册的标题-->
                <span
                        class="register-title"
                        style="front-size: 20px;">注册
                </span>
            </div>
            <el-form
                    :model="param"
                    :rules="rules"
                    ref="register"
                    label-width="0px"
                    class="ms-content">
                <el-form-item prop="mail">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            content="请您输入存在的邮箱~"
                            placement="top">
                        <el-input
                                type="text"
                                v-model="param.mail"
                                placeholder="请输入您的邮箱"
                                id="mail"
                                clearable
                                prefix-icon="el-icon-user"
                                @keyup.enter.native="focusUsername">
                        </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="username">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            content="请您输入用户名：4-20个字节，首字母必须为英文，由字母、数字、_组成"
                            placement="top">
                        <el-input
                                type="text"
                                v-model="param.username"
                                placeholder="请输入您的用户名"
                                id="username"
                                clearable
                                prefix-icon="el-icon-user"
                                @keyup.enter.native="focusNickname">
                        </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="nickname">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            content="请您输入昵称：4-20个字节，首字母必须为英文，由字母、数字、_组成"
                            placement="top">
                        <el-input
                                type="text"
                                v-model="param.nickname"
                                placeholder="请输入您的昵称，不填则默认为用户名"
                                clearable
                                prefix-icon="el-icon-edit"
                                id="nickname"
                                @keyup.enter.native="focusPwd1">
                        </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="password1">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            content="请您输入密码：6-27个字符"
                            placement="top">
                        <el-input
                                type="password"
                                auto-complete="off"
                                v-model="param.password1"
                                id="password1"
                                placeholder="请输入密码"
                                clearable
                                prefix-icon="el-icon-key"
                                @keyup.enter.native="focusPwd2">
                        </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="password2">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            content="请您重复输入您的密码~"
                            placement="top">
                        <el-input
                                type="password"
                                auto-complete="off"
                                v-model="param.password2"
                                id="password2"
                                placeholder="请确认密码"
                                clearable
                                prefix-icon="el-icon-key"
                                @keyup.enter.native="focusSex">
                        </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="sex">
                    <el-radio
                            v-model="param.sex"
                            style="right:0"
                            label="1"
                            id="sex">男
                    </el-radio>
                    <el-radio
                            v-model="param.sex"
                            style="right:0"
                            label="2">女
                    </el-radio>
                </el-form-item>

                <el-form-item prop="birthday">
                    <el-date-picker
                            :picker-options="pickerOptions"
                            v-model="param.birthday"
                            type="date"
                            placeholder="选择出生日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item prop="province">
                    <el-select
                            v-model="param.province"
                            placeholder="请选择省份"
                            @change="provinceChanged"
                            id="province">
                        <el-option
                                v-for="item in param.optionsProvince"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>

                </el-form-item>

                <el-form-item prop="city">
                    <el-select
                            v-model="param.city"
                            placeholder="请选择城市"
                            @change="cityChanged"
                            id="city">
                        <el-option
                                v-for="item in param.optionsCity"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item prop="area">
                    <el-select
                            v-model="param.area"
                            placeholder="请选择县区">
                        <el-option
                                v-for="item in param.optionsArea"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>


                <div class="register-btn">
                    <el-button
                            type="primary"
                            @click="submitForm()">注册
                    </el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    //import axios from "axios";
    import {c_district, district_cate} from "E:/fore/src/assets/js/common";
    import axios from "axios";
    // ES5.0 6.0语法，创建默认Vue对象
    export default {
        data() {
            // 邮箱验证
            let validatorMail = (rule, value, callback) => {
                var reg = /^[A-Za-z0-9]+([_]+[A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/;
                if (reg.test(value)) {
                    callback()
                } else {
                    if (value.length > 320) {
                        callback(new Error('邮箱长度超过限制！'))
                    } else {
                        callback(new Error('邮箱格式输入有误！'))
                    }
                }
            }

            // 用户名验证
            let validatorUsername = (rule, value, callback) => {
                var reg = /^[A-Za-z][A-Za-z0-9_]{0,19}$/;
                if (reg.test(value)) {
                    callback()
                } else {
                    if (value.length < 4) {
                        callback(new Error('用户名过短！'))
                    } else if (value.length > 20) {
                        callback(new Error('用户名过长！'))
                    } else {
                        callback(new Error('请输入合法用户名！'))
                    }
                }
            }

            //昵称验证
            let validatorNickname = (rule, value, callback) => {

                var reg = /^[A-Za-z][A-Za-z0-9_]{3,19}$/;
                if (reg.test(value)) {
                    callback()
                } else {
                    if (value.length < 4) {
                        callback(new Error('用户名过短！'))
                    } else if (value.length > 20) {
                        callback(new Error('用户名过长！'))
                    } else {
                        callback(new Error('请输入合法昵称！'))
                    }
                    this.param.nickname = this.param.username;
                }
            }

            // 密码验证
            let validatorPwd = (rule, value, callback) => {
                var reg = /^.{6,27}$/;
                if (reg.test(value)) {
                    callback()
                } else {
                    if (value.length < 6) {
                        callback(new Error('密码过短！'))
                    } else if (value.length > 27) {
                        callback(new Error('密码过长！'))
                    } else {
                        callback(new Error('请输入合法密码！'))
                    }
                }

            }

            // 再次输入的密码验证
            let validatorPwdConsistency = (rule, value, callback) => {
                var reg = /^.{6,27}$/;
                var tmp = document.getElementById("password1").value
                if (reg.test(tmp)) {
                    if (value == tmp) {
                        callback()
                    } else {
                        this.param.password2 = null
                        callback(new Error('请与上面输入的密码保持一致！'))
                    }
                } else {
                    this.param.password1 = null
                    this.param.password2 = null
                    callback(new Error('请先在上方输入合法密码！'))
                }


            }

            // 性别验证
            let validatorSex = (rule, value, callback) => {
                if (value == 0) {
                    callback(new Error('请选择性别！'))
                } else {
                    callback()
                }
            }

            // 出生日期验证
            let validatorBirthday = (rule, value, callback) => {
                if (value == null) {
                    callback(new Error('请选择出生日期！'))
                } else {
                    callback()
                }
            }

            // 省份验证
            let validatorProvince = (rule, value, callback) => {
                if (value == null) {
                    callback(new Error('请选择省份！！！！'))
                } else {
                    callback()
                }
            }

            // 城市验证
            let validatorCity = (rule, value, callback) => {
                if (value == null) {
                    callback(new Error('请选择城市！'))
                } else {
                    callback()
                }
            }

            // 县区验证
            let validatorArea = (rule, value, callback) => {
                if (value == null) {
                    callback(new Error('请选择县区！'))
                } else {
                    callback()
                }
            }

            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now()
                    }
                },
                servicePath: 'http://192.168.3.96/test/',
                c_district, district_cate,
                param: {
                    optionsProvince: [],
                    province: '',
                    optionsCity: [],
                    city: "",
                    optionsArea: [],
                    area: "",
                    username: null,
                    mail: null,
                    nickname: null,
                    password1: null,
                    password2: null,
                    sex: 0,
                    birthday: null,
                },


                rules: {
                    mail: [{required: true, message: "请输入邮箱！", trigger: "blur"},
                        {validator: validatorMail, trigger: "blur"}],
                    username: [{required: true, message: "请输入用户名！", trigger: "blur"},
                        {validator: validatorUsername, trigger: "blur"}],
                    nickname: [
                        {validator: validatorNickname, trigger: "blur"}],
                    password1: [{required: true, message: "请输入密码！", trigger: "blur"},
                        {validator: validatorPwd, trigger: 'blur'}],
                    password2: [{required: true, message: "请输入密码！", trigger: "blur"},
                        {validator: validatorPwdConsistency, trigger: 'blur'}],
                    sex: [
                        {validator: validatorSex, trigger: 'change'}],
                    birthday: [{required: true, message: "请选择生日！", trigger: "blur"},
                        {validator: validatorBirthday, trigger: 'blur'}],
                    province: [{required: true, message: "请选择省份！", trigger: "blur"},
                        {validator: validatorProvince, trigger: 'change'}],
                    city: [{required: true, message: "请选择城市！", trigger: "blur"},
                        {validator: validatorCity, trigger: 'change'}],
                    area: [{required: true, message: "请选择县区！", trigger: "blur"},
                        {validator: validatorArea, trigger: 'change'}],
                },
            };
        },

        //初始化省份信息
        created() {
            this.param.optionsProvince = [];
            for (let i = 1; i < 35; ++i) {
                this.param.optionsProvince.push({value: i.toString(), label: this.c_district[i][2]})
            }
        },

        methods: {
            //提交
            submitForm() {
                axios.defaults.withCredentials = true;
                this.$refs.register.validate(valid_result => {
                    if (valid_result) {   // 本地校验通过
                        if (this.param.nickname == null) {
                            this.param.nickname = this.param.username;
                        }
                        axios.post(this.servicePath + "register.php", {
                            "mail": this.param.mail,
                            "username": this.param.username,
                            "nickname": this.param.nickname,
                            "password": this.$md5(this.param.password1),
                            "sex": this.param.sex,
                            "birthday": this.param.birthday,
                            "province": this.param.province,
                            "city": this.param.city,
                            "area": this.param.area,
                        })
                            .then(
                                (response) => {
                                    if(response.data.status==200){
                                        this.$router.push('/exit')
                                    }
                                    else{
                                        this.$message.error(response.data.status);
                                    }
                                })
                            .catch(
                                (err) => {
                                    console.log(err);
                                    this.$message.error("注册失败！");
                                }
                            );
                    } else {   // 本地校验没有通过
                        this.$message.error("输入信息不正确!");
                        return false;
                    }
                });

            },

            //选择省份后改变城市县区信息
            provinceChanged(n) {
                this.param.optionsCity = [];
                this.param.optionsArea = [];
                this.param.city = null;
                this.param.area = null;
                for (let i = 0; i < district_cate[n].length; ++i) {
                    this.param.optionsCity.push({value: district_cate[n][i], label: c_district[district_cate[n][i]][2]})
                }
            },

            //选择城市后改变县区信息
            cityChanged(n) {
                this.param.optionsArea = [];
                this.param.area = null;
                for (let i = 0; i < district_cate[n].length; ++i) {
                    this.param.optionsArea.push({value: district_cate[n][i], label: c_district[district_cate[n][i]][2]})
                }
            },

            //以下是回车改变聚焦
            focusNickname() {
                document.getElementById("nickname").focus();
            }
            ,
            focusUsername() {
                document.getElementById("username").focus();
            }
            ,
            focusPwd1() {
                document.getElementById("password1").focus();
            }
            ,
            focusPwd2() {
                document.getElementById("password2").focus();
            }
            ,
            focusSex() {
                document.getElementById("sex").focus();
            }
        }
    }
</script>

<style scoped>
    /**局部样式样式表 */
    .register-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/3.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
        min-width: 1325px;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
    }

    .register-title {
        height: 56px;
        line-height: 56px;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 40px;
        text-align: center;
    }

    .ms-register {
        position: absolute;
        left: 50%;
        top: 35%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .register-btn {
        text-align: center;
    }

    .register-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }


</style>
