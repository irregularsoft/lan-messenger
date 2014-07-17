var http = require('http');
var express = require('express');
var serveFavicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var config = require('./configuration.json');
var route = require('./route');

var app = express();
app.set('view engine', 'ejs');
app.use(serveFavicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('lan-messenger'));
app.use(session({
    'secret': 'lan-messenger',
    'maxage': config['session']['maxage']
}));
route(app);

var server = http.createServer(app);
server.listen(config['listen']['port'] || 80);