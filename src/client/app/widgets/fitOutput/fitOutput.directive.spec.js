/* jshint -W117, -W030 */
describe('fit-output directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var currentModel;

    beforeEach(module('fits.widgets'));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.expectGET('api/config').respond(200, config);
        currentModel = {
            firstName: 'NAME'
        };
    }));

    describe('Default text output directive', function () {
        var innerDiv, innerLabel;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template('<fit-output attr-id="<%= attrId %>" label="<%= label %>" ' +
            'model="vm.model"></fit-output>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name'
            };
            compiledDirective = angular.element(MIN_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerLabel = compiledDirective.find('label#' + widgetAttr.attrId);
            innerDiv = compiledDirective.find('div#' + widgetAttr.attrId);
        }));

        it('should have type text', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.type).to.be.equal('text');
            expect(innerDiv).to.be.defined;
            expect(innerLabel).to.be.defined;
        });
    });

    describe('Checkbox output directive', function () {

        var checkbox;
        var widgetAttr;
        var CHECKBOX_DIRECTIVE_TEMPLATE = _.template('<fit-output attr-id="<%= attrId %>" label="<%= label %>" ' +
            'type="<%= type %>" model="vm.model"></fit-output>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                type: 'checkbox'
            };
            compiledDirective = angular.element(CHECKBOX_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            checkbox = compiledDirective.find('span.glyphicon');
        }));

        it('should have type checkbox', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.type).to.be.equal('checkbox');
            expect(checkbox).to.be.defined;
        });

    });

    describe('Date output directive', function () {

        var date;
        var widgetAttr;
        var CHECKBOX_DIRECTIVE_TEMPLATE = _.template('<fit-output attr-id="<%= attrId %>" label="<%= label %>" ' +
            'type="<%= type %>" model="vm.model"></fit-output>');

        beforeEach(inject(function ($compile, $rootScope) {
            currentModel = {
                firstName: new Date()
            };
            $rootScope.vm = {model: currentModel};

            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                type: 'date'
            };
            compiledDirective = angular.element(CHECKBOX_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            date = compiledDirective.find('span.line');
        }));

        it('should have type checkbox', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.type).to.be.equal('date');
            expect(date).to.be.defined;
        });

    });

});
