<template>
  <div>
    <!-- 轮播图 -->
    <carouselComp :sourceData="caroselData"></carouselComp>
    <div class="main-index">
      <!-- 推荐信息 -->
      <div class="tuijian">
        <h2 style="margin: 40px; text-align: center">推荐信息</h2>
        <div class="area">
          <template v-for="(item, index) in data" :key="index">
            <div class="grid-area-item" :class="`area-item${index + 1}`">
              <div class="item-content">
                <div class="img-box">
                  <div class="mask"></div>
                  <img :src="item.img" alt="" />
                </div>
                <div class="text-box">
                  <div class="category">{{ item.category }}</div>
                  <div class="title">{{ item.title }}</div>
                  <div class="text">{{ item.text }}</div>
                  <div class="read-more">了解更多</div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const caroselData = ref([
  {
    url: "https://www-file.huawei.com/-/media/corp2020/home/banner/8/hecs-light-pc.jpg",
    min_url:
      "	https://www-file.huawei.com/-/media/corp2020/home/banner/8/hwcloud-828-m.jpg",
    alt: "轮播图片",
    // caption: 'First slide',
    // text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    url: "https://www-file.huawei.com/-/media/corp2020/home/banner/8/vmall-818-v2.jpg",
    min_url:
      "	https://www-file.huawei.com/-/media/corp2020/home/banner/8/vmall-p60-m.jpg",
    alt: "轮播图片",
    // caption: 'First slide',
    // caption: 'First slide',
    // text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },

  // {
  //   url: 'https://www.chaochuang.com.cn/style/images/banner-1.jpg',
  //   // caption: 'First slide',
  //   // text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  // },
  // {
  //   url: 'https://www.chaochuang.com.cn/style/images/banner-2.jpg',
  //   // caption: 'First slide',
  //   // text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  // },
  // {
  //   url: 'https://www.chaochuang.com.cn/style/images/banner-3.jpg',
  //   // caption: 'First slide',
  //   // text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  // },
]);
const data = ref([
  {
    id: 1,
    title: "HarmonyOS 4",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/4/harmonyos4-p-4.jpg",
    category: "报告",
    text: "行胜于言，以科技创新助力可持续发展",
  },
  {
    id: 2,
    title: "深度用云，跃升数字生产力",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/5/huaweitech-94-cn-550.jpg",
    category: "出版物",
    text: "华为云Stack联袂打造，洞察政企云上转型趋势，探访行业先行者故事",
  },
  {
    id: 3,
    title: "2022年可持续发展报告",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/4/csr-2022-550-2.jpg",
    category: "报告",
    text: "行胜于言，以科技创新助力可持续发展",
  },
  {
    id: 4,
    title: "港灯：为香港千家万户提供世界级的电力供应",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/4/hk-electric-cn-pc.jpg",
    category: "成功故事",
    text: "核心业务秒级切换无中断，电力服务更安全更可靠",
  },
  {
    id: 5,
    title: "全光园区（FTTO） ",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/4/campus-optix-ftto.jpg",
    category: "解决方案",
    text: "连续四年蝉联中国无源光局域网市场份额第一",
  },
  {
    id: 6,
    title: "高速公路建设运营智慧化解决方案",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/4/expressway-reconstruction-and-expansion.jpg",
    category: "报告",
    text: "行胜于言，以科技创新助力可持续发展",
  },
  {
    id: 7,
    title: "5G远控，开启机进人退的“煤”好生活",
    img: "https://www-file.huawei.com/-/media/corp2020/home/box/4/5g-coal-mining.jpg",
    category: "创新技术",
    text: "华为云Stack联袂打造，洞察政企云上转型趋势，探访行业先行者故事",
  },
]);
</script>
<style scoped lang="scss">
.main-index {
  margin: 0 auto;
  width: 1500px;
  padding: 15px;
  .tuijian {
    font-size: 16px;
    .area {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      .grid-area-item {
        height: 400px;
        background: #ccc;
        .item-content {
          color: #fff;
          text-decoration: none;
          display: block;
          overflow: hidden;
          position: relative;
          height: 100%;
          cursor: pointer;
          &:hover {
            .img-box {
              img {
                transform: scale(1.1);
              }
              .mask {
                background: linear-gradient(
                  rgba(0, 0, 0, 0) 0%,
                  rgba(0, 0, 0, 0.7) 70%
                );
              }
            }
            .text-box {
              bottom: 0px;
              .read-more {
                opacity: 1;
              }
            }
          }
          .text-box {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            color: #fff;
            text-align: left;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            z-index: 4;
            bottom: -50px;
            padding: 25px 30px;
            font-size: 16px;
            .category {
              font-size: 0.91em;
            }
            .title {
              font-size: 1.2em;
              font-weight: bold;
            }
            .text {
              font-size: 0.875em;
              margin-bottom: 12px;
            }
            .read-more {
              opacity: 0;
              -webkit-transition: all 0.5s;
              transition: all 0.5s;
              font-size: 0.875em;
            }
          }
          .img-box {
            height: 100%;
            .mask {
              visibility: visible;
              opacity: 1;
              height: 70%;
              width: 100%;
              content: "";
              background: linear-gradient(
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.3) 70%
              );
              display: block;
              top: auto;
              bottom: 0;
              position: absolute;
              z-index: 2;
            }
            img {
              -webkit-transition: all 0.5s;
              transition: all 0.5s;
              width: 100%;
              position: relative;
              object-fit: cover;
              height: 100%;
            }
          }
        }
      }
      .area-item1 {
        grid-area: 1 / 1 / auto / span 2;
      }
      .area-item4 {
        grid-area: 2 / 2 / auto / span 2;
      }
      .area-item5,
      .area-item6,
      .area-item7 {
        height: 300px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .main-index {
    width: 90%;
  }
}
@media screen and (max-width: 1024px) {
  .main-index {
    width: 100%;
    .tuijian {
      .area {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        .grid-area-item {
          height: 380px;
        }
        .area-item1 {
          grid-area: 1 / 1 / auto / span 2;
        }
        .area-item4 {
          grid-area: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 898px) {
  .main-index {
    width: 100%;
    .tuijian {
      .area {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        .grid-area-item {
          height: 380px;
        }
        .area-item1 {
          grid-area: 1 / 1 / auto / span 2;
        }
        .area-item4 {
          grid-area: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .main-index {
    width: 100%;
    .tuijian {
      .area {
        .grid-area-item {
          height: 220px;
          .item-content {
            .text-box {
              font-size: 12px;
              padding: 20px 10px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  /* .main-index {
  } */
  /* .area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    .grid-area-item {
      height: 100px;
      background: #ccc;
    }
    .area-item1 {
      grid-area: 1 / 1 / auto / span 2;
    }
  } */
}
</style>
