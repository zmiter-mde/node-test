(function () {
    'use strict';

    angular
        .module('fits.layout')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'routerHelper'];
    /* @ngInject */
    function NavbarController($state, routerHelper) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;
        vm.hasChilds = hasChilds;
        vm.navRoutes = [];

        activate();

        ///////////////

        function activate() {
            getNavRoutes();
        }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function (r) {
                return r.settings && r.settings.nav;
            }).sort(function (r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'active' : '';
        }

        function hasChilds(route) {
            return !_.isUndefined(route.settings.childs);
        }
    }

})();