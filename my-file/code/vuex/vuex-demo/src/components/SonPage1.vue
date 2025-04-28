<template>
<div class="container">
    <div class="title">Son1 子组件</div>
    <div class="content">
    从vuex中获取的值:{{ count }}
    <br/>
    <button class="value" @click="addCount(100)">值 + 1</button>
    <button class="value" @click="setAsyncCount(30000)">1秒钟之后将count改为666</button>
    </div>
    <div>{{ filterList }}</div>
</div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['filterList'])
  },
  methods: {
    ...mapMutations(['addCount', 'subCount']),
    ...mapActions(['setAsyncCount'])
  }
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
