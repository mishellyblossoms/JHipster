(function() {
    'use strict';
    angular
        .module('testApp')
        .factory('College', College);

    College.$inject = ['$resource'];

    function College ($resource) {
        var resourceUrl =  'api/colleges/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
