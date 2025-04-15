<template>
  <div>
    <div v-if="isShow">
      <input type="text" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <button @click="show">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      this.$nextTick(() => {
        this.$refs.inp.focus();
      });
    },
  },
};
</script>

<style>
</style>