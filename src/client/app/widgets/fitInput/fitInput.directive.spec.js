/* jshint -W117, -W030 */
describe('fit-input directive: ', function () {
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

    describe('Default text input directive', function () {
        var innerInput;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template('<fit-input attr-id="<%= attrId %>" label="<%= label %>" ' +
            'model="vm.model"></fit-input>');

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
            innerInput = compiledDirective.find('input#' + widgetAttr.attrId);
        }));

        it('should have type text', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.type).to.be.equal('text');
        });

        it('should inner input have type text', function () {
            expect(innerInput.attr('type')).to.be.equal('text');
        });

        it('should have empty class', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.class).to.be.empty;
        });
    });

    describe('Checkbox input directive', function () {

        var innerInput;
        var widgetAttr;
        var CHECKBOX_DIRECTIVE_TEMPLATE = _.template('<fit-input attr-id="<%= attrId %>" label="<%= label %>" ' +
            'type="<%= type %>" model="vm.model"></fit-input>');

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
            innerInput = compiledDirective.find('input#' + widgetAttr.attrId);
        }));

        it('should have type checkbox', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.type).to.be.equal('checkbox');
        });

        it('should inner input have type checkbox', function () {
            expect(innerInput.attr('type')).to.be.equal('checkbox');
        });

        it('should have generators-checkbox class', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.class).to.be.equal('generators-checkbox');
        });

        it('should inner input have class generators-checkbox', function () {
            expect(innerInput.hasClass('generators-checkbox')).to.be.equal(true);
        });
    });

    describe('fit-input directive with all parameters filled', function () {

        var innerInput;
        var innerLabel;
        var widgetAttr;
        var FULL_DIRECTIVE_TEMPLATE = _.template('<fit-input attr-id="<%= attrId %>" label="<%= label %>" ' +
            'required="<%= required %>" maxlength="<%= maxLength %>" pattern="<%= pattern %>"' +
            'disabled="<%= disabled %>" type="<%= type %>" name="<%= name %>"' +
            ' model="vm.model"></fit-input>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                required: true,
                maxLength: 50,
                pattern: '[0-9]',
                disabled: true,
                type: 'text',
                name: 'TestName',
                model: {}
            };
            compiledDirective = angular.element(FULL_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerInput = compiledDirective.find('input#' + widgetAttr.attrId);
            innerLabel = compiledDirective.find('label');
        }));

        it('should have specified label text', function () {
            expect(innerLabel.text()).to.be.equal(widgetAttr.label);
        });

        it('should inner input have type text', function () {
            expect(innerInput.attr('type')).to.be.equal('text');
        });

        it('should inner input have specified attributes', function () {
            expect(innerInput.attr('id')).to.be.equal(widgetAttr.attrId);
            expect(innerInput.attr('maxlength')).to.be.equal(widgetAttr.maxLength.toString());
            expect(innerInput.attr('pattern')).to.be.equal(widgetAttr.pattern.toString());
            expect(innerInput.attr('name')).to.be.equal(widgetAttr.name.toString());
            expect(innerInput.attr('disabled')).to.be.equal('disabled');
        });

        it('should bind input to specified model attribute', function () {
            expect(innerInput.val()).to.be.equal('NAME');
        });

        it('should have initialised isolated scope', function () {
            var isolatedScope = compiledDirective.isolateScope();

            expect(isolatedScope.vm.attrId).to.be.equal(widgetAttr.attrId);
            expect(isolatedScope.vm.label).to.be.equal(widgetAttr.label);
            expect(isolatedScope.vm.disabled).to.be.equal(widgetAttr.disabled.toString());
            expect(isolatedScope.vm.type).to.be.equal(widgetAttr.type);
            expect(isolatedScope.vm.required).to.be.equal(widgetAttr.required.toString());
            expect(isolatedScope.vm.maxlength).to.be.equal(widgetAttr.maxLength.toString());
            expect(isolatedScope.vm.pattern).to.be.equal(widgetAttr.pattern);
            expect(isolatedScope.vm.name).to.be.equal(widgetAttr.name);
        });
    });
});
