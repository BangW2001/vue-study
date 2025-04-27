import Vue from 'vue'
import App from './App.vue'
//1.导包
import VueRouter
 from 'vue-router'
Vue.config.productionTip = false

//2.注册
Vue.use(VueRouter)

//3.创建路由对象
import FindMusic from './views/FindMusic.vue'
import MyMusic from './views/MyMusic.vue'
import MyFriend from './views/MyFriend.vue'
const router = new VueRouter(
  {
    routes:[
      {path:"/find",component:FindMusic},
      {path:"/my",component:MyMusic},
      {path:"/friend",component:MyFriend}
    ]
  }
)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
