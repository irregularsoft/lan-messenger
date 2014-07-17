module.exports = function (options) {
    return function (req, res) {
        res.render(__dirname + "/../view/" + options.path, {isDirect: true});
    }
};