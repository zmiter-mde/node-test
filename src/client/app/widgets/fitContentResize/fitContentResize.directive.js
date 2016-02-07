(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitContentResize', fitContentResize);

    fitContentResize.$inject = ['$interval', '$window', 'EventService'];
    /* @ngInject */
    function fitContentResize($interval, $window, eventService) {
        return {
            restrict: 'A',
            scope: {
                marginBottom: '@',
                dynamicResize: '@'
            },
            link: link
        };

        /* @ngInject */
        function link(scope, element, attr) {
            scope.marginBottom = scope.marginBottom ? scope.marginBottom : 0;
            scope.shouldResize = _.isUndefined(scope.dynamicResize) ? true : scope.dynamicResize === 'true';
            scope.previousTopPosition = element.position().top;
            eventService.subscribe(scope, eventService.events.RESIZE, fitToWindowHeight);

            fitToWindowHeight();

            angular.element($window).bind('resize', function () {
                fitToWindowHeight();
            });

            ////////////////////////////////////////

            function fitToWindowHeight() {
                if (!scope.resizeInterval && scope.shouldResize) {
                    scope.resizeInterval = $interval(setElementHeight, 100);
                }
            }

            function setElementHeight() {
                var elementTopPosition = element.position().top;
                var height = $window.innerHeight - elementTopPosition - scope.marginBottom;
                if (height > 0) {
                    element.css('height', height + 'px');
                }
                if (elementRenderingIsFinished(elementTopPosition)) {
                    cancelInterval();
                } else {
                    scope.previousTopPosition = elementTopPosition;
                }
            }

            function elementRenderingIsFinished(elementTopPosition) {
                return scope.previousTopPosition === elementTopPosition;
            }

            function cancelInterval() {
                $interval.cancel(scope.resizeInterval);
                scope.resizeInterval = null;
            }
        }
    }
})();
