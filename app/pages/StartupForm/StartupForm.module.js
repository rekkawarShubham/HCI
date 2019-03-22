(function () {
    'use strict';

    angular.module('BlurAdmin.pages.StartupForm', [])
        .config(routeconfig);
    /** @ngInject */
    function routeconfig($stateProvider) {
        $stateProvider
            .state('StartupForm', {
                url: '/StartupForm',
                controller: 'StartupFormCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/pages/StartupForm/StartupForm.html',
                title: 'StartupForm',
                
                authenticate: true,
                params: { // <-- focusing this one
                    authRoles: ['startup'] // <-- roles allowed for this module
                }

            });
    }
})();
