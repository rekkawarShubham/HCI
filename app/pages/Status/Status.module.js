(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Status',[])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Status', {
				url: '/Status',
				controller: 'StatusPageCtrl',
				templateUrl: 'app/pages/Status/Status.html',
                title: 'Status', 
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