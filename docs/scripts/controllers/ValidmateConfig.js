(function () {
    'use strict';

    angular.module('validmate')
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/validmate/views/pages/home.html',
                controller: 'ValidmateController'
            })
            .when('/about', {
                templateUrl: '/validmate/views/pages/about.html',
                controller: 'ValidmateController'
            })
            .otherwise('/');
    }
})();
