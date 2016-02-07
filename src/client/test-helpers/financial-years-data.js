/* jshint -W079 */
var financialYearsData = (function () {
    return {
        getFinancialYears: getFinancialYears
    };

    function getFinancialYears() {
        return [
            {
                'financialYearId': 1,
                'financialYearName': '2010/2011',
                'financialYearStartDate': 1270069200000,
                'financialYearEndDate': 1301518800000
            },
            {
                'financialYearId': 2,
                'financialYearName': '2011/2012',
                'financialYearStartDate': 1301605200000,
                'financialYearEndDate': 1333141200000
            },
            {
                'financialYearId': 3,
                'financialYearName': '2012/2013',
                'financialYearStartDate': 1333227600000,
                'financialYearEndDate': 1364677200000
            },
            {
                'financialYearId': 4,
                'financialYearName': '2013/2014',
                'financialYearStartDate': 1364763600000,
                'financialYearEndDate': 1396213200000
            },
            {
                'financialYearId': 5,
                'financialYearName': '2014/2015',
                'financialYearStartDate': 1396299600000,
                'financialYearEndDate': 1427749200000
            },
            {
                'financialYearId': 6,
                'financialYearName': '2015/2016',
                'financialYearStartDate': 1427835600000,
                'financialYearEndDate': 1459371600000
            }
        ];
    }
})();
