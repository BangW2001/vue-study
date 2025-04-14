<template>
  <div>
    <BasePageOne></BasePageOne>
    <BasePageTwo></BasePageTwo>
    <BaseCount></BaseCount>
    <BaseCount></BaseCount>
    <BaseCount></BaseCount>
  </div>
</template>

<script>
import BasePageOne from './components/BasePageOne.vue';
import BasePageTwo from './components/BasePageTwo.vue';
import BaseCount from './components/BaseCount.vue';
export default {
  components:{
    BasePageOne:BasePageOne,
    BasePageTwo:BasePageTwo,
    BaseCount:BaseCount
  }
}
</script>

<style>

</style>