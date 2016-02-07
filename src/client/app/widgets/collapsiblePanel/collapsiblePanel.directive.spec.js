/* jshint -W117, -W030 */
describe('collapsible-panel directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var currentModel;

    beforeEach(module('fits.widgets'));

    beforeEach(inject(function ($httpBackend) {
        bard.inject('EventService');
        $httpBackend.expectGET('api/config').respond(200, config);
    }));

    describe('Default collapsible-panel directive', function () {
        var widgetAttr;
        var DIRECTIVE_TEMPLATE = _.template('<collapsible-panel panel-title="<%= panelTitle %>" model="vm.model">' +
            '<h1><%= bodyContent %></h1></collapsible-panel>');

        beforeEach(inject(function ($compile, $rootScope) {
            $rootScope.vm = {model: {isCollapsed: false}};
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
            expect(panelTitle.text().trim()).to.be.equal(widgetAttr.panelTitle);
        });

        it('should transclude element content into panel body', function () {
            var panelBody = compiledDirective.find('div.panel-body');
            expect(panelBody.text()).to.be.equal(widgetAttr.bodyContent);
        });

        it('should have chevron-up glyph if panel is expanded', function () {
            var panelTitleIcon = compiledDirective.find('i');
            expect(panelTitleIcon.attr('class')).to.be.equal('indicator glyphicon pull-right glyphicon-chevron-up');
        });

        it('should change icon to chevron-down glyph if panel is collapsed', function () {
            var panelTitleIcon = compiledDirective.find('i');
            panelTitleIcon.trigger('click');
            expect(panelTitleIcon.attr('class')).to.be.equal('indicator glyphicon pull-right glyphicon-chevron-down');
        });

        it('should toggle isCollapsed property on click on header', function () {
            var panelTitleIcon = compiledDirective.find('i');
            panelTitleIcon.trigger('click');
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.model.isCollapsed).to.be.equal(true);
            panelTitleIcon.trigger('click');
            expect(isolatedScope.vm.model.isCollapsed).to.be.equal(false);
        });

        it('should call resize event on panel collapse/expand', function () {
            sinon.stub(EventService, 'notify');
            var panelTitleIcon = compiledDirective.find('i');
            panelTitleIcon.trigger('click');
            expect(EventService.notify).to.be.calledOnce;
            expect(EventService.notify).to.be.calledWith('RESIZE');
        });

        it('should be initialized collapsed if model.isCollapsed equals true', function () {
            bard.inject('$rootScope', '$compile');
            $rootScope.vm = {model: {isCollapsed: true}};
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE(widgetAttr));
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            var isolatedScope = compiledDirective.isolateScope();
            expect(isolatedScope.vm.model.isCollapsed).to.be.equal(true);
        });
    });

});
