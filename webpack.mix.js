let mix = require('laravel-mix');

mix	.options({
		globalVueStyles: 'src/app_variables.scss'
	})
	.js('src/main.js', 'public')
	.sass('src/app.scss', 'public')
;