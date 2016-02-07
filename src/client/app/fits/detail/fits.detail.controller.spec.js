/* jshint -W117, -W030 */
describe('FitsDetailController', function () {
    var controller;
    var config = mockData.getConfig();
    var fitWithParent = mockFitsData.getFitWithParent();
    var fitWithExtensions = mockFitsData.getFitWithExtensions();

    beforeEach(function () {
        bard.appModule('fits.fits');
        bard.inject('$controller', '$rootScope', '$q', 'dataservice', '$state', '$log');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('FitsService');
        bard.inject('FitsModel');
        $rootScope.$apply();
    });

    beforeEach(function () {
        $state.go = sinon.spy();
        controller = $controller('FitsDetailController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Fits Detail controller', function () {

        it('should be created', function () {
            expect(controller).to.be.defined;
            expect(controller.model).to.be.defined;
        });

        describe('#openFit', function () {

            it('should change state', function () {
                var FIT_ID = 1;
                controller.openFit(FIT_ID);
                $rootScope.$apply();
                expect($state.go).to.be.calledOnce;
                expect($state.go).to.have.been.calledWith('fits.detail', {fitId: FIT_ID});
            });
        });

        describe('#fitHasExtensions', function () {

            it('should return true if has extensions', function () {
                controller.model.currentModel = fitWithExtensions;
                $rootScope.$apply();
                expect(controller.fitHasExtensions()).equal(true);
            });

            it('should return false if has no extensions', function () {
                controller.model.currentModel = fitWithParent;
                $rootScope.$apply();
                expect(controller.fitHasExtensions()).equal(false);
            });
        });

        describe('#fitHasParent', function () {

            it('should return true if has parent', function () {
                controller.model.currentModel = fitWithParent;
                $rootScope.$apply();
                expect(controller.fitHasParent()).equal(true);
            });

            it('should return false if has no parent', function () {
                controller.model.currentModel = fitWithExtensions;
                $rootScope.$apply();
                expect(controller.fitHasParent()).equal(false);
            });
        });

        describe('#getFitType', function () {

            it('should return Installation if fit has no parent fit', function () {
                controller.model.currentModel = fitWithExtensions;
                $rootScope.$apply();
                expect(controller.getFitType()).equal('Installation');
            });

            it('should return Extension if has parent', function () {
                controller.model.currentModel = fitWithParent;
                $rootScope.$apply();
                expect(controller.getFitType()).equal('Extension');
            });
        });

        describe('#save', function () {

            var FIT;
            beforeEach(function () {
                FIT = fitWithParent;
            });

            it('should call save in fitsService', function () {
                var spy = sinon.spy();
                FitsService.save = function (fit) {
                    return {
                        then: spy
                    };
                };
                controller.save();
                $rootScope.$apply();
                expect(FitsService.save().then).to.be.calledOnce;
            });

            it('should have logged "Fit successfully updated"', function () {
                sinon.stub(FitsService, 'save').returns($q.when(FIT));
                controller.model.currentModel = FIT;
                controller.save();
                $rootScope.$apply();
                expect($log.info.logs).to.match(/Fit successfully updated/);
            });

        });

    });

    describe('#changeBillingInfo', function () {

        it('should go to billinginfo.list.change state', function () {
            controller.changeBillingInfo();
            $rootScope.$apply();
            expect($state.go).to.be.calledOnce;
            expect($state.go).to.have.been.calledWith('billinginfo.list.change');
        });

    });

    describe('#goView', function () {

        it('should go to fits.view state', function () {
            FitsModel.currentModel.fitId = 135;
            controller.goView();
            $rootScope.$apply();
            expect($state.go).to.be.calledOnce;
            expect($state.go).to.have.been.calledWith('fits.view', {
                fitId: FitsModel.currentModel.fitId
            });
        });

    });

});