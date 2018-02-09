<template>
  <div>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
      return {
          logining: false,
          ruleForm2: {
              account: 'admin',
              checkPass: '123456'
          },
          rules2: {
              account: [{
                  required: true,
                  message: '请输入账号',
                  triggle: 'blur'
              }],
              checkPass: [{
                  required: true,
                  message: '请输入密码',
                  triggle: 'blur'
              }]
          },
          checked: true
      }
  },
  methods: {

  }
}
</script>

<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.remember {
    margin: 0px 0px 35px 0px;
}
</style>
