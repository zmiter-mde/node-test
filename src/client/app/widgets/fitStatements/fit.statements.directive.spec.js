/* jshint -W117, -W030 */
describe('fit-statements directive: ', function () {
    var compiledDirective;
    var scope;
    var config = mockData.getConfig();
    var statementsResponse = mockStatementsData.getStatementsByFitId();

    beforeEach(function () {
        bard.appModule('fits.widgets');
        bard.inject('$rootScope', '$compile', 'dataservice', '$q', '$state');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('$rootScope', 'ConfigFactory');
        $rootScope.$apply();
    });

    describe('fit-statements directive', function () {
        var DIRECTIVE_TEMPLATE = '<fit-statements model="vm.model"></fit-statements>';
        var currentModel;

        beforeEach(function () {
            currentModel = {
                totalModelsCount: 10,
                itemsPerPage: 5,
                foundModels: statementsResponse.content
            };
            $rootScope.vm = {model: currentModel};
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE);
            $state.go = sinon.spy();
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            $rootScope.$apply();
        });

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        describe('#getStatementString', function () {
            it('should return formatted statement string', function () {
                var statement = statementsResponse.content[0];
                var isolatedScope = compiledDirective.isolateScope();
                var response = isolatedScope.vm.getStatementString(statement.calculationRun);
                expect(response).to.be.equal('Non-Ind Q1 2013/2014');
            });
        });

        describe('#goToFit', function () {
            it('should return go to fits.view state', function () {
                var fitId = 42;
                var isolatedScope = compiledDirective.isolateScope();
                var response = isolatedScope.vm.goToFit(fitId);
                expect($state.go).to.be.calledOnce;
                expect($state.go).to.be.calledWith('fits.view', {fitId: fitId});
            });
        });

        describe('#goToGenerator', function () {
            it('should return go to generators.view state', function () {
                var generatorId = 42;
                var isolatedScope = compiledDirective.isolateScope();
                var response = isolatedScope.vm.goToGenerator(generatorId);
                expect($state.go).to.be.calledOnce;
                expect($state.go).to.be.calledWith('generators.view', {generatorId: generatorId});
            });
        });
    });
});
