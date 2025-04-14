<template>
  <div>
    <div>父组件</div>
    <SonPage :message="message" @changeMsg="changeFunc"></SonPage>
  </div>
</template>

<script>
import SonPage from './components/SonPage.vue';
export default {
  components:{
    SonPage:SonPage
  },methods:{
    changeFunc(text){
      this.message=text
    }
  },
  data(){
    return {
      message:"该数据来源于父组件"
    }
  }
}
</script>

<style>

</style>