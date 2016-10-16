<template lang="pug">
	div
		ul
			li(v-for="item in items") {{ item.name }}

		a(v-on:click.prevent="plus", href="#") My age is: {{age}}

		ul
			li
				router-link(:to="{name: 'Home'}", exact) Home
				router-link(:to="{name: 'SomePage'}") Some Page

		router-view
</template>

<script>
	module.exports = {
		name: 'Main',
		replace: false,
		watch: {
			'$route': function(to, from) {
				if(typeof document != 'undefined')
					document.title = to.meta.title
			}
		},
		data: function() {
			return {
				items: {
					0: {
						name: 'lol'
					},
					1: {
						name: 'lol2'
					}
				},
				age: 0
			}
		},
		methods: {
			onClick: function(){
				this.items[0].name = 'Omfg Event!'
			},
			plus: function() {
				this.age++;
			}
		},
		created: function(){

		}
	}
</script>
