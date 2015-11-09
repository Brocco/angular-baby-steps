import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class ListService {
  private baseUrl = 'http://localhost:4444/list';

  constructor(private http: Http){}

  public getLists() {
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }
  // public getLists(): ng.IPromise<any[]> {
  //   return this.http.get(this.baseUrl)
  //     .then(function (response) {
  //       return response.data;
  //     });
  // };

  // public getListById(id) {
  //   return this.http.get(this.baseUrl + '/' + id)
  //     .then(function (response) {
  //       return response.data;
  //     });
  // }

  // public getItems(listId) {
  //   return this.http.get(this.baseUrl + '/' + listId + '/item')
  //     .then(function (response) {
  //       return response.data;
  //     });
  // }

  // public addList(name) {
  //   return this.http.post(this.baseUrl, { name: name })
  //     .then(function (response) {
  //       return response.data;
  //     });
  // }

  // public toggleItem(item, listId) {
  //   return this.http.post(this.baseUrl + '/' + listId + '/item/' + item.id + '/toggle', {})
  //     .then(function (response) {
  //       return response.data;
  //     })
  // }

  // public addItem(listId, name) {
  //   return this.http.post(this.baseUrl + '/' + listId + '/item', { name: name })
  //     .then(function (response) {
  //       return response.data;
  //     });
  // }
}