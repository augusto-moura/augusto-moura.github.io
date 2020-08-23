<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-header-footer">
			<nuxt-link to="/">
				<img
					:src="externalUrls.img.headerAvatar" 
					class="avatar-circular d-flex justify-content-md-center"
				/>
			</nuxt-link>

			<nuxt-link to="/">
				<div class="d-inline-block name-and-bio">
					<h1 class="ml-lg-3 pb-0 mb-0 navbar-text d-block">
						Augusto Moura
					</h1>
					<span class="ml-lg-3 navbar-text d-block">
						Desenvolvedor PHP+Vue.js e viciado em videogames
					</span>
				</div>
			</nuxt-link>

			<button class="navbar-toggler ml-sm-2" type="button" data-toggle="collapse" data-target="#top-menu" aria-controls="top-menu" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="top-menu">
				<ul class="navbar-nav ml-auto">
					<li
						v-for="menuItem in menu"
						:key="menuItem.id"
					>
						<nuxt-link
							:to="menuItem.path"
							class="nav-link btn btn-link navbar-text w-100"
							data-toggle="collapse" data-target=".navbar-collapse.show"
						>
							<fa :icon="menuItem.icon" class="fa-fw" />
							{{ menuItem.title }}
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>		
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="main-content col-md-8 pt-4">					
					<transition-page>
						<Nuxt />
					</transition-page>
				</div>
			</div>
		</div>
		<footer class="text-muted bg-header-footer mt-2">
			<div class="container p-4">
				<p class="mb-0">
					© 2020 Augusto Beraldi Guedes de Moura<br />
					<a 
						href="https://github.com/augusto-moura/augusto-moura.github.io"
						class="text-muted"
					>
						<fa :icon="['fab', 'github']" class="fa-fw" />						
						Código-fonte deste site
					</a>
				</p>
			</div>
		</footer>
	</div>
</template>

<script>
import TransitionPage from '../src/components/TransitionPage.vue'
export default {
	components: { TransitionPage },

	name: 'app',
	
	data() {
		return {
			menu: [
				{ id: 1, title: "Home", path: '/', icon: ['fas', 'home']},
				{ id: 2, title: "Desenvolvimento de software", path: '/development', icon: ['fas', 'code'] },
				{ id: 3, title: "Jogos", path: '/games', icon: ['fas', 'gamepad'] }
			]
		};
	},

	mounted(){
		$('#top-menu').collapse({
			toggle: false
		})
	}
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
