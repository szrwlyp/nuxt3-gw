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
          <h1 class="product-title">机房建设</h1>
          <div></div>
        </div>
        <div class="main-profile">
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_building/icon-01.jpg" alt="" />
              <h4 class="title">概述</h4>
            </div>
            <div class="main-profile-contnt">
              <p>
                机房配备有大量的电子设备，必需做好装修、防雷、接地及防静电工程，以免造成电子设备的损坏，或者使电子设备受到严重的干扰。在这些电子设备的信号
                线上安装避雷器，防止感应雷侵入。机房建设主要包括以下内容：机房装修、机房供配电系统、机房环境监控及漏水监测、精密空调、消防报警控制系统、机房防雷接地系统等。
              </p>
            </div>
          </div>

          <!-- 总体架构 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="/images/solution_building/icon-02.jpg" alt="" />
              <h4 class="title">总体架构</h4>
            </div>
            <div class="main-profile-contnt">
              <img src="/images/solution_system/solution-system.jpg" alt="" />
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
