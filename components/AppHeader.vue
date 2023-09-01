<script setup lang="ts">
import { ref } from "vue";
// import useRouter from 'vue-router'
import { navList } from "assets/js/publicConfig";
// const router = new useRouter()

// 当前选中的nav
const navCurrentIndex = ref(-1);
const isShowBg = ref(false);
const openNav = (i: number, item: any) => {
  navCurrentIndex.value = i;
  console.log(item);

  isShowBg.value = !!item?.children?.length;
  // if (!item?.children?.length) {
  //   window.location.hash = item.path
  // }
};
const closeNav = () => {
  console.log("aaa");
  navCurrentIndex.value = -1;
  isShowBg.value = false;
  console.log(navCurrentIndex.value);
};

// 监听路由变化
// watch(
//   () => router,
//   (to) => {
//     console.log(to)
//   },
//   { flush: 'pre', immediate: true, deep: true }
// )
</script>

<template>
  <div class="affix-placeholder">
    <header>
      <div class="h-navbar affix-top">
        <div class="logo">
          <img src="/images/header/logo.jpg" alt="超创信息" />
        </div>
        <MenuComp></MenuComp>
        <nav class="cc-navbar">
          <ul class="cc-navbar-ul">
            <li
              v-for="(item, index) in navList"
              :key="index"
              :class="[navCurrentIndex === index ? 'select' : '']"
              class="cc-navbar-li"
            >
              <div class="nav-title" @click.stop="openNav(index, item)">
                <!-- {{ item.title }} -->
                <template v-if="!item?.children?.length">
                  <nuxt-link :to="item?.path" class="nav-title-link">{{
                    item.title
                  }}</nuxt-link>
                </template>
                <template v-else>
                  {{ item.title }}
                </template>
                <span
                  v-if="item.children"
                  class="children-menu-icon iconfont icon-arrow-below"
                ></span>
              </div>
              <div v-if="item.children" class="nav-children">
                <div class="c-list">
                  <div
                    v-for="(child, c_index) in item.children"
                    :key="c_index"
                    class="c-title"
                  >
                    <template v-if="child?.children">
                      <div class="cc-title">{{ child.title }}</div>
                      <ul class="cc-list">
                        <li
                          v-for="(cc_item, cc_index) of child.children"
                          :key="cc_index"
                        >
                          <!-- {{ cc_item.title }} -->
                          <nuxt-link
                            :to="cc_item.path"
                            class="cc-link-a"
                            @click.native="closeNav"
                            >{{ cc_item.title }}</nuxt-link
                          >
                        </li>
                      </ul>
                    </template>

                    <nuxt-link
                      v-else
                      :to="child.path"
                      class="c-title-span"
                      @click.native="closeNav"
                      >{{ child.title }}</nuxt-link
                    >
                  </div>
                  <!-- <router-link
                    v-for="(child, index) in item.children"
                    :key="index"
                    :to="child.path"
                    >{{ child.title }}</router-link
                  > -->
                </div>
                <span
                  class="close-icon iconfont icon-close"
                  @click.stop="closeNav"
                ></span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div v-if="isShowBg" class="bg" @click.stop="closeNav"></div>
  </div>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
  z-index: 120;
  background-color: #fff;
  font-size: 1em;
  height: 100%;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  padding: 0 15px;
}
.affix-placeholder {
  height: 78px;
  position: sticky;
  top: 0;
  z-index: 1000;
  .affix-top {
    height: 100%;
    position: relative;
    border: none;
    margin-bottom: 0;
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 233px;
        height: 50px;
      }
    }
    .client-menu {
      display: none;
    }
    .cc-navbar {
      display: block;
      height: 100%;
      .cc-navbar-ul {
        display: flex;
        height: 100%;

        .cc-navbar-li {
          position: relative;
          .nav-title {
            cursor: pointer;
            display: flex;
            align-items: center;
            height: 100%;
            position: relative;
            padding: 0 26px;
            .nav-title-link {
              color: #333;
              text-decoration: none;
            }
            &:hover {
              .children-menu-icon {
                /* opacity: 1; */
                display: block;
              }
            }
            .children-menu-icon {
              font-size: 20px;
              /* opacity: 0; */
              display: none;
              position: absolute;
              right: 0px;
            }
          }
          .nav-children {
            width: 100%;
            padding: 30px 100px;
            background: #fff;
            position: fixed;
            left: 0;
            top: 78px;
            z-index: 1000;
            display: none;
            .c-list {
              display: flex;
              width: 70%;
              margin: auto;
              font-size: 19px;
              .c-title {
                flex: 1;
                padding: 0 20px;
                .c-title-span {
                  cursor: pointer;
                  color: #333333;
                }
                .cc-title {
                  padding-bottom: 8px;
                  border-bottom: 1px solid #d4d4d4;
                }
                .cc-list {
                  font-size: 0.9em;
                  margin-top: 6px;

                  li {
                    padding: 4px 0;
                    cursor: pointer;
                    .cc-link-a {
                      color: #333;
                      opacity: 0.8;
                    }
                  }
                }
              }
            }
            .close-icon {
              position: absolute;
              right: 90px;
              top: 3px;
              font-size: 30px;
              cursor: pointer;
            }
          }
        }
        .select {
          .nav-children {
            display: block;
          }
          /* &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #c7000b;
          } */
        }
      }
    }
  }

  .bg {
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

/* .navbar-toggle {
  margin-top: 16px;
  margin-bottom: 16px;
  width: 44px;
  height: 34px;
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;

  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  & > .icon-bar {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -11px;
    margin-top: 4px;
    background-color: #000;
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
  }
  & > .icon-bar:nth-child(2) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    margin-top: 0;
  }
  & > .icon-bar:nth-child(3) {
    opacity: 1;
  }
  & > .icon-bar:nth-child(4) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
  }
} */
/* @media (min-width: 1025px) {
  header .navbar {
    height: 78px;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 0;
    border-radius: 0;
    .nav-container {
      position: relative;
    }
    .container {
      width: 93.705%;
    }
  }
} */

@media screen and (max-width: 1024px) {
  .affix-placeholder {
    height: 66px;
    .bg {
      display: none;
    }
    .h-navbar {
      .logo {
        img {
          width: 151px;
          height: 30px;
        }
      }
      .client-menu {
        display: block;
      }
      .cc-navbar {
        display: none;
      }
    }
  }
}
</style>
