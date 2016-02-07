/* jshint -W117, -W030 */
describe('fit-reads-table directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var currentModel;

    beforeEach(module('fits.widgets'));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.expectGET('api/config').respond(200, config);
        currentModel = {
            reads: [{readId: 1}]
        };
    }));

    describe('Default text output directive', function () {
        var table;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template('<fit-reads-table model="vm.model" validity="<%= validity%>"></fit-reads-table>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                validity: 'valid-reads'
            };
            compiledDirective = angular.element(MIN_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            table = compiledDirective.find('table.' + widgetAttr.validity);
        }));

        it('should have type text', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.validity).to.be.equal('valid-reads');
            expect(isolatedScope.vm.model).to.be.equal(currentModel);
            expect(table).to.be.defined;
        });
    });
});