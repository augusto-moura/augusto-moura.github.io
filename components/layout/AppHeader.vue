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
					<nuxt-link :to="localePath('/')">
						<v-avatar
						size="90"
						>
							<v-img 
								src="https://augustobgm.files.wordpress.com/2020/01/avatar-facebook-e1578195578588.png"
								style="border: 2px solid #af4f54"
							/>
						</v-avatar>
					</nuxt-link>
					<nuxt-link :to="localePath('/')" class="titan-primary-link">
						<div class="d-inline-block name-and-bio pt-1">
							<h1 class="ml-3 pb-0 mb-0 d-block">
								Augusto Moura
							</h1>
							<span class="ml-3 d-block">
								{{ $t('header__author_description') }}
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
						<LanguageSwitcher :languages="languages" />
						<top-right-main-menu :menu="menu" />
					</div>
				</v-col>
			</v-row>
		</v-app-bar>

		<offscreen-main-menu 
			v-model="mainMenuOpen"
			:menu="menu"
			:languages="languages"
		/>
	</div>
</template>

<script>
import TopRightMainMenu from './TopRightMainMenu.vue'
import OffscreenMainMenu from './OffscreenMainMenu.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
export default {
	components: {
		OffscreenMainMenu,
		TopRightMainMenu,
		LanguageSwitcher,
	},
	data() {
		return {
			mainMenuOpen: false,
			menu: [
				{ id: 1, title: 'home', path: '/', icon: 'mdi-home'},
				{ id: 2, title: "development", path: '/development', icon: 'mdi-xml' },
				{ id: 3, title: "games", path: '/games', icon: 'mdi-gamepad-variant' },
				{ id: 4, title: "entertainment", path: '/entertainment', icon: 'mdi-television-classic' }
			],
			languages: [
				{
					id: 'pt',
					title: 'Português',
					flagSrc: 'https://cdn.vuetifyjs.com/images/flags/br.png'
				},
				{
					id: 'en',
					title: 'English',
					flagSrc: 'https://cdn.vuetifyjs.com/images/flags/us.png'
				},
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