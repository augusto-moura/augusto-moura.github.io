try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	require('bootstrap');
} catch (e) { ;}

require('@fortawesome/fontawesome-free');

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import SoftwareDevelopment from './components/pages/SoftwareDevelopment'
import Games from './components/pages/Games'
import Speedrun from './components/pages/Speedrun'
import JoiasDoPassado from './components/pages/JoiasDoPassado'
import JoiasListaJogos from './components/pages/JoiasListaJogos'
import FanGames from './components/pages/FanGames'

Vue.config.productionTip = false

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue router
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/development', component: SoftwareDevelopment },
		{ path: '/games', component: Games },
		{ path: '/speedrun', component: Speedrun },		
		{ path: '/joias', component: JoiasDoPassado },		
		{ path: '/joias/lista', component: JoiasListaJogos },		
		{ path: '/fangames', component: FanGames },
	]
})

//Vue app
new Vue({
	render: h => h(App),
	router
}).$mount('#app')