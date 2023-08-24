<script setup lang="ts"></script>

<template>
  <div class="solution-gov">
    <div class="header-banner">
      <img src="@/assets/images/list_banner.jpg" alt="" />
    </div>
    <div class="content">
      <div class="content-left"></div>
      <div class="content-right">
        <div class="title-breadcrumb">
          <h1 class="product-title">智能楼宇</h1>
          <div></div>
        </div>
        <div class="main-profile">
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_building/icon-01.jpg" alt="" />
              <h4 class="title">概述</h4>
            </div>
            <div class="main-profile-contnt">
              <p>
                智能建筑是以建筑物为平台，兼备信息设施系统、信息化应用系统、建筑设备管理系统、公共安全系统等，集结构、系统、服务、管理及其优化组合为一体，向人们提供安全、高效、便捷、节能、环保、健康的建筑环境。
              </p>
              <p>
                智能建筑是涵盖了通信、多媒体、安防、自动控制等领域的高新技术，智能建筑作为一个整体，使各种弱电系统有机、合理分布于建筑体内，发挥各自功能和作用。超创公司与国内外众多知名系统厂商建立了战略合作伙伴关系，结合自己在智能建筑领域积累的丰富经验，本着精益求精的精神，为您提供完善的解决方案。
              </p>
            </div>
          </div>

          <!-- 总体架构 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_building/icon-02.jpg" alt="" />
              <h4 class="title">总体结构</h4>
            </div>
            <div class="main-profile-contnt">
              <img
                src="@/assets/images/solution_building/solution-building.jpg"
                alt=""
              />
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
          color: #666;
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
