<template>
  <div>
    <div class="tab-container">
      <!-- <div class="tab active"><a href="#/find">发现音乐</a></div>
      <div class="tab"><a href="#/my">我的音乐</a></div>
      <div class="tab"><a href="#/friend">朋友</a></div> -->
      <router-link to="/find" class="tab">发现音乐</router-link>
      <router-link to="/my" class="tab">我的音乐</router-link>
      <router-link to="/friend" class="tab">我的朋友</router-link>
    </div>
    <div class="tab-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tab-container {
  display: flex;
  background-color: #333;
  width: 60%;
  margin: 30px auto;
}
.tab {
  flex: 1;
  padding: 10px;
  text-align: center;
  color: white;
  cursor: pointer;
}
.active {
  background-color: #444;
}
a {
  all: unset;
}
.tab-content {
  width: 60%;
  font-size: 50px;
  font-weight: 700;
  color: red;
  margin: 20px auto;
  text-align: center;
}
.active {
  background-color: rebeccapurple;
}
</style>