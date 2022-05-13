export default {
  name: "NewGame",
  data() {
    return {
      title: "创建游戏",
      form: {
        name: "",
        lang: "",
        address: "",
        order: "",
        languageSetting: {
          zh: {
            name: "",
            icon: "",
            banner: "",
            desc: "",
            rtp: ""
          },
          ft: {
            name: "",
            icon: "",
            banner: "",
            desc: "",
            rtp: ""
          },
          en: {
            name: "",
            icon: "",
            banner: "",
            desc: "",
            rtp: ""
          }
        }
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入简体中文游戏名称",
            trigger: "blur"
          }
        ],
        lang: [
          {
            required: true,
            message: "请选择语言",
            trigger: "change"
          }
        ]
      },
      zhFlag: false,
      enFlag: false,
      ftFlag: false,
      // fileList: [
      //   {
      //     name: "food.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //   },
      //   {
      //     name: "food2.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //   }
      // ]
      fileList: []
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "game"
      });
    },
    handleChange(lang) {
      this.form.lang = lang;
    },
    option(lang, operation) {
      const str = lang + "Flag";
      if (this[str] === true && operation === "open") {
        this.$alert("当前语言已存在", "提示", {
          confirmButtonText: "确定",
          type: "error",
          callback: action => {
            // this.$message({
            //   type: "success",
            //   message: `已关闭`
            // });
          }
        });
      } else {
        operation === "open" ? (this[str] = true) : (this[str] = false);
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onSubmit() {
      console.log("submit!", this.form);
    }
  },
  created() {}
};
