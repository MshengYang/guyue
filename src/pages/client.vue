<template>
  <div style="width:100%;height:100%">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" width="100px" label="客户名称"> </el-table-column>
      <el-table-column prop="company" width="80px" label="所属公司"> </el-table-column>
      <el-table-column prop="address" label="账号余额"> </el-table-column>
      <el-table-column prop="date" label="注册日期"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          company:'xxx',
          address: "上海市普陀区金沙江路 1518 弄",
          created:'',
          phone:'12151256'
        },
     
      ],
    };
  },
};
</script>

<style></style>
