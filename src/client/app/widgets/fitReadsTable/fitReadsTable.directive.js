(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitReadsTable', fitReadsTable);

    /* @ngInject */
    function fitReadsTable() {

        var directive = {
            restrict: 'E',
            bindToController: true,
            scope: {
                validity: '@',
                model: '='
            },
            templateUrl: 'app/widgets/fitReadsTable/fitReadsTable.html',
            controller: FitReadsTableController,
            controllerAs: 'vm'
        };

        return directive;

        /* @ngInject */
        function FitReadsTableController() {
            var vm = this;
        }
    }
})();
