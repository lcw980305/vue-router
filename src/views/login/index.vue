<template>
  <div class="login">
    <div class="box">
      <el-form ref="loginform" :model="form" :rules="rules">
        <el-form-item>
          <div style="text-align: center">
            <img src="@/assets/logo.png" alt="" />
          </div>
        </el-form-item>
        <el-form-item prop="mobile">
          <el-input
            v-model="form.mobile"
            prefix-icon="el-icon-user-solid"
            @keydown.enter.native="loginFn"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            type="password"
            @keydown.enter.native="loginFn"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" @click="loginFn">登录</el-button>
        </el-form-item>
        <el-form />
      </el-form>
    </div>
  </div>
</template>
<script>
// import { syslogin } from '@/api/login.js'
export default {
  name: "",
  data() {
    return {
      form: {
        mobile: "13800000002", // string	必须		手机号
        password: "123456", // string	必须		密码
      },
      rules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            validator: (rule, value, callback) => {
              const reg =
                /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
              if (reg.test(value)) {
                callback();
              } else {
                callback(new Error("请输入正确的手机号"));
              }
            },
            triger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 16,
            message: "请输入6到16位的密码",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {},
  created() {},
  methods: {
    loginFn() {
      this.$refs.loginform.validate(async (valid) => {
        if (valid) {
          // const res = await syslogin(this.form)
          // console.log(res)
          // this.$message.success('登录成功')
          // 点击登录时调用actions方法，同时调用完成跳转到首页
          await this.$store.dispatch("user/toLogin", this.form);
          // 接收登录时需要回跳的地址，如果没有就跳转到首页
          const _redirect = this.$route.query.redirect || "/index";
          this.$router.push(_redirect);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  // background: url('../../assets/common/login.jpg') no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 450px;
    .el-button {
      background-color: #407ffe;
      color: #fff;
      border-width: 0;
    }
  }
}
</style>
