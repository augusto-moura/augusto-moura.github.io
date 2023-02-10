<template>
	<div class="d-block trakt-watch-history-item">
		<v-btn text left large :href="url" target="_blank" class="no-text-transform">
			<span v-if="isSeriesEpisode" class="text-wrap ma-auto">
				<strong>- {{ historyItem.show.title }}</strong>
				- 
				s{{ historyItem.episode.season }}
				e{{ historyItem.episode.number }}
				-
				{{ historyItem.episode.title }} 
				({{ formatDate(historyItem.watched_at) }})
			</span>
			<span v-if="isMovie" class="text-wrap ma-auto">
				<strong>- {{ historyItem.movie.title }}</strong>
				({{ formatDate(historyItem.watched_at) }})
			</span>
		</v-btn>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	props: {
		historyItem: {
			required: true,
			type: Object
		}
	},
	computed: {
		url(){
			if(this.isMovie){
				return `https://trakt.tv/movies/${this.historyItem.movie.ids.slug}`;
			}
			if(this.isSeriesEpisode){
				const showSlug = this.historyItem.show.ids.slug;
				const episodeSeason = this.historyItem.episode.season;
				const episodeNumber = this.historyItem.episode.number;
				return `https://trakt.tv/shows/${showSlug}/seasons/${episodeSeason}/episodes/${episodeNumber}`;
			}
			return false;
		},
		isMovie(){
			return this.historyItem.type == 'movie';
		},
		isSeriesEpisode(){
			return this.historyItem.type == 'episode';
		},
	},
	methods: {
		formatDate(dateYmd){
			return moment(dateYmd).format('DD/MM/yy');
		}
	},
}
</script>

<style scoped>
</style>