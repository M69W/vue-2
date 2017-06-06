/**
 * Created by zzq on 2017/6/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    // 这是注册的一个突变方法，通过在组件的methods里触发这个方法来执行相关数据改变
    updateLoadingStatus (state, payload) {
      console.log(payload.isLoading)
      state.isLoading = payload.isLoading
    }
  }
})