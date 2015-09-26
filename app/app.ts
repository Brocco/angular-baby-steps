var babySteps = angular.module('babySteps', ['ui.router']);

babySteps.controller('listManagerCtrl', ListManagerController);
babySteps.controller('listViewCtrl', ListViewController);
babySteps.service('listService', ListService);

babySteps.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/list/view/1");

  $stateProvider
    .state('list', {
      abstract:true,
      url: '/list',
      templateUrl: 'list/manager/layout.html',
      controller: 'listManagerCtrl',
      controllerAs: 'listMgr'
    })
    .state('list.view', {
      url: '/view/:list',
      templateUrl: 'list/view/view.html',
      controller: 'listViewCtrl',
      controllerAs: 'listViewCtrl'
    });

}]);


// checklist
/*

navigation - nested route(s)
controllers
directive
filter
service/factory
http/rest?

 */