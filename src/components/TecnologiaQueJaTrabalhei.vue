<template>
	<div class="card" :style="{borderColor: themeColor}">
		<div class="card-body">
			<div class="d-flex align-items-center mb-1">
				<img :src="tecnologia.featured_image" class="icone-tecnologia"/>
				<h4 
					v-html="tecnologia.title" 
					class="ml-3"
					:style="{color: themeColor}"
				></h4>
			</div>
			<div class="mb-2">
				<span 
					v-for="tag in visibleTags" 
					:key="tag" 
					v-html="tag"
					class="badge mr-2 badge-secondary"
				>
				</span>				
			</div>
			<div v-html="tecnologia.content"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tecnologia: {
			required: true,
			type: Object
		}
	},
	computed: {
		//Get title color from tag
		themeColor(){
			const color = Object.keys(this.tecnologia.tags).find(tag => tag.startsWith('#'));
			return color;
		},
		visibleTags(){
			return Object.keys(this.tecnologia.tags).filter(tag => !tag.startsWith('#'));
		}
	}
}
</script>

<style scoped>
	.card {
		border-width: 2px;
	}
	.icone-tecnologia {
		width: 45px;
	}
</style>