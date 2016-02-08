/* jshint -W117, -W030 */
describe('configFactory', function () {
    var config = mockData.getConfig();

    beforeEach(function () {
        module('fits.core', bard.fakeToastr);
        bard.inject('$rootScope', '$state', 'dataservice', '$q');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('ConfigFactory');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be created successfully', function () {
        expect(ConfigFactory).to.be.defined;
    });

    describe('#getConfig', function () {
        it('should return config object', function () {
            expect(ConfigFactory.getConfig()).to.be.eql(config);
        });
    });

    describe('#getEngineURL', function () {
        it('should return engine web app URL', function () {
            expect(ConfigFactory.getEngineURL()).to.be.eql(config['engine.url']);
        });
    });
});
