// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import * as echarts from 'echarts'
// import NormailizeCss from 'normalize.css'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

// let axios = require('axios')
Vue.prototype.$axios = axios
axios.defaults.baseURL='/api';  //设置一个类似base_url的请求路径
// global.axios=axios;  //设置一个全局axios便于调用
// axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)
// Vue.use(echarts)
Vue.prototype.$echarts = echarts
// Vue.component('icon', Icon)
axios.defaults.headers.post['Content-Type'] = 'application/json';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
