/* jshint -W079 */
var quartersData = (function () {
    return {
        findQuarters: findQuarters,
        getEmptyResponse: getEmptyResponse
    };

    function getEmptyResponse() {
        return {
            'content': [],
            'last': true,
            'totalPages': 0,
            'totalElements': 0,
            'size': 1,
            'number': 0,
            'first': true,
            'numberOfElements': 0
        };
    }

    function findQuarters() {
        return {
            'content': [
                {
                    'quarterId': 24,
                    'quarterShortName': 'Q4',
                    'quarterName': 'Quarter 4',
                    'quarterStartDate': 1451595600000,
                    'quarterEndDate': 1459371600000,
                    'financialYear': {
                        'financialYearId': 6,
                        'financialYearName': '2015/2016',
                        'financialYearStartDate': 1427835600000,
                        'financialYearEndDate': 1459371600000
                    },
                    'readTimeWindow': {
                        'readTimeWindowId': 24,
                        'startReadWindowDate': 1451595600000,
                        'endReadWindowDate': 1459371600000,
                        'endReadRecordedDate': 1459371600000
                    },
                    'isActive': null
                },
                {
                    'quarterId': 23,
                    'quarterShortName': 'Q3',
                    'quarterName': 'Quarter 3',
                    'quarterStartDate': 1443646800000,
                    'quarterEndDate': 1451509200000,
                    'financialYear': {
                        'financialYearId': 6,
                        'financialYearName': '2015/2016',
                        'financialYearStartDate': 1427835600000,
                        'financialYearEndDate': 1459371600000
                    },
                    'readTimeWindow': {
                        'readTimeWindowId': 23,
                        'startReadWindowDate': 1443646800000,
                        'endReadWindowDate': 1451509200000,
                        'endReadRecordedDate': 1452373200000
                    },
                    'isActive': null
                },
                {
                    'quarterId': 22,
                    'quarterShortName': 'Q2',
                    'quarterName': 'Quarter 2',
                    'quarterStartDate': 1435698000000,
                    'quarterEndDate': 1443560400000,
                    'financialYear': {
                        'financialYearId': 6,
                        'financialYearName': '2015/2016',
                        'financialYearStartDate': 1427835600000,
                        'financialYearEndDate': 1459371600000
                    },
                    'readTimeWindow': {
                        'readTimeWindowId': 22,
                        'startReadWindowDate': 1435698000000,
                        'endReadWindowDate': 1443560400000,
                        'endReadRecordedDate': 1443560400000
                    },
                    'isActive': true
                }
            ],
            'last': false,
            'totalPages': 8,
            'totalElements': 24,
            'size': 3,
            'number': 0,
            'sort': [
                {
                    'direction': 'DESC',
                    'property': 'quarterEndDate',
                    'ignoreCase': false,
                    'nullHandling': 'NATIVE',
                    'ascending': false
                }
            ],
            'numberOfElements': 3,
            'first': true
        };
    }
})();