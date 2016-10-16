/*
	Node.js server
*/

process.env.VUE_ENV = 'server';

var env = process.env.NODE_ENV || 'local',
    compression = require('compression'),
    express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    app = express();


// Server-Side Bundle File
var renderer = require('vue-server-renderer');
var serverBundleFilePath = path.join(__dirname, './dist/js/server.js')
var serverBundleFileCode = fs.readFileSync(serverBundleFilePath, 'utf8');
var bundleRenderer = renderer.createBundleRenderer(serverBundleFileCode, {
	cache: require('lru-cache')({ max: 10000 })
});


app.use(compression());
app.use('/', express.static('dist'));


app.get('*', function(req, res) {

    var stream = bundleRenderer.renderToStream({
        url: req.url
    })

	var title = 'Test'

	var i = 0;



	stream.on('app', function(app){
		res.write('<!DOCTYPE html><html><head><title>'+app.$route.meta.title+'</title></head><body>')
	}).on('data', function(chunk) {
        res.write(chunk)
    }).on('end', function() {
        res.end('<script src="js/app.js"></script></body></html>')
    })
});


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port, function() {
    console.log('Example app listening on port 3000!');
});
