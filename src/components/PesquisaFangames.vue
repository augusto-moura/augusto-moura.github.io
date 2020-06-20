<template>
	<div>
		<multiselect 
			v-model="appliedFilters" 
			placeholder="Pesquise por marcador..." 
			selectLabel="Adicionar"
			selectedLabel="Selecionado"
			deselectLabel="Remover"
			:searchable="false"
			:options="filterOptions" 
			:multiple="true" 
			:taggable="true"
			group-values="tags"
			group-label="tipo"
			:group-select="false"
		/>

		<div
			v-if="filteredFangames"
		>
			<fan-game 
				v-for="fangame in filteredFangames"
				:key="fangame.ID"
				:fangame="fangame"
				@tagClick="applyTag($event)"
			/>
		</div>
		<big-card-loader v-else class="my-2"/>
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
	components: {
		Multiselect
	},
	data(){
		return {
			fangames: null,
			foundFangames: null,
			appliedFilters: [],
			filterOptions: []
		}
	},
	computed:{
		filteredFangames: function(){
			if(this.fangames === null) 
				return null;
			return this.fangames.filter(fangame => 
				this.appliedFilters.every(tagInFilter => tagInFilter in fangame.tags)
			)
		}		
	},
	methods: {
		searchTagOptions(){
			fetch(`${this.externalUrls.api.baseUrl}/posts/slug:tags-fangames?fields=content`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.text())
			.then(data => {
				this.filterOptions = this.extractTagOptions(JSON.parse(data).content)
			});
		},
		searchFanGames(){
			fetch(`${this.externalUrls.api.baseUrl}/posts/?category=Fan%20Games&per_page=100&order_by=title&order=ASC&fields=ID,title,date,content,slug,featured_image,tags`, {
				headers: new Headers({
					'User-agent': 'Mozilla/4.0 Custom User Agent'
				})
			})
			.then(response => response.json())
			.then(data => {
				this.fangames = data.posts;
				this.foundFangames = data.found;
			});
		},
		extractTagOptions(postContent){
			let matches = postContent.match('<code>(.*)</code>');
			return JSON.parse(matches[1]);
		},
		applyTag(tagDescription){
			if(!this.appliedFilters.includes(tagDescription))
				this.appliedFilters.push(tagDescription)
		}
	},
	mounted(){
		this.searchFanGames();
		this.searchTagOptions();
	}
}
</script>

<style>	
</style>