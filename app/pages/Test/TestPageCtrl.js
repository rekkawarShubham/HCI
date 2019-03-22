(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Test')
        .controller('TestPageCtrl', TestPageCtrl);

    /** @ngInject */
    function TestPageCtrl($scope) {

        $scope.getDetails = function (mis, password) {

            console.log(mis+password);
             window.location.href="http://localhost:4200/";
        }

    }

})();