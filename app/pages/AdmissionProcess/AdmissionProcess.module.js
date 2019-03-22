(function () {
	'use strict';

	angular.module('BlurAdmin.pages.AdmissionProcess', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('AdmissionProcess', {
				url: '/AdmissionProcess',
				controller: 'AdmissionProcessPageCtrl',
				templateUrl: 'app/pages/AdmissionProcess/AdmissionProcess.html',
				title: 'Admission Process',
				sidebarMeta: {
					icon: 'ion-gear-a',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['z'] // <-- roles allowed for this module
				}

			});
	}
})();