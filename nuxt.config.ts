// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/gw/dist/",
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0",
      title: "超创信息",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "南宁超创信息工程有限公司以软件开发、系统集成、通信、监控产品研制为核心，遵循“诚信、共赢”的市场开拓原则，凭借雄厚的技术实力和丰富的项目实施经验，客户群已覆盖政府、食药、物流、交通、金融等行业。公司拥有多个行业资质和认证，自主知识产权40多项，并连续多年承担国家、省、市级科研项目，获得多项荣誉及称号。",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "超创信息,政府行业信息化建设,系统集成,软件与信息服务,信息化解决方案",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/gw/dist/cc.ico" }],
      script: [
        {
          type: "text/javascript",
          src: "https://map.qq.com/api/gljs?v=1.exp&key=EKIBZ-FCOYW-FMWRR-RSJQV-UOCX2-S2BL4",
        },
      ],
    },
  },

  devtools: { enabled: true },
  modules: [
    // https://go.nuxtjs.dev/bootstrap
  ],
  plugins: [{ src: "plugins/swiper", ssr: false }],
  css: ["assets/styles/base.scss", "assets/styles/common.scss"],
});
