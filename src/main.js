import Vue from 'vue'
import App from './App.vue'
import { init } from "@/core/Firebase.ts";

Vue.config.productionTip = false;

init();

new Vue({
  render: h => h(App),
}).$mount('#app');
