/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ApproveFund')
      .controller('dangermodalCtrl', dangermodalCtrl);
  
    /** @ngInject */
    function dangermodalCtrl($scope, $uibModalInstance) {
      $scope.confirm = function () {
        $uibModalInstance.close(1);
      };
    }
  
  })();