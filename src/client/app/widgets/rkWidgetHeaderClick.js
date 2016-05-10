(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rkWidgetHeaderClick', rkWidgetHeaderClick);

    rkWidgetHeaderClick.$inject = ['$parse'];

    function rkWidgetHeaderClick($parse) {
        // Usage:
        // <a rk-widget-close></a>
        // Creates:
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;
        /* @ngInject */

        function link(scope, el, attrs) {
            var handlerFn = $parse(attrs["rkWidgetHeaderClick"]);
            var panelBody = el.next().next(),
                hide = false;
            el.on('click', function() {
                if (panelBody.hasClass('hide')) {
                    panelBody.removeClass('hide');
                    // hide = false;
                } else {
                    panelBody.addClass('hide');
                    // hide = true;
                }
                // this call to update the scope param of the parent handler
                if (handlerFn) {
                    scope.$apply(function() {
                        handlerFn(scope);
                    });    
                }
                
            });
        }


    }
})();