<template>
  <div>
    <div>子组件接收的数据:{{ message }}</div>
    <button @click="handleChange">改变接收数据内容</button>
  </div>
</template>

<script>
export default {
  props:["message"],
  methods:{
    handleChange(){
      //$emit出发事件，会给父组件发送对应的消息通知
      this.$emit("changeMsg","子组件改变后的内容")
    }
  }
}
</script>

<style>

</style>