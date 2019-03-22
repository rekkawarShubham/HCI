(function () {
    'use strict';
    angular.module('BlurAdmin.pages.PastBook')
        .controller('PastBookPageCtrl', PastBookPageCtrl);

    /** @ngInject */
    function PastBookPageCtrl($scope, $http, toastr, baProgressModal) {
        //$scope.openProgressDialog = baProgressModal.open;
        $scope.book = function(){
            toastr.success("redirecting");
            window.location.href = "#/Home?email=" + email + "&password=" + password;
        }
        $scope.home = function(){
            window.location.href = "#/Home?email=" + email + "&password=" + password;           
        }
            var email = null,password=null;
            var email = window.location.href.split('?')[1].split('&')[0].split('=')[1];
            var password = window.location.href.split('?')[1].split('&')[1].split('=')[1];
        if(email == null){
            window.location.href = '#/Login';
        }
        console.log(email,password);
    
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/previous_details',
            data: {
                email : email,
                password : password
            }
        })
            .then(function successCallback(response) {
                console.log(response.data.result);
                if(response.data.result == 200){
                       console.log("Login SuccessFull");
                       var time = response.data.time.seconds;
                       var date = new Date(time*1000);
                       var hours = date.getHours();
                       var minutes = "0" + date.getMinutes();
                       var seconds = "0" + date.getSeconds();
                       var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                      console.log(formattedTime);
                      $scope.time = formattedTime
                       $scope.place = response.data.place;
                       $scope.topic = response.data.topic;
                       $scope.seats = response.data.seats;
                    }
                else if(response.data.result == 404){
                    console.log("Login UnsuccessFull");  
                }
                else{
                    toastr.error("Unable to Fetch Data");
                }
            
            });
           
    }
})();