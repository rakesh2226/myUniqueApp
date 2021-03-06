(function () {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute', 'ngSanitize', 'ngResource',
        /*
         * Our reusable cross app code modules
         */
        'blocks.logger', 'blocks.router',

        /*
         * 3rd Party modules
         */
         'ngplus'
    ]);
})();