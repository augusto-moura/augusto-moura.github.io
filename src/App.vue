<template>
	<div id="app">
		<a	v-for="menuItem in menuItems()" 
			:key="menuItem.id" 
			href="#" 
			class="btn btn-success"
		>
			<i class="fas fa-plus"></i> {{ menuItem.title }}
		</a>
		<h1>Augusto Beraldi Guedes de Moura</h1>
		<h3>Full-stack developer | PHP | Laravel</h3>	
	</div>
</template>

<script>

export default {
	name: 'app',
	
	data() {
		return {
			menu: [
				{ id: 1, title: "Home" },
				{ id: 2, title: "Software development" },
				{ id: 3, title: "Gaming" }
			]
		};
	},
	methods: {
		menuItems() {
			return this.menu;
		}
	}
}
</script>

<style>

</style>
