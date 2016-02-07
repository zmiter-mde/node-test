(function () {
    'use strict';

    angular
        .module('fits.core')
        .factory('ConfigFactory', ConfigFactory);

    ConfigFactory.$inject = ['dataservice'];
    /* @ngInject */
    function ConfigFactory(dataservice) {
        var config = null;
        var promise = dataservice.getConfig().then(function (conf) {
            config = conf;
        });
        return {
            promise: promise,
            getConfig: getConfig,
            getEngineURL: getEngineURL
        };

        ////////////////

        function getConfig() {
            return config;
        }

        function getEngineURL() {
            return config ? config['fits.engine.url'] : null;
        }
    }
})();