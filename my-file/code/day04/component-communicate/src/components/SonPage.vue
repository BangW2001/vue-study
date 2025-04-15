<template>
  <div>
    <h1>个人信息</h1>
    <p>姓名:{{ name }}</p>
    <p>年龄:{{ age }}</p>
    <p>汽车:{{ car.brand }},价格:{{ car.price }}</p>
    <p v-for="item,index in hobby" :key="index">兴趣:{{ item }}</p>
  </div>
</template>

<script>
export default {
  props:["name","age","car","hobby"]
}
</script>

<style>

</style>