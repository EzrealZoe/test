import Vue from 'vue';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from './App.vue'
import router from "./routes"
import md5 from 'js-md5'
import SERVICE_PATH from "./config";
import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";

stockInit(Highchart);
Vue.use(HighchartsVue);
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.use(ElementUI, {size:"small"});

Vue.config.productionTip = false
Vue.prototype.SERVICE_PATH = SERVICE_PATH;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  render: h => h(App),  // function(h){return h(App);}
}).$mount('#app')

