<template>
	<v-navigation-drawer
		v-model="isOpenComp"
		app
		right		
		clipped
		floating		
		temporary
		overflow
		z-index="90"
		color="#e6dbdb"
	>
		<v-list
			nav
		>
			<v-list>
				<v-list-item
					v-for="menuItem in menu"
					:key="menuItem.id"
					nuxt :to="menuItem.path"
					class="titan-primary-link"
				>
					<v-list-item-icon>
						<v-icon>{{ menuItem.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title
					>
						{{ menuItem.title }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	model:{
		prop: 'isOpen',
		event: 'input',
	},
	props:{
		menu: Array,
		isOpen: Boolean,
	},
	computed: {
		isOpenComp: {
			get(){
				return this.isOpen;
			},
			set(value){
				this.$emit('input', value)
			}
		}
	},
}
</script>

<style lang="scss">
	
</style>