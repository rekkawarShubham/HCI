(function () {
	'use strict';

	angular.module('BlurAdmin.pages.AddProfessor', ['ngFileUpload'])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('AddProfessor', {
				url: '/AddProfessor',
				controller: 'AddProfessorPageCtrl',
				templateUrl: 'app/pages/AddProfessor/AddProfessor.html',
				title: 'AddProfessor',
				sidebarMeta: {
					icon: 'ion-ios-folder',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['startup'] // <-- roles allowed for this module
				}

			});
	}
})();