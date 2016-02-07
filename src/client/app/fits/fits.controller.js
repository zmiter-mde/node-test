(function () {
    'use strict';

    angular
        .module('fits.fits')
        .controller('FitsController', FitsController);

    FitsController.$inject = ['FitsService', '$state', 'FitsModel', 'UtilsService',
                                'EventService', 'FitsModalService'];
    /* @ngInject */
    function FitsController(fitsService, $state, fitsModel, utilsService,
                            eventService, fitsModalService) {
        var vm = this;
        vm.search = findFits;
        vm.clearInputs = clearInputs;
        vm.openFit = openFit;
        vm.pageChanged = pageChanged;
        vm.isActiveQuarter = isActiveQuarter;
        vm.save = save;
        vm.getBooleanGlyphClass = utilsService.getBooleanGlyphClass;

        vm.model = fitsModel;

        /////////////////

        function findFits(page) {
            vm.model.searchModel.page = page ? page : 1;
            return fitsService.findFits(vm.model.searchModel).then(function (fits) {
                $state.go('fits.list');
                vm.model.currentPage = vm.model.searchModel.page;
                vm.model.currentQuarter = _.cloneDeep(vm.model.quartersDropdown.model);
                eventService.notify(eventService.events.RESIZE);
            });
        }

        function openFit(fit) {
            fitsModel.currentModel = null;
            $state.go('fits.view', {
                fit: fit,
                fitId: fit.fitId
            });
        }

        function pageChanged() {
            findFits(vm.model.currentPage);
        }

        function clearInputs() {
            vm.model.clearSearchModel();
        }

        function isActiveQuarter() {
            return _.isEmpty(fitsModel.currentQuarter) || fitsModel.currentQuarter.isActive;
        }

        function save(fit, $event) {
            $event.stopPropagation();
            fitsModalService.updateExclusion(fit, false);
        }

    }

})();