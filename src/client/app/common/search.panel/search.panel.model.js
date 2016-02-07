(function () {
    'use strict';

    angular
        .module('fits.common')
        .service('SearchPanelModel', SearchPanelModel);

    SearchPanelModel.$inject = [];

    function SearchPanelModel() {
        var vm = this;
        vm.showSearchPanel = showSearchPanel;
        vm.hideSearchPanel = hideSearchPanel;
        vm.searchPanel = initSearchPanel();

        ////////////////

        function initSearchPanel() {
            return {
                isCollapsed: false
            };
        }

        function showSearchPanel(isShow) {
            vm.searchPanel.isCollapsed = _.isBoolean(isShow) ? !isShow : false;
        }

        function hideSearchPanel() {
            vm.searchPanel.isCollapsed = true;
        }
    }
})();