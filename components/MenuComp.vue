<script setup lang="ts">
import { ref } from "vue";
import { navList } from "assets/js/publicConfig";
const isClose = ref(false);
const navbarToggle = () => {
  isClose.value = !isClose.value;
  if (isClose.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    childrenMenuStatus.value = false;
  }
};

const jumpPage = (param: any) => {
  console.log(param);
  if (param?.children?.length) {
    childrenMenu.value = param.children;
    childrenMenuStatus.value = true;
  }
};

// 子菜单
const childrenMenu = ref();
const childrenMenuStatus = ref(false);
const backMenu = () => {
  childrenMenuStatus.value = false;
};
</script>

<template>
  <div class="client-menu">
    <button
      class="navbar-toggle"
      :class="{ 'navbar-close': isClose }"
      @click="navbarToggle"
    >
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>

    <!-- 移动端菜单 -->
    <div class="fluid-container" :class="{ 'show-fluid': isClose }">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          @click="jumpPage(item)"
        >
          <div class="menu-item">
            <template v-if="item?.path">
              <nuxt-link
                class="nav-link-style no-children-menu"
                :to="item.path"
                @click.native="navbarToggle"
                >{{ item.title }}</nuxt-link
              >
            </template>
            <template v-else>
              <div class="children-menu">
                <div>
                  {{ item.title }}
                </div>
                <span class="iconfont icon-arrow-right"></span>
              </div>
            </template>
          </div>
        </li>
      </ul>
    </div>

    <!-- 子菜单 -->
    <div
      class="fluid-container fluid-container-children"
      :class="{ 'show-fluid': isClose && childrenMenuStatus }"
    >
      <div class="back-menu" @click="backMenu">
        <span class="iconfont icon-back-arrow"></span>返回主菜单
      </div>
      <ul>
        <li
          v-for="(item, index) in childrenMenu"
          :key="index"
          @click="jumpPage(item)"
        >
          <div class="menu-item">
            <template v-if="item?.path">
              <nuxt-link
                class="nav-link-style no-children-menu"
                :to="item.path"
                @click.native="navbarToggle"
                >{{ item.title }}</nuxt-link
              >
            </template>
            <template v-else>
              <div class="children-menu">
                <div>
                  {{ item.title }}
                </div>
                <span class="iconfont icon-arrow-right"></span>
              </div>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.client-menu {
  position: relative;

  .fluid-container {
    position: fixed;
    top: 66px;
    right: -100vw;
    width: 100vw;
    height: 100vh;
    background: #f2f2f2;
    /* opacity: 0; */
    transition: all 0.3s ease-in-out;
    ul {
      padding: 15px 15px 0 15px;
      li {
        /* margin: 0 15px; */
        border-bottom: 1px solid #d4d4d4;

        cursor: pointer;
        .menu-item {
          display: flex;
          .no-children-menu {
            padding: 20px 0;
            width: 100%;
          }
          .children-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            flex: 1;
            .icon-arrow-right {
              font-size: 20px;
            }
          }
        }
      }
    }
  }

  .fluid-container-children {
    .back-menu {
      padding: 15px 15px 0 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        font-size: 22px;
        transform: rotate(180deg);
        display: block;
        padding: 0 3px;
      }
    }
  }
  .show-fluid {
    /* opacity: 1; */
    /* width: 100vw; */
    right: 0;
  }

  .navbar-toggle {
    width: 44px;
    height: 34px;
    position: relative;
    padding: 9px 10px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    .icon-bar {
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
      background-color: #000;
      margin-top: 4px;
    }
    & > .icon-bar:nth-child(1) {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      transform: rotate(0);
      margin-top: 0;
    }
    & > .icon-bar:nth-child(2) {
      opacity: 1;
    }
    & > .icon-bar:nth-child(3) {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      transform: rotate(0);
    }
  }
  .navbar-close {
    .icon-bar {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -11px;
      margin-top: -1px !important;
      background-color: #000;
    }
    & > .icon-bar:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
    }
    & > .icon-bar:nth-child(2) {
      opacity: 0;
    }
    & > .icon-bar:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }
}
</style>
