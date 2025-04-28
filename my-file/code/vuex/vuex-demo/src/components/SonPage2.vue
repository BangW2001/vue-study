<template>
  <div class="container">
    <div class="title">Son2 子组件</div>
    <div class="content">
      从vuex中获取的值: {{ $store.state.count }}
      <br/>
      <button class="value" @click="$store.commit('subCount')">值 - 1</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style>
.container {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 20px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.content {
  font-size: 16px;
  margin-bottom: 10px;
}
.value {
  border: 1px solid #ccc;
  padding: 5px;
  display: inline-block;
}
</style>
