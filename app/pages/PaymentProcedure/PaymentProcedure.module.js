(function () {
	'use strict';

	angular.module('BlurAdmin.pages.PaymentProcedure', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('PaymentProcedure', {
				url: '/PaymentProcedure',
				controller: 'PaymentProcedurePageCtrl',
				templateUrl: 'app/pages/PaymentProcedure/PaymentProcedure.html',
				title: 'Payment Procedure',
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student'] // <-- roles allowed for this module
				}

			});

	}
})();