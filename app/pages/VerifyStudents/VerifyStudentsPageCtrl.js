(function () {
    'use strict';

    angular.module('BlurAdmin.pages.VerifyStudents')
        .controller('VerifyStudentsPageCtrl', VerifyStudentsPageCtrl);

    /** @ngInject */
    function VerifyStudentsPageCtrl($scope, $http, $filter, editableOptions, editableThemes, $uibModal, toastr) {

        $http({
            method: 'get',
            url: 'http://127.0.0.1:8002/api/verifystudents'
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
                templateUrl: 'app/pages/VerifyStudents/dangermodal.html'
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
            db.collection("students").doc(mis).delete().then(function () {
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
            db.collection("students").doc(mis).delete().then(function () {
                console.log("Document successfully deleted!");
                $scope.showErrorMsg();
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

            $scope.showSuccessMsg();
        };

        $scope.open = function (filename) {
            firebase.storage().ref().child("141711010/" + filename)
                .getDownloadURL()
                .then(function (url) {
                    window.open(url);
                    console.log(url);
                }).catch(function (error) {});
        };


    }

})();