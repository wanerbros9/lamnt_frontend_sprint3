import {IOrderDetail} from "./iorder-detail";
import {IAccount} from "./iaccount";

export interface IOrders {
  ordersId: number;
  dateOrders: string;
  orderDetail: IOrderDetail[];
  account: IAccount;
}
