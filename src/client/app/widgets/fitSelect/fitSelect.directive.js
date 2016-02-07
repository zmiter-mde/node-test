(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitSelect', fitSelect);

    /* @ngInject */
    function fitSelect() {
        return {
            restrict: 'EA',
            bindToController: true,
            scope: {
                model: '=',
                options: '=',
                attrId: '@',
                label: '@',
                onChange: '&',
                getOptionText: '=',
                initSelect: '=',
                defaultOption: '@',
                inactive: '='

            },
            templateUrl: 'app/widgets/fitSelect/fitSelect.html',
            controller: SelectWidgetController,
            controllerAs: 'vm'
        };

        /* @ngInject */
        function SelectWidgetController() {
            var vm = this;
            vm.updateModel = updateModel;
            vm.getText = getText;
            vm.init = init;
            vm.hasDefaultOption = hasDefaultOption;

            vm.id = getId();

            function getId() {
                if (vm.attrId) {
                    return 'id_' + vm.attrId;
                } else {
                    return 'id_select';
                }
            }

            function updateModel() {
                vm.onChange({model: vm.model});
            }

            function getText(option) {
                if (vm.getOptionText) {
                    return vm.getOptionText(option);
                } else {
                    return option[vm.attrId];
                }
            }

            function init() {
                if (vm.initSelect) {
                    vm.initSelect();
                }
            }

            function hasDefaultOption() {
                return vm.defaultOption ? vm.defaultOption === 'true' : false;
            }
        }

    }
})();
