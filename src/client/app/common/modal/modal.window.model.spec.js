/* jshint -W117, -W030 */
describe('ModalWindowModel', function () {

    beforeEach(function () {
        bard.appModule('fits.common');
        bard.inject('$rootScope');
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('ModalWindowModel');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should contain ModalWindowModel', function () {
        expect(ModalWindowModel).to.be.an('object');
        expect(ModalWindowModel.stages).to.be.an('object');
        expect(ModalWindowModel.stages.FIRST).to.eql('FIRST');
        expect(ModalWindowModel.stages.FORCE).to.eql('FORCE');
        expect(ModalWindowModel.forceSubmit).to.equal(ModalWindowModel.stages.FIRST);
        expect(ModalWindowModel.statuses).to.be.an('object');
        expect(ModalWindowModel.statuses.OK).to.eql('OK');
        expect(ModalWindowModel.statuses.WARNING).to.eql('WARNING');
        expect(ModalWindowModel.statuses.ERROR).to.eql('ERROR');
        expect(ModalWindowModel.statuses.SUCCESS).to.eql('SUCCESS');
        expect(ModalWindowModel.statuses.VALID).to.eql('VALID');
        expect(ModalWindowModel.currentStatus).to.eql(ModalWindowModel.statuses.OK);
        expect(ModalWindowModel.warningResponse).to.eql(false);
        expect(ModalWindowModel.currentResponse).to.eql({});
        expect(ModalWindowModel.currentRequest).to.eql({});
        expect(ModalWindowModel.message).to.eql('');
    });

});