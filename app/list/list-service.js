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
  
  this.getListById = function(id){
    return this.getLists()
      .then(function(response){
        var data = response.data || response;
        for(var i=0;i<data.length;i++){
          if (data[i].id === parseInt(id)){
            return data[i];
          }
        }
        return undefined;
      });
  }
  
  this.toggleItem = function(item, listId){
    //todo - figure why state doesn't persist.
    return this.getListById(listId)
      .then(function(list){
        for(var i=0;i<list.items.length;i++){          
          if (list.items[i].id === parseInt(item.id)){
            list.items[i].completed = !list.items[i].completed;
            return list.items[i];
          }
        }
        return undefined;
      });
  }

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