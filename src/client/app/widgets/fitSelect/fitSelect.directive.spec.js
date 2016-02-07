/* jshint -W117, -W030 */
describe('fit-select directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var currentModel;
    var spy;

    beforeEach(module('fits.widgets'));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.expectGET('api/config').respond(200, config);
        var METER_STATUSES = [{value: 'invalid', name: 'Invalid'}, {value: 'valid', name: 'Valid'}];
        spy = sinon.spy();
        currentModel = {
            meterStatuses: METER_STATUSES,
            selectedStatus: METER_STATUSES[0],
            initSelect: sinon.spy(),
            getOptionText: function(option) {
                return 'Option Text ' + option.value;
            },
            onChange: function() {
                spy();
            }
        };
    }));

    describe('Default select input directive', function () {
        var innerInput;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template(
            '<fit-select model="vm.model.selectedStatus"' +
                'options="vm.model.meterStatuses"' +
                'attr-id="name"' +
                'label="Meter Status"' +
                'default-option="true">' +
            '</fit-select>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                defaultOption: 'true',
                options: 'meterStatuses',
                model: 'selectedStatus'
            };
            compiledDirective = angular.element(MIN_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerInput = compiledDirective.find('#id_name>option');
        }));

        it('should have model fields', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.attrId).to.be.equal('name');
            expect(isolatedScope.vm.defaultOption).to.be.equal('true');
            expect(isolatedScope.vm.getOptionText).to.be.equal(undefined);
            expect(isolatedScope.vm.getText).to.be.a('function');
            expect(isolatedScope.vm.id).to.be.equal('id_name');
            expect(isolatedScope.vm.inactive).to.be.equal(undefined);
            expect(isolatedScope.vm.init).to.be.a('function');
            expect(isolatedScope.vm.label).to.be.equal('Meter Status');
            expect(isolatedScope.vm.options).to.be.an('array');
        });

        it('should have three options', function () {
            expect(innerInput.length).to.be.equal(3);
        });

        it('should have empty class', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.class).to.be.empty;
        });
    });

    describe('Using function to create option text', function () {
        var innerInput;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template(
            '<fit-select model="vm.model.selectedStatus"' +
                'options="vm.model.meterStatuses"' +
                'get-option-text="vm.model.getOptionText"' +
                'label="Meter Status"' +
                'default-option="true">' +
            '</fit-select>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                defaultOption: 'true',
                options: 'meterStatuses',
                model: 'selectedStatus'
            };
            compiledDirective = angular.element(MIN_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerInput = compiledDirective.find('#id_select>option');
        }));

        it('should inner input have type text', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(innerInput.length).to.be.equal(3);
            expect(isolatedScope.vm.id).to.be.equal('id_select');
            expect(innerInput[0].innerText).to.be.eql('');
            expect(innerInput[1].innerText).to.be.eql('Option Text invalid');
            expect(innerInput[2].innerText).to.be.eql('Option Text valid');
        });
    });

    describe('Using init function', function () {
        var innerInput;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template(
            '<fit-select model="vm.model.selectedStatus"' +
                'options="vm.model.meterStatuses"' +
                'attr-id="name"' +
                'label="Meter Status"' +
                'init-select="vm.model.initSelect"' +
                'default-option="true">' +
            '</fit-select>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                defaultOption: 'true',
                options: 'meterStatuses',
                model: 'selectedStatus',
                initSelect: 'initSelect'
            };
            compiledDirective = angular.element(MIN_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerInput = compiledDirective.find('#id_name>option');
        }));

        it('should inner input have type text', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.initSelect).to.have.been.calledOnce;
        });
    });

    describe('Using on-change function', function () {
        var innerInput;
        var widgetAttr;
        var MIN_DIRECTIVE_TEMPLATE = _.template(
            '<fit-select model="vm.model.selectedStatus"' +
                'options="vm.model.meterStatuses"' +
                'attr-id="name"' +
                'label="Meter Status"' +
                'on-change="vm.model.onChange(model)">' +
            '</fit-select>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                attrId: 'firstName',
                label: 'First Name',
                defaultOption: 'true',
                options: 'meterStatuses',
                model: 'selectedStatus',
                onChange: 'onChange'
            };
            compiledDirective = angular.element(MIN_DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerInput = compiledDirective.find('#id_name>option');
        }));

        it('should inner input have type text', function () {
            var isolatedScope = compiledDirective.isolateScope();
            isolatedScope.vm.updateModel();
            expect(spy).to.have.been.calledOnce;
        });
    });

});
