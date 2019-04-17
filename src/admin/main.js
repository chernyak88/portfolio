import Vue from 'vue';
import simpleVueValidator from 'simple-vue-validator';
import App from './App.vue';
import router from './router';
import store from './store';
import requests from './requests';

store.$axios = requests;

Vue.use(simpleVueValidator);

new Vue({
  el: "#app-root",
  render: h => h(App),
  router,
  store
});