var direct = require('./route/direct');
var signIn = require('./route/sign-in');

module.exports = function (app) {
    app.get('/sign-in', direct({path: __dirname + '/view/sign-in'}));
    app.post('/sign-in', signIn());
    app.get('/sign-up', direct({path: __dirname + '/view/sign-up'}));
};