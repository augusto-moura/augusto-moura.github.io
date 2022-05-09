<template>
	<div>
		<v-row justify="center">
			<v-btn-toggle 
				v-model="order" 
				mandatory 
				@change="changeOrder"
				class="elevation-2"
			>
				<v-btn value="DESC">
					Recentes primeiro
				</v-btn>
				<v-btn value="ASC">
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
				:key="jewel.ID"
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

<script lang="ts">
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
			order: 'DESC' as string,
			jewels: null,
			foundJewels: null,
			page: 1,
		}
	},
	methods: {
		changeOrder(order){
			this.changePage(1);
		},
		changePage(page){
			this.jewels = null,
			this.foundJewels = null,
			this.page = page;
			this.searchJewels();
		},
		searchJewels(){
			fetch(`${this.externalUrls.api.baseUrl}/posts/?category=J%C3%B3ias%20do%20passado&order_by=title&order=${this.order}&per_page=20&page=${this.page}fields=ID,title,date,content,slug,featured_image,tags`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.jewels = data.posts;
				this.foundJewels = data.found;
			});
		}
	},
	computed: {
		totalPages() {
			return Math.ceil(this.foundJewels / 20);
		},
	},
	mounted(){
		this.searchJewels();
	}
}
</script>

<style>

</style>