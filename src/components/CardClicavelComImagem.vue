<template>
	<a :href="hrefExterno" :target="!!hrefExterno && '_blank'">
		<div 
			@click="rota && $router.push(rota)"
			class="card mb-3 clickable-card border-primary"
		>
			<img class="card-img-top" :src="imagemSrc" :alt="alt">
			
			<div class="card-body">
				<slot></slot>
			</div>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		imagemSrc: String,
		rota: String,
		alt: String,
		hrefExterno: String
	}
}
</script>

<style lang="scss" scoped>
	a.link-with-card, 
	a.link-with-card:hover{
		color: inherit;
		text-decoration: inherit;
	}

	.clickable-card {
		cursor: pointer;
	}

	.clickable-card:hover {
		background-color: $primary-color;
		color: white;
	}

	@media (min-width: 576px) {
		.clickable-card {
			height: 100%;
		}
	}

</style>