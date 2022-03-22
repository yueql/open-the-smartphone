import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//markdown 文本编辑器引入
// import Vditor from 'Vditor'
// import 'vditor/dist/index.css'
// Vue.use(Vditor)
Vue.use(ElementUI)
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})
