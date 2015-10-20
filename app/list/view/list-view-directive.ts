import controller from './list-view-controller';

var template = require('./view.html');


export default function ListViewDirective(): ng.IDirective {
  return {
    bindToController: true,
    controller: controller,
    controllerAs: 'listViewCtrl',
    restrict: 'E',
    template: template
  };
}