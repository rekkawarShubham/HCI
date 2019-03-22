(function () {
	'use strict';

	angular.module('BlurAdmin.pages.RegisterInvestor',[])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('RegisterInvestor', {
				url: '/RegisterInvestor',
				controller: 'RegisterInvestorPageCtrl',
				templateUrl: 'app/pages/RegisterInvestor/RegisterInvestor.html',
				title: 'Investor', 
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['investor'] // <-- roles allowed for this module
				}
			});

	}
})();