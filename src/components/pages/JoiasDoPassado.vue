<template>
	<div>
		<button 
			:class="'btn ' + (order == 'DESC' ? 'btn-primary' : 'btn-outline-primary')" 
			@click="changeOrder('DESC')"
		>
			<i class="fas fa-sort-numeric-down-alt fa-fw"></i>
			Recentes primeiro
		</button>
		<button 
			:class="'btn ' + (order == 'ASC' ? 'btn-primary' : 'btn-outline-primary')" 
			@click="changeOrder('ASC')"
		>
			<i class="fas fa-sort-numeric-down fa-fw"></i>
			Antigos primeiro
		</button>

		<div
			v-if="jewels"
		>
			<div 
				v-for="jewel in jewels"
				:key="jewel.ID"
				class="card"
			>
				{{ jewel.title }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			order: 'DESC',
			jewels: null,
			foundJewels: null
		}
	},
	methods: {
		changeOrder(order){
			this.order = order;
			this.searchJewels();
		},
		searchJewels(){
			fetch(`https://public-api.wordpress.com/rest/v1.1/sites/augustobgm.wordpress.com/posts/?category=J%C3%B3ias%20do%20passado&order_by=title&order=${this.order}&fields=ID,title,date,content,slug,featured_image,tags`, {
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
	mounted(){
		this.searchJewels();
	}
}
</script>

<style>

</style>