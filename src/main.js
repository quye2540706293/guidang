import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
import * as echartsGL from 'echarts-gl' // 引入echarts
Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）
// import * as china from './map/js/china'
window.echarts = echarts
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
