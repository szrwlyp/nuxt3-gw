<template>
  <div class="news-details">
    <div class="header-banner">
      <img src="/images/newsbanner.png" alt="" />
    </div>
    <div class="news-main">
      <div class="page-title">企业活动 Company Activities</div>
      <div class="news-details-mian">
        <h1 class="news-title">{{ detailData.detailsTitle }}</h1>

        <div class="news-date">
          <span v-if="detailData.publisher"
            >发布人：{{ detailData.publisher }}</span
          >
          &nbsp;&nbsp;&nbsp;
          <span v-if="detailData.date">时间：{{ detailData.date }}</span>
        </div>
        <div class="dotted"></div>
        <swiper
          class="carousel-comp-swiper"
          v-bind="swiperOptions"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in detailData.detailsList"
            :key="index"
            ><div class="slide-item">
              <img
                class="img"
                :src="`${base}images/activities_news/${item.img}`"
              />
              <div class="img-profile">
                <p v-for="(item_c, index) in item.imgProfile" :key="index">
                  {{ item_c }}
                </p>
              </div>
            </div>
          </swiper-slide>
          <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="swiper-button-prev carousel-prev-comp"></div>
          <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="swiper-button-next carousel-next-comp"></div>
          <!--分页器。如果放置在swiper外面，需要自定义样式。-->
          <div class="swiper-pagination"></div>
        </swiper>

        <div
          class="thumbs"
          :style="`grid-template-columns:repeat(${
            detailData.detailsList.length < 10
              ? detailData.detailsList.length
              : '10'
          },1fr) `"
        >
          <div
            v-for="(item, index) in detailData.detailsList"
            :key="index"
            @mouseover="handleMouseOver(index)"
            alt=""
            :class="{ select: index === currentIndex }"
            class="thumbs-d"
          >
            <img :src="`${base}images/activities_news/${item.img}`" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useRoute } from "vue-router";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { activitiesNewsSourceData } from "@/assets/js/activitiesNewsSourceData";
const route = useRoute();
const id = Number(route?.params?.id) || 1;

const config = useRuntimeConfig();
const base = config.public.baseURL;

const detailData = ref(
  activitiesNewsSourceData.value.find((item) => item.id === id) ?? {
    title: "",
    subTitle: "",
    publisher: "",
    date: "",
    htmlContent: "",
  }
);
console.log(detailData);
const swiperOptions = ref({
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 1,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
});
const activeSwiper = ref<any>();
const currentIndex = ref(0);
const onSlideChange = (e) => {
  currentIndex.value = e.activeIndex;
};

const handleMouseOver = (index) => {
  currentIndex.value = index;

  activeSwiper.value?.slideTo(index);
};
const onSwiper = (swiper) => {
  activeSwiper.value = swiper;
};
</script>
<style scoped lang="scss">
.news-details {
  .header-banner {
    display: flex;
    justify-content: center;
  }
  .news-main {
    width: 1200px;
    margin: 20px auto;
    border: 1px solid #e3e3e3;
    .page-title {
      color: #1a82d9;
      font-size: 1.25em;
      height: 50px;
      line-height: 50px;
      text-indent: 2em;
      font-weight: bold;
    }
    .news-details-mian {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px;
      .news-title {
        color: #1a82d9;
        font-size: 1.4em;
        font-weight: normal;
      }
      .news-date {
        font-size: 0.9em;
        margin-top: 20px;
      }
      .dotted {
        border-top: 1px dotted rgb(204, 204, 204);
        height: 1px;
        width: 100%;
        margin-top: 10px;
      }
      .carousel-comp-swiper {
        /* --swiper-theme-color: #ff6600; 设置Swiper风格 */
        --swiper-navigation-color: #fff; //单独设置按钮颜色
        /* --swiper-navigation-size: 33px; 设置按钮大小 */
        .carousel-prev-comp,
        .carousel-next-comp {
          display: none;
        }
        &:hover {
          .carousel-prev-comp,
          .carousel-next-comp {
            display: block;
          }
        }
        width: 80%;
        /* height: 500px; */
        margin: 30px 0;
        .slide-item {
          position: relative;
          width: 100%;
          /* height: 100%; */
          .img {
            width: 100%;
            height: 500px;
            object-fit: cover;
          }
          .img-profile {
            /* position: absolute;
            bottom: 0;
            left: 0; */
            background: #eeeeee;
            color: #000;
            p {
              font-size: 0.8em;
              padding: 10px 30px;
              /* text-align: center; */
              text-indent: 2em;
            }
          }
        }
      }
      .thumbs {
        display: grid;
        grid-gap: 10px;
        position: relative;

        .thumbs-d {
          width: 65px;
          height: 45px;
          cursor: pointer;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          /* &:hover {
            border: pink 2px solid;
          } */
        }
        .select {
          border: 2px solid #f60;

          &::after {
            position: absolute;
            top: -17px;
            left: 24px;
            content: "";
            border-bottom: 8px solid #f60;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid transparent;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .news-details {
    .header-banner {
      img {
        width: 100%;
      }
    }
    .news-main {
      width: 100%;
      padding: 0 20px;
      .page-title {
        text-indent: 0;
      }
      .news-details-mian {
        margin: 30px 0;

        .news-title {
          text-align: center;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .news-details {
    .header-banner {
      img {
        width: 100%;
      }
    }
    .news-main {
      width: 100%;
      padding: 0 20px;
      .page-title {
        display: none;
      }
      .news-details-mian {
        margin: 20px 0;
        .carousel-comp-swiper {
          width: 100%;
          .slide-item {
            position: relative;
            width: 100%;
            /* height: 100%; */
            .img {
              width: 100%;
              height: 300px;
              object-fit: cover;
            }
            .img-profile {
              p {
                font-size: 1.1em;
                padding: 10px;
              }
            }
          }
        }
        .thumbs {
          display: none;
          grid-template-columns: repeat(3, 1fr) !important;
          .thumbs-d {
            width: 98px;
            height: 62px;
          }
          .select {
            &::after {
              top: -17px;
              left: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
