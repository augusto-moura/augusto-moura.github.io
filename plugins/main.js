import Vue from 'vue';

try {
	window.$ = window.jQuery = require('jquery');
} catch (e) { ;}

Vue.config.productionTip = false;
