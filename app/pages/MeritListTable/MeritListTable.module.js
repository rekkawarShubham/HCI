(function () {
  'use strict';

  angular.module('BlurAdmin.pages.MeritListTable', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('MeritListTable', {
        url: '/MeritListTable',
        controller: 'MeritListTablePageCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/MeritListTable/MeritListTable.html',
        title: 'Merit List Table',
        sidebarMeta: {
          icon: 'ion-ios-folder',
          order: 800,
        },
        authenticate: true,
        params: { // <-- focusing this one
          authRoles: ['admin'] // <-- roles allowed for this module
        }


      });
  }

})();