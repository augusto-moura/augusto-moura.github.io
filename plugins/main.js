import Vue from 'vue';
import PrismicVue from '@prismicio/vue';

String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

try {
	window.$ = window.jQuery = require('jquery');
} catch (e) { ;}

Vue.config.productionTip = false;

// Prismic
const endpoint = 'https://augusto-moura.cdn.prismic.io/api/v2';
Vue.use(PrismicVue, {
	endpoint,
});

