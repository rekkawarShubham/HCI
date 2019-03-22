(function () {
	'use strict';

	angular.module('BlurAdmin.pages.NanYang', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('NanYang', {
				url: '/NanYang',
				controller: 'NanYangPageCtrl',
				templateUrl: 'app/pages/NanYang/NanYang.html',
				title: 'Nan Yang',
				sidebarMeta: {
					icon: 'ion-gear-a',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student', 'admin'] // <-- roles allowed for this module
				}

			});
	}
})();