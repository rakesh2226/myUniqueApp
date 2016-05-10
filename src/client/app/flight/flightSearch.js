(function() {
    'use strict';

    angular
        .module('app.flight')
        .controller('FlightSearch', FlightSearch);

    FlightSearch.$inject = [
        '$location', '$scope', '$routeParams', '$window',
        'common'
    ];

    function FlightSearch(
        $location, $scope, $routeParams, $window,
        common) {
        /*jshint validthis: true */
        var me = this;
        me.searchObj = {};
        $scope.onSubmit = function() {
            $location.path('/flight/result');     
        };
    }
})();