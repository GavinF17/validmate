(function () {
    'use strict';

    angular.module('validmate')
        .directive('pageFooter', FooterDirective);

    function FooterDirective() {
        var urladd = '';
        if (window.location.href.indexOf('github.io') !== -1)
            urladd = '/validmate';

        return {
            templateUrl: urladd+'/views/common/footer.html',
            restrict: 'E',
            controller: ['$scope', function ($scope) {


            }]
        }
    }
})();