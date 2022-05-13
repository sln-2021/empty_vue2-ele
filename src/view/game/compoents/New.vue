<template>
  <div class="">
    <h3>{{ title }}</h3>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mt-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/game' }">游戏列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card mt-20 shadow">
      <div slot="header" class="clearfix">
        <span>游戏信息</span>
      </div>
      <el-form ref="form" :model="form" label-width="100px" :rules="rules">
        <el-form-item label="游戏名称">
          <el-input
            v-model="form.name"
            placeholder="简体中文游戏名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="游戏排序">
          <el-input v-model="form.order" placeholder="游戏排序"></el-input>
        </el-form-item>

        <el-form-item label="游戏地址">
          <el-input v-model="form.address" placeholder="游戏地址"></el-input>
        </el-form-item>
        <el-form-item label="游戏多语言">
          <el-select
            v-model="form.lang"
            placeholder="请选择游戏多语言"
            @change="handleChange"
            clearable
          >
            <el-option label="简体中文" value="zh"></el-option>
            <el-option label="繁体" value="ft"></el-option>
            <el-option label="英文" value="en"></el-option>
          </el-select>
          <el-button
            @click="option(form.lang, 'open')"
            class="mr-5"
            type="primary"
            >create Language</el-button
          >
        </el-form-item>
        <div class="box">
          <el-card class="box-card cursor langCard flex" v-if="zhFlag">
            <el-form
              ref="form"
              :model="form.languageSetting.zh"
              label-width="80px"
            >
              <el-form-item label="游戏名称">
                <el-input v-model="form.languageSetting.zh.name"></el-input>
              </el-form-item>
              <el-form-item label="Icon">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Icon</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="Banner">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Banner</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="简介">
                <el-input
                  type="textarea"
                  v-model="form.languageSetting.zh.desc"
                ></el-input>
              </el-form-item>

              <el-form-item label="动态RTP">
                <el-input v-model="form.languageSetting.zh.rtp"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="option('zh', 'cancel')">取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <el-card class="box-card cursor langCard flex" v-if="ftFlag">
            <el-form
              ref="form"
              :model="form.languageSetting.ft"
              label-width="80px"
            >
              <el-form-item label="游戏名称">
                <el-input v-model="form.languageSetting.ft.name"></el-input>
              </el-form-item>
              <el-form-item label="Icon">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Icon</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="Banner">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Banner</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="简介">
                <el-input
                  type="textarea"
                  v-model="form.languageSetting.ft.desc"
                ></el-input>
              </el-form-item>

              <el-form-item label="动态RTP">
                <el-input v-model="form.languageSetting.ft.rtp"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="option('ft', 'cancel')">取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>

          <el-card class="box-card cursor langCard flex" v-if="enFlag">
            <el-form
              ref="form"
              :model="form.languageSetting.en"
              label-width="80px"
            >
              <el-form-item label="游戏名称">
                <el-input v-model="form.languageSetting.en.name"></el-input>
              </el-form-item>
              <el-form-item label="Icon">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Icon</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="Banner">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Banner</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="简介">
                <el-input
                  type="textarea"
                  v-model="form.languageSetting.en.desc"
                ></el-input>
              </el-form-item>

              <el-form-item label="动态RTP">
                <el-input v-model="form.languageSetting.en.rtp"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="option('en', 'cancel')">取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>

        <el-form-item>
          <el-button @click="onSubmit" type="success" size="small" class="mr-5"
            >提交</el-button
          >
          <el-button type="primary" size="small" @click="goBack()"
            >返回</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script src="../js/new.js"></script>

<style scoped lang="less">
.box .langCard {
  width: 500px;
  height: 600px;
}
.shadow {
  box-shadow: 0 0px 0px #ccc;
}
</style>
