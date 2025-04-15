<template>
  <div>
    <SonPage :name="name"
    :age="age"
    :car="car"
    :hobby="hobby"></SonPage>
  </div>
</template>

<script>
import SonPage from './components/SonPage.vue';
export default {
  components:{
    SonPage:SonPage
  },
  data(){
    return {
      name:"张三",
      age:27,
      car:{
        brand:"宝马",
        price:"35w"
      },
      hobby:["篮球","足球","排球"]
    }
  }
}
</script>

<style>

</style>