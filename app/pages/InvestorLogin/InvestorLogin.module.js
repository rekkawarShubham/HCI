(function () {
    'use strict';

    angular.module('BlurAdmin.pages.InvestorLogin', [])
        .config(routeconfig);
    /** @ngInject */
    function routeconfig($stateProvider) {
        $stateProvider
            .state('InvestorLogin', {
                url: '/InvestorLogin',
                controller: 'InvestorLoginPageCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/pages/InvestorLogin/InvestorLogin.html',
                title: 'StudentLogin',
                
                authenticate: true,
                params: { // <-- focusing this one
                    authRoles: ['investor'] // <-- roles allowed for this module
                }

            });
    }
})();
