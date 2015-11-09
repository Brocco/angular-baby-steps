import {Component, NgFor} from 'angular2/angular2';
// import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {ListService} from '../list-service';


@Component({
  selector: 'list-manager',
  template: `
    <div class="outer">
      <div class="left">
        <div class="container">
          <h1>LISTS</h1>
          <div class="row">
            <form (submit)="addList(newListName)">
            <input type="text" #newListName placeholder="add new list" />
              <button style="display:none;" type="submit">Add New List</button>
            </form>
          </div>
          <divider></divider>
          <a *ng-for="#list of lists"
            ui-sref="list.view({list:list.id})"
            class="row list-item"
            [class.selected]="selectedList === list"
            (click)="selectList(list)">
            <div>{{list.name}}</div>
          </a>
        </div>
      </div>
      <!--<div ui-view></div>-->
    </div>
  `,
  directives: [NgFor],
  providers: [ListService]
})
// @RouteConfig([
//   // { path: '/:id', as: 'List', component: List}
// ])
export class ListManager{
  constructor(private listService: ListService){
    console.log('list mgr ctor');
    console.log('listService', listService);
    // this.lists = [{id: 1, name: 'da name'}];
    this.listService.getLists()
      .subscribe((x) => {
        this.lists = x || [];
        if (this.lists.length > 0) {
          this.selectedList = this.lists[0];
        }
      });
  }

  public selectedList: any;
  public lists: any[];

  // constructor(private listService: ListService,
  //             private $state: ng.ui.IStateService,
  //             private $timeout: ng.ITimeoutService) {
  //   this.init();
  // }

//   public lists = [];
//   public listId: number = this.$state.params['list'] || 1;
//   public newListName: string = '';

//   private init() {
//     this.listService.getLists()
//       .then((lists) => {
//         console.log('lists', lists);
//         this.lists = lists;
//       }, function (err) {
//         console.log('get lists error', err);
//       });

//     this.listService.getListById(this.listId)
//       .then((list) => {
//         for (var i = 0; i < this.lists.length; i++) {
//           if (this.lists[i].id === this.listId) {
//             this.selectList(this.lists[i]);
//           }
//         }
//       });
//   }


  // select a list
  public selectList (list: any) {
    if (list !== this.selectedList) {
      this.selectedList = list;
      // this.$state.go('list.view', { list: list.id });
    }
  }

//   // add a new list
//   public addList (name) {
//     if (!name) { return; }

//     this.listService.addList(name)
//       .then((newList) => {
//         this.newListName = '';
//         this.lists.push(newList);
//         this.selectList(newList);
//       });
//   }

}