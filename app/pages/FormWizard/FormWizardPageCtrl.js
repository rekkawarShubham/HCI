(function () {
  'use strict';

  angular.module('BlurAdmin.pages.FormWizard')
    .controller('FormWizardPageCtrl', FormWizardPageCtrl);

  /** @ngInject */
  function FormWizardPageCtrl($scope,toastr, $http, baProgressModal) {

    $scope.storeDetails = function (name,email,url,city,mobno,represent,i_name,i_url,p1,p2,p3,p4,p5,p6) 
    {
          if (name==undefined || email==undefined || url==undefined || city==undefined || mobno==undefined
             || represent==undefined || i_name==undefined || i_url==undefined || p1==undefined || p2==undefined
             || p3==undefined || p4==undefined || p5==undefined || p6==undefined) {
              toastr.warning("Enter all the fields!!!   ")
           }

          else {
              toastr.success(name + email + url + city + mobno + represent + i_name + i_url)
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
                  interest_priority_1: p1,
                  interest_priority_2: p2,
                  interest_priority_3: p3,
                  interest_priority_4: p4,
                  interest_priority_5: p5,
                  interest_priority_6: p6
              })
                  .then(function () {
                      console.log("Document successfully written!");
                      toastr.success("Press Next for Proceeding")
                  })
                  .catch(function (error) {
                      console.error("Error writing document: ", error);
                  });
          }

      }
  }

})();