<template>
  <div class="news-details">
    <div class="header-banner">
      <img src="@/assets/images/newsbanner.png" alt="" />
    </div>
    <div class="news-main">
      <div class="page-title">企业新闻</div>
      <div class="news-details-mian">
        <h1 class="news-title">{{ detailData.title }}</h1>
        <h2 class="news-title" v-if="detailData.subTitle">
          {{ detailData.subTitle }}
        </h2>
        <div class="news-date">
          <span>发布人：{{ detailData.publisher }}</span>
          &nbsp;&nbsp;&nbsp;
          <span>时间：{{ detailData.date }}</span>
        </div>
        <div class="dotted"></div>
        <!-- <img class="news-img" :src="detailData.img" alt="" /> -->
        <div class="news-content" v-html="detailData.htmlContent"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { companyNewsSourceData } from "@/assets/js/sourceData";
const route = useRoute();
const id = Number(route?.params?.id) || 0;

const detailData = ref(
  companyNewsSourceData.value.find((item) => item.id === id) ?? {
    title: "",
    subTitle: "",
    publisher: "",
    date: "",
    htmlContent: "",
  }
);
console.log(detailData);
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
      .news-img {
        padding: 30px 0;
        min-height: 350px;
        min-width: 600px;
        max-width: 80%;
      }
      :deep(.news-content) {
        width: 100%;
        p {
          margin: 16px 0;
          text-indent: 2em;
          line-height: 1.75em;
          font-size: 1em;
          color: #232425;
          text-align: justify;
        }
        .img-align-center {
          display: block;
          margin: 30px auto;
          min-height: 350px;
          min-width: 600px;
          max-width: 70%;
          object-fit: cover;
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
        :deep(.news-content) {
          width: 100%;
          font-size: 17px;
          p {
            margin: 16px 0;
            text-indent: 2em;
            line-height: 1.75em;
            font-size: 1em;
            color: #232425;
            text-align: justify;
          }
          .img-align-center {
            min-height: 280px;
            min-width: 80%;
            max-width: 70%;
          }
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
        :deep(.news-content) {
          width: 100%;
          font-size: 18px;
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.75em;
            font-size: 1em;
            color: #232425;
            text-align: justify;
          }
          .img-align-center {
            object-fit: contain;
            margin: 10px auto;
            min-height: 0;
            min-width: 0;
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
