import ListManagerDirective from './list/manager/list-manager-directive';
import ListViewDirective from './list/view/list-view-directive';
import ListService from './list/list-service';

require('angular');
require('angular-ui-router');

var babySteps = angular.module('babySteps', ['ui.router']);

babySteps.directive('listManager', ListManagerDirective);
babySteps.directive('listView', ListViewDirective);
babySteps.service('listService', ListService);

babySteps.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/list/view/1");

  $stateProvider
    .state('list', {
      abstract:true,
      url: '/list',
      template: '<list-manager></list-manager>'
    })
    .state('list.view', {
      url: '/view/:list',
      template: '<list-view></list-view>'
    });

}]);
