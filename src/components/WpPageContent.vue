<template>
	<div
		v-if="page" 
		v-html="page.content"
	>
	</div>
	<div v-else>
		<!-- TODO: content-loader -->
		Carregando...
	</div>
</template>

<script>
export default {
	props: {
		slug: String
	},
	data(){
		return {
			page: null
		}
	},
	methods: {
		getPage(){
			fetch(`https://public-api.wordpress.com/rest/v1.1/sites/augustobgm.wordpress.com/posts/slug:${this.slug}?fields=content`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.page = data;
			});
		}
	},
	mounted(){
		this.getPage();
	}
}
</script>

<style>

</style>