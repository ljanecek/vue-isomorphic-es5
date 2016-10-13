var Router = require('vue-router'),
    Vue = require('vue');

var router = new Router({
    mode: 'history',
    routes: [{
        name: 'Main',
        path: '/',
        component: require('./components/app.vue')
    }]
});

var app = new Vue({
    router: router
});

module.export = {
    app: app,
    router: router
};
