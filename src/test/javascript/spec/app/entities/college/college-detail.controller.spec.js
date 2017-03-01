'use strict';

describe('Controller Tests', function() {

    describe('College Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockCollege, MockStudent, MockProfessor;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockCollege = jasmine.createSpy('MockCollege');
            MockStudent = jasmine.createSpy('MockStudent');
            MockProfessor = jasmine.createSpy('MockProfessor');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'College': MockCollege,
                'Student': MockStudent,
                'Professor': MockProfessor
            };
            createController = function() {
                $injector.get('$controller')("CollegeDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'testApp:collegeUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
