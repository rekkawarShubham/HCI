(function () {

    'use strict';
    angular.module('BlurAdmin.pages.StartupProfile')
        .controller('StartupProfilePageCtrl', StartupProfilePageCtrl);
    /** @ngInject */

    function StartupProfilePageCtrl($scope, $http,toastr,$timeout) {
       
        var startupname = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        console.log(startupname);
        toastr.success(startupname);
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
                method: 'post',
                url: 'http://127.0.0.1:8010/api/getStartups',
                data: {
                    startupname  : startupname
                }
            })
            .then(function successCallback(response) {
                console.log(response.data);                
                $scope.image = response.data[0].imgurl_src;
                $scope.name  = response.data[0].name;   
                $scope.startup_name = response.data[0].name;                   
                $scope.cin  = response.data[0].cin;   
                $scope.fundreceived  = response.data[0].funds_received;   
                $scope.category = response.data[0].category;     
                $scope.founders = response.data[0].founders;     
                $scope.funding_details = response.data[0].funding_details;     
                $scope.details = response.data[0].details;
            });


        function initialize() {

            var mapCanvas = document.getElementById('google-maps');
            var mapOptions = {
              center: new google.maps.LatLng(12.9716, 77.5946),
              zoom: 12,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
          }
      
          $timeout(function(){
            initialize();
          }, 100);
    }


})();