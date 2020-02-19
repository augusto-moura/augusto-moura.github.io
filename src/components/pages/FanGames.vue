<template>
	<div>
		<router-link to="/games">
			<i class="fas fa-chevron-left fa-fw"></i>
			Voltar para Jogos
		</router-link>

		<h1 class="my-3 text-primary">
			Fan games
		</h1>

		<wp-page-content slug="fan-games" />
		
		<pesquisa-fangames></pesquisa-fangames>
	</div>
</template>

<script>
export default {
}
</script>

<style>

</style>