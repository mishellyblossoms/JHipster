(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('CollegeDialogController', CollegeDialogController);

    CollegeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'College', 'Student', 'Professor'];

    function CollegeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, College, Student, Professor) {
        var vm = this;

        vm.college = entity;
        vm.clear = clear;
        vm.save = save;
        vm.students = Student.query();
        vm.professors = Professor.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.college.id !== null) {
                College.update(vm.college, onSaveSuccess, onSaveError);
            } else {
                College.save(vm.college, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('testApp:collegeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
