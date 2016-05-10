(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rkFontScale', rkFontScale);

    function rkFontScale() {
        fontScaleCtrl.$inject = ['$scope'];
        var directive = {
            restrict: 'E',
            template: getTemplate,
            link: link,
            scope: {},
            controller: fontScaleCtrl
        };
        return directive;

        function link(scope, el, attrs) {
            scope.$watch('size', function(newVal) {
                el.next().css('font-size', newVal + '%');
            });
        }

        function fontScaleCtrl($scope) {
            $scope.size = 100;
            $scope.fontScale = function(flag) {
                if (flag === 0) {
                    this.size -= 20;
                } else {
                    this.size += 20;
                }

            }
        }

        function getTemplate() {
            return "<div style='padding:1em 0 0 1em;'>Font Scale : " +
                "<span class='glyphicon glyphicon-zoom-out' style='cursor: pointer;' ng-click='fontScale(0)'></span> " +
                "<span style='cursor: pointer;' class='glyphicon glyphicon-zoom-in' ng-click='fontScale(1)'></span> " +
                "</div>";
        }
    }
})();