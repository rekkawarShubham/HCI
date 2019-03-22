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
    // var email = null;
    // var typeofinvestor = null;
    // var email = window.location.href.split('?')[1].split('&')[0].split('=')[1];
    // var typeofinvestor = window.location.href.split('?')[1].split('&')[2].split('=')[1];
    
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

    var typeofinvestor;
    var name = "typeofinvestor" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        typeofinvestor = c.substring(name.length, c.length);
      }
    }
    console.log("typeofinvestor:"+typeofinvestor);


      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/investor_profile_details',
            data: {
                email_id : cin,
                typeinvestor : typeofinvestor
            }
        })
            .then(function successCallback(response) {
                console.log(response.data.result);
                if(response.data.result == 200){
                       console.log("Login SuccessFull");

                       $scope.picture = response.data.imageurl,
                       $scope.fund_name = response.data.fund_name,
                       $scope.location = response.data.location,
                       $scope.samt = response.data.sanctionamt,
                       $scope.startupno = response.data.noofinvestee,
                       $scope.email = response.data.email,
                       $scope.phone = response.data.contact,
                       $scope.address = response.data.address,
                       $scope.areaofinterest = response.data.area_of_interest,
                       $scope.sebi = response.data.id
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
