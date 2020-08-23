import Vue from 'vue';

try {
	//window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	//require('bootstrap');
} catch (e) { ;}

Vue.config.productionTip = false;