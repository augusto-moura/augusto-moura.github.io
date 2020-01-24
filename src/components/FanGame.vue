<template>
  	<div 		
		:class="'fangame card p-3 my-2 ' + (isEmDesenvolvimento ? 'em-desenvolvimento' : '')"
	>
		<div class="row">
			<div class="col-sm-4 col-xl-3 text-center">
				<img 
					:src="image_src" 
					alt="" 
					class="featured-img mb-3 mb-sm-0"					
				/>
			</div>
			<div class="col-sm-7 col-xl-9">
				<h4 class="font-weight-bold mb-0" v-html="fangame.title"></h4>
				<div class="mb-2">
					<a
						v-for="tag in fangame.tags"
						href=""
						:class="'badge mr-2 ' + (tag.slug == 'em-desenvolvimento' ? 'badge-warning' : 'badge-secondary')"
						:key="tag.ID"
						@click.prevent="$emit('tagClick', tag.description)"
					>
						{{ tag.description }}
					</a>
				</div>
				<div v-html="htmlCorrigido"></div>						
			</div>				
		</div>
	</div>
</template>

<script>
export default {
	props: {
		fangame: {
			required: true,
			type: Object
		},
	},
	computed: {
		image_src: function(){
			return this.fangame.featured_image != "" ? this.fangame.featured_image : 'https://augustobgm.files.wordpress.com/2020/01/square-image-not-found.png';
		},
		isEmDesenvolvimento: function(){
			return 'Em desenvolvimento' in this.fangame.tags;
		},
		htmlCorrigido: function(){
			let fangame = this.fangame;

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
			return $el.html();
		}
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

	.featured-img {
		height: 140px;
		width: 140px;
		object-fit: cover;
	}
</style>