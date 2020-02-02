<template>
	<div>
		<div 
			v-for="n in 3" 
			:key="'loader-pb-'+n"
			class="row"
		>
			<div class="col-sm-4 text-center">
				<content-loader				
					:height="45"
					:width="60"
					:speed="2"				
					primaryColor="#ecebeb"
					secondaryColor="#c7c4c4"
					style="max-height: 160px"
				>
					<rect x="10" y="2" rx="2" ry="2" width="40" height="40" />
				</content-loader>	
			</div>
			<div class="col-sm-8">
				<content-loader
					:height="50"
					:width="180"
					:speed="2"				
					primaryColor="#ecebeb"
					secondaryColor="#c7c4c4"
					style="max-height: 150px; max-width: 520px;"
				>
					<rect x="2" y="2" rx="3" ry="3" width="140" height="8" /> 
					<rect x="11" y="12" rx="3" ry="3" width="131" height="8" />
					<rect x="11" y="22" rx="3" ry="3" width="131" height="8" />
				</content-loader>
			</div>
			<div class="col-12">
				<hr />
			</div>				
		</div>
	</div>
</template>

<script>
	import { ContentLoader  } from 'vue-content-loader'
	export default {
		components: {
			'content-loader': ContentLoader
		}
	}

</script>
