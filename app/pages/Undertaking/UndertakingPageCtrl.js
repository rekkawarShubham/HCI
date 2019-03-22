(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Undertaking')
        .controller('UndertakingPageCtrl', UndertakingPageCtrl);

    /** @ngInject */
    function UndertakingPageCtrl($scope, $http, toastr, baProgressModal) {
        $scope.openProgressDialog = baProgressModal.open;

        var misno = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        var password = window.location.href.split('?')[1].split('&')[1].split('=')[1];


        console.log(misno);
        console.log(password);

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
                method: 'post',
                url: 'http://127.0.0.1:8002/apii',
                data: {
                    misno: misno,
                    password: password
                }
            })
            .then(function successCallback(response) {
                console.log(response.data);

                if (response.data[0] === "404") {
                    alert("Wrong MIS NO")
                    window.location.href = "http://127.0.0.1:3000/#/Apply";

                } else {
                    $scope.mis = response.data[0].mis;
                    $scope.branch = response.data[0].branch;
                    $scope.place = response.data[0].category;
                    $scope.date = response.data[0].dob;
                    $scope.parentname = response.data[0].fathername;
                    $scope.mobno = response.data[0].pcontact;
                    $scope.address = response.data[0].address;
                    $scope.email = response.data[0].email;
                }

            });

        $scope.addDocumentsToStorage = function (file, type) {
            firebase.storage().ref().child('141711010/' + type).put(file);
        }


        $scope.storeUndertaking = function (mis, branch, place, date, parentname, mobno, address, email) {

            var firestore = firebase.firestore();
            var settings = { /* your settings... */
                timestampsInSnapshots: true
            };
            firestore.settings(settings);

            var db = firebase.firestore();
            db.collection("Undertaking").doc(mis).set({
                    mis: mis,
                    branch: branch,
                    place: place,
                    date: date,
                    parentname: parentname,
                    mobno: mobno,
                    address: address,
                    email: email
                })
                .then(function () {
                    $scope.showSuccessMsg();
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            $scope.showSuccessMsg = function () {
                toastr.success('Undertaking Submitted !');
            };
            window.location.href = "http://localhost:3000/#/FormWizard?mis=" + misno + "&password=" + password;
        };
    }

})();