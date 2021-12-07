import {Component, OnInit} from '@angular/core';
import {IFood} from "../../../entity/ifood";
import {ICategory} from "../../../entity/icategory";
import {CategoryService} from "../../../core-module/food/category.service";
import {FoodService} from "../../../core-module/food/food.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../core-module/snackbar/snack-bar.service";

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  foodList: IFood[] | undefined;
  food: IFood | undefined;
  categoryList: ICategory[] | undefined;


  constructor(private categoryService: CategoryService,
              private foodService: FoodService,
              private snackBar: SnackBarService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.findAllCategory().subscribe(category => {
      console.log(category);
      this.categoryList = category;
      console.log(this.categoryList);
    })
  }

}
