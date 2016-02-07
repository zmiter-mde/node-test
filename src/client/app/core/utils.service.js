(function () {
    'use strict';

    angular
        .module('fits.core')
        .service('UtilsService', UtilsService);

    UtilsService.$inject = [];

    function UtilsService() {
        var vm = this;
        vm.getBooleanGlyphClass = getBooleanGlyphClass;
        vm.modelIsLoaded = modelIsLoaded;
        vm.getValidReadClass = getValidReadClass;
        vm.getStyleClass = getStyleClass;
        vm.getIconClass = getIconClass;

        ////////////////

        function getBooleanGlyphClass(value) {
            return value ? 'glyphicon-ok' : 'glyphicon-remove';
        }

        function modelIsLoaded(model) {
            return !_.isEmpty(model.foundModels) || model.isEmptyResult;
        }

        function getValidReadClass(read) {
            if (_.isNull(read) || _.isUndefined(read)) {
                return 'empty-color';
            }
            return read.isValid ? 'valid-color' : 'invalid-color';
        }

        function getStyleClass(warningResponse) {
            return warningResponse ? 'warning-read alert-warning' : 'invalid-read alert-danger';
        }

        function getIconClass(warningResponse) {
            return warningResponse ? 'glyphicon glyphicon-warning-sign' : 'glyphicon glyphicon-exclamation-sign';
        }
    }
})();