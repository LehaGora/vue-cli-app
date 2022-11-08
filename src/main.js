import Vue from 'vue';
import App from './App.vue';

// import { message1, message2 } from './data';
// import showMessage from './function';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// showMessage(message1);
// showMessage(message2);
