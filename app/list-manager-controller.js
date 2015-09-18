function ListManagerController(listService) {
  // placeholder for the lists (init to empty array)
  this.lists = [];

  // function to get the lists from the server
  this.getLists = function() {
    var self = this;
    listService.getLists()
      .then(function(lists) {
        if (lists.length > 0){
          self.selectList(lists[0]);
        }
        self.lists = lists;
      });
  };

  // select a list
  this.selectList = function(list){
    this.selectedList = list;
  }

  // add a new list
  this.addList = function(name){
    var self = this;
    listService.addList(name)
      .then(function(newList) {
        self.newListName = '';
        self.selectList(newList);
      });
  }

  this.addItem = function(name){
    var self = this;
    listService.addItem(this.selectedList, name)
      .then(function(newItem) {
        self.newItemName = '';
      });
  }

  // call get lists for initialization
  this.getLists();
}