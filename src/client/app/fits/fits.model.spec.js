/* jshint -W117, -W030 */
describe('FitsModel', function () {
    var fitsResponse = mockFitsData.findFits();

    beforeEach(function () {
        bard.appModule('fits.fits');
        bard.inject('$rootScope');
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('FitsModel');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('#Methods', function () {
        var DEFAULT_QUARTER;
        var FIT;
        var FIT_ID;
        var INVALID_FIT_ID;

        beforeEach(function () {
            FIT = fitsResponse.content[0];
            FIT_ID = fitsResponse.content[0].fitId;
            INVALID_FIT_ID = fitsResponse.content[0].fitId + 1;
            DEFAULT_QUARTER = {isActive: true};
        });

        it('should have defined fits model', function () {
            expect(FitsModel).to.have.property('currentModel');
            expect(FitsModel).to.have.property('foundModels').with.length(0);
            expect(FitsModel).to.have.property('itemsPerPage').equal(50);
            expect(FitsModel).to.have.property('currentPage').equal(1);
            expect(FitsModel).to.have.property('totalModelsCount').equal(0);
            expect(FitsModel).to.have.property('searchModel').to.be.an('object');
            expect(FitsModel.searchModel).to.have.property('page').equal(FitsModel.currentPage);
            expect(FitsModel.searchModel).to.have.property('limit').equal(FitsModel.itemsPerPage);
            expect(FitsModel.currentQuarter).to.be.eql(DEFAULT_QUARTER);
            expect(FitsModel.quartersDropdown).to.have.property('model').eql(DEFAULT_QUARTER);
        });

        describe('#isLoaded', function () {
            it('should return false if currentModel is empty', function () {
                FitsModel.currentModel = {};
                var result = FitsModel.isLoaded(FIT_ID);
                expect(result).equal(false);
            });

            it('should return false if currentModel exist but with different id', function () {
                FitsModel.currentModel = FIT;
                var result = FitsModel.isLoaded(INVALID_FIT_ID);
                expect(result).equal(false);
            });

            it('should return true if currentModel exist and with required id', function () {
                FitsModel.currentModel = FIT;
                var result = FitsModel.isLoaded(FIT_ID);
                expect(result).equal(true);
            });

            it('should return false if currentModel is empty and no fit id is passed', function () {
                FitsModel.currentModel = {};
                var result = FitsModel.isLoaded();
                expect(result).equal(false);
            });

            it('should return true if currentModel exist and no fit id is passed', function () {
                FitsModel.currentModel = FIT;
                var result = FitsModel.isLoaded();
                expect(result).equal(true);
            });
        });

        describe('#clearFoundModels', function () {
            it('should reset currentModel', function () {
                FitsModel.currentModel = FIT;
                FitsModel.clearFoundModels();
                expect(FitsModel.currentModel).to.be.empty;
            });

            it('should reset foundModels', function () {
                FitsModel.foundModels = fitsResponse.content;
                FitsModel.clearFoundModels();
                expect(FitsModel.foundModels).to.be.empty;
            });

            it('should reset totalModelsCount', function () {
                FitsModel.totalModelsCount = 2;
                FitsModel.clearFoundModels();
                expect(FitsModel.totalModelsCount).equal(0);
            });
        });

        describe('#clearSearchModel', function () {

            it('should clear search model', function () {
                FitsModel.searchModel = {page: 1, limit: 100};
                FitsModel.clearSearchModel();
                expect(FitsModel.searchModel.page).to.equal(FitsModel.currentPage);
                expect(FitsModel.searchModel.limit).to.equal(FitsModel.itemsPerPage);
                expect(FitsModel.quartersDropdown.model).to.eql(DEFAULT_QUARTER);
            });

        });

        describe('#changeQuarterSearchParameter', function () {

            it('should change searchModel page', function () {
                var selectedQuarter = {quarterId: 2};
                FitsModel.changeQuarterSearchParameter(selectedQuarter);
                expect(FitsModel.searchModel.page).to.eql(1);
            });

            describe('excludedQuarterId should be not null', function () {

                var selectedQuarter;

                beforeEach(function () {
                    selectedQuarter = {quarterId: 1};
                });

                it('should return 1', function () {
                    FitsModel.changeQuarterSearchParameter(selectedQuarter);
                    expect(FitsModel.searchModel.excludedQuarterId).to.eql(1);
                });

            });

            describe('excludedQuarterId should be null', function () {

                var selectedQuarter;

                beforeEach(function () {
                    selectedQuarter = null;
                });

                it('should return null', function () {
                    FitsModel.changeQuarterSearchParameter(selectedQuarter);
                    expect(FitsModel.searchModel.excludedQuarterId).to.eql(null);
                });

            });

        });

        describe('#getOptionText', function () {

            var quarter;

            beforeEach(function () {
                quarter = {
                    quarterName: 'Quarter',
                    financialYear: {
                        financialYearName: 'Year Name'
                    },
                    isActive: true
                };
            });

            it('should return correct active quarter name', function () {
                expect(FitsModel.getOptionText(quarter)).to.eql('Quarter Year Name - active');
            });

            it('should return correct inactive quarter name', function () {
                quarter.isActive = false;
                expect(FitsModel.getOptionText(quarter)).to.eql('Quarter Year Name');
            });

        });

    });
});