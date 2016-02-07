/* jshint -W079 */
var mockMetersData = (function () {
    return {
        findMeters: findMeters,
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
            'sort': null,
            'numberOfElements': 0,
            'first': true
        };
    }

    function findMeters() {
        return {
            'content': [
                {
                    'meterId': 2634,
                    'meterSerialNumber': '0000003080',
                    'installationDate': 1379883600000,
                    'removalDate': null,
                    'pedestrianInspectionLastDate': null,
                    'isExportMeter': false,
                    'meterManufacturer': 'Landis and Gyr',
                    'meterModel': 'E110',
                    'isAmrMeter': false,
                    'isClosed': false,
                    'meterLocation': null,
                    'addon': null
                },
                {
                    'meterId': 2658,
                    'meterSerialNumber': '0000003538',
                    'installationDate': 1380488400000,
                    'removalDate': null,
                    'pedestrianInspectionLastDate': null,
                    'isExportMeter': false,
                    'meterManufacturer': 'Landis + Gyr',
                    'meterModel': '5235A',
                    'isAmrMeter': false,
                    'isClosed': false,
                    'meterLocation': null,
                    'addon': null
                },
                {
                    'meterId': 4840,
                    'meterSerialNumber': '0000006736',
                    'installationDate': 1407272400000,
                    'removalDate': null,
                    'pedestrianInspectionLastDate': null,
                    'isExportMeter': false,
                    'meterManufacturer': 'Ampy Metering',
                    'meterModel': 'single phase 100 amp',
                    'isAmrMeter': false,
                    'isClosed': false,
                    'meterLocation': 'under stairs',
                    'addon': null
                }
            ],
            'last': false,
            'totalPages': 3197,
            'totalElements': 9591,
            'size': 3,
            'number': 0,
            'sort': null,
            'numberOfElements': 3,
            'first': true
        };
    }
})();
