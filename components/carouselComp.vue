<template>
  <div class="carousel-comp">
    <swiper class="carousel-comp-swiper" v-bind="swiperOptions">
      <swiper-slide v-for="(item, index) in sourceData" :key="index"
        ><div class="slide-item">
          <img class="large-screen" :src="item.url" :alt="item.alt" />
          <img class="small-screen" :src="item.min_url" :alt="item.alt" />
          <div class="slide-text">
            <div class="gd">了解更多</div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IProps {
  sourceData: any;
}
const props = defineProps<IProps>();

const { sourceData } = toRefs(props);

const swiperOptions = ref({
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
</script>
<style lang="scss" scoped>
.carousel-comp {
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
  .carousel-comp-swiper {
    /* --swiper-theme-color: #ff6600; 设置Swiper风格 */
    /* --swiper-navigation-color: #f66f6a; 单独设置按钮颜色 */
    /* --swiper-navigation-size: 33px; 设置按钮大小 */
    .slide-item {
      position: relative;
      .large-screen,
      .small-screen {
        width: 100%;
        height: auto;
      }
      .large-screen {
        /* display: block; */
      }
      .small-screen {
        display: none;
      }
      .slide-text {
        position: absolute;
        top: 55%;
        display: flex;
        /* height: 30%; */
        width: 100%;
        .gd {
          display: inline-block;
          padding: 12px 60px;
          border: 1px solid #111111;
          color: #111;
          /* font-size: 14px; */
          cursor: pointer;
          position: absolute;
          left: 15%;
          font-size: 1em;
          &:hover {
            color: #fff;
            background: #c7000b;
            border: 1px solid #c7000b;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .carousel-comp {
    .carousel-comp-swiper {
      .slide-item {
        position: relative;
        .large-screen {
          display: none;
        }
        .small-screen {
          display: block;
        }

        .slide-text {
          position: absolute;
          top: 32%;
          display: flex;
          /* height: 30%; */
          width: 100%;
          justify-content: center;
          .gd {
            padding: 4px 30px;
            border: 1px solid #111111;
            color: #111;
            font-size: 0.9em;
            cursor: pointer;
            position: relative;
            left: auto;
            &:hover {
              color: #fff;
              background: #c7000b;
              border: 1px solid #c7000b;
            }
          }
        }
      }
    }
  }
}
</style>
