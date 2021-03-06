import {ICategory} from "./icategory";
import {IOrderDetail} from "./iorder-detail";

export interface IFood {
  foodId: number;
  foodName: string;
  foodImage: string;
  deleteFlag: boolean;
  foodPrice: number;
  foodDescription: string;
  category: ICategory;
  orderDetails: IOrderDetail[];
}
