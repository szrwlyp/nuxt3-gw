<script setup lang="ts">
import { ref } from "vue";
import { companyNewsSourceData } from "@/assets/js/sourceData";

const jumpNewsDetail = (id: number) => {
  navigateTo({ path: `/companyNewsDetails/${id}` });
};
</script>

<template>
  <div class="industry-news">
    <div class="header-banner">
      <img src="@/assets/images/newsbanner.png" alt="" />
    </div>
    <div class="news-main">
      <h1 class="page-title">企业新闻</h1>
      <div class="content">
        <div
          class="content-item"
          v-for="item of companyNewsSourceData"
          :key="item.id"
        >
          <div
            class="mobile-terminal-event"
            @click="jumpNewsDetail(item.id)"
          ></div>
          <img class="item-img" :src="item.img" alt="" />
          <div class="item-right">
            <div class="news-title-data">
              <h2 class="title" @click="jumpNewsDetail(item.id)">
                {{ item.title }}
              </h2>
              <span class="date">{{ item.date }}</span>
            </div>
            <div class="news-content">{{ item.profileContent }}</div>
            <!-- <div class="news-content" v-html="item.htmlContent"></div> -->
            <div class="more" @click="jumpNewsDetail(item.id)">更多 ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.industry-news {
  .header-banner {
    display: flex;
    justify-content: center;
  }
  .news-main {
    width: 1200px;
    margin: 20px auto;
    .page-title {
      color: rgb(26, 130, 217);
      font-size: 1.4em;
      padding: 10px 0;
      border-bottom: 1px solid #e9e9e9;
    }
    .content {
      .content-item {
        padding: 30px;
        border-bottom: 1px solid #e9e9e9;
        width: 100%;
        margin: 0 auto;
        display: flex;
        .mobile-terminal-event {
          display: none;
        }
        .item-img {
          width: 315px;
          height: 200px;
          flex: 0 1 315px;
          object-fit: cover;
        }
        .item-right {
          flex: 1;
          margin-left: 30px;
          position: relative;
          .news-title-data {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
              font-size: 1.2em;
              color: #000;
              font-weight: normal;
              cursor: pointer;
            }
            .date {
              font-size: 0.9em;
              color: #555;
              flex: 0 1 120px;
              text-align: right;
            }
          }
          .news-content {
            font-size: 0.9em;
            color: #555;
            /* height: 40px; */
            overflow: hidden;
            margin: 20px 0 50px 0;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            text-indent: 2em;
          }
          .more {
            width: 78px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #e9e9e9;
            font-size: 14px;
            color: #333;
            border-radius: 3px;
            position: absolute;
            right: 0;
            cursor: pointer;
            &:hover {
              background-color: #1c89e4;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .industry-news {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .news-main {
      width: 100%;
      padding: 0 20px;
    }
  }
}
@media screen and (max-width: 898px) {
  .industry-news {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .news-main {
      width: 100%;
      padding: 0 20px;
      .content {
        .content-item {
          display: flex;
          width: 100%;
          .item-img {
            flex: 0 1 260px;
            width: 260px;
            height: 160px;
          }
          .item-right {
            flex: 1;
            margin-left: 20px;
            .news-title-data {
              .title {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
              }
            }
            .news-content {
              margin: 10px 0 30px 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .industry-news {
    font-size: 14px;
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .news-main {
      width: 100%;
      padding: 0 15px;
      .page-title {
        color: rgb(26, 130, 217);
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        .content-item {
          padding: 20px 0;
          display: flex;
          width: 100%;
          border-bottom: 1px solid #e9e9e9;

          position: relative;
          .mobile-terminal-event {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            display: block;
            cursor: pointer;
          }
          .item-img {
            flex: 0 1 120px;
            width: 120px;
            height: 90px;
          }
          .item-right {
            flex: auto;
            margin-left: 10px;
            .news-title-data {
              display: block;
              .title {
                font-size: 1.2em;
                color: #000;
                font-weight: normal;
                cursor: pointer;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
              }
              .date {
                font-size: 0.9em;
                color: #555;
                flex: 0 1 120px;
                text-align: right;
              }
            }
            .news-content {
              font-size: 0.9em;
              color: #555;
              margin: 4px 0 0 0;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-indent: 0em;
            }
            .more {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
