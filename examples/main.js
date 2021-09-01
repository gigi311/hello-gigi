import Vue from 'vue'
import App from './App.vue'



// 导入组件库
import demo from '../packages/index';
import '../lib/css/index.css'
// 注册组件库
Vue.use(demo);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
