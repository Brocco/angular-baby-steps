function ListService ($http, $q){
  // keep an inner list (to mock a non-static API)
  var lists;

  // get the list of lists
  this.getLists = function() {
    if (lists){
      return $q.when(lists);
    }
    var self = this;
    return $http.get('data/lists.json')
      .then(function(response){
        self.lists = response.data;
        return self.lists;
      });
  };

  // add a new list
  this.addList = function(name) {
    var newList = { id: this.lists.length + 1, name: name, items: [] };
    this.lists.push(newList);
    return $q.when(newList);
  }

  // add a new item
  this.addItem = function(list, name) {
    var item = { id: list.length + 1, name: name, completed: false };
    list.items.push(item);
    return $q.when(item);
  }
}