(function () {
    'use strict';

    angular
        .module('fits.fits')
        .controller('FitsViewController', FitsViewController);

    FitsViewController.$inject = ['FitsModel', '$state', 'UtilsService'];
    /* @ngInject */
    function FitsViewController(fitsModel, $state, utilsService) {
        var vm = this;
        vm.model = fitsModel;
        vm.goEdit = goEdit;
        vm.openFitView = openFitView;
        vm.openMeterView = openMeterView;
        vm.goViewMoreStatements = goViewMoreStatements;
        vm.openGeneratorView = openGeneratorView;
        vm.changeBillingInfo = changeBillingInfo;
        vm.getFitType = getFitType;
        vm.getReadValue = getReadValue;
        vm.getReadDate = getReadDate;
        vm.getReadColorStyle = getReadColorStyle;
        vm.getBooleanGlyphClass = utilsService.getBooleanGlyphClass;
        vm.fitInfoPanelModel = {isCollapsed: false};
        vm.tariffPanelModel = {isCollapsed: false};
        vm.billingInfoPanelModel = {isCollapsed: false};
        vm.relatedInstallationsPanelModel = {isCollapsed: false};
        vm.relatedMetersPanelModel = {isCollapsed: false};
        vm.statementsPanelModel = {isCollapsed: false};

        /////////////////

        function goEdit() {
            $state.go('fits.detail', {
                fitId: vm.model.currentModel.fitId
            });
        }

        function openFitView(fitId) {
            $state.go('fits.view', {
                fitId: fitId
            });
        }

        function openMeterView(meterId) {
            $state.go('meters.view', {
                meterId: meterId
            });
        }

        function openGeneratorView(generatorId) {
            $state.go('generators.view', {
                generatorId: generatorId
            });
        }

        function changeBillingInfo() {
            $state.go('billinginfo.list.change');
        }

        function goViewMoreStatements() {
            $state.go('calculations.statementsList', {
                filterName: 'fitId',
                id: vm.model.currentModel.fitId
            });
        }

        function getFitType() {
            return _.isEmpty(vm.model.currentModel.parentFit) ? 'Installation' : 'Extension';
        }

        function getReadValue(read) {
            return !_.isEmpty(read) ? getFormattedReadString(read) : 'N/A';
        }

        function getReadDate(read) {
            return !_.isEmpty(read) ? read.readDate : 'N/A';
        }

        function getFormattedReadString(read) {
            return read.readValue + ' ' + getReadType(read) + ' ' + getValidString(read.isValid);
        }

        function getReadType(read) {
            return read.readSourceToReadType.readSource + ' ' + read.readSourceToReadType.readType;
        }

        function getValidString(valid) {
            return valid ? 'Valid' : 'Failed';
        }

        function getReadColorStyle(read) {
            return !_.isEmpty(read) ? read.isValid ? 'valid-color' : 'invalid-color' : '';
        }
    }

})();