(function() {
    'use strict';

    angular
        .module('app.flight')
        .controller('FlightResult', FlightResult);

    FlightResult.$inject = [
        '$location', '$scope', '$routeParams', '$window',
        'common'
    ];

    function FlightResult(
        $location, $scope, $routeParams, $window,
        common) {
        /*jshint validthis: true */
        var me = this;
        me.results = [{
            "price": 4875,
            "routes": [{
                "flightNo": "Ai-202",
                "via": "BLR,AMD",
                "depart": "10.00AM",
                "arrive": "12.00PM"
            }]
        }, {
            "price": 3999,
            "routes": [{
                "flightNo": "9E-202",
                "via": "BLR,BOM",
                "depart": "11.00AM",
                "arrive": "12.00PM"
            }, {
                "flightNo": "8E-202",
                "via": "BOM,BLR",
                "depart": "08.00PM",
                "arrive": "11.00PM"
            }]
        }, {
            "price": 5789,
            "routes": [{
                "flightNo": "AS-585",
                "via": "BLR,DEL",
                "depart": "03.00AM",
                "arrive": "04.00AM"
            }, {
                "flightNo": "AS-586",
                "via": "DEL,AMD",
                "depart": "05.00AM",
                "arrive": "06.00AM"
            }]
        }];

    }
})();