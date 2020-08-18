<template>
	<div>
		<nuxt-link to="/games">
			<fa :icon="['fas', 'chevron-left']" class="fa-fw" />
			Voltar para Jogos
		</nuxt-link>
		
		<div class="w-100 text-center">
			<img 
				:src="externalUrls.img.joiasDoPassadoBanner" 
				class="mb-3 rounded"
				style="width: 350px;"
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

		<hr>

		<h3 class="text-primary">Análises</h3>

		<div class="btn-group d-flex mb-3" role="group" aria-label="Alterar ordem de exibição">
			<button 
				:class="'btn ' + (order == 'DESC' ? 'btn-primary' : 'btn-outline-primary')" 
				@click="changeOrder('DESC')"
			>
				<fa :icon="['fas', 'sort-numeric-down-alt']" class="fa-fw" />				
				Recentes primeiro
			</button>
			<button 
				:class="'btn ' + (order == 'ASC' ? 'btn-primary' : 'btn-outline-primary')" 
				@click="changeOrder('ASC')"
			>
				<fa :icon="['fas', 'sort-numeric-down']" class="fa-fw" />
				Antigos primeiro
			</button>
		</div>

		<div
			v-if="jewels"
		>
			<page-picker 
				class="mb-3"
				:page="page"
				:totalPages="totalPages"
				@changePage="changePage"
			/>
			<div 
				v-for="jewel in jewels"
				:key="jewel.ID"
				:class="'card p-3 my-2 ' + ('joia-atual' in jewel.tags ? 'joia-atual' : '')"
			>
				<div class="row">
					<div class="col-sm-4 text-center">
						<img 
							v-if="jewel.featured_image != ''"
							:src="jewel.featured_image"
							class="game-cover mb-3 mb-sm-0"
						/>
					</div>
					<div class="col-sm-8">
						<h4 class="font-weight-bold">{{ jewel.title }}</h4>
						<div v-if="'joia-atual' in jewel.tags">
							<p>Jogando...</p>
						</div>
						<div 
							v-else 
							v-html="jewel.content"
						/>
					</div>				
				</div>
			</div>
			<page-picker 
				class="mb-3"
				:page="page"
				:totalPages="totalPages"
				@changePage="changePage"
			/>
		</div>
		<big-card-loader v-else class="my-2" />
	</div>
</template>

<script>
import BigCardLoader from '../../src/components/loaders/BigCardLoader.vue'
import PagePicker from '../../src/components/PagePicker.vue'
export default {
	components: {
		PagePicker,
		BigCardLoader,
	},

	head: {
		title: 'Jóias do passado',
  	},

	data(){
		return {
			order: 'DESC',
			jewels: null,
			foundJewels: null,
			page: 1,
		}
	},
	methods: {
		changeOrder(order){
			this.jewels = null,
			this.foundJewels = null,
			this.order = order;
			this.page = 1;
			this.searchJewels();
		},
		changePage(page){
			this.jewels = null,
			this.foundJewels = null,
			this.page = page;
			this.searchJewels();
		},
		searchJewels(){
			fetch(`${this.externalUrls.api.baseUrl}/posts/?category=J%C3%B3ias%20do%20passado&order_by=title&order=${this.order}&per_page=20&page=${this.page}fields=ID,title,date,content,slug,featured_image,tags`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.jewels = data.posts;
				this.foundJewels = data.found;
			});
		}
	},
	computed: {
		totalPages() {
			return Math.ceil(this.foundJewels / 20);
		}
	},
	mounted(){
		this.searchJewels();
	}
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