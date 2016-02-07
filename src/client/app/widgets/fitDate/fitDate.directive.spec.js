/* jshint -W117, -W030 */
describe('fit-date directive: ', function () {
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

    describe('fit-date directive', function () {

        var innerInput;
        var innerLabel;
        var widgetAttr;
        var currentModel;
        var onDateChangeDateSpy;
        var DIRECTIVE_TEMPLATE = _.template('<fit-date attr-id="<%= attrId %>" label="<%= label %>" ' +
            ' model="vm.model" on-change="vm.onChangeDate(model)" disabled="<%= disabled %>"> </fit-date>');

        beforeEach(function () {
            currentModel = {
                currentDate: new Date().getTime()
            };
            onDateChangeDateSpy = sinon.spy();
            $rootScope.vm = {
                model: currentModel,
                onChangeDate: onDateChangeDateSpy
            };
            widgetAttr =
            {
                attrId: 'currentDate',
                label: 'Current Date',
                required: true,
                disabled: false
            };
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            innerInput = compiledDirective.find('input#' + widgetAttr.attrId);
            innerLabel = compiledDirective.find('label');
        });

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        it('should have specified label text', function () {
            expect(innerLabel.text()).to.be.equal(widgetAttr.label);
        });

        it('should bind input to specified model attribute', function () {
            var formattedDate = $filter('date')($rootScope.vm.model.currentDate, 'yyyy-MM-dd');
            expect(innerInput.val()).to.be.equal(formattedDate);
        });

        it('should have initialised isolated scope', function () {
            var isolatedScope = compiledDirective.isolateScope();

            expect(isolatedScope.vm.attrId).to.be.equal(widgetAttr.attrId);
            expect(isolatedScope.vm.label).to.be.equal(widgetAttr.label);
        });

        it('should call toggle open date picker popup on click', function () {
            clickOnDatePickerButton();
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.opened).to.be.equal(true);
        });

        describe('#updateModel', function () {
            it('should call onChange when model is changed', function () {
                var isolatedScope = compiledDirective.isolateScope();
                var newDate = new Date();
                isolatedScope.vm.date = newDate;
                isolatedScope.vm.updateModel();
                expect(onDateChangeDateSpy).to.be.called;
            });

            it('should set null to model if inner date model is empty', function () {
                var isolatedScope = compiledDirective.isolateScope();
                isolatedScope.vm.date = null;
                isolatedScope.vm.updateModel();
                expect($rootScope.vm.model.currentDate).to.be.equal(null);
                expect(onDateChangeDateSpy).to.be.called;
            });
        });

        function clickOnDatePickerButton() {
            var button = compiledDirective.find('button');
            button.trigger('click');
        }
    });

    describe('various fit-date init cases', function () {
        var widgetAttr;
        var DIRECTIVE_TEMPLATE = _.template('<fit-date attr-id="<%= attrId %>" label="<%= label %>" ' +
            ' model="vm.model" disabled="<%= disabled %>"> </fit-date>');

        it('should set date to null if no date is passed by default', function () {
            $rootScope.vm = {
                model: {}
            };
            widgetAttr =
            {
                attrId: 'currentDate',
                label: 'Current Date',
                required: true,
                disabled: false
            };
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.date).to.be.equal(null);
        });
    });
});
