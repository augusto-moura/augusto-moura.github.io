<template>
	<div>
		<h2 class="text-primary">
			Desenvolvimento de software
		</h2>

		<wp-page-content slug="desenvolvimento-de-software" />
		
		<hr> 

		<h3>Tecnologias com que já trabalhei</h3>

		<div
			v-if="tecnologias"
		>
			<tecnologia-que-ja-trabalhei
				v-for="tecnologia in tecnologias"
				:key="tecnologia.ID"
				:tecnologia="tecnologia"
				class="my-2"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			tecnologias: null,
		}
	},
	methods: {
		searchTecnologias(){
			fetch(`https://public-api.wordpress.com/rest/v1.1/sites/augustobgm.wordpress.com/posts/?category=Tecnologia%20de%20Desenvolvimento&order_by=ID&order=ASC&fields=ID,title,date,content,slug,featured_image,tags`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.tecnologias = data.posts;
			});
		}
	},
	mounted(){
		this.searchTecnologias();
	}
}
</script>

<style>
	p {
		text-align: justify;
	}
</style>