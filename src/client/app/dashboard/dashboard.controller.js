(function () {
    'use strict';

    angular
        .module('fits.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];
    /* @ngInject */
    function DashboardController() {
        var vm = this;
        vm.title = 'FITS Dashboard';
        vm.welcomeNote = 'Welcome to the system';
    }
})();
