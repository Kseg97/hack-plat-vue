import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase"
//import store from "./store"



Vue.config.productionTip = false;

const configOptions = {
 apiKey: "AIzaSyCzxSQRfPJe7qEFezxEqQLLqyl4HREdsY8",
    authDomain: "hackton1-feb5a.firebaseapp.com",
    databaseURL: "https://hackton1-feb5a.firebaseio.com",
    projectId: "hackton1-feb5a",
    storageBucket: "hackton1-feb5a.appspot.com",
    messagingSenderId: "263232920246",
    appId: "1:263232920246:web:652ea0dd23d22cdce56417",
    measurementId: "G-H2J1S2G3F6"
};

firebase.initializeApp(configOptions);


import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
