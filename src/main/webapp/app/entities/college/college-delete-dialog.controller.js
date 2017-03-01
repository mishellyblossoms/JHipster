(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('CollegeDeleteController',CollegeDeleteController);

    CollegeDeleteController.$inject = ['$uibModalInstance', 'entity', 'College'];

    function CollegeDeleteController($uibModalInstance, entity, College) {
        var vm = this;

        vm.college = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            College.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
