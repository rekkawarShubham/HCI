(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FloorPlan')
        .controller('FloorPlanPageCtrl', FloorPlanPageCtrl);

    /** @ngInject */

   
    function FloorPlanPageCtrl($scope,toastr, $http) {
    
        $scope.auditorium = function(){
            toastr.success("audi");
            navigate('main_audi');
        }
        $scope.library = function(){
            toastr.success("library");
            navigate('main_library_1');           
        }
        $scope.tutorial = function(){
            toastr.success("tutorial");
            navigate('function_hall_1');
        }
        $scope.it_hall = function(){
            toastr.success("main_audi");
            navigate('it_hall');           
        } 
        $scope.computer_hall = function(){
            toastr.success("Computer Hall");
            navigate('main_library_1');
        }
        $scope.reading_hall = function(){
            toastr.success("Reading hall");           
            navigate('function_hall_1');
        } 
    }
    function navigate(dest){
        window.location.href = 'https://space-management-ish-201-dbbc6.firebaseapp.com/src/floor_planner/FloorPlanEditor.html?where=' + dest;
    }
})();