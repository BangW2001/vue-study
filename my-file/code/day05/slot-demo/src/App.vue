<template>
  <div>
    <BasePage>
      <template #slot1>插槽1填充内容</template>
      <template #slot2><button>插槽2按钮</button></template>
    </BasePage>
  </div>
</template>

<script>
import BasePage from './components/BasePage.vue';
export default {
  components:{
    BasePage
  }
}
</script>

<style>

</style>