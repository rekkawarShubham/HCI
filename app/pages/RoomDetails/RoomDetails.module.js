(function () {
	'use strict';

	angular.module('BlurAdmin.pages.RoomDetails', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('RoomDetails', {
				url: '/RoomDetails',
				controller: 'RoomDetailsPageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/RoomDetails/RoomDetails.html',
				title: 'Room Details',
				sidebarMeta: {
					icon: 'ion-gear-a',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['admin'] // <-- roles allowed for this module
				}

			});
	}
})();