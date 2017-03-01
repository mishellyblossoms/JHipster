(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('CollegeDetailController', CollegeDetailController);

    CollegeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'College', 'Student', 'Professor'];

    function CollegeDetailController($scope, $rootScope, $stateParams, previousState, entity, College, Student, Professor) {
        var vm = this;

        vm.college = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('testApp:collegeUpdate', function(event, result) {
            vm.college = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
