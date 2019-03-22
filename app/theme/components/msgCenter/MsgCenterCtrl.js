/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce, $http) {

    $scope.init = function () {
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
      console.log("shubham" + cin);
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $http({
        method: 'post',
        url: 'http://127.0.0.1:8010/api/notify',
        data: { cin: cin }
      })
        .then(function successCallback(response) {
          console.log((response.data));
          $scope.count = response.data.length;
          $scope.notifications = response.data;

        });

    }

    $scope.users = {
      0: {
        name: 'Admin',
      },
      1: {
        name: 'Kostya',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.getMessage = function (msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);

    };
  }
})();