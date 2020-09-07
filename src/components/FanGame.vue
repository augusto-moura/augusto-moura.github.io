<template>
	<v-expansion-panel
		:readonly="!collapseHtml"
		
	>
        <v-expansion-panel-header
			:class="isEmDesenvolvimento ? 'fangame-em-desenvolvimento' : ''"
		>
			<v-row>
				<v-col
					cols="12"
					sm="4"
				>
					<img 
						:src="image_src" 
						alt="" 
						class="featured-img mb-3 mb-sm-0 rounded"					
					/>
				</v-col>
				<v-col
					cols="12"
					sm="8"
				>
					<h3 class="font-weight-bold mb-2" v-html="fangame.title"></h3>
					<div class="mb-2">
						<v-chip 
							v-for="tag in fangame.tags" 
							:key="tag.ID" 
							class="mr-1"
							:color="tag.slug == 'em-desenvolvimento' ? '#ebd940' : undefined"
							@click.stop="$emit('tag-click', tag.description)"
						>
							{{ tag.description }}
						</v-chip>
					</div>
					<div 
						class="mainContent" 
						v-html="mainContent">
					</div>
				</v-col>
			</v-row>
			<template 
				v-slot:actions 
				v-if="collapseHtml"
			>
			<v-btn fab small depressed class="mx-2">				
				<v-icon>mdi-chevron-down</v-icon>
			</v-btn>
			</template>
		</v-expansion-panel-header>
			<v-expansion-panel-content>
				<div v-html="collapseHtml" class="fangame-collapse-content text-center pt-2">
				</div>
			</v-expansion-panel-content>
      </v-expansion-panel>
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
	}
}
</script>

<style lang="scss" scoped>
	/* https://www.gradient-animator.com */
	.fangame-em-desenvolvimento {
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