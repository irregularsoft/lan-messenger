var http = require('http');
var express = require('express');

var config = require('./configuration.json');

var app = express();

var server = http.createServer(app);
server.listen(config['listen']['port'] || 80);