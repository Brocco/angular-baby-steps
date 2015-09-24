function ListManagerController(listService, $state, $timeout) {
  // placeholder for the lists (init to empty array)
  this.lists = [];
  this.listId = $state.params.list || 1;
  this.happyIcon = 'star';
  var self = this;

  function init() {

    listService.getLists()
      .then(function (lists) {
        console.log('lists', lists);
        self.lists = lists;
      }, function (err) {
        console.log('get lists error', err);
      });

    listService.getListById(this.listId)
      .then(function (list) {
        for (var i = 0; i < self.lists.length; i++) {
          if (self.lists[i].id === parseInt(self.listId)) {
            self.selectList(self.lists[i]);
          }
        }
      });
    // var t;
    // var swapHappyIconSrc = function (t) {
    //   if (t) $timeout.cancel(t);
    //   t = $timeout(function () {
    //     if (self.happyIcon === 'insert_emoticon') {
    //       self.happyIcon = 'star';
    //     } else {
    //       self.happyIcon = 'insert_emoticon';
    //     }
    //     swapHappyIconSrc(t);
    //   }, 2000);
    // }
    // swapHappyIconSrc(t);
  }

  // select a list
  this.selectList = function (list) {
    if (list !== this.selectedList) {
      this.selectedList = list;
      $state.go('list.view', { list: list.id });
    }
  }

  // add a new list
  this.addList = function (name) {
    if (!name) { return; }
    listService.addList(name)
      .then(function (newList) {
        self.newListName = '';
        self.lists.push(newList);
        self.selectList(newList);
      });
  }

  this.addItem = function (name) {
    listService.addItem(this.selectedList, name)
      .then(function (newItem) {
        self.newItemName = '';
      });
  }

  init();

}