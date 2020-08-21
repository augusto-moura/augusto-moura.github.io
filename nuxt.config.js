export default {
	mode: 'spa',
	router: {
		base: '/',
	},
	target: 'static',
	css: [
		'~/src/app_variables.scss'
	],
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		'@nuxtjs/style-resources',
		[
			'nuxt-fontawesome', {
				component: 'fa',
				imports: [
					{
						set: '@fortawesome/free-solid-svg-icons',
						icons: [
							'faHome',
							'faCode',
							'faGamepad',
							'faChevronRight',
							'faChevronLeft',
							'faChevronDown',
							'faChevronUp',
							'faSortNumericDownAlt',
							'faSortNumericDown',
						]
					},
					{
						set:'@fortawesome/free-brands-svg-icons',
						icons: [
							'faGithub'
						]
					}
			   ]
			}
		]
	],
	styleResources: {
		scss: ['~/src/*.scss']
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
		defaultAssets: false,
	}
}