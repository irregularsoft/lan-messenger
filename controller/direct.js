module.exports = function (options) {
    return function (req, res) {
        res.render(options.path, {model: {}});
    }
};