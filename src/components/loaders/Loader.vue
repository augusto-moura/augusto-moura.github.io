<template>
    <div class="loader-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'Loader',
}
</script>

<style scoped>
	.loader-container {
		display: flex;
		flex-direction: column;
	}

	.loader-container > * {
		background: linear-gradient(
			270deg, 
			#ecebeb, 
			#ecebeb, 
			#c7c4c4, 
			#ecebeb, 
			#ecebeb
		);
		background-size: 1000% 1000%;

		-webkit-animation: LoaderAnimation 3s ease infinite;
		-moz-animation: LoaderAnimation 3s ease infinite;
		-o-animation: LoaderAnimation 3s ease infinite;
		animation: LoaderAnimation 3s ease infinite;
	}

	@-webkit-keyframes LoaderAnimation {
		0%{background-position:100% 50%}
		100%{background-position:0% 50%}
	}
	@-moz-keyframes LoaderAnimation {
		0%{background-position:100% 50%}
		100%{background-position:0% 50%}
	}
	@-o-keyframes LoaderAnimation {
		0%{background-position:100% 50%}
		100%{background-position:0% 50%}
	}
	@keyframes LoaderAnimation {
		0%{background-position:100% 50%}
		100%{background-position:0% 50%}
	}
</style>