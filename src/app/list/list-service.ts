import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class ListService {
  private baseUrl = 'http://localhost:4444/list';

  constructor(private http: Http){}

  public getLists() {
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }

  public getListById(id) {
    return this.http.get(this.baseUrl + '/' + id)
      .map(res => res.json());
  }

  public getItems(listId) {
    return this.http.get(this.baseUrl + '/' + listId + '/item')
      .map(res => res.json());
  }

  public addList(name) {
    return this.http.post(
      this.baseUrl,
      JSON.stringify({ name: name }),
      {headers: new Headers({'Content-Type': 'application/json'})})
      .map(res => res.json());
  }

  public toggleItem(item, listId) {
    return this.http.post(this.baseUrl + '/' + listId + '/item/' + item.id + '/toggle',
      null,
      {headers: new Headers({'Content-Type': 'application/json'})})
      .map(res => res.json());
  }

  public addItem(listId, name) {
    return this.http.post(this.baseUrl + '/' + listId + '/item',
      JSON.stringify({ name: name }),
      {headers: new Headers({'Content-Type': 'application/json'})})
      .map(res => res.json());
  }
}