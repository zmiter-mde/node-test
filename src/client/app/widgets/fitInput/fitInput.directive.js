(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitInput', fitInput);

    /* @ngInject */
    function fitInput() {
        return {
            restrict: 'EA',
            bindToController: true,
            scope: {
                attrId: '@',
                label: '@',
                model: '=',
                disabled: '@',
                type: '@',
                required: '@',
                maxlength: '@',
                pattern: '@',
                name: '@',
                placeholder: '@',
                onChange: '&'
            },
            templateUrl: 'app/widgets/fitInput/fitInput.html',
            controller: FitInputController,
            controllerAs: 'vm'
        };

        /* @ngInject */
        function FitInputController() {
            var vm = this;
            vm.type = vm.type ? vm.type : 'text';
            vm.class = vm.type === 'checkbox' ? 'generators-checkbox' : '';
        }
    }
})();
