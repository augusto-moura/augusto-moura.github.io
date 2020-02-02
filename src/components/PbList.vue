<template>
	<div class="card">
		<div class="card-body">
			<pb-loader v-if="!srcomLoaded" />
			<pb-loader v-if="!mmlbLoaded" />

			<div
				v-for="(pbsArray, game) in pbs"
				:key="game"
				class="row"
			>
				<div class="col-sm-4 text-center">
					<img 
						v-if="Array.isArray(pbsArray) && pbsArray.length > 0"
						:src="pbsArray[0].cover" 
						class="game-cover mb-3 mb-sm-0 rounded"
					/>					
				</div>
				<div class="col-sm-8">
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
				</div>
				<div class="col-12">
					<hr />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
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