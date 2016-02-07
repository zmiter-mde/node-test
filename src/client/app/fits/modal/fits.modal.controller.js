(function () {
    'use strict';

    angular
        .module('fits.fits')
        .controller('FitsModalController', FitsModalController);

    FitsModalController.$inject = ['$uibModalInstance', 'FitsModalService', 'UtilsService'];

    function FitsModalController($uibModalInstance, fitsModalService, utilsService) {

        var vm = this;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.getStyleClass = utilsService.getStyleClass;
        vm.getIconClass = utilsService.getIconClass;
        vm.model = fitsModalService.model;

        function ok() {
            vm.model.forceSubmit = vm.model.stages.FORCE;
            fitsModalService.updateExclusion(vm.model.currentRequest, true);
            $uibModalInstance.close();
        }

        function cancel() {
            vm.model.forceSubmit = vm.model.stages.FIRST;
            $uibModalInstance.dismiss('cancel');
        }

    }

})();
