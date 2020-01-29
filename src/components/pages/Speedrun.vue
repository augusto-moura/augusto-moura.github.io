<template>
	<div>
		<router-link to="/games">
			<i class="fas fa-chevron-left fa-fw"></i>
			Voltar para Jogos
		</router-link>

		<h1 class="my-3 text-primary">Speedrun</h1>

		<p>
			Em videogames, speedrun significa completar um objetivo dentro de um jogo no menor tempo possível. É um desafio que adiciona profundidade e dificuldade aos jogos quando comparados a playthroughs casuais, e bons resultados dependem de muita dedicação e habilidade.
		</p>

		<p>
			Speedruns são divididos em categorias que ditam os objetivos que têm que ser alcançados e as limitações, ou seja, o que é proibido fazer. Geralmente os jogos possuem pelo menos uma categoria em que tudo é liberado, chamadas de any%, em que é permitido o uso inclusive de erros na programação, exploits, e tudo que é alcançável sem uso de ferramentas externas como cheat codes. Para os que não gostam de glitches, é muito comum existir uma categoria que não permite o uso de glitches, então tem para todos os gostos .
		</p>

		<p>
			Links:
		</p>
		<ul>
			<li>
				<a href="http://www.speedrun.com/user/Titanish" target="_blank">
					Meu perfil no Speedrun.com
				</a>
			</li>
			<li>
				<a href="http://megamanleaderboards.net/index.php?page=runner&name=Titanish" target="_blank">
					Meu perfil no Mega Man Leaderboards
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=j1jIY8LxDzs" target="_blank">
					Guia de speedrun para iniciantes (feito por mim)
				</a>
			</li>
			<li>
				<a href="http://wiki.speedrunsbrasil.com/Gloss%C3%A1rio" target="_blank">
					Glossário (termos utilizados) de speedrun
				</a>
			</li>
		</ul>

		<hr>

		<p>
			Abaixo, meus PBs (personal bests), isto é, meus recordes pessoais em cada jogo que fiz speedrun.
		</p>

		<div v-if="pbs">
			<pb-list :pbs="pbs" :srcomLoaded="srcomLoaded" :mmlbLoaded="mmlbLoaded" />
		</div>
		<p v-else>
			Carregando...
		</p>
	</div>
</template>

<script>
import {moment, duration} from 'moment'
export default {
	computed: {
		pbs: function(){
			return [
				...( this.srcomLoaded ? this.srcomPBs : [] ),
				...( this.mmlbLoaded ? this.mmlbPBs : [] ),
			]
			.sort((a, b) => (a.game > b.game) ? 1 : -1) //ordem alfabética
			.reduce((acc, curr) => { //agrupar por nome de jogo
				if(!acc[curr.game]) acc[curr.game] = [];
				acc[curr.game].push(curr);
				return acc;
			},{});
		},
		srcomLoaded: function(){
			return Array.isArray(this.srcomPBs);
		},
		mmlbLoaded: function(){
			return Array.isArray(this.mmlbPBs);
		}
	},
	data(){
		return {
			srcomPBs: null,
			mmlbPBs: null,
			mmlbCovers: {
				'Mega Man X8': 'https://augustobgm.files.wordpress.com/2020/01/mega-man-x8.jpg',
				'Mega Man X4': 'https://augustobgm.files.wordpress.com/2020/01/mega-man-x4.jpg',
				'Mega Man Zero': 'https://augustobgm.files.wordpress.com/2020/01/mega-man-zero.jpg',
			}
		}
	},
	methods: {
		searchSrcomPbs(){
			fetch(`https://www.speedrun.com/api/v1/users/18vnevjl/personal-bests?embed=game,category,variables`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				//Retirar PBs de Mega Man (devem ser usados os da MMLB) e IL
				this.srcomPBs = data.data
					.filter(pb => 
						!pb.game.data.names.international.startsWith('Mega Man')
						&& pb.run.level == null
					)
					.map(pb => ({
						id: pb.run.id,
						game: pb.game.data.names.international,
						category: pb.category.data.name,
						time: this.formatDuration(duration(pb.run.times.primary)),
						cover: pb.game.data.assets['cover-medium'].uri ?? 'https://augustobgm.files.wordpress.com/2020/01/square-image-not-found.png',
						url: pb.run.weblink
					}));	
			});
		},
		searchMMLBPbs(){
			fetch(`https://megamanleaderboards.net/api/runs.php?runner=Titanish&ex=1`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.text())
			.then(data => {
				this.mmlbPBs = JSON.parse(data.replace("\'", "\\'")).runs
					.map(pb => ({
						id: pb.id,
						game: pb.game.name,
						category: pb.category,
						time: this.formatDuration(duration(pb.converted_time * 10)),
						cover: this.getMMLBCoverSrc(pb.game.name),
						url: pb.video
					}));
			});
		},
		formatDuration(duration) { 
			return `${duration.hours()}h ${this.padWithZero(duration.minutes())}min ${this.padWithZero(duration.seconds())}s`
		},
		padWithZero: number => (number+'').padStart(2, '0'),
		getMMLBCoverSrc(gameName){
			if(gameName in this.mmlbCovers)
				return this.mmlbCovers[gameName];
			return 'https://augustobgm.files.wordpress.com/2020/01/square-image-not-found.png';
		},
	},
	mounted(){
		this.searchSrcomPbs();
		this.searchMMLBPbs();
	},	
}
</script>

<style>

</style>