(function () {
    'use strict';

    angular
        .module('fits.core')
        .factory('EventService', EventService);

    EventService.$inject = ['$rootScope'];
    /* @ngInject */
    function EventService($rootScope) {
        return {
            events: getEvents(),
            subscribe: subscribe,
            notify: notify
        };

        ////////////////

        function subscribe(scope, event, callback) {
            var handler = $rootScope.$on(event, callback);
            scope.$on('$destroy', handler);
        }

        function notify(event) {
            $rootScope.$emit(event);
        }

        function getEvents() {
            return {
                RESIZE: 'RESIZE'
            };
        }
    }
})();