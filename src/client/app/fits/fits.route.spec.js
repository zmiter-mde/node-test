
/* jshint -W117, -W030 */
describe('fits routes', function () {

    var fitsPage = 'app/fits/fits.html';

    describe('state', function () {
        var config = mockData.getConfig();

        beforeEach(function () {
            module('fits.fits', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache',
                'dataservice', '$q', 'ConfigFactory');
            sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        });

        beforeEach(function () {
            $templateCache.put(fitsPage, '');
            $httpBackend.expectGET('api/config').respond(200, config);
            $httpBackend.flush();
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map states to fits urls/ ', function () {
            expect($state.get('fits').url).to.equal('/fits');
            expect($state.get('fits.list').url).to.equal('');
            var detailState = $state.get('fits.detail');
            expect(detailState.url).to.equal('/:fitId');
        });

        it('should map fits routes to fits View templates', function () {
            expect($state.get('fits').templateUrl).to.equal(fitsPage);
            expect($state.get('fits.list').templateUrl).to.equal('app/fits/list/fits.list.html');
            var detailState = $state.get('fits.detail');
            expect(detailState.views).to.be.defined;
            expect(detailState.views['fitInfo@fits.detail'].templateUrl).to.equal('app/fits/detail/fitInfo.detail.html');
            expect(detailState.views['paymentRecipient@fits.detail'].templateUrl)
                .to.equal('app/fits/detail/paymentRecipient.detail.html');
            expect(detailState.views['generator@fits.detail'].templateUrl).to.equal('app/fits/detail/generator.detail.html');
            expect(detailState.views['relatedFits@fits.detail'].templateUrl).to.equal('app/fits/detail/relatedFits.detail.html');
            expect(detailState.views[''].templateUrl).to.equal('app/fits/detail/fits.detail.html');
        });

        describe('fits.list state', function () {
            beforeEach(function () {
                bard.inject('FitsService');
                sinon.stub(FitsService, 'loadInitialFits').returns($q.when([]));
            });

            it('should change state to fits.list', function () {
                $state.go('fits.list');
                $rootScope.$apply();
                expect($state.is('fits.list'));
            });

            it('should load initial fits on state resolve', function () {
                $state.go('fits.list');
                $rootScope.$apply();
                expect(FitsService.loadInitialFits).to.have.been.calledOnce;
            });
        });

        describe('fits.detail state', function () {
            beforeEach(function () {
                bard.inject('FitsService');
                sinon.stub(FitsService, 'findById').returns($q.when({}));
            });

            it('should change state to fits.detail', function () {
                $state.go('fits.detail');
                $rootScope.$apply();
                expect($state.is('fits.detail'));
            });

            it('should load fits details on state resolve', function () {
                $state.go('fits.detail');
                $rootScope.$apply();
                expect(FitsService.findById).to.have.been.calledOnce;
            });
        });

        describe('fits.view state', function () {

            var FIT_ID = 234;

            beforeEach(function () {
                bard.inject('FitsService');
                sinon.stub(FitsService, 'findById').returns($q.when({}));
            });

            it('should change state to fits.view', function () {
                $state.go('fits.view');
                $rootScope.$apply();
                expect($state.is('fits.view'));
            });

            it('should load fit on state resolve', function () {
                $state.go('fits.view', {
                    fitId: FIT_ID
                });
                $rootScope.$apply();
                expect(FitsService.findById).to.have.been.calledOnce;
                expect(FitsService.findById).to.have.been.calledWith(FIT_ID);
            });

        });

    });
});
