<template>
	<div class="loader-container">
		<ContentLoader
			v-for="n in lines"
			:key="n"
			:height="8"
			:width="180"
			:speed="2"				
			primaryColor="#ecebeb"
			secondaryColor="#c7c4c4"
			style="max-height: 150px; max-width: 520px;"
		>
			<rect x="0" y="2" rx="2" ry="2" width="180" height="6" />
		</ContentLoader>
	</div>
</template>

<script>
	import {ContentLoader} from 'vue-content-loader'
	export default {
		props: {
			lines: {
				type: Number,
				default: 4
			}
		},
		components: {
			ContentLoader
		}
	}

</script>

<style scoped>
	.loader-container {
		display: flex;
		flex-direction: column;
	}
</style>
