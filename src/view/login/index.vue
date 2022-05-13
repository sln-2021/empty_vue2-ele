<template>
  <div class="wrapper">
    <div class="card">
      <h3 class="align-c">Funpepper</h3>
      <el-form ref="form" :model="form" label-width="50px" class="mt-20">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script src="./js/login.js"></script>

<style scoped lang="less" src="./css/login.less"></style>
