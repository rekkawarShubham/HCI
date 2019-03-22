(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ViewGrievance')
        .controller('ViewGrievancePageCtrl', ViewGrievancePageCtrl);

    /** @ngInject */
    function ViewGrievancePageCtrl($scope, $http, $filter, editableOptions, editableThemes, $uibModal, toastr) {

        $http({
            method: 'get',
            url: 'http://127.0.0.1:8003/api/viewGrievance'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.smartTableData = response.data;
            $scope.smartTableData1 = response.data;
        });

        $scope.smartTablePageSize = 10;

        $scope.showModal = function (item) {
            $uibModal.open({
                animation: false,
                controller: 'dangermodalCtrl',
                templateUrl: 'app/pages/ViewGrievance/dangermodal.html'
            }).result.then(function (link) {
                var confo = link;
                console.log(confo)
                if (confo == 1) {
                    $scope.removeUser(item.mis)
                }
            });
        };

        $scope.showSuccessMsg = function () {
            toastr.success('Approved !');
        };

        $scope.showErrorMsg = function () {
            toastr.error("Deleted", 'Deleted');
        };


        // Remove record
        $scope.removeUser = function (mis) {
            var firestore = firebase.firestore();
            var settings = { /* your settings... */
                timestampsInSnapshots: true
            };
            firestore.settings(settings);

            var db = firebase.firestore();
            db.collection("Grievance").doc(mis).delete().then(function () {
                console.log("Document successfully deleted!");
                $scope.showErrorMsg();
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        };

        $scope.approveUser = function (mis) {
            var firestore = firebase.firestore();
            var settings = { /* your settings... */
                timestampsInSnapshots: true
            };
            firestore.settings(settings);

            var db = firebase.firestore();
            db.collection("Grievance").doc(mis).delete().then(function () {
                console.log("Document successfully deleted!");
                $scope.showErrorMsg();
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

            $scope.showSuccessMsg();
        };


    }

})();