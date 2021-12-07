import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../../entity/icategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8080/api/category'

  constructor(private http: HttpClient) {
  }

  findAllCategory(): Observable<ICategory[] | any>{
    return this.http.get(this.url+'/all')
  }
}
