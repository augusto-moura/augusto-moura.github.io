<template>
	<div>
		<nuxt-link to="/games">
			<fa :icon="['fas', 'chevron-left']" class="fa-fw" />
			Voltar para Jogos
		</nuxt-link>

		<h1 class="my-3 text-primary">
			Fan games
		</h1>

		<wp-page-content slug="fan-games" :loaderLines="11" />
		
		<pesquisa-fangames></pesquisa-fangames>
	</div>
</template>

<script>
import PesquisaFangames from '../src/components/PesquisaFangames.vue'
import WpPageContent from '../src/components/WpPageContent.vue'
export default {
	components: {
		WpPageContent,
		PesquisaFangames,
	},
	head: {
		title: 'Fan games',
  	},
}
</script>

<style>

</style>