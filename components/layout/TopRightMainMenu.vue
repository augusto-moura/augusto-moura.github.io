<template>
	<div>
		<v-btn
			v-for="menuItem in menu"
			:key="menuItem.id"
			ripple
			large
			text
			link
			rounded
			nuxt
			:exact="menuItem.path == '/'"
			:to="localePath(menuItem.path)"
			class="titan-primary-link"
		>
			<v-icon class="mr-2" v-text="menuItem.icon"></v-icon>
			{{ $t(menuItem.title) }}
		</v-btn>
	</div>
</template>

<script>
export default {
	props:{
		menu: Array,
	},
}
</script>

<style scoped lang="scss">
	.titan-primary-link:not(.v-btn--active){
		color: black !important;
	}
</style>