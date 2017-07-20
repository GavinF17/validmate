(function () {
    'use strict';

    angular.module('validmate')
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/pages/home.html',
                controller: 'ValidmateController'
            })
            .when('/about', {
                templateUrl: '/views/pages/about.html',
                controller: 'ValidmateController'
            })
            .otherwise('/');
    }
})();
