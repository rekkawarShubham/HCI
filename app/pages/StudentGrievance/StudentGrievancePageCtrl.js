(function () {
    'use strict';

    angular.module('BlurAdmin.pages.StudentGrievance')
        .controller('StudentGrievancePageCtrl', StudentGrievancePageCtrl);

    /** @ngInject */
    function StudentGrievancePageCtrl($scope, $http, toastr) {

        var vm = this;
        vm.disabled = undefined;
        vm.standardItemBranch = {};
        vm.standardSelectItemsBranch = [{
                label: 'Computer',
                value: 1
            },
            {
                label: 'Mechanical',
                value: 2
            },
            {
                label: 'IT',
                value: 3
            },
            {
                label: 'Instrumentation',
                value: 4
            },
            {
                label: 'Civil',
                value: 5
            },
            {
                label: 'Production',
                value: 6
            },
            {
                label: 'Electronics & Telecommunication',
                value: 7
            },
            {
                label: 'Planning',
                value: 8
            },
            {
                label: 'Electrical',
                value: 9
            },
            {
                label: 'Metallurgy',
                value: 10
            },

        ];

        $scope.storeGrievance = function (name, mis, appliedyear, status, grievance, branch) {

            var firestore = firebase.firestore();
            var settings = { /* your settings... */
                timestampsInSnapshots: true
            };
            firestore.settings(settings);

            var db = firebase.firestore();
            db.collection("Grievance").doc(mis).set({
                    mis: mis,
                    name: name,
                    appliedyear: appliedyear,
                    branch: branch,
                    status: status,
                    grievance: grievance
                })
                .then(function () {
                    $scope.showSuccessMsg();
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            $scope.showSuccessMsg = function () {
                toastr.success('Grievance Submitted !');
            };

        };


    }

})();