/* jshint -W079 */
var mockGeneratorsData = (function () {
    return {
        findGenerators: findGenerators,
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

    function findGenerators() {
        return {
            'content': [
                {
                    'generatorId': 9158,
                    'ofgemGeneratorId': 'GEN5472111',
                    'email': 'janet.green60@icloud.com',
                    'generatorStartDate': 1443906000000,
                    'generatorEndDate': null,
                    'isVatOnExport': false,
                    'billingInfo': {
                        'billingInfoId': 9160,
                        'title': {
                            'titleId': 7,
                            'titleName': 'Mrs.'
                        },
                        'firstName': 'Janet',
                        'lastName': 'Green',
                        'companyName': null,
                        'companyNumber': null,
                        'addressLine1': '8 Jubilee Avenue',
                        'addressLine2': 'Padgate',
                        'addressLine3': null,
                        'town': 'Warrington',
                        'country': 'England/Wales',
                        'county': null,
                        'postCode': 'WA1 3JY',
                        'nameOfBankAccount': 'Mr David Albert Green & Mrs Janet Green',
                        'bankAccountNumber': '75379488',
                        'sortCode': '090128',
                        'buildingSocietyRollNumber': null,
                        'telephones': [
                            {
                                'telephoneId': 6409,
                                'fkBillingInfo': 9160,
                                'telephoneNumber': '01925502206',
                                'telephoneType': {
                                    'telephoneTypeId': 1,
                                    'typeName': 'Home'
                                },
                                'isMain': true,
                                'creationDate': 1448617560937
                            }
                        ],
                        'ofgemFitIds': null,
                        'ofgemGeneratorId': null,
                        'externalAccountId': null,
                        'generatorId': null
                    },
                    'externalAccountId': '1199897',
                    'status': {
                        'generatorStatusId': 1,
                        'generatorStatusName': 'Active'
                    }
                },
                {
                    'generatorId': 9132,
                    'ofgemGeneratorId': 'GEN5470820',
                    'email': 'philwragg@blueyonder.co.uk',
                    'generatorStartDate': 1443733200000,
                    'generatorEndDate': null,
                    'isVatOnExport': false,
                    'billingInfo': {
                        'billingInfoId': 9134,
                        'title': {
                            'titleId': 6,
                            'titleName': 'Mr.'
                        },
                        'firstName': 'Philip',
                        'lastName': 'Wragg',
                        'companyName': null,
                        'companyNumber': null,
                        'addressLine1': '96 Kirton Lane',
                        'addressLine2': 'Thorne',
                        'addressLine3': null,
                        'town': 'Doncaster',
                        'country': 'England/Wales',
                        'county': null,
                        'postCode': 'DN8 5RJ',
                        'nameOfBankAccount': 'Mr Philip Wragg',
                        'bankAccountNumber': '63716273',
                        'sortCode': '090128',
                        'buildingSocietyRollNumber': null,
                        'telephones': [
                            {
                                'telephoneId': 6383,
                                'fkBillingInfo': 9134,
                                'telephoneNumber': '01405817191',
                                'telephoneType': {
                                    'telephoneTypeId': 1,
                                    'typeName': 'Home'
                                },
                                'isMain': true,
                                'creationDate': 1448440215607
                            }
                        ],
                        'ofgemFitIds': null,
                        'ofgemGeneratorId': null,
                        'externalAccountId': null,
                        'generatorId': null
                    },
                    'externalAccountId': '1343467',
                    'status': {
                        'generatorStatusId': 1,
                        'generatorStatusName': 'Active'
                    }
                },
                {
                    'generatorId': 9161,
                    'ofgemGeneratorId': 'GEN5470818',
                    'email': 'jimmcbride@blueyonder.co.uk',
                    'generatorStartDate': 1443733200000,
                    'generatorEndDate': null,
                    'isVatOnExport': false,
                    'billingInfo': {
                        'billingInfoId': 9163,
                        'title': {
                            'titleId': 6,
                            'titleName': 'Mr.'
                        },
                        'firstName': 'Jim',
                        'lastName': 'McBride',
                        'companyName': null,
                        'companyNumber': null,
                        'addressLine1': '1 Finlaggan Place',
                        'addressLine2': null,
                        'addressLine3': null,
                        'town': 'Dundee',
                        'country': 'Scotland',
                        'county': 'Angus',
                        'postCode': 'DD4 9JS',
                        'nameOfBankAccount': 'Jim McBride',
                        'bankAccountNumber': '60395980',
                        'sortCode': '824404',
                        'buildingSocietyRollNumber': null,
                        'telephones': [
                            {
                                'telephoneId': 6412,
                                'fkBillingInfo': 9163,
                                'telephoneNumber': '07891846780',
                                'telephoneType': {
                                    'telephoneTypeId': 3,
                                    'typeName': 'Mobile'
                                },
                                'isMain': true,
                                'creationDate': 1449563417107
                            }
                        ],
                        'ofgemFitIds': null,
                        'ofgemGeneratorId': null,
                        'externalAccountId': null,
                        'generatorId': null
                    },
                    'externalAccountId': '1877812',
                    'status': {
                        'generatorStatusId': 1,
                        'generatorStatusName': 'Active'
                    }
                }
            ],
            'last': false,
            'totalPages': 3054,
            'totalElements': 9162,
            'size': 3,
            'number': 0,
            'sort': null,
            'numberOfElements': 3,
            'first': true
        };
    }
})();
