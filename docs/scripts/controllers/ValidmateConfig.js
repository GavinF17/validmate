(function () {
    'use strict';

    angular.module('validmate')
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        var urladd = '';
        if (window.location.href.indexOf('github.io') !== -1)
            urladd = '/validmate'

        $routeProvider
            .when('/', {
                templateUrl: urladd+'/views/pages/home.html',
                controller: 'ValidmateController'
            })
            .when('/about', {
                templateUrl: urladd+'/views/pages/about.html',
                controller: 'ValidmateController'
            })


            .otherwise('/');
    }
})();
