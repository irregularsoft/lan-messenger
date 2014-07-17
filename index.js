var http = require('http');
var express = require('express');
var serveFavicon = require('serve-favicon');
var bodyParser = require('body-parser');

var config = require('./configuration.json');

var app = express();
app.use(serveFavicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var direct = require('./route/direct');
app.get('/sign-in', direct({path: 'sign-in'}));
var signIn = require('./route/sign-in');
app.post('/sign-in', signIn({}));

var server = http.createServer(app);
server.listen(config['listen']['port'] || 80);