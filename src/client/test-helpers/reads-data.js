/* jshint -W079 */
var mockReadsData = (function () {
    return {
        findReads: findReads,
        getEmptyResponse: getEmptyResponse,
        getValidRequest: getValidRequest,
        getValidResponse: getValidResponse,
        getInvalidResponse: getInvalidResponse,
        getInvalidRequest: getInvalidRequest
    };

    function getInvalidRequest(response) {
        return {
            meterId: response.meterId,
            readDate: response.meterReadsAndFits.read.readDate,
            readValue: response.meterReadsAndFits.read.readValue,
            recordedDate: response.meterReadsAndFits.read.recordedDate,
            note: response.meterReadsAndFits.read.note
        };
    }

    function getInvalidResponse(wholeResponse) {
        var response = wholeResponse.content[0];
        response.isSave = true;
        response = {
            meterReadsAndFits: {
                read: {
                    readDate: new Date('2015-10-10'),
                    readValue: 100,
                    recordedDate: new Date('2015-10-11'),
                    note: 'note'
                }
            }
        };
        response.validationResult = {
            validationStatus: 'GENERATOR_READ_VALUE_INVALID',
            resultMessage: 'Submitted invalid value.'
        };
        return response;
    }

    function getValidResponse() {
        var response = {};
        response.isSave = true;
        response.meterReadsAndFits = {
            read: {
                readDate: new Date('2015-10-10'),
                readValue: 100,
                recordedDate: new Date('2015-10-11'),
                note: 'note'
            }
        };
        response.validationResult = {
            validationStatus: 'VALID'
        };
        return response;
    }

    function getValidRequest(response) {
        return {
            meterId: response.meterId,
            readDate: response.meterReadsAndFits.read.readDate,
            readValue: response.meterReadsAndFits.read.readValue,
            recordedDate: response.meterReadsAndFits.read.recordedDate,
            note: response.meterReadsAndFits.read.note
        };
    }

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

    function findReads() {
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
                    'meterLocation': null
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
                    'meterLocation': null
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
                    'meterLocation': 'under stairs'
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