<template>
	<div>
		<p class="text-center mt-3">
			{{ $t('home__welcome') }}
		</p>
			<v-row justify="center">
				<v-col
					cols="12"
					sm="6"
					class="d-flex justify-center justify-sm-end"
				>
					<card-clicavel-com-imagem 
						:imagemSrc="externalUrls.img.desenvolvimentoCardBanner"
						alt="Desenvolvimento de software"
						rota="/development"
					>
						<p class="text-center">
							{{ $t('home__development') }}
						</p>
					</card-clicavel-com-imagem>
				</v-col>
				<v-col
					cols="12"
					sm="6"
					class="d-flex justify-center justify-sm-start"
				>
					<card-clicavel-com-imagem 
						:imagemSrc="externalUrls.img.jogosCardBanner"
						alt="Jogos"
						rota="/games"
					>
						<p class="text-center">
							{{ $t('home__games') }}
						</p>
					</card-clicavel-com-imagem>
				</v-col>
			</v-row>

		<div class="w-100 text-center">
			<img :src="externalUrls.img.homeIllustration" alt="Programmer wearing Mega Man helmet">
			<br />
			<small class="grayed-text">
				<a href="https://www.freepik.com/free-photos-vectors/design">
					{{ $t('home__freepik_credit') }}
				</a>
			</small>
		</div>
	</div>
</template>

<script>
import CardClicavelComImagem from '../src/components/CardClicavelComImagem.vue'
export default {
	components: { CardClicavelComImagem },
	head: {
		title: 'Home',
  	},
}
</script>

<style>
</style>