<template>
  	<div 		
		:class="'fangame card p-3 my-2 ' + (isEmDesenvolvimento ? 'em-desenvolvimento' : '')"
	>
		<div class="row">
			<div class="col-sm-4 col-xl-3 text-center">
				<img 
					:src="image_src" 
					alt="" 
					class="featured-img mb-3 mb-sm-0 rounded"					
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
		<div
			v-if="collapseHtml"
			id="collapser"
			class="mt-2 d-flex justify-content-between" 
			@click="handleCollapse()"
		>

			<div class="flex-grow-1">
				<hr class="collapse-lines">
			</div>
			<div class="text-center px-3 text-primary font-weight-bold">
				{{ collapseShown ? 'Recolher' : 'Detalhes' }}<br>
				<i :class="'fas ' + (collapseShown ? 'fa-chevron-up' : 'fa-chevron-down')"></i>
			</div>
			<div class="flex-grow-1">
				<hr class="collapse-lines">
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
			return this.fangame.featured_image != "" ? this.fangame.featured_image : this.externalUrls.img.squareImageNotFound;
		},
		isEmDesenvolvimento: function(){
			return 'Em desenvolvimento' in this.fangame.tags;
		}
	},
	mounted: function(){
		let fangame = this.fangame;

		//Adicionar collapse nos detalhes e _blank aos links
		let $el = $('<div></div>');
		$el.html(fangame.content.replace(/<img/g, "<img-noload"));
		$('a', $el).attr('target', '_blank');

		let $detalhes = $('.detalhes', $el);
		if($detalhes.length){
			this.collapseHtml = $detalhes.first().html().replace(/<img-noload/g, "<img");
			$detalhes.remove();
		}
		this.mainContent = $el.html();
	},
	methods: {
		handleCollapse(){
			if(this.collapseShown){
				$(this.$refs.collapse).collapse('toggle');	
				this.$nextTick(() => this.collapseShown = false);
			}
			else{
				this.collapseShown = true;
				this.$nextTick(() => $(this.$refs.collapse).collapse('toggle'));
			}
		}
	}
}
</script>

<style lang="scss" scoped>
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

	.collapse-lines {
		border-top: 1px solid $primary-color;
		opacity: 40%;
	}

	#collapser {
		cursor: pointer;
	}
</style>