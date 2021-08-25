import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// import EditProfile from "./components/EditProfile";
// import DisplayUsers from "./components/DisplayUsers";

Vue.config.productionTip = false;

// Navigation route
Vue.use(VueRouter);

// const edit = { template: <EditProfile /> };
// const display = { template: <DisplayUsers /> };

// const routes = [
//   { path: "/EditProfile", component: edit },
//   { path: "/DisplayUsers", component: display },
// ];

// const router = new VueRouter({
//   routes, // short for `routes: routes`
// });

// new Vue({
//   vuetify,
//   router,
//   render: (h) => h(App),
// }).$mount("#app");

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
