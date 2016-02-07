/* jshint -W117, -W030 */
describe('BaseService', function () {
    beforeEach(function () {
        bard.appModule('fits.remote');
        bard.inject('$rootScope', 'BaseService');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be created successfully', function () {
        expect(BaseService).to.be.defined;
    });

    describe('#prepareSearchFields', function () {
        var SEARCH_FIELDS;

        beforeEach(function () {
            SEARCH_FIELDS = {
                page: 1,
                limit: 50
            };
        });

        it('should decrement page by one', function () {
            var result = BaseService.prepareSearchFields(SEARCH_FIELDS);
            SEARCH_FIELDS.page--;
            expect(result).to.eql(SEARCH_FIELDS);
            expect(result).to.be.not.equal(SEARCH_FIELDS);
        });

        it('should remove all empty fields from response', function () {
            SEARCH_FIELDS.empty1 = null;
            SEARCH_FIELDS.empty2 = '';
            SEARCH_FIELDS.empty3 = '    ';
            SEARCH_FIELDS.filled1 = 'value';
            var result = BaseService.prepareSearchFields(SEARCH_FIELDS);
            expect(result.empty1).to.not.exist;
            expect(result.empty2).to.not.exist;
            expect(result.empty3).to.not.exist;
            expect(result.page).to.exist;
            expect(result.limit).to.exist;
            expect(result.filled1).to.exist;

        });
    });

    describe('#encodeURLData', function () {
        var SEARCH_FIELDS;

        beforeEach(function () {
            SEARCH_FIELDS = {
                page: 1,
                limit: 50
            };
        });

        it('should concat all object properties into URL request string', function () {
            var result = BaseService.encodeURLData(SEARCH_FIELDS);
            expect(result).to.eql('page=1&limit=50');
        });

        it('should skip all inherited properties', function () {
            var SearchFieldPrototype = {
                property: true
            };
            var inheritedSearchFieldObject = Object.create(SearchFieldPrototype);
            inheritedSearchFieldObject.page = 1;
            inheritedSearchFieldObject.limit = 50;
            var result = BaseService.encodeURLData(inheritedSearchFieldObject);
            expect(result).to.eql('page=1&limit=50');
        });

    });

});