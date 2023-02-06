export default {
	ssr: true,
	router: {
		base: '/',
	},
	target: 'static',
	css: [
		'~/src/app.scss'
	],
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/i18n'
	],
	styleResources: {
		scss: ['~/src/app_variables.scss']
	},
	plugins: [
		'~/plugins/main.js',
		'~/plugins/mixins.js'
	],
	pageTransition: 'page',
	head: {
		titleTemplate: '%s - Augusto Moura',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: "theme-color", content: "#a75a5e"},
		],
		link: [
			{ rel: 'shortcut icon', href: '/favicon.ico' },
			{ rel: 'icon', sizes: "100x100", href: '/titanishavatar100x100.png' },
		],
	},
	i18n: {
		locales: [
			{ code: 'pt', iso: 'pt-BR', file: 'pt.js'},
			{ code: 'en', iso: 'en-US', file: 'en.js' },
		],
		defaultLocale: 'pt',
		strategy: 'prefix_except_default',
		langDir: '~/lang/',
		vueI18n: {
			fallbackLocale: 'pt',
		}
	},
	vuetify: {
		customVariables: ['~/src/vuetify_variables.scss'],
		treeShake: true,
	}
}