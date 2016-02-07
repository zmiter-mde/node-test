/* jshint -W117, -W030 */
describe('dashboard routes', function () {
    describe('state', function () {
        var view = 'app/dashboard/dashboard.html';
        var config = mockData.getConfig();

        beforeEach(function () {
            module('fits.dashboard', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache',
                'dataservice', '$q', 'ConfigFactory');
            sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        });

        beforeEach(function () {
            $templateCache.put(view, '');
            $httpBackend.expectGET('api/config').respond(200, config);
            $httpBackend.flush();
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state dashboard to url / ', function () {
            expect($state.href('dashboard', {})).to.equal('/');
        });

        it('should map /dashboard route to dashboard View template', function () {
            expect($state.get('dashboard').templateUrl).to.equal(view);
        });

        it('of dashboard should work with $state.go', function () {
            $state.go('dashboard');
            $rootScope.$apply();
            expect($state.is('dashboard'));
        });
    });
});
