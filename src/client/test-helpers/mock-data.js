/* jshint -W079 */
var mockData = (function () {
    return {
        getMockStates: getMockStates,
        getConfig: getConfig
    };

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    title: 'Dashboard',
                    settings: {
                        nav: 1,
                        style: 'navbar-brand'
                    }
                }
            },
            {
                state: 'reports',
                config: {
                    url: '/reports',
                    templateUrl: 'app/reports/reports.html',
                    controller: 'ReportsController',
                    controllerAs: 'vm',
                    title: 'Reports',
                    settings: {
                        nav: 2
                    }
                }
            }
        ];
    }

    function getConfig() {
        return {
            'engine.url': 'http://localhost:8760/fits-engine'
        };
    }
})();
