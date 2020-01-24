<template>
	<div>
		<p>
			Meu hobby favorito é o de videogames! Amante de jogos antigos (NES até GameCube), hoje em dia meu gosto combina mais com os indies.
		</p>
		<p>Meus apelidos em comunidades relacionadas a jogos são:</p>
		<ul>
			<li>88Titan88</li>
			<li>Titanish</li>
			<li>AugustoTitan</li>
		</ul>

		<hr>
		
		<a href="https://backloggery.com/88titan88" target="_blank" class="link-with-card">
			<div class="card mb-2 border-primary clickable-card">
				<div class="card-body">
					<h5 class="card-title">
						Backlog
						<i class="fas fa-external-link-alt float-right"></i>
					</h5>
					<p class="card-text">
						Eu mantenho um registro constantemente atualizado de jogos que já joguei, zerei ou completei. Confira!
					</p>
					<div class="w-100 text-center">
						<img src="https://backloggery.com/88titan88/sig.gif" alt="">
					</div>
				</div>
			</div>
		</a>

		<div class="card mb-2 clickable-card border-primary" @click="$router.push('/speedrun')">
			<div class="card-body">
				<h5 class="card-title">Speedrun</h5>
				<p class="card-text">
					Speedrun consiste de zerar um jogo o mais rapidamente possível, considerando um conjunto de regras.
				</p>
				<p class="card-text">
					Desde 2015, acumulei uma boa coleção de speedruns, da qual me oruglho muito!
				</p>					
			</div>
		</div>

		<div class="card mb-2 clickable-card border-primary" @click="$router.push('/joias')">
			<div class="card-body">
				<h5 class="card-title">Jóias do passado</h5>
				<p class="card-text">
					No Jóias do Passado, jogamos alguns jogos antigos que não joguei na época, os analisamos com nosso conhecimento atual de game design e escrevemos pequenas reviews de cada um deles.
				</p>				
			</div>
		</div>

		<div class="card clickable-card border-primary" @click="$router.push('/fangames')">
			<div class="card-body">
				<h5 class="card-title">Fan games</h5>
				<p class="card-text">
					Como não amar um fan game bem-feito? São expansões de franquias ou personagens estabelecidos, e representações do que os fãs querem, independentemente dos desenvolvedores do jogo original estarem fazendo um bom trabalho ou não.
				</p>
				<p class="card-text">
					Aqui está uma lista de projetos feitos por fãs, curada por mim. Ela inclui apenas os que eu considero que vale conferir.
				</p>	
			</div>
		</div>

	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	p {
		text-align: justify;
	}

	a.link-with-card, 
	a.link-with-card:hover{
		color: inherit;
		text-decoration: inherit;
	}

	.clickable-card {
		cursor: pointer;
	}

	.clickable-card:hover {
		background-color: $primary-color;
		color: white;
	}
</style>