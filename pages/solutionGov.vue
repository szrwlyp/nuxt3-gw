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
          <h1 class="product-title">电子政务解决方案</h1>
          <div></div>
        </div>
        <div class="main-profile">
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_gov/icon-01.jpg" alt="" />
              <h4 class="title">概述</h4>
            </div>
            <div class="main-profile-contnt">
              <p>
                近年来，各级政府对电子政务建设的关注程度、投资水平和推进力度都在不断加强，电子政务正在成为政府职能从管理型政府向服务型政府转变的一个重要组成部分；
              </p>
              <p>
                电子政务协同办公平台的建设，是促进党政机关效能建设，提高党政机关行政管理能力和公共服务水平的客观需要，是党政机关利用信息化手段科学发展的必由之路。
              </p>
            </div>
          </div>

          <!-- 总体架构 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_gov/icon-02.jpg" alt="" />
              <h4 class="title">总体结构</h4>
            </div>
            <div class="main-profile-contnt">
              <img src="@/assets/images/solution_gov/solution-gov.jpg" alt="" />
            </div>
          </div>

          <!-- 功能特点 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_gov/icon-03.jpg" alt="" />
              <h4 class="title">功能特点</h4>
            </div>
            <div class="main-profile-contnt">
              <p class="function-p">
                ·
                流程表单：各单位用户可根据需要自定义收发文办理、请示、汇报、审批等业务流程及表单，流程、表单设计均以可视化方式进行；
              </p>
              <p class="function-p">
                ·
                留痕批注：可对公文进行编辑、圈阅划线、全文批注，并可保留修改痕迹；
              </p>
              <p class="function-p">
                · 原 笔
                迹：可用手机、平板电脑、手写板等作为手写设备，圈阅划线、全文批注、签批、签名均具原笔迹效果；
              </p>
              <p class="function-p">
                · 业务协同：跨地区、跨部门和跨层级业务协同，内部公文自动交换；
              </p>
              <p class="function-p">
                ·
                公文套打：可自定义公文模板、红头格式，可选公文模板进行公文套打；
              </p>
              <p class="function-p">
                ·
                功能丰富：不仅提供公文办理功能，还提供了重大项目督察督办、会议管理、绩效管理、领导行程、车辆管理、信息报送、简报管理等功能；
              </p>
              <p class="function-p">
                ·
                安全可靠：静态密码、动态口令、短信密码、U-KEY、IP限制、设备绑定等多种身份认证方式，重要信息加密储存、传输，严格精细授权体系；
              </p>
              <p class="function-p">
                ·
                移动办公：待办事项、催督办、邮件信息、日程提醒、会议通知等消息通过移动终端实时推送，办公无时无处不在。
              </p>
            </div>
          </div>

          <!-- 客户价值 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_gov/icon-04.png" alt="" />
              <h4 class="title">客户价值</h4>
            </div>
            <div class="main-profile-contnt">
              <ul>
                <li>
                  优化流程、缩短审批周期，完善监督考核机制，提升行政效能；
                </li>
                <li>积极推行信息公开，提高信息透明度，提高公众服务质量；</li>
                <li>打造绿色政务，落实节能减排。</li>
              </ul>
            </div>
          </div>

          <!-- 典型客户 -->
          <div class="main-profile-item">
            <div class="main-profile-title">
              <img src="@/assets/images/solution_gov/icon-05.jpg" alt="" />
              <h4 class="title">典型客户</h4>
            </div>
            <div class="main-profile-contnt">
              <ul>
                <li>广西区党委网络安全和信息化委员会</li>
                <li>南宁市人大常委会</li>
                <li>南宁市人民政府</li>
                <li>南宁市青秀区人民政府</li>
                <li>南宁市西乡塘区人民政府</li>
                <li>南宁市江南区人民政府</li>
                <li>南宁市良庆区人民政府</li>
                <li>南宁市兴宁区人民政府</li>
                <li>南宁市武鸣区人民政府</li>
                <li>南宁市马山县人民政府</li>
                <li>南宁市上林县人民政府</li>
                <li>南宁市横县人民政府</li>
                <li>南宁市隆安县人民政府</li>
                <li>南宁市宾阳县人大常委会</li>
                <li>南宁市武鸣区人大常委会</li>
                <li>广西无线电管理局</li>
                <li>崇左市宁明县人民政府</li>
                <li>河池市宜州区人民政府</li>
                <li>河池市大化县人民政府</li>
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
          color: #ee7e12;
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
