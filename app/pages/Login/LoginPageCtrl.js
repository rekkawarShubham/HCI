/**
 * @author v.lugovsky
 * created on 16.12.2015
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Login')
        .controller('LoginPageCtrl', LoginPageCtrl);

    /** @ngInject */
    function LoginPageCtrl($scope, $http,toastr) {
        var vm = this;
        vm.disabled = undefined;

        vm.standardItem = {};

        vm.standardSelectItems = [{
                label: 'Student',
                value: 1
            },
            {
                label: ' Administrator ',
                value: 2
            }
        ];
        $scope.register = function(){
            window.location.href = "#/Register";
        }
        $scope.getDetails = function(email,pass,type)
        {
            console.log(email);
            console.log(pass);
            console.log(type.value);

            var d = new Date();
            d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "type" + "=" + type.value + ";" + expires + ";path=/";
            if(type.value == "1"){
                $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                $http({
                    method: 'post',
                    url: 'http://127.0.0.1:8010/api/login_details',
                    data: {
                        email : email,
                        password : pass,
                    }
                })
                    .then(function successCallback(response) {
                        console.log(response.data.result);
                        if(response.data.result == 200){
                               console.log("Login SuccessFull");
                               toastr.success("Login SuccessFull");
                               window.location.href = "#/Home?email=" + email + "&password=" + pass;
                            }
                        else if(response.data.result == 404){
                            console.log("Login UnsuccessFull");
                            toastr.error("Login UnsuccessFull");
                        }
                        else{
                            toastr.error("Login UnsuccessFull");
                        }
                    
                    });
            }
            else if(type.value == "2" && email=="admin" && pass=="admin")
            {
                window.location.href = "#/dashboard";
            }
            else{
                toastr.error("Invalid Username or Password");
            }
        };
    }

})();