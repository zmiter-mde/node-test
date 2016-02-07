(function () {
    'use strict';

    angular
        .module('fits.common')
        .service('ModalWindowModel', ModalWindowModel);

    ModalWindowModel.$inject = [];

    function ModalWindowModel() {
        var vm = this;

        vm.stages = {
            FIRST: 'FIRST',
            FORCE: 'FORCE'
        };
        vm.forceSubmit = vm.stages.FIRST;

        vm.statuses = {
            OK: 'OK',
            WARNING: 'WARNING',
            ERROR: 'ERROR',
            SUCCESS: 'SUCCESS',
            VALID: 'VALID'
        };
        vm.currentStatus = vm.statuses.OK;

        vm.warningResponse = false;

        vm.currentResponse = {};
        vm.currentRequest = {};
        vm.message = '';

    }

})();