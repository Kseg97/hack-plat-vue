import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadScript from 'vue-plugin-load-script';

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(LoadScript);
Vue.loadScript("https://meet.jit.si/external_api.js")
  .then(() => {
    console.log("Cargado")
  })
  .catch(() => {
    // Failed to fetch script
  });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
