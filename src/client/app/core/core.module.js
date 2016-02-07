(function () {
    'use strict';

    angular
        .module('fits.core', [
            'ngSanitize', 'ngResource',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus', 'ui.bootstrap'
        ]);
})();
