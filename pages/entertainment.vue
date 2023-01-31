<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<div class="text-center">
			<h1>Filmes/Séries</h1>
		</div>

		<v-card>
			<v-card-text>
				<h2 class="mb-4">Últimos filmes/séries assistidos:</h2>

				<div v-if="watchHistoryItems">
					<div v-for="watchHistoryItem in watchHistoryItems"
						:key="watchHistoryItem.id"
					>
						<p v-if="watchHistoryItem.type == 'episode'">
							<strong>- {{ watchHistoryItem.show.title }}</strong>
							- 
							s{{ watchHistoryItem.episode.season }}
							e{{ watchHistoryItem.episode.number }}
							-
							{{ watchHistoryItem.episode.title }} 
							<!-- ({{ formatDate(watchHistoryItem.watched_at) }}) -->
							({{ formatDate(watchHistoryItem.watched_at) }})
						</p>
					</div>
				</div>
			</v-card-text>
		</v-card>
		
	</v-col>
	</v-row>
</template>

<script>
import moment from 'moment';
import {getTraktWatchHistory} from '../src/resources/traktApi';
export default {
	components: {
	},

	head: {
		title: 'Filmes/Séries'
	},

	data(){
		return {
			watchHistoryItems: [],
		}
	},
	methods: {
		getTraktWatchHistory,
		formatDate(dateYmd){
			return moment(dateYmd).format('DD/MM/yy');
		}
	},
	async mounted(){
		this.watchHistoryItems = await this.getTraktWatchHistory();
	},	
}
</script>

<style>

</style>