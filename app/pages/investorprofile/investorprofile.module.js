/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.investorprofile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('investorprofile', {
          url: '/investorprofile',
          title: 'Profile',
          templateUrl: 'app/pages/investorprofile/investorprofile.html',
          controller: 'investorProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-ios-folder',
            order: 800,
          },
          authenticate: true,
          params: { // <-- focusing this one
            authRoles: ['investor'] // <-- roles allowed for this module
          }  
        });
  }

})();
