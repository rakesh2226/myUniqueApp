(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rkWidgetClose', ccWidgetClose);

    function ccWidgetClose () {
        // Usage:
        // <a rk-widget-close></a>
        // Creates:
        removeController.$inject = ['$scope'];
        var directive = {
            templateUrl: './app/widgets/removeButton.html',
            restrict: 'E',
            scope: {
                callRemove: '&removeMethod',
                callEdit: '&editMethod'
            },
            controller: removeController
        };
        return directive;
        /* @ngInject */
        
        
        function removeController($scope) {
            $scope.removing = false;
            $scope.startRemove = function() {
                $scope.removing = true;
            }
            $scope.cancelRemove = function() {
                $scope.removing = false;
            }
            $scope.confirmDelete = function() {
                $scope.callRemove();
                $scope.removing = false;
            }
            $scope.confirmEdit = function() {
                $scope.callEdit();
            }

        }
        
    }
})();