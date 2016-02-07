/* jshint -W117, -W030 */
describe('FitsService', function () {
    var config = mockData.getConfig();
    var fitsResponse = mockFitsData.findFits();
    var emptyResponse = mockFitsData.getEmptyResponse();
    var quarters = mockFitsData.getQuarters();
    var relatedMeters = [{meterId: 1}];

    beforeEach(function () {
        bard.appModule('fits.fits');
        bard.inject('$controller', '$rootScope', '$q', 'dataservice', '$state', '$log');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('ConfigFactory');
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('FitsService', 'FitsModel', 'ModalWindowModel', 'FitsResource',
            '$httpBackend', '$uibModal');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be created successfully', function () {
        expect(FitsService).to.be.defined;
    });

    describe('#findById', function () {
        var FIT;

        beforeEach(function () {
            FIT = fitsResponse.content[0];
        });

        it('should find by id even if current fit is already loaded', function () {
            var newFit = fitsResponse.content[1];
            var newFitId = newFit.fitId;
            $httpBackend.expectGET(ConfigFactory.getEngineURL() + '/fits/' + newFitId).respond(200, newFit);
            FitsModel.currentModel = newFit;
            FitsService.findById(newFitId);
            $rootScope.$apply();
            $httpBackend.flush();
            expect(FitsModel.currentModel.fitId).to.be.equal(newFitId);
            expect(JSON.stringify(FitsModel.currentModel)).to.be.equal(JSON.stringify(newFit));
        });

        it('should call remote service if current model have different id', function () {
            var newFit = fitsResponse.content[1];
            var newFitId = newFit.fitId;
            $httpBackend.expectGET(ConfigFactory.getEngineURL() + '/fits/' + newFitId).respond(200, newFit);
            FitsModel.currentModel = FIT;
            FitsService.findById(newFitId);
            $rootScope.$apply();
            $httpBackend.flush(1);
            expect(FitsModel.currentModel.fitId).to.be.equal(newFitId);
            expect(JSON.stringify(FitsModel.currentModel)).to.be.equal(JSON.stringify(newFit));
        });

        it('should call remote service if current model is empty', function () {
            var newFitId = FIT.fitId;
            $httpBackend.expectGET(ConfigFactory.getEngineURL() + '/fits/' + newFitId).respond(200, FIT);
            FitsModel.currentModel = {};
            FitsService.findById(newFitId);
            $rootScope.$apply();
            $httpBackend.flush(1);
            expect(FitsModel.currentModel.fitId).to.be.equal(newFitId);
            expect(JSON.stringify(FitsModel.currentModel)).to.be.equal(JSON.stringify(FIT));
        });
    });

    describe('#save', function () {
        var FIT;

        beforeEach(function () {
            FIT = fitsResponse.content[0];
        });

        it('should update current model', function () {
            var fitId = FIT.fitId;
            $httpBackend.expect('PUT', ConfigFactory.getEngineURL() + '/fits/' + fitId, FIT).respond(200, FIT);
            FitsModel.currentModel = _.cloneDeep(FIT);
            FitsModel.currentModel.field = 'qwerty';
            var result = FitsService.save(FIT);
            $httpBackend.flush();
            expect(JSON.stringify(FitsModel.currentModel)).to.be.equal(JSON.stringify(FIT));
            expect(JSON.stringify(result.$$state.value)).to.be.equal(JSON.stringify(FIT));
        });

        it('should clear found models on save', function () {
            var fitId = FIT.fitId;
            $httpBackend.expect('PUT', ConfigFactory.getEngineURL() + '/fits/' + fitId, FIT).respond(200, FIT);
            sinon.stub(FitsModel, 'clearFoundModels');
            FitsService.save(FIT);
            $httpBackend.flush();
            expect(FitsModel.clearFoundModels).to.be.calledOnce;
        });

    });

    describe('#findFits', function () {
        var FIT;
        var SEARCH_FIELDS;

        beforeEach(function () {
            FIT = fitsResponse.content[0];
            SEARCH_FIELDS = {
                page: 1,
                limit: 50
            };
        });

        it('should find Fits with searchFields', function () {
            $httpBackend.expectGET(ConfigFactory.getEngineURL() + '/fits?limit=50&page=0').respond(200, fitsResponse);
            FitsService.findFits(SEARCH_FIELDS);
            $httpBackend.flush();
            expect(FitsModel.foundModels).to.be.eql(fitsResponse.content);
            expect(FitsModel.foundModels).not.to.be.equal(fitsResponse.content);
            expect(FitsModel.totalModelsCount).to.be.equal(fitsResponse.totalElements);
            expect(FitsModel.isEmptyResult).to.be.equal(false);
        });

        it('should set true to empty result if get empty response', function () {
            $httpBackend.expectGET(ConfigFactory.getEngineURL() + '/fits?limit=50&page=0').respond(200, emptyResponse);
            FitsService.findFits(SEARCH_FIELDS);
            $httpBackend.flush();
            expect(FitsModel.foundModels).to.be.empty;
            expect(FitsModel.totalModelsCount).to.be.equal(0);
            expect(FitsModel.isEmptyResult).to.be.equal(true);
        });
    });

    describe('#loadInitialFits', function () {
        var SEARCH_FIELDS;

        beforeEach(function () {
            SEARCH_FIELDS = {
                page: 1,
                limit: 50
            };
        });

        it('should load initial Fits if no models is loaded yet (foundModels is empty)', function () {
            FitsModel.searchModel = SEARCH_FIELDS;
            FitsModel.foundModels = [];
            $httpBackend.expect('GET', ConfigFactory.getEngineURL() + '/fits?limit=50&page=0').respond(200, fitsResponse);
            FitsService.loadInitialFits();
            $httpBackend.flush();
            expect(FitsModel.foundModels).to.be.eql(fitsResponse.content);
            expect(FitsModel.foundModels).not.to.be.equal(fitsResponse.content);
            expect(FitsModel.totalModelsCount).to.be.equal(fitsResponse.totalElements);
            expect(FitsModel.isEmptyResult).to.be.equal(false);
        });

        it('should not load anything if foundModels already not empty', function () {
            FitsModel.searchModel = SEARCH_FIELDS;
            FitsModel.foundModels = fitsResponse.content;
            FitsService.loadInitialFits();
            expect(FitsModel.foundModels).to.be.equal(fitsResponse.content);
        });

        it('should throw exception for bad request', function () {
            $httpBackend.expect('GET', ConfigFactory.getEngineURL() + '/fits?page=0').respond(500);
            FitsService.findFits({page: 1}).catch(function (error) {
                expect(error.data.description).to.be.equal('XHR Failed for remote fits service');
            });
            $httpBackend.flush();
        });
    });

    describe('#handleException', function () {

        it('should catch exception', function () {
            $httpBackend.expect('GET', ConfigFactory.getEngineURL() + '/fits/1')
                .respond(500);
            FitsService.findById(1).catch(function (error) {
                expect(error.data.description).to.be.equal('XHR Failed for remote fits service');
            });
            $httpBackend.flush();
        });

    });

});