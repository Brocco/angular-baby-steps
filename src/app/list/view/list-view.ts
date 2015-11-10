import {Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {ListService} from '../list-service';

@Component({
  selector: 'list-view',
  template: `
  <h1>list view </h1>
    <div class="right">
      <div class="container">
        <div class="row" *ng-for="#item of items">
          <span (click)="toggleItem(item)" [class.completed]="item.completed">{{item.name}}</span>
        </div>
        <form (submit)="addItem($event)">
          <input type="text" [(ng-model)]="newItemName" placeholder="add new item" />
          <button style="display:none;" type="submit"></button>
        </form>
      </div>
    </div>
  `,
  directives: [NgFor, FORM_DIRECTIVES],
  providers: [ListService]
})
export class ListView {
  constructor(private routeParams: RouteParams,
              private listService: ListService) {
                this.listId = routeParams.get('id');
                this.init();
  }

  public listId;
  public items: any[];
  public newItemName: string;

  private init(){
    this.listService.getItems(this.listId)
      .subscribe((items) => {
        this.items = items;
      });
  }

  public toggleItem (item) {
    this.listService.toggleItem(item, this.listId)
      .subscribe((updatedItem: any) => {
        item.completed = updatedItem.completed;
      });
  }

  public addItem ($event) {
    $event.preventDefault();
    if (!this.newItemName) { return; }

    this.listService.addItem(this.listId, this.newItemName)
      .subscribe((newItem) => {
        this.newItemName = '';
        this.items.push(newItem);
      });
  }
}