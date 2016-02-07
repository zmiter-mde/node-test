/* jshint -W079 */
var mockReadsHistoryData = (function () {
    return {
        findReadsByMeter: findReadsByMeter,
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

    function findReadsByMeter() {
        return {
            'content': [
                {
                    'readId': 86723,
                    'meter': {
                        'meterId': 1,
                        'meterSerialNumber': '1050000236290',
                        'installationDate': 943999200000,
                        'removalDate': null,
                        'pedestrianInspectionLastDate': 1406235600000,
                        'isExportMeter': true,
                        'meterManufacturer': 'Siemens',
                        'meterModel': 'EN61036',
                        'isAmrMeter': false,
                        'isClosed': false,
                        'meterLocation': null,
                        'addon': null
                    },
                    'readSourceToReadType': {
                        'sourceToTypeId': 1,
                        'readSource': {
                            'readDourceId': 1,
                            'sourceName': 'Customer'
                        },
                        'readType': {
                            'readTypeId': 1,
                            'typeName': 'Quarter'
                        },
                        'note': 'Read given by customer every quarter'
                    },
                    'isValid': true,
                    'isManuallyValid': null,
                    'isInIndSt': false,
                    'isLevelised': false,
                    'isInNonIndSt': false,
                    'isBilled': false,
                    'isSuspended': false,
                    'validationStatus': {
                        'validationStatusId': 1,
                        'shortName': 'VALID',
                        'status': 'Read passed validation.'
                    },
                    'readDate': 1449435600000,
                    'readValue': 5298.5,
                    'fitsStaff': {
                        'fitsStaffId': 1,
                        'staffUsername': 'SYSTEM_USER',
                        'creationDate': 1450075806888,
                        'endDate': null
                    },
                    'creationDate': 1449494898537,
                    'recordedDate': 1449435600000,
                    'updatedDate': 1450087090441,
                    'note': 'Qtr3 read',
                    'isInActiveTimeWindow': true,
                    'fits': [
                        {
                            'fitId': 9449,
                            'ofgemFitId': 'FIT00006509',
                            'status': null
                        }
                    ]
                },
                {
                    'readId': 80642,
                    'meter': {
                        'meterId': 1,
                        'meterSerialNumber': '1050000236290',
                        'installationDate': 943999200000,
                        'removalDate': null,
                        'pedestrianInspectionLastDate': 1406235600000,
                        'isExportMeter': true,
                        'meterManufacturer': 'Siemens',
                        'meterModel': 'EN61036',
                        'isAmrMeter': false,
                        'isClosed': false,
                        'meterLocation': null,
                        'addon': null
                    },
                    'readSourceToReadType': {
                        'sourceToTypeId': 2,
                        'readSource': {
                            'readDourceId': 1,
                            'sourceName': 'Customer'
                        },
                        'readType': {
                            'readTypeId': 2,
                            'typeName': 'Open'
                        },
                        'note': 'Read given by customer when fit is installed or extension added'
                    },
                    'isValid': true,
                    'isManuallyValid': null,
                    'isInIndSt': false,
                    'isLevelised': false,
                    'isInNonIndSt': false,
                    'isBilled': false,
                    'isSuspended': false,
                    'validationStatus': {
                        'validationStatusId': 1,
                        'shortName': 'VALID',
                        'status': 'Read passed validation.'
                    },
                    'readDate': 1445202000000,
                    'readValue': 5274.3,
                    'fitsStaff': {
                        'fitsStaffId': 1,
                        'staffUsername': 'SYSTEM_USER',
                        'creationDate': 1450075806888,
                        'endDate': null
                    },
                    'creationDate': 1445327186420,
                    'recordedDate': 1445288400000,
                    'updatedDate': 1450087078934,
                    'note': null,
                    'isInActiveTimeWindow': true,
                    'fits': [
                        {
                            'fitId': 9449,
                            'ofgemFitId': 'FIT00006509',
                            'status': null
                        }
                    ]
                }
            ],
            'last': true,
            'totalPages': 1,
            'totalElements': 2,
            'size': 2,
            'number': 0,
            'sort': null,
            'numberOfElements': 2,
            'first': true
        };
    }
})();