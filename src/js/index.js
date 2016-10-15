var Vue = require('vue');
var Router = require('vue-router');
var _ = require('underscore');

Vue.use(Router);

var router = new Router({
	linkActiveClass: 'active',
    mode: 'history',
    routes: [{
        name: 'Home',
        path: '/',
        component: require('./components/home.vue')
    },
	{
		name: 'SomePage',
		path: '/some-page',
		component: require('./components/some-page.vue')
	}]
});

var app = new Vue(_.extend({
    router: router
}, require('./components/app.vue')));

module.exports = {
    app: app,
    router: router
};
