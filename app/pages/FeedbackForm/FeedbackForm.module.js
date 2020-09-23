(function () {
	'use strict';

	angular.module('BlurAdmin.pages.FeedbackForm', ['ngFileUpload'])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('FeedbackForm', {
				url: '/FeedbackForm',
				controller: 'FeedbackFormPageCtrl',
				templateUrl: 'app/pages/FeedbackForm/FeedbackForm.html',
				title: 'FeedbackForm',
				sidebarMeta: {
					icon: 'ion-ios-folder',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['investor'] // <-- roles allowed for this module
				}

			});
	}
})();