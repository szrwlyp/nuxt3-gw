import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper);
});
