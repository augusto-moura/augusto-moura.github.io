<template>
	<div>
		<p class="text-center mt-3">
			Bem-vindo ao meu website!
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
							Aqui você pode conhecer minha carreira profissional, meus conhecimentos e opiniões como desenvolvedor.
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
							Confira o registro de todos os jogos que já joguei, Jóias do Passado, speedruns e fan games favoritos!
						</p>
					</card-clicavel-com-imagem>
				</v-col>
			</v-row>

		<div class="w-100 text-center">
			<img :src="externalUrls.img.homeIllustration" alt="Programmer wearing Mega Man helmet">
			<br />
			<small class="grayed-text">
				<a href="https://www.freepik.com/free-photos-vectors/design">Ilustração original criada por freepik - www.freepik.com - ligeiramente editada</a>
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