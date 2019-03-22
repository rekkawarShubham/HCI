/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.StudentStatistics')
    .controller('StudentStatisticsPageCtrl', StudentStatisticsPageCtrl);

  /** @ngInject */
  function StudentStatisticsPageCtrl($scope, baConfig, $http) {
    var layoutColors = baConfig.colors;
    var tp = []
    $scope.loaddataforstudent = function () {
      console.log($scope.selectedYear);
      console.log($scope.selectedGender);
     if($scope.selectedYear=="FY" && $scope.selectedGender=="boys")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [20,40,5,35,43,5,44,32,12,32];
      }
      if($scope.selectedYear=="FY" && $scope.selectedGender=="girls")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [20,40,5,35,43,5,44,32,12,32];
      }
      if($scope.selectedYear=="SY" && $scope.selectedGender=="boys")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [20,20,15,25,43,15,24,32,12,32];
      }
      if($scope.selectedYear=="SY" && $scope.selectedGender=="girls")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [10,30,15,35,41,5,41,32,21,32];
      }
      if($scope.selectedYear=="TY" && $scope.selectedGender=="boys")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [20,40,15,35,13,15,12,32,22,12];
      }
      if($scope.selectedYear=="TY" && $scope.selectedGender=="girls")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [12,10,15,25,21,15,24,32,22,12];
      }
      if($scope.selectedYear=="BTech" && $scope.selectedGender=="boys")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [10,20,52,25,23,15,14,32,12,12];
      }
      if($scope.selectedYear=="BTech" && $scope.selectedGender=="girls")
      {
      $scope.labels =["Computer", "Mechanical", "Civil", "Electrical","Electronics and Telecommunication"," IT","Production","Planning","Metallurgy","Instrumentation"];
      $scope.data = [10,30,25,15,33,5,14,22,42,32];
      }
    };


    $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) { }
      return o;
    }
  }

})();