var Vue = require('vue');
var App = require('./components/app.vue');

Vue.config.debug = true;

var vm = new Vue(App).$mount('body > div')
