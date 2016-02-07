/* jshint -W117, -W030 */
describe('FitsModalController', function () {
    var controller;
    var config = mockData.getConfig();

    beforeEach(function () {
        bard.appModule('fits.fits');

        function fakeModal($provide) {
            $provide.constant('$uibModalInstance', sinon.stub({
                close: function() {},
                dismiss: function() {}
            }));
        }

        bard.appModule('fits.common', fakeModal);
        bard.inject('$controller', '$rootScope', '$q', 'dataservice', '$state');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('$uibModalInstance', 'FitsModalService', 'UtilsService', 'ModalWindowModel');
        $rootScope.$apply();
    });

    beforeEach(function () {
        $state.go = sinon.spy();
        controller = $controller('FitsModalController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Fits modal controller', function () {

        it('should be created', function () {
            expect(controller).to.be.defined;
        });

        it('should have defined model', function () {
            expect(controller.getStyleClass).to.be.equal(UtilsService.getStyleClass);
            expect(controller.getIconClass).to.be.equal(UtilsService.getIconClass);
            expect(controller.model).to.be.defined;
        });

        describe('#ok', function() {

            beforeEach(function () {
                sinon.stub(FitsModalService, 'updateExclusion').returns({});
            });

            it('should change stage to FORCE', function () {
                ModalWindowModel.forceSubmit = 'none';
                controller.ok();
                $rootScope.$apply();
                expect(FitsModalService.model.forceSubmit).to.be.equal(ModalWindowModel.stages.FORCE);
            });

            it('should call close window method', function () {
                ModalWindowModel.forceSubmit = 'none';
                controller.ok();
                $rootScope.$apply();
                expect($uibModalInstance.close).to.have.been.calledOnce;
            });

            it('should call updateExclusion method', function () {
                ModalWindowModel.currentRequest = 'none';
                controller.ok();
                $rootScope.$apply();
                expect(FitsModalService.updateExclusion).to.have.been.calledOnce;
                expect(FitsModalService.updateExclusion).to.have.been
                    .calledWith(ModalWindowModel.currentRequest, true);
            });

        });

        describe('#cancel', function() {

            it('should change stage to FIRST', function () {
                ModalWindowModel.forceSubmit = 'none';
                controller.cancel();
                $rootScope.$apply();
                expect(FitsModalService.model.forceSubmit).to.be
                    .equal(ModalWindowModel.stages.FIRST);
            });

            it('should call close window method', function () {
                ModalWindowModel.forceSubmit = 'none';
                controller.cancel();
                $rootScope.$apply();
                expect($uibModalInstance.dismiss).to.have.been.calledOnce;
                expect($uibModalInstance.dismiss).to.have.been.calledWith('cancel');
            });

        });
    });

});