<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="./assets/logohm.png" alt="Logo" width="50" height="50" />
        <span>黑马程序员</span>
      </div>
    </div>

    <div class="search-bar">
      <input type="text" placeholder="请输入搜索内容" v-model="queryWord" />
      <input type="submit" value="搜索一下" @click="search" />
    </div>

    <div class="hot-search">
      热门搜索：
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryWord: "",
    };
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.queryWord}`);
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  width: 60%;
  margin: 10px auto;
}
.header {
  text-align: center;
  margin-top: 20px;
}
.logo {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
.search-bar {
  text-align: center;
  margin: 20px 0;
}
.search-bar input[type="text"] {
  width: 60%;
  padding: 10px;
  font-size: 16px;
}
.search-bar input[type="submit"] {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #d9534f;
  color: white;
  border: none;
  cursor: pointer;
}
.hot-search {
  text-align: center;
  margin-bottom: 20px;
}
.hot-search a {
  margin: 0 5px;
  color: #d9534f;
  text-decoration: none;
  border: 1px solid #d9534f;
  padding: 5px 10px;
  border-radius: 5px;
}
.content {
  margin: 30px auto;
  width: 40%;
  text-align: center;
}
</style>