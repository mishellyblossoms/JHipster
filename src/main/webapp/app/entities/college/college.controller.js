(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('CollegeController', CollegeController);

    CollegeController.$inject = ['College'];

    function CollegeController(College) {

        var vm = this;

        vm.colleges = [];

        loadAll();

        function loadAll() {
            College.query(function(result) {
                vm.colleges = result;
                vm.searchQuery = null;
            });
        }
    }
})();
