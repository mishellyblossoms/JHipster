(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('ProfessorController', ProfessorController);

    ProfessorController.$inject = ['Professor'];

    function ProfessorController(Professor) {

        var vm = this;

        vm.professors = [];

        loadAll();

        function loadAll() {
            Professor.query(function(result) {
                vm.professors = result;
                vm.searchQuery = null;
            });
        }
    }
})();
