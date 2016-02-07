/* jshint -W079 */
var mockFitsData = (function () {
    return {
        findFits: findFits,
        getEmptyResponse: getEmptyResponse,
        getFitWithExtensions: getFitWithExtensions,
        getFitWithParent: getWithParent,
        getQuarters: getQuarters
    };

    function getQuarters() {
        return {
            content: [
                {quarterId: 1, quarterName: 'First'},
                {quarterId: 2, quarterName: 'Second'},
                {quarterId: 3, quarterName: 'Third'}
            ]
        };
    }

    function getFitWithExtensions() {
        return {
            'fitId': 9575,
            'ofgemFitId': 'FIT00007595',
            'generator': {
                'generatorId': 3378,
                'ofgemGeneratorId': 'GEN0178933',
                'email': 'milnerussell@hotmail.co.uk',
                'generatorStartDate': 1393880400000,
                'generatorEndDate': null,
                'isVatOnExport': false,
                'billingInfo': {
                    'billingInfoId': 3378,
                    'title': {
                        'titleId': 6,
                        'titleName': 'Mr.'
                    },
                    'firstName': 'Russell',
                    'lastName': 'Milne',
                    'companyName': null,
                    'companyNumber': null,
                    'addressLine1': '107 Leys Lane',
                    'addressLine2': null,
                    'addressLine3': null,
                    'town': 'Frome',
                    'country': 'England',
                    'county': 'Somerset',
                    'postCode': 'BA11 2JS',
                    'nameOfBankAccount': 'Mr Russell Milne',
                    'bankAccountNumber': '05282283',
                    'sortCode': '070436',
                    'buildingSocietyRollNumber': null,
                    'telephones': [
                        {
                            'telephoneId': 566,
                            'fkBillingInfo': 3378,
                            'telephoneNumber': '01373461664',
                            'telephoneType': {
                                'telephoneTypeId': 1,
                                'typeName': 'Home'
                            },
                            'isMain': true,
                            'creationDate': 1401971882400
                        }
                    ],
                    'ofgemFitIds': null,
                    'ofgemGeneratorId': null,
                    'energyAccountId': null,
                    'generatorId': 3378
                },
                'energyAccountId': null,
                'status': {
                    'generatorStatusId': 1,
                    'generatorStatusName': 'Active'
                }
            },
            'addressLine1': '107 Leys Lane',
            'addressLine2': null,
            'addressLine3': null,
            'country': 'England',
            'county': 'Somerset',
            'town': 'Frome',
            'postCode': 'BA11 2JS',
            'eligibilityStartDate': 1270069200000,
            'eligibilityEndDate': 1806440400000,
            'applicationStartDate': 1393880400000,
            'applicationEndDate': null,
            'creationDate': 1401915600000,
            'generatorTariff': {
                'tariffId': 368,
                'tariffName': 'PV/EXGEN/01',
                'export': false
            },
            'exportTariff': {
                'tariffId': 33,
                'tariffName': 'EXP',
                'export': true
            },
            'exportTariffRate': {
                'tariffRateId': 1336,
                'tariff': {
                    'tariffId': 33,
                    'tariffName': 'EXP',
                    'export': true
                },
                'rate': 3.44,
                'rateCoefficient': 0.5,
                'rateStartDate': 1427835600000,
                'rateEndDate': 1459371600000,
                'fitEligibilityStartDate': 1270069200000,
                'fitEligibilityEndDate': 1343682000000
            },
            'generationTariffRate': {
                'tariffRateId': 1231,
                'tariff': {
                    'tariffId': 368,
                    'tariffName': 'PV/EXGEN/01',
                    'export': false
                },
                'rate': 10.66,
                'rateCoefficient': 1,
                'rateStartDate': 1427835600000,
                'rateEndDate': 1459371600000,
                'fitEligibilityStartDate': 1270069200000,
                'fitEligibilityEndDate': 1301518800000
            },
            'technologyType': {
                'technologyId': 2,
                'technologyName': 'PhotoVoltaic'
            },
            'powerLevel': {
                'powerLevelId': 1,
                'powerLevelName': '<=4KW',
                'powerMinKw': 0,
                'powerMaxKw': 4,
                'technologyType': {
                    'technologyId': 2,
                    'technologyName': 'PhotoVoltaic'
                }
            },
            'mcsCertificateNumber': 'ROO420RWEN',
            'mcsEstAnnualGenerationKw': 2200,
            'totalInstallCapacity': 0,
            'declaredNetCapacity': 2.1,
            'importMpan': '2000026090222',
            'exportMpan': '2000054943257',
            'ofgemConfirmationDate': 1283202000000,
            'nextCustomerAnnualDeclarationDate': 1472590800000,
            'customerAnnualDeclarationConfirmationDate': 1445547600000,
            'billingInfo': {
                'billingInfoId': 3378,
                'title': {
                    'titleId': 6,
                    'titleName': 'Mr.'
                },
                'firstName': 'Russell',
                'lastName': 'Milne',
                'companyName': null,
                'companyNumber': null,
                'addressLine1': '107 Leys Lane',
                'addressLine2': null,
                'addressLine3': null,
                'town': 'Frome',
                'country': 'England',
                'county': 'Somerset',
                'postCode': 'BA11 2JS',
                'nameOfBankAccount': 'Mr Russell Milne',
                'bankAccountNumber': '05282283',
                'sortCode': '070436',
                'buildingSocietyRollNumber': null,
                'telephones': [
                    {
                        'telephoneId': 566,
                        'fkBillingInfo': 3378,
                        'telephoneNumber': '01373461664',
                        'telephoneType': {
                            'telephoneTypeId': 1,
                            'typeName': 'Home'
                        },
                        'isMain': true,
                        'creationDate': 1401971882400
                    }
                ],
                'ofgemFitIds': null,
                'ofgemGeneratorId': null,
                'energyAccountId': null,
                'generatorId': 3378
            },
            'isNominatedRecipient': false,
            'osGridRef': null,
            'roAccreditation': null,
            'isStandAloneExtension': false,
            'fitStatus': {
                'fitStatusId': 1,
                'fitStatusName': 'Active'
            },
            'epcReferenceNumber': null,
            'publicGrantInPounds': null,
            'fitExtensions': [
                {
                    'fitId': 1271,
                    'ofgemFitId': 'FIT00007595-3',
                    'generator': {
                        'generatorId': 3378,
                        'ofgemGeneratorId': 'GEN0178933',
                        'email': 'milnerussell@hotmail.co.uk',
                        'generatorStartDate': 1393880400000,
                        'generatorEndDate': null,
                        'isVatOnExport': false,
                        'billingInfo': {
                            'billingInfoId': 3378,
                            'title': {
                                'titleId': 6,
                                'titleName': 'Mr.'
                            },
                            'firstName': 'Russell',
                            'lastName': 'Milne',
                            'companyName': null,
                            'companyNumber': null,
                            'addressLine1': '107 Leys Lane',
                            'addressLine2': null,
                            'addressLine3': null,
                            'town': 'Frome',
                            'country': 'England',
                            'county': 'Somerset',
                            'postCode': 'BA11 2JS',
                            'nameOfBankAccount': 'Mr Russell Milne',
                            'bankAccountNumber': '05282283',
                            'sortCode': '070436',
                            'buildingSocietyRollNumber': null,
                            'telephones': [
                                {
                                    'telephoneId': 566,
                                    'fkBillingInfo': 3378,
                                    'telephoneNumber': '01373461664',
                                    'telephoneType': {
                                        'telephoneTypeId': 1,
                                        'typeName': 'Home'
                                    },
                                    'isMain': true,
                                    'creationDate': 1401971882400
                                }
                            ],
                            'ofgemFitIds': null,
                            'ofgemGeneratorId': null,
                            'energyAccountId': null,
                            'generatorId': 3378
                        },
                        'energyAccountId': null,
                        'status': {
                            'generatorStatusId': 1,
                            'generatorStatusName': 'Active'
                        }
                    },
                    'addressLine1': '107 Leys Lane',
                    'addressLine2': 'Frome',
                    'addressLine3': null,
                    'country': 'England',
                    'county': null,
                    'town': 'Somerset',
                    'postCode': 'BA11 2JS',
                    'eligibilityStartDate': 1442523600000,
                    'eligibilityEndDate': 2073589200000,
                    'applicationStartDate': 1442523600000,
                    'applicationEndDate': null,
                    'creationDate': 1452027600000,
                    'generatorTariff': {
                        'tariffId': 313,
                        'tariffName': 'PV/4-10/06L-1',
                        'export': false
                    },
                    'exportTariff': {
                        'tariffId': 33,
                        'tariffName': 'EXP',
                        'export': true
                    },
                    'exportTariffRate': {
                        'tariffRateId': 1335,
                        'tariff': {
                            'tariffId': 33,
                            'tariffName': 'EXP',
                            'export': true
                        },
                        'rate': 4.85,
                        'rateCoefficient': 0.5,
                        'rateStartDate': 1427835600000,
                        'rateEndDate': 1459371600000,
                        'fitEligibilityStartDate': 1343768400000,
                        'fitEligibilityEndDate': 1459371600000
                    },
                    'generationTariffRate': {
                        'tariffRateId': 1354,
                        'tariff': {
                            'tariffId': 313,
                            'tariffName': 'PV/4-10/06L-1',
                            'export': false
                        },
                        'rate': 5.94,
                        'rateCoefficient': 1,
                        'rateStartDate': 1435698000000,
                        'rateEndDate': 1459371600000,
                        'fitEligibilityStartDate': 1435698000000,
                        'fitEligibilityEndDate': 1443560400000
                    },
                    'technologyType': {
                        'technologyId': 2,
                        'technologyName': 'PhotoVoltaic'
                    },
                    'powerLevel': {
                        'powerLevelId': 1,
                        'powerLevelName': '<=4KW',
                        'powerMinKw': 0,
                        'powerMaxKw': 4,
                        'technologyType': {
                            'technologyId': 2,
                            'technologyName': 'PhotoVoltaic'
                        }
                    },
                    'mcsCertificateNumber': 'MCS-00857149-O',
                    'mcsEstAnnualGenerationKw': 1400,
                    'totalInstallCapacity': 0,
                    'declaredNetCapacity': 1.4,
                    'importMpan': '2000054943257',
                    'exportMpan': null,
                    'ofgemConfirmationDate': null,
                    'nextCustomerAnnualDeclarationDate': null,
                    'customerAnnualDeclarationConfirmationDate': null,
                    'billingInfo': {
                        'billingInfoId': 3378,
                        'title': {
                            'titleId': 6,
                            'titleName': 'Mr.'
                        },
                        'firstName': 'Russell',
                        'lastName': 'Milne',
                        'companyName': null,
                        'companyNumber': null,
                        'addressLine1': '107 Leys Lane',
                        'addressLine2': null,
                        'addressLine3': null,
                        'town': 'Frome',
                        'country': 'England',
                        'county': 'Somerset',
                        'postCode': 'BA11 2JS',
                        'nameOfBankAccount': 'Mr Russell Milne',
                        'bankAccountNumber': '05282283',
                        'sortCode': '070436',
                        'buildingSocietyRollNumber': null,
                        'telephones': [
                            {
                                'telephoneId': 566,
                                'fkBillingInfo': 3378,
                                'telephoneNumber': '01373461664',
                                'telephoneType': {
                                    'telephoneTypeId': 1,
                                    'typeName': 'Home'
                                },
                                'isMain': true,
                                'creationDate': 1401971882400
                            }
                        ],
                        'ofgemFitIds': null,
                        'ofgemGeneratorId': null,
                        'energyAccountId': null,
                        'generatorId': 3378
                    },
                    'isNominatedRecipient': false,
                    'osGridRef': null,
                    'roAccreditation': null,
                    'isStandAloneExtension': false,
                    'fitStatus': {
                        'fitStatusId': 1,
                        'fitStatusName': 'Active'
                    },
                    'epcReferenceNumber': null,
                    'publicGrantInPounds': null,
                    'fitExtensions': null,
                    'parentFit': {
                        'fitId': 9575,
                        'ofgemFitId': 'FIT00007595',
                        'generator': {
                            'generatorId': 3378,
                            'ofgemGeneratorId': 'GEN0178933',
                            'email': 'milnerussell@hotmail.co.uk',
                            'generatorStartDate': 1393880400000,
                            'generatorEndDate': null,
                            'isVatOnExport': false,
                            'billingInfo': {
                                'billingInfoId': 3378,
                                'title': {
                                    'titleId': 6,
                                    'titleName': 'Mr.'
                                },
                                'firstName': 'Russell',
                                'lastName': 'Milne',
                                'companyName': null,
                                'companyNumber': null,
                                'addressLine1': '107 Leys Lane',
                                'addressLine2': null,
                                'addressLine3': null,
                                'town': 'Frome',
                                'country': 'England',
                                'county': 'Somerset',
                                'postCode': 'BA11 2JS',
                                'nameOfBankAccount': 'Mr Russell Milne',
                                'bankAccountNumber': '05282283',
                                'sortCode': '070436',
                                'buildingSocietyRollNumber': null,
                                'telephones': [
                                    {
                                        'telephoneId': 566,
                                        'fkBillingInfo': 3378,
                                        'telephoneNumber': '01373461664',
                                        'telephoneType': {
                                            'telephoneTypeId': 1,
                                            'typeName': 'Home'
                                        },
                                        'isMain': true,
                                        'creationDate': 1401971882400
                                    }
                                ],
                                'ofgemFitIds': null,
                                'ofgemGeneratorId': null,
                                'energyAccountId': null,
                                'generatorId': 3378
                            },
                            'energyAccountId': null,
                            'status': {
                                'generatorStatusId': 1,
                                'generatorStatusName': 'Active'
                            }
                        },
                        'addressLine1': '107 Leys Lane',
                        'addressLine2': null,
                        'addressLine3': null,
                        'country': 'England',
                        'county': 'Somerset',
                        'town': 'Frome',
                        'postCode': 'BA11 2JS',
                        'eligibilityStartDate': 1270069200000,
                        'eligibilityEndDate': 1806440400000,
                        'applicationStartDate': 1393880400000,
                        'applicationEndDate': null,
                        'creationDate': 1401915600000,
                        'generatorTariff': {
                            'tariffId': 368,
                            'tariffName': 'PV/EXGEN/01',
                            'export': false
                        },
                        'exportTariff': {
                            'tariffId': 33,
                            'tariffName': 'EXP',
                            'export': true
                        },
                        'exportTariffRate': {
                            'tariffRateId': 1336,
                            'tariff': {
                                'tariffId': 33,
                                'tariffName': 'EXP',
                                'export': true
                            },
                            'rate': 3.44,
                            'rateCoefficient': 0.5,
                            'rateStartDate': 1427835600000,
                            'rateEndDate': 1459371600000,
                            'fitEligibilityStartDate': 1270069200000,
                            'fitEligibilityEndDate': 1343682000000
                        },
                        'generationTariffRate': {
                            'tariffRateId': 1231,
                            'tariff': {
                                'tariffId': 368,
                                'tariffName': 'PV/EXGEN/01',
                                'export': false
                            },
                            'rate': 10.66,
                            'rateCoefficient': 1,
                            'rateStartDate': 1427835600000,
                            'rateEndDate': 1459371600000,
                            'fitEligibilityStartDate': 1270069200000,
                            'fitEligibilityEndDate': 1301518800000
                        },
                        'technologyType': {
                            'technologyId': 2,
                            'technologyName': 'PhotoVoltaic'
                        },
                        'powerLevel': {
                            'powerLevelId': 1,
                            'powerLevelName': '<=4KW',
                            'powerMinKw': 0,
                            'powerMaxKw': 4,
                            'technologyType': {
                                'technologyId': 2,
                                'technologyName': 'PhotoVoltaic'
                            }
                        },
                        'mcsCertificateNumber': 'ROO420RWEN',
                        'mcsEstAnnualGenerationKw': 2200,
                        'totalInstallCapacity': 0,
                        'declaredNetCapacity': 2.1,
                        'importMpan': '2000026090222',
                        'exportMpan': '2000054943257',
                        'ofgemConfirmationDate': 1283202000000,
                        'nextCustomerAnnualDeclarationDate': 1472590800000,
                        'customerAnnualDeclarationConfirmationDate': 1445547600000,
                        'billingInfo': {
                            'billingInfoId': 3378,
                            'title': {
                                'titleId': 6,
                                'titleName': 'Mr.'
                            },
                            'firstName': 'Russell',
                            'lastName': 'Milne',
                            'companyName': null,
                            'companyNumber': null,
                            'addressLine1': '107 Leys Lane',
                            'addressLine2': null,
                            'addressLine3': null,
                            'town': 'Frome',
                            'country': 'England',
                            'county': 'Somerset',
                            'postCode': 'BA11 2JS',
                            'nameOfBankAccount': 'Mr Russell Milne',
                            'bankAccountNumber': '05282283',
                            'sortCode': '070436',
                            'buildingSocietyRollNumber': null,
                            'telephones': [
                                {
                                    'telephoneId': 566,
                                    'fkBillingInfo': 3378,
                                    'telephoneNumber': '01373461664',
                                    'telephoneType': {
                                        'telephoneTypeId': 1,
                                        'typeName': 'Home'
                                    },
                                    'isMain': true,
                                    'creationDate': 1401971882400
                                }
                            ],
                            'ofgemFitIds': null,
                            'ofgemGeneratorId': null,
                            'energyAccountId': null,
                            'generatorId': 3378
                        },
                        'isNominatedRecipient': false,
                        'osGridRef': null,
                        'roAccreditation': null,
                        'isStandAloneExtension': false,
                        'fitStatus': {
                            'fitStatusId': 1,
                            'fitStatusName': 'Active'
                        },
                        'epcReferenceNumber': null,
                        'publicGrantInPounds': null,
                        'fitExtensions': null,
                        'parentFit': null,
                        'isGeneratorBankAccountUsedForPayments': null,
                        'exportProportion': null,
                        'tariffAllocationDateCalculation': null,
                        'externalAccountId': null,
                        'isExcluded': null,
                        'exportMeter': {
                            'meterId': 4,
                            'meterSerialNumber': 'D07C68482',
                            'installationDate': 1151701200000,
                            'removalDate': null,
                            'pedestrianInspectionLastDate': null,
                            'isExportMeter': true,
                            'meterManufacturer': 'Ampy',
                            'meterModel': '5254E',
                            'isAmrMeter': false,
                            'isClosed': false,
                            'meterLocation': null,
                            'meterReadsAndFits': null
                        }
                    },
                    'isGeneratorBankAccountUsedForPayments': null,
                    'exportProportion': null,
                    'tariffAllocationDateCalculation': null,
                    'externalAccountId': null,
                    'isExcluded': null,
                    'exportMeter': null
                },
                {
                    'fitId': 8306,
                    'ofgemFitId': 'FIT00007595-2',
                    'generator': {
                        'generatorId': 3378,
                        'ofgemGeneratorId': 'GEN0178933',
                        'email': 'milnerussell@hotmail.co.uk',
                        'generatorStartDate': 1393880400000,
                        'generatorEndDate': null,
                        'isVatOnExport': false,
                        'billingInfo': {
                            'billingInfoId': 3378,
                            'title': {
                                'titleId': 6,
                                'titleName': 'Mr.'
                            },
                            'firstName': 'Russell',
                            'lastName': 'Milne',
                            'companyName': null,
                            'companyNumber': null,
                            'addressLine1': '107 Leys Lane',
                            'addressLine2': null,
                            'addressLine3': null,
                            'town': 'Frome',
                            'country': 'England',
                            'county': 'Somerset',
                            'postCode': 'BA11 2JS',
                            'nameOfBankAccount': 'Mr Russell Milne',
                            'bankAccountNumber': '05282283',
                            'sortCode': '070436',
                            'buildingSocietyRollNumber': null,
                            'telephones': [
                                {
                                    'telephoneId': 566,
                                    'fkBillingInfo': 3378,
                                    'telephoneNumber': '01373461664',
                                    'telephoneType': {
                                        'telephoneTypeId': 1,
                                        'typeName': 'Home'
                                    },
                                    'isMain': true,
                                    'creationDate': 1401971882400
                                }
                            ],
                            'ofgemFitIds': null,
                            'ofgemGeneratorId': null,
                            'energyAccountId': null,
                            'generatorId': 3378
                        },
                        'energyAccountId': null,
                        'status': {
                            'generatorStatusId': 1,
                            'generatorStatusName': 'Active'
                        }
                    },
                    'addressLine1': '107 Leys Lane',
                    'addressLine2': null,
                    'addressLine3': null,
                    'country': 'England',
                    'county': 'Somerset',
                    'town': 'Frome',
                    'postCode': 'BA11 2JS',
                    'eligibilityStartDate': 1313355600000,
                    'eligibilityEndDate': 2102274000000,
                    'applicationStartDate': 1393880400000,
                    'applicationEndDate': null,
                    'creationDate': 1401915600000,
                    'generatorTariff': {
                        'tariffId': 443,
                        'tariffName': 'PV-R/0-4/02',
                        'export': false
                    },
                    'exportTariff': {
                        'tariffId': 33,
                        'tariffName': 'EXP',
                        'export': true
                    },
                    'exportTariffRate': {
                        'tariffRateId': 1336,
                        'tariff': {
                            'tariffId': 33,
                            'tariffName': 'EXP',
                            'export': true
                        },
                        'rate': 3.44,
                        'rateCoefficient': 0.5,
                        'rateStartDate': 1427835600000,
                        'rateEndDate': 1459371600000,
                        'fitEligibilityStartDate': 1270069200000,
                        'fitEligibilityEndDate': 1343682000000
                    },
                    'generationTariffRate': {
                        'tariffRateId': 966,
                        'tariff': {
                            'tariffId': 443,
                            'tariffName': 'PV-R/0-4/02',
                            'export': false
                        },
                        'rate': 48.84,
                        'rateCoefficient': 1,
                        'rateStartDate': 1427835600000,
                        'rateEndDate': 1459371600000,
                        'fitEligibilityStartDate': 1301605200000,
                        'fitEligibilityEndDate': 1330635600000
                    },
                    'technologyType': {
                        'technologyId': 2,
                        'technologyName': 'PhotoVoltaic'
                    },
                    'powerLevel': {
                        'powerLevelId': 1,
                        'powerLevelName': '<=4KW',
                        'powerMinKw': 0,
                        'powerMaxKw': 4,
                        'technologyType': {
                            'technologyId': 2,
                            'technologyName': 'PhotoVoltaic'
                        }
                    },
                    'mcsCertificateNumber': 'MCS-00093192-E',
                    'mcsEstAnnualGenerationKw': 1765,
                    'totalInstallCapacity': 0,
                    'declaredNetCapacity': 1.88,
                    'importMpan': '2000026090222',
                    'exportMpan': '2000054943257',
                    'ofgemConfirmationDate': 1317330000000,
                    'nextCustomerAnnualDeclarationDate': 1475182800000,
                    'customerAnnualDeclarationConfirmationDate': 1448398800000,
                    'billingInfo': {
                        'billingInfoId': 3378,
                        'title': {
                            'titleId': 6,
                            'titleName': 'Mr.'
                        },
                        'firstName': 'Russell',
                        'lastName': 'Milne',
                        'companyName': null,
                        'companyNumber': null,
                        'addressLine1': '107 Leys Lane',
                        'addressLine2': null,
                        'addressLine3': null,
                        'town': 'Frome',
                        'country': 'England',
                        'county': 'Somerset',
                        'postCode': 'BA11 2JS',
                        'nameOfBankAccount': 'Mr Russell Milne',
                        'bankAccountNumber': '05282283',
                        'sortCode': '070436',
                        'buildingSocietyRollNumber': null,
                        'telephones': [
                            {
                                'telephoneId': 566,
                                'fkBillingInfo': 3378,
                                'telephoneNumber': '01373461664',
                                'telephoneType': {
                                    'telephoneTypeId': 1,
                                    'typeName': 'Home'
                                },
                                'isMain': true,
                                'creationDate': 1401971882400
                            }
                        ],
                        'ofgemFitIds': null,
                        'ofgemGeneratorId': null,
                        'energyAccountId': null,
                        'generatorId': 3378
                    },
                    'isNominatedRecipient': false,
                    'osGridRef': null,
                    'roAccreditation': null,
                    'isStandAloneExtension': false,
                    'fitStatus': {
                        'fitStatusId': 1,
                        'fitStatusName': 'Active'
                    },
                    'epcReferenceNumber': null,
                    'publicGrantInPounds': null,
                    'fitExtensions': null,
                    'parentFit': {
                        'fitId': 9575,
                        'ofgemFitId': 'FIT00007595',
                        'generator': {
                            'generatorId': 3378,
                            'ofgemGeneratorId': 'GEN0178933',
                            'email': 'milnerussell@hotmail.co.uk',
                            'generatorStartDate': 1393880400000,
                            'generatorEndDate': null,
                            'isVatOnExport': false,
                            'billingInfo': {
                                'billingInfoId': 3378,
                                'title': {
                                    'titleId': 6,
                                    'titleName': 'Mr.'
                                },
                                'firstName': 'Russell',
                                'lastName': 'Milne',
                                'companyName': null,
                                'companyNumber': null,
                                'addressLine1': '107 Leys Lane',
                                'addressLine2': null,
                                'addressLine3': null,
                                'town': 'Frome',
                                'country': 'England',
                                'county': 'Somerset',
                                'postCode': 'BA11 2JS',
                                'nameOfBankAccount': 'Mr Russell Milne',
                                'bankAccountNumber': '05282283',
                                'sortCode': '070436',
                                'buildingSocietyRollNumber': null,
                                'telephones': [
                                    {
                                        'telephoneId': 566,
                                        'fkBillingInfo': 3378,
                                        'telephoneNumber': '01373461664',
                                        'telephoneType': {
                                            'telephoneTypeId': 1,
                                            'typeName': 'Home'
                                        },
                                        'isMain': true,
                                        'creationDate': 1401971882400
                                    }
                                ],
                                'ofgemFitIds': null,
                                'ofgemGeneratorId': null,
                                'energyAccountId': null,
                                'generatorId': 3378
                            },
                            'energyAccountId': null,
                            'status': {
                                'generatorStatusId': 1,
                                'generatorStatusName': 'Active'
                            }
                        },
                        'addressLine1': '107 Leys Lane',
                        'addressLine2': null,
                        'addressLine3': null,
                        'country': 'England',
                        'county': 'Somerset',
                        'town': 'Frome',
                        'postCode': 'BA11 2JS',
                        'eligibilityStartDate': 1270069200000,
                        'eligibilityEndDate': 1806440400000,
                        'applicationStartDate': 1393880400000,
                        'applicationEndDate': null,
                        'creationDate': 1401915600000,
                        'generatorTariff': {
                            'tariffId': 368,
                            'tariffName': 'PV/EXGEN/01',
                            'export': false
                        },
                        'exportTariff': {
                            'tariffId': 33,
                            'tariffName': 'EXP',
                            'export': true
                        },
                        'exportTariffRate': {
                            'tariffRateId': 1336,
                            'tariff': {
                                'tariffId': 33,
                                'tariffName': 'EXP',
                                'export': true
                            },
                            'rate': 3.44,
                            'rateCoefficient': 0.5,
                            'rateStartDate': 1427835600000,
                            'rateEndDate': 1459371600000,
                            'fitEligibilityStartDate': 1270069200000,
                            'fitEligibilityEndDate': 1343682000000
                        },
                        'generationTariffRate': {
                            'tariffRateId': 1231,
                            'tariff': {
                                'tariffId': 368,
                                'tariffName': 'PV/EXGEN/01',
                                'export': false
                            },
                            'rate': 10.66,
                            'rateCoefficient': 1,
                            'rateStartDate': 1427835600000,
                            'rateEndDate': 1459371600000,
                            'fitEligibilityStartDate': 1270069200000,
                            'fitEligibilityEndDate': 1301518800000
                        },
                        'technologyType': {
                            'technologyId': 2,
                            'technologyName': 'PhotoVoltaic'
                        },
                        'powerLevel': {
                            'powerLevelId': 1,
                            'powerLevelName': '<=4KW',
                            'powerMinKw': 0,
                            'powerMaxKw': 4,
                            'technologyType': {
                                'technologyId': 2,
                                'technologyName': 'PhotoVoltaic'
                            }
                        },
                        'mcsCertificateNumber': 'ROO420RWEN',
                        'mcsEstAnnualGenerationKw': 2200,
                        'totalInstallCapacity': 0,
                        'declaredNetCapacity': 2.1,
                        'importMpan': '2000026090222',
                        'exportMpan': '2000054943257',
                        'ofgemConfirmationDate': 1283202000000,
                        'nextCustomerAnnualDeclarationDate': 1472590800000,
                        'customerAnnualDeclarationConfirmationDate': 1445547600000,
                        'billingInfo': {
                            'billingInfoId': 3378,
                            'title': {
                                'titleId': 6,
                                'titleName': 'Mr.'
                            },
                            'firstName': 'Russell',
                            'lastName': 'Milne',
                            'companyName': null,
                            'companyNumber': null,
                            'addressLine1': '107 Leys Lane',
                            'addressLine2': null,
                            'addressLine3': null,
                            'town': 'Frome',
                            'country': 'England',
                            'county': 'Somerset',
                            'postCode': 'BA11 2JS',
                            'nameOfBankAccount': 'Mr Russell Milne',
                            'bankAccountNumber': '05282283',
                            'sortCode': '070436',
                            'buildingSocietyRollNumber': null,
                            'telephones': [
                                {
                                    'telephoneId': 566,
                                    'fkBillingInfo': 3378,
                                    'telephoneNumber': '01373461664',
                                    'telephoneType': {
                                        'telephoneTypeId': 1,
                                        'typeName': 'Home'
                                    },
                                    'isMain': true,
                                    'creationDate': 1401971882400
                                }
                            ],
                            'ofgemFitIds': null,
                            'ofgemGeneratorId': null,
                            'energyAccountId': null,
                            'generatorId': 3378
                        },
                        'isNominatedRecipient': false,
                        'osGridRef': null,
                        'roAccreditation': null,
                        'isStandAloneExtension': false,
                        'fitStatus': {
                            'fitStatusId': 1,
                            'fitStatusName': 'Active'
                        },
                        'epcReferenceNumber': null,
                        'publicGrantInPounds': null,
                        'fitExtensions': null,
                        'parentFit': null,
                        'isGeneratorBankAccountUsedForPayments': null,
                        'exportProportion': null,
                        'tariffAllocationDateCalculation': null,
                        'externalAccountId': null,
                        'isExcluded': null,
                        'exportMeter': {
                            'meterId': 4,
                            'meterSerialNumber': 'D07C68482',
                            'installationDate': 1151701200000,
                            'removalDate': null,
                            'pedestrianInspectionLastDate': null,
                            'isExportMeter': true,
                            'meterManufacturer': 'Ampy',
                            'meterModel': '5254E',
                            'isAmrMeter': false,
                            'isClosed': false,
                            'meterLocation': null,
                            'meterReadsAndFits': null
                        }
                    },
                    'isGeneratorBankAccountUsedForPayments': null,
                    'exportProportion': null,
                    'tariffAllocationDateCalculation': null,
                    'externalAccountId': null,
                    'isExcluded': null,
                    'exportMeter': {
                        'meterId': 4,
                        'meterSerialNumber': 'D07C68482',
                        'installationDate': 1151701200000,
                        'removalDate': null,
                        'pedestrianInspectionLastDate': null,
                        'isExportMeter': true,
                        'meterManufacturer': 'Ampy',
                        'meterModel': '5254E',
                        'isAmrMeter': false,
                        'isClosed': false,
                        'meterLocation': null,
                        'meterReadsAndFits': null
                    }
                }
            ],
            'parentFit': null,
            'isGeneratorBankAccountUsedForPayments': true,
            'exportProportion': 0.5,
            'tariffAllocationDateCalculation': 1427835600000,
            'externalAccountId': '1059720',
            'isExcluded': null,
            'exportMeter': {
                'meterId': 4,
                'meterSerialNumber': 'D07C68482',
                'installationDate': 1151701200000,
                'removalDate': null,
                'pedestrianInspectionLastDate': null,
                'isExportMeter': true,
                'meterManufacturer': 'Ampy',
                'meterModel': '5254E',
                'isAmrMeter': false,
                'isClosed': false,
                'meterLocation': null,
                'meterReadsAndFits': null
            }
        };
    }

    function getWithParent() {
        return {
            'fitId': 1271,
            'ofgemFitId': 'FIT00007595-3',
            'generator': {
                'generatorId': 3378,
                'ofgemGeneratorId': 'GEN0178933',
                'email': 'milnerussell@hotmail.co.uk',
                'generatorStartDate': 1393880400000,
                'generatorEndDate': null,
                'isVatOnExport': false,
                'billingInfo': {
                    'billingInfoId': 3378,
                    'title': {
                        'titleId': 6,
                        'titleName': 'Mr.'
                    },
                    'firstName': 'Russell',
                    'lastName': 'Milne',
                    'companyName': null,
                    'companyNumber': null,
                    'addressLine1': '107 Leys Lane',
                    'addressLine2': null,
                    'addressLine3': null,
                    'town': 'Frome',
                    'country': 'England',
                    'county': 'Somerset',
                    'postCode': 'BA11 2JS',
                    'nameOfBankAccount': 'Mr Russell Milne',
                    'bankAccountNumber': '05282283',
                    'sortCode': '070436',
                    'buildingSocietyRollNumber': null,
                    'telephones': [
                        {
                            'telephoneId': 566,
                            'fkBillingInfo': 3378,
                            'telephoneNumber': '01373461664',
                            'telephoneType': {
                                'telephoneTypeId': 1,
                                'typeName': 'Home'
                            },
                            'isMain': true,
                            'creationDate': 1401971882400
                        }
                    ],
                    'ofgemFitIds': null,
                    'ofgemGeneratorId': null,
                    'energyAccountId': null,
                    'generatorId': 3378
                },
                'energyAccountId': null,
                'status': {
                    'generatorStatusId': 1,
                    'generatorStatusName': 'Active'
                }
            },
            'addressLine1': '107 Leys Lane',
            'addressLine2': 'Frome',
            'addressLine3': null,
            'country': 'England',
            'county': null,
            'town': 'Somerset',
            'postCode': 'BA11 2JS',
            'eligibilityStartDate': 1442523600000,
            'eligibilityEndDate': 2073589200000,
            'applicationStartDate': 1442523600000,
            'applicationEndDate': null,
            'creationDate': 1452027600000,
            'generatorTariff': {
                'tariffId': 313,
                'tariffName': 'PV/4-10/06L-1',
                'export': false
            },
            'exportTariff': {
                'tariffId': 33,
                'tariffName': 'EXP',
                'export': true
            },
            'exportTariffRate': {
                'tariffRateId': 1335,
                'tariff': {
                    'tariffId': 33,
                    'tariffName': 'EXP',
                    'export': true
                },
                'rate': 4.85,
                'rateCoefficient': 0.5,
                'rateStartDate': 1427835600000,
                'rateEndDate': 1459371600000,
                'fitEligibilityStartDate': 1343768400000,
                'fitEligibilityEndDate': 1459371600000
            },
            'generationTariffRate': {
                'tariffRateId': 1354,
                'tariff': {
                    'tariffId': 313,
                    'tariffName': 'PV/4-10/06L-1',
                    'export': false
                },
                'rate': 5.94,
                'rateCoefficient': 1,
                'rateStartDate': 1435698000000,
                'rateEndDate': 1459371600000,
                'fitEligibilityStartDate': 1435698000000,
                'fitEligibilityEndDate': 1443560400000
            },
            'technologyType': {
                'technologyId': 2,
                'technologyName': 'PhotoVoltaic'
            },
            'powerLevel': {
                'powerLevelId': 1,
                'powerLevelName': '<=4KW',
                'powerMinKw': 0,
                'powerMaxKw': 4,
                'technologyType': {
                    'technologyId': 2,
                    'technologyName': 'PhotoVoltaic'
                }
            },
            'mcsCertificateNumber': 'MCS-00857149-O',
            'mcsEstAnnualGenerationKw': 1400,
            'totalInstallCapacity': 0,
            'declaredNetCapacity': 1.4,
            'importMpan': '2000054943257',
            'exportMpan': null,
            'ofgemConfirmationDate': null,
            'nextCustomerAnnualDeclarationDate': null,
            'customerAnnualDeclarationConfirmationDate': null,
            'billingInfo': {
                'billingInfoId': 3378,
                'title': {
                    'titleId': 6,
                    'titleName': 'Mr.'
                },
                'firstName': 'Russell',
                'lastName': 'Milne',
                'companyName': null,
                'companyNumber': null,
                'addressLine1': '107 Leys Lane',
                'addressLine2': null,
                'addressLine3': null,
                'town': 'Frome',
                'country': 'England',
                'county': 'Somerset',
                'postCode': 'BA11 2JS',
                'nameOfBankAccount': 'Mr Russell Milne',
                'bankAccountNumber': '05282283',
                'sortCode': '070436',
                'buildingSocietyRollNumber': null,
                'telephones': [
                    {
                        'telephoneId': 566,
                        'fkBillingInfo': 3378,
                        'telephoneNumber': '01373461664',
                        'telephoneType': {
                            'telephoneTypeId': 1,
                            'typeName': 'Home'
                        },
                        'isMain': true,
                        'creationDate': 1401971882400
                    }
                ],
                'ofgemFitIds': null,
                'ofgemGeneratorId': null,
                'energyAccountId': null,
                'generatorId': 3378
            },
            'isNominatedRecipient': false,
            'osGridRef': null,
            'roAccreditation': null,
            'isStandAloneExtension': false,
            'fitStatus': {
                'fitStatusId': 1,
                'fitStatusName': 'Active'
            },
            'epcReferenceNumber': null,
            'publicGrantInPounds': null,
            'fitExtensions': [],
            'parentFit': {
                'fitId': 9575,
                'ofgemFitId': 'FIT00007595',
                'generator': {
                    'generatorId': 3378,
                    'ofgemGeneratorId': 'GEN0178933',
                    'email': 'milnerussell@hotmail.co.uk',
                    'generatorStartDate': 1393880400000,
                    'generatorEndDate': null,
                    'isVatOnExport': false,
                    'billingInfo': {
                        'billingInfoId': 3378,
                        'title': {
                            'titleId': 6,
                            'titleName': 'Mr.'
                        },
                        'firstName': 'Russell',
                        'lastName': 'Milne',
                        'companyName': null,
                        'companyNumber': null,
                        'addressLine1': '107 Leys Lane',
                        'addressLine2': null,
                        'addressLine3': null,
                        'town': 'Frome',
                        'country': 'England',
                        'county': 'Somerset',
                        'postCode': 'BA11 2JS',
                        'nameOfBankAccount': 'Mr Russell Milne',
                        'bankAccountNumber': '05282283',
                        'sortCode': '070436',
                        'buildingSocietyRollNumber': null,
                        'telephones': [
                            {
                                'telephoneId': 566,
                                'fkBillingInfo': 3378,
                                'telephoneNumber': '01373461664',
                                'telephoneType': {
                                    'telephoneTypeId': 1,
                                    'typeName': 'Home'
                                },
                                'isMain': true,
                                'creationDate': 1401971882400
                            }
                        ],
                        'ofgemFitIds': null,
                        'ofgemGeneratorId': null,
                        'energyAccountId': null,
                        'generatorId': 3378
                    },
                    'energyAccountId': null,
                    'status': {
                        'generatorStatusId': 1,
                        'generatorStatusName': 'Active'
                    }
                },
                'addressLine1': '107 Leys Lane',
                'addressLine2': null,
                'addressLine3': null,
                'country': 'England',
                'county': 'Somerset',
                'town': 'Frome',
                'postCode': 'BA11 2JS',
                'eligibilityStartDate': 1270069200000,
                'eligibilityEndDate': 1806440400000,
                'applicationStartDate': 1393880400000,
                'applicationEndDate': null,
                'creationDate': 1401915600000,
                'generatorTariff': {
                    'tariffId': 368,
                    'tariffName': 'PV/EXGEN/01',
                    'export': false
                },
                'exportTariff': {
                    'tariffId': 33,
                    'tariffName': 'EXP',
                    'export': true
                },
                'exportTariffRate': {
                    'tariffRateId': 1336,
                    'tariff': {
                        'tariffId': 33,
                        'tariffName': 'EXP',
                        'export': true
                    },
                    'rate': 3.44,
                    'rateCoefficient': 0.5,
                    'rateStartDate': 1427835600000,
                    'rateEndDate': 1459371600000,
                    'fitEligibilityStartDate': 1270069200000,
                    'fitEligibilityEndDate': 1343682000000
                },
                'generationTariffRate': {
                    'tariffRateId': 1231,
                    'tariff': {
                        'tariffId': 368,
                        'tariffName': 'PV/EXGEN/01',
                        'export': false
                    },
                    'rate': 10.66,
                    'rateCoefficient': 1,
                    'rateStartDate': 1427835600000,
                    'rateEndDate': 1459371600000,
                    'fitEligibilityStartDate': 1270069200000,
                    'fitEligibilityEndDate': 1301518800000
                },
                'technologyType': {
                    'technologyId': 2,
                    'technologyName': 'PhotoVoltaic'
                },
                'powerLevel': {
                    'powerLevelId': 1,
                    'powerLevelName': '<=4KW',
                    'powerMinKw': 0,
                    'powerMaxKw': 4,
                    'technologyType': {
                        'technologyId': 2,
                        'technologyName': 'PhotoVoltaic'
                    }
                },
                'mcsCertificateNumber': 'ROO420RWEN',
                'mcsEstAnnualGenerationKw': 2200,
                'totalInstallCapacity': 0,
                'declaredNetCapacity': 2.1,
                'importMpan': '2000026090222',
                'exportMpan': '2000054943257',
                'ofgemConfirmationDate': 1283202000000,
                'nextCustomerAnnualDeclarationDate': 1472590800000,
                'customerAnnualDeclarationConfirmationDate': 1445547600000,
                'billingInfo': {
                    'billingInfoId': 3378,
                    'title': {
                        'titleId': 6,
                        'titleName': 'Mr.'
                    },
                    'firstName': 'Russell',
                    'lastName': 'Milne',
                    'companyName': null,
                    'companyNumber': null,
                    'addressLine1': '107 Leys Lane',
                    'addressLine2': null,
                    'addressLine3': null,
                    'town': 'Frome',
                    'country': 'England',
                    'county': 'Somerset',
                    'postCode': 'BA11 2JS',
                    'nameOfBankAccount': 'Mr Russell Milne',
                    'bankAccountNumber': '05282283',
                    'sortCode': '070436',
                    'buildingSocietyRollNumber': null,
                    'telephones': [
                        {
                            'telephoneId': 566,
                            'fkBillingInfo': 3378,
                            'telephoneNumber': '01373461664',
                            'telephoneType': {
                                'telephoneTypeId': 1,
                                'typeName': 'Home'
                            },
                            'isMain': true,
                            'creationDate': 1401971882400
                        }
                    ],
                    'ofgemFitIds': null,
                    'ofgemGeneratorId': null,
                    'energyAccountId': null,
                    'generatorId': 3378
                },
                'isNominatedRecipient': false,
                'osGridRef': null,
                'roAccreditation': null,
                'isStandAloneExtension': false,
                'fitStatus': {
                    'fitStatusId': 1,
                    'fitStatusName': 'Active'
                },
                'epcReferenceNumber': null,
                'publicGrantInPounds': null,
                'fitExtensions': null,
                'parentFit': null,
                'isGeneratorBankAccountUsedForPayments': null,
                'exportProportion': null,
                'tariffAllocationDateCalculation': null,
                'externalAccountId': null,
                'isExcluded': null,
                'exportMeter': {
                    'meterId': 4,
                    'meterSerialNumber': 'D07C68482',
                    'installationDate': 1151701200000,
                    'removalDate': null,
                    'pedestrianInspectionLastDate': null,
                    'isExportMeter': true,
                    'meterManufacturer': 'Ampy',
                    'meterModel': '5254E',
                    'isAmrMeter': false,
                    'isClosed': false,
                    'meterLocation': null,
                    'meterReadsAndFits': null
                }
            },
            'isGeneratorBankAccountUsedForPayments': true,
            'exportProportion': 0,
            'tariffAllocationDateCalculation': 1442523600000,
            'externalAccountId': '1059720',
            'isExcluded': null,
            'exportMeter': null
        };
    }

    function getEmptyResponse() {
        return {
            'content': [],
            'last': true,
            'totalPages': 0,
            'totalElements': 0,
            'size': 50,
            'number': 1,
            'sort': null,
            'numberOfElements': 0,
            'first': false
        };
    }

    function findFits() {
        return {
            'content': [
                {
                    'fitId': 1283,
                    'ofgemFitId': 'FIT00708516',
                    'generator': {
                        'generatorId': 6392,
                        'ofgemGeneratorId': 'GEN5483746'
                    },
                    'postCode': 'PL15 9PQ',
                    'isExcluded': null,
                    'addressLine1': '1 Budge Meadows'
                },
                {
                    'fitId': 1282,
                    'ofgemFitId': 'FIT00707723',
                    'generator': {
                        'generatorId': 9281,
                        'ofgemGeneratorId': 'GEN5483284'
                    },
                    'postCode': 'TS8 9XH',
                    'isExcluded': null,
                    'addressLine1': '52 Cranbrook'
                },
                {
                    'fitId': 1281,
                    'ofgemFitId': 'FIT00707696',
                    'generator': {
                        'generatorId': 6386,
                        'ofgemGeneratorId': 'GEN5483271'
                    },
                    'postCode': 'CT5 2LX',
                    'isExcluded': null,
                    'addressLine1': '2 Cotton Mews'
                }
            ],
            'last': false,
            'totalElements': 9628,
            'totalPages': 3210,
            'size': 3,
            'number': 0,
            'sort': null,
            'first': true,
            'numberOfElements': 3
        };
    }
})();
