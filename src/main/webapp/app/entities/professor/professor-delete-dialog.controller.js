(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('ProfessorDeleteController',ProfessorDeleteController);

    ProfessorDeleteController.$inject = ['$uibModalInstance', 'entity', 'Professor'];

    function ProfessorDeleteController($uibModalInstance, entity, Professor) {
        var vm = this;

        vm.professor = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Professor.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
