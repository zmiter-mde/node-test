/* jshint -W117, -W030 */
describe('NavbarController', function () {
    var controller;

    beforeEach(function () {
        module('fits.layout', bard.fakeToastr);
        bard.inject('$controller', '$httpBackend', '$location',
            '$rootScope', '$state', 'routerHelper', '$q', 'dataservice');
        sinon.stub(dataservice, 'getConfig').returns($q.when([]));
    });

    beforeEach(function () {
        routerHelper.configureStates(mockData.getMockStates(), '/');
        controller = $controller('NavbarController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should have isCurrent() for / to return `current`', function () {
        $location.path('/');
        expect(controller.isCurrent($state.current)).to.equal('active');
    });

    it('should have isCurrent() for non route not return `current`', function () {
        $location.path('/invalid');
        expect(controller.isCurrent({title: 'invalid'})).not.to.equal('active');
    });

    it('should return empty string if passed state has no title', function () {
        $location.path('/invalid');
        expect(controller.isCurrent({})).to.equal('');
    });

    it ('should isHasChilds(route) return true if foute has childs', function () {
        var route = {settings: {childs:{title: 'test'}}};
        expect(controller.hasChilds(route)).to.equal(true);
    });

    it ('should isHasChilds(route) return false if foute has not childs', function () {
        var route = {settings: {}};
        expect(controller.hasChilds(route)).to.equal(false);
    });
});
