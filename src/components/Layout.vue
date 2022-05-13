<template>
  <el-container>
    <el-header>
      <el-container style="text-align: left; font-size: 20px;">
        <div
          :style="{
            width: isCollapse ? '64px' : '200px'
          }"
        >
          <div class="title_lg" v-if="!isCollapse">Funpepper</div>
          <div class="title_mini" v-else>Fun</div>
        </div>

        <div>
          <i
            class="el-icon-s-fold color_fff cursor"
            @click="isCollapse = false"
            v-if="isCollapse"
          ></i>
          <i
            class="el-icon-s-unfold color_fff cursor"
            @click="isCollapse = true"
            v-else
          ></i>
        </div>
      </el-container>
      <el-dropdown
        style="text-align: right; font-size: 12px"
        @command="handleCommand"
        trigger="click"
      >
        <i class="el-icon-arrow-down cursor" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="cursor" command="logout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-container>
      <el-aside
        :style="{
          width: isCollapse ? '64px' : '200px'
        }"
      >
        <el-menu :collapse="isCollapse" :collapse-transition="true" router>
          <el-menu-item index="game">
            <i class="el-icon-menu"></i>
            <span slot="title">游戏列表</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      isCollapse: false,
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push({
          name: "login"
        });
      }
    }
  }
};
</script>

<style></style>
