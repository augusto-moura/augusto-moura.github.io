import externalUrls from '../src/resources/externalUrls';
import Vue from 'vue';
//Inject External URLs module into every component
Vue.mixin({
	computed: {
		externalUrls(){
			return externalUrls;
		}
	}
});
