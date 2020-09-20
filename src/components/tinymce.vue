<template>
  <div class="container">
    <editor id="tinymce" v-model="myValue" :init="init"></editor>
  </div>
</template>

<script>
import { uploadImg, uploadFile } from "../http/http";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/plugins/link";
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件
export default {
  name: "tinymce",
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
    },
    login: {
      type: Boolean,
    },
  },
  data() {
    return {
      init: {
        skin_url: "tinymce/skins/ui/oxide",
        content_css: "tinymce/skins/content/default/content.css",
        // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
        // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
        height: 480,
        width: "40vw",
        plugins: "lists image media table wordcount link",
        toolbar:
          "undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat | link | fontselect | subscript | superscript",
        branding: false,
        menubar: false,

        font_formats:
          "微软雅黑='微软雅黑'; 宋体='宋体'; 黑体='黑体'; 仿宋='仿宋'; 楷体='楷体'; 隶书='隶书'; 幼圆='幼圆'; 方正舒体='方正舒体'; 方正姚体='方正姚体'; 等线='等线'; 华文彩云='华文彩云'; 华文仿宋='华文仿宋'; 华文行楷='华文行楷'; 华文楷体='华文楷体'; 华文隶书='华文隶书'; Andale Mono=andale mono,times; Arial=arial; Arial Black=arial black;avant garde; Book Antiqua=book antiqua;palatino; Comic Sans MS=comic sans ms; Courier New=courier new;courier; Georgia=georgia; Helvetica=helvetica; Impact=impact;chicago; Symbol=symbol; Tahoma=tahoma;arial; sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms; Verdana=verdana;geneva; Webdings=webdings; Wingdings=wingdings",
        statusbar: false,
        readonly: true,
        body_class: "contentbox",
        content_style: ".contentbox{color: #FFF4CD;}",
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success) => {
          //const img = "data:image/jpeg;base64," + blobInfo.base64();
          let img = new FormData();
          console.log(blobInfo.blob());
          img.append("file", blobInfo.blob(), blobInfo.filename());
          uploadImg(img).then((res) => {
            console.log(res);
            success(res.data);
          });
        },
        file_picker_callback: function (callback) {
          let filetype =
            ".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf";
          let input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", filetype);
          input.click();
          input.onchange = function () {
            let file = this.files[0];
            let formdata = new FormData();
            formdata.append("file", file, file.name);
            uploadFile(formdata).then((res) => {
              console.log(res);
              callback(res.data);
            });
          };
        },
      },
      myValue: this.value,

      // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
      // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
      baseUrl: {
        type: String,
        default: "",
      },
    };
  },
  mounted() {
    this.$nextTick(function () {
      console.log(this.login);
      this.myValue = this.value;
      if (!this.login) {
        this.init.toolbar = false;
        console.log(this.init.toolbar);
        tinymce.get("tinymce").mode.set("readonly");
        tinymce.init({});
      }
    });
  },
  methods: {},
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
