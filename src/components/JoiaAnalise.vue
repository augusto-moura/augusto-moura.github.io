<template>
	<v-card class="p-3 my-2">
		<v-list-item>
		<v-row>
			<v-col cols="12" sm="4" class="text-center">
				<PrismicImage :field="jewel.data.capa" 
					class="game-cover mt-3 mb-0 mb-sm-2"
				/>
			</v-col>

			<v-col cols="12" sm="8" class="text-center pt-0 pt-sm-3">
				<h3 class="font-weight-bold my-2">
					#{{ numeroPadded }} -
					{{ $prismic.asText(jewel.data.titulo) }}
				</h3>
				<PrismicRichText :field="jewel.data.analise" 
					class="text-left"
				/>
			</v-col>
		</v-row>
		</v-list-item>
	</v-card>
</template>

<script>
export default {
	props:{
		jewel: Object,
	},
	computed: {
		numeroPadded(){
			return `${this.jewel.data.numero}`.padStart(3, '0');
		}
	}
}
</script>

<style>

</style>