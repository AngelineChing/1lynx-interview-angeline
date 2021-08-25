import Vue from "vue";
import VueSimpleAlert from "vue-simple-alert";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueSimpleAlert);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
