/* jshint -W117, -W030 */
describe('FitsViewController', function () {
    var controller;
    var config = mockData.getConfig();

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
        controller = $controller('FitsViewController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Fits view controller', function () {

        it('should be created', function () {
            expect(controller).to.be.defined;
        });

        it('should have defined model', function() {
            expect(controller.getBooleanGlyphClass).to.be.defined;
            expect(controller.fitInfoPanelModel).to.be.eql({isCollapsed: false});
            expect(controller.tariffPanelModel).to.be.eql({isCollapsed: false});
            expect(controller.billingInfoPanelModel).to.be.eql({isCollapsed: false});
            expect(controller.relatedInstallationsPanelModel).to.be.eql({isCollapsed: false});
            expect(controller.relatedMetersPanelModel).to.be.eql({isCollapsed: false});
            expect(controller.statementsPanelModel).to.be.eql({isCollapsed: false});
        });

        describe('#goEdit', function() {

            it('should change state to fits.detail', function () {
                FitsModel.currentModel.fitId = 124;
                controller.goEdit();
                $rootScope.$apply();
                expect($state.go).to.have.been.calledOnce;
                expect($state.go).to.have.been.calledWith('fits.detail', {
                    fitId: FitsModel.currentModel.fitId
                });
            });

        });

        describe('#openFitView', function() {

            it('should change state to fits.view', function () {
                var fitId = 3215;
                controller.openFitView(fitId);
                $rootScope.$apply();
                expect($state.go).to.have.been.calledOnce;
                expect($state.go).to.have.been.calledWith('fits.view', {
                    fitId: fitId
                });
            });

        });

        describe('#openMeterView', function() {

            it('should change state to meters.view', function () {
                var meterId = 2364;
                controller.openMeterView(meterId);
                $rootScope.$apply();
                expect($state.go).to.have.been.calledOnce;
                expect($state.go).to.have.been.calledWith('meters.view', {
                    meterId: meterId
                });
            });

        });

        describe('#openGeneratorView', function() {

            it('should change state to generators.view', function () {
                var generatorId = 5685;
                controller.openGeneratorView(generatorId);
                $rootScope.$apply();
                expect($state.go).to.have.been.calledOnce;
                expect($state.go).to.have.been.calledWith('generators.view', {
                    generatorId: generatorId
                });
            });

        });

        describe('#changeBillingInfo', function() {

            it('should change state to billinginfo.list.change', function () {
                controller.changeBillingInfo();
                $rootScope.$apply();
                expect($state.go).to.have.been.calledOnce;
                expect($state.go).to.have.been.calledWith('billinginfo.list.change');
            });

        });

        describe('#goViewMoreStatements', function() {

            it('should change state to calculations.statementsList', function () {
                FitsModel.currentModel.fitId = 2364;
                controller.goViewMoreStatements();
                $rootScope.$apply();
                expect($state.go).to.have.been.calledOnce;
                expect($state.go).to.have.been.calledWith('calculations.statementsList', {
                    filterName: 'fitId',
                    id: FitsModel.currentModel.fitId
                });
            });

        });

        describe('#getFitType', function() {

            it('should return Extension when parent fit is not empty', function () {
                FitsModel.currentModel.parentFit = {fitId: 735683};
                var result = controller.getFitType();
                $rootScope.$apply();
                expect(result).to.be.eql('Extension');
            });

            it('should return Installation when parent fit is null', function () {
                FitsModel.currentModel.parentFit = null;
                var result = controller.getFitType();
                $rootScope.$apply();
                expect(result).to.be.eql('Installation');
            });

            it('should return Installation when parent fit is undefined', function () {
                FitsModel.currentModel.parentFit = undefined;
                var result = controller.getFitType();
                $rootScope.$apply();
                expect(result).to.be.eql('Installation');
            });

            it('should return Installation when parent fit is empty', function () {
                FitsModel.currentModel.parentFit = {};
                var result = controller.getFitType();
                $rootScope.$apply();
                expect(result).to.be.eql('Installation');
            });

        });

        describe('#getReadValue', function() {

            it('should return N/A when read is empty', function () {
                var result = controller.getReadValue({});
                $rootScope.$apply();
                expect(result).to.be.eql('N/A');
            });

            it('should return N/A when read is null', function () {
                var result = controller.getReadValue(null);
                $rootScope.$apply();
                expect(result).to.be.eql('N/A');
            });

            it('should return N/A when read is undefined', function () {
                var result = controller.getReadValue(undefined);
                $rootScope.$apply();
                expect(result).to.be.eql('N/A');
            });

            it('should return read value string', function () {
                var result = controller.getReadValue({
                    readSourceToReadType: {readSource: 'Customer', readType: 'Quarterly'},
                    readValue: 'readValue',
                    isValid: true
                });
                $rootScope.$apply();
                expect(result).to.be.eql('readValue Customer Quarterly Valid');
            });

        });

        describe('#getReadDate', function () {

            it('should return N/A when read is empty', function() {
                var result = controller.getReadDate({});
                expect(result).to.be.eql('N/A');
            });

            it('should return N/A when read is null', function() {
                var result = controller.getReadDate(null);
                expect(result).to.be.eql('N/A');
            });

            it('should return N/A when read is undefined', function() {
                var result = controller.getReadDate(undefined);
                expect(result).to.be.eql('N/A');
            });

            it('should return readDate when read is not empty', function() {
                var result = controller.getReadDate({readDate: 'readDate'});
                expect(result).to.be.eql('readDate');
            });

        });

        describe('#getReadColorStyle', function () {

            it('should return empty string when read is empty', function() {
                var result = controller.getReadColorStyle({});
                expect(result).to.be.eql('');
            });

            it('should return empty string when read is null', function() {
                var result = controller.getReadColorStyle(null);
                expect(result).to.be.eql('');
            });

            it('should return empty string when read is undefined', function() {
                var result = controller.getReadColorStyle(undefined);
                expect(result).to.be.eql('');
            });

            it('should return valid-color when read.isValid is true', function() {
                var result = controller.getReadColorStyle({isValid: true});
                expect(result).to.be.eql('valid-color');
            });

            it('should return invalid-color when read.isValid is false', function() {
                var result = controller.getReadColorStyle({isValid: false});
                expect(result).to.be.eql('invalid-color');
            });

        });

    });

});