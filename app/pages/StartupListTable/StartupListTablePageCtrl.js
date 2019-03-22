(function () {
    'use strict';

    angular.module('BlurAdmin.pages.StartupListTable')
        .controller('StartupListTablePageCtrl', StartupListTablePageCtrl);


    // function populateStartUp($scope,startupDocList){
    //     // console.log(startupDocList);    
    //     console.log($scope.smartTableData1);
          
    // }

    /** @ngInject */
    function StartupListTablePageCtrl($scope, toastr, $filter, $http, $timeout) {
        
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
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
        var newid =  cin.replaceAll('_','/');

        // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({
            method: 'get',
            url: 'http://mrsuryaa4.localhost.run/rec_for_invs?investor_id='+ newid
        })
            .then(function successCallback(response) {
                console.log(response.data);

                var firestore = firebase.firestore();
                var settings = { /* your settings... */
                    timestampsInSnapshots: true
                };
                firestore.settings(settings);
                var db = firebase.firestore();

                
                var invesmentsIn = response.data;
                var startupDocList = []
                var count = 0;
                for (var i = 0; i < invesmentsIn.length; i++) {
                    var investorRef = db.collection('startups').doc(invesmentsIn[i].cin)
                    investorRef.get().then(function (doc) {
                        if (doc.exists) {
                            startupDocList.push(doc.data());
                            count++;
                            if (count == invesmentsIn.length){
                                for(var i=0;i<startupDocList.length;i++){
                                    startupDocList[i]['score'] = invesmentsIn[i].score;
                                }

                                $scope.smartTableData1 = startupDocList
                                $scope.smartTableData = startupDocList
                                console.log(startupDocList,"hh");
                                
                            }
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch(function (error) {
                        console.log("Error getting document:", error);
                    });
                }

            });

            $scope.view_startup = function(name){
                console.log(name);
                window.location.href = "#/StartupProfile?startupname=" + name;

            }
    }
})();