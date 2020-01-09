<template functional>
	<h4 class="align-middle d-flex align-items-center">
		<i 
			:class="`${props.iconClass} fa-fw icone-tecnologia`" 
			:style="`color: ${props.color}`"
		>
		</i> 
		<span class="ml-2">{{ props.name }}</span>
	</h4>
</template>

<script>
export default {
	props: {
		iconClass: {
			required: true,
			type: String
		},
		color: {
			required: true,
			type: String
		},
		name: {
			required: true,
			type: String
		}
	}
}
</script>

<style>
	.icone-tecnologia {
		font-size: 45px;
	}
</style>