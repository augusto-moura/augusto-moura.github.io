<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<img
				src="https://augustobgm.files.wordpress.com/2020/01/avatar-facebook-e1578195578588.png" 
				class="avatar-circular d-flex justify-content-md-center"
			/>

			<div class="d-inline-block name-and-bio">
				<span class="h3 ml-lg-3">Augusto Moura</span><br />
				<span class="ml-lg-3">Full-stack developer and videogame addict</span>
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
							class="nav-link btn btn-link"
							data-toggle="collapse" data-target=".navbar-collapse.show"
						>
							{{ menuItem.title }}
						</router-link>
					</li>
				</ul>
			</div>
		</nav>		

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	
	data() {
		return {
			menu: [
				{ id: 1, title: "Home", path: '/' },
				{ id: 2, title: "Software development", path: '/development' },
				{ id: 3, title: "Games", path: '/games' }
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
	.avatar-circular {
		vertical-align: middle;
		width: 90px;
		border-radius: 50%;
	}

	.router-link-exact-active {
		font-weight: bold;
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
