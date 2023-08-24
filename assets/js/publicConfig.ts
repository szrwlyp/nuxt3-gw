import { ref } from "vue";

export const navList = ref([
  { title: "首页", path: "/" },
  {
    title: "解决方案",
    path: "",
    children: [
      { title: "电子政务解决方案", path: "/solutionGov" },
      { title: "人大履职解决方案", path: "/solutionNFC" },
      { title: "食药监管解决方案", path: "/solutionFda" },
      {
        title: "智能化工程解决方案",
        path: "",
        children: [
          { title: "智慧楼宇", path: "/solutionBuilding" },
          { title: "综合布线", path: "/solutionLine" },
          { title: "视频监控", path: "/solutionVideo" },
          { title: "机房建设", path: "/solutionSystem" },
        ],
      },
    ],
  },
  {
    title: "关于超创",
    path: "",
    children: [
      { title: "公司简介", path: "/companyAboutus" },
      { title: "企业文化", path: "/companyCulture" },
      { title: "资质荣誉", path: "/companyHonor" },
      { title: "招贤纳士", path: "/companyRecruitment" },
      { title: "合作伙伴", path: "/companyPartner" },
    ],
  },
  { title: "联系我们", path: "/contactUs" },
]);

export const footerNavList = ref([
  { title: "行业新闻", path: "/industryNewsList" },
  { title: "企业新闻", path: "/companyNewsList" },
  { title: "企业活动", path: "/activitiesNewsList" },
]);
