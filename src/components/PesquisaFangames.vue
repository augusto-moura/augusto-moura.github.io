<template>
	<div>
		<div
			v-if="fangames"
		>
			<div 
				v-for="fangame in fangames"
				:key="fangame.ID"
				:class="'fangame card p-3 my-2 ' + (fangame.isEmDesenvolvimento ? 'em-desenvolvimento' : '')"
			>
				<div class="row">
					<div class="col-12">
						<h4 class="font-weight-bold mb-0" v-html="fangame.title"></h4>
						<div class="mb-2">
							<a
								v-for="tag in fangame.tags"
								href=""
								:class="'badge mr-2 ' + (tag.slug == 'em-desenvolvimento' ? 'badge-warning' : 'badge-secondary')"
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
					fangame.isEmDesenvolvimento = 'Em desenvolvimento' in fangame.tags;
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
	/* https://www.gradient-animator.com */
	.fangame.em-desenvolvimento {
		background: linear-gradient(270deg, #ffffe7, #fffec1);
		background-size: 400% 400%;
		-webkit-animation: GradientAnimation 2s ease infinite;
		-moz-animation: GradientAnimation 2s ease infinite;
		-o-animation: GradientAnimation 2s ease infinite;
		animation: GradientAnimation 2s ease infinite;
	}
	
</style>