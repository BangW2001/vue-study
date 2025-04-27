---

---

# vue06

## 路由进阶

### 路由的封装剥离

如果关于路由的所有配置均写在`main.js`文件中是不合适的，将路由模块抽离出来，更利于后期的维护

**具体操作**

**①抽取路由配置代码**

新建`src/router/index.js`文件，在其中编写路由配置代码

**②引入**

在`main.js`文件中，引入路由对象并注入到`vue`实例

```js
import router from './router/index.js'

new Vue({
    render:h=>h(App),
    router
}).$mount("#app")
```

**实例**

`router/index.js`

```js
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
```

`main.js`

```vue
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router/index.js"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```





























