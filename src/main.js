import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup,Icon,Button,Toast,Dialog,Loading,Field,Form,Col,Row,RadioGroup,Radio,Cell, CellGroup } from "vant";
import VueCookies from 'vue-cookies'
import 'vant/lib/index.css'
import axios from 'axios'
Vue.prototype.$axios= axios

Vue.prototype.baseUrl = 'http://121.236.175.64:3000/users'
// Vue.prototype.baseUrl = 'http://192.168.5.134:3000/users'

Vue.use(VueCookies)

Vue.use(Popup);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Field);
Vue.use(Form);
Vue.use(Col);
Vue.use(Row);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell);
Vue.use(CellGroup);

import './assets/self.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
