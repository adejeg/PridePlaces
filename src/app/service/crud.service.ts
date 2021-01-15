import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_url = 'http://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }

  getData(endPoint){
    return this.http.get(this.base_url+endPoint)
  }
}
