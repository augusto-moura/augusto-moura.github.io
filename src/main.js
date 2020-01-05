try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	require('bootstrap');
} catch (e) { ;}

require('@fortawesome/fontawesome-free');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import SoftwareDevelopment from './components/pages/SoftwareDevelopment'
import Games from './components/pages/Games'

Vue.config.productionTip = false

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue router
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/development', component: SoftwareDevelopment },
		{ path: '/games', component: Games }
	]
})

//Vue app
new Vue({
	render: h => h(App),
	router
}).$mount('#app')