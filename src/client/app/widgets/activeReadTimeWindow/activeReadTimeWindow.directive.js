(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('activeReadTimeWindow', activeReadTimeWindow);

    /* @ngInject */
    function activeReadTimeWindow() {
        return {
            restrict: 'EA',
            bindToController: true,
            scope: {
                model: '='
            },
            templateUrl: 'app/widgets/activeReadTimeWindow/activeReadTimeWindow.html',
            controller: ActiveReadTimeWindowController,
            controllerAs: 'vm'
        };

        /* @ngInject */
        function ActiveReadTimeWindowController() {
            var vm = this;
        }
    }
})();
