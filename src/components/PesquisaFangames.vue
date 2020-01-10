<template>
	<div>
		<div
			v-if="fangames"
		>
			<div 
				v-for="fangame in fangames"
				:key="fangame.ID"
				class="fangame card p-3 my-2"
			>
				<div class="row">
					<div class="col-12">
						<h4 class="font-weight-bold mb-0" v-html="fangame.title"></h4>
						<div class="mb-2">
							<a
								v-for="tag in fangame.tags"
								href=""
								class="badge badge-secondary mr-2"
								:key="tag.ID"
							>
								{{ tag.description }}
							</a>
						</div>
						<div v-html="fangame.content"></div>						
					</div>				
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			fangames: null,
			foundFangames: null,
		}
	},
	methods: {
		searchFanGames(){
			fetch(`https://public-api.wordpress.com/rest/v1.1/sites/augustobgm.wordpress.com/posts/?category=Fan%20Games&order_by=title&order=ASC&fields=ID,title,date,content,slug,featured_image,tags`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.fangames = data.posts.map(fangame => {
					//Adicionar collapse nos detalhes e _blank aos links
					let $el = $('<div></div>');
					$el.html(fangame.content);
					$('.detalhes', $el)
						.addClass('collapse')
						.attr('id', `collapse-fangame-${fangame.ID}`)
						.before(`
							<button class="btn btn-sm btn-primary mb-2" type="button" data-toggle="collapse" data-target="#collapse-fangame-${fangame.ID}" aria-expanded="false" aria-controls="collapse-fangame-${fangame.ID}">
          						Detalhes
        					</button> 
						`);
					$('a', $el).attr('target', '_blank');
					fangame.content = $el.html();
					return fangame;
				});
				this.foundFangames = data.found;
			});
		}
	},
	mounted(){
		this.searchFanGames();
	}
}
</script>

<style scoped>
	
</style>