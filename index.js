var http = require('http');
var express = require('express');
var serveFavicon = require('serve-favicon');

var config = require('./configuration.json');

var app = express();
app.use(serveFavicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(config['listen']['port'] || 80);