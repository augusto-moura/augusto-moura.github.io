<template>
	<div id="app">
		<router-link
			v-for="menuItem in menuItems()"
			:key="menuItem.id"
			:to="menuItem.path"
			class="btn btn-primary"
		>
			{{ menuItem.title }}
		</router-link>
		
		<h1>Augusto Beraldi Guedes de Moura</h1>
		<h3>Full-stack developer | PHP | Laravel</h3>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	
	data() {
		return {
			menu: [
				{ id: 1, title: "Home", path: '/' },
				{ id: 2, title: "Software development", path: '/development' },
				{ id: 3, title: "Games", path: '/games' }
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
