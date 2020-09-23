(function () {
    'use strict';

    angular.module('BlurAdmin.pages.AddProfessor')
        .controller('AddProfessorPageCtrl', AddProfessorPageCtrl);

    /** @ngInject */
    function AddProfessorPageCtrl($scope, $http, toastr) {

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

        var dept;
        var name = "dept" + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                dept = c.substring(name.length, c.length);
            }
        }
        console.log("dept:" + dept);


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

        $scope.getDetails = function (year, div, emp_id, emp_name, question_1,question_2, question_3,question_4,question_5) {

            var year_div = year+div;
            console.log(year_div);
            if (year == undefined || div== undefined || emp_id == undefined || emp_name == undefined || question_1 == undefined || question_2 == undefined 
                || question_3 == undefined || question_4 == undefined || question_5 == undefined){
                toastr.warning("All Fields are Necessary");
            }
            else {
                var firestore = firebase.firestore();
                var settings = {
                    timestampsInSnapshots: true
                };
                firestore.settings(settings);

                var db = firebase.firestore();
                db.collection(dept).doc("TeachingQuestions").collection(year_div).doc(emp_id).set({
                    emp_id : emp_id,
                    emp_name : emp_name,
                    question_1 : question_1,
                    question_2 : question_2,
                    question_3 : question_3,
                    question_4 : question_4,
                    question_5 : question_5
                })
                    .then(function () {
                        toastr.success("Questions Submitted Successfully");
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        toastr.success("Something Went Wrong");
                        console.error("Error writing document: ", error);
                    });
            }
        }
        
    }

})();