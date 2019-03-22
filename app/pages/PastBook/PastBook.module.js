(function () {
	'use strict';

	angular.module('BlurAdmin.pages.PastBook', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('PastBook', {
				url: '/PastBook',
				controller: 'PastBookPageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/PastBook/PastBook.html',
				title: 'PastBook',
				
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student'] // <-- roles allowed for this module
				}

			});
	}
})();