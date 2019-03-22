(function () {
	'use strict';

	angular.module('BlurAdmin.pages.StartupLogin',[])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('StartupLogin', {
				url: '/StartupLogin',
				controller: 'StartupLoginPageCtrl',
				templateUrl: 'app/pages/StartupLogin/StartupLogin.html',
				title: 'Startup', 
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['startup'] // <-- roles allowed for this module
				}
			});

	}
})();