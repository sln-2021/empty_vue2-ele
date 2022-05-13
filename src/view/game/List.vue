<template>
  <div class="">
    <h3>{{ title }}</h3>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mt-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" class="mt-20" size="small" plain @click="create()"
      >create New Game</el-button
    >
    <el-table :data="tableData" border style="width: 100%" class="mt-20">
      <el-table-column fixed prop="date" label="游戏ID"> </el-table-column>
      <el-table-column prop="name" label="游戏名称"> </el-table-column>
      <el-table-column fixed="right" label="options">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            <i class="el-icon-view"></i> 查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="align-r">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="totalNum"
        class="mt-20"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script src="./js/list.js"></script>

<style scoped lang="less"></style>
