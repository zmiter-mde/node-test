/* jshint -W079 */
var readTypesData = (function () {
    return {
        getReadTypes: getReadTypes
    };

    function getReadTypes() {
        return [
            {
                'readTypeId': 1,
                'readType': 'Quarter'
            },
            {
                'readTypeId': 2,
                'readType': 'Open'
            },
            {
                'readTypeId': 3,
                'readType': 'Close'
            },
            {
                'readTypeId': 4,
                'readType': 'Verification'
            },
            {
                'readTypeId': 5,
                'readType': 'Estimated'
            }
        ];
    }
})();
