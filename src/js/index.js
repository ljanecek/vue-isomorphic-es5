var Vue = require('vue');
var _ = require('underscore');
var Router = require('vue-router');

Vue.use(Router);

var router = new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [{
        name: 'Home',
        path: '/',
        component: require('./components/home.vue'),
		meta:{
			title: 'Lorem ipsum dolor'
		}
    }, {
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
