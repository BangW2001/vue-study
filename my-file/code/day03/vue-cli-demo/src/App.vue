<template>
  <!--组件的结构代码-->
  <div class="father">
    <div class="son" @click="show">大的</div>
  </div>
</template>

<script>
//导出当前组件的配置项
//里面可以提供data、methods、computed、watch、生命周期钩子函数等
  export default{
    methods:{
      show(){
        alert("你点击了son div元素")
      }
    }
  }
</script>

<style>
  .father{
    width: 300px;
    height: 300px;
    background-color: blue;
  }
  .son{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>