(function () {
    angular.module("angularTreeview", [])
        .directive("treeModel", TreeModel);

    TreeModel.$inject = ['$compile', '$location'];
    /* @ngInject */
    function TreeModel($compile, $location) {
        return {
            restrict: "A", link: function (a, g, c) {
                var searchQuery = c.searchQuery;
                var e = c.treeModel, h = c.nodeLabel || "label", d = c.nodeChildren || "children",
                    k = '<ul><li data-ng-repeat="node in ' + e + ' | filter:' + searchQuery + '"><i class="collapsed" data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="normal" data-ng-hide="node.' +
                        d + '.length"></i> <span data-ng-class="node.selected" data-ng-click="selectNodeLabel(node, $event)">{{node.' + h + '}}</span><div data-ng-hide="node.collapsed" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + h + " data-node-children=" + d + " data-search-query=" + searchQuery + "></div></li></ul>";
                e && e.length && (c.angularTreeview ? (a.$watch(e, function (m, b) {
                    g.empty().html($compile(k)(a))
                }, !1), a.selectNodeHead = a.selectNodeHead || function (a, b) {
                        b.stopPropagation && b.stopPropagation();
                        b.preventDefault && b.preventDefault();
                        b.cancelBubble = !0;
                        b.returnValue = !1;
                        a.collapsed = !a.collapsed
                    }, a.selectNodeLabel = a.selectNodeLabel || function (c, b) {
                        if (c[d].length == 0 && c.href) {
                            $location.path(c.href);
                        } else {
                            b.stopPropagation && b.stopPropagation();
                            b.preventDefault && b.preventDefault();
                            b.cancelBubble = !0;
                            b.returnValue = !1;
                            c.collapsed = !c.collapsed
                        }
                    }) : g.html($compile(k)(a)))
            }
        };
    }
})();