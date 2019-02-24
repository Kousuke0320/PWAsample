import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase'
import './plugins/element.js'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAws5lL5NYm9H2DgqBIKXVyJQD_2fSNC20",
  authDomain: "pwasample-be099.firebaseapp.com",
  databaseURL: "https://pwasample-be099.firebaseio.com",
  projectId: "pwasample-be099",
  storageBucket: "pwasample-be099.appspot.com",
  messagingSenderId: "800689052756"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
