import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFood} from "../../entity/ifood";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = "http://localhost:8080/api/food"

  constructor(private http: HttpClient) {
  }

  viewAllFood(currentPage: number, foodName: string, foodPrice: number, categoryId: number): Observable<IFood[] | any> {
    return this.http.get(this.url+'/list?page='+ currentPage
      +'&foodName='+foodName+'&foodPrice='+foodPrice+'&categoryId='+categoryId);
  }

  viewAllFoodNoId(pageObj: any, foodName: string, foodPrice: number): Observable<IFood[] | any> {
    return this.http.get(`${this.url}/list?page=${pageObj.page}&size=${pageObj.size}&foodName=${foodName}&foodPrice=${foodPrice}`);
  }
}
