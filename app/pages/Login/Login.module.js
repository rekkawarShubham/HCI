(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Login', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Login', {
				url: '/Login',
				controller: 'LoginPageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/Login/Login.html',
				title: 'Login',
				sidebarMeta: {
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['z'] // <-- roles allowed for this module
				}

			});
	}
})();