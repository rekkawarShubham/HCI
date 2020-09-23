(function () {
    'use strict';
    angular.module('BlurAdmin.pages.InvestorLogin')
        .controller('InvestorLoginPageCtrl', InvestorLoginPageCtrl);
    /** @ngInject */
    function InvestorLoginPageCtrl($scope, $http, toastr, $timeout) {

        document.cookie = "type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "cin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "pass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        var year;
        $scope.getDetails = function (roll, pass, year , division) {            
            console.log(roll,pass,year,division)
            var year_div = year+division;
            var d = new Date();
            d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "type" + "=" + "2" + ";" + expires + ";path=/";
            document.cookie = "cin" + "=" + roll + ";" + expires + ";path=/";
            document.cookie = "pass" + "=" + pass + ";" + expires + ";path=/";
            document.cookie = "roll" + "=" + roll + ";" + expires + ";path=/";
            document.cookie = "year" + "=" + year + ";" + expires + ";path=/";
            document.cookie = "yeardiv" + "=" + year_div + ";" + expires + ";path=/";

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://127.0.0.1:8010/api/student_login_details',
                data: {
                    roll: roll,
                    password: pass,
                    year : year,
                    year_div : year_div
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data.result);
                    if (response.data.result == 200) {
                        console.log("Login SuccessFull");
                        toastr.success("Login SuccessFull");
                        window.location.href = "#/investorprofile";
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