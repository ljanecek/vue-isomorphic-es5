var Vue = require('vue');
var App = require('./components/app.vue');

var vm = new Vue(App)

module.exports = function(context){
	console.log(context.url);
	return vm;
}
