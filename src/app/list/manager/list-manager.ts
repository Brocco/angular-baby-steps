import {Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListService} from '../list-service';
import {ListView} from '../view/list-view';

@Component({
  selector: 'list-manager',
  template: `
    <div class="outer">
      <div class="left">
        <div class="container">
          <h1>LISTS</h1>
          <div class="row">
            <form (submit)="addList($event)">
            <input type="text" [(ng-model)]="newListName" placeholder="add new list" />
              <button style="display:none;" type="submit">Add New List</button>
            </form>
          </div>
          <divider></divider>
          <a *ng-for="#list of lists"
           [router-link]="['./ListView', {id: list.id}]"
            class="row list-item"
            [class.selected]="selectedList === list"
            (click)="selectList(list)">
            <div>{{list.name}}</div>
          </a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [NgFor, ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [ListService]
})
@RouteConfig([
  { path: '/list/:id', as: 'ListView', component: ListView}
])
export class ListManager{
  constructor(private listService: ListService, private router: Router){
    console.log('list mgr ctor');
    console.log('listService', listService);
    this.listService.getLists()
      .subscribe((lists) => {
        this.lists = lists || [];
        if (this.lists.length > 0) {
          this.selectedList = this.lists[0];
        }
      });
  }

  public selectedList: any;
  public lists: any[];
  public newListName: string;


  // select a list
  public selectList (list: any) {
    if (list !== this.selectedList) {
      this.selectedList = list;
      this.router.navigate(['ListView', {id: list.id}]);
    }
  }

  // add a new list
  public addList ($event) {
    $event.preventDefault();
    if (!this.newListName) { return; }

    this.listService.addList(this.newListName)
      .subscribe((newList) => {
        this.newListName = '';
        this.lists.push(newList);
        this.selectList(newList);
      });
  }

}