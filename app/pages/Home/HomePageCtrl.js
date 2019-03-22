(function () {
    'use strict';
    angular.module('BlurAdmin.pages.Home')
        .controller('HomePageCtrl', HomePageCtrl);

    /** @ngInject */
    function HomePageCtrl($scope, $http, toastr, baProgressModal) {
        $scope.openProgressDialog = baProgressModal.open;

        var email = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        var password = window.location.href.split('?')[1].split('&')[1].split('=')[1];
        console.log(email);
        console.log(password);
        $scope.my_bookings = function(){
            toastr.success("Showing Bookings...");
            window.location.href = "#/PastBook?email=" + email + "&password=" + password;
        }
        $scope.loadprofile = function(){
            window.location.href = "#/profile?email=" + email + "&password=" + password;
        }
        $scope.auditorium = function(){
            toastr.success("audi");
            navigate('main_udi',email);
        }
        $scope.library = function(){
            toastr.success("library");
            navigate('main_library_1',email);           
        }
        $scope.tutorial = function(){
            toastr.success("tutorial");
            navigate('function_hall_1',email);
        }
    
        $scope.it_hall = function(){
            toastr.success("IT hall");
            navigate('main_udi',email);           
        } 
        $scope.computer_hall = function(){
            toastr.success("Computer Hall");
            navigate('main_library_1',email);
        }
        $scope.reading_hall = function(){
            toastr.success("Reading hall");           
            navigate('function_hall_1',email);
        } 
    }

    function navigate(dest,email){
        window.location.href = "https://space-management-ish-201-dbbc6.firebaseapp.com/src/floor_planner/seatreservation.html?where=" + dest + "&email=" + email;
    }
})();