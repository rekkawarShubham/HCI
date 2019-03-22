(function () {
    'use strict';

    angular.module('BlurAdmin.pages.RoomAllocation')
        .controller('RoomAllocationPageCtrl', RoomAllocationPageCtrl);

    /** @ngInject */
    function RoomAllocationPageCtrl($scope, $http, $filter, editableOptions, editableThemes, $uibModal, toastr) {

        $http({
                method: 'get',
                url: 'http://127.0.0.1:8005/api/getroom'
            })
            .then(function successCallback(response) {
                console.log((response.data));
                $scope.smartTableData = response.data;
                $scope.smartTableData1 = response.data;
            });


        $scope.smartTablePageSize = 10;

        $scope.showModal = function (item) {
            $uibModal.open({
                animation: false,
                controller: 'dangermodalCtrl',
                templateUrl: 'app/pages/RoomAllocation/dangermodal.html'
            }).result.then(function (link) {
                var confo = link;
                console.log(confo)
                if (confo == 1) {
                    $scope.saveUser(item);
                }
            });
        };

        $scope.showSuccessMsg = function () {
            toastr.success('Room Booked !');
        };

        $scope.showErrorMsg = function () {
            toastr.error("Already Booked", '');
        };


        // save record
        $scope.saveUser = function (item) {
            console.log(item);
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                    method: 'post',
                    url: 'http://127.0.0.1:8005/api/roomallocate',
                    data: item
                })
                .then(function successCallback(response) {
                    if (response.data == "404") {
                        $scope.showErrorMsg();
                    } else {
                        $scope.smartTableData = response.data;
                        $scope.smartTableData1 = response.data;
                        $scope.showSuccessMsg();
                    }
                });

        };

    }

})();