/* jshint -W079 */
var toleranceData = (function () {
    return {
        findTolerances: findTolerances
    };

    function findTolerances() {
        return [
            {
                id: 1,
                technologyType: {
                    technologyId: 3,
                    technologyName: 'Wind'
                },
                powerLevel: {
                    powerLevelId: 1,
                    powerLevelName: '<=4KW',
                    powerLevelMinKw: 0,
                    powerLevelMasKw: 4
                },
                season: {
                    seasonId: 1,
                    season: 'Winter',
                    startMonth: 9,
                    endMonth: 3
                },
                tolerancePercent: 50
            },
            {
                id: 2,
                technologyType: {
                    technologyId: 1,
                    technologyName: 'MicroCHP'
                },
                powerLevel: {
                    powerLevelId: 2,
                    powerLevelName: '4.1KW to 10KW',
                    powerLevelMinKw: 4,
                    powerLevelMasKw: 10
                },
                season: {
                    seasonId: 2,
                    season: 'Summer',
                    startMonth: 3,
                    endMonth: 9
                },
                tolerancePercent: 50
            }
        ];
    }
})();
