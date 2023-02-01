<template>
	<div>
		<v-row justify="center">
			<v-btn-toggle 
				v-model="order" 
				mandatory 
				@change="changeOrder"
				class="elevation-2"
			>
				<v-btn value="desc">
					Recentes primeiro
				</v-btn>
				<v-btn value="asc">
					Antigos primeiro
				</v-btn>
			</v-btn-toggle>
		</v-row>

		<div
			v-if="jewels"
		>
			<page-picker 
				class="my-3"
				:page="page"
				:totalPages="totalPages"
				@change-page="changePage"
			/>

			<joia-analise			
				v-for="jewel in jewels"
				:key="jewel.id"
				:jewel="jewel"
			/>
			
			<page-picker 
				class="mb-3"
				:page="page"
				:totalPages="totalPages"
				@change-page="changePage"
			/>
		</div>
		<big-card-loader v-else class="my-2" />
	</div>
</template>

<script>
import JoiaAnalise from './JoiaAnalise.vue'
import BigCardLoader from './loaders/BigCardLoader.vue'
import PagePicker from './PagePicker.vue'

export default {
	components: {
		PagePicker,
		BigCardLoader,
		JoiaAnalise,
	},
	data(){
		return {
			order: 'desc',
			jewels: null,
			foundJewels: null,
			page: 1,
			totalPages: null,
		}
	},
	methods: {
		changeOrder(){
			this.changePage(1);
		},
		changePage(page){
			this.jewels = null,
			this.foundJewels = null,
			this.page = page;
			this.searchJewelsFromPrismic();
		},
		async searchJewelsFromPrismic(){
			const jewelsResponse = await this.$prismic.client.query(
				this.$prismic.predicate.at('document.type','joias_do_passado'),
				{ 
					lang: 'pt-br',
					pageSize: 20,
					page: this.page,
					orderings: `[my.joias_do_passado.numero ${this.order.toLowerCase() == 'desc' ? 'desc' : ''}]`,
				}
			);
			this.jewels = jewelsResponse.results;
			this.foundJewels = jewelsResponse.total_results_size;
			this.totalPages = jewelsResponse.total_pages;
		}
	},
	computed: {
		
	},
	mounted(){
		this.searchJewelsFromPrismic();
	}
}
</script>

<style>

</style>