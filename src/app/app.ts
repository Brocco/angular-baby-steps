import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ListManager} from './list/manager/list-manager';

import {provide, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/...', as: 'ListManager', component: ListManager }
])
export default class App{
  constructor() {}
}

bootstrap(App, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
