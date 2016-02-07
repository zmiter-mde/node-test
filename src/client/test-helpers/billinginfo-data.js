/* jshint -W079 */
var mockBillingInfoData = (function () {

    return {
        findBillingInfos: findBillingInfos,
        getEmptyResponse: getEmptyResponse
    };

    function getEmptyResponse() {
        return {
            'content': [],
            'totalElements': 0,
            'totalPages': 0,
            'last': true,
            'size': 1,
            'number': 0,
            'sort': null,
            'numberOfElements': 0,
            'first': true
        };
    }

    function findBillingInfos() {
        return {
            'content': [
                {
                    'billingInfoId': 175,
                    'title': {
                        'titleId': 6,
                        'titleName': 'Mr.'
                    },
                    'firstName': 'A',
                    'lastName': 'Moore',
                    'companyName': null,
                    'companyNumber': null,
                    'addressLine1': 'Penhir Cornborough Road',
                    'addressLine2': 'Westward Ho',
                    'addressLine3': null,
                    'town': 'Bideford',
                    'country': null,
                    'county': 'Devon',
                    'postCode': 'EX39 1AA',
                    'nameOfBankAccount': 'AP Moore',
                    'bankAccountNumber': '80626929',
                    'sortCode': '404759',
                    'buildingSocietyRollNumber': null,
                    'telephones': [],
                    'ofgemFitIds': [
                        'FIT00033132'
                    ],
                    'ofgemGeneratorId': 'GEN5023931',
                    'externalAccountId': '385182',
                    'generatorId': 174
                },
                {
                    'billingInfoId': 9177,
                    'title': {
                        'titleId': 6,
                        'titleName': 'Mr.'
                    },
                    'firstName': 'A',
                    'lastName': 'Norris',
                    'companyName': null,
                    'companyNumber': null,
                    'addressLine1': '6 Sharlotte Court',
                    'addressLine2': null,
                    'addressLine3': null,
                    'town': 'Uttoxeter',
                    'country': null,
                    'county': null,
                    'postCode': 'ST14 7JU',
                    'nameOfBankAccount': null,
                    'bankAccountNumber': '24887056',
                    'sortCode': '602209',
                    'buildingSocietyRollNumber': null,
                    'telephones': [],
                    'ofgemFitIds': [
                        'FIT00609565'
                    ],
                    'ofgemGeneratorId': null,
                    'externalAccountId': null,
                    'generatorId': null
                },
                {
                    'billingInfoId': 43,
                    'title': {
                        'titleId': 6,
                        'titleName': 'Mr.'
                    },
                    'firstName': 'A',
                    'lastName': 'Palmer',
                    'companyName': null,
                    'companyNumber': null,
                    'addressLine1': '4 Mithras Close',
                    'addressLine2': null,
                    'addressLine3': null,
                    'town': 'Dorchester',
                    'country': null,
                    'county': 'Dorset',
                    'postCode': 'DT1 2RF',
                    'nameOfBankAccount': 'AE & MJ Palmer',
                    'bankAccountNumber': '38019027',
                    'sortCode': '600701',
                    'buildingSocietyRollNumber': null,
                    'telephones': [],
                    'ofgemFitIds': [
                        'FIT00011752'
                    ],
                    'ofgemGeneratorId': 'GEN5007055',
                    'externalAccountId': '367077',
                    'generatorId': 43
                }
            ],
            'last': false,
            'totalPages': 3091,
            'totalElements': 9272,
            'size': 3,
            'number': 0,
            'sort': null,
            'numberOfElements': 3,
            'first': true
        };
    }

})();