/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, fileReader, $filter, $uibModal,$http,toastr) {

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

      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/profile_details',
            data: {
                cin : cin
            }
        })
            .then(function successCallback(response) {
                console.log(response.data.result);
                if(response.data.result == 200){
                       console.log("Login SuccessFull");
                      $scope.startup_name = response.data.startupname,
                      $scope.stage = response.data.stage,
                      $scope.vsector = response.data.vsector,
                      $scope.date = response.data.date,
                      $scope.hsector = response.data.hsector,
                      $scope.auth_capital = response.data.auth_capital,
                      $scope.paid_up = response.data.paid_up,
                      $scope.b_type = response.data.btype,
                      $scope.rno = response.data.rno,
                      $scope.cplatform = response.data.cplatform  ,
                      $scope.roc_code = response.data.roc,
                      $scope.email = response.data.email,
                      $scope.cin = response.data.cin
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

    $scope.socialProfiles = [
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
        controller: 'ProfileModalCtrl',
        templateUrl: 'app/pages/profile/profileModal.html'
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
