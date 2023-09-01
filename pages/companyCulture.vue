<script setup lang="ts"></script>

<template>
  <div class="company-aboutus">
    <div class="header-banner">
      <img src="/images/about_cc/list_banner8.jpg" alt="" />
    </div>
    <div class="company-aboutus-content">
      <h1 class="title">企业文化</h1>
      <div class="content">
        <div class="content-item">
          <img src="/images/about_cc/company-mission-title.jpg" alt="" />
          <p>
            为客户提供一流产品、优质服务，推动社会的信息化建设，让客户感受信息化带来的工作生活乐趣，帮助客户获得成功。公司与员工共同持续发展，努力确保公正、积极的工作条件，以开拓、进取之心面对社会发展潮流，承担社会发展义务。作为一家新兴的软件开发、信息技术解决方案的供应商，我们立足IT行业发展前沿，将努力在技术、业务上不断创新，去实现我们的使命。
          </p>
        </div>
        <div class="content-item">
          <img src="/images/about_cc/company-philosophy-title.jpg" alt="" />
          <img
            src="/images/about_cc/company-philosophy-pic.jpg"
            alt="公司理念"
            class="company-idea"
          />
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
      /* display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px; */
      .content-item {
        width: 1000px;
        margin: 0 auto;
        p {
          padding: 20px 40px;
          font-size: 1.2em;
          color: #333;
          text-indent: 2em;
          line-height: 1.8em;
        }
        img {
          width: 100%;
        }
        .company-idea {
          padding: 20px 0;
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
      padding: 20px;
      .content {
        .content-item {
          width: 100%;
          p {
            font-size: 1em;
          }
          img {
            width: 100%;
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
      padding: 20px;
      .content {
        grid-gap: 20px;
        .content-item {
          p {
            font-size: 0.9em;
            padding: 20px 0;
          }
          img {
            width: 100%;
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
      padding: 20px;
      .content {
        display: grid;
        grid-template-columns: 1fr;
        padding: 20px 0;
        .content-item {
          p {
            padding: 20px 0;
            font-size: 1.1em;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
