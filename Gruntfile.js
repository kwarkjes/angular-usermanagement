module.exports = function(grunt) {
    var settings = {
        concat: {
            dist: {
                src: [
                    'public/vendor/modernizr/modernizr.js',
                    'public/vendor/jquery/dist/jquery.min.js',
                    'public/vendor/foundation/js/foundation.min.js',
                    'public/vendor/angular/angular.js',
                    'public/vendor/angular-route/angular-route.js',
                    'public/vendor/angular-animate/angular-animate.js',
                    'public/vendor/md5/build/md5.min.js',
                    'assets/js/app.js',
                    'assets/js/controllers.js'
                ]
            }
        },
    };
    require('flexible-gruntfile')(grunt, settings);
};
