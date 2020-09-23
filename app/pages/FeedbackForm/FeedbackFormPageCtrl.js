(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FeedbackForm')
        .controller('FeedbackFormPageCtrl', FeedbackFormPageCtrl);

    /** @ngInject */
    function FeedbackFormPageCtrl($scope, $uibModal, $timeout, toastr, $http) {
        
        var roll;
    var name = "roll" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        roll = c.substring(name.length, c.length);
      }
    }
    console.log("roll:"+roll);

    var year;
    var name = "year" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        year = c.substring(name.length, c.length);
      }
    }
    console.log("year:"+year);

    var year_div;
    var name = "yeardiv" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        year_div = c.substring(name.length, c.length);
      }
    }
    console.log("yeardiv:"+year_div);

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
    console.log("dept:"+dept);


        
        fetch_data();
        function fetch_data() {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'https://us-central1-financing-platform.cloudfunctions.net/pictFeedback/api/get_questions',
                data: {
                    dept : dept,
                    year_div : year_div
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data);
                    $scope.smartTableData = response.data;
                    $scope.smartTableData1 = response.data;
                });
        }
        $scope.approve_fund = function (content) {
            if (content.inlineRadioOptions1 == undefined || content.inlineRadioOptions2 == undefined
                || content.inlineRadioOptions_3 == undefined || content.inlineRadioOptions_4 == undefined
                || content.inlineRadioOptions_5 == undefined)
                toastr.warning("Please Give Complete Feedback");

            else {
                console.log(content.emp_id,content.emp_name,content.inlineRadioOptions1, content.inlineRadioOptions2, content.inlineRadioOptions_3, content.inlineRadioOptions_4, content.inlineRadioOptions_5);
                var empid = content.emp_id;
                var firestore = firebase.firestore();
                var db = firebase.firestore();
                var settings = { /* your settings... */
                    timestampsInSnapshots: true
                };
                firestore.settings(settings);
    
                db.collection(dept).doc("Teacher_FeedBack").collection(empid).doc(year).collection(year_div).doc(roll).set({
                    emp_id : empid,
                    explanation_quality : content.inlineRadioOptions1,
                    behavior_quality : content.inlineRadioOptions2,
                    voice_quality : content.inlineRadioOptions_3,
                    lecture_timing : content.inlineRadioOptions_4,
                    overall_teaching : content.inlineRadioOptions_5
                }).then(function(){
                    console.log("Document written successfully!");
                });
            }

        }




        $scope.removeStartup = function (item) {
            var firestore = firebase.firestore();
            var settings = { /* your settings... */
                timestampsInSnapshots: true
            };
            firestore.settings(settings);


            db.collection("fundapproval").doc(item.cin).delete().then(function () {
                location.reload();
                console.log("Document successfully deleted!");
                $scope.showErrorMsg();
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        };
    }

})();