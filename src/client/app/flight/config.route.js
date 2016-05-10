(function () {
    'use strict';

    angular.module('app.flight')
        .run(routeConfig);

    routeConfig.$inject = ['routehelper'];
    /* @ngInject */
    function routeConfig(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/flight/result',
                config: {
                    templateUrl: 'app/flight/flightResult.html',
                    title: 'Flight Result'
                }
            },
            {
                url: '/flight',
                config: {
                    templateUrl: 'app/flight/flightSearch.html',
                    title: 'flightSearch'
                }
            }
        ];
    }
})();