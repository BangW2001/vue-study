<!--页面头部组件-->
<template>
  <div class="header">头部
    <PageButton></PageButton>
  </div>
</template>

<script>
import PageButton from './PageButton.vue'
export default {
  components: { PageButton },

}
</script>

<style>
  .header{
    height: 100px;
    background-color: blueviolet;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: white;
    font-weight: 700;
  }
</style>