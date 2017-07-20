(function () {
    'use strict';

    angular.module('validmate')
        .directive('pageHeader', HeaderDirective);

    function HeaderDirective() {
        var urladd = '';
        if (window.location.href.indexOf('github.io') !== -1)
            urladd = '/validmate';

        return {
            templateUrl: urladd+'/views/common/header.html',
            restrict: 'E',
            controller: ['$scope', '$location', function ($scope, $location) {
                $scope.nav = [
                    { name: 'Home', link: '/' },
                    { name: 'About', link: '/about' }
                ];

                $scope.navClick = function(link) {
                    $location.url(link.link);
                };
            }],
            link: function(scope, element){
                element.addClass('customClass');
            }
        }
    }
})();