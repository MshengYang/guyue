<template>
  <el-container style="height: 100%">
    <el-aside width="248px" style="background: #fff">
      <el-menu
        default-active="index"
        class="el-menu-vertical-demo"

        router

      >
        <el-menu-item index="index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="merchant">
          <i class="el-icon-menu"></i>
          <span slot="title">商家管理</span>
        </el-menu-item>
        <el-menu-item index="client" >
          <i class="el-icon-document"></i>
          <span slot="title">客户管理</span>
        </el-menu-item>
        <el-menu-item index="topUp">
          <i class="el-icon-setting"></i>
          <span slot="title">充值管理</span>
        </el-menu-item>
        <el-menu-item index="withdrawDeposit">
          <i class="el-icon-setting"></i>
          <span slot="title">提现管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="background:#fff"></el-header>
      <el-main style="line-height:unset">
          <router-view />
      </el-main>
      <el-footer>
          <div style="height: 50px; textAlign:center;lineHeight:50px">copyright@ 2021 古玥优聚建筑科技有限公司</div>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
