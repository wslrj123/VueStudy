<template>
  <div class="editor">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="editor" class="text"></div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "editoritem",
  data() {
    return {
      // uploadPath,
      editor: null,
      info_: null,
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  mounted() {
    this.seteditor();
    this.editor.txt.html(this.value);
    if (
      this.$store.state.editableTabs.length == 0 ||
      this.$store.state.editableTabsValue == "/Home"
    ) {
      var bol = true;
      this.$store.state.activeMenuCap = "文本编辑器";
      this.$store.state.rPath = "/Home/WangEditTest";
      this.$store.state.editableTabs.forEach((item, index) => {
        if (item.name == this.$store.state.rPath) {
          this.$store.state.editableTabsValue = item.name;
          bol = false;
          return;
        }
      });
      if (bol) {
        this.$store.commit("addTab");
      }
    } else {
      this.$store.state.editableTabsValue = "/Home/WangEditTest";
    }
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    isClear: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 300,
    },
  },
  watch: {
    isClear(val) {
      // 触发清除文本域内容
      if (val) {
        this.editor.txt.clear();
        this.info_ = null;
      }
    },
    value: function (value) {
      if (value !== this.editor.txt.html()) {
        this.editor.txt.html(this.value);
      }
    },
    //value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
  },
  methods: {
    seteditor() {
      // http://192.168.2.125:8080/admin/storage/create
      this.editor = new E(this.$refs.toolbar, this.$refs.editor);

      //使用文档设置高度不起作用，这样动态设置编辑区域高度
      let eds = document.getElementsByClassName("text");
      eds[0].style = eds[0].style.cssText + "height:" + this.height + "px";

      // this.editor.config.uploadImgShowBase64 = false // base 64 存储图片
      // this.editor.config.uploadImgServer = 'http://otp.cdinfotech.top/file/upload_images'// 配置服务器端地址
      // this.editor.config.uploadImgHeaders = { }// 自定义 header
      // this.editor.config.uploadFileName = 'file' // 后端接受上传文件的参数名
      // this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
      // this.editor.config.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
      // this.editor.config.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

      // 配置菜单
      this.editor.config.menus = [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        // 'italic', // 斜体
        // 'underline', // 下划线
        // 'strikeThrough', // 删除线
        "foreColor", // 文字颜色
        // 'backColor', // 背景颜色
        "justify", // 对齐方式
        "undo", // 撤销
        "redo", // 重复
      ];

      // this.editor.config.uploadImgHooks = {
      //   fail: (xhr, editor, result) => {
      //     // 插入图片失败回调
      //   },
      //   success: (xhr, editor, result) => {
      //     // 图片上传成功回调
      //   },
      //   timeout: (xhr, editor) => {
      //     // 网络超时的回调
      //   },
      //   error: (xhr, editor) => {
      //     // 图片上传错误的回调
      //   },
      //   customInsert: (insertImg, result, editor) => {
      //     // 图片上传成功，插入图片的回调
      //     //result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
      //     // console.log(result.data[0].url)
      //     //insertImg()为插入图片的函数
      //      //循环插入图片
      //     // for (let i = 0; i < 1; i++) {
      //       // console.log(result)
      //       let url = "http://otp.cdinfotech.top"+result.url
      //       insertImg(url)
      //     // }
      //   }
      // }

      console.log(this.editor);
      this.editor.config.onchange = (html) => {
        this.info_ = html; // 绑定当前逐渐地值
        this.$emit("change", this.info_); // 将内容同步到父组件中
      };
      // 创建富文本编辑器
      this.editor.create();
    },
  },
};
</script>

<style lang="css">
.editor {
  width: 100%;
  margin: 0 auto;
  padding-top: 33px;
  position: relative;
  z-index: 0;
  background: #fff;
  height: calc(100% - 33px);
  border-radius: 10px;
}
.text {
  width: 100%;
  height: 100%;
}
</style>
