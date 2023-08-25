<template>
  <div>
    <!-- 头部组件 -->
    <AppHeader />

    <!-- 主体内容 -->
    <div class="main">
      <slot />
    </div>

    <!-- 底部组件 -->
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.main {
  /* width: 1200px; */
  margin: 0 auto;
  font-size: 16px;
  min-height: calc(100vh - 257px);
}
@media screen and (max-width: 768px) {
  .main {
    font-size: 15px;
  }
}
</style>
