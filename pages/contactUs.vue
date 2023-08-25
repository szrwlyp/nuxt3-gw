<script setup lang="ts"></script>

<template>
  <div class="company-aboutus">
    <div class="header-banner">
      <img src="@/assets/images/list_banner.jpg" alt="" />
    </div>
    <div class="company-aboutus-content">
      <h1 class="title">联系我们</h1>
      <div class="content">
        <div class="content-item">
          <MapComp class="map-container"></MapComp>
        </div>
        <div class="content-item">
          <div class="contact_us_flex">
            <div class="contact_us">
              <img src="@/assets/images/about_cc/icon-ad.png" alt="公司地址" />
              <span>地址：广西南宁市青秀区东葛路118号万达金座13层</span>
            </div>
            <div class="contact_us">
              <img
                src="@/assets/images/about_cc/icon-mail.png"
                alt="招聘信箱"
              />
              <span>Email：business@chaochuang.com.cn</span>
            </div>
            <div class="contact_us">
              <img
                src="@/assets/images/about_cc/icon-phone-recruitment.png"
                alt="电话"
              />
              <span>电话： 0771-5507771</span>
            </div>
            <div class="contact_us">
              <img src="@/assets/images/about_cc/icon-fax.png" alt="联系人" />
              <span>传真：0771-5507773</span>
            </div>
          </div>
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
        width: 100%;

        margin: 0 auto;
        .map-container {
          height: 400px;
          position: relative;
          z-index: 10;
        }

        .contact_us_flex {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-top: 40px;
          .contact_us {
            display: flex;
            align-items: center;
            padding: 4px 0;
            width: 40%;
            span {
              margin-left: 8px;
            }
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
      .content {
        .content-item {
          .map-container {
            height: 400px;
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
      padding: 15px;
      .content {
        padding: 10px 0;

        .content-item {
          .map-container {
            height: 200px;
          }
          .contact_us_flex {
            margin-top: 20px;
            .contact_us {
              width: 100%;
              font-size: 0.9em;
            }
          }
        }
      }
    }
  }
}
</style>
