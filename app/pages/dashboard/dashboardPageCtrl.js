(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('dashboardPageCtrl', dashboardPageCtrl);

    function dashboardPageCtrl($scope,toastr, $http) {
    
        $scope.auditorium = function(){
            navigate('main_audi');
        }
        $scope.library = function(){
            navigate('main_library_1');           
        }
        $scope.tutorial = function(){
            navigate('function_hall_1');
        }
        $scope.it_hall = function(){
            navigate('main_audi');           
        } 
        $scope.computer_hall = function(){
            navigate('main_library_1');
        }
        $scope.reading_hall = function(){
            navigate('function_hall_1');
        } 
        $scope.floorplan = function(){
            toastr.success("Fetching Floor Plans...");
            window.location.href = '#/FloorPlan';
        }
    }
    function navigate(dest){
        window.location.href = 'https://space-management-ish-201-dbbc6.firebaseapp.com/src/floor_planner/seatreservation.html?where=' + dest;
    }
})();