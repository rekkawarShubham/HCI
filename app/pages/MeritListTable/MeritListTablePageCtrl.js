(function () {
    'use strict';

    angular.module('BlurAdmin.pages.MeritListTable')
        .controller('MeritListTablePageCtrl', MeritListTablePageCtrl);

    /** @ngInject */
    function MeritListTablePageCtrl($scope, $filter, $http, $timeout) {
        var rows;
        var gender = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        var year = window.location.href.split('?')[1].split('&')[1].split('=')[1];
        var branch = window.location.href.split('?')[1].split('&')[2].split('=')[1];

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
                method: 'post',
                url: 'http://127.0.0.1:8004/api/generate',
                data: {
                    gender: gender,
                    year: year,
                    branch: branch
                }
            })
            .then(function successCallback(response) {
                console.log(response.data);
                $scope.smartTableData = response.data;
                $scope.smartTableData1 = response.data;

                rows = response.data;

            });

        $scope.smartTablePageSize = 10;


        $scope.downloadPDF = function () {

            var columns = [{
                    title: "MIS No",
                    dataKey: "mis"
                },
                {
                    title: "Name",
                    dataKey: "name"
                },
                {
                    title: "Category",
                    dataKey: "category"
                },
                {
                    title: "CGPA",
                    dataKey: "cgpa"
                },
                {
                    title: "Backlogs",
                    dataKey: "backlogs"
                },
                {
                    title: "Allotment Type",
                    dataKey: "allotment_type"
                }
            ];

            var doc = new jsPDF('p', 'pt');
            console.log(doc);

            doc.autoTable(columns, rows, {
                styles: {
                    fillColor: [255, 255, 255]
                },
                columnStyles: {
                    id: {
                        fillColor: 0
                    }
                },
                margin: {
                    top: 60
                },
                addPageContent: function (data) {
                    doc.text("Merit List :", 50, 30);
                    doc.text(gender, 200, 30);
                    doc.text(year, 300, 30);
                    doc.text(branch, 400, 30);
                }
            });
            doc.save('meritlist_' + gender + '_' + year + '_' + branch + '.pdf');
        }
    }
})();