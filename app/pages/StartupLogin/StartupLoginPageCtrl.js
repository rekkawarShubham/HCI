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
        $scope.getDetails = function (cin, pass) {
            toastr.success(cin + pass);
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://192.168.1.106:8010/api/login_details',
                data: {
                    cin: cin,
                    password: pass
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

        $scope.storeDetails = function (cin) {
            toastr.success(cin);
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://127.0.0.1:8010/api/get_company_details',
                data: {
                    cin: cin
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data.result);
                    if (response.data.result == 200) {
                        console.log(response.data);
                        console.log("Login SuccessFull");
                        toastr.success("Login SuccessFull");
                        window.location.href = "#/StartupForm?cin=" + cin;
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