(function () {
    'use strict';

    angular.module('BlurAdmin.pages.PastReserve')
        .controller('PastReservePageCtrl', PastReservePageCtrl);

    /** @ngInject */
    function PastReservePageCtrl($scope, $http, toastr, $timeout) {

        // var email = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        // var password = window.location.href.split('?')[1].split('&')[1].split('=')[1];
  
        // if(email == null){
        //     toastr.error("Please login With Your account");
        //     window.location.href = "#/Login";
        // }

        // toastr.success(email+password);

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