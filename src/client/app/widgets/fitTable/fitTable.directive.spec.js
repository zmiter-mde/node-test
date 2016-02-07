/* jshint -W117, -W030 */
describe('fit-table directive: ', function () {
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

    describe('fit-table directive', function () {
        var DIRECTIVE_TEMPLATE = '<fit-table model="vm.model"><fit-header></fit-header><fit-body></fit-body></fit-table>';
        var currentModel;

        beforeEach(function () {
            currentModel = {
                totalModelsCount: 10,
                itemsPerPage: 5,
                foundModels: [{}, {}]
            };
            $rootScope.vm = {model: currentModel};
            compiledDirective = angular.element(DIRECTIVE_TEMPLATE);
            scope = $rootScope;
            $compile(compiledDirective)(scope);
            scope.$digest();
            $rootScope.$apply();
        });

        it('should be created successfully', function () {
            expect(compiledDirective).to.be.defined;
        });

        describe('#hasMultiplePages', function () {
            it('should show pagination component if totalModelsCount is greater then selected items per page count', function () {
                var isolatedScope = compiledDirective.isolateScope();
                isolatedScope.vm.model.totalModelsCount = 50;
                isolatedScope.vm.model.searchModel = {
                    limit: 10
                };
                var response = isolatedScope.vm.hasMultiplePages();
                expect(response).to.be.equal(true);
            });

            it('should hide pagination component if totalModelsCount ' +
                'is less or equal to selected items per page count', function () {
                var isolatedScope = compiledDirective.isolateScope();
                isolatedScope.vm.model.totalModelsCount = 50;
                isolatedScope.vm.model.searchModel = {
                    limit: 50
                };
                var response = isolatedScope.vm.hasMultiplePages();
                expect(response).to.be.equal(false);
            });
        });

        describe('#getTotalPagesCount', function () {
            it('should return total page count based on selected items per page limit and totalModelsCount', function () {
                var isolatedScope = compiledDirective.isolateScope();
                isolatedScope.vm.model.totalModelsCount = 201;
                isolatedScope.vm.model.searchModel = {
                    limit: 10
                };
                var response = isolatedScope.vm.getTotalPagesCount();
                expect(response).to.be.equal(21);
            });
        });

        describe('#paginationCountChanged', function () {
            it('should load first page', function () {
                var isolatedScope = compiledDirective.isolateScope();
                isolatedScope.vm.model.currentPage  = 3;
                isolatedScope.vm.pageChanged = sinon.spy();
                isolatedScope.vm.paginationCountChanged();
                expect(isolatedScope.vm.model.currentPage).to.be.equal(1);
                expect(isolatedScope.vm.pageChanged).to.be.calledOnce;
            });
        });
    });
});
