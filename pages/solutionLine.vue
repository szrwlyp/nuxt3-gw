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
          <h1 class="product-title">综合布线</h1>
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
                结构化综合布线是将大厦中办公自动化、通信自动化、楼宇管理自动化综合成一个结构统一材料相同、统一管理的完整体系。它利用高品质的非屏蔽双绞线（UTP）取代传统的同轴电缆和专用线缆，解决了数据高速传输、降低线间串扰和电磁辐射干扰等难题。利用型号齐全的适配器，将弱电系统纳入到结构化综合布线系统中来。它的构成主要有：
              </p>
              <ul>
                <li>
                  （1）工作区布线：把终端设备连接到信息插座，一般是永久性的。
                </li>
                <li>
                  （2）水平布线子系统：从楼层配线架至各信息插座，包括信息插座、水平电缆（光缆）及其它在楼层配线架上的机械终端、插接软线和跳线。
                </li>
                <li>
                  （3）主干线系统：指设备间（主配线架）至配线间（楼层配线架）之间的主干电缆及配线设备。
                </li>
                <li>
                  （4）通信引出端（信息插座）：每个工作区宜设两个或两个以上的信息插座，其中最少有一个作为数据通信用。
                </li>
                <li>
                  （5）接口：每个布线子系统的端部都有相应的接口，用以连接有关的设备，如电话主机、主计算机、信息插座等。
                </li>
                <li>
                  （6）设备间：是安装网络进出线设备、互联设备、主机设备和保护设备的用房，应有足够的安装空间。应靠近弱电竖井设置。
                </li>
                <li>
                  （7）配线间（交换间）：每层配线间数量按与最远点信息插座的距离不大于75m配置。配线间内的设备为有源设备，就设电源插座（AC220V）。
                </li>
              </ul>
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
                src="@/assets/images/solution_line/solution-line.jpg"
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
