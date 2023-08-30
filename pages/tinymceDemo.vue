<template>
  <div class="app-container">
    <div style="width: 1200px; margin: 0 auto">
      <Editor id="tinymce" v-model="tinymceHtml" :init="init" />
    </div>
    <!-- <div @click="test">获取内容</div> -->
    <div class="edit-demo" v-html="tinymceHtml"></div>
    <input
      type="text"
      style="width: 300px; height: 50px"
      v-model="tinymceHtml"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue"; // 引入组件
import {
  imageUploadHandler,
  font_family_formats,
  line_height_formats,
  font_size_formats,
  plugins,
  toolbar,
  image_class_list,
  paste_data_images,
  menubar,
  content_css,
  content_style,
  statusbar,
} from "assets/js/tinyMceConfig";

const tinymceHtml = ref<string>();
const init = {
  selector: "textarea",
  readonly: true,
  //   inline: true,
  language: "zh-Hans", // 这里名称根据 zh-Hans.js 里面写的名称而定
  height: 500,
  statusbar,
  image_dimensions: false, // 禁止操作图片
  plugins,
  font_size_formats,
  font_family_formats,
  line_height_formats,
  toolbar,
  image_class_list,
  // 自定义图片上传
  images_upload_handler: imageUploadHandler,
  importcss_append: true,
  //   importcss_exclusive: false,
  branding: false, // //是否禁用“Powered by TinyMCE”
  menubar,
  paste_data_images,
  content_css,
  content_style,
};
</script>
<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}
:deep(.edit-demo) {
  width: 1200px;
  margin: 40px 0;
  p {
    margin: 16px 0;
  }
  .img-align-center {
    display: block;
    margin: 30px auto;
  }
}
</style>
