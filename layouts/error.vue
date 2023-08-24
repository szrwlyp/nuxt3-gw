<template>
  <div class="container">
    <div class="jz-flex">
      <h1 v-if="error.statusCode === 404">页面不存在</h1>
      <h1 v-else>应用发生错误异常</h1>
      <nuxt-link class="back-home" to="/">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  props: ['error'], // 你可以为错误页面指定自定义的布局
}
</script>
<style scoped lang="scss">
.container {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .jz-flex {
    .back-home {
      padding: 10px 30px;
      border: 1px solid #000;
      cursor: pointer;
    }
  }
}
</style>
