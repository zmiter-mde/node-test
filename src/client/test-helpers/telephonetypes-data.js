/* jshint -W079 */
var mockTelephoneTypesData = (function () {
    return {
        getTelephoneTypes: getTelephoneTypes
    };

    function getTelephoneTypes() {
        return [
            {
                'telephoneTypeId': 1,
                'typeName': 'Home'
            },
            {
                'telephoneTypeId': 2,
                'typeName': 'Work'
            },
            {
                'telephoneTypeId': 3,
                'typeName': 'Mobile'
            },
            {
                'telephoneTypeId': 4,
                'typeName': 'Day Time'
            },
            {
                'telephoneTypeId': 5,
                'typeName': 'Evening'
            }
        ];
    }
})();
