(function () {

    'use strict';
    angular.module('BlurAdmin.pages.CompareStartups')
        .controller('CompareStartupsPageCtrl', CompareStartupsPageCtrl);
    /** @ngInject */

    function CompareStartupsPageCtrl($scope, $http, toastr) {
        var vm = this;
        vm.disabled = undefined;
        $scope.first = function () {
            var startup_name = $scope.startup1;
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://127.0.0.1:8010/api/compare_startups',
                data: {
                    s_name: startup_name
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data.result);
                    if (response.data.result == 200) {
                        console.log(response.data);
                        $scope.category_of_startup1 = response.data.category;
                        $scope.patent_startup1 = response.data.no_of_patents;
                        $scope.revenue_startup1 = response.data.revenue;
                        $scope.location_startup1 = response.data.location;
                        $scope.startup_no1 = response.data.imgurl;
                        console.log("Login SuccessFull");
                    }
                    else if (response.data.result == 404) {
                        console.log("Login UnsuccessFull");
                    }
                    else {
                        toastr.error("Something Went Wrong");
                    }

                });

        }

        $scope.second = function () {
            var startupname = $scope.startup2;

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://127.0.0.1:8010/api/compare_startups',
                data: {
                    s_name: startupname
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data.result);
                    if (response.data.result == 200) {
                        console.log(response.data);
                        $scope.category_of_startup2 = response.data.category;
                        $scope.patent_startup2 = response.data.no_of_patents;
                        $scope.revenue_startup2 = response.data.revenue;
                        $scope.location_startup2 = response.data.location;
                        $scope.startup_no2 = response.data.imgurl;
                        console.log("Login SuccessFull");
                    }
                    else if (response.data.result == 404) {
                        console.log("Login UnsuccessFull");
                    }
                    else {
                        toastr.error("Something Went Wrong");
                    }
                });
        }

        $scope.compare = function () {
            var startup1 = $scope.startup1;
            var startup2 = $scope.startup2;
            var patent_startup_1 = $scope.patent_startup1;
            var patent_startup_1 = $scope.patent_startup2;
            if (startup1 == undefined || startup2 == undefined) {
                toastr.warning("Select Startup");
            }
            else if (startup1 == startup2) {
                toastr.warning("Both Startup Must be different");
            }
            else {
                if ($scope.patent_startup1 > $scope.patent_startup2) {
                    toastr.success("Startup " + startup1 + "is good for investment");
                }
                else if ($scope.patent_startup1 < $scope.patent_startup2) {
                    toastr.success("Startup " + startup2 + "is good for investment");
                }
                else{
                    toastr.success("Both are Average Same On various basis");
                }
            }
        }

        $scope.details_startup1 = function () {
            var startup;
            startup = $scope.startup1;
            console.log(startup);
            window.location.href = "#/StartupProfile?startupname=" + startup;
        }
        $scope.details_startup2 = function () {
            var startup;
            startup = $scope.startup2;
            console.log(startup);
            window.location.href = "#/StartupProfile?startupname=" + startup;
        }


    }


})();