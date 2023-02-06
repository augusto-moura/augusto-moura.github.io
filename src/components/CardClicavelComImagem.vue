<template>
	<component :is="linkTag"
		:href="hrefExterno"
		:target="!!hrefExterno && '_blank'"
		:to="finalUrl"
		class="link-with-card"
	>
		<v-card
			hover
			max-width="250px"
			height="100%"
		>
			<v-img
				:src="imagemSrc" :alt="alt"
			/>
			<v-card-text>
				<slot></slot>
			</v-card-text>
		</v-card>
	</component>
</template>

<script>
export default {
	props: {
		imagemSrc: String,
		rota: String,
		alt: String,
		hrefExterno: String,
	},
	computed: {
		linkTag: function(){
			return (this.hrefExterno) ? 
				'a' : 
				'nuxt-link';
		},
		finalUrl: function(){
			return (this.hrefExterno) ? this.rota : this.localePath(this.rota);
		}
	}
}
</script>

<style lang="scss" scoped>
	
	.link-with-card {
		color: inherit;
		text-decoration: inherit;
	}
	.link-with-card .v-card:hover {
		background-color: #af4f54;
		animation: cardHover;
		animation-duration: 0.6s;
	}
	.link-with-card .v-card:hover .v-card__text {
		color: #ffffff;
		animation: cardTextHover;
		animation-duration: 0.2s;
	}

	@keyframes cardHover {
		from {
			background-color: inherit;
		}
		to {
			background-color: #af4f54;
		}
	}

	@keyframes cardTextHover {
		from {
			color: inherit;
		}
		to {
			color: #ffffff;
		}
	}

</style>