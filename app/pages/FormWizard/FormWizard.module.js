var config = {
      apiKey: "AIzaSyDEGj8eTkcO0MAuwhqNiZKubZ7KTTGT_iY",
      authDomain: "financing-platform.firebaseapp.com",
      databaseURL: "https://financing-platform.firebaseio.com",
      projectId: "financing-platform",
      storageBucket: "financing-platform.appspot.com",
      messagingSenderId: "401409193328"
    };
	firebase.initializeApp(config);
	
(function () {
	'use strict';
	angular.module('BlurAdmin.pages.FormWizard', ['ngFileUpload'])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('FormWizard', {
				url: '/FormWizard',
				controller: 'FormWizardPageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/FormWizard/FormWizard.html',
				title: 'FormWizard',
				sidebarMeta: {
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['z'] // <-- roles allowed for this module
				}

			});
	}
})();