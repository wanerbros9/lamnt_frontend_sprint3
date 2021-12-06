import {IAccount} from "./iaccount";

export interface ICustomer {
  customerId: number;
  customerName: string;
  customerBirthday: string;
  customerEmail: string;
  customerGender: boolean;
  customerPhone: string;
  customerAddress: string;
  account: IAccount;
}
