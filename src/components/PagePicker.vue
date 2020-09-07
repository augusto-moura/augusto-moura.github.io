<template>
	<v-pagination
		v-model="pageState"
		:length="totalPages"
		:page="page"
		:total-visible="7"
		@input="$emit('change-page', $event)"
    />
</template>

<script>
export default {
	props: {
		page: Number,
		totalPages: Number,
	},
	data(){
		return {
			pageState: this.page,
		}
	},
}
</script>

<style>

</style>