<template>
  <div>
    <div class="button-container">
      <div class="button" @click="number--">-</div>
      <div class="number">{{ number }}</div>
      <div class="button" @click="number++">+</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      number:100
    }
  }
}
</script>
<style scoped>
  .button-container {
    display: flex;
    align-items: center;
  }

  .button {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;
    background-color: #f0f0f0;
  }

  .number {
    font-size: 20px;
    margin: 0 10px;
  }
</style>