import {Component, OnInit} from '@angular/core';
import {IFood} from "../../../entity/ifood";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FoodService} from "../../../core-module/food/food.service";
import {ICategory} from "../../../entity/icategory";

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.scss']
})
export class DetailFoodComponent implements OnInit {

  food: IFood | undefined;
  categoryList: ICategory[] | undefined;

  constructor(private activateRoute: ActivatedRoute,
              private foodService: FoodService,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      const id = +paramMap.get('id');
      this.foodService.detailFood(id).subscribe(next => {
        this.food = next;
      });
    });
  }

  ngOnInit(): void {
  }

  getCategoryList(){}
}
