<template>
	<div>
		<nuxt-link to="/joias">
			<v-icon>mdi-arrow-left</v-icon>
			Voltar para Jóias do Passado
			<div class="d-block text-center">
				<img 
					:src="this.externalUrls.img.joiasDoPassadoBanner" 
					class="mb-3 rounded"
					style="width: 350px;"
					alt="Jóias do passado"
				/>
			</div>
		</nuxt-link>

		<h1 class="my-3 text-primary">
			Lista de jogos
		</h1>

		<wp-page-content slug="joias-do-passado-lista-de-jogos" :loaderLines="30" />
	</div>
</template>

<script>
export default {
}
</script>

<style>

</style>