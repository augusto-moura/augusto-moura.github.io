<template>
	<div>
		<p>
			Meu hobby favorito é o de videogames! Sou amante de jogos antigos, principalmente platformers e metroidvanias, logo, hoje em dia meu gosto combina mais com os indies.
		</p>
		<p>Meus apelidos em comunidades relacionadas a jogos são:</p>
		<ul>
			<li>88Titan88</li>
			<li>Titanish</li>
			<li>AugustoTitan</li>
		</ul>

		<hr>
		
		<div class="row justify-content-center mb-3">
			<div class="col-sm-6 col-lg-4">
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.backlogCardBanner"
					alt="Backlog"
					hrefExterno="https://backloggery.com/88titan88"
				>
					<p class="card-text">
						Eu mantenho um registro constantemente atualizado de jogos que já joguei, zerei ou completei. Confira!
					</p>
				</card-clicavel-com-imagem>
			</div>
			<div class="col-sm-6 col-lg-4">
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.speedrunCardBanner"
					alt="Speedrun"
					rota="/speedrun"
				>
					<p class="card-text">
						Speedrun consiste de zerar um jogo o mais rapidamente possível, considerando um conjunto de regras.
					</p>
					<p class="card-text">
						Desde 2015, acumulei uma boa coleção de speedruns, da qual me oruglho muito!
					</p>
				</card-clicavel-com-imagem>
			</div>
		</div>

		<div class="row justify-content-center mb-3">
			<div class="col-sm-6 col-lg-4">
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.joiasDoPassadoBanner"
					alt="Jóias do passado"
					rota="/joias"
				>
					<p class="card-text">
						No Jóias do Passado, jogamos alguns jogos antigos que não joguei na época, os analisamos com nosso conhecimento atual de game design e escrevemos pequenas reviews de cada um deles.
					</p>
				</card-clicavel-com-imagem>
			</div>
			<div class="col-sm-6 col-lg-4">
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.fanGamesCardBanner"
					alt="Fan games"
					rota="/fangames"
				>
					<p class="card-text">
						Como não amar um fan game bem-feito? São expansões de franquias ou personagens estabelecidos, e representações do que os fãs querem, independentemente dos desenvolvedores do jogo original estarem fazendo um bom trabalho ou não.
					</p>
					<p class="card-text">
						Aqui está uma lista de projetos feitos por fãs, curada por mim. Ela inclui apenas os que eu considero que vale conferir.
					</p>
				</card-clicavel-com-imagem>
			</div>
		</div>
	</div>
</template>

<script>
import CardClicavelComImagem from '../src/components/CardClicavelComImagem.vue'
export default {
	components: {
		CardClicavelComImagem,
	},
	head: {
		title: 'Jogos',
  	},
}
</script>

<style lang="scss" scoped>
	p {
		text-align: justify;
	}
</style>