/* jshint -W079 */
var mockStatementsData = (function () {
    return {
        getStatementsByFitId: getStatementsByFitId
    };

    function getStatementsByFitId() {
        return {
            'content': [
                {
                    'calculationRun': {
                        'calculationRunId': 22,
                        'totalProcessed': 1664,
                        'successfullyProcessed': 1664,
                        'failedProcessed': 0,
                        'createdDate': 1375736400000,
                        'quarter': {
                            'quarterId': 13,
                            'quarterShortName': 'Q1',
                            'quarterName': 'Quarter 1',
                            'quarterStartDate': 1364763600000,
                            'quarterEndDate': 1372539600000,
                            'financialYear': {
                                'financialYearId': 4,
                                'financialYearName': '2013/2014',
                                'financialYearStartDate': 1364763600000,
                                'financialYearEndDate': 1396213200000
                            },
                            'readTimeWindow': {
                                'readTimeWindowId': 13,
                                'startReadWindowDate': 1364763600000,
                                'endReadWindowDate': 1372539600000,
                                'endReadRecordedDate': 1372539600000
                            },
                            'isActive': null
                        },
                        'calculationType': {
                            'calculationTypeId': 3,
                            'calculationTypeName': 'Non-indicative',
                            'calculationTypeShortName': 'Non-Ind'
                        },
                        'currentlyRunning': null,
                        'secondsRunning': null
                    },
                    'paymentDate': null,
                    'generationPayment': 306.61,
                    'exportPayment': 10.81,
                    'totalPayment': 317.42,
                    'generator': {
                        'generatorId': 1806,
                        'ofgemGeneratorId': 'GEN5174069'
                    },
                    'fits': [
                        {
                            'fitId': 24,
                            'ofgemFitId': 'FIT00256619',
                            'generator': {
                                'generatorId': 1806,
                                'ofgemGeneratorId': 'GEN5174069'
                            }
                        }
                    ]
                },
                {
                    'calculationRun': {
                        'calculationRunId': 21,
                        'totalProcessed': 1657,
                        'successfullyProcessed': 1657,
                        'failedProcessed': 0,
                        'createdDate': 1372798800000,
                        'quarter': {
                            'quarterId': 13,
                            'quarterShortName': 'Q1',
                            'quarterName': 'Quarter 1',
                            'quarterStartDate': 1364763600000,
                            'quarterEndDate': 1372539600000,
                            'financialYear': {
                                'financialYearId': 4,
                                'financialYearName': '2013/2014',
                                'financialYearStartDate': 1364763600000,
                                'financialYearEndDate': 1396213200000
                            },
                            'readTimeWindow': {
                                'readTimeWindowId': 13,
                                'startReadWindowDate': 1364763600000,
                                'endReadWindowDate': 1372539600000,
                                'endReadRecordedDate': 1372539600000
                            },
                            'isActive': null
                        },
                        'calculationType': {
                            'calculationTypeId': 1,
                            'calculationTypeName': 'Indicative',
                            'calculationTypeShortName': 'Ind'
                        },
                        'currentlyRunning': null,
                        'secondsRunning': null
                    },
                    'paymentDate': null,
                    'generationPayment': 306.61,
                    'exportPayment': 10.81,
                    'totalPayment': 317.42,
                    'generator': {
                        'generatorId': 1806,
                        'ofgemGeneratorId': 'GEN5174069'
                    },
                    'fits': [
                        {
                            'fitId': 24,
                            'ofgemFitId': 'FIT00256619',
                            'generator': {
                                'generatorId': 1806,
                                'ofgemGeneratorId': 'GEN5174069'
                            }
                        }
                    ]
                }
            ],
            'totalPages': 2,
            'totalElements': 4,
            'last': false,
            'size': 2,
            'number': 0,
            'numberOfElements': 2,
            'sort': null,
            'first': true
        };
    }
})();