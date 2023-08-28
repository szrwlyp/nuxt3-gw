<script setup lang="ts"></script>

<template>
  <div class="solution-npc">
    <div class="item-1">
      <h1>县区人大履职平台</h1>
      <div class="item-content">
        根据广西壮族自治区人大常委会办公厅《关于加强全区人大代表联系人民群众履职平台建设的指导意见》（桂人办发[2017]75号）
        的综合要求以信息资源为核心，信息网络为载体，建立和完善人大代表履职平台，推动新媒体的应用，协助代表联系群众，做好人大信访工作，及时了解社情民意，反映老百姓的愿望和诉求，更好地发挥人大的监督作用。
      </div>
    </div>

    <div class="item-2">
      <img src="@/assets/images/solution_npc/bg2.png" alt="" />
    </div>

    <div class="item-3">
      <h2 class="item-3-title">功能特色</h2>
      <div class="item-3-content function-1">
        <div class="item-area">
          <div class="area-c">
            <img
              class="area-img"
              src="@/assets/images/solution_npc/weifuwu.png"
              alt=""
            />
            <div class="area-item-1">微服务</div>
            <div class="area-item-2">
              基于先进的微服务框架建设，以最小的服务单元组成自治且完整的服务场景，通过可重用的和弹性的服务快速构建上层业务应用。
            </div>
          </div>
          <div class="area-c">
            <img
              class="area-img"
              src="@/assets/images/solution_npc/kuapingtai.png"
              alt=""
            />
            <div class="area-item-1">跨平台</div>
            <div class="area-item-2">
              基于SOA架构，跨平台设计，支持集中式或分布式部署，运行性能卓越。
            </div>
          </div>
          <div class="area-c">
            <img
              class="area-img"
              src="@/assets/images/solution_npc/anquanbaozhang.png"
              alt=""
            />
            <div class="area-item-1">安全保障</div>
            <div class="area-item-2">
              设备绑定、CA认证、唯一身份认证等多重安全保障，做到终端安全、传输安全、应用安全。
            </div>
          </div>
        </div>
        <div class="fn1-img">
          <img src="@/assets/images/solution_npc/picright.png" alt="" />
        </div>
      </div>
      <div class="item-3-content function-2">
        <div class="fn1-img">
          <img src="@/assets/images/solution_npc/picleft.png" alt="" />
        </div>
        <div class="item-area">
          <div class="area-c">
            <img
              class="area-img"
              src="@/assets/images/solution_npc/weifuwu.png"
              alt=""
            />
            <div class="area-item-1">全终端体验</div>
            <div class="area-item-2">
              PC、平板、智能手机等终端的一致性体验。
            </div>
          </div>
          <div class="area-c">
            <img
              class="area-img"
              src="@/assets/images/solution_npc/kuapingtai.png"
              alt=""
            />
            <div class="area-item-1">业务集成</div>
            <div class="area-item-2">
              让所有功能在一台手机上展现，让用户可以充分利用会议、出差、在家等自由时间处理工作事宜。
            </div>
          </div>
          <div class="area-c">
            <img
              class="area-img"
              src="@/assets/images/solution_npc/anquanbaozhang.png"
              alt=""
            />
            <div class="area-item-1">消息推送</div>
            <div class="area-item-2">
              各类业务使用统一消息发送接口完成消息的多渠道、多终端推送（邮件、短信、APP、微信等），全面提高消息的有效性、时效性。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-4">
      <h2 class="item-4-title">典型案例</h2>
      <div class="example">
        <h3>南宁市人大综合管理信息平台</h3>
        <p>
          南宁市人大综合管理信息平台是以先进的信息技术，依托南宁市电子政务内网，建设集门户网站、办公自动化、人大代表服务、议案建议管理、立法管理、监督管理、信访信息管理、会议审议为一体的一站式信息平台。对内为南宁市人大各部门提供一个信息共享畅通的业务处理平台，对外为人大代表之间，广大民众与人大代表、各级领导之间提供交流的平台。
        </p>
      </div>
      <img
        class="item-4-img"
        src="@/assets/images/solution_npc/display.png"
        alt=""
      />
    </div>
    <div class="item-5">
      <img src="@/assets/images/solution_npc/bg4.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin h2-title($color) {
  color: $color;
  font-size: 3em;
  width: 390px;
  margin: 0 auto 50px auto;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}
