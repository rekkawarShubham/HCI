(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Schemes', [])
        .config(routeconfig);
    /** @ngInject */
    function routeconfig($stateProvider) {
        $stateProvider
            .state('Schemes', {
                url: '/Schemes',
                controller: 'SchemesPageCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/pages/Schemes/Schemes.html',
                title: 'Startups Schemes',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order	: 800,
                  },
                authenticate: true,
                params: { // <-- focusing this one
                    authRoles: ['startup'] // <-- roles allowed for this module
                }

            });
    }
})();
