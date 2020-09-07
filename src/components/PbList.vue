<template>
	<v-card >
		<pb-loader v-if="!srcomLoaded" />
		<pb-loader v-if="!mmlbLoaded" />

		<v-list-item class="mt-2"
			v-for="(pbsArray, game) in pbs"
			:key="game"
		>
		<v-row
		>
			<v-col cols="12" sm="4" class="text-center">
				<img 
					v-if="Array.isArray(pbsArray) && pbsArray.length > 0"
					:src="pbsArray[0].cover" 
					class="game-cover mb-3 mb-sm-0 rounded"
				/>					
			</v-col>
			<v-col cols="12" sm="8">			
				<h2>
					{{ game }}
				</h2>
				<ul v-if="Array.isArray(pbsArray) && pbsArray.length > 0">
					<li
						v-for="pb in pbsArray"
						:key="pb.id"
					>
						<a :href="pb.url" target="_blank">
							{{ pb.category }}
							-
							{{ pb.time }}
						</a>
					</li>
				</ul>					
			</v-col>
			<v-col cols="12">
				<hr />
			</v-col>
		</v-row>
		</v-list-item>
	</v-card>
</template>

<script>
import PbLoader from './loaders/PbLoader.vue'
export default {
	components: {
		'pb-loader': PbLoader,
	},

	props: {
		pbs: Object,
		srcomLoaded: Boolean,
		mmlbLoaded: Boolean,
	}
}
</script>

<style>
.game-cover {
	max-height: 140px;
}
</style>