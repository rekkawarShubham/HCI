/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('BaSidebarCtrl', BaSidebarCtrl);

  /** @ngInject */
  function BaSidebarCtrl($scope, baSidebarService) {


   $scope.menuItems = baSidebarService.getMenuItems();
    var type;
    var name = "type" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        type = c.substring(name.length, c.length);
      }
    }

    console.log("type:"+type);
    var role = "";
    if(type == "1"){
      role = "startup";
    }
    else if(type == "2"){
      role = "investor";      
    }
    else if(type == "3"){
      role = "sidbiofficer`";      
    }

    var userCreds = {
      role: role
    };

    $scope.menuItems = baSidebarService.getAuthorizedMenuItems(userCreds);
    console.log(userCreds);


    $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      $scope.hoverElemHeight = $event.currentTarget.clientHeight;
      var menuTopValue = 66;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    };

    $scope.$on('$stateChangeSuccess', function () {
      if (baSidebarService.canSidebarBeHidden()) {
        baSidebarService.setMenuCollapsed(true);
      }
    });
  }
})();