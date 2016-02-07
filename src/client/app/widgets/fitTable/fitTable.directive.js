(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitTable', fitTable);

    /* @ngInject */
    function fitTable() {
        return {
            restrict: 'E',
            transclude: {
                header: '?fitHeader',
                body: 'fitBody'
            },
            scope: {
                model: '=',
                marginBottom: '@',
                pageChanged: '&',
                showPagination: '@',
                dynamicResize: '@'
            },
            templateUrl: 'app/widgets/fitTable/fitTable.html',
            bindToController: true,
            controller: FitTableController,
            controllerAs: 'vm'
        };

        /* @ngInject */
        function FitTableController() {
            var vm = this;
            vm.marginBottom = vm.marginBottom ? vm.marginBottom : 20;
            vm.dynamicResize = _.isUndefined(vm.dynamicResize) ? true : vm.dynamicResize === 'true';
            vm.hasPagination = _.isUndefined(vm.showPagination) ? true : vm.showPagination === 'true';
            vm.hasMultiplePages = hasMultiplePages;
            vm.getTotalPagesCount = getTotalPagesCount;
            vm.countPerPageOptions = getCountPerPageOptions();
            vm.paginationCountChanged = paginationCountChanged;

            function paginationCountChanged() {
                vm.model.currentPage = 1;
                vm.pageChanged();
            }

            function hasMultiplePages() {
                return vm.model.totalModelsCount > getItemsPerPageCount();
            }

            function getTotalPagesCount() {
                return Math.ceil(vm.model.totalModelsCount / getItemsPerPageCount());
            }

            function getCountPerPageOptions() {
                return [10, 50, 100, 500];
            }

            function getItemsPerPageCount() {
                return hasLimit() ? vm.model.searchModel.limit : vm.model.itemsPerPage;
            }

            function hasLimit() {
                return !_.isEmpty(vm.model.searchModel) && _.isNumber(vm.model.searchModel.limit);
            }
        }
    }
})();
