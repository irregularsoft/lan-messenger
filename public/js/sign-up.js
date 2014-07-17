;(function () {
    require.config({
        paths: {
            'vendor/jquery': '../bower_components/jquery/dist/jquery.min',
            'vendor/bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
        },
        shim: {
            'vendor/jquery': {
                exports: 'jQuery'
            },
            'vendor/bootstrap': {
                deps: ['vendor/jquery'],
                exports: 'jQuery.fn.popover'
            }
        }
    });
    require(['vendor/bootstrap'], function () {});
})();