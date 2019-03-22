(function () {
    'use strict';

    angular.module('BlurAdmin.pages.PaymentProcedure')
        .controller('PaymentProcedurePageCtrl', PaymentProcedurePageCtrl);

    /** @ngInject */
    function PaymentProcedurePageCtrl($scope, $http, toastr, $timeout) {

        $scope.progressFunction = function () {
            return $timeout(function () {}, 100);
        };

        $scope.Open = function () {
            toastr.info("Click On PAYMENT TAB");
        };

        $scope.OpenSBI = function () {
            toastr.info("We are redirecting you to SBI - Collect");
            window.open('https://www.onlinesbi.com/prelogin/icollecthome.htm', '_blank');
        };

        $scope.storePaymentDetails = function (file, type) {
            var misno = (angular.element('#mis').val());
            var tid = (angular.element('#tid').val());
            firebase.storage().ref().child(misno + "/" + "hostelpayment/" + tid).put(file)
                .then(function () {
                    $scope.showSuccessMsg();
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            $scope.showSuccessMsg = function () {
                toastr.info('Payment Details Submitted !');
            };
        };
    }

})();