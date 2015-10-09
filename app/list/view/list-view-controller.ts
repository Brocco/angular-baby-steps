import ListService from '../list-service';

export default class ListViewController{
  constructor(private listService: ListService,
              private $stateParams: ng.ui.IStateService) {
    this.init();
  }

  public listId = this.$stateParams['list'] || 1;
  public items: any[];
  public newItemName: string;

  private init(){
    this.listService.getItems(this.listId)
      .then((items: any[]) => {
        this.items = items;
      });
  }

  public toggleItem (item) {
    this.listService.toggleItem(item, this.listId)
      .then((updatedItem: any) => {
        item.completed = updatedItem.completed;
      });
  }

  public addItem (name) {
    if (!name) { return; }

    this.listService.addItem(this.listId, name)
      .then((newItem) => {
        this.newItemName = '';
        this.items.push(newItem);
      });
  }
}