/* jshint -W117, -W030 */
describe('active-read-time-window directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var readTimeWindow = mockCalculationsData.getCalculationRuns().activeQuarter.readTimeWindow;

    beforeEach(module('fits.widgets'));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.expectGET('api/config').respond(200, config);
    }));

    describe('active-read-time-window directive', function () {
        var DIRECTIVE_TEMPLATE = '<active-read-time-window ' +
            'model="vm.readTimeWindow"></active-read-time-window>';

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {readTimeWindow: readTimeWindow};
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE);
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
        }));

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        it('should have read time window model', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.model).to.be.eql(readTimeWindow);
        });
    });

});
