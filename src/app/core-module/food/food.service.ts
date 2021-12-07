import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFood} from "../../entity/ifood";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url = "http://localhost:8080/api/food"

  constructor(private http: HttpClient) {
  }

  viewAllFood(pageObj: any, name: string, price: number, id: number): Observable<IFood[] | any> {
    return this.http.get(`${this.url}/list?page=${pageObj.page}&size=${pageObj.size}&name=${name}&price=${price}&id=${id}`)
  }
}
