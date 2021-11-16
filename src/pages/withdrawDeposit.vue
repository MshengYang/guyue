<template>
   <el-card>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="已完成" name="first">
      <el-card v-for="(item,index) in tableData" :key="index">
           <div style="display:flex">
             <el-image>
               
             </el-image>

           </div>

      </el-card>
 
      </el-tab-pane>
      <el-tab-pane label="待处理" name="second">



      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
 data() {
      return {
            activeName: "first",
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }]
      }
      }
}
</script>

<style>

</style>