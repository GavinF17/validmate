(function () {
    'use strict';

    angular.module('validmate')
        .directive('pageFooter', FooterDirective);

    function FooterDirective() {
        return {
            templateUrl: '/validmate/views/common/footer.html',
            restrict: 'E',
            controller: ['$scope', function ($scope) {


            }]
        }
    }
})();