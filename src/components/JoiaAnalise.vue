<template>
	<v-card 
		:class="'p-3 my-2 ' + ('joia-atual' in jewel.tags ? 'joia-atual' : '')"
	>
		<v-list-item>
		<v-row>
			<v-col cols="12" sm="4" class="text-center">
				<img 
					v-if="jewel.featured_image != ''"
					:src="jewel.featured_image"
					class="game-cover mb-3 mb-sm-0"
				/>
			</v-col>

			<v-col cols="12" sm="8" class="text-center">
				<h3 class="font-weight-bold mb-2">
					{{ jewel.title }}
				</h3>
				<div v-if="'joia-atual' in jewel.tags">
					<p>Jogando...</p>
				</div>
				<div 
					v-else 
					v-html="jewel.content"
				/>
			</v-col>
		</v-row>
		</v-list-item>
	</v-card>
</template>

<script>
export default {
	props:{
		jewel: Object,
	}
}
</script>

<style>

</style>