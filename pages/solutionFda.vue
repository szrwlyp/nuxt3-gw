<script setup lang="ts"></script>

<template>
  <div class="solution-gov">
    <div class="header-banner">
      <img src="/images/list_banner.jpg" alt="" />
    </div>
    <div class="content">
      <div class="content-left"></div>
      <div class="content-right">
        <div class="title-breadcrumb">
          <h1 class="product-title">食药监管解决方案</h1>
          <div></div>
        </div>
        <div class="main-profile">
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_fda/icon-01.jpg" alt="" />
              <h4 class="title">简介</h4>
            </div>
            <div class="main-profile-contnt">
              <p>
                食品药品安全监管信息化是转变政府职能、提升监管效能和服务水平、促进食药事业健康发展、满足人民群众食药安全需求的重要保障；我国各级食药监正大力推进食药安全监管信息化建设，食品药品安全综合监管平台顺应而生。
              </p>
            </div>
          </div>

          <!-- 总体架构 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_fda/icon-02.jpg" alt="" />
              <h4 class="title">总体结构</h4>
            </div>
            <div class="main-profile-contnt">
              <img src="/images/solution_fda/solution-fda.jpg" alt="" />
            </div>
          </div>

          <!-- 功能特点 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_fda/icon-03.jpg" alt="" />
              <h4 class="title">功能特点</h4>
            </div>
            <div class="main-profile-contnt">
              <p class="function-p">
                · 全品种：监管覆盖药品、食品、保健食品、化妆品、医疗器械等品种；
              </p>
              <p class="function-p">
                · 全环节：全程监管注册、生产、流通、消费等环节；
              </p>
              <p class="function-p">
                ·
                全业务：许可、审评查验、监督检查、监督抽验、检验检测、稽查执法、信息监测、应急全链条业务管理；
              </p>
              <p class="function-p">
                · 全协同：基于工作流引擎，多级监管部门业务协同；
              </p>
              <p class="function-p">
                ·
                全智能：法律法规、案由、案例、检查规程、文书模板资源化，全文检索，智能引用，辅助快速执法；
              </p>
              <p class="function-p">
                ·
                全对接：从数据上、流程上无缝对接食药总局相关系统、办证大厅系统；
              </p>
              <p class="function-p">
                · 大数据：可视化、多维分析、基础报表、专题预警，辅助决策。
              </p>
            </div>
          </div>

          <!-- 客户价值 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_fda/icon-04.jpg" alt="" />
              <h4 class="title">客户价值</h4>
            </div>
            <div class="main-profile-contnt">
              <ul>
                <li>提高行政效能，强化服务能力；</li>
                <li>提高执法水平，减小执法风险；</li>
                <li>提高风险管控、应急处置能力；</li>
                <li>保障群众饮食用药安全；</li>
                <li>促进医药食品事业健康发展。</li>
              </ul>
            </div>
          </div>

          <!-- 典型客户 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_fda/icon-05.jpg" alt="" />
              <h4 class="title">典型客户</h4>
            </div>
            <div class="main-profile-contnt">
              <ul>
                <li>广西壮族自治区食品药品监督管理局</li>
                <li>南宁市食品药品监督管理局</li>
                <li>北海市食品药品监督管理局</li>
                <li>梧州市食品药品监督管理局</li>
                <li>玉林市食品药品监督管理局</li>
                <li>贵港市食品药品监督管理局</li>
                <li>南宁市青秀区食品药品监督管理局</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.solution-gov {
  .header-banner {
    display: flex;
    justify-content: center;
  }
  .content {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    .content-left {
      width: 180px;
      flex: 0 1 180px;
    }
    .content-right {
      flex: 1;
      .title-breadcrumb {
        .product-title {
          font-size: 1.6em;
          color: #58b04c;
          font-weight: normal;
          padding: 15px 0;
        }
      }
      .main-profile {
        .main-profile-item {
          .main-profile-title {
            display: flex;
            align-items: center;
            padding: 20px 0;
            /* img {
              width: 24px;
              height: 16px;
            } */
            .title {
              margin-left: 8px;
              font-size: 1.2em;
              font-weight: normal;
            }
          }
          .main-profile-contnt {
            p,
            ul {
              font-size: 1em;
              color: #333;
              text-indent: 2em;
              line-height: 1.8em;
            }
            .function-p {
              padding: 8px 0;
            }
            img {
              margin: 0 auto;
            }
            ul li {
              padding: 4px 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .solution-gov {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .content {
      width: 100%;
      margin: 20px auto;
      display: flex;
      .content-left {
        /* width: 180px;
        flex: 0 1 180px; */
        display: none;
      }
      .content-right {
        width: 100%;
        padding: 15px;
        .title-breadcrumb {
          .product-title {
            text-align: center;
          }
        }
        .main-profile {
          .main-profile-item {
            .main-profile-contnt {
              img {
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .solution-gov {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .content {
      width: 100%;
      margin: 20px auto;
      display: flex;
      .content-left {
        /* width: 180px;
        flex: 0 1 180px; */
        display: none;
      }
      .content-right {
        width: 100%;
        padding: 15px;
        .title-breadcrumb {
          .product-title {
            text-align: center;
          }
        }
        .main-profile {
          .main-profile-item {
            .main-profile-contnt {
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
