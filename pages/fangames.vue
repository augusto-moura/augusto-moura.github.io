<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<v-btn text exact nuxt :to="localePath('/games')">
			<v-icon>mdi-arrow-left</v-icon>
			{{ $t('games') }}
		</v-btn>

		<div class="text-center">
			<img
				:src="externalUrls.img.fanGamesCardBanner"
				alt="Fan games"
				style="width=250px;"
				class="mb-3 rounded"
			/>
		</div>

		<wp-page-content slug="fan-games" :loaderLines="11" />
		
		<pesquisa-fangames></pesquisa-fangames>
	</v-col>
	</v-row>
</template>

<script>
import PesquisaFangames from '../src/components/PesquisaFangames.vue'
import WpPageContent from '../src/components/WpPageContent.vue'
export default {
	components: {
		WpPageContent,
		PesquisaFangames,
	},
	head: {
		title: 'Fan games',
  	},
}
</script>

<style>

</style>