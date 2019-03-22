(function () {
    'use strict';

    angular.module('BlurAdmin.pages.StartupProfile', [])
        .config(routeconfig);
    /** @ngInject */
    function routeconfig($stateProvider) {
        $stateProvider
            .state('StartupProfile', {
                url: '/StartupProfile',
                controller: 'StartupProfilePageCtrl',
                controllerAs: 'vm',                                                                                                                                                                 
                templateUrl: 'app/pages/StartupProfile/StartupProfile.html',
                title: 'Compare Startups',
                
                authenticate: true,
                params: { // <-- focusing this one
                    authRoles: ['startup'] // <-- roles allowed for this module
                }

            });
    }
})();
