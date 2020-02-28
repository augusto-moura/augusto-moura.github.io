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
	export default {
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
