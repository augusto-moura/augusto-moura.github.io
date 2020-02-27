<template>
	<div>
		<router-link to="/joias">
			<i class="fas fa-chevron-left fa-fw"></i>
			Voltar para Jóias do Passado
			<div class="d-block text-center">
				<img 
					src="https://augustobgm.files.wordpress.com/2020/01/joias-do-passado-fundo-escuro.png" 
					class="mb-3 rounded"
					style="width: 350px;"
					alt="Jóias do passado"
				/>
			</div>
		</router-link>

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