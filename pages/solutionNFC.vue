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
      <h1>功能特色</h1>
      <div class="item-3-content">
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
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    .item-3-content {
      width: 1300px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .item-area {
        .area-c {
          height: 122px;
          display: grid;
          grid-template-columns: auto 1fr;
          .area-img {
            grid-area: 1 / 1 / span 2 / auto;
            height: 100%;
          }
          .area-item-1 {
            color: #4776cd;
            font-size: 30px;
            font-family: "Source Han Sans CN";
            font-weight: 600;
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
}
</style>
