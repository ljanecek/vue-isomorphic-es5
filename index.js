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
var bundleRenderer = renderer.createBundleRenderer(serverBundleFileCode, {});


app.use(compression());
app.use('/', express.static('dist'));


app.get('*', function(req, res) {

    var stream = bundleRenderer.renderToStream({
        url: req.url
    })

    res.write('<!DOCTYPE html><html><head><title>...</title></head><body>')

    stream.on('data', function(chunk) {
        res.write(chunk)
    })

    stream.on('end', function() {
        res.end('<script src="js/app.js"></script></body></html>')
    })
});


var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port, function() {
    console.log('Example app listening on port 3000!');
});


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
