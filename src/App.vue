<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<img
				src="https://augustobgm.files.wordpress.com/2020/01/avatar-facebook-e1578195578588.png" 
				class="avatar-circular d-flex justify-content-md-center"
			/>

			<div class="d-inline-block name-and-bio">
				<h1 class="ml-lg-3 pb-0 mb-0 navbar-text d-block">
					Augusto Moura
				</h1>
				<span class="ml-lg-3 navbar-text d-block">
					Desenvolvedor full-stack e viciado em videogames
				</span>				
			</div>

			<button class="navbar-toggler ml-sm-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li
						v-for="menuItem in menuItems()"
						:key="menuItem.id"
					>
						<router-link
							:to="menuItem.path"
							class="nav-link btn btn-link navbar-text w-100"
							data-toggle="collapse" data-target=".navbar-collapse.show"
						>
							{{ menuItem.title }}
						</router-link>
					</li>
				</ul>
			</div>
		</nav>		
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="main-content col-sm-8 col-md-6 pt-4">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<footer class="text-muted bg-light mt-2">
			<div class="container p-4">
				<p class="mb-0">© 2020 Augusto Beraldi Guedes de Moura</p>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'app',
	
	data() {
		return {
			menu: [
				{ id: 1, title: "Home", path: '/' },
				{ id: 2, title: "Desenvolvimento de software", path: '/development' },
				{ id: 3, title: "Jogos", path: '/games' }
			]
		};
	},
	methods: {
		menuItems() {
			return this.menu;
		}
	}
}
</script>

<style scoped>
	.main-content {
		font-family: Roboto, sans-serif;
		text-align: justify;
	}

	.avatar-circular {
		vertical-align: middle;
		width: 90px;
		border-radius: 50%;
	}

	.router-link-exact-active {
		font-weight: bold;
	}

	.navbar .navbar-text {
		font-family: Roboto, sans-serif;
		color: #cea2a4;
	}

	.nav-link {
		text-transform: uppercase;
		letter-spacing: 1.25px;
	}

	@media (max-width: 575.8px) { 
		.name-and-bio {
			width: 210px;
			margin-left: 5px;
		}
	}

	@media (max-width: 400px) { 
		.navbar-toggler {
			width: 100%;
			margin-top: 10px;
			margin-bottom: 8px;
		}
	}

</style>
