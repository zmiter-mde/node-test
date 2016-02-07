/* jshint -W079 */
var mockReportsData = (function () {
    return {
        findReports: findReports,
        getAuditFitIdResponse: getAuditFitIdResponse
    };

    function findReports() {
        return {
            'totalCount': 85549,
            'report': [
                {
                    'calculationId': 70081,
                    'calculationRunId': 50,
                    'ofgemGeneratorId': 'GEN0178933',
                    'accountId': '1059720',
                    'faultyMeter': 'No',
                    'headerPeriod': 'Quarter 1 2015/2016',
                    'weekCommencing': '27th November 2015',
                    'indicative': 'Yes',
                    'generatorName': 'Mr. Russell Milne',
                    'addressLine1': '107 Leys Lane',
                    'addressLine2': null,
                    'addressLine3': null,
                    'town': 'Frome',
                    'county': 'Somerset',
                    'country': 'England',
                    'salutation': 'Mr. Milne',
                    'postCode': 'BA11 2JS',
                    'summaryTotalAmount': 31.91,
                    'summaryTotalPayment': 31.91,
                    'summaryTotalCredit': 31.91,
                    'calculationRun': 'Ind Q1 2015/2016',
                    'postedDate': 1444165200000
                }
            ]
        };
    }

    function getAuditFitIdResponse() {
        return {
            'totalCount': 9464,
            'report': [
                {
                    'generatorId': '1',
                    'ofgemFitId': 'FIT00001591',
                    'ofgemGeneratorId': 'GEN5001341',
                    'mcsCertificateNumber': 'MCS-00005388-N',
                    'technologyName': 'PhotoVoltaic',
                    'applicationEndDate': 1330635600000
                }
            ]
        };
    }

})();
