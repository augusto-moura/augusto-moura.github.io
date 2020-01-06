<template>
	<div>
		<router-link to="/joias">
			<i class="fas fa-chevron-left fa-fw"></i>
			Voltar para Jóias do Passado
		</router-link>

		<h1 class="my-3 text-primary">
			Jóias do Passado - Lista de jogos
		</h1>

		<div
			v-if="jewelsListPage" 
			v-html="jewelsListPage.content"
		>

		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			jewelsListPage: null
		}
	},
	methods: {
		getJewelsListPage(){
			fetch(`https://public-api.wordpress.com/rest/v1.1/sites/augustobgm.wordpress.com/posts/slug:joias-do-passado-lista-de-jogos`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.jewelsListPage = data;
			});
		}
	},
	mounted(){
		this.getJewelsListPage();
	}
}
</script>

<style>

</style>