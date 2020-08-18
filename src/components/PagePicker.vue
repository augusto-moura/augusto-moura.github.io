<template>
	<div class="d-flex justify-content-center align-items-center">
		<button 
			v-if="page > 1"
			class="btn btn-outline-secondary mr-3"
			@click.prevent="$emit('changePage', page - 1)"
		>
			<fa :icon="['fas', 'chevron-left']" class="fa-fw" />
		</button>
		<span class="text-primary font-weight-bold">
			Página {{ page }} de {{ totalPages }}
		</span>
		<button 
			v-if="page < totalPages"
			class="btn btn-outline-secondary ml-3"
			@click.prevent="$emit('changePage', page + 1)"
		>
			<fa :icon="['fas', 'chevron-right']" class="fa-fw" />
		</button>		
	</div>
</template>

<script>
export default {
	props: {
		page: Number,
		totalPages: Number,
	},

}
</script>

<style>

</style>