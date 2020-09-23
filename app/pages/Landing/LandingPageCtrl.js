(function () {
    'use strict';
    angular.module('BlurAdmin.pages.Landing')
        .controller('LandingPageCtrl', LandingPageCtrl);

    function LandingPageCtrl($scope, toastr, baConfig) {


        var layoutColors = baConfig.colors;
        var tp = []

        $scope.s_role = function () {
            window.location.href = '#/StartupLogin';
        }
        $scope.i_role = function () {
            window.location.href = '#/InvestorLogin';
        }
        $scope.loaddata = function (event) {
            var button = event.currentTarget;
            var sector = angular.element(button).text();
            if (sector == "Automobile") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [20, 20, 15, 25, 43, 15, 24, 32, 12, 32];
            }
            if (sector == "Aviation") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [35, 13, 15, 12, 32, 22, 12, 20, 40, 15];
            }
            if (sector == "Chemicals") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [15, 25, 43, 20, 20, 15, 24, 32, 12, 32];
            }
            if (sector == "Defence Manufacture") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [20, 40, 15, 35, 13, 15, 12, 32, 22, 12];

            }
            if (sector == "Construction") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [20, 20, 15, 25, 43, 15, 24, 32, 12, 32];
            }
            if (sector == "Capital Goods") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [20, 40, 15, 12, 32, 15, 35, 13, 22, 12];

            }
            if (sector == "Food Processing") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [20, 43, 15, 24, 32, 20, 15, 25, 12, 32];
            }
            if (sector == "Healthcare") {
                $scope.labels = ["Computer", "Mechanical", "Civil", "Electrical", "Electronics and Telecommunication", " IT", "Production", "Planning", "Metallurgy", "Instrumentation"];
                $scope.data = [35, 13, 15, 12, 32, 22, 12, 20, 40, 15];
            }
        }



        $scope.options = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: layoutColors.defaultText
                }
            }
        };

        $scope.changeData = function () {
            $scope.data = shuffle($scope.data);
        };

        function shuffle(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) { }
            return o;
        }

    }
})();