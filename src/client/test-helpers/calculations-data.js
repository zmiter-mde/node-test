/* jshint -W079 */
var mockCalculationsData = (function () {
    return {
        getCalculationTypes: getCalculationTypes,
        getCalculationRuns: getCalculationRuns,
        getEmptyResponse: getEmptyResponse
    };

    function getCalculationRuns() {
        return {
            'activeQuarter': {
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
                'isActive': null
            },
            'calculationRuns': [
                {
                    'calculationRunId': 15,
                    'totalProcessed': 7735,
                    'successfullyProcessed': 7734,
                    'failedProcessed': 1,
                    'createdDate': 1444165200000,
                    'quarter': {
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
                        'isActive': null
                    },
                    'calculationType': {
                        'calculationTypeId': 2,
                        'calculationTypeName': 'Levelisation',
                        'calculationTypeShortName': 'Lev'
                    },
                    'currentlyRunning': false
                },
                {
                    'calculationRunId': 51,
                    'totalProcessed': 7569,
                    'successfullyProcessed': 7569,
                    'failedProcessed': 0,
                    'createdDate': 1446066000000,
                    'quarter': {
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
                        'isActive': null
                    },
                    'calculationType': {
                        'calculationTypeId': 3,
                        'calculationTypeName': 'Non-indicative',
                        'calculationTypeShortName': 'Non-Ind'
                    },
                    'currentlyRunning': false
                },
                {
                    'calculationRunId': 52,
                    'totalProcessed': 0,
                    'successfullyProcessed': 0,
                    'failedProcessed': 0,
                    'createdDate': 1450040400000,
                    'quarter': {
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
                        'isActive': null
                    },
                    'calculationType': {
                        'calculationTypeId': 1,
                        'calculationTypeName': 'Indicative',
                        'calculationTypeShortName': 'Ind'
                    },
                    'currentlyRunning': false
                },
                {
                    'calculationRunId': 54,
                    'totalProcessed': 0,
                    'successfullyProcessed': 0,
                    'failedProcessed': 0,
                    'createdDate': 1450213200000,
                    'quarter': {
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
                        'isActive': null
                    },
                    'calculationType': {
                        'calculationTypeId': 2,
                        'calculationTypeName': 'Levelisation',
                        'calculationTypeShortName': 'Lev'
                    },
                    'currentlyRunning': false
                }
            ],
            'runningCalculationRuns': [
                {
                    'calculationRunId': 55,
                    'totalProcessed': 0,
                    'successfullyProcessed': 0,
                    'failedProcessed': 0,
                    'createdDate': 1450213200000,
                    'quarter': {
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
                        'isActive': null
                    },
                    'calculationType': {
                        'calculationTypeId': 2,
                        'calculationTypeName': 'Levelisation',
                        'calculationTypeShortName': 'Lev'
                    },
                    'currentlyRunning': true
                }
            ]
        };
    }

    function getCalculationTypes() {
        return [
            {
                'calculationTypeId': 1,
                'calculationTypeName': 'Indicative',
                'calculationTypeShortName': 'Ind'
            },
            {
                'calculationTypeId': 2,
                'calculationTypeName': 'Levelisation',
                'calculationTypeShortName': 'Lev'
            },
            {
                'calculationTypeId': 3,
                'calculationTypeName': 'Non-indicative',
                'calculationTypeShortName': 'Non-Ind'
            }
        ];
    }

    function getEmptyResponse() {
        return {
            'activeQuarter': {
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
                    'endReadWindowDate': 1446325200000,
                    'endReadRecordedDate': 1447189200000
                }
            },
            'calculationRuns': [],
            'runningCalculationRuns': []
        };
    }
})();