/* jshint -W117, -W030 */
describe('fit-content-resize directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();

    beforeEach(function () {
        bard.appModule('fits.widgets');
        bard.inject('$rootScope', '$compile', 'dataservice', '$q', '$interval', '$window');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('$rootScope', 'ConfigFactory');
        $rootScope.$apply();
    });

    describe('fit-content-resize directive', function () {
        var widgetAttr;
        var DIRECTIVE_TEMPLATE = _.template('<div fit-content-resize margin-bottom ="<%= marginBottom %>"</div>');

        beforeEach(function () {
            widgetAttr = {
                marginBottom: 20
            };
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
        });

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        it('should resize content down to window size minus specified bottom margin', function () {
            var isolatedScope = compiledDirective.isolateScope();
            var expectedHeight = ($window.innerHeight - isolatedScope.previousTopPosition - widgetAttr.marginBottom) + 'px';
            $interval.flush(100);
            expect(compiledDirective.css('height')).to.be.equal(expectedHeight);
        });

        it('should set margin to zero if it is not specified', function () {
            widgetAttr = {
                marginBottom: undefined
            };
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            var isolatedScope = compiledDirective.isolateScope();
            var expectedHeight = ($window.innerHeight - isolatedScope.previousTopPosition) + 'px';
            $interval.flush(100);
            expect(compiledDirective.css('height')).to.be.equal(expectedHeight);
        });
    });
});
