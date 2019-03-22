(function () {
  'use strict';

  angular.module('BlurAdmin.pages.StartupListTable', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('StartupListTable', {
        url: '/StartupListTable',
        controller: 'StartupListTablePageCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/StartupListTable/StartupListTable.html',
        title: 'Startups Table',
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