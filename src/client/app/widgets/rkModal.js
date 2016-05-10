(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rkModal', rkModal);
    rkModal.$inject = ['$document'];
    function rkModal($document) {
        modalCtrl.$inject = ['$scope'];
        var directive = {
            restrict: 'E',
            transclude: true,
            templateUrl: './app/widgets/modal.html',
            link: link,
            scope: {
                modalOpen: "=open",
                options: "=",
                onClose: "&"
            },
            controller: modalCtrl
        };
        return directive;

        function link($scope, el, attrs) {
            var options = angular.extend({
                height: '250px',
                width: '500px',
                top: '20%',
                left: '20%'
            }, $scope.options);
            el.find('.modal-container').css({
                'width': options.width + 'px',
                'height': options.height + 'px',
                'left': options.left,
                'top' : options.top
            });
            var pageHight = $document.height();
            var pageWidht = $document.width();
            el.find('.modal-blackout').css({
                'width': pageWidht + 'px',
                'height': pageHight + 'px'
            });
        }

        function modalCtrl($scope) {
            $scope.close = function() {
                $scope.modalOpen = false;
                $scope.();
            }
        }

    }
})();