/* jshint -W117, -W030 */
describe('UtilsService', function () {

    beforeEach(function () {
        bard.appModule('fits.core');
        bard.inject('$rootScope', '$q', 'UtilsService');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('#getBooleanGlyphClass', function () {

        it('should return "glyphicon-ok" if true value is passed  ', function () {
            var result = UtilsService.getBooleanGlyphClass(true);
            expect(result).equal('glyphicon-ok');
        });

        it('should return "glyphicon-remove" if false value is passed', function () {
            var result = UtilsService.getBooleanGlyphClass(false);
            expect(result).equal('glyphicon-remove');
        });
    });

    describe('#modelIsLoaded', function () {

        it('should return true if not empty model is already loaded', function () {
            var model = {foundModels: [{modelId: 1}], isEmptyResult: false};
            var result = UtilsService.modelIsLoaded(model);
            expect(result).to.equal(true);
        });

        it('should return true if empty model is already loaded', function () {
            var model = {foundModels: [], isEmptyResult: true};
            var result = UtilsService.modelIsLoaded(model);
            expect(result).to.equal(true);
        });

        it('should return false if no model was loaded', function () {
            var model = {foundModels: [], isEmptyResult: false};
            var result = UtilsService.modelIsLoaded(model);
            expect(result).to.equal(false);
        });
    });

    describe('#getValidReadClass', function () {

        it('should return empty-color if argument is null', function () {
            var result = UtilsService.getValidReadClass(null);
            expect(result).to.equal('empty-color');
        });

        it('should return empty-color if argument is undefined', function () {
            var result = UtilsService.getValidReadClass(undefined);
            expect(result).to.equal('empty-color');
        });

        it('should return valid-color if argument has true isValid field', function () {
            var result = UtilsService.getValidReadClass({isValid: true});
            expect(result).to.equal('valid-color');
        });

        it('should return invalid-color if argument has false isValid field', function () {
            var result = UtilsService.getValidReadClass({isValid: false});
            expect(result).to.equal('invalid-color');
        });

        it('should return invalid-color if argument has no isValid field', function () {
            var result = UtilsService.getValidReadClass({});
            expect(result).to.equal('invalid-color');
        });

        it('should return invalid-color if argument has null isValid field', function () {
            var result = UtilsService.getValidReadClass({isValid: null});
            expect(result).to.equal('invalid-color');
        });
    });

    describe('#getStyleClass', function () {

        it('should return warning classes when argument is true', function() {
            var result = UtilsService.getStyleClass(true);
            expect(result).to.equal('warning-read alert-warning');
        });

        it('should return error classes when argument is false', function() {
            var result = UtilsService.getStyleClass(false);
            expect(result).to.equal('invalid-read alert-danger');
        });

    });

    describe('#getIconClass', function () {

        it('should return warning icon classes when argument is true', function() {
            var result = UtilsService.getIconClass(true);
            expect(result).to.equal('glyphicon glyphicon-warning-sign');
        });

        it('should return error icon classes when argument is false', function() {
            var result = UtilsService.getIconClass(false);
            expect(result).to.equal('glyphicon glyphicon-exclamation-sign');
        });

    });

});
