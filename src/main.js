import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem,
} from '@fortawesome/free-solid-svg-icons';
import {
  faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/main.css';

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch('oauth/getToken', null, { root: true });
    },
  },
  created() {
    this.init();
  },
  render: (h) => h(App),
}).$mount('#app');
