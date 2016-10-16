<template lang="pug">
	div
		h1 {{title}}
</template>

<script>
	module.exports = {
		name: 'Home',
		title: 'Home Page Title',
		data: function(){
			return {
				title: 'Home Page'
			}
		},
		methods: {

		},
		created: function(){

		}
	}
</script>
