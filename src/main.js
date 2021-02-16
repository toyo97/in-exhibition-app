import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    obj: {
      user_name: null
    }
  },
  mutations: {
    updateUserName (state, user_name) {
      state.obj.user_name = user_name
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
