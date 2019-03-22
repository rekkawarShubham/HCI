(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Home', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Home', {
				url: '/Home',
				controller: 'HomePageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/Home/Home.html',
				title: 'Home',
				
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student'] // <-- roles allowed for this module
				}

			});
	}
})();