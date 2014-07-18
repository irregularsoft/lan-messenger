module.exports = function (options) {
    return function (req, res) {
        if(!(req.body.name && req.body.password)) {
            res.render(__dirname + '/../view/sign-in', {model: {isIncorrectNameOrPassword: true}});
        }
        res.end();
    };
};