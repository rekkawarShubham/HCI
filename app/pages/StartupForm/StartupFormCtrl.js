(function () {
      'use strict';
      angular.module('BlurAdmin.pages.StartupForm')
            .controller('StartupFormCtrl', StartupFormCtrl);

      function StartupFormCtrl($scope, toastr, $http) {
            var output = {};
            var vertical;
            var final_otp;
            var cin = window.location.href.split('?')[1].split('&')[0].split('=')[1];
            console.log(cin + "hello");

            var personal, startup, funding_info;
            var vm = this;

            vm.verification = {};
            vm.personalInfo = {};
            vm.startupInfo = {};
            vm.shipment = {};

            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                  method: 'post',
                  url: 'http://127.0.0.1:8010/api/get_company_details',
                  data: {
                        cin: cin
                  }
            })
                  .then(function successCallback(response) {
                        console.log(response.data.result);
                        if (response.data.result == 200) {
                              console.log("Login SuccessFull");
                              toastr.success("Login SuccessFull");

                              vm.verification = {
                                    email: response.data['Email Id']
                              }
                              vm.personalInfo = {
                                    rno: response.data['Registration Number'],
                                    email: response.data['Email Id'],
                                    roc: response.data['ROC Code'],
                              };

                              vm.startupInfo = {
                                    startupname: response.data['Company Name'],
                                    date: response.data['Date of Incorporation'],
                                    auth_capital: response.data['Authorised Capital(Rs)'],
                                    paid_up: response.data['Paid up Capital(Rs)'],
                                    address: response.data['Registered Address']
                              }
                        }
                        else if (response.data.result == 404) {
                              console.log("Login UnsuccessFull");
                              toastr.error("Login UnsuccessFull");
                        }
                        else {
                              toastr.error("Login UnsuccessFull");
                        }
                  });

            vm.arePersonalInfoPasswordsEqual = function () {
                  return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
            };


            $scope.register1 = function (personalInfo) {
                  personal = personalInfo;
                  var val = personal.link_url;
                  if (/(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(val)) {
                        toastr.success('valid Linkedin URL');
                  } else {
                        toastr.error('Not valid Linkedin URL');
                  }
            }

            $scope.register2 = function (startupInfo) {
                  startup = startupInfo;
                  vertical = startupInfo.vsector.label;

            }
            $scope.register3 = function (funding) {
                  funding_info = funding;
            }

            $scope.generateOtp = function (email) {
                  console.log(email);
                  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                  $http({
                        method: 'post',
                        url: 'http://127.0.0.1:8010/api/verify_email',
                        data: {
                              email: email
                        }
                  })
                        .then(function successCallback(response) {
                              final_otp = response.data;
                              console.log(final_otp);
                        });
            }

            $scope.verify = function (otp) {
                  console.log(otp);
                  console.log(final_otp);

                  if (otp != final_otp) {
                        toastr.error("Wrong OTP");
                  }
                  else {
                        toastr.success("Verified Successfully");
                        delete startup['vsector'];
                        startup['vsector'] = vertical;
                        function jsonConcat(o1, o2) {
                              for (var key in o2) {
                                    o1[key] = o2[key];
                              }
                              return o1;
                        }
                        //Form Wizard Concat
                        output = jsonConcat(output, personal);
                        output = jsonConcat(output, startup);
                        output = jsonConcat(output, funding_info);
                        output['cin'] = cin;

                        if (funding_info.password != funding_info.confirmPassword) {
                              toastr.warning("Password and Confirmed Password Must be Same");
                        }
                        else {
                              var firestore = firebase.firestore();
                              var db = firebase.firestore();
                              db.collection("Registered_Startup").doc(cin).set(
                                    output
                              ).then(function () {
                                    toastr.success("Profile Saved Successfully");
                                    console.log("Document Written Succesfully");
                                    window.location.href = "#/profile?cin=" + cin + "&password=" + funding_info.password;

                              }).catch(function (error) {
                                    toastr.error("Something Went Wrong");
                              })
                        }
                  }
            }
            // $scope.register3 = function (shipment) {
            //       delete startup['vsector'];
            //       startup['vsector'] = vertical;
            //       function jsonConcat(o1, o2) {
            //             for (var key in o2) {
            //                   o1[key] = o2[key];
            //             }
            //             return o1;
            //       }
            //       //Form Wizard Concat
            //       output = jsonConcat(output, personal);
            //       output = jsonConcat(output, startup);
            //       output = jsonConcat(output, shipment);
            //       output['cin'] = cin;

            //       if (shipment.password != shipment.confirmPassword) {
            //             toastr.warning("Password and Confirmed Password Must be Same");
            //       }
            //       else if(shipment.otp == undefined)
            //       {
            //             toastr.warning("Enter otp");
            //       }
            //       else {
            //             var firestore = firebase.firestore();
            //             var db = firebase.firestore();
            //             db.collection("Registered_Startup").doc(cin).set(
            //                   output
            //             ).then(function () {
            //                   toastr.success("Profile Saved Successfully");
            //                   console.log("Document Written Succesfully");
            //                   window.location.href = "#/profile?cin=" + cin +"&password=" +shipment.password;

            //             }).catch(function (error) {
            //                   toastr.error("Something Went Wrong");
            //             })
            //       }
            // }
            vm.disabled = undefined;
            vm.groupedItem = {};
            vm.groupedSelectItems = [
                  { label: 'Advertising - AdTech', value: 1, group: 'Advertising' },
                  { label: 'Aeronautics/Aerospace - Drones', value: 2, group: 'Aeronautics/Aerospace' },
                  { label: 'Advertising - Online Classified', value: 3, group: 'Advertising' },
                  { label: 'Agriculture - DailyFarming', value: 4, group: 'Agriculture' },
                  { label: 'Agriculture - Organic Agriculture', value: 5, group: 'Agriculture' },
                  { label: 'Agriculture - Agri-Tech', value: 6, group: 'Agriculture' },
                  { label: 'AI - Machine Learning', value: 7, group: 'AI' },
                  { label: 'AI - NLP', value: 8, group: 'AI' },
                  { label: 'Analytics - Business Intelligence', value: 9, group: 'Analytics' },
                  { label: 'Communication - Telecom', value: 10, group: 'Communication' },
                  { label: 'Communication - Messaging', value: 11, group: 'Communication' },
                  { label: 'Communication - E-mail', value: 12, group: 'Communication' },
                  { label: 'Events - Weddings', value: 13, group: 'Events' },
                  { label: 'Events - Event Management', value: 14, group: 'Events' },
            ];

      }
})();