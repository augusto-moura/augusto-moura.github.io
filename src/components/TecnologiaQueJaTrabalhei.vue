<template>
	<v-card 
		outlined
		elevation="3"
		:style="{borderColor: themeColor, borderWidth: '2px'}"
	>
		<v-list-item class="mt-2">
			<img :src="tecnologia.featured_image" class="icone-tecnologia"/>
			<span
				v-html="tecnologia.title" 
				class="ml-3 font-weight-bold"
				:style="{color: themeColor}"
			></span>
		</v-list-item>

		<v-list-item>
			<v-chip 
				v-for="tag in visibleTags" 
				:key="tag" 
				v-html="tag"
				class="mr-1"
			/>
		</v-list-item>

		<v-list-item>
			<div v-html="tecnologia.content"></div>
		</v-list-item>
	</v-card>
</template>

<script>
export default {
	//TODO
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