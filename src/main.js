import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Create a new Vue instance and mount it to the DOM element with the ID 'app'
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
