<template>
  <div class="app">
    <MyHeader></MyHeader>
    <MyMain></MyMain>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components:{
    MyHeader:PageHeader,
    MyMain:PageMain,
    MyFooter:PageFooter
  }
}
</script>

<style>
  .app{
    margin: 10px auto;
    padding: 50px;
    width: 600px;
    height: 500px;
    background-color: aqua;
    text-align: center;
  }
</style>