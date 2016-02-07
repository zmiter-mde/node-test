/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('fits.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();
