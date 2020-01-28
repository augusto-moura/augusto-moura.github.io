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
				<div 
					class="mainContent" 
					v-html="mainContent">
				</div>
				<button 
					v-if="collapseHtml"
					class="btn btn-sm btn-primary mb-2" 
					type="button"
					@click="handleCollapse()"
				>
					Detalhes
				</button> 
				<div v-if="collapseHtml"
					ref="collapse"
					:id="`collapse-fangame-${fangame.ID}`" 
					class="collapse"
				>
					<div 
						v-if="collapseShown"
						v-html="collapseHtml"
					></div>
				</div>
			</div>				
		</div>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			collapseShown: false,
			collapseHtml: "",
			mainContent: "",
		}
	},
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
		}
	},
	mounted: function(){
		let fangame = this.fangame;

		//Adicionar collapse nos detalhes e _blank aos links
		let $el = $('<div></div>');
		$el.html(fangame.content.replace("<img", "<img-noload"));
		$('a', $el).attr('target', '_blank');

		let $detalhes = $('.detalhes', $el);
		if($detalhes.length){
			this.collapseHtml = $detalhes.first().html().replace("<img-noload", "<img");
			$detalhes.remove();
		}
		this.mainContent = $el.html();
	},
	methods: {
		handleCollapse(){
			this.collapseShown = true;
			this.$nextTick(() => $(this.$refs.collapse).collapse('toggle'));
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
		width: auto;
		object-fit: cover;
	}
</style>