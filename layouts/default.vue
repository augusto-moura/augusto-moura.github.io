<template>
	<v-app id="app">
		<app-header />

		<v-main>
			<v-container fluid>
				<Nuxt />
			</v-container>
		</v-main>

		<v-footer
			app
			absolute
			color="#e6dbdb"
			elevation="2"
		>
			<v-container>
				<p class="mb-1 grayed-text">
					© 2020 Augusto Beraldi Guedes de Moura<br />
					<a 
						href="https://github.com/augusto-moura/augusto-moura.github.io"
					>
						<fa :icon="['fab', 'github']" class="fa-fw" />						
						Código-fonte deste site
					</a>
				</p>
			</v-container>
		</v-footer>
	</v-app>
</template>

<script>
import AppHeader from '../components/layout/AppHeader.vue'
import TransitionPage from '../src/components/TransitionPage.vue'

export default {
	components: {
		AppHeader,
	},

	name: 'app',
	mounted(){
		
	}
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
	
</style>
