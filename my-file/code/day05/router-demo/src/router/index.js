import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
//相对路径：如果层级较深，使用相对路径可能比较复杂
//绝对路径，在vue中，使用@可以指代src的绝对路径
import FindMusic from '@/views/FindMusic.vue'
import MyMusic from '../views/MyMusic.vue'
import MyFriend from '../views/MyFriend.vue'
const router = new VueRouter(
  {
    routes:[
      {path:"/find",component:FindMusic},
      {path:"/my",component:MyMusic},
      {path:"/friend",component:MyFriend}
    ]
  }
)
export default router