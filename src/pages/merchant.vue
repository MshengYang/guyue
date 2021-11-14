<template>
  <el-card>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="已通过" name="first">
        <div>
          <div class="listitem">
            <div>
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
            </div>
            <div>
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
            </div>
            <div className="{styles.listContentItem}">
              <div>开业时间：2020-10-10</div>
              <div>商家电话: 1257799</div>
            </div>
            <div className="{styles.listContentItem}">
              <div>收益：100000</div>
              <div>抽成比例: 10%</div>
            </div>
            <div>
              <el-button>修改</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second">
      <div>
          <div class="listitem">
            <div>
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
            </div>
            <div>
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
            </div>
           <div className={styles.listContentItem}>
          <div>Owner</div>
          <div>商家电话: 1257799</div>
        </div>
            <div>
              <div className={styles.listContentItem}>
        <el-button >同意</el-button>
        <br />
        <el-button >
          驳回
        </el-button>
      </div>
            </div>
          </div>
        </div>


      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style scoped>
.listitem {
  display: flex;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  box-shadow: 0 0 6px 4px #000;
  padding: 10px 20px;
  background-color: #f7f7f7;
}
</style>
