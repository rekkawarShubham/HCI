(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Status')
        .controller('StatusPageCtrl', StatusPageCtrl);

    /** @ngInject */
    function StatusPageCtrl($scope, $http, toastr, $timeout,$filter) {


        var cin;
        var name = "cin" + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
    
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            cin = c.substring(name.length, c.length);
          }
        }
        console.log("cin:"+cin);


        var pass;
        var name = "pass" + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
    
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            pass = c.substring(name.length, c.length);
          }
        }
        console.log("pass:"+pass);
        


        // var cin = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        // var password = window.location.href.split('?')[1].split('&')[1].split('=')[1];
        // console.log(cin);
        // console.log(password);

        var password = pass;

        toastr.success(cin + password);
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/login_details',
            data: {
                cin: cin,
                password: password
            }
        })
            .then(function successCallback(response) {
                console.log(response.data.result);
                if (response.data.result==200) {
                    console.log("Login SuccessFull");
                    $scope.profile = "Profile Generated Successfully";
                    $scope.verfication = "Verification Done Via Email";
                    $scope.pic = $filter('profilePicture')('checked');
                    $scope.pic1 = $filter('profilePicture')('checked');
                }
                else{
                    $scope.profile = "Profile Not generated S";
                    $scope.verfication = "Verification Not Done";
                    $scope.pic = $filter('profilePicture')('cancel');
                    $scope.pic1 = $filter('profilePicture')('cancel');
                }
              
                if(response.data.applied == 200)
                {
                    $scope.fund = "Applied Successfully";
                    $scope.pic2 = $filter('profilePicture')('checked');
                }
                else{
                    $scope.fund = "Not Yet Applied";
                    $scope.pic2 = $filter('profilePicture')('cancel');
                }

                if(response.data.sanction == 200)
                {
                    $scope.fund_status = "Fund Sanctioned Successfully";
                    $scope.pic3 = $filter('profilePicture')('checked');
                }
                else{
                    $scope.fund_status= "Not Sanctioned";
                    $scope.pic2 = $filter('profilePicture')('cancel');
                }
              

            });
    }


})();