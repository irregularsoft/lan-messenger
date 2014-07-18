;(function () {
    require.config({
        paths: {
            'vendor/jquery': '../bower_components/jquery/dist/jquery.min',
            'vendor/bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
            'vendor/bootstrapValidator': '../bower_components/bootstrapValidator/dist/js/bootstrapValidator.min'
        },
        shim: {
            'vendor/jquery': {
                exports: 'jQuery'
            },
            'vendor/bootstrap': {
                deps: ['vendor/jquery'],
                exports: 'jQuery.fn.popover'
            },
            'vendor/bootstrapValidator': {
                deps: ['vendor/bootstrap'],
                exports: 'jQuery.fn.popover'
            }
        }
    });
    require(['vendor/jquery', 'vendor/bootstrap', 'vendor/bootstrapValidator'], function ($) {
        $(function () {
            $('form').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required'
                            },
                            stringLength: {
                                min: 1,
                                max: 20,
                                message: 'The name must be more than 1 and less than 20 characters long'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9_\.]+$/,
                                message: 'The name can only consist of alphabetical, number, dot and underscore'
                            }
                        }
                    },
                    nickname: {
                        validators: {
                            notEmpty: {
                                message: 'The nickname is required'
                            },
                            stringLength: {
                                min: 1,
                                max: 20,
                                message: 'The nickname must be more than 1 and less than 20 characters long'
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required'
                            },
                            stringLength: {
                                min: 1,
                                max: 20,
                                message: 'The password must be more than 1 and less than 20 characters long'
                            }
                        }
                    }
                }
            });
            var password = $('#password');
            var isShowPassword = $('#isShowPassword');
            isShowPassword.on('click', function () {
                if(isShowPassword.is(':checked')) {
                    password.attr('type', 'text')
                } else {
                    password.attr('type', 'password');
                }
            });
        });
    });
})();