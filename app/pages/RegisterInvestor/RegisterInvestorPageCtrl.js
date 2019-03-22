(function () {
    'use strict';

    angular.module('BlurAdmin.pages.RegisterInvestor')
        .controller('RegisterInvestorPageCtrl', RegisterInvestorPageCtrl);

    /** @ngInject */
    function RegisterInvestorPageCtrl($scope, $http, toastr, $timeout) {
      var vm = this;
      vm.disabled = undefined;

        vm.withDeleteItem = {};
            vm.withDeleteSelectItems = [
              {label: 'Option 1', value: 1},
              {label: 'Option 2', value: 2},
              {label: 'Option 3', value: 3},
              {label: 'Option 4', value: 4},
              {label: 'Option 5', value: 5},
              {label: 'Option 6', value: 6},
              {label: 'Option 7', value: 7},
              {label: 'Option 8', value: 8}
            ];

        $scope.storeDetails = function (name, email, url, city, mobno, represent, i_name, i_url, pass, cpass) {
            
        //   for(var i=0;i<seleitem.length ;i++)   
        //   toastr.success(seleitem[i].label[i].value);

            if (represent == undefined) {
                toastr.warning("Who are you representing ?")
            }
            else if (pass != cpass) {
                toastr.error("Password and Confirm Password must be same")
            }
            else {
                toastr.success(name + email + url + city + mobno + represent + i_name + i_url + pass)
                var mail = email;
                toastr.success(mail)
                var firestore = firebase.firestore();
                var settings = { 
                    timestampsInSnapshots: true
                };
                firestore.settings(settings);

                var db = firebase.firestore();
                db.collection("Registered_Investor").doc(mail).set({
                    email_id: email,
                    name: name,
                    linkedin_url: url,
                    city: city,
                    mobno: mobno,
                    representation: represent,
                    institution_name: i_name,
                    institution_url: i_url,
                    password: pass,
                    interest_priority_1: $scope.point_of_interest1,
                    interest_priority_2: $scope.point_of_interest2,
                    interest_priority_3: $scope.point_of_interest3,
                    interest_priority_4: $scope.point_of_interest4,
                    interest_priority_5: $scope.point_of_interest5,
                    interest_priority_6: $scope.point_of_interest6,
                })
                    .then(function () {
                        console.log("Document successfully written!");
                        window.location.href = "#/Login";
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
            }

        }
    }

})();