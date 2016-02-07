(function () {
    'use strict';

    angular
        .module('fits.widgets')
        .directive('collapsiblePanel', collapsiblePanel);

    // Display transcluded content inside collapsible panel element.
    // Usage:
    //  <fit-panel panel-title="TITLE"><some_content_for_panel/></fit-panel>
    //  panel-title - will be displayed in panel header, is specified, otherwise header wouldn't be shown
    //  model - panel model, required fields:
    //    - isCollapsed - determines whether panel body is collapsed or not
    //  Other panel contents will be transcluded as is

    /* @ngInject */
    function collapsiblePanel() {
        return {
            restrict: 'E',
            bindToController: true,
            transclude: true,
            scope: {
                panelTitle: '@',
                model: '='
            },
            templateUrl: 'app/widgets/collapsiblePanel/collapsiblePanel.html',
            controller: ['EventService', CollapsiblePanelController],
            controllerAs: 'vm'
        };

        /* @ngInject */
        function CollapsiblePanelController(eventService) {
            var vm = this;
            vm.model.isCollapsed = vm.model.isCollapsed ? vm.model.isCollapsed : false;
            vm.toggleCollapse = toggleCollapse;
            vm.getCollapseIcon = getCollapseIcon;

            function toggleCollapse() {
                vm.model.isCollapsed = !vm.model.isCollapsed;
                eventService.notify(eventService.events.RESIZE);
            }

            function getCollapseIcon(isCollapsed) {
                return isCollapsed ? 'glyphicon-chevron-down' : 'glyphicon-chevron-up';
            }

        }
    }
})();
