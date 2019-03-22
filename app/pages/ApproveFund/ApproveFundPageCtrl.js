(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ApproveFund')
        .controller('ApproveFundPageCtrl', ApproveFundPageCtrl);

    /** @ngInject */
    function ApproveFundPageCtrl($scope, $uibModal,$timeout,toastr,$http) {
        fetch_data();

        function fetch_data(){
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/approve_funds'
        })
            .then(function successCallback(response) {
                console.log(response.data);
                $scope.smartTableData = response.data;
                $scope.smartTableData1 = response.data;
            });
        }
        $scope.approve_fund = function (content){
            console.log(content.cin + content.inv_id + content.startup_name + content.fund_name + content.req_amt);
        }

        $scope.reject_fund = function (content){
            console.log(content.cin + content.inv_id + content.startup_name + content.fund_name + content.req_amt);
            
        }

        $scope.showModal = function (item) {
            $uibModal.open({
                animation: false,
                controller: 'dangermodalCtrl',
                templateUrl: 'app/pages/ApproveFund/dangermodal.html'
            }).result.then(function (link) {
                var confo = link;
                console.log(confo)
                if (confo == 1) {
                    $scope.removeStartup(item)
                }
            });
        };

        $scope.removeStartup = function (item) {
            var firestore = firebase.firestore();
            var settings = { /* your settings... */
                timestampsInSnapshots: true
            };
            firestore.settings(settings);

            // var db = firebase.firestore();
            // db.collection("RejectedFund").doc(item.cin).set({
            //     item
            // });

            db.collection("fundapproval").doc(item.cin).delete().then(function () {
                location.reload();
                console.log("Document successfully deleted!");
                $scope.showErrorMsg();
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        };
    }

})();