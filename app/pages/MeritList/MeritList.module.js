(function () {
  'use strict';

  angular.module('BlurAdmin.pages.MeritList', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('MeritList', {
        url: '/MeritList',
        controller: 'MeritListPageCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/MeritList/MeritList.html',
        title: 'Generate Merit Lists',
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