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

		<p>
			Sempre temos intenção de jogar mais do que conseguimos. No Jóias do Passado, jogaremos algumas pérolas (gemas?) dos jogos antigos que deixei passar, desde o Nintendinho até algumas gerações atrás, como o Wii.
		</p>
		<p>
			Algum jogo que você adora não consta na lista de jogos? <a href="https://backloggery.com/88titan88" target="_blank">Veja se eu já não joguei no meu backlog</a> e envie uma mensagem privada para mim no Discord em AugustoTitan#8263 !
		</p>

		<h3 class="text-center">
			<nuxt-link to="/joias/lista" class="text-primary">
				<u>Lista de jogos (clique para abrir)</u>
			</nuxt-link>
		</h3>

		<hr class="my-4">

		<h4 class="text-h4 text-center my-4">
			Análises
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