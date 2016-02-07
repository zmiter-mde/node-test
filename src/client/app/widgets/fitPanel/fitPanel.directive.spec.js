/* jshint -W117, -W030 */
describe('fit-panel directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var currentModel;

    beforeEach(module('fits.widgets'));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.expectGET('api/config').respond(200, config);
    }));

    describe('Default fit-panel directive', function () {
        var widgetAttr;
        var DIRECTIVE_TEMPLATE = _.template('<fit-panel panel-title="<%= panelTitle %>"><h1><%= bodyContent %></h1></fit-panel>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: currentModel};
            widgetAttr =
            {
                panelTitle: 'Title',
                bodyContent: 'Body'
            };
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
        }));

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        it('should set panel title in h3', function () {
            var panelTitle = compiledDirective.find('h3');
            expect(panelTitle.text()).to.be.equal(widgetAttr.panelTitle);
        });

        it('should transclude element content into panel body', function () {
            var panelBody = compiledDirective.find('div.panel-body');
            expect(panelBody.text()).to.be.equal(widgetAttr.bodyContent);
        });
    });

});
