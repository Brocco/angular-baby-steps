function ListViewController(listService, $stateParams) {
  var self = this;
  this.listId = $stateParams.list || 1;
  
  this.currentList = listService.getListById(this.listId)
    .then(function(list){
      self.currentList = list;
    });
  
  this.toggleItem = function(item){    
    listService.toggleItem(item, this.listId);
    item.completed = !item.completed;
  }

  this.addItem = function(name){
    if (!name) { return; }
    listService.addItem(this.currentList, name)
      .then(function(newItem) {
        self.newItemName = '';
      });
  }
}