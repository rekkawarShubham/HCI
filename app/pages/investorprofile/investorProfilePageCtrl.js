/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.investorprofile')
    .controller('investorProfilePageCtrl', investorProfilePageCtrl);

  /** @ngInject */
  function investorProfilePageCtrl($scope, fileReader, $filter, $uibModal,$http,toastr) {
    
   
    var roll;
    var name = "roll" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        roll = c.substring(name.length, c.length);
      }
    }
    console.log("roll:"+roll);

    var year;
    var name = "year" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        year = c.substring(name.length, c.length);
      }
    }
    console.log("year:"+year);

    var year_div;
    var name = "yeardiv" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        year_div = c.substring(name.length, c.length);
      }
    }
    console.log("yeardiv:"+year_div);

    var dept;
    var name = "dept" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        dept = c.substring(name.length, c.length);
      }
    }
    console.log("dept:"+dept);


      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'https://us-central1-financing-platform.cloudfunctions.net/pictFeedback/api/student_profile_details',
            data: {
               roll : roll,
               year : year,
               year_div : year_div
            }
        })
            .then(function successCallback(response) {
                console.log(response.data.result);
                if(response.data.result == 200){
                       console.log("Login SuccessFull");
                       $scope.roll = roll,
                       $scope.dept = dept,
                       $scope.email = response.data.email,
                       $scope.phone = response.data.mobile,
                       $scope.address = response.data.address
                     }

                else if(response.data.result == 404){
                    console.log("Login UnsuccessFull");  
                }
                else{
                    toastr.error("Unable to Fetch Data");
                }
            
            });

    $scope.picture = $filter('profilePicture')('Nasta');
    $scope.removePicture = function () {
      $scope.picture = $filter('appImage')('theme/no-photo.png');
      $scope.noPicture = true;
    };

    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

    $scope.socialprofiles = [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/ShubhzzRekkawar',
        icon: 'socicon-facebook'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/ShubhamRekkawar',
        icon: 'socicon-twitter'
      },
      {
        name: 'Google',
        icon: 'socicon-google'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/shubham-rekkawar-568282152/',
        icon: 'socicon-linkedin'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/rekkawarShubham',
        icon: 'socicon-github'
      },
      {
        name: 'StackOverflow',
        icon: 'socicon-stackoverflow'
      },
    ];

    $scope.unconnect = function (item) {
      item.href = undefined;
    };

    $scope.showModal = function (item) {
      $uibModal.open({
        animation: false,
        controller: 'investorprofileModalCtrl',
        templateUrl: 'app/pages/investorprofile/investorprofileModal.html'
      }).result.then(function (link) {
          item.href = link;
        });
    };

    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            $scope.picture = result;
          });
    };

    $scope.switches = [true, true, false, true, true, false];
  }
  
})();
