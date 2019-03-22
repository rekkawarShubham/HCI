(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Apply')
        .controller('ApplyPageCtrl', ApplyPageCtrl);

    /** @ngInject */
    function ApplyPageCtrl($scope, $http, toastr) {

        var sebi = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        console.log(sebi);
        $scope.sebino = sebi;

       
       var fund_name,inv_logo,st_logo,startup_name;


        var cin;
        var name = "cin" + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                cin = c.substring(name.length, c.length);
            }
        }
        console.log("cin:" + cin);


        var pass;
        var name = "pass" + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                pass = c.substring(name.length, c.length);
            }
        }
        console.log("pass:" + pass);
        var password = pass;

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/getInvestorDetails',
            data: {
                sebi: sebi
            }
        })
            .then(function successCallback(response) {
                console.log(response.data);
                fund_name = response.data[0].fund_name;
                inv_logo = response.data[0].logo_url;
            });


        $http({
            method: 'post',
            url: 'http://127.0.0.1:8010/api/getStartupDetails',
            data: {
                cin: cin
            }
        })
            .then(function successCallback(response) {
                console.log(response.data);
                startup_name = response.data[0].name;
                st_logo = response.data[0].imgurl_src;
            });

        // var cin = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        // var password = window.location.href.split('?')[1].split('&')[1].split('=')[1];
        // console.log(cin);
        // console.log(password);




        $scope.getDetails = function (founder_name, founders, co_founders, fund, caste) {

            if (founder_name == undefined || founders == undefined || co_founders == undefined || fund == undefined || caste == undefined) {
                toastr.warning("All Fields are Necessary");
            }
            else {
                var firestore = firebase.firestore();
                var settings = {
                    timestampsInSnapshots: true
                };
                firestore.settings(settings);

                var db = firebase.firestore();
                db.collection("Registered_Startup").doc(cin).update({"applied" : "200"});
                db.collection("fundapproval").doc(sebi).set({
                    founder_name: founder_name,
                    founders: founders,
                    co_founders: co_founders,
                    req_amt: fund,
                    caste: caste,
                    cin : cin,
                    fund_name : fund_name,
                    inv_id : sebi,
                    inv_logo_url : inv_logo,
                    st_logo_url : st_logo,
                    startup_name : startup_name
                })
                    .then(function () {
                        console.log("Document successfully written!");
                        window.location.href = "#/profile";
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
            }
        }
        $scope.addDocumentsToStorage = function (file, type) {
            firebase.storage().ref().child('STARTUPS/' + type + '/' + cin).put(file)
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }

    }

})();