// 导入Vue构造函数
import Vue from 'vue'
// 从node_modules加载的，类似于reset.css
import 'normalize.css/normalize.css'
// 引入element-ui 组件
import ElementUI from 'element-ui'
// 引入element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入 样式文件
import '@/styles/index.scss' // global css
// 引入app根组件
import App from './App'
// 引入 Vuex
import store from './store'
// 引入router
import router from './router'

// 注册svg
import '@/icons'

// 把element ui中导出的所有组件 注册成全局组件 项目中直接可以使用
Vue.use(ElementUI)

// 上线之后 有警告要不要展示，false不展示，有警告会被别人看到用什么技术栈开发的
Vue.config.productionTip = false

// vue实例化
new Vue({
  // el 挂载到id为app的div里面
  el: '#app',
  // 注入router 和store实例 方便在项目中使用this.$router this.$store
  router,
  store,
  // 根据app组件渲染样式
  render: h => h(App)
})
