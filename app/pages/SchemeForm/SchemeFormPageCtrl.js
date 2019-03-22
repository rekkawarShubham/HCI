(function () {
    'use strict';
    angular.module('BlurAdmin.pages.SchemeForm')
        .controller('SchemeFormPageCtrl', SchemeFormPageCtrl);

    function SchemeFormPageCtrl($scope, toastr, $http) {
        var scheme = window.location.href.split('?')[1].split('&')[0].split('=')[1];
        console.log(scheme);
        var personal;
        var id_no;
        var address_proof;
        var vm = this;
        vm.questionInfo = {
            question1: "What is Your Gaurantee to pay back Loan",
            question2: "Who is gauranter ??",
            question3: "Do You have land to be Given",
            question4: "Any Past Loan History with bank",
            question5: "References for this kind of loans??"
        };
        vm.businessInfo = {};
        vm.proofInfo ={};

        
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

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                  method: 'post',
                  url: 'http://127.0.0.1:8010/api/bankapi',
                  data: {
                        cin: cin
                  }
            })
                  .then(function successCallback(response) {
                        console.log(response.data);
                        

                              vm.businessInfo = {
                                enterprise_name: response.data[0].enterprise_name,
                                constitution : response.data[0].constitution,
                                email : response.data[0].email,
                                category : response.data[0].category
                              }
                              vm.proofInfo = {
                                    id_proof: response.data[0].id_proof,
                                    address_proof:response.data[0].address_proof
                              };

                  });


        $scope.register1 = function (personalInfo) {
            personal = personalInfo;
            console.log(personal);
        }
        $scope.addDocumentsToStorage = function (file, type) {
            id_no = $scope.vm.proofInfo.id_proof;
            address_proof = $scope.vm.proofInfo.address_proof;
            console.log(id_no);
            firebase.storage().ref().child('STARTUPS/' + type + '/' + id_no).put(file)
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }
        $scope.addDocumentsToStorage1 = function (file, type) {
            address_proof = $scope.vm.proofInfo.address_proof;
            console.log(address_proof);
            firebase.storage().ref().child('STARTUPS/' + type + '/' + address_proof).put(file)
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }

        $scope.storeForm = function (data) {
           
            if (data.ans1.length < 50 || data.ans2.length < 50 || data.ans3.length < 50 || data.ans4.length < 50 || data.ans5.length < 50) {
                toastr.error("All Answer should contain minimum 50 characters");
            }

            else {
                var firestore = firebase.firestore();
                var db = firebase.firestore();
                db.collection("Registered_Startup").doc(cin).collection('loandata').doc(scheme).set(
                    {
                        cin:cin,
                        id_proof: id_no,
                        enterprise_name: personal.enterprise_name,
                        email: personal.email,
                        constitution: personal.constitution,
                        category: personal.category,
                        ans1: data.ans1,
                        ans2: data.ans2,
                        ans3: data.ans3,
                        ans4: data.ans4,
                        ans5: data.ans5,
                        address_proof: address_proof
                    }
                ).then(function () {
                    toastr.success("Applied Successfully");
                    console.log("Document Written Succesfully");
                }).catch(function (error) {
                    toastr.error("Something Went Wrong");
                })
            }
        }
    }
})();