(function () {
    'use strict';
    angular.module('BlurAdmin.pages.InvestorLogin')
        .controller('InvestorLoginPageCtrl', InvestorLoginPageCtrl);
    /** @ngInject */
    function InvestorLoginPageCtrl($scope, $http, toastr, $timeout) {

        document.cookie = "type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "cin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "pass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        var typeofinvestor;
        $scope.register = function () {
            toastr.success("hello");
            window.location.href = '#/RegisterInvestor'
        }
        $scope.getDetails = function (sebi, pass, type) {



            if (type === "Fund of Funds") {
                typeofinvestor = "ffs";

            }
            else if (type === "Aspire") {
                typeofinvestor = "aspire";
            }
            else {
                typeofinvestor = "india_aspiration_fund"
            }

            var d = new Date();
            d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "type" + "=" + "2" + ";" + expires + ";path=/";
            document.cookie = "cin" + "=" + sebi + ";" + expires + ";path=/";
            document.cookie = "pass" + "=" + pass + ";" + expires + ";path=/";
            document.cookie = "typeofinvestor" + "=" + typeofinvestor + ";" + expires + ";path=/";


            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://192.168.1.106:8010/api/investor_login_details',
                data: {
                    email: sebi,
                    password: pass,
                    typeinvestor: typeofinvestor
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data.result);
                    if (response.data.result == 200) {
                        console.log("Login SuccessFull");
                        toastr.success("Login SuccessFull");
                        toastr.success(response.data.mobno)
                        window.location.href = "#/investorprofile?email=" + sebi + "&password=" + pass + "&typeofinvestor=" + typeofinvestor;
                        location.reload();
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