<template>
	<div
		v-if="page" 
		v-html="page.content"
	>
	</div>
	<div v-else class="mb-3">
		<wp-page-content-loader :lines="loaderLines"/>
	</div>
</template>

<script>
export default {
	props: {
		slug: String,
		loaderLines: {
			type: Number,
			default: 4
		}
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