.solution-npc {
  /* width: 1200px; */
  width: 100%;
  .item-1 {
    width: 100%;
    height: 643px;

    background: url("@/assets/images/solution_npc/bg1.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    position: relative;
    h1 {
      color: #ab3613;
      font-size: 3.5em;
      position: absolute;
      top: 18%;
    }
    .item-content {
      width: 67%;
      position: absolute;
      top: 39%;
      font-size: 1.4em;
      line-height: 1.7em;
      padding: 20px;
      text-indent: 2em;
      color: #ac5005;
    }
  }
  .item-2 {
    img {
      width: 100%;
    }
  }

  .item-3 {
    padding: 40px 0;
    .item-3-title {
      background: url("@/assets/images/solution_npc/titlebg2.png") no-repeat;

      @include h2-title(#3072e7);
    }
    .function-1 {
      grid-template-columns: 500px 1fr;
    }
    .function-2 {
      grid-template-columns: 1fr 500px;
    }
    .item-3-content {
      width: 1300px;
      margin: 0 auto;
      display: grid;

      grid-column-gap: 30px;
      .item-area {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .area-c {
          height: 122px;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-column-gap: 30px;
          .area-img {
            grid-area: 1 / 1 / span 2 / auto;
            /* height: 100%; */
          }
          .area-item-1 {
            color: #4776cd;
            font-size: 30px;
            font-family: "Source Han Sans CN";
            font-weight: 600;
            align-self: center;
          }
          .area-item-2 {
            font-size: 16px;
            color: #4776cd;
            text-align: justify;
          }
        }
      }
    }
  }

  .item-4 {
    padding: 40px 0;
    background: url("@/assets/images/solution_npc/bg3.png") no-repeat;
    background-size: 100% 100%;
    .item-4-title {
      background: url("@/assets/images/solution_npc/titlebg3.png") no-repeat;

      @include h2-title(#fff);
    }
    .example {
      width: 1050px;
      margin: auto;
      background-color: rgba(172, 244, 245, 0.1);
      border-radius: 20px;
      border: 1px solid #fff;
      margin-top: 30px;
      h3 {
        /* width: 430px; */
        /* margin: ; */
        font-size: 32px;
        color: white;
        font-weight: normal;
        line-height: 72px;
        text-align: center;
      }
      p {
        width: 1000px;
        margin: auto;
        text-align: justify;
        color: white;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }
    .item-4-img {
      width: 45%;
      margin: auto;
      display: block;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
  .item-5 {
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .solution-npc {
    .item-1 {
      height: 500px;
      h1 {
        font-size: 2.7em;
      }
      .item-content {
        font-size: 1.1em;
      }
    }
    .item-3 {
      .item-3-title {
        font-size: 2em;
        width: 300px;
      }
      .item-3-content {
        width: 100%;
        padding: 15px;
        grid-column-gap: 20px;

        .item-area {
          .area-c {
            height: 100px;
            grid-column-gap: 20px;
            .area-img {
              width: 70px;
            }
            .area-item-1 {
              font-size: 1.5em;
            }
            .area-item-2 {
              font-size: 1em;
            }
          }
        }
        .fn1-img {
          img {
            width: 100%;
          }
        }
      }
      .function-1 {
        grid-template-columns: 400px 1fr;
      }
    }

    .item-4 {
      .item-4-title {
        font-size: 2em;
        width: 300px;
        margin: 0 auto 30px auto;
      }
      .example {
        width: 90%;
        padding: 15px;
        h3 {
          font-size: 1.7em;
          text-align: center;
        }
        p {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .solution-npc {
    .item-1 {
      height: 300px;
      h1 {
        font-size: 1.6em;
        top: 16%;
      }
      .item-content {
        font-size: 0.7em;
        padding: 0;
      }
    }
    .item-3 {
      padding: 20px 0;
      .item-3-title {
        font-size: 1.5em;
        width: 58%;
        margin: 0 auto;
      }
      .item-3-content {
        width: 100%;
        padding: 15px;
        grid-column-gap: 20px;

        .item-area {
          .area-c {
            height: auto;
            grid-column-gap: 20px;
            padding: 10px 0;
            .area-img {
              width: 70px;
            }
            .area-item-1 {
              font-size: 1.2em;
            }
            .area-item-2 {
              font-size: 0.9em;
            }
          }
        }
        .fn1-img {
          /* grid-area: b; */
          img {
            width: 100%;
            margin-top: 10px;
            padding: 30px;
          }
        }
      }
      .function-1,
      .function-2 {
        grid-template-columns: 1fr;
      }
      .function-2 {
        grid-template-areas:
          "a"
          "b";
        .item-area {
          grid-area: a;
        }
        .fn-img {
          grid-area: b;
        }
      }
    }

    .item-4 {
      padding: 20px 0;
      .item-4-title {
        font-size: 1.5em;
        width: 58%;
        margin: 0 auto;
      }
      .example {
        width: 90%;
        padding: 15px;
        margin-top: 10px;
        h3 {
          font-size: 1.3em;
          text-align: center;
        }
        p {
          width: 100%;
        }
      }
      .item-4-img {
        width: 90%;
      }
    }
  }
}
</style>
