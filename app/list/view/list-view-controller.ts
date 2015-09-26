function ListViewController(listService, $stateParams) {
  var self = this;
  this.listId = $stateParams.list || 1;

  this.items = listService.getItems(this.listId)
    .then(function (items) {
      self.items = items;
    });

  this.toggleItem = function (item) {
    listService.toggleItem(item, this.listId)
      .then(function (updatedItem) {
        item.completed = updatedItem.completed;
      });
  }

  this.addItem = function (name) {
    if (!name) { return; }
    listService.addItem(this.listId, name)
      .then(function (newItem) {
        self.newItemName = '';
        self.items.push(newItem);
      });
  }
}