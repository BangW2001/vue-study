/*
webpack入口文件
核心作用：导入App.vue，基于App.vue创建结构渲染index.html
*/
//导入vue核心包
import Vue from 'vue'
//导入Vue根组件
import App from './App.vue'

import PageButton from './components/PageButton.vue'

Vue.config.productionTip = false

Vue.component("PageButton", PageButton)

//实例化Vue对象
new Vue({
  render: h => h(App),
}).$mount('#app') //.$mount()与el:这种写法的作用是一样的,都是指定Vue管理的容器
