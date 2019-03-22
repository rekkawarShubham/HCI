(function () {
    'use strict';

    angular.module('BlurAdmin.pages.BankScheme')
        .controller('BankSchemePageCtrl', BankSchemePageCtrl);

    /** @ngInject */
    function BankSchemePageCtrl($scope, $http, toastr) {
        $scope.getDetails = function(bank_id,scheme,q1,q2,q3,q4,q5){
            console.log(bank_id+scheme+q1+q2+q3+q4+q5);
            var firestore = firebase.firestore();
            var db = firebase.firestore();
            db.collection("Schemes").doc(scheme).collection("questions").doc(bank_id).set(
                  {
                      bank_id : bank_id,
                      scheme : scheme,
                      q1 : q1,
                      q2 : q2,
                      q3 : q3,
                      q4 : q4,
                      q5 : q5,
                  }
            ).then(function () {
                  toastr.success("Bank Data Saved Successfully");
                  console.log("Document Written Succesfully");
            }).catch(function (error) {
                  toastr.error("Something Went Wrong");
            })
        }
    }
})();