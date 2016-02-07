(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitSearchFilter', fitSearchFilter);

    /* @ngInject */
    function fitSearchFilter() {
        return {
            restrict: 'EA',
            bindToController: true,
            scope: {
                model: '=',
                rawFields: '=fields'
            },
            templateUrl: 'app/widgets/fitSearchFilter/fitSearchFilter.html',
            controller: FitSearchFilterController,
            controllerAs: 'vm'
        };

        /* @ngInject */
        function FitSearchFilterController() {
            var COLUMNS_COUNT = 3;
            var vm = this;
            vm.hasDefaultSelectOption = hasDefaultSelectOption;
            vm.preselect = preselect;
            initFieldTypes(vm.rawFields);
            vm.fields = getFormattedFields(vm.rawFields);

            /////////////////////////

            function initFieldTypes(rawFields) {
                _.forEach(rawFields, function (field) {
                    field.type = _.isUndefined(field.type) ? 'text' : field.type;
                });
            }

            function hasDefaultSelectOption(field) {
                return _.isUndefined(field.default) || field.default === true;
            }

            function getFormattedFields(rawFields) {
                var columnSize = Math.ceil(rawFields.length / COLUMNS_COUNT);
                return _.chunk(rawFields, columnSize);
            }

            function preselect(field, model) {
                if (field.preselected && _.isEmpty(model[field.name])) {
                    model[field.name] = field.preselected;
                }
            }
        }
    }
})();
