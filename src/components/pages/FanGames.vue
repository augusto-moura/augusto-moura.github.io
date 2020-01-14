<template>
	<div>
		<router-link to="/games">
			<i class="fas fa-chevron-left fa-fw"></i>
			Voltar para Jogos
		</router-link>

		<h1 class="my-3 text-primary">
			Fan games
		</h1>

		<div
			v-if="fangamesPage" 
			v-html="fangamesPage.content"
		>
		</div>
		<div v-else>
			<!-- TODO: content-loader -->
			Carregando...
		</div>
		
		<pesquisa-fangames></pesquisa-fangames>
	</div>
</template>

<script>
export default {
	data(){
		return {
			fangamesPage: null
		}
	},
	methods: {
		getFangamesPage(){
			fetch(`https://public-api.wordpress.com/rest/v1.1/sites/augustobgm.wordpress.com/posts/slug:fan-games`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.fangamesPage = data;
			});
		}
	},
	mounted(){
		this.getFangamesPage();
	}
}
</script>

<style>

</style>