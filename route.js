var direct = require('./controller/direct');
var signIn = require('./controller/sign-in');

module.exports = function (app) {
    app.get('/sign-in', direct({path: __dirname + '/view/sign-in'}));
    app.post('/sign-in', signIn());
    app.get('/sign-up', direct({path: __dirname + '/view/sign-up'}));
};