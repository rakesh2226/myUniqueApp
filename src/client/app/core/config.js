(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    configure.$inject = [
        '$routeProvider',
        'routehelperConfigProvider',
        '$logProvider'
    ];

    /* @ngInject */
    function configure($routeProvider,routehelperConfigProvider, $logProvider) {
        configureRouting();
        // enable/disable debug log to be display in console
        $logProvider.debugEnabled(false);
        function configureRouting() {
            var routeCfg = routehelperConfigProvider;
            routeCfg.config.$routeProvider = $routeProvider;
            routeCfg.config.docTitle = 'CC: Dashboard';

            // routeCfg.config.resolveAlways = { /* @ngInject */
            //     ready: function(datacontext) {
            //         return datacontext.ready();
            //     }
//                ready: ['datacontext', function (datacontext) {
//                    return datacontext.ready();
//                }]
            //};
        }
    }
})();