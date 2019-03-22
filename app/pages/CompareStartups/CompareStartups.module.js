(function () {
    'use strict';

    angular.module('BlurAdmin.pages.CompareStartups', [])
        .config(routeconfig);
    /** @ngInject */
    function routeconfig($stateProvider) {
        $stateProvider
            .state('CompareStartups', {
                url: '/CompareStartups',
                controller: 'CompareStartupsPageCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/pages/CompareStartups/CompareStartups.html',
                title: 'Compare Startups',
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
