/* jshint -W117, -W030 */
describe('FitsModalService', function () {
    var config = mockData.getConfig();

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
        bard.inject('FitsModalService', 'FitsService', 'FitsModel', 'ModalWindowModel',
                    'FitsResource', '$httpBackend', '$uibModal');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be created successfully', function () {
        expect(FitsModalService).to.be.defined;
    });

    describe('#updateExclusion', function () {

        beforeEach(function () {
            sinon.stub(FitsService, 'findFits').returns({});
            $rootScope.$apply();
        });

        it('should update exclusion with parameter isSave=false', function () {
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FORCE;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=false')
                .respond(200, {status: ModalWindowModel.statuses.SUCCESS});
            FitsModalService.updateExclusion({}, false);
            $httpBackend.flush();
            expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
            expect(FitsService.findFits).to.have.been.calledOnce;
        });

        it('should update exclusion with parameter isSave=true', function () {
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FORCE;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=true')
                .respond(200, {status: ModalWindowModel.statuses.SUCCESS});
            FitsModalService.updateExclusion({}, true);
            $httpBackend.flush();
            expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
            expect(FitsService.findFits).to.have.been.calledOnce;
        });

        it('should update exclusion with parameter isSave=true', function () {
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FIRST;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=true')
                .respond(200, {status: ModalWindowModel.statuses.SUCCESS});
            FitsModalService.updateExclusion({}, true);
            $httpBackend.flush();
            expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
        });

        it('should update exclusion with parameter isSave=true and change currentRequest.isExcluded', function () {
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FIRST;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=true')
                .respond(200, {status: ModalWindowModel.statuses.SUCCESS});
            FitsModalService.updateExclusion({isExcluded: null}, true);
            $httpBackend.flush();
            expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
            expect(ModalWindowModel.currentRequest.isExcluded).to.equal(false);
        });

        it('should update exclusion and call continueSubmitting with stage FIRST', function () {
            sinon.stub($uibModal, 'open');
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FIRST;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=false')
                .respond(200, {
                    status: ModalWindowModel.statuses.WARNING,
                    resultMessage: 'resultMessage', fits: [{ofgemFitId: 1}]
                });
            FitsModalService.updateExclusion({isExcluded: null}, false);
            $httpBackend.flush();
            expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
            expect(ModalWindowModel.currentRequest.isExcluded).to.equal(false);
            expect($uibModal.open).to.have.been.calledOnce;
        });

        it('should update exclusion and call continueSubmitting with stage FORCE', function () {
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FORCE;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=false')
                .respond(200, {status: ModalWindowModel.statuses.WARNING, fits: [{ofgemFitId: 1}]});
            FitsModalService.updateExclusion({isExcluded: null}, false);
            $httpBackend.flush();
            expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
            expect(ModalWindowModel.currentRequest.isExcluded).to.equal(false);
            expect($log.info.logs).to.match(/Successfully updated!/);
        });

        it('should catch exception', function () {
            ModalWindowModel.forceSubmit = ModalWindowModel.stages.FORCE;
            $httpBackend.expect('POST', ConfigFactory.getEngineURL() + '/fitexclusions/exclude?isSave=false')
                .respond(500);
            FitsModalService.updateExclusion({isExcluded: null}, false).catch(function (error) {
                expect(error.data.description).to.be.equal('XHR Failed for remote fits service');
            });
            $httpBackend.flush();
        });

    });

});