/* jshint -W117, -W030 */
describe('eventService', function () {
    var config = mockData.getConfig();

    beforeEach(function () {
        module('fits.core', bard.fakeToastr);
        bard.inject('$rootScope', '$q', 'dataservice');
        sinon.stub(dataservice, 'getConfig').returns($q.when(config));
        $rootScope.$apply();
    });

    beforeEach(function () {
        bard.inject('EventService');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be created successfully', function () {
        expect(EventService).to.be.defined;
    });

    it('should contain events list', function () {
        expect(EventService.events).to.be.an.object;
        expect(EventService.events.RESIZE).to.be.equal('RESIZE');
    });

    describe('#subscribe', function () {
        var scope;
        var eventHandler;
        var callbackFunction;
        beforeEach(function () {
            scope = $rootScope.$new();
            eventHandler = {};
            sinon.stub(scope, '$on');
            sinon.stub($rootScope, '$on').returns(eventHandler);
            callbackFunction = sinon.spy();
        });

        it('should subscribe to specified event type in root scope', function () {
            EventService.subscribe(scope, EventService.events.RESIZE, callbackFunction);
            expect($rootScope.$on).to.be.calledOnce;
            expect($rootScope.$on).to.be.calledWith(EventService.events.RESIZE, callbackFunction);
        });

        it('should be removed when subscriber scope is destroyed', function () {
            EventService.subscribe(scope, EventService.events.RESIZE, callbackFunction);
            expect(scope.$on).to.be.calledOnce;
            expect(scope.$on).to.be.calledWith('$destroy', eventHandler);
        });
    });

    describe('#notify', function () {
        var scope;
        var callbackFunction;
        beforeEach(function () {
            scope = $rootScope.$new();
            callbackFunction = sinon.spy();
        });

        it('should call callback function when subscribed event is raised', function () {
            EventService.subscribe(scope, EventService.events.RESIZE, callbackFunction);
            EventService.notify(EventService.events.RESIZE);
            expect(callbackFunction).to.be.calledOnce;
        });
    });
});
