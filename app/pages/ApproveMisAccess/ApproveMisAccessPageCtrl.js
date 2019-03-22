(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ApproveMisAccess')
        .controller('ApproveMisAccessPageCtrl', ApproveMisAccessPageCtrl);

    /** @ngInject */
    function ApproveMisAccessPageCtrl($scope, $timeout,toastr,$http) {

        $scope.getDetails = function (mis, password, cpassword) {
            if (password != cpassword) {
                toastr.danger("Enter Password and Confirm Password Correctly");
                window.location.href = "http://localhost:3000/#/ApproveMisAccess";
            } else {

         $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://127.0.0.1:8002/api/add_student',
                data: {
                   misno : mis,
                   password : password
                }
            })
            .then(function successCallback(response) {
                    console.log(response.data);
                });
                window.location.href = "http://localhost:3000/#/Apply?mis=" + mis + "&password=" + password;
            }
        }

        $scope.progressFunction = function () {
            return $timeout(function () {}, 3000);
        }
    }

})();