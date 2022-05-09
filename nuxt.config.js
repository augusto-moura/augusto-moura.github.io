export default {
	mode: 'spa',
	router: {
		base: '/',
	},
	target: 'static',
	css: [
		'~/src/app.scss'
	],
	build: {
		extend(config, { isDev, isClient }) {
			config.module.rules.push({
				test: /\.ts$/, 
				exclude: /node_modules/, 
				loader: 'ts-loader'
			});
			// Sets webpack's mode to development if `isDev` is true.
			if (isDev) {
				config.mode = 'development'
			}
		}
	},
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/vuetify'
	],
	modules: [
		'@nuxtjs/style-resources',
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
	vuetify: {
		customVariables: ['~/src/vuetify_variables.scss'],
		treeShake: true,
	}
}