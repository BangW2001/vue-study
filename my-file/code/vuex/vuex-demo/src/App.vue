<template>
  <div>
    <h2>根组件</h2>
    <input type="text"/>
    <SonPage1></SonPage1>
    <SonPage2></SonPage2>
  </div>
</template>

<script>
import SonPage1 from './components/SonPage1.vue'
import SonPage2 from './components/SonPage2.vue'
export default {
  components: {
    SonPage1,
    SonPage2
  },
  created () {
    console.log(this.$store)
  }
}
</script>

<style>

</style>
