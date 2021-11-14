<template>
  <div style="width: 100%; height: 100%">
    <div class="infoContainer">
      <el-card header="平台总收入"  class="box-card"> </el-card>
      <el-card header="平台总支出" class="box-card"> </el-card>
      <el-card header="当前余额" class="box-card"> </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.infoContainer {
  display: flex;
  gap: 20px
}
.box-card {
width: 200px;
}
</style>
