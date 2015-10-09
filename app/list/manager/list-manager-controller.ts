import ListService from '../list-service';

export default class ListManagerController{
  constructor(private listService: ListService,
              private $state: ng.ui.IStateService,
              private $timeout: ng.ITimeoutService) {
    this.init();
  }

  public lists = [];
  public listId: number = this.$state.params['list'] || 1;
  public selectedList: any;
  public newListName: string = '';

  private init() {
    this.listService.getLists()
      .then((lists) => {
        console.log('lists', lists);
        this.lists = lists;
      }, function (err) {
        console.log('get lists error', err);
      });

    this.listService.getListById(this.listId)
      .then((list) => {
        for (var i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id === this.listId) {
            this.selectList(this.lists[i]);
          }
        }
      });
  }


  // select a list
  public selectList (list) {
    if (list !== this.selectedList) {
      this.selectedList = list;
      this.$state.go('list.view', { list: list.id });
    }
  }

  // add a new list
  public addList (name) {
    if (!name) { return; }

    this.listService.addList(name)
      .then((newList) => {
        this.newListName = '';
        this.lists.push(newList);
        this.selectList(newList);
      });
  }
}