(function () {
    'use strict';

    angular
        .module('fits.remote')
        .service('BaseService', BaseService);

    BaseService.$inject = [];

    function BaseService() {
        var service = this;
        service.prepareSearchFields = prepareSearchFields;
        service.encodeURLData = encodeURLData;

        ////////////////

        function prepareSearchFields(searchFields) {
            var requestParams = _.cloneDeep(searchFields);
            clearEmptyFields(requestParams);
            //Pagination starts from 0 on server
            requestParams.page--;
            return requestParams;
        }

        function encodeURLData(searchParams) {
            var ret = [];
            for (var param in searchParams) {
                if (searchParams.hasOwnProperty(param)) {
                    ret.push(encodeURIComponent(param) + '=' + encodeURIComponent(searchParams[param]));
                }
            }
            return ret.join('&');
        }

        function clearEmptyFields(searchFields) {
            _.each(searchFields, function (value, key) {
                if (_.trim(value) === '') {
                    delete searchFields[key];
                }
            });
        }
    }
})();
