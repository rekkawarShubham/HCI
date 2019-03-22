(function () {
    'use strict';

    angular.module('BlurAdmin.pages.RoomDetails')
        .controller('RoomDetailsPageCtrl', RoomDetailsPageCtrl);

    /** @ngInject */
    function RoomDetailsPageCtrl($scope, $http, $filter) {

        $http({
                method: 'get',
                url: 'http://127.0.0.1:8005/api/getroomdetails'
            })
            .then(function successCallback(response) {
                console.log((response.data));
                $scope.smartTableData = response.data;
                $scope.smartTableData1 = response.data;
            });
        $scope.smartTablePageSize = 10;
    }

})();