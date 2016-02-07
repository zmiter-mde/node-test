(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('fitPanel', fitPanel);

    // Display transcluded content inside panel element.
    // Usage:
    //  <fit-panel panel-title="TITLE"><some_content_for_panel/></fit-panel>
    //  panel-title - will be displayed in panel header, is specified, otherwise header wouldn't be shown
    //  Other panel contents will be transcluded as is

    /* @ngInject */
    function fitPanel() {
        return {
            restrict: 'E',
            bindToController: true,
            transclude: true,
            scope: {
                panelTitle: '@'
            },
            templateUrl: 'app/widgets/fitPanel/fitPanel.html',
            controller: [FitPanelController],
            controllerAs: 'vm'
        };

        /* @ngInject */
        function FitPanelController() {
            var vm = this;

        }
    }
})();
