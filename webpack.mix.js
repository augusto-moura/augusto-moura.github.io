let mix = require('laravel-mix');

mix.js('src/main.js', 'public')
	.sass('src/app.sass', 'public')
	.copy('public/images', 'images', false)
;