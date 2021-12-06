import {IFood} from "./ifood";
import {IOrders} from "./iorders";

export interface IOrderDetail {
  orderFoodId: number;
  quantityFood: number;
  orders: IOrders;
  food: IFood;
}
