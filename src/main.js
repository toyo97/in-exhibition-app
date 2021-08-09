import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueQrcodeReader from "vue-qrcode-reader";

Vue.config.productionTip = false
Vue.use(VueQrcodeReader)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    obj: {
      user_name: null,
      curr_exhibit: 0
    }
  },
  mutations: {
    updateUserName (state, user_name) {
      state.obj.user_name = user_name
    },
    nextExhibit (state) {
      state.obj.curr_exhibit++
      console.log('state' + state.obj.curr_exhibit)
    }
  },
})

new Vue({
  router,
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')
