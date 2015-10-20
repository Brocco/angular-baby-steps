import controller from './list-manager-controller';

var template = require('./layout.html');


export default function ListManagerDirective(): ng.IDirective {
  return {
    bindToController: true,
    controller: controller,
    controllerAs: 'listMgr',
    restrict: 'E',
    template: template
  };
}