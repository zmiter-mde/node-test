(function () {
    'use strict';

    angular
        .module('fits.remote')
        .service('FitsModalService', FitsModalService);

    FitsModalService.$inject = ['FitsService', 'FitsResource', '$uibModal', 'FitsModel',
                                'ModalWindowModel', 'logger', 'exception'];

    function FitsModalService(fitsService, fitsResource, $uibModal, fitsModel,
                              modalWindowModel, logger, exception) {
        var service = this;
        service.updateExclusion = updateExclusion;

        service.model = modalWindowModel;

        ////////////////

        function updateExclusion(fit, isSave) {
            service.model.currentRequest = fit;
            if (_.isNull(service.model.currentRequest.isExcluded)) {
                service.model.currentRequest.isExcluded = false;
            }
            return fitsResource.updateExclusion({isSave: isSave}, fit).$promise
                .then(handleUpdateResponse).catch(handleException);
        }

        function handleUpdateResponse(response) {
            if (response.status === service.model.statuses.SUCCESS) {
                if (service.model.forceSubmit === service.model.stages.FORCE) {
                    service.model.forceSubmit = service.model.stages.FIRST;
                    fitsService.findFits(fitsModel.searchModel);
                }
                logger.success('Successfully updated!');
            } else {
                continueSubmitting(response);
            }
        }

        function continueSubmitting(response) {
            if (service.model.forceSubmit === service.model.stages.FIRST) {
                service.model.currentResponse = response;
                service.model.currentStatus = service.model.statuses.WARNING;
                service.model.message = formatResultMessage(response.resultMessage) +
                    getFitsIds(response.fits);
                service.model.warningResponse = service.model.currentStatus ===
                    service.model.statuses.WARNING;
                $uibModal.open({
                    animation: true,
                    templateUrl: 'app/common/modal/modal.window.html',
                    controller: 'FitsModalController as modal',
                    size: 'lg'
                });
            } else {
                service.model.forceSubmit = service.model.stages.FIRST;
                logger.success('Successfully updated!');
            }
        }

        function getFitsIds(fits) {
            var ids = [];
            for (var i = 0; i < fits.length; ++i) {
                ids[i] = fits[i].ofgemFitId;
            }
            return ids.join(', ');
        }

        function formatResultMessage(resultMessage) {
            return resultMessage.replace(/\n/g, '<br/><br/>');
        }

        function handleException(message) {
            exception.catcher('XHR Failed for remote fits service')(message);
        }
    }
})();
