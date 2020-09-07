<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<div class="text-center">
			<img
				:src="externalUrls.img.desenvolvimentoCardBanner"
				alt="Desenvolvimento de software"
				style="width=250px;"
				class="mb-3 rounded"
			/>
		</div>
		
		<wp-page-content 
			slug="desenvolvimento-de-software" 
			:loaderLines="5"
		/>
		<hr> 

		<h4 class="text-h4 text-center my-4">
			Tecnologias com que já trabalhei
		</h4>

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
		<big-card-loader v-else />
	</v-col>
	</v-row>
</template>

<script>
import TecnologiaQueJaTrabalhei from '../src/components/TecnologiaQueJaTrabalhei.vue'
import WpPageContent from '../src/components/WpPageContent.vue'
import BigCardLoader from '../src/components/loaders/BigCardLoader.vue'
export default {
	components: { WpPageContent, TecnologiaQueJaTrabalhei, BigCardLoader, TecnologiaQueJaTrabalhei },

	head: {
		title: 'Desenvolvimento',
  	},

	data(){
		return {
			tecnologias: null,
		}
	},
	methods: {
		searchTecnologias(){
			fetch(`${this.externalUrls.api.baseUrl}/posts/?category=Tecnologia%20de%20Desenvolvimento&order_by=ID&order=ASC&fields=ID,title,date,content,slug,featured_image,tags`, {
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