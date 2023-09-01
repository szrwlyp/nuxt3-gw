<template>
  <div class="news-details">
    <div class="header-banner">
      <img src="/images/activities_banner.jpg" alt="" />
    </div>
    <div class="news-main">
      <div class="page-title">企业活动 Activities</div>
      <div class="news-details-mian">
        <div
          class="news-item"
          v-for="item in activitiesNewsSourceData"
          :key="item.id"
          @click="jumpNewsDetails(item.id)"
        >
          <img
            class="img"
            :src="`${base}images/activities_news/${item.img}`"
            :alt="item.listTitle"
          />
          <div class="title">{{ item.listTitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
import { activitiesNewsSourceData } from "@/assets/js/activitiesNewsSourceData";

console.log(config.public);
const jumpNewsDetails = (id: number) => {
  navigateTo({ path: `/activitiesNewsDetails/${id}` });
};

const base = config.public.baseURL;
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
      display: grid;
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      padding: 30px 40px;
      grid-gap: 15px;

      .news-item {
        cursor: pointer;
        .img {
          width: 100%;
          /* object-fit: cover; */
          height: 178px;
        }
        .title {
          background: rgb(138, 138, 138);
          color: #fff;
          font-size: 0.8em;
          padding: 8px 0;
          text-align: center;
          cursor: pointer;
          &:hover {
            background: #22a7e8;
          }
          /* display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden; */
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
      /* margin: 20px; */
      .page-title {
        text-indent: 0;
      }
      .news-details-mian {
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .news-details {
    .header-banner {
      img {
        width: 100%;
      }
    }
    .news-main {
      width: 100%;
      padding: 0 20px;
      /* margin: 20px; */
      .page-title {
        text-indent: 0;
      }
      .news-details-mian {
        grid-template-columns: repeat(3, 1fr);
        padding: 20px 0;
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
        /* display: none; */
      }
      .news-details-mian {
        grid-template-columns: repeat(2, 1fr);
        padding: 20px 0;
        .news-item {
          .img {
            height: 130px;
          }
        }
      }
    }
  }
}
</style>
