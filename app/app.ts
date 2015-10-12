import ListManagerController from './list/manager/list-manager-controller';
import ListViewController from './list/view/list-view-controller';
import ListService from './list/list-service';

require('angular');
require('angular-ui-router');

var managerTemplate = require('./list/manager/layout.html');
var viewTemplate = require('./list/view/view.html');

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
      template: managerTemplate,
      controller: 'listManagerCtrl',
      controllerAs: 'listMgr'
    })
    .state('list.view', {
      url: '/view/:list',
      template: viewTemplate,
      controller: 'listViewCtrl',
      controllerAs: 'listViewCtrl'
    });

}]);

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

// checklist
/*

navigation - nested route(s)
controllers
directive
filter
service/factory
http/rest?

 */