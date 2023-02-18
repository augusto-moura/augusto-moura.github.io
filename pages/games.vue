<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<div class="text-center">
			<img
				:src="externalUrls.img.jogosCardBanner"
				alt="Jogos"
				style="width=250px;"
				class="mb-3 rounded"
			/>
		</div>
		<p>
			{{ $t('games__intro') }}
		</p>
		<p>
			{{ $t('games__my_nicknames_are') }}
		</p>
		<ul>
			<li>88Titan88</li>
			<li>Titanish</li>
			<li>AugustoTitan</li>
		</ul>

		<hr class="my-4">
		
		<v-row justify="center">
			<v-col
				cols="12"
				sm="6"
				class="d-flex justify-center justify-sm-end"
			>
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.backlogCardBanner"
					alt="Backlog"
					hrefExterno="https://backloggery.com/88titan88"
				>
					<p class="card-text">
						{{ $t('games__backloggery_description') }}
					</p>
				</card-clicavel-com-imagem>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				class="d-flex justify-center justify-sm-start"
			>
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.speedrunCardBanner"
					alt="Speedrun"
					rota="/speedrun"
				>
					<p class="card-text">
						{{ $t('games__speedrun_description') }}
					</p>
				</card-clicavel-com-imagem>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				class="d-flex justify-center justify-sm-end"
			>
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.joiasDoPassadoBanner"
					alt="Jóias do passado"
					rota="/joias"
				>
					<p class="card-text">
						{{ $t('games__jewels_description') }}
					</p>
				</card-clicavel-com-imagem>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				class="d-flex justify-center justify-sm-start"
			>
				<card-clicavel-com-imagem
					:imagemSrc="externalUrls.img.fanGamesCardBanner"
					alt="Fan games"
					rota="/fangames"
				>
					<p class="card-text">
						{{ $t('games__fangames_description') }}
					</p>
				</card-clicavel-com-imagem>
			</v-col>
		</v-row>		
	</v-col>
	</v-row>
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