(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Student', 'College'];

    function StudentDetailController($scope, $rootScope, $stateParams, previousState, entity, Student, College) {
        var vm = this;

        vm.student = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('testApp:studentUpdate', function(event, result) {
            vm.student = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
