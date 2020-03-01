<template>
	<div>
		<p class="text-center">
			Bem-vindo ao meu website!
		</p>

		<div class="row justify-content-center mb-3">
			<div class="col-sm-6 col-lg-4">
				<card-clicavel-com-imagem 
					:imagemSrc="externalUrls.img.desenvolvimentoCardBanner"
					alt="Desenvolvimento de software"
					rota="/development"
				>
					<p class="text-center">
						Aqui você pode conhecer minha carreira profissional, meus conhecimentos e opiniões como desenvolvedor.
					</p>
				</card-clicavel-com-imagem>
			</div>
			<div class="col-sm-6 col-lg-4">
				<card-clicavel-com-imagem 
					:imagemSrc="externalUrls.img.jogosCardBanner"
					alt="Jogos"
					rota="/games"
				>
					<p class="text-center">
						Confira o registro de todos os jogos que já joguei, Jóias do Passado, speedruns e fan games favoritos!
					</p>
				</card-clicavel-com-imagem>
			</div>
		</div>		

		<div class="w-100 text-center">
			<img :src="externalUrls.img.homeIllustration" alt="Image with programmer">
			<br />
			<small class="text-muted text-secondary illustration-credit">
				<a href="https://www.freepik.com/free-photos-vectors/design">Ilustração original criada por freepik - www.freepik.com - ligeiramente editada</a>
			</small>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.illustration-credit a {
		color: $obscured-text-color;
	}
</style>