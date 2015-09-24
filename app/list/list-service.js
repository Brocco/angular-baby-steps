function ListService ($http){
  var baseUrl = 'http://localhost:4444/list'

  this.getLists = function() {
    return $http.get(baseUrl)
      .then(function(response){
        return response.data;
      });
  };

  this.getListById = function(id){
    return $http.get(baseUrl + '/' + id)
      .then(function(response) {
        return response.data;
      });
  }

  this.addList = function(name) {
    return $http.post(baseUrl, {name: name})
      .then(function(response) {
        return response.data;
      });
  }

  this.toggleItem = function(item, listId){
    return $http.post(baseUrl + '/' + listId + '/item/' + item.id + '/toggle', {})
      .then(function(response){
        return response.data;
      })
  }

  this.addItem = function(list, name) {
    return $http.post(baseUrl + '/' + list.id + '/item', {name: name})
      .then(function(response) {
        return response.data;
      });
  }
}