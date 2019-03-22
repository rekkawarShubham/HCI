(function () {
    'use strict';

    angular.module('BlurAdmin.pages.InvestorListTable')
        .controller('InvestorListTablePageCtrl', InvestorListTablePageCtrl);

    /** @ngInject */
    function InvestorListTablePageCtrl($scope, toastr, $filter, $http, $timeout) {
        // function createCard(id, imgUrl, company_name, industry, location, sanctionAmt, fundedStrtUp) {

        //     var a = document.createElement("a");
        //     a.setAttribute("href", "index.html?companyid=" + id);
        //     var div = document.createElement("div");
        //     div.setAttribute("class", "card inflow");          
        //     var divC = document.createElement("div");
        //     divC.setAttribute("class", "card-image");
        //     var figure = document.createElement("figure");
        //     figure.setAttribute("class", "image");
        //     var img = document.createElement("img");
        //     img.setAttribute("src", imgUrl)
        //     img.setAttribute("style", "height:90%;")
        //     img.setAttribute("style", "width: 90%;")
        //     figure.appendChild(img);
        //     divC.appendChild(figure);
        //     div.appendChild(divC);
        //     var divk = document.createElement("div");
        //     divk.setAttribute("class", "card-content");
        //     div.setAttribute("class", "card inflow");
        //     var divC = document.createElement("div");
        //     var h1 = document.createElement("h1");
        //     h1.appendChild(document.createTextNode(company_name))
        //     var p1 = document.createElement("p");
        //     p1.appendChild(document.createTextNode("Industry: " + industry))
        //     var p2 = document.createElement("p");
        //     p2.appendChild(document.createTextNode("Location: " + location))
        //     var p3 = document.createElement("p");
        //     p3.appendChild(document.createTextNode("Sanction Amount: " + sanctionAmt))
        //     var p4 = document.createElement("p");
        //     p4.appendChild(document.createTextNode("Funded Startup: " + fundedStrtUp))
        //     divk.appendChild(h1);
        //     divk.appendChild(p1);
        //     divk.appendChild(p2);
        //     divk.appendChild(p3);
        //     divk.appendChild(p4);
        //     div.appendChild(divk);
        //     a.appendChild(div);
        //     return a;
        // }

        // function hello(res){

        //     var companyid = getUrlParameter("companyid")
        //     var section = document.getElementById("insert_companies_here")
        //     var hide_unhide = document.getElementById("hide_unhide")

        //     if (companyid == undefined) {
        //         hide_unhide.style.display = "display";

        //         for (var i = 0; i < res.length; i++) {
        //             let r = res[i];
        //             section.appendChild(createCard(1,
        //                 r.logo_url,
        //                 r.fund_name,r.SEBI_regno , r.location, r. sanctioned_amt, r.no_of_investee_startup));
        //         }
        //     } else {
        //         hide_unhide.style.display = "none";
        //     }
        // }
        // function getUrlParameter(sParam) {
        //     var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        //         sURLVariables = sPageURL.split('&'),
        //         sParameterName,
        //         i;

        //     for (i = 0; i < sURLVariables.length; i++) {
        //         sParameterName = sURLVariables[i].split('=');

        //         if (sParameterName[0] ===+ sParam) {
        //             return sParameterName[1] === undefined ? true : sParameterName[1];
        //         }
        //     }
        // };

        String.prototype.replaceAll = function (search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };

        $scope.see_investor = function (inv_id) {
            console.log(inv_id);
            inv_id = inv_id.replaceAll("/", "_");
            console.log(inv_id);
            window.open('http://mrsuryaa8.localhost.run/investor.html?investor_id=' + inv_id);
        }
        $scope.schemef = function (a) {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'post',
                url: 'http://127.0.0.1:8010/api/getInvestors',
                data: {
                    scheme: a
                }
            })
                .then(function successCallback(response) {
                    console.log(response.data);
                    $scope.smartTableData = response.data;
                    $scope.smartTableData1 = response.data;
                });
        }

        $scope.raise_fund = function(sebi){
         sebi = sebi.replaceAll('/','_')
         console.log(sebi);
         window.location.href = "#/Apply?sebi=" + sebi;

    }

    }
})();