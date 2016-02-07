(function () {
    'use strict';

    angular
        .module('fits.fits')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'fits',
                config: {
                    abstract: true,
                    url: '/fits',
                    templateUrl: 'app/fits/fits.html',
                    controller: 'FitsController',
                    controllerAs: 'vm'
                }
            },
            getFitsListState(),
            getFitsViewState(),
            getFitsDetailState()
        ];
    }

    function getFitsListState() {
        return {
            state: 'fits.list',
            config: {
                url: '',
                templateUrl: 'app/fits/list/fits.list.html',
                controller: 'FitsController',
                controllerAs: 'vm',
                title: 'FITs',
                settings: {
                    nav: 3
                },
                resolve: {
                    fits: ['ConfigFactory', '$injector', '$q', loadFitsList]
                }
            }
        };
    }

    function getFitsViewState() {
        return {
            state: 'fits.view',
            config: {
                url: '/view/:fitId',
                title: 'FITs',
                views: {
                    '': {
                        templateUrl: 'app/fits/view/fits.view.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    },
                    'fitInfo@fits.view': {
                        templateUrl: 'app/fits/view/fits.info.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    },
                    'tariffInfo@fits.view': {
                        templateUrl: 'app/fits/view/tariff.info.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    },
                    'paymentInfo@fits.view': {
                        templateUrl: 'app/fits/view/payment.info.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    },
                    'relatedInstallationsInfo@fits.view': {
                        templateUrl: 'app/fits/view/related.installations.info.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    },
                    'relatedMetersInfo@fits.view': {
                        templateUrl: 'app/fits/view/related.meters.info.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    },
                    'statementsInfo@fits.view': {
                        templateUrl: 'app/fits/view/statements.info.html',
                        controller: 'FitsViewController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    fits: ['ConfigFactory', '$injector', '$q', '$stateParams', loadFitView]
                }
            }
        };
    }

    function getFitsDetailState() {
        return {
            state: 'fits.detail',
            config: {
                url: '/:fitId',
                title: 'FITs',
                views: {
                    '': {
                        templateUrl: 'app/fits/detail/fits.detail.html',
                        controller: 'FitsDetailController',
                        controllerAs: 'vm'
                    },
                    'relatedFits@fits.detail': {
                        templateUrl: 'app/fits/detail/relatedFits.detail.html',
                        controller: 'FitsDetailController',
                        controllerAs: 'vm'
                    },
                    'generator@fits.detail': {
                        templateUrl: 'app/fits/detail/generator.detail.html',
                        controller: 'FitsDetailController',
                        controllerAs: 'vm'
                    },
                    'paymentRecipient@fits.detail': {
                        templateUrl: 'app/fits/detail/paymentRecipient.detail.html',
                        controller: 'FitsDetailController',
                        controllerAs: 'vm'
                    },
                    'fitInfo@fits.detail': {
                        templateUrl: 'app/fits/detail/fitInfo.detail.html',
                        controller: 'FitsDetailController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    fits: ['ConfigFactory', '$injector', '$q', '$stateParams', loadFitDetails]
                }
            }
        };
    }

    function loadFitsList(configFactory, $injector, $q) {
        return configFactory.promise.then(continueLoading);
        function continueLoading() {
            return $q.all([
                $injector.get('FitsService').loadInitialFits(),
                $injector.get('SearchPanelModel').showSearchPanel()
            ]);
        }
    }

    function loadFitDetails(configFactory, $injector, $q, $stateParams) {
        return configFactory.promise.then(continueLoading);
        function continueLoading() {
            return $q.all([$injector.get('FitsService').findById(parseInt($stateParams.fitId, 10)),
                $injector.get('SearchPanelModel').hideSearchPanel()]);
        }
    }

    function loadFitView(configFactory, $injector, $q, $stateParams) {
        return configFactory.promise.then(continueLoading);
        function continueLoading() {
            var fitId = parseInt($stateParams.fitId, 10);
            return $q.all([
                $injector.get('FitsService').findById(fitId),
                $injector.get('SearchPanelModel').hideSearchPanel()]);
        }
    }

})();
