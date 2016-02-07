(function () {
    'use strict';

    angular
        .module('fits.fits')
        .controller('FitsDetailController', FitsDetailController);

    FitsDetailController.$inject = ['FitsModel', 'FitsService', 'logger', '$state'];
    /* @ngInject */
    function FitsDetailController(fitsModel, fitsService, logger, $state) {
        var vm = this;
        vm.model = fitsModel;
        vm.save = save;
        vm.openFit = openFit;
        vm.goView = goView;
        vm.fitHasExtensions = fitHasExtensions;
        vm.fitHasParent = fitHasParent;
        vm.getFitType = getFitType;
        vm.changeBillingInfo = changeBillingInfo;

        /////////////////

        function save() {
            fitsService.save(vm.model.currentModel).then(function (fit) {
                logger.success('Fit successfully updated');
            });
        }

        function openFit(fitId) {
            $state.go('fits.detail', {fitId: fitId});
        }

        function fitHasExtensions() {
            return vm.model.currentModel.fitExtensions.length > 0;
        }

        function fitHasParent() {
            return !_.isEmpty(vm.model.currentModel.parentFit);
        }

        function getFitType() {
            return !vm.fitHasParent() ? 'Installation' : 'Extension';
        }

        function changeBillingInfo() {
            $state.go('billinginfo.list.change');
        }

        function goView() {
            $state.go('fits.view', {
                fitId: vm.model.currentModel.fitId
            });
        }
    }

})();