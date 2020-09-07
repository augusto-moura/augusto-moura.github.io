<template>
	<div>
		<v-app-bar
			clipped-right
			elevation="2"
			color="#e6dbdb"
			width="100%"
			height="auto"
		>
			<v-row
				justify-content="space-between"
				align="center"
			>
				<v-col	
					cols="12"
					sm="8"
					md="6"
					class="d-flex align-items-center"
				>
					<nuxt-link to="/">
						<v-avatar
						size="90"
						>
							<v-img 
								src="https://augustobgm.files.wordpress.com/2020/01/avatar-facebook-e1578195578588.png"
								style="border: 2px solid #af4f54"
							/>
						</v-avatar>
					</nuxt-link>
					<nuxt-link to="/" class="titan-primary-link">
						<div class="d-inline-block name-and-bio pt-1">
							<h1 class="ml-3 pb-0 mb-0 d-block">
								Augusto Moura
							</h1>
							<span class="ml-3 d-block">
								Desenvolvedor PHP+Vue.js e viciado em videogames
							</span>
						</div>
					</nuxt-link>
				</v-col>
				<v-col
					cols="12"
					sm="4"
					md="6"
					class="text-right"
				>
					<v-app-bar-nav-icon 
						@click="mainMenuOpen = !mainMenuOpen"
						class="d-md-none"
						style="border: 1px solid #d5cdcd;"
					/>

					<div class="d-none d-md-block">
						<top-right-main-menu :menu="menu" />						
					</div>
				</v-col>
			</v-row>
		</v-app-bar>

		<offscreen-main-menu 
			v-model="mainMenuOpen"
			:menu="menu"
		/>
	</div>
</template>

<script>
import TopRightMainMenu from './TopRightMainMenu.vue'
import OffscreenMainMenu from './OffscreenMainMenu.vue'
export default {
	components: {
		OffscreenMainMenu,
		TopRightMainMenu,
	},
	data() {
		return {
			mainMenuOpen: false,
			menu: [
				{ id: 1, title: "Home", path: '/', icon: 'mdi-home'},
				{ id: 2, title: "Desenvolvimento", path: '/development', icon: 'mdi-xml' },
				{ id: 3, title: "Jogos", path: '/games', icon: 'mdi-gamepad-variant' }
			]
		};
	},
}
</script>

<style lang="scss">
	.titan-primary-link {
		color: $primary-color !important;
	}
</style>