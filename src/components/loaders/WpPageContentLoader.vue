<template>
	<loader>
		<div 
			v-for="n in lines"
			:key="n"			
			class="loader-wp-page-content rounded mb-2"
		>
		</div>
	</loader>
</template>

<script>
import Loader from './Loader.vue'
export default {
	components: {
		'loader': Loader,
	},
	props: {
		lines: {
			type: Number,
			default: 4
		}
	},
}

</script>

<style scoped>
	.loader-wp-page-content {
		height: 16px;
	}
</style>
