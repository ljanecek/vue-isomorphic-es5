var Vue = require('vue');
var index = require('./index.js');

Vue.config.debug = true;

index.app.$mount('body > div');

/*


var Vue = require('vue');
var App = require('./components/app.vue');

Vue.config.debug = true;

var vm = new Vue(App).$mount('body > div')
*/
