(function () {
    'use strict';

    angular
        .module('fits.fits')
        .service('FitsModel', FitsModel);

    FitsModel.$inject = ['SearchPanelModel'];

    function FitsModel(searchPanelModel) {
        var vm = this;
        vm.isLoaded = isLoaded;
        vm.clearFoundModels = clearFoundModels;
        vm.clearSearchModel = clearSearchModel;
        vm.loadedQuarters = loadedQuarters;
        vm.changeQuarterSearchParameter = changeQuarterSearchParameter;
        vm.getOptionText = getOptionText;
        vm.setQuarters = setQuarters;
        vm.searchPanel = searchPanelModel.searchPanel;

        vm.currentModel = {};
        vm.modelWithChanges = {};
        vm.foundModels = [];
        vm.itemsPerPage = 50;
        vm.currentPage = 1;
        vm.totalModelsCount = 0;
        vm.isEmptyResult = false;
        vm.quartersDropdown = {
            nameFunction: vm.getOptionText,
            label: 'Excluded on Quarter',
            type: 'select',
            options: vm.quarters,
            onChange: vm.changeQuarterSearchParameter,
            model: getDefaultQuarter()
        };
        vm.searchFields = [
            {name: 'externalAccountId', label: 'Energy a/c'},
            {name: 'ofgemFitId', label: 'FIT Reference', preselected: 'FIT'},
            {name: 'ofgemGeneratorId', label: 'Generator Reference', preselected: 'GEN'},
            {name: 'meterSerialNumber', label: 'MSN'},
            {name: 'email', label: 'Email Address'},
            {name: 'addressLine1', label: 'Address Line 1'},
            {name: 'town', label: 'Town'},
            {name: 'postCode', label: 'Post Code'},
            {name: 'exportMpan', label: 'Export MPAN'},
            {name: 'importMpan', label: 'Import MPAN'},
            vm.quartersDropdown
        ];
        vm.searchModel = {
            page: vm.currentPage,
            limit: vm.itemsPerPage
        };

        vm.quarters = [];
        vm.relatedMetersInfo = [];
        vm.currentQuarter = getDefaultQuarter();

        ////////////////

        function isLoaded(fitId) {
            var result = !_.isEmpty(vm.currentModel);
            if (!_.isUndefined(fitId)) {
                result = result && vm.currentModel.fitId === fitId;
            }
            return result;
        }

        function clearFoundModels() {
            vm.currentModel = {};
            vm.foundModels = [];
            vm.totalModelsCount = 0;
        }

        function clearSearchModel() {
            vm.searchModel = {};
            vm.searchModel.page = vm.currentPage;
            vm.searchModel.limit = vm.itemsPerPage;
            vm.quartersDropdown.model = getDefaultQuarter();
        }

        function loadedQuarters() {
            return vm.quarters.length > 0;
        }

        function changeQuarterSearchParameter(selectedQuarter) {
            vm.searchModel.page = 1;
            vm.searchModel.excludedQuarterId = _.isNull(selectedQuarter) ? null : selectedQuarter.quarterId;
        }

        function getOptionText(quarter) {
            return quarter.quarterName + ' ' + quarter.financialYear.financialYearName + getActivePostfix(quarter);
        }

        function getActivePostfix(quarter) {
            return quarter.isActive ? ' - active' : '';
        }

        function setQuarters(quarters) {
            vm.quarters = quarters;
            vm.quartersDropdown.options = quarters;
        }

        function getDefaultQuarter() {
            return {isActive: true};
        }
    }
})();