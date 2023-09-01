<script setup lang="ts"></script>

<template>
  <div class="company-aboutus">
    <div class="header-banner">
      <img src="/images/list_banner.jpg" alt="" />
    </div>
    <div class="company-aboutus-content">
      <h1 class="title">公司简介</h1>
      <div class="content">
        <div class="content-item area-a">
          <p>
            南宁超创信息工程有限公司创立于1998年，注册资金2000万元，是首批率先通过广西壮族自治区科技厅认定的高新技术企业及广西电子信息协会发起单位之一。
          </p>
          <p>
            超创公司以软件开发、系统集成、通信、监控产品研制为核心，遵循“诚信、共赢”的市场开拓原则，凭借雄厚的技术实力和丰富的项目实施经验，客户群已覆盖政府、食药、物流、交通、金融等行业。公司拥有多个行业资质和认证，自主知识产权40多项，并连续多年承担国家、省、市级科研项目，获得多项荣誉及称号。
          </p>
        </div>
        <div class="content-item area-b">
          <img src="/images/about_cc/about_pic1.png" alt="" />
        </div>
        <div class="content-item area-c">
          <img src="/images/about_cc/about_pic2.jpg" alt="" />
        </div>
        <div class="content-item area-d">
          <p>
            超创公司坚持“科技以人为本”的原则，十分重视人才的培养，公司现有员工近百人，既有高层次的计算机专业技术人才，又有丰富管理实践经验的企业家和专家，公司大多数员工长期从事软件开发、系统集成、交通、监控产品的研究开发工作，并均参与过大中型软硬件项目的开发和管理。
          </p>
          <p>
            二十多年来，公司以可靠的产品质量及完善的售后服务，赢得了客户的信赖与支持。超创将秉承“团结、信任、创新、求实”的经营理念，与合作伙伴携手共创未来。
          </p>
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      .content-item {
        p {
          font-size: 1.2em;
          color: #333;
          text-indent: 2em;
          line-height: 1.8em;
        }
        img {
          width: 100%;
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

        grid-template-areas:
          "a"
          "b"
          "c"
          "d";
        .area-a {
          grid-area: a;
        }
        .area-b {
          grid-area: b;
        }
        .area-c {
          grid-area: d;
        }
        .area-d {
          grid-area: c;
        }
        .content-item {
          p {
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
