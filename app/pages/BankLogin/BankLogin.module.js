(function () {
	'use strict';

	angular.module('BlurAdmin.pages.BankLogin',[])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('BankLogin', {
				url: '/BankLogin',
				controller: 'BankLoginPageCtrl',
				templateUrl: 'app/pages/BankLogin/BankLogin.html',
				title: 'BankLogin',
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