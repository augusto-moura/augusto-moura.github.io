<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<v-btn text nuxt :to="localePath('/games')">
			<v-icon>mdi-arrow-left</v-icon>
			{{ $t('games') }}
		</v-btn>
		
		<div class="w-100 text-center">
			<img 
				:src="externalUrls.img.joiasDoPassadoBanner" 
				class="mb-3 rounded"
				style="width: 250px;"
				alt="Jóias do passado"
			/>
		</div>

		<div v-html="$t('jewels__intro')"></div>

		<h3 class="text-center">
			<nuxt-link :to="localePath('/joias/lista')" class="text-primary">
				<u>{{ $t('jewels__game_list_link') }}</u>
			</nuxt-link>
		</h3>

		<hr class="my-4">

		<h4 class="text-h4 text-center my-4">
			{{ $t('jewels__reviews') }}
		</h4>

		<joias-analises />
	</v-col>
	</v-row>
</template>

<script>
import JoiasAnalises from '../../src/components/JoiasAnalises.vue'
export default {
	components: {
		JoiasAnalises,
	},
	head: {
		title: 'Jóias do passado',
	},
}
</script>

<style scoped>
	p {
		text-align: justify;
	}

	.game-cover {
		max-height: 140px;
	}

	/* https://www.gradient-animator.com */
	.joia-atual {
		background: linear-gradient(270deg, #cc6f73, #f8f9fa);
		background-size: 400% 400%;
		-webkit-animation: GradientAnimation 2s ease infinite;
		-moz-animation: GradientAnimation 2s ease infinite;
		-o-animation: GradientAnimation 2s ease infinite;
		animation: GradientAnimation 2s ease infinite;
	}
</style>