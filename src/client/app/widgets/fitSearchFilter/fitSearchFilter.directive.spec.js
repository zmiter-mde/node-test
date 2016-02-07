/* jshint -W117, -W030 */
describe('fit-search-filter directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();

    beforeEach(function () {
        bard.appModule('fits.widgets');
        bard.inject('$rootScope', '$compile', 'dataservice', '$q', '$timeout', '$filter');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('$rootScope', 'ConfigFactory');
        $rootScope.$apply();
    });

    describe('fit-search-filter directive', function () {
        var currentModel;
        var searchFields;
        var DIRECTIVE_TEMPLATE = '<fit-search-filter model="vm.model" fields="vm.searchFields"></fit-search-filter>';

        beforeEach(function () {
            currentModel = {};
            var selectFilter = {
                name: 'name',
                label: 'Dropdown',
                type: 'select',
                options: [{name: 'First'}, {name: 'Second'}],
                model: {}
            };
            searchFields = [
                {name: 'firstName', label: 'First Name', model: {}},
                {name: 'lastName', label: 'Last Name', type: 'text'},
                {name: 'date', label: 'Current Date', type: 'date'},
                {name: 'endDate', label: 'End Date', type: 'date'},
                selectFilter
            ];
            $rootScope.vm = {
                model: currentModel,
                searchFields: searchFields
            };
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE);
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
        });

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        it('should split fields by three columns', function () {
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.fields).to.have.length(3);
            expect(isolatedScope.vm.fields[0]).to.have.length(2);
            expect(isolatedScope.vm.fields[1]).to.have.length(2);
            expect(isolatedScope.vm.fields[2]).to.have.length(1);
        });

        it('should create filter field for each specified column', function () {
            var fitInputs = compiledDirective.find('fit-input');
            var fitDates = compiledDirective.find('fit-date');
            var fitSelects = compiledDirective.find('fit-select');
            expect(fitInputs.length).to.be.equal(2);
            expect(fitDates.length).to.be.equal(2);
            expect(fitSelects.length).to.be.equal(1);
        });

        describe('#hasDefaultSelectOption', function () {

            var selectField;

            beforeEach(function () {
                selectField = {
                    label: 'Select',
                    type: 'select',
                    options: [],
                    onChange: function () {
                    },
                    model: {}
                };
            });

            it('should set default option (return true) into fit-select element ' +
                'if search field contain property default equal to true', function () {
                var isolatedScope = compiledDirective.isolateScope();
                selectField.default = true;
                var response = isolatedScope.vm.hasDefaultSelectOption(selectField);
                expect(response).to.be.equal(true);
            });

            it('should set default option (return true) into fit-select element ' +
                'if search field does not have property default', function () {
                var isolatedScope = compiledDirective.isolateScope();
                var response = isolatedScope.vm.hasDefaultSelectOption(selectField);
                expect(response).to.be.equal(true);
            });

            it('should not set default option (return false) into fit-select element ' +
                'if search field have property default equal to false', function () {
                var isolatedScope = compiledDirective.isolateScope();
                selectField.default = false;
                var response = isolatedScope.vm.hasDefaultSelectOption(selectField);
                expect(response).to.be.equal(false);
            });
        });
    });
});
