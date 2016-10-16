var index = require('./index.js');
/*
var Vue = require('vue');
var App = require('./components/app.vue');

var vm = new Vue(App)

module.exports = function(context){
	console.log(context.url);
	return vm;
}
*/
module.exports = function(context) {

    return new Promise(function(resolve, reject) {

        if (!index) {
            reject(index.app)
        } else {

			if (index.router) {
		        index.router.push(context.url);
		    }

            resolve(index.app)
        }
    })
}
