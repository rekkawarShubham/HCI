(function () {

    'use strict';
    angular.module('BlurAdmin.pages.Schemes')
        .controller('SchemesPageCtrl', SchemesPageCtrl);
    /** @ngInject */

    function SchemesPageCtrl($scope, toastr) {
       
       
        $scope.redirect = function(id){
            console.log(id);
            window.location.href = "#/SchemeForm?id="+id;
            
        }
       
        

    }


})();