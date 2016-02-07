(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitDate', fitDate);

    /* @ngInject */
    function fitDate() {
        return {
            restrict: 'EA',
            bindToController: true,
            scope: {
                attrId: '@',
                label: '@',
                model: '=',
                disabled: '@',
                required: '@',
                showButtonBar: '@',
                minDate: '=',
                maxDate: '=',
                onChange: '&'
            },
            templateUrl: 'app/widgets/fitDate/fitDate.html',
            controller: ['$scope', FitDateController],
            controllerAs: 'vm'
        };

        /* @ngInject */
        function FitDateController($scope) {
            var vm = this;
            vm.updateModel = updateModel;
            vm.toggleOpen = toggleOpen;
            vm.isOpen = false;
            vm.showButtonBar = vm.showButtonBar !== 'false';
            vm.date = vm.model[vm.attrId] ? Date.parse(vm.model[vm.attrId]) : null;
            $scope.$watch('vm.model[vm.attrId]', function () {
                vm.date = vm.model[vm.attrId] ? new Date(vm.model[vm.attrId]) : null;
            });

            function updateModel() {
                vm.model[vm.attrId] = vm.date ? formatDateToUTC(vm.date) : null;
                vm.onChange({model: vm.model, attrId: vm.attrId, date: vm.date});
            }

            function toggleOpen() {
                vm.opened = !vm.opened;
            }

            function formatDateToUTC(date) {

                var dd = date.getDate();
                if (dd < 10) {
                    dd = '0' + dd;
                }

                var mm = date.getMonth() + 1;
                if (mm < 10) {
                    mm = '0' + mm;
                }

                var yy = date.getFullYear();

                var hours = date.getHours();
                if (hours < 10) {
                    hours = '0' + hours;
                }

                var min = date.getMinutes();
                if (min < 10) {
                    min = '0' + min;
                }

                var sec = date.getSeconds();
                if (sec < 10) {
                    sec = '0' + sec;
                }
                return yy + '-' + mm + '-' + dd + 'T' + hours + ':' + min + ':' + sec;
            }
        }
    }
})();
