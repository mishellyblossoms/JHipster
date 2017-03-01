(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('ProfessorDetailController', ProfessorDetailController);

    ProfessorDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Professor', 'College'];

    function ProfessorDetailController($scope, $rootScope, $stateParams, previousState, entity, Professor, College) {
        var vm = this;

        vm.professor = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('testApp:professorUpdate', function(event, result) {
            vm.professor = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
