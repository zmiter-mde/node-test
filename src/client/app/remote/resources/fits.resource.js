(function () {
    'use strict';

    angular
        .module('fits.remote')
        .service('FitsResource', FitsResource);

    FitsResource.$inject = ['$resource', 'ConfigFactory'];

    function FitsResource($resource, configFactory) {
        var actions = {
            findFits: {
                url: configFactory.getEngineURL() + '/fits',
                method: 'GET',
                isArray: false,
                params: {
                    addressLine1: '@addressLine1',
                    postCode: '@postCode',
                    town: '@town',
                    externalAccountId: '@externalAccountId',
                    ofgemGeneratorId: '@ofgemGeneratorId',
                    ofgemFitId: '@ofgemFitId',
                    meterSerialNumber: '@meterSerialNumber',
                    email: '@email',
                    importMpan: '@importMpan',
                    exportMpan: '@exportMpan',
                    accountId: '@accountId'

                }
            },
            findById: {
                url: configFactory.getEngineURL() + '/fits/:fitId',
                method: 'GET',
                isArray: false,
                params: {
                    fitId: '@fitId'
                }
            },
            update: {
                url: configFactory.getEngineURL() + '/fits/:fitId',
                method: 'PUT',
                isArray: false,
                params: {
                    fitId: '@fitId'
                }
            },
            updateExclusion: {
                url: configFactory.getEngineURL() + '/fitexclusions/exclude',
                method: 'POST',
                isArray: false,
                data: {
                    fit: '@fit'
                },
                params: {
                    isSave: '@isSave'
                }
            }
        };
        return $resource(configFactory.getEngineURL() + '/fits', {}, actions);
    }
})();
