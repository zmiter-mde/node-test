/* jshint -W079 */
var mockGeneratorStatusesData = (function () {
    return {
        getStatuses: getStatuses
    };

    function getStatuses() {
        return [
            {
                'generatorStatusId': 1,
                'generatorStatusName': 'Active'
            },
            {
                'generatorStatusId': 2,
                'generatorStatusName': 'Pending Closed'
            },
            {
                'generatorStatusId': 3,
                'generatorStatusName': 'Closed'
            }
        ];
    }
})();
