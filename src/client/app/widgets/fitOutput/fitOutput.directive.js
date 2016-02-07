(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitOutput', fitOutput);

    /* @ngInject */
    function fitOutput() {

        var directive = {
            restrict: 'EA',
            bindToController: true,
            scope: {
                attrId: '@',
                label: '@',
                model: '=',
                type: '@',
                onClick: '&'
            },
            templateUrl: 'app/widgets/fitOutput/fitOutput.html',
            controller: FitOutputController,
            controllerAs: 'vm'
        };

        FitOutputController.$inject = ['UtilsService'];

        return directive;

        /* @ngInject */
        function FitOutputController(utilsService) {
            var vm = this;
            vm.type = vm.type ? vm.type : 'text';
            vm.getBooleanGlyphClass = utilsService.getBooleanGlyphClass;
        }
    }
})();
