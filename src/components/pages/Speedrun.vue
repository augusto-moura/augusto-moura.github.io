<template>
	<div>
		<p>
			Em construção.
		</p>

		<div v-if="pbs">
			<div
				v-for="pb in pbs"
				:key="pb.run.id"
			>
				{{ pb.game.data.names.international }}
				-
				{{ pb.category.data.name }}
				-
				{{ pb.run.times.primary }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		totalPbs: function(){
			return this.pbs.length;
		}
	},
	data(){
		return {
			pbs: null,
		}
	},
	methods: {
		searchPbs(){
			fetch(`https://www.speedrun.com/api/v1/users/18vnevjl/personal-bests?embed=game,category`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.pbs = data.data;
			});
		},
		searchMMLBPbs(){
			fetch(`https://megamanleaderboards.net/index.php?page=runner&name=Titanish`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent',
				})
			})
			.then(response => {
				console.log(response);
				return response.text();
			})
			.then(data => {
				console.log(data);
			});
			
		}
	},
	mounted(){
		this.searchPbs();
		this.searchMMLBPbs();
	}
}
</script>

<style>

</style>