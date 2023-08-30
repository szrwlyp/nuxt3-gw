// 自定义上传图片
export const imageUploadHandler = (blobInfo: any) =>
  new Promise(async (resolve, reject) => {
    let formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    // 请求接口
    let url = "https://wb.chaochuang.com.cn/api/system/common/upload-file";

    // 请求
    const data: any = await $fetch(url, {
      method: "POST",
      body: formData,
    });

    if (data.code === 200) {
      resolve("https://wb.chaochuang.com.cn/" + data.result.url);
    } else {
      reject(data.message);
    }
  });

// 字体
export const font_family_formats =
  "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif";

// 行高
export const line_height_formats = "1 1.2 1.4 1.5 1.6 1.7 1.8 1.9 2 3 4 5";

// 字体大小
export const font_size_formats =
  "8px 10px 12px 14px 16px 18px 24px 36px 48px 128px";

// 插件
export const plugins =
  "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount autosave emoticons indent2em importcss"; // 富文本插件

export const toolbar = [
  "fullscreen undo redo restoredraft | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat ",
  "fontfamily fontsize styles | table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter",
];

export const image_class_list = [
  { title: "None", value: "" },
  { title: "left-margin-10", value: "img-left-margin-10" }, // 图片左边距10px
  { title: "right-margin-10", value: "img-right-margin-10" }, // 图片右边距10px
  { title: "left-margin-20", value: "img-left-margin-20" }, // 图片左边距10px
  { title: "right-margin-20", value: "img-right-margin-20" }, // 图片右边距10px
];
// 是否禁止粘贴图片
export const paste_data_images = false;

// 是否显示顶部菜单栏
export const menubar = false;

// 自定义富文本样式文件，将自定义css文件保存到公共文件夹，并在代码中使用项目根目录的相对路径，如/tinymce-custom.css
export const content_css = "/tinyMce.css";

// 自定义css样式
export const content_style = "p {margin:16px 0 !important;}";

// 是否显示下方操作栏
export const statusbar = false;
