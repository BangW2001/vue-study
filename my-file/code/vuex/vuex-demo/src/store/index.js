import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  state: {
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    addCount (state, a) {
      state.count += a
    },
    subCount (state) {
      state.count -= 1
    },
    changeCount (state, num) {
      state.count = num
    }
  },
  actions: {
    setAsyncCount (contex, num) {
      setTimeout(() => {
        contex.commit('changeCount', num)
      }, 1000)
    }
  },
  getters: {
    filterList (state) {
      return state.list.filter((num) => num >= 5)
    }
  }
})

// 导出
export default store
