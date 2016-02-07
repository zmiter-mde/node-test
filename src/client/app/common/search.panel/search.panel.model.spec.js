/* jshint -W117, -W030 */
describe('SearchPanelModel', function () {
    beforeEach(function () {
        bard.appModule('fits.common');
        bard.inject('$rootScope');
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('SearchPanelModel');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should have defined search panel model', function () {
        expect(SearchPanelModel).to.have.property('searchPanel').to.be.an('object');
        expect(SearchPanelModel.searchPanel).to.have.property('isCollapsed').equal(false);
    });

    describe('#Methods', function () {

        describe('#showSearchPanel', function () {
            it('should set isCollapsed to false if called with no parameters', function () {
                SearchPanelModel.searchPanel.isCollapsed = true;
                SearchPanelModel.showSearchPanel();
                expect(SearchPanelModel.searchPanel.isCollapsed).to.be.equal(false);
            });

            it('should show collapse panel (set isCollapsed to false) if true is passed and false otherwise', function () {
                SearchPanelModel.searchPanel.isCollapsed = true;
                SearchPanelModel.showSearchPanel(true);
                expect(SearchPanelModel.searchPanel.isCollapsed).to.be.equal(false);
            });
        });

        describe('#hideSearchPanel', function () {
            it('should set isCollapsed property to true', function () {
                SearchPanelModel.searchPanel.isCollapsed = false;
                SearchPanelModel.hideSearchPanel();
                expect(SearchPanelModel.searchPanel.isCollapsed).to.be.equal(true);
            });

        });
    });
});