/* jshint -W117, -W030 */
describe('FitsController', function () {
    var controller;
    var config = mockData.getConfig();
    var fitsResponse = mockFitsData.findFits();
    var emptyResponse = mockFitsData.getEmptyResponse();

    beforeEach(function () {
        bard.appModule('fits.fits');
        bard.inject('$controller', '$rootScope', '$q', 'dataservice', '$state');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('FitsModel', 'FitsService', 'FitsModalService');
        $rootScope.$apply();
    });

    beforeEach(function () {
        $state.go = sinon.spy();
        controller = $controller('FitsController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Fits controller', function () {

        it('should be created', function () {
            expect(controller).to.be.defined;
            expect(controller.getBooleanGlyphClass).to.be.defined;
        });

        describe('#findFits', function () {

            var FIRST_PAGE = 1;

            it('should update current page', function () {
                var SECOND_PAGE = 2;
                sinon.stub(FitsService, 'findFits').returns($q.when(fitsResponse));
                controller.search(SECOND_PAGE);
                $rootScope.$apply();
                expect(controller.model.searchModel.page).equal(SECOND_PAGE);
            });

            it('should go to fits.list state', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(emptyResponse));
                controller.search(FIRST_PAGE);
                $rootScope.$apply();
                expect($state.go).to.be.calledOnce;
                expect($state.go).to.have.been.calledWith('fits.list');
            });

            it('should be not empty result if get non-empty response', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(fitsResponse));
                controller.search(FIRST_PAGE);
                $rootScope.$apply();
                expect(controller.model.isEmptyResult).equal(false);
            });

            it('should change current quarter', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(fitsResponse));
                var SELECTED_QUARTER = {quarterId: 1, quarterName: 'Quarter'};
                controller.model.quartersDropdown.model = SELECTED_QUARTER;
                controller.search(FIRST_PAGE);
                $rootScope.$apply();
                expect(controller.model.currentQuarter).to.eql(SELECTED_QUARTER);
                expect(controller.model.currentQuarter).not.to.equal(SELECTED_QUARTER);
            });

        });

        describe('#clearInputs', function () {

            it('should reset searchModel', function () {
                sinon.stub(FitsModel, 'clearSearchModel');
                controller.clearInputs();
                expect(FitsModel.clearSearchModel).to.have.been.calledOnce;
            });

        });

        describe('#openFit', function () {

            it('should go to fits.detail state', function () {
                controller.openFit(fitsResponse.content[0]);
                $rootScope.$apply();
                expect(controller.model.currentModel).equal(null);
            });

            it('should clear current fit and navigate to selected fit', function () {
                controller.openFit(fitsResponse.content[0]);
                $rootScope.$apply();
                expect(controller.model.currentModel).equal(null);
            });

        });

        describe('#pageChanged', function () {

            var FIRST_PAGE = 1;
            var SECOND_PAGE = 2;

            it('should update current page', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(emptyResponse));
                controller.model.currentPage = SECOND_PAGE;
                controller.pageChanged();
                $rootScope.$apply();
                expect(controller.model.currentPage).equal(SECOND_PAGE);
                controller.model.currentPage = FIRST_PAGE;
                controller.pageChanged();
                $rootScope.$apply();
                expect(controller.model.currentPage).equal(FIRST_PAGE);
            });

            it('should update fit search model', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(emptyResponse));
                controller.model.currentPage = SECOND_PAGE;
                controller.pageChanged();
                $rootScope.$apply();
                expect(controller.model.searchModel.page).equal(SECOND_PAGE);
                controller.model.currentPage = FIRST_PAGE;
                controller.pageChanged();
                $rootScope.$apply();
                expect(controller.model.searchModel.page).equal(FIRST_PAGE);
            });

            it('should go to fits.list state', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(emptyResponse));
                controller.model.currentPage = (controller.model.currentPage + 1) % 2;
                controller.pageChanged();
                $rootScope.$apply();
                expect($state.go).to.be.calledOnce;
                expect($state.go).to.have.been.calledWith('fits.list');
            });

            it('should be not empty result if get non-empty response', function () {
                sinon.stub(FitsService, 'findFits').returns($q.when(fitsResponse));
                controller.pageChanged();
                $rootScope.$apply();
                expect(controller.model.isEmptyResult).equal(false);
            });

        });

        describe('#isActiveQuarter', function () {

            it('should return true when current quarter in model is active', function () {
                controller.model.currentQuarter = {isActive: true};
                expect(controller.isActiveQuarter()).to.eql(true);
            });

            it('should return false when current quarter in model is not active', function () {
                controller.model.currentQuarter = {isActive: false};
                expect(controller.isActiveQuarter()).to.eql(false);
            });

            it('should return true when current quarter is null', function () {
                controller.model.currentQuarter = null;
                expect(controller.isActiveQuarter()).to.eql(true);
            });

            it('should return true when current quarter is undefined', function () {
                controller.model.currentQuarter = undefined;
                expect(controller.isActiveQuarter()).to.eql(true);
            });

            it('should return true when current quarter is empty object', function () {
                controller.model.currentQuarter = {};
                expect(controller.isActiveQuarter()).to.eql(true);
            });

        });

        describe('#save', function () {

            var event;

            beforeEach(function () {
                event = {stopPropagation: sinon.spy()};
                sinon.stub(FitsModalService, 'updateExclusion').returns({});
            });

            it('should call updateExclusion', function () {
                controller.save({}, event);
                expect(FitsModalService.updateExclusion).to.be.calledOnce;
            });

            it('should stop propagation', function () {
                controller.save({}, event);
                expect(event.stopPropagation).to.be.calledOnce;
            });

        });

    });

});