(function () {
    'use strict';

    angular.module('BlurAdmin.pages.MeritList')
        .controller('MeritListPageCtrl', MeritListPageCtrl);

    /** @ngInject */
    function MeritListPageCtrl($scope, $filter, $http, $timeout) {

        $scope.generateListAccToBranch = function (gender, year, branch) {

            console.log(gender, year, branch);
            window.location.href = "http://localhost:3000/#/MeritListTable?gender=" + gender.value + "&year=" + year.value + "&branch=" + branch.label;
        }

        var vm = this;
        vm.disabled = undefined;

        vm.standardItemYear = {};

        vm.standardSelectItemsYear = [{
                label: 'First Year B.Tech',
                value: 'FY'
            },
            {
                label: 'Second Year B.Tech',
                value: 'SY'
            },
            {
                label: 'Third Year B.Tech',
                value: 'TY'
            },
            {
                label: 'Final Year B.Tech',
                value: 'BTech'
            },
        ];

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


        vm.standardItemGender = {};
        vm.standardSelectItemsGender = [{
                label: 'Girls',
                value: 'girls'
            },
            {
                label: 'Boys',
                value: 'boys'
            },
        ];

    }
})();