import {Component, OnInit} from '@angular/core';
import {IFood} from "../../entity/ifood";
import {ICategory} from "../../entity/icategory";
import {CategoryService} from "../../core-module/food/category.service";
import {FoodService} from "../../core-module/food/food.service";
import {SnackBarService} from "../../core-module/snackbar/snack-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  foodList: IFood[] | undefined;
  food: IFood | undefined;
  categoryList: ICategory[] | undefined;
  currentPage: number = 0;
  messError = '';
  foodName: string = '';
  foodPrice: number | any = '';
  categoryId: number | any = '';
  oldFoodName: string = '';
  oldFoodPrice: number | any = '';
  oldCategoryId: number | any = -1;
  pageObj: any = {page: 0, size: 6}
  responsePage: any; //tạo biến để nhận giá trị Observable
  totalPages: number = 0;
  totalElement: number = 0;

  constructor(private categoryService: CategoryService,
              private foodService: FoodService,
              private snackBar: SnackBarService,
              private dialog: MatDialog,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getAllCategory();
    console.log(this.foodPrice);
    console.log(this.currentPage);
    console.log(this.foodName);
    console.log(this.foodPrice);
    this.getAllFood(this.currentPage, this.foodName, this.foodPrice, this.categoryId);
    console.log(this.pageObj.page);
  }

  getAllCategory() {
    this.categoryService.findAllCategory().subscribe(category => {
      console.log(category);
      this.categoryList = category;
    })
  }

  getAllFood(page: number, searchFoodName: string, searchFoodPrice: number, searchCategory: number) {
    console.log(this.foodPrice);
    console.log(this.foodName);
    console.log(this.categoryId);
    this.foodService.viewAllFood(page, searchFoodName, searchFoodPrice, searchCategory).subscribe(list => {
      this.foodList = list.content;
      console.log(list);
      this.totalPages = list.totalPages;
      this.currentPage = page;
    }, error => {
      if (error.status == '404') {
        this.snackBar.showSnackBar("cos casi loonf tao", "error");
      }
    })
  }

  previousPage() {
    this.currentPage--;
    if (this.currentPage <= 0) {
      this.currentPage = 0;
    }
    this.ngOnInit();
  }

  nextPage() {
    this.currentPage++;
    if (this.currentPage > this.totalPages - 1) {
      this.currentPage = this.responsePage.totalPages - 1;
    }
    this.ngOnInit();
  }

  getPage(value: string) {
    if (value == null) {
      this.snackBar.showSnackBar("Vui lòng nhập số trang cần tìm", 'error');
    }
    if (Number(value) <= this.responsePage.totalPages && Number(value) > 0 && Number(value) % 1 == 0) {
      this.pageObj['page'] = Number(value) - 1
      console.log(this.pageObj['page'])
      this.getAllFood(this.currentPage, this.foodName, this.foodPrice, this.categoryId);
    } else {
      this.snackBar.showSnackBar("Vui lòng nhập số trang hợp lệ (Tổng số trang: " + this.responsePage.totalPages + ")", 'error');
    }
  }

  getFoodName($event: any) {
    this.foodName = $event.target.value;
  }

  getFoodPrice($event: any) {
    this.foodPrice = $event.target.value;
  }

  getCategoryId($event: any) {
    this.categoryId = $event.target.value;
  }

  detailFood(foodId: number) {
    // @ts-ignore
    for (let food of this.foodList) {
      if (food.foodId == foodId) {
        this.router.navigate(['food/detail/' + foodId]);
        return;
      }
    }
    this.snackBar.showSnackBar("Không tìm thấy món", "error")
  }
}
