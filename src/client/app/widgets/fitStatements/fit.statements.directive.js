(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitStatements', fitStatements);

    // Display statements table.
    // Usage:
    //  <fit-statements model="vm.model" show-pagination="true" dynamic-resize="true" page-changed="vm.pageChanged()">
    // </fit-statements>
    //  model - should contain statements model, required fields:
    //    - foundModels - found statements
    //    - currentPage - current loaded statements page
    //    - totalModelsCount - total statements count
    //    - searchModel - search model for statements
    //    - totalModelsCount - total statements count
    //    - isEmptyResult - true if no statements if found, false otherwise
    //  show-pagination - if true, pagination should be shown
    //  page-changed - method to retrieve next statements page
    //  dynamic-resize - true if statements table height should be dynamically updated to window height, false otherwise

    /* @ngInject */
    function fitStatements() {

        var directive = {
            restrict: 'EA',
            bindToController: true,
            scope: {
                showPagination: '@',
                model: '=',
                pageChanged: '&',
                dynamicResize: '@'
            },
            templateUrl: 'app/widgets/fitStatements/fitStatements.html',
            controller: FitStatementsController,
            controllerAs: 'vm'
        };

        FitStatementsController.$inject = ['$state'];

        return directive;

        /* @ngInject */
        function FitStatementsController($state) {
            var vm = this;
            vm.getStatementString = getStatementString;
            vm.goToGenerator = goToGenerator;
            vm.goToFit = goToFit;

            ////////////////////

            function getStatementString(statement) {
                return statement.calculationType.calculationTypeShortName + ' ' +
                    statement.quarter.quarterShortName + ' ' +
                    statement.quarter.financialYear.financialYearName;
            }

            function goToFit(fitId) {
                $state.go('fits.view', {
                    fitId: fitId
                });
            }

            function goToGenerator(generatorId) {
                $state.go('generators.view', {
                    generatorId: generatorId
                });
            }
        }
    }
})();
