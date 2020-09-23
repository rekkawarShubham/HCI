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
        console.log("dept:" + dept);

      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'https://us-central1-financing-platform.cloudfunctions.net/pictFeedback/api/profile_details',
            data: {
                cin : cin,
                dept : dept
            }
        })
            .then(function successCallback(response) {
                console.log(response.data.result);
                if(response.data.result == 200){
                       console.log("Login SuccessFull");
                      $scope.admin_id = cin,
                      $scope.dept = dept,
                      $scope.email = response.data.email
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
