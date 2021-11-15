<template>
<div class="loginContainer">
<div class="loginCard">
    <div style="text-align:center;margin-bottom:20px">GUYUE后台</div>
<el-form class="demo-form-inline" label-width="50px">
  <el-form-item label="账号">
    <el-input v-model="formInline.user" placeholder="请输入账号"></el-input>
  </el-form-item>
  <el-form-item label="密码">
     <el-input show-password v-model="formInline.password" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form> 
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        localStorage.setItem('ACCESS_TOKEN','11')
        this.$router.push('/index')
      }
    }
  }
</script>
<style scoped>
.loginContainer {
    display: flex;
    
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
}
.loginCard {
    width: 360px;
    background-color: #fff;
    border-radius: 20px;
    padding:20px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.06)
}
</style>