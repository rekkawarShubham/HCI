(function () {
    'use strict';

    angular.module('BlurAdmin.pages.SchemeForm', [])
        .config(routeconfig);
    /** @ngInject */
    function routeconfig($stateProvider) {
        $stateProvider
            .state('SchemeForm', {
                url: '/SchemeForm',
                controller: 'SchemeFormPageCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/pages/SchemeForm/SchemeForm.html',
                title: 'SchemeForm',
                
                authenticate: true,
                params: { // <-- focusing this one
                    authRoles: ['startup'] // <-- roles allowed for this module
                }

            });
    }
})();
