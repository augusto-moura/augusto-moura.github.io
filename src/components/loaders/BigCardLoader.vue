<template>
	<loader>
		<div 
			v-for="n in number"
			:key="n"
			class="card-loader rounded mb-2"			
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
		number: {
			type: Number,
			default: 6
		}
	},
}
</script>

<style scoped>
	.card-loader {
		height: 200px;
	}
</style>