(function () {
    'use strict';

    angular.module('BlurAdmin.pages.StartupLogin')
        .controller('StartupLoginPageCtrl', StartupLoginPageCtrl);

    /** @ngInject */
    function StartupLoginPageCtrl($scope, $http, toastr, $timeout) {

        document.cookie = "type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        $scope.mca = function () {
            toastr.success("hello");
        }
        $scope.getDetails = function (cin, pass, admin_dept) {
           
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'https://us-central1-financing-platform.cloudfunctions.net/pictFeedback/api/login_details',
                data: {
                    cin: cin,
                    password: pass,
                    admin_dept : admin_dept
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data.result);
                    if (response.data.result == 200) {
                        console.log("Login SuccessFull");
                        //=================
                        var d = new Date();
                        d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000));
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = "type" + "=" + "1" + ";" + expires + ";path=/";
                        document.cookie = "cin" + "=" + cin + ";" + expires + ";path=/";
                        document.cookie = "pass" + "=" + pass + ";" + expires + ";path=/";
                        document.cookie = "dept" + "=" + admin_dept + ";" + expires + ";path=/";
                        //===========
                        toastr.success("Login SuccessFull");
                            window.location.href = "#/profile";
                        location.reload(true);
                    }
                    else if (response.data.result == 404) {
                        console.log("Login UnsuccessFull");
                        toastr.error("Login UnsuccessFull");
                    }
                    else {
                        toastr.error("Login UnsuccessFull");
                    }
                });
        }
    }

})();