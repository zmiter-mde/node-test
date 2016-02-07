(function () {
    'use strict';

    angular
        .module('fits.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource', '$q'];
    /* @ngInject */
    function dataservice($resource, $q) {
        return {
            getConfig: getConfig
        };

        function getConfig() {
            var deferred = $q.defer();
            var Config = $resource('api/config', {});
            Config.get({}, function (conf) {
                deferred.resolve(conf);
            });
            return deferred.promise;
        }
    }

})();
