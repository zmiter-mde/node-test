(function () {
    'use strict';

    angular
        .module('fits.remote')
        .service('FitsService', FitsService);

    FitsService.$inject = ['BaseService', 'exception', 'FitsResource',
                            'FitsModel', 'UtilsService', '$injector'];

    function FitsService(baseService, exception, fitsResource,
                         fitsModel, utilsService) {
        var service = this;
        service.loadInitialFits = loadInitialFits;
        service.findFits = findFits;
        service.findById = findById;
        service.save = save;

        ////////////////

        function loadInitialFits() {
            if (!utilsService.modelIsLoaded(fitsModel)) {
                return findFits(fitsModel.searchModel);
            }
        }

        function findFits(searchFields) {
            var requestParams = baseService.prepareSearchFields(searchFields);
            return fitsResource.findFits(requestParams).$promise
                .then(function (fits) {
                    fitsModel.foundModels = fits.content;
                    fitsModel.totalModelsCount = fits.totalElements;
                    fitsModel.isEmptyResult = fits.content.length === 0;
                    return fits.content;
                }).catch(handleException);
        }

        function findById(fitId) {
            return fitsResource.findById({fitId: fitId}).$promise
                .then(function (fit) {
                    fitsModel.currentModel = fit;
                    return fit;
                }).catch(handleException);
        }

        function save(fit) {
            return fitsResource.update({}, fit).$promise
                .then(function (updatedFit) {
                    fitsModel.clearFoundModels();
                    fitsModel.currentModel = updatedFit;
                    return updatedFit;
                }).catch(handleException);
        }

        function handleException(message) {
            exception.catcher('XHR Failed for remote fits service')(message);
        }

    }
})();
