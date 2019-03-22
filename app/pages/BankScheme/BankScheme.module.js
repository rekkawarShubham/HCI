(function () {
	'use strict';

	angular.module('BlurAdmin.pages.BankScheme',[])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('BankScheme', {
				url: '/BankScheme',
				controller: 'BankSchemePageCtrl',
				templateUrl: 'app/pages/BankScheme/BankScheme.html',
				title: 'BankScheme',
				sidebarMeta: {
					icon: 'ion-ios-folder',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['bank'] // <-- roles allowed for this module
				}

			});
	}
})();