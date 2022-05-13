<template>
  <div class="">
    <h3>{{ title }}</h3>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mt-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/game' }">游戏列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-descriptions title="用户信息" class="mt-20">
      <el-descriptions-item label="游戏名称">kooriookami</el-descriptions-item>
      <el-descriptions-item label="游戏地址">18100000000</el-descriptions-item>
      <el-descriptions-item label="游戏状态">苏州市</el-descriptions-item>
      <el-descriptions-item label="创建时间">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="修改时间"
        >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
      >
    </el-descriptions>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%" class="mt-20">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="date" label="游戏名称"> </el-table-column>
      <el-table-column prop="name" label="语言"> </el-table-column>
      <el-table-column prop="address" label="icon"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "埃及秘宝",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less"></style>
