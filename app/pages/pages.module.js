/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
    // 'BlurAdmin.pages.MeritList',
    //'BlurAdmin.pages.Apply',
    'BlurAdmin.pages.FormWizard',
    'BlurAdmin.pages.Login',
    'BlurAdmin.pages.PastReserve',
    // 'BlurAdmin.pages.AdmissionProcess',
    // 'BlurAdmin.pages.VerifyStudents',
    // 'BlurAdmin.pages.StudentGrievance',
    // 'BlurAdmin.pages.ViewGrievance',
    // 'BlurAdmin.pages.RoomAllocation',
    //'BlurAdmin.pages.RoomAllocationForm',
    // 'BlurAdmin.pages.RoomDetails',
    // 'BlurAdmin.pages.MeritListTable',
    // 'BlurAdmin.pages.ApproveMisAccess',
    // 'BlurAdmin.pages.Undertaking',
    'BlurAdmin.pages.PaymentProcedure',
    //'BlurAdmin.pages.StudentStatistics',
    //'BlurAdmin.pages.Register',
    'BlurAdmin.pages.PastBook',
    'BlurAdmin.pages.Home',
    'BlurAdmin.pages.FloorPlan',
    'BlurAdmin.pages.Landing',
    'BlurAdmin.pages.RegisterInvestor',
    'BlurAdmin.pages.StartupForm',
    'BlurAdmin.pages.StartupLogin',
    //'BlurAdmin.pages.Status',
    //'BlurAdmin.pages.CompareStartups',
    //'BlurAdmin.pages.ApproveFund',
    'BlurAdmin.pages.InvestorLogin',
    'BlurAdmin.pages.investorprofile',
    //'BlurAdmin.pages.InvestorListTable',
    'BlurAdmin.pages.StartupProfile',
    'BlurAdmin.pages.SchemeForm',
    'BlurAdmin.pages.BankLogin',
    'BlurAdmin.pages.BankScheme',
    'BlurAdmin.pages.FeedbackForm',
    'BlurAdmin.pages.AddProfessor',
    //'BlurAdmin.pages.Schemes',
    //'BlurAdmin.pages.StartupListTable',
    //'BlurAdmin.pages.Approve',
    
  ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/Landing');
    
        // baSidebarServiceProvider.addStaticItem({
        //   title: 'Pages',
        //   icon: 'ion-document',
        //   subMenu: [{
        //     title: 'Sign In',
        //     fixedHref: 'auth.html',
        //     blank: true
        //   }, {
        //     title: 'Sign Up',
        //     fixedHref: 'reg.html',
        //     blank: true
        //   }, {
        //     title: 'User Profile',
        //     stateRef: 'profile'
        //   }, {
        //     title: '404 Page',
        //     fixedHref: '404.html',
        //     blank: true
        //   }]
        // });
        // baSidebarServiceProvider.addStaticItem({
        //   title: 'Menu Level 1',
        //   icon: 'ion-ios-more',
        //   subMenu: [{
        //     title: 'Menu Level 1.1',
        //     disabled: true
        //   }, {
        //     title: 'Menu Level 1.2',
        //     subMenu: [{
        //       title: 'Menu Level 1.2.1',
        //       disabled: true
        //     }]
        //   }]
        // });
    
  }

})();