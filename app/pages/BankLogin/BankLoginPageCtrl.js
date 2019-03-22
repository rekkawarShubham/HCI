(function () {
    'use strict';

    angular.module('BlurAdmin.pages.BankLogin')
        .controller('BankLoginPageCtrl', BankLoginPageCtrl);

    /** @ngInject */
    function BankLoginPageCtrl($scope, $http, toastr) {
        $scope.getDetails = function(bank_id,pass){
            toastr.success(bank_id+pass);

            if(bank_id == "bank" && pass == "bank")
            {
                
            }
        }
    }
})();