<script setup lang="ts">
import { footerNavList } from "assets/js/publicConfig";
</script>

<template>
  <footer class="footer">
    <div class="footer-nav">
      <ul class="nav-ul">
        <li v-for="(item, index) in footerNavList" :key="index">
          <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
        </li>
      </ul>
      <div class="contact">
        <div class="contact-phone">
          <span class="iconfont icon-phone phone"></span>
          <!-- <img
            src="https://www.chaochuang.com.cn/style/images/icon-phone.png"
            alt=""
          /> -->
          <div>400-070-7770</div>
        </div>
        <span style="margin: 0 16px">|</span>
        <div class="contact-weixin iconfont icon-weixin">
          <img src="@/assets/images/weixin.png" alt="" />
        </div>
        <!-- <img
          src="https://www.chaochuang.com.cn/style/images/wechat-default.png"
          alt=""
          class="contact-weixin icon-weixin"
        /> -->
      </div>
    </div>
    <div class="copy">
      <ul class="list-unstyled">
        <li>
          <nuxt-link to="/legalNotices">法律声明</nuxt-link>
        </li>
        <li>隐私保护</li>
      </ul>
      <span class="center-gap">|</span>
      <div class="copy-text">版权所有 © 2016 南宁超创信息工程有限公司</div>
      <div>ICP 备案号: 桂B2-20030001</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #f2f2f2;
  font-size: 16px;
  .footer-nav {
    color: #595757;
    padding: 40px 0;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .nav-ul {
      display: flex;
      font-size: 1.1em;
      align-items: center;
      flex: 1;
      li {
        padding-right: 50px;
        cursor: pointer;
      }
    }
    .contact {
      display: flex;
      align-items: center;
      position: relative;
      .contact-phone {
        display: flex;
        align-items: center;
        .phone {
          font-size: 27px;
          margin-right: 4px;
        }
        /* img {
          width: 30px;
          height: 30px;
        } */
      }
      .contact-weixin {
        /* width: 30px;
        height: 30px; */
        font-size: 30px;
        position: relative;
        cursor: pointer;
        img {
          position: absolute;
          top: -166px;
          left: -53px;
          display: none;
          z-index: 100;
        }
        &:hover {
          img {
            display: block;
          }
        }
      }
    }
  }
  .copy {
    background: #e6e6e6;
    color: #666;
    display: flex;
    padding: 23px;
    justify-content: center;
    font-size: 0.9em;
    .center-gap {
      margin: 0 30px;
    }
    .copy-text {
      margin-right: 20px;
    }
    .list-unstyled {
      display: flex;
      li {
        padding: 0 10px;
        cursor: pointer;
        a:hover {
          color: #000;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .footer {
    .footer-nav {
      width: 90%;
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    font-size: 15px;
    .footer-nav {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0;
      .nav-ul {
        width: 100%;
        justify-content: space-evenly;
        li {
          padding: 0;
        }
      }
      .contact {
        margin-top: 10px;
      }
    }
    .copy {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .center-gap {
        display: none;
      }
      .copy-text {
        margin-top: 10px;
      }
    }
  }
}
</style>
