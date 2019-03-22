(function () {
	'use strict';

	angular.module('BlurAdmin.pages.RoomAllocation', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('RoomAllocation', {
				url: '/RoomAllocation',
				controller: 'RoomAllocationPageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/RoomAllocation/RoomAllocation.html',
				title: 'Room Allocation',
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