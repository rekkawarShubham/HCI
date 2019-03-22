(function () {
  'use strict';

  angular.module('BlurAdmin.pages.InvestorListTable', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('InvestorListTable', {
        url: '/InvestorListTable',
        controller: 'InvestorListTablePageCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/InvestorListTable/InvestorListTable.html',
        title: 'Investor Table',
        sidebarMeta: {
          icon: 'ion-ios-folder',
          order: 800,
        },
        authenticate: true,
        params: { // <-- focusing this one
          authRoles: ['startup'] // <-- roles allowed for this module
        }


      });
  }

})();