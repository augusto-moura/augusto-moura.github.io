<template>
	<v-row justify="center">
	<v-col
		cols="12"
		md="9"
		lg="7"
		xl="6"
	>
		<div class="text-center">
			<h1>{{ $t('entertainment')}}</h1>
		</div>

		<v-card>
			<v-card-text>
				<h2 class="mb-4">{{ $t('entertainment__recently_watched') }}:</h2>

				<div v-if="watchHistoryItems">
					<trakt-watch-history-item 
						v-for="watchHistoryItem in watchHistoryItems"
						:key="watchHistoryItem.id"
						:historyItem="watchHistoryItem"
					/>
				</div>
				<wp-page-content-loader v-else 
					:lines="10" 
					:verticalSpacing="5" 
				/>

				<v-btn text color="primary" class="mt-3"
					href="https://trakt.tv/users/augustomoura/history"
					target="_blank"
				>
					{{ $t('entertainment__view_full_watch_history') }}...
				</v-btn>
			</v-card-text>
		</v-card>
		
	</v-col>
	</v-row>
</template>

<script>
import {getTraktWatchHistory} from '../src/resources/traktApi';
import TraktWatchHistoryItem from '../src/components/TraktWatchHistoryItem.vue';
import WpPageContentLoader from '../src/components/loaders/WpPageContentLoader.vue'

export default {
	components: {
		TraktWatchHistoryItem,
		WpPageContentLoader,
	},

	head: {
		title: 'Filmes/Séries'
	},

	data(){
		return {
			watchHistoryItems: null,
		}
	},
	methods: {
		getTraktWatchHistory,
		
	},
	async mounted(){
		this.watchHistoryItems = await this.getTraktWatchHistory();
	},	
}
</script>

<style>

</style>