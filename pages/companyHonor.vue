<script setup lang="ts">
import { ref } from "vue";
const config = useRuntimeConfig();
const base = config.public.baseURL;
const listData = ref([
  {
    url: "pic_ry02.jpg",
    label: "高新技术企业证书",
  },
  {
    url: "pic_ry03.jpg",
    label: "电子与智能化工程专业承包资质证书",
  },
  {
    url: "pic_ry07.jpg",
    label: "质量管理体系认证证书",
  },
  {
    url: "pic_ry08.jpg",
    label: "中华人民共和国增值电信业务经营许可证",
  },
]);
</script>

<template>
  <div class="company-aboutus">
    <div class="header-banner">
      <img src="/images/about_cc/list_banner2.jpg" alt="" />
    </div>
    <div class="company-aboutus-content">
      <h1 class="title">资质荣誉</h1>
      <div class="content">
        <div class="content-item">
          <template v-for="(item, index) of listData" :key="index">
            <div class="qualifications-item">
              <img
                :src="`${base}images/about_cc/${item.url}`"
                :alt="item.label"
              />
              <div class="item-label">{{ item.label }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-aboutus {
  .header-banner {
    display: flex;
    justify-content: center;
  }
  .company-aboutus-content {
    width: 1200px;
    margin: 20px auto;
    .title {
      color: #1a82d9;
      font-size: 1.4em;
      padding: 10px 0;
      border-bottom: 1px solid #e9e9e9;
    }
    .content {
      padding: 30px;
      .content-item {
        width: 1000px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;

        .qualifications-item {
          border: solid 1px #eaeaea;
          &:hover {
            img {
              transform: scale(1.1);
            }
          }
          img {
            width: 100%;
            height: 250px;
            padding: 20px;
            object-fit: contain;
            transition: all 0.5s;
          }
          .item-label {
            padding: 10px 0;
            text-align: center;
            background: #e2e2e2;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .company-aboutus {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .company-aboutus-content {
      width: 100%;
      margin: 20px auto;
      padding: 0 20px;
      .title {
        color: #1a82d9;
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        padding: 30px;
        .content-item {
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 30px;
          .qualifications-item {
            border: solid 1px #eaeaea;
            img {
              width: 100%;
              height: 250px;
              padding: 20px;
              object-fit: contain;
            }
            .item-label {
              padding: 10px 0;
              text-align: center;
              background: #e2e2e2;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 898px) {
  .company-aboutus {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .company-aboutus-content {
      width: 100%;
      margin: 20px auto;
      .title {
        color: #1a82d9;
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        padding: 30px;
        .content-item {
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 30px;
          .qualifications-item {
            border: solid 1px #eaeaea;
            img {
              width: 100%;
              height: 250px;
              padding: 20px;
              object-fit: contain;
            }
            .item-label {
              padding: 10px 0;
              text-align: center;
              background: #e2e2e2;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .company-aboutus {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .company-aboutus-content {
      width: 100%;
      margin: 20px auto;
      .title {
        color: #1a82d9;
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        padding: 20px 0;
        .content-item {
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 20px;
          .qualifications-item {
            border: solid 1px #eaeaea;
            img {
              width: 100%;
              height: 250px;
              padding: 20px;
              object-fit: contain;
            }
            .item-label {
              padding: 10px 0;
              text-align: center;
              background: #e2e2e2;
            }
          }
        }
      }
    }
  }
}
</style>
