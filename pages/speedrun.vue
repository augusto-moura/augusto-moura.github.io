<template>
	<div>
		<nuxt-link to="/games">
			<fa :icon="['fas', 'chevron-left']" class="fa-fw" />
			Voltar para Jogos
		</nuxt-link>

		<h1 class="my-3 text-primary">Speedrun</h1>

		<wp-page-content slug="speedrun" :loaderLines="10" />

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
import PbList from '../src/components/PbList.vue'
import WpPageContent from '../src/components/WpPageContent.vue'
import {moment, duration} from 'moment'
export default {
	components: {
		WpPageContent,
		PbList,
	},

	head: {
		title: 'Speedrun'
  	},

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
						cover: pb.game.data.assets['cover-medium'].uri ?? this.externalUrls.img.squareImageNotFound,
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
			})
			.catch(err => {
				this.mmlbPBs = [];
			});
		},
		formatDuration(duration) { 
			return `${duration.hours()}h ${this.padWithZero(duration.minutes())}min ${this.padWithZero(duration.seconds())}s`
		},
		padWithZero: number => (number+'').padStart(2, '0'),
		getMMLBCoverSrc(gameName){
			if(gameName in this.externalUrls.img.megaManCovers)
				return this.externalUrls.img.megaManCovers[gameName];
			return this.externalUrls.img.squareImageNotFound;
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