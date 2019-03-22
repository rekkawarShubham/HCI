(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Undertaking', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Undertaking', {
				url: '/Undertaking',
				controller: 'UndertakingPageCtrl',
				templateUrl: 'app/pages/Undertaking/Undertaking.html',
				title: 'Undertaking',
				sidebarMeta: {
					icon: 'ion-gear-a',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student'] // <-- roles allowed for this module
				}

			});
	}
})();