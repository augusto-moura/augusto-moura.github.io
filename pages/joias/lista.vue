<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<v-btn text exact nuxt :to="localePath('/joias')">
			<v-icon>mdi-arrow-left</v-icon>
			Jóias do Passado
		</v-btn>

		<nuxt-link :to="localePath('/joias')">
			<div class="d-block text-center">
				<img 
					:src="this.externalUrls.img.joiasDoPassadoBanner" 
					class="mb-3 rounded"
					style="width: 250px;"
					alt="Jóias do passado"
				/>
			</div>
		</nuxt-link>

		<h1 class="my-3 text-primary">
			Lista de jogos
		</h1>

		<wp-page-content slug="joias-do-passado-lista-de-jogos" :loaderLines="30" />
	</v-col>
	</v-row>
</template>

<script>
import WpPageContent from '../../src/components/WpPageContent.vue'
export default {
	components: {
		WpPageContent,
	},
	head: {
		title: 'Jóias do passado - lista',
  	},
}
</script>

<style>

</style>