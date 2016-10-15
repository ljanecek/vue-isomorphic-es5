<template lang="pug">
	div
		h1 {{title}}
</template>

<script>
	module.exports = {
		name: 'Home',
		data: function(){
			return {
				title: 'Home Page'
			}
		},
		methods: {

		},
		created: function(){
			console.log('crated home');
		}
	}
</script>
