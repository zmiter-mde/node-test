/* jshint -W117, -W030 */
describe('DashboardController', function () {
    var controller;

    beforeEach(function () {
        bard.appModule('fits.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title of FITS Dashboard', function () {
                expect(controller.title).to.equal('FITS Dashboard');
            });
        });
    });
});
