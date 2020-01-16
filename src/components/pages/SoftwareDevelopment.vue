<template>
	<div>
		<h2 class="text-primary">
			Desenvolvimento de software
		</h2>

		<p>
			Meu primeiro contato com programação foi quando, ainda criança, explorava as possibilidades de criação no RPG Maker 2000. Mais tarde, na disciplina de Computação Científica do curso de Engenharia Elétrica, percebi que tinha afinidade com desenvolvimento de software.
		</p>
		<p>
			Trabalho como desenvolvedor full-stack em uma autarquia federal há 3 anos, e minha paixão por programação continua a crescer! Tento sempre procurar por boas ferramentas para resolver meus problemas, e evito me apegar demais a qualquer tecnologia.
		</p>

		<hr> 

		<h3>Tecnologias com que já trabalhei</h3>

		<tecnologia-que-ja-trabalhei
			iconClass='fab fa-php'
			color='#4F5B93'
			name='PHP'
		/>
		<p>
			Minha linguagem preferida para back-end, pela sua versatilidade e facilidade de aprendizado.<br>
			Conta com upgrades significativos a cada versão nova lançada... se engana quem ainda acha que é linguagem de sobrinho!
		</p>
		<ul>
			<li>
				<tecnologia-que-ja-trabalhei
					iconClass='fab fa-laravel'
					color='#ff2d20'
					name='Laravel'
				/>
				<p>
					Framework maravilhoso para PHP, extremamente produtivo e com soluções elegantes para problemas típicos. É minha ferramenta de escolha para qualquer aplicação de médio ou alto nível de complexidade.
				</p>
			</li>
			<li>
				<tecnologia-que-ja-trabalhei
					iconClass='fab fa-wordpress'
					color='#006088'
					name='Wordpress'
				/>
				<p>
					Não simpatizo muito com a estrutura do código do Wordpress, mas admito que ele possui muitas vantagens, entre elas fornecer um painel extremamente completo e uma miríade de plugins para estender funcionalidades.<br>
					Para projetos de baixo nível de complexidade, ou seja, que envolvam principalmente manipulação de dados textuais, com poucas correlações entre dados, o Wordpress é mais que recomendado.
				</p>
			</li>
		</ul>

		<tecnologia-que-ja-trabalhei
			iconClass='fab fa-js'
			color='#FFCA28'
			name='Javascript'
		/>
		<ul>
			<li>
				<tecnologia-que-ja-trabalhei
					iconClass='fab fa-vuejs'
					color='#41B883'
					name='Vue.js'
				/>
				<p>
					Meu framework front-end favorito! Gosto do modo como os templates são limpos, e os componentes possuem estruturas mais definidas e parecida entre si. <br>
					O site que você está acessando neste momento é construído com Vue.js com Vue Router, rs. Não usei aqui pois é um site predominantemente estático, mas gosto do Vuex para gerenciamento de estados.
				</p>
			</li>
			<li>
				<tecnologia-que-ja-trabalhei
					iconClass='fab fa-react'
					color='#61dafb'
					name='React'
				/>
				<p>
					Sua proposta é de ser o menos opinativo possível, mas isso traz a desvantagem de ser verboso e, em muitos casos, nos obrigar a reinventar a roda. Mas ainda é o framework front-end mais popular, então conta com muitos componentes e bibliotecas disponíveis (além de respostas no Stack Overflow).
				</p>
			</li>
		</ul>

		<tecnologia-que-ja-trabalhei
			iconClass='fab fa-adobe'
			color='#FF0000'
			name='Adobe ColdFusion'
		/>
		<p>
			Uma plataforma de desenvolvimento para aplicações web que deixa a desejar. O CFML possui em muitas situações sintaxe extremamente inconsistente e duvidosa, além de alguns recursos importantes do modo template não existirem no modo script.<br>
			Nunca utilizei o framework ColdBox, mas ele parece bom, considerando as limitações da plataforma.
		</p>
	</div>
</template>

<script>
export default {
}
</script>

<style>
	p {
		text-align: justify;
	}
</style